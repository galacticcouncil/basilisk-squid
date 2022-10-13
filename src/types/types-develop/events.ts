import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result} from './support'
import * as v78 from './v78'

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
   * Native location set for an asset.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('AssetRegistry.LocationSet') === 'cb64e0569ed096dd70dc89ce4c0cffe3c6213a0117589ee8a65dbbd51f57caaa'
  }

  /**
   * Native location set for an asset.
   */
  get asV78(): {assetId: number, location: v78.AssetLocation} {
    assert(this.isV78)
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
   * Metadata set for an asset.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('AssetRegistry.MetadataSet') === '5733a2ab6f544e91ef9651644e4a8f3fc7257fa3a961ba51dd1f0c862b7a7a0a'
  }

  /**
   * Metadata set for an asset.
   */
  get asV78(): {assetId: number, symbol: Uint8Array, decimals: number} {
    assert(this.isV78)
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
   * Asset was registered.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('AssetRegistry.Registered') === '630ef237faec740bf89f2ba6fec4038447ad86f6dfd1d9b5df4dcfdd30d82d78'
  }

  /**
   * Asset was registered.
   */
  get asV78(): {assetId: number, assetName: Uint8Array, assetType: v78.AssetType} {
    assert(this.isV78)
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
   * Asset was updated.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('AssetRegistry.Updated') === '630ef237faec740bf89f2ba6fec4038447ad86f6dfd1d9b5df4dcfdd30d82d78'
  }

  /**
   * Asset was updated.
   */
  get asV78(): {assetId: number, assetName: Uint8Array, assetType: v78.AssetType} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
  }

  /**
   * A balance was set by root.
   */
  get asV78(): {who: Uint8Array, free: bigint, reserved: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was deposited (e.g. for transaction fees).
   */
  get asV78(): {who: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss.
   */
  get asV78(): {account: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
  }

  /**
   * An account was created with some free balance.
   */
  get asV78(): {account: Uint8Array, freeBalance: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   */
  get asV78(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: v78.BalanceStatus} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asV78(): {who: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior).
   */
  get asV78(): {who: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
  }

  /**
   * Transfer succeeded.
   */
  get asV78(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asV78(): {who: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get asV78(): {who: Uint8Array, amount: bigint} {
    assert(this.isV78)
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

  get isV78(): boolean {
    return this._chain.getEventHash('CollatorSelection.CandidateAdded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  get asV78(): [Uint8Array, bigint] {
    assert(this.isV78)
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

  get isV78(): boolean {
    return this._chain.getEventHash('CollatorSelection.CandidateRemoved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  get asV78(): Uint8Array {
    assert(this.isV78)
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

  get isV78(): boolean {
    return this._chain.getEventHash('CollatorSelection.NewCandidacyBond') === '47b59f698451e50cce59979f0121e842fa3f8b2bcef2e388222dbd69849514f9'
  }

  get asV78(): bigint {
    assert(this.isV78)
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

  get isV78(): boolean {
    return this._chain.getEventHash('CollatorSelection.NewDesiredCandidates') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  get asV78(): number {
    assert(this.isV78)
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

  get isV78(): boolean {
    return this._chain.getEventHash('CollatorSelection.NewInvulnerables') === 'b108f68a3a6ead7fe33d80e59b6d7124fdd14cd6108c81ad0b9d713fd6046122'
  }

  get asV78(): Uint8Array[] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV78(): {proposalHash: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV78(): {proposalHash: Uint8Array, yes: number, no: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV78(): {proposalHash: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Council.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV78(): {proposalHash: Uint8Array, result: Result<null, v78.DispatchError>} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Council.MemberExecuted') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV78(): {proposalHash: Uint8Array, result: Result<null, v78.DispatchError>} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV78(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV78(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === '155c7cce0948b8cb240d1401bb772a72b24567aa52618e9a4aaa84271c380044'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asV78(): [Uint8Array, v78.V2Outcome] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('CumulusXcm.InvalidFormat') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
  }

  /**
   * Downward message is invalid XCM.
   * \[ id \]
   */
  get asV78(): Uint8Array {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('CumulusXcm.UnsupportedVersion') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
  }

  /**
   * Downward message is unsupported version of XCM.
   * \[ id \]
   */
  get asV78(): Uint8Array {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Currencies.BalanceUpdated') === 'e92fa8fb5becc55b6f0dba72d56fdf98916f0ed6d78140338d060861948ef797'
  }

  /**
   * Update balance success.
   */
  get asV78(): {currencyId: number, who: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Currencies.Deposited') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
  }

  /**
   * Deposit success.
   */
  get asV78(): {currencyId: number, who: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Currencies.Transferred') === 'd02b411d552a8c2e6d90c70aa7f3ff856688d4b5e4a933253a8560ce04da6f04'
  }

  /**
   * Currency transfer success.
   */
  get asV78(): {currencyId: number, from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Currencies.Withdrawn') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
  }

  /**
   * Withdraw success.
   */
  get asV78(): {currencyId: number, who: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.Blacklisted') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A proposal_hash has been blacklisted permanently.
   */
  get asV78(): {proposalHash: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A referendum has been cancelled.
   */
  get asV78(): {refIndex: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.Delegated') === 'd8ff3867ebae06e6ac747a81d5397793d2a1994d97871736019b811a47b1be06'
  }

  /**
   * An account has delegated their vote to another account.
   */
  get asV78(): {who: Uint8Array, target: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '98c3caaef1b84143deea16c761096200c5e0e631c6a3776ed012edc9788cf6e2'
  }

  /**
   * A proposal has been enacted.
   */
  get asV78(): {refIndex: number, result: Result<null, v78.DispatchError>} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.ExternalTabled') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * An external proposal has been tabled.
   */
  get asV78(): null {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get asV78(): {refIndex: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been approved by referendum.
   */
  get asV78(): {refIndex: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get asV78(): {proposalHash: Uint8Array, refIndex: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get asV78(): {proposalHash: Uint8Array, refIndex: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === 'd070eaca902e57d242e4f2fcf32e1044fe909d807ce0a0303e2bb45499fc9748'
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get asV78(): {proposalHash: Uint8Array, who: Uint8Array, deposit: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === '3140454b0dfcc8f9c1ccda6a2fe7f5153f3d34c52e1e5bb1d954b96b8f5dd4a5'
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get asV78(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint, reaper: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === '7b28a71d659ed286affdbc9e835b253b80485e4b3be08d04bfb153f8f8cc5241'
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get asV78(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
  }

  /**
   * A motion has been proposed by a public account.
   */
  get asV78(): {proposalIndex: number, deposit: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.Seconded') === '956e0986199802f7d7e337068d26fc51e710bdd0e5dd70631ef3328ea5baafe1'
  }

  /**
   * An account has secconded a proposal
   */
  get asV78(): {seconder: Uint8Array, propIndex: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
  }

  /**
   * A referendum has begun.
   */
  get asV78(): {refIndex: number, threshold: v78.VoteThreshold} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === 'a13f0b4abdda616a48f0910930f31ca5c2a2a8068c5289a35d395475289bd1e0'
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get asV78(): {proposalIndex: number, deposit: bigint, depositors: Uint8Array[]} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.Undelegated') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * An account has cancelled a previous delegation operation.
   */
  get asV78(): {account: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.Vetoed') === '8c436495ac4c75fd20d25b6b1c1b2bbebbea576444eac1b5b7b15ecb833e5c4f'
  }

  /**
   * An external proposal has been vetoed.
   */
  get asV78(): {who: Uint8Array, proposalHash: Uint8Array, until: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Democracy.Voted') === '1f7c6893e642faadc0fb2681a07f3aa74579a935cb93e932ab8fd8a9e9fe739c'
  }

  /**
   * An account has voted in a referendum
   */
  get asV78(): {voter: Uint8Array, refIndex: number, vote: v78.AccountVote} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '286143d78cae88e1dcd7f8fca6da4dcb49ebc3ba61ad473eec7ff13812f3fd56'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asV78(): [Uint8Array, v78.V2Outcome] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('DmpQueue.InvalidFormat') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * Downward message is invalid XCM.
   * \[ id \]
   */
  get asV78(): Uint8Array {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
  }

  /**
   * Downward message is overweight and was placed in the overweight queue.
   * \[ id, index, required \]
   */
  get asV78(): [Uint8Array, bigint, bigint] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
  }

  /**
   * Downward message from the overweight queue was executed.
   * \[ index, used \]
   */
  get asV78(): [bigint, bigint] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * Downward message is unsupported version of XCM.
   * \[ id \]
   */
  get asV78(): Uint8Array {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('DmpQueue.WeightExhausted') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
  }

  /**
   * The weight limit for handling downward messages was reached.
   * \[ id, remaining, required \]
   */
  get asV78(): [Uint8Array, bigint, bigint] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Duster.Added') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
  }

  /**
   * Account added to non-dustable list.
   */
  get asV78(): {who: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Duster.Dusted') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Account dusted.
   */
  get asV78(): {who: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Duster.Removed') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
  }

  /**
   * Account removed from non-dustable list.
   */
  get asV78(): {who: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Elections.CandidateSlashed') === 'a64270141b7a7c84c0950e5dcd31bc284b27b39505d278ff519f44f855ee33d8'
  }

  /**
   * A candidate was slashed by amount due to failing to obtain a seat as member or
   * runner-up.
   * 
   * Note that old members and runners-up are also candidates.
   */
  get asV78(): {candidate: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Elections.ElectionError') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Internal error happened while trying to perform election.
   */
  get asV78(): null {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Elections.EmptyTerm') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * No (or not enough) candidates existed for this round. This is different from
   * `NewTerm(\[\])`. See the description of `NewTerm`.
   */
  get asV78(): null {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Elections.MemberKicked') === '13de6e9f12582c043401d65d7388be083b4b273c04f13f132e51e1f673bee999'
  }

  /**
   * A member has been removed. This should always be followed by either `NewTerm` or
   * `EmptyTerm`.
   */
  get asV78(): {member: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Elections.NewTerm') === 'c26c6ac673ee46db2001722c75880df159f382274469750dc468b868c6f738c8'
  }

  /**
   * A new term with new_members. This indicates that enough candidates existed to run
   * the election, not that enough have has been elected. The inner value must be examined
   * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
   * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
   * begin with.
   */
  get asV78(): {newMembers: [Uint8Array, bigint][]} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Elections.Renounced') === '3628b3aba77dce2d54e6db67e810eccf17921a84b907aea8b90a342fd5ad6c01'
  }

  /**
   * Someone has renounced their candidacy.
   */
  get asV78(): {candidate: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Elections.SeatHolderSlashed') === '7a1552e3cb4a3dc87408db4d42391f3a98998bb0e6bf70aa82661919c4d12eaa'
  }

  /**
   * A seat holder was slashed by amount by being forcefully removed from the set.
   */
  get asV78(): {seatHolder: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
   */
  get isV78(): boolean {
    return this._chain.getEventHash('Exchange.InsufficientAssetBalanceEvent') === 'bf05d1ed6cafd93e76667464d8d1793d52096e17aba8b14688f595c542bc3fa3'
  }

  /**
   * Error event - insufficient balance of specified asset
   */
  get asV78(): {who: Uint8Array, assetId: number, intentionType: v78.IntentionType, intentionId: Uint8Array, errorDetail: v78.DispatchError} {
    assert(this.isV78)
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
   */
  get isV78(): boolean {
    return this._chain.getEventHash('Exchange.IntentionRegistered') === '64a8caa88c137e5343053fdab59bbaa2e1d556354211e9da9b5cd9fa372e7558'
  }

  /**
   * Intention registered event
   */
  get asV78(): {who: Uint8Array, assetA: number, assetB: number, amount: bigint, intentionType: v78.IntentionType, intentionId: Uint8Array} {
    assert(this.isV78)
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
   */
  get isV78(): boolean {
    return this._chain.getEventHash('Exchange.IntentionResolveErrorEvent') === 'bd02241c561dfd516c7f1194bc16e4c47b0e17dd754351211fdfc47a3b13f298'
  }

  /**
   * Intention Error Event
   */
  get asV78(): {who: Uint8Array, assetIds: v78.AssetPair, intentionType: v78.IntentionType, intentionId: Uint8Array, errorDetail: v78.DispatchError} {
    assert(this.isV78)
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
   */
  get isV78(): boolean {
    return this._chain.getEventHash('Exchange.IntentionResolvedAMMTrade') === 'fd555add847dc1a0e01b03edd94c68abeb0e7eb37b606f23d6877d5f0a355486'
  }

  /**
   * Intention resolved as AMM Trade
   */
  get asV78(): {who: Uint8Array, intentionType: v78.IntentionType, intentionId: Uint8Array, amount: bigint, amountSoldOrBought: bigint, poolAccountId: Uint8Array} {
    assert(this.isV78)
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
   */
  get isV78(): boolean {
    return this._chain.getEventHash('Exchange.IntentionResolvedDirectTrade') === 'd9a6887bfdcd8d1dbf1038a19f621c7f20326b7d80493cb0aec31529fd30656f'
  }

  /**
   * Intention resolved as Direct Trade
   */
  get asV78(): {accountIdA: Uint8Array, accountIdB: Uint8Array, intentionIdA: Uint8Array, intentionIdB: Uint8Array, amountA: bigint, amountB: bigint} {
    assert(this.isV78)
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
   */
  get isV78(): boolean {
    return this._chain.getEventHash('Exchange.IntentionResolvedDirectTradeFees') === '3fa7fb9330c8690b1cc20b483869ea48ed6111278faacd27c4f1890df44051d7'
  }

  /**
   * Paid fees event
   */
  get asV78(): {who: Uint8Array, intentionId: Uint8Array, feeReceiver: Uint8Array, assetId: number, feeAmount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Identity.IdentityCleared') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
  }

  /**
   * A name was cleared, and the given balance returned.
   */
  get asV78(): {who: Uint8Array, deposit: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Identity.IdentityKilled') === '569627bf2a8105e3949fd62dcaae8174fb02f8afedb8e5d8a7fecda5d63b25c3'
  }

  /**
   * A name was removed and the given balance slashed.
   */
  get asV78(): {who: Uint8Array, deposit: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Identity.IdentitySet') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
  }

  /**
   * A name was set or reset (which will remove all judgements).
   */
  get asV78(): {who: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Identity.JudgementGiven') === '0771fa05d0977d28db0dee420efa5c006fa01a48edbd0b5b50cba5ea1d98b1b8'
  }

  /**
   * A judgement was given by a registrar.
   */
  get asV78(): {target: Uint8Array, registrarIndex: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Identity.JudgementRequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
  }

  /**
   * A judgement was asked from a registrar.
   */
  get asV78(): {who: Uint8Array, registrarIndex: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Identity.JudgementUnrequested') === 'cbefacbef964c7ee928128f7969b3a567b57c51a6945e5bab170a3c3d42e8d5b'
  }

  /**
   * A judgement request was retracted.
   */
  get asV78(): {who: Uint8Array, registrarIndex: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Identity.RegistrarAdded') === 'c7c8fe6ce04ac3d49accb0e86098814baf3baab267afb645140023a3c5c84c24'
  }

  /**
   * A registrar was added.
   */
  get asV78(): {registrarIndex: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityAdded') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
  }

  /**
   * A sub-identity was added to an identity and the deposit paid.
   */
  get asV78(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityRemoved') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
  }

  /**
   * A sub-identity was removed from an identity and the deposit freed.
   */
  get asV78(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Identity.SubIdentityRevoked') === '3ffe8c1fa99373079f0c7dbda5849194c73c2867fd7ca2b08d19f7c6b676e1ef'
  }

  /**
   * A sub-identity was cleared, and the given deposit repatriated from the
   * main identity account to the sub-identity account.
   */
  get asV78(): {sub: Uint8Array, main: Uint8Array, deposit: bigint} {
    assert(this.isV78)
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
   * Purchase executed.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LBP.BuyExecuted') === '9abb9815d28be33a3d917cc4b09064f613479613b3eaa765e422391ca3e3cf70'
  }

  /**
   * Purchase executed.
   */
  get asV78(): {who: Uint8Array, assetOut: number, assetIn: number, amount: bigint, buyPrice: bigint, feeAsset: number, feeAmount: bigint} {
    assert(this.isV78)
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
   * New liquidity was provided to the pool.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LBP.LiquidityAdded') === '3193e6555f21c9e90548b027501d705082e3e32963394730588a4c59f0b47fa0'
  }

  /**
   * New liquidity was provided to the pool.
   */
  get asV78(): {who: Uint8Array, assetA: number, assetB: number, amountA: bigint, amountB: bigint} {
    assert(this.isV78)
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
   * Liquidity was removed from the pool and the pool was destroyed.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LBP.LiquidityRemoved') === '3193e6555f21c9e90548b027501d705082e3e32963394730588a4c59f0b47fa0'
  }

  /**
   * Liquidity was removed from the pool and the pool was destroyed.
   */
  get asV78(): {who: Uint8Array, assetA: number, assetB: number, amountA: bigint, amountB: bigint} {
    assert(this.isV78)
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
   * Pool was created by the `CreatePool` origin.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LBP.PoolCreated') === '730545cedc91e90531565c46bd750de82c9996b9bc2a88bf23ff4e2863303ee5'
  }

  /**
   * Pool was created by the `CreatePool` origin.
   */
  get asV78(): {pool: Uint8Array, data: v78.Pool} {
    assert(this.isV78)
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
   * Pool data were updated.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LBP.PoolUpdated') === '730545cedc91e90531565c46bd750de82c9996b9bc2a88bf23ff4e2863303ee5'
  }

  /**
   * Pool data were updated.
   */
  get asV78(): {pool: Uint8Array, data: v78.Pool} {
    assert(this.isV78)
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
   * Sale executed.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LBP.SellExecuted') === '42ff895a6deae985d5384bd5679bbe16c810748f42fdfd7040f08c4b32d0951c'
  }

  /**
   * Sale executed.
   */
  get asV78(): {who: Uint8Array, assetIn: number, assetOut: number, amount: bigint, salePrice: bigint, feeAsset: number, feeAmount: bigint} {
    assert(this.isV78)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningDepositDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.DepositDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * NFT representing deposit has been destroyed
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LiquidityMining.DepositDestroyed') === '492d61a52f52cde1ba9984d1f7a73b0aa5f68b0e6c88718b0043b70035dd3ddb'
  }

  /**
   * NFT representing deposit has been destroyed
   */
  get asV78(): {who: Uint8Array, depositId: bigint} {
    assert(this.isV78)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningGlobalFarmCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.GlobalFarmCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New global farm was created.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LiquidityMining.GlobalFarmCreated') === 'e6db3bfcc67b1228753a9bf2aff83cb123c416f4bc02fb3ca9caffa9bb0382cf'
  }

  /**
   * New global farm was created.
   */
  get asV78(): {id: number, owner: Uint8Array, totalRewards: bigint, rewardCurrency: number, yieldPerPeriod: bigint, plannedYieldingPeriods: number, blocksPerPeriod: number, incentivizedAsset: number, maxRewardPerPeriod: bigint, minDeposit: bigint, priceAdjustment: bigint} {
    assert(this.isV78)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningGlobalFarmDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.GlobalFarmDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Global farm was destroyed.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LiquidityMining.GlobalFarmDestroyed') === '57232c821de61efc771f55d15a7327bd1404a9c025471193d7cdb83a99047d67'
  }

  /**
   * Global farm was destroyed.
   */
  get asV78(): {globalFarmId: number, who: Uint8Array, rewardCurrency: number, undistributedRewards: bigint} {
    assert(this.isV78)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningGlobalFarmUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.GlobalFarmUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Global farm's `price_adjustment` was updated.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LiquidityMining.GlobalFarmUpdated') === '5e64789e55b5f12ffac0c5bd0806ea9d96126aad2b056dea3d27b7820b3fb3e1'
  }

  /**
   * Global farm's `price_adjustment` was updated.
   */
  get asV78(): {id: number, priceAdjustment: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('LiquidityMining.RewardClaimed') === 'b31a83e2439d0971ac3c100c0bbd9b652fdba17822820b534928cd8838b251ff'
  }

  /**
   * Rewards was claimed.
   */
  get asV78(): {globalFarmId: number, yieldFarmId: number, who: Uint8Array, claimed: bigint, rewardCurrency: number, depositId: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('LiquidityMining.SharesDeposited') === '616fff7d334d1cd92a4d8b9e2a8d8c6f3f869825b229912eb7e767c9e0445eec'
  }

  /**
   * New LP tokens was deposited.
   */
  get asV78(): {globalFarmId: number, yieldFarmId: number, who: Uint8Array, amount: bigint, lpToken: number, depositId: bigint} {
    assert(this.isV78)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningSharesRedepositedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.SharesRedeposited')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * LP token was redeposited for a new yield farm entry
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LiquidityMining.SharesRedeposited') === '616fff7d334d1cd92a4d8b9e2a8d8c6f3f869825b229912eb7e767c9e0445eec'
  }

  /**
   * LP token was redeposited for a new yield farm entry
   */
  get asV78(): {globalFarmId: number, yieldFarmId: number, who: Uint8Array, amount: bigint, lpToken: number, depositId: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('LiquidityMining.SharesWithdrawn') === '80b5037e167c679b9f9629d5f18e66efd1933763163dce0b6ba5f61f3968190f'
  }

  /**
   * LP tokens was withdrawn.
   */
  get asV78(): {globalFarmId: number, yieldFarmId: number, who: Uint8Array, lpToken: number, amount: bigint, depositId: bigint} {
    assert(this.isV78)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningYieldFarmCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.YieldFarmCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New yield farm was added into the farm.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LiquidityMining.YieldFarmCreated') === 'a330936659b79d8e1290bf3c26e8ab50cc3e2ce8fcdd7f99531c84f11ceab6aa'
  }

  /**
   * New yield farm was added into the farm.
   */
  get asV78(): {globalFarmId: number, yieldFarmId: number, multiplier: bigint, assetPair: v78.AssetPair, loyaltyCurve: (v78.LoyaltyCurve | undefined)} {
    assert(this.isV78)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningYieldFarmDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.YieldFarmDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Yield farm was destroyed from global farm.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LiquidityMining.YieldFarmDestroyed') === '9d459d74d7f6e8346a3efb030d03ba9b500ac6cf80e5bd76f596a887c8c02af4'
  }

  /**
   * Yield farm was destroyed from global farm.
   */
  get asV78(): {globalFarmId: number, yieldFarmId: number, who: Uint8Array, assetPair: v78.AssetPair} {
    assert(this.isV78)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningYieldFarmResumedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.YieldFarmResumed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Yield farm for asset pair was resumed.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LiquidityMining.YieldFarmResumed') === 'faedb19f449f2e12558560814c43f910190a754cb4eda453767bc54bacf72b85'
  }

  /**
   * Yield farm for asset pair was resumed.
   */
  get asV78(): {globalFarmId: number, yieldFarmId: number, who: Uint8Array, assetPair: v78.AssetPair, multiplier: bigint} {
    assert(this.isV78)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningYieldFarmStoppedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.YieldFarmStopped')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Yield farm for asset pair was stopped.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LiquidityMining.YieldFarmStopped') === '9d459d74d7f6e8346a3efb030d03ba9b500ac6cf80e5bd76f596a887c8c02af4'
  }

  /**
   * Yield farm for asset pair was stopped.
   */
  get asV78(): {globalFarmId: number, yieldFarmId: number, who: Uint8Array, assetPair: v78.AssetPair} {
    assert(this.isV78)
    return this._chain.decodeEvent(this.event)
  }
}

export class LiquidityMiningYieldFarmUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'LiquidityMining.YieldFarmUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Yield farm multiplier was updated.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('LiquidityMining.YieldFarmUpdated') === 'faedb19f449f2e12558560814c43f910190a754cb4eda453767bc54bacf72b85'
  }

  /**
   * Yield farm multiplier was updated.
   */
  get asV78(): {globalFarmId: number, yieldFarmId: number, who: Uint8Array, assetPair: v78.AssetPair, multiplier: bigint} {
    assert(this.isV78)
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
   * Offer was accepted
   */
  get isV78(): boolean {
    return this._chain.getEventHash('Marketplace.OfferAccepted') === 'f0c64969aa0bb38598d60ee40e1c6befae4abc5b1835302ebc1b957c05eb0c42'
  }

  /**
   * Offer was accepted
   */
  get asV78(): {who: Uint8Array, class: bigint, instance: bigint, amount: bigint, maker: Uint8Array} {
    assert(this.isV78)
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
   * Offer was placed on a token
   */
  get isV78(): boolean {
    return this._chain.getEventHash('Marketplace.OfferPlaced') === 'e16435d4410d4a6b6ffce5b4169856dae7831e563e44572ff395cd265d9d64d1'
  }

  /**
   * Offer was placed on a token
   */
  get asV78(): {who: Uint8Array, class: bigint, instance: bigint, amount: bigint, expires: number} {
    assert(this.isV78)
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
   * Offer was withdrawn
   */
  get isV78(): boolean {
    return this._chain.getEventHash('Marketplace.OfferWithdrawn') === '669141c2bfed250cfd51ec61736d5b23f65d22716737b27cfa84f9a287f1412f'
  }

  /**
   * Offer was withdrawn
   */
  get asV78(): {who: Uint8Array, class: bigint, instance: bigint} {
    assert(this.isV78)
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
   * Marketplace data has been added
   */
  get isV78(): boolean {
    return this._chain.getEventHash('Marketplace.RoyaltyAdded') === '18115ec476316fefe14576ec64313da7708cf5ff92d25bca21c7cb2e50a12098'
  }

  /**
   * Marketplace data has been added
   */
  get asV78(): {class: bigint, instance: bigint, author: Uint8Array, royalty: number} {
    assert(this.isV78)
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
   * Royalty hs been paid to the author
   */
  get isV78(): boolean {
    return this._chain.getEventHash('Marketplace.RoyaltyPaid') === 'c299a673e7fd4c339f13007a754569929c4cf22b3f425157c44da6cb3ede4136'
  }

  /**
   * Royalty hs been paid to the author
   */
  get asV78(): {class: bigint, instance: bigint, author: Uint8Array, royalty: number, royaltyAmount: bigint} {
    assert(this.isV78)
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
   * The price for a token was updated
   */
  get isV78(): boolean {
    return this._chain.getEventHash('Marketplace.TokenPriceUpdated') === '36db2c5ce4786a5437e40968bfcb5727b1548bed0fec7d93b771e5f589c2233a'
  }

  /**
   * The price for a token was updated
   */
  get asV78(): {who: Uint8Array, class: bigint, instance: bigint, price: (bigint | undefined)} {
    assert(this.isV78)
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
   * Token was sold to a new owner
   */
  get isV78(): boolean {
    return this._chain.getEventHash('Marketplace.TokenSold') === 'c30b6db0fb1c37eb14b31c9148a9b2c3afdbe6f034f90a5f7160a284a8388c46'
  }

  /**
   * Token was sold to a new owner
   */
  get asV78(): {owner: Uint8Array, buyer: Uint8Array, class: bigint, instance: bigint, price: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('MultiTransactionPayment.CurrencyAdded') === '54828f2ad0eb28b7ccfebfbc9a9a269c2c381874a095b3dc64004ab1045d27b5'
  }

  /**
   * New accepted currency added
   * [currency]
   */
  get asV78(): {assetId: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('MultiTransactionPayment.CurrencyRemoved') === '54828f2ad0eb28b7ccfebfbc9a9a269c2c381874a095b3dc64004ab1045d27b5'
  }

  /**
   * Accepted currency removed
   * [currency]
   */
  get asV78(): {assetId: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('MultiTransactionPayment.CurrencySet') === 'e363878847f08e41654b7e9693d2ed1b2d68f1a11a4080a488f23f03d4568eb3'
  }

  /**
   * CurrencySet
   * [who, currency]
   */
  get asV78(): {accountId: Uint8Array, assetId: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('MultiTransactionPayment.FeeWithdrawn') === '688b18e799fc3f57dcaba8bf913ca803ddcdc43ec8acdc0b6fc309f9e486aa1a'
  }

  /**
   * Transaction fee paid in non-native currency
   * [Account, Currency, Native fee amount, Non-native fee amount, Destination account]
   */
  get asV78(): {accountId: Uint8Array, assetId: number, nativeFeeAmount: bigint, nonNativeFeeAmount: bigint, destinationAccountId: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Multisig.MultisigApproval') === 'bc800106752cebb28b84cdca738856289d0ade8d1818c303bd3f2000695fbb28'
  }

  /**
   * A multisig operation has been approved by someone.
   */
  get asV78(): {approving: Uint8Array, timepoint: v78.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Multisig.MultisigCancelled') === 'b24b244f000fd9e834b0f8c6d23aa3931d80d5b1c70f0f9a0e28826f22125b21'
  }

  /**
   * A multisig operation has been cancelled.
   */
  get asV78(): {cancelling: Uint8Array, timepoint: v78.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Multisig.MultisigExecuted') === '64fde797dd4ea0a5e8b72fba6c3511764d52e9d275c92fae4375d984eddab747'
  }

  /**
   * A multisig operation has been executed.
   */
  get asV78(): {approving: Uint8Array, timepoint: v78.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: Result<null, v78.DispatchError>} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Multisig.NewMultisig') === '137bdeb26018c08567fabc1c357d536046e92cc9fdf480339be5bc9e7e56d3be'
  }

  /**
   * A new multisig operation has begun.
   */
  get asV78(): {approving: Uint8Array, multisig: Uint8Array, callHash: Uint8Array} {
    assert(this.isV78)
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
   * A class was created
   */
  get isV78(): boolean {
    return this._chain.getEventHash('NFT.ClassCreated') === '964234ae203d3207b740072bc8630eee21c72fe7995f3fc03e62f0bb443cca32'
  }

  /**
   * A class was created
   */
  get asV78(): {owner: Uint8Array, classId: bigint, classType: v78.ClassType, metadata: Uint8Array} {
    assert(this.isV78)
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
   * A class was destroyed
   */
  get isV78(): boolean {
    return this._chain.getEventHash('NFT.ClassDestroyed') === '51309f98603f5eeb2eb07f9373848f1874c4bfaea4a29b0e0d21dd93b98da94a'
  }

  /**
   * A class was destroyed
   */
  get asV78(): {owner: Uint8Array, classId: bigint} {
    assert(this.isV78)
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
   * An instance was burned
   */
  get isV78(): boolean {
    return this._chain.getEventHash('NFT.InstanceBurned') === 'cbf0740ecac063f0cc91759153cc494f3d948025e716ccd16da079129444cc1d'
  }

  /**
   * An instance was burned
   */
  get asV78(): {owner: Uint8Array, classId: bigint, instanceId: bigint} {
    assert(this.isV78)
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
   * An instance was minted
   */
  get isV78(): boolean {
    return this._chain.getEventHash('NFT.InstanceMinted') === 'eb2d7da6cd031b1051bd4c0ebcbe8cd70b244f54737e21a7f8279dccee6fa006'
  }

  /**
   * An instance was minted
   */
  get asV78(): {owner: Uint8Array, classId: bigint, instanceId: bigint, metadata: Uint8Array} {
    assert(this.isV78)
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
   * An instance was transferred
   */
  get isV78(): boolean {
    return this._chain.getEventHash('NFT.InstanceTransferred') === 'e0a071978a33a540c15a46174c5018087ae648a19419f54dab0cb069ce949563'
  }

  /**
   * An instance was transferred
   */
  get asV78(): {from: Uint8Array, to: Uint8Array, classId: bigint, instanceId: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('OrmlXcm.Sent') === 'a58e2ab3184c3e4e335af85f0463bed0f68d37969e80066264857c6d71dbf4c7'
  }

  /**
   * XCM message sent. \[to, message\]
   */
  get asV78(): {to: v78.V1MultiLocation, message: v78.V2Instruction[]} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '62ab179c459e900954ede92a01f149d553e9317efc7d0129525f40d631e8b38f'
  }

  /**
   * Downward messages were processed using the given weight.
   * \[ weight_used, result_mqc_head \]
   */
  get asV78(): [bigint, Uint8Array] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * Some downward messages have been received and will be processed.
   * \[ count \]
   */
  get asV78(): number {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * An upgrade has been authorized.
   */
  get asV78(): Uint8Array {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * The validation function was applied as of the contained relay chain block number.
   */
  get asV78(): number {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionDiscarded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * The relay-chain aborted the upgrade process.
   */
  get asV78(): null {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * The validation function has been scheduled to apply.
   */
  get asV78(): null {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('PolkadotXcm.AssetsTrapped') === '0663ceb24fcbc7c249c0d23c9fc7292b881f8cf18a5c2ade1e5b4a25b0a6d900'
  }

  /**
   * Some assets have been placed in an asset trap.
   * 
   * \[ hash, origin, assets \]
   */
  get asV78(): [Uint8Array, v78.V1MultiLocation, v78.VersionedMultiAssets] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Attempted') === '4154651e242bd6b6bc077aa66e91ede994df17d6d31ec8746fb77b61829f6cc1'
  }

  /**
   * Execution of an XCM message was attempted.
   * 
   * \[ outcome \]
   */
  get asV78(): v78.V2Outcome {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('PolkadotXcm.InvalidResponder') === 'aca6b87c79cd283d77249dae5d6ff6b7249a24e95958b723f47cd2333f0e9bc1'
  }

  /**
   * Expected query response has been received but the origin location of the response does
   * not match that expected. The query remains registered for a later, valid, response to
   * be received and acted upon.
   * 
   * \[ origin location, id, expected location \]
   */
  get asV78(): [v78.V1MultiLocation, bigint, (v78.V1MultiLocation | undefined)] {
    assert(this.isV78)
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
  get isV78(): boolean {
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
  get asV78(): [v78.V1MultiLocation, bigint] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Notified') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
  }

  /**
   * Query response has been received and query is removed. The registered notification has
   * been dispatched and executed successfully.
   * 
   * \[ id, pallet index, call index \]
   */
  get asV78(): [bigint, number, number] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyDecodeFailed') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
  }

  /**
   * Query response has been received and query is removed. The dispatch was unable to be
   * decoded into a `Call`; this might be due to dispatch function having a signature which
   * is not `(origin, QueryId, Response)`.
   * 
   * \[ id, pallet index, call index \]
   */
  get asV78(): [bigint, number, number] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyDispatchError') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
  }

  /**
   * Query response has been received and query is removed. There was a general error with
   * dispatching the notification call.
   * 
   * \[ id, pallet index, call index \]
   */
  get asV78(): [bigint, number, number] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '0104ccc866506c43592e56f342852c22c060b58c586141b7900f6ad97353e8b2'
  }

  /**
   * Query response has been received and query is removed. The registered notification could
   * not be dispatched because the dispatch weight is greater than the maximum weight
   * originally budgeted by this runtime for the query result.
   * 
   * \[ id, pallet index, call index, actual weight, max budgeted weight \]
   */
  get asV78(): [bigint, number, number, bigint, bigint] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyTargetMigrationFail') === 'b02879418cace85908884f92e4b915e3b448f9e06d9bcc0edcce01ed9bc5b644'
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * migrating the location to our new XCM format.
   * 
   * \[ location, query ID \]
   */
  get asV78(): [v78.VersionedMultiLocation, bigint] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '0d47fb7e1a9ccdfd8879b0e483179d5b2c7b29bd5db653557e266536bc40f9a0'
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * sending the notification to it.
   * 
   * \[ location, query ID, error \]
   */
  get asV78(): [v78.V1MultiLocation, bigint, v78.V2Error] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('PolkadotXcm.ResponseReady') === '122689cbd0466e99035c5eeda9c178ed25d8a8fee01f9de0d818f7e86cd5e333'
  }

  /**
   * Query response has been received and is ready for taking with `take_response`. There is
   * no registered notification call.
   * 
   * \[ id, response \]
   */
  get asV78(): [bigint, v78.V2Response] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('PolkadotXcm.ResponseTaken') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
  }

  /**
   * Received query response has been read and removed.
   * 
   * \[ id \]
   */
  get asV78(): bigint {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Sent') === 'ae5e308764e970ce405a89338cec74552db382f20b13af73b16c9b7b172754e4'
  }

  /**
   * A XCM message was sent.
   * 
   * \[ origin, destination, message \]
   */
  get asV78(): [v78.V1MultiLocation, v78.V1MultiLocation, v78.V2Instruction[]] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('PolkadotXcm.SupportedVersionChanged') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
  }

  /**
   * The supported version of a location has been changed. This might be through an
   * automatic notification or a manual intervention.
   * 
   * \[ location, XCM version \]
   */
  get asV78(): [v78.V1MultiLocation, number] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('PolkadotXcm.UnexpectedResponse') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
  }

  /**
   * Query response received which does not match a registered query. This may be because a
   * matching query was never registered, it may be because it is a duplicate response, or
   * because the query timed out.
   * 
   * \[ origin location, id \]
   */
  get asV78(): [v78.V1MultiLocation, bigint] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('PolkadotXcm.VersionChangeNotified') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
  }

  /**
   * An XCM version change notification message has been attempted to be sent.
   * 
   * \[ destination, result \]
   */
  get asV78(): [v78.V1MultiLocation, number] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * A preimage has ben cleared.
   */
  get asV78(): {hash: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * A preimage has been noted.
   */
  get asV78(): {hash: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * A preimage has been requested.
   */
  get asV78(): {hash: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Proxy.Announced') === '5c2546e4632bb75e839f990a33f7feb63fb5598747a25d3d09f23108c106abc4'
  }

  /**
   * An announcement was placed to make a call in the future.
   */
  get asV78(): {real: Uint8Array, proxy: Uint8Array, callHash: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Proxy.AnonymousCreated') === '2ae1fc7b6aa368f544881badd412d5622f31290703ae2d914f3fef905c21459d'
  }

  /**
   * Anonymous account has been created by new proxy with given
   * disambiguation index and proxy type.
   */
  get asV78(): {anonymous: Uint8Array, who: Uint8Array, proxyType: v78.ProxyType, disambiguationIndex: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Proxy.ProxyAdded') === 'eda8243cba180fa34205c5bc7a0a4a21bb66b3b65f5d2ef359082868247d028f'
  }

  /**
   * A proxy was added.
   */
  get asV78(): {delegator: Uint8Array, delegatee: Uint8Array, proxyType: v78.ProxyType, delay: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Proxy.ProxyExecuted') === '437b0d6b61f01d02ca149f7d3a9e00406fc26ecde780532ed80e532801995307'
  }

  /**
   * A proxy was executed correctly, with the given.
   */
  get asV78(): {result: Result<null, v78.DispatchError>} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('RelayChainInfo.CurrentBlockNumbers') === '2a497d74883525ffecab20188eabdfe61bbd91a6d017f713ae89338fa42ab3ba'
  }

  /**
   * Current block numbers
   * [ Parachain block number, Relaychain Block number ]
   */
  get asV78(): {parachainBlockNumber: number, relaychainBlockNumber: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Scheduler.CallLookupFailed') === 'ecc6a872eaa4608ccd69e4dfbf292a89f058591fc70991470a93ba1be36fd2e4'
  }

  /**
   * The call for the provided hash was not found so the task has been aborted.
   */
  get asV78(): {task: [number, number], id: (Uint8Array | undefined), error: v78.LookupError} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Scheduler.Canceled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
  }

  /**
   * Canceled some task.
   */
  get asV78(): {when: number, index: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Scheduler.Dispatched') === '39cf66f8b318db4669e183ffaa1290aec1f8ac972b379087a931cf63e5ddf8f9'
  }

  /**
   * Dispatched some task.
   */
  get asV78(): {task: [number, number], id: (Uint8Array | undefined), result: Result<null, v78.DispatchError>} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Scheduler.Scheduled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
  }

  /**
   * Scheduled some task.
   */
  get asV78(): {when: number, index: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Session.NewSession') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
  }

  /**
   * New session has happened. Note that the argument is the session index, not the
   * block number as the type might suggest.
   */
  get asV78(): {sessionIndex: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Sudo.KeyChanged') === 'b94a7a753f8f0b026120555f1f1c70878235307461e256807cb791dad15244c2'
  }

  /**
   * The \[sudoer\] just switched identity; the old key is supplied if one existed.
   */
  get asV78(): {oldSudoer: (Uint8Array | undefined)} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Sudo.Sudid') === 'df00148bd8d36e5e2756be8c56bdf238f29aa9538028f4f316d580eaba1be9b0'
  }

  /**
   * A sudo just took place. \[result\]
   */
  get asV78(): {sudoResult: Result<null, v78.DispatchError>} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Sudo.SudoAsDone') === 'df00148bd8d36e5e2756be8c56bdf238f29aa9538028f4f316d580eaba1be9b0'
  }

  /**
   * A sudo just took place. \[result\]
   */
  get asV78(): {sudoResult: Result<null, v78.DispatchError>} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * `:code` was updated.
   */
  get asV78(): null {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === '3b8e9f2b48f4b6f0f996d20434018cdbe20aacb2470e779d965d42dad18b0a4e'
  }

  /**
   * An extrinsic failed.
   */
  get asV78(): {dispatchError: v78.DispatchError, dispatchInfo: v78.DispatchInfo} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('System.ExtrinsicSuccess') === '407ed94c14f243acbe2cdb53df52c37d97bbb5ae550a10a6036bf59677cdd165'
  }

  /**
   * An extrinsic completed successfully.
   */
  get asV78(): {dispatchInfo: v78.DispatchInfo} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * An account was reaped.
   */
  get asV78(): {account: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * A new account was created.
   */
  get asV78(): {account: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
  }

  /**
   * On on-chain remark happened.
   */
  get asV78(): {sender: Uint8Array, hash: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV78(): {proposalHash: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV78(): {proposalHash: Uint8Array, yes: number, no: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV78(): {proposalHash: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV78(): {proposalHash: Uint8Array, result: Result<null, v78.DispatchError>} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asV78(): {proposalHash: Uint8Array, result: Result<null, v78.DispatchError>} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV78(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV78(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Tips.NewTip') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
  }

  /**
   * A new tip suggestion has been opened.
   */
  get asV78(): {tipHash: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Tips.TipClosed') === '788934ef84a9cf41376f9a41333ed4129722ae02b069eb169dcd9a50e4eb300f'
  }

  /**
   * A tip suggestion has been closed.
   */
  get asV78(): {tipHash: Uint8Array, who: Uint8Array, payout: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Tips.TipClosing') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
  }

  /**
   * A tip suggestion has reached threshold and is closing.
   */
  get asV78(): {tipHash: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Tips.TipRetracted') === '8b10779b3fb5da73b64cdc34a9dd34ca7332ab5d36faafcef88747835b895945'
  }

  /**
   * A tip suggestion has been retracted.
   */
  get asV78(): {tipHash: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Tips.TipSlashed') === 'bbbf33d69edf4cf82e85596453190f61c96067be0ca329ff7dcf6cd4ea9313a3'
  }

  /**
   * A tip suggestion has been slashed.
   */
  get asV78(): {tipHash: Uint8Array, finder: Uint8Array, deposit: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Tokens.BalanceSet') === 'a833bc82c917c67a079a265a7ecb101a0f1cef9d40a10b73e3d675773b059822'
  }

  /**
   * A balance was set by root.
   */
  get asV78(): {currencyId: number, who: Uint8Array, free: bigint, reserved: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Tokens.DustLost') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
  }

  /**
   * An account was removed whose balance was non-zero but below
   * ExistentialDeposit, resulting in an outright loss.
   */
  get asV78(): {currencyId: number, who: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Tokens.Endowed') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
  }

  /**
   * An account was created with some free balance.
   */
  get asV78(): {currencyId: number, who: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Tokens.RepatriatedReserve') === '31e192b310f4e2068344c790f1d009c88b06da722feba84db56fe8a1b8e21039'
  }

  /**
   * Some reserved balance was repatriated (moved from reserved to
   * another account).
   */
  get asV78(): {currencyId: number, from: Uint8Array, to: Uint8Array, amount: bigint, status: v78.BalanceStatus} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Tokens.Reserved') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asV78(): {currencyId: number, who: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Tokens.Transfer') === 'd02b411d552a8c2e6d90c70aa7f3ff856688d4b5e4a933253a8560ce04da6f04'
  }

  /**
   * Transfer succeeded.
   */
  get asV78(): {currencyId: number, from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Tokens.Unreserved') === '494a6f07c3501c8da40d231e4aa473266a144ecedca8d54dd3bc40b7c4355ec7'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asV78(): {currencyId: number, who: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('TransactionPause.TransactionPaused') === '22dc8b864509275cfbe86bb0ee61c6f9316611de96e80393d00b0b715677c03e'
  }

  /**
   * Paused transaction
   */
  get asV78(): {palletNameBytes: Uint8Array, functionNameBytes: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('TransactionPause.TransactionUnpaused') === '22dc8b864509275cfbe86bb0ee61c6f9316611de96e80393d00b0b715677c03e'
  }

  /**
   * Unpaused transaction
   */
  get asV78(): {palletNameBytes: Uint8Array, functionNameBytes: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Treasury.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
  }

  /**
   * Some funds have been allocated.
   */
  get asV78(): {proposalIndex: number, award: bigint, account: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Treasury.Burnt') === '9d1d11cb2e24085666bf949195a4030bd6e80ff41274d0386073977e7cd59a87'
  }

  /**
   * Some of our funds have been burnt.
   */
  get asV78(): {burntFunds: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Treasury.Deposit') === 'd74027ad27459f17d7446fef449271d1b0dc12b852c175623e871d009a661493'
  }

  /**
   * Some funds have been deposited.
   */
  get asV78(): {value: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
  }

  /**
   * New proposal.
   */
  get asV78(): {proposalIndex: number} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get asV78(): {proposalIndex: number, slashed: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Treasury.Rollover') === 'c9e720e2b3ada12c617b4dcb70771c3afafb9e294bf362df01a9e129683a92dd'
  }

  /**
   * Spending has finished; this is the amount that rolls over until next spend.
   */
  get asV78(): {rolloverBalance: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Treasury.Spending') === 'b9f599ccbbe2e4fd1004f47546e1a3100bc78745b24ac47ac03ed16ca6266290'
  }

  /**
   * We have ended a spend period and will now allocate funds.
   */
  get asV78(): {budgetRemaining: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.ApprovalCancelled') === 'b2d300fbcace15ebddc8c0ca7fd61b86ac7d23adb4d8d9e3d821ff9143636db6'
  }

  /**
   * An approval for a `delegate` account to transfer the `instance` of an asset `class` was
   * cancelled by its `owner`.
   */
  get asV78(): {class: bigint, instance: bigint, owner: Uint8Array, delegate: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.ApprovedTransfer') === 'b2d300fbcace15ebddc8c0ca7fd61b86ac7d23adb4d8d9e3d821ff9143636db6'
  }

  /**
   * An `instance` of an asset `class` has been approved by the `owner` for transfer by a
   * `delegate`.
   */
  get asV78(): {class: bigint, instance: bigint, owner: Uint8Array, delegate: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.AssetStatusChanged') === '75e6085c59f4d782c06f7a0843ebcb0240f6394ff3a8d3bb595bea3cdc712c28'
  }

  /**
   * An asset `class` has had its attributes changed by the `Force` origin.
   */
  get asV78(): {class: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.AttributeCleared') === 'a5f8e741e0b302be33e653021912e34436616ec149e91451705e8f6f3a176d13'
  }

  /**
   * Attribute metadata has been cleared for an asset class or instance.
   */
  get asV78(): {class: bigint, maybeInstance: (bigint | undefined), key: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.AttributeSet') === '586ef16200f13b2deeb7b606035c1aa1e7eb1ef9f8bbf16d580301f3329aed88'
  }

  /**
   * New attribute metadata has been set for an asset class or instance.
   */
  get asV78(): {class: bigint, maybeInstance: (bigint | undefined), key: Uint8Array, value: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.Burned') === '77f28107e67211b84a3847ce09ff9aa27ca1539dbc60bcccd993b70e9a255d6a'
  }

  /**
   * An asset `instance` was destroyed.
   */
  get asV78(): {class: bigint, instance: bigint, owner: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.ClassFrozen') === '75e6085c59f4d782c06f7a0843ebcb0240f6394ff3a8d3bb595bea3cdc712c28'
  }

  /**
   * Some asset `class` was frozen.
   */
  get asV78(): {class: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.ClassMetadataCleared') === '75e6085c59f4d782c06f7a0843ebcb0240f6394ff3a8d3bb595bea3cdc712c28'
  }

  /**
   * Metadata has been cleared for an asset class.
   */
  get asV78(): {class: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.ClassMetadataSet') === '658528f8d03308353147808e7fb26ffe0537709847954e4fc22ba84f8f1d3ecb'
  }

  /**
   * New metadata has been set for an asset class.
   */
  get asV78(): {class: bigint, data: Uint8Array, isFrozen: boolean} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.ClassThawed') === '75e6085c59f4d782c06f7a0843ebcb0240f6394ff3a8d3bb595bea3cdc712c28'
  }

  /**
   * Some asset `class` was thawed.
   */
  get asV78(): {class: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.Created') === 'c913362637cc7f8673e4e5173d9c364f19eccc82f8e6ff0cbe5d542f52f6bd59'
  }

  /**
   * An asset class was created.
   */
  get asV78(): {class: bigint, creator: Uint8Array, owner: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.Destroyed') === '75e6085c59f4d782c06f7a0843ebcb0240f6394ff3a8d3bb595bea3cdc712c28'
  }

  /**
   * An asset `class` was destroyed.
   */
  get asV78(): {class: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.ForceCreated') === 'ff546d4de9e6da404ce3a62d928984ca6511f39a165041c36b31c056c6ca5fd1'
  }

  /**
   * An asset class was force-created.
   */
  get asV78(): {class: bigint, owner: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.Frozen') === 'da2dff8925322764412ece8032922d707079757b29c7200d9664b9a71e389591'
  }

  /**
   * Some asset `instance` was frozen.
   */
  get asV78(): {class: bigint, instance: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.Issued') === '77f28107e67211b84a3847ce09ff9aa27ca1539dbc60bcccd993b70e9a255d6a'
  }

  /**
   * An asset `instance` was issued.
   */
  get asV78(): {class: bigint, instance: bigint, owner: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.MetadataCleared') === 'da2dff8925322764412ece8032922d707079757b29c7200d9664b9a71e389591'
  }

  /**
   * Metadata has been cleared for an asset instance.
   */
  get asV78(): {class: bigint, instance: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.MetadataSet') === '5849d49ac0992c498c8a78aef429e47efe3ce9f467709d0badc698d2a628515d'
  }

  /**
   * New metadata has been set for an asset instance.
   */
  get asV78(): {class: bigint, instance: bigint, data: Uint8Array, isFrozen: boolean} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.OwnerChanged') === '71d0f12023630afd8b6104510f3a2f5fa52fa18f35e8052e77f6c775ba2ca84e'
  }

  /**
   * The owner changed.
   */
  get asV78(): {class: bigint, newOwner: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.Redeposited') === '1ff6e62395de7a980f2b23324883dfc2345854d90ae8a9cca0bf589354f20ec7'
  }

  /**
   * Metadata has been cleared for an asset instance.
   */
  get asV78(): {class: bigint, successfulInstances: bigint[]} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.TeamChanged') === '4388088c5a5b28db3fb52f5122e20773087db21411f8f17abeee116219cfd760'
  }

  /**
   * The management team changed.
   */
  get asV78(): {class: bigint, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.Thawed') === 'da2dff8925322764412ece8032922d707079757b29c7200d9664b9a71e389591'
  }

  /**
   * Some asset `instance` was thawed.
   */
  get asV78(): {class: bigint, instance: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Uniques.Transferred') === '9e23bb00a6173b78503db8f5338e6a5809a15de6af71afcfa86aa067bdda27c3'
  }

  /**
   * An asset `instance` was transferred.
   */
  get asV78(): {class: bigint, instance: bigint, from: Uint8Array, to: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('UnknownTokens.Deposited') === '5618a3d9662352222101d08b90934710ebf739425cdbaf5ff63a3c258c219c8a'
  }

  /**
   * Deposit success.
   */
  get asV78(): {asset: v78.V1MultiAsset, who: v78.V1MultiLocation} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('UnknownTokens.Withdrawn') === '5618a3d9662352222101d08b90934710ebf739425cdbaf5ff63a3c258c219c8a'
  }

  /**
   * Withdraw success.
   */
  get asV78(): {asset: v78.V1MultiAsset, who: v78.V1MultiLocation} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Batch of dispatches completed fully with no error.
   */
  get asV78(): null {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Utility.BatchInterrupted') === '8676c6dc6a22410c7ddbc9f34f71e25e9bc1f7237c98ea59385020ce26129067'
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get asV78(): {index: number, error: v78.DispatchError} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Utility.DispatchedAs') === '437b0d6b61f01d02ca149f7d3a9e00406fc26ecde780532ed80e532801995307'
  }

  /**
   * A call was dispatched.
   */
  get asV78(): {result: Result<null, v78.DispatchError>} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * A single item within a Batch of dispatches has completed with no error.
   */
  get asV78(): null {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Vesting.Claimed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Claimed vesting.
   */
  get asV78(): {who: Uint8Array, amount: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Vesting.VestingScheduleAdded') === '18422c66dedd030e21a5567fde05a68ab5ad4ffff5f9fdcd73f3d18dcb91873c'
  }

  /**
   * Added new vesting schedule.
   */
  get asV78(): {from: Uint8Array, to: Uint8Array, vestingSchedule: v78.VestingSchedule} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('Vesting.VestingSchedulesUpdated') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
  }

  /**
   * Updated vesting schedules.
   */
  get asV78(): {who: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeEvent(this.event)
  }
}

export class WarehouseLmGlobalFarmAccRpzUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'WarehouseLM.GlobalFarmAccRPZUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Global farm accumulated reward per share was updated.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('WarehouseLM.GlobalFarmAccRPZUpdated') === '48014a619754e7f934a4e8b8d6327eb2c2708808ffaae7d36b64c90d4435cabd'
  }

  /**
   * Global farm accumulated reward per share was updated.
   */
  get asV78(): {globalFarmId: number, accumulatedRpz: bigint, totalSharesZ: bigint} {
    assert(this.isV78)
    return this._chain.decodeEvent(this.event)
  }
}

export class WarehouseLmYieldFarmAccRpvsUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'WarehouseLM.YieldFarmAccRPVSUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Yield farm accumulated reward per valued share was updated.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('WarehouseLM.YieldFarmAccRPVSUpdated') === 'f81daed38a6c58ee257b84fce7d8b83ea08e6144e10187722cab39c09aa179d6'
  }

  /**
   * Yield farm accumulated reward per valued share was updated.
   */
  get asV78(): {globalFarmId: number, yieldFarmId: number, accumulatedRpvs: bigint, totalValuedShares: bigint} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('XTokens.TransferredMultiAssets') === '19a61ff727b39e06bdac9248dc278a5be6292a6af670958a6338915a3e003249'
  }

  /**
   * Transferred `MultiAsset` with fee.
   */
  get asV78(): {sender: Uint8Array, assets: v78.V1MultiAsset[], fee: v78.V1MultiAsset, dest: v78.V1MultiLocation} {
    assert(this.isV78)
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
   * Asset purchase executed.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('XYK.BuyExecuted') === '6d73c81e782551041cb41f77d5f1a15a480292465bb9afcd71986604918661f7'
  }

  /**
   * Asset purchase executed.
   */
  get asV78(): {who: Uint8Array, assetOut: number, assetIn: number, amount: bigint, buyPrice: bigint, feeAsset: number, feeAmount: bigint, pool: Uint8Array} {
    assert(this.isV78)
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
   * New liquidity was provided to the pool.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('XYK.LiquidityAdded') === '3193e6555f21c9e90548b027501d705082e3e32963394730588a4c59f0b47fa0'
  }

  /**
   * New liquidity was provided to the pool.
   */
  get asV78(): {who: Uint8Array, assetA: number, assetB: number, amountA: bigint, amountB: bigint} {
    assert(this.isV78)
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
   * Liquidity was removed from the pool.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('XYK.LiquidityRemoved') === '7a5438bb50dcc97a9b472e6c8a6ccaa356791fb5197490e4e0b1e8d743086086'
  }

  /**
   * Liquidity was removed from the pool.
   */
  get asV78(): {who: Uint8Array, assetA: number, assetB: number, shares: bigint} {
    assert(this.isV78)
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
   * Pool was created.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('XYK.PoolCreated') === '2acd30ee8213b032906578ce28f6216d7ce1f401b75ea087d6aeae9a5202defa'
  }

  /**
   * Pool was created.
   */
  get asV78(): {who: Uint8Array, assetA: number, assetB: number, initialSharesAmount: bigint, shareToken: number, pool: Uint8Array} {
    assert(this.isV78)
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
   * Pool was destroyed.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('XYK.PoolDestroyed') === '8c639b2fa3536c6e98658a8a63826996e62906783540b52831ea8fecfed5deab'
  }

  /**
   * Pool was destroyed.
   */
  get asV78(): {who: Uint8Array, assetA: number, assetB: number, shareToken: number, pool: Uint8Array} {
    assert(this.isV78)
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
   * Asset sale executed.
   */
  get isV78(): boolean {
    return this._chain.getEventHash('XYK.SellExecuted') === 'a55c9c09ccfb062717f59a4c44a9e4b764c6435c3f8f6db45aec4b4a450bf47b'
  }

  /**
   * Asset sale executed.
   */
  get asV78(): {who: Uint8Array, assetIn: number, assetOut: number, amount: bigint, salePrice: bigint, feeAsset: number, feeAmount: bigint, pool: Uint8Array} {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('XcmpQueue.BadFormat') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * Bad XCM format used.
   */
  get asV78(): (Uint8Array | undefined) {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('XcmpQueue.BadVersion') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * Bad XCM version used.
   */
  get asV78(): (Uint8Array | undefined) {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('XcmpQueue.Fail') === '639070abee49a6419e897939fc5b761d561a52efc062a7f1a1183b543e786999'
  }

  /**
   * Some XCM failed.
   */
  get asV78(): [(Uint8Array | undefined), v78.V2Error] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === 'ebfdd28144c52e3beb9a90e53e214e90e6114fc4d52e2c572b7e0a2e8c303bd5'
  }

  /**
   * An XCM exceeded the individual message weight budget.
   */
  get asV78(): [number, number, bigint, bigint] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
  }

  /**
   * An XCM from the overweight queue was executed with the given actual weight used.
   */
  get asV78(): [bigint, bigint] {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('XcmpQueue.Success') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * Some XCM was executed ok.
   */
  get asV78(): (Uint8Array | undefined) {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('XcmpQueue.UpwardMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * An upward message was sent to the relay chain.
   */
  get asV78(): (Uint8Array | undefined) {
    assert(this.isV78)
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
  get isV78(): boolean {
    return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * An HRMP message was sent to a sibling parachain.
   */
  get asV78(): (Uint8Array | undefined) {
    assert(this.isV78)
    return this._chain.decodeEvent(this.event)
  }
}
