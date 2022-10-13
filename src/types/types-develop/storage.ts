import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v78 from './v78'

export class AssetRegistryAssetIdsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Mapping between asset name and asset id.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'AssetIds') === 'b2f6c9709a4d2ff893536be0ecdbcad0fa597aba78428cfcdfc6fef5a1c5414f'
  }

  /**
   *  Mapping between asset name and asset id.
   */
  async getAsV78(key: Uint8Array): Promise<number | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'AssetIds', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(number | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'AssetIds', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(number)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'AssetIds')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'AssetIds') != null
  }
}

export class AssetRegistryAssetLocationsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Native location of an asset.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'AssetLocations') === '58dfe00b72f07bf6cab7f6a9e09ab29eb1bddff4ba0c36924d0917313958bca6'
  }

  /**
   *  Native location of an asset.
   */
  async getAsV78(key: number): Promise<v78.AssetLocation | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'AssetLocations', key)
  }

  async getManyAsV78(keys: number[]): Promise<(v78.AssetLocation | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'AssetLocations', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.AssetLocation)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'AssetLocations')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'AssetLocations') != null
  }
}

export class AssetRegistryAssetMetadataMapStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Metadata of an asset.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'AssetMetadataMap') === 'baeb301fe81822ac12911469e04bf8d093313d49518fd2908c00cbdeff57ab9f'
  }

  /**
   *  Metadata of an asset.
   */
  async getAsV78(key: number): Promise<v78.AssetMetadata | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'AssetMetadataMap', key)
  }

  async getManyAsV78(keys: number[]): Promise<(v78.AssetMetadata | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'AssetMetadataMap', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.AssetMetadata)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'AssetMetadataMap')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'AssetMetadataMap') != null
  }
}

export class AssetRegistryAssetsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Details of an asset.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'Assets') === 'b41077b00f9666bee941bfa5072e6470d7c3f76cc70583e553991180b004e89a'
  }

  /**
   *  Details of an asset.
   */
  async getAsV78(key: number): Promise<v78.AssetDetails | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'Assets', key)
  }

  async getManyAsV78(keys: number[]): Promise<(v78.AssetDetails | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'Assets', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.AssetDetails)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'Assets')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'Assets') != null
  }
}

export class AssetRegistryLocationAssetsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Local asset for native location.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'LocationAssets') === '3c043d5ada7fce2b8b426c49f9b15d1308835a7483919400e4c42d24e95b4193'
  }

  /**
   *  Local asset for native location.
   */
  async getAsV78(key: v78.AssetLocation): Promise<number | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'LocationAssets', key)
  }

  async getManyAsV78(keys: v78.AssetLocation[]): Promise<(number | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'LocationAssets', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(number)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'AssetRegistry', 'LocationAssets')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'LocationAssets') != null
  }
}

export class AssetRegistryNextAssetIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Next available asset id. This is sequential id assigned for each new registered asset.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'NextAssetId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Next available asset id. This is sequential id assigned for each new registered asset.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'AssetRegistry', 'NextAssetId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('AssetRegistry', 'NextAssetId') != null
  }
}

export class AuthorshipAuthorStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Author of current block.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Authorship', 'Author') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  Author of current block.
   */
  async getAsV78(): Promise<Uint8Array | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Authorship', 'Author')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Authorship', 'Author') != null
  }
}

export class AuthorshipDidSetUnclesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Whether uncles were already set in this block.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Authorship', 'DidSetUncles') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Whether uncles were already set in this block.
   */
  async getAsV78(): Promise<boolean> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Authorship', 'DidSetUncles')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Authorship', 'DidSetUncles') != null
  }
}

export class AuthorshipUnclesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Uncles
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Authorship', 'Uncles') === '320be201dc467df78c8912d3a5ad0cb57cd9b25ab8bff2e738597ffc0a83b551'
  }

  /**
   *  Uncles
   */
  async getAsV78(): Promise<v78.UncleEntryItem[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Authorship', 'Uncles')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Authorship', 'Uncles') != null
  }
}

export class BalancesAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The Balances pallet example of storing the balance of an account.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
   *   }
   *  ```
   * 
   *  You can also store the balance of an account in the `System` pallet.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *    type AccountStore = System
   *   }
   *  ```
   * 
   *  But this comes with tradeoffs, storing account balances in the system pallet stores
   *  `frame_system` data alongside the account data contrary to storing account balances in the
   *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
  }

  /**
   *  The Balances pallet example of storing the balance of an account.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
   *   }
   *  ```
   * 
   *  You can also store the balance of an account in the `System` pallet.
   * 
   *  # Example
   * 
   *  ```nocompile
   *   impl pallet_balances::Config for Runtime {
   *    type AccountStore = System
   *   }
   *  ```
   * 
   *  But this comes with tradeoffs, storing account balances in the system pallet stores
   *  `frame_system` data alongside the account data contrary to storing account balances in the
   *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
   *  NOTE: This is only used in the case that this pallet is used to store balances.
   */
  async getAsV78(key: Uint8Array): Promise<v78.AccountData> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Account', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.AccountData)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.AccountData)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Account')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Account') != null
  }
}

export class BalancesLocksStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Any liquidity locks on some account balances.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Balances', 'Locks') === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
  }

  /**
   *  Any liquidity locks on some account balances.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  async getAsV78(key: Uint8Array): Promise<v78.BalanceLock[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Locks', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.BalanceLock[])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Locks', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.BalanceLock[])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Locks')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Locks') != null
  }
}

export class BalancesReservesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Named reserves on some account balances.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Balances', 'Reserves') === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
  }

  /**
   *  Named reserves on some account balances.
   */
  async getAsV78(key: Uint8Array): Promise<v78.ReserveData[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Balances', 'Reserves', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.ReserveData[])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Reserves', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.ReserveData[])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Balances', 'Reserves')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'Reserves') != null
  }
}

export class BalancesStorageVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Balances', 'StorageVersion') === '1431e80ffaa4d10a7fe714faa381ada05c3baae7e12aa80f24f8728a41ba57c4'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  This is set to v2.0.0 for new networks.
   */
  async getAsV78(): Promise<v78.Releases> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Balances', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'StorageVersion') != null
  }
}

export class BalancesTotalIssuanceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The total units issued in the system.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV78(): Promise<bigint> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
  }
}

export class CollatorSelectionCandidacyBondStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Fixed amount to deposit to become a collator.
   * 
   *  When a collator calls `leave_intent` they immediately receive the deposit back.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'CandidacyBond') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  Fixed amount to deposit to become a collator.
   * 
   *  When a collator calls `leave_intent` they immediately receive the deposit back.
   */
  async getAsV78(): Promise<bigint> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'CollatorSelection', 'CandidacyBond')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'CandidacyBond') != null
  }
}

export class CollatorSelectionCandidatesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The (community, limited) collation candidates.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'Candidates') === '239ae5a83674078569642b29549b6d89d616b5748799fde8f01f3356f32141fd'
  }

  /**
   *  The (community, limited) collation candidates.
   */
  async getAsV78(): Promise<v78.CandidateInfo[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'CollatorSelection', 'Candidates')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'Candidates') != null
  }
}

export class CollatorSelectionDesiredCandidatesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Desired number of candidates.
   * 
   *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'DesiredCandidates') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Desired number of candidates.
   * 
   *  This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'CollatorSelection', 'DesiredCandidates')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'DesiredCandidates') != null
  }
}

export class CollatorSelectionInvulnerablesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The invulnerable, fixed collators.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'Invulnerables') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The invulnerable, fixed collators.
   */
  async getAsV78(): Promise<Uint8Array[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'CollatorSelection', 'Invulnerables')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'Invulnerables') != null
  }
}

export class CollatorSelectionLastAuthoredBlockStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Last block authored by collator.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'LastAuthoredBlock') === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
  }

  /**
   *  Last block authored by collator.
   */
  async getAsV78(key: Uint8Array): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'CollatorSelection', 'LastAuthoredBlock', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(number)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'CollatorSelection', 'LastAuthoredBlock', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(number)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'CollatorSelection', 'LastAuthoredBlock')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('CollatorSelection', 'LastAuthoredBlock') != null
  }
}

export class CouncilMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Council', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV78(): Promise<Uint8Array[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Council', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'Members') != null
  }
}

export class CouncilPrimeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Council', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  async getAsV78(): Promise<Uint8Array | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Council', 'Prime')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'Prime') != null
  }
}

export class CouncilProposalCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals so far.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalCount') != null
  }
}

export class CouncilProposalOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '903b8a779d9c06ee10ee923cda677d0736114abb93b2b73a97ea7c7cbce3f0bf'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV78(key: Uint8Array): Promise<v78.Call | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Council', 'ProposalOf', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.Call | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.Call)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Council', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'ProposalOf') != null
  }
}

export class CouncilProposalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The hashes of the active proposals.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Council', 'Proposals') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The hashes of the active proposals.
   */
  async getAsV78(): Promise<Uint8Array[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Council', 'Proposals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'Proposals') != null
  }
}

export class CouncilVotingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Council', 'Voting') === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  async getAsV78(key: Uint8Array): Promise<v78.Votes | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Council', 'Voting', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.Votes | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Council', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.Votes)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Council', 'Voting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Council', 'Voting') != null
  }
}

export class DemocracyBlacklistStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A record of who vetoed what. Maps proposal hash to a possible existent block number
   *  (until when it may not be resubmitted) and who vetoed it.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Blacklist') === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
  }

  /**
   *  A record of who vetoed what. Maps proposal hash to a possible existent block number
   *  (until when it may not be resubmitted) and who vetoed it.
   */
  async getAsV78(key: Uint8Array): Promise<[number, Uint8Array[]] | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Blacklist', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<([number, Uint8Array[]] | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Blacklist', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<([number, Uint8Array[]])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Blacklist')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Blacklist') != null
  }
}

export class DemocracyCancellationsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Record of all proposals that have been subject to emergency cancellation.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Cancellations') === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
  }

  /**
   *  Record of all proposals that have been subject to emergency cancellation.
   */
  async getAsV78(key: Uint8Array): Promise<boolean> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Cancellations', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(boolean)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Cancellations', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(boolean)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Cancellations')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Cancellations') != null
  }
}

export class DemocracyDepositOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Those who have locked a deposit.
   * 
   *  TWOX-NOTE: Safe, as increasing integer keys are safe.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Democracy', 'DepositOf') === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
  }

  /**
   *  Those who have locked a deposit.
   * 
   *  TWOX-NOTE: Safe, as increasing integer keys are safe.
   */
  async getAsV78(key: number): Promise<[Uint8Array[], bigint] | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'DepositOf', key)
  }

  async getManyAsV78(keys: number[]): Promise<([Uint8Array[], bigint] | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'DepositOf', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<([Uint8Array[], bigint])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'DepositOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'DepositOf') != null
  }
}

export class DemocracyLastTabledWasExternalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if the last referendum tabled was submitted externally. False if it was a public
   *  proposal.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Democracy', 'LastTabledWasExternal') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if the last referendum tabled was submitted externally. False if it was a public
   *  proposal.
   */
  async getAsV78(): Promise<boolean> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'LastTabledWasExternal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'LastTabledWasExternal') != null
  }
}

export class DemocracyLowestUnbakedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The lowest referendum index representing an unbaked referendum. Equal to
   *  `ReferendumCount` if there isn't a unbaked referendum.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Democracy', 'LowestUnbaked') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The lowest referendum index representing an unbaked referendum. Equal to
   *  `ReferendumCount` if there isn't a unbaked referendum.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'LowestUnbaked')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'LowestUnbaked') != null
  }
}

export class DemocracyNextExternalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The referendum to be tabled whenever it would be valid to table an external proposal.
   *  This happens when a referendum needs to be tabled and one of two conditions are met:
   *  - `LastTabledWasExternal` is `false`; or
   *  - `PublicProps` is empty.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Democracy', 'NextExternal') === 'a0dc59850ecbf888b39265215bce88e2141aafdd4f4300c99be6819a82e4ef15'
  }

  /**
   *  The referendum to be tabled whenever it would be valid to table an external proposal.
   *  This happens when a referendum needs to be tabled and one of two conditions are met:
   *  - `LastTabledWasExternal` is `false`; or
   *  - `PublicProps` is empty.
   */
  async getAsV78(): Promise<[Uint8Array, v78.VoteThreshold] | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'NextExternal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'NextExternal') != null
  }
}

export class DemocracyPreimagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV78(key: Uint8Array): Promise<v78.PreimageStatus | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'Preimages', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.PreimageStatus | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.PreimageStatus)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'Preimages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'Preimages') != null
  }
}

export class DemocracyPublicPropCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'PublicPropCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') != null
  }
}

export class DemocracyPublicPropsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV78(): Promise<[number, Uint8Array, Uint8Array][]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'PublicProps')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'PublicProps') != null
  }
}

export class DemocracyReferendumCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The next free referendum index, aka the number of referenda started so far.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The next free referendum index, aka the number of referenda started so far.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumCount') != null
  }
}

export class DemocracyReferendumInfoOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV78(key: number): Promise<v78.ReferendumInfo | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', key)
  }

  async getManyAsV78(keys: number[]): Promise<(v78.ReferendumInfo | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.ReferendumInfo)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'ReferendumInfoOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') != null
  }
}

export class DemocracyStorageVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Democracy', 'StorageVersion') === '6db8ed5d5df9fd63b90aeccdc02dcd10fe08fc684dc39aff8104b09be9ab54e9'
  }

  /**
   *  Storage version of the pallet.
   * 
   *  New networks start with last version.
   */
  async getAsV78(): Promise<v78.Type_342 | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'StorageVersion') != null
  }
}

export class DemocracyVotingOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All votes for a particular voter. We store the balance for the number of votes that we
   *  have recorded. The second item is the total amount of delegations, that will be added.
   * 
   *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Democracy', 'VotingOf') === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
  }

  /**
   *  All votes for a particular voter. We store the balance for the number of votes that we
   *  have recorded. The second item is the total amount of delegations, that will be added.
   * 
   *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
   */
  async getAsV78(key: Uint8Array): Promise<v78.Voting> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Democracy', 'VotingOf', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.Voting)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VotingOf', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.Voting)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Democracy', 'VotingOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Democracy', 'VotingOf') != null
  }
}

export class DmpQueueConfigurationStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The configuration.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Configuration') === 'de2fc633d896ffed21e1f630f0a1bfe710ecfa69921c58a4a758e7fd49d0b5a4'
  }

  /**
   *  The configuration.
   */
  async getAsV78(): Promise<v78.ConfigData> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'DmpQueue', 'Configuration')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Configuration') != null
  }
}

export class DmpQueueOverweightStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The overweight messages.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Overweight') === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
  }

  /**
   *  The overweight messages.
   */
  async getAsV78(key: bigint): Promise<[number, Uint8Array] | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'DmpQueue', 'Overweight', key)
  }

  async getManyAsV78(keys: bigint[]): Promise<([number, Uint8Array] | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'DmpQueue', 'Overweight', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<([number, Uint8Array])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'DmpQueue', 'Overweight')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Overweight') != null
  }
}

export class DmpQueuePageIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The page index.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'PageIndex') === 'cad43146ccd742f66da886b2f77b13d96d2c4de637fbb965a7493a2f16c99189'
  }

  /**
   *  The page index.
   */
  async getAsV78(): Promise<v78.PageIndexData> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'DmpQueue', 'PageIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'PageIndex') != null
  }
}

export class DmpQueuePagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The queue pages.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Pages') === '0b9460c8234ca1e6341c95066d20ac8d7e79e3a9b2def20c9450f88ef0ab1b1d'
  }

  /**
   *  The queue pages.
   */
  async getAsV78(key: number): Promise<[number, Uint8Array][]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'DmpQueue', 'Pages', key)
  }

  async getManyAsV78(keys: number[]): Promise<([number, Uint8Array][])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'DmpQueue', 'Pages', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<([number, Uint8Array][])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'DmpQueue', 'Pages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('DmpQueue', 'Pages') != null
  }
}

export class DusterAccountBlacklistStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Accounts excluded from dusting.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Duster', 'AccountBlacklist') === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
  }

  /**
   *  Accounts excluded from dusting.
   */
  async getAsV78(key: Uint8Array): Promise<null | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Duster', 'AccountBlacklist', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(null | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Duster', 'AccountBlacklist', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(null)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Duster', 'AccountBlacklist')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Duster', 'AccountBlacklist') != null
  }
}

export class DusterDustAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Account to send dust to.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Duster', 'DustAccount') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  Account to send dust to.
   */
  async getAsV78(): Promise<Uint8Array | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Duster', 'DustAccount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Duster', 'DustAccount') != null
  }
}

export class DusterRewardAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Account to take reward from.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Duster', 'RewardAccount') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  Account to take reward from.
   */
  async getAsV78(): Promise<Uint8Array | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Duster', 'RewardAccount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Duster', 'RewardAccount') != null
  }
}

export class ElectionsCandidatesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The present candidate list. A current member or runner-up can never enter this vector
   *  and is always implicitly assumed to be a candidate.
   * 
   *  Second element is the deposit.
   * 
   *  Invariant: Always sorted based on account id.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Elections', 'Candidates') === 'adcae43ed1e902c328abdddddb49e0dff8ba91c01e22ef88c186fdf0463008bd'
  }

  /**
   *  The present candidate list. A current member or runner-up can never enter this vector
   *  and is always implicitly assumed to be a candidate.
   * 
   *  Second element is the deposit.
   * 
   *  Invariant: Always sorted based on account id.
   */
  async getAsV78(): Promise<[Uint8Array, bigint][]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Elections', 'Candidates')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Elections', 'Candidates') != null
  }
}

export class ElectionsElectionRoundsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The total number of vote rounds that have happened, excluding the upcoming one.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Elections', 'ElectionRounds') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The total number of vote rounds that have happened, excluding the upcoming one.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Elections', 'ElectionRounds')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Elections', 'ElectionRounds') != null
  }
}

export class ElectionsMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current elected members.
   * 
   *  Invariant: Always sorted based on account id.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Elections', 'Members') === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
  }

  /**
   *  The current elected members.
   * 
   *  Invariant: Always sorted based on account id.
   */
  async getAsV78(): Promise<v78.SeatHolder[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Elections', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Elections', 'Members') != null
  }
}

export class ElectionsRunnersUpStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current reserved runners-up.
   * 
   *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
   *  last (i.e. _best_) runner-up will be replaced.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Elections', 'RunnersUp') === '96573f8db54011fa114a08a47adbe9aee03d3835efd86f475863db52e5359231'
  }

  /**
   *  The current reserved runners-up.
   * 
   *  Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
   *  last (i.e. _best_) runner-up will be replaced.
   */
  async getAsV78(): Promise<v78.SeatHolder[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Elections', 'RunnersUp')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Elections', 'RunnersUp') != null
  }
}

export class ElectionsVotingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Votes and locked stake of a particular voter.
   * 
   *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Elections', 'Voting') === '402dfebd0f940ad46e7a8f40f06109618105f99668e323b7a2f66bb12e66e352'
  }

  /**
   *  Votes and locked stake of a particular voter.
   * 
   *  TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
   */
  async getAsV78(key: Uint8Array): Promise<v78.Voter> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Elections', 'Voting', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.Voter)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Elections', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.Voter)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Elections', 'Voting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Elections', 'Voting') != null
  }
}

export class ExchangeExchangeAssetsIntentionCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Intention count for current block
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Exchange', 'ExchangeAssetsIntentionCount') === '41d107d8804760c60452c36f4677b29c987678b8fec179ecaec1902539deb294'
  }

  /**
   *  Intention count for current block
   */
  async getAsV78(key: [number, number]): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Exchange', 'ExchangeAssetsIntentionCount', key)
  }

  async getManyAsV78(keys: [number, number][]): Promise<(number)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Exchange', 'ExchangeAssetsIntentionCount', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(number)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Exchange', 'ExchangeAssetsIntentionCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Exchange', 'ExchangeAssetsIntentionCount') != null
  }
}

export class ExchangeExchangeAssetsIntentionsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Registered intentions for current block
   *  Stored as ( asset_a, asset_b ) combination where asset_a is meant to be exchanged for asset_b ( asset_a < asset_b)
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Exchange', 'ExchangeAssetsIntentions') === '98fb8bb6c24167c2ed5183d81bf3806a67b356a9eb4cdb6da1d7f9c83be96858'
  }

  /**
   *  Registered intentions for current block
   *  Stored as ( asset_a, asset_b ) combination where asset_a is meant to be exchanged for asset_b ( asset_a < asset_b)
   */
  async getAsV78(key: [number, number]): Promise<v78.ExchangeIntention[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Exchange', 'ExchangeAssetsIntentions', key)
  }

  async getManyAsV78(keys: [number, number][]): Promise<(v78.ExchangeIntention[])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Exchange', 'ExchangeAssetsIntentions', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.ExchangeIntention[])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Exchange', 'ExchangeAssetsIntentions')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Exchange', 'ExchangeAssetsIntentions') != null
  }
}

export class IdentityIdentityOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Information that is pertinent to identify the entity behind an account.
   * 
   *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Identity', 'IdentityOf') === 'eee9529c5197f7a5f8200e155d78bab0a612de49bd6c8941e539265edf54c3aa'
  }

  /**
   *  Information that is pertinent to identify the entity behind an account.
   * 
   *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
   */
  async getAsV78(key: Uint8Array): Promise<v78.Registration | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Identity', 'IdentityOf', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.Registration | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'IdentityOf', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.Registration)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'IdentityOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Identity', 'IdentityOf') != null
  }
}

export class IdentityRegistrarsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The set of registrars. Not expected to get very big as can only be added through a
   *  special origin (likely a council motion).
   * 
   *  The index into this can be cast to `RegistrarIndex` to get a valid value.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Identity', 'Registrars') === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
  }

  /**
   *  The set of registrars. Not expected to get very big as can only be added through a
   *  special origin (likely a council motion).
   * 
   *  The index into this can be cast to `RegistrarIndex` to get a valid value.
   */
  async getAsV78(): Promise<(v78.RegistrarInfo | undefined)[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Identity', 'Registrars')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Identity', 'Registrars') != null
  }
}

export class IdentitySubsOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Alternative "sub" identities of this account.
   * 
   *  The first item is the deposit, the second is a vector of the accounts.
   * 
   *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Identity', 'SubsOf') === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
  }

  /**
   *  Alternative "sub" identities of this account.
   * 
   *  The first item is the deposit, the second is a vector of the accounts.
   * 
   *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
   */
  async getAsV78(key: Uint8Array): Promise<[bigint, Uint8Array[]]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Identity', 'SubsOf', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<([bigint, Uint8Array[]])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'SubsOf', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<([bigint, Uint8Array[]])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'SubsOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Identity', 'SubsOf') != null
  }
}

export class IdentitySuperOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The super-identity of an alternative "sub" identity together with its name, within that
   *  context. If the account is not some other account's sub-identity, then just `None`.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Identity', 'SuperOf') === '3e2404306f316847b5946856f8222df193ecb9ace5e509cd9f8808145fd9b792'
  }

  /**
   *  The super-identity of an alternative "sub" identity together with its name, within that
   *  context. If the account is not some other account's sub-identity, then just `None`.
   */
  async getAsV78(key: Uint8Array): Promise<[Uint8Array, v78.Data] | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Identity', 'SuperOf', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<([Uint8Array, v78.Data] | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'SuperOf', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<([Uint8Array, v78.Data])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Identity', 'SuperOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Identity', 'SuperOf') != null
  }
}

export class LBPFeeCollectorWithAssetStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Storage used for tracking existing fee collectors
   *  Not more than one fee collector per asset possible
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('LBP', 'FeeCollectorWithAsset') === 'ebdf043edab397a5ed3d655551fad928a7307d1bde214adf993157ad9d1521e0'
  }

  /**
   *  Storage used for tracking existing fee collectors
   *  Not more than one fee collector per asset possible
   */
  async getAsV78(key1: Uint8Array, key2: number): Promise<boolean> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'LBP', 'FeeCollectorWithAsset', key1, key2)
  }

  async getManyAsV78(keys: [Uint8Array, number][]): Promise<(boolean)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'LBP', 'FeeCollectorWithAsset', keys)
  }

  async getAllAsV78(): Promise<(boolean)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'LBP', 'FeeCollectorWithAsset')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LBP', 'FeeCollectorWithAsset') != null
  }
}

export class LBPPoolDataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Details of a pool.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('LBP', 'PoolData') === '122378a7b6f80edd2b209a84c4ae915782df86cf92d66d0932085716a7dbccf9'
  }

  /**
   *  Details of a pool.
   */
  async getAsV78(key: Uint8Array): Promise<v78.Pool | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'LBP', 'PoolData', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.Pool | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'LBP', 'PoolData', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.Pool)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'LBP', 'PoolData')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('LBP', 'PoolData') != null
  }
}

export class MarketplaceMarketplaceInstancesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Stores Marketplace info
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Marketplace', 'MarketplaceInstances') === '0b32a4fd1061c4591a526e2f7beddcab1e709b87ccc64182c0c1d19fdf718abd'
  }

  /**
   *  Stores Marketplace info
   */
  async getAsV78(key1: bigint, key2: bigint): Promise<v78.Royalty | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Marketplace', 'MarketplaceInstances', key1, key2)
  }

  async getManyAsV78(keys: [bigint, bigint][]): Promise<(v78.Royalty | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Marketplace', 'MarketplaceInstances', keys)
  }

  async getAllAsV78(): Promise<(v78.Royalty)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Marketplace', 'MarketplaceInstances')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Marketplace', 'MarketplaceInstances') != null
  }
}

export class MarketplaceOffersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Stores offer info
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Marketplace', 'Offers') === '3f58318baf55451d4557850a495785a0bf8f8be774aada4e44650361d075dc91'
  }

  /**
   *  Stores offer info
   */
  async getAsV78(key1: [bigint, bigint], key2: Uint8Array): Promise<v78.Offer | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Marketplace', 'Offers', key1, key2)
  }

  async getManyAsV78(keys: [[bigint, bigint], Uint8Array][]): Promise<(v78.Offer | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Marketplace', 'Offers', keys)
  }

  async getAllAsV78(): Promise<(v78.Offer)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Marketplace', 'Offers')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Marketplace', 'Offers') != null
  }
}

export class MarketplacePricesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Stores token info
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Marketplace', 'Prices') === '6171308606be5e36859904603d84665b2843b644cf5292eff2e75efc57206ab0'
  }

  /**
   *  Stores token info
   */
  async getAsV78(key1: bigint, key2: bigint): Promise<bigint | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Marketplace', 'Prices', key1, key2)
  }

  async getManyAsV78(keys: [bigint, bigint][]): Promise<(bigint | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Marketplace', 'Prices', keys)
  }

  async getAllAsV78(): Promise<(bigint)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Marketplace', 'Prices')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Marketplace', 'Prices') != null
  }
}

export class MultiTransactionPaymentAcceptedCurrenciesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Curated list of currencies which fees can be paid mapped to corresponding fallback price
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('MultiTransactionPayment', 'AcceptedCurrencies') === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
  }

  /**
   *  Curated list of currencies which fees can be paid mapped to corresponding fallback price
   */
  async getAsV78(key: number): Promise<bigint | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'MultiTransactionPayment', 'AcceptedCurrencies', key)
  }

  async getManyAsV78(keys: number[]): Promise<(bigint | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'MultiTransactionPayment', 'AcceptedCurrencies', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(bigint)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'MultiTransactionPayment', 'AcceptedCurrencies')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiTransactionPayment', 'AcceptedCurrencies') != null
  }
}

export class MultiTransactionPaymentAcceptedCurrencyPriceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Asset prices from the spot price provider or the fallback price if the price is not available. Updated at the beginning of every block.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('MultiTransactionPayment', 'AcceptedCurrencyPrice') === '3780d76d37a3d09046e926a777def6003178c440a915a931a34a74b88a4094a5'
  }

  /**
   *  Asset prices from the spot price provider or the fallback price if the price is not available. Updated at the beginning of every block.
   */
  async getAsV78(key: number): Promise<bigint | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'MultiTransactionPayment', 'AcceptedCurrencyPrice', key)
  }

  async getManyAsV78(keys: number[]): Promise<(bigint | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'MultiTransactionPayment', 'AcceptedCurrencyPrice', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(bigint)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'MultiTransactionPayment', 'AcceptedCurrencyPrice')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiTransactionPayment', 'AcceptedCurrencyPrice') != null
  }
}

export class MultiTransactionPaymentAccountCurrencyMapStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Account currency map
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('MultiTransactionPayment', 'AccountCurrencyMap') === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
  }

  /**
   *  Account currency map
   */
  async getAsV78(key: Uint8Array): Promise<number | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'MultiTransactionPayment', 'AccountCurrencyMap', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(number | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'MultiTransactionPayment', 'AccountCurrencyMap', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(number)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'MultiTransactionPayment', 'AccountCurrencyMap')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('MultiTransactionPayment', 'AccountCurrencyMap') != null
  }
}

export class MultisigCallsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV78() {
    return this._chain.getStorageItemTypeHash('Multisig', 'Calls') === 'f2c625a45f7e4212d08a35de621ee69426ec65ab8200e29512887abb064620ab'
  }

  async getAsV78(key: Uint8Array): Promise<[Uint8Array, Uint8Array, bigint] | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Multisig', 'Calls', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<([Uint8Array, Uint8Array, bigint] | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Multisig', 'Calls', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<([Uint8Array, Uint8Array, bigint])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Multisig', 'Calls')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Multisig', 'Calls') != null
  }
}

export class MultisigMultisigsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The set of open multisig operations.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Multisig', 'Multisigs') === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
  }

  /**
   *  The set of open multisig operations.
   */
  async getAsV78(key1: Uint8Array, key2: Uint8Array): Promise<v78.Multisig | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Multisig', 'Multisigs', key1, key2)
  }

  async getManyAsV78(keys: [Uint8Array, Uint8Array][]): Promise<(v78.Multisig | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Multisig', 'Multisigs', keys)
  }

  async getAllAsV78(): Promise<(v78.Multisig)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Multisig', 'Multisigs')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Multisig', 'Multisigs') != null
  }
}

export class NFTClassesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Stores class info
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('NFT', 'Classes') === 'b54bfb9304ad7cfffb67fe42834b827a2e7375c8ac371ff001f284424c0aa6d2'
  }

  /**
   *  Stores class info
   */
  async getAsV78(key: bigint): Promise<v78.ClassInfo | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'NFT', 'Classes', key)
  }

  async getManyAsV78(keys: bigint[]): Promise<(v78.ClassInfo | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'NFT', 'Classes', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.ClassInfo)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'NFT', 'Classes')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NFT', 'Classes') != null
  }
}

export class NFTInstancesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Stores instance info
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('NFT', 'Instances') === '873e9356d599039c4394718673bd5ff92fb310e018cc20443389ba4e4241e7c9'
  }

  /**
   *  Stores instance info
   */
  async getAsV78(key1: bigint, key2: bigint): Promise<v78.InstanceInfo | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'NFT', 'Instances', key1, key2)
  }

  async getManyAsV78(keys: [bigint, bigint][]): Promise<(v78.InstanceInfo | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'NFT', 'Instances', keys)
  }

  async getAllAsV78(): Promise<(v78.InstanceInfo)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'NFT', 'Instances')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('NFT', 'Instances') != null
  }
}

export class ParachainInfoParachainIdStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainInfo', 'ParachainId') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainInfo', 'ParachainId')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainInfo', 'ParachainId') != null
  }
}

export class ParachainSystemAnnouncedHrmpMessagesPerCandidateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
   *  announcing the weight of `on_initialize` and `on_finalize`.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'AnnouncedHrmpMessagesPerCandidate') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
   *  announcing the weight of `on_initialize` and `on_finalize`.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'AnnouncedHrmpMessagesPerCandidate')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'AnnouncedHrmpMessagesPerCandidate') != null
  }
}

export class ParachainSystemAuthorizedUpgradeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The next authorized upgrade, if there is one.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'AuthorizedUpgrade') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The next authorized upgrade, if there is one.
   */
  async getAsV78(): Promise<Uint8Array | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'AuthorizedUpgrade')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'AuthorizedUpgrade') != null
  }
}

export class ParachainSystemCustomValidationHeadDataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  A custom head data that should be returned as result of `validate_block`.
   * 
   *  See [`Pallet::set_custom_validation_head_data`] for more information.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'CustomValidationHeadData') === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
  }

  /**
   *  A custom head data that should be returned as result of `validate_block`.
   * 
   *  See [`Pallet::set_custom_validation_head_data`] for more information.
   */
  async getAsV78(): Promise<Uint8Array | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'CustomValidationHeadData')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'CustomValidationHeadData') != null
  }
}

export class ParachainSystemDidSetValidationCodeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Were the validation data set to notify the relay chain?
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'DidSetValidationCode') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Were the validation data set to notify the relay chain?
   */
  async getAsV78(): Promise<boolean> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'DidSetValidationCode')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'DidSetValidationCode') != null
  }
}

export class ParachainSystemHostConfigurationStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The parachain host configuration that was obtained from the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HostConfiguration') === '76792d33ff147d490bc5f8e4454e476c4ef71aae7021fd1a44f96974f263af9b'
  }

  /**
   *  The parachain host configuration that was obtained from the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  async getAsV78(): Promise<v78.V1AbridgedHostConfiguration | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'HostConfiguration')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HostConfiguration') != null
  }
}

export class ParachainSystemHrmpOutboundMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  HRMP messages that were sent in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HrmpOutboundMessages') === '0330a7423804895204dc06607d196d45bbec59edfd3f4f38c868daa9e880928c'
  }

  /**
   *  HRMP messages that were sent in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  async getAsV78(): Promise<v78.OutboundHrmpMessage[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'HrmpOutboundMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HrmpOutboundMessages') != null
  }
}

export class ParachainSystemHrmpWatermarkStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  HRMP watermark that was set in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HrmpWatermark') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  HRMP watermark that was set in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'HrmpWatermark')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'HrmpWatermark') != null
  }
}

export class ParachainSystemLastDmqMqcHeadStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The last downward message queue chain head we have observed.
   * 
   *  This value is loaded before and saved after processing inbound downward messages carried
   *  by the system inherent.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastDmqMqcHead') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  The last downward message queue chain head we have observed.
   * 
   *  This value is loaded before and saved after processing inbound downward messages carried
   *  by the system inherent.
   */
  async getAsV78(): Promise<Uint8Array> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'LastDmqMqcHead')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastDmqMqcHead') != null
  }
}

export class ParachainSystemLastHrmpMqcHeadsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The message queue chain heads we have observed per each channel incoming channel.
   * 
   *  This value is loaded before and saved after processing inbound downward messages carried
   *  by the system inherent.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastHrmpMqcHeads') === '26057692e067e44d8eec686a8711f8b87a11679701c3afa133f7b9da8f327999'
  }

  /**
   *  The message queue chain heads we have observed per each channel incoming channel.
   * 
   *  This value is loaded before and saved after processing inbound downward messages carried
   *  by the system inherent.
   */
  async getAsV78(): Promise<[number, Uint8Array][]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'LastHrmpMqcHeads')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'LastHrmpMqcHeads') != null
  }
}

export class ParachainSystemNewValidationCodeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Validation code that is set by the parachain and is to be communicated to collator and
   *  consequently the relay-chain.
   * 
   *  This will be cleared in `on_initialize` of each new block if no other pallet already set
   *  the value.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'NewValidationCode') === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
  }

  /**
   *  Validation code that is set by the parachain and is to be communicated to collator and
   *  consequently the relay-chain.
   * 
   *  This will be cleared in `on_initialize` of each new block if no other pallet already set
   *  the value.
   */
  async getAsV78(): Promise<Uint8Array | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'NewValidationCode')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'NewValidationCode') != null
  }
}

export class ParachainSystemPendingUpwardMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Upward messages that are still pending and not yet send to the relay chain.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingUpwardMessages') === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
  }

  /**
   *  Upward messages that are still pending and not yet send to the relay chain.
   */
  async getAsV78(): Promise<Uint8Array[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'PendingUpwardMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingUpwardMessages') != null
  }
}

export class ParachainSystemPendingValidationCodeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
   * 
   *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
   *  which will result the next block process with the new validation code. This concludes the upgrade process.
   * 
   *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingValidationCode') === '8199405308c9981e32f632f64a8758ba69af0e625da26ff6d6670b81cc1f1647'
  }

  /**
   *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
   * 
   *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
   *  which will result the next block process with the new validation code. This concludes the upgrade process.
   * 
   *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
   */
  async getAsV78(): Promise<Uint8Array> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'PendingValidationCode')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'PendingValidationCode') != null
  }
}

export class ParachainSystemProcessedDownwardMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Number of downward messages processed in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ProcessedDownwardMessages') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Number of downward messages processed in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ProcessedDownwardMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ProcessedDownwardMessages') != null
  }
}

export class ParachainSystemRelevantMessagingStateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The snapshot of some state related to messaging relevant to the current parachain as per
   *  the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'RelevantMessagingState') === '24e0311e0ec9634d6acff6e06aa83b4bd4c57957b8f7525bf0dd22f0a73d7b09'
  }

  /**
   *  The snapshot of some state related to messaging relevant to the current parachain as per
   *  the relay parent.
   * 
   *  This field is meant to be updated each block with the validation data inherent. Therefore,
   *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
   * 
   *  This data is also absent from the genesis.
   */
  async getAsV78(): Promise<v78.MessagingStateSnapshot | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'RelevantMessagingState')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'RelevantMessagingState') != null
  }
}

export class ParachainSystemReservedDmpWeightOverrideStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The weight we reserve at the beginning of the block for processing DMP messages. This
   *  overrides the amount set in the Config trait.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedDmpWeightOverride') === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
  }

  /**
   *  The weight we reserve at the beginning of the block for processing DMP messages. This
   *  overrides the amount set in the Config trait.
   */
  async getAsV78(): Promise<bigint | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ReservedDmpWeightOverride')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedDmpWeightOverride') != null
  }
}

export class ParachainSystemReservedXcmpWeightOverrideStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The weight we reserve at the beginning of the block for processing XCMP messages. This
   *  overrides the amount set in the Config trait.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedXcmpWeightOverride') === 'd3f0e4c96dad8d73df3c44f02993a46a9ed2eed15208047c7d80882af09d67cc'
  }

  /**
   *  The weight we reserve at the beginning of the block for processing XCMP messages. This
   *  overrides the amount set in the Config trait.
   */
  async getAsV78(): Promise<bigint | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ReservedXcmpWeightOverride')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ReservedXcmpWeightOverride') != null
  }
}

export class ParachainSystemUpgradeRestrictionSignalStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
   *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
   *  candidate will be invalid.
   * 
   *  This storage item is a mirror of the corresponding value for the current parachain from the
   *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
   *  set after the inherent.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'UpgradeRestrictionSignal') === '2236db14165f1386be95c2e72a22524bdd6b93f6d64e4b0b39d54e03f1f1bee2'
  }

  /**
   *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
   *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
   *  candidate will be invalid.
   * 
   *  This storage item is a mirror of the corresponding value for the current parachain from the
   *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
   *  set after the inherent.
   */
  async getAsV78(): Promise<(v78.V1UpgradeRestriction | undefined)> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'UpgradeRestrictionSignal')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'UpgradeRestrictionSignal') != null
  }
}

export class ParachainSystemUpwardMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Upward messages that were sent in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'UpwardMessages') === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
  }

  /**
   *  Upward messages that were sent in a block.
   * 
   *  This will be cleared in `on_initialize` of each new block.
   */
  async getAsV78(): Promise<Uint8Array[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'UpwardMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'UpwardMessages') != null
  }
}

export class ParachainSystemValidationDataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The [`PersistedValidationData`] set for this block.
   *  This value is expected to be set only once per block and it's never stored
   *  in the trie.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ValidationData') === 'fb37759067a991bce599d3fbe39ee38b99d63716a96357c3a39bf04c66e2579d'
  }

  /**
   *  The [`PersistedValidationData`] set for this block.
   *  This value is expected to be set only once per block and it's never stored
   *  in the trie.
   */
  async getAsV78(): Promise<v78.V1PersistedValidationData | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'ParachainSystem', 'ValidationData')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('ParachainSystem', 'ValidationData') != null
  }
}

export class PolkadotXcmAssetTrapsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The existing asset traps.
   * 
   *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
   *  times this pair has been trapped (usually just 1 if it exists at all).
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'AssetTraps') === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
  }

  /**
   *  The existing asset traps.
   * 
   *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
   *  times this pair has been trapped (usually just 1 if it exists at all).
   */
  async getAsV78(key: Uint8Array): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'AssetTraps', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(number)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'AssetTraps', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(number)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'AssetTraps')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'AssetTraps') != null
  }
}

export class PolkadotXcmCurrentMigrationStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current migration's stage, if any.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'CurrentMigration') === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
  }

  /**
   *  The current migration's stage, if any.
   */
  async getAsV78(): Promise<v78.VersionMigrationStage | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'CurrentMigration')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'CurrentMigration') != null
  }
}

export class PolkadotXcmQueriesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The ongoing queries.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'Queries') === '8497eae9bd9ecc14a9d7da5daf99074e5fb888ce8b1254175ebacb93a450f902'
  }

  /**
   *  The ongoing queries.
   */
  async getAsV78(key: bigint): Promise<v78.QueryStatus | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'Queries', key)
  }

  async getManyAsV78(keys: bigint[]): Promise<(v78.QueryStatus | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'Queries', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.QueryStatus)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'Queries')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'Queries') != null
  }
}

export class PolkadotXcmQueryCounterStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The latest available query index.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'QueryCounter') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The latest available query index.
   */
  async getAsV78(): Promise<bigint> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'QueryCounter')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'QueryCounter') != null
  }
}

export class PolkadotXcmSafeXcmVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Default version to encode XCM when latest version of destination is unknown. If `None`,
   *  then the destinations whose XCM version is unknown are considered unreachable.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'SafeXcmVersion') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Default version to encode XCM when latest version of destination is unknown. If `None`,
   *  then the destinations whose XCM version is unknown are considered unreachable.
   */
  async getAsV78(): Promise<number | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'SafeXcmVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'SafeXcmVersion') != null
  }
}

export class PolkadotXcmSupportedVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The Latest versions that we know various locations support.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'SupportedVersion') === 'bf203870a932f637011bee3e0dae76dc35a120f80e5ac7fb32e2dbede4fd5795'
  }

  /**
   *  The Latest versions that we know various locations support.
   */
  async getAsV78(key1: number, key2: v78.VersionedMultiLocation): Promise<number | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'SupportedVersion', key1, key2)
  }

  async getManyAsV78(keys: [number, v78.VersionedMultiLocation][]): Promise<(number | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'SupportedVersion', keys)
  }

  async getAllAsV78(): Promise<(number)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'SupportedVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'SupportedVersion') != null
  }
}

export class PolkadotXcmVersionDiscoveryQueueStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
   *  the `u32` counter is the number of times that a send to the destination has been attempted,
   *  which is used as a prioritization.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionDiscoveryQueue') === '16a258fa3891b3d97c16b446ca40a6dbafd16eb5bc2936a51286241b38207f42'
  }

  /**
   *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
   *  the `u32` counter is the number of times that a send to the destination has been attempted,
   *  which is used as a prioritization.
   */
  async getAsV78(): Promise<[v78.VersionedMultiLocation, number][]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'VersionDiscoveryQueue')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionDiscoveryQueue') != null
  }
}

export class PolkadotXcmVersionNotifiersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  All locations that we have requested version notifications from.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionNotifiers') === 'c04d92c1d09bb51782b185c1fa4f78678bd7c63c2388986e2fe34f2f1e02cf9a'
  }

  /**
   *  All locations that we have requested version notifications from.
   */
  async getAsV78(key1: number, key2: v78.VersionedMultiLocation): Promise<bigint | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifiers', key1, key2)
  }

  async getManyAsV78(keys: [number, v78.VersionedMultiLocation][]): Promise<(bigint | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifiers', keys)
  }

  async getAllAsV78(): Promise<(bigint)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifiers')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionNotifiers') != null
  }
}

export class PolkadotXcmVersionNotifyTargetsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The target locations that are subscribed to our version changes, as well as the most recent
   *  of our versions we informed them of.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionNotifyTargets') === 'be7b24532d6af66a6c35ced8427c3201e32a7ab9e2a0c901f57c6d5a416ddc46'
  }

  /**
   *  The target locations that are subscribed to our version changes, as well as the most recent
   *  of our versions we informed them of.
   */
  async getAsV78(key1: number, key2: v78.VersionedMultiLocation): Promise<[bigint, bigint, number] | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifyTargets', key1, key2)
  }

  async getManyAsV78(keys: [number, v78.VersionedMultiLocation][]): Promise<([bigint, bigint, number] | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifyTargets', keys)
  }

  async getAllAsV78(): Promise<([bigint, bigint, number])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'PolkadotXcm', 'VersionNotifyTargets')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('PolkadotXcm', 'VersionNotifyTargets') != null
  }
}

export class PreimagePreimageForStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The preimages stored by this pallet.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Preimage', 'PreimageFor') === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
  }

  /**
   *  The preimages stored by this pallet.
   */
  async getAsV78(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'PreimageFor', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'PreimageFor', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(Uint8Array)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'PreimageFor')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Preimage', 'PreimageFor') != null
  }
}

export class PreimageStatusForStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The request status of a given hash.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Preimage', 'StatusFor') === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
  }

  /**
   *  The request status of a given hash.
   */
  async getAsV78(key: Uint8Array): Promise<v78.RequestStatus | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Preimage', 'StatusFor', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.RequestStatus | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'StatusFor', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.RequestStatus)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Preimage', 'StatusFor')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Preimage', 'StatusFor') != null
  }
}

export class ProxyAnnouncementsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The announcements made by the proxy (key).
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Proxy', 'Announcements') === 'b93d53c53a308d910b0304bf5593bd71084bcf177629ea67da68b9026f4b417c'
  }

  /**
   *  The announcements made by the proxy (key).
   */
  async getAsV78(key: Uint8Array): Promise<[v78.Announcement[], bigint]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Proxy', 'Announcements', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<([v78.Announcement[], bigint])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Announcements', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<([v78.Announcement[], bigint])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Announcements')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Proxy', 'Announcements') != null
  }
}

export class ProxyProxiesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The set of account proxies. Maps the account which has delegated to the accounts
   *  which are being delegated to, together with the amount held on deposit.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Proxy', 'Proxies') === '4bb33eca13f5c1bd4dd925e1a077ee920e0ddc91f94bd24d512083c3a518d98d'
  }

  /**
   *  The set of account proxies. Maps the account which has delegated to the accounts
   *  which are being delegated to, together with the amount held on deposit.
   */
  async getAsV78(key: Uint8Array): Promise<[v78.ProxyDefinition[], bigint]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Proxy', 'Proxies', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<([v78.ProxyDefinition[], bigint])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Proxies', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<([v78.ProxyDefinition[], bigint])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Proxy', 'Proxies')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Proxy', 'Proxies') != null
  }
}

export class SchedulerAgendaStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') === '75fc10fd8c168251332a44a9f37efde0fda81480b176856d55940ff4708c4293'
  }

  /**
   *  Items to be executed, indexed by the block number that they should be executed on.
   */
  async getAsV78(key: number): Promise<(v78.ScheduledV3 | undefined)[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Agenda', key)
  }

  async getManyAsV78(keys: number[]): Promise<((v78.ScheduledV3 | undefined)[])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<((v78.ScheduledV3 | undefined)[])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Agenda')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Agenda') != null
  }
}

export class SchedulerLookupStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Lookup from identity to the block number and index of the task.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Lookup') === 'd134b5bb4dad116817692e25dce47c836fbbb31d353d5749d4fc370b62e7286b'
  }

  /**
   *  Lookup from identity to the block number and index of the task.
   */
  async getAsV78(key: Uint8Array): Promise<[number, number] | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Scheduler', 'Lookup', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<([number, number] | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Lookup', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<([number, number])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Scheduler', 'Lookup')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Scheduler', 'Lookup') != null
  }
}

export class SessionCurrentIndexStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Current index of the session.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Session', 'CurrentIndex') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Current index of the session.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Session', 'CurrentIndex')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'CurrentIndex') != null
  }
}

export class SessionDisabledValidatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Indices of disabled validators.
   * 
   *  The vec is always kept sorted so that we can find whether a given validator is
   *  disabled using binary search. It gets cleared when `on_session_ending` returns
   *  a new set of identities.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Session', 'DisabledValidators') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Indices of disabled validators.
   * 
   *  The vec is always kept sorted so that we can find whether a given validator is
   *  disabled using binary search. It gets cleared when `on_session_ending` returns
   *  a new set of identities.
   */
  async getAsV78(): Promise<number[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Session', 'DisabledValidators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'DisabledValidators') != null
  }
}

export class SessionKeyOwnerStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Session', 'KeyOwner') === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
  }

  /**
   *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
   */
  async getAsV78(key: [Uint8Array, Uint8Array]): Promise<Uint8Array | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Session', 'KeyOwner', key)
  }

  async getManyAsV78(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Session', 'KeyOwner', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(Uint8Array)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Session', 'KeyOwner')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'KeyOwner') != null
  }
}

export class SessionNextKeysStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The next session keys for a validator.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Session', 'NextKeys') === '631bdf50943dc1aa6eef0e538bc5f8db41fca7120b2bae11b9c7ad84ada29964'
  }

  /**
   *  The next session keys for a validator.
   */
  async getAsV78(key: Uint8Array): Promise<v78.SessionKeys | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Session', 'NextKeys', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.SessionKeys | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.SessionKeys)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Session', 'NextKeys')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'NextKeys') != null
  }
}

export class SessionQueuedChangedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if the underlying economic identities or weighting behind the validators
   *  has changed in the queued validator set.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedChanged') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if the underlying economic identities or weighting behind the validators
   *  has changed in the queued validator set.
   */
  async getAsV78(): Promise<boolean> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Session', 'QueuedChanged')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedChanged') != null
  }
}

export class SessionQueuedKeysStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedKeys') === '88cd205a98ff7b5562f0d030266b07e3566fdf283e05e6bd4c2405710a6a3b90'
  }

  /**
   *  The queued keys for the next session. When the next session begins, these keys
   *  will be used to determine the validator's session keys.
   */
  async getAsV78(): Promise<[Uint8Array, v78.SessionKeys][]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Session', 'QueuedKeys')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'QueuedKeys') != null
  }
}

export class SessionValidatorsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current set of validators.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Session', 'Validators') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current set of validators.
   */
  async getAsV78(): Promise<Uint8Array[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Session', 'Validators')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Session', 'Validators') != null
  }
}

export class SudoKeyStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The `AccountId` of the sudo key.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Sudo', 'Key') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The `AccountId` of the sudo key.
   */
  async getAsV78(): Promise<Uint8Array | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Sudo', 'Key')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Sudo', 'Key') != null
  }
}

export class SystemAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The full account information for a particular account ID.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'Account') === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
  }

  /**
   *  The full account information for a particular account ID.
   */
  async getAsV78(key: Uint8Array): Promise<v78.AccountInfo> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'Account', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.AccountInfo)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.AccountInfo)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'System', 'Account')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Account') != null
  }
}

export class SystemAllExtrinsicsLenStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Total length (in bytes) for all extrinsics put together, for the current block.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'AllExtrinsicsLen') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Total length (in bytes) for all extrinsics put together, for the current block.
   */
  async getAsV78(): Promise<number | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'AllExtrinsicsLen')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'AllExtrinsicsLen') != null
  }
}

export class SystemBlockHashStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Map of block numbers to block hashes.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'BlockHash') === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
  }

  /**
   *  Map of block numbers to block hashes.
   */
  async getAsV78(key: number): Promise<Uint8Array> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'BlockHash', key)
  }

  async getManyAsV78(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'System', 'BlockHash', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(Uint8Array)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'System', 'BlockHash')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'BlockHash') != null
  }
}

export class SystemBlockWeightStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current weight for the block.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'BlockWeight') === '3117e920c869758010946f61bdfb045561b02a263bdc3bcff42e4ce915e4e5d4'
  }

  /**
   *  The current weight for the block.
   */
  async getAsV78(): Promise<v78.PerDispatchClass> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'BlockWeight')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'BlockWeight') != null
  }
}

export class SystemDigestStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'Digest') === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
  }

  /**
   *  Digest of the current block, also part of the block header.
   */
  async getAsV78(): Promise<v78.Digest> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'Digest')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Digest') != null
  }
}

export class SystemEventCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of events in the `Events<T>` list.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'EventCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of events in the `Events<T>` list.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'EventCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'EventCount') != null
  }
}

export class SystemEventTopicsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Mapping between a topic (represented by T::Hash) and a vector of indexes
   *  of events in the `<Events<T>>` list.
   * 
   *  All topic vectors have deterministic storage locations depending on the topic. This
   *  allows light-clients to leverage the changes trie storage tracking mechanism and
   *  in case of changes fetch the list of events of interest.
   * 
   *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
   *  the `EventIndex` then in case if the topic has the same contents on the next block
   *  no notification will be triggered thus the event might be lost.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'EventTopics') === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
  }

  /**
   *  Mapping between a topic (represented by T::Hash) and a vector of indexes
   *  of events in the `<Events<T>>` list.
   * 
   *  All topic vectors have deterministic storage locations depending on the topic. This
   *  allows light-clients to leverage the changes trie storage tracking mechanism and
   *  in case of changes fetch the list of events of interest.
   * 
   *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
   *  the `EventIndex` then in case if the topic has the same contents on the next block
   *  no notification will be triggered thus the event might be lost.
   */
  async getAsV78(key: Uint8Array): Promise<[number, number][]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'EventTopics', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<([number, number][])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'System', 'EventTopics', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<([number, number][])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'System', 'EventTopics')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'EventTopics') != null
  }
}

export class SystemEventsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'Events') === 'f4d024b425aeaa0ae6aa92d520fcea1e214d6d208cadd5c141f8ae6c55452783'
  }

  /**
   *  Events deposited for the current block.
   * 
   *  NOTE: This storage item is explicitly unbounded since it is never intended to be read
   *  from within the runtime.
   */
  async getAsV78(): Promise<v78.EventRecord[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'Events')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Events') != null
  }
}

export class SystemExecutionPhaseStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The execution phase of the block.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'ExecutionPhase') === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
  }

  /**
   *  The execution phase of the block.
   */
  async getAsV78(): Promise<v78.Phase | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'ExecutionPhase')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ExecutionPhase') != null
  }
}

export class SystemExtrinsicCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Total extrinsics count for the current block.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicCount') === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
  }

  /**
   *  Total extrinsics count for the current block.
   */
  async getAsV78(): Promise<number | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'ExtrinsicCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicCount') != null
  }
}

export class SystemExtrinsicDataStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Extrinsics data for the current block (maps an extrinsic's index to its data).
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicData') === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
  }

  /**
   *  Extrinsics data for the current block (maps an extrinsic's index to its data).
   */
  async getAsV78(key: number): Promise<Uint8Array> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'ExtrinsicData', key)
  }

  async getManyAsV78(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'System', 'ExtrinsicData', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(Uint8Array)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'System', 'ExtrinsicData')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ExtrinsicData') != null
  }
}

export class SystemLastRuntimeUpgradeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'LastRuntimeUpgrade') === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
  }

  /**
   *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
   */
  async getAsV78(): Promise<v78.LastRuntimeUpgradeInfo | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'LastRuntimeUpgrade')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'LastRuntimeUpgrade') != null
  }
}

export class SystemNumberStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current block number being processed. Set by `execute_block`.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'Number') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The current block number being processed. Set by `execute_block`.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'Number')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'Number') != null
  }
}

export class SystemParentHashStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Hash of the previous block.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'ParentHash') === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
  }

  /**
   *  Hash of the previous block.
   */
  async getAsV78(): Promise<Uint8Array> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'ParentHash')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'ParentHash') != null
  }
}

export class SystemUpgradedToTripleRefCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
   *  (default) if not.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToTripleRefCount') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
   *  (default) if not.
   */
  async getAsV78(): Promise<boolean> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'UpgradedToTripleRefCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToTripleRefCount') != null
  }
}

export class SystemUpgradedToU32RefCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToU32RefCount') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
   */
  async getAsV78(): Promise<boolean> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'System', 'UpgradedToU32RefCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('System', 'UpgradedToU32RefCount') != null
  }
}

export class TechnicalCommitteeMembersStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV78(): Promise<Uint8Array[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Members') != null
  }
}

export class TechnicalCommitteePrimeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Prime') === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
  }

  /**
   *  The prime member that helps determine the default vote behavior in case of absentations.
   */
  async getAsV78(): Promise<Uint8Array | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'Prime')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Prime') != null
  }
}

export class TechnicalCommitteeProposalCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals so far.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalCount') != null
  }
}

export class TechnicalCommitteeProposalOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '903b8a779d9c06ee10ee923cda677d0736114abb93b2b73a97ea7c7cbce3f0bf'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV78(key: Uint8Array): Promise<v78.Call | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.Call | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.Call)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'ProposalOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') != null
  }
}

export class TechnicalCommitteeProposalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The hashes of the active proposals.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Proposals') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The hashes of the active proposals.
   */
  async getAsV78(): Promise<Uint8Array[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'Proposals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Proposals') != null
  }
}

export class TechnicalCommitteeVotingStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Voting') === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
  }

  /**
   *  Votes on a given proposal, if it is ongoing.
   */
  async getAsV78(key: Uint8Array): Promise<v78.Votes | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'TechnicalCommittee', 'Voting', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.Votes | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'Voting', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.Votes)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'TechnicalCommittee', 'Voting')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TechnicalCommittee', 'Voting') != null
  }
}

export class TimestampDidUpdateStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Did the timestamp get updated in this block?
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Timestamp', 'DidUpdate') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Did the timestamp get updated in this block?
   */
  async getAsV78(): Promise<boolean> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Timestamp', 'DidUpdate')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Timestamp', 'DidUpdate') != null
  }
}

export class TimestampNowStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Current time for the current block.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Timestamp', 'Now') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  Current time for the current block.
   */
  async getAsV78(): Promise<bigint> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Timestamp', 'Now')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Timestamp', 'Now') != null
  }
}

export class TipsReasonsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Simple preimage lookup from the reason's hash to the original data. Again, has an
   *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Tips', 'Reasons') === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
  }

  /**
   *  Simple preimage lookup from the reason's hash to the original data. Again, has an
   *  insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
   */
  async getAsV78(key: Uint8Array): Promise<Uint8Array | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Tips', 'Reasons', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Reasons', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(Uint8Array)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Reasons')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tips', 'Reasons') != null
  }
}

export class TipsTipsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Tips', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV78(key: Uint8Array): Promise<v78.OpenTip | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Tips', 'Tips', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.OpenTip | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Tips', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.OpenTip)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Tips', 'Tips')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tips', 'Tips') != null
  }
}

export class TokensAccountsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Accounts') === 'f23ccc2edbd0e524d74d373fab61041d022935fc96a13cb996c4083b37cae759'
  }

  /**
   *  The balance of a token type under an account.
   * 
   *  NOTE: If the total is ever zero, decrease account ref account.
   * 
   *  NOTE: This is only used in the case that this module is used to store
   *  balances.
   */
  async getAsV78(key1: Uint8Array, key2: number): Promise<v78.Type_485> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Accounts', key1, key2)
  }

  async getManyAsV78(keys: [Uint8Array, number][]): Promise<(v78.Type_485)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts', keys)
  }

  async getAllAsV78(): Promise<(v78.Type_485)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Accounts')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tokens', 'Accounts') != null
  }
}

export class TokensLocksStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Tokens', 'Locks') === '94d13c37bf173a8e289a7abf6d778dc28e075e16963c06c041136f789ac66572'
  }

  /**
   *  Any liquidity locks of a token type under an account.
   *  NOTE: Should only be accessed when setting, changing and freeing a lock.
   */
  async getAsV78(key1: Uint8Array, key2: number): Promise<v78.Type_483[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'Locks', key1, key2)
  }

  async getManyAsV78(keys: [Uint8Array, number][]): Promise<(v78.Type_483[])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks', keys)
  }

  async getAllAsV78(): Promise<(v78.Type_483[])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'Locks')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tokens', 'Locks') != null
  }
}

export class TokensTotalIssuanceStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The total issuance of a token type.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Tokens', 'TotalIssuance') === 'd4b0e776f9f1d19233fe32cd062ab41a912af3d15ceb9d02d9ebc8fbe7b1cda4'
  }

  /**
   *  The total issuance of a token type.
   */
  async getAsV78(key: number): Promise<bigint> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Tokens', 'TotalIssuance', key)
  }

  async getManyAsV78(keys: number[]): Promise<(bigint)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(bigint)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Tokens', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Tokens', 'TotalIssuance') != null
  }
}

export class TransactionPausePausedTransactionsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The paused transaction map
   * 
   *  map (PalletNameBytes, FunctionNameBytes) => Option<()>
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('TransactionPause', 'PausedTransactions') === 'b84898f3d187596a7b6e3678769d37269c8b37c42ad19309d36b974ad9f3d352'
  }

  /**
   *  The paused transaction map
   * 
   *  map (PalletNameBytes, FunctionNameBytes) => Option<()>
   */
  async getAsV78(key: [Uint8Array, Uint8Array]): Promise<null | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'TransactionPause', 'PausedTransactions', key)
  }

  async getManyAsV78(keys: [Uint8Array, Uint8Array][]): Promise<(null | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'TransactionPause', 'PausedTransactions', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(null)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'TransactionPause', 'PausedTransactions')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TransactionPause', 'PausedTransactions') != null
  }
}

export class TransactionPaymentNextFeeMultiplierStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV78() {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'NextFeeMultiplier') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  async getAsV78(): Promise<bigint> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'TransactionPayment', 'NextFeeMultiplier')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'NextFeeMultiplier') != null
  }
}

export class TransactionPaymentStorageVersionStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV78() {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'StorageVersion') === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
  }

  async getAsV78(): Promise<v78.Type_177> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'TransactionPayment', 'StorageVersion')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('TransactionPayment', 'StorageVersion') != null
  }
}

export class TreasuryApprovalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposal indices that have been approved but not yet awarded.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Approvals') === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
  }

  /**
   *  Proposal indices that have been approved but not yet awarded.
   */
  async getAsV78(): Promise<number[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Approvals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Approvals') != null
  }
}

export class TreasuryProposalCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Number of proposals that have been made.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Treasury', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Number of proposals that have been made.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'ProposalCount') != null
  }
}

export class TreasuryProposalsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Proposals that have been made.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV78(key: number): Promise<v78.Proposal | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Treasury', 'Proposals', key)
  }

  async getManyAsV78(keys: number[]): Promise<(v78.Proposal | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Proposals', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.Proposal)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Treasury', 'Proposals')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Treasury', 'Proposals') != null
  }
}

export class UniquesAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The assets held by any given account; set out this way so that assets owned by a single
   *  account can be enumerated.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Uniques', 'Account') === 'dd717df0f824c1616e58c0f411648150ead9ba80eb70d3fa1d3ce17cf15cdb99'
  }

  /**
   *  The assets held by any given account; set out this way so that assets owned by a single
   *  account can be enumerated.
   */
  async getAsV78(key1: Uint8Array, key2: bigint, key3: bigint): Promise<null | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Uniques', 'Account', key1, key2, key3)
  }

  async getManyAsV78(keys: [Uint8Array, bigint, bigint][]): Promise<(null | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Uniques', 'Account', keys)
  }

  async getAllAsV78(): Promise<(null)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Uniques', 'Account')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Uniques', 'Account') != null
  }
}

export class UniquesAssetStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The assets in existence and their ownership details.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Uniques', 'Asset') === '473a8db9ad3cadcd73a4d1d940a1b477f877f8a199d89bcf4b57a170d7e2e7fb'
  }

  /**
   *  The assets in existence and their ownership details.
   */
  async getAsV78(key1: bigint, key2: bigint): Promise<v78.InstanceDetails | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Uniques', 'Asset', key1, key2)
  }

  async getManyAsV78(keys: [bigint, bigint][]): Promise<(v78.InstanceDetails | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Uniques', 'Asset', keys)
  }

  async getAllAsV78(): Promise<(v78.InstanceDetails)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Uniques', 'Asset')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Uniques', 'Asset') != null
  }
}

export class UniquesAttributeStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Metadata of an asset class.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Uniques', 'Attribute') === 'a3a0ccec7ada073a05ca828d16c2decda5dc3aaf3545c5c22f508123c0751a45'
  }

  /**
   *  Metadata of an asset class.
   */
  async getAsV78(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<[Uint8Array, bigint] | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Uniques', 'Attribute', key1, key2, key3)
  }

  async getManyAsV78(keys: [bigint, (bigint | undefined), Uint8Array][]): Promise<([Uint8Array, bigint] | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Uniques', 'Attribute', keys)
  }

  async getAllAsV78(): Promise<([Uint8Array, bigint])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Uniques', 'Attribute')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Uniques', 'Attribute') != null
  }
}

export class UniquesClassStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Details of an asset class.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Uniques', 'Class') === '64b5101df343156a22be92d239c86e3010267e182a902a0c77b89a0150e1eb2a'
  }

  /**
   *  Details of an asset class.
   */
  async getAsV78(key: bigint): Promise<v78.ClassDetails | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Uniques', 'Class', key)
  }

  async getManyAsV78(keys: bigint[]): Promise<(v78.ClassDetails | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Uniques', 'Class', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.ClassDetails)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Uniques', 'Class')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Uniques', 'Class') != null
  }
}

export class UniquesClassAccountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The classes owned by any given account; set out this way so that classes owned by a single
   *  account can be enumerated.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Uniques', 'ClassAccount') === 'aa05d715557dda88cd21e53b8460b3ef83dc91868ade890f7afcc69de18cb707'
  }

  /**
   *  The classes owned by any given account; set out this way so that classes owned by a single
   *  account can be enumerated.
   */
  async getAsV78(key1: Uint8Array, key2: bigint): Promise<null | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Uniques', 'ClassAccount', key1, key2)
  }

  async getManyAsV78(keys: [Uint8Array, bigint][]): Promise<(null | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Uniques', 'ClassAccount', keys)
  }

  async getAllAsV78(): Promise<(null)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Uniques', 'ClassAccount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Uniques', 'ClassAccount') != null
  }
}

export class UniquesClassMetadataOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Metadata of an asset class.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Uniques', 'ClassMetadataOf') === '4ca83ab7415e7250d6c720a9930f95ae0d08c121898b5e01b38abf9add691411'
  }

  /**
   *  Metadata of an asset class.
   */
  async getAsV78(key: bigint): Promise<v78.ClassMetadata | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Uniques', 'ClassMetadataOf', key)
  }

  async getManyAsV78(keys: bigint[]): Promise<(v78.ClassMetadata | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Uniques', 'ClassMetadataOf', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.ClassMetadata)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Uniques', 'ClassMetadataOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Uniques', 'ClassMetadataOf') != null
  }
}

export class UniquesInstanceMetadataOfStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Metadata of an asset instance.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Uniques', 'InstanceMetadataOf') === 'b930ce9a1c8bff9d1191f22c2274c59d0c049903864e92d1c09b9b65303145cd'
  }

  /**
   *  Metadata of an asset instance.
   */
  async getAsV78(key1: bigint, key2: bigint): Promise<v78.InstanceMetadata | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Uniques', 'InstanceMetadataOf', key1, key2)
  }

  async getManyAsV78(keys: [bigint, bigint][]): Promise<(v78.InstanceMetadata | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Uniques', 'InstanceMetadataOf', keys)
  }

  async getAllAsV78(): Promise<(v78.InstanceMetadata)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Uniques', 'InstanceMetadataOf')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Uniques', 'InstanceMetadataOf') != null
  }
}

export class UnknownTokensAbstractFungibleBalancesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Abstract fungible balances under a given location and a abstract
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('UnknownTokens', 'AbstractFungibleBalances') === 'f6cf7e5c9878cef27f99d1df60d9721e0034a66cd864d15d65a9196bb951c149'
  }

  /**
   *  Abstract fungible balances under a given location and a abstract
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  async getAsV78(key1: v78.V1MultiLocation, key2: Uint8Array): Promise<bigint> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'UnknownTokens', 'AbstractFungibleBalances', key1, key2)
  }

  async getManyAsV78(keys: [v78.V1MultiLocation, Uint8Array][]): Promise<(bigint)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'AbstractFungibleBalances', keys)
  }

  async getAllAsV78(): Promise<(bigint)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'AbstractFungibleBalances')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('UnknownTokens', 'AbstractFungibleBalances') != null
  }
}

export class UnknownTokensConcreteFungibleBalancesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Concrete fungible balances under a given location and a concrete
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('UnknownTokens', 'ConcreteFungibleBalances') === 'a1d05d2a23ba410062fdbbbbea5e8c90763e56102572e63e7d9a78dff938ef51'
  }

  /**
   *  Concrete fungible balances under a given location and a concrete
   *  fungible id.
   * 
   *  double_map: who, asset_id => u128
   */
  async getAsV78(key1: v78.V1MultiLocation, key2: v78.V1MultiLocation): Promise<bigint> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'UnknownTokens', 'ConcreteFungibleBalances', key1, key2)
  }

  async getManyAsV78(keys: [v78.V1MultiLocation, v78.V1MultiLocation][]): Promise<(bigint)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'ConcreteFungibleBalances', keys)
  }

  async getAllAsV78(): Promise<(bigint)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'UnknownTokens', 'ConcreteFungibleBalances')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('UnknownTokens', 'ConcreteFungibleBalances') != null
  }
}

export class VestingVestingSchedulesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Vesting schedules of an account.
   * 
   *  VestingSchedules: map AccountId => Vec<VestingSchedule>
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('Vesting', 'VestingSchedules') === 'd1025301ffa60f04c50bb1007ecb356d52103dd9c366150de1ba80c6e043ac2f'
  }

  /**
   *  Vesting schedules of an account.
   * 
   *  VestingSchedules: map AccountId => Vec<VestingSchedule>
   */
  async getAsV78(key: Uint8Array): Promise<v78.VestingSchedule[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'Vesting', 'VestingSchedules', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(v78.VestingSchedule[])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Vesting', 'VestingSchedules', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.VestingSchedule[])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'Vesting', 'VestingSchedules')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('Vesting', 'VestingSchedules') != null
  }
}

export class WarehouseLMActiveYieldFarmStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Active(farms able to receive LP shares deposits) yield farms.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('WarehouseLM', 'ActiveYieldFarm') === '7cc5b6d5407dcbcf81c931c295c6fc4aa9cb2afb69a27d4e06a0e638f0ff4679'
  }

  /**
   *  Active(farms able to receive LP shares deposits) yield farms.
   */
  async getAsV78(key1: Uint8Array, key2: number): Promise<number | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'WarehouseLM', 'ActiveYieldFarm', key1, key2)
  }

  async getManyAsV78(keys: [Uint8Array, number][]): Promise<(number | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'WarehouseLM', 'ActiveYieldFarm', keys)
  }

  async getAllAsV78(): Promise<(number)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'WarehouseLM', 'ActiveYieldFarm')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('WarehouseLM', 'ActiveYieldFarm') != null
  }
}

export class WarehouseLMDepositStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Deposit details.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('WarehouseLM', 'Deposit') === 'b656d2ad6464af6d413312931745db11953a0cd8b71bac716613a18fbfffa34a'
  }

  /**
   *  Deposit details.
   */
  async getAsV78(key: bigint): Promise<v78.DepositData | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'WarehouseLM', 'Deposit', key)
  }

  async getManyAsV78(keys: bigint[]): Promise<(v78.DepositData | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'WarehouseLM', 'Deposit', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.DepositData)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'WarehouseLM', 'Deposit')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('WarehouseLM', 'Deposit') != null
  }
}

export class WarehouseLMDepositSequencerStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV78() {
    return this._chain.getStorageItemTypeHash('WarehouseLM', 'DepositSequencer') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  async getAsV78(): Promise<bigint> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'WarehouseLM', 'DepositSequencer')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('WarehouseLM', 'DepositSequencer') != null
  }
}

export class WarehouseLMFarmSequencerStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Id sequencer for `GlobalFarm` and `YieldFarm`.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('WarehouseLM', 'FarmSequencer') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Id sequencer for `GlobalFarm` and `YieldFarm`.
   */
  async getAsV78(): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'WarehouseLM', 'FarmSequencer')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('WarehouseLM', 'FarmSequencer') != null
  }
}

export class WarehouseLMGlobalFarmStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  get isV78() {
    return this._chain.getStorageItemTypeHash('WarehouseLM', 'GlobalFarm') === 'b7d29a459a44dac4bb28c709423d749854231c2aaf1e6dd74ce959ca5f349a96'
  }

  async getAsV78(key: number): Promise<v78.GlobalFarmData | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'WarehouseLM', 'GlobalFarm', key)
  }

  async getManyAsV78(keys: number[]): Promise<(v78.GlobalFarmData | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'WarehouseLM', 'GlobalFarm', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(v78.GlobalFarmData)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'WarehouseLM', 'GlobalFarm')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('WarehouseLM', 'GlobalFarm') != null
  }
}

export class WarehouseLMYieldFarmStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Yield farm details.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('WarehouseLM', 'YieldFarm') === '0f0204c0d0641c4546bec12693ec48997b8fc8c730fff7076909be4edaff8f4d'
  }

  /**
   *  Yield farm details.
   */
  async getAsV78(key1: Uint8Array, key2: number, key3: number): Promise<v78.YieldFarmData | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'WarehouseLM', 'YieldFarm', key1, key2, key3)
  }

  async getManyAsV78(keys: [Uint8Array, number, number][]): Promise<(v78.YieldFarmData | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'WarehouseLM', 'YieldFarm', keys)
  }

  async getAllAsV78(): Promise<(v78.YieldFarmData)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'WarehouseLM', 'YieldFarm')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('WarehouseLM', 'YieldFarm') != null
  }
}

export class XYKPoolAssetsStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Asset pair in a pool.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('XYK', 'PoolAssets') === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
  }

  /**
   *  Asset pair in a pool.
   */
  async getAsV78(key: Uint8Array): Promise<[number, number] | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'XYK', 'PoolAssets', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<([number, number] | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'XYK', 'PoolAssets', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<([number, number])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'XYK', 'PoolAssets')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XYK', 'PoolAssets') != null
  }
}

export class XYKShareTokenStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Asset id storage for shared pool tokens
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('XYK', 'ShareToken') === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
  }

  /**
   *  Asset id storage for shared pool tokens
   */
  async getAsV78(key: Uint8Array): Promise<number> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'XYK', 'ShareToken', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(number)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'XYK', 'ShareToken', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(number)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'XYK', 'ShareToken')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XYK', 'ShareToken') != null
  }
}

export class XYKTotalLiquidityStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Total liquidity in a pool.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('XYK', 'TotalLiquidity') === '0bac40afaf72ceea5a87ae2baaa5fe7f69915323f3293bdd970e7790a9d968c0'
  }

  /**
   *  Total liquidity in a pool.
   */
  async getAsV78(key: Uint8Array): Promise<bigint> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'XYK', 'TotalLiquidity', key)
  }

  async getManyAsV78(keys: Uint8Array[]): Promise<(bigint)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'XYK', 'TotalLiquidity', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(bigint)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'XYK', 'TotalLiquidity')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XYK', 'TotalLiquidity') != null
  }
}

export class XcmpQueueInboundXcmpMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'InboundXcmpMessages') === '7bf0d83d361216e18f7bca971cbf4fbd433158d3be6ac33fe278fb6d9bfb0469'
  }

  /**
   *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
   */
  async getAsV78(key1: number, key2: number): Promise<Uint8Array> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'InboundXcmpMessages', key1, key2)
  }

  async getManyAsV78(keys: [number, number][]): Promise<(Uint8Array)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'InboundXcmpMessages', keys)
  }

  async getAllAsV78(): Promise<(Uint8Array)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'InboundXcmpMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'InboundXcmpMessages') != null
  }
}

export class XcmpQueueInboundXcmpStatusStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Status of the inbound XCMP channels.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'InboundXcmpStatus') === '9463adeec55c62de9270b726721d07d1258e861fc23bcadc753e06286f1e9d94'
  }

  /**
   *  Status of the inbound XCMP channels.
   */
  async getAsV78(): Promise<v78.InboundChannelDetails[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'InboundXcmpStatus')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'InboundXcmpStatus') != null
  }
}

export class XcmpQueueOutboundXcmpMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The messages outbound in a given XCMP channel.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OutboundXcmpMessages') === 'f8f791196403322746e9b911cdffc1dfb7880ff624b4765b5515d8264f7df7b2'
  }

  /**
   *  The messages outbound in a given XCMP channel.
   */
  async getAsV78(key1: number, key2: number): Promise<Uint8Array> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'OutboundXcmpMessages', key1, key2)
  }

  async getManyAsV78(keys: [number, number][]): Promise<(Uint8Array)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'OutboundXcmpMessages', keys)
  }

  async getAllAsV78(): Promise<(Uint8Array)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'OutboundXcmpMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OutboundXcmpMessages') != null
  }
}

export class XcmpQueueOutboundXcmpStatusStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
   *  and last outbound message. If the two indices are equal, then it indicates an empty
   *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
   *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
   *  case of the need to send a high-priority signal message this block.
   *  The bool is true if there is a signal message waiting to be sent.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OutboundXcmpStatus') === '0803a0634571a8cfdaa8b16757a06e235664ceb84c144cf0d5953fd2dd0f7f3a'
  }

  /**
   *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
   *  and last outbound message. If the two indices are equal, then it indicates an empty
   *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
   *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
   *  case of the need to send a high-priority signal message this block.
   *  The bool is true if there is a signal message waiting to be sent.
   */
  async getAsV78(): Promise<v78.OutboundChannelDetails[]> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'OutboundXcmpStatus')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OutboundXcmpStatus') != null
  }
}

export class XcmpQueueOverweightStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The messages that exceeded max individual message weight budget.
   * 
   *  These message stay in this storage map until they are manually dispatched via
   *  `service_overweight`.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'Overweight') === '2eb096a3f66cc2d3a7f63f9f097c63bad7d960c4949a759a34865c7919f65122'
  }

  /**
   *  The messages that exceeded max individual message weight budget.
   * 
   *  These message stay in this storage map until they are manually dispatched via
   *  `service_overweight`.
   */
  async getAsV78(key: bigint): Promise<[number, number, Uint8Array] | undefined> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'Overweight', key)
  }

  async getManyAsV78(keys: bigint[]): Promise<([number, number, Uint8Array] | undefined)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'Overweight', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<([number, number, Uint8Array])[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'Overweight')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'Overweight') != null
  }
}

export class XcmpQueueOverweightCountStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
   *  available free overweight index.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OverweightCount') === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
  }

  /**
   *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
   *  available free overweight index.
   */
  async getAsV78(): Promise<bigint> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'OverweightCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'OverweightCount') != null
  }
}

export class XcmpQueueQueueConfigStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  The configuration which controls the dynamics of the outbound queue.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueConfig') === 'bc17b84c06c7e0df3f2684c76020e6d76ff231be948076edbe6751b00937b0b1'
  }

  /**
   *  The configuration which controls the dynamics of the outbound queue.
   */
  async getAsV78(): Promise<v78.QueueConfigData> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'QueueConfig')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueConfig') != null
  }
}

export class XcmpQueueQueueSuspendedStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueSuspended') === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
  }

  /**
   *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
   */
  async getAsV78(): Promise<boolean> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'QueueSuspended')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'QueueSuspended') != null
  }
}

export class XcmpQueueSignalMessagesStorage {
  private readonly _chain: Chain
  private readonly blockHash: string

  constructor(ctx: BlockContext)
  constructor(ctx: ChainContext, block: Block)
  constructor(ctx: BlockContext, block?: Block) {
    block = block || ctx.block
    this.blockHash = block.hash
    this._chain = ctx._chain
  }

  /**
   *  Any signal messages waiting to be sent.
   */
  get isV78() {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'SignalMessages') === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
  }

  /**
   *  Any signal messages waiting to be sent.
   */
  async getAsV78(key: number): Promise<Uint8Array> {
    assert(this.isV78)
    return this._chain.getStorage(this.blockHash, 'XcmpQueue', 'SignalMessages', key)
  }

  async getManyAsV78(keys: number[]): Promise<(Uint8Array)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'SignalMessages', keys.map(k => [k]))
  }

  async getAllAsV78(): Promise<(Uint8Array)[]> {
    assert(this.isV78)
    return this._chain.queryStorage(this.blockHash, 'XcmpQueue', 'SignalMessages')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getStorageItemTypeHash('XcmpQueue', 'SignalMessages') != null
  }
}
