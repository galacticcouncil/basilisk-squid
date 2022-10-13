import * as hexUtil from '@subsquid/util-internal-hex'
import getRepoInfo from 'git-repo-info'

import {
  BatchBlock,
  BatchContext,
  BatchProcessorItem,
  SubstrateBatchProcessor
} from '@subsquid/substrate-processor'
import { Store, TypeormDatabase } from '@subsquid/typeorm-store'
import { In } from 'typeorm'
import {
  Account,
  HistoricalPoolPriceData,
  LBPPoolData,
  Pool,
  PoolType,
  Transfer
} from './model'

import { isNotNullOrUndefined } from './helpers'
import yargs from 'yargs'
import { parseLBPPoolUpdates } from './transforms/lbpPoolUpdate/index'
import {
  BalancesTransferEvent,
  LbpPoolCreatedEvent,
  TokensTransferEvent,
  XykPoolCreatedEvent
} from './types/types-production/events'
import {
  SystemAccountStorage,
  TokensAccountsStorage
} from './types/types-production/storage'
import { parseParachainSystemValidationData } from './transforms/parachainSystemValidationData/index'

export enum environment {
  local = 'local',
  develop = 'develop',
  rococo = 'rococo',
  production = 'production'
}

type ENV = {
  [K in environment]: {
    archive: string
    chain: string
  }
}

export const DEFAULT_ENV = 'local'

export const argv = yargs()
  .alias('e', 'env')
  .describe('e', 'Set environment to run the indexer for')
  .choices('e', Object.values(environment))
  .help()
  .parseSync(process.argv.slice(2))

export const env: ENV = {
  local: {
    archive: 'http://localhost:8888/graphql',
    chain: 'wss://rpc.hydration.dev'
  },
  develop: {
    archive: 'https://basilisk-devnet-firesquid.play.hydration.cloud/graphql',
    chain: 'wss://rpc.hydration.dev'
  },
  rococo: {
    archive: 'https://basilisk-rococo-firesquid.play.hydration.cloud/graphql',
    chain: 'wss://rococo-basilisk-rpc.hydration.dev/'
  },
  production: {
    archive: 'https://basilisk-firesquid.play.hydration.cloud/graphql',
    chain: 'wss://rpc.basilisk.cloud'
  }
}

const { branch } = getRepoInfo()
const isCi = process.env.CI === 'true'

const currentEnv = (() => {
  if (
    argv.env &&
    Object.values(environment).includes(argv.env as environment)
  ) {
    return environment[argv.env as environment]
    // } else if (
    //   isCi &&
    //   Object.values(environment).includes(branch as environment)
    // ) {
    //   return environment[branch as environment]
  } else if (
    process.env.ENV &&
    Object.values(environment).includes(process.env.ENV as environment)
  ) {
    return environment[process.env.ENV as environment]
  } else return environment[DEFAULT_ENV]
})()

console.log('branch', branch)
console.log('CI', isCi)
console.log('ENV', currentEnv)

const processor = new SubstrateBatchProcessor()
  .setBatchSize(500)
  .setDataSource({
    ...env[currentEnv]
  })
  .addEvent('Balances.Transfer', {
    data: {
      event: {
        args: true,
        extrinsic: {
          hash: true,
          fee: true
        }
      }
    }
  })
  .addEvent('Tokens.Transfer', {
    data: {
      event: {
        args: true,
        extrinsic: {
          hash: true,
          fee: true
        }
      }
    }
  })
  .addEvent('XYK.PoolCreated', {
    data: {
      event: {
        args: true
      }
    }
  })
  .addEvent('LBP.PoolUpdated', {
    data: {
      event: {
        args: true
      }
    }
  })
  .addEvent('LBP.PoolCreated', {
    data: {
      event: {
        args: true
      }
    }
  })
  .addCall('ParachainSystem.set_validation_data', {})

processor.run(new TypeormDatabase(), async (ctx) => {
  const transfersData = getTransfers(ctx)
  const poolsData = await getPools(ctx)
  const lbpPoolsUpdates = await getLBPPoolUpdates(ctx)

  let accountIds = new Set<string>()
  for (let t of transfersData) {
    accountIds.add(t.from)
    accountIds.add(t.to)
  }

  for (let p of poolsData) {
    accountIds.add(p.id)
    if (p.lbpPoolData?.owner) accountIds.add(p.lbpPoolData.owner)
    if (p.lbpPoolData?.feeCollector) accountIds.add(p.lbpPoolData.feeCollector)
  }

  for (let p in lbpPoolsUpdates) {
    accountIds.add(lbpPoolsUpdates[p].owner)
    accountIds.add(lbpPoolsUpdates[p].feeCollector)
  }

  //console.log('WOOO', JSON.stringify(accountIds.entries()))

  let accounts = accountIds
    ? await ctx.store
        .findBy(Account, { id: In([...accountIds]) })
        .then((accounts) => {
          return new Map(accounts.map((a) => [a.id, a]))
        })
    : new Map()

  let transfers: Transfer[] = []

  for (let t of transfersData) {
    let { id, assetId, extrinsicHash, amount, fee, blockNumber } = t

    let from = getAccount(accounts, t.from)
    let to = getAccount(accounts, t.to)

    transfers.push(
      new Transfer({
        id,
        assetId,
        extrinsicHash,
        from,
        to,
        amount,
        fee
      })
    )
  }

  let pools: Pool[] = []
  let lbpPoolsData = new Map<string, LBPPoolData>()

  for (let p of poolsData) {
    let {
      id,
      assetAId,
      assetBId,
      assetABalance,
      assetBBalance,
      poolType,
      createdAt,
      createdAtParaBlock,
      lbpPoolData
    } = p

    if (lbpPoolData) {
      lbpPoolsData.set(
        id,
        new LBPPoolData({
          id: id,
          owner: getAccount(accounts, lbpPoolData.owner),
          feeCollector: getAccount(accounts, lbpPoolData.feeCollector),
          fee: lbpPoolData.fee,
          initialWeight: lbpPoolData.initialWeight,
          finalWeight: lbpPoolData.finalWeight
        })
      )
    }
    pools.push(
      new Pool({
        id: id,
        account: getAccount(accounts, id),
        assetAId,
        assetBId,
        assetABalance,
        assetBBalance,
        createdAt,
        createdAtParaBlock,
        poolType
      })
    )
  }

  const poolsPriceData: HistoricalPoolPriceData[] = []
  const allPools = await ctx.store.find(Pool)
  const poolPriceData = await getPoolPriceData(ctx, allPools)

  for (let p of poolPriceData) {
    poolsPriceData.push(new HistoricalPoolPriceData(p))
  }

  for (let p in lbpPoolsUpdates) {
    const data = lbpPoolsData.get(p)
    const newData = lbpPoolsUpdates[p]

    if (!data) return

    data.owner = getAccount(accounts, newData.owner)
    data.feeCollector = getAccount(accounts, newData.feeCollector)
    data.initialWeight = newData.initialWeight
    data.finalWeight = newData.finalWeight
    data.repayTarget = newData.repayTarget
    data.startBlockNumber = newData.startBlockNumber
    data.endBlockNumber = newData.endBlockNumber
  }

  await ctx.store.save(Array.from(accounts.values()))
  await ctx.store.insert(transfers)
  await ctx.store.save(pools)
  await ctx.store.save(Array.from(lbpPoolsData.values()))
  await ctx.store.insert(poolsPriceData)
})

async function getLBPPoolUpdates(ctx: Ctx) {
  const updates: { [key: string]: LBPPoolDataUpdate } = {}
  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.name == 'LBP.PoolUpdated') {
        const { poolData, poolId } = parseLBPPoolUpdates(ctx, item, currentEnv)
        updates[hexUtil.toHex(poolId)] = poolData
      }
    }
  }
  return updates
}

async function getPoolPriceData(
  ctx: Ctx,
  pools: Pool[]
): Promise<PoolPriceData[]> {
  let poolPrices: Promise<PoolPriceData | null>[] = []
  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.name == 'ParachainSystem.set_validation_data') {
        const { relayChainBlockNumber } = parseParachainSystemValidationData(
          ctx,
          item,
          currentEnv
        )
        const parachainBlockNumber = block.header.height

        poolPrices = poolPrices.concat(
          pools.map(
            async (p) =>
              new Promise<PoolPriceData | null>((resolve) => {
                if (p.createdAtParaBlock > parachainBlockNumber) {
                  resolve(null)
                  return
                }

                Promise.all([
                  getAssetBalance(ctx, block, p.assetAId, p.id),
                  getAssetBalance(ctx, block, p.assetBId, p.id)
                ]).then(([assetABalance, assetBBalance]) => {
                  resolve({
                    id: p.id + '-' + parachainBlockNumber,
                    poolType: p.poolType,
                    assetABalance: assetABalance,
                    assetBBalance: assetBBalance,
                    pool: p,
                    relayChainBlockHeight: relayChainBlockNumber,
                    paraChainBlockHeight: parachainBlockNumber
                  })
                })
              })
          )
        )
      }
    }
  }

  return (await Promise.all(poolPrices)).filter(isNotNullOrUndefined)
}

function getTransfers(ctx: Ctx): TransferEvent[] {
  let transfers: TransferEvent[] = []
  for (let block of ctx.blocks) {
    for (let item of block.items) {
      if (item.name == 'Balances.Transfer') {
        let e = new BalancesTransferEvent(ctx, item.event)
        // TODO: Extract production
        const { from, to, amount } = (() => {
          if (e.isV16) {
            return { from: e.asV16[0], to: e.asV16[1], amount: e.asV16[2] }
          } else return { ...e.asV38 }
        })()
        transfers.push({
          id: item.event.id,
          assetId: 0,
          blockNumber: block.header.height,
          timestamp: new Date(block.header.timestamp),
          extrinsicHash: item.event.extrinsic?.hash,
          from: hexUtil.toHex(from),
          to: hexUtil.toHex(to),
          amount: amount,
          fee: item.event.extrinsic?.fee || 0
        })
      } else if (item.name == 'Tokens.Transfer') {
        let e = new TokensTransferEvent(ctx, item.event)
        //TODO: Extract production
        const { currencyId, from, to, amount } = (() => {
          if (e.isV16) {
            return {
              currencyId: e.asV16[0],
              from: e.asV16[1],
              to: e.asV16[2],
              amount: e.asV16[3]
            }
          } else return { ...e.asV38 }
        })()
        transfers.push({
          id: item.event.id,
          assetId: currencyId,
          blockNumber: block.header.height,
          timestamp: new Date(block.header.timestamp),
          extrinsicHash: item.event.extrinsic?.hash,
          from: hexUtil.toHex(from),
          to: hexUtil.toHex(to),
          amount: amount,
          fee: item.event.extrinsic?.fee || 0
        })
      }
    }
  }
  return transfers
}

async function getPools(ctx: Ctx): Promise<PoolCreatedEvent[]> {
  let pools: PoolCreatedEvent[] = []
  for (let block of ctx.blocks) {
    //if (block.header.height < 127000) continue // TODO TESTNET DEBUG -> REMOVE ME
    for (let item of block.items) {
      if (item.name == 'XYK.PoolCreated') {
        const e = new XykPoolCreatedEvent(ctx, item.event)

        // TODO: Extract production
        const { assetA, assetB, pool } = (() => {
          if (e.isV16) {
            throw new Error('V16 pool not supported')
          } else if (e.isV19) {
            return {
              pool: e.asV19[5],
              assetA: e.asV19[1],
              assetB: e.asV19[2]
            }
          } else return { ...e.asV55 }
        })()

        const assetABalance = await getAssetBalance(
          ctx,
          block,
          assetA,
          hexUtil.toHex(pool)
        )

        const assetBBalance = await getAssetBalance(
          ctx,
          block,
          assetB,
          hexUtil.toHex(pool)
        )

        pools.push({
          id: hexUtil.toHex(pool),
          assetAId: assetA,
          assetBId: assetB,
          assetABalance,
          assetBBalance,
          createdAt: new Date(block.header.timestamp),
          createdAtParaBlock: block.header.height,
          poolType: PoolType.XYK
        })
      } else if (item.name == 'LBP.PoolCreated') {
        const e = new LbpPoolCreatedEvent(ctx, item.event)

        // TODO: Extract production
        const { pool, data } = (() => {
          if (e.isV16 || e.isV25 || e.isV38) {
            throw new Error('Version < V55 LBP pool not supported')
          } else return { ...e.asV55 }
        })()

        const assetABalance = await getAssetBalance(
          ctx,
          block,
          data.assets[0],
          hexUtil.toHex(pool)
        )

        const assetBBalance = await getAssetBalance(
          ctx,
          block,
          data.assets[1],
          hexUtil.toHex(pool)
        )

        pools.push({
          id: hexUtil.toHex(pool),
          assetAId: data.assets[0],
          assetBId: data.assets[1],
          assetABalance,
          assetBBalance,
          createdAt: new Date(block.header.timestamp),
          createdAtParaBlock: block.header.height,
          poolType: PoolType.LBP,
          lbpPoolData: {
            owner: hexUtil.toHex(data.owner),
            feeCollector: hexUtil.toHex(data.feeCollector),
            fee: data.fee,
            initialWeight: data.initialWeight,
            finalWeight: data.finalWeight
          }
        })
      }
    }
  }
  return pools
}

function getAccount(m: Map<string, Account>, id: string): Account {
  let acc = m.get(id)
  if (acc == null) {
    acc = new Account()
    acc.id = id
    m.set(id, acc)
  }
  return acc
}

async function getAssetBalance(
  ctx: Ctx,
  block: BatchBlock<Item>,
  assetId: number,
  account: string
) {
  const acc = hexUtil.decodeHex(account)
  if (assetId === 0) {
    const storage = new SystemAccountStorage(ctx, block.header)
    // TODO: Extract production
    return storage.getAsV16(acc).then((data) => data.data.free)
  } else {
    const storage = new TokensAccountsStorage(ctx, block.header)
    // TODO: Extract production
    if (storage.isV16) {
      return storage.getAsV16(acc, assetId).then((data) => data.free)
    } else return storage.getAsV25(acc, assetId).then((data) => data.free)
  }
}
