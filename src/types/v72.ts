import type {Result} from './support'

export interface AssetLocation {
  parents: number
  interior: V1Junctions
}

export type AssetType = AssetType_Token | AssetType_PoolShare

export interface AssetType_Token {
  __kind: 'Token'
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

export interface LoyaltyCurve {
  initialRewardPercentage: bigint
  scaleCoef: number
}

export interface Timepoint {
  height: number
  index: number
}

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

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1

export interface VersionedMultiAssets_V0 {
  __kind: 'V0'
  value: V0MultiAsset[]
}

export interface VersionedMultiAssets_V1 {
  __kind: 'V1'
  value: V1MultiAsset[]
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

export type LookupError = LookupError_Unknown | LookupError_BadFormat

export interface LookupError_Unknown {
  __kind: 'Unknown'
}

export interface LookupError_BadFormat {
  __kind: 'BadFormat'
}

export interface DispatchInfo {
  weight: bigint
  class: DispatchClass
  paysFee: Pays
}

export interface V1MultiAsset {
  id: V1AssetId
  fun: V1Fungibility
}

export interface VestingSchedule {
  start: number
  period: number
  periodCount: number
  perPeriod: bigint
}

export interface Header {
  parentHash: Uint8Array
  number: number
  stateRoot: Uint8Array
  extrinsicsRoot: Uint8Array
  digest: Digest
}

export type Call = Call_System | Call_Timestamp | Call_Balances | Call_Treasury | Call_Utility | Call_Scheduler | Call_Democracy | Call_Elections | Call_Council | Call_TechnicalCommittee | Call_Vesting | Call_Proxy | Call_Tips | Call_Authorship | Call_CollatorSelection | Call_Session | Call_Preimage | Call_Uniques | Call_Identity | Call_Multisig | Call_ParachainSystem | Call_PolkadotXcm | Call_CumulusXcm | Call_DmpQueue | Call_AssetRegistry | Call_XYK | Call_Duster | Call_Exchange | Call_LBP | Call_NFT | Call_LiquidityMining | Call_MultiTransactionPayment | Call_PriceOracle | Call_Marketplace | Call_Currencies | Call_Tokens | Call_OrmlXcm | Call_XTokens | Call_Sudo

export interface Call_System {
  __kind: 'System'
  value: SystemCall
}

export interface Call_Timestamp {
  __kind: 'Timestamp'
  value: TimestampCall
}

export interface Call_Balances {
  __kind: 'Balances'
  value: BalancesCall
}

export interface Call_Treasury {
  __kind: 'Treasury'
  value: TreasuryCall
}

export interface Call_Utility {
  __kind: 'Utility'
  value: UtilityCall
}

export interface Call_Scheduler {
  __kind: 'Scheduler'
  value: SchedulerCall
}

export interface Call_Democracy {
  __kind: 'Democracy'
  value: DemocracyCall
}

export interface Call_Elections {
  __kind: 'Elections'
  value: ElectionsCall
}

export interface Call_Council {
  __kind: 'Council'
  value: CouncilCall
}

export interface Call_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: TechnicalCommitteeCall
}

export interface Call_Vesting {
  __kind: 'Vesting'
  value: VestingCall
}

export interface Call_Proxy {
  __kind: 'Proxy'
  value: ProxyCall
}

export interface Call_Tips {
  __kind: 'Tips'
  value: TipsCall
}

export interface Call_Authorship {
  __kind: 'Authorship'
  value: AuthorshipCall
}

export interface Call_CollatorSelection {
  __kind: 'CollatorSelection'
  value: CollatorSelectionCall
}

export interface Call_Session {
  __kind: 'Session'
  value: SessionCall
}

export interface Call_Preimage {
  __kind: 'Preimage'
  value: PreimageCall
}

export interface Call_Uniques {
  __kind: 'Uniques'
  value: UniquesCall
}

export interface Call_Identity {
  __kind: 'Identity'
  value: IdentityCall
}

export interface Call_Multisig {
  __kind: 'Multisig'
  value: MultisigCall
}

export interface Call_ParachainSystem {
  __kind: 'ParachainSystem'
  value: ParachainSystemCall
}

export interface Call_PolkadotXcm {
  __kind: 'PolkadotXcm'
  value: PolkadotXcmCall
}

export interface Call_CumulusXcm {
  __kind: 'CumulusXcm'
  value: CumulusXcmCall
}

export interface Call_DmpQueue {
  __kind: 'DmpQueue'
  value: DmpQueueCall
}

export interface Call_AssetRegistry {
  __kind: 'AssetRegistry'
  value: AssetRegistryCall
}

export interface Call_XYK {
  __kind: 'XYK'
  value: XYKCall
}

export interface Call_Duster {
  __kind: 'Duster'
  value: DusterCall
}

export interface Call_Exchange {
  __kind: 'Exchange'
  value: ExchangeCall
}

export interface Call_LBP {
  __kind: 'LBP'
  value: LBPCall
}

export interface Call_NFT {
  __kind: 'NFT'
  value: NFTCall
}

export interface Call_LiquidityMining {
  __kind: 'LiquidityMining'
  value: LiquidityMiningCall
}

export interface Call_MultiTransactionPayment {
  __kind: 'MultiTransactionPayment'
  value: MultiTransactionPaymentCall
}

export interface Call_PriceOracle {
  __kind: 'PriceOracle'
  value: PriceOracleCall
}

export interface Call_Marketplace {
  __kind: 'Marketplace'
  value: MarketplaceCall
}

export interface Call_Currencies {
  __kind: 'Currencies'
  value: CurrenciesCall
}

export interface Call_Tokens {
  __kind: 'Tokens'
  value: TokensCall
}

export interface Call_OrmlXcm {
  __kind: 'OrmlXcm'
  value: OrmlXcmCall
}

export interface Call_XTokens {
  __kind: 'XTokens'
  value: XTokensCall
}

export interface Call_Sudo {
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

export type Renouncing = Renouncing_Member | Renouncing_RunnerUp | Renouncing_Candidate

export interface Renouncing_Member {
  __kind: 'Member'
}

export interface Renouncing_RunnerUp {
  __kind: 'RunnerUp'
}

export interface Renouncing_Candidate {
  __kind: 'Candidate'
  value: number
}

export type Data = Data_None | Data_Raw0 | Data_Raw1 | Data_Raw2 | Data_Raw3 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_BlakeTwo256 | Data_Sha256 | Data_Keccak256 | Data_ShaThree256

export interface Data_None {
  __kind: 'None'
}

export interface Data_Raw0 {
  __kind: 'Raw0'
  value: Uint8Array
}

export interface Data_Raw1 {
  __kind: 'Raw1'
  value: Uint8Array
}

export interface Data_Raw2 {
  __kind: 'Raw2'
  value: Uint8Array
}

export interface Data_Raw3 {
  __kind: 'Raw3'
  value: Uint8Array
}

export interface Data_Raw4 {
  __kind: 'Raw4'
  value: Uint8Array
}

export interface Data_Raw5 {
  __kind: 'Raw5'
  value: Uint8Array
}

export interface Data_Raw6 {
  __kind: 'Raw6'
  value: Uint8Array
}

export interface Data_Raw7 {
  __kind: 'Raw7'
  value: Uint8Array
}

export interface Data_Raw8 {
  __kind: 'Raw8'
  value: Uint8Array
}

export interface Data_Raw9 {
  __kind: 'Raw9'
  value: Uint8Array
}

export interface Data_Raw10 {
  __kind: 'Raw10'
  value: Uint8Array
}

export interface Data_Raw11 {
  __kind: 'Raw11'
  value: Uint8Array
}

export interface Data_Raw12 {
  __kind: 'Raw12'
  value: Uint8Array
}

export interface Data_Raw13 {
  __kind: 'Raw13'
  value: Uint8Array
}

export interface Data_Raw14 {
  __kind: 'Raw14'
  value: Uint8Array
}

export interface Data_Raw15 {
  __kind: 'Raw15'
  value: Uint8Array
}

export interface Data_Raw16 {
  __kind: 'Raw16'
  value: Uint8Array
}

export interface Data_Raw17 {
  __kind: 'Raw17'
  value: Uint8Array
}

export interface Data_Raw18 {
  __kind: 'Raw18'
  value: Uint8Array
}

export interface Data_Raw19 {
  __kind: 'Raw19'
  value: Uint8Array
}

export interface Data_Raw20 {
  __kind: 'Raw20'
  value: Uint8Array
}

export interface Data_Raw21 {
  __kind: 'Raw21'
  value: Uint8Array
}

export interface Data_Raw22 {
  __kind: 'Raw22'
  value: Uint8Array
}

export interface Data_Raw23 {
  __kind: 'Raw23'
  value: Uint8Array
}

export interface Data_Raw24 {
  __kind: 'Raw24'
  value: Uint8Array
}

export interface Data_Raw25 {
  __kind: 'Raw25'
  value: Uint8Array
}

export interface Data_Raw26 {
  __kind: 'Raw26'
  value: Uint8Array
}

export interface Data_Raw27 {
  __kind: 'Raw27'
  value: Uint8Array
}

export interface Data_Raw28 {
  __kind: 'Raw28'
  value: Uint8Array
}

export interface Data_Raw29 {
  __kind: 'Raw29'
  value: Uint8Array
}

export interface Data_Raw30 {
  __kind: 'Raw30'
  value: Uint8Array
}

export interface Data_Raw31 {
  __kind: 'Raw31'
  value: Uint8Array
}

export interface Data_Raw32 {
  __kind: 'Raw32'
  value: Uint8Array
}

export interface Data_BlakeTwo256 {
  __kind: 'BlakeTwo256'
  value: Uint8Array
}

export interface Data_Sha256 {
  __kind: 'Sha256'
  value: Uint8Array
}

export interface Data_Keccak256 {
  __kind: 'Keccak256'
  value: Uint8Array
}

export interface Data_ShaThree256 {
  __kind: 'ShaThree256'
  value: Uint8Array
}

export type Judgement = Judgement_Unknown | Judgement_FeePaid | Judgement_Reasonable | Judgement_KnownGood | Judgement_OutOfDate | Judgement_LowQuality | Judgement_Erroneous

export interface Judgement_Unknown {
  __kind: 'Unknown'
}

export interface Judgement_FeePaid {
  __kind: 'FeePaid'
  value: bigint
}

export interface Judgement_Reasonable {
  __kind: 'Reasonable'
}

export interface Judgement_KnownGood {
  __kind: 'KnownGood'
}

export interface Judgement_OutOfDate {
  __kind: 'OutOfDate'
}

export interface Judgement_LowQuality {
  __kind: 'LowQuality'
}

export interface Judgement_Erroneous {
  __kind: 'Erroneous'
}

export interface IdentityInfo {
  additional: [Data, Data][]
  display: Data
  legal: Data
  web: Data
  riot: Data
  email: Data
  pgpFingerprint: (Uint8Array | undefined)
  image: Data
  twitter: Data
}

export type WeightCurveType = WeightCurveType_Linear

export interface WeightCurveType_Linear {
  __kind: 'Linear'
}

export type VersionedXcm = VersionedXcm_V0 | VersionedXcm_V1 | VersionedXcm_V2

export interface VersionedXcm_V0 {
  __kind: 'V0'
  value: V0Xcm
}

export interface VersionedXcm_V1 {
  __kind: 'V1'
  value: V1Xcm
}

export interface VersionedXcm_V2 {
  __kind: 'V2'
  value: V2Instruction[]
}

export interface ParachainInherentData {
  validationData: V1PersistedValidationData
  relayChainState: StorageProof
  downwardMessages: InboundDownwardMessage[]
  horizontalMessages: [number, InboundHrmpMessage[]][]
}

export type Type_283 = Type_283_V0 | Type_283_V1 | Type_283_V2

export interface Type_283_V0 {
  __kind: 'V0'
  value: Type_284
}

export interface Type_283_V1 {
  __kind: 'V1'
  value: Type_289
}

export interface Type_283_V2 {
  __kind: 'V2'
  value: Type_295[]
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
  __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
  __kind: 'Limited'
  value: bigint
}

export type MaybeHashed = MaybeHashed_Value | MaybeHashed_Hash

export interface MaybeHashed_Value {
  __kind: 'Value'
  value: Call
}

export interface MaybeHashed_Hash {
  __kind: 'Hash'
  value: Uint8Array
}

export interface SessionKeys {
  aura: Uint8Array
}

export interface DestroyWitness {
  instances: number
  instanceMetadatas: number
  attributes: number
}

export type OriginCaller = OriginCaller_system | OriginCaller_Council | OriginCaller_TechnicalCommittee | OriginCaller_PolkadotXcm | OriginCaller_CumulusXcm | OriginCaller_Void

export interface OriginCaller_system {
  __kind: 'system'
  value: RawOrigin
}

export interface OriginCaller_Council {
  __kind: 'Council'
  value: Type_318
}

export interface OriginCaller_TechnicalCommittee {
  __kind: 'TechnicalCommittee'
  value: Type_319
}

export interface OriginCaller_PolkadotXcm {
  __kind: 'PolkadotXcm'
  value: Origin
}

export interface OriginCaller_CumulusXcm {
  __kind: 'CumulusXcm'
  value: Type_321
}

export interface OriginCaller_Void {
  __kind: 'Void'
  value: Void
}

export type VersionedMultiAsset = VersionedMultiAsset_V0 | VersionedMultiAsset_V1

export interface VersionedMultiAsset_V0 {
  __kind: 'V0'
  value: V0MultiAsset
}

export interface VersionedMultiAsset_V1 {
  __kind: 'V1'
  value: V1MultiAsset
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
  amount: bigint
}

export type Releases = Releases_V1_0_0 | Releases_V2_0_0

export interface Releases_V1_0_0 {
  __kind: 'V1_0_0'
}

export interface Releases_V2_0_0 {
  __kind: 'V2_0_0'
}

export interface CandidateInfo {
  who: Uint8Array
  deposit: bigint
}

export interface Votes {
  index: number
  threshold: number
  ayes: Uint8Array[]
  nays: Uint8Array[]
  end: number
}

export type PreimageStatus = PreimageStatus_Missing | PreimageStatus_Available

export interface PreimageStatus_Missing {
  __kind: 'Missing'
  value: number
}

export interface PreimageStatus_Available {
  __kind: 'Available'
  data: Uint8Array
  provider: Uint8Array
  deposit: bigint
  since: number
  expiry: (number | undefined)
}

export type ReferendumInfo = ReferendumInfo_Ongoing | ReferendumInfo_Finished

export interface ReferendumInfo_Ongoing {
  __kind: 'Ongoing'
  value: ReferendumStatus
}

export interface ReferendumInfo_Finished {
  __kind: 'Finished'
  approved: boolean
  end: number
}

export type Type_342 = Type_342_V1

export interface Type_342_V1 {
  __kind: 'V1'
}

export type Voting = Voting_Direct | Voting_Delegating

export interface Voting_Direct {
  __kind: 'Direct'
  votes: [number, AccountVote][]
  delegations: Delegations
  prior: [number, bigint]
}

export interface Voting_Delegating {
  __kind: 'Delegating'
  balance: bigint
  target: Uint8Array
  conviction: Conviction
  delegations: Delegations
  prior: [number, bigint]
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

export interface ExchangeIntention {
  who: Uint8Array
  assets: AssetPair
  amountIn: bigint
  amountOut: bigint
  tradeLimit: bigint
  discount: boolean
  sellOrBuy: IntentionType
  intentionId: Uint8Array
}

export interface Registration {
  judgements: [number, Judgement][]
  deposit: bigint
  info: IdentityInfo
}

export interface RegistrarInfo {
  account: Uint8Array
  fee: bigint
  fields: bigint
}

export interface Royalty {
  author: Uint8Array
  royalty: number
}

export interface Offer {
  maker: Uint8Array
  amount: bigint
  expires: number
}

export interface Multisig {
  when: Timepoint
  deposit: bigint
  depositor: Uint8Array
  approvals: Uint8Array[]
}

export interface ClassInfo {
  classType: ClassType
  metadata: Uint8Array
}

export interface InstanceInfo {
  metadata: Uint8Array
}

export interface V1AbridgedHostConfiguration {
  maxCodeSize: number
  maxHeadDataSize: number
  maxUpwardQueueCount: number
  maxUpwardQueueSize: number
  maxUpwardMessageSize: number
  maxUpwardMessageNumPerCandidate: number
  hrmpMaxMessageNumPerCandidate: number
  validationUpgradeCooldown: number
  validationUpgradeDelay: number
}

export interface OutboundHrmpMessage {
  recipient: number
  data: Uint8Array
}

export interface MessagingStateSnapshot {
  dmqMqcHead: Uint8Array
  relayDispatchQueueSize: [number, number]
  ingressChannels: [number, V1AbridgedHrmpChannel][]
  egressChannels: [number, V1AbridgedHrmpChannel][]
}

export type V1UpgradeRestriction = V1UpgradeRestriction_Present

export interface V1UpgradeRestriction_Present {
  __kind: 'Present'
}

export interface V1PersistedValidationData {
  parentHead: Uint8Array
  relayParentNumber: number
  relayParentStorageRoot: Uint8Array
  maxPovSize: number
}

export type VersionMigrationStage = VersionMigrationStage_MigrateSupportedVersion | VersionMigrationStage_MigrateVersionNotifiers | VersionMigrationStage_NotifyCurrentTargets | VersionMigrationStage_MigrateAndNotifyOldTargets

export interface VersionMigrationStage_MigrateSupportedVersion {
  __kind: 'MigrateSupportedVersion'
}

export interface VersionMigrationStage_MigrateVersionNotifiers {
  __kind: 'MigrateVersionNotifiers'
}

export interface VersionMigrationStage_NotifyCurrentTargets {
  __kind: 'NotifyCurrentTargets'
  value: (Uint8Array | undefined)
}

export interface VersionMigrationStage_MigrateAndNotifyOldTargets {
  __kind: 'MigrateAndNotifyOldTargets'
}

export type QueryStatus = QueryStatus_Pending | QueryStatus_VersionNotifier | QueryStatus_Ready

export interface QueryStatus_Pending {
  __kind: 'Pending'
  responder: VersionedMultiLocation
  maybeNotify: ([number, number] | undefined)
  timeout: number
}

export interface QueryStatus_VersionNotifier {
  __kind: 'VersionNotifier'
  origin: VersionedMultiLocation
  isActive: boolean
}

export interface QueryStatus_Ready {
  __kind: 'Ready'
  response: VersionedResponse
  at: number
}

export type RequestStatus = RequestStatus_Unrequested | RequestStatus_Requested

export interface RequestStatus_Unrequested {
  __kind: 'Unrequested'
  value: ([Uint8Array, bigint] | undefined)
}

export interface RequestStatus_Requested {
  __kind: 'Requested'
  value: number
}

export interface PriceEntry {
  price: bigint
  tradeAmount: bigint
  liquidityAmount: bigint
}

export interface BucketQueue {
  bucket: PriceInfo[]
  last: number
}

export interface Announcement {
  real: Uint8Array
  callHash: Uint8Array
  height: number
}

export interface ProxyDefinition {
  delegate: Uint8Array
  proxyType: ProxyType
  delay: number
}

export interface ScheduledV3 {
  maybeId: (Uint8Array | undefined)
  priority: number
  call: MaybeHashed
  maybePeriodic: ([number, number] | undefined)
  origin: OriginCaller
}

export interface AccountInfo {
  nonce: number
  consumers: number
  providers: number
  sufficients: number
  data: AccountData
}

export interface PerDispatchClass {
  normal: bigint
  operational: bigint
  mandatory: bigint
}

export interface Digest {
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
}

export interface Phase_Initialization {
  __kind: 'Initialization'
}

export interface LastRuntimeUpgradeInfo {
  specVersion: number
  specName: string
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

export interface Type_492 {
  free: bigint
  reserved: bigint
  frozen: bigint
}

export interface Type_490 {
  id: Uint8Array
  amount: bigint
}

export type Type_177 = Type_177_V1Ancient | Type_177_V2

export interface Type_177_V1Ancient {
  __kind: 'V1Ancient'
}

export interface Type_177_V2 {
  __kind: 'V2'
}

export interface Proposal {
  proposer: Uint8Array
  value: bigint
  beneficiary: Uint8Array
  bond: bigint
}

export interface InstanceDetails {
  owner: Uint8Array
  approved: (Uint8Array | undefined)
  isFrozen: boolean
  deposit: bigint
}

export interface ClassDetails {
  owner: Uint8Array
  issuer: Uint8Array
  admin: Uint8Array
  freezer: Uint8Array
  totalDeposit: bigint
  freeHolding: boolean
  instances: number
  instanceMetadatas: number
  attributes: number
  isFrozen: boolean
}

export interface ClassMetadata {
  deposit: bigint
  data: Uint8Array
  isFrozen: boolean
}

export interface InstanceMetadata {
  deposit: bigint
  data: Uint8Array
  isFrozen: boolean
}

export interface DepositData {
  shares: bigint
  ammPoolId: Uint8Array
  yieldFarmEntries: YieldFarmEntry[]
}

export interface GlobalFarmData {
  id: number
  owner: Uint8Array
  updatedAt: number
  totalSharesZ: bigint
  accumulatedRpz: bigint
  rewardCurrency: number
  accumulatedRewards: bigint
  paidAccumulatedRewards: bigint
  yieldPerPeriod: bigint
  plannedYieldingPeriods: number
  blocksPerPeriod: number
  incentivizedAsset: number
  maxRewardPerPeriod: bigint
  minDeposit: bigint
  yieldFarmsCount: [number, number]
  priceAdjustment: bigint
  state: FarmState
}

export interface YieldFarmData {
  id: number
  updatedAt: number
  totalShares: bigint
  totalValuedShares: bigint
  accumulatedRpvs: bigint
  accumulatedRpz: bigint
  loyaltyCurve: (LoyaltyCurve | undefined)
  multiplier: bigint
  state: FarmState
  entriesCount: bigint
}

export interface InboundChannelDetails {
  sender: number
  state: InboundState
  messageMetadata: [number, XcmpMessageFormat][]
}

export interface OutboundChannelDetails {
  recipient: number
  state: OutboundState
  signalsExist: boolean
  firstIndex: number
  lastIndex: number
}

export interface QueueConfigData {
  suspendThreshold: number
  dropThreshold: number
  resumeThreshold: number
  thresholdWeight: bigint
  weightRestrictDecay: bigint
  xcmpMaxIndividualWeight: bigint
}

export type Pays = Pays_Yes | Pays_No

export interface Pays_Yes {
  __kind: 'Yes'
}

export interface Pays_No {
  __kind: 'No'
}

export interface BlockLength {
  max: Type_159
}

export interface BlockWeights {
  baseBlock: bigint
  maxBlock: bigint
  perClass: Type_155
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
  stateVersion: number
}

export interface WeightToFeeCoefficient {
  coeffInteger: bigint
  coeffFrac: number
  negative: boolean
  degree: number
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
  __kind: 'fill_block'
  ratio: number
}

/**
 * Make some on-chain remark.
 * 
 * # <weight>
 * - `O(1)`
 * # </weight>
 */
export interface SystemCall_remark {
  __kind: 'remark'
  remark: Uint8Array
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
  __kind: 'set_heap_pages'
  pages: bigint
}

/**
 * Set the new runtime code.
 * 
 * # <weight>
 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
 *   expensive).
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime, but generally this is very
 * expensive. We will treat this as a full block.
 * # </weight>
 */
export interface SystemCall_set_code {
  __kind: 'set_code'
  code: Uint8Array
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * # <weight>
 * - `O(C)` where `C` length of `code`
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime. We will treat this as a full
 * block. # </weight>
 */
export interface SystemCall_set_code_without_checks {
  __kind: 'set_code_without_checks'
  code: Uint8Array
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
  __kind: 'set_storage'
  items: [Uint8Array, Uint8Array][]
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
  __kind: 'kill_storage'
  keys: Uint8Array[]
}

/**
 * Kill all storage items with a key that starts with the given prefix.
 * 
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
  __kind: 'kill_prefix'
  prefix: Uint8Array
  subkeys: number
}

/**
 * Make some on-chain remark and emit event.
 */
export interface SystemCall_remark_with_event {
  __kind: 'remark_with_event'
  remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TimestampCall = TimestampCall_set

/**
 * Set the current time.
 * 
 * This call should be invoked exactly once per block. It will panic at the finalization
 * phase, if this call hasn't been invoked by that time.
 * 
 * The timestamp should be greater than the previous one by the amount specified by
 * `MinimumPeriod`.
 * 
 * The dispatch origin for this call must be `Inherent`.
 * 
 * # <weight>
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 * # </weight>
 */
export interface TimestampCall_set {
  __kind: 'set'
  now: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 * 
 * # <weight>
 * - Dependent on arguments but not critical, given proper implementations for input config
 *   types. See related functions below.
 * - It contains a limited number of reads and writes internally and no complex
 *   computation.
 * 
 * Related functions:
 * 
 *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *   - Transferring balances to accounts that did not exist before will cause
 *     `T::OnNewAccount::on_new_account` to be called.
 *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
 *     that the transfer will not kill the origin account.
 * ---------------------------------
 * - Origin account is already in memory, so no DB operations for them.
 * # </weight>
 */
export interface BalancesCall_transfer {
  __kind: 'transfer'
  dest: Uint8Array
  value: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 * also alter the total issuance of the system (`TotalIssuance`) appropriately.
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_set_balance {
  __kind: 'set_balance'
  who: Uint8Array
  newFree: bigint
  newReserved: bigint
}

/**
 * Exactly as `transfer`, except the origin must be root and the source account may be
 * specified.
 * # <weight>
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 * # </weight>
 */
export interface BalancesCall_force_transfer {
  __kind: 'force_transfer'
  source: Uint8Array
  dest: Uint8Array
  value: bigint
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
 * origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * [`transfer`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
  __kind: 'transfer_keep_alive'
  dest: Uint8Array
  value: bigint
}

/**
 * Transfer the entire transferable balance from the caller account.
 * 
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 * 
 * The dispatch origin of this call must be Signed.
 * 
 * - `dest`: The recipient of the transfer.
 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *   of the funds the account has, causing the sender account to be killed (false), or
 *   transfer everything except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true). # <weight>
 * - O(1). Just like transfer, but reading the user's transferable balance first.
 *   #</weight>
 */
export interface BalancesCall_transfer_all {
  __kind: 'transfer_all'
  dest: Uint8Array
  keepAlive: boolean
}

/**
 * Unreserve some balance from a user by force.
 * 
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
  __kind: 'force_unreserve'
  who: Uint8Array
  amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal

/**
 * Put forward a suggestion for spending. A deposit proportional to the value
 * is reserved and slashed if the proposal is rejected. It is returned once the
 * proposal is awarded.
 * 
 * # <weight>
 * - Complexity: O(1)
 * - DbReads: `ProposalCount`, `origin account`
 * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
 * # </weight>
 */
export interface TreasuryCall_propose_spend {
  __kind: 'propose_spend'
  value: bigint
  beneficiary: Uint8Array
}

/**
 * Reject a proposed spend. The original deposit will be slashed.
 * 
 * May only be called from `T::RejectOrigin`.
 * 
 * # <weight>
 * - Complexity: O(1)
 * - DbReads: `Proposals`, `rejected proposer account`
 * - DbWrites: `Proposals`, `rejected proposer account`
 * # </weight>
 */
export interface TreasuryCall_reject_proposal {
  __kind: 'reject_proposal'
  proposalId: number
}

/**
 * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 * and the original deposit will be returned.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - Complexity: O(1).
 * - DbReads: `Proposals`, `Approvals`
 * - DbWrite: `Approvals`
 * # </weight>
 */
export interface TreasuryCall_approve_proposal {
  __kind: 'approve_proposal'
  proposalId: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as

/**
 * Send a batch of dispatch calls.
 * 
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 * 
 * This will return `Ok` in all circumstances. To determine the success of the batch, an
 * event is deposited. If a call failed and the batch was interrupted, then the
 * `BatchInterrupted` event is deposited, along with the number of successful calls made
 * and the error of the failed call. If all were successful, then the `BatchCompleted`
 * event is deposited.
 */
export interface UtilityCall_batch {
  __kind: 'batch'
  calls: Call[]
}

/**
 * Send a call through an indexed pseudonym of the sender.
 * 
 * Filter from origin are passed along. The call will be dispatched with an origin which
 * use the same filter as the origin of this call.
 * 
 * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 * because you expect `proxy` to have been used prior in the call stack and you do not want
 * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 * in the Multisig pallet instead.
 * 
 * NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 * The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
  __kind: 'as_derivative'
  index: number
  call: Call
}

/**
 * Send a batch of dispatch calls and atomically execute them.
 * The whole transaction will rollback and fail if any of the calls failed.
 * 
 * May be called from any origin.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then call are dispatch without checking origin filter. (This includes
 * bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 */
export interface UtilityCall_batch_all {
  __kind: 'batch_all'
  calls: Call[]
}

/**
 * Dispatches a function call with a provided origin.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
 * # </weight>
 */
export interface UtilityCall_dispatch_as {
  __kind: 'dispatch_as'
  asOrigin: OriginCaller
  call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 * Anonymously schedule a task.
 */
export interface SchedulerCall_schedule {
  __kind: 'schedule'
  when: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

/**
 * Cancel an anonymously scheduled task.
 */
export interface SchedulerCall_cancel {
  __kind: 'cancel'
  when: number
  index: number
}

/**
 * Schedule a named task.
 */
export interface SchedulerCall_schedule_named {
  __kind: 'schedule_named'
  id: Uint8Array
  when: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

/**
 * Cancel a named scheduled task.
 */
export interface SchedulerCall_cancel_named {
  __kind: 'cancel_named'
  id: Uint8Array
}

/**
 * Anonymously schedule a task after a delay.
 * 
 * # <weight>
 * Same as [`schedule`].
 * # </weight>
 */
export interface SchedulerCall_schedule_after {
  __kind: 'schedule_after'
  after: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

/**
 * Schedule a named task after a delay.
 * 
 * # <weight>
 * Same as [`schedule_named`](Self::schedule_named).
 * # </weight>
 */
export interface SchedulerCall_schedule_named_after {
  __kind: 'schedule_named_after'
  id: Uint8Array
  after: number
  maybePeriodic: ([number, number] | undefined)
  priority: number
  call: MaybeHashed
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_cancel_queued | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_note_preimage | DemocracyCall_note_preimage_operational | DemocracyCall_note_imminent_preimage | DemocracyCall_note_imminent_preimage_operational | DemocracyCall_reap_preimage | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_enact_proposal | DemocracyCall_blacklist | DemocracyCall_cancel_proposal

/**
 * Propose a sensitive action to be taken.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender must
 * have funds to cover the deposit.
 * 
 * - `proposal_hash`: The hash of the proposal preimage.
 * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 * Emits `Proposed`.
 * 
 * Weight: `O(p)`
 */
export interface DemocracyCall_propose {
  __kind: 'propose'
  proposalHash: Uint8Array
  value: bigint
}

/**
 * Signals agreement with a particular proposal.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender
 * must have funds to cover the deposit, equal to the original deposit.
 * 
 * - `proposal`: The index of the proposal to second.
 * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
 *   proposal. Extrinsic is weighted according to this value with no refund.
 * 
 * Weight: `O(S)` where S is the number of seconds a proposal already has.
 */
export interface DemocracyCall_second {
  __kind: 'second'
  proposal: number
  secondsUpperBound: number
}

/**
 * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 * otherwise it is a vote to keep the status quo.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `ref_index`: The index of the referendum to vote for.
 * - `vote`: The vote configuration.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter has voted on.
 */
export interface DemocracyCall_vote {
  __kind: 'vote'
  refIndex: number
  vote: AccountVote
}

/**
 * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 * referendum.
 * 
 * The dispatch origin of this call must be `CancellationOrigin`.
 * 
 * -`ref_index`: The index of the referendum to cancel.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
  __kind: 'emergency_cancel'
  refIndex: number
}

/**
 * Schedule a referendum to be tabled once it is legal to schedule an external
 * referendum.
 * 
 * The dispatch origin of this call must be `ExternalOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
 *   Decoding vec of length V. Charged as maximum
 */
export interface DemocracyCall_external_propose {
  __kind: 'external_propose'
  proposalHash: Uint8Array
}

/**
 * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 * an external referendum.
 * 
 * The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
  __kind: 'external_propose_majority'
  proposalHash: Uint8Array
}

/**
 * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 * schedule an external referendum.
 * 
 * The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
  __kind: 'external_propose_default'
  proposalHash: Uint8Array
}

/**
 * Schedule the currently externally-proposed majority-carries referendum to be tabled
 * immediately. If there is no externally-proposed referendum currently, or if there is one
 * but it is not a majority-carries referendum then it fails.
 * 
 * The dispatch of this call must be `FastTrackOrigin`.
 * 
 * - `proposal_hash`: The hash of the current external proposal.
 * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 *   `FastTrackVotingPeriod` if too low.
 * - `delay`: The number of block after voting has ended in approval and this should be
 *   enacted. This doesn't have a minimum amount.
 * 
 * Emits `Started`.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
  __kind: 'fast_track'
  proposalHash: Uint8Array
  votingPeriod: number
  delay: number
}

/**
 * Veto and blacklist the external proposal hash.
 * 
 * The dispatch origin of this call must be `VetoOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 * Emits `Vetoed`.
 * 
 * Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
  __kind: 'veto_external'
  proposalHash: Uint8Array
}

/**
 * Remove a referendum.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * - `ref_index`: The index of the referendum to cancel.
 * 
 * # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
  __kind: 'cancel_referendum'
  refIndex: number
}

/**
 * Cancel a proposal queued for enactment.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * - `which`: The index of the referendum to cancel.
 * 
 * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
 */
export interface DemocracyCall_cancel_queued {
  __kind: 'cancel_queued'
  which: number
}

/**
 * Delegate the voting power (with some given conviction) of the sending account.
 * 
 * The balance delegated is locked for as long as it's delegated, and thereafter for the
 * time appropriate for the conviction's lock period.
 * 
 * The dispatch origin of this call must be _Signed_, and the signing account must either:
 *   - be delegating already; or
 *   - have no voting activity (if there is, then it will need to be removed/consolidated
 *     through `reap_vote` or `unvote`).
 * 
 * - `to`: The account whose voting the `target` account's voting power will follow.
 * - `conviction`: The conviction that will be attached to the delegated votes. When the
 *   account is undelegated, the funds will be locked for the corresponding period.
 * - `balance`: The amount of the account's balance to be used in delegating. This must not
 *   be more than the account's current balance.
 * 
 * Emits `Delegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_delegate {
  __kind: 'delegate'
  to: Uint8Array
  conviction: Conviction
  balance: bigint
}

/**
 * Undelegate the voting power of the sending account.
 * 
 * Tokens may be unlocked following once an amount of time consistent with the lock period
 * of the conviction with which the delegation was issued.
 * 
 * The dispatch origin of this call must be _Signed_ and the signing account must be
 * currently delegating.
 * 
 * Emits `Undelegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_undelegate {
  __kind: 'undelegate'
}

/**
 * Clears all public proposals.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
  __kind: 'clear_public_proposals'
}

/**
 * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
 * in the dispatch queue but does require a deposit, returned once enacted.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `encoded_proposal`: The preimage of a proposal.
 * 
 * Emits `PreimageNoted`.
 * 
 * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_preimage {
  __kind: 'note_preimage'
  encodedProposal: Uint8Array
}

/**
 * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_preimage_operational {
  __kind: 'note_preimage_operational'
  encodedProposal: Uint8Array
}

/**
 * Register the preimage for an upcoming proposal. This requires the proposal to be
 * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
 * the preimage has not been uploaded before and matches some imminent proposal,
 * no fee is paid.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `encoded_proposal`: The preimage of a proposal.
 * 
 * Emits `PreimageNoted`.
 * 
 * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
 */
export interface DemocracyCall_note_imminent_preimage {
  __kind: 'note_imminent_preimage'
  encodedProposal: Uint8Array
}

/**
 * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
 */
export interface DemocracyCall_note_imminent_preimage_operational {
  __kind: 'note_imminent_preimage_operational'
  encodedProposal: Uint8Array
}

/**
 * Remove an expired proposal preimage and collect the deposit.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `proposal_hash`: The preimage hash of a proposal.
 * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
 *   weighted according to this value with no refund.
 * 
 * This will only work after `VotingPeriod` blocks from the time that the preimage was
 * noted, if it's the same account doing it. If it's a different account, then it'll only
 * work an additional `EnactmentPeriod` later.
 * 
 * Emits `PreimageReaped`.
 * 
 * Weight: `O(D)` where D is length of proposal.
 */
export interface DemocracyCall_reap_preimage {
  __kind: 'reap_preimage'
  proposalHash: Uint8Array
  proposalLenUpperBound: number
}

/**
 * Unlock tokens that have an expired lock.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account to remove the lock on.
 * 
 * Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
  __kind: 'unlock'
  target: Uint8Array
}

/**
 * Remove a vote for a referendum.
 * 
 * If:
 * - the referendum was cancelled, or
 * - the referendum is ongoing, or
 * - the referendum has ended such that
 *   - the vote of the account was in opposition to the result; or
 *   - there was no conviction to the account's vote; or
 *   - the account made a split vote
 * ...then the vote is removed cleanly and a following call to `unlock` may result in more
 * funds being available.
 * 
 * If, however, the referendum has ended and:
 * - it finished corresponding to the vote of the account, and
 * - the account made a standard vote with conviction, and
 * - the lock period of the conviction is not over
 * ...then the lock will be aggregated into the overall account's lock, which may involve
 * *overlocking* (where the two locks are combined into a single lock that is the maximum
 * of both the amount locked and the time is it locked for).
 * 
 * The dispatch origin of this call must be _Signed_, and the signer must have a vote
 * registered for referendum `index`.
 * 
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_vote {
  __kind: 'remove_vote'
  index: number
}

/**
 * Remove a vote for a referendum.
 * 
 * If the `target` is equal to the signer, then this function is exactly equivalent to
 * `remove_vote`. If not equal to the signer, then the vote must have expired,
 * either because the referendum was cancelled, because the voter lost the referendum or
 * because the conviction period is over.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account of the vote to be removed; this account must have voted for
 *   referendum `index`.
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_other_vote {
  __kind: 'remove_other_vote'
  target: Uint8Array
  index: number
}

/**
 * Enact a proposal from a referendum. For now we just make the weight be the maximum.
 */
export interface DemocracyCall_enact_proposal {
  __kind: 'enact_proposal'
  proposalHash: Uint8Array
  index: number
}

/**
 * Permanently place a proposal into the blacklist. This prevents it from ever being
 * proposed again.
 * 
 * If called on a queued public or external proposal, then this will result in it being
 * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 * then it will be cancelled.
 * 
 * The dispatch origin of this call must be `BlacklistOrigin`.
 * 
 * - `proposal_hash`: The proposal hash to blacklist permanently.
 * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 * cancelled.
 * 
 * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *   reasonable value).
 */
export interface DemocracyCall_blacklist {
  __kind: 'blacklist'
  proposalHash: Uint8Array
  maybeRefIndex: (number | undefined)
}

/**
 * Remove a proposal.
 * 
 * The dispatch origin of this call must be `CancelProposalOrigin`.
 * 
 * - `prop_index`: The index of the proposal to cancel.
 * 
 * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
  __kind: 'cancel_proposal'
  propIndex: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ElectionsCall = ElectionsCall_vote | ElectionsCall_remove_voter | ElectionsCall_submit_candidacy | ElectionsCall_renounce_candidacy | ElectionsCall_remove_member | ElectionsCall_clean_defunct_voters

/**
 * Vote for a set of candidates for the upcoming round of election. This can be called to
 * set the initial votes, or update already existing votes.
 * 
 * Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
 * reserved. The deposit is based on the number of votes and can be updated over time.
 * 
 * The `votes` should:
 *   - not be empty.
 *   - be less than the number of possible candidates. Note that all current members and
 *     runners-up are also automatically candidates for the next round.
 * 
 * If `value` is more than `who`'s free balance, then the maximum of the two is used.
 * 
 * The dispatch origin of this call must be signed.
 * 
 * ### Warning
 * 
 * It is the responsibility of the caller to **NOT** place all of their balance into the
 * lock and keep some for further operations.
 * 
 * # <weight>
 * We assume the maximum weight among all 3 cases: vote_equal, vote_more and vote_less.
 * # </weight>
 */
export interface ElectionsCall_vote {
  __kind: 'vote'
  votes: Uint8Array[]
  value: bigint
}

/**
 * Remove `origin` as a voter.
 * 
 * This removes the lock and returns the deposit.
 * 
 * The dispatch origin of this call must be signed and be a voter.
 */
export interface ElectionsCall_remove_voter {
  __kind: 'remove_voter'
}

/**
 * Submit oneself for candidacy. A fixed amount of deposit is recorded.
 * 
 * All candidates are wiped at the end of the term. They either become a member/runner-up,
 * or leave the system while their deposit is slashed.
 * 
 * The dispatch origin of this call must be signed.
 * 
 * ### Warning
 * 
 * Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
 * to get their deposit back. Losing the spot in an election will always lead to a slash.
 * 
 * # <weight>
 * The number of current candidates must be provided as witness data.
 * # </weight>
 */
export interface ElectionsCall_submit_candidacy {
  __kind: 'submit_candidacy'
  candidateCount: number
}

/**
 * Renounce one's intention to be a candidate for the next election round. 3 potential
 * outcomes exist:
 * 
 * - `origin` is a candidate and not elected in any set. In this case, the deposit is
 *   unreserved, returned and origin is removed as a candidate.
 * - `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
 *   origin is removed as a runner-up.
 * - `origin` is a current member. In this case, the deposit is unreserved and origin is
 *   removed as a member, consequently not being a candidate for the next round anymore.
 *   Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
 *   are immediately used. If the prime is renouncing, then no prime will exist until the
 *   next round.
 * 
 * The dispatch origin of this call must be signed, and have one of the above roles.
 * 
 * # <weight>
 * The type of renouncing must be provided as witness data.
 * # </weight>
 */
export interface ElectionsCall_renounce_candidacy {
  __kind: 'renounce_candidacy'
  renouncing: Renouncing
}

/**
 * Remove a particular member from the set. This is effective immediately and the bond of
 * the outgoing member is slashed.
 * 
 * If a runner-up is available, then the best runner-up will be removed and replaces the
 * outgoing member. Otherwise, a new phragmen election is started.
 * 
 * The dispatch origin of this call must be root.
 * 
 * Note that this does not affect the designated block number of the next election.
 * 
 * # <weight>
 * If we have a replacement, we use a small weight. Else, since this is a root call and
 * will go into phragmen, we assume full block for now.
 * # </weight>
 */
export interface ElectionsCall_remove_member {
  __kind: 'remove_member'
  who: Uint8Array
  hasReplacement: boolean
}

/**
 * Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
 * deposit of the removed voters are returned.
 * 
 * This is an root function to be used only for cleaning the state.
 * 
 * The dispatch origin of this call must be root.
 * 
 * # <weight>
 * The total number of voters and those that are defunct must be provided as witness data.
 * # </weight>
 */
export interface ElectionsCall_clean_defunct_voters {
  __kind: 'clean_defunct_voters'
  numVoters: number
  numDefunct: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote | CouncilCall_close | CouncilCall_disapprove_proposal

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface CouncilCall_set_members {
  __kind: 'set_members'
  newMembers: Uint8Array[]
  prime: (Uint8Array | undefined)
  oldCount: number
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface CouncilCall_execute {
  __kind: 'execute'
  proposal: Call
  lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface CouncilCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Call
  lengthBound: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface CouncilCall_vote {
  __kind: 'vote'
  proposal: Uint8Array
  index: number
  approve: boolean
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface CouncilCall_close {
  __kind: 'close'
  proposalHash: Uint8Array
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface CouncilCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote | TechnicalCommitteeCall_close | TechnicalCommitteeCall_disapprove_proposal

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface TechnicalCommitteeCall_set_members {
  __kind: 'set_members'
  newMembers: Uint8Array[]
  prime: (Uint8Array | undefined)
  oldCount: number
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_execute {
  __kind: 'execute'
  proposal: Call
  lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_propose {
  __kind: 'propose'
  threshold: number
  proposal: Call
  lengthBound: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_vote {
  __kind: 'vote'
  proposal: Uint8Array
  index: number
  approve: boolean
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface TechnicalCommitteeCall_close {
  __kind: 'close'
  proposalHash: Uint8Array
  index: number
  proposalWeightBound: bigint
  lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
  __kind: 'disapprove_proposal'
  proposalHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingCall = VestingCall_claim | VestingCall_vested_transfer | VestingCall_update_vesting_schedules | VestingCall_claim_for

export interface VestingCall_claim {
  __kind: 'claim'
}

export interface VestingCall_vested_transfer {
  __kind: 'vested_transfer'
  dest: Uint8Array
  schedule: VestingSchedule
}

export interface VestingCall_update_vesting_schedules {
  __kind: 'update_vesting_schedules'
  who: Uint8Array
  vestingSchedules: VestingSchedule[]
}

export interface VestingCall_claim_for {
  __kind: 'claim_for'
  dest: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ProxyCall = ProxyCall_proxy | ProxyCall_add_proxy | ProxyCall_remove_proxy | ProxyCall_remove_proxies | ProxyCall_anonymous | ProxyCall_kill_anonymous | ProxyCall_announce | ProxyCall_remove_announcement | ProxyCall_reject_announcement | ProxyCall_proxy_announced

/**
 * Dispatch the given `call` from an account that the sender is authorised for through
 * `add_proxy`.
 * 
 * Removes any corresponding announcement(s).
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_proxy {
  __kind: 'proxy'
  real: Uint8Array
  forceProxyType: (ProxyType | undefined)
  call: Call
}

/**
 * Register a proxy account for the sender that is able to make calls on its behalf.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `proxy`: The account that the `caller` would like to make a proxy.
 * - `proxy_type`: The permissions allowed for this proxy account.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_add_proxy {
  __kind: 'add_proxy'
  delegate: Uint8Array
  proxyType: ProxyType
  delay: number
}

/**
 * Unregister a proxy account for the sender.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `proxy`: The account that the `caller` would like to remove as a proxy.
 * - `proxy_type`: The permissions currently enabled for the removed proxy account.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_remove_proxy {
  __kind: 'remove_proxy'
  delegate: Uint8Array
  proxyType: ProxyType
  delay: number
}

/**
 * Unregister all proxy accounts for the sender.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * WARNING: This may be called on accounts created by `anonymous`, however if done, then
 * the unreserved fees will be inaccessible. **All access to this account will be lost.**
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_remove_proxies {
  __kind: 'remove_proxies'
}

/**
 * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
 * initialize it with a proxy of `proxy_type` for `origin` sender.
 * 
 * Requires a `Signed` origin.
 * 
 * - `proxy_type`: The type of the proxy that the sender will be registered as over the
 * new account. This will almost always be the most permissive `ProxyType` possible to
 * allow for maximum flexibility.
 * - `index`: A disambiguation index, in case this is called multiple times in the same
 * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
 * want to use `0`.
 * - `delay`: The announcement period required of the initial proxy. Will generally be
 * zero.
 * 
 * Fails with `Duplicate` if this has already been called in this transaction, from the
 * same sender, with the same parameters.
 * 
 * Fails if there are insufficient funds to pay for deposit.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 * TODO: Might be over counting 1 read
 */
export interface ProxyCall_anonymous {
  __kind: 'anonymous'
  proxyType: ProxyType
  delay: number
  index: number
}

/**
 * Removes a previously spawned anonymous proxy.
 * 
 * WARNING: **All access to this account will be lost.** Any funds held in it will be
 * inaccessible.
 * 
 * Requires a `Signed` origin, and the sender account must have been created by a call to
 * `anonymous` with corresponding parameters.
 * 
 * - `spawner`: The account that originally called `anonymous` to create this account.
 * - `index`: The disambiguation index originally passed to `anonymous`. Probably `0`.
 * - `proxy_type`: The proxy type originally passed to `anonymous`.
 * - `height`: The height of the chain when the call to `anonymous` was processed.
 * - `ext_index`: The extrinsic index in which the call to `anonymous` was processed.
 * 
 * Fails with `NoPermission` in case the caller is not a previously created anonymous
 * account whose `anonymous` call has corresponding parameters.
 * 
 * # <weight>
 * Weight is a function of the number of proxies the user has (P).
 * # </weight>
 */
export interface ProxyCall_kill_anonymous {
  __kind: 'kill_anonymous'
  spawner: Uint8Array
  proxyType: ProxyType
  index: number
  height: number
  extIndex: number
}

/**
 * Publish the hash of a proxy-call that will be made in the future.
 * 
 * This must be called some number of blocks before the corresponding `proxy` is attempted
 * if the delay associated with the proxy relationship is greater than zero.
 * 
 * No more than `MaxPending` announcements may be made at any one time.
 * 
 * This will take a deposit of `AnnouncementDepositFactor` as well as
 * `AnnouncementDepositBase` if there are no other pending announcements.
 * 
 * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_announce {
  __kind: 'announce'
  real: Uint8Array
  callHash: Uint8Array
}

/**
 * Remove a given announcement.
 * 
 * May be called by a proxy account to remove a call they previously announced and return
 * the deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `call_hash`: The hash of the call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_remove_announcement {
  __kind: 'remove_announcement'
  real: Uint8Array
  callHash: Uint8Array
}

/**
 * Remove the given announcement of a delegate.
 * 
 * May be called by a target (proxied) account to remove a call that one of their delegates
 * (`delegate`) has announced they want to execute. The deposit is returned.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `delegate`: The account that previously announced the call.
 * - `call_hash`: The hash of the call to be made.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_reject_announcement {
  __kind: 'reject_announcement'
  delegate: Uint8Array
  callHash: Uint8Array
}

/**
 * Dispatch the given `call` from an account that the sender is authorized for through
 * `add_proxy`.
 * 
 * Removes any corresponding announcement(s).
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Parameters:
 * - `real`: The account that the proxy will make a call on behalf of.
 * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
 * - `call`: The call to be made by the `real` account.
 * 
 * # <weight>
 * Weight is a function of:
 * - A: the number of announcements made.
 * - P: the number of proxies the user has.
 * # </weight>
 */
export interface ProxyCall_proxy_announced {
  __kind: 'proxy_announced'
  delegate: Uint8Array
  real: Uint8Array
  forceProxyType: (ProxyType | undefined)
  call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TipsCall = TipsCall_report_awesome | TipsCall_retract_tip | TipsCall_tip_new | TipsCall_tip | TipsCall_close_tip | TipsCall_slash_tip

/**
 * Report something `reason` that deserves a tip and claim any eventual the finder's fee.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 * `DataDepositPerByte` for each byte in `reason`.
 * 
 * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *   a UTF-8-encoded URL.
 * - `who`: The account which should be credited for the tip.
 * 
 * Emits `NewTip` if successful.
 * 
 * # <weight>
 * - Complexity: `O(R)` where `R` length of `reason`.
 *   - encoding and hashing of 'reason'
 * - DbReads: `Reasons`, `Tips`
 * - DbWrites: `Reasons`, `Tips`
 * # </weight>
 */
export interface TipsCall_report_awesome {
  __kind: 'report_awesome'
  reason: Uint8Array
  who: Uint8Array
}

/**
 * Retract a prior tip-report from `report_awesome`, and cancel the process of tipping.
 * 
 * If successful, the original deposit will be unreserved.
 * 
 * The dispatch origin for this call must be _Signed_ and the tip identified by `hash`
 * must have been reported by the signing account through `report_awesome` (and not
 * through `tip_new`).
 * 
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 * Emits `TipRetracted` if successful.
 * 
 * # <weight>
 * - Complexity: `O(1)`
 *   - Depends on the length of `T::Hash` which is fixed.
 * - DbReads: `Tips`, `origin account`
 * - DbWrites: `Reasons`, `Tips`, `origin account`
 * # </weight>
 */
export interface TipsCall_retract_tip {
  __kind: 'retract_tip'
  hash: Uint8Array
}

/**
 * Give a tip for something new; no finder's fee will be taken.
 * 
 * The dispatch origin for this call must be _Signed_ and the signing account must be a
 * member of the `Tippers` set.
 * 
 * - `reason`: The reason for, or the thing that deserves, the tip; generally this will be
 *   a UTF-8-encoded URL.
 * - `who`: The account which should be credited for the tip.
 * - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *   value of active tippers will be given to the `who`.
 * 
 * Emits `NewTip` if successful.
 * 
 * # <weight>
 * - Complexity: `O(R + T)` where `R` length of `reason`, `T` is the number of tippers.
 *   - `O(T)`: decoding `Tipper` vec of length `T`. `T` is charged as upper bound given by
 *     `ContainsLengthBound`. The actual cost depends on the implementation of
 *     `T::Tippers`.
 *   - `O(R)`: hashing and encoding of reason of length `R`
 * - DbReads: `Tippers`, `Reasons`
 * - DbWrites: `Reasons`, `Tips`
 * # </weight>
 */
export interface TipsCall_tip_new {
  __kind: 'tip_new'
  reason: Uint8Array
  who: Uint8Array
  tipValue: bigint
}

/**
 * Declare a tip value for an already-open tip.
 * 
 * The dispatch origin for this call must be _Signed_ and the signing account must be a
 * member of the `Tippers` set.
 * 
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the hash of the original tip `reason` and the beneficiary
 *   account ID.
 * - `tip_value`: The amount of tip that the sender would like to give. The median tip
 *   value of active tippers will be given to the `who`.
 * 
 * Emits `TipClosing` if the threshold of tippers has been reached and the countdown period
 * has started.
 * 
 * # <weight>
 * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
 *   `T`, insert tip and check closing, `T` is charged as upper bound given by
 *   `ContainsLengthBound`. The actual cost depends on the implementation of `T::Tippers`.
 * 
 *   Actually weight could be lower as it depends on how many tips are in `OpenTip` but it
 *   is weighted as if almost full i.e of length `T-1`.
 * - DbReads: `Tippers`, `Tips`
 * - DbWrites: `Tips`
 * # </weight>
 */
export interface TipsCall_tip {
  __kind: 'tip'
  hash: Uint8Array
  tipValue: bigint
}

/**
 * Close and payout a tip.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * The tip identified by `hash` must have finished its countdown period.
 * 
 * - `hash`: The identity of the open tip for which a tip value is declared. This is formed
 *   as the hash of the tuple of the original tip `reason` and the beneficiary account ID.
 * 
 * # <weight>
 * - Complexity: `O(T)` where `T` is the number of tippers. decoding `Tipper` vec of length
 *   `T`. `T` is charged as upper bound given by `ContainsLengthBound`. The actual cost
 *   depends on the implementation of `T::Tippers`.
 * - DbReads: `Tips`, `Tippers`, `tip finder`
 * - DbWrites: `Reasons`, `Tips`, `Tippers`, `tip finder`
 * # </weight>
 */
export interface TipsCall_close_tip {
  __kind: 'close_tip'
  hash: Uint8Array
}

/**
 * Remove and slash an already-open tip.
 * 
 * May only be called from `T::RejectOrigin`.
 * 
 * As a result, the finder is slashed and the deposits are lost.
 * 
 * Emits `TipSlashed` if successful.
 * 
 * # <weight>
 *   `T` is charged as upper bound given by `ContainsLengthBound`.
 *   The actual cost depends on the implementation of `T::Tippers`.
 * # </weight>
 */
export interface TipsCall_slash_tip {
  __kind: 'slash_tip'
  hash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 * Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
  __kind: 'set_uncles'
  newUncles: Header[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CollatorSelectionCall = CollatorSelectionCall_set_invulnerables | CollatorSelectionCall_set_desired_candidates | CollatorSelectionCall_set_candidacy_bond | CollatorSelectionCall_register_as_candidate | CollatorSelectionCall_leave_intent

/**
 * Set the list of invulnerable (fixed) collators.
 */
export interface CollatorSelectionCall_set_invulnerables {
  __kind: 'set_invulnerables'
  new: Uint8Array[]
}

/**
 * Set the ideal number of collators (not including the invulnerables).
 * If lowering this number, then the number of running collators could be higher than this figure.
 * Aside from that edge case, there should be no other way to have more collators than the desired number.
 */
export interface CollatorSelectionCall_set_desired_candidates {
  __kind: 'set_desired_candidates'
  max: number
}

/**
 * Set the candidacy bond amount.
 */
export interface CollatorSelectionCall_set_candidacy_bond {
  __kind: 'set_candidacy_bond'
  bond: bigint
}

/**
 * Register this account as a collator candidate. The account must (a) already have
 * registered session keys and (b) be able to reserve the `CandidacyBond`.
 * 
 * This call is not available to `Invulnerable` collators.
 */
export interface CollatorSelectionCall_register_as_candidate {
  __kind: 'register_as_candidate'
}

/**
 * Deregister `origin` as a collator candidate. Note that the collator can only leave on
 * session change. The `CandidacyBond` will be unreserved immediately.
 * 
 * This call will fail if the total number of candidates would drop below `MinCandidates`.
 * 
 * This call is not available to `Invulnerable` collators.
 */
export interface CollatorSelectionCall_leave_intent {
  __kind: 'leave_intent'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

/**
 * Sets the session key(s) of the function caller to `keys`.
 * Allows an account to set its session key prior to becoming a validator.
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be signed.
 * 
 * # <weight>
 * - Complexity: `O(1)`. Actual cost depends on the number of length of
 *   `T::Keys::key_ids()` which is fixed.
 * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 * - DbWrites: `origin account`, `NextKeys`
 * - DbReads per key id: `KeyOwner`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
 */
export interface SessionCall_set_keys {
  __kind: 'set_keys'
  keys: SessionKeys
  proof: Uint8Array
}

/**
 * Removes any session key(s) of the function caller.
 * 
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be Signed and the account must be either be
 * convertible to a validator ID using the chain's typical addressing system (this usually
 * means being a controller account) or directly convertible into a validator ID (which
 * usually means being a stash account).
 * 
 * # <weight>
 * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
 *   of `T::Keys::key_ids()` which is fixed.
 * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 * - DbWrites: `NextKeys`, `origin account`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
 */
export interface SessionCall_purge_keys {
  __kind: 'purge_keys'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PreimageCall = PreimageCall_note_preimage | PreimageCall_unnote_preimage | PreimageCall_request_preimage | PreimageCall_unrequest_preimage

/**
 * Register a preimage on-chain.
 * 
 * If the preimage was previously requested, no fees or deposits are taken for providing
 * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
 */
export interface PreimageCall_note_preimage {
  __kind: 'note_preimage'
  bytes: Uint8Array
}

/**
 * Clear an unrequested preimage from the runtime storage.
 */
export interface PreimageCall_unnote_preimage {
  __kind: 'unnote_preimage'
  hash: Uint8Array
}

/**
 * Request a preimage be uploaded to the chain without paying any fees or deposits.
 * 
 * If the preimage requests has already been provided on-chain, we unreserve any deposit
 * a user may have paid, and take the control of the preimage out of their hands.
 */
export interface PreimageCall_request_preimage {
  __kind: 'request_preimage'
  hash: Uint8Array
}

/**
 * Clear a previously made request for a preimage.
 * 
 * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
 */
export interface PreimageCall_unrequest_preimage {
  __kind: 'unrequest_preimage'
  hash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UniquesCall = UniquesCall_create | UniquesCall_force_create | UniquesCall_destroy | UniquesCall_mint | UniquesCall_burn | UniquesCall_transfer | UniquesCall_redeposit | UniquesCall_freeze | UniquesCall_thaw | UniquesCall_freeze_class | UniquesCall_thaw_class | UniquesCall_transfer_ownership | UniquesCall_set_team | UniquesCall_approve_transfer | UniquesCall_cancel_approval | UniquesCall_force_asset_status | UniquesCall_set_attribute | UniquesCall_clear_attribute | UniquesCall_set_metadata | UniquesCall_clear_metadata | UniquesCall_set_class_metadata | UniquesCall_clear_class_metadata

/**
 * Issue a new class of non-fungible assets from a public origin.
 * 
 * This new asset class has no assets initially and its owner is the origin.
 * 
 * The origin must be Signed and the sender must have sufficient funds free.
 * 
 * `AssetDeposit` funds of sender are reserved.
 * 
 * Parameters:
 * - `class`: The identifier of the new asset class. This must not be currently in use.
 * - `admin`: The admin of this class of assets. The admin is the initial address of each
 * member of the asset class's admin team.
 * 
 * Emits `Created` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_create {
  __kind: 'create'
  class: bigint
  admin: Uint8Array
}

/**
 * Issue a new class of non-fungible assets from a privileged origin.
 * 
 * This new asset class has no assets initially.
 * 
 * The origin must conform to `ForceOrigin`.
 * 
 * Unlike `create`, no funds are reserved.
 * 
 * - `class`: The identifier of the new asset. This must not be currently in use.
 * - `owner`: The owner of this class of assets. The owner has full superuser permissions
 * over this asset, but may later change and configure the permissions using
 * `transfer_ownership` and `set_team`.
 * 
 * Emits `ForceCreated` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_force_create {
  __kind: 'force_create'
  class: bigint
  owner: Uint8Array
  freeHolding: boolean
}

/**
 * Destroy a class of fungible assets.
 * 
 * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
 * owner of the asset `class`.
 * 
 * - `class`: The identifier of the asset class to be destroyed.
 * - `witness`: Information on the instances minted in the asset class. This must be
 * correct.
 * 
 * Emits `Destroyed` event when successful.
 * 
 * Weight: `O(n + m)` where:
 * - `n = witness.instances`
 * - `m = witness.instance_metadatas`
 * - `a = witness.attributes`
 */
export interface UniquesCall_destroy {
  __kind: 'destroy'
  class: bigint
  witness: DestroyWitness
}

/**
 * Mint an asset instance of a particular class.
 * 
 * The origin must be Signed and the sender must be the Issuer of the asset `class`.
 * 
 * - `class`: The class of the asset to be minted.
 * - `instance`: The instance value of the asset to be minted.
 * - `beneficiary`: The initial owner of the minted asset.
 * 
 * Emits `Issued` event when successful.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_mint {
  __kind: 'mint'
  class: bigint
  instance: bigint
  owner: Uint8Array
}

/**
 * Destroy a single asset instance.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `class`.
 * 
 * - `class`: The class of the asset to be burned.
 * - `instance`: The instance of the asset to be burned.
 * - `check_owner`: If `Some` then the operation will fail with `WrongOwner` unless the
 *   asset is owned by this value.
 * 
 * Emits `Burned` with the actual amount burned.
 * 
 * Weight: `O(1)`
 * Modes: `check_owner.is_some()`.
 */
export interface UniquesCall_burn {
  __kind: 'burn'
  class: bigint
  instance: bigint
  checkOwner: (Uint8Array | undefined)
}

/**
 * Move an asset from the sender account to another.
 * 
 * Origin must be Signed and the signing account must be either:
 * - the Admin of the asset `class`;
 * - the Owner of the asset `instance`;
 * - the approved delegate for the asset `instance` (in this case, the approval is reset).
 * 
 * Arguments:
 * - `class`: The class of the asset to be transferred.
 * - `instance`: The instance of the asset to be transferred.
 * - `dest`: The account to receive ownership of the asset.
 * 
 * Emits `Transferred`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_transfer {
  __kind: 'transfer'
  class: bigint
  instance: bigint
  dest: Uint8Array
}

/**
 * Reevaluate the deposits on some assets.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `class`.
 * 
 * - `class`: The class of the asset to be frozen.
 * - `instances`: The instances of the asset class whose deposits will be reevaluated.
 * 
 * NOTE: This exists as a best-effort function. Any asset instances which are unknown or
 * in the case that the owner account does not have reservable funds to pay for a
 * deposit increase are ignored. Generally the owner isn't going to call this on instances
 * whose existing deposit is less than the refreshed deposit as it would only cost them,
 * so it's of little consequence.
 * 
 * It will still return an error in the case that the class is unknown of the signer is
 * not permitted to call it.
 * 
 * Weight: `O(instances.len())`
 */
export interface UniquesCall_redeposit {
  __kind: 'redeposit'
  class: bigint
  instances: bigint[]
}

/**
 * Disallow further unprivileged transfer of an asset instance.
 * 
 * Origin must be Signed and the sender should be the Freezer of the asset `class`.
 * 
 * - `class`: The class of the asset to be frozen.
 * - `instance`: The instance of the asset to be frozen.
 * 
 * Emits `Frozen`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_freeze {
  __kind: 'freeze'
  class: bigint
  instance: bigint
}

/**
 * Re-allow unprivileged transfer of an asset instance.
 * 
 * Origin must be Signed and the sender should be the Freezer of the asset `class`.
 * 
 * - `class`: The class of the asset to be thawed.
 * - `instance`: The instance of the asset to be thawed.
 * 
 * Emits `Thawed`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_thaw {
  __kind: 'thaw'
  class: bigint
  instance: bigint
}

/**
 * Disallow further unprivileged transfers for a whole asset class.
 * 
 * Origin must be Signed and the sender should be the Freezer of the asset `class`.
 * 
 * - `class`: The asset class to be frozen.
 * 
 * Emits `ClassFrozen`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_freeze_class {
  __kind: 'freeze_class'
  class: bigint
}

/**
 * Re-allow unprivileged transfers for a whole asset class.
 * 
 * Origin must be Signed and the sender should be the Admin of the asset `class`.
 * 
 * - `class`: The class to be thawed.
 * 
 * Emits `ClassThawed`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_thaw_class {
  __kind: 'thaw_class'
  class: bigint
}

/**
 * Change the Owner of an asset class.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `class`.
 * 
 * - `class`: The asset class whose owner should be changed.
 * - `owner`: The new Owner of this asset class.
 * 
 * Emits `OwnerChanged`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_transfer_ownership {
  __kind: 'transfer_ownership'
  class: bigint
  owner: Uint8Array
}

/**
 * Change the Issuer, Admin and Freezer of an asset class.
 * 
 * Origin must be Signed and the sender should be the Owner of the asset `class`.
 * 
 * - `class`: The asset class whose team should be changed.
 * - `issuer`: The new Issuer of this asset class.
 * - `admin`: The new Admin of this asset class.
 * - `freezer`: The new Freezer of this asset class.
 * 
 * Emits `TeamChanged`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_set_team {
  __kind: 'set_team'
  class: bigint
  issuer: Uint8Array
  admin: Uint8Array
  freezer: Uint8Array
}

/**
 * Approve an instance to be transferred by a delegated third-party account.
 * 
 * Origin must be Signed and must be the owner of the asset `instance`.
 * 
 * - `class`: The class of the asset to be approved for delegated transfer.
 * - `instance`: The instance of the asset to be approved for delegated transfer.
 * - `delegate`: The account to delegate permission to transfer the asset.
 * 
 * Emits `ApprovedTransfer` on success.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_approve_transfer {
  __kind: 'approve_transfer'
  class: bigint
  instance: bigint
  delegate: Uint8Array
}

/**
 * Cancel the prior approval for the transfer of an asset by a delegate.
 * 
 * Origin must be either:
 * - the `Force` origin;
 * - `Signed` with the signer being the Admin of the asset `class`;
 * - `Signed` with the signer being the Owner of the asset `instance`;
 * 
 * Arguments:
 * - `class`: The class of the asset of whose approval will be cancelled.
 * - `instance`: The instance of the asset of whose approval will be cancelled.
 * - `maybe_check_delegate`: If `Some` will ensure that the given account is the one to
 *   which permission of transfer is delegated.
 * 
 * Emits `ApprovalCancelled` on success.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_cancel_approval {
  __kind: 'cancel_approval'
  class: bigint
  instance: bigint
  maybeCheckDelegate: (Uint8Array | undefined)
}

/**
 * Alter the attributes of a given asset.
 * 
 * Origin must be `ForceOrigin`.
 * 
 * - `class`: The identifier of the asset.
 * - `owner`: The new Owner of this asset.
 * - `issuer`: The new Issuer of this asset.
 * - `admin`: The new Admin of this asset.
 * - `freezer`: The new Freezer of this asset.
 * - `free_holding`: Whether a deposit is taken for holding an instance of this asset
 *   class.
 * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
 * instructions.
 * 
 * Emits `AssetStatusChanged` with the identity of the asset.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_force_asset_status {
  __kind: 'force_asset_status'
  class: bigint
  owner: Uint8Array
  issuer: Uint8Array
  admin: Uint8Array
  freezer: Uint8Array
  freeHolding: boolean
  isFrozen: boolean
}

/**
 * Set an attribute for an asset class or instance.
 * 
 * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 * asset `class`.
 * 
 * If the origin is Signed, then funds of signer are reserved according to the formula:
 * `MetadataDepositBase + DepositPerByte * (key.len + value.len)` taking into
 * account any already reserved funds.
 * 
 * - `class`: The identifier of the asset class whose instance's metadata to set.
 * - `maybe_instance`: The identifier of the asset instance whose metadata to set.
 * - `key`: The key of the attribute.
 * - `value`: The value to which to set the attribute.
 * 
 * Emits `AttributeSet`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_set_attribute {
  __kind: 'set_attribute'
  class: bigint
  maybeInstance: (bigint | undefined)
  key: Uint8Array
  value: Uint8Array
}

/**
 * Clear an attribute for an asset class or instance.
 * 
 * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 * asset `class`.
 * 
 * Any deposit is freed for the asset class owner.
 * 
 * - `class`: The identifier of the asset class whose instance's metadata to clear.
 * - `maybe_instance`: The identifier of the asset instance whose metadata to clear.
 * - `key`: The key of the attribute.
 * 
 * Emits `AttributeCleared`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_clear_attribute {
  __kind: 'clear_attribute'
  class: bigint
  maybeInstance: (bigint | undefined)
  key: Uint8Array
}

/**
 * Set the metadata for an asset instance.
 * 
 * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 * asset `class`.
 * 
 * If the origin is Signed, then funds of signer are reserved according to the formula:
 * `MetadataDepositBase + DepositPerByte * data.len` taking into
 * account any already reserved funds.
 * 
 * - `class`: The identifier of the asset class whose instance's metadata to set.
 * - `instance`: The identifier of the asset instance whose metadata to set.
 * - `data`: The general information of this asset. Limited in length by `StringLimit`.
 * - `is_frozen`: Whether the metadata should be frozen against further changes.
 * 
 * Emits `MetadataSet`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_set_metadata {
  __kind: 'set_metadata'
  class: bigint
  instance: bigint
  data: Uint8Array
  isFrozen: boolean
}

/**
 * Clear the metadata for an asset instance.
 * 
 * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
 * asset `instance`.
 * 
 * Any deposit is freed for the asset class owner.
 * 
 * - `class`: The identifier of the asset class whose instance's metadata to clear.
 * - `instance`: The identifier of the asset instance whose metadata to clear.
 * 
 * Emits `MetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_clear_metadata {
  __kind: 'clear_metadata'
  class: bigint
  instance: bigint
}

/**
 * Set the metadata for an asset class.
 * 
 * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 * the asset `class`.
 * 
 * If the origin is `Signed`, then funds of signer are reserved according to the formula:
 * `MetadataDepositBase + DepositPerByte * data.len` taking into
 * account any already reserved funds.
 * 
 * - `class`: The identifier of the asset whose metadata to update.
 * - `data`: The general information of this asset. Limited in length by `StringLimit`.
 * - `is_frozen`: Whether the metadata should be frozen against further changes.
 * 
 * Emits `ClassMetadataSet`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_set_class_metadata {
  __kind: 'set_class_metadata'
  class: bigint
  data: Uint8Array
  isFrozen: boolean
}

/**
 * Clear the metadata for an asset class.
 * 
 * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
 * the asset `class`.
 * 
 * Any deposit is freed for the asset class owner.
 * 
 * - `class`: The identifier of the asset class whose metadata to clear.
 * 
 * Emits `ClassMetadataCleared`.
 * 
 * Weight: `O(1)`
 */
export interface UniquesCall_clear_class_metadata {
  __kind: 'clear_class_metadata'
  class: bigint
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_set_identity | IdentityCall_set_subs | IdentityCall_clear_identity | IdentityCall_request_judgement | IdentityCall_cancel_request | IdentityCall_set_fee | IdentityCall_set_account_id | IdentityCall_set_fields | IdentityCall_provide_judgement | IdentityCall_kill_identity | IdentityCall_add_sub | IdentityCall_rename_sub | IdentityCall_remove_sub | IdentityCall_quit_sub

/**
 * Add a registrar to the system.
 * 
 * The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 * - `account`: the account of the registrar.
 * 
 * Emits `RegistrarAdded` if successful.
 * 
 * # <weight>
 * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
 * - One storage mutation (codec `O(R)`).
 * - One event.
 * # </weight>
 */
export interface IdentityCall_add_registrar {
  __kind: 'add_registrar'
  account: Uint8Array
}

/**
 * Set an account's identity information and reserve the appropriate deposit.
 * 
 * If the account already has identity information, the deposit is taken as part payment
 * for the new deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `info`: The identity information.
 * 
 * Emits `IdentitySet` if successful.
 * 
 * # <weight>
 * - `O(X + X' + R)`
 *   - where `X` additional-field-count (deposit-bounded and code-bounded)
 *   - where `R` judgements-count (registrar-count-bounded)
 * - One balance reserve operation.
 * - One storage mutation (codec-read `O(X' + R)`, codec-write `O(X + R)`).
 * - One event.
 * # </weight>
 */
export interface IdentityCall_set_identity {
  __kind: 'set_identity'
  info: IdentityInfo
}

/**
 * Set the sub-accounts of the sender.
 * 
 * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * - `subs`: The identity's (new) sub-accounts.
 * 
 * # <weight>
 * - `O(P + S)`
 *   - where `P` old-subs-count (hard- and deposit-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 * - At most one balance operations.
 * - DB:
 *   - `P + S` storage mutations (codec complexity `O(1)`)
 *   - One storage read (codec complexity `O(P)`).
 *   - One storage write (codec complexity `O(S)`).
 *   - One storage-exists (`IdentityOf::contains_key`).
 * # </weight>
 */
export interface IdentityCall_set_subs {
  __kind: 'set_subs'
  subs: [Uint8Array, Data][]
}

/**
 * Clear an account's identity info and all sub-accounts and return all deposits.
 * 
 * Payment: All reserved balances on the account are returned.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * Emits `IdentityCleared` if successful.
 * 
 * # <weight>
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 * - One balance-unreserve operation.
 * - `2` storage reads and `S + 2` storage deletions.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_clear_identity {
  __kind: 'clear_identity'
}

/**
 * Request a judgement from a registrar.
 * 
 * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 * given.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is requested.
 * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 * 
 * ```nocompile
 * Self::registrars().get(reg_index).unwrap().fee
 * ```
 * 
 * Emits `JudgementRequested` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-reserve operation.
 * - Storage: 1 read `O(R)`, 1 mutate `O(X + R)`.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_request_judgement {
  __kind: 'request_judgement'
  regIndex: number
  maxFee: bigint
}

/**
 * Cancel a previous request.
 * 
 * Payment: A previously reserved deposit is returned on success.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is no longer requested.
 * 
 * Emits `JudgementUnrequested` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-reserve operation.
 * - One storage mutation `O(R + X)`.
 * - One event
 * # </weight>
 */
export interface IdentityCall_cancel_request {
  __kind: 'cancel_request'
  regIndex: number
}

/**
 * Set the fee required for a judgement to be requested from a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fee`: the new fee.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 7.315 + R * 0.329 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_fee {
  __kind: 'set_fee'
  index: number
  fee: bigint
}

/**
 * Change the account associated with a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `new`: the new account ID.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 8.823 + R * 0.32 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_account_id {
  __kind: 'set_account_id'
  index: number
  new: Uint8Array
}

/**
 * Set the field information for a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fields`: the fields that the registrar concerns themselves with.
 * 
 * # <weight>
 * - `O(R)`.
 * - One storage mutation `O(R)`.
 * - Benchmark: 7.464 + R * 0.325 µs (min squares analysis)
 * # </weight>
 */
export interface IdentityCall_set_fields {
  __kind: 'set_fields'
  index: number
  fields: bigint
}

/**
 * Provide a judgement for an account's identity.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `reg_index`.
 * 
 * - `reg_index`: the index of the registrar whose judgement is being made.
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * 
 * Emits `JudgementGiven` if successful.
 * 
 * # <weight>
 * - `O(R + X)`.
 * - One balance-transfer operation.
 * - Up to one account-lookup operation.
 * - Storage: 1 read `O(R)`, 1 mutate `O(R + X)`.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_provide_judgement {
  __kind: 'provide_judgement'
  regIndex: number
  target: Uint8Array
  judgement: Judgement
}

/**
 * Remove an account's identity and sub-account information and slash the deposits.
 * 
 * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 * `Slash`. Verification request deposits are not returned; they should be cancelled
 * manually using `cancel_request`.
 * 
 * The dispatch origin for this call must match `T::ForceOrigin`.
 * 
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * 
 * Emits `IdentityKilled` if successful.
 * 
 * # <weight>
 * - `O(R + S + X)`.
 * - One balance-reserve operation.
 * - `S + 2` storage mutations.
 * - One event.
 * # </weight>
 */
export interface IdentityCall_kill_identity {
  __kind: 'kill_identity'
  target: Uint8Array
}

/**
 * Add the given account to the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_add_sub {
  __kind: 'add_sub'
  sub: Uint8Array
  data: Data
}

/**
 * Alter the associated name of the given sub-account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
  __kind: 'rename_sub'
  sub: Uint8Array
  data: Data
}

/**
 * Remove the given account from the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_remove_sub {
  __kind: 'remove_sub'
  sub: Uint8Array
}

/**
 * Remove the sender as a sub-account.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender (*not* the original depositor).
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * super-identity.
 * 
 * NOTE: This should not normally be used, but is provided in the case that the non-
 * controller of an account is maliciously registered as a sub-account.
 */
export interface IdentityCall_quit_sub {
  __kind: 'quit_sub'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

/**
 * Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `other_signatories`: The accounts (other than the sender) who are part of the
 * multi-signature, but do not participate in the approval process.
 * - `call`: The call to be executed.
 * 
 * Result is equivalent to the dispatched result.
 * 
 * # <weight>
 * O(Z + C) where Z is the length of the call and C its execution weight.
 * -------------------------------
 * - DB Weight: None
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi_threshold_1 {
  __kind: 'as_multi_threshold_1'
  otherSignatories: Uint8Array[]
  call: Call
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * If there are enough, then dispatch the call.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call`: The call to be executed.
 * 
 * NOTE: Unless this is the final approval, you will generally want to use
 * `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 * on success, result is `Ok` and the result from the interior call, if it was executed,
 * may be found in the deposited `MultisigExecuted` event.
 * 
 * # <weight>
 * - `O(S + Z + Call)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - The weight of the `call`.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 * -------------------------------
 * - DB Weight:
 *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
 *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
 * - Plus Call Weight
 * # </weight>
 */
export interface MultisigCall_as_multi {
  __kind: 'as_multi'
  threshold: number
  otherSignatories: Uint8Array[]
  maybeTimepoint: (Timepoint | undefined)
  call: Uint8Array
  storeCall: boolean
  maxWeight: bigint
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account]
 *     - Write: Multisig Storage, [Caller Account]
 * # </weight>
 */
export interface MultisigCall_approve_as_multi {
  __kind: 'approve_as_multi'
  threshold: number
  otherSignatories: Uint8Array[]
  maybeTimepoint: (Timepoint | undefined)
  callHash: Uint8Array
  maxWeight: bigint
}

/**
 * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 * for this operation will be unreserved on success.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `timepoint`: The timepoint (block number and transaction index) of the first approval
 * transaction for this dispatch.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - One event.
 * - I/O: 1 read `O(S)`, one remove.
 * - Storage: removes one item.
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
 *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
 * # </weight>
 */
export interface MultisigCall_cancel_as_multi {
  __kind: 'cancel_as_multi'
  threshold: number
  otherSignatories: Uint8Array[]
  timepoint: Timepoint
  callHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainSystemCall = ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message | ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade

/**
 * Set the current validation data.
 * 
 * This should be invoked exactly once per block. It will panic at the finalization
 * phase if the call was not invoked.
 * 
 * The dispatch origin for this call must be `Inherent`
 * 
 * As a side effect, this function upgrades the current validation function
 * if the appropriate time has come.
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

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets

export interface PolkadotXcmCall_send {
  __kind: 'send'
  dest: VersionedMultiLocation
  message: VersionedXcm
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
 * fee-weight is calculated locally and thus remote weights are assumed to be equal to
 * local weights.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_teleport_assets {
  __kind: 'teleport_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 * a notification XCM.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
 * fee-weight is calculated locally and thus remote weights are assumed to be equal to
 * local weights.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
  __kind: 'reserve_transfer_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
}

/**
 * Execute an XCM message from a local, signed, origin.
 * 
 * An event is deposited indicating whether `msg` could be executed completely or only
 * partially.
 * 
 * No more than `max_weight` will be used in its attempted execution. If this is less than the
 * maximum amount of weight that the message could take to be executed, then no execution
 * attempt will be made.
 * 
 * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
 * to completion; only that *some* of it was executed.
 */
export interface PolkadotXcmCall_execute {
  __kind: 'execute'
  message: Type_283
  maxWeight: bigint
}

/**
 * Extoll that a particular destination can be communicated with through a particular
 * version of XCM.
 * 
 * - `origin`: Must be Root.
 * - `location`: The destination that is being described.
 * - `xcm_version`: The latest version of XCM that `location` supports.
 */
export interface PolkadotXcmCall_force_xcm_version {
  __kind: 'force_xcm_version'
  location: V1MultiLocation
  xcmVersion: number
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 * 
 * - `origin`: Must be Root.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface PolkadotXcmCall_force_default_xcm_version {
  __kind: 'force_default_xcm_version'
  maybeXcmVersion: (number | undefined)
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
  __kind: 'force_subscribe_version_notify'
  location: VersionedMultiLocation
}

/**
 * Require that a particular destination should no longer notify us regarding any XCM
 * version changes.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we are currently subscribed for XCM version
 *   notifications which we no longer desire.
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
  __kind: 'force_unsubscribe_version_notify'
  location: VersionedMultiLocation
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 * a notification XCM.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_reserve_transfer_assets {
  __kind: 'limited_reserve_transfer_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
  weightLimit: V2WeightLimit
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface PolkadotXcmCall_limited_teleport_assets {
  __kind: 'limited_teleport_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
  weightLimit: V2WeightLimit
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CumulusXcmCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 * Service a single overweight message.
 * 
 * - `origin`: Must pass `ExecuteOverweightOrigin`.
 * - `index`: The index of the overweight message to service.
 * - `weight_limit`: The amount of weight that message execution may take.
 * 
 * Errors:
 * - `Unknown`: Message of `index` is unknown.
 * - `OverLimit`: Message execution may use greater than `weight_limit`.
 * 
 * Events:
 * - `OverweightServiced`: On success.
 */
export interface DmpQueueCall_service_overweight {
  __kind: 'service_overweight'
  index: bigint
  weightLimit: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssetRegistryCall = AssetRegistryCall_register | AssetRegistryCall_update | AssetRegistryCall_set_metadata | AssetRegistryCall_set_location

/**
 * Register a new asset.
 * 
 * Asset is identified by `name` and the name must not be used to register another asset.
 * 
 * New asset is given `NextAssetId` - sequential asset id
 * 
 * Adds mapping between `name` and assigned `asset_id` so asset id can be retrieved by name too (Note: this approach is used in AMM implementation (xyk))
 * 
 * Emits 'Registered` event when successful.
 */
export interface AssetRegistryCall_register {
  __kind: 'register'
  name: Uint8Array
  assetType: AssetType
  existentialDeposit: bigint
}

/**
 * Update registered asset.
 * 
 * Updates also mapping between name and asset id if provided name is different than currently registered.
 * 
 * Emits `Updated` event when successful.
 */
export interface AssetRegistryCall_update {
  __kind: 'update'
  assetId: number
  name: Uint8Array
  assetType: AssetType
  existentialDeposit: (bigint | undefined)
}

/**
 * Set metadata for an asset.
 * 
 * - `asset_id`: Asset identifier.
 * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
 * - `decimals`: The number of decimals this asset uses to represent one unit.
 * 
 * Emits `MetadataSet` event when successful.
 */
export interface AssetRegistryCall_set_metadata {
  __kind: 'set_metadata'
  assetId: number
  symbol: Uint8Array
  decimals: number
}

/**
 * Set asset native location.
 * 
 * Adds mapping between native location and local asset id and vice versa.
 * 
 * Mainly used in XCM.
 * 
 * Emits `LocationSet` event when successful.
 */
export interface AssetRegistryCall_set_location {
  __kind: 'set_location'
  assetId: number
  location: AssetLocation
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XYKCall = XYKCall_create_pool | XYKCall_add_liquidity | XYKCall_remove_liquidity | XYKCall_sell | XYKCall_buy

/**
 * Create new pool for given asset pair.
 * 
 * Registers new pool for given asset pair (`asset a` and `asset b`) in asset registry.
 * Asset registry creates new id or returns previously created one if such pool existed before.
 * 
 * Pool is created with initial liquidity provided by `origin`.
 * Shares are issued with specified initial price and represents proportion of asset in the pool.
 * 
 * Emits `PoolCreated` event when successful.
 */
export interface XYKCall_create_pool {
  __kind: 'create_pool'
  assetA: number
  assetB: number
  amount: bigint
  initialPrice: bigint
}

/**
 * Add liquidity to previously created asset pair pool.
 * 
 * Shares are issued with current price.
 * 
 * Emits `LiquidityAdded` event when successful.
 */
export interface XYKCall_add_liquidity {
  __kind: 'add_liquidity'
  assetA: number
  assetB: number
  amountA: bigint
  amountBMaxLimit: bigint
}

/**
 * Remove liquidity from specific liquidity pool in the form of burning shares.
 * 
 * If liquidity in the pool reaches 0, it is destroyed.
 * 
 * Emits 'LiquidityRemoved' when successful.
 * Emits 'PoolDestroyed' when pool is destroyed.
 */
export interface XYKCall_remove_liquidity {
  __kind: 'remove_liquidity'
  assetA: number
  assetB: number
  liquidityAmount: bigint
}

/**
 * Trade asset in for asset out.
 * 
 * Executes a swap of `asset_in` for `asset_out`. Price is determined by the liquidity pool.
 * 
 * `max_limit` - minimum amount of `asset_out` / amount of asset_out to be obtained from the pool in exchange for `asset_in`.
 * 
 * Emits `SellExecuted` when successful.
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
 * Trade asset in for asset out.
 * 
 * Executes a swap of `asset_in` for `asset_out`. Price is determined by the liquidity pool.
 * 
 * `max_limit` - maximum amount of `asset_in` to be sold in exchange for `asset_out`.
 * 
 * Emits `BuyExecuted` when successful.
 */
export interface XYKCall_buy {
  __kind: 'buy'
  assetOut: number
  assetIn: number
  amount: bigint
  maxLimit: bigint
  discount: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DusterCall = DusterCall_dust_account | DusterCall_add_nondustable_account | DusterCall_remove_nondustable_account

/**
 * Dust specified account.
 * IF account balance is < min. existential deposit of given currency, and account is allowed to
 * be dusted, the remaining balance is transferred to selected account (usually treasury).
 * 
 * Caller is rewarded with chosen reward in native currency.
 */
export interface DusterCall_dust_account {
  __kind: 'dust_account'
  account: Uint8Array
  currencyId: number
}

/**
 * Add account to list of non-dustable account. Account whihc are excluded from udsting.
 * If such account should be dusted - `AccountBlacklisted` error is returned.
 * Only root can perform this action.
 */
export interface DusterCall_add_nondustable_account {
  __kind: 'add_nondustable_account'
  account: Uint8Array
}

/**
 * Remove account from list of non-dustable accounts. That means account can be dusted again.
 */
export interface DusterCall_remove_nondustable_account {
  __kind: 'remove_nondustable_account'
  account: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ExchangeCall = ExchangeCall_sell | ExchangeCall_buy

/**
 * Create sell intention
 * Calculate current spot price, create an intention and store in ```ExchangeAssetsIntentions```
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
 * Create buy intention
 * Calculate current spot price, create an intention and store in ```ExchangeAssetsIntentions```
 */
export interface ExchangeCall_buy {
  __kind: 'buy'
  assetBuy: number
  assetSell: number
  amountBuy: bigint
  maxSold: bigint
  discount: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type LBPCall = LBPCall_create_pool | LBPCall_update_pool_data | LBPCall_add_liquidity | LBPCall_remove_liquidity | LBPCall_sell | LBPCall_buy

/**
 * Create a new liquidity bootstrapping pool for given asset pair.
 * 
 * For any asset pair, only one pool can exist at a time.
 * 
 * The dispatch origin for this call must be `T::CreatePoolOrigin`.
 * The pool is created with initial liquidity provided by the `pool_owner` who must have
 * sufficient funds free.
 * 
 * The pool starts uninitialized and update_pool call should be called once created to set the start block.
 * 
 * This function should be dispatched from governing entity `T::CreatePoolOrigin`
 * 
 * Parameters:
 * - `pool_owner`: the future owner of the new pool.
 * - `asset_a`: { asset_id, amount } Asset ID and initial liquidity amount.
 * - `asset_b`: { asset_id, amount } Asset ID and initial liquidity amount.
 * - `initial_weight`: Initial weight of the asset_a. 1_000_000 corresponding to 1% and 100_000_000 to 100%
 * this should be higher than final weight
 * - `final_weight`: Final weight of the asset_a. 1_000_000 corresponding to 1% and 100_000_000 to 100%
 * this should be lower than initial weight
 * - `weight_curve`: The weight function used to update the LBP weights. Currently,
 * there is only one weight function implemented, the linear function.
 * - `fee`: The trading fee charged on every trade distributed to `fee_collector`.
 * - `fee_collector`: The account to which trading fees will be transferred.
 * - `repay_target`: The amount of tokens to repay to separate fee_collector account. Until this amount is
 * reached, fee will be increased to 20% and taken from the pool
 * 
 * Emits `PoolCreated` event when successful.
 * 
 * BEWARE: We are taking the fee from the accumulated asset. If the accumulated asset is sold to the pool,
 * the fee cost is transferred to the pool. If its bought from the pool the buyer bears the cost.
 * This increases the price of the sold asset on every trade. Make sure to only run this with
 * previously illiquid assets.
 */
export interface LBPCall_create_pool {
  __kind: 'create_pool'
  poolOwner: Uint8Array
  assetA: number
  assetAAmount: bigint
  assetB: number
  assetBAmount: bigint
  initialWeight: number
  finalWeight: number
  weightCurve: WeightCurveType
  fee: [number, number]
  feeCollector: Uint8Array
  repayTarget: bigint
}

/**
 * Update pool data of a pool.
 * 
 * The dispatch origin for this call must be signed by the pool owner.
 * 
 * The pool can be updated only if the sale has not already started.
 * 
 * At least one of the following optional parameters has to be specified.
 * 
 * Parameters:
 * - `pool_id`: The identifier of the pool to be updated.
 * - `start`: The new starting time of the sale. This parameter is optional.
 * - `end`: The new ending time of the sale. This parameter is optional.
 * - `initial_weight`: The new initial weight. This parameter is optional.
 * - `final_weight`: The new final weight. This parameter is optional.
 * - `fee`: The new trading fee charged on every trade. This parameter is optional.
 * - `fee_collector`: The new receiver of trading fees. This parameter is optional.
 * 
 * Emits `PoolUpdated` event when successful.
 */
export interface LBPCall_update_pool_data {
  __kind: 'update_pool_data'
  poolId: Uint8Array
  poolOwner: (Uint8Array | undefined)
  start: (number | undefined)
  end: (number | undefined)
  initialWeight: (number | undefined)
  finalWeight: (number | undefined)
  fee: ([number, number] | undefined)
  feeCollector: (Uint8Array | undefined)
  repayTarget: (bigint | undefined)
}

/**
 * Add liquidity to a pool.
 * 
 * Assets to add has to match the pool assets. At least one amount has to be non-zero.
 * 
 * The dispatch origin for this call must be signed by the pool owner.
 * 
 * Parameters:
 * - `pool_id`: The identifier of the pool
 * - `amount_a`: The identifier of the asset and the amount to add.
 * - `amount_b`: The identifier of the second asset and the amount to add.
 * 
 * Emits `LiquidityAdded` event when successful.
 */
export interface LBPCall_add_liquidity {
  __kind: 'add_liquidity'
  amountA: [number, bigint]
  amountB: [number, bigint]
}

/**
 * Transfer all the liquidity from a pool back to the pool owner and destroy the pool.
 * The pool data are also removed from the storage.
 * 
 * The pool can't be destroyed during the sale.
 * 
 * The dispatch origin for this call must be signed by the pool owner.
 * 
 * Parameters:
 * - `amount_a`: The identifier of the asset and the amount to add.
 * 
 * Emits 'LiquidityRemoved' when successful.
 */
export interface LBPCall_remove_liquidity {
  __kind: 'remove_liquidity'
  poolId: Uint8Array
}

/**
 * Trade `asset_in` for `asset_out`.
 * 
 * Executes a swap of `asset_in` for `asset_out`. Price is determined by the pool and is
 * affected by the amount and proportion of the pool assets and the weights.
 * 
 * Trading `fee` is distributed to the `fee_collector`.
 * 
 * Parameters:
 * - `asset_in`: The identifier of the asset being transferred from the account to the pool.
 * - `asset_out`: The identifier of the asset being transferred from the pool to the account.
 * - `amount`: The amount of `asset_in`
 * - `max_limit`: minimum amount of `asset_out` / amount of asset_out to be obtained from the pool in exchange for `asset_in`.
 * 
 * Emits `SellExecuted` when successful.
 */
export interface LBPCall_sell {
  __kind: 'sell'
  assetIn: number
  assetOut: number
  amount: bigint
  maxLimit: bigint
}

/**
 * Trade `asset_in` for `asset_out`.
 * 
 * Executes a swap of `asset_in` for `asset_out`. Price is determined by the pool and is
 * affected by the amount and the proportion of the pool assets and the weights.
 * 
 * Trading `fee` is distributed to the `fee_collector`.
 * 
 * Parameters:
 * - `asset_in`: The identifier of the asset being transferred from the account to the pool.
 * - `asset_out`: The identifier of the asset being transferred from the pool to the account.
 * - `amount`: The amount of `asset_out`.
 * - `max_limit`: maximum amount of `asset_in` to be sold in exchange for `asset_out`.
 * 
 * Emits `BuyExecuted` when successful.
 */
export interface LBPCall_buy {
  __kind: 'buy'
  assetOut: number
  assetIn: number
  amount: bigint
  maxLimit: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type NFTCall = NFTCall_create_class | NFTCall_mint | NFTCall_transfer | NFTCall_burn | NFTCall_destroy_class

/**
 * Creates an NFT class of the given class
 * and sets its metadata
 * 
 * Parameters:
 * - `class_id`: Identifier of a class
 * - `class_type`: The class type determines its purpose and usage
 * - `metadata`: Arbitrary data about a class, e.g. IPFS hash or name
 * 
 * Emits ClassCreated event
 */
export interface NFTCall_create_class {
  __kind: 'create_class'
  classId: bigint
  classType: ClassType
  metadata: Uint8Array
}

/**
 * Mints an NFT in the specified class
 * and sets its metadata
 * 
 * Parameters:
 * - `class_id`: The class of the asset to be minted.
 * - `instance_id`: The class of the asset to be minted.
 * - `metadata`: Arbitrary data about an instance, e.g. IPFS hash or symbol
 */
export interface NFTCall_mint {
  __kind: 'mint'
  classId: bigint
  instanceId: bigint
  metadata: Uint8Array
}

/**
 * Transfers NFT from account A to account B
 * Only the ProtocolOrigin can send NFT to another account
 * This is to prevent creating deposit burden for others
 * 
 * Parameters:
 * - `class_id`: The class of the asset to be transferred.
 * - `instance_id`: The instance of the asset to be transferred.
 * - `dest`: The account to receive ownership of the asset.
 */
export interface NFTCall_transfer {
  __kind: 'transfer'
  classId: bigint
  instanceId: bigint
  dest: Uint8Array
}

/**
 * Removes a token from existence
 * 
 * Parameters:
 * - `class_id`: The class of the asset to be burned.
 * - `instance_id`: The instance of the asset to be burned.
 */
export interface NFTCall_burn {
  __kind: 'burn'
  classId: bigint
  instanceId: bigint
}

/**
 * Removes a class from existence
 * 
 * Parameters:
 * - `class_id`: The identifier of the asset class to be destroyed.
 */
export interface NFTCall_destroy_class {
  __kind: 'destroy_class'
  classId: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type LiquidityMiningCall = LiquidityMiningCall_create_global_farm | LiquidityMiningCall_destroy_global_farm | LiquidityMiningCall_create_yield_farm | LiquidityMiningCall_update_yield_farm | LiquidityMiningCall_stop_yield_farm | LiquidityMiningCall_resume_yield_farm | LiquidityMiningCall_destroy_yield_farm | LiquidityMiningCall_deposit_shares | LiquidityMiningCall_redeposit_lp_shares | LiquidityMiningCall_claim_rewards | LiquidityMiningCall_withdraw_shares

/**
 * Create new liquidity mining program with provided parameters.
 * 
 * `owner` account have to have at least `total_rewards` balance. This fund will be
 * transferred from `owner` to farm account.
 * 
 * The dispatch origin for this call must be `T::CreateOrigin`.
 * 
 * Parameters:
 * - `origin`: global farm's owner.
 * - `total_rewards`: total rewards planned to distribute. This rewards will be
 * distributed between all yield farms in the global farm.
 * - `planned_yielding_periods`: planned number of periods to distribute `total_rewards`.
 * WARN: THIS IS NOT HARD DEADLINE. Not all rewards have to be distributed in
 * `planned_yielding_periods`. Rewards are distributed based on the situation in the yield
 * farms and can be distributed in a longer time frame but never in the shorter time frame.
 * - `blocks_per_period`:  number of blocks in a single period. Min. number of blocks per
 * period is 1.
 * - `incentivized_asset`: asset to be incentivized in AMM pools. All yield farms added into
 * liq. mining program have to have `incentivized_asset` in their pair.
 * - `reward_currency`: payoff currency of rewards.
 * - `owner`: liq. mining program owner.
 * - `yield_per_period`: percentage return on `reward_currency` of all farms p.a.
 * - `min_deposit`: minimum amount which can be deposited to the farm
 * - `price_adjustment`:
 * Emits `GlobalFarmCreated` event when successful.
 */
export interface LiquidityMiningCall_create_global_farm {
  __kind: 'create_global_farm'
  totalRewards: bigint
  plannedYieldingPeriods: number
  blocksPerPeriod: number
  incentivizedAsset: number
  rewardCurrency: number
  owner: Uint8Array
  yieldPerPeriod: bigint
  minDeposit: bigint
  priceAdjustment: bigint
}

/**
 * Destroy existing liq. mining program.
 * 
 * Only farm owner can perform this action.
 * 
 * WARN: To successfully destroy a farm, farm have to be empty(all yield farms in he global farm must be destroyed).
 * 
 * Parameters:
 * - `origin`: global farm's owner.
 * - `global_farm_id`: id of global farm to be destroyed.
 * 
 * Emits `FarmDestroyed` event when successful.
 */
export interface LiquidityMiningCall_destroy_global_farm {
  __kind: 'destroy_global_farm'
  globalFarmId: number
}

/**
 * Add yield farm for given `asset_pair` amm.
 *  
 * Only farm owner can perform this action.
 * 
 * Only AMMs with `asset_pair` with `incentivized_asset` can be added into the farm. AMM
 * for `asset_pair` has to exist to successfully create yield farm. Yield farm for same `asset_pair` can exist only once in the global farm.
 * 
 * Parameters:
 * - `origin`: global farm's owner.
 * - `farm_id`: global farm id to which a yield farm will be added.
 * - `asset_pair`: asset pair identifying yield farm. Liq. mining will be allowed for this
 * `asset_pair` and one of the assets in the pair must be `incentivized_asset`.
 * - `multiplier`: yield farm multiplier.
 * - `loyalty_curve`: curve to calculate loyalty multiplier to distribute rewards to users
 * with time incentive. `None` means no loyalty multiplier.
 * 
 * Emits `YieldFarmCreated` event when successful.
 */
export interface LiquidityMiningCall_create_yield_farm {
  __kind: 'create_yield_farm'
  globalFarmId: number
  assetPair: AssetPair
  multiplier: bigint
  loyaltyCurve: (LoyaltyCurve | undefined)
}

/**
 * Update yield farm multiplier.
 *  
 * Only farm owner can perform this action.
 * 
 * Parameters:
 * - `origin`: global farm's owner.
 * - `global_farm_id`: global farm id in which yield farm will be updated.
 * - `asset_pair`: asset pair identifying yield farm in global farm.
 * - `multiplier`: new yield farm multiplier.
 * 
 * Emits `YieldFarmUpdated` event when successful.
 */
export interface LiquidityMiningCall_update_yield_farm {
  __kind: 'update_yield_farm'
  globalFarmId: number
  assetPair: AssetPair
  multiplier: bigint
}

/**
 * Stop liq. miming for specific yield farm.
 * 
 * This function claims rewards from `GlobalFarm` last time and stops yield farm
 * incentivization from a `GlobalFarm`. Users will be able to only withdraw
 * shares(with claiming) after calling this function.
 * `deposit_shares()` and `claim_rewards()` are not allowed on canceled yield farm.
 *  
 * Only farm owner can perform this action.
 * 
 * Parameters:
 * - `origin`: global farm's owner.
 * - `global_farm_id`: farm id in which yield farm will be canceled.
 * - `asset_pair`: asset pair identifying yield farm in the farm.
 * 
 * Emits `YieldFarmStopped` event when successful.
 */
export interface LiquidityMiningCall_stop_yield_farm {
  __kind: 'stop_yield_farm'
  globalFarmId: number
  assetPair: AssetPair
}

/**
 * Resume yield farm for sopped yield farm.
 * 
 * This function resume incentivization from `GlobalFarm` and restore full functionality
 * for yield farm. Users will be able to deposit, claim and withdraw again.
 * 
 * WARN: Yield farm is NOT rewarded for time it was stopped.
 * 
 * Only farm owner can perform this action.
 * 
 * Parameters:
 * - `origin`: global farm's owner.
 * - `global_farm_id`: global farm id in which yield farm will be resumed.
 * - `yield_farm_id`: id of yield farm to be resumed.
 * - `asset_pair`: asset pair identifying yield farm in global farm.
 * - `multiplier`: yield farm multiplier in the farm.
 * 
 * Emits `YieldFarmResumed` event when successful.
 */
export interface LiquidityMiningCall_resume_yield_farm {
  __kind: 'resume_yield_farm'
  globalFarmId: number
  yieldFarmId: number
  assetPair: AssetPair
  multiplier: bigint
}

/**
 * Remove yield farm
 * 
 * This function marks a yield farm ready for removed from storage when it's empty. Users will
 * be able to only withdraw shares(without claiming rewards from yield farm). Unpaid rewards
 * will be transferred back to global farm and will be used to distribute to other yield farms.
 * 
 * Yield farm must be stopped before calling this function.
 * 
 * Only global farm's owner can perform this action. Yield farm stays in the storage until it's
 * empty(all farm entries are withdrawn). Last withdrawn from yield farm trigger removing from
 * the storage.
 * 
 * Parameters:
 * - `origin`: global farm's owner.
 * - `global_farm_id`: farm id from which yield farm should be destroyed.
 * - `yield_farm_id`: id of yield farm to be destroyed.
 * - `asset_pair`: asset pair identifying yield farm in the global farm.
 * 
 * Emits `YieldFarmDestroyed` event when successful.
 */
export interface LiquidityMiningCall_destroy_yield_farm {
  __kind: 'destroy_yield_farm'
  globalFarmId: number
  yieldFarmId: number
  assetPair: AssetPair
}

/**
 * Deposit LP shares to a liq. mining.
 * 
 * This function transfer LP shares from `origin` to pallet's account and mint nft for
 * `origin` account. Minted nft represent deposit in the liq. mining.
 * 
 * Parameters:
 * - `origin`: account depositing LP shares. This account have to have at least
 * `shares_amount` of LP shares.
 * - `global_farm_id`: id of global farm to which user want to deposit LP shares.
 * - `yield_farm_id`: id of yield farm to deposit to.
 * - `asset_pair`: asset pair identifying LP shares user want to deposit.
 * - `shares_amount`: amount of LP shares user want to deposit.
 * 
 * Emits `SharesDeposited` event when successful.
 */
export interface LiquidityMiningCall_deposit_shares {
  __kind: 'deposit_shares'
  globalFarmId: number
  yieldFarmId: number
  assetPair: AssetPair
  sharesAmount: bigint
}

/**
 * This function create yield farm entry for existing deposit. LP shares are not transferred
 * and amount of LP shares is based on existing deposit.
 * 
 * This function DOESN'T create new deposit.
 * 
 * Parameters:
 * - `origin`: account depositing LP shares. This account have to have at least
 * - `global_farm_id`: global farm identifier.
 * - `yield_farm_id`: yield farm identifier redepositing to.
 * - `asset_pair`: asset pair identifying LP shares user want to deposit.
 * - `deposit_id`: identifier of the AMM pool.
 * 
 * Emits `SharesRedeposited` event when successful.
 */
export interface LiquidityMiningCall_redeposit_lp_shares {
  __kind: 'redeposit_lp_shares'
  globalFarmId: number
  yieldFarmId: number
  assetPair: AssetPair
  depositId: bigint
}

/**
 * Claim rewards from liq. mining for deposit represented by `nft_id`.
 * 
 * This function calculate user rewards from liq. mining and transfer rewards to `origin`
 * account. Claiming in the same period is allowed only once.
 * 
 * Parameters:
 * - `origin`: account owner of deposit(nft).
 * - `deposit_id`: nft id representing deposit in the yield farm.
 * - `yield_farm_id`: yield farm identifier to claim rewards from.
 * 
 * Emits `RewardClaimed` event when successful.
 */
export interface LiquidityMiningCall_claim_rewards {
  __kind: 'claim_rewards'
  depositId: bigint
  yieldFarmId: number
}

/**
 * Withdraw LP shares from liq. mining. with reward claiming if possible.
 * 
 * Cases for transfer LP shares and claimed rewards:
 * 
 * * yield farm is active(yield farm is not stopped) - claim and transfer rewards(if it
 * wasn't claimed in this period) and transfer LP shares.
 * * liq. mining is stopped - claim and transfer rewards(if it
 * wasn't claimed in this period) and transfer LP shares.
 * * yield farm was destroyed - only LP shares will be transferred.
 * * farm was destroyed - only LP shares will be transferred.
 * * SPECIAL CASE: AMM pool does not exist - claim may happen if yield farm is still active, LP
 * shares will not be transferred.
 * 
 * User's unclaimable rewards will be transferred back to global farm's account.
 * 
 * Parameters:
 * - `origin`: account owner of deposit(nft).
 * - `deposit_id`: nft id representing deposit in the yield farm.
 * - `yield_farm_id`: yield farm identifier to dithdraw shares from.
 * - `asset_pair`: asset pair identifying yield farm in global farm.
 * 
 * Emits:
 * * `RewardClaimed` if claim happen
 * * `SharesWithdrawn` event when successful
 */
export interface LiquidityMiningCall_withdraw_shares {
  __kind: 'withdraw_shares'
  depositId: bigint
  yieldFarmId: number
  assetPair: AssetPair
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultiTransactionPaymentCall = MultiTransactionPaymentCall_set_currency | MultiTransactionPaymentCall_add_currency | MultiTransactionPaymentCall_remove_currency

/**
 * Set selected currency for given account.
 * 
 * This allows to set a currency for an account in which all transaction fees will be paid.
 * Account balance cannot be zero.
 * 
 * Chosen currency must be in the list of accepted currencies.
 * 
 * When currency is set, fixed fee is withdrawn from the account to pay for the currency change
 * 
 * Emits `CurrencySet` event when successful.
 */
export interface MultiTransactionPaymentCall_set_currency {
  __kind: 'set_currency'
  currency: number
}

/**
 * Add a currency to the list of accepted currencies.
 * 
 * Only member can perform this action.
 * 
 * Currency must not be already accepted. Core asset id cannot be explicitly added.
 * 
 * Emits `CurrencyAdded` event when successful.
 */
export interface MultiTransactionPaymentCall_add_currency {
  __kind: 'add_currency'
  currency: number
  price: bigint
}

/**
 * Remove currency from the list of supported currencies
 * Only selected members can perform this action
 * 
 * Core asset cannot be removed.
 * 
 * Emits `CurrencyRemoved` when successful.
 */
export interface MultiTransactionPaymentCall_remove_currency {
  __kind: 'remove_currency'
  currency: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PriceOracleCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MarketplaceCall = MarketplaceCall_buy | MarketplaceCall_set_price | MarketplaceCall_make_offer | MarketplaceCall_withdraw_offer | MarketplaceCall_accept_offer | MarketplaceCall_add_royalty

/**
 * Pays a price to the current owner
 * Transfers NFT ownership to the buyer
 * Disables automatic sell of the NFT
 * 
 * Parameters:
 * - `class_id`: The identifier of a non-fungible token class
 * - `instance_id`: The instance identifier of a class
 */
export interface MarketplaceCall_buy {
  __kind: 'buy'
  classId: bigint
  instanceId: bigint
}

/**
 * Set trading price and allow sell
 * Setting price to None disables auto sell
 * 
 * Parameters:
 * - `class_id`: The identifier of a non-fungible token class
 * - `instance_id`: The instance identifier of a class
 * - `new_price`: price the token will be listed for
 */
export interface MarketplaceCall_set_price {
  __kind: 'set_price'
  classId: bigint
  instanceId: bigint
  newPrice: (bigint | undefined)
}

/**
 * Users can indicate what price they would be willing to pay for a token
 * Price can be lower than current listing price
 * Token doesn't have to be currently listed
 * 
 * Parameters:
 * - `class_id`: The identifier of a non-fungible token class
 * - `instance_id`: The instance identifier of a class
 * - `amount`: The amount user is willing to pay
 * - `expires`: The block until the current owner can accept the offer
 */
export interface MarketplaceCall_make_offer {
  __kind: 'make_offer'
  classId: bigint
  instanceId: bigint
  amount: bigint
  expires: number
}

/**
 * Reverse action to make_offer
 * Removes an offer and unreserves funds
 * Can be done by the offer maker or owner of the token
 * 
 * Parameters:
 * - `class_id`: The identifier of a non-fungible token class
 * - `instance_id`: The instance identifier of a class
 * - `maker`: User who made the offer
 */
export interface MarketplaceCall_withdraw_offer {
  __kind: 'withdraw_offer'
  classId: bigint
  instanceId: bigint
  maker: Uint8Array
}

/**
 * Accept an offer and process the trade
 * 
 * Parameters:
 * - `class_id`: The identifier of a non-fungible token class
 * - `instance_id`: The instance identifier of a class
 * - `maker`: User who made the offer
 */
export interface MarketplaceCall_accept_offer {
  __kind: 'accept_offer'
  classId: bigint
  instanceId: bigint
  maker: Uint8Array
}

/**
 * Add royalty feature where a cut for author is provided
 * There is non-refundable reserve held for creating a royalty
 * 
 * Parameters:
 * - `class_id`: The class of the asset to be minted.
 * - `instance_id`: The instance value of the asset to be minted.
 * - `author`: Receiver of the royalty
 * - `royalty`: Percentage reward from each trade for the author
 */
export interface MarketplaceCall_add_royalty {
  __kind: 'add_royalty'
  classId: bigint
  instanceId: bigint
  author: Uint8Array
  royalty: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CurrenciesCall = CurrenciesCall_transfer | CurrenciesCall_transfer_native_currency | CurrenciesCall_update_balance

/**
 * Transfer some balance to another account under `currency_id`.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer {
  __kind: 'transfer'
  dest: Uint8Array
  currencyId: number
  amount: bigint
}

/**
 * Transfer some native currency to another account.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 */
export interface CurrenciesCall_transfer_native_currency {
  __kind: 'transfer_native_currency'
  dest: Uint8Array
  amount: bigint
}

/**
 * update amount of account `who` under `currency_id`.
 * 
 * The dispatch origin of this call must be _Root_.
 */
export interface CurrenciesCall_update_balance {
  __kind: 'update_balance'
  who: Uint8Array
  currencyId: number
  amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TokensCall = TokensCall_transfer | TokensCall_transfer_all | TokensCall_transfer_keep_alive | TokensCall_force_transfer | TokensCall_set_balance

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * It will decrease the total issuance of the system by the
 * `TransferFee`. If the sender's account is below the existential
 * deposit as a result of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_transfer {
  __kind: 'transfer'
  dest: Uint8Array
  currencyId: number
  amount: bigint
}

/**
 * Transfer all remaining balance to the given account.
 * 
 * NOTE: This function only attempts to transfer _transferable_
 * balances. This means that any locked, reserved, or existential
 * deposits (when `keep_alive` is `true`), will not be transferred by
 * this function. To ensure that this function results in a killed
 * account, you might need to prepare the account by removing any
 * reference counters, storage deposits, etc...
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `keep_alive`: A boolean to determine if the `transfer_all`
 *   operation should send all of the funds the account has, causing
 *   the sender account to be killed (false), or transfer everything
 *   except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true).
 */
export interface TokensCall_transfer_all {
  __kind: 'transfer_all'
  dest: Uint8Array
  currencyId: number
  keepAlive: boolean
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer
 * will not kill the origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * The dispatch origin for this call must be `Signed` by the
 * transactor.
 * 
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_transfer_keep_alive {
  __kind: 'transfer_keep_alive'
  dest: Uint8Array
  currencyId: number
  amount: bigint
}

/**
 * Exactly as `transfer`, except the origin must be root and the source
 * account may be specified.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * - `source`: The sender of the transfer.
 * - `dest`: The recipient of the transfer.
 * - `currency_id`: currency type.
 * - `amount`: free balance amount to tranfer.
 */
export interface TokensCall_force_transfer {
  __kind: 'force_transfer'
  source: Uint8Array
  dest: Uint8Array
  currencyId: number
  amount: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it
 * will also decrease the total issuance of the system
 * (`TotalIssuance`). If the new free or reserved balance is below the
 * existential deposit, it will reap the `AccountInfo`.
 * 
 * The dispatch origin for this call is `root`.
 */
export interface TokensCall_set_balance {
  __kind: 'set_balance'
  who: Uint8Array
  currencyId: number
  newFree: bigint
  newReserved: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type OrmlXcmCall = OrmlXcmCall_send_as_sovereign

/**
 * Send an XCM message as parachain sovereign.
 */
export interface OrmlXcmCall_send_as_sovereign {
  __kind: 'send_as_sovereign'
  dest: VersionedMultiLocation
  message: VersionedXcm
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_with_fee | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_multiassets

/**
 * Transfer native currencies.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer {
  __kind: 'transfer'
  currencyId: number
  amount: bigint
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Transfer `MultiAsset`.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset {
  __kind: 'transfer_multiasset'
  asset: VersionedMultiAsset
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Transfer native currencies specifying the fee and amount as
 * separate.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the amount to be spent to pay for execution in destination
 * chain. Both fee and amount will be subtracted form the callers
 * balance.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_with_fee {
  __kind: 'transfer_with_fee'
  currencyId: number
  amount: bigint
  fee: bigint
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Transfer `MultiAsset` specifying the fee and amount as separate.
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the multiasset to be spent to pay for execution in
 * destination chain. Both fee and amount will be subtracted form the
 * callers balance For now we only accept fee and asset having the same
 * `MultiLocation` id.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset_with_fee {
  __kind: 'transfer_multiasset_with_fee'
  asset: VersionedMultiAsset
  fee: VersionedMultiAsset
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Transfer several currencies specifying the item to be used as fee
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the currencies tuple that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multicurrencies {
  __kind: 'transfer_multicurrencies'
  currencies: [number, bigint][]
  feeItem: number
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Transfer several `MultiAsset` specifying the item to be used as fee
 * 
 * `dest_weight` is the weight for XCM execution on the dest chain, and
 * it would be charged from the transferred assets. If set below
 * requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the MultiAssets that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiassets {
  __kind: 'transfer_multiassets'
  assets: VersionedMultiAssets
  feeItem: number
  dest: VersionedMultiLocation
  destWeight: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
 */
export interface SudoCall_sudo {
  __kind: 'sudo'
  call: Call
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * This function does not check the weight of the call, and instead allows the
 * Sudo user to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - The weight of this call is defined by the caller.
 * # </weight>
 */
export interface SudoCall_sudo_unchecked_weight {
  __kind: 'sudo_unchecked_weight'
  call: Call
  weight: bigint
}

/**
 * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
 * key.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB change.
 * # </weight>
 */
export interface SudoCall_set_key {
  __kind: 'set_key'
  new: Uint8Array
}

/**
 * Authenticates the sudo key and dispatches a function call with `Signed` origin from
 * a given account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
 */
export interface SudoCall_sudo_as {
  __kind: 'sudo_as'
  who: Uint8Array
  call: Call
}

export type V0Xcm = V0Xcm_WithdrawAsset | V0Xcm_ReserveAssetDeposit | V0Xcm_TeleportAsset | V0Xcm_QueryResponse | V0Xcm_TransferAsset | V0Xcm_TransferReserveAsset | V0Xcm_Transact | V0Xcm_HrmpNewChannelOpenRequest | V0Xcm_HrmpChannelAccepted | V0Xcm_HrmpChannelClosing | V0Xcm_RelayedFrom

export interface V0Xcm_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V0MultiAsset[]
  effects: V0Order[]
}

export interface V0Xcm_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: V0MultiAsset[]
  effects: V0Order[]
}

export interface V0Xcm_TeleportAsset {
  __kind: 'TeleportAsset'
  assets: V0MultiAsset[]
  effects: V0Order[]
}

export interface V0Xcm_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V0Response
}

export interface V0Xcm_TransferAsset {
  __kind: 'TransferAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Xcm_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order[]
}

export interface V0Xcm_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V0Xcm_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V0Xcm_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V0Xcm_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V0Xcm_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V0MultiLocation
  message: V0Xcm
}

export type V1Xcm = V1Xcm_WithdrawAsset | V1Xcm_ReserveAssetDeposited | V1Xcm_ReceiveTeleportedAsset | V1Xcm_QueryResponse | V1Xcm_TransferAsset | V1Xcm_TransferReserveAsset | V1Xcm_Transact | V1Xcm_HrmpNewChannelOpenRequest | V1Xcm_HrmpChannelAccepted | V1Xcm_HrmpChannelClosing | V1Xcm_RelayedFrom | V1Xcm_SubscribeVersion | V1Xcm_UnsubscribeVersion

export interface V1Xcm_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V1MultiAsset[]
  effects: V1Order[]
}

export interface V1Xcm_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  assets: V1MultiAsset[]
  effects: V1Order[]
}

export interface V1Xcm_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: V1MultiAsset[]
  effects: V1Order[]
}

export interface V1Xcm_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V1Response
}

export interface V1Xcm_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAsset[]
  beneficiary: V1MultiLocation
}

export interface V1Xcm_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAsset[]
  dest: V1MultiLocation
  effects: V1Order[]
}

export interface V1Xcm_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V1Xcm_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V1Xcm_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V1Xcm_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V1Xcm_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V1Junctions
  message: V1Xcm
}

export interface V1Xcm_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V1Xcm_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export interface StorageProof {
  trieNodes: Uint8Array[]
}

export interface InboundDownwardMessage {
  sentAt: number
  msg: Uint8Array
}

export interface InboundHrmpMessage {
  sentAt: number
  data: Uint8Array
}

export type Type_284 = Type_284_WithdrawAsset | Type_284_ReserveAssetDeposit | Type_284_TeleportAsset | Type_284_QueryResponse | Type_284_TransferAsset | Type_284_TransferReserveAsset | Type_284_Transact | Type_284_HrmpNewChannelOpenRequest | Type_284_HrmpChannelAccepted | Type_284_HrmpChannelClosing | Type_284_RelayedFrom

export interface Type_284_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V0MultiAsset[]
  effects: Type_286[]
}

export interface Type_284_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: V0MultiAsset[]
  effects: Type_286[]
}

export interface Type_284_TeleportAsset {
  __kind: 'TeleportAsset'
  assets: V0MultiAsset[]
  effects: Type_286[]
}

export interface Type_284_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V0Response
}

export interface Type_284_TransferAsset {
  __kind: 'TransferAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface Type_284_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order[]
}

export interface Type_284_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface Type_284_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface Type_284_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface Type_284_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface Type_284_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V0MultiLocation
  message: Type_284
}

export type Type_289 = Type_289_WithdrawAsset | Type_289_ReserveAssetDeposited | Type_289_ReceiveTeleportedAsset | Type_289_QueryResponse | Type_289_TransferAsset | Type_289_TransferReserveAsset | Type_289_Transact | Type_289_HrmpNewChannelOpenRequest | Type_289_HrmpChannelAccepted | Type_289_HrmpChannelClosing | Type_289_RelayedFrom | Type_289_SubscribeVersion | Type_289_UnsubscribeVersion

export interface Type_289_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V1MultiAsset[]
  effects: Type_291[]
}

export interface Type_289_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  assets: V1MultiAsset[]
  effects: Type_291[]
}

export interface Type_289_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: V1MultiAsset[]
  effects: Type_291[]
}

export interface Type_289_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V1Response
}

export interface Type_289_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAsset[]
  beneficiary: V1MultiLocation
}

export interface Type_289_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAsset[]
  dest: V1MultiLocation
  effects: V1Order[]
}

export interface Type_289_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface Type_289_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface Type_289_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface Type_289_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface Type_289_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V1Junctions
  message: Type_289
}

export interface Type_289_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface Type_289_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export type Type_295 = Type_295_WithdrawAsset | Type_295_ReserveAssetDeposited | Type_295_ReceiveTeleportedAsset | Type_295_QueryResponse | Type_295_TransferAsset | Type_295_TransferReserveAsset | Type_295_Transact | Type_295_HrmpNewChannelOpenRequest | Type_295_HrmpChannelAccepted | Type_295_HrmpChannelClosing | Type_295_ClearOrigin | Type_295_DescendOrigin | Type_295_ReportError | Type_295_DepositAsset | Type_295_DepositReserveAsset | Type_295_ExchangeAsset | Type_295_InitiateReserveWithdraw | Type_295_InitiateTeleport | Type_295_QueryHolding | Type_295_BuyExecution | Type_295_RefundSurplus | Type_295_SetErrorHandler | Type_295_SetAppendix | Type_295_ClearError | Type_295_ClaimAsset | Type_295_Trap | Type_295_SubscribeVersion | Type_295_UnsubscribeVersion

export interface Type_295_WithdrawAsset {
  __kind: 'WithdrawAsset'
  value: V1MultiAsset[]
}

export interface Type_295_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  value: V1MultiAsset[]
}

export interface Type_295_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  value: V1MultiAsset[]
}

export interface Type_295_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V2Response
  maxWeight: bigint
}

export interface Type_295_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAsset[]
  beneficiary: V1MultiLocation
}

export interface Type_295_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAsset[]
  dest: V1MultiLocation
  xcm: V2Instruction[]
}

export interface Type_295_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface Type_295_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface Type_295_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface Type_295_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface Type_295_ClearOrigin {
  __kind: 'ClearOrigin'
}

export interface Type_295_DescendOrigin {
  __kind: 'DescendOrigin'
  value: V1Junctions
}

export interface Type_295_ReportError {
  __kind: 'ReportError'
  queryId: bigint
  dest: V1MultiLocation
  maxResponseWeight: bigint
}

export interface Type_295_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface Type_295_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  xcm: V2Instruction[]
}

export interface Type_295_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAsset[]
}

export interface Type_295_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  xcm: V2Instruction[]
}

export interface Type_295_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  xcm: V2Instruction[]
}

export interface Type_295_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
  maxResponseWeight: bigint
}

export interface Type_295_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weightLimit: V2WeightLimit
}

export interface Type_295_RefundSurplus {
  __kind: 'RefundSurplus'
}

export interface Type_295_SetErrorHandler {
  __kind: 'SetErrorHandler'
  value: Type_295[]
}

export interface Type_295_SetAppendix {
  __kind: 'SetAppendix'
  value: Type_295[]
}

export interface Type_295_ClearError {
  __kind: 'ClearError'
}

export interface Type_295_ClaimAsset {
  __kind: 'ClaimAsset'
  assets: V1MultiAsset[]
  ticket: V1MultiLocation
}

export interface Type_295_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface Type_295_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface Type_295_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export type RawOrigin = RawOrigin_Root | RawOrigin_Signed | RawOrigin_None

export interface RawOrigin_Root {
  __kind: 'Root'
}

export interface RawOrigin_Signed {
  __kind: 'Signed'
  value: Uint8Array
}

export interface RawOrigin_None {
  __kind: 'None'
}

export type Type_318 = Type_318_Members | Type_318_Member | Type_318__Phantom

export interface Type_318_Members {
  __kind: 'Members'
  value: [number, number]
}

export interface Type_318_Member {
  __kind: 'Member'
  value: Uint8Array
}

export interface Type_318__Phantom {
  __kind: '_Phantom'
}

export type Type_319 = Type_319_Members | Type_319_Member | Type_319__Phantom

export interface Type_319_Members {
  __kind: 'Members'
  value: [number, number]
}

export interface Type_319_Member {
  __kind: 'Member'
  value: Uint8Array
}

export interface Type_319__Phantom {
  __kind: '_Phantom'
}

export type Origin = Origin_Xcm | Origin_Response

export interface Origin_Xcm {
  __kind: 'Xcm'
  value: V1MultiLocation
}

export interface Origin_Response {
  __kind: 'Response'
  value: V1MultiLocation
}

export type Type_321 = Type_321_Relay | Type_321_SiblingParachain

export interface Type_321_Relay {
  __kind: 'Relay'
}

export interface Type_321_SiblingParachain {
  __kind: 'SiblingParachain'
  value: number
}

export type Void = never

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

export interface ReferendumStatus {
  end: number
  proposalHash: Uint8Array
  threshold: VoteThreshold
  delay: number
  tally: Tally
}

export interface Delegations {
  votes: bigint
  capital: bigint
}

export interface V1AbridgedHrmpChannel {
  maxCapacity: number
  maxTotalSize: number
  maxMessageSize: number
  msgCount: number
  totalSize: number
  mqcHead: (Uint8Array | undefined)
}

export type VersionedResponse = VersionedResponse_V0 | VersionedResponse_V1 | VersionedResponse_V2

export interface VersionedResponse_V0 {
  __kind: 'V0'
  value: V0Response
}

export interface VersionedResponse_V1 {
  __kind: 'V1'
  value: V1Response
}

export interface VersionedResponse_V2 {
  __kind: 'V2'
  value: V2Response
}

export interface PriceInfo {
  avgPrice: bigint
  volume: bigint
}

export type DigestItem = DigestItem_PreRuntime | DigestItem_Consensus | DigestItem_Seal | DigestItem_Other | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_PreRuntime {
  __kind: 'PreRuntime'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Consensus {
  __kind: 'Consensus'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
  __kind: 'Seal'
  value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Other {
  __kind: 'Other'
  value: Uint8Array
}

export interface DigestItem_RuntimeEnvironmentUpdated {
  __kind: 'RuntimeEnvironmentUpdated'
}

export type Event = Event_System | Event_Balances | Event_Treasury | Event_Utility | Event_Scheduler | Event_Democracy | Event_Elections | Event_Council | Event_TechnicalCommittee | Event_Vesting | Event_Proxy | Event_Tips | Event_CollatorSelection | Event_Session | Event_Preimage | Event_Uniques | Event_Identity | Event_Multisig | Event_ParachainSystem | Event_PolkadotXcm | Event_CumulusXcm | Event_XcmpQueue | Event_DmpQueue | Event_AssetRegistry | Event_XYK | Event_Duster | Event_Exchange | Event_LBP | Event_NFT | Event_LiquidityMining | Event_WarehouseLM | Event_MultiTransactionPayment | Event_PriceOracle | Event_RelayChainInfo | Event_Marketplace | Event_Currencies | Event_Tokens | Event_OrmlXcm | Event_XTokens | Event_UnknownTokens | Event_Sudo

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

export interface Event_LiquidityMining {
  __kind: 'LiquidityMining'
  value: LiquidityMiningEvent
}

export interface Event_WarehouseLM {
  __kind: 'WarehouseLM'
  value: WarehouseLMEvent
}

export interface Event_MultiTransactionPayment {
  __kind: 'MultiTransactionPayment'
  value: MultiTransactionPaymentEvent
}

export interface Event_PriceOracle {
  __kind: 'PriceOracle'
  value: PriceOracleEvent
}

export interface Event_RelayChainInfo {
  __kind: 'RelayChainInfo'
  value: RelayChainInfoEvent
}

export interface Event_Marketplace {
  __kind: 'Marketplace'
  value: MarketplaceEvent
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

export interface Event_Sudo {
  __kind: 'Sudo'
  value: SudoEvent
}

export interface YieldFarmEntry {
  globalFarmId: number
  yieldFarmId: number
  valuedShares: bigint
  accumulatedRpvs: bigint
  accumulatedClaimedRewards: bigint
  enteredAt: number
  updatedAt: number
}

export type FarmState = FarmState_Active | FarmState_Stopped | FarmState_Deleted

export interface FarmState_Active {
  __kind: 'Active'
}

export interface FarmState_Stopped {
  __kind: 'Stopped'
}

export interface FarmState_Deleted {
  __kind: 'Deleted'
}

export type InboundState = InboundState_Ok | InboundState_Suspended

export interface InboundState_Ok {
  __kind: 'Ok'
}

export interface InboundState_Suspended {
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

export type OutboundState = OutboundState_Ok | OutboundState_Suspended

export interface OutboundState_Ok {
  __kind: 'Ok'
}

export interface OutboundState_Suspended {
  __kind: 'Suspended'
}

export interface Type_159 {
  normal: number
  operational: number
  mandatory: number
}

export interface Type_155 {
  normal: WeightsPerClass
  operational: WeightsPerClass
  mandatory: WeightsPerClass
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

export type V0Order = V0Order_Null | V0Order_DepositAsset | V0Order_DepositReserveAsset | V0Order_ExchangeAsset | V0Order_InitiateReserveWithdraw | V0Order_InitiateTeleport | V0Order_QueryHolding | V0Order_BuyExecution

export interface V0Order_Null {
  __kind: 'Null'
}

export interface V0Order_DepositAsset {
  __kind: 'DepositAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Order_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order[]
}

export interface V0Order_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V0MultiAsset[]
  receive: V0MultiAsset[]
}

export interface V0Order_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V0MultiAsset[]
  reserve: V0MultiLocation
  effects: V0Order[]
}

export interface V0Order_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order[]
}

export interface V0Order_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V0MultiLocation
  assets: V0MultiAsset[]
}

export interface V0Order_BuyExecution {
  __kind: 'BuyExecution'
  fees: V0MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  xcm: V0Xcm[]
}

export type V0Response = V0Response_Assets

export interface V0Response_Assets {
  __kind: 'Assets'
  value: V0MultiAsset[]
}

export type V1Order = V1Order_Noop | V1Order_DepositAsset | V1Order_DepositReserveAsset | V1Order_ExchangeAsset | V1Order_InitiateReserveWithdraw | V1Order_InitiateTeleport | V1Order_QueryHolding | V1Order_BuyExecution

export interface V1Order_Noop {
  __kind: 'Noop'
}

export interface V1Order_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V1Order_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  effects: V1Order[]
}

export interface V1Order_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAsset[]
}

export interface V1Order_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  effects: V1Order[]
}

export interface V1Order_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  effects: V1Order[]
}

export interface V1Order_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
}

export interface V1Order_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  instructions: V1Xcm[]
}

export type V1Response = V1Response_Assets | V1Response_Version

export interface V1Response_Assets {
  __kind: 'Assets'
  value: V1MultiAsset[]
}

export interface V1Response_Version {
  __kind: 'Version'
  value: number
}

export type Type_286 = Type_286_Null | Type_286_DepositAsset | Type_286_DepositReserveAsset | Type_286_ExchangeAsset | Type_286_InitiateReserveWithdraw | Type_286_InitiateTeleport | Type_286_QueryHolding | Type_286_BuyExecution

export interface Type_286_Null {
  __kind: 'Null'
}

export interface Type_286_DepositAsset {
  __kind: 'DepositAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface Type_286_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order[]
}

export interface Type_286_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V0MultiAsset[]
  receive: V0MultiAsset[]
}

export interface Type_286_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V0MultiAsset[]
  reserve: V0MultiLocation
  effects: V0Order[]
}

export interface Type_286_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order[]
}

export interface Type_286_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V0MultiLocation
  assets: V0MultiAsset[]
}

export interface Type_286_BuyExecution {
  __kind: 'BuyExecution'
  fees: V0MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  xcm: Type_284[]
}

export type Type_291 = Type_291_Noop | Type_291_DepositAsset | Type_291_DepositReserveAsset | Type_291_ExchangeAsset | Type_291_InitiateReserveWithdraw | Type_291_InitiateTeleport | Type_291_QueryHolding | Type_291_BuyExecution

export interface Type_291_Noop {
  __kind: 'Noop'
}

export interface Type_291_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface Type_291_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  effects: V1Order[]
}

export interface Type_291_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAsset[]
}

export interface Type_291_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  effects: V1Order[]
}

export interface Type_291_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  effects: V1Order[]
}

export interface Type_291_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
}

export interface Type_291_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  instructions: Type_289[]
}

export interface Tally {
  ayes: bigint
  nays: bigint
  turnout: bigint
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
export type LiquidityMiningEvent = LiquidityMiningEvent_GlobalFarmCreated | LiquidityMiningEvent_YieldFarmCreated | LiquidityMiningEvent_GlobalFarmDestroyed | LiquidityMiningEvent_SharesDeposited | LiquidityMiningEvent_SharesRedeposited | LiquidityMiningEvent_RewardClaimed | LiquidityMiningEvent_SharesWithdrawn | LiquidityMiningEvent_YieldFarmStopped | LiquidityMiningEvent_YieldFarmResumed | LiquidityMiningEvent_YieldFarmDestroyed | LiquidityMiningEvent_YieldFarmUpdated | LiquidityMiningEvent_DepositDestroyed

/**
 * New global farm was created.
 */
export interface LiquidityMiningEvent_GlobalFarmCreated {
  __kind: 'GlobalFarmCreated'
  id: number
  owner: Uint8Array
  totalRewards: bigint
  rewardCurrency: number
  yieldPerPeriod: bigint
  plannedYieldingPeriods: number
  blocksPerPeriod: number
  incentivizedAsset: number
  maxRewardPerPeriod: bigint
  minDeposit: bigint
  priceAdjustment: bigint
}

/**
 * New yield farm was added into the farm.
 */
export interface LiquidityMiningEvent_YieldFarmCreated {
  __kind: 'YieldFarmCreated'
  globalFarmId: number
  yieldFarmId: number
  multiplier: bigint
  assetPair: AssetPair
  loyaltyCurve: (LoyaltyCurve | undefined)
}

/**
 * Global farm was destroyed.
 */
export interface LiquidityMiningEvent_GlobalFarmDestroyed {
  __kind: 'GlobalFarmDestroyed'
  globalFarmId: number
  who: Uint8Array
  rewardCurrency: number
  undistributedRewards: bigint
}

/**
 * New LP tokens was deposited.
 */
export interface LiquidityMiningEvent_SharesDeposited {
  __kind: 'SharesDeposited'
  globalFarmId: number
  yieldFarmId: number
  who: Uint8Array
  amount: bigint
  lpToken: number
}

/**
 * LP token was redeposited for a new yield farm entry
 */
export interface LiquidityMiningEvent_SharesRedeposited {
  __kind: 'SharesRedeposited'
  globalFarmId: number
  yieldFarmId: number
  who: Uint8Array
  amount: bigint
  lpToken: number
}

/**
 * Rewards was claimed.
 */
export interface LiquidityMiningEvent_RewardClaimed {
  __kind: 'RewardClaimed'
  globalFarmId: number
  yieldFarmId: number
  who: Uint8Array
  claimed: bigint
  rewardCurrency: number
}

/**
 * LP tokens was withdrawn.
 */
export interface LiquidityMiningEvent_SharesWithdrawn {
  __kind: 'SharesWithdrawn'
  globalFarmId: number
  yieldFarmId: number
  who: Uint8Array
  lpToken: number
  amount: bigint
}

/**
 * Yield farm for asset pair was stopped.
 */
export interface LiquidityMiningEvent_YieldFarmStopped {
  __kind: 'YieldFarmStopped'
  globalFarmId: number
  yieldFarmId: number
  who: Uint8Array
  assetPair: AssetPair
}

/**
 * Yield farm for asset pair was resumed.
 */
export interface LiquidityMiningEvent_YieldFarmResumed {
  __kind: 'YieldFarmResumed'
  globalFarmId: number
  yieldFarmId: number
  who: Uint8Array
  assetPair: AssetPair
  multiplier: bigint
}

/**
 * Yield farm was destroyed from global farm.
 */
export interface LiquidityMiningEvent_YieldFarmDestroyed {
  __kind: 'YieldFarmDestroyed'
  globalFarmId: number
  yieldFarmId: number
  who: Uint8Array
  assetPair: AssetPair
}

/**
 * Yield farm multiplier was updated.
 */
export interface LiquidityMiningEvent_YieldFarmUpdated {
  __kind: 'YieldFarmUpdated'
  globalFarmId: number
  yieldFarmId: number
  who: Uint8Array
  assetPair: AssetPair
  multiplier: bigint
}

/**
 * NFT representing deposit has been destroyed
 */
export interface LiquidityMiningEvent_DepositDestroyed {
  __kind: 'DepositDestroyed'
  who: Uint8Array
  nftInstanceId: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type WarehouseLMEvent = WarehouseLMEvent_GlobalFarmAccRPZUpdated | WarehouseLMEvent_YieldFarmAccRPVSUpdated

/**
 * Global farm accumulated reward per share was updated.
 */
export interface WarehouseLMEvent_GlobalFarmAccRPZUpdated {
  __kind: 'GlobalFarmAccRPZUpdated'
  globalFarmId: number
  accumulatedRpz: bigint
  totalSharesZ: bigint
}

/**
 * Yield farm accumulated reward per valued share was updated.
 */
export interface WarehouseLMEvent_YieldFarmAccRPVSUpdated {
  __kind: 'YieldFarmAccRPVSUpdated'
  globalFarmId: number
  yieldFarmId: number
  accumulatedRpvs: bigint
  totalValuedShares: bigint
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
export type PriceOracleEvent = PriceOracleEvent_PoolRegistered

/**
 * Pool was registered.
 */
export interface PriceOracleEvent_PoolRegistered {
  __kind: 'PoolRegistered'
  assetA: number
  assetB: number
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

/**
 * 
			The [event](https://docs.substrate.io/v3/runtime/events-and-errors) emitted
			by this pallet.
			
 */
export type SudoEvent = SudoEvent_Sudid | SudoEvent_KeyChanged | SudoEvent_SudoAsDone

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
  __kind: 'Sudid'
  sudoResult: Result<null, DispatchError>
}

/**
 * The \[sudoer\] just switched identity; the old key is supplied if one existed.
 */
export interface SudoEvent_KeyChanged {
  __kind: 'KeyChanged'
  oldSudoer: (Uint8Array | undefined)
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
  __kind: 'SudoAsDone'
  sudoResult: Result<null, DispatchError>
}

export interface WeightsPerClass {
  baseExtrinsic: bigint
  maxExtrinsic: (bigint | undefined)
  maxTotal: (bigint | undefined)
  reserved: (bigint | undefined)
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
