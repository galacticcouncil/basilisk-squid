import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result} from './support'
import * as v42 from './v42'
import * as v55 from './v55'
import * as v62 from './v62'
import * as v71 from './v71'

export class AssetRegistryLocationSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetRegistry.LocationSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Native location set for an asset. \[asset_id, location\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('AssetRegistry.LocationSet') === '1797fb5d617accd6837fea7d8db938bccd6e290df300ad1756fe5fd2ad57794b'
  }

  /**
   * Native location set for an asset. \[asset_id, location\]
   */
  get asV42(): [number, v42.AssetLocation] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Native location set for an asset.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('AssetRegistry.LocationSet') === 'cb64e0569ed096dd70dc89ce4c0cffe3c6213a0117589ee8a65dbbd51f57caaa'
  }

  /**
   * Native location set for an asset.
   */
  get asV55(): {assetId: number, location: v55.AssetLocation} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetRegistryMetadataSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetRegistry.MetadataSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Metadata set for an asset. \[asset_id, symbol, decimals\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('AssetRegistry.MetadataSet') === 'cad7da1bfdc997e45555af3932618a9edaf0bdcedd143aba212bd33a734a2ff9'
  }

  /**
   * Metadata set for an asset. \[asset_id, symbol, decimals\]
   */
  get asV42(): [number, Uint8Array, number] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Metadata set for an asset.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('AssetRegistry.MetadataSet') === '5733a2ab6f544e91ef9651644e4a8f3fc7257fa3a961ba51dd1f0c862b7a7a0a'
  }

  /**
   * Metadata set for an asset.
   */
  get asV55(): {assetId: number, symbol: Uint8Array, decimals: number} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetRegistryRegisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetRegistry.Registered')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Asset was registered. \[asset_id, name, type\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('AssetRegistry.Registered') === '510495ed7e324b369098067e61ab7fafe595b625beb491dd78b4bef707e70be0'
  }

  /**
   * Asset was registered. \[asset_id, name, type\]
   */
  get asV42(): [number, Uint8Array, v42.AssetType] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Asset was registered.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('AssetRegistry.Registered') === '630ef237faec740bf89f2ba6fec4038447ad86f6dfd1d9b5df4dcfdd30d82d78'
  }

  /**
   * Asset was registered.
   */
  get asV55(): {assetId: number, assetName: Uint8Array, assetType: v55.AssetType} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetRegistryUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetRegistry.Updated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Asset was updated. \[asset_id, name, type\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('AssetRegistry.Updated') === '510495ed7e324b369098067e61ab7fafe595b625beb491dd78b4bef707e70be0'
  }

  /**
   * Asset was updated. \[asset_id, name, type\]
   */
  get asV42(): [number, Uint8Array, v42.AssetType] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Asset was updated.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('AssetRegistry.Updated') === '630ef237faec740bf89f2ba6fec4038447ad86f6dfd1d9b5df4dcfdd30d82d78'
  }

  /**
   * Asset was updated.
   */
  get asV55(): {assetId: number, assetName: Uint8Array, assetType: v55.AssetType} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesBalanceSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.BalanceSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A balance was set by root.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
  }

  /**
   * A balance was set by root.
   */
  get asV42(): {who: Uint8Array, free: bigint, reserved: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesDepositEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Deposit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was deposited (e.g. for transaction fees).
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was deposited (e.g. for transaction fees).
   */
  get asV42(): {who: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesDustLostEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.DustLost')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss.
   */
  get asV42(): {account: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesEndowedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Endowed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was created with some free balance.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
  }

  /**
   * An account was created with some free balance.
   */
  get asV42(): {account: Uint8Array, freeBalance: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesReserveRepatriatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.ReserveRepatriated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   */
  get asV42(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v42.BalanceStatus} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesReservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Reserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asV42(): {who: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Slashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior).
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior).
   */
  get asV42(): {who: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesTransferEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Transfer')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transfer succeeded.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
  }

  /**
   * Transfer succeeded.
   */
  get asV42(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesUnreservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Unreserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asV42(): {who: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesWithdrawEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Withdraw')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get asV42(): {who: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorSelectionCandidateAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorSelection.CandidateAdded')
    this._chain = ctx._chain
    this.event = event
  }

  get isV42(): boolean {
    return this._chain.getEventHash('CollatorSelection.CandidateAdded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  get asV42(): [Uint8Array, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorSelectionCandidateRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorSelection.CandidateRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  get isV42(): boolean {
    return this._chain.getEventHash('CollatorSelection.CandidateRemoved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  get asV42(): Uint8Array {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorSelectionNewCandidacyBondEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorSelection.NewCandidacyBond')
    this._chain = ctx._chain
    this.event = event
  }

  get isV42(): boolean {
    return this._chain.getEventHash('CollatorSelection.NewCandidacyBond') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
  }

  get asV42(): bigint {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorSelectionNewDesiredCandidatesEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorSelection.NewDesiredCandidates')
    this._chain = ctx._chain
    this.event = event
  }

  get isV42(): boolean {
    return this._chain.getEventHash('CollatorSelection.NewDesiredCandidates') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  get asV42(): number {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorSelectionNewInvulnerablesEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorSelection.NewInvulnerables')
    this._chain = ctx._chain
    this.event = event
  }

  get isV42(): boolean {
    return this._chain.getEventHash('CollatorSelection.NewInvulnerables') === 'b108f68a3a6ead7fe33d80e59b6d7124fdd14cd6108c81ad0b9d713fd6046122'
  }

  get asV42(): Uint8Array[] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Approved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV42(): {proposalHash: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Closed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV42(): {proposalHash: Uint8Array, yes: number, no: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilDisapprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Disapproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV42(): {proposalHash: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Council.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV42(): {proposalHash: Uint8Array, result: Result<null, v42.DispatchError>} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilMemberExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.MemberExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Council.MemberExecuted') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV42(): {proposalHash: Uint8Array, result: Result<null, v42.DispatchError>} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV42(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV42(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CumulusXcmExecutedDownwardEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CumulusXcm.ExecutedDownward')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === '155c7cce0948b8cb240d1401bb772a72b24567aa52618e9a4aaa84271c380044'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asV42(): [Uint8Array, v42.V2Outcome] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CumulusXcmInvalidFormatEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CumulusXcm.InvalidFormat')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message is invalid XCM.
   * \[ id \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('CumulusXcm.InvalidFormat') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
  }

  /**
   * Downward message is invalid XCM.
   * \[ id \]
   */
  get asV42(): Uint8Array {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CumulusXcmUnsupportedVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CumulusXcm.UnsupportedVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message is unsupported version of XCM.
   * \[ id \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('CumulusXcm.UnsupportedVersion') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
  }

  /**
   * Downward message is unsupported version of XCM.
   * \[ id \]
   */
  get asV42(): Uint8Array {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CurrenciesBalanceUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Currencies.BalanceUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Update balance success.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Currencies.BalanceUpdated') === 'e92fa8fb5becc55b6f0dba72d56fdf98916f0ed6d78140338d060861948ef797'
  }

  /**
   * Update balance success.
   */
  get asV42(): {currencyId: number, who: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CurrenciesDepositedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Currencies.Deposited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Deposit success.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Currencies.Deposited') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
  }

  /**
   * Deposit success.
   */
  get asV42(): {currencyId: number, who: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CurrenciesTransferredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Currencies.Transferred')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Currency transfer success.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Currencies.Transferred') === 'd02b411d552a8c2e6d90c70aa7f3ff856688d4b5e4a933253a8560ce04da6f04'
  }

  /**
   * Currency transfer success.
   */
  get asV42(): {currencyId: number, from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class CurrenciesWithdrawnEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Currencies.Withdrawn')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Withdraw success.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Currencies.Withdrawn') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
  }

  /**
   * Withdraw success.
   */
  get asV42(): {currencyId: number, who: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyBlacklistedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Blacklisted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal_hash has been blacklisted permanently.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.Blacklisted') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A proposal_hash has been blacklisted permanently.
   */
  get asV42(): {proposalHash: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyCancelledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Cancelled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A referendum has been cancelled.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A referendum has been cancelled.
   */
  get asV42(): {refIndex: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyDelegatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Delegated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account has delegated their vote to another account.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.Delegated') === 'd8ff3867ebae06e6ac747a81d5397793d2a1994d97871736019b811a47b1be06'
  }

  /**
   * An account has delegated their vote to another account.
   */
  get asV42(): {who: Uint8Array, target: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal has been enacted.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '98c3caaef1b84143deea16c761096200c5e0e631c6a3776ed012edc9788cf6e2'
  }

  /**
   * A proposal has been enacted.
   */
  get asV42(): {refIndex: number, result: Result<null, v42.DispatchError>} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyExternalTabledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.ExternalTabled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An external proposal has been tabled.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.ExternalTabled') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * An external proposal has been tabled.
   */
  get asV42(): null {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyNotPassedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.NotPassed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get asV42(): {refIndex: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPassedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Passed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal has been approved by referendum.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been approved by referendum.
   */
  get asV42(): {refIndex: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageInvalidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageInvalid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get asV42(): {proposalHash: Uint8Array, refIndex: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageMissingEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageMissing')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get asV42(): {proposalHash: Uint8Array, refIndex: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageNotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageNoted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === 'd070eaca902e57d242e4f2fcf32e1044fe909d807ce0a0303e2bb45499fc9748'
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get asV42(): {proposalHash: Uint8Array, who: Uint8Array, deposit: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageReapedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageReaped')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === '3140454b0dfcc8f9c1ccda6a2fe7f5153f3d34c52e1e5bb1d954b96b8f5dd4a5'
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get asV42(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint, reaper: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageUsedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageUsed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === '7b28a71d659ed286affdbc9e835b253b80485e4b3be08d04bfb153f8f8cc5241'
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get asV42(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion has been proposed by a public account.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
  }

  /**
   * A motion has been proposed by a public account.
   */
  get asV42(): {proposalIndex: number, deposit: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracySecondedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Seconded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account has secconded a proposal
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.Seconded') === '956e0986199802f7d7e337068d26fc51e710bdd0e5dd70631ef3328ea5baafe1'
  }

  /**
   * An account has secconded a proposal
   */
  get asV42(): {seconder: Uint8Array, propIndex: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyStartedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Started')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A referendum has begun.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
  }

  /**
   * A referendum has begun.
   */
  get asV42(): {refIndex: number, threshold: v42.VoteThreshold} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyTabledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Tabled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === 'a13f0b4abdda616a48f0910930f31ca5c2a2a8068c5289a35d395475289bd1e0'
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get asV42(): {proposalIndex: number, deposit: bigint, depositors: Uint8Array[]} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyUndelegatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Undelegated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account has cancelled a previous delegation operation.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.Undelegated') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * An account has cancelled a previous delegation operation.
   */
  get asV42(): {account: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyVetoedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Vetoed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An external proposal has been vetoed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.Vetoed') === '8c436495ac4c75fd20d25b6b1c1b2bbebbea576444eac1b5b7b15ecb833e5c4f'
  }

  /**
   * An external proposal has been vetoed.
   */
  get asV42(): {who: Uint8Array, proposalHash: Uint8Array, until: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account has voted in a referendum
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Democracy.Voted') === '1f7c6893e642faadc0fb2681a07f3aa74579a935cb93e932ab8fd8a9e9fe739c'
  }

  /**
   * An account has voted in a referendum
   */
  get asV42(): {voter: Uint8Array, refIndex: number, vote: v42.AccountVote} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueExecutedDownwardEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.ExecutedDownward')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '286143d78cae88e1dcd7f8fca6da4dcb49ebc3ba61ad473eec7ff13812f3fd56'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asV42(): [Uint8Array, v42.V2Outcome] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueInvalidFormatEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.InvalidFormat')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message is invalid XCM.
   * \[ id \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('DmpQueue.InvalidFormat') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * Downward message is invalid XCM.
   * \[ id \]
   */
  get asV42(): Uint8Array {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueOverweightEnqueuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.OverweightEnqueued')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message is overweight and was placed in the overweight queue.
   * \[ id, index, required \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
  }

  /**
   * Downward message is overweight and was placed in the overweight queue.
   * \[ id, index, required \]
   */
  get asV42(): [Uint8Array, bigint, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueOverweightServicedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.OverweightServiced')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message from the overweight queue was executed.
   * \[ index, used \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
  }

  /**
   * Downward message from the overweight queue was executed.
   * \[ index, used \]
   */
  get asV42(): [bigint, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueUnsupportedVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.UnsupportedVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message is unsupported version of XCM.
   * \[ id \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * Downward message is unsupported version of XCM.
   * \[ id \]
   */
  get asV42(): Uint8Array {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueWeightExhaustedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.WeightExhausted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The weight limit for handling downward messages was reached.
   * \[ id, remaining, required \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('DmpQueue.WeightExhausted') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
  }

  /**
   * The weight limit for handling downward messages was reached.
   * \[ id, remaining, required \]
   */
  get asV42(): [Uint8Array, bigint, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class DusterAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Duster.Added')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Account added to non-dustable list.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Duster.Added') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * Account added to non-dustable list.
   */
  get asV42(): Uint8Array {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Account added to non-dustable list.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Duster.Added') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
  }

  /**
   * Account added to non-dustable list.
   */
  get asV55(): {who: Uint8Array} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class DusterDustedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Duster.Dusted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Account dusted.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Duster.Dusted') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * Account dusted.
   */
  get asV42(): [Uint8Array, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Account dusted.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Duster.Dusted') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Account dusted.
   */
  get asV55(): {who: Uint8Array, amount: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class DusterRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Duster.Removed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Account removed from non-dustable list.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Duster.Removed') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * Account removed from non-dustable list.
   */
  get asV42(): Uint8Array {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Account removed from non-dustable list.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Duster.Removed') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
  }

  /**
   * Account removed from non-dustable list.
   */
  get asV55(): {who: Uint8Array} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class ElectionsCandidateSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Elections.CandidateSlashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A candidate was slashed by amount due to failing to obtain a seat as member or
   * runner-up.
   * 
   * Note that old members and runners-up are also candidates.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Elections.CandidateSlashed') === 'a64270141b7a7c84c0950e5dcd31bc284b27b39505d278ff519f44f855ee33d8'
  }

  /**
   * A candidate was slashed by amount due to failing to obtain a seat as member or
   * runner-up.
   * 
   * Note that old members and runners-up are also candidates.
   */
  get asV42(): {candidate: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ElectionsElectionErrorEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Elections.ElectionError')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Internal error happened while trying to perform election.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Elections.ElectionError') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Internal error happened while trying to perform election.
   */
  get asV42(): null {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ElectionsEmptyTermEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Elections.EmptyTerm')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * No (or not enough) candidates existed for this round. This is different from
   * `NewTerm(\[\])`. See the description of `NewTerm`.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Elections.EmptyTerm') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * No (or not enough) candidates existed for this round. This is different from
   * `NewTerm(\[\])`. See the description of `NewTerm`.
   */
  get asV42(): null {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ElectionsMemberKickedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Elections.MemberKicked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A member has been removed. This should always be followed by either `NewTerm` or
   * `EmptyTerm`.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Elections.MemberKicked') === '13de6e9f12582c043401d65d7388be083b4b273c04f13f132e51e1f673bee999'
  }

  /**
   * A member has been removed. This should always be followed by either `NewTerm` or
   * `EmptyTerm`.
   */
  get asV42(): {member: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ElectionsNewTermEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Elections.NewTerm')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new term with new_members. This indicates that enough candidates existed to run
   * the election, not that enough have has been elected. The inner value must be examined
   * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
   * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
   * begin with.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Elections.NewTerm') === 'c26c6ac673ee46db2001722c75880df159f382274469750dc468b868c6f738c8'
  }

  /**
   * A new term with new_members. This indicates that enough candidates existed to run
   * the election, not that enough have has been elected. The inner value must be examined
   * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
   * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
   * begin with.
   */
  get asV42(): {newMembers: [Uint8Array, bigint][]} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ElectionsRenouncedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Elections.Renounced')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Someone has renounced their candidacy.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Elections.Renounced') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
  }

  /**
   * Someone has renounced their candidacy.
   */
  get asV42(): {candidate: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ElectionsSeatHolderSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Elections.SeatHolderSlashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A seat holder was slashed by amount by being forcefully removed from the set.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Elections.SeatHolderSlashed') === '7a1552e3cb4a3dc87408db4d42391f3a98998bb0e6bf70aa82661919c4d12eaa'
  }

  /**
   * A seat holder was slashed by amount by being forcefully removed from the set.
   */
  get asV42(): {seatHolder: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ExchangeInsufficientAssetBalanceEventEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Exchange.InsufficientAssetBalanceEvent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Error event - insufficient balance of specified asset
   * who, asset, intention type, intention id, error detail
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Exchange.InsufficientAssetBalanceEvent') === '16f4fbd4a6aa2e7a167a260a0a2b0dbe3d9c80fa30fed8a40ac602fb8c53ab68'
  }

  /**
   * Error event - insufficient balance of specified asset
   * who, asset, intention type, intention id, error detail
   */
  get asV42(): [Uint8Array, number, v42.IntentionType, Uint8Array, v42.DispatchError] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Error event - insufficient balance of specified asset
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Exchange.InsufficientAssetBalanceEvent') === 'bf05d1ed6cafd93e76667464d8d1793d52096e17aba8b14688f595c542bc3fa3'
  }

  /**
   * Error event - insufficient balance of specified asset
   */
  get asV55(): {who: Uint8Array, assetId: number, intentionType: v55.IntentionType, intentionId: Uint8Array, errorDetail: v55.DispatchError} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class ExchangeIntentionRegisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Exchange.IntentionRegistered')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Intention registered event
   * [who, asset a, asset b, amount, intention type, intention id]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Exchange.IntentionRegistered') === '6513225c97fa1f646dd658493b34f5cffc59d8c24c05ec4be1d6c1c444d46f8a'
  }

  /**
   * Intention registered event
   * [who, asset a, asset b, amount, intention type, intention id]
   */
  get asV42(): [Uint8Array, number, number, bigint, v42.IntentionType, Uint8Array] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Intention registered event
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Exchange.IntentionRegistered') === '64a8caa88c137e5343053fdab59bbaa2e1d556354211e9da9b5cd9fa372e7558'
  }

  /**
   * Intention registered event
   */
  get asV55(): {who: Uint8Array, assetA: number, assetB: number, amount: bigint, intentionType: v55.IntentionType, intentionId: Uint8Array} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class ExchangeIntentionResolveErrorEventEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Exchange.IntentionResolveErrorEvent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Intention Error Event
   * who, assets, sell or buy, intention id, error detail
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Exchange.IntentionResolveErrorEvent') === 'caf0c24256335c14aacaf541ebbd6e63949a27c0451494762aa46c4fa2f0537f'
  }

  /**
   * Intention Error Event
   * who, assets, sell or buy, intention id, error detail
   */
  get asV42(): [Uint8Array, v42.AssetPair, v42.IntentionType, Uint8Array, v42.DispatchError] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Intention Error Event
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Exchange.IntentionResolveErrorEvent') === 'bd02241c561dfd516c7f1194bc16e4c47b0e17dd754351211fdfc47a3b13f298'
  }

  /**
   * Intention Error Event
   */
  get asV55(): {who: Uint8Array, assetIds: v55.AssetPair, intentionType: v55.IntentionType, intentionId: Uint8Array, errorDetail: v55.DispatchError} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class ExchangeIntentionResolvedAmmTradeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Exchange.IntentionResolvedAMMTrade')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Intention resolved as AMM Trade
   * [who, intention type, intention id, amount, amount sold/bought, pool account id]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Exchange.IntentionResolvedAMMTrade') === 'e37584b22e482a7ae91d302d47b5441d3b4f65c3506894344f47cbd989b0ec6b'
  }

  /**
   * Intention resolved as AMM Trade
   * [who, intention type, intention id, amount, amount sold/bought, pool account id]
   */
  get asV42(): [Uint8Array, v42.IntentionType, Uint8Array, bigint, bigint, Uint8Array] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Intention resolved as AMM Trade
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Exchange.IntentionResolvedAMMTrade') === 'fd555add847dc1a0e01b03edd94c68abeb0e7eb37b606f23d6877d5f0a355486'
  }

  /**
   * Intention resolved as AMM Trade
   */
  get asV55(): {who: Uint8Array, intentionType: v55.IntentionType, intentionId: Uint8Array, amount: bigint, amountSoldOrBought: bigint, poolAccountId: Uint8Array} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class ExchangeIntentionResolvedDirectTradeEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Exchange.IntentionResolvedDirectTrade')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Intention resolved as Direct Trade
   * [account A, account B, intention id A, intention id B, amount A, amount B]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Exchange.IntentionResolvedDirectTrade') === '23977d9db1c6b35fff68ea0103853a6643e4c5fe2027f3651d603931ac03c7c6'
  }

  /**
   * Intention resolved as Direct Trade
   * [account A, account B, intention id A, intention id B, amount A, amount B]
   */
  get asV42(): [Uint8Array, Uint8Array, Uint8Array, Uint8Array, bigint, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Intention resolved as Direct Trade
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Exchange.IntentionResolvedDirectTrade') === 'd9a6887bfdcd8d1dbf1038a19f621c7f20326b7d80493cb0aec31529fd30656f'
  }

  /**
   * Intention resolved as Direct Trade
   */
  get asV55(): {accountIdA: Uint8Array, accountIdB: Uint8Array, intentionIdA: Uint8Array, intentionIdB: Uint8Array, amountA: bigint, amountB: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class ExchangeIntentionResolvedDirectTradeFeesEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Exchange.IntentionResolvedDirectTradeFees')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Paid fees event
   * [who, intention id, fee receiver, asset id, fee amount]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Exchange.IntentionResolvedDirectTradeFees') === '827911ab6e353df097c0e1db11216d9126f68fe420c31723aa0cde29298cae44'
  }

  /**
   * Paid fees event
   * [who, intention id, fee receiver, asset id, fee amount]
   */
  get asV42(): [Uint8Array, Uint8Array, Uint8Array, number, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Paid fees event
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Exchange.IntentionResolvedDirectTradeFees') === '3fa7fb9330c8690b1cc20b483869ea48ed6111278faacd27c4f1890df44051d7'
  }

  /**
   * Paid fees event
   */
  get asV55(): {who: Uint8Array, intentionId: Uint8Array, feeReceiver: Uint8Array, assetId: number, feeAmount: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityIdentityClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.IdentityCleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A name was cleared, and the given balance returned.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Identity.IdentityCleared') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
  }

  /**
   * A name was cleared, and the given balance returned.
   */
  get asV55(): {who: Uint8Array, deposit: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityIdentityKilledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.IdentityKilled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A name was removed and the given balance slashed.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Identity.IdentityKilled') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
  }

  /**
   * A name was removed and the given balance slashed.
   */
  get asV55(): {who: Uint8Array, deposit: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityIdentitySetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.IdentitySet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A name was set or reset (which will remove all judgements).
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Identity.IdentitySet') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
  }

  /**
   * A name was set or reset (which will remove all judgements).
   */
  get asV55(): {who: Uint8Array} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityJudgementGivenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.JudgementGiven')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A judgement was given by a registrar.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Identity.JudgementGiven') === '0771fa05d0977d28db0dee420efa5c006fa01a48edbd0b5b50cba5ea1d98b1b8'
  }

  /**
   * A judgement was given by a registrar.
   */
  get asV55(): {target: Uint8Array, registrarIndex: number} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityJudgementRequestedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.JudgementRequested')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A judgement was asked from a registrar.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Identity.JudgementRequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
  }

  /**
   * A judgement was asked from a registrar.
   */
  get asV55(): {who: Uint8Array, registrarIndex: number} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityJudgementUnrequestedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.JudgementUnrequested')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A judgement request was retracted.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Identity.JudgementUnrequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
  }

  /**
   * A judgement request was retracted.
   */
  get asV55(): {who: Uint8Array, registrarIndex: number} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentityRegistrarAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.RegistrarAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A registrar was added.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Identity.RegistrarAdded') === 'c7c8fe6ce04ac3d49accb0e86098814baf3baab267afb645140023a3c5c84c24'
  }

  /**
   * A registrar was added.
   */
  get asV55(): {registrarIndex: number} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentitySubIdentityAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.SubIdentityAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sub-identity was added to an identity and the deposit paid.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityAdded') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
  }

  /**
   * A sub-identity was added to an identity and the deposit paid.
   */
  get asV55(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentitySubIdentityRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.SubIdentityRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sub-identity was removed from an identity and the deposit freed.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityRemoved') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
  }

  /**
   * A sub-identity was removed from an identity and the deposit freed.
   */
  get asV55(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class IdentitySubIdentityRevokedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Identity.SubIdentityRevoked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sub-identity was cleared, and the given deposit repatriated from the
   * main identity account to the sub-identity account.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityRevoked') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
  }

  /**
   * A sub-identity was cleared, and the given deposit repatriated from the
   * main identity account to the sub-identity account.
   */
  get asV55(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class LbpBuyExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LBP.BuyExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Purchase executed. [who, asset_out, asset_in, amount, buy_price, fee_asset, fee_amount]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LBP.BuyExecuted') === 'ecc25bcf12815b05b2b209f64e69ff0e6d34572a4182f318f8448fd2d04432a8'
  }

  /**
   * Purchase executed. [who, asset_out, asset_in, amount, buy_price, fee_asset, fee_amount]
   */
  get asV42(): [Uint8Array, number, number, bigint, bigint, number, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Purchase executed.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('LBP.BuyExecuted') === '9abb9815d28be33a3d917cc4b09064f613479613b3eaa765e422391ca3e3cf70'
  }

  /**
   * Purchase executed.
   */
  get asV55(): {who: Uint8Array, assetOut: number, assetIn: number, amount: bigint, buyPrice: bigint, feeAsset: number, feeAmount: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class LbpLiquidityAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LBP.LiquidityAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New liquidity was provided to the pool. [who, asset_a, asset_b, amount_a, amount_b]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LBP.LiquidityAdded') === '3dd2f936e3315ce70a11310614d5a07cf9dcddb702b85bbd84b54767877596a0'
  }

  /**
   * New liquidity was provided to the pool. [who, asset_a, asset_b, amount_a, amount_b]
   */
  get asV42(): [Uint8Array, number, number, bigint, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * New liquidity was provided to the pool.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('LBP.LiquidityAdded') === '3193e6555f21c9e90548b027501d705082e3e32963394730588a4c59f0b47fa0'
  }

  /**
   * New liquidity was provided to the pool.
   */
  get asV55(): {who: Uint8Array, assetA: number, assetB: number, amountA: bigint, amountB: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class LbpLiquidityRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LBP.LiquidityRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Liquidity was removed from the pool and the pool was destroyed. [who, asset_a, asset_b, amount_a, amount_b]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LBP.LiquidityRemoved') === '3dd2f936e3315ce70a11310614d5a07cf9dcddb702b85bbd84b54767877596a0'
  }

  /**
   * Liquidity was removed from the pool and the pool was destroyed. [who, asset_a, asset_b, amount_a, amount_b]
   */
  get asV42(): [Uint8Array, number, number, bigint, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Liquidity was removed from the pool and the pool was destroyed.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('LBP.LiquidityRemoved') === '3193e6555f21c9e90548b027501d705082e3e32963394730588a4c59f0b47fa0'
  }

  /**
   * Liquidity was removed from the pool and the pool was destroyed.
   */
  get asV55(): {who: Uint8Array, assetA: number, assetB: number, amountA: bigint, amountB: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class LbpPoolCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LBP.PoolCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Pool was created by the `CreatePool` origin. [pool_id, pool_data]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LBP.PoolCreated') === '816eb97f9281644e23f4d40e0708a41b5820e733b0676951efe9570cbc4a2da0'
  }

  /**
   * Pool was created by the `CreatePool` origin. [pool_id, pool_data]
   */
  get asV42(): [Uint8Array, v42.Pool] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Pool was created by the `CreatePool` origin.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('LBP.PoolCreated') === '730545cedc91e90531565c46bd750de82c9996b9bc2a88bf23ff4e2863303ee5'
  }

  /**
   * Pool was created by the `CreatePool` origin.
   */
  get asV55(): {pool: Uint8Array, data: v55.Pool} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class LbpPoolUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LBP.PoolUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Pool data were updated. [pool_id, pool_data]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LBP.PoolUpdated') === '816eb97f9281644e23f4d40e0708a41b5820e733b0676951efe9570cbc4a2da0'
  }

  /**
   * Pool data were updated. [pool_id, pool_data]
   */
  get asV42(): [Uint8Array, v42.Pool] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Pool data were updated.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('LBP.PoolUpdated') === '730545cedc91e90531565c46bd750de82c9996b9bc2a88bf23ff4e2863303ee5'
  }

  /**
   * Pool data were updated.
   */
  get asV55(): {pool: Uint8Array, data: v55.Pool} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class LbpSellExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LBP.SellExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Sale executed. [who, asset_in, asset_out, amount, sale_price, fee_asset, fee_amount]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LBP.SellExecuted') === 'ecc25bcf12815b05b2b209f64e69ff0e6d34572a4182f318f8448fd2d04432a8'
  }

  /**
   * Sale executed. [who, asset_in, asset_out, amount, sale_price, fee_asset, fee_amount]
   */
  get asV42(): [Uint8Array, number, number, bigint, bigint, number, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Sale executed.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('LBP.SellExecuted') === '42ff895a6deae985d5384bd5679bbe16c810748f42fdfd7040f08c4b32d0951c'
  }

  /**
   * Sale executed.
   */
  get asV55(): {who: Uint8Array, assetIn: number, assetOut: number, amount: bigint, salePrice: bigint, feeAsset: number, feeAmount: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningFarmAccRpzUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.FarmAccRPZUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Farm's(`GlobalPool`) accumulated reward per share was updated.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LiquidityMining.FarmAccRPZUpdated') === '3ac6a3ec426ee6e882067bf3b0da1b7ca7c543e52c86bc41f62018483e3c226e'
  }

  /**
   * Farm's(`GlobalPool`) accumulated reward per share was updated.
   */
  get asV42(): {farmId: number, accumulatedRpz: bigint, totalSharesZ: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningFarmCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.FarmCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New farm was created.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LiquidityMining.FarmCreated') === '3a7fa0ffa7b47fa650d8230318054549f6812a1aad58b83fe349a55fb3e8bc37'
  }

  /**
   * New farm was created.
   */
  get asV42(): {farmId: number, owner: Uint8Array, rewardCurrency: number, yieldPerPeriod: number, plannedYieldingPeriods: number, blocksPerPeriod: number, incentivizedAsset: number, maxRewardPerPeriod: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningFarmDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.FarmDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Farm was destroyed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LiquidityMining.FarmDestroyed') === 'f3f8215e4182f97431f3b239a0ebcfb43596478fce05fc7e76077a2e36497a9a'
  }

  /**
   * Farm was destroyed.
   */
  get asV42(): {id: number, who: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningLiquidityMiningCanceledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.LiquidityMiningCanceled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Liquidity mining for asset pair was canceled.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LiquidityMining.LiquidityMiningCanceled') === '19b58d04e4966ff7e14f182fc72ccd60434466baaabcee8713ba704d09739605'
  }

  /**
   * Liquidity mining for asset pair was canceled.
   */
  get asV42(): {farmId: number, liqPoolFarmId: number, who: Uint8Array, assetPair: v42.AssetPair} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningLiquidityMiningResumedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.LiquidityMiningResumed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Liquidity mining for asset pair was resumed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LiquidityMining.LiquidityMiningResumed') === '0fa09379946e358be73976098eaab370f7b6cf8641e914a43a824a57650b1336'
  }

  /**
   * Liquidity mining for asset pair was resumed.
   */
  get asV42(): {farmId: number, liqPoolFarmId: number, who: Uint8Array, assetPair: v42.AssetPair, multiplier: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningLiquidityPoolAccRpvsUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.LiquidityPoolAccRPVSUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Liquidity pool's `accumulated_rpvs` was updated.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LiquidityMining.LiquidityPoolAccRPVSUpdated') === '718288c0dfffe63cff11b11126fe8c92ec8dc8fca84cb8dcffc46e8ea96bf637'
  }

  /**
   * Liquidity pool's `accumulated_rpvs` was updated.
   */
  get asV42(): {farmId: number, liqPoolFarmId: number, accumulatedRpvs: bigint, totalValuedShares: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningLiquidityPoolAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.LiquidityPoolAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New liq. pool was added into the farm.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LiquidityMining.LiquidityPoolAdded') === 'be41f94bfbbc561fedb7af47039dd3bb65bfe151312c0a8aa74793d9b2466ef3'
  }

  /**
   * New liq. pool was added into the farm.
   */
  get asV42(): {farmId: number, liqPoolFarmId: number, multiplier: bigint, nftClass: bigint, assetPair: v42.AssetPair, loyaltyCurve: (v42.LoyaltyCurve | undefined)} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningLiquidityPoolRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.LiquidityPoolRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Liquidity pool was removed from farm.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LiquidityMining.LiquidityPoolRemoved') === '19b58d04e4966ff7e14f182fc72ccd60434466baaabcee8713ba704d09739605'
  }

  /**
   * Liquidity pool was removed from farm.
   */
  get asV42(): {farmId: number, liqPoolFarmId: number, who: Uint8Array, assetPair: v42.AssetPair} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningLiquidityPoolUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.LiquidityPoolUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Liquidity pool multiplier was updated.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LiquidityMining.LiquidityPoolUpdated') === '0fa09379946e358be73976098eaab370f7b6cf8641e914a43a824a57650b1336'
  }

  /**
   * Liquidity pool multiplier was updated.
   */
  get asV42(): {farmId: number, liqPoolFarmId: number, who: Uint8Array, assetPair: v42.AssetPair, multiplier: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningRewardClaimedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.RewardClaimed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Rewards was claimed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LiquidityMining.RewardClaimed') === '526cb39e8535df93c1b829cab01673b89750a48fd0a75a192bf5cb831e46eb74'
  }

  /**
   * Rewards was claimed.
   */
  get asV42(): {farmId: number, liqPoolFarmId: number, who: Uint8Array, claimed: bigint, rewardCurrency: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningSharesDepositedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.SharesDeposited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New LP tokens was deposited.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LiquidityMining.SharesDeposited') === '940a8a1c892a239a4755607c92e1f431cec68a3762805600a6a21a8f456bbcc9'
  }

  /**
   * New LP tokens was deposited.
   */
  get asV42(): {farmId: number, liqPoolFarmId: number, who: Uint8Array, amount: bigint, lpToken: number, nftClassId: bigint, nftInstanceId: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningSharesWithdrawnEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.SharesWithdrawn')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * LP tokens was withdrawn.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LiquidityMining.SharesWithdrawn') === '8e54476b8a9f066136c8333955d1c142fba5b998834a332e3e55c9006721c569'
  }

  /**
   * LP tokens was withdrawn.
   */
  get asV42(): {farmId: number, liqPoolFarmId: number, who: Uint8Array, lpToken: number, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningUndistributedRewardsWithdrawnEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.UndistributedRewardsWithdrawn')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Undistributed rewards was withdrawn from farm.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('LiquidityMining.UndistributedRewardsWithdrawn') === 'e2121e7f1a5f105da0feee387c03d6e67a3b710bbec99a69d10f038e13a1b99f'
  }

  /**
   * Undistributed rewards was withdrawn from farm.
   */
  get asV42(): {farmId: number, who: Uint8Array, rewardCurrency: number, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class MarketplaceOfferAcceptedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Marketplace.OfferAccepted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Offer was accepted \[sender, class_id, instance_id\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Marketplace.OfferAccepted') === '426271b0ff71255c125e9a4ea897d86d39682c8454bbff4c6c9a8d50e0d966a4'
  }

  /**
   * Offer was accepted \[sender, class_id, instance_id\]
   */
  get asV42(): [Uint8Array, bigint, bigint, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Offer was accepted
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Marketplace.OfferAccepted') === '809213614dd888d0b0df83a1b4bb816a4bb8f7d702f40d7145c4c9532e70508e'
  }

  /**
   * Offer was accepted
   */
  get asV55(): {who: Uint8Array, class: bigint, instance: bigint, amount: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Offer was accepted
   */
  get isV62(): boolean {
    return this._chain.getEventHash('Marketplace.OfferAccepted') === 'f0c64969aa0bb38598d60ee40e1c6befae4abc5b1835302ebc1b957c05eb0c42'
  }

  /**
   * Offer was accepted
   */
  get asV62(): {who: Uint8Array, class: bigint, instance: bigint, amount: bigint, maker: Uint8Array} {
    assert(this.isV62)
    return this._chain.decodeEvent(this.event)
  }
}

export class MarketplaceOfferPlacedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Marketplace.OfferPlaced')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Offer was placed on a token \[offerer, class_id, instance_id, price, expires\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Marketplace.OfferPlaced') === '0c0020b8a59f4c44bfafff6516e075c67efa07d49d2257040c27bd47de251831'
  }

  /**
   * Offer was placed on a token \[offerer, class_id, instance_id, price, expires\]
   */
  get asV42(): [Uint8Array, bigint, bigint, bigint, number] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Offer was placed on a token
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Marketplace.OfferPlaced') === 'e16435d4410d4a6b6ffce5b4169856dae7831e563e44572ff395cd265d9d64d1'
  }

  /**
   * Offer was placed on a token
   */
  get asV55(): {who: Uint8Array, class: bigint, instance: bigint, amount: bigint, expires: number} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class MarketplaceOfferWithdrawnEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Marketplace.OfferWithdrawn')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Offer was withdrawn \[sender, class_id, instance_id\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Marketplace.OfferWithdrawn') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
  }

  /**
   * Offer was withdrawn \[sender, class_id, instance_id\]
   */
  get asV42(): [Uint8Array, bigint, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Offer was withdrawn
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Marketplace.OfferWithdrawn') === '669141c2bfed250cfd51ec61736d5b23f65d22716737b27cfa84f9a287f1412f'
  }

  /**
   * Offer was withdrawn
   */
  get asV55(): {who: Uint8Array, class: bigint, instance: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class MarketplaceRoyaltyAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Marketplace.RoyaltyAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Marketplace data has been added \[class_type, sender, class_id, instance_id\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Marketplace.RoyaltyAdded') === 'b25c5b1351882b8049f26b3ffe8318b0c04beabe7f3b1174b983af490abf68f7'
  }

  /**
   * Marketplace data has been added \[class_type, sender, class_id, instance_id\]
   */
  get asV42(): [bigint, bigint, Uint8Array, number] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Marketplace data has been added
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Marketplace.RoyaltyAdded') === 'f0b773a6ad41ebc0b1145b9a33782c7e6ea900db44e465cd5ee41e90a342ce57'
  }

  /**
   * Marketplace data has been added
   */
  get asV55(): {class: bigint, instance: bigint, author: Uint8Array, royalty: number} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Marketplace data has been added
   */
  get isV75(): boolean {
    return this._chain.getEventHash('Marketplace.RoyaltyAdded') === '18115ec476316fefe14576ec64313da7708cf5ff92d25bca21c7cb2e50a12098'
  }

  /**
   * Marketplace data has been added
   */
  get asV75(): {class: bigint, instance: bigint, author: Uint8Array, royalty: number} {
    assert(this.isV75)
    return this._chain.decodeEvent(this.event)
  }
}

export class MarketplaceRoyaltyPaidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Marketplace.RoyaltyPaid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Royalty hs been paid to the author \[class_id, instance_id, author, royalty, royalty_amount\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Marketplace.RoyaltyPaid') === '82293205d464a489606def2289dde2ad7444a78cb3ae19f599a2160d68a0b720'
  }

  /**
   * Royalty hs been paid to the author \[class_id, instance_id, author, royalty, royalty_amount\]
   */
  get asV42(): [bigint, bigint, Uint8Array, number, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Royalty hs been paid to the author
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Marketplace.RoyaltyPaid') === '3f9760ce8b8d78244eecfd769b57213a52326480392d53bcbaef555fda8245b2'
  }

  /**
   * Royalty hs been paid to the author
   */
  get asV55(): {class: bigint, instance: bigint, author: Uint8Array, royalty: number, royaltyAmount: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Royalty hs been paid to the author
   */
  get isV75(): boolean {
    return this._chain.getEventHash('Marketplace.RoyaltyPaid') === 'c299a673e7fd4c339f13007a754569929c4cf22b3f425157c44da6cb3ede4136'
  }

  /**
   * Royalty hs been paid to the author
   */
  get asV75(): {class: bigint, instance: bigint, author: Uint8Array, royalty: number, royaltyAmount: bigint} {
    assert(this.isV75)
    return this._chain.decodeEvent(this.event)
  }
}

export class MarketplaceTokenPriceUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Marketplace.TokenPriceUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The price for a token was updated \[owner, class_id, instance_id, price\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Marketplace.TokenPriceUpdated') === '4100700286e3b39a636551e9e9872940d3c125d1b8729ac058742455e638fbe2'
  }

  /**
   * The price for a token was updated \[owner, class_id, instance_id, price\]
   */
  get asV42(): [Uint8Array, bigint, bigint, (bigint | undefined)] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The price for a token was updated
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Marketplace.TokenPriceUpdated') === '36db2c5ce4786a5437e40968bfcb5727b1548bed0fec7d93b771e5f589c2233a'
  }

  /**
   * The price for a token was updated
   */
  get asV55(): {who: Uint8Array, class: bigint, instance: bigint, price: (bigint | undefined)} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class MarketplaceTokenSoldEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Marketplace.TokenSold')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Token was sold to a new owner \[owner, buyer, class_id, instance_id, price\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Marketplace.TokenSold') === '4a3bc2182538af0cb911036daeda76c419c2f42491eda8f66b9ca681035507c0'
  }

  /**
   * Token was sold to a new owner \[owner, buyer, class_id, instance_id, price\]
   */
  get asV42(): [Uint8Array, Uint8Array, bigint, bigint, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Token was sold to a new owner
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Marketplace.TokenSold') === 'c30b6db0fb1c37eb14b31c9148a9b2c3afdbe6f034f90a5f7160a284a8388c46'
  }

  /**
   * Token was sold to a new owner
   */
  get asV55(): {owner: Uint8Array, buyer: Uint8Array, class: bigint, instance: bigint, price: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTransactionPaymentCurrencyAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTransactionPayment.CurrencyAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New accepted currency added
   * [currency]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('MultiTransactionPayment.CurrencyAdded') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * New accepted currency added
   * [currency]
   */
  get asV42(): number {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * New accepted currency added
   * [currency]
   */
  get isV55(): boolean {
    return this._chain.getEventHash('MultiTransactionPayment.CurrencyAdded') === '54828f2ad0eb28b7ccfebfbc9a9a269c2c381874a095b3dc64004ab1045d27b5'
  }

  /**
   * New accepted currency added
   * [currency]
   */
  get asV55(): {assetId: number} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTransactionPaymentCurrencyRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTransactionPayment.CurrencyRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Accepted currency removed
   * [currency]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('MultiTransactionPayment.CurrencyRemoved') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * Accepted currency removed
   * [currency]
   */
  get asV42(): number {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Accepted currency removed
   * [currency]
   */
  get isV55(): boolean {
    return this._chain.getEventHash('MultiTransactionPayment.CurrencyRemoved') === '54828f2ad0eb28b7ccfebfbc9a9a269c2c381874a095b3dc64004ab1045d27b5'
  }

  /**
   * Accepted currency removed
   * [currency]
   */
  get asV55(): {assetId: number} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTransactionPaymentCurrencySetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTransactionPayment.CurrencySet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * CurrencySet
   * [who, currency]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('MultiTransactionPayment.CurrencySet') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   * CurrencySet
   * [who, currency]
   */
  get asV42(): [Uint8Array, number] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * CurrencySet
   * [who, currency]
   */
  get isV55(): boolean {
    return this._chain.getEventHash('MultiTransactionPayment.CurrencySet') === 'e363878847f08e41654b7e9693d2ed1b2d68f1a11a4080a488f23f03d4568eb3'
  }

  /**
   * CurrencySet
   * [who, currency]
   */
  get asV55(): {accountId: Uint8Array, assetId: number} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTransactionPaymentFeeWithdrawnEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTransactionPayment.FeeWithdrawn')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transaction fee paid in non-native currency
   * [Account, Currency, Native fee amount, Non-native fee amount, Destination account]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('MultiTransactionPayment.FeeWithdrawn') === 'ce62befa7ac4d353de7b837cf46a284bc15b4fbe619114d3daf0c8525938bded'
  }

  /**
   * Transaction fee paid in non-native currency
   * [Account, Currency, Native fee amount, Non-native fee amount, Destination account]
   */
  get asV42(): [Uint8Array, number, bigint, bigint, Uint8Array] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transaction fee paid in non-native currency
   * [Account, Currency, Native fee amount, Non-native fee amount, Destination account]
   */
  get isV55(): boolean {
    return this._chain.getEventHash('MultiTransactionPayment.FeeWithdrawn') === '688b18e799fc3f57dcaba8bf913ca803ddcdc43ec8acdc0b6fc309f9e486aa1a'
  }

  /**
   * Transaction fee paid in non-native currency
   * [Account, Currency, Native fee amount, Non-native fee amount, Destination account]
   */
  get asV55(): {accountId: Uint8Array, assetId: number, nativeFeeAmount: bigint, nonNativeFeeAmount: bigint, destinationAccountId: Uint8Array} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultisigMultisigApprovalEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Multisig.MultisigApproval')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A multisig operation has been approved by someone.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Multisig.MultisigApproval') === 'bc800106752cebb28b84cdca738856289d0ade8d1818c303bd3f2000695fbb28'
  }

  /**
   * A multisig operation has been approved by someone.
   */
  get asV55(): {approving: Uint8Array, timepoint: v55.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultisigMultisigCancelledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Multisig.MultisigCancelled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A multisig operation has been cancelled.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Multisig.MultisigCancelled') === 'b24b244f000fd9e834b0f8c6d23aa3931d80d5b1c70f0f9a0e28826f22125b21'
  }

  /**
   * A multisig operation has been cancelled.
   */
  get asV55(): {cancelling: Uint8Array, timepoint: v55.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultisigMultisigExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Multisig.MultisigExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A multisig operation has been executed.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Multisig.MultisigExecuted') === '64fde797dd4ea0a5e8b72fba6c3511764d52e9d275c92fae4375d984eddab747'
  }

  /**
   * A multisig operation has been executed.
   */
  get asV55(): {approving: Uint8Array, timepoint: v55.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: Result<null, v55.DispatchError>} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultisigNewMultisigEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Multisig.NewMultisig')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new multisig operation has begun.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('Multisig.NewMultisig') === '137bdeb26018c08567fabc1c357d536046e92cc9fdf480339be5bc9e7e56d3be'
  }

  /**
   * A new multisig operation has begun.
   */
  get asV55(): {approving: Uint8Array, multisig: Uint8Array, callHash: Uint8Array} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftClassCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'NFT.ClassCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A class was created \[owner, class_id, class_type\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('NFT.ClassCreated') === '964234ae203d3207b740072bc8630eee21c72fe7995f3fc03e62f0bb443cca32'
  }

  /**
   * A class was created \[owner, class_id, class_type\]
   */
  get asV42(): {owner: Uint8Array, classId: bigint, classType: v42.ClassType, metadata: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A class was created \[owner, class_id, class_type\]
   */
  get isV62(): boolean {
    return this._chain.getEventHash('NFT.ClassCreated') === '7adeb3f2ae9b2b9c39201542a741e44b5484fadd52179e412e45be77a794f225'
  }

  /**
   * A class was created \[owner, class_id, class_type\]
   */
  get asV62(): {owner: Uint8Array, classId: bigint, classType: v62.ClassType} {
    assert(this.isV62)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A class was created
   */
  get isV71(): boolean {
    return this._chain.getEventHash('NFT.ClassCreated') === '964234ae203d3207b740072bc8630eee21c72fe7995f3fc03e62f0bb443cca32'
  }

  /**
   * A class was created
   */
  get asV71(): {owner: Uint8Array, classId: bigint, classType: v71.ClassType, metadata: Uint8Array} {
    assert(this.isV71)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftClassDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'NFT.ClassDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A class was destroyed \[class_id\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('NFT.ClassDestroyed') === '51309f98603f5eeb2eb07f9373848f1874c4bfaea4a29b0e0d21dd93b98da94a'
  }

  /**
   * A class was destroyed \[class_id\]
   */
  get asV42(): {owner: Uint8Array, classId: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftInstanceBurnedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'NFT.InstanceBurned')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An instance was burned \[sender, class_id, instance_id\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('NFT.InstanceBurned') === 'cbf0740ecac063f0cc91759153cc494f3d948025e716ccd16da079129444cc1d'
  }

  /**
   * An instance was burned \[sender, class_id, instance_id\]
   */
  get asV42(): {owner: Uint8Array, classId: bigint, instanceId: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftInstanceMintedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'NFT.InstanceMinted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An instance was minted \[owner, class_id, instance_id\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('NFT.InstanceMinted') === 'eb2d7da6cd031b1051bd4c0ebcbe8cd70b244f54737e21a7f8279dccee6fa006'
  }

  /**
   * An instance was minted \[owner, class_id, instance_id\]
   */
  get asV42(): {owner: Uint8Array, classId: bigint, instanceId: bigint, metadata: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An instance was minted \[owner, class_id, instance_id\]
   */
  get isV62(): boolean {
    return this._chain.getEventHash('NFT.InstanceMinted') === 'cbf0740ecac063f0cc91759153cc494f3d948025e716ccd16da079129444cc1d'
  }

  /**
   * An instance was minted \[owner, class_id, instance_id\]
   */
  get asV62(): {owner: Uint8Array, classId: bigint, instanceId: bigint} {
    assert(this.isV62)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An instance was minted
   */
  get isV71(): boolean {
    return this._chain.getEventHash('NFT.InstanceMinted') === 'eb2d7da6cd031b1051bd4c0ebcbe8cd70b244f54737e21a7f8279dccee6fa006'
  }

  /**
   * An instance was minted
   */
  get asV71(): {owner: Uint8Array, classId: bigint, instanceId: bigint, metadata: Uint8Array} {
    assert(this.isV71)
    return this._chain.decodeEvent(this.event)
  }
}

export class NftInstanceTransferredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'NFT.InstanceTransferred')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An instance was transferred \[from, to, class_id, instance_id\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('NFT.InstanceTransferred') === 'e0a071978a33a540c15a46174c5018087ae648a19419f54dab0cb069ce949563'
  }

  /**
   * An instance was transferred \[from, to, class_id, instance_id\]
   */
  get asV42(): {from: Uint8Array, to: Uint8Array, classId: bigint, instanceId: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class OrmlXcmSentEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'OrmlXcm.Sent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * XCM message sent. \[to, message\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('OrmlXcm.Sent') === 'a58e2ab3184c3e4e335af85f0463bed0f68d37969e80066264857c6d71dbf4c7'
  }

  /**
   * XCM message sent. \[to, message\]
   */
  get asV42(): {to: v42.V1MultiLocation, message: v42.V2Instruction[]} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemDownwardMessagesProcessedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.DownwardMessagesProcessed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward messages were processed using the given weight.
   * \[ weight_used, result_mqc_head \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '62ab179c459e900954ede92a01f149d553e9317efc7d0129525f40d631e8b38f'
  }

  /**
   * Downward messages were processed using the given weight.
   * \[ weight_used, result_mqc_head \]
   */
  get asV42(): [bigint, Uint8Array] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemDownwardMessagesReceivedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.DownwardMessagesReceived')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some downward messages have been received and will be processed.
   * \[ count \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * Some downward messages have been received and will be processed.
   * \[ count \]
   */
  get asV42(): number {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemUpgradeAuthorizedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.UpgradeAuthorized')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An upgrade has been authorized.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * An upgrade has been authorized.
   */
  get asV42(): Uint8Array {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemValidationFunctionAppliedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.ValidationFunctionApplied')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The validation function was applied as of the contained relay chain block number.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * The validation function was applied as of the contained relay chain block number.
   */
  get asV42(): number {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemValidationFunctionDiscardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.ValidationFunctionDiscarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The relay-chain aborted the upgrade process.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionDiscarded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * The relay-chain aborted the upgrade process.
   */
  get asV42(): null {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemValidationFunctionStoredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.ValidationFunctionStored')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The validation function has been scheduled to apply.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * The validation function has been scheduled to apply.
   */
  get asV42(): null {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmAssetsTrappedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.AssetsTrapped')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some assets have been placed in an asset trap.
   * 
   * \[ hash, origin, assets \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.AssetsTrapped') === '0663ceb24fcbc7c249c0d23c9fc7292b881f8cf18a5c2ade1e5b4a25b0a6d900'
  }

  /**
   * Some assets have been placed in an asset trap.
   * 
   * \[ hash, origin, assets \]
   */
  get asV42(): [Uint8Array, v42.V1MultiLocation, v42.VersionedMultiAssets] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmAttemptedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.Attempted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Execution of an XCM message was attempted.
   * 
   * \[ outcome \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Attempted') === '4154651e242bd6b6bc077aa66e91ede994df17d6d31ec8746fb77b61829f6cc1'
  }

  /**
   * Execution of an XCM message was attempted.
   * 
   * \[ outcome \]
   */
  get asV42(): v42.V2Outcome {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmInvalidResponderEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.InvalidResponder')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Expected query response has been received but the origin location of the response does
   * not match that expected. The query remains registered for a later, valid, response to
   * be received and acted upon.
   * 
   * \[ origin location, id, expected location \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.InvalidResponder') === 'aca6b87c79cd283d77249dae5d6ff6b7249a24e95958b723f47cd2333f0e9bc1'
  }

  /**
   * Expected query response has been received but the origin location of the response does
   * not match that expected. The query remains registered for a later, valid, response to
   * be received and acted upon.
   * 
   * \[ origin location, id, expected location \]
   */
  get asV42(): [v42.V1MultiLocation, bigint, (v42.V1MultiLocation | undefined)] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmInvalidResponderVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.InvalidResponderVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Expected query response has been received but the expected origin location placed in
   * storage by this runtime previously cannot be decoded. The query remains registered.
   * 
   * This is unexpected (since a location placed in storage in a previously executing
   * runtime should be readable prior to query timeout) and dangerous since the possibly
   * valid response will be dropped. Manual governance intervention is probably going to be
   * needed.
   * 
   * \[ origin location, id \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.InvalidResponderVersion') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
  }

  /**
   * Expected query response has been received but the expected origin location placed in
   * storage by this runtime previously cannot be decoded. The query remains registered.
   * 
   * This is unexpected (since a location placed in storage in a previously executing
   * runtime should be readable prior to query timeout) and dangerous since the possibly
   * valid response will be dropped. Manual governance intervention is probably going to be
   * needed.
   * 
   * \[ origin location, id \]
   */
  get asV42(): [v42.V1MultiLocation, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifiedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.Notified')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. The registered notification has
   * been dispatched and executed successfully.
   * 
   * \[ id, pallet index, call index \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Notified') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
  }

  /**
   * Query response has been received and query is removed. The registered notification has
   * been dispatched and executed successfully.
   * 
   * \[ id, pallet index, call index \]
   */
  get asV42(): [bigint, number, number] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyDecodeFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyDecodeFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. The dispatch was unable to be
   * decoded into a `Call`; this might be due to dispatch function having a signature which
   * is not `(origin, QueryId, Response)`.
   * 
   * \[ id, pallet index, call index \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyDecodeFailed') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
  }

  /**
   * Query response has been received and query is removed. The dispatch was unable to be
   * decoded into a `Call`; this might be due to dispatch function having a signature which
   * is not `(origin, QueryId, Response)`.
   * 
   * \[ id, pallet index, call index \]
   */
  get asV42(): [bigint, number, number] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyDispatchErrorEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyDispatchError')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. There was a general error with
   * dispatching the notification call.
   * 
   * \[ id, pallet index, call index \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyDispatchError') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
  }

  /**
   * Query response has been received and query is removed. There was a general error with
   * dispatching the notification call.
   * 
   * \[ id, pallet index, call index \]
   */
  get asV42(): [bigint, number, number] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyOverweightEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyOverweight')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. The registered notification could
   * not be dispatched because the dispatch weight is greater than the maximum weight
   * originally budgeted by this runtime for the query result.
   * 
   * \[ id, pallet index, call index, actual weight, max budgeted weight \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '0104ccc866506c43592e56f342852c22c060b58c586141b7900f6ad97353e8b2'
  }

  /**
   * Query response has been received and query is removed. The registered notification could
   * not be dispatched because the dispatch weight is greater than the maximum weight
   * originally budgeted by this runtime for the query result.
   * 
   * \[ id, pallet index, call index, actual weight, max budgeted weight \]
   */
  get asV42(): [bigint, number, number, bigint, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyTargetMigrationFailEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyTargetMigrationFail')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * migrating the location to our new XCM format.
   * 
   * \[ location, query ID \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyTargetMigrationFail') === 'b02879418cace85908884f92e4b915e3b448f9e06d9bcc0edcce01ed9bc5b644'
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * migrating the location to our new XCM format.
   * 
   * \[ location, query ID \]
   */
  get asV42(): [v42.VersionedMultiLocation, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyTargetSendFailEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyTargetSendFail')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * sending the notification to it.
   * 
   * \[ location, query ID, error \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '0d47fb7e1a9ccdfd8879b0e483179d5b2c7b29bd5db653557e266536bc40f9a0'
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * sending the notification to it.
   * 
   * \[ location, query ID, error \]
   */
  get asV42(): [v42.V1MultiLocation, bigint, v42.V2Error] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmResponseReadyEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.ResponseReady')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and is ready for taking with `take_response`. There is
   * no registered notification call.
   * 
   * \[ id, response \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.ResponseReady') === '122689cbd0466e99035c5eeda9c178ed25d8a8fee01f9de0d818f7e86cd5e333'
  }

  /**
   * Query response has been received and is ready for taking with `take_response`. There is
   * no registered notification call.
   * 
   * \[ id, response \]
   */
  get asV42(): [bigint, v42.V2Response] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmResponseTakenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.ResponseTaken')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Received query response has been read and removed.
   * 
   * \[ id \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.ResponseTaken') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
  }

  /**
   * Received query response has been read and removed.
   * 
   * \[ id \]
   */
  get asV42(): bigint {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmSentEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.Sent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A XCM message was sent.
   * 
   * \[ origin, destination, message \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Sent') === 'ae5e308764e970ce405a89338cec74552db382f20b13af73b16c9b7b172754e4'
  }

  /**
   * A XCM message was sent.
   * 
   * \[ origin, destination, message \]
   */
  get asV42(): [v42.V1MultiLocation, v42.V1MultiLocation, v42.V2Instruction[]] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmSupportedVersionChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.SupportedVersionChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The supported version of a location has been changed. This might be through an
   * automatic notification or a manual intervention.
   * 
   * \[ location, XCM version \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.SupportedVersionChanged') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
  }

  /**
   * The supported version of a location has been changed. This might be through an
   * automatic notification or a manual intervention.
   * 
   * \[ location, XCM version \]
   */
  get asV42(): [v42.V1MultiLocation, number] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmUnexpectedResponseEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.UnexpectedResponse')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response received which does not match a registered query. This may be because a
   * matching query was never registered, it may be because it is a duplicate response, or
   * because the query timed out.
   * 
   * \[ origin location, id \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.UnexpectedResponse') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
  }

  /**
   * Query response received which does not match a registered query. This may be because a
   * matching query was never registered, it may be because it is a duplicate response, or
   * because the query timed out.
   * 
   * \[ origin location, id \]
   */
  get asV42(): [v42.V1MultiLocation, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmVersionChangeNotifiedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.VersionChangeNotified')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An XCM version change notification message has been attempted to be sent.
   * 
   * \[ destination, result \]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PolkadotXcm.VersionChangeNotified') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
  }

  /**
   * An XCM version change notification message has been attempted to be sent.
   * 
   * \[ destination, result \]
   */
  get asV42(): [v42.V1MultiLocation, number] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PreimageClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Preimage.Cleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A preimage has ben cleared.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * A preimage has ben cleared.
   */
  get asV42(): {hash: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PreimageNotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Preimage.Noted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A preimage has been noted.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * A preimage has been noted.
   */
  get asV42(): {hash: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PreimageRequestedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Preimage.Requested')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A preimage has been requested.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * A preimage has been requested.
   */
  get asV42(): {hash: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class PriceOraclePoolRegisteredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PriceOracle.PoolRegistered')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Pool was registered. [asset a, asset b]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('PriceOracle.PoolRegistered') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
  }

  /**
   * Pool was registered. [asset a, asset b]
   */
  get asV42(): [number, number] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Pool was registered.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('PriceOracle.PoolRegistered') === '5f0a6f2c5eb7d489c893fb6e2f0456c4260c609e6f3bd1b9fec7286ed9ad7077'
  }

  /**
   * Pool was registered.
   */
  get asV55(): {assetA: number, assetB: number} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class ProxyAnnouncedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Proxy.Announced')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An announcement was placed to make a call in the future.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Proxy.Announced') === '5c2546e4632bb75e839f990a33f7feb63fb5598747a25d3d09f23108c106abc4'
  }

  /**
   * An announcement was placed to make a call in the future.
   */
  get asV42(): {real: Uint8Array, proxy: Uint8Array, callHash: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ProxyAnonymousCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Proxy.AnonymousCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Anonymous account has been created by new proxy with given
   * disambiguation index and proxy type.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Proxy.AnonymousCreated') === '2ae1fc7b6aa368f544881badd412d5622f31290703ae2d914f3fef905c21459d'
  }

  /**
   * Anonymous account has been created by new proxy with given
   * disambiguation index and proxy type.
   */
  get asV42(): {anonymous: Uint8Array, who: Uint8Array, proxyType: v42.ProxyType, disambiguationIndex: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ProxyProxyAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Proxy.ProxyAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proxy was added.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Proxy.ProxyAdded') === 'eda8243cba180fa34205c5bc7a0a4a21bb66b3b65f5d2ef359082868247d028f'
  }

  /**
   * A proxy was added.
   */
  get asV42(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v42.ProxyType, delay: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class ProxyProxyExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Proxy.ProxyExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Proxy.ProxyExecuted') === '437b0d6b61f01d02ca149f7d3a9e00406fc26ecde780532ed80e532801995307'
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get asV42(): {result: Result<null, v42.DispatchError>} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class RelayChainInfoCurrentBlockNumbersEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'RelayChainInfo.CurrentBlockNumbers')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Current block numbers
   * [ Parachain block number, Relaychain Block number ]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('RelayChainInfo.CurrentBlockNumbers') === 'a09602e40984745a7411a1855af06d133893a422fd68f7bdc4fb6a56bf1a3645'
  }

  /**
   * Current block numbers
   * [ Parachain block number, Relaychain Block number ]
   */
  get asV42(): [number, number] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Current block numbers
   * [ Parachain block number, Relaychain Block number ]
   */
  get isV55(): boolean {
    return this._chain.getEventHash('RelayChainInfo.CurrentBlockNumbers') === '2a497d74883525ffecab20188eabdfe61bbd91a6d017f713ae89338fa42ab3ba'
  }

  /**
   * Current block numbers
   * [ Parachain block number, Relaychain Block number ]
   */
  get asV55(): {parachainBlockNumber: number, relaychainBlockNumber: number} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class RouterRouteExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Router.RouteExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The route with trades has been successfully executed
   */
  get isV75(): boolean {
    return this._chain.getEventHash('Router.RouteExecuted') === 'eb7708dfbde9ab4c99713a1616444c649237e2d8263a4e7fab94cfef56247cbc'
  }

  /**
   * The route with trades has been successfully executed
   */
  get asV75(): {assetIn: number, assetOut: number, amountIn: bigint, amountOut: bigint} {
    assert(this.isV75)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerCallLookupFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.CallLookupFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The call for the provided hash was not found so the task has been aborted.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Scheduler.CallLookupFailed') === 'ecc6a872eaa4608ccd69e4dfbf292a89f058591fc70991470a93ba1be36fd2e4'
  }

  /**
   * The call for the provided hash was not found so the task has been aborted.
   */
  get asV42(): {task: [number, number], id: (Uint8Array | undefined), error: v42.LookupError} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerCanceledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.Canceled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Canceled some task.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Scheduler.Canceled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
  }

  /**
   * Canceled some task.
   */
  get asV42(): {when: number, index: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerDispatchedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.Dispatched')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Dispatched some task.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Scheduler.Dispatched') === '39cf66f8b318db4669e183ffaa1290aec1f8ac972b379087a931cf63e5ddf8f9'
  }

  /**
   * Dispatched some task.
   */
  get asV42(): {task: [number, number], id: (Uint8Array | undefined), result: Result<null, v42.DispatchError>} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerScheduledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.Scheduled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Scheduled some task.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Scheduler.Scheduled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
  }

  /**
   * Scheduled some task.
   */
  get asV42(): {when: number, index: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class SessionNewSessionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Session.NewSession')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New session has happened. Note that the argument is the session index, not the
   * block number as the type might suggest.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Session.NewSession') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
  }

  /**
   * New session has happened. Note that the argument is the session index, not the
   * block number as the type might suggest.
   */
  get asV42(): {sessionIndex: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class SudoKeyChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sudo.KeyChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The \[sudoer\] just switched identity; the old key is supplied if one existed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Sudo.KeyChanged') === 'b94a7a753f8f0b026120555f1f1c70878235307461e256807cb791dad15244c2'
  }

  /**
   * The \[sudoer\] just switched identity; the old key is supplied if one existed.
   */
  get asV42(): {oldSudoer: (Uint8Array | undefined)} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class SudoSudidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sudo.Sudid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sudo just took place. \[result\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Sudo.Sudid') === 'df00148bd8d36e5e2756be8c56bdf238f29aa9538028f4f316d580eaba1be9b0'
  }

  /**
   * A sudo just took place. \[result\]
   */
  get asV42(): {sudoResult: Result<null, v42.DispatchError>} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class SudoSudoAsDoneEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sudo.SudoAsDone')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sudo just took place. \[result\]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Sudo.SudoAsDone') === 'df00148bd8d36e5e2756be8c56bdf238f29aa9538028f4f316d580eaba1be9b0'
  }

  /**
   * A sudo just took place. \[result\]
   */
  get asV42(): {sudoResult: Result<null, v42.DispatchError>} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemCodeUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.CodeUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * `:code` was updated.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * `:code` was updated.
   */
  get asV42(): null {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemExtrinsicFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.ExtrinsicFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An extrinsic failed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === '3b8e9f2b48f4b6f0f996d20434018cdbe20aacb2470e779d965d42dad18b0a4e'
  }

  /**
   * An extrinsic failed.
   */
  get asV42(): {dispatchError: v42.DispatchError, dispatchInfo: v42.DispatchInfo} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemExtrinsicSuccessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.ExtrinsicSuccess')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An extrinsic completed successfully.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('System.ExtrinsicSuccess') === '407ed94c14f243acbe2cdb53df52c37d97bbb5ae550a10a6036bf59677cdd165'
  }

  /**
   * An extrinsic completed successfully.
   */
  get asV42(): {dispatchInfo: v42.DispatchInfo} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemKilledAccountEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.KilledAccount')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was reaped.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * An account was reaped.
   */
  get asV42(): {account: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemNewAccountEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.NewAccount')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new account was created.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * A new account was created.
   */
  get asV42(): {account: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemRemarkedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.Remarked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * On on-chain remark happened.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
  }

  /**
   * On on-chain remark happened.
   */
  get asV42(): {sender: Uint8Array, hash: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Approved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV42(): {proposalHash: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Closed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV42(): {proposalHash: Uint8Array, yes: number, no: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeDisapprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Disapproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV42(): {proposalHash: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV42(): {proposalHash: Uint8Array, result: Result<null, v42.DispatchError>} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeMemberExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.MemberExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV42(): {proposalHash: Uint8Array, result: Result<null, v42.DispatchError>} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV42(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV42(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV42(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV42(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TipsNewTipEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tips.NewTip')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new tip suggestion has been opened.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Tips.NewTip') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
  }

  /**
   * A new tip suggestion has been opened.
   */
  get asV42(): {tipHash: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TipsTipClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tips.TipClosed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A tip suggestion has been closed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Tips.TipClosed') === '788934ef84a9cf41376f9a41333ed4129722ae02b069eb169dcd9a50e4eb300f'
  }

  /**
   * A tip suggestion has been closed.
   */
  get asV42(): {tipHash: Uint8Array, who: Uint8Array, payout: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TipsTipClosingEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tips.TipClosing')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A tip suggestion has reached threshold and is closing.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Tips.TipClosing') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
  }

  /**
   * A tip suggestion has reached threshold and is closing.
   */
  get asV42(): {tipHash: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TipsTipRetractedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tips.TipRetracted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A tip suggestion has been retracted.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Tips.TipRetracted') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
  }

  /**
   * A tip suggestion has been retracted.
   */
  get asV42(): {tipHash: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TipsTipSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tips.TipSlashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A tip suggestion has been slashed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Tips.TipSlashed') === 'bbbf33d69edf4cf82e85596453190f61c96067be0ca329ff7dcf6cd4ea9313a3'
  }

  /**
   * A tip suggestion has been slashed.
   */
  get asV42(): {tipHash: Uint8Array, finder: Uint8Array, deposit: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensBalanceSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.BalanceSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A balance was set by root.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Tokens.BalanceSet') === 'a833bc82c917c67a079a265a7ecb101a0f1cef9d40a10b73e3d675773b059822'
  }

  /**
   * A balance was set by root.
   */
  get asV42(): {currencyId: number, who: Uint8Array, free: bigint, reserved: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensDustLostEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.DustLost')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Tokens.DustLost') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss.
   */
  get asV42(): {currencyId: number, who: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensEndowedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Endowed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was created with some free balance.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Tokens.Endowed') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
  }

  /**
   * An account was created with some free balance.
   */
  get asV42(): {currencyId: number, who: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensRepatriatedReserveEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.RepatriatedReserve')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Tokens.RepatriatedReserve') === '31e192b310f4e2068344c790f1d009c88b06da722feba84db56fe8a1b8e21039'
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get asV42(): {currencyId: number, from: Uint8Array, to: Uint8Array, amount: bigint, status: v42.BalanceStatus} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensReservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Reserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Tokens.Reserved') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asV42(): {currencyId: number, who: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensTransferEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Transfer')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transfer succeeded.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Tokens.Transfer') === 'd02b411d552a8c2e6d90c70aa7f3ff856688d4b5e4a933253a8560ce04da6f04'
  }

  /**
   * Transfer succeeded.
   */
  get asV42(): {currencyId: number, from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TokensUnreservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tokens.Unreserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Tokens.Unreserved') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asV42(): {currencyId: number, who: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TransactionPauseTransactionPausedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TransactionPause.TransactionPaused')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Paused transaction
   */
  get isV62(): boolean {
    return this._chain.getEventHash('TransactionPause.TransactionPaused') === '22dc8b864509275cfbe86bb0ee61c6f9316611de96e80393d00b0b715677c03e'
  }

  /**
   * Paused transaction
   */
  get asV62(): {palletNameBytes: Uint8Array, functionNameBytes: Uint8Array} {
    assert(this.isV62)
    return this._chain.decodeEvent(this.event)
  }
}

export class TransactionPauseTransactionUnpausedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TransactionPause.TransactionUnpaused')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Unpaused transaction
   */
  get isV62(): boolean {
    return this._chain.getEventHash('TransactionPause.TransactionUnpaused') === '22dc8b864509275cfbe86bb0ee61c6f9316611de96e80393d00b0b715677c03e'
  }

  /**
   * Unpaused transaction
   */
  get asV62(): {palletNameBytes: Uint8Array, functionNameBytes: Uint8Array} {
    assert(this.isV62)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryAwardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Awarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some funds have been allocated.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Treasury.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
  }

  /**
   * Some funds have been allocated.
   */
  get asV42(): {proposalIndex: number, award: bigint, account: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryBurntEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Burnt')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some of our funds have been burnt.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Treasury.Burnt') === '9d1d11cb2e24085666bf949195a4030bd6e80ff41274d0386073977e7cd59a87'
  }

  /**
   * Some of our funds have been burnt.
   */
  get asV42(): {burntFunds: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryDepositEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Deposit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some funds have been deposited.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Treasury.Deposit') === 'd74027ad27459f17d7446fef449271d1b0dc12b852c175623e871d009a661493'
  }

  /**
   * Some funds have been deposited.
   */
  get asV42(): {value: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New proposal.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
  }

  /**
   * New proposal.
   */
  get asV42(): {proposalIndex: number} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryRejectedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Rejected')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get asV42(): {proposalIndex: number, slashed: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasuryRolloverEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Rollover')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Spending has finished; this is the amount that rolls over until next spend.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Treasury.Rollover') === 'c9e720e2b3ada12c617b4dcb70771c3afafb9e294bf362df01a9e129683a92dd'
  }

  /**
   * Spending has finished; this is the amount that rolls over until next spend.
   */
  get asV42(): {rolloverBalance: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class TreasurySpendingEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Treasury.Spending')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * We have ended a spend period and will now allocate funds.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Treasury.Spending') === 'b9f599ccbbe2e4fd1004f47546e1a3100bc78745b24ac47ac03ed16ca6266290'
  }

  /**
   * We have ended a spend period and will now allocate funds.
   */
  get asV42(): {budgetRemaining: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesApprovalCancelledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.ApprovalCancelled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An approval for a `delegate` account to transfer the `instance` of an asset `class` was
   * cancelled by its `owner`.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.ApprovalCancelled') === 'b2d300fbcace15ebddc8c0ca7fd61b86ac7d23adb4d8d9e3d821ff9143636db6'
  }

  /**
   * An approval for a `delegate` account to transfer the `instance` of an asset `class` was
   * cancelled by its `owner`.
   */
  get asV42(): {class: bigint, instance: bigint, owner: Uint8Array, delegate: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesApprovedTransferEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.ApprovedTransfer')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An `instance` of an asset `class` has been approved by the `owner` for transfer by a
   * `delegate`.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.ApprovedTransfer') === 'b2d300fbcace15ebddc8c0ca7fd61b86ac7d23adb4d8d9e3d821ff9143636db6'
  }

  /**
   * An `instance` of an asset `class` has been approved by the `owner` for transfer by a
   * `delegate`.
   */
  get asV42(): {class: bigint, instance: bigint, owner: Uint8Array, delegate: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesAssetStatusChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.AssetStatusChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An asset `class` has had its attributes changed by the `Force` origin.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.AssetStatusChanged') === '75e6085c59f4d782c06f7a0843ebcb0240f6394ff3a8d3bb595bea3cdc712c28'
  }

  /**
   * An asset `class` has had its attributes changed by the `Force` origin.
   */
  get asV42(): {class: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesAttributeClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.AttributeCleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Attribute metadata has been cleared for an asset class or instance.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.AttributeCleared') === 'a5f8e741e0b302be33e653021912e34436616ec149e91451705e8f6f3a176d13'
  }

  /**
   * Attribute metadata has been cleared for an asset class or instance.
   */
  get asV42(): {class: bigint, maybeInstance: (bigint | undefined), key: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesAttributeSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.AttributeSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New attribute metadata has been set for an asset class or instance.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.AttributeSet') === '586ef16200f13b2deeb7b606035c1aa1e7eb1ef9f8bbf16d580301f3329aed88'
  }

  /**
   * New attribute metadata has been set for an asset class or instance.
   */
  get asV42(): {class: bigint, maybeInstance: (bigint | undefined), key: Uint8Array, value: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesBurnedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.Burned')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An asset `instance` was destroyed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.Burned') === '77f28107e67211b84a3847ce09ff9aa27ca1539dbc60bcccd993b70e9a255d6a'
  }

  /**
   * An asset `instance` was destroyed.
   */
  get asV42(): {class: bigint, instance: bigint, owner: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesClassFrozenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.ClassFrozen')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some asset `class` was frozen.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.ClassFrozen') === '75e6085c59f4d782c06f7a0843ebcb0240f6394ff3a8d3bb595bea3cdc712c28'
  }

  /**
   * Some asset `class` was frozen.
   */
  get asV42(): {class: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesClassMetadataClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.ClassMetadataCleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Metadata has been cleared for an asset class.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.ClassMetadataCleared') === '75e6085c59f4d782c06f7a0843ebcb0240f6394ff3a8d3bb595bea3cdc712c28'
  }

  /**
   * Metadata has been cleared for an asset class.
   */
  get asV42(): {class: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesClassMetadataSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.ClassMetadataSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New metadata has been set for an asset class.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.ClassMetadataSet') === '658528f8d03308353147808e7fb26ffe0537709847954e4fc22ba84f8f1d3ecb'
  }

  /**
   * New metadata has been set for an asset class.
   */
  get asV42(): {class: bigint, data: Uint8Array, isFrozen: boolean} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesClassThawedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.ClassThawed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some asset `class` was thawed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.ClassThawed') === '75e6085c59f4d782c06f7a0843ebcb0240f6394ff3a8d3bb595bea3cdc712c28'
  }

  /**
   * Some asset `class` was thawed.
   */
  get asV42(): {class: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.Created')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An asset class was created.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.Created') === 'c913362637cc7f8673e4e5173d9c364f19eccc82f8e6ff0cbe5d542f52f6bd59'
  }

  /**
   * An asset class was created.
   */
  get asV42(): {class: bigint, creator: Uint8Array, owner: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.Destroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An asset `class` was destroyed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.Destroyed') === '75e6085c59f4d782c06f7a0843ebcb0240f6394ff3a8d3bb595bea3cdc712c28'
  }

  /**
   * An asset `class` was destroyed.
   */
  get asV42(): {class: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesForceCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.ForceCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An asset class was force-created.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.ForceCreated') === 'ff546d4de9e6da404ce3a62d928984ca6511f39a165041c36b31c056c6ca5fd1'
  }

  /**
   * An asset class was force-created.
   */
  get asV42(): {class: bigint, owner: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesFrozenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.Frozen')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some asset `instance` was frozen.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.Frozen') === 'da2dff8925322764412ece8032922d707079757b29c7200d9664b9a71e389591'
  }

  /**
   * Some asset `instance` was frozen.
   */
  get asV42(): {class: bigint, instance: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesIssuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.Issued')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An asset `instance` was issued.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.Issued') === '77f28107e67211b84a3847ce09ff9aa27ca1539dbc60bcccd993b70e9a255d6a'
  }

  /**
   * An asset `instance` was issued.
   */
  get asV42(): {class: bigint, instance: bigint, owner: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesMetadataClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.MetadataCleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Metadata has been cleared for an asset instance.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.MetadataCleared') === 'da2dff8925322764412ece8032922d707079757b29c7200d9664b9a71e389591'
  }

  /**
   * Metadata has been cleared for an asset instance.
   */
  get asV42(): {class: bigint, instance: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesMetadataSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.MetadataSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New metadata has been set for an asset instance.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.MetadataSet') === '5849d49ac0992c498c8a78aef429e47efe3ce9f467709d0badc698d2a628515d'
  }

  /**
   * New metadata has been set for an asset instance.
   */
  get asV42(): {class: bigint, instance: bigint, data: Uint8Array, isFrozen: boolean} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesOwnerChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.OwnerChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The owner changed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.OwnerChanged') === '71d0f12023630afd8b6104510f3a2f5fa52fa18f35e8052e77f6c775ba2ca84e'
  }

  /**
   * The owner changed.
   */
  get asV42(): {class: bigint, newOwner: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesRedepositedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.Redeposited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Metadata has been cleared for an asset instance.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.Redeposited') === '1ff6e62395de7a980f2b23324883dfc2345854d90ae8a9cca0bf589354f20ec7'
  }

  /**
   * Metadata has been cleared for an asset instance.
   */
  get asV42(): {class: bigint, successfulInstances: bigint[]} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesTeamChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.TeamChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The management team changed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.TeamChanged') === '4388088c5a5b28db3fb52f5122e20773087db21411f8f17abeee116219cfd760'
  }

  /**
   * The management team changed.
   */
  get asV42(): {class: bigint, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesThawedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.Thawed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some asset `instance` was thawed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.Thawed') === 'da2dff8925322764412ece8032922d707079757b29c7200d9664b9a71e389591'
  }

  /**
   * Some asset `instance` was thawed.
   */
  get asV42(): {class: bigint, instance: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UniquesTransferredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Uniques.Transferred')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An asset `instance` was transferred.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Uniques.Transferred') === '9e23bb00a6173b78503db8f5338e6a5809a15de6af71afcfa86aa067bdda27c3'
  }

  /**
   * An asset `instance` was transferred.
   */
  get asV42(): {class: bigint, instance: bigint, from: Uint8Array, to: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UnknownTokensDepositedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'UnknownTokens.Deposited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Deposit success.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('UnknownTokens.Deposited') === '5618a3d9662352222101d08b90934710ebf739425cdbaf5ff63a3c258c219c8a'
  }

  /**
   * Deposit success.
   */
  get asV42(): {asset: v42.V1MultiAsset, who: v42.V1MultiLocation} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UnknownTokensWithdrawnEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'UnknownTokens.Withdrawn')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Withdraw success.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('UnknownTokens.Withdrawn') === '5618a3d9662352222101d08b90934710ebf739425cdbaf5ff63a3c258c219c8a'
  }

  /**
   * Withdraw success.
   */
  get asV42(): {asset: v42.V1MultiAsset, who: v42.V1MultiLocation} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityBatchCompletedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.BatchCompleted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Batch of dispatches completed fully with no error.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Batch of dispatches completed fully with no error.
   */
  get asV42(): null {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityBatchInterruptedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.BatchInterrupted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Utility.BatchInterrupted') === '8676c6dc6a22410c7ddbc9f34f71e25e9bc1f7237c98ea59385020ce26129067'
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get asV42(): {index: number, error: v42.DispatchError} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityDispatchedAsEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.DispatchedAs')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A call was dispatched.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Utility.DispatchedAs') === '437b0d6b61f01d02ca149f7d3a9e00406fc26ecde780532ed80e532801995307'
  }

  /**
   * A call was dispatched.
   */
  get asV42(): {result: Result<null, v42.DispatchError>} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityItemCompletedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.ItemCompleted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A single item within a Batch of dispatches has completed with no error.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * A single item within a Batch of dispatches has completed with no error.
   */
  get asV42(): null {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class VestingClaimedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Vesting.Claimed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Claimed vesting.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Vesting.Claimed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Claimed vesting.
   */
  get asV42(): {who: Uint8Array, amount: bigint} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class VestingVestingScheduleAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Vesting.VestingScheduleAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Added new vesting schedule.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Vesting.VestingScheduleAdded') === '18422c66dedd030e21a5567fde05a68ab5ad4ffff5f9fdcd73f3d18dcb91873c'
  }

  /**
   * Added new vesting schedule.
   */
  get asV42(): {from: Uint8Array, to: Uint8Array, vestingSchedule: v42.VestingSchedule} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class VestingVestingSchedulesUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Vesting.VestingSchedulesUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Updated vesting schedules.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('Vesting.VestingSchedulesUpdated') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
  }

  /**
   * Updated vesting schedules.
   */
  get asV42(): {who: Uint8Array} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class XTokensTransferredMultiAssetsEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XTokens.TransferredMultiAssets')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAssets') === '19a61ff727b39e06bdac9248dc278a5be6292a6af670958a6338915a3e003249'
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get asV42(): {sender: Uint8Array, assets: v42.V1MultiAsset[], fee: v42.V1MultiAsset, dest: v42.V1MultiLocation} {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class XykBuyExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XYK.BuyExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Asset purchase executed. [who, asset out, asset in, amount, buy price, fee asset, fee amount]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('XYK.BuyExecuted') === 'bfc1ee30f12b7c13e2cf6bc0196120568f985bffe23530851e0111bc987a1dd5'
  }

  /**
   * Asset purchase executed. [who, asset out, asset in, amount, buy price, fee asset, fee amount]
   */
  get asV42(): [Uint8Array, number, number, bigint, bigint, number, bigint, Uint8Array] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Asset purchase executed.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('XYK.BuyExecuted') === '6d73c81e782551041cb41f77d5f1a15a480292465bb9afcd71986604918661f7'
  }

  /**
   * Asset purchase executed.
   */
  get asV55(): {who: Uint8Array, assetOut: number, assetIn: number, amount: bigint, buyPrice: bigint, feeAsset: number, feeAmount: bigint, pool: Uint8Array} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class XykLiquidityAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XYK.LiquidityAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New liquidity was provided to the pool. [who, asset a, asset b, amount a, amount b]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('XYK.LiquidityAdded') === '3dd2f936e3315ce70a11310614d5a07cf9dcddb702b85bbd84b54767877596a0'
  }

  /**
   * New liquidity was provided to the pool. [who, asset a, asset b, amount a, amount b]
   */
  get asV42(): [Uint8Array, number, number, bigint, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * New liquidity was provided to the pool.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('XYK.LiquidityAdded') === '3193e6555f21c9e90548b027501d705082e3e32963394730588a4c59f0b47fa0'
  }

  /**
   * New liquidity was provided to the pool.
   */
  get asV55(): {who: Uint8Array, assetA: number, assetB: number, amountA: bigint, amountB: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class XykLiquidityRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XYK.LiquidityRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Liquidity was removed from the pool. [who, asset a, asset b, shares]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('XYK.LiquidityRemoved') === '6258e97ba584ab4806b4e868d36e4ac5083524f35049d79bb2e9fcff43a3745c'
  }

  /**
   * Liquidity was removed from the pool. [who, asset a, asset b, shares]
   */
  get asV42(): [Uint8Array, number, number, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Liquidity was removed from the pool.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('XYK.LiquidityRemoved') === '7a5438bb50dcc97a9b472e6c8a6ccaa356791fb5197490e4e0b1e8d743086086'
  }

  /**
   * Liquidity was removed from the pool.
   */
  get asV55(): {who: Uint8Array, assetA: number, assetB: number, shares: bigint} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class XykPoolCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XYK.PoolCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Pool was created. [who, asset a, asset b, initial shares amount, share token, pool account id]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('XYK.PoolCreated') === 'df6e14a77148f70b6b9d514a97ea4172812dd09f90f5b5ba647c927bc75d639f'
  }

  /**
   * Pool was created. [who, asset a, asset b, initial shares amount, share token, pool account id]
   */
  get asV42(): [Uint8Array, number, number, bigint, number, Uint8Array] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Pool was created.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('XYK.PoolCreated') === '2acd30ee8213b032906578ce28f6216d7ce1f401b75ea087d6aeae9a5202defa'
  }

  /**
   * Pool was created.
   */
  get asV55(): {who: Uint8Array, assetA: number, assetB: number, initialSharesAmount: bigint, shareToken: number, pool: Uint8Array} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class XykPoolDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XYK.PoolDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Pool was destroyed. [who, asset a, asset b, share token, pool account id]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('XYK.PoolDestroyed') === 'e0e7fe95649f89842a93e794837876b42854f6afedd3f294419134626ccc6b44'
  }

  /**
   * Pool was destroyed. [who, asset a, asset b, share token, pool account id]
   */
  get asV42(): [Uint8Array, number, number, number, Uint8Array] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Pool was destroyed.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('XYK.PoolDestroyed') === '8c639b2fa3536c6e98658a8a63826996e62906783540b52831ea8fecfed5deab'
  }

  /**
   * Pool was destroyed.
   */
  get asV55(): {who: Uint8Array, assetA: number, assetB: number, shareToken: number, pool: Uint8Array} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class XykSellExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XYK.SellExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Asset sale executed. [who, asset in, asset out, amount, sale price, fee asset, fee amount, pool account id]
   */
  get isV42(): boolean {
    return this._chain.getEventHash('XYK.SellExecuted') === 'bfc1ee30f12b7c13e2cf6bc0196120568f985bffe23530851e0111bc987a1dd5'
  }

  /**
   * Asset sale executed. [who, asset in, asset out, amount, sale price, fee asset, fee amount, pool account id]
   */
  get asV42(): [Uint8Array, number, number, bigint, bigint, number, bigint, Uint8Array] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Asset sale executed.
   */
  get isV55(): boolean {
    return this._chain.getEventHash('XYK.SellExecuted') === 'a55c9c09ccfb062717f59a4c44a9e4b764c6435c3f8f6db45aec4b4a450bf47b'
  }

  /**
   * Asset sale executed.
   */
  get asV55(): {who: Uint8Array, assetIn: number, assetOut: number, amount: bigint, salePrice: bigint, feeAsset: number, feeAmount: bigint, pool: Uint8Array} {
    assert(this.isV55)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueBadFormatEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.BadFormat')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Bad XCM format used.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('XcmpQueue.BadFormat') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * Bad XCM format used.
   */
  get asV42(): (Uint8Array | undefined) {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueBadVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.BadVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Bad XCM version used.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('XcmpQueue.BadVersion') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * Bad XCM version used.
   */
  get asV42(): (Uint8Array | undefined) {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueFailEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.Fail')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some XCM failed.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('XcmpQueue.Fail') === '639070abee49a6419e897939fc5b761d561a52efc062a7f1a1183b543e786999'
  }

  /**
   * Some XCM failed.
   */
  get asV42(): [(Uint8Array | undefined), v42.V2Error] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueOverweightEnqueuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.OverweightEnqueued')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An XCM exceeded the individual message weight budget.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === 'ebfdd28144c52e3beb9a90e53e214e90e6114fc4d52e2c572b7e0a2e8c303bd5'
  }

  /**
   * An XCM exceeded the individual message weight budget.
   */
  get asV42(): [number, number, bigint, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueOverweightServicedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.OverweightServiced')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An XCM from the overweight queue was executed with the given actual weight used.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
  }

  /**
   * An XCM from the overweight queue was executed with the given actual weight used.
   */
  get asV42(): [bigint, bigint] {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueSuccessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.Success')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some XCM was executed ok.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('XcmpQueue.Success') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * Some XCM was executed ok.
   */
  get asV42(): (Uint8Array | undefined) {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueUpwardMessageSentEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.UpwardMessageSent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An upward message was sent to the relay chain.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('XcmpQueue.UpwardMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * An upward message was sent to the relay chain.
   */
  get asV42(): (Uint8Array | undefined) {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueXcmpMessageSentEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.XcmpMessageSent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An HRMP message was sent to a sibling parachain.
   */
  get isV42(): boolean {
    return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * An HRMP message was sent to a sibling parachain.
   */
  get asV42(): (Uint8Array | undefined) {
    assert(this.isV42)
    return this._chain.decodeEvent(this.event)
  }
}
