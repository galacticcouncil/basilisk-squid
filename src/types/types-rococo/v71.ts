import type {Result} from './support'

export type ClassType = ClassType_Marketplace | ClassType_LiquidityMining | ClassType_Redeemable | ClassType_Auction | ClassType_HydraHeads

export interface ClassType_Marketplace {
  __kind: 'Marketplace'
}

export interface ClassType_LiquidityMining {
  __kind: 'LiquidityMining'
}

export interface ClassType_Redeemable {
  __kind: 'Redeemable'
}

export interface ClassType_Auction {
  __kind: 'Auction'
}

export interface ClassType_HydraHeads {
  __kind: 'HydraHeads'
}

export interface EventRecord {
  phase: Phase
  event: Event
  topics: Uint8Array[]
}

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
  __kind: 'ApplyExtrinsic'
  value: number
}

export interface Phase_Finalization {
  __kind: 'Finalization'
}

export interface Phase_Initialization {
  __kind: 'Initialization'
}

export type Event = Event_System | Event_Balances | Event_Treasury | Event_Utility | Event_Scheduler | Event_Democracy | Event_Elections | Event_Council | Event_TechnicalCommittee | Event_Vesting | Event_Proxy | Event_Tips | Event_CollatorSelection | Event_Session | Event_Preimage | Event_Uniques | Event_Identity | Event_Multisig | Event_ParachainSystem | Event_PolkadotXcm | Event_CumulusXcm | Event_XcmpQueue | Event_DmpQueue | Event_AssetRegistry | Event_XYK | Event_Duster | Event_Exchange | Event_LBP | Event_NFT | Event_MultiTransactionPayment | Event_RelayChainInfo | Event_Marketplace | Event_TransactionPause | Event_Currencies | Event_Tokens | Event_OrmlXcm | Event_XTokens | Event_UnknownTokens

export interface Event_System {
  __kind: 'System'
  value: SystemEvent
}

export interface Event_Balances {
  __kind: 'Balances'
  value: BalancesEvent
}

export interface Event_Treasury {
  __kind: 'Treasury'
  value: TreasuryEvent
}

export interface Event_Utility {
  __kind: 'Utility'
  value: UtilityEvent
}

export interface Event_Scheduler {
  __kind: 'Scheduler'
  value: SchedulerEvent
}

export interface Event_Democracy {
  __kind: 'Democracy'
  value: DemocracyEvent
}

export interface Event_Elections {
  __kind: 'Elections'
  value: ElectionsEvent
}

export interface Event_Council {
  __kind: 'Council'
  value: CouncilEvent
}

export interface Event_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeEvent
}

export interface Event_Vesting {
  __kind: 'Vesting'
  value: VestingEvent
}

export interface Event_Proxy {
  __kind: 'Proxy'
  value: ProxyEvent
}

export interface Event_Tips {
  __kind: 'Tips'
  value: TipsEvent
}

export interface Event_CollatorSelection {
  __kind: 'CollatorSelection'
  value: CollatorSelectionEvent
}

export interface Event_Session {
  __kind: 'Session'
  value: SessionEvent
}

export interface Event_Preimage {
  __kind: 'Preimage'
  value: PreimageEvent
}

export interface Event_Uniques {
  __kind: 'Uniques'
  value: UniquesEvent
}

export interface Event_Identity {
  __kind: 'Identity'
  value: IdentityEvent
}

export interface Event_Multisig {
  __kind: 'Multisig'
  value: MultisigEvent
}

export interface Event_ParachainSystem {
  __kind: 'ParachainSystem'
  value: ParachainSystemEvent
}

export interface Event_PolkadotXcm {
  __kind: 'PolkadotXcm'
  value: PolkadotXcmEvent
}

export interface Event_CumulusXcm {
  __kind: 'CumulusXcm'
  value: CumulusXcmEvent
}

export interface Event_XcmpQueue {
  __kind: 'XcmpQueue'
  value: XcmpQueueEvent
}

export interface Event_DmpQueue {
  __kind: 'DmpQueue'
  value: DmpQueueEvent
}

export interface Event_AssetRegistry {
  __kind: 'AssetRegistry'
  value: AssetRegistryEvent
}

export interface Event_XYK {
  __kind: 'XYK'
  value: XYKEvent
}

export interface Event_Duster {
  __kind: 'Duster'
  value: DusterEvent
}

export interface Event_Exchange {
  __kind: 'Exchange'
  value: ExchangeEvent
}

export interface Event_LBP {
  __kind: 'LBP'
  value: LBPEvent
}

export interface Event_NFT {
  __kind: 'NFT'
  value: NFTEvent
}

export interface Event_MultiTransactionPayment {
  __kind: 'MultiTransactionPayment'
  value: MultiTransactionPaymentEvent
}

export interface Event_RelayChainInfo {
  __kind: 'RelayChainInfo'
  value: RelayChainInfoEvent
}

export interface Event_Marketplace {
  __kind: 'Marketplace'
  value: MarketplaceEvent
}

export interface Event_TransactionPause {
  __kind: 'TransactionPause'
  value: TransactionPauseEvent
}

export interface Event_Currencies {
  __kind: 'Currencies'
  value: CurrenciesEvent
}

export interface Event_Tokens {
  __kind: 'Tokens'
  value: TokensEvent
}

export interface Event_OrmlXcm {
  __kind: 'OrmlXcm'
  value: OrmlXcmEvent
}

export interface Event_XTokens {
  __kind: 'XTokens'
  value: XTokensEvent
}

export interface Event_UnknownTokens {
  __kind: 'UnknownTokens'
  value: UnknownTokensEvent
}

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 * An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
  __kind: 'ExtrinsicSuccess'
  dispatchInfo: DispatchInfo
}

/**
 * An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
  __kind: 'ExtrinsicFailed'
  dispatchError: DispatchError
  dispatchInfo: DispatchInfo
}

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
  __kind: 'CodeUpdated'
}

/**
 * A new account was created.
 */
export interface SystemEvent_NewAccount {
  __kind: 'NewAccount'
  account: Uint8Array
}

/**
 * An account was reaped.
 */
export interface SystemEvent_KilledAccount {
  __kind: 'KilledAccount'
  account: Uint8Array
}

/**
 * On on-chain remark happened.
 */
export interface SystemEvent_Remarked {
  __kind: 'Remarked'
  sender: Uint8Array
  hash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated | BalancesEvent_Deposit | BalancesEvent_Withdraw | BalancesEvent_Slashed

/**
 * An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
  __kind: 'Endowed'
  account: Uint8Array
  freeBalance: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
  __kind: 'DustLost'
  account: Uint8Array
  amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface BalancesEvent_Transfer {
  __kind: 'Transfer'
  from: Uint8Array
  to: Uint8Array
  amount: bigint
}

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
  __kind: 'BalanceSet'
  who: Uint8Array
  free: bigint
  reserved: bigint
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
  __kind: 'Reserved'
  who: Uint8Array
  amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
  __kind: 'Unreserved'
  who: Uint8Array
  amount: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
  __kind: 'ReserveRepatriated'
  from: Uint8Array
  to: Uint8Array
  amount: bigint
  destinationStatus: BalanceStatus
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
  __kind: 'Deposit'
  who: Uint8Array
  amount: bigint
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface BalancesEvent_Withdraw {
  __kind: 'Withdraw'
  who: Uint8Array
  amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface BalancesEvent_Slashed {
  __kind: 'Slashed'
  who: Uint8Array
  amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TreasuryEvent = TreasuryEvent_Proposed | TreasuryEvent_Spending | TreasuryEvent_Awarded | TreasuryEvent_Rejected | TreasuryEvent_Burnt | TreasuryEvent_Rollover | TreasuryEvent_Deposit

/**
 * New proposal.
 */
export interface TreasuryEvent_Proposed {
  __kind: 'Proposed'
  proposalIndex: number
}

/**
 * We have ended a spend period and will now allocate funds.
 */
export interface TreasuryEvent_Spending {
  __kind: 'Spending'
  budgetRemaining: bigint
}

/**
 * Some funds have been allocated.
 */
export interface TreasuryEvent_Awarded {
  __kind: 'Awarded'
  proposalIndex: number
  award: bigint
  account: Uint8Array
}

/**
 * A proposal was rejected; funds were slashed.
 */
export interface TreasuryEvent_Rejected {
  __kind: 'Rejected'
  proposalIndex: number
  slashed: bigint
}

/**
 * Some of our funds have been burnt.
 */
export interface TreasuryEvent_Burnt {
  __kind: 'Burnt'
  burntFunds: bigint
}

/**
 * Spending has finished; this is the amount that rolls over until next spend.
 */
export interface TreasuryEvent_Rollover {
  __kind: 'Rollover'
  rolloverBalance: bigint
}

/**
 * Some funds have been deposited.
 */
export interface TreasuryEvent_Deposit {
  __kind: 'Deposit'
  value: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type UtilityEvent = UtilityEvent_BatchInterrupted | UtilityEvent_BatchCompleted | UtilityEvent_ItemCompleted | UtilityEvent_DispatchedAs

/**
 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 * well as the error.
 */
export interface UtilityEvent_BatchInterrupted {
  __kind: 'BatchInterrupted'
  index: number
  error: DispatchError
}

/**
 * Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
  __kind: 'BatchCompleted'
}

/**
 * A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
  __kind: 'ItemCompleted'
}

/**
 * A call was dispatched.
 */
export interface UtilityEvent_DispatchedAs {
  __kind: 'DispatchedAs'
  result: Result<null, DispatchError>
}

/**
 * Events type.
 */
export type SchedulerEvent = SchedulerEvent_Scheduled | SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_CallLookupFailed

/**
 * Scheduled some task.
 */
export interface SchedulerEvent_Scheduled {
  __kind: 'Scheduled'
  when: number
  index: number
}

/**
 * Canceled some task.
 */
export interface SchedulerEvent_Canceled {
  __kind: 'Canceled'
  when: number
  index: number
}

/**
 * Dispatched some task.
 */
export interface SchedulerEvent_Dispatched {
  __kind: 'Dispatched'
  task: [number, number]
  id: (Uint8Array | undefined)
  result: Result<null, DispatchError>
}

/**
 * The call for the provided hash was not found so the task has been aborted.
 */
export interface SchedulerEvent_CallLookupFailed {
  __kind: 'CallLookupFailed'
  task: [number, number]
  id: (Uint8Array | undefined)
  error: LookupError
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type DemocracyEvent = DemocracyEvent_Proposed | DemocracyEvent_Tabled | DemocracyEvent_ExternalTabled | DemocracyEvent_Started | DemocracyEvent_Passed | DemocracyEvent_NotPassed | DemocracyEvent_Cancelled | DemocracyEvent_Executed | DemocracyEvent_Delegated | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageUsed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageReaped | DemocracyEvent_Blacklisted | DemocracyEvent_Voted | DemocracyEvent_Seconded

/**
 * A motion has been proposed by a public account.
 */
export interface DemocracyEvent_Proposed {
  __kind: 'Proposed'
  proposalIndex: number
  deposit: bigint
}

/**
 * A public proposal has been tabled for referendum vote.
 */
export interface DemocracyEvent_Tabled {
  __kind: 'Tabled'
  proposalIndex: number
  deposit: bigint
  depositors: Uint8Array[]
}

/**
 * An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
  __kind: 'ExternalTabled'
}

/**
 * A referendum has begun.
 */
export interface DemocracyEvent_Started {
  __kind: 'Started'
  refIndex: number
  threshold: VoteThreshold
}

/**
 * A proposal has been approved by referendum.
 */
export interface DemocracyEvent_Passed {
  __kind: 'Passed'
  refIndex: number
}

/**
 * A proposal has been rejected by referendum.
 */
export interface DemocracyEvent_NotPassed {
  __kind: 'NotPassed'
  refIndex: number
}

/**
 * A referendum has been cancelled.
 */
export interface DemocracyEvent_Cancelled {
  __kind: 'Cancelled'
  refIndex: number
}

/**
 * A proposal has been enacted.
 */
export interface DemocracyEvent_Executed {
  __kind: 'Executed'
  refIndex: number
  result: Result<null, DispatchError>
}

/**
 * An account has delegated their vote to another account.
 */
export interface DemocracyEvent_Delegated {
  __kind: 'Delegated'
  who: Uint8Array
  target: Uint8Array
}

/**
 * An account has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
  __kind: 'Undelegated'
  account: Uint8Array
}

/**
 * An external proposal has been vetoed.
 */
export interface DemocracyEvent_Vetoed {
  __kind: 'Vetoed'
  who: Uint8Array
  proposalHash: Uint8Array
  until: number
}

/**
 * A proposal's preimage was noted, and the deposit taken.
 */
export interface DemocracyEvent_PreimageNoted {
  __kind: 'PreimageNoted'
  proposalHash: Uint8Array
  who: Uint8Array
  deposit: bigint
}

/**
 * A proposal preimage was removed and used (the deposit was returned).
 */
export interface DemocracyEvent_PreimageUsed {
  __kind: 'PreimageUsed'
  proposalHash: Uint8Array
  provider: Uint8Array
  deposit: bigint
}

/**
 * A proposal could not be executed because its preimage was invalid.
 */
export interface DemocracyEvent_PreimageInvalid {
  __kind: 'PreimageInvalid'
  proposalHash: Uint8Array
  refIndex: number
}

/**
 * A proposal could not be executed because its preimage was missing.
 */
export interface DemocracyEvent_PreimageMissing {
  __kind: 'PreimageMissing'
  proposalHash: Uint8Array
  refIndex: number
}

/**
 * A registered preimage was removed and the deposit collected by the reaper.
 */
export interface DemocracyEvent_PreimageReaped {
  __kind: 'PreimageReaped'
  proposalHash: Uint8Array
  provider: Uint8Array
  deposit: bigint
  reaper: Uint8Array
}

/**
 * A proposal_hash has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
  __kind: 'Blacklisted'
  proposalHash: Uint8Array
}

/**
 * An account has voted in a referendum
 */
export interface DemocracyEvent_Voted {
  __kind: 'Voted'
  voter: Uint8Array
  refIndex: number
  vote: AccountVote
}

/**
 * An account has secconded a proposal
 */
export interface DemocracyEvent_Seconded {
  __kind: 'Seconded'
  seconder: Uint8Array
  propIndex: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ElectionsEvent = ElectionsEvent_NewTerm | ElectionsEvent_EmptyTerm | ElectionsEvent_ElectionError | ElectionsEvent_MemberKicked | ElectionsEvent_Renounced | ElectionsEvent_CandidateSlashed | ElectionsEvent_SeatHolderSlashed

/**
 * A new term with new_members. This indicates that enough candidates existed to run
 * the election, not that enough have has been elected. The inner value must be examined
 * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
 * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
 * begin with.
 */
export interface ElectionsEvent_NewTerm {
  __kind: 'NewTerm'
  newMembers: [Uint8Array, bigint][]
}

/**
 * No (or not enough) candidates existed for this round. This is different from
 * `NewTerm(\[\])`. See the description of `NewTerm`.
 */
export interface ElectionsEvent_EmptyTerm {
  __kind: 'EmptyTerm'
}

/**
 * Internal error happened while trying to perform election.
 */
export interface ElectionsEvent_ElectionError {
  __kind: 'ElectionError'
}

/**
 * A member has been removed. This should always be followed by either `NewTerm` or
 * `EmptyTerm`.
 */
export interface ElectionsEvent_MemberKicked {
  __kind: 'MemberKicked'
  member: Uint8Array
}

/**
 * Someone has renounced their candidacy.
 */
export interface ElectionsEvent_Renounced {
  __kind: 'Renounced'
  candidate: Uint8Array
}

/**
 * A candidate was slashed by amount due to failing to obtain a seat as member or
 * runner-up.
 * 
 * Note that old members and runners-up are also candidates.
 */
export interface ElectionsEvent_CandidateSlashed {
  __kind: 'CandidateSlashed'
  candidate: Uint8Array
  amount: bigint
}

/**
 * A seat holder was slashed by amount by being forcefully removed from the set.
 */
export interface ElectionsEvent_SeatHolderSlashed {
  __kind: 'SeatHolderSlashed'
  seatHolder: Uint8Array
  amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CouncilEvent = CouncilEvent_Proposed | CouncilEvent_Voted | CouncilEvent_Approved | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Closed

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface CouncilEvent_Proposed {
  __kind: 'Proposed'
  account: Uint8Array
  proposalIndex: number
  proposalHash: Uint8Array
  threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface CouncilEvent_Voted {
  __kind: 'Voted'
  account: Uint8Array
  proposalHash: Uint8Array
  voted: boolean
  yes: number
  no: number
}

/**
 * A motion was approved by the required threshold.
 */
export interface CouncilEvent_Approved {
  __kind: 'Approved'
  proposalHash: Uint8Array
}

/**
 * A motion was not approved by the required threshold.
 */
export interface CouncilEvent_Disapproved {
  __kind: 'Disapproved'
  proposalHash: Uint8Array
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_Executed {
  __kind: 'Executed'
  proposalHash: Uint8Array
  result: Result<null, DispatchError>
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_MemberExecuted {
  __kind: 'MemberExecuted'
  proposalHash: Uint8Array
  result: Result<null, DispatchError>
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface CouncilEvent_Closed {
  __kind: 'Closed'
  proposalHash: Uint8Array
  yes: number
  no: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted | TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Closed

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Proposed {
  __kind: 'Proposed'
  account: Uint8Array
  proposalIndex: number
  proposalHash: Uint8Array
  threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Voted {
  __kind: 'Voted'
  account: Uint8Array
  proposalHash: Uint8Array
  voted: boolean
  yes: number
  no: number
}

/**
 * A motion was approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Approved {
  __kind: 'Approved'
  proposalHash: Uint8Array
}

/**
 * A motion was not approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Disapproved {
  __kind: 'Disapproved'
  proposalHash: Uint8Array
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_Executed {
  __kind: 'Executed'
  proposalHash: Uint8Array
  result: Result<null, DispatchError>
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
  __kind: 'MemberExecuted'
  proposalHash: Uint8Array
  result: Result<null, DispatchError>
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface TechnicalCommitteeEvent_Closed {
  __kind: 'Closed'
  proposalHash: Uint8Array
  yes: number
  no: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type VestingEvent = VestingEvent_VestingScheduleAdded | VestingEvent_Claimed | VestingEvent_VestingSchedulesUpdated

/**
 * Added new vesting schedule.
 */
export interface VestingEvent_VestingScheduleAdded {
  __kind: 'VestingScheduleAdded'
  from: Uint8Array
  to: Uint8Array
  vestingSchedule: VestingSchedule
}

/**
 * Claimed vesting.
 */
export interface VestingEvent_Claimed {
  __kind: 'Claimed'
  who: Uint8Array
  amount: bigint
}

/**
 * Updated vesting schedules.
 */
export interface VestingEvent_VestingSchedulesUpdated {
  __kind: 'VestingSchedulesUpdated'
  who: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ProxyEvent = ProxyEvent_ProxyExecuted | ProxyEvent_AnonymousCreated | ProxyEvent_Announced | ProxyEvent_ProxyAdded

/**
 * A proxy was executed correctly, with the given.
 */
export interface ProxyEvent_ProxyExecuted {
  __kind: 'ProxyExecuted'
  result: Result<null, DispatchError>
}

/**
 * Anonymous account has been created by new proxy with given
 * disambiguation index and proxy type.
 */
export interface ProxyEvent_AnonymousCreated {
  __kind: 'AnonymousCreated'
  anonymous: Uint8Array
  who: Uint8Array
  proxyType: ProxyType
  disambiguationIndex: number
}

/**
 * An announcement was placed to make a call in the future.
 */
export interface ProxyEvent_Announced {
  __kind: 'Announced'
  real: Uint8Array
  proxy: Uint8Array
  callHash: Uint8Array
}

/**
 * A proxy was added.
 */
export interface ProxyEvent_ProxyAdded {
  __kind: 'ProxyAdded'
  delegator: Uint8Array
  delegatee: Uint8Array
  proxyType: ProxyType
  delay: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TipsEvent = TipsEvent_NewTip | TipsEvent_TipClosing | TipsEvent_TipClosed | TipsEvent_TipRetracted | TipsEvent_TipSlashed

/**
 * A new tip suggestion has been opened.
 */
export interface TipsEvent_NewTip {
  __kind: 'NewTip'
  tipHash: Uint8Array
}

/**
 * A tip suggestion has reached threshold and is closing.
 */
export interface TipsEvent_TipClosing {
  __kind: 'TipClosing'
  tipHash: Uint8Array
}

/**
 * A tip suggestion has been closed.
 */
export interface TipsEvent_TipClosed {
  __kind: 'TipClosed'
  tipHash: Uint8Array
  who: Uint8Array
  payout: bigint
}

/**
 * A tip suggestion has been retracted.
 */
export interface TipsEvent_TipRetracted {
  __kind: 'TipRetracted'
  tipHash: Uint8Array
}

/**
 * A tip suggestion has been slashed.
 */
export interface TipsEvent_TipSlashed {
  __kind: 'TipSlashed'
  tipHash: Uint8Array
  finder: Uint8Array
  deposit: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CollatorSelectionEvent = CollatorSelectionEvent_NewInvulnerables | CollatorSelectionEvent_NewDesiredCandidates | CollatorSelectionEvent_NewCandidacyBond | CollatorSelectionEvent_CandidateAdded | CollatorSelectionEvent_CandidateRemoved

export interface CollatorSelectionEvent_NewInvulnerables {
  __kind: 'NewInvulnerables'
  value: Uint8Array[]
}

export interface CollatorSelectionEvent_NewDesiredCandidates {
  __kind: 'NewDesiredCandidates'
  value: number
}

export interface CollatorSelectionEvent_NewCandidacyBond {
  __kind: 'NewCandidacyBond'
  value: bigint
}

export interface CollatorSelectionEvent_CandidateAdded {
  __kind: 'CandidateAdded'
  value: [Uint8Array, bigint]
}

export interface CollatorSelectionEvent_CandidateRemoved {
  __kind: 'CandidateRemoved'
  value: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SessionEvent = SessionEvent_NewSession

/**
 * New session has happened. Note that the argument is the session index, not the
 * block number as the type might suggest.
 */
export interface SessionEvent_NewSession {
  __kind: 'NewSession'
  sessionIndex: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PreimageEvent = PreimageEvent_Noted | PreimageEvent_Requested | PreimageEvent_Cleared

/**
 * A preimage has been noted.
 */
export interface PreimageEvent_Noted {
  __kind: 'Noted'
  hash: Uint8Array
}

/**
 * A preimage has been requested.
 */
export interface PreimageEvent_Requested {
  __kind: 'Requested'
  hash: Uint8Array
}

/**
 * A preimage has ben cleared.
 */
export interface PreimageEvent_Cleared {
  __kind: 'Cleared'
  hash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type UniquesEvent = UniquesEvent_Created | UniquesEvent_ForceCreated | UniquesEvent_Destroyed | UniquesEvent_Issued | UniquesEvent_Transferred | UniquesEvent_Burned | UniquesEvent_Frozen | UniquesEvent_Thawed | UniquesEvent_ClassFrozen | UniquesEvent_ClassThawed | UniquesEvent_OwnerChanged | UniquesEvent_TeamChanged | UniquesEvent_ApprovedTransfer | UniquesEvent_ApprovalCancelled | UniquesEvent_AssetStatusChanged | UniquesEvent_ClassMetadataSet | UniquesEvent_ClassMetadataCleared | UniquesEvent_MetadataSet | UniquesEvent_MetadataCleared | UniquesEvent_Redeposited | UniquesEvent_AttributeSet | UniquesEvent_AttributeCleared

/**
 * An asset class was created.
 */
export interface UniquesEvent_Created {
  __kind: 'Created'
  class: bigint
  creator: Uint8Array
  owner: Uint8Array
}

/**
 * An asset class was force-created.
 */
export interface UniquesEvent_ForceCreated {
  __kind: 'ForceCreated'
  class: bigint
  owner: Uint8Array
}

/**
 * An asset `class` was destroyed.
 */
export interface UniquesEvent_Destroyed {
  __kind: 'Destroyed'
  class: bigint
}

/**
 * An asset `instance` was issued.
 */
export interface UniquesEvent_Issued {
  __kind: 'Issued'
  class: bigint
  instance: bigint
  owner: Uint8Array
}

/**
 * An asset `instance` was transferred.
 */
export interface UniquesEvent_Transferred {
  __kind: 'Transferred'
  class: bigint
  instance: bigint
  from: Uint8Array
  to: Uint8Array
}

/**
 * An asset `instance` was destroyed.
 */
export interface UniquesEvent_Burned {
  __kind: 'Burned'
  class: bigint
  instance: bigint
  owner: Uint8Array
}

/**
 * Some asset `instance` was frozen.
 */
export interface UniquesEvent_Frozen {
  __kind: 'Frozen'
  class: bigint
  instance: bigint
}

/**
 * Some asset `instance` was thawed.
 */
export interface UniquesEvent_Thawed {
  __kind: 'Thawed'
  class: bigint
  instance: bigint
}

/**
 * Some asset `class` was frozen.
 */
export interface UniquesEvent_ClassFrozen {
  __kind: 'ClassFrozen'
  class: bigint
}

/**
 * Some asset `class` was thawed.
 */
export interface UniquesEvent_ClassThawed {
  __kind: 'ClassThawed'
  class: bigint
}

/**
 * The owner changed.
 */
export interface UniquesEvent_OwnerChanged {
  __kind: 'OwnerChanged'
  class: bigint
  newOwner: Uint8Array
}

/**
 * The management team changed.
 */
export interface UniquesEvent_TeamChanged {
  __kind: 'TeamChanged'
  class: bigint
  issuer: Uint8Array
  admin: Uint8Array
  freezer: Uint8Array
}

/**
 * An `instance` of an asset `class` has been approved by the `owner` for transfer by a
 * `delegate`.
 */
export interface UniquesEvent_ApprovedTransfer {
  __kind: 'ApprovedTransfer'
  class: bigint
  instance: bigint
  owner: Uint8Array
  delegate: Uint8Array
}

/**
 * An approval for a `delegate` account to transfer the `instance` of an asset `class` was
 * cancelled by its `owner`.
 */
export interface UniquesEvent_ApprovalCancelled {
  __kind: 'ApprovalCancelled'
  class: bigint
  instance: bigint
  owner: Uint8Array
  delegate: Uint8Array
}

/**
 * An asset `class` has had its attributes changed by the `Force` origin.
 */
export interface UniquesEvent_AssetStatusChanged {
  __kind: 'AssetStatusChanged'
  class: bigint
}

/**
 * New metadata has been set for an asset class.
 */
export interface UniquesEvent_ClassMetadataSet {
  __kind: 'ClassMetadataSet'
  class: bigint
  data: Uint8Array
  isFrozen: boolean
}

/**
 * Metadata has been cleared for an asset class.
 */
export interface UniquesEvent_ClassMetadataCleared {
  __kind: 'ClassMetadataCleared'
  class: bigint
}

/**
 * New metadata has been set for an asset instance.
 */
export interface UniquesEvent_MetadataSet {
  __kind: 'MetadataSet'
  class: bigint
  instance: bigint
  data: Uint8Array
  isFrozen: boolean
}

/**
 * Metadata has been cleared for an asset instance.
 */
export interface UniquesEvent_MetadataCleared {
  __kind: 'MetadataCleared'
  class: bigint
  instance: bigint
}

/**
 * Metadata has been cleared for an asset instance.
 */
export interface UniquesEvent_Redeposited {
  __kind: 'Redeposited'
  class: bigint
  successfulInstances: bigint[]
}

/**
 * New attribute metadata has been set for an asset class or instance.
 */
export interface UniquesEvent_AttributeSet {
  __kind: 'AttributeSet'
  class: bigint
  maybeInstance: (bigint | undefined)
  key: Uint8Array
  value: Uint8Array
}

/**
 * Attribute metadata has been cleared for an asset class or instance.
 */
export interface UniquesEvent_AttributeCleared {
  __kind: 'AttributeCleared'
  class: bigint
  maybeInstance: (bigint | undefined)
  key: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type IdentityEvent = IdentityEvent_IdentitySet | IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_JudgementGiven | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 * A name was set or reset (which will remove all judgements).
 */
export interface IdentityEvent_IdentitySet {
  __kind: 'IdentitySet'
  who: Uint8Array
}

/**
 * A name was cleared, and the given balance returned.
 */
export interface IdentityEvent_IdentityCleared {
  __kind: 'IdentityCleared'
  who: Uint8Array
  deposit: bigint
}

/**
 * A name was removed and the given balance slashed.
 */
export interface IdentityEvent_IdentityKilled {
  __kind: 'IdentityKilled'
  who: Uint8Array
  deposit: bigint
}

/**
 * A judgement was asked from a registrar.
 */
export interface IdentityEvent_JudgementRequested {
  __kind: 'JudgementRequested'
  who: Uint8Array
  registrarIndex: number
}

/**
 * A judgement request was retracted.
 */
export interface IdentityEvent_JudgementUnrequested {
  __kind: 'JudgementUnrequested'
  who: Uint8Array
  registrarIndex: number
}

/**
 * A judgement was given by a registrar.
 */
export interface IdentityEvent_JudgementGiven {
  __kind: 'JudgementGiven'
  target: Uint8Array
  registrarIndex: number
}

/**
 * A registrar was added.
 */
export interface IdentityEvent_RegistrarAdded {
  __kind: 'RegistrarAdded'
  registrarIndex: number
}

/**
 * A sub-identity was added to an identity and the deposit paid.
 */
export interface IdentityEvent_SubIdentityAdded {
  __kind: 'SubIdentityAdded'
  sub: Uint8Array
  main: Uint8Array
  deposit: bigint
}

/**
 * A sub-identity was removed from an identity and the deposit freed.
 */
export interface IdentityEvent_SubIdentityRemoved {
  __kind: 'SubIdentityRemoved'
  sub: Uint8Array
  main: Uint8Array
  deposit: bigint
}

/**
 * A sub-identity was cleared, and the given deposit repatriated from the
 * main identity account to the sub-identity account.
 */
export interface IdentityEvent_SubIdentityRevoked {
  __kind: 'SubIdentityRevoked'
  sub: Uint8Array
  main: Uint8Array
  deposit: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type MultisigEvent = MultisigEvent_NewMultisig | MultisigEvent_MultisigApproval | MultisigEvent_MultisigExecuted | MultisigEvent_MultisigCancelled

/**
 * A new multisig operation has begun.
 */
export interface MultisigEvent_NewMultisig {
  __kind: 'NewMultisig'
  approving: Uint8Array
  multisig: Uint8Array
  callHash: Uint8Array
}

/**
 * A multisig operation has been approved by someone.
 */
export interface MultisigEvent_MultisigApproval {
  __kind: 'MultisigApproval'
  approving: Uint8Array
  timepoint: Timepoint
  multisig: Uint8Array
  callHash: Uint8Array
}

/**
 * A multisig operation has been executed.
 */
export interface MultisigEvent_MultisigExecuted {
  __kind: 'MultisigExecuted'
  approving: Uint8Array
  timepoint: Timepoint
  multisig: Uint8Array
  callHash: Uint8Array
  result: Result<null, DispatchError>
}

/**
 * A multisig operation has been cancelled.
 */
export interface MultisigEvent_MultisigCancelled {
  __kind: 'MultisigCancelled'
  cancelling: Uint8Array
  timepoint: Timepoint
  multisig: Uint8Array
  callHash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ParachainSystemEvent = ParachainSystemEvent_ValidationFunctionStored | ParachainSystemEvent_ValidationFunctionApplied | ParachainSystemEvent_ValidationFunctionDiscarded | ParachainSystemEvent_UpgradeAuthorized | ParachainSystemEvent_DownwardMessagesReceived | ParachainSystemEvent_DownwardMessagesProcessed

/**
 * The validation function has been scheduled to apply.
 */
export interface ParachainSystemEvent_ValidationFunctionStored {
  __kind: 'ValidationFunctionStored'
}

/**
 * The validation function was applied as of the contained relay chain block number.
 */
export interface ParachainSystemEvent_ValidationFunctionApplied {
  __kind: 'ValidationFunctionApplied'
  value: number
}

/**
 * The relay-chain aborted the upgrade process.
 */
export interface ParachainSystemEvent_ValidationFunctionDiscarded {
  __kind: 'ValidationFunctionDiscarded'
}

/**
 * An upgrade has been authorized.
 */
export interface ParachainSystemEvent_UpgradeAuthorized {
  __kind: 'UpgradeAuthorized'
  value: Uint8Array
}

/**
 * Some downward messages have been received and will be processed.
 * \[ count \]
 */
export interface ParachainSystemEvent_DownwardMessagesReceived {
  __kind: 'DownwardMessagesReceived'
  value: number
}

/**
 * Downward messages were processed using the given weight.
 * \[ weight_used, result_mqc_head \]
 */
export interface ParachainSystemEvent_DownwardMessagesProcessed {
  __kind: 'DownwardMessagesProcessed'
  value: [bigint, Uint8Array]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type PolkadotXcmEvent = PolkadotXcmEvent_Attempted | PolkadotXcmEvent_Sent | PolkadotXcmEvent_UnexpectedResponse | PolkadotXcmEvent_ResponseReady | PolkadotXcmEvent_Notified | PolkadotXcmEvent_NotifyOverweight | PolkadotXcmEvent_NotifyDispatchError | PolkadotXcmEvent_NotifyDecodeFailed | PolkadotXcmEvent_InvalidResponder | PolkadotXcmEvent_InvalidResponderVersion | PolkadotXcmEvent_ResponseTaken | PolkadotXcmEvent_AssetsTrapped | PolkadotXcmEvent_VersionChangeNotified | PolkadotXcmEvent_SupportedVersionChanged | PolkadotXcmEvent_NotifyTargetSendFail | PolkadotXcmEvent_NotifyTargetMigrationFail

/**
 * Execution of an XCM message was attempted.
 * 
 * \[ outcome \]
 */
export interface PolkadotXcmEvent_Attempted {
  __kind: 'Attempted'
  value: V2Outcome
}

/**
 * A XCM message was sent.
 * 
 * \[ origin, destination, message \]
 */
export interface PolkadotXcmEvent_Sent {
  __kind: 'Sent'
  value: [V1MultiLocation, V1MultiLocation, V2Instruction[]]
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 * 
 * \[ origin location, id \]
 */
export interface PolkadotXcmEvent_UnexpectedResponse {
  __kind: 'UnexpectedResponse'
  value: [V1MultiLocation, bigint]
}

/**
 * Query response has been received and is ready for taking with `take_response`. There is
 * no registered notification call.
 * 
 * \[ id, response \]
 */
export interface PolkadotXcmEvent_ResponseReady {
  __kind: 'ResponseReady'
  value: [bigint, V2Response]
}

/**
 * Query response has been received and query is removed. The registered notification has
 * been dispatched and executed successfully.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_Notified {
  __kind: 'Notified'
  value: [bigint, number, number]
}

/**
 * Query response has been received and query is removed. The registered notification could
 * not be dispatched because the dispatch weight is greater than the maximum weight
 * originally budgeted by this runtime for the query result.
 * 
 * \[ id, pallet index, call index, actual weight, max budgeted weight \]
 */
export interface PolkadotXcmEvent_NotifyOverweight {
  __kind: 'NotifyOverweight'
  value: [bigint, number, number, bigint, bigint]
}

/**
 * Query response has been received and query is removed. There was a general error with
 * dispatching the notification call.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_NotifyDispatchError {
  __kind: 'NotifyDispatchError'
  value: [bigint, number, number]
}

/**
 * Query response has been received and query is removed. The dispatch was unable to be
 * decoded into a `Call`; this might be due to dispatch function having a signature which
 * is not `(origin, QueryId, Response)`.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_NotifyDecodeFailed {
  __kind: 'NotifyDecodeFailed'
  value: [bigint, number, number]
}

/**
 * Expected query response has been received but the origin location of the response does
 * not match that expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 * 
 * \[ origin location, id, expected location \]
 */
export interface PolkadotXcmEvent_InvalidResponder {
  __kind: 'InvalidResponder'
  value: [V1MultiLocation, bigint, (V1MultiLocation | undefined)]
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
export interface PolkadotXcmEvent_InvalidResponderVersion {
  __kind: 'InvalidResponderVersion'
  value: [V1MultiLocation, bigint]
}

/**
 * Received query response has been read and removed.
 * 
 * \[ id \]
 */
export interface PolkadotXcmEvent_ResponseTaken {
  __kind: 'ResponseTaken'
  value: bigint
}

/**
 * Some assets have been placed in an asset trap.
 * 
 * \[ hash, origin, assets \]
 */
export interface PolkadotXcmEvent_AssetsTrapped {
  __kind: 'AssetsTrapped'
  value: [Uint8Array, V1MultiLocation, VersionedMultiAssets]
}

/**
 * An XCM version change notification message has been attempted to be sent.
 * 
 * \[ destination, result \]
 */
export interface PolkadotXcmEvent_VersionChangeNotified {
  __kind: 'VersionChangeNotified'
  value: [V1MultiLocation, number]
}

/**
 * The supported version of a location has been changed. This might be through an
 * automatic notification or a manual intervention.
 * 
 * \[ location, XCM version \]
 */
export interface PolkadotXcmEvent_SupportedVersionChanged {
  __kind: 'SupportedVersionChanged'
  value: [V1MultiLocation, number]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 * 
 * \[ location, query ID, error \]
 */
export interface PolkadotXcmEvent_NotifyTargetSendFail {
  __kind: 'NotifyTargetSendFail'
  value: [V1MultiLocation, bigint, V2Error]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * migrating the location to our new XCM format.
 * 
 * \[ location, query ID \]
 */
export interface PolkadotXcmEvent_NotifyTargetMigrationFail {
  __kind: 'NotifyTargetMigrationFail'
  value: [VersionedMultiLocation, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CumulusXcmEvent = CumulusXcmEvent_InvalidFormat | CumulusXcmEvent_UnsupportedVersion | CumulusXcmEvent_ExecutedDownward

/**
 * Downward message is invalid XCM.
 * \[ id \]
 */
export interface CumulusXcmEvent_InvalidFormat {
  __kind: 'InvalidFormat'
  value: Uint8Array
}

/**
 * Downward message is unsupported version of XCM.
 * \[ id \]
 */
export interface CumulusXcmEvent_UnsupportedVersion {
  __kind: 'UnsupportedVersion'
  value: Uint8Array
}

/**
 * Downward message executed with the given outcome.
 * \[ id, outcome \]
 */
export interface CumulusXcmEvent_ExecutedDownward {
  __kind: 'ExecutedDownward'
  value: [Uint8Array, V2Outcome]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type XcmpQueueEvent = XcmpQueueEvent_Success | XcmpQueueEvent_Fail | XcmpQueueEvent_BadVersion | XcmpQueueEvent_BadFormat | XcmpQueueEvent_UpwardMessageSent | XcmpQueueEvent_XcmpMessageSent | XcmpQueueEvent_OverweightEnqueued | XcmpQueueEvent_OverweightServiced

/**
 * Some XCM was executed ok.
 */
export interface XcmpQueueEvent_Success {
  __kind: 'Success'
  value: (Uint8Array | undefined)
}

/**
 * Some XCM failed.
 */
export interface XcmpQueueEvent_Fail {
  __kind: 'Fail'
  value: [(Uint8Array | undefined), V2Error]
}

/**
 * Bad XCM version used.
 */
export interface XcmpQueueEvent_BadVersion {
  __kind: 'BadVersion'
  value: (Uint8Array | undefined)
}

/**
 * Bad XCM format used.
 */
export interface XcmpQueueEvent_BadFormat {
  __kind: 'BadFormat'
  value: (Uint8Array | undefined)
}

/**
 * An upward message was sent to the relay chain.
 */
export interface XcmpQueueEvent_UpwardMessageSent {
  __kind: 'UpwardMessageSent'
  value: (Uint8Array | undefined)
}

/**
 * An HRMP message was sent to a sibling parachain.
 */
export interface XcmpQueueEvent_XcmpMessageSent {
  __kind: 'XcmpMessageSent'
  value: (Uint8Array | undefined)
}

/**
 * An XCM exceeded the individual message weight budget.
 */
export interface XcmpQueueEvent_OverweightEnqueued {
  __kind: 'OverweightEnqueued'
  value: [number, number, bigint, bigint]
}

/**
 * An XCM from the overweight queue was executed with the given actual weight used.
 */
export interface XcmpQueueEvent_OverweightServiced {
  __kind: 'OverweightServiced'
  value: [bigint, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type DmpQueueEvent = DmpQueueEvent_InvalidFormat | DmpQueueEvent_UnsupportedVersion | DmpQueueEvent_ExecutedDownward | DmpQueueEvent_WeightExhausted | DmpQueueEvent_OverweightEnqueued | DmpQueueEvent_OverweightServiced

/**
 * Downward message is invalid XCM.
 * \[ id \]
 */
export interface DmpQueueEvent_InvalidFormat {
  __kind: 'InvalidFormat'
  value: Uint8Array
}

/**
 * Downward message is unsupported version of XCM.
 * \[ id \]
 */
export interface DmpQueueEvent_UnsupportedVersion {
  __kind: 'UnsupportedVersion'
  value: Uint8Array
}

/**
 * Downward message executed with the given outcome.
 * \[ id, outcome \]
 */
export interface DmpQueueEvent_ExecutedDownward {
  __kind: 'ExecutedDownward'
  value: [Uint8Array, V2Outcome]
}

/**
 * The weight limit for handling downward messages was reached.
 * \[ id, remaining, required \]
 */
export interface DmpQueueEvent_WeightExhausted {
  __kind: 'WeightExhausted'
  value: [Uint8Array, bigint, bigint]
}

/**
 * Downward message is overweight and was placed in the overweight queue.
 * \[ id, index, required \]
 */
export interface DmpQueueEvent_OverweightEnqueued {
  __kind: 'OverweightEnqueued'
  value: [Uint8Array, bigint, bigint]
}

/**
 * Downward message from the overweight queue was executed.
 * \[ index, used \]
 */
export interface DmpQueueEvent_OverweightServiced {
  __kind: 'OverweightServiced'
  value: [bigint, bigint]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type AssetRegistryEvent = AssetRegistryEvent_Registered | AssetRegistryEvent_Updated | AssetRegistryEvent_MetadataSet | AssetRegistryEvent_LocationSet

/**
 * Asset was registered.
 */
export interface AssetRegistryEvent_Registered {
  __kind: 'Registered'
  assetId: number
  assetName: Uint8Array
  assetType: AssetType
}

/**
 * Asset was updated.
 */
export interface AssetRegistryEvent_Updated {
  __kind: 'Updated'
  assetId: number
  assetName: Uint8Array
  assetType: AssetType
}

/**
 * Metadata set for an asset.
 */
export interface AssetRegistryEvent_MetadataSet {
  __kind: 'MetadataSet'
  assetId: number
  symbol: Uint8Array
  decimals: number
}

/**
 * Native location set for an asset.
 */
export interface AssetRegistryEvent_LocationSet {
  __kind: 'LocationSet'
  assetId: number
  location: AssetLocation
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type XYKEvent = XYKEvent_LiquidityAdded | XYKEvent_LiquidityRemoved | XYKEvent_PoolCreated | XYKEvent_PoolDestroyed | XYKEvent_SellExecuted | XYKEvent_BuyExecuted

/**
 * New liquidity was provided to the pool.
 */
export interface XYKEvent_LiquidityAdded {
  __kind: 'LiquidityAdded'
  who: Uint8Array
  assetA: number
  assetB: number
  amountA: bigint
  amountB: bigint
}

/**
 * Liquidity was removed from the pool.
 */
export interface XYKEvent_LiquidityRemoved {
  __kind: 'LiquidityRemoved'
  who: Uint8Array
  assetA: number
  assetB: number
  shares: bigint
}

/**
 * Pool was created.
 */
export interface XYKEvent_PoolCreated {
  __kind: 'PoolCreated'
  who: Uint8Array
  assetA: number
  assetB: number
  initialSharesAmount: bigint
  shareToken: number
  pool: Uint8Array
}

/**
 * Pool was destroyed.
 */
export interface XYKEvent_PoolDestroyed {
  __kind: 'PoolDestroyed'
  who: Uint8Array
  assetA: number
  assetB: number
  shareToken: number
  pool: Uint8Array
}

/**
 * Asset sale executed.
 */
export interface XYKEvent_SellExecuted {
  __kind: 'SellExecuted'
  who: Uint8Array
  assetIn: number
  assetOut: number
  amount: bigint
  salePrice: bigint
  feeAsset: number
  feeAmount: bigint
  pool: Uint8Array
}

/**
 * Asset purchase executed.
 */
export interface XYKEvent_BuyExecuted {
  __kind: 'BuyExecuted'
  who: Uint8Array
  assetOut: number
  assetIn: number
  amount: bigint
  buyPrice: bigint
  feeAsset: number
  feeAmount: bigint
  pool: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type DusterEvent = DusterEvent_Dusted | DusterEvent_Added | DusterEvent_Removed

/**
 * Account dusted.
 */
export interface DusterEvent_Dusted {
  __kind: 'Dusted'
  who: Uint8Array
  amount: bigint
}

/**
 * Account added to non-dustable list.
 */
export interface DusterEvent_Added {
  __kind: 'Added'
  who: Uint8Array
}

/**
 * Account removed from non-dustable list.
 */
export interface DusterEvent_Removed {
  __kind: 'Removed'
  who: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type ExchangeEvent = ExchangeEvent_IntentionRegistered | ExchangeEvent_IntentionResolvedAMMTrade | ExchangeEvent_IntentionResolvedDirectTrade | ExchangeEvent_IntentionResolvedDirectTradeFees | ExchangeEvent_InsufficientAssetBalanceEvent | ExchangeEvent_IntentionResolveErrorEvent

/**
 * Intention registered event
 */
export interface ExchangeEvent_IntentionRegistered {
  __kind: 'IntentionRegistered'
  who: Uint8Array
  assetA: number
  assetB: number
  amount: bigint
  intentionType: IntentionType
  intentionId: Uint8Array
}

/**
 * Intention resolved as AMM Trade
 */
export interface ExchangeEvent_IntentionResolvedAMMTrade {
  __kind: 'IntentionResolvedAMMTrade'
  who: Uint8Array
  intentionType: IntentionType
  intentionId: Uint8Array
  amount: bigint
  amountSoldOrBought: bigint
  poolAccountId: Uint8Array
}

/**
 * Intention resolved as Direct Trade
 */
export interface ExchangeEvent_IntentionResolvedDirectTrade {
  __kind: 'IntentionResolvedDirectTrade'
  accountIdA: Uint8Array
  accountIdB: Uint8Array
  intentionIdA: Uint8Array
  intentionIdB: Uint8Array
  amountA: bigint
  amountB: bigint
}

/**
 * Paid fees event
 */
export interface ExchangeEvent_IntentionResolvedDirectTradeFees {
  __kind: 'IntentionResolvedDirectTradeFees'
  who: Uint8Array
  intentionId: Uint8Array
  feeReceiver: Uint8Array
  assetId: number
  feeAmount: bigint
}

/**
 * Error event - insufficient balance of specified asset
 */
export interface ExchangeEvent_InsufficientAssetBalanceEvent {
  __kind: 'InsufficientAssetBalanceEvent'
  who: Uint8Array
  assetId: number
  intentionType: IntentionType
  intentionId: Uint8Array
  errorDetail: DispatchError
}

/**
 * Intention Error Event
 */
export interface ExchangeEvent_IntentionResolveErrorEvent {
  __kind: 'IntentionResolveErrorEvent'
  who: Uint8Array
  assetIds: AssetPair
  intentionType: IntentionType
  intentionId: Uint8Array
  errorDetail: DispatchError
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type LBPEvent = LBPEvent_PoolCreated | LBPEvent_PoolUpdated | LBPEvent_LiquidityAdded | LBPEvent_LiquidityRemoved | LBPEvent_SellExecuted | LBPEvent_BuyExecuted

/**
 * Pool was created by the `CreatePool` origin.
 */
export interface LBPEvent_PoolCreated {
  __kind: 'PoolCreated'
  pool: Uint8Array
  data: Pool
}

/**
 * Pool data were updated.
 */
export interface LBPEvent_PoolUpdated {
  __kind: 'PoolUpdated'
  pool: Uint8Array
  data: Pool
}

/**
 * New liquidity was provided to the pool.
 */
export interface LBPEvent_LiquidityAdded {
  __kind: 'LiquidityAdded'
  who: Uint8Array
  assetA: number
  assetB: number
  amountA: bigint
  amountB: bigint
}

/**
 * Liquidity was removed from the pool and the pool was destroyed.
 */
export interface LBPEvent_LiquidityRemoved {
  __kind: 'LiquidityRemoved'
  who: Uint8Array
  assetA: number
  assetB: number
  amountA: bigint
  amountB: bigint
}

/**
 * Sale executed.
 */
export interface LBPEvent_SellExecuted {
  __kind: 'SellExecuted'
  who: Uint8Array
  assetIn: number
  assetOut: number
  amount: bigint
  salePrice: bigint
  feeAsset: number
  feeAmount: bigint
}

/**
 * Purchase executed.
 */
export interface LBPEvent_BuyExecuted {
  __kind: 'BuyExecuted'
  who: Uint8Array
  assetOut: number
  assetIn: number
  amount: bigint
  buyPrice: bigint
  feeAsset: number
  feeAmount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type NFTEvent = NFTEvent_ClassCreated | NFTEvent_InstanceMinted | NFTEvent_InstanceTransferred | NFTEvent_InstanceBurned | NFTEvent_ClassDestroyed

/**
 * A class was created
 */
export interface NFTEvent_ClassCreated {
  __kind: 'ClassCreated'
  owner: Uint8Array
  classId: bigint
  classType: ClassType
  metadata: Uint8Array
}

/**
 * An instance was minted
 */
export interface NFTEvent_InstanceMinted {
  __kind: 'InstanceMinted'
  owner: Uint8Array
  classId: bigint
  instanceId: bigint
  metadata: Uint8Array
}

/**
 * An instance was transferred
 */
export interface NFTEvent_InstanceTransferred {
  __kind: 'InstanceTransferred'
  from: Uint8Array
  to: Uint8Array
  classId: bigint
  instanceId: bigint
}

/**
 * An instance was burned
 */
export interface NFTEvent_InstanceBurned {
  __kind: 'InstanceBurned'
  owner: Uint8Array
  classId: bigint
  instanceId: bigint
}

/**
 * A class was destroyed
 */
export interface NFTEvent_ClassDestroyed {
  __kind: 'ClassDestroyed'
  owner: Uint8Array
  classId: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type MultiTransactionPaymentEvent = MultiTransactionPaymentEvent_CurrencySet | MultiTransactionPaymentEvent_CurrencyAdded | MultiTransactionPaymentEvent_CurrencyRemoved | MultiTransactionPaymentEvent_FeeWithdrawn

/**
 * CurrencySet
 * [who, currency]
 */
export interface MultiTransactionPaymentEvent_CurrencySet {
  __kind: 'CurrencySet'
  accountId: Uint8Array
  assetId: number
}

/**
 * New accepted currency added
 * [currency]
 */
export interface MultiTransactionPaymentEvent_CurrencyAdded {
  __kind: 'CurrencyAdded'
  assetId: number
}

/**
 * Accepted currency removed
 * [currency]
 */
export interface MultiTransactionPaymentEvent_CurrencyRemoved {
  __kind: 'CurrencyRemoved'
  assetId: number
}

/**
 * Transaction fee paid in non-native currency
 * [Account, Currency, Native fee amount, Non-native fee amount, Destination account]
 */
export interface MultiTransactionPaymentEvent_FeeWithdrawn {
  __kind: 'FeeWithdrawn'
  accountId: Uint8Array
  assetId: number
  nativeFeeAmount: bigint
  nonNativeFeeAmount: bigint
  destinationAccountId: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type RelayChainInfoEvent = RelayChainInfoEvent_CurrentBlockNumbers

/**
 * Current block numbers
 * [ Parachain block number, Relaychain Block number ]
 */
export interface RelayChainInfoEvent_CurrentBlockNumbers {
  __kind: 'CurrentBlockNumbers'
  parachainBlockNumber: number
  relaychainBlockNumber: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type MarketplaceEvent = MarketplaceEvent_TokenPriceUpdated | MarketplaceEvent_TokenSold | MarketplaceEvent_OfferPlaced | MarketplaceEvent_OfferWithdrawn | MarketplaceEvent_OfferAccepted | MarketplaceEvent_RoyaltyPaid | MarketplaceEvent_RoyaltyAdded

/**
 * The price for a token was updated
 */
export interface MarketplaceEvent_TokenPriceUpdated {
  __kind: 'TokenPriceUpdated'
  who: Uint8Array
  class: bigint
  instance: bigint
  price: (bigint | undefined)
}

/**
 * Token was sold to a new owner
 */
export interface MarketplaceEvent_TokenSold {
  __kind: 'TokenSold'
  owner: Uint8Array
  buyer: Uint8Array
  class: bigint
  instance: bigint
  price: bigint
}

/**
 * Offer was placed on a token
 */
export interface MarketplaceEvent_OfferPlaced {
  __kind: 'OfferPlaced'
  who: Uint8Array
  class: bigint
  instance: bigint
  amount: bigint
  expires: number
}

/**
 * Offer was withdrawn
 */
export interface MarketplaceEvent_OfferWithdrawn {
  __kind: 'OfferWithdrawn'
  who: Uint8Array
  class: bigint
  instance: bigint
}

/**
 * Offer was accepted
 */
export interface MarketplaceEvent_OfferAccepted {
  __kind: 'OfferAccepted'
  who: Uint8Array
  class: bigint
  instance: bigint
  amount: bigint
  maker: Uint8Array
}

/**
 * Royalty hs been paid to the author
 */
export interface MarketplaceEvent_RoyaltyPaid {
  __kind: 'RoyaltyPaid'
  class: bigint
  instance: bigint
  author: Uint8Array
  royalty: number
  royaltyAmount: bigint
}

/**
 * Marketplace data has been added
 */
export interface MarketplaceEvent_RoyaltyAdded {
  __kind: 'RoyaltyAdded'
  class: bigint
  instance: bigint
  author: Uint8Array
  royalty: number
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TransactionPauseEvent = TransactionPauseEvent_TransactionPaused | TransactionPauseEvent_TransactionUnpaused

/**
 * Paused transaction
 */
export interface TransactionPauseEvent_TransactionPaused {
  __kind: 'TransactionPaused'
  palletNameBytes: Uint8Array
  functionNameBytes: Uint8Array
}

/**
 * Unpaused transaction
 */
export interface TransactionPauseEvent_TransactionUnpaused {
  __kind: 'TransactionUnpaused'
  palletNameBytes: Uint8Array
  functionNameBytes: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type CurrenciesEvent = CurrenciesEvent_Transferred | CurrenciesEvent_BalanceUpdated | CurrenciesEvent_Deposited | CurrenciesEvent_Withdrawn

/**
 * Currency transfer success.
 */
export interface CurrenciesEvent_Transferred {
  __kind: 'Transferred'
  currencyId: number
  from: Uint8Array
  to: Uint8Array
  amount: bigint
}

/**
 * Update balance success.
 */
export interface CurrenciesEvent_BalanceUpdated {
  __kind: 'BalanceUpdated'
  currencyId: number
  who: Uint8Array
  amount: bigint
}

/**
 * Deposit success.
 */
export interface CurrenciesEvent_Deposited {
  __kind: 'Deposited'
  currencyId: number
  who: Uint8Array
  amount: bigint
}

/**
 * Withdraw success.
 */
export interface CurrenciesEvent_Withdrawn {
  __kind: 'Withdrawn'
  currencyId: number
  who: Uint8Array
  amount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type TokensEvent = TokensEvent_Endowed | TokensEvent_DustLost | TokensEvent_Transfer | TokensEvent_Reserved | TokensEvent_Unreserved | TokensEvent_RepatriatedReserve | TokensEvent_BalanceSet

/**
 * An account was created with some free balance.
 */
export interface TokensEvent_Endowed {
  __kind: 'Endowed'
  currencyId: number
  who: Uint8Array
  amount: bigint
}

/**
 * An account was removed whose balance was non-zero but below
 * ExistentialDeposit, resulting in an outright loss.
 */
export interface TokensEvent_DustLost {
  __kind: 'DustLost'
  currencyId: number
  who: Uint8Array
  amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface TokensEvent_Transfer {
  __kind: 'Transfer'
  currencyId: number
  from: Uint8Array
  to: Uint8Array
  amount: bigint
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface TokensEvent_Reserved {
  __kind: 'Reserved'
  currencyId: number
  who: Uint8Array
  amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface TokensEvent_Unreserved {
  __kind: 'Unreserved'
  currencyId: number
  who: Uint8Array
  amount: bigint
}

/**
 * Some reserved balance was repatriated (moved from reserved to
 * another account).
 */
export interface TokensEvent_RepatriatedReserve {
  __kind: 'RepatriatedReserve'
  currencyId: number
  from: Uint8Array
  to: Uint8Array
  amount: bigint
  status: BalanceStatus
}

/**
 * A balance was set by root.
 */
export interface TokensEvent_BalanceSet {
  __kind: 'BalanceSet'
  currencyId: number
  who: Uint8Array
  free: bigint
  reserved: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type OrmlXcmEvent = OrmlXcmEvent_Sent

/**
 * XCM message sent. \[to, message\]
 */
export interface OrmlXcmEvent_Sent {
  __kind: 'Sent'
  to: V1MultiLocation
  message: V2Instruction[]
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type XTokensEvent = XTokensEvent_TransferredMultiAssets

/**
 * Transferred `MultiAsset` with fee.
 */
export interface XTokensEvent_TransferredMultiAssets {
  __kind: 'TransferredMultiAssets'
  sender: Uint8Array
  assets: V1MultiAsset[]
  fee: V1MultiAsset
  dest: V1MultiLocation
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type UnknownTokensEvent = UnknownTokensEvent_Deposited | UnknownTokensEvent_Withdrawn

/**
 * Deposit success.
 */
export interface UnknownTokensEvent_Deposited {
  __kind: 'Deposited'
  asset: V1MultiAsset
  who: V1MultiLocation
}

/**
 * Withdraw success.
 */
export interface UnknownTokensEvent_Withdrawn {
  __kind: 'Withdrawn'
  asset: V1MultiAsset
  who: V1MultiLocation
}

export interface DispatchInfo {
  weight: bigint
  class: DispatchClass
  paysFee: Pays
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_TooManyConsumers | DispatchError_Token | DispatchError_Arithmetic

export interface DispatchError_Other {
  __kind: 'Other'
}

export interface DispatchError_CannotLookup {
  __kind: 'CannotLookup'
}

export interface DispatchError_BadOrigin {
  __kind: 'BadOrigin'
}

export interface DispatchError_Module {
  __kind: 'Module'
  value: ModuleError
}

export interface DispatchError_ConsumerRemaining {
  __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
  __kind: 'NoProviders'
}

export interface DispatchError_TooManyConsumers {
  __kind: 'TooManyConsumers'
}

export interface DispatchError_Token {
  __kind: 'Token'
  value: TokenError
}

export interface DispatchError_Arithmetic {
  __kind: 'Arithmetic'
  value: ArithmeticError
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
  __kind: 'Free'
}

export interface BalanceStatus_Reserved {
  __kind: 'Reserved'
}

export type LookupError = LookupError_Unknown | LookupError_BadFormat

export interface LookupError_Unknown {
  __kind: 'Unknown'
}

export interface LookupError_BadFormat {
  __kind: 'BadFormat'
}

export type VoteThreshold = VoteThreshold_SuperMajorityApprove | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SimpleMajority

export interface VoteThreshold_SuperMajorityApprove {
  __kind: 'SuperMajorityApprove'
}

export interface VoteThreshold_SuperMajorityAgainst {
  __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SimpleMajority {
  __kind: 'SimpleMajority'
}

export type AccountVote = AccountVote_Standard | AccountVote_Split

export interface AccountVote_Standard {
  __kind: 'Standard'
  vote: number
  balance: bigint
}

export interface AccountVote_Split {
  __kind: 'Split'
  aye: bigint
  nay: bigint
}

export interface VestingSchedule {
  start: number
  period: number
  periodCount: number
  perPeriod: bigint
}

export type ProxyType = ProxyType_Any | ProxyType_CancelProxy | ProxyType_Governance | ProxyType_Exchange | ProxyType_Transfer

export interface ProxyType_Any {
  __kind: 'Any'
}

export interface ProxyType_CancelProxy {
  __kind: 'CancelProxy'
}

export interface ProxyType_Governance {
  __kind: 'Governance'
}

export interface ProxyType_Exchange {
  __kind: 'Exchange'
}

export interface ProxyType_Transfer {
  __kind: 'Transfer'
}

export interface Timepoint {
  height: number
  index: number
}

export type V2Outcome = V2Outcome_Complete | V2Outcome_Incomplete | V2Outcome_Error

export interface V2Outcome_Complete {
  __kind: 'Complete'
  value: bigint
}

export interface V2Outcome_Incomplete {
  __kind: 'Incomplete'
  value: [bigint, V2Error]
}

export interface V2Outcome_Error {
  __kind: 'Error'
  value: V2Error
}

export interface V1MultiLocation {
  parents: number
  interior: V1Junctions
}

export type V2Instruction = V2Instruction_WithdrawAsset | V2Instruction_ReserveAssetDeposited | V2Instruction_ReceiveTeleportedAsset | V2Instruction_QueryResponse | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Transact | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_ClearOrigin | V2Instruction_DescendOrigin | V2Instruction_ReportError | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_ExchangeAsset | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_BuyExecution | V2Instruction_RefundSurplus | V2Instruction_SetErrorHandler | V2Instruction_SetAppendix | V2Instruction_ClearError | V2Instruction_ClaimAsset | V2Instruction_Trap | V2Instruction_SubscribeVersion | V2Instruction_UnsubscribeVersion

export interface V2Instruction_WithdrawAsset {
  __kind: 'WithdrawAsset'
  value: V1MultiAsset[]
}

export interface V2Instruction_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  value: V1MultiAsset[]
}

export interface V2Instruction_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  value: V1MultiAsset[]
}

export interface V2Instruction_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V2Response
  maxWeight: bigint
}

export interface V2Instruction_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAsset[]
  beneficiary: V1MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAsset[]
  dest: V1MultiLocation
  xcm: V2Instruction[]
}

export interface V2Instruction_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V2Instruction_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V2Instruction_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V2Instruction_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V2Instruction_ClearOrigin {
  __kind: 'ClearOrigin'
}

export interface V2Instruction_DescendOrigin {
  __kind: 'DescendOrigin'
  value: V1Junctions
}

export interface V2Instruction_ReportError {
  __kind: 'ReportError'
  queryId: bigint
  dest: V1MultiLocation
  maxResponseWeight: bigint
}

export interface V2Instruction_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  xcm: V2Instruction[]
}

export interface V2Instruction_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAsset[]
}

export interface V2Instruction_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
  maxResponseWeight: bigint
}

export interface V2Instruction_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weightLimit: V2WeightLimit
}

export interface V2Instruction_RefundSurplus {
  __kind: 'RefundSurplus'
}

export interface V2Instruction_SetErrorHandler {
  __kind: 'SetErrorHandler'
  value: V2Instruction[]
}

export interface V2Instruction_SetAppendix {
  __kind: 'SetAppendix'
  value: V2Instruction[]
}

export interface V2Instruction_ClearError {
  __kind: 'ClearError'
}

export interface V2Instruction_ClaimAsset {
  __kind: 'ClaimAsset'
  assets: V1MultiAsset[]
  ticket: V1MultiLocation
}

export interface V2Instruction_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface V2Instruction_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V2Instruction_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export type V2Response = V2Response_Null | V2Response_Assets | V2Response_ExecutionResult | V2Response_Version

export interface V2Response_Null {
  __kind: 'Null'
}

export interface V2Response_Assets {
  __kind: 'Assets'
  value: V1MultiAsset[]
}

export interface V2Response_ExecutionResult {
  __kind: 'ExecutionResult'
  value: ([number, V2Error] | undefined)
}

export interface V2Response_Version {
  __kind: 'Version'
  value: number
}

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1

export interface VersionedMultiAssets_V0 {
  __kind: 'V0'
  value: V0MultiAsset[]
}

export interface VersionedMultiAssets_V1 {
  __kind: 'V1'
  value: V1MultiAsset[]
}

export type V2Error = V2Error_Overflow | V2Error_Unimplemented | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_BadOrigin | V2Error_InvalidLocation | V2Error_AssetNotFound | V2Error_FailedToTransactAsset | V2Error_NotWithdrawable | V2Error_LocationCannotHold | V2Error_ExceedsMaxMessageSize | V2Error_DestinationUnsupported | V2Error_Transport | V2Error_Unroutable | V2Error_UnknownClaim | V2Error_FailedToDecode | V2Error_MaxWeightInvalid | V2Error_NotHoldingFees | V2Error_TooExpensive | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_WeightLimitReached | V2Error_Barrier | V2Error_WeightNotComputable

export interface V2Error_Overflow {
  __kind: 'Overflow'
}

export interface V2Error_Unimplemented {
  __kind: 'Unimplemented'
}

export interface V2Error_UntrustedReserveLocation {
  __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
  __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_MultiLocationFull {
  __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
  __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_BadOrigin {
  __kind: 'BadOrigin'
}

export interface V2Error_InvalidLocation {
  __kind: 'InvalidLocation'
}

export interface V2Error_AssetNotFound {
  __kind: 'AssetNotFound'
}

export interface V2Error_FailedToTransactAsset {
  __kind: 'FailedToTransactAsset'
}

export interface V2Error_NotWithdrawable {
  __kind: 'NotWithdrawable'
}

export interface V2Error_LocationCannotHold {
  __kind: 'LocationCannotHold'
}

export interface V2Error_ExceedsMaxMessageSize {
  __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_DestinationUnsupported {
  __kind: 'DestinationUnsupported'
}

export interface V2Error_Transport {
  __kind: 'Transport'
}

export interface V2Error_Unroutable {
  __kind: 'Unroutable'
}

export interface V2Error_UnknownClaim {
  __kind: 'UnknownClaim'
}

export interface V2Error_FailedToDecode {
  __kind: 'FailedToDecode'
}

export interface V2Error_MaxWeightInvalid {
  __kind: 'MaxWeightInvalid'
}

export interface V2Error_NotHoldingFees {
  __kind: 'NotHoldingFees'
}

export interface V2Error_TooExpensive {
  __kind: 'TooExpensive'
}

export interface V2Error_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface V2Error_UnhandledXcmVersion {
  __kind: 'UnhandledXcmVersion'
}

export interface V2Error_WeightLimitReached {
  __kind: 'WeightLimitReached'
  value: bigint
}

export interface V2Error_Barrier {
  __kind: 'Barrier'
}

export interface V2Error_WeightNotComputable {
  __kind: 'WeightNotComputable'
}

export type VersionedMultiLocation = VersionedMultiLocation_V0 | VersionedMultiLocation_V1

export interface VersionedMultiLocation_V0 {
  __kind: 'V0'
  value: V0MultiLocation
}

export interface VersionedMultiLocation_V1 {
  __kind: 'V1'
  value: V1MultiLocation
}

export type AssetType = AssetType_Token | AssetType_PoolShare

export interface AssetType_Token {
  __kind: 'Token'
}

export interface AssetType_PoolShare {
  __kind: 'PoolShare'
  value: [number, number]
}

export interface AssetLocation {
  parents: number
  interior: V1Junctions
}

export type IntentionType = IntentionType_SELL | IntentionType_BUY

export interface IntentionType_SELL {
  __kind: 'SELL'
}

export interface IntentionType_BUY {
  __kind: 'BUY'
}

export interface AssetPair {
  assetIn: number
  assetOut: number
}

export interface Pool {
  owner: Uint8Array
  start: (number | undefined)
  end: (number | undefined)
  assets: [number, number]
  initialWeight: number
  finalWeight: number
  weightCurve: WeightCurveType
  fee: [number, number]
  feeCollector: Uint8Array
  repayTarget: bigint
}

export interface V1MultiAsset {
  id: V1AssetId
  fun: V1Fungibility
}

export type DispatchClass = DispatchClass_Normal | DispatchClass_Operational | DispatchClass_Mandatory

export interface DispatchClass_Normal {
  __kind: 'Normal'
}

export interface DispatchClass_Operational {
  __kind: 'Operational'
}

export interface DispatchClass_Mandatory {
  __kind: 'Mandatory'
}

export type Pays = Pays_Yes | Pays_No

export interface Pays_Yes {
  __kind: 'Yes'
}

export interface Pays_No {
  __kind: 'No'
}

export interface ModuleError {
  index: number
  error: number
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Unsupported

export interface TokenError_NoFunds {
  __kind: 'NoFunds'
}

export interface TokenError_WouldDie {
  __kind: 'WouldDie'
}

export interface TokenError_BelowMinimum {
  __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
  __kind: 'CannotCreate'
}

export interface TokenError_UnknownAsset {
  __kind: 'UnknownAsset'
}

export interface TokenError_Frozen {
  __kind: 'Frozen'
}

export interface TokenError_Unsupported {
  __kind: 'Unsupported'
}

export type ArithmeticError = ArithmeticError_Underflow | ArithmeticError_Overflow | ArithmeticError_DivisionByZero

export interface ArithmeticError_Underflow {
  __kind: 'Underflow'
}

export interface ArithmeticError_Overflow {
  __kind: 'Overflow'
}

export interface ArithmeticError_DivisionByZero {
  __kind: 'DivisionByZero'
}

export type V1Junctions = V1Junctions_Here | V1Junctions_X1 | V1Junctions_X2 | V1Junctions_X3 | V1Junctions_X4 | V1Junctions_X5 | V1Junctions_X6 | V1Junctions_X7 | V1Junctions_X8

export interface V1Junctions_Here {
  __kind: 'Here'
}

export interface V1Junctions_X1 {
  __kind: 'X1'
  value: V1Junction
}

export interface V1Junctions_X2 {
  __kind: 'X2'
  value: [V1Junction, V1Junction]
}

export interface V1Junctions_X3 {
  __kind: 'X3'
  value: [V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X4 {
  __kind: 'X4'
  value: [V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X5 {
  __kind: 'X5'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X6 {
  __kind: 'X6'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X7 {
  __kind: 'X7'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X8 {
  __kind: 'X8'
  value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export type V0OriginKind = V0OriginKind_Native | V0OriginKind_SovereignAccount | V0OriginKind_Superuser | V0OriginKind_Xcm

export interface V0OriginKind_Native {
  __kind: 'Native'
}

export interface V0OriginKind_SovereignAccount {
  __kind: 'SovereignAccount'
}

export interface V0OriginKind_Superuser {
  __kind: 'Superuser'
}

export interface V0OriginKind_Xcm {
  __kind: 'Xcm'
}

export interface DoubleEncoded {
  encoded: Uint8Array
}

export type V1MultiAssetFilter = V1MultiAssetFilter_Definite | V1MultiAssetFilter_Wild

export interface V1MultiAssetFilter_Definite {
  __kind: 'Definite'
  value: V1MultiAsset[]
}

export interface V1MultiAssetFilter_Wild {
  __kind: 'Wild'
  value: V1WildMultiAsset
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
  __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
  __kind: 'Limited'
  value: bigint
}

export type V0MultiAsset = V0MultiAsset_None | V0MultiAsset_All | V0MultiAsset_AllFungible | V0MultiAsset_AllNonFungible | V0MultiAsset_AllAbstractFungible | V0MultiAsset_AllAbstractNonFungible | V0MultiAsset_AllConcreteFungible | V0MultiAsset_AllConcreteNonFungible | V0MultiAsset_AbstractFungible | V0MultiAsset_AbstractNonFungible | V0MultiAsset_ConcreteFungible | V0MultiAsset_ConcreteNonFungible

export interface V0MultiAsset_None {
  __kind: 'None'
}

export interface V0MultiAsset_All {
  __kind: 'All'
}

export interface V0MultiAsset_AllFungible {
  __kind: 'AllFungible'
}

export interface V0MultiAsset_AllNonFungible {
  __kind: 'AllNonFungible'
}

export interface V0MultiAsset_AllAbstractFungible {
  __kind: 'AllAbstractFungible'
  id: Uint8Array
}

export interface V0MultiAsset_AllAbstractNonFungible {
  __kind: 'AllAbstractNonFungible'
  class: Uint8Array
}

export interface V0MultiAsset_AllConcreteFungible {
  __kind: 'AllConcreteFungible'
  id: V0MultiLocation
}

export interface V0MultiAsset_AllConcreteNonFungible {
  __kind: 'AllConcreteNonFungible'
  class: V0MultiLocation
}

export interface V0MultiAsset_AbstractFungible {
  __kind: 'AbstractFungible'
  id: Uint8Array
  amount: bigint
}

export interface V0MultiAsset_AbstractNonFungible {
  __kind: 'AbstractNonFungible'
  class: Uint8Array
  instance: V1AssetInstance
}

export interface V0MultiAsset_ConcreteFungible {
  __kind: 'ConcreteFungible'
  id: V0MultiLocation
  amount: bigint
}

export interface V0MultiAsset_ConcreteNonFungible {
  __kind: 'ConcreteNonFungible'
  class: V0MultiLocation
  instance: V1AssetInstance
}

export type V0MultiLocation = V0MultiLocation_Null | V0MultiLocation_X1 | V0MultiLocation_X2 | V0MultiLocation_X3 | V0MultiLocation_X4 | V0MultiLocation_X5 | V0MultiLocation_X6 | V0MultiLocation_X7 | V0MultiLocation_X8

export interface V0MultiLocation_Null {
  __kind: 'Null'
}

export interface V0MultiLocation_X1 {
  __kind: 'X1'
  value: V0Junction
}

export interface V0MultiLocation_X2 {
  __kind: 'X2'
  value: [V0Junction, V0Junction]
}

export interface V0MultiLocation_X3 {
  __kind: 'X3'
  value: [V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X4 {
  __kind: 'X4'
  value: [V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X5 {
  __kind: 'X5'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X6 {
  __kind: 'X6'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X7 {
  __kind: 'X7'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X8 {
  __kind: 'X8'
  value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export type WeightCurveType = WeightCurveType_Linear

export interface WeightCurveType_Linear {
  __kind: 'Linear'
}

export type V1AssetId = V1AssetId_Concrete | V1AssetId_Abstract

export interface V1AssetId_Concrete {
  __kind: 'Concrete'
  value: V1MultiLocation
}

export interface V1AssetId_Abstract {
  __kind: 'Abstract'
  value: Uint8Array
}

export type V1Fungibility = V1Fungibility_Fungible | V1Fungibility_NonFungible

export interface V1Fungibility_Fungible {
  __kind: 'Fungible'
  value: bigint
}

export interface V1Fungibility_NonFungible {
  __kind: 'NonFungible'
  value: V1AssetInstance
}

export type V1Junction = V1Junction_Parachain | V1Junction_AccountId32 | V1Junction_AccountIndex64 | V1Junction_AccountKey20 | V1Junction_PalletInstance | V1Junction_GeneralIndex | V1Junction_GeneralKey | V1Junction_OnlyChild | V1Junction_Plurality

export interface V1Junction_Parachain {
  __kind: 'Parachain'
  value: number
}

export interface V1Junction_AccountId32 {
  __kind: 'AccountId32'
  network: V0NetworkId
  id: Uint8Array
}

export interface V1Junction_AccountIndex64 {
  __kind: 'AccountIndex64'
  network: V0NetworkId
  index: bigint
}

export interface V1Junction_AccountKey20 {
  __kind: 'AccountKey20'
  network: V0NetworkId
  key: Uint8Array
}

export interface V1Junction_PalletInstance {
  __kind: 'PalletInstance'
  value: number
}

export interface V1Junction_GeneralIndex {
  __kind: 'GeneralIndex'
  value: bigint
}

export interface V1Junction_GeneralKey {
  __kind: 'GeneralKey'
  value: Uint8Array
}

export interface V1Junction_OnlyChild {
  __kind: 'OnlyChild'
}

export interface V1Junction_Plurality {
  __kind: 'Plurality'
  id: V0BodyId
  part: V0BodyPart
}

export type V1WildMultiAsset = V1WildMultiAsset_All | V1WildMultiAsset_AllOf

export interface V1WildMultiAsset_All {
  __kind: 'All'
}

export interface V1WildMultiAsset_AllOf {
  __kind: 'AllOf'
  id: V1AssetId
  fun: V1WildFungibility
}

export type V1AssetInstance = V1AssetInstance_Undefined | V1AssetInstance_Index | V1AssetInstance_Array4 | V1AssetInstance_Array8 | V1AssetInstance_Array16 | V1AssetInstance_Array32 | V1AssetInstance_Blob

export interface V1AssetInstance_Undefined {
  __kind: 'Undefined'
}

export interface V1AssetInstance_Index {
  __kind: 'Index'
  value: bigint
}

export interface V1AssetInstance_Array4 {
  __kind: 'Array4'
  value: Uint8Array
}

export interface V1AssetInstance_Array8 {
  __kind: 'Array8'
  value: Uint8Array
}

export interface V1AssetInstance_Array16 {
  __kind: 'Array16'
  value: Uint8Array
}

export interface V1AssetInstance_Array32 {
  __kind: 'Array32'
  value: Uint8Array
}

export interface V1AssetInstance_Blob {
  __kind: 'Blob'
  value: Uint8Array
}

export type V0Junction = V0Junction_Parent | V0Junction_Parachain | V0Junction_AccountId32 | V0Junction_AccountIndex64 | V0Junction_AccountKey20 | V0Junction_PalletInstance | V0Junction_GeneralIndex | V0Junction_GeneralKey | V0Junction_OnlyChild | V0Junction_Plurality

export interface V0Junction_Parent {
  __kind: 'Parent'
}

export interface V0Junction_Parachain {
  __kind: 'Parachain'
  value: number
}

export interface V0Junction_AccountId32 {
  __kind: 'AccountId32'
  network: V0NetworkId
  id: Uint8Array
}

export interface V0Junction_AccountIndex64 {
  __kind: 'AccountIndex64'
  network: V0NetworkId
  index: bigint
}

export interface V0Junction_AccountKey20 {
  __kind: 'AccountKey20'
  network: V0NetworkId
  key: Uint8Array
}

export interface V0Junction_PalletInstance {
  __kind: 'PalletInstance'
  value: number
}

export interface V0Junction_GeneralIndex {
  __kind: 'GeneralIndex'
  value: bigint
}

export interface V0Junction_GeneralKey {
  __kind: 'GeneralKey'
  value: Uint8Array
}

export interface V0Junction_OnlyChild {
  __kind: 'OnlyChild'
}

export interface V0Junction_Plurality {
  __kind: 'Plurality'
  id: V0BodyId
  part: V0BodyPart
}

export type V0NetworkId = V0NetworkId_Any | V0NetworkId_Named | V0NetworkId_Polkadot | V0NetworkId_Kusama

export interface V0NetworkId_Any {
  __kind: 'Any'
}

export interface V0NetworkId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface V0NetworkId_Polkadot {
  __kind: 'Polkadot'
}

export interface V0NetworkId_Kusama {
  __kind: 'Kusama'
}

export type V0BodyId = V0BodyId_Unit | V0BodyId_Named | V0BodyId_Index | V0BodyId_Executive | V0BodyId_Technical | V0BodyId_Legislative | V0BodyId_Judicial

export interface V0BodyId_Unit {
  __kind: 'Unit'
}

export interface V0BodyId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface V0BodyId_Index {
  __kind: 'Index'
  value: number
}

export interface V0BodyId_Executive {
  __kind: 'Executive'
}

export interface V0BodyId_Technical {
  __kind: 'Technical'
}

export interface V0BodyId_Legislative {
  __kind: 'Legislative'
}

export interface V0BodyId_Judicial {
  __kind: 'Judicial'
}

export type V0BodyPart = V0BodyPart_Voice | V0BodyPart_Members | V0BodyPart_Fraction | V0BodyPart_AtLeastProportion | V0BodyPart_MoreThanProportion

export interface V0BodyPart_Voice {
  __kind: 'Voice'
}

export interface V0BodyPart_Members {
  __kind: 'Members'
  count: number
}

export interface V0BodyPart_Fraction {
  __kind: 'Fraction'
  nom: number
  denom: number
}

export interface V0BodyPart_AtLeastProportion {
  __kind: 'AtLeastProportion'
  nom: number
  denom: number
}

export interface V0BodyPart_MoreThanProportion {
  __kind: 'MoreThanProportion'
  nom: number
  denom: number
}

export type V1WildFungibility = V1WildFungibility_Fungible | V1WildFungibility_NonFungible

export interface V1WildFungibility_Fungible {
  __kind: 'Fungible'
}

export interface V1WildFungibility_NonFungible {
  __kind: 'NonFungible'
}
