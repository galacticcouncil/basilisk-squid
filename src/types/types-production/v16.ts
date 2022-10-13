import type {Result} from './support'

export type AssetNativeLocation = AssetNativeLocation_Here | AssetNativeLocation_X1 | AssetNativeLocation_X2 | AssetNativeLocation_X3 | AssetNativeLocation_X4 | AssetNativeLocation_X5 | AssetNativeLocation_X6 | AssetNativeLocation_X7 | AssetNativeLocation_X8

export interface AssetNativeLocation_Here {
  __kind: 'Here'
  value: null
}

export interface AssetNativeLocation_X1 {
  __kind: 'X1'
  value: JunctionV0
}

export interface AssetNativeLocation_X2 {
  __kind: 'X2'
  value: [JunctionV0, JunctionV0]
}

export interface AssetNativeLocation_X3 {
  __kind: 'X3'
  value: [JunctionV0, JunctionV0, JunctionV0]
}

export interface AssetNativeLocation_X4 {
  __kind: 'X4'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface AssetNativeLocation_X5 {
  __kind: 'X5'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface AssetNativeLocation_X6 {
  __kind: 'X6'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface AssetNativeLocation_X7 {
  __kind: 'X7'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface AssetNativeLocation_X8 {
  __kind: 'X8'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export type AssetType = AssetType_Token | AssetType_PoolShare

export interface AssetType_Token {
  __kind: 'Token'
  value: null
}

export interface AssetType_PoolShare {
  __kind: 'PoolShare'
  value: [number, number]
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
  __kind: 'Free'
}

export interface BalanceStatus_Reserved {
  __kind: 'Reserved'
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_Token | DispatchError_Arithmetic

export interface DispatchError_Other {
  __kind: 'Other'
  value: null
}

export interface DispatchError_CannotLookup {
  __kind: 'CannotLookup'
  value: null
}

export interface DispatchError_BadOrigin {
  __kind: 'BadOrigin'
  value: null
}

export interface DispatchError_Module {
  __kind: 'Module'
  value: DispatchErrorModule
}

export interface DispatchError_ConsumerRemaining {
  __kind: 'ConsumerRemaining'
  value: null
}

export interface DispatchError_NoProviders {
  __kind: 'NoProviders'
  value: null
}

export interface DispatchError_Token {
  __kind: 'Token'
  value: TokenError
}

export interface DispatchError_Arithmetic {
  __kind: 'Arithmetic'
  value: ArithmeticError
}

export type Outcome = Outcome_Complete | Outcome_Incomplete | Outcome_Error

export interface Outcome_Complete {
  __kind: 'Complete'
  value: bigint
}

export interface Outcome_Incomplete {
  __kind: 'Incomplete'
  value: [bigint, XcmErrorV0]
}

export interface Outcome_Error {
  __kind: 'Error'
  value: XcmErrorV0
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
  start: number
  end: number
  assets: AssetPair
  initialWeights: number
  finalWeights: number
  weightCurve: WeightCurveType
  pausable: boolean
  paused: boolean
  fee: Fee
  feeReceiver: Uint8Array
}

export type MultiLocation = MultiLocation_Here | MultiLocation_X1 | MultiLocation_X2 | MultiLocation_X3 | MultiLocation_X4 | MultiLocation_X5 | MultiLocation_X6 | MultiLocation_X7 | MultiLocation_X8

export interface MultiLocation_Here {
  __kind: 'Here'
  value: null
}

export interface MultiLocation_X1 {
  __kind: 'X1'
  value: JunctionV0
}

export interface MultiLocation_X2 {
  __kind: 'X2'
  value: [JunctionV0, JunctionV0]
}

export interface MultiLocation_X3 {
  __kind: 'X3'
  value: [JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocation_X4 {
  __kind: 'X4'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocation_X5 {
  __kind: 'X5'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocation_X6 {
  __kind: 'X6'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocation_X7 {
  __kind: 'X7'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocation_X8 {
  __kind: 'X8'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export type Xcm = Xcm_WithdrawAsset | Xcm_ReserveAssetDeposit | Xcm_ReceiveTeleportedAsset | Xcm_QueryResponse | Xcm_TransferAsset | Xcm_TransferReserveAsset | Xcm_Transact | Xcm_HrmpNewChannelOpenRequest | Xcm_HrmpChannelAccepted | Xcm_HrmpChannelClosing | Xcm_RelayedFrom

export interface Xcm_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: MultiAssetV0[]
  effects: XcmOrderV0[]
}

export interface Xcm_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: MultiAssetV0[]
  effects: XcmOrderV0[]
}

export interface Xcm_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: MultiAssetV0[]
  effects: XcmOrderV0[]
}

export interface Xcm_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: ResponseV0
}

export interface Xcm_TransferAsset {
  __kind: 'TransferAsset'
  assets: MultiAssetV0[]
  dest: MultiLocationV0
}

export interface Xcm_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: MultiAssetV0[]
  dest: MultiLocationV0
  effects: XcmOrderV0[]
}

export interface Xcm_Transact {
  __kind: 'Transact'
  originType: XcmOriginKind
  requireWeightAtMost: bigint
  call: DoubleEncodedCall
}

export interface Xcm_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface Xcm_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface Xcm_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface Xcm_RelayedFrom {
  __kind: 'RelayedFrom'
  who: MultiLocationV0
  message: XcmV0
}

export interface DispatchInfo {
  weight: bigint
  class: DispatchClass
  paysFee: Pays
}

export type MultiAsset = MultiAsset_None | MultiAsset_All | MultiAsset_AllFungible | MultiAsset_AllNonFungible | MultiAsset_AllAbstractFungible | MultiAsset_AllAbstractNonFungible | MultiAsset_AllConcreteFungible | MultiAsset_AllConcreteNonFungible | MultiAsset_AbstractFungible | MultiAsset_AbstractNonFungible | MultiAsset_ConcreteFungible | MultiAsset_ConcreteNonFungible

export interface MultiAsset_None {
  __kind: 'None'
  value: null
}

export interface MultiAsset_All {
  __kind: 'All'
  value: null
}

export interface MultiAsset_AllFungible {
  __kind: 'AllFungible'
  value: null
}

export interface MultiAsset_AllNonFungible {
  __kind: 'AllNonFungible'
  value: null
}

export interface MultiAsset_AllAbstractFungible {
  __kind: 'AllAbstractFungible'
  value: Uint8Array
}

export interface MultiAsset_AllAbstractNonFungible {
  __kind: 'AllAbstractNonFungible'
  value: Uint8Array
}

export interface MultiAsset_AllConcreteFungible {
  __kind: 'AllConcreteFungible'
  value: MultiLocationV0
}

export interface MultiAsset_AllConcreteNonFungible {
  __kind: 'AllConcreteNonFungible'
  value: MultiLocationV0
}

export interface MultiAsset_AbstractFungible {
  __kind: 'AbstractFungible'
  id: Uint8Array
  instance: bigint
}

export interface MultiAsset_AbstractNonFungible {
  __kind: 'AbstractNonFungible'
  class: Uint8Array
  instance: AssetInstanceV0
}

export interface MultiAsset_ConcreteFungible {
  __kind: 'ConcreteFungible'
  id: MultiLocationV0
  amount: bigint
}

export interface MultiAsset_ConcreteNonFungible {
  __kind: 'ConcreteNonFungible'
  class: MultiLocationV0
  instance: AssetInstanceV0
}

export interface VestingScheduleOf {
  start: number
  period: number
  periodCount: number
  perPeriod: bigint
}

export type XcmError = XcmError_Undefined | XcmError_Overflow | XcmError_Unimplemented | XcmError_UnhandledXcmVersion | XcmError_UnhandledXcmMessage | XcmError_UnhandledEffect | XcmError_EscalationOfPrivilege | XcmError_UntrustedReserveLocation | XcmError_UntrustedTeleportLocation | XcmError_DestinationBufferOverflow | XcmError_MultiLocationFull | XcmError_MultiLocationNotInvertible | XcmError_FailedToDecode | XcmError_BadOrigin | XcmError_ExceedsMaxMessageSize | XcmError_FailedToTransactAsset | XcmError_WeightLimitReached | XcmError_Wildcard | XcmError_TooMuchWeightRequired | XcmError_NotHoldingFees | XcmError_WeightNotComputable | XcmError_Barrier | XcmError_NotWithdrawable | XcmError_LocationCannotHold | XcmError_TooExpensive | XcmError_AssetNotFound | XcmError_DestinationUnsupported | XcmError_RecursionLimitReached | XcmError_Transport | XcmError_Unroutable | XcmError_UnknownWeightRequired | XcmError_Trap | XcmError_UnknownClaim | XcmError_InvalidLocation

export interface XcmError_Undefined {
  __kind: 'Undefined'
  value: null
}

export interface XcmError_Overflow {
  __kind: 'Overflow'
  value: null
}

export interface XcmError_Unimplemented {
  __kind: 'Unimplemented'
  value: null
}

export interface XcmError_UnhandledXcmVersion {
  __kind: 'UnhandledXcmVersion'
  value: null
}

export interface XcmError_UnhandledXcmMessage {
  __kind: 'UnhandledXcmMessage'
  value: null
}

export interface XcmError_UnhandledEffect {
  __kind: 'UnhandledEffect'
  value: null
}

export interface XcmError_EscalationOfPrivilege {
  __kind: 'EscalationOfPrivilege'
  value: null
}

export interface XcmError_UntrustedReserveLocation {
  __kind: 'UntrustedReserveLocation'
  value: null
}

export interface XcmError_UntrustedTeleportLocation {
  __kind: 'UntrustedTeleportLocation'
  value: null
}

export interface XcmError_DestinationBufferOverflow {
  __kind: 'DestinationBufferOverflow'
  value: null
}

export interface XcmError_MultiLocationFull {
  __kind: 'MultiLocationFull'
  value: null
}

export interface XcmError_MultiLocationNotInvertible {
  __kind: 'MultiLocationNotInvertible'
  value: null
}

export interface XcmError_FailedToDecode {
  __kind: 'FailedToDecode'
  value: null
}

export interface XcmError_BadOrigin {
  __kind: 'BadOrigin'
  value: null
}

export interface XcmError_ExceedsMaxMessageSize {
  __kind: 'ExceedsMaxMessageSize'
  value: null
}

export interface XcmError_FailedToTransactAsset {
  __kind: 'FailedToTransactAsset'
  value: null
}

export interface XcmError_WeightLimitReached {
  __kind: 'WeightLimitReached'
  value: bigint
}

export interface XcmError_Wildcard {
  __kind: 'Wildcard'
  value: null
}

export interface XcmError_TooMuchWeightRequired {
  __kind: 'TooMuchWeightRequired'
  value: null
}

export interface XcmError_NotHoldingFees {
  __kind: 'NotHoldingFees'
  value: null
}

export interface XcmError_WeightNotComputable {
  __kind: 'WeightNotComputable'
  value: null
}

export interface XcmError_Barrier {
  __kind: 'Barrier'
  value: null
}

export interface XcmError_NotWithdrawable {
  __kind: 'NotWithdrawable'
  value: null
}

export interface XcmError_LocationCannotHold {
  __kind: 'LocationCannotHold'
  value: null
}

export interface XcmError_TooExpensive {
  __kind: 'TooExpensive'
  value: null
}

export interface XcmError_AssetNotFound {
  __kind: 'AssetNotFound'
  value: null
}

export interface XcmError_DestinationUnsupported {
  __kind: 'DestinationUnsupported'
  value: null
}

export interface XcmError_RecursionLimitReached {
  __kind: 'RecursionLimitReached'
  value: null
}

export interface XcmError_Transport {
  __kind: 'Transport'
  value: null
}

export interface XcmError_Unroutable {
  __kind: 'Unroutable'
  value: null
}

export interface XcmError_UnknownWeightRequired {
  __kind: 'UnknownWeightRequired'
  value: null
}

export interface XcmError_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface XcmError_UnknownClaim {
  __kind: 'UnknownClaim'
  value: null
}

export interface XcmError_InvalidLocation {
  __kind: 'InvalidLocation'
  value: null
}

export interface Header {
  parentHash: Uint8Array
  number: number
  stateRoot: Uint8Array
  extrinsicsRoot: Uint8Array
  digest: Digest
}

export type Proposal = Proposal_System | Proposal_Timestamp | Proposal_Balances | Proposal_Scheduler | Proposal_Democracy | Proposal_Elections | Proposal_Council | Proposal_TechnicalCommittee | Proposal_Treasury | Proposal_Utility | Proposal_Vesting | Proposal_ParachainSystem | Proposal_PolkadotXcm | Proposal_CumulusXcm | Proposal_XTokens | Proposal_XcmpQueue | Proposal_DmpQueue | Proposal_Authorship | Proposal_CollatorSelection | Proposal_Session | Proposal_Currencies | Proposal_Tips | Proposal_Tokens | Proposal_AssetRegistry | Proposal_XYK | Proposal_Duster | Proposal_Exchange | Proposal_LBP | Proposal_MultiTransactionPayment | Proposal_NFT | Proposal_Sudo

export interface Proposal_System {
  __kind: 'System'
  value: SystemCall
}

export interface Proposal_Timestamp {
  __kind: 'Timestamp'
  value: TimestampCall
}

export interface Proposal_Balances {
  __kind: 'Balances'
  value: BalancesCall
}

export interface Proposal_Scheduler {
  __kind: 'Scheduler'
  value: SchedulerCall
}

export interface Proposal_Democracy {
  __kind: 'Democracy'
  value: DemocracyCall
}

export interface Proposal_Elections {
  __kind: 'Elections'
  value: ElectionsCall
}

export interface Proposal_Council {
  __kind: 'Council'
  value: CouncilCall
}

export interface Proposal_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeCall
}

export interface Proposal_Treasury {
  __kind: 'Treasury'
  value: TreasuryCall
}

export interface Proposal_Utility {
  __kind: 'Utility'
  value: UtilityCall
}

export interface Proposal_Vesting {
  __kind: 'Vesting'
  value: VestingCall
}

export interface Proposal_ParachainSystem {
  __kind: 'ParachainSystem'
  value: ParachainSystemCall
}

export interface Proposal_PolkadotXcm {
  __kind: 'PolkadotXcm'
  value: PolkadotXcmCall
}

export interface Proposal_CumulusXcm {
  __kind: 'CumulusXcm'
  value: CumulusXcmCall
}

export interface Proposal_XTokens {
  __kind: 'XTokens'
  value: XTokensCall
}

export interface Proposal_XcmpQueue {
  __kind: 'XcmpQueue'
  value: XcmpQueueCall
}

export interface Proposal_DmpQueue {
  __kind: 'DmpQueue'
  value: DmpQueueCall
}

export interface Proposal_Authorship {
  __kind: 'Authorship'
  value: AuthorshipCall
}

export interface Proposal_CollatorSelection {
  __kind: 'CollatorSelection'
  value: CollatorSelectionCall
}

export interface Proposal_Session {
  __kind: 'Session'
  value: SessionCall
}

export interface Proposal_Currencies {
  __kind: 'Currencies'
  value: CurrenciesCall
}

export interface Proposal_Tips {
  __kind: 'Tips'
  value: TipsCall
}

export interface Proposal_Tokens {
  __kind: 'Tokens'
  value: TokensCall
}

export interface Proposal_AssetRegistry {
  __kind: 'AssetRegistry'
  value: AssetRegistryCall
}

export interface Proposal_XYK {
  __kind: 'XYK'
  value: XYKCall
}

export interface Proposal_Duster {
  __kind: 'Duster'
  value: DusterCall
}

export interface Proposal_Exchange {
  __kind: 'Exchange'
  value: ExchangeCall
}

export interface Proposal_LBP {
  __kind: 'LBP'
  value: LBPCall
}

export interface Proposal_MultiTransactionPayment {
  __kind: 'MultiTransactionPayment'
  value: MultiTransactionPaymentCall
}

export interface Proposal_NFT {
  __kind: 'NFT'
  value: NFTCall
}

export interface Proposal_Sudo {
  __kind: 'Sudo'
  value: SudoCall
}

export type Conviction = Conviction_None | Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x

export interface Conviction_None {
  __kind: 'None'
}

export interface Conviction_Locked1x {
  __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
  __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
  __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
  __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
  __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
  __kind: 'Locked6x'
}

export type AccountVote = AccountVote_Standard | AccountVote_Split

export interface AccountVote_Standard {
  __kind: 'Standard'
  value: AccountVoteStandard
}

export interface AccountVote_Split {
  __kind: 'Split'
  value: AccountVoteSplit
}

export type Renouncing = Renouncing_Member | Renouncing_RunnerUp | Renouncing_Candidate

export interface Renouncing_Member {
  __kind: 'Member'
  value: null
}

export interface Renouncing_RunnerUp {
  __kind: 'RunnerUp'
  value: null
}

export interface Renouncing_Candidate {
  __kind: 'Candidate'
  value: number
}

export interface LBPAssetInfo {
  id: number
  amount: bigint
  initialWeight: number
  finalWeight: number
}

export type WeightCurveType = WeightCurveType_Linear

export interface WeightCurveType_Linear {
  __kind: 'Linear'
}

export interface Fee {
  numerator: number
  denominator: number
}

export interface ClassData {
  isPool: boolean
}

export interface TokenData {
  locked: boolean
}

export interface ParachainInherentData {
  validationData: PersistedValidationData
  relayChainState: StorageProof
  downwardMessages: InboundDownwardMessage[]
  horizontalMessages: [number, InboundHrmpMessage[]][]
}

export type Type_50 = Type_50_System | Type_50_Timestamp | Type_50_Balances | Type_50_Scheduler | Type_50_Democracy | Type_50_Elections | Type_50_Council | Type_50_TechnicalCommittee | Type_50_Treasury | Type_50_Utility | Type_50_Vesting | Type_50_ParachainSystem | Type_50_PolkadotXcm | Type_50_CumulusXcm | Type_50_XTokens | Type_50_XcmpQueue | Type_50_DmpQueue | Type_50_Authorship | Type_50_CollatorSelection | Type_50_Session | Type_50_Currencies | Type_50_Tips | Type_50_Tokens | Type_50_AssetRegistry | Type_50_XYK | Type_50_Duster | Type_50_Exchange | Type_50_LBP | Type_50_MultiTransactionPayment | Type_50_NFT | Type_50_Sudo

export interface Type_50_System {
  __kind: 'System'
  value: SystemCall
}

export interface Type_50_Timestamp {
  __kind: 'Timestamp'
  value: TimestampCall
}

export interface Type_50_Balances {
  __kind: 'Balances'
  value: BalancesCall
}

export interface Type_50_Scheduler {
  __kind: 'Scheduler'
  value: SchedulerCall
}

export interface Type_50_Democracy {
  __kind: 'Democracy'
  value: DemocracyCall
}

export interface Type_50_Elections {
  __kind: 'Elections'
  value: ElectionsCall
}

export interface Type_50_Council {
  __kind: 'Council'
  value: CouncilCall
}

export interface Type_50_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeCall
}

export interface Type_50_Treasury {
  __kind: 'Treasury'
  value: TreasuryCall
}

export interface Type_50_Utility {
  __kind: 'Utility'
  value: UtilityCall
}

export interface Type_50_Vesting {
  __kind: 'Vesting'
  value: VestingCall
}

export interface Type_50_ParachainSystem {
  __kind: 'ParachainSystem'
  value: ParachainSystemCall
}

export interface Type_50_PolkadotXcm {
  __kind: 'PolkadotXcm'
  value: PolkadotXcmCall
}

export interface Type_50_CumulusXcm {
  __kind: 'CumulusXcm'
  value: CumulusXcmCall
}

export interface Type_50_XTokens {
  __kind: 'XTokens'
  value: XTokensCall
}

export interface Type_50_XcmpQueue {
  __kind: 'XcmpQueue'
  value: XcmpQueueCall
}

export interface Type_50_DmpQueue {
  __kind: 'DmpQueue'
  value: DmpQueueCall
}

export interface Type_50_Authorship {
  __kind: 'Authorship'
  value: AuthorshipCall
}

export interface Type_50_CollatorSelection {
  __kind: 'CollatorSelection'
  value: CollatorSelectionCall
}

export interface Type_50_Session {
  __kind: 'Session'
  value: SessionCall
}

export interface Type_50_Currencies {
  __kind: 'Currencies'
  value: CurrenciesCall
}

export interface Type_50_Tips {
  __kind: 'Tips'
  value: TipsCall
}

export interface Type_50_Tokens {
  __kind: 'Tokens'
  value: TokensCall
}

export interface Type_50_AssetRegistry {
  __kind: 'AssetRegistry'
  value: AssetRegistryCall
}

export interface Type_50_XYK {
  __kind: 'XYK'
  value: XYKCall
}

export interface Type_50_Duster {
  __kind: 'Duster'
  value: DusterCall
}

export interface Type_50_Exchange {
  __kind: 'Exchange'
  value: ExchangeCall
}

export interface Type_50_LBP {
  __kind: 'LBP'
  value: LBPCall
}

export interface Type_50_MultiTransactionPayment {
  __kind: 'MultiTransactionPayment'
  value: MultiTransactionPaymentCall
}

export interface Type_50_NFT {
  __kind: 'NFT'
  value: NFTCall
}

export interface Type_50_Sudo {
  __kind: 'Sudo'
  value: SudoCall
}

export interface ChangesTrieConfiguration {
  digestInterval: number
  digestLevels: number
}

export interface AssetMetadata {
  symbol: Uint8Array
  decimals: number
}

export interface AssetDetails {
  name: Uint8Array
  assetType: AssetType
  existentialDeposit: bigint
  locked: boolean
}

export type UncleEntryItem = UncleEntryItem_InclusionHeight | UncleEntryItem_Uncle

export interface UncleEntryItem_InclusionHeight {
  __kind: 'InclusionHeight'
  value: number
}

export interface UncleEntryItem_Uncle {
  __kind: 'Uncle'
  value: [Uint8Array, (Uint8Array | undefined)]
}

export interface AccountData {
  free: bigint
  reserved: bigint
  miscFrozen: bigint
  feeFrozen: bigint
}

export interface BalanceLock {
  id: Uint8Array
  amount: bigint
  reasons: Reasons
}

export interface ReserveData {
  id: Uint8Array
  amount: bigint
}

export type Releases = Releases_V1 | Releases_V2 | Releases_V3 | Releases_V4 | Releases_V5 | Releases_V6 | Releases_V7 | Releases_V8 | Releases_V9 | Releases_V10

export interface Releases_V1 {
  __kind: 'V1'
}

export interface Releases_V2 {
  __kind: 'V2'
}

export interface Releases_V3 {
  __kind: 'V3'
}

export interface Releases_V4 {
  __kind: 'V4'
}

export interface Releases_V5 {
  __kind: 'V5'
}

export interface Releases_V6 {
  __kind: 'V6'
}

export interface Releases_V7 {
  __kind: 'V7'
}

export interface Releases_V8 {
  __kind: 'V8'
}

export interface Releases_V9 {
  __kind: 'V9'
}

export interface Releases_V10 {
  __kind: 'V10'
}

export interface CandidateInfo {
  who: Uint8Array
  deposit: bigint
}

export type PreimageStatus = PreimageStatus_Missing | PreimageStatus_Available

export interface PreimageStatus_Missing {
  __kind: 'Missing'
  value: number
}

export interface PreimageStatus_Available {
  __kind: 'Available'
  value: PreimageStatusAvailable
}

export type ReferendumInfo = ReferendumInfo_Ongoing | ReferendumInfo_Finished

export interface ReferendumInfo_Ongoing {
  __kind: 'Ongoing'
  value: ReferendumStatus
}

export interface ReferendumInfo_Finished {
  __kind: 'Finished'
  value: ReferendumInfoFinished
}

export type Voting = Voting_Direct | Voting_Delegating

export interface Voting_Direct {
  __kind: 'Direct'
  value: VotingDirect
}

export interface Voting_Delegating {
  __kind: 'Delegating'
  value: VotingDelegating
}

export interface ConfigData {
  maxIndividual: bigint
}

export interface PageIndexData {
  beginUsed: number
  endUsed: number
  overweightCount: bigint
}

export interface SeatHolder {
  who: Uint8Array
  stake: bigint
  deposit: bigint
}

export interface Voter {
  votes: Uint8Array[]
  stake: bigint
  deposit: bigint
}

export interface Intention {
  who: Uint8Array
  assetSell: number
  assetBuy: number
  amount: bigint
  discount: boolean
  sellOrBuy: IntentionType
}

export interface Votes {
  index: number
  threshold: number
  ayes: Uint8Array[]
  nays: Uint8Array[]
  end: number
}

export interface ClassInfoOf {
  metadata: Uint8Array
  totalIssuance: bigint
  owner: Uint8Array
  data: ClassData
}

export interface TokenInfoOf {
  metadata: Uint8Array
  owner: Uint8Array
  data: TokenData
}

export interface AbridgedHostConfiguration {
  maxCodeSize: number
  maxHeadDataSize: number
  maxUpwardQueueCount: number
  maxUpwardQueueSize: number
  maxUpwardMessageSize: number
  maxUpwardMessageNumPerCandidate: number
  hrmpMaxMessageNumPerCandidate: number
  validationUpgradeFrequency: number
  validationUpgradeDelay: number
}

export interface OutboundHrmpMessage {
  recipient: number
  data: Uint8Array
}

export interface MessagingStateSnapshot {
  relayDispatchQueueSize: [number, number]
  egressChannels: [number, AbridgedHrmpChannel][]
}

export interface PersistedValidationData {
  parentHead: Uint8Array
  relayParentNumber: number
  relayParentStorageRoot: Uint8Array
  maxPovSize: number
}

export interface Scheduled {
  maybeId: (Uint8Array | undefined)
  priority: number
  call: Type_50
  maybePeriodic: ([number, number] | undefined)
  origin: PalletsOrigin
}

export interface AccountInfo {
  nonce: number
  consumers: number
  providers: number
  sufficients: number
  data: AccountData
}

export interface ConsumedWeight {
  normal: bigint
  operational: bigint
  mandatory: bigint
}

export interface DigestOf {
  logs: DigestItem[]
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
  value: null
}

export interface Phase_Initialization {
  __kind: 'Initialization'
  value: null
}

export interface LastRuntimeUpgradeInfo {
  specVersion: number
  specName: string
}

export interface TreasuryProposal {
  proposer: Uint8Array
  value: bigint
  beneficiary: Uint8Array
  bond: bigint
}

export interface OpenTip {
  reason: Uint8Array
  who: Uint8Array
  finder: Uint8Array
  deposit: bigint
  closes: (number | undefined)
  tips: [Uint8Array, bigint][]
  findersFee: boolean
}

export type InboundStatus = InboundStatus_Ok | InboundStatus_Suspended

export interface InboundStatus_Ok {
  __kind: 'Ok'
}

export interface InboundStatus_Suspended {
  __kind: 'Suspended'
}

export type XcmpMessageFormat = XcmpMessageFormat_ConcatenatedVersionedXcm | XcmpMessageFormat_ConcatenatedEncodedBlob | XcmpMessageFormat_Signals

export interface XcmpMessageFormat_ConcatenatedVersionedXcm {
  __kind: 'ConcatenatedVersionedXcm'
}

export interface XcmpMessageFormat_ConcatenatedEncodedBlob {
  __kind: 'ConcatenatedEncodedBlob'
}

export interface XcmpMessageFormat_Signals {
  __kind: 'Signals'
}

export type OutboundStatus = OutboundStatus_Ok | OutboundStatus_Suspended

export interface OutboundStatus_Ok {
  __kind: 'Ok'
}

export interface OutboundStatus_Suspended {
  __kind: 'Suspended'
}

export interface QueueConfigData {
  suspendThreshold: number
  dropThreshold: number
  resumeThreshold: number
  thresholdWeight: bigint
  weightRestrictDecay: bigint
}

export interface BlockLength {
  max: PerDispatchClassU32
}

export interface BlockWeights {
  baseBlock: bigint
  maxBlock: bigint
  perClass: PerDispatchClassWeightsPerClass
}

export interface RuntimeDbWeight {
  read: bigint
  write: bigint
}

export interface RuntimeVersion {
  specName: string
  implName: string
  authoringVersion: number
  specVersion: number
  implVersion: number
  apis: [Uint8Array, number][]
  transactionVersion: number
}

export interface WeightToFeeCoefficient {
  coeffInteger: bigint
  coeffFrac: number
  negative: boolean
  degree: number
}

export type JunctionV0 = JunctionV0_Parent | JunctionV0_Parachain | JunctionV0_AccountId32 | JunctionV0_AccountIndex64 | JunctionV0_AccountKey20 | JunctionV0_PalletInstance | JunctionV0_GeneralIndex | JunctionV0_GeneralKey | JunctionV0_OnlyChild | JunctionV0_Plurality

export interface JunctionV0_Parent {
  __kind: 'Parent'
  value: null
}

export interface JunctionV0_Parachain {
  __kind: 'Parachain'
  value: number
}

export interface JunctionV0_AccountId32 {
  __kind: 'AccountId32'
  network: NetworkId
  id: Uint8Array
}

export interface JunctionV0_AccountIndex64 {
  __kind: 'AccountIndex64'
  network: NetworkId
  index: bigint
}

export interface JunctionV0_AccountKey20 {
  __kind: 'AccountKey20'
  network: NetworkId
  key: Uint8Array
}

export interface JunctionV0_PalletInstance {
  __kind: 'PalletInstance'
  value: number
}

export interface JunctionV0_GeneralIndex {
  __kind: 'GeneralIndex'
  value: bigint
}

export interface JunctionV0_GeneralKey {
  __kind: 'GeneralKey'
  value: Uint8Array
}

export interface JunctionV0_OnlyChild {
  __kind: 'OnlyChild'
  value: null
}

export interface JunctionV0_Plurality {
  __kind: 'Plurality'
  id: BodyId
  part: BodyPart
}

export interface DispatchErrorModule {
  index: number
  error: number
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Underflow | TokenError_Overflow

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

export interface TokenError_Underflow {
  __kind: 'Underflow'
}

export interface TokenError_Overflow {
  __kind: 'Overflow'
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

export type XcmErrorV0 = XcmErrorV0_Undefined | XcmErrorV0_Overflow | XcmErrorV0_Unimplemented | XcmErrorV0_UnhandledXcmVersion | XcmErrorV0_UnhandledXcmMessage | XcmErrorV0_UnhandledEffect | XcmErrorV0_EscalationOfPrivilege | XcmErrorV0_UntrustedReserveLocation | XcmErrorV0_UntrustedTeleportLocation | XcmErrorV0_DestinationBufferOverflow | XcmErrorV0_SendFailed | XcmErrorV0_CannotReachDestination | XcmErrorV0_MultiLocationFull | XcmErrorV0_FailedToDecode | XcmErrorV0_BadOrigin | XcmErrorV0_ExceedsMaxMessageSize | XcmErrorV0_FailedToTransactAsset | XcmErrorV0_WeightLimitReached | XcmErrorV0_Wildcard | XcmErrorV0_TooMuchWeightRequired | XcmErrorV0_NotHoldingFees | XcmErrorV0_WeightNotComputable | XcmErrorV0_Barrier | XcmErrorV0_NotWithdrawable | XcmErrorV0_LocationCannotHold | XcmErrorV0_TooExpensive | XcmErrorV0_AssetNotFound | XcmErrorV0_RecursionLimitReached

export interface XcmErrorV0_Undefined {
  __kind: 'Undefined'
  value: null
}

export interface XcmErrorV0_Overflow {
  __kind: 'Overflow'
  value: null
}

export interface XcmErrorV0_Unimplemented {
  __kind: 'Unimplemented'
  value: null
}

export interface XcmErrorV0_UnhandledXcmVersion {
  __kind: 'UnhandledXcmVersion'
  value: null
}

export interface XcmErrorV0_UnhandledXcmMessage {
  __kind: 'UnhandledXcmMessage'
  value: null
}

export interface XcmErrorV0_UnhandledEffect {
  __kind: 'UnhandledEffect'
  value: null
}

export interface XcmErrorV0_EscalationOfPrivilege {
  __kind: 'EscalationOfPrivilege'
  value: null
}

export interface XcmErrorV0_UntrustedReserveLocation {
  __kind: 'UntrustedReserveLocation'
  value: null
}

export interface XcmErrorV0_UntrustedTeleportLocation {
  __kind: 'UntrustedTeleportLocation'
  value: null
}

export interface XcmErrorV0_DestinationBufferOverflow {
  __kind: 'DestinationBufferOverflow'
  value: null
}

export interface XcmErrorV0_SendFailed {
  __kind: 'SendFailed'
  value: null
}

export interface XcmErrorV0_CannotReachDestination {
  __kind: 'CannotReachDestination'
  value: [MultiLocation, Xcm]
}

export interface XcmErrorV0_MultiLocationFull {
  __kind: 'MultiLocationFull'
  value: null
}

export interface XcmErrorV0_FailedToDecode {
  __kind: 'FailedToDecode'
  value: null
}

export interface XcmErrorV0_BadOrigin {
  __kind: 'BadOrigin'
  value: null
}

export interface XcmErrorV0_ExceedsMaxMessageSize {
  __kind: 'ExceedsMaxMessageSize'
  value: null
}

export interface XcmErrorV0_FailedToTransactAsset {
  __kind: 'FailedToTransactAsset'
  value: null
}

export interface XcmErrorV0_WeightLimitReached {
  __kind: 'WeightLimitReached'
  value: bigint
}

export interface XcmErrorV0_Wildcard {
  __kind: 'Wildcard'
  value: null
}

export interface XcmErrorV0_TooMuchWeightRequired {
  __kind: 'TooMuchWeightRequired'
  value: null
}

export interface XcmErrorV0_NotHoldingFees {
  __kind: 'NotHoldingFees'
  value: null
}

export interface XcmErrorV0_WeightNotComputable {
  __kind: 'WeightNotComputable'
  value: null
}

export interface XcmErrorV0_Barrier {
  __kind: 'Barrier'
  value: null
}

export interface XcmErrorV0_NotWithdrawable {
  __kind: 'NotWithdrawable'
  value: null
}

export interface XcmErrorV0_LocationCannotHold {
  __kind: 'LocationCannotHold'
  value: null
}

export interface XcmErrorV0_TooExpensive {
  __kind: 'TooExpensive'
  value: null
}

export interface XcmErrorV0_AssetNotFound {
  __kind: 'AssetNotFound'
  value: null
}

export interface XcmErrorV0_RecursionLimitReached {
  __kind: 'RecursionLimitReached'
  value: null
}

export type MultiAssetV0 = MultiAssetV0_None | MultiAssetV0_All | MultiAssetV0_AllFungible | MultiAssetV0_AllNonFungible | MultiAssetV0_AllAbstractFungible | MultiAssetV0_AllAbstractNonFungible | MultiAssetV0_AllConcreteFungible | MultiAssetV0_AllConcreteNonFungible | MultiAssetV0_AbstractFungible | MultiAssetV0_AbstractNonFungible | MultiAssetV0_ConcreteFungible | MultiAssetV0_ConcreteNonFungible

export interface MultiAssetV0_None {
  __kind: 'None'
  value: null
}

export interface MultiAssetV0_All {
  __kind: 'All'
  value: null
}

export interface MultiAssetV0_AllFungible {
  __kind: 'AllFungible'
  value: null
}

export interface MultiAssetV0_AllNonFungible {
  __kind: 'AllNonFungible'
  value: null
}

export interface MultiAssetV0_AllAbstractFungible {
  __kind: 'AllAbstractFungible'
  value: Uint8Array
}

export interface MultiAssetV0_AllAbstractNonFungible {
  __kind: 'AllAbstractNonFungible'
  value: Uint8Array
}

export interface MultiAssetV0_AllConcreteFungible {
  __kind: 'AllConcreteFungible'
  value: MultiLocationV0
}

export interface MultiAssetV0_AllConcreteNonFungible {
  __kind: 'AllConcreteNonFungible'
  value: MultiLocationV0
}

export interface MultiAssetV0_AbstractFungible {
  __kind: 'AbstractFungible'
  id: Uint8Array
  instance: bigint
}

export interface MultiAssetV0_AbstractNonFungible {
  __kind: 'AbstractNonFungible'
  class: Uint8Array
  instance: AssetInstanceV0
}

export interface MultiAssetV0_ConcreteFungible {
  __kind: 'ConcreteFungible'
  id: MultiLocationV0
  amount: bigint
}

export interface MultiAssetV0_ConcreteNonFungible {
  __kind: 'ConcreteNonFungible'
  class: MultiLocationV0
  instance: AssetInstanceV0
}

export type XcmOrderV0 = XcmOrderV0_Null | XcmOrderV0_DepositAsset | XcmOrderV0_DepositReserveAsset | XcmOrderV0_ExchangeAsset | XcmOrderV0_InitiateReserveWithdraw | XcmOrderV0_InitiateTeleport | XcmOrderV0_QueryHolding | XcmOrderV0_BuyExecution

export interface XcmOrderV0_Null {
  __kind: 'Null'
  value: null
}

export interface XcmOrderV0_DepositAsset {
  __kind: 'DepositAsset'
  assets: MultiAssetV0[]
  dest: MultiLocationV0
}

export interface XcmOrderV0_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: MultiAssetV0[]
  dest: MultiLocationV0
  effects: XcmOrderV0[]
}

export interface XcmOrderV0_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: MultiAssetV0[]
  receive: MultiAssetV0[]
}

export interface XcmOrderV0_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: MultiAssetV0[]
  reserve: MultiLocationV0
  effects: XcmOrderV0[]
}

export interface XcmOrderV0_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: MultiAsset[]
  dest: MultiLocationV0
  effects: XcmOrderV0[]
}

export interface XcmOrderV0_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: MultiLocationV0
  assets: MultiAssetV0[]
}

export interface XcmOrderV0_BuyExecution {
  __kind: 'BuyExecution'
  fees: MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  xcm: XcmV0[]
}

export type ResponseV0 = ResponseV0_Assets

export interface ResponseV0_Assets {
  __kind: 'Assets'
  value: MultiAssetV0[]
}

export type MultiLocationV0 = MultiLocationV0_Here | MultiLocationV0_X1 | MultiLocationV0_X2 | MultiLocationV0_X3 | MultiLocationV0_X4 | MultiLocationV0_X5 | MultiLocationV0_X6 | MultiLocationV0_X7 | MultiLocationV0_X8

export interface MultiLocationV0_Here {
  __kind: 'Here'
  value: null
}

export interface MultiLocationV0_X1 {
  __kind: 'X1'
  value: JunctionV0
}

export interface MultiLocationV0_X2 {
  __kind: 'X2'
  value: [JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X3 {
  __kind: 'X3'
  value: [JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X4 {
  __kind: 'X4'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X5 {
  __kind: 'X5'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X6 {
  __kind: 'X6'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X7 {
  __kind: 'X7'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export interface MultiLocationV0_X8 {
  __kind: 'X8'
  value: [JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]
}

export type XcmOriginKind = XcmOriginKind_Native | XcmOriginKind_SovereignAccount | XcmOriginKind_Superuser | XcmOriginKind_Xcm

export interface XcmOriginKind_Native {
  __kind: 'Native'
}

export interface XcmOriginKind_SovereignAccount {
  __kind: 'SovereignAccount'
}

export interface XcmOriginKind_Superuser {
  __kind: 'Superuser'
}

export interface XcmOriginKind_Xcm {
  __kind: 'Xcm'
}

export interface DoubleEncodedCall {
  encoded: Uint8Array
}

export type XcmV0 = XcmV0_WithdrawAsset | XcmV0_ReserveAssetDeposit | XcmV0_ReceiveTeleportedAsset | XcmV0_QueryResponse | XcmV0_TransferAsset | XcmV0_TransferReserveAsset | XcmV0_Transact | XcmV0_HrmpNewChannelOpenRequest | XcmV0_HrmpChannelAccepted | XcmV0_HrmpChannelClosing | XcmV0_RelayedFrom

export interface XcmV0_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: MultiAssetV0[]
  effects: XcmOrderV0[]
}

export interface XcmV0_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: MultiAssetV0[]
  effects: XcmOrderV0[]
}

export interface XcmV0_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: MultiAssetV0[]
  effects: XcmOrderV0[]
}

export interface XcmV0_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: ResponseV0
}

export interface XcmV0_TransferAsset {
  __kind: 'TransferAsset'
  assets: MultiAssetV0[]
  dest: MultiLocationV0
}

export interface XcmV0_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: MultiAssetV0[]
  dest: MultiLocationV0
  effects: XcmOrderV0[]
}

export interface XcmV0_Transact {
  __kind: 'Transact'
  originType: XcmOriginKind
  requireWeightAtMost: bigint
  call: DoubleEncodedCall
}

export interface XcmV0_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface XcmV0_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface XcmV0_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface XcmV0_RelayedFrom {
  __kind: 'RelayedFrom'
  who: MultiLocationV0
  message: XcmV0
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

export type AssetInstanceV0 = AssetInstanceV0_Undefined | AssetInstanceV0_Index8 | AssetInstanceV0_Index16 | AssetInstanceV0_Index32 | AssetInstanceV0_Index64 | AssetInstanceV0_Index128 | AssetInstanceV0_Array4 | AssetInstanceV0_Array8 | AssetInstanceV0_Array16 | AssetInstanceV0_Array32 | AssetInstanceV0_Blob

export interface AssetInstanceV0_Undefined {
  __kind: 'Undefined'
  value: null
}

export interface AssetInstanceV0_Index8 {
  __kind: 'Index8'
  value: number
}

export interface AssetInstanceV0_Index16 {
  __kind: 'Index16'
  value: number
}

export interface AssetInstanceV0_Index32 {
  __kind: 'Index32'
  value: number
}

export interface AssetInstanceV0_Index64 {
  __kind: 'Index64'
  value: bigint
}

export interface AssetInstanceV0_Index128 {
  __kind: 'Index128'
  value: bigint
}

export interface AssetInstanceV0_Array4 {
  __kind: 'Array4'
  value: Uint8Array
}

export interface AssetInstanceV0_Array8 {
  __kind: 'Array8'
  value: Uint8Array
}

export interface AssetInstanceV0_Array16 {
  __kind: 'Array16'
  value: Uint8Array
}

export interface AssetInstanceV0_Array32 {
  __kind: 'Array32'
  value: Uint8Array
}

export interface AssetInstanceV0_Blob {
  __kind: 'Blob'
  value: Uint8Array
}

export interface Digest {
  logs: DigestItem[]
}

export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_changes_trie_config | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 *  A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
  __kind: 'fill_block'
  ratio: number
}

/**
 *  Make some on-chain remark.
 * 
 *  # <weight>
 *  - `O(1)`
 *  # </weight>
 */
export interface SystemCall_remark {
  __kind: 'remark'
  remark: Uint8Array
}

/**
 *  Set the number of pages in the WebAssembly environment's heap.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write.
 *  - Base Weight: 1.405 µs
 *  - 1 write to HEAP_PAGES
 *  # </weight>
 */
export interface SystemCall_set_heap_pages {
  __kind: 'set_heap_pages'
  pages: bigint
}

/**
 *  Set the new runtime code.
 * 
 *  # <weight>
 *  - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is expensive).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime, but generally this is very expensive.
 *  We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code {
  __kind: 'set_code'
  code: Uint8Array
}

/**
 *  Set the new runtime code without doing any checks of the given `code`.
 * 
 *  # <weight>
 *  - `O(C)` where `C` length of `code`
 *  - 1 storage write (codec `O(C)`).
 *  - 1 event.
 *  The weight of this function is dependent on the runtime. We will treat this as a full block.
 *  # </weight>
 */
export interface SystemCall_set_code_without_checks {
  __kind: 'set_code_without_checks'
  code: Uint8Array
}

/**
 *  Set the new changes trie configuration.
 * 
 *  # <weight>
 *  - `O(1)`
 *  - 1 storage write or delete (codec `O(1)`).
 *  - 1 call to `deposit_log`: Uses `append` API, so O(1)
 *  - Base Weight: 7.218 µs
 *  - DB Weight:
 *      - Writes: Changes Trie, System Digest
 *  # </weight>
 */
export interface SystemCall_set_changes_trie_config {
  __kind: 'set_changes_trie_config'
  changesTrieConfig: (ChangesTrieConfiguration | undefined)
}

/**
 *  Set some items of storage.
 * 
 *  # <weight>
 *  - `O(I)` where `I` length of `items`
 *  - `I` storage writes (`O(1)`).
 *  - Base Weight: 0.568 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_set_storage {
  __kind: 'set_storage'
  items: [Uint8Array, Uint8Array][]
}

/**
 *  Kill some items from storage.
 * 
 *  # <weight>
 *  - `O(IK)` where `I` length of `keys` and `K` length of one key
 *  - `I` storage deletions.
 *  - Base Weight: .378 * i µs
 *  - Writes: Number of items
 *  # </weight>
 */
export interface SystemCall_kill_storage {
  __kind: 'kill_storage'
  keys: Uint8Array[]
}

/**
 *  Kill all storage items with a key that starts with the given prefix.
 * 
 *  **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 *  the prefix we are removing to accurately calculate the weight of this function.
 * 
 *  # <weight>
 *  - `O(P)` where `P` amount of keys with prefix `prefix`
 *  - `P` storage deletions.
 *  - Base Weight: 0.834 * P µs
 *  - Writes: Number of subkeys + 1
 *  # </weight>
 */
export interface SystemCall_kill_prefix {
  __kind: 'kill_prefix'
  prefix: Uint8Array
  subkeys: number
}

/**
 *  Make some on-chain remark and emit event.
 * 
 *  # <weight>
 *  - `O(b)` where b is the length of the remark.
 *  - 1 event.
 *  # </weight>
 */
export interface SystemCall_remark_with_event {
  __kind: 'remark_with_event'
  remark: Uint8Array
}

export type TimestampCall = TimestampCall_set

/**
 *  Set the current time.
 * 
 *  This call should be invoked exactly once per block. It will panic at the finalization
 *  phase, if this call hasn't been invoked by that time.
 * 
 *  The timestamp should be greater than the previous one by the amount specified by
 *  `MinimumPeriod`.
 * 
 *  The dispatch origin for this call must be `Inherent`.
 * 
 *  # <weight>
 *  - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 *  - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in `on_finalize`)
 *  - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 *  # </weight>
 */
export interface TimestampCall_set {
  __kind: 'set'
  now: bigint
}

export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all

/**
 *  Transfer some liquid free balance to another account.
 * 
 *  `transfer` will set the `FreeBalance` of the sender and receiver.
 *  It will decrease the total issuance of the system by the `TransferFee`.
 *  If the sender's account is below the existential deposit as a result
 *  of the transfer, the account will be reaped.
 * 
 *  The dispatch origin for this call must be `Signed` by the transactor.
 * 
 *  # <weight>
 *  - Dependent on arguments but not critical, given proper implementations for
 *    input config types. See related functions below.
 *  - It contains a limited number of reads and writes internally and no complex computation.
 * 
 *  Related functions:
 * 
 *    - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *    - Transferring balances to accounts that did not exist before will cause
 *       `T::OnNewAccount::on_new_account` to be called.
 *    - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *    - `transfer_keep_alive` works the same way as `transfer`, but has an additional
 *      check that the transfer will not kill the origin account.
 *  ---------------------------------
 *  - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
 *  - DB Weight: 1 Read and 1 Write to destination account
 *  - Origin account is already in memory, so no DB operations for them.
 *  # </weight>
 */
export interface BalancesCall_transfer {
  __kind: 'transfer'
  dest: Uint8Array
  value: bigint
}

/**
 *  Set the balances of a given account.
 * 
 *  This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 *  also decrease the total issuance of the system (`TotalIssuance`).
 *  If the new free or reserved balance is below the existential deposit,
 *  it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 *  The dispatch origin for this call is `root`.
 * 
 *  # <weight>
 *  - Independent of the arguments.
 *  - Contains a limited number of reads and writes.
 *  ---------------------
 *  - Base Weight:
 *      - Creating: 27.56 µs
 *      - Killing: 35.11 µs
 *  - DB Weight: 1 Read, 1 Write to `who`
 *  # </weight>
 */
export interface BalancesCall_set_balance {
  __kind: 'set_balance'
  who: Uint8Array
  newFree: bigint
  newReserved: bigint
}

/**
 *  Exactly as `transfer`, except the origin must be root and the source account may be
 *  specified.
 *  # <weight>
 *  - Same as transfer, but additional read and write because the source account is
 *    not assumed to be in the overlay.
 *  # </weight>
 */
export interface BalancesCall_force_transfer {
  __kind: 'force_transfer'
  source: Uint8Array
  dest: Uint8Array
  value: bigint
}

/**
 *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
 *  origin account.
 * 
 *  99% of the time you want [`transfer`] instead.
 * 
 *  [`transfer`]: struct.Pallet.html#method.transfer
 *  # <weight>
 *  - Cheaper than transfer because account cannot be killed.
 *  - Base Weight: 51.4 µs
 *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
 *  #</weight>
 */
export interface BalancesCall_transfer_keep_alive {
  __kind: 'transfer_keep_alive'
  dest: Uint8Array
  value: bigint
}

/**
 *  Transfer the entire transferable balance from the caller account.
 * 
 *  NOTE: This function only attempts to transfer _transferable_ balances. This means that
 *  any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 *  transferred by this function. To ensure that this function results in a killed account,
 *  you might need to prepare the account by removing any reference counters, storage
 *  deposits, etc...
 * 
 *  The dispatch origin of this call must be Signed.
 * 
 *  - `dest`: The recipient of the transfer.
 *  - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *    of the funds the account has, causing the sender account to be killed (false), or
 *    transfer everything except at least the existential deposit, which will guarantee to
 *    keep the sender account alive (true).
 *    # <weight>
 *  - O(1). Just like transfer, but reading the user's transferable balance first.
 *    #</weight>
 */
export interface BalancesCall_transfer_all {
  __kind: 'transfer_all'
  dest: Uint8Array
  keepAlive: boolean
}

export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 *  Anonymously schedule a task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 22.29 + .126 * S µs
 *  - DB Weight:
 *      - Read: Agenda
 *      - Write: Agenda
 *  - Will use base weight of 25 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_schedule {
  __kind: 'schedule'
  when: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: Type_50
}

/**
 *  Cancel an anonymously scheduled task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 22.15 + 2.869 * S µs
 *  - DB Weight:
 *      - Read: Agenda
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_cancel {
  __kind: 'cancel'
  when: number
  index: number
}

/**
 *  Schedule a named task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 29.6 + .159 * S µs
 *  - DB Weight:
 *      - Read: Agenda, Lookup
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 35 which should be good for more than 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_schedule_named {
  __kind: 'schedule_named'
  id: Uint8Array
  when: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: Type_50
}

/**
 *  Cancel a named scheduled task.
 * 
 *  # <weight>
 *  - S = Number of already scheduled calls
 *  - Base Weight: 24.91 + 2.907 * S µs
 *  - DB Weight:
 *      - Read: Agenda, Lookup
 *      - Write: Agenda, Lookup
 *  - Will use base weight of 100 which should be good for up to 30 scheduled calls
 *  # </weight>
 */
export interface SchedulerCall_cancel_named {
  __kind: 'cancel_named'
  id: Uint8Array
}

/**
 *  Anonymously schedule a task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule`].
 *  # </weight>
 */
export interface SchedulerCall_schedule_after {
  __kind: 'schedule_after'
  after: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: Type_50
}

/**
 *  Schedule a named task after a delay.
 * 
 *  # <weight>
 *  Same as [`schedule_named`](Self::schedule_named).
 *  # </weight>
 */
export interface SchedulerCall_schedule_named_after {
  __kind: 'schedule_named_after'
  id: Uint8Array
  after: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: Type_50
}

export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_cancel_queued | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_reap_preimage | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_enact_proposal | DemocracyCall_blacklist | DemocracyCall_cancel_proposal

/**
 *  Propose a sensitive action to be taken.
 * 
 *  The dispatch origin of this call must be _Signed_ and the sender must
 *  have funds to cover the deposit.
 * 
 *  - `proposal_hash`: The hash of the proposal preimage.
 *  - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 *  Emits `Proposed`.
 * 
 *  Weight: `O(p)`
 */
export interface DemocracyCall_propose {
  __kind: 'propose'
  proposalHash: Uint8Array
  value: bigint
}

/**
 *  Signals agreement with a particular proposal.
 * 
 *  The dispatch origin of this call must be _Signed_ and the sender
 *  must have funds to cover the deposit, equal to the original deposit.
 * 
 *  - `proposal`: The index of the proposal to second.
 *  - `seconds_upper_bound`: an upper bound on the current number of seconds on this
 *    proposal. Extrinsic is weighted according to this value with no refund.
 * 
 *  Weight: `O(S)` where S is the number of seconds a proposal already has.
 */
export interface DemocracyCall_second {
  __kind: 'second'
  proposal: number
  secondsUpperBound: number
}

/**
 *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 *  otherwise it is a vote to keep the status quo.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `ref_index`: The index of the referendum to vote for.
 *  - `vote`: The vote configuration.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter has voted on.
 */
export interface DemocracyCall_vote {
  __kind: 'vote'
  refIndex: number
  vote: AccountVote
}

/**
 *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 *  referendum.
 * 
 *  The dispatch origin of this call must be `CancellationOrigin`.
 * 
 *  -`ref_index`: The index of the referendum to cancel.
 * 
 *  Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
  __kind: 'emergency_cancel'
  refIndex: number
}

/**
 *  Schedule a referendum to be tabled once it is legal to schedule an external
 *  referendum.
 * 
 *  The dispatch origin of this call must be `ExternalOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
 *    Decoding vec of length V. Charged as maximum
 */
export interface DemocracyCall_external_propose {
  __kind: 'external_propose'
  proposalHash: Uint8Array
}

/**
 *  Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 *  an external referendum.
 * 
 *  The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
  __kind: 'external_propose_majority'
  proposalHash: Uint8Array
}

/**
 *  Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 *  schedule an external referendum.
 * 
 *  The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal.
 * 
 *  Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 *  pre-scheduled `external_propose` call.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
  __kind: 'external_propose_default'
  proposalHash: Uint8Array
}

/**
 *  Schedule the currently externally-proposed majority-carries referendum to be tabled
 *  immediately. If there is no externally-proposed referendum currently, or if there is one
 *  but it is not a majority-carries referendum then it fails.
 * 
 *  The dispatch of this call must be `FastTrackOrigin`.
 * 
 *  - `proposal_hash`: The hash of the current external proposal.
 *  - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 *    `FastTrackVotingPeriod` if too low.
 *  - `delay`: The number of block after voting has ended in approval and this should be
 *    enacted. This doesn't have a minimum amount.
 * 
 *  Emits `Started`.
 * 
 *  Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
  __kind: 'fast_track'
  proposalHash: Uint8Array
  votingPeriod: number
  delay: number
}

/**
 *  Veto and blacklist the external proposal hash.
 * 
 *  The dispatch origin of this call must be `VetoOrigin`.
 * 
 *  - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 *  Emits `Vetoed`.
 * 
 *  Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
  __kind: 'veto_external'
  proposalHash: Uint8Array
}

/**
 *  Remove a referendum.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `ref_index`: The index of the referendum to cancel.
 * 
 *  # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
  __kind: 'cancel_referendum'
  refIndex: number
}

/**
 *  Cancel a proposal queued for enactment.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  - `which`: The index of the referendum to cancel.
 * 
 *  Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
 */
export interface DemocracyCall_cancel_queued {
  __kind: 'cancel_queued'
  which: number
}

/**
 *  Delegate the voting power (with some given conviction) of the sending account.
 * 
 *  The balance delegated is locked for as long as it's delegated, and thereafter for the
 *  time appropriate for the conviction's lock period.
 * 
 *  The dispatch origin of this call must be _Signed_, and the signing account must either:
 *    - be delegating already; or
 *    - have no voting activity (if there is, then it will need to be removed/consolidated
 *      through `reap_vote` or `unvote`).
 * 
 *  - `to`: The account whose voting the `target` account's voting power will follow.
 *  - `conviction`: The conviction that will be attached to the delegated votes. When the
 *    account is undelegated, the funds will be locked for the corresponding period.
 *  - `balance`: The amount of the account's balance to be used in delegating. This must
 *    not be more than the account's current balance.
 * 
 *  Emits `Delegated`.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_delegate {
  __kind: 'delegate'
  to: Uint8Array
  conviction: Conviction
  balance: bigint
}

/**
 *  Undelegate the voting power of the sending account.
 * 
 *  Tokens may be unlocked following once an amount of time consistent with the lock period
 *  of the conviction with which the delegation was issued.
 * 
 *  The dispatch origin of this call must be _Signed_ and the signing account must be
 *  currently delegating.
 * 
 *  Emits `Undelegated`.
 * 
 *  Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *    voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_undelegate {
  __kind: 'undelegate'
}

/**
 *  Clears all public proposals.
 * 
 *  The dispatch origin of this call must be _Root_.
 * 
 *  Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
  __kind: 'clear_public_proposals'
}

/**
 *  Register the preimage for an upcoming proposal. This doesn't require the proposal to be
 *  in the dispatch queue but does require a deposit, returned once enacted.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `encoded_proposal`: The preimage of a proposal.
 * 
 *  Emits `PreimageNoted`.
 * 
 *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_preimage {
  __kind: 'note_preimage'
  encodedProposal: Uint8Array
}

/**
 *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_preimage_operational {
  __kind: 'note_preimage_operational'
  encodedProposal: Uint8Array
}

/**
 *  Register the preimage for an upcoming proposal. This requires the proposal to be
 *  in the dispatch queue. No deposit is needed. When this call is successful, i.e.
 *  the preimage has not been uploaded before and matches some imminent proposal,
 *  no fee is paid.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `encoded_proposal`: The preimage of a proposal.
 * 
 *  Emits `PreimageNoted`.
 * 
 *  Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_imminent_preimage {
  __kind: 'note_imminent_preimage'
  encodedProposal: Uint8Array
}

/**
 *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_imminent_preimage_operational {
  __kind: 'note_imminent_preimage_operational'
  encodedProposal: Uint8Array
}

/**
 *  Remove an expired proposal preimage and collect the deposit.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `proposal_hash`: The preimage hash of a proposal.
 *  - `proposal_length_upper_bound`: an upper bound on length of the proposal.
 *    Extrinsic is weighted according to this value with no refund.
 * 
 *  This will only work after `VotingPeriod` blocks from the time that the preimage was
 *  noted, if it's the same account doing it. If it's a different account, then it'll only
 *  work an additional `EnactmentPeriod` later.
 * 
 *  Emits `PreimageReaped`.
 * 
 *  Weight: `O(D)` where D is length of proposal.
 */
export interface DemocracyCall_reap_preimage {
  __kind: 'reap_preimage'
  proposalHash: Uint8Array
  proposalLenUpperBound: number
}

/**
 *  Unlock tokens that have an expired lock.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `target`: The account to remove the lock on.
 * 
 *  Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
  __kind: 'unlock'
  target: Uint8Array
}

/**
 *  Remove a vote for a referendum.
 * 
 *  If:
 *  - the referendum was cancelled, or
 *  - the referendum is ongoing, or
 *  - the referendum has ended such that
 *    - the vote of the account was in opposition to the result; or
 *    - there was no conviction to the account's vote; or
 *    - the account made a split vote
 *  ...then the vote is removed cleanly and a following call to `unlock` may result in more
 *  funds being available.
 * 
 *  If, however, the referendum has ended and:
 *  - it finished corresponding to the vote of the account, and
 *  - the account made a standard vote with conviction, and
 *  - the lock period of the conviction is not over
 *  ...then the lock will be aggregated into the overall account's lock, which may involve
 *  *overlocking* (where the two locks are combined into a single lock that is the maximum
 *  of both the amount locked and the time is it locked for).
 * 
 *  The dispatch origin of this call must be _Signed_, and the signer must have a vote
 *  registered for referendum `index`.
 * 
 *  - `index`: The index of referendum of the vote to be removed.
 * 
 *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_vote {
  __kind: 'remove_vote'
  index: number
}

/**
 *  Remove a vote for a referendum.
 * 
 *  If the `target` is equal to the signer, then this function is exactly equivalent to
 *  `remove_vote`. If not equal to the signer, then the vote must have expired,
 *  either because the referendum was cancelled, because the voter lost the referendum or
 *  because the conviction period is over.
 * 
 *  The dispatch origin of this call must be _Signed_.
 * 
 *  - `target`: The account of the vote to be removed; this account must have voted for
 *    referendum `index`.
 *  - `index`: The index of referendum of the vote to be removed.
 * 
 *  Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *    Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_other_vote {
  __kind: 'remove_other_vote'
  target: Uint8Array
  index: number
}

/**
 *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
  __kind: 'enact_proposal'
  proposalHash: Uint8Array
  index: number
}

/**
 *  Permanently place a proposal into the blacklist. This prevents it from ever being
 *  proposed again.
 * 
 *  If called on a queued public or external proposal, then this will result in it being
 *  removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 *  then it will be cancelled.
 * 
 *  The dispatch origin of this call must be `BlacklistOrigin`.
 * 
 *  - `proposal_hash`: The proposal hash to blacklist permanently.
 *  - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 *  cancelled.
 * 
 *  Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *    reasonable value).
 */
export interface DemocracyCall_blacklist {
  __kind: 'blacklist'
  proposalHash: Uint8Array
  maybeRefIndex: (number | undefined)
}

/**
 *  Remove a proposal.
 * 
 *  The dispatch origin of this call must be `CancelProposalOrigin`.
 * 
 *  - `prop_index`: The index of the proposal to cancel.
 * 
 *  Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
  __kind: 'cancel_proposal'
  propIndex: number
}

export type ElectionsCall = ElectionsCall_vote | ElectionsCall_remove_voter | ElectionsCall_submit_candidacy | ElectionsCall_renounce_candidacy | ElectionsCall_remove_member | ElectionsCall_clean_defunct_voters

/**
 *  Vote for a set of candidates for the upcoming round of election. This can be called to
 *  set the initial votes, or update already existing votes.
 * 
 *  Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
 *  reserved. The deposit is based on the number of votes and can be updated over time.
 * 
 *  The `votes` should:
 *    - not be empty.
 *    - be less than the number of possible candidates. Note that all current members and
 *      runners-up are also automatically candidates for the next round.
 * 
 *  If `value` is more than `who`'s total balance, then the maximum of the two is used.
 * 
 *  The dispatch origin of this call must be signed.
 * 
 *  ### Warning
 * 
 *  It is the responsibility of the caller to **NOT** place all of their balance into the
 *  lock and keep some for further operations.
 * 
 *  # <weight>
 *  We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
 *  # </weight>
 */
export interface ElectionsCall_vote {
  __kind: 'vote'
  votes: Uint8Array[]
  value: bigint
}

/**
 *  Remove `origin` as a voter.
 * 
 *  This removes the lock and returns the deposit.
 * 
 *  The dispatch origin of this call must be signed and be a voter.
 */
export interface ElectionsCall_remove_voter {
  __kind: 'remove_voter'
}

/**
 *  Submit oneself for candidacy. A fixed amount of deposit is recorded.
 * 
 *  All candidates are wiped at the end of the term. They either become a member/runner-up,
 *  or leave the system while their deposit is slashed.
 * 
 *  The dispatch origin of this call must be signed.
 * 
 *  ### Warning
 * 
 *  Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
 *  to get their deposit back. Losing the spot in an election will always lead to a slash.
 * 
 *  # <weight>
 *  The number of current candidates must be provided as witness data.
 *  # </weight>
 */
export interface ElectionsCall_submit_candidacy {
  __kind: 'submit_candidacy'
  candidateCount: number
}

/**
 *  Renounce one's intention to be a candidate for the next election round. 3 potential
 *  outcomes exist:
 * 
 *  - `origin` is a candidate and not elected in any set. In this case, the deposit is
 *    unreserved, returned and origin is removed as a candidate.
 *  - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
 *    origin is removed as a runner-up.
 *  - `origin` is a current member. In this case, the deposit is unreserved and origin is
 *    removed as a member, consequently not being a candidate for the next round anymore.
 *    Similar to [`remove_member`](Self::remove_member), if replacement runners exists,
 *    they are immediately used. If the prime is renouncing, then no prime will exist until
 *    the next round.
 * 
 *  The dispatch origin of this call must be signed, and have one of the above roles.
 * 
 *  # <weight>
 *  The type of renouncing must be provided as witness data.
 *  # </weight>
 */
export interface ElectionsCall_renounce_candidacy {
  __kind: 'renounce_candidacy'
  renouncing: Renouncing
}

/**
 *  Remove a particular member from the set. This is effective immediately and the bond of
 *  the outgoing member is slashed.
 * 
 *  If a runner-up is available, then the best runner-up will be removed and replaces the
 *  outgoing member. Otherwise, a new phragmen election is started.
 * 
 *  The dispatch origin of this call must be root.
 * 
 *  Note that this does not affect the designated block number of the next election.
 * 
 *  # <weight>
 *  If we have a replacement, we use a small weight. Else, since this is a root call and
 *  will go into phragmen, we assume full block for now.
 *  # </weight>
 */
export interface ElectionsCall_remove_member {
  __kind: 'remove_member'
  who: Uint8Array
  hasReplacement: boolean
}

/**
 *  Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
 *  deposit of the removed voters are returned.
 * 
 *  This is an root function to be used only for cleaning the state.
 * 
 *  The dispatch origin of this call must be root.
 * 
 *  # <weight>
 *  The total number of voters and those that are defunct must be provided as witness data.
 *  # </weight>
 */
export interface ElectionsCall_clean_defunct_voters {
  __kind: 'clean_defunct_voters'
  numVoters: number
  numDefunct: number
}

export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote | CouncilCall_close | CouncilCall_disapprove_proposal

/**
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *        the weight estimations rely on it to estimate dispatchable weight.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(MP + N)` where:
 *    - `M` old-members-count (code- and governance-bounded)
 *    - `N` new-members-count (code- and governance-bounded)
 *    - `P` proposals-count (code-bounded)
 *  - DB:
 *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
 *    - 1 storage read (codec `O(P)`) for reading the proposals
 *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 *  # </weight>
 */
export interface CouncilCall_set_members {
  __kind: 'set_members'
  newMembers: Uint8Array[]
  prime: (Uint8Array | undefined)
  oldCount: number
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
 *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 *  - 1 event
 *  # </weight>
 */
export interface CouncilCall_execute {
  __kind: 'execute'
  proposal: Proposal
  lengthBound: number
}

/**
 *  Add a new proposal to either be voted on or executed directly.
 * 
 *  Requires the sender to be member.
 * 
 *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *  or put up for voting.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1)` or `O(B + M + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - branching is influenced by `threshold` where:
 *      - `P1` is proposal execution complexity (`threshold < 2`)
 *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 *  - DB:
 *    - 1 storage read `is_member` (codec `O(M)`)
 *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *    - DB accesses influenced by `threshold`:
 *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *      - OR proposal insertion (`threshold <= 2`)
 *        - 1 storage mutation `Proposals` (codec `O(P2)`)
 *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *        - 1 storage write `ProposalOf` (codec `O(B)`)
 *        - 1 storage write `Voting` (codec `O(M)`)
 *    - 1 event
 *  # </weight>
 */
export interface CouncilCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Proposal
  lengthBound: number
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  Transaction fees will be waived if the member is voting on any particular proposal
 *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface CouncilCall_vote {
  __kind: 'vote'
  proposal: Uint8Array
  index: number
  approve: boolean
}

/**
 *  Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 *  May be called by any signed account in order to finish voting and close the proposal.
 * 
 *  If called before the end of the voting period it will only close the vote if it is
 *  has enough votes to be approved or disapproved.
 * 
 *  If called after the end of the voting period abstentions are counted as rejections
 *  unless there is a prime member set and the prime member cast an approval.
 * 
 *  If the close operation completes successfully with disapproval, the transaction fee will
 *  be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
 *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1 + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - `P1` is the complexity of `proposal` preimage.
 *    - `P2` is proposal-count (code-bounded)
 *  - DB:
 *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
 *   - any mutations done while executing `proposal` (`P1`)
 *  - up to 3 events
 *  # </weight>
 */
export interface CouncilCall_close {
  __kind: 'close'
  proposalHash: Uint8Array
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

/**
 *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
 * 
 *  Must be called by the Root origin.
 * 
 *  Parameters:
 *  * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 *  # <weight>
 *  Complexity: O(P) where P is the number of max proposals
 *  DB Weight:
 *  * Reads: Proposals
 *  * Writes: Voting, Proposals, ProposalOf
 *  # </weight>
 */
export interface CouncilCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: Uint8Array
}

export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote | TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal

/**
 *  Set the collective's membership.
 * 
 *  - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 *  - `prime`: The prime member whose vote sets the default.
 *  - `old_count`: The upper bound for the previous number of members in storage.
 *                 Used for weight estimation.
 * 
 *  Requires root origin.
 * 
 *  NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *        the weight estimations rely on it to estimate dispatchable weight.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(MP + N)` where:
 *    - `M` old-members-count (code- and governance-bounded)
 *    - `N` new-members-count (code- and governance-bounded)
 *    - `P` proposals-count (code-bounded)
 *  - DB:
 *    - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the members
 *    - 1 storage read (codec `O(P)`) for reading the proposals
 *    - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *    - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 *  # </weight>
 */
export interface TechnicalCommitteeCall_set_members {
  __kind: 'set_members'
  newMembers: Uint8Array[]
  prime: (Uint8Array | undefined)
  oldCount: number
}

/**
 *  Dispatch a proposal from a member using the `Member` origin.
 * 
 *  Origin must be a member of the collective.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching `proposal`
 *  - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 *  - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_execute {
  __kind: 'execute'
  proposal: Proposal
  lengthBound: number
}

/**
 *  Add a new proposal to either be voted on or executed directly.
 * 
 *  Requires the sender to be member.
 * 
 *  `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 *  or put up for voting.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1)` or `O(B + M + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - branching is influenced by `threshold` where:
 *      - `P1` is proposal execution complexity (`threshold < 2`)
 *      - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 *  - DB:
 *    - 1 storage read `is_member` (codec `O(M)`)
 *    - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *    - DB accesses influenced by `threshold`:
 *      - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *      - OR proposal insertion (`threshold <= 2`)
 *        - 1 storage mutation `Proposals` (codec `O(P2)`)
 *        - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *        - 1 storage write `ProposalOf` (codec `O(B)`)
 *        - 1 storage write `Voting` (codec `O(M)`)
 *    - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Proposal
  lengthBound: number
}

/**
 *  Add an aye or nay vote for the sender to the given proposal.
 * 
 *  Requires the sender to be a member.
 * 
 *  Transaction fees will be waived if the member is voting on any particular proposal
 *  for the first time and the call is successful. Subsequent vote changes will charge a fee.
 *  # <weight>
 *  ## Weight
 *  - `O(M)` where `M` is members-count (code- and governance-bounded)
 *  - DB:
 *    - 1 storage read `Members` (codec `O(M)`)
 *    - 1 storage mutation `Voting` (codec `O(M)`)
 *  - 1 event
 *  # </weight>
 */
export interface TechnicalCommitteeCall_vote {
  __kind: 'vote'
  proposal: Uint8Array
  index: number
  approve: boolean
}

/**
 *  Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 *  May be called by any signed account in order to finish voting and close the proposal.
 * 
 *  If called before the end of the voting period it will only close the vote if it is
 *  has enough votes to be approved or disapproved.
 * 
 *  If called after the end of the voting period abstentions are counted as rejections
 *  unless there is a prime member set and the prime member cast an approval.
 * 
 *  If the close operation completes successfully with disapproval, the transaction fee will
 *  be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 *  + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed proposal.
 *  + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 *                    `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 *  # <weight>
 *  ## Weight
 *  - `O(B + M + P1 + P2)` where:
 *    - `B` is `proposal` size in bytes (length-fee-bounded)
 *    - `M` is members-count (code- and governance-bounded)
 *    - `P1` is the complexity of `proposal` preimage.
 *    - `P2` is proposal-count (code-bounded)
 *  - DB:
 *   - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *   - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec `O(P2)`)
 *   - any mutations done while executing `proposal` (`P1`)
 *  - up to 3 events
 *  # </weight>
 */
export interface TechnicalCommitteeCall_close {
  __kind: 'close'
  proposalHash: Uint8Array
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

/**
 *  Disapprove a proposal, close, and remove it from the system, regardless of its current state.
 * 
 *  Must be called by the Root origin.
 * 
 *  Parameters:
 *  * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 *  # <weight>
 *  Complexity: O(P) where P is the number of max proposals
 *  DB Weight:
 *  * Reads: Proposals
 *  * Writes: Voting, Proposals, ProposalOf
 *  # </weight>
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: Uint8Array
}

export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal

/**
 *  Put forward a suggestion for spending. A deposit proportional to the value
 *  is reserved and slashed if the proposal is rejected. It is returned once the
 *  proposal is awarded.
 * 
 *  # <weight>
 *  - Complexity: O(1)
 *  - DbReads: `ProposalCount`, `origin account`
 *  - DbWrites: `ProposalCount`, `Proposals`, `origin account`
 *  # </weight>
 */
export interface TreasuryCall_propose_spend {
  __kind: 'propose_spend'
  value: bigint
  beneficiary: Uint8Array
}

/**
 *  Reject a proposed spend. The original deposit will be slashed.
 * 
 *  May only be called from `T::RejectOrigin`.
 * 
 *  # <weight>
 *  - Complexity: O(1)
 *  - DbReads: `Proposals`, `rejected proposer account`
 *  - DbWrites: `Proposals`, `rejected proposer account`
 *  # </weight>
 */
export interface TreasuryCall_reject_proposal {
  __kind: 'reject_proposal'
  proposalId: number
}

/**
 *  Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 *  and the original deposit will be returned.
 * 
 *  May only be called from `T::ApproveOrigin`.
 * 
 *  # <weight>
 *  - Complexity: O(1).
 *  - DbReads: `Proposals`, `Approvals`
 *  - DbWrite: `Approvals`
 *  # </weight>
 */
export interface TreasuryCall_approve_proposal {
  __kind: 'approve_proposal'
  proposalId: number
}

export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all

/**
 *  Send a batch of dispatch calls.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *    exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 *  If origin is root then call are dispatch without checking origin filter. (This includes
 *  bypassing `frame_system::Config::BaseCallFilter`).
 * 
 *  # <weight>
 *  - Complexity: O(C) where C is the number of calls to be batched.
 *  # </weight>
 * 
 *  This will return `Ok` in all circumstances. To determine the success of the batch, an
 *  event is deposited. If a call failed and the batch was interrupted, then the
 *  `BatchInterrupted` event is deposited, along with the number of successful calls made
 *  and the error of the failed call. If all were successful, then the `BatchCompleted`
 *  event is deposited.
 */
export interface UtilityCall_batch {
  __kind: 'batch'
  calls: Type_50[]
}

/**
 *  Send a call through an indexed pseudonym of the sender.
 * 
 *  Filter from origin are passed along. The call will be dispatched with an origin which
 *  use the same filter as the origin of this call.
 * 
 *  NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 *  because you expect `proxy` to have been used prior in the call stack and you do not want
 *  the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 *  in the Multisig pallet instead.
 * 
 *  NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 *  The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
  __kind: 'as_derivative'
  index: number
  call: Type_50
}

/**
 *  Send a batch of dispatch calls and atomically execute them.
 *  The whole transaction will rollback and fail if any of the calls failed.
 * 
 *  May be called from any origin.
 * 
 *  - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *    exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 *  If origin is root then call are dispatch without checking origin filter. (This includes
 *  bypassing `frame_system::Config::BaseCallFilter`).
 * 
 *  # <weight>
 *  - Complexity: O(C) where C is the number of calls to be batched.
 *  # </weight>
 */
export interface UtilityCall_batch_all {
  __kind: 'batch_all'
  calls: Type_50[]
}

export type VestingCall = VestingCall_claim | VestingCall_vested_transfer | VestingCall_update_vesting_schedules | VestingCall_claim_for

export interface VestingCall_claim {
  __kind: 'claim'
}

export interface VestingCall_vested_transfer {
  __kind: 'vested_transfer'
  dest: Uint8Array
  schedule: VestingScheduleOf
}

export interface VestingCall_update_vesting_schedules {
  __kind: 'update_vesting_schedules'
  who: Uint8Array
  vestingSchedules: VestingScheduleOf[]
}

export interface VestingCall_claim_for {
  __kind: 'claim_for'
  dest: Uint8Array
}

export type ParachainSystemCall = ParachainSystemCall_set_upgrade_block | ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message | ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade

/**
 *  Force an already scheduled validation function upgrade to happen on a particular block.
 * 
 *  Note that coordinating this block for the upgrade has to happen independently on the
 *  relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
 *  and this bypasses all checks and and normal protocols. Very easy to brick your chain
 *  if done wrong.
 */
export interface ParachainSystemCall_set_upgrade_block {
  __kind: 'set_upgrade_block'
  relayChainBlock: number
}

/**
 *  Set the current validation data.
 * 
 *  This should be invoked exactly once per block. It will panic at the finalization
 *  phase if the call was not invoked.
 * 
 *  The dispatch origin for this call must be `Inherent`
 * 
 *  As a side effect, this function upgrades the current validation function
 *  if the appropriate time has come.
 */
export interface ParachainSystemCall_set_validation_data {
  __kind: 'set_validation_data'
  data: ParachainInherentData
}

export interface ParachainSystemCall_sudo_send_upward_message {
  __kind: 'sudo_send_upward_message'
  message: Uint8Array
}

export interface ParachainSystemCall_authorize_upgrade {
  __kind: 'authorize_upgrade'
  codeHash: Uint8Array
}

export interface ParachainSystemCall_enact_authorized_upgrade {
  __kind: 'enact_authorized_upgrade'
  code: Uint8Array
}

export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute

export interface PolkadotXcmCall_send {
  __kind: 'send'
  dest: MultiLocation
  message: Xcm
}

/**
 *  Teleport some assets from the local chain to some destination chain.
 * 
 *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *    an `AccountId32` value.
 *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *    `dest` side.
 *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *    `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 */
export interface PolkadotXcmCall_teleport_assets {
  __kind: 'teleport_assets'
  dest: MultiLocation
  beneficiary: MultiLocation
  assets: MultiAsset[]
  destWeight: bigint
}

/**
 *  Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 *  a notification XCM.
 * 
 *  Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 *  - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 *  - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *    from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 *  - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *    an `AccountId32` value.
 *  - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *    `dest` side.
 *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *    `ReserveAssetDeposit { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
  __kind: 'reserve_transfer_assets'
  dest: MultiLocation
  beneficiary: MultiLocation
  assets: MultiAsset[]
  destWeight: bigint
}

/**
 *  Execute an XCM message from a local, signed, origin.
 * 
 *  An event is deposited indicating whether `msg` could be executed completely or only
 *  partially.
 * 
 *  No more than `max_weight` will be used in its attempted execution. If this is less than the
 *  maximum amount of weight that the message could take to be executed, then no execution
 *  attempt will be made.
 * 
 *  NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
 *  to completion; only that *some* of it was executed.
 */
export interface PolkadotXcmCall_execute {
  __kind: 'execute'
  message: Xcm
  maxWeight: bigint
}

export type CumulusXcmCall = never

export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset

/**
 *  Transfer native currencies.
 * 
 *  `dest_weight` is the weight for XCM execution on the dest chain, and
 *  it would be charged from the transferred assets. If set below
 *  requirements, the execution may fail and assets wouldn't be
 *  received.
 * 
 *  It's a no-op if any error on local XCM execution or message sending.
 *  Note sending assets out per se doesn't guarantee they would be
 *  received. Receiving depends on if the XCM message could be delivered
 *  by the network, and if the receiving chain would handle
 *  messages correctly.
 */
export interface XTokensCall_transfer {
  __kind: 'transfer'
  currencyId: number
  amount: bigint
  dest: MultiLocation
  destWeight: bigint
}

/**
 *  Transfer `MultiAsset`.
 * 
 *  `dest_weight` is the weight for XCM execution on the dest chain, and
 *  it would be charged from the transferred assets. If set below
 *  requirements, the execution may fail and assets wouldn't be
 *  received.
 * 
 *  It's a no-op if any error on local XCM execution or message sending.
 *  Note sending assets out per se doesn't guarantee they would be
 *  received. Receiving depends on if the XCM message could be delivered
 *  by the network, and if the receiving chain would handle
 *  messages correctly.
 */
export interface XTokensCall_transfer_multiasset {
  __kind: 'transfer_multiasset'
  asset: MultiAsset
  dest: MultiLocation
  destWeight: bigint
}

export type XcmpQueueCall = never

export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 *  Service a single overweight message.
 * 
 *  - `origin`: Must pass `ExecuteOverweightOrigin`.
 *  - `index`: The index of the overweight message to service.
 *  - `weight_limit`: The amount of weight that message execution may take.
 * 
 *  Errors:
 *  - `Unknown`: Message of `index` is unknown.
 *  - `OverLimit`: Message execution may use greater than `weight_limit`.
 * 
 *  Events:
 *  - `OverweightServiced`: On success.
 */
export interface DmpQueueCall_service_overweight {
  __kind: 'service_overweight'
  index: bigint
  weightLimit: bigint
}

export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 *  Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
  __kind: 'set_uncles'
  newUncles: Header[]
}

export type CollatorSelectionCall = CollatorSelectionCall_set_invulnerables | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_leave_intent

export interface CollatorSelectionCall_set_invulnerables {
  __kind: 'set_invulnerables'
  new: Uint8Array[]
}

export interface CollatorSelectionCall_set_desired_candidates {
  __kind: 'set_desired_candidates'
  max: number
}

export interface CollatorSelectionCall_set_candidacy_bond {
  __kind: 'set_candidacy_bond'
  bond: bigint
}

export interface CollatorSelectionCall_register_as_candidate {
  __kind: 'register_as_candidate'
}

export interface CollatorSelectionCall_leave_intent {
  __kind: 'leave_intent'
}

export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

/**
 *  Sets the session key(s) of the function caller to `keys`.
 *  Allows an account to set its session key prior to becoming a validator.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 *  - DbWrites: `origin account`, `NextKeys`
 *  - DbReads per key id: `KeyOwner`
 *  - DbWrites per key id: `KeyOwner`
 *  # </weight>
 */
export interface SessionCall_set_keys {
  __kind: 'set_keys'
  keys: [Uint8Array, Uint8Array, Uint8Array, Uint8Array]
  proof: Uint8Array
}

/**
 *  Removes any session key(s) of the function caller.
 *  This doesn't take effect until the next session.
 * 
 *  The dispatch origin of this function must be signed.
 * 
 *  # <weight>
 *  - Complexity: `O(1)` in number of key types.
 *    Actual cost depends on the number of length of `T::Keys::key_ids()` which is fixed.
 *  - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 *  - DbWrites: `NextKeys`, `origin account`
 *  - DbWrites per key id: `KeyOwner`
 *  # </weight>
 */
export interface SessionCall_purge_keys {
  __kind: 'purge_keys'
}

export type CurrenciesCall = CurrenciesCall_transfer | CurrenciesCall_transfer_native_currency | CurrenciesCall_update_balance

/**
 *  Transfer some balance to another account under `currency_id`.
 * 
 *  The dispatch origin for this call must be `Signed` by the
 *  transactor.
 */
export interface CurrenciesCall_transfer {
  __kind: 'transfer'
  dest: Uint8Array
  currencyId: number
  amount: bigint
}

/**
 *  Transfer some native currency to another account.
 * 
 *  The dispatch origin for this call must be `Signed` by the
 *  transactor.
 */
export interface CurrenciesCall_transfer_native_currency {
  __kind: 'transfer_native_currency'
  dest: Uint8Array
  amount: bigint
}

/**
 *  update amount of account `who` under `currency_id`.
 * 
 *  The dispatch origin of this call must be _Root_.
 */
export interface CurrenciesCall_update_balance {
  __kind: 'update_balance'
  who: Uint8Array
  currencyId: number
  amount: bigint
}

export type TipsCall = TipsCall_report_awesome | TipsCall_retract_tip | TipsCall_tip_new | TipsCall_tip | TipsCall_close_tip | TipsCall_slash_tip

/**
 *  Report something `reason` that deserves a tip and claim any eventual the finder's fee.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 *  `DataDepositPerByte` for each byte in `reason`.
 * 
 *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *    a UTF-8-encoded URL.
 *  - `who`: The account which should be credited for the tip.
 * 
 *  Emits `NewTip` if successful.
 * 
 *  # <weight>
 *  - Complexity: `O(R)` where `R` length of `reason`.
 *    - encoding and hashing of 'reason'
 *  - DbReads: `Reasons`, `Tips`
 *  - DbWrites: `Reasons`, `Tips`
 *  # </weight>
 */
export interface TipsCall_report_awesome {
  __kind: 'report_awesome'
  reason: Uint8Array
  who: Uint8Array
}

/**
 *  Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
 * 
 *  If successful, the original deposit will be unreserved.
 * 
 *  The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
 *  must have been reported by the signing account through `report_awesome` (and not
 *  through `tip_new`).
 * 
 *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 *  Emits `TipRetracted` if successful.
 * 
 *  # <weight>
 *  - Complexity: `O(1)`
 *    - Depends on the length of `T::Hash` which is fixed.
 *  - DbReads: `Tips`, `origin account`
 *  - DbWrites: `Reasons`, `Tips`, `origin account`
 *  # </weight>
 */
export interface TipsCall_retract_tip {
  __kind: 'retract_tip'
  hash: Uint8Array
}

/**
 *  Give a tip for something new; no finder's fee will be taken.
 * 
 *  The dispatch origin for this call must be _Signed_ and the signing account must be a
 *  member of the `Tippers` set.
 * 
 *  - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *    a UTF-8-encoded URL.
 *  - `who`: The account which should be credited for the tip.
 *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *    value of active tippers will be given to the `who`.
 * 
 *  Emits `NewTip` if successful.
 * 
 *  # <weight>
 *  - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
 *    - `O(T)`: decoding `Tipper` vec of length `T`
 *      `T` is charged as upper bound given by `ContainsLengthBound`.
 *      The actual cost depends on the implementation of `T::Tippers`.
 *    - `O(R)`: hashing and encoding of reason of length `R`
 *  - DbReads: `Tippers`, `Reasons`
 *  - DbWrites: `Reasons`, `Tips`
 *  # </weight>
 */
export interface TipsCall_tip_new {
  __kind: 'tip_new'
  reason: Uint8Array
  who: Uint8Array
  tipValue: bigint
}

/**
 *  Declare a tip value for an already-open tip.
 * 
 *  The dispatch origin for this call must be _Signed_ and the signing account must be a
 *  member of the `Tippers` set.
 * 
 *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *    as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
 *    account ID.
 *  - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *    value of active tippers will be given to the `who`.
 * 
 *  Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
 *  has started.
 * 
 *  # <weight>
 *  - Complexity: `O(T)` where `T` is the number of tippers.
 *    decoding `Tipper` vec of length `T`, insert tip and check closing,
 *    `T` is charged as upper bound given by `ContainsLengthBound`.
 *    The actual cost depends on the implementation of `T::Tippers`.
 * 
 *    Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
 *    is weighted as if almost full i.e of length `T-1`.
 *  - DbReads: `Tippers`, `Tips`
 *  - DbWrites: `Tips`
 *  # </weight>
 */
export interface TipsCall_tip {
  __kind: 'tip'
  hash: Uint8Array
  tipValue: bigint
}

/**
 *  Close and payout a tip.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  The tip identified by `hash` must have finished its countdown period.
 * 
 *  - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *    as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 *  # <weight>
 *  - Complexity: `O(T)` where `T` is the number of tippers.
 *    decoding `Tipper` vec of length `T`.
 *    `T` is charged as upper bound given by `ContainsLengthBound`.
 *    The actual cost depends on the implementation of `T::Tippers`.
 *  - DbReads: `Tips`, `Tippers`, `tip finder`
 *  - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
 *  # </weight>
 */
export interface TipsCall_close_tip {
  __kind: 'close_tip'
  hash: Uint8Array
}

/**
 *  Remove and slash an already-open tip.
 * 
 *  May only be called from `T::RejectOrigin`.
 * 
 *  As a result, the finder is slashed and the deposits are lost.
 * 
 *  Emits `TipSlashed` if successful.
 * 
 *  # <weight>
 *    `T` is charged as upper bound given by `ContainsLengthBound`.
 *    The actual cost depends on the implementation of `T::Tippers`.
 *  # </weight>
 */
export interface TipsCall_slash_tip {
  __kind: 'slash_tip'
  hash: Uint8Array
}

export type TokensCall = TokensCall_transfer | TokensCall_transfer_all | TokensCall_transfer_keep_alive | TokensCall_force_transfer | TokensCall_set_balance

/**
 *  Transfer some liquid free balance to another account.
 * 
 *  `transfer` will set the `FreeBalance` of the sender and receiver.
 *  It will decrease the total issuance of the system by the
 *  `TransferFee`. If the sender's account is below the existential
 *  deposit as a result of the transfer, the account will be reaped.
 * 
 *  The dispatch origin for this call must be `Signed` by the
 *  transactor.
 * 
 *  - `dest`: The recipient of the transfer.
 *  - `currency_id`: currency type.
 *  - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_transfer {
  __kind: 'transfer'
  dest: Uint8Array
  currencyId: number
  amount: bigint
}

/**
 *  Transfer all remaining balance to the given account.
 * 
 *  NOTE: This function only attempts to transfer _transferable_
 *  balances. This means that any locked, reserved, or existential
 *  deposits (when `keep_alive` is `true`), will not be transferred by
 *  this function. To ensure that this function results in a killed
 *  account, you might need to prepare the account by removing any
 *  reference counters, storage deposits, etc...
 * 
 *  The dispatch origin for this call must be `Signed` by the
 *  transactor.
 * 
 *  - `dest`: The recipient of the transfer.
 *  - `currency_id`: currency type.
 *  - `keep_alive`: A boolean to determine if the `transfer_all`
 *    operation should send all of the funds the account has, causing
 *    the sender account to be killed (false), or transfer everything
 *    except at least the existential deposit, which will guarantee to
 *    keep the sender account alive (true).
 */
export interface TokensCall_transfer_all {
  __kind: 'transfer_all'
  dest: Uint8Array
  currencyId: number
  keepAlive: boolean
}

/**
 *  Same as the [`transfer`] call, but with a check that the transfer
 *  will not kill the origin account.
 * 
 *  99% of the time you want [`transfer`] instead.
 * 
 *  The dispatch origin for this call must be `Signed` by the
 *  transactor.
 * 
 *  - `dest`: The recipient of the transfer.
 *  - `currency_id`: currency type.
 *  - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_transfer_keep_alive {
  __kind: 'transfer_keep_alive'
  dest: Uint8Array
  currencyId: number
  amount: bigint
}

/**
 *  Exactly as `transfer`, except the origin must be root and the source
 *  account may be specified.
 * 
 *  The dispatch origin for this call must be _Root_.
 * 
 *  - `source`: The sender of the transfer.
 *  - `dest`: The recipient of the transfer.
 *  - `currency_id`: currency type.
 *  - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_force_transfer {
  __kind: 'force_transfer'
  source: Uint8Array
  dest: Uint8Array
  currencyId: number
  amount: bigint
}

/**
 *  Set the balances of a given account.
 * 
 *  This will alter `FreeBalance` and `ReservedBalance` in storage. it
 *  will also decrease the total issuance of the system
 *  (`TotalIssuance`). If the new free or reserved balance is below the
 *  existential deposit, it will reap the `AccountInfo`.
 * 
 *  The dispatch origin for this call is `root`.
 */
export interface TokensCall_set_balance {
  __kind: 'set_balance'
  who: Uint8Array
  currencyId: number
  newFree: bigint
  newReserved: bigint
}

export type AssetRegistryCall = AssetRegistryCall_register | AssetRegistryCall_update | AssetRegistryCall_set_metadata | AssetRegistryCall_set_location

/**
 *  Register a new asset.
 * 
 *  Asset is identified by `name` and the name must not be used to register another asset.
 * 
 *  New asset is given `NextAssetId` - sequential asset id
 * 
 *  Adds mapping between `name` and assigned `asset_id` so asset id can be retrieved by name too (Note: this approach is used in AMM implementation (xyk))
 * 
 *  Emits 'Registered` event when successful.
 */
export interface AssetRegistryCall_register {
  __kind: 'register'
  name: Uint8Array
  assetType: AssetType
  existentialDeposit: bigint
}

/**
 *  Update registered asset.
 * 
 *  Updates also mapping between name and asset id if provided name is different than currently registered.
 * 
 *  Emits `Updated` event when successful.
 */
export interface AssetRegistryCall_update {
  __kind: 'update'
  assetId: number
  name: Uint8Array
  assetType: AssetType
  existentialDeposit: (bigint | undefined)
}

/**
 *  Set metadata for an asset.
 * 
 *  - `asset_id`: Asset identifier.
 *  - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 *  - `decimals`: The number of decimals this asset uses to represent one unit.
 * 
 *  Emits `MetadataSet` event when successful.
 */
export interface AssetRegistryCall_set_metadata {
  __kind: 'set_metadata'
  assetId: number
  symbol: Uint8Array
  decimals: number
}

/**
 *  Set asset native location.
 * 
 *  Adds mapping between native location and local asset id and vice versa.
 * 
 *  Mainly used in XCM.
 * 
 *  Emits `LocationSet` event when successful.
 */
export interface AssetRegistryCall_set_location {
  __kind: 'set_location'
  assetId: number
  location: AssetNativeLocation
}

export type XYKCall = XYKCall_create_pool | XYKCall_add_liquidity | XYKCall_remove_liquidity | XYKCall_sell | XYKCall_buy

/**
 *  Create new pool for given asset pair.
 * 
 *  Registers new pool for given asset pair (`asset a` and `asset b`) in asset registry.
 *  Asset registry creates new id or returns previously created one if such pool existed before.
 * 
 *  Pool is created with initial liquidity provided by `origin`.
 *  Shares are issued with specified initial price and represents proportion of asset in the pool.
 * 
 *  Emits `PoolCreated` event when successful.
 */
export interface XYKCall_create_pool {
  __kind: 'create_pool'
  assetA: number
  assetB: number
  amount: bigint
  initialPrice: bigint
}

/**
 *  Add liquidity to previously created asset pair pool.
 * 
 *  Shares are issued with current price.
 * 
 *  Emits `LiquidityAdded` event when successful.
 */
export interface XYKCall_add_liquidity {
  __kind: 'add_liquidity'
  assetA: number
  assetB: number
  amountA: bigint
  amountBMaxLimit: bigint
}

/**
 *  Remove liquidity from specific liquidity pool in the form of burning shares.
 * 
 *  If liquidity in the pool reaches 0, it is destroyed.
 * 
 *  Emits 'LiquidityRemoved' when successful.
 *  Emits 'PoolDestroyed' when pool is destroyed.
 */
export interface XYKCall_remove_liquidity {
  __kind: 'remove_liquidity'
  assetA: number
  assetB: number
  liquidityAmount: bigint
}

/**
 *  Trade asset in for asset out.
 * 
 *  Executes a swap of `asset_in` for `asset_out`. Price is determined by the liquidity pool.
 * 
 *  `max_limit` - minimum amount of `asset_out` / amount of asset_out to be obtained from the pool in exchange for `asset_in`.
 * 
 *  Emits `SellExecuted` when successful.
 */
export interface XYKCall_sell {
  __kind: 'sell'
  assetIn: number
  assetOut: number
  amount: bigint
  maxLimit: bigint
  discount: boolean
}

/**
 *  Trade asset in for asset out.
 * 
 *  Executes a swap of `asset_in` for `asset_out`. Price is determined by the liquidity pool.
 * 
 *  `max_limit` - maximum amount of `asset_in` to be sold in exchange for `asset_out`.
 * 
 *  Emits `BuyExecuted` when successful.
 */
export interface XYKCall_buy {
  __kind: 'buy'
  assetOut: number
  assetIn: number
  amount: bigint
  maxLimit: bigint
  discount: boolean
}

export type DusterCall = DusterCall_dust_account | DusterCall_add_nondustable_account | DusterCall_remove_nondustable_account

/**
 *  Dust specified account.
 *  IF account balance is < min. existential deposit of given currency, and account is allowed to
 *  be dusted, the remaining balance is transferred to selected account (usually treasury).
 * 
 *  Caller is rewarded with chosen reward in native currency.
 */
export interface DusterCall_dust_account {
  __kind: 'dust_account'
  account: Uint8Array
  currencyId: number
}

/**
 *  Add account to list of non-dustable account. Account whihc are excluded from udsting.
 *  If such account should be dusted - `AccountBlacklisted` error is returned.
 *  Only root can perform this action.
 */
export interface DusterCall_add_nondustable_account {
  __kind: 'add_nondustable_account'
  account: Uint8Array
}

/**
 *  Remove account from list of non-dustable accounts. That means account can be dusted again.
 */
export interface DusterCall_remove_nondustable_account {
  __kind: 'remove_nondustable_account'
  account: Uint8Array
}

export type ExchangeCall = ExchangeCall_sell | ExchangeCall_buy

/**
 *  Create sell intention
 *  Calculate current spot price, create an intention and store in ```ExchangeAssetsIntentions```
 */
export interface ExchangeCall_sell {
  __kind: 'sell'
  assetSell: number
  assetBuy: number
  amountSell: bigint
  minBought: bigint
  discount: boolean
}

/**
 *  Create buy intention
 *  Calculate current spot price, create an intention and store in ```ExchangeAssetsIntentions```
 */
export interface ExchangeCall_buy {
  __kind: 'buy'
  assetBuy: number
  assetSell: number
  amountBuy: bigint
  maxSold: bigint
  discount: boolean
}

export type LBPCall = LBPCall_create_pool | LBPCall_update_pool_data | LBPCall_pause_pool | LBPCall_unpause_pool | LBPCall_add_liquidity | LBPCall_remove_liquidity | LBPCall_sell | LBPCall_buy

/**
 *  Create a new liquidity bootstrapping pool for given asset pair.
 * 
 *  For any asset pair, only one pool can exist at a time.
 * 
 *  The dispatch origin for this call must be `T::CreatePoolOrigin`.
 *  The pool is created with initial liquidity provided by the `pool_owner` who must have
 *  sufficient funds free.
 * 
 *  Parameters:
 *  - `pool_owner`: the owner of the new pool.
 *  - `asset`: The asset ID, the initial liquidity amount and the starting and ending weight.
 *  - `sale_duration`: The LBP event duration is determined by the starting and ending block number,
 *  or uninitialized if both values are set to zero.
 *  - `weight_curve`: The weight function used to update the LBP weights. Currently,
 *  there is only one weight function implemented, the linear function.
 *  - `pausable`: If the `pausable` option is set to `true`, the pool owner is allowed
 *  to pause the pool during the sale.
 *  - `fee`: The trading fee charged on every trade distributed to `fee_receiver`.
 *  - `fee_receiver`: The account to which trading fees will be transferred.
 * 
 *  Emits `PoolCreated` event when successful.
 */
export interface LBPCall_create_pool {
  __kind: 'create_pool'
  poolOwner: Uint8Array
  assetA: LBPAssetInfo
  assetB: LBPAssetInfo
  saleDuration: [number, number]
  weightCurve: WeightCurveType
  pausable: boolean
  fee: Fee
  feeReceiver: Uint8Array
}

/**
 *  Update pool data of a pool.
 * 
 *  The dispatch origin for this call must be signed by the pool owner.
 * 
 *  The pool can be updated only if the sale has not already started.
 * 
 *  At least one of the following optional parameters has to be specified.
 * 
 *  Parameters:
 *  - `pool_id`: The identifier of the pool to be updated.
 *  - `duration`: The new starting and ending time of the sale. This parameter is optional.
 *  - `initial_weights`: The new initial weights. This parameter is optional.
 *  - `final_weights`: The new final weights. This parameter is optional.
 *  - `fee`: The new trading fee charged on every trade. This parameter is optional.
 *  - `fee_receiver`: The new receiver of trading fees. This parameter is optional.
 * 
 *  Emits `PoolUpdated` event when successful.
 */
export interface LBPCall_update_pool_data {
  __kind: 'update_pool_data'
  poolId: Uint8Array
  duration: ([number, number] | undefined)
  initialWeights: ([[number, number], [number, number]] | undefined)
  finalWeights: ([[number, number], [number, number]] | undefined)
  fee: (Fee | undefined)
  feeReceiver: (Uint8Array | undefined)
}

/**
 *  Pause a pool and disallow buy and sell operations on the pool.
 * 
 *  Only a pool with the `pausable` option set to `true` can be paused.
 * 
 *  The dispatch origin for this call must be signed by the pool owner.
 * 
 *  Parameters:
 *  - `pool_id`: The identifier of the pool
 * 
 *  Emits `Paused` event when successful.
 */
export interface LBPCall_pause_pool {
  __kind: 'pause_pool'
  poolId: Uint8Array
}

/**
 *  Unpause a pool and allow token buy and sell operations on the pool.
 * 
 *  A pool needs to be in the paused state prior this call.
 * 
 *  The dispatch origin for this call must be signed by the pool owner.
 * 
 *  Parameters:
 *  - `pool_id`: The identifier of the pool
 * 
 *  Emits `Unpaused` event when successful.
 */
export interface LBPCall_unpause_pool {
  __kind: 'unpause_pool'
  poolId: Uint8Array
}

/**
 *  Add liquidity to a pool.
 * 
 *  Assets to add has to match the pool assets. At least one amount has to be non-zero.
 * 
 *  The dispatch origin for this call must be signed by the pool owner.
 * 
 *  Parameters:
 *  - `pool_id`: The identifier of the pool
 *  - `amount_a`: The identifier of the asset and the amount to add.
 *  - `amount_b`: The identifier of the second asset and the amount to add.
 * 
 *  Emits `LiquidityAdded` event when successful.
 */
export interface LBPCall_add_liquidity {
  __kind: 'add_liquidity'
  amountA: [number, bigint]
  amountB: [number, bigint]
}

/**
 *  Transfer all the liquidity from a pool back to the pool owner and destroy the pool.
 *  The pool data are also removed from the storage.
 * 
 *  The pool can't be destroyed during the sale.
 * 
 *  The dispatch origin for this call must be signed by the pool owner.
 * 
 *  Parameters:
 *  - `amount_a`: The identifier of the asset and the amount to add.
 * 
 *  Emits 'LiquidityRemoved' when successful.
 */
export interface LBPCall_remove_liquidity {
  __kind: 'remove_liquidity'
  poolId: Uint8Array
}

/**
 *  Trade `asset_in` for `asset_out`.
 * 
 *  Executes a swap of `asset_in` for `asset_out`. Price is determined by the pool and is
 *  affected by the amount and proportion of the pool assets and the weights.
 * 
 *  Trading `fee` is distributed to the `fee_receiver`.
 * 
 *  Parameters:
 *  - `asset_in`: The identifier of the asset being transferred from the account to the pool.
 *  - `asset_out`: The identifier of the asset being transferred from the pool to the account.
 *  - `amount`: The amount of `asset_in`
 *  - `max_limit`: minimum amount of `asset_out` / amount of asset_out to be obtained from the pool in exchange for `asset_in`.
 * 
 *  Emits `SellExecuted` when successful.
 */
export interface LBPCall_sell {
  __kind: 'sell'
  assetIn: number
  assetOut: number
  amount: bigint
  maxLimit: bigint
}

/**
 *  Trade `asset_in` for `asset_out`.
 * 
 *  Executes a swap of `asset_in` for `asset_out`. Price is determined by the pool and is
 *  affected by the amount and the proportion of the pool assets and the weights.
 * 
 *  Trading `fee` is distributed to the `fee_receiver`.
 * 
 *  Parameters:
 *  - `asset_in`: The identifier of the asset being transferred from the account to the pool.
 *  - `asset_out`: The identifier of the asset being transferred from the pool to the account.
 *  - `amount`: The amount of `asset_out`.
 *  - `max_limit`: maximum amount of `asset_in` to be sold in exchange for `asset_out`.
 * 
 *  Emits `BuyExecuted` when successful.
 */
export interface LBPCall_buy {
  __kind: 'buy'
  assetOut: number
  assetIn: number
  amount: bigint
  maxLimit: bigint
}

export type MultiTransactionPaymentCall = MultiTransactionPaymentCall_set_currency | MultiTransactionPaymentCall_add_currency | MultiTransactionPaymentCall_remove_currency | MultiTransactionPaymentCall_add_member | MultiTransactionPaymentCall_remove_member

/**
 *  Set selected currency for given account.
 * 
 *  This allows to set a currency for an account in which all transaction fees will be paid.
 *  Account balance cannot be zero.
 * 
 *  Chosen currency must be in the list of accepted currencies.
 * 
 *  When currency is set, fixed fee is withdrawn from the account to pay for the currency change
 * 
 *  Emits `CurrencySet` event when successful.
 */
export interface MultiTransactionPaymentCall_set_currency {
  __kind: 'set_currency'
  currency: number
}

/**
 *  Add a currency to the list of accepted currencies.
 * 
 *  Only member can perform this action.
 * 
 *  Currency must not be already accepted. Core asset id cannot be explicitly added.
 * 
 *  Emits `CurrencyAdded` event when successful.
 */
export interface MultiTransactionPaymentCall_add_currency {
  __kind: 'add_currency'
  currency: number
  price: bigint
}

/**
 *  Remove currency from the list of supported currencies
 *  Only selected members can perform this action
 * 
 *  Core asset cannot be removed.
 * 
 *  Emits `CurrencyRemoved` when successful.
 */
export interface MultiTransactionPaymentCall_remove_currency {
  __kind: 'remove_currency'
  currency: number
}

/**
 *  Add an account as member to list of authorities who can manage list of accepted currencies
 * 
 *  Members can be add or removed a currency from a list of accepted currencies.
 * 
 *  Only root can be perform this action.
 * 
 *  Emits `MemberAdded` when successful.
 */
export interface MultiTransactionPaymentCall_add_member {
  __kind: 'add_member'
  member: Uint8Array
}

/**
 *  Rmove account from list of authorities who can manage list of accepted currencies
 * 
 *  Only root can be perform this action.
 * 
 *  Emits `MemberRemoved` when successful.
 */
export interface MultiTransactionPaymentCall_remove_member {
  __kind: 'remove_member'
  member: Uint8Array
}

export type NFTCall = NFTCall_create_class | NFTCall_mint | NFTCall_transfer | NFTCall_burn | NFTCall_destroy_class | NFTCall_create_pool | NFTCall_destroy_pool | NFTCall_buy_from_pool | NFTCall_sell_to_pool

/**
 *  Creates an NFT class
 *  This is necessary as the first step, because tokens will be minted as part of this class
 *  An amount X (ClassBondAmount) is reserved
 * 
 *  Parameters:
 *  - `metadata`: Arbitrary info/description of a class
 *  - `data`: Field(s) defined in the ClassData struct
 */
export interface NFTCall_create_class {
  __kind: 'create_class'
  metadata: Uint8Array
  data: ClassData
}

/**
 *  NFT is minted in the specified class
 * 
 *  Parameters:
 *  - `class_id`: identificator of a class
 *  - `metadata`: Arbitrary info/description of a token
 *  - `data`: Field(s) defined in the TokenData struct
 */
export interface NFTCall_mint {
  __kind: 'mint'
  classId: bigint
  metadata: Uint8Array
  tokenData: TokenData
}

/**
 *  Transfers NFT from account A to account B
 *  Only the owner can send their NFT to another account
 * 
 *  Parameters:
 *  - `dest`: The destination account a token will be sent to
 *  - `token`: unique identificator of a token
 */
export interface NFTCall_transfer {
  __kind: 'transfer'
  dest: Uint8Array
  token: [bigint, bigint]
}

/**
 *  Removes a token from existence
 * 
 *  Parameters:
 *  - `token`: unique identificator of a token
 */
export interface NFTCall_burn {
  __kind: 'burn'
  token: [bigint, bigint]
}

/**
 *  Removes a class from existence
 *  Returns the bond amount
 * 
 *  Parameters:
 *  - `class_id`: unique identificator of a class
 */
export interface NFTCall_destroy_class {
  __kind: 'destroy_class'
  classId: bigint
}

/**
 *  Similar method to create_/destroy_class
 *  The difference between a pool and a class in this case is that
 *  a price has to be specified for each pool. Any NFT within this class
 *  will have this exact constant price
 * 
 *  Parameters:
 *  - `metadata`: Arbitrary info/description of a pool
 *  - `data`: Field(s) defined in the ClassData struct
 *  - `price`: Price of each individual NFT
 */
export interface NFTCall_create_pool {
  __kind: 'create_pool'
  metadata: Uint8Array
  data: ClassData
  price: bigint
}

/**
 *  Removes a pool from existence
 *  Returns the bond amount
 * 
 *  Parameters:
 *  - `class_id`: unique identificator of a class
 */
export interface NFTCall_destroy_pool {
  __kind: 'destroy_pool'
  classId: bigint
}

/**
 *  NFTs can be bought from a pool for a constant price
 * 
 *  Parameters:
 *  - `token`: unique identificator of a token
 */
export interface NFTCall_buy_from_pool {
  __kind: 'buy_from_pool'
  token: [bigint, bigint]
}

/**
 *  Owned NFTs can be sold back to the pool for the original price
 * 
 *  Parameters:
 *  - `token`: unique identificator of a token
 */
export interface NFTCall_sell_to_pool {
  __kind: 'sell_to_pool'
  token: [bigint, bigint]
}

export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

/**
 *  Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB write (event).
 *  - Weight of derivative `call` execution + 10,000.
 *  # </weight>
 */
export interface SudoCall_sudo {
  __kind: 'sudo'
  call: Type_50
}

/**
 *  Authenticates the sudo key and dispatches a function call with `Root` origin.
 *  This function does not check the weight of the call, and instead allows the
 *  Sudo user to specify the weight of the call.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - The weight of this call is defined by the caller.
 *  # </weight>
 */
export interface SudoCall_sudo_unchecked_weight {
  __kind: 'sudo_unchecked_weight'
  call: Type_50
  weight: bigint
}

/**
 *  Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo key.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB change.
 *  # </weight>
 */
export interface SudoCall_set_key {
  __kind: 'set_key'
  new: Uint8Array
}

/**
 *  Authenticates the sudo key and dispatches a function call with `Signed` origin from
 *  a given account.
 * 
 *  The dispatch origin for this call must be _Signed_.
 * 
 *  # <weight>
 *  - O(1).
 *  - Limited storage reads.
 *  - One DB write (event).
 *  - Weight of derivative `call` execution + 10,000.
 *  # </weight>
 */
export interface SudoCall_sudo_as {
  __kind: 'sudo_as'
  who: Uint8Array
  call: Type_50
}

export interface AccountVoteStandard {
  vote: number
  balance: bigint
}

export interface AccountVoteSplit {
  aye: bigint
  nay: bigint
}

export interface StorageProof {
  trieNodes: Uint8Array[]
}

export interface InboundDownwardMessage {
  pubSentAt: number
  pubMsg: Uint8Array
}

export interface InboundHrmpMessage {
  sentAt: number
  data: Uint8Array
}

export type Reasons = Reasons_Fee | Reasons_Misc | Reasons_All

export interface Reasons_Fee {
  __kind: 'Fee'
}

export interface Reasons_Misc {
  __kind: 'Misc'
}

export interface Reasons_All {
  __kind: 'All'
}

export interface PreimageStatusAvailable {
  data: Uint8Array
  provider: Uint8Array
  deposit: bigint
  since: number
  expiry: (number | undefined)
}

export interface ReferendumStatus {
  end: number
  proposalHash: Uint8Array
  threshold: VoteThreshold
  delay: number
  tally: Tally
}

export interface ReferendumInfoFinished {
  approved: boolean
  end: number
}

export interface VotingDirect {
  votes: [number, AccountVote][]
  delegations: Delegations
  prior: [number, bigint]
}

export interface VotingDelegating {
  balance: bigint
  target: Uint8Array
  conviction: Conviction
  delegations: Delegations
  prior: [number, bigint]
}

export interface AbridgedHrmpChannel {
  maxCapacity: number
  maxTotalSize: number
  maxMessageSize: number
  msgCount: number
  totalSize: number
  mqcHead: (Uint8Array | undefined)
}

export type PalletsOrigin = PalletsOrigin_System | PalletsOrigin_Council | PalletsOrigin_TechnicalCommittee

export interface PalletsOrigin_System {
  __kind: 'System'
  value: SystemOrigin
}

export interface PalletsOrigin_Council {
  __kind: 'Council'
  value: CollectiveOrigin
}

export interface PalletsOrigin_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: CollectiveOrigin
}

export type DigestItem = DigestItem_Other | DigestItem_AuthoritiesChange | DigestItem_ChangesTrieRoot | DigestItem_SealV0 | DigestItem_Consensus | DigestItem_Seal | DigestItem_PreRuntime | DigestItem_ChangesTrieSignal | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_Other {
  __kind: 'Other'
  value: Uint8Array
}

export interface DigestItem_AuthoritiesChange {
  __kind: 'AuthoritiesChange'
  value: Uint8Array[]
}

export interface DigestItem_ChangesTrieRoot {
  __kind: 'ChangesTrieRoot'
  value: Uint8Array
}

export interface DigestItem_SealV0 {
  __kind: 'SealV0'
  value: [bigint, Uint8Array]
}

export interface DigestItem_Consensus {
  __kind: 'Consensus'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
  __kind: 'Seal'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_PreRuntime {
  __kind: 'PreRuntime'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_ChangesTrieSignal {
  __kind: 'ChangesTrieSignal'
  value: ChangesTrieSignal
}

export interface DigestItem_RuntimeEnvironmentUpdated {
  __kind: 'RuntimeEnvironmentUpdated'
  value: null
}

export type Event = Event_System | Event_Balances | Event_Scheduler | Event_Democracy | Event_Elections | Event_Council | Event_TechnicalCommittee | Event_Treasury | Event_Utility | Event_Vesting | Event_ParachainSystem | Event_PolkadotXcm | Event_CumulusXcm | Event_XTokens | Event_UnknownTokens | Event_XcmpQueue | Event_DmpQueue | Event_CollatorSelection | Event_Session | Event_Currencies | Event_Tips | Event_Tokens | Event_AssetRegistry | Event_XYK | Event_Duster | Event_Exchange | Event_LBP | Event_MultiTransactionPayment | Event_NFT | Event_Sudo

export interface Event_System {
  __kind: 'System'
  value: SystemEvent
}

export interface Event_Balances {
  __kind: 'Balances'
  value: BalancesEvent
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

export interface Event_Treasury {
  __kind: 'Treasury'
  value: TreasuryEvent
}

export interface Event_Utility {
  __kind: 'Utility'
  value: UtilityEvent
}

export interface Event_Vesting {
  __kind: 'Vesting'
  value: VestingEvent
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

export interface Event_XTokens {
  __kind: 'XTokens'
  value: XTokensEvent
}

export interface Event_UnknownTokens {
  __kind: 'UnknownTokens'
  value: UnknownTokensEvent
}

export interface Event_XcmpQueue {
  __kind: 'XcmpQueue'
  value: XcmpQueueEvent
}

export interface Event_DmpQueue {
  __kind: 'DmpQueue'
  value: DmpQueueEvent
}

export interface Event_CollatorSelection {
  __kind: 'CollatorSelection'
  value: CollatorSelectionEvent
}

export interface Event_Session {
  __kind: 'Session'
  value: SessionEvent
}

export interface Event_Currencies {
  __kind: 'Currencies'
  value: CurrenciesEvent
}

export interface Event_Tips {
  __kind: 'Tips'
  value: TipsEvent
}

export interface Event_Tokens {
  __kind: 'Tokens'
  value: TokensEvent
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

export interface Event_MultiTransactionPayment {
  __kind: 'MultiTransactionPayment'
  value: MultiTransactionPaymentEvent
}

export interface Event_NFT {
  __kind: 'NFT'
  value: NFTEvent
}

export interface Event_Sudo {
  __kind: 'Sudo'
  value: SudoEvent
}

export interface PerDispatchClassU32 {
  normal: number
  operational: number
  mandatory: number
}

export interface PerDispatchClassWeightsPerClass {
  normal: WeightPerClass
  operational: WeightPerClass
  mandatory: WeightPerClass
}

export type NetworkId = NetworkId_Any | NetworkId_Named | NetworkId_Polkadot | NetworkId_Kusama

export interface NetworkId_Any {
  __kind: 'Any'
  value: null
}

export interface NetworkId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface NetworkId_Polkadot {
  __kind: 'Polkadot'
  value: null
}

export interface NetworkId_Kusama {
  __kind: 'Kusama'
  value: null
}

export type BodyId = BodyId_Unit | BodyId_Named | BodyId_Index | BodyId_Executive | BodyId_Technical | BodyId_Legislative | BodyId_Judicial

export interface BodyId_Unit {
  __kind: 'Unit'
  value: null
}

export interface BodyId_Named {
  __kind: 'Named'
  value: Uint8Array
}

export interface BodyId_Index {
  __kind: 'Index'
  value: number
}

export interface BodyId_Executive {
  __kind: 'Executive'
  value: null
}

export interface BodyId_Technical {
  __kind: 'Technical'
  value: null
}

export interface BodyId_Legislative {
  __kind: 'Legislative'
  value: null
}

export interface BodyId_Judicial {
  __kind: 'Judicial'
  value: null
}

export type BodyPart = BodyPart_Voice | BodyPart_Members | BodyPart_Fraction | BodyPart_AtLeastProportion | BodyPart_MoreThanProportion

export interface BodyPart_Voice {
  __kind: 'Voice'
  value: null
}

export interface BodyPart_Members {
  __kind: 'Members'
  value: number
}

export interface BodyPart_Fraction {
  __kind: 'Fraction'
  nom: number
  denom: number
}

export interface BodyPart_AtLeastProportion {
  __kind: 'AtLeastProportion'
  nom: number
  denom: number
}

export interface BodyPart_MoreThanProportion {
  __kind: 'MoreThanProportion'
  nom: number
  denom: number
}

export interface Tally {
  ayes: bigint
  nays: bigint
  turnout: bigint
}

export interface Delegations {
  votes: bigint
  capital: bigint
}

export type SystemOrigin = SystemOrigin_Root | SystemOrigin_Signed | SystemOrigin_None

export interface SystemOrigin_Root {
  __kind: 'Root'
  value: null
}

export interface SystemOrigin_Signed {
  __kind: 'Signed'
  value: Uint8Array
}

export interface SystemOrigin_None {
  __kind: 'None'
  value: null
}

export type CollectiveOrigin = CollectiveOrigin_Members | CollectiveOrigin_Member

export interface CollectiveOrigin_Members {
  __kind: 'Members'
  value: [number, number]
}

export interface CollectiveOrigin_Member {
  __kind: 'Member'
  value: Uint8Array
}

export type ChangesTrieSignal = ChangesTrieSignal_NewConfiguration

export interface ChangesTrieSignal_NewConfiguration {
  __kind: 'NewConfiguration'
  value: (ChangesTrieConfiguration | undefined)
}

export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 *  An extrinsic completed successfully. \[info\]
 */
export interface SystemEvent_ExtrinsicSuccess {
  __kind: 'ExtrinsicSuccess'
  value: DispatchInfo
}

/**
 *  An extrinsic failed. \[error, info\]
 */
export interface SystemEvent_ExtrinsicFailed {
  __kind: 'ExtrinsicFailed'
  value: [DispatchError, DispatchInfo]
}

/**
 *  `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
  __kind: 'CodeUpdated'
}

/**
 *  A new \[account\] was created.
 */
export interface SystemEvent_NewAccount {
  __kind: 'NewAccount'
  value: Uint8Array
}

/**
 *  An \[account\] was reaped.
 */
export interface SystemEvent_KilledAccount {
  __kind: 'KilledAccount'
  value: Uint8Array
}

/**
 *  On on-chain remark happened. \[origin, remark_hash\]
 */
export interface SystemEvent_Remarked {
  __kind: 'Remarked'
  value: [Uint8Array, Uint8Array]
}

export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated

/**
 *  An account was created with some free balance. \[account, free_balance\]
 */
export interface BalancesEvent_Endowed {
  __kind: 'Endowed'
  value: [Uint8Array, bigint]
}

/**
 *  An account was removed whose balance was non-zero but below ExistentialDeposit,
 *  resulting in an outright loss. \[account, balance\]
 */
export interface BalancesEvent_DustLost {
  __kind: 'DustLost'
  value: [Uint8Array, bigint]
}

/**
 *  Transfer succeeded. \[from, to, value\]
 */
export interface BalancesEvent_Transfer {
  __kind: 'Transfer'
  value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A balance was set by root. \[who, free, reserved\]
 */
export interface BalancesEvent_BalanceSet {
  __kind: 'BalanceSet'
  value: [Uint8Array, bigint, bigint]
}

/**
 *  Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
 */
export interface BalancesEvent_Deposit {
  __kind: 'Deposit'
  value: [Uint8Array, bigint]
}

/**
 *  Some balance was reserved (moved from free to reserved). \[who, value\]
 */
export interface BalancesEvent_Reserved {
  __kind: 'Reserved'
  value: [Uint8Array, bigint]
}

/**
 *  Some balance was unreserved (moved from reserved to free). \[who, value\]
 */
export interface BalancesEvent_Unreserved {
  __kind: 'Unreserved'
  value: [Uint8Array, bigint]
}

/**
 *  Some balance was moved from the reserve of the first account to the second account.
 *  Final argument indicates the destination balance type.
 *  \[from, to, balance, destination_status\]
 */
export interface BalancesEvent_ReserveRepatriated {
  __kind: 'ReserveRepatriated'
  value: [Uint8Array, Uint8Array, bigint, BalanceStatus]
}

export type SchedulerEvent = SchedulerEvent_Scheduled | SchedulerEvent_Canceled | SchedulerEvent_Dispatched

/**
 *  Scheduled some task. \[when, index\]
 */
export interface SchedulerEvent_Scheduled {
  __kind: 'Scheduled'
  value: [number, number]
}

/**
 *  Canceled some task. \[when, index\]
 */
export interface SchedulerEvent_Canceled {
  __kind: 'Canceled'
  value: [number, number]
}

/**
 *  Dispatched some task. \[task, id, result\]
 */
export interface SchedulerEvent_Dispatched {
  __kind: 'Dispatched'
  value: [[number, number], (Uint8Array | undefined), Result<null, DispatchError>]
}

export type DemocracyEvent = DemocracyEvent_Proposed | DemocracyEvent_Tabled | DemocracyEvent_ExternalTabled | DemocracyEvent_Started | DemocracyEvent_Passed | DemocracyEvent_NotPassed | DemocracyEvent_Cancelled | DemocracyEvent_Executed | DemocracyEvent_Delegated | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed | DemocracyEvent_PreimageNoted | DemocracyEvent_PreimageUsed | DemocracyEvent_PreimageInvalid | DemocracyEvent_PreimageMissing | DemocracyEvent_PreimageReaped | DemocracyEvent_Blacklisted

/**
 *  A motion has been proposed by a public account. \[proposal_index, deposit\]
 */
export interface DemocracyEvent_Proposed {
  __kind: 'Proposed'
  value: [number, bigint]
}

/**
 *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
 */
export interface DemocracyEvent_Tabled {
  __kind: 'Tabled'
  value: [number, bigint, Uint8Array[]]
}

/**
 *  An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
  __kind: 'ExternalTabled'
}

/**
 *  A referendum has begun. \[ref_index, threshold\]
 */
export interface DemocracyEvent_Started {
  __kind: 'Started'
  value: [number, VoteThreshold]
}

/**
 *  A proposal has been approved by referendum. \[ref_index\]
 */
export interface DemocracyEvent_Passed {
  __kind: 'Passed'
  value: number
}

/**
 *  A proposal has been rejected by referendum. \[ref_index\]
 */
export interface DemocracyEvent_NotPassed {
  __kind: 'NotPassed'
  value: number
}

/**
 *  A referendum has been cancelled. \[ref_index\]
 */
export interface DemocracyEvent_Cancelled {
  __kind: 'Cancelled'
  value: number
}

/**
 *  A proposal has been enacted. \[ref_index, result\]
 */
export interface DemocracyEvent_Executed {
  __kind: 'Executed'
  value: [number, Result<null, DispatchError>]
}

/**
 *  An account has delegated their vote to another account. \[who, target\]
 */
export interface DemocracyEvent_Delegated {
  __kind: 'Delegated'
  value: [Uint8Array, Uint8Array]
}

/**
 *  An \[account\] has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
  __kind: 'Undelegated'
  value: Uint8Array
}

/**
 *  An external proposal has been vetoed. \[who, proposal_hash, until\]
 */
export interface DemocracyEvent_Vetoed {
  __kind: 'Vetoed'
  value: [Uint8Array, Uint8Array, number]
}

/**
 *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
 */
export interface DemocracyEvent_PreimageNoted {
  __kind: 'PreimageNoted'
  value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A proposal preimage was removed and used (the deposit was returned).
 *  \[proposal_hash, provider, deposit\]
 */
export interface DemocracyEvent_PreimageUsed {
  __kind: 'PreimageUsed'
  value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A proposal could not be executed because its preimage was invalid.
 *  \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageInvalid {
  __kind: 'PreimageInvalid'
  value: [Uint8Array, number]
}

/**
 *  A proposal could not be executed because its preimage was missing.
 *  \[proposal_hash, ref_index\]
 */
export interface DemocracyEvent_PreimageMissing {
  __kind: 'PreimageMissing'
  value: [Uint8Array, number]
}

/**
 *  A registered preimage was removed and the deposit collected by the reaper.
 *  \[proposal_hash, provider, deposit, reaper\]
 */
export interface DemocracyEvent_PreimageReaped {
  __kind: 'PreimageReaped'
  value: [Uint8Array, Uint8Array, bigint, Uint8Array]
}

/**
 *  A proposal \[hash\] has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
  __kind: 'Blacklisted'
  value: Uint8Array
}

export type ElectionsEvent = ElectionsEvent_NewTerm | ElectionsEvent_EmptyTerm | ElectionsEvent_ElectionError | ElectionsEvent_MemberKicked | ElectionsEvent_Renounced | ElectionsEvent_CandidateSlashed | ElectionsEvent_SeatHolderSlashed

/**
 *  A new term with \[new_members\]. This indicates that enough candidates existed to run
 *  the election, not that enough have has been elected. The inner value must be examined
 *  for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
 *  slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
 *  begin with.
 */
export interface ElectionsEvent_NewTerm {
  __kind: 'NewTerm'
  value: [Uint8Array, bigint][]
}

/**
 *  No (or not enough) candidates existed for this round. This is different from
 *  `NewTerm(\[\])`. See the description of `NewTerm`.
 */
export interface ElectionsEvent_EmptyTerm {
  __kind: 'EmptyTerm'
}

/**
 *  Internal error happened while trying to perform election.
 */
export interface ElectionsEvent_ElectionError {
  __kind: 'ElectionError'
}

/**
 *  A \[member\] has been removed. This should always be followed by either `NewTerm` or
 *  `EmptyTerm`.
 */
export interface ElectionsEvent_MemberKicked {
  __kind: 'MemberKicked'
  value: Uint8Array
}

/**
 *  Someone has renounced their candidacy.
 */
export interface ElectionsEvent_Renounced {
  __kind: 'Renounced'
  value: Uint8Array
}

/**
 *  A \[candidate\] was slashed by \[amount\] due to failing to obtain a seat as member or
 *  runner-up.
 * 
 *  Note that old members and runners-up are also candidates.
 */
export interface ElectionsEvent_CandidateSlashed {
  __kind: 'CandidateSlashed'
  value: [Uint8Array, bigint]
}

/**
 *  A \[seat holder\] was slashed by \[amount\] by being forcefully removed from the set.
 */
export interface ElectionsEvent_SeatHolderSlashed {
  __kind: 'SeatHolderSlashed'
  value: [Uint8Array, bigint]
}

export type CouncilEvent = CouncilEvent_Proposed | CouncilEvent_Voted | CouncilEvent_Approved | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Closed

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 *  \[account, proposal_index, proposal_hash, threshold\]
 */
export interface CouncilEvent_Proposed {
  __kind: 'Proposed'
  value: [Uint8Array, number, Uint8Array, number]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 *  \[account, proposal_hash, voted, yes, no\]
 */
export interface CouncilEvent_Voted {
  __kind: 'Voted'
  value: [Uint8Array, Uint8Array, boolean, number, number]
}

/**
 *  A motion was approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface CouncilEvent_Approved {
  __kind: 'Approved'
  value: Uint8Array
}

/**
 *  A motion was not approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface CouncilEvent_Disapproved {
  __kind: 'Disapproved'
  value: Uint8Array
}

/**
 *  A motion was executed; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface CouncilEvent_Executed {
  __kind: 'Executed'
  value: [Uint8Array, Result<null, DispatchError>]
}

/**
 *  A single member did some action; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface CouncilEvent_MemberExecuted {
  __kind: 'MemberExecuted'
  value: [Uint8Array, Result<null, DispatchError>]
}

/**
 *  A proposal was closed because its threshold was reached or after its duration was up.
 *  \[proposal_hash, yes, no\]
 */
export interface CouncilEvent_Closed {
  __kind: 'Closed'
  value: [Uint8Array, number, number]
}

export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted | TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Closed

/**
 *  A motion (given hash) has been proposed (by given account) with a threshold (given
 *  `MemberCount`).
 *  \[account, proposal_index, proposal_hash, threshold\]
 */
export interface TechnicalCommitteeEvent_Proposed {
  __kind: 'Proposed'
  value: [Uint8Array, number, Uint8Array, number]
}

/**
 *  A motion (given hash) has been voted on by given account, leaving
 *  a tally (yes votes and no votes given respectively as `MemberCount`).
 *  \[account, proposal_hash, voted, yes, no\]
 */
export interface TechnicalCommitteeEvent_Voted {
  __kind: 'Voted'
  value: [Uint8Array, Uint8Array, boolean, number, number]
}

/**
 *  A motion was approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface TechnicalCommitteeEvent_Approved {
  __kind: 'Approved'
  value: Uint8Array
}

/**
 *  A motion was not approved by the required threshold.
 *  \[proposal_hash\]
 */
export interface TechnicalCommitteeEvent_Disapproved {
  __kind: 'Disapproved'
  value: Uint8Array
}

/**
 *  A motion was executed; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface TechnicalCommitteeEvent_Executed {
  __kind: 'Executed'
  value: [Uint8Array, Result<null, DispatchError>]
}

/**
 *  A single member did some action; result will be `Ok` if it returned without error.
 *  \[proposal_hash, result\]
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
  __kind: 'MemberExecuted'
  value: [Uint8Array, Result<null, DispatchError>]
}

/**
 *  A proposal was closed because its threshold was reached or after its duration was up.
 *  \[proposal_hash, yes, no\]
 */
export interface TechnicalCommitteeEvent_Closed {
  __kind: 'Closed'
  value: [Uint8Array, number, number]
}

export type TreasuryEvent = TreasuryEvent_Proposed | TreasuryEvent_Spending | TreasuryEvent_Awarded | TreasuryEvent_Rejected | TreasuryEvent_Burnt | TreasuryEvent_Rollover | TreasuryEvent_Deposit

/**
 *  New proposal. \[proposal_index\]
 */
export interface TreasuryEvent_Proposed {
  __kind: 'Proposed'
  value: number
}

/**
 *  We have ended a spend period and will now allocate funds. \[budget_remaining\]
 */
export interface TreasuryEvent_Spending {
  __kind: 'Spending'
  value: bigint
}

/**
 *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
 */
export interface TreasuryEvent_Awarded {
  __kind: 'Awarded'
  value: [number, bigint, Uint8Array]
}

/**
 *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
 */
export interface TreasuryEvent_Rejected {
  __kind: 'Rejected'
  value: [number, bigint]
}

/**
 *  Some of our funds have been burnt. \[burn\]
 */
export interface TreasuryEvent_Burnt {
  __kind: 'Burnt'
  value: bigint
}

/**
 *  Spending has finished; this is the amount that rolls over until next spend.
 *  \[budget_remaining\]
 */
export interface TreasuryEvent_Rollover {
  __kind: 'Rollover'
  value: bigint
}

/**
 *  Some funds have been deposited. \[deposit\]
 */
export interface TreasuryEvent_Deposit {
  __kind: 'Deposit'
  value: bigint
}

export type UtilityEvent = UtilityEvent_BatchInterrupted | UtilityEvent_BatchCompleted | UtilityEvent_ItemCompleted

/**
 *  Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 *  well as the error. \[index, error\]
 */
export interface UtilityEvent_BatchInterrupted {
  __kind: 'BatchInterrupted'
  value: [number, DispatchError]
}

/**
 *  Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
  __kind: 'BatchCompleted'
}

/**
 *  A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
  __kind: 'ItemCompleted'
}

export type VestingEvent = VestingEvent_VestingScheduleAdded | VestingEvent_Claimed | VestingEvent_VestingSchedulesUpdated

/**
 *  Added new vesting schedule. \[from, to, vesting_schedule\]
 */
export interface VestingEvent_VestingScheduleAdded {
  __kind: 'VestingScheduleAdded'
  value: [Uint8Array, Uint8Array, VestingScheduleOf]
}

/**
 *  Claimed vesting. \[who, locked_amount\]
 */
export interface VestingEvent_Claimed {
  __kind: 'Claimed'
  value: [Uint8Array, bigint]
}

/**
 *  Updated vesting schedules. \[who\]
 */
export interface VestingEvent_VestingSchedulesUpdated {
  __kind: 'VestingSchedulesUpdated'
  value: Uint8Array
}

export type ParachainSystemEvent = ParachainSystemEvent_ValidationFunctionStored | ParachainSystemEvent_ValidationFunctionApplied | ParachainSystemEvent_UpgradeAuthorized | ParachainSystemEvent_DownwardMessagesReceived | ParachainSystemEvent_DownwardMessagesProcessed

/**
 *  The validation function has been scheduled to apply as of the contained relay chain
 *  block number.
 */
export interface ParachainSystemEvent_ValidationFunctionStored {
  __kind: 'ValidationFunctionStored'
  value: number
}

/**
 *  The validation function was applied as of the contained relay chain block number.
 */
export interface ParachainSystemEvent_ValidationFunctionApplied {
  __kind: 'ValidationFunctionApplied'
  value: number
}

/**
 *  An upgrade has been authorized.
 */
export interface ParachainSystemEvent_UpgradeAuthorized {
  __kind: 'UpgradeAuthorized'
  value: Uint8Array
}

/**
 *  Some downward messages have been received and will be processed.
 *  \[ count \]
 */
export interface ParachainSystemEvent_DownwardMessagesReceived {
  __kind: 'DownwardMessagesReceived'
  value: number
}

/**
 *  Downward messages were processed using the given weight.
 *  \[ weight_used, result_mqc_head \]
 */
export interface ParachainSystemEvent_DownwardMessagesProcessed {
  __kind: 'DownwardMessagesProcessed'
  value: [bigint, Uint8Array]
}

export type PolkadotXcmEvent = PolkadotXcmEvent_Attempted | PolkadotXcmEvent_Sent

export interface PolkadotXcmEvent_Attempted {
  __kind: 'Attempted'
  value: Outcome
}

export interface PolkadotXcmEvent_Sent {
  __kind: 'Sent'
  value: [MultiLocation, MultiLocation, Xcm]
}

export type CumulusXcmEvent = CumulusXcmEvent_InvalidFormat | CumulusXcmEvent_UnsupportedVersion | CumulusXcmEvent_ExecutedDownward

/**
 *  Downward message is invalid XCM.
 *  \[ id \]
 */
export interface CumulusXcmEvent_InvalidFormat {
  __kind: 'InvalidFormat'
  value: Uint8Array
}

/**
 *  Downward message is unsupported version of XCM.
 *  \[ id \]
 */
export interface CumulusXcmEvent_UnsupportedVersion {
  __kind: 'UnsupportedVersion'
  value: Uint8Array
}

/**
 *  Downward message executed with the given outcome.
 *  \[ id, outcome \]
 */
export interface CumulusXcmEvent_ExecutedDownward {
  __kind: 'ExecutedDownward'
  value: [Uint8Array, Outcome]
}

export type XTokensEvent = XTokensEvent_Transferred | XTokensEvent_TransferredMultiAsset

/**
 *  Transferred. \[sender, currency_id, amount, dest\]
 */
export interface XTokensEvent_Transferred {
  __kind: 'Transferred'
  value: [Uint8Array, number, bigint, MultiLocation]
}

/**
 *  Transferred `MultiAsset`. \[sender, asset, dest\]
 */
export interface XTokensEvent_TransferredMultiAsset {
  __kind: 'TransferredMultiAsset'
  value: [Uint8Array, MultiAsset, MultiLocation]
}

export type UnknownTokensEvent = UnknownTokensEvent_Deposited | UnknownTokensEvent_Withdrawn

/**
 *  Deposit success. [asset, to]
 */
export interface UnknownTokensEvent_Deposited {
  __kind: 'Deposited'
  value: [MultiAsset, MultiLocation]
}

/**
 *  Withdraw success. [asset, from]
 */
export interface UnknownTokensEvent_Withdrawn {
  __kind: 'Withdrawn'
  value: [MultiAsset, MultiLocation]
}

export type XcmpQueueEvent = XcmpQueueEvent_Success | XcmpQueueEvent_Fail | XcmpQueueEvent_BadVersion | XcmpQueueEvent_BadFormat | XcmpQueueEvent_UpwardMessageSent | XcmpQueueEvent_XcmpMessageSent

/**
 *  Some XCM was executed ok.
 */
export interface XcmpQueueEvent_Success {
  __kind: 'Success'
  value: (Uint8Array | undefined)
}

/**
 *  Some XCM failed.
 */
export interface XcmpQueueEvent_Fail {
  __kind: 'Fail'
  value: [(Uint8Array | undefined), XcmError]
}

/**
 *  Bad XCM version used.
 */
export interface XcmpQueueEvent_BadVersion {
  __kind: 'BadVersion'
  value: (Uint8Array | undefined)
}

/**
 *  Bad XCM format used.
 */
export interface XcmpQueueEvent_BadFormat {
  __kind: 'BadFormat'
  value: (Uint8Array | undefined)
}

/**
 *  An upward message was sent to the relay chain.
 */
export interface XcmpQueueEvent_UpwardMessageSent {
  __kind: 'UpwardMessageSent'
  value: (Uint8Array | undefined)
}

/**
 *  An HRMP message was sent to a sibling parachain.
 */
export interface XcmpQueueEvent_XcmpMessageSent {
  __kind: 'XcmpMessageSent'
  value: (Uint8Array | undefined)
}

export type DmpQueueEvent = DmpQueueEvent_InvalidFormat | DmpQueueEvent_UnsupportedVersion | DmpQueueEvent_ExecutedDownward | DmpQueueEvent_WeightExhausted | DmpQueueEvent_OverweightEnqueued | DmpQueueEvent_OverweightServiced

/**
 *  Downward message is invalid XCM.
 *  \[ id \]
 */
export interface DmpQueueEvent_InvalidFormat {
  __kind: 'InvalidFormat'
  value: Uint8Array
}

/**
 *  Downward message is unsupported version of XCM.
 *  \[ id \]
 */
export interface DmpQueueEvent_UnsupportedVersion {
  __kind: 'UnsupportedVersion'
  value: Uint8Array
}

/**
 *  Downward message executed with the given outcome.
 *  \[ id, outcome \]
 */
export interface DmpQueueEvent_ExecutedDownward {
  __kind: 'ExecutedDownward'
  value: [Uint8Array, Outcome]
}

/**
 *  The weight limit for handling downward messages was reached.
 *  \[ id, remaining, required \]
 */
export interface DmpQueueEvent_WeightExhausted {
  __kind: 'WeightExhausted'
  value: [Uint8Array, bigint, bigint]
}

/**
 *  Downward message is overweight and was placed in the overweight queue.
 *  \[ id, index, required \]
 */
export interface DmpQueueEvent_OverweightEnqueued {
  __kind: 'OverweightEnqueued'
  value: [Uint8Array, bigint, bigint]
}

/**
 *  Downward message from the overweight queue was executed.
 *  \[ index, used \]
 */
export interface DmpQueueEvent_OverweightServiced {
  __kind: 'OverweightServiced'
  value: [bigint, bigint]
}

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

export type SessionEvent = SessionEvent_NewSession

/**
 *  New session has happened. Note that the argument is the \[session_index\], not the block
 *  number as the type might suggest.
 */
export interface SessionEvent_NewSession {
  __kind: 'NewSession'
  value: number
}

export type CurrenciesEvent = CurrenciesEvent_Transferred | CurrenciesEvent_BalanceUpdated | CurrenciesEvent_Deposited | CurrenciesEvent_Withdrawn

/**
 *  Currency transfer success. \[currency_id, from, to, amount\]
 */
export interface CurrenciesEvent_Transferred {
  __kind: 'Transferred'
  value: [number, Uint8Array, Uint8Array, bigint]
}

/**
 *  Update balance success. \[currency_id, who, amount\]
 */
export interface CurrenciesEvent_BalanceUpdated {
  __kind: 'BalanceUpdated'
  value: [number, Uint8Array, bigint]
}

/**
 *  Deposit success. \[currency_id, who, amount\]
 */
export interface CurrenciesEvent_Deposited {
  __kind: 'Deposited'
  value: [number, Uint8Array, bigint]
}

/**
 *  Withdraw success. \[currency_id, who, amount\]
 */
export interface CurrenciesEvent_Withdrawn {
  __kind: 'Withdrawn'
  value: [number, Uint8Array, bigint]
}

export type TipsEvent = TipsEvent_NewTip | TipsEvent_TipClosing | TipsEvent_TipClosed | TipsEvent_TipRetracted | TipsEvent_TipSlashed

/**
 *  A new tip suggestion has been opened. \[tip_hash\]
 */
export interface TipsEvent_NewTip {
  __kind: 'NewTip'
  value: Uint8Array
}

/**
 *  A tip suggestion has reached threshold and is closing. \[tip_hash\]
 */
export interface TipsEvent_TipClosing {
  __kind: 'TipClosing'
  value: Uint8Array
}

/**
 *  A tip suggestion has been closed. \[tip_hash, who, payout\]
 */
export interface TipsEvent_TipClosed {
  __kind: 'TipClosed'
  value: [Uint8Array, Uint8Array, bigint]
}

/**
 *  A tip suggestion has been retracted. \[tip_hash\]
 */
export interface TipsEvent_TipRetracted {
  __kind: 'TipRetracted'
  value: Uint8Array
}

/**
 *  A tip suggestion has been slashed. \[tip_hash, finder, deposit\]
 */
export interface TipsEvent_TipSlashed {
  __kind: 'TipSlashed'
  value: [Uint8Array, Uint8Array, bigint]
}

export type TokensEvent = TokensEvent_Endowed | TokensEvent_DustLost | TokensEvent_Transfer | TokensEvent_Reserved | TokensEvent_Unreserved | TokensEvent_BalanceSet

/**
 *  An account was created with some free balance. \[currency_id,
 *  account, free_balance\]
 */
export interface TokensEvent_Endowed {
  __kind: 'Endowed'
  value: [number, Uint8Array, bigint]
}

/**
 *  An account was removed whose balance was non-zero but below
 *  ExistentialDeposit, resulting in an outright loss. \[currency_id,
 *  account, balance\]
 */
export interface TokensEvent_DustLost {
  __kind: 'DustLost'
  value: [number, Uint8Array, bigint]
}

/**
 *  Transfer succeeded. \[currency_id, from, to, value\]
 */
export interface TokensEvent_Transfer {
  __kind: 'Transfer'
  value: [number, Uint8Array, Uint8Array, bigint]
}

/**
 *  Some balance was reserved (moved from free to reserved).
 *  \[currency_id, who, value\]
 */
export interface TokensEvent_Reserved {
  __kind: 'Reserved'
  value: [number, Uint8Array, bigint]
}

/**
 *  Some balance was unreserved (moved from reserved to free).
 *  \[currency_id, who, value\]
 */
export interface TokensEvent_Unreserved {
  __kind: 'Unreserved'
  value: [number, Uint8Array, bigint]
}

/**
 *  A balance was set by root. \[who, free, reserved\]
 */
export interface TokensEvent_BalanceSet {
  __kind: 'BalanceSet'
  value: [number, Uint8Array, bigint, bigint]
}

export type AssetRegistryEvent = AssetRegistryEvent_Registered | AssetRegistryEvent_Updated | AssetRegistryEvent_MetadataSet | AssetRegistryEvent_LocationSet

/**
 *  Asset was registered. \[asset_id, name, type\]
 */
export interface AssetRegistryEvent_Registered {
  __kind: 'Registered'
  value: [number, Uint8Array, AssetType]
}

/**
 *  Asset was updated. \[asset_id, name, type\]
 */
export interface AssetRegistryEvent_Updated {
  __kind: 'Updated'
  value: [number, Uint8Array, AssetType]
}

/**
 *  Metadata set for an asset. \[asset_id, symbol, decimals\]
 */
export interface AssetRegistryEvent_MetadataSet {
  __kind: 'MetadataSet'
  value: [number, Uint8Array, number]
}

/**
 *  Native location set for an asset. \[asset_id, location\]
 */
export interface AssetRegistryEvent_LocationSet {
  __kind: 'LocationSet'
  value: [number, AssetNativeLocation]
}

export type XYKEvent = XYKEvent_LiquidityAdded | XYKEvent_LiquidityRemoved | XYKEvent_PoolCreated | XYKEvent_PoolDestroyed | XYKEvent_SellExecuted | XYKEvent_BuyExecuted

/**
 *  New liquidity was provided to the pool. [who, asset a, asset b, amount a, amount b]
 */
export interface XYKEvent_LiquidityAdded {
  __kind: 'LiquidityAdded'
  value: [Uint8Array, number, number, bigint, bigint]
}

/**
 *  Liquidity was removed from the pool. [who, asset a, asset b, shares]
 */
export interface XYKEvent_LiquidityRemoved {
  __kind: 'LiquidityRemoved'
  value: [Uint8Array, number, number, bigint]
}

/**
 *  Pool was created. [who, asset a, asset b, initial shares amount]
 */
export interface XYKEvent_PoolCreated {
  __kind: 'PoolCreated'
  value: [Uint8Array, number, number, bigint]
}

/**
 *  Pool was destroyed. [who, asset a, asset b]
 */
export interface XYKEvent_PoolDestroyed {
  __kind: 'PoolDestroyed'
  value: [Uint8Array, number, number]
}

/**
 *  Asset sale executed. [who, asset in, asset out, amount, sale price, fee asset, fee amount]
 */
export interface XYKEvent_SellExecuted {
  __kind: 'SellExecuted'
  value: [Uint8Array, number, number, bigint, bigint, number, bigint]
}

/**
 *  Asset purchase executed. [who, asset out, asset in, amount, buy price, fee asset, fee amount]
 */
export interface XYKEvent_BuyExecuted {
  __kind: 'BuyExecuted'
  value: [Uint8Array, number, number, bigint, bigint, number, bigint]
}

export type DusterEvent = DusterEvent_Dusted | DusterEvent_Added | DusterEvent_Removed

/**
 *  Account dusted.
 */
export interface DusterEvent_Dusted {
  __kind: 'Dusted'
  value: [Uint8Array, bigint]
}

/**
 *  Account added to non-dustable list.
 */
export interface DusterEvent_Added {
  __kind: 'Added'
  value: Uint8Array
}

/**
 *  Account removed from non-dustable list.
 */
export interface DusterEvent_Removed {
  __kind: 'Removed'
  value: Uint8Array
}

export type ExchangeEvent = ExchangeEvent_IntentionRegistered | ExchangeEvent_IntentionResolvedAMMTrade | ExchangeEvent_IntentionResolvedDirectTrade | ExchangeEvent_IntentionResolvedDirectTradeFees | ExchangeEvent_InsufficientAssetBalanceEvent | ExchangeEvent_IntentionResolveErrorEvent

/**
 *  Intention registered event
 *  who, asset a, asset b, amount, intention type, intention id
 */
export interface ExchangeEvent_IntentionRegistered {
  __kind: 'IntentionRegistered'
  value: [Uint8Array, number, number, bigint, IntentionType, Uint8Array]
}

/**
 *  Intention resolved as AMM Trade
 *  who, intention type, intention id, amount, amount sold/bought
 */
export interface ExchangeEvent_IntentionResolvedAMMTrade {
  __kind: 'IntentionResolvedAMMTrade'
  value: [Uint8Array, IntentionType, Uint8Array, bigint, bigint]
}

/**
 *  Intention resolved as Direct Trade
 *  who, who - account between which direct trade happens
 *  intention id, intention id - intentions which are being resolved ( fully or partially )
 *  Balance, Balance  - corresponding amounts
 */
export interface ExchangeEvent_IntentionResolvedDirectTrade {
  __kind: 'IntentionResolvedDirectTrade'
  value: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, bigint, bigint]
}

/**
 *  Paid fees event
 *  who - account which paid feed
 *  intention id - intention which was resolved
 *  account paid to, asset, amount
 */
export interface ExchangeEvent_IntentionResolvedDirectTradeFees {
  __kind: 'IntentionResolvedDirectTradeFees'
  value: [Uint8Array, Uint8Array, Uint8Array, number, bigint]
}

/**
 *  Error event - insuficient balance of specified asset
 *  who, asset, intention type, intention id, error detail
 */
export interface ExchangeEvent_InsufficientAssetBalanceEvent {
  __kind: 'InsufficientAssetBalanceEvent'
  value: [Uint8Array, number, IntentionType, Uint8Array, DispatchError]
}

/**
 *  Intetion Error Event
 *  who, assets, sell or buy, intention id, error detail
 */
export interface ExchangeEvent_IntentionResolveErrorEvent {
  __kind: 'IntentionResolveErrorEvent'
  value: [Uint8Array, AssetPair, IntentionType, Uint8Array, DispatchError]
}

export type LBPEvent = LBPEvent_PoolCreated | LBPEvent_PoolUpdated | LBPEvent_LiquidityAdded | LBPEvent_LiquidityRemoved | LBPEvent_SellExecuted | LBPEvent_BuyExecuted | LBPEvent_Paused | LBPEvent_Unpaused

/**
 *  Pool was created by the `CreatePool` origin. [pool_id, pool_data]
 */
export interface LBPEvent_PoolCreated {
  __kind: 'PoolCreated'
  value: [Uint8Array, Pool]
}

/**
 *  Pool data were updated. [pool_id, pool_data]
 */
export interface LBPEvent_PoolUpdated {
  __kind: 'PoolUpdated'
  value: [Uint8Array, Pool]
}

/**
 *  New liquidity was provided to the pool. [who, asset_a, asset_b, amount_a, amount_b]
 */
export interface LBPEvent_LiquidityAdded {
  __kind: 'LiquidityAdded'
  value: [Uint8Array, number, number, bigint, bigint]
}

/**
 *  Liquidity was removed from the pool and the pool was destroyed. [who, asset_a, asset_b, amount_a, amount_b]
 */
export interface LBPEvent_LiquidityRemoved {
  __kind: 'LiquidityRemoved'
  value: [Uint8Array, number, number, bigint, bigint]
}

/**
 *  Sale executed. [who, asset_in, asset_out, amount, sale_price, fee_asset, fee_amount]
 */
export interface LBPEvent_SellExecuted {
  __kind: 'SellExecuted'
  value: [Uint8Array, number, number, bigint, bigint, number, bigint]
}

/**
 *  Purchase executed. [who, asset_out, asset_in, amount, buy_price, fee_asset, fee_amount]
 */
export interface LBPEvent_BuyExecuted {
  __kind: 'BuyExecuted'
  value: [Uint8Array, number, number, bigint, bigint, number, bigint]
}

/**
 *  Pool was paused. [who, pool_id]
 */
export interface LBPEvent_Paused {
  __kind: 'Paused'
  value: [Uint8Array, Uint8Array]
}

/**
 *  Pool was unpaused. [who, pool_id]
 */
export interface LBPEvent_Unpaused {
  __kind: 'Unpaused'
  value: [Uint8Array, Uint8Array]
}

export type MultiTransactionPaymentEvent = MultiTransactionPaymentEvent_CurrencySet | MultiTransactionPaymentEvent_CurrencyAdded | MultiTransactionPaymentEvent_CurrencyRemoved | MultiTransactionPaymentEvent_MemberAdded | MultiTransactionPaymentEvent_MemberRemoved

/**
 *  CurrencySet
 *  [who, currency]
 */
export interface MultiTransactionPaymentEvent_CurrencySet {
  __kind: 'CurrencySet'
  value: [Uint8Array, number]
}

/**
 *  New accepted currency added
 *  [who, currency]
 */
export interface MultiTransactionPaymentEvent_CurrencyAdded {
  __kind: 'CurrencyAdded'
  value: [Uint8Array, number]
}

/**
 *  Accepted currency removed
 *  [who, currency]
 */
export interface MultiTransactionPaymentEvent_CurrencyRemoved {
  __kind: 'CurrencyRemoved'
  value: [Uint8Array, number]
}

/**
 *  Member added
 *  [who]
 */
export interface MultiTransactionPaymentEvent_MemberAdded {
  __kind: 'MemberAdded'
  value: Uint8Array
}

/**
 *  Member removed
 *  [who]
 */
export interface MultiTransactionPaymentEvent_MemberRemoved {
  __kind: 'MemberRemoved'
  value: Uint8Array
}

export type NFTEvent = NFTEvent_TokenClassCreated | NFTEvent_TokenMinted | NFTEvent_TokenMintedLockToggled | NFTEvent_TokenTransferred | NFTEvent_TokenBurned | NFTEvent_TokenClassDestroyed | NFTEvent_BoughtFromPool | NFTEvent_SoldToPool | NFTEvent_TokenPoolCreated | NFTEvent_TokenPoolDestroyed

export interface NFTEvent_TokenClassCreated {
  __kind: 'TokenClassCreated'
  value: [Uint8Array, bigint]
}

export interface NFTEvent_TokenMinted {
  __kind: 'TokenMinted'
  value: [Uint8Array, bigint, bigint]
}

export interface NFTEvent_TokenMintedLockToggled {
  __kind: 'TokenMintedLockToggled'
  value: [Uint8Array, bigint, bigint, boolean]
}

export interface NFTEvent_TokenTransferred {
  __kind: 'TokenTransferred'
  value: [Uint8Array, Uint8Array, bigint, bigint]
}

export interface NFTEvent_TokenBurned {
  __kind: 'TokenBurned'
  value: [Uint8Array, bigint, bigint]
}

export interface NFTEvent_TokenClassDestroyed {
  __kind: 'TokenClassDestroyed'
  value: [Uint8Array, bigint]
}

export interface NFTEvent_BoughtFromPool {
  __kind: 'BoughtFromPool'
  value: [Uint8Array, Uint8Array, bigint, bigint]
}

export interface NFTEvent_SoldToPool {
  __kind: 'SoldToPool'
  value: [Uint8Array, Uint8Array, bigint, bigint]
}

export interface NFTEvent_TokenPoolCreated {
  __kind: 'TokenPoolCreated'
  value: [Uint8Array, bigint]
}

export interface NFTEvent_TokenPoolDestroyed {
  __kind: 'TokenPoolDestroyed'
  value: [Uint8Array, bigint]
}

export type SudoEvent = SudoEvent_Sudid | SudoEvent_KeyChanged | SudoEvent_SudoAsDone

/**
 *  A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
  __kind: 'Sudid'
  value: Result<null, DispatchError>
}

/**
 *  The \[sudoer\] just switched identity; the old key is supplied.
 */
export interface SudoEvent_KeyChanged {
  __kind: 'KeyChanged'
  value: Uint8Array
}

/**
 *  A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
  __kind: 'SudoAsDone'
  value: Result<null, DispatchError>
}

export interface WeightPerClass {
  baseExtrinsic: bigint
  maxExtrinsic: (bigint | undefined)
  maxTotal: (bigint | undefined)
  reserved: (bigint | undefined)
}
