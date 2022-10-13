import assert from 'assert'
import {Block, Chain, ChainContext, BlockContext, Result} from './support'
import * as v78 from './v78'

export class AssetRegistryNativeAssetIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Native Asset Id
   */
  get isV78() {
    return this._chain.getConstantTypeHash('AssetRegistry', 'NativeAssetId') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Native Asset Id
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('AssetRegistry', 'NativeAssetId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('AssetRegistry', 'NativeAssetId') != null
  }
}

export class AuthorshipUncleGenerationsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The number of blocks back we should accept uncles.
   *  This means that we will deal with uncle-parents that are
   *  `UncleGenerations + 1` before `now`.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Authorship', 'UncleGenerations') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The number of blocks back we should accept uncles.
   *  This means that we will deal with uncle-parents that are
   *  `UncleGenerations + 1` before `now`.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Authorship', 'UncleGenerations')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Authorship', 'UncleGenerations') != null
  }
}

export class BalancesExistentialDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount required to keep an account open.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The minimum amount required to keep an account open.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Balances', 'ExistentialDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Balances', 'ExistentialDeposit') != null
  }
}

export class BalancesMaxLocksConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of locks that should exist on an account.
   *  Not strictly enforced, but used for weight estimation.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Balances', 'MaxLocks') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of locks that should exist on an account.
   *  Not strictly enforced, but used for weight estimation.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Balances', 'MaxLocks')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Balances', 'MaxLocks') != null
  }
}

export class BalancesMaxReservesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of named reserves that can exist on an account.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Balances', 'MaxReserves') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of named reserves that can exist on an account.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Balances', 'MaxReserves')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Balances', 'MaxReserves') != null
  }
}

export class CurrenciesGetNativeCurrencyIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  get isV78() {
    return this._chain.getConstantTypeHash('Currencies', 'GetNativeCurrencyId') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Currencies', 'GetNativeCurrencyId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Currencies', 'GetNativeCurrencyId') != null
  }
}

export class DemocracyCooloffPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Period in blocks where an external proposal may not be re-submitted after being vetoed.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Democracy', 'CooloffPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Period in blocks where an external proposal may not be re-submitted after being vetoed.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Democracy', 'CooloffPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'CooloffPeriod') != null
  }
}

export class DemocracyEnactmentPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The period between a proposal being approved and enacted.
   * 
   *  It should generally be a little more than the unstake period to ensure that
   *  voting stakers have an opportunity to remove themselves from the system in the case
   *  where they are on the losing side of a vote.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Democracy', 'EnactmentPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The period between a proposal being approved and enacted.
   * 
   *  It should generally be a little more than the unstake period to ensure that
   *  voting stakers have an opportunity to remove themselves from the system in the case
   *  where they are on the losing side of a vote.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Democracy', 'EnactmentPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'EnactmentPeriod') != null
  }
}

export class DemocracyFastTrackVotingPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum voting period allowed for a fast-track referendum.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Democracy', 'FastTrackVotingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Minimum voting period allowed for a fast-track referendum.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Democracy', 'FastTrackVotingPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'FastTrackVotingPeriod') != null
  }
}

export class DemocracyInstantAllowedConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Indicator for whether an emergency origin is even allowed to happen. Some chains may
   *  want to set this permanently to `false`, others may want to condition it on things such
   *  as an upgrade having happened recently.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Democracy', 'InstantAllowed') === 'ad6087d319c50ed2bab855d7787007597248f7ed5d13382638d7da078264028b'
  }

  /**
   *  Indicator for whether an emergency origin is even allowed to happen. Some chains may
   *  want to set this permanently to `false`, others may want to condition it on things such
   *  as an upgrade having happened recently.
   */
  get asV78(): boolean {
    assert(this.isV78)
    return this._chain.getConstant('Democracy', 'InstantAllowed')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'InstantAllowed') != null
  }
}

export class DemocracyLaunchPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  How often (in blocks) new public referenda are launched.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Democracy', 'LaunchPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  How often (in blocks) new public referenda are launched.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Democracy', 'LaunchPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'LaunchPeriod') != null
  }
}

export class DemocracyMaxProposalsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of public proposals that can exist at any time.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Democracy', 'MaxProposals') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of public proposals that can exist at any time.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Democracy', 'MaxProposals')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'MaxProposals') != null
  }
}

export class DemocracyMaxVotesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of votes for an account.
   * 
   *  Also used to compute weight, an overly big value can
   *  lead to extrinsic with very big weight: see `delegate` for instance.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Democracy', 'MaxVotes') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of votes for an account.
   * 
   *  Also used to compute weight, an overly big value can
   *  lead to extrinsic with very big weight: see `delegate` for instance.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Democracy', 'MaxVotes')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'MaxVotes') != null
  }
}

export class DemocracyMinimumDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount to be used as a deposit for a public referendum proposal.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Democracy', 'MinimumDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The minimum amount to be used as a deposit for a public referendum proposal.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Democracy', 'MinimumDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'MinimumDeposit') != null
  }
}

export class DemocracyPreimageByteDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of balance that must be deposited per byte of preimage stored.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Democracy', 'PreimageByteDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of balance that must be deposited per byte of preimage stored.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Democracy', 'PreimageByteDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'PreimageByteDeposit') != null
  }
}

export class DemocracyVoteLockingPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum period of vote locking.
   * 
   *  It should be no shorter than enactment period to ensure that in the case of an approval,
   *  those successful voters are locked into the consequences that their votes entail.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Democracy', 'VoteLockingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The minimum period of vote locking.
   * 
   *  It should be no shorter than enactment period to ensure that in the case of an approval,
   *  those successful voters are locked into the consequences that their votes entail.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Democracy', 'VoteLockingPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'VoteLockingPeriod') != null
  }
}

export class DemocracyVotingPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  How often (in blocks) to check for new votes.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Democracy', 'VotingPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  How often (in blocks) to check for new votes.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Democracy', 'VotingPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Democracy', 'VotingPeriod') != null
  }
}

export class DusterNativeCurrencyIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Native Asset Id
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Duster', 'NativeCurrencyId') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Native Asset Id
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Duster', 'NativeCurrencyId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Duster', 'NativeCurrencyId') != null
  }
}

export class DusterRewardConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Reward amount
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Duster', 'Reward') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Reward amount
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Duster', 'Reward')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Duster', 'Reward') != null
  }
}

export class ElectionsCandidacyBondConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  How much should be locked up in order to submit one's candidacy.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Elections', 'CandidacyBond') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  How much should be locked up in order to submit one's candidacy.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Elections', 'CandidacyBond')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'CandidacyBond') != null
  }
}

export class ElectionsDesiredMembersConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Number of members to elect.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Elections', 'DesiredMembers') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Number of members to elect.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Elections', 'DesiredMembers')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'DesiredMembers') != null
  }
}

export class ElectionsDesiredRunnersUpConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Number of runners_up to keep.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Elections', 'DesiredRunnersUp') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Number of runners_up to keep.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Elections', 'DesiredRunnersUp')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'DesiredRunnersUp') != null
  }
}

export class ElectionsPalletIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Identifier for the elections-phragmen pallet's lock
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Elections', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
  }

  /**
   *  Identifier for the elections-phragmen pallet's lock
   */
  get asV78(): Uint8Array {
    assert(this.isV78)
    return this._chain.getConstant('Elections', 'PalletId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'PalletId') != null
  }
}

export class ElectionsTermDurationConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  How long each seat is kept. This defines the next block number at which an election
   *  round will happen. If set to zero, no elections are ever triggered and the module will
   *  be in passive mode.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Elections', 'TermDuration') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  How long each seat is kept. This defines the next block number at which an election
   *  round will happen. If set to zero, no elections are ever triggered and the module will
   *  be in passive mode.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Elections', 'TermDuration')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'TermDuration') != null
  }
}

export class ElectionsVotingBondBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Base deposit associated with voting.
   * 
   *  This should be sensibly high to economically ensure the pallet cannot be attacked by
   *  creating a gigantic number of votes.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Elections', 'VotingBondBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Base deposit associated with voting.
   * 
   *  This should be sensibly high to economically ensure the pallet cannot be attacked by
   *  creating a gigantic number of votes.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Elections', 'VotingBondBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'VotingBondBase') != null
  }
}

export class ElectionsVotingBondFactorConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of bond that need to be locked for each vote (32 bytes).
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Elections', 'VotingBondFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of bond that need to be locked for each vote (32 bytes).
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Elections', 'VotingBondFactor')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Elections', 'VotingBondFactor') != null
  }
}

export class Exchangemax_out_ratioConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  get isV78() {
    return this._chain.getConstantTypeHash('Exchange', 'max_out_ratio') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Exchange', 'max_out_ratio')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Exchange', 'max_out_ratio') != null
  }
}

export class IdentityBasicDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit for a registered identity
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Identity', 'BasicDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit for a registered identity
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Identity', 'BasicDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'BasicDeposit') != null
  }
}

export class IdentityFieldDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit per additional field for a registered identity.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Identity', 'FieldDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit per additional field for a registered identity.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Identity', 'FieldDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'FieldDeposit') != null
  }
}

export class IdentityMaxAdditionalFieldsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
   *  required to access an identity, but can be pretty high.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Identity', 'MaxAdditionalFields') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
   *  required to access an identity, but can be pretty high.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Identity', 'MaxAdditionalFields')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'MaxAdditionalFields') != null
  }
}

export class IdentityMaxRegistrarsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maxmimum number of registrars allowed in the system. Needed to bound the complexity
   *  of, e.g., updating judgements.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Identity', 'MaxRegistrars') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maxmimum number of registrars allowed in the system. Needed to bound the complexity
   *  of, e.g., updating judgements.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Identity', 'MaxRegistrars')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'MaxRegistrars') != null
  }
}

export class IdentityMaxSubAccountsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of sub-accounts allowed per identified account.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Identity', 'MaxSubAccounts') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of sub-accounts allowed per identified account.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Identity', 'MaxSubAccounts')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'MaxSubAccounts') != null
  }
}

export class IdentitySubAccountDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit for a registered subaccount. This should account for the fact
   *  that one storage item's value will increase by the size of an account ID, and there will
   *  be another trie item whose value is the size of an account ID plus 32 bytes.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Identity', 'SubAccountDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit for a registered subaccount. This should account for the fact
   *  that one storage item's value will increase by the size of an account ID, and there will
   *  be another trie item whose value is the size of an account ID plus 32 bytes.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Identity', 'SubAccountDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Identity', 'SubAccountDeposit') != null
  }
}

export class LBPMaxInRatioConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Max fraction of pool to sell in single transaction
   */
  get isV78() {
    return this._chain.getConstantTypeHash('LBP', 'MaxInRatio') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Max fraction of pool to sell in single transaction
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('LBP', 'MaxInRatio')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('LBP', 'MaxInRatio') != null
  }
}

export class LBPMaxOutRatioConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Max fraction of pool to buy in single transaction
   */
  get isV78() {
    return this._chain.getConstantTypeHash('LBP', 'MaxOutRatio') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Max fraction of pool to buy in single transaction
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('LBP', 'MaxOutRatio')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('LBP', 'MaxOutRatio') != null
  }
}

export class LBPMinPoolLiquidityConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum pool liquidity, sole purpose of this is to keep the math working
   */
  get isV78() {
    return this._chain.getConstantTypeHash('LBP', 'MinPoolLiquidity') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Minimum pool liquidity, sole purpose of this is to keep the math working
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('LBP', 'MinPoolLiquidity')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('LBP', 'MinPoolLiquidity') != null
  }
}

export class LBPMinTradingLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum trading limit, sole purpose of this is to keep the math working
   */
  get isV78() {
    return this._chain.getConstantTypeHash('LBP', 'MinTradingLimit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Minimum trading limit, sole purpose of this is to keep the math working
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('LBP', 'MinTradingLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('LBP', 'MinTradingLimit') != null
  }
}

export class LBPrepay_feeConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  get isV78() {
    return this._chain.getConstantTypeHash('LBP', 'repay_fee') === '89667797236ba996cee700097e48264fab1c5603dc68df58a8ff56acf2809f5c'
  }

  get asV78(): [number, number] {
    assert(this.isV78)
    return this._chain.getConstant('LBP', 'repay_fee')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('LBP', 'repay_fee') != null
  }
}

export class LiquidityMiningNftClassIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  NFT class id for liq. mining deposit nfts. Has to be within the range of reserved NFT class IDs.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('LiquidityMining', 'NftClassId') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  NFT class id for liq. mining deposit nfts. Has to be within the range of reserved NFT class IDs.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('LiquidityMining', 'NftClassId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('LiquidityMining', 'NftClassId') != null
  }
}

export class MarketplaceMinimumOfferAmountConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  get isV78() {
    return this._chain.getConstantTypeHash('Marketplace', 'MinimumOfferAmount') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Marketplace', 'MinimumOfferAmount')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Marketplace', 'MinimumOfferAmount') != null
  }
}

export class MarketplaceRoyaltyBondAmountConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  get isV78() {
    return this._chain.getConstantTypeHash('Marketplace', 'RoyaltyBondAmount') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Marketplace', 'RoyaltyBondAmount')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Marketplace', 'RoyaltyBondAmount') != null
  }
}

export class MultiTransactionPaymentFeeReceiverConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Account where fees are deposited
   */
  get isV78() {
    return this._chain.getConstantTypeHash('MultiTransactionPayment', 'FeeReceiver') === 'cc28a7f7046ec4d0eb3419e4aa142bf25c25992e58d0e8646eb029c7c6b4c0c8'
  }

  /**
   *  Account where fees are deposited
   */
  get asV78(): Uint8Array {
    assert(this.isV78)
    return this._chain.getConstant('MultiTransactionPayment', 'FeeReceiver')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('MultiTransactionPayment', 'FeeReceiver') != null
  }
}

export class MultiTransactionPaymentNativeAssetIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Native Asset
   */
  get isV78() {
    return this._chain.getConstantTypeHash('MultiTransactionPayment', 'NativeAssetId') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Native Asset
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('MultiTransactionPayment', 'NativeAssetId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('MultiTransactionPayment', 'NativeAssetId') != null
  }
}

export class MultiTransactionPaymentWithdrawFeeForSetCurrencyConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Should fee be paid for setting a currency
   */
  get isV78() {
    return this._chain.getConstantTypeHash('MultiTransactionPayment', 'WithdrawFeeForSetCurrency') === 'b9c1afe70451c7d51ebb0c0c6ee25953c121c6e3aaa57e729862616f580daa35'
  }

  /**
   *  Should fee be paid for setting a currency
   */
  get asV78(): v78.Pays {
    assert(this.isV78)
    return this._chain.getConstant('MultiTransactionPayment', 'WithdrawFeeForSetCurrency')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('MultiTransactionPayment', 'WithdrawFeeForSetCurrency') != null
  }
}

export class MultisigDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The base amount of currency needed to reserve for creating a multisig execution or to
   *  store a dispatch call for later.
   * 
   *  This is held for an additional storage item whose value size is
   *  `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
   *  `32 + sizeof(AccountId)` bytes.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Multisig', 'DepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The base amount of currency needed to reserve for creating a multisig execution or to
   *  store a dispatch call for later.
   * 
   *  This is held for an additional storage item whose value size is
   *  `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
   *  `32 + sizeof(AccountId)` bytes.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Multisig', 'DepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Multisig', 'DepositBase') != null
  }
}

export class MultisigDepositFactorConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of currency needed per unit threshold when creating a multisig execution.
   * 
   *  This is held for adding 32 bytes more into a pre-existing storage value.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Multisig', 'DepositFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of currency needed per unit threshold when creating a multisig execution.
   * 
   *  This is held for adding 32 bytes more into a pre-existing storage value.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Multisig', 'DepositFactor')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Multisig', 'DepositFactor') != null
  }
}

export class MultisigMaxSignatoriesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum amount of signatories allowed in the multisig.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Multisig', 'MaxSignatories') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
  }

  /**
   *  The maximum amount of signatories allowed in the multisig.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Multisig', 'MaxSignatories')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Multisig', 'MaxSignatories') != null
  }
}

export class NFTReserveClassIdUpToConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Class IDs reserved for runtime up to the following constant
   */
  get isV78() {
    return this._chain.getConstantTypeHash('NFT', 'ReserveClassIdUpTo') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Class IDs reserved for runtime up to the following constant
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('NFT', 'ReserveClassIdUpTo')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('NFT', 'ReserveClassIdUpTo') != null
  }
}

export class ProxyAnnouncementDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The base amount of currency needed to reserve for creating an announcement.
   * 
   *  This is held when a new storage item holding a `Balance` is created (typically 16
   *  bytes).
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The base amount of currency needed to reserve for creating an announcement.
   * 
   *  This is held when a new storage item holding a `Balance` is created (typically 16
   *  bytes).
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Proxy', 'AnnouncementDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositBase') != null
  }
}

export class ProxyAnnouncementDepositFactorConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of currency needed per announcement made.
   * 
   *  This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
   *  into a pre-existing storage value.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of currency needed per announcement made.
   * 
   *  This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
   *  into a pre-existing storage value.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Proxy', 'AnnouncementDepositFactor')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'AnnouncementDepositFactor') != null
  }
}

export class ProxyMaxPendingConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum amount of time-delayed announcements that are allowed to be pending.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Proxy', 'MaxPending') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum amount of time-delayed announcements that are allowed to be pending.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Proxy', 'MaxPending')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'MaxPending') != null
  }
}

export class ProxyMaxProxiesConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum amount of proxies allowed for a single account.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Proxy', 'MaxProxies') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum amount of proxies allowed for a single account.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Proxy', 'MaxProxies')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'MaxProxies') != null
  }
}

export class ProxyProxyDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The base amount of currency needed to reserve for creating a proxy.
   * 
   *  This is held for an additional storage item whose value size is
   *  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The base amount of currency needed to reserve for creating a proxy.
   * 
   *  This is held for an additional storage item whose value size is
   *  `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Proxy', 'ProxyDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositBase') != null
  }
}

export class ProxyProxyDepositFactorConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount of currency needed per proxy added.
   * 
   *  This is held for adding 32 bytes plus an instance of `ProxyType` more into a
   *  pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
   *  into account `32 + proxy_type.encode().len()` bytes of data.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositFactor') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount of currency needed per proxy added.
   * 
   *  This is held for adding 32 bytes plus an instance of `ProxyType` more into a
   *  pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
   *  into account `32 + proxy_type.encode().len()` bytes of data.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Proxy', 'ProxyDepositFactor')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Proxy', 'ProxyDepositFactor') != null
  }
}

export class SchedulerMaxScheduledPerBlockConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of scheduled calls in the queue for a single block.
   *  Not strictly enforced, but used for weight estimation.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Scheduler', 'MaxScheduledPerBlock') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of scheduled calls in the queue for a single block.
   *  Not strictly enforced, but used for weight estimation.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Scheduler', 'MaxScheduledPerBlock')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Scheduler', 'MaxScheduledPerBlock') != null
  }
}

export class SchedulerMaximumWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum weight that may be scheduled per block for any dispatchables of less
   *  priority than `schedule::HARD_DEADLINE`.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Scheduler', 'MaximumWeight') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  The maximum weight that may be scheduled per block for any dispatchables of less
   *  priority than `schedule::HARD_DEADLINE`.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Scheduler', 'MaximumWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Scheduler', 'MaximumWeight') != null
  }
}

export class SystemBlockHashCountConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
   */
  get isV78() {
    return this._chain.getConstantTypeHash('System', 'BlockHashCount') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum number of block number to block hash mappings to keep (oldest pruned first).
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('System', 'BlockHashCount')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'BlockHashCount') != null
  }
}

export class SystemBlockLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of a block (in bytes).
   */
  get isV78() {
    return this._chain.getConstantTypeHash('System', 'BlockLength') === '9aacf667c67dbae172e6d30e5f4026086c8a56d9ebfe50dfdcca3fe40a9f55ca'
  }

  /**
   *  The maximum length of a block (in bytes).
   */
  get asV78(): v78.BlockLength {
    assert(this.isV78)
    return this._chain.getConstant('System', 'BlockLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'BlockLength') != null
  }
}

export class SystemBlockWeightsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Block & extrinsics weights: base values and limits.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('System', 'BlockWeights') === 'd29c2183888a350ee5f1702b52be3920c60d1d8dd2937c2870d4ec0d78845224'
  }

  /**
   *  Block & extrinsics weights: base values and limits.
   */
  get asV78(): v78.BlockWeights {
    assert(this.isV78)
    return this._chain.getConstant('System', 'BlockWeights')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'BlockWeights') != null
  }
}

export class SystemDbWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The weight of runtime database operations the runtime can invoke.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('System', 'DbWeight') === 'f2b1a28b00823bafa34a2cd3123e2e54de1b56f53266976a0fa1bbffc1833341'
  }

  /**
   *  The weight of runtime database operations the runtime can invoke.
   */
  get asV78(): v78.RuntimeDbWeight {
    assert(this.isV78)
    return this._chain.getConstant('System', 'DbWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'DbWeight') != null
  }
}

export class SystemSS58PrefixConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The designated SS85 prefix of this chain.
   * 
   *  This replaces the "ss58Format" property declared in the chain spec. Reason is
   *  that the runtime should know about the prefix in order to make use of it as
   *  an identifier of the chain.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('System', 'SS58Prefix') === '32def12560ecd411fe2fc796552e97d0d5ee0ea10e059b3d8918c9e94dfdb334'
  }

  /**
   *  The designated SS85 prefix of this chain.
   * 
   *  This replaces the "ss58Format" property declared in the chain spec. Reason is
   *  that the runtime should know about the prefix in order to make use of it as
   *  an identifier of the chain.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('System', 'SS58Prefix')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'SS58Prefix') != null
  }
}

export class SystemVersionConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Get the chain's current version.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('System', 'Version') === 'f6a7df964a5f6d420bccc7ccc38bd9265b00dc71b74c91dc5848badeeaf0cbb8'
  }

  /**
   *  Get the chain's current version.
   */
  get asV78(): v78.RuntimeVersion {
    assert(this.isV78)
    return this._chain.getConstant('System', 'Version')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('System', 'Version') != null
  }
}

export class TimestampMinimumPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum period between blocks. Beware that this is different to the *expected*
   *  period that the block production apparatus provides. Your chosen consensus system will
   *  generally work with this to determine a sensible block time. e.g. For Aura, it will be
   *  double this period on default settings.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  The minimum period between blocks. Beware that this is different to the *expected*
   *  period that the block production apparatus provides. Your chosen consensus system will
   *  generally work with this to determine a sensible block time. e.g. For Aura, it will be
   *  double this period on default settings.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Timestamp', 'MinimumPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Timestamp', 'MinimumPeriod') != null
  }
}

export class TipsDataDepositPerByteConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit per byte within the tip report reason or bounty description.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Tips', 'DataDepositPerByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit per byte within the tip report reason or bounty description.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Tips', 'DataDepositPerByte')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tips', 'DataDepositPerByte') != null
  }
}

export class TipsMaximumReasonLengthConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum acceptable reason length.
   * 
   *  Benchmarks depend on this value, be sure to update weights file when changing this value
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Tips', 'MaximumReasonLength') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum acceptable reason length.
   * 
   *  Benchmarks depend on this value, be sure to update weights file when changing this value
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Tips', 'MaximumReasonLength')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tips', 'MaximumReasonLength') != null
  }
}

export class TipsTipCountdownConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The period for which a tip remains open after is has achieved threshold tippers.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Tips', 'TipCountdown') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The period for which a tip remains open after is has achieved threshold tippers.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Tips', 'TipCountdown')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tips', 'TipCountdown') != null
  }
}

export class TipsTipFindersFeeConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The percent of the final tip which goes to the original reporter of the tip.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Tips', 'TipFindersFee') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
  }

  /**
   *  The percent of the final tip which goes to the original reporter of the tip.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Tips', 'TipFindersFee')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tips', 'TipFindersFee') != null
  }
}

export class TipsTipReportDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The amount held on deposit for placing a tip report.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Tips', 'TipReportDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The amount held on deposit for placing a tip report.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Tips', 'TipReportDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tips', 'TipReportDepositBase') != null
  }
}

export class TokensMaxLocksConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  get isV78() {
    return this._chain.getConstantTypeHash('Tokens', 'MaxLocks') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Tokens', 'MaxLocks')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Tokens', 'MaxLocks') != null
  }
}

export class TransactionPaymentOperationalFeeMultiplierConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
   *  `priority`
   * 
   *  This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
   *  added to a tip component in regular `priority` calculations.
   *  It means that a `Normal` transaction can front-run a similarly-sized `Operational`
   *  extrinsic (with no tip), by including a tip value greater than the virtual tip.
   * 
   *  ```rust,ignore
   *  // For `Normal`
   *  let priority = priority_calc(tip);
   * 
   *  // For `Operational`
   *  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
   *  let priority = priority_calc(tip + virtual_tip);
   *  ```
   * 
   *  Note that since we use `final_fee` the multiplier applies also to the regular `tip`
   *  sent with the transaction. So, not only does the transaction get a priority bump based
   *  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
   *  transactions.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('TransactionPayment', 'OperationalFeeMultiplier') === 'afecacff3b029831d50a478055aa405254e6579585f9617d2a2f34743b4aff83'
  }

  /**
   *  A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
   *  `priority`
   * 
   *  This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
   *  added to a tip component in regular `priority` calculations.
   *  It means that a `Normal` transaction can front-run a similarly-sized `Operational`
   *  extrinsic (with no tip), by including a tip value greater than the virtual tip.
   * 
   *  ```rust,ignore
   *  // For `Normal`
   *  let priority = priority_calc(tip);
   * 
   *  // For `Operational`
   *  let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
   *  let priority = priority_calc(tip + virtual_tip);
   *  ```
   * 
   *  Note that since we use `final_fee` the multiplier applies also to the regular `tip`
   *  sent with the transaction. So, not only does the transaction get a priority bump based
   *  on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
   *  transactions.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('TransactionPayment', 'OperationalFeeMultiplier')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('TransactionPayment', 'OperationalFeeMultiplier') != null
  }
}

export class TransactionPaymentTransactionByteFeeConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The fee to be paid for making a transaction; the per-byte portion.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('TransactionPayment', 'TransactionByteFee') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The fee to be paid for making a transaction; the per-byte portion.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('TransactionPayment', 'TransactionByteFee')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('TransactionPayment', 'TransactionByteFee') != null
  }
}

export class TransactionPaymentWeightToFeeConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The polynomial that is applied in order to derive fee from weight.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('TransactionPayment', 'WeightToFee') === 'd295ff43faa22aacf9488b0758072675f9ec61f6824e26dcea8a5c3dcf215b78'
  }

  /**
   *  The polynomial that is applied in order to derive fee from weight.
   */
  get asV78(): v78.WeightToFeeCoefficient[] {
    assert(this.isV78)
    return this._chain.getConstant('TransactionPayment', 'WeightToFee')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('TransactionPayment', 'WeightToFee') != null
  }
}

export class TreasuryBurnConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Percentage of spare funds (if any) that are burnt per spend period.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Treasury', 'Burn') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Percentage of spare funds (if any) that are burnt per spend period.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Treasury', 'Burn')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'Burn') != null
  }
}

export class TreasuryMaxApprovalsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum number of approvals that can wait in the spending queue.
   * 
   *  NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Treasury', 'MaxApprovals') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum number of approvals that can wait in the spending queue.
   * 
   *  NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Treasury', 'MaxApprovals')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'MaxApprovals') != null
  }
}

export class TreasuryPalletIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The treasury's pallet id, used for deriving its sovereign account ID.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Treasury', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
  }

  /**
   *  The treasury's pallet id, used for deriving its sovereign account ID.
   */
  get asV78(): Uint8Array {
    assert(this.isV78)
    return this._chain.getConstant('Treasury', 'PalletId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'PalletId') != null
  }
}

export class TreasuryProposalBondConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Fraction of a proposal's value that should be bonded in order to place the proposal.
   *  An accepted proposal gets these back. A rejected proposal does not.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBond') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Fraction of a proposal's value that should be bonded in order to place the proposal.
   *  An accepted proposal gets these back. A rejected proposal does not.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Treasury', 'ProposalBond')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBond') != null
  }
}

export class TreasuryProposalBondMaximumConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum amount of funds that should be placed in a deposit for making a proposal.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMaximum') === 'bfdfd10c88945fb3fe1590ea01f6a3e70d37a6e37ae5abf44fdde45ecc525302'
  }

  /**
   *  Maximum amount of funds that should be placed in a deposit for making a proposal.
   */
  get asV78(): (bigint | undefined) {
    assert(this.isV78)
    return this._chain.getConstant('Treasury', 'ProposalBondMaximum')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMaximum') != null
  }
}

export class TreasuryProposalBondMinimumConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum amount of funds that should be placed in a deposit for making a proposal.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMinimum') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Minimum amount of funds that should be placed in a deposit for making a proposal.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Treasury', 'ProposalBondMinimum')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'ProposalBondMinimum') != null
  }
}

export class TreasurySpendPeriodConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Period between successive spends.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Treasury', 'SpendPeriod') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Period between successive spends.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Treasury', 'SpendPeriod')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Treasury', 'SpendPeriod') != null
  }
}

export class UniquesAttributeDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The basic amount of funds that must be reserved when adding an attribute to an asset.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Uniques', 'AttributeDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The basic amount of funds that must be reserved when adding an attribute to an asset.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Uniques', 'AttributeDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'AttributeDepositBase') != null
  }
}

export class UniquesClassDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The basic amount of funds that must be reserved for an asset class.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Uniques', 'ClassDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The basic amount of funds that must be reserved for an asset class.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Uniques', 'ClassDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'ClassDeposit') != null
  }
}

export class UniquesDepositPerByteConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The additional funds that must be reserved for the number of bytes store in metadata,
   *  either "normal" metadata or attribute metadata.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Uniques', 'DepositPerByte') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The additional funds that must be reserved for the number of bytes store in metadata,
   *  either "normal" metadata or attribute metadata.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Uniques', 'DepositPerByte')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'DepositPerByte') != null
  }
}

export class UniquesInstanceDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The basic amount of funds that must be reserved for an asset instance.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Uniques', 'InstanceDeposit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The basic amount of funds that must be reserved for an asset instance.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Uniques', 'InstanceDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'InstanceDeposit') != null
  }
}

export class UniquesKeyLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of an attribute key.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Uniques', 'KeyLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of an attribute key.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Uniques', 'KeyLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'KeyLimit') != null
  }
}

export class UniquesMetadataDepositBaseConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The basic amount of funds that must be reserved when adding metadata to your asset.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Uniques', 'MetadataDepositBase') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The basic amount of funds that must be reserved when adding metadata to your asset.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Uniques', 'MetadataDepositBase')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'MetadataDepositBase') != null
  }
}

export class UniquesStringLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of data stored on-chain.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Uniques', 'StringLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of data stored on-chain.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Uniques', 'StringLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'StringLimit') != null
  }
}

export class UniquesValueLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The maximum length of an attribute value.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Uniques', 'ValueLimit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The maximum length of an attribute value.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Uniques', 'ValueLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Uniques', 'ValueLimit') != null
  }
}

export class Utilitybatched_calls_limitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The limit on the number of batched calls.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Utility', 'batched_calls_limit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  The limit on the number of batched calls.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('Utility', 'batched_calls_limit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Utility', 'batched_calls_limit') != null
  }
}

export class VestingMinVestedTransferConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  The minimum amount transferred to call `vested_transfer`.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('Vesting', 'MinVestedTransfer') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  The minimum amount transferred to call `vested_transfer`.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('Vesting', 'MinVestedTransfer')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('Vesting', 'MinVestedTransfer') != null
  }
}

export class WarehouseLMMaxFarmEntriesPerDepositConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Maximum number of yield farms same LP shares can be re/deposited into. This value always
   *  MUST BE >= 1.         
   */
  get isV78() {
    return this._chain.getConstantTypeHash('WarehouseLM', 'MaxFarmEntriesPerDeposit') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Maximum number of yield farms same LP shares can be re/deposited into. This value always
   *  MUST BE >= 1.         
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('WarehouseLM', 'MaxFarmEntriesPerDeposit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('WarehouseLM', 'MaxFarmEntriesPerDeposit') != null
  }
}

export class WarehouseLMMaxYieldFarmsPerGlobalFarmConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Max number of yield farms can exist in global farm. This includes all farms in the
   *  storage(active, stopped, deleted).
   */
  get isV78() {
    return this._chain.getConstantTypeHash('WarehouseLM', 'MaxYieldFarmsPerGlobalFarm') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Max number of yield farms can exist in global farm. This includes all farms in the
   *  storage(active, stopped, deleted).
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('WarehouseLM', 'MaxYieldFarmsPerGlobalFarm')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('WarehouseLM', 'MaxYieldFarmsPerGlobalFarm') != null
  }
}

export class WarehouseLMMinPlannedYieldingPeriodsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum number of periods to run liquidity mining program.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('WarehouseLM', 'MinPlannedYieldingPeriods') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Minimum number of periods to run liquidity mining program.
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('WarehouseLM', 'MinPlannedYieldingPeriods')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('WarehouseLM', 'MinPlannedYieldingPeriods') != null
  }
}

export class WarehouseLMMinTotalFarmRewardsConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum total rewards to distribute from global farm during liquidity mining.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('WarehouseLM', 'MinTotalFarmRewards') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Minimum total rewards to distribute from global farm during liquidity mining.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('WarehouseLM', 'MinTotalFarmRewards')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('WarehouseLM', 'MinTotalFarmRewards') != null
  }
}

export class WarehouseLMPalletIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Pallet id.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('WarehouseLM', 'PalletId') === 'c963e59c8e5b7d761234cd0f2cb1f219effb76c998fa93783afd994aed82a434'
  }

  /**
   *  Pallet id.
   */
  get asV78(): Uint8Array {
    assert(this.isV78)
    return this._chain.getConstant('WarehouseLM', 'PalletId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('WarehouseLM', 'PalletId') != null
  }
}

export class XTokensBaseXcmWeightConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Base XCM weight.
   * 
   *  The actually weight for an XCM message is `T::BaseXcmWeight +
   *  T::Weigher::weight(&msg)`.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('XTokens', 'BaseXcmWeight') === '2e8052d0ae8d237ad263438f986208df52f4f0e9f529557036c3b179dfb42f21'
  }

  /**
   *  Base XCM weight.
   * 
   *  The actually weight for an XCM message is `T::BaseXcmWeight +
   *  T::Weigher::weight(&msg)`.
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('XTokens', 'BaseXcmWeight')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('XTokens', 'BaseXcmWeight') != null
  }
}

export class XTokensSelfLocationConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Self chain location.
   */
  get isV78() {
    return this._chain.getConstantTypeHash('XTokens', 'SelfLocation') === '596335720c12dda4acafdb8b7ed539c4b47f1563ed97456e9a3fcd771714568c'
  }

  /**
   *  Self chain location.
   */
  get asV78(): v78.V1MultiLocation {
    assert(this.isV78)
    return this._chain.getConstant('XTokens', 'SelfLocation')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('XTokens', 'SelfLocation') != null
  }
}

export class XYKGetExchangeFeeConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Trading fee rate
   */
  get isV78() {
    return this._chain.getConstantTypeHash('XYK', 'GetExchangeFee') === '89667797236ba996cee700097e48264fab1c5603dc68df58a8ff56acf2809f5c'
  }

  /**
   *  Trading fee rate
   */
  get asV78(): [number, number] {
    assert(this.isV78)
    return this._chain.getConstant('XYK', 'GetExchangeFee')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('XYK', 'GetExchangeFee') != null
  }
}

export class XYKMaxInRatioConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Max fraction of pool to sell in single transaction
   */
  get isV78() {
    return this._chain.getConstantTypeHash('XYK', 'MaxInRatio') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Max fraction of pool to sell in single transaction
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('XYK', 'MaxInRatio')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('XYK', 'MaxInRatio') != null
  }
}

export class XYKMaxOutRatioConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Max fraction of pool to buy in single transaction
   */
  get isV78() {
    return this._chain.getConstantTypeHash('XYK', 'MaxOutRatio') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Max fraction of pool to buy in single transaction
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('XYK', 'MaxOutRatio')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('XYK', 'MaxOutRatio') != null
  }
}

export class XYKMinPoolLiquidityConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum pool liquidity
   */
  get isV78() {
    return this._chain.getConstantTypeHash('XYK', 'MinPoolLiquidity') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Minimum pool liquidity
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('XYK', 'MinPoolLiquidity')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('XYK', 'MinPoolLiquidity') != null
  }
}

export class XYKMinTradingLimitConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Minimum trading limit
   */
  get isV78() {
    return this._chain.getConstantTypeHash('XYK', 'MinTradingLimit') === 'a73c503ad07b8dce07ffc3646a2c7aeacb1280015e3b79887f6a9b11dae120f1'
  }

  /**
   *  Minimum trading limit
   */
  get asV78(): bigint {
    assert(this.isV78)
    return this._chain.getConstant('XYK', 'MinTradingLimit')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('XYK', 'MinTradingLimit') != null
  }
}

export class XYKNativeAssetIdConstant {
  private readonly _chain: Chain

  constructor(ctx: ChainContext) {
    this._chain = ctx._chain
  }

  /**
   *  Native Asset Id
   */
  get isV78() {
    return this._chain.getConstantTypeHash('XYK', 'NativeAssetId') === 'b76f37d33f64f2d9b3234e29034ab4a73ee9da01a61ab139c27f8c841971e469'
  }

  /**
   *  Native Asset Id
   */
  get asV78(): number {
    assert(this.isV78)
    return this._chain.getConstant('XYK', 'NativeAssetId')
  }

  /**
   * Checks whether the constant is defined for the current chain version.
   */
  get isExists(): boolean {
    return this._chain.getConstantTypeHash('XYK', 'NativeAssetId') != null
  }
}
