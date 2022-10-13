import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result} from './support'
import * as v78 from './v78'

export class AssetRegistryRegisterCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AssetRegistry.register')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('AssetRegistry.register') === '85c3f4e654b95e1a277959af5d46afbe3c65de3c598975e57ac53752a9ed3e05'
  }

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
  get asV78(): {name: Uint8Array, assetType: v78.AssetType, existentialDeposit: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetRegistrySetLocationCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AssetRegistry.set_location')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('AssetRegistry.set_location') === 'cb64e0569ed096dd70dc89ce4c0cffe3c6213a0117589ee8a65dbbd51f57caaa'
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
  get asV78(): {assetId: number, location: v78.AssetLocation} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetRegistrySetMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AssetRegistry.set_metadata')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('AssetRegistry.set_metadata') === '5733a2ab6f544e91ef9651644e4a8f3fc7257fa3a961ba51dd1f0c862b7a7a0a'
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
  get asV78(): {assetId: number, symbol: Uint8Array, decimals: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class AssetRegistryUpdateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'AssetRegistry.update')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Update registered asset.
   * 
   * Updates also mapping between name and asset id if provided name is different than currently registered.
   * 
   * Emits `Updated` event when successful.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('AssetRegistry.update') === 'be93bc22aab747596aaafa42bfd6623605951ab0303c4ef01b675f2fa5ca9e44'
  }

  /**
   * Update registered asset.
   * 
   * Updates also mapping between name and asset id if provided name is different than currently registered.
   * 
   * Emits `Updated` event when successful.
   */
  get asV78(): {assetId: number, name: Uint8Array, assetType: v78.AssetType, existentialDeposit: (bigint | undefined)} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class AuthorshipSetUnclesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Authorship.set_uncles')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Provide a set of uncles.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Authorship.set_uncles') === 'cf2d7dac8c8babfdda54dfcca36fda32336dc937b0f1767c6b2332a9b718e0b5'
  }

  /**
   * Provide a set of uncles.
   */
  get asV78(): {newUncles: v78.Header[]} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesForceTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.force_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Exactly as `transfer`, except the origin must be root and the source account may be
   * specified.
   * # <weight>
   * - Same as transfer, but additional read and write because the source account is not
   *   assumed to be in the overlay.
   * # </weight>
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Balances.force_transfer') === '2fe8348cf811b833de74f02f6eeab668dbfad8a5d53274dd89837666ed3eb6fe'
  }

  /**
   * Exactly as `transfer`, except the origin must be root and the source account may be
   * specified.
   * # <weight>
   * - Same as transfer, but additional read and write because the source account is not
   *   assumed to be in the overlay.
   * # </weight>
   */
  get asV78(): {source: Uint8Array, dest: Uint8Array, value: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesForceUnreserveCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.force_unreserve')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Unreserve some balance from a user by force.
   * 
   * Can only be called by ROOT.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Balances.force_unreserve') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Unreserve some balance from a user by force.
   * 
   * Can only be called by ROOT.
   */
  get asV78(): {who: Uint8Array, amount: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesSetBalanceCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.set_balance')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Balances.set_balance') === 'a65ed3500227691ff89565c1bf5a0244c2a05366e34d1ab50167d0c006774edc'
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
  get asV78(): {who: Uint8Array, newFree: bigint, newReserved: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.transfer')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('Balances.transfer') === 'cf5bb376709277883598390b3462e93b0f3c383df391c0649728c965e8da82fd'
  }

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
  get asV78(): {dest: Uint8Array, value: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesTransferAllCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.transfer_all')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Balances.transfer_all') === '55f3f63b765a5b0a714fcbe6c824b0f6fc21773aab999a719c36e7dc7db49575'
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
  get asV78(): {dest: Uint8Array, keepAlive: boolean} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class BalancesTransferKeepAliveCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Balances.transfer_keep_alive')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Same as the [`transfer`] call, but with a check that the transfer will not kill the
   * origin account.
   * 
   * 99% of the time you want [`transfer`] instead.
   * 
   * [`transfer`]: struct.Pallet.html#method.transfer
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Balances.transfer_keep_alive') === 'cf5bb376709277883598390b3462e93b0f3c383df391c0649728c965e8da82fd'
  }

  /**
   * Same as the [`transfer`] call, but with a check that the transfer will not kill the
   * origin account.
   * 
   * 99% of the time you want [`transfer`] instead.
   * 
   * [`transfer`]: struct.Pallet.html#method.transfer
   */
  get asV78(): {dest: Uint8Array, value: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class CollatorSelectionLeaveIntentCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CollatorSelection.leave_intent')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Deregister `origin` as a collator candidate. Note that the collator can only leave on
   * session change. The `CandidacyBond` will be unreserved immediately.
   * 
   * This call will fail if the total number of candidates would drop below `MinCandidates`.
   * 
   * This call is not available to `Invulnerable` collators.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('CollatorSelection.leave_intent') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Deregister `origin` as a collator candidate. Note that the collator can only leave on
   * session change. The `CandidacyBond` will be unreserved immediately.
   * 
   * This call will fail if the total number of candidates would drop below `MinCandidates`.
   * 
   * This call is not available to `Invulnerable` collators.
   */
  get asV78(): null {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class CollatorSelectionRegisterAsCandidateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CollatorSelection.register_as_candidate')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register this account as a collator candidate. The account must (a) already have
   * registered session keys and (b) be able to reserve the `CandidacyBond`.
   * 
   * This call is not available to `Invulnerable` collators.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('CollatorSelection.register_as_candidate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Register this account as a collator candidate. The account must (a) already have
   * registered session keys and (b) be able to reserve the `CandidacyBond`.
   * 
   * This call is not available to `Invulnerable` collators.
   */
  get asV78(): null {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class CollatorSelectionSetCandidacyBondCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CollatorSelection.set_candidacy_bond')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the candidacy bond amount.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('CollatorSelection.set_candidacy_bond') === 'a862ec70ffc8f3bd1c3d634825c052f8531eba68afa42769689fc18a6d718eda'
  }

  /**
   * Set the candidacy bond amount.
   */
  get asV78(): {bond: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class CollatorSelectionSetDesiredCandidatesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CollatorSelection.set_desired_candidates')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the ideal number of collators (not including the invulnerables).
   * If lowering this number, then the number of running collators could be higher than this figure.
   * Aside from that edge case, there should be no other way to have more collators than the desired number.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('CollatorSelection.set_desired_candidates') === '405f1447d8db6ecc920213976cf7f98b6e74c5ceb4e2ecf66c742895e40e5d78'
  }

  /**
   * Set the ideal number of collators (not including the invulnerables).
   * If lowering this number, then the number of running collators could be higher than this figure.
   * Aside from that edge case, there should be no other way to have more collators than the desired number.
   */
  get asV78(): {max: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class CollatorSelectionSetInvulnerablesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CollatorSelection.set_invulnerables')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the list of invulnerable (fixed) collators.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('CollatorSelection.set_invulnerables') === '4f4db85b7e763f702804fa793ac5cba68cfd546b497830a9c3c21dced2b91524'
  }

  /**
   * Set the list of invulnerable (fixed) collators.
   */
  get asV78(): {new: Uint8Array[]} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class CouncilCloseCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Council.close')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Council.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
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
  get asV78(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class CouncilDisapproveProposalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Council.disapprove_proposal')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Council.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
  get asV78(): {proposalHash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class CouncilExecuteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Council.execute')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Council.execute') === 'd124ab118335541e4d64d7187c5daaa069c9de1f39b3f53c5836cb901c00c46c'
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
  get asV78(): {proposal: v78.Call, lengthBound: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class CouncilProposeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Council.propose')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Council.propose') === 'e8d5cbcf2c4d12383b76b2c035a628fa0f77e06a181b0bb6aa77789e3151b25a'
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
  get asV78(): {threshold: number, proposal: v78.Call, lengthBound: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class CouncilSetMembersCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Council.set_members')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('Council.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
  }

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
  get asV78(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class CouncilVoteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Council.vote')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Council.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
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
  get asV78(): {proposal: Uint8Array, index: number, approve: boolean} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class CurrenciesTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Currencies.transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer some balance to another account under `currency_id`.
   * 
   * The dispatch origin for this call must be `Signed` by the
   * transactor.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Currencies.transfer') === 'f9417776835359c4df2af31d48b33bac20ebcc850ed3738fcbccd673124fb252'
  }

  /**
   * Transfer some balance to another account under `currency_id`.
   * 
   * The dispatch origin for this call must be `Signed` by the
   * transactor.
   */
  get asV78(): {dest: Uint8Array, currencyId: number, amount: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class CurrenciesTransferNativeCurrencyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Currencies.transfer_native_currency')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer some native currency to another account.
   * 
   * The dispatch origin for this call must be `Signed` by the
   * transactor.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Currencies.transfer_native_currency') === '94a3f31b6c27b88829aa15b00a4c891eb6d26aea983baf4152003a578ce990f7'
  }

  /**
   * Transfer some native currency to another account.
   * 
   * The dispatch origin for this call must be `Signed` by the
   * transactor.
   */
  get asV78(): {dest: Uint8Array, amount: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class CurrenciesUpdateBalanceCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Currencies.update_balance')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * update amount of account `who` under `currency_id`.
   * 
   * The dispatch origin of this call must be _Root_.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Currencies.update_balance') === '0658a1a329a71de06a309dcf439763a0012143af692c1162a6d0f9923368e33f'
  }

  /**
   * update amount of account `who` under `currency_id`.
   * 
   * The dispatch origin of this call must be _Root_.
   */
  get asV78(): {who: Uint8Array, currencyId: number, amount: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyBlacklistCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.blacklist')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.blacklist') === '8d8922c0775adfb1df719211ab4fc6fb40b6cc8864038bcb1b544d9cf039b30a'
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
  get asV78(): {proposalHash: Uint8Array, maybeRefIndex: (number | undefined)} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyCancelProposalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.cancel_proposal')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.cancel_proposal') === '0e50c7564a4a7f4e6a09a0abcc8022f4445c064144d2318ed086e6080bee800d'
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
  get asV78(): {propIndex: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyCancelQueuedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.cancel_queued')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.cancel_queued') === '60780274011857b5305b5413b2b4742e5d41eb58a0948049d0672e81af198cb7'
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
  get asV78(): {which: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyCancelReferendumCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.cancel_referendum')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.cancel_referendum') === 'efe4ecff834678ca8b73ea6e2f38e514997eb402e82da2ce4cf036008844a857'
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
  get asV78(): {refIndex: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyClearPublicProposalsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.clear_public_proposals')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Clears all public proposals.
   * 
   * The dispatch origin of this call must be _Root_.
   * 
   * Weight: `O(1)`.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.clear_public_proposals') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Clears all public proposals.
   * 
   * The dispatch origin of this call must be _Root_.
   * 
   * Weight: `O(1)`.
   */
  get asV78(): null {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyDelegateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.delegate')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.delegate') === '719d303e364256b757876a8d1b18c8d62a96223d68ffc6f6c1bf18240e8d9793'
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
  get asV78(): {to: Uint8Array, conviction: v78.Conviction, balance: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyEmergencyCancelCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.emergency_cancel')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.emergency_cancel') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
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
  get asV78(): {refIndex: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyEnactProposalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.enact_proposal')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Enact a proposal from a referendum. For now we just make the weight be the maximum.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.enact_proposal') === 'de192ab0f058d1fb7eacc523bf0e05128d16509ec21bf445f0eefa47c89e60bf'
  }

  /**
   * Enact a proposal from a referendum. For now we just make the weight be the maximum.
   */
  get asV78(): {proposalHash: Uint8Array, index: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyExternalProposeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.external_propose')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.external_propose') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
  get asV78(): {proposalHash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyExternalProposeDefaultCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.external_propose_default')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.external_propose_default') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
  get asV78(): {proposalHash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyExternalProposeMajorityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.external_propose_majority')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.external_propose_majority') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
  get asV78(): {proposalHash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyFastTrackCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.fast_track')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.fast_track') === '27cb200e922e485b41e3150b3d7bf5e8624346f6ff1d78601373ba3d80689c89'
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
  get asV78(): {proposalHash: Uint8Array, votingPeriod: number, delay: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyNoteImminentPreimageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.note_imminent_preimage')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.note_imminent_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
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
  get asV78(): {encodedProposal: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyNoteImminentPreimageOperationalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.note_imminent_preimage_operational')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.note_imminent_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
  }

  /**
   * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get asV78(): {encodedProposal: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyNotePreimageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.note_preimage')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.note_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
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
  get asV78(): {encodedProposal: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyNotePreimageOperationalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.note_preimage_operational')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.note_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
  }

  /**
   * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get asV78(): {encodedProposal: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyProposeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.propose')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.propose') === '99f964e94c86db2029fab3e54a9230e36fe7533d252b5ecbc36f16c06e11f18b'
  }

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
  get asV78(): {proposalHash: Uint8Array, value: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyReapPreimageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.reap_preimage')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.reap_preimage') === '23573ffc912e8a31889875352d3543e4538e2f3beb6a89ef86d10cf1cb8b7aca'
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
  get asV78(): {proposalHash: Uint8Array, proposalLenUpperBound: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyRemoveOtherVoteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.remove_other_vote')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.remove_other_vote') === '57db819150acc73e380a9908a05d4f777cd3af825527d7ad88560426e1d0f652'
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
  get asV78(): {target: Uint8Array, index: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyRemoveVoteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.remove_vote')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.remove_vote') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
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
  get asV78(): {index: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracySecondCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.second')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.second') === 'abe1357aae784eefd21f6999076deb6cfbc92fcb9e80c21e93a944ceb739423c'
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
  get asV78(): {proposal: number, secondsUpperBound: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyUndelegateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.undelegate')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.undelegate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
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
  get asV78(): null {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyUnlockCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.unlock')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.unlock') === '66d8abf7976ff596d8d614948b9d84cb24f0b898d88d24eb2cc035ae5e93c7b8'
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
  get asV78(): {target: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyVetoExternalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.veto_external')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.veto_external') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
  get asV78(): {proposalHash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyVoteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.vote')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Democracy.vote') === '3936a4cb49f77280bd94142d4ec458afcf5cb8a5e5b0d602b1b1530928021e28'
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
  get asV78(): {refIndex: number, vote: v78.AccountVote} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DmpQueueServiceOverweightCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'DmpQueue.service_overweight')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('DmpQueue.service_overweight') === 'f6b281f58290b6af96ac2dda36163d81223f37d0a8a100877e2526969a57d772'
  }

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
  get asV78(): {index: bigint, weightLimit: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DusterAddNondustableAccountCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Duster.add_nondustable_account')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add account to list of non-dustable account. Account whihc are excluded from udsting.
   * If such account should be dusted - `AccountBlacklisted` error is returned.
   * Only root can perform this action.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Duster.add_nondustable_account') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * Add account to list of non-dustable account. Account whihc are excluded from udsting.
   * If such account should be dusted - `AccountBlacklisted` error is returned.
   * Only root can perform this action.
   */
  get asV78(): {account: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DusterDustAccountCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Duster.dust_account')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Dust specified account.
   * IF account balance is < min. existential deposit of given currency, and account is allowed to
   * be dusted, the remaining balance is transferred to selected account (usually treasury).
   * 
   * Caller is rewarded with chosen reward in native currency.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Duster.dust_account') === 'd3feddb5891b6dffbacca67c361c7faded12f59c061734980a1a27e78b3c54fa'
  }

  /**
   * Dust specified account.
   * IF account balance is < min. existential deposit of given currency, and account is allowed to
   * be dusted, the remaining balance is transferred to selected account (usually treasury).
   * 
   * Caller is rewarded with chosen reward in native currency.
   */
  get asV78(): {account: Uint8Array, currencyId: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class DusterRemoveNondustableAccountCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Duster.remove_nondustable_account')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove account from list of non-dustable accounts. That means account can be dusted again.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Duster.remove_nondustable_account') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * Remove account from list of non-dustable accounts. That means account can be dusted again.
   */
  get asV78(): {account: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ElectionsCleanDefunctVotersCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Elections.clean_defunct_voters')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Elections.clean_defunct_voters') === '8279e35309d0c9a5d36cd12cce19e58fef95829d4096e23fe93a055a47afd8a0'
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
  get asV78(): {numVoters: number, numDefunct: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ElectionsRemoveMemberCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Elections.remove_member')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Elections.remove_member') === 'cc43d536f862eb65fab1d583cca3ea302b95423702ae1dac84b75df432320893'
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
  get asV78(): {who: Uint8Array, hasReplacement: boolean} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ElectionsRemoveVoterCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Elections.remove_voter')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove `origin` as a voter.
   * 
   * This removes the lock and returns the deposit.
   * 
   * The dispatch origin of this call must be signed and be a voter.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Elections.remove_voter') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Remove `origin` as a voter.
   * 
   * This removes the lock and returns the deposit.
   * 
   * The dispatch origin of this call must be signed and be a voter.
   */
  get asV78(): null {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ElectionsRenounceCandidacyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Elections.renounce_candidacy')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Elections.renounce_candidacy') === '891a3ff219ab8817cfffbcd0ed48578a0fd96440dc2292a0cde84a40439f7fbe'
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
  get asV78(): {renouncing: v78.Renouncing} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ElectionsSubmitCandidacyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Elections.submit_candidacy')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Elections.submit_candidacy') === 'f9d2bc9f755e33c27d34db4c3b063daa9e2490111d35f89ea1995d74e59b1819'
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
  get asV78(): {candidateCount: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ElectionsVoteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Elections.vote')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('Elections.vote') === '75939c25de1c96145b5d2d4bc8627a3fc22299f0e1f1f6f0709e54e884796bda'
  }

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
  get asV78(): {votes: Uint8Array[], value: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ExchangeBuyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Exchange.buy')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Create buy intention
   * Calculate current spot price, create an intention and store in ```ExchangeAssetsIntentions```
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Exchange.buy') === '895d06cec55d2ba6786140ff36b3ffb1ce14db05a42a9706adc8db7137abc0e8'
  }

  /**
   * Create buy intention
   * Calculate current spot price, create an intention and store in ```ExchangeAssetsIntentions```
   */
  get asV78(): {assetBuy: number, assetSell: number, amountBuy: bigint, maxSold: bigint, discount: boolean} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ExchangeSellCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Exchange.sell')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Create sell intention
   * Calculate current spot price, create an intention and store in ```ExchangeAssetsIntentions```
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Exchange.sell') === '2081ff6ca378ad66cdf3cf7a7427c8b796d0db4bac39021743f47a062807c548'
  }

  /**
   * Create sell intention
   * Calculate current spot price, create an intention and store in ```ExchangeAssetsIntentions```
   */
  get asV78(): {assetSell: number, assetBuy: number, amountSell: bigint, minBought: bigint, discount: boolean} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityAddRegistrarCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.add_registrar')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('Identity.add_registrar') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

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
  get asV78(): {account: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityAddSubCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.add_sub')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Identity.add_sub') === '3a44789cb2db1c330353e6200ca05fb21d197f103560aec42b25fed99b8ede6d'
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
  get asV78(): {sub: Uint8Array, data: v78.Data} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityCancelRequestCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.cancel_request')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Identity.cancel_request') === '89d659d6a17ba36d0dfc7c90a7f043581d7fe980043895169d7dda1416ff7e5b'
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
  get asV78(): {regIndex: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityClearIdentityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.clear_identity')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Identity.clear_identity') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
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
  get asV78(): null {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityKillIdentityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.kill_identity')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Identity.kill_identity') === '66d8abf7976ff596d8d614948b9d84cb24f0b898d88d24eb2cc035ae5e93c7b8'
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
  get asV78(): {target: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityProvideJudgementCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.provide_judgement')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Identity.provide_judgement') === '791c0e6b8f05476998f8aaac88c6d48f65d1a8c2670bcbd045a3ca694c679bd7'
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
  get asV78(): {regIndex: number, target: Uint8Array, judgement: v78.Judgement} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityQuitSubCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.quit_sub')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Identity.quit_sub') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
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
  get asV78(): null {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityRemoveSubCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.remove_sub')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Identity.remove_sub') === '38b23c3d326211a5d1355a68469ac48b2d3b137ed03e1feb95bb1da67e04c022'
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
  get asV78(): {sub: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityRenameSubCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.rename_sub')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Alter the associated name of the given sub-account.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * sub identity of `sub`.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Identity.rename_sub') === '3a44789cb2db1c330353e6200ca05fb21d197f103560aec42b25fed99b8ede6d'
  }

  /**
   * Alter the associated name of the given sub-account.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * sub identity of `sub`.
   */
  get asV78(): {sub: Uint8Array, data: v78.Data} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentityRequestJudgementCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.request_judgement')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Identity.request_judgement') === 'c6336282cbe5b8ccf3769cc13c92f532be2499335e3d52ebf566a888e92b5b7c'
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
  get asV78(): {regIndex: number, maxFee: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentitySetAccountIdCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.set_account_id')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Identity.set_account_id') === 'a333bb3ce3e314d48fcf93f14155097760db6249022181f1eb923c1343af6813'
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
  get asV78(): {index: number, new: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentitySetFeeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.set_fee')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Identity.set_fee') === '6418458414c3cef3d5c80c88232d781e76733c675303b2937b9cd30ae58d0fe4'
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
  get asV78(): {index: number, fee: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentitySetFieldsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.set_fields')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Identity.set_fields') === 'b2c8998acd304e28e4f4a78e6a07f5bf7caf587532734dbd94b85c01a31c3e13'
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
  get asV78(): {index: number, fields: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentitySetIdentityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.set_identity')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Identity.set_identity') === 'ab457704fd8cda5fee32e84ab7782778f4117cd54400c364cf7597eee5bc60ca'
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
  get asV78(): {info: v78.IdentityInfo} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class IdentitySetSubsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Identity.set_subs')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Identity.set_subs') === 'f156a100857e71b9e1eab839801795e8569b63b49f6c30333c5bf12811cbbe73'
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
  get asV78(): {subs: [Uint8Array, v78.Data][]} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LbpAddLiquidityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LBP.add_liquidity')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('LBP.add_liquidity') === '3a85b1dfe318146be75bd4f0f9df60b5241f5b7f4f4806e513923814250c86af'
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
  get asV78(): {amountA: [number, bigint], amountB: [number, bigint]} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LbpBuyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LBP.buy')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('LBP.buy') === 'cc661073455d8d24a5203cf26d61f8f26da24dd5d3859c180e99506e90ab09c1'
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
  get asV78(): {assetOut: number, assetIn: number, amount: bigint, maxLimit: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LbpCreatePoolCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LBP.create_pool')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('LBP.create_pool') === 'b1e691deb07a9810610d21c1a42857d119b17906c3c8091b4bd2b429c081be13'
  }

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
  get asV78(): {poolOwner: Uint8Array, assetA: number, assetAAmount: bigint, assetB: number, assetBAmount: bigint, initialWeight: number, finalWeight: number, weightCurve: v78.WeightCurveType, fee: [number, number], feeCollector: Uint8Array, repayTarget: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LbpRemoveLiquidityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LBP.remove_liquidity')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('LBP.remove_liquidity') === '80360f283e15fc119f8a0810b4d9675d6da65eb2354c77cc4e4cdb65236120a0'
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
  get asV78(): {poolId: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LbpSellCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LBP.sell')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('LBP.sell') === '7437ca2cbbe4a3ead498b3f7d205b81655351b35c5b894344a349a6b4feb4f3d'
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
  get asV78(): {assetIn: number, assetOut: number, amount: bigint, maxLimit: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LbpUpdatePoolDataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LBP.update_pool_data')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('LBP.update_pool_data') === 'ca9cdc9fcc82ebbf92189e215b5ef23956428e741bb72e989f7f92257d624e9b'
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
  get asV78(): {poolId: Uint8Array, poolOwner: (Uint8Array | undefined), start: (number | undefined), end: (number | undefined), initialWeight: (number | undefined), finalWeight: (number | undefined), fee: ([number, number] | undefined), feeCollector: (Uint8Array | undefined), repayTarget: (bigint | undefined)} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningClaimRewardsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.claim_rewards')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('LiquidityMining.claim_rewards') === '5277dbfabb0aaf11ff64e071320b401ab304d1054c363f2e24cf48c054f58a95'
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
  get asV78(): {depositId: bigint, yieldFarmId: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningCreateGlobalFarmCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.create_global_farm')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('LiquidityMining.create_global_farm') === 'd28662e616a18fcf004ecc8f28bccba8290de8c5bd07d539acaa3948d688edee'
  }

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
  get asV78(): {totalRewards: bigint, plannedYieldingPeriods: number, blocksPerPeriod: number, incentivizedAsset: number, rewardCurrency: number, owner: Uint8Array, yieldPerPeriod: bigint, minDeposit: bigint, priceAdjustment: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningCreateYieldFarmCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.create_yield_farm')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('LiquidityMining.create_yield_farm') === '3764d935600f3f7ba68069bc5934c83a17be187e2026bf9735a8c163e64c69f1'
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
  get asV78(): {globalFarmId: number, assetPair: v78.AssetPair, multiplier: bigint, loyaltyCurve: (v78.LoyaltyCurve | undefined)} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningDepositSharesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.deposit_shares')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('LiquidityMining.deposit_shares') === '7d300d5670217fb959619722b07af29f8b421d4a02ed1d3e374898c606b8799f'
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
  get asV78(): {globalFarmId: number, yieldFarmId: number, assetPair: v78.AssetPair, sharesAmount: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningDestroyGlobalFarmCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.destroy_global_farm')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('LiquidityMining.destroy_global_farm') === '6c81d62dc35d0454853f5260a9937f1dea716b76a958a096c5baa5a1f4a88cce'
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
  get asV78(): {globalFarmId: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningDestroyYieldFarmCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.destroy_yield_farm')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('LiquidityMining.destroy_yield_farm') === 'e1ac3cc4323322091808d1b441d6870a5bf2c20ad63e31a75bed9241fe6f4659'
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
  get asV78(): {globalFarmId: number, yieldFarmId: number, assetPair: v78.AssetPair} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningRedepositLpSharesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.redeposit_lp_shares')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('LiquidityMining.redeposit_lp_shares') === '402a48d0de31989d5a524f33bddfac171886ca9cca98d38eca16037b331a0f2d'
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
  get asV78(): {globalFarmId: number, yieldFarmId: number, assetPair: v78.AssetPair, depositId: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningResumeYieldFarmCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.resume_yield_farm')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('LiquidityMining.resume_yield_farm') === '7ac9b9a58a3a6934562c291fe12b7778dea22509fb10a82d6a03ac53cf2a5cb9'
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
  get asV78(): {globalFarmId: number, yieldFarmId: number, assetPair: v78.AssetPair, multiplier: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningStopYieldFarmCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.stop_yield_farm')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('LiquidityMining.stop_yield_farm') === 'f189257889d5c24a6c1cb015e6c1a368d73caea95a3d70678687ed34c05d8dca'
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
  get asV78(): {globalFarmId: number, assetPair: v78.AssetPair} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningUpdateGlobalFarmCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.update_global_farm')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Update global farm's prices adjustment.
   * 
   * Only farm's owner can perform this action.
   * 
   * Parameters:
   * - `origin`: global farm's owner.
   * - `global_farm_id`: id of the global farm to update
   * - `price_adjustment`: new value for price adjustment
   * 
   * Emits `GlobalFarmUpdated` event when successful.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('LiquidityMining.update_global_farm') === '41f86d61e9c33e480d32f5cb4bcfdd5e7ee331338d1f09206635ebff0fc41928'
  }

  /**
   * Update global farm's prices adjustment.
   * 
   * Only farm's owner can perform this action.
   * 
   * Parameters:
   * - `origin`: global farm's owner.
   * - `global_farm_id`: id of the global farm to update
   * - `price_adjustment`: new value for price adjustment
   * 
   * Emits `GlobalFarmUpdated` event when successful.
   */
  get asV78(): {globalFarmId: number, priceAdjustment: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningUpdateYieldFarmCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.update_yield_farm')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('LiquidityMining.update_yield_farm') === '647b2578519d41fae3326f77de284f10b059de7f8f70008f63d9dfcb1c56e7be'
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
  get asV78(): {globalFarmId: number, assetPair: v78.AssetPair, multiplier: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningWithdrawSharesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.withdraw_shares')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('LiquidityMining.withdraw_shares') === '2b87df4b27bd99dcc7664194bc99e1c0bd8c4c89fd0328d9a0ef8f2a07ec502e'
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
  get asV78(): {depositId: bigint, yieldFarmId: number, assetPair: v78.AssetPair} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class MarketplaceAcceptOfferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Marketplace.accept_offer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Accept an offer and process the trade
   * 
   * Parameters:
   * - `class_id`: The identifier of a non-fungible token class
   * - `instance_id`: The instance identifier of a class
   * - `maker`: User who made the offer
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Marketplace.accept_offer') === 'f42ae1ca0021893622fc78124f4b643d80d5e559019c4b93f53a6ee393d0f7a4'
  }

  /**
   * Accept an offer and process the trade
   * 
   * Parameters:
   * - `class_id`: The identifier of a non-fungible token class
   * - `instance_id`: The instance identifier of a class
   * - `maker`: User who made the offer
   */
  get asV78(): {classId: bigint, instanceId: bigint, maker: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class MarketplaceAddRoyaltyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Marketplace.add_royalty')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add royalty feature where a cut for author is provided
   * There is non-refundable reserve held for creating a royalty
   * 
   * Parameters:
   * - `class_id`: The class of the asset to be minted.
   * - `instance_id`: The instance value of the asset to be minted.
   * - `author`: Receiver of the royalty
   * - `royalty`: Percentage reward from each trade for the author, represented in basis points
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Marketplace.add_royalty') === '89b5fec8ba2f0c4b26ea104918df619b1873e46e6b3741216139c76decd671e4'
  }

  /**
   * Add royalty feature where a cut for author is provided
   * There is non-refundable reserve held for creating a royalty
   * 
   * Parameters:
   * - `class_id`: The class of the asset to be minted.
   * - `instance_id`: The instance value of the asset to be minted.
   * - `author`: Receiver of the royalty
   * - `royalty`: Percentage reward from each trade for the author, represented in basis points
   */
  get asV78(): {classId: bigint, instanceId: bigint, author: Uint8Array, royalty: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class MarketplaceBuyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Marketplace.buy')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Pays a price to the current owner
   * Transfers NFT ownership to the buyer
   * Disables automatic sell of the NFT
   * 
   * Parameters:
   * - `class_id`: The identifier of a non-fungible token class
   * - `instance_id`: The instance identifier of a class
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Marketplace.buy') === '18e8e90d1b8337d9cb9adb4e591fd4023ae1d770742db60369ff7818b78184cf'
  }

  /**
   * Pays a price to the current owner
   * Transfers NFT ownership to the buyer
   * Disables automatic sell of the NFT
   * 
   * Parameters:
   * - `class_id`: The identifier of a non-fungible token class
   * - `instance_id`: The instance identifier of a class
   */
  get asV78(): {classId: bigint, instanceId: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class MarketplaceMakeOfferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Marketplace.make_offer')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Marketplace.make_offer') === 'c6a31a5d02a77fccb761614bd73dc986293656f41dfee2b2f6fb206c1bfc7b6a'
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
  get asV78(): {classId: bigint, instanceId: bigint, amount: bigint, expires: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class MarketplaceSetPriceCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Marketplace.set_price')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Marketplace.set_price') === 'cbdd525fcd5a6705fafad982cf708dedcd2a35c6b0eca3a0f3c266462421d288'
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
  get asV78(): {classId: bigint, instanceId: bigint, newPrice: (bigint | undefined)} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class MarketplaceWithdrawOfferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Marketplace.withdraw_offer')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Marketplace.withdraw_offer') === 'f42ae1ca0021893622fc78124f4b643d80d5e559019c4b93f53a6ee393d0f7a4'
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
  get asV78(): {classId: bigint, instanceId: bigint, maker: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiTransactionPaymentAddCurrencyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiTransactionPayment.add_currency')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('MultiTransactionPayment.add_currency') === '13125ec4790da3a904a34273acd08b2e8e32d1bf678dd213a2f092ab76db8c15'
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
  get asV78(): {currency: number, price: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiTransactionPaymentRemoveCurrencyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiTransactionPayment.remove_currency')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove currency from the list of supported currencies
   * Only selected members can perform this action
   * 
   * Core asset cannot be removed.
   * 
   * Emits `CurrencyRemoved` when successful.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('MultiTransactionPayment.remove_currency') === '6f30827fd1d3f25813ac86311eb2a11bef512c91dba46a2d0279d52ddf3b5cc9'
  }

  /**
   * Remove currency from the list of supported currencies
   * Only selected members can perform this action
   * 
   * Core asset cannot be removed.
   * 
   * Emits `CurrencyRemoved` when successful.
   */
  get asV78(): {currency: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiTransactionPaymentSetCurrencyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiTransactionPayment.set_currency')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('MultiTransactionPayment.set_currency') === '6f30827fd1d3f25813ac86311eb2a11bef512c91dba46a2d0279d52ddf3b5cc9'
  }

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
  get asV78(): {currency: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class MultisigApproveAsMultiCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Multisig.approve_as_multi')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Multisig.approve_as_multi') === '615a5baaaa889f9e30839c70485b8c752e5eb050a85a23102b2f9f4c301be63a'
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
  get asV78(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v78.Timepoint | undefined), callHash: Uint8Array, maxWeight: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class MultisigAsMultiCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Multisig.as_multi')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Multisig.as_multi') === '548dea53ff79fe99438cf591950a533c93f9772d03a3995ec72a80376fcae222'
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
  get asV78(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v78.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class MultisigAsMultiThreshold1Call {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Multisig.as_multi_threshold_1')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'a7d1d4579f8dd9f66225d44978f61ed3977d88d2814861dcaf981695a211032f'
  }

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
  get asV78(): {otherSignatories: Uint8Array[], call: v78.Call} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class MultisigCancelAsMultiCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Multisig.cancel_as_multi')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Multisig.cancel_as_multi') === '4ccc75a4f739c659f177e3df98fba2ea59ddade74c4ebccd51b2fc4c52e923af'
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
  get asV78(): {threshold: number, otherSignatories: Uint8Array[], timepoint: v78.Timepoint, callHash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class NftBurnCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'NFT.burn')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Removes a token from existence
   * 
   * Parameters:
   * - `class_id`: The class of the asset to be burned.
   * - `instance_id`: The instance of the asset to be burned.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('NFT.burn') === '18e8e90d1b8337d9cb9adb4e591fd4023ae1d770742db60369ff7818b78184cf'
  }

  /**
   * Removes a token from existence
   * 
   * Parameters:
   * - `class_id`: The class of the asset to be burned.
   * - `instance_id`: The instance of the asset to be burned.
   */
  get asV78(): {classId: bigint, instanceId: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class NftCreateClassCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'NFT.create_class')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('NFT.create_class') === 'c243cd54ec1cbe047def2b1e59c2ef8b8b49725a9f767dc66617e9f7117986f6'
  }

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
  get asV78(): {classId: bigint, classType: v78.ClassType, metadata: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class NftDestroyClassCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'NFT.destroy_class')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Removes a class from existence
   * 
   * Parameters:
   * - `class_id`: The identifier of the asset class to be destroyed.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('NFT.destroy_class') === 'd20dd3096242c6bb790f5e276ab157448db821e6055469d40fc77a4ee3490636'
  }

  /**
   * Removes a class from existence
   * 
   * Parameters:
   * - `class_id`: The identifier of the asset class to be destroyed.
   */
  get asV78(): {classId: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class NftMintCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'NFT.mint')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('NFT.mint') === '4271aba89819e4aba96d0a20447aa7305afd1fd7e1cdbf8c61518e1f55e88010'
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
  get asV78(): {classId: bigint, instanceId: bigint, metadata: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class NftTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'NFT.transfer')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('NFT.transfer') === 'ca2dc40bf87a67a1e3048fac1e09089a13709a56acce8041e18810392ec34e00'
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
  get asV78(): {classId: bigint, instanceId: bigint, dest: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class OrmlXcmSendAsSovereignCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'OrmlXcm.send_as_sovereign')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Send an XCM message as parachain sovereign.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('OrmlXcm.send_as_sovereign') === '3ca4beb317aeed3e0a00ae870ffd3bef841bb6f4e766db0b286c7fc5d8eef886'
  }

  /**
   * Send an XCM message as parachain sovereign.
   */
  get asV78(): {dest: v78.VersionedMultiLocation, message: v78.VersionedXcm} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemAuthorizeUpgradeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.authorize_upgrade')
    this._chain = ctx._chain
    this.call = call
  }

  get isV78(): boolean {
    return this._chain.getCallHash('ParachainSystem.authorize_upgrade') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
  }

  get asV78(): {codeHash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemEnactAuthorizedUpgradeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.enact_authorized_upgrade')
    this._chain = ctx._chain
    this.call = call
  }

  get isV78(): boolean {
    return this._chain.getCallHash('ParachainSystem.enact_authorized_upgrade') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
  }

  get asV78(): {code: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemSetValidationDataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.set_validation_data')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('ParachainSystem.set_validation_data') === 'df843f97e4c625e033541d5f205c5889f3131bdb4549570310e924d96769c1cd'
  }

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
  get asV78(): {data: v78.ParachainInherentData} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemSudoSendUpwardMessageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.sudo_send_upward_message')
    this._chain = ctx._chain
    this.call = call
  }

  get isV78(): boolean {
    return this._chain.getCallHash('ParachainSystem.sudo_send_upward_message') === '34457b6daded32ddc4ec3a5a21e34b9af8dcd7d190a5a7833fa8a7ed53b31206'
  }

  get asV78(): {message: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmExecuteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.execute')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('PolkadotXcm.execute') === 'c6251691ab3319ecee95442d381c308f9ada155e423798c908cbd6b063aa26b4'
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
  get asV78(): {message: v78.Type_283, maxWeight: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmForceDefaultXcmVersionCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.force_default_xcm_version')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set a safe XCM version (the version that XCM should be encoded with if the most recent
   * version a destination can accept is unknown).
   * 
   * - `origin`: Must be Root.
   * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_default_xcm_version') === 'd4bcd64cc4c940eafd14296ec6cbfb7d27e4ca42a4c7dab4c0b89f6c8102257e'
  }

  /**
   * Set a safe XCM version (the version that XCM should be encoded with if the most recent
   * version a destination can accept is unknown).
   * 
   * - `origin`: Must be Root.
   * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
   */
  get asV78(): {maybeXcmVersion: (number | undefined)} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmForceSubscribeVersionNotifyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.force_subscribe_version_notify')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Ask a location to notify us regarding their XCM version and any changes to it.
   * 
   * - `origin`: Must be Root.
   * - `location`: The location to which we should subscribe for XCM version notifications.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_subscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
  }

  /**
   * Ask a location to notify us regarding their XCM version and any changes to it.
   * 
   * - `origin`: Must be Root.
   * - `location`: The location to which we should subscribe for XCM version notifications.
   */
  get asV78(): {location: v78.VersionedMultiLocation} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmForceUnsubscribeVersionNotifyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.force_unsubscribe_version_notify')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Require that a particular destination should no longer notify us regarding any XCM
   * version changes.
   * 
   * - `origin`: Must be Root.
   * - `location`: The location to which we are currently subscribed for XCM version
   *   notifications which we no longer desire.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_unsubscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
  }

  /**
   * Require that a particular destination should no longer notify us regarding any XCM
   * version changes.
   * 
   * - `origin`: Must be Root.
   * - `location`: The location to which we are currently subscribed for XCM version
   *   notifications which we no longer desire.
   */
  get asV78(): {location: v78.VersionedMultiLocation} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmForceXcmVersionCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.force_xcm_version')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Extoll that a particular destination can be communicated with through a particular
   * version of XCM.
   * 
   * - `origin`: Must be Root.
   * - `location`: The destination that is being described.
   * - `xcm_version`: The latest version of XCM that `location` supports.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_xcm_version') === '3bdd3ba3db54facd962462ff1c2c0ede1b428cf9119b36a4e96fa86916145f75'
  }

  /**
   * Extoll that a particular destination can be communicated with through a particular
   * version of XCM.
   * 
   * - `origin`: Must be Root.
   * - `location`: The destination that is being described.
   * - `xcm_version`: The latest version of XCM that `location` supports.
   */
  get asV78(): {location: v78.V1MultiLocation, xcmVersion: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmLimitedReserveTransferAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.limited_reserve_transfer_assets')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('PolkadotXcm.limited_reserve_transfer_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
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
  get asV78(): {dest: v78.VersionedMultiLocation, beneficiary: v78.VersionedMultiLocation, assets: v78.VersionedMultiAssets, feeAssetItem: number, weightLimit: v78.V2WeightLimit} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmLimitedTeleportAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.limited_teleport_assets')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('PolkadotXcm.limited_teleport_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
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
  get asV78(): {dest: v78.VersionedMultiLocation, beneficiary: v78.VersionedMultiLocation, assets: v78.VersionedMultiAssets, feeAssetItem: number, weightLimit: v78.V2WeightLimit} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmReserveTransferAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.reserve_transfer_assets')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('PolkadotXcm.reserve_transfer_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
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
  get asV78(): {dest: v78.VersionedMultiLocation, beneficiary: v78.VersionedMultiLocation, assets: v78.VersionedMultiAssets, feeAssetItem: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmSendCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.send')
    this._chain = ctx._chain
    this.call = call
  }

  get isV78(): boolean {
    return this._chain.getCallHash('PolkadotXcm.send') === '3ca4beb317aeed3e0a00ae870ffd3bef841bb6f4e766db0b286c7fc5d8eef886'
  }

  get asV78(): {dest: v78.VersionedMultiLocation, message: v78.VersionedXcm} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class PolkadotXcmTeleportAssetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'PolkadotXcm.teleport_assets')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('PolkadotXcm.teleport_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
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
  get asV78(): {dest: v78.VersionedMultiLocation, beneficiary: v78.VersionedMultiLocation, assets: v78.VersionedMultiAssets, feeAssetItem: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class PreimageNotePreimageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Preimage.note_preimage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register a preimage on-chain.
   * 
   * If the preimage was previously requested, no fees or deposits are taken for providing
   * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Preimage.note_preimage') === 'fb6f9f7fd683160ab20dcde42ca8f757bc13845dc544f497e534fcf19c270a46'
  }

  /**
   * Register a preimage on-chain.
   * 
   * If the preimage was previously requested, no fees or deposits are taken for providing
   * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
   */
  get asV78(): {bytes: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class PreimageRequestPreimageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Preimage.request_preimage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Request a preimage be uploaded to the chain without paying any fees or deposits.
   * 
   * If the preimage requests has already been provided on-chain, we unreserve any deposit
   * a user may have paid, and take the control of the preimage out of their hands.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Preimage.request_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * Request a preimage be uploaded to the chain without paying any fees or deposits.
   * 
   * If the preimage requests has already been provided on-chain, we unreserve any deposit
   * a user may have paid, and take the control of the preimage out of their hands.
   */
  get asV78(): {hash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class PreimageUnnotePreimageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Preimage.unnote_preimage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Clear an unrequested preimage from the runtime storage.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Preimage.unnote_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * Clear an unrequested preimage from the runtime storage.
   */
  get asV78(): {hash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class PreimageUnrequestPreimageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Preimage.unrequest_preimage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Clear a previously made request for a preimage.
   * 
   * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Preimage.unrequest_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * Clear a previously made request for a preimage.
   * 
   * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
   */
  get asV78(): {hash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyAddProxyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.add_proxy')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Proxy.add_proxy') === 'f220512ffbbcb5be5eb1c0af68c73d8d167c31c1babe2b4a9a88ef48d43737b9'
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
  get asV78(): {delegate: Uint8Array, proxyType: v78.ProxyType, delay: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyAnnounceCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.announce')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Proxy.announce') === '886fe5248256b2372151aa5c936f9027a64929a3501efe231a22f1ee868cff3e'
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
  get asV78(): {real: Uint8Array, callHash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyAnonymousCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.anonymous')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Proxy.anonymous') === '3e0c6604f4c004ae260bd0745c7ca1242d00987ffb795a8c071b9ce59c9ab1e1'
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
  get asV78(): {proxyType: v78.ProxyType, delay: number, index: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyKillAnonymousCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.kill_anonymous')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Proxy.kill_anonymous') === 'c7f92eb439abe13fc14f2b3e24ab47ca26813a4af269143ff95cdb858e7dd9dd'
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
  get asV78(): {spawner: Uint8Array, proxyType: v78.ProxyType, index: number, height: number, extIndex: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyProxyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.proxy')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('Proxy.proxy') === 'c4ef31b9a631d88da16bf4cfeea79f17a26e8ce764743899420f4f5d6fe80b83'
  }

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
  get asV78(): {real: Uint8Array, forceProxyType: (v78.ProxyType | undefined), call: v78.Call} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyProxyAnnouncedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.proxy_announced')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Proxy.proxy_announced') === '45f2d5f91122b92b02c4b347935db853b2ae5cf7740c31c5c34c20c000c8aefa'
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
  get asV78(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v78.ProxyType | undefined), call: v78.Call} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyRejectAnnouncementCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.reject_announcement')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Proxy.reject_announcement') === '717e6dbb2911f49e34a3b48c48c86b40495423ab31d5b45f0062629c73057f2b'
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
  get asV78(): {delegate: Uint8Array, callHash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyRemoveAnnouncementCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.remove_announcement')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Proxy.remove_announcement') === '886fe5248256b2372151aa5c936f9027a64929a3501efe231a22f1ee868cff3e'
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
  get asV78(): {real: Uint8Array, callHash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyRemoveProxiesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.remove_proxies')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Proxy.remove_proxies') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
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
  get asV78(): null {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class ProxyRemoveProxyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Proxy.remove_proxy')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Proxy.remove_proxy') === 'f220512ffbbcb5be5eb1c0af68c73d8d167c31c1babe2b4a9a88ef48d43737b9'
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
  get asV78(): {delegate: Uint8Array, proxyType: v78.ProxyType, delay: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SchedulerCancelCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Scheduler.cancel')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel an anonymously scheduled task.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Scheduler.cancel') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
  }

  /**
   * Cancel an anonymously scheduled task.
   */
  get asV78(): {when: number, index: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SchedulerCancelNamedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Scheduler.cancel_named')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel a named scheduled task.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Scheduler.cancel_named') === 'a0b847240e1232c10a62578340a2af6708e760669b06344b70c15e6370b514cf'
  }

  /**
   * Cancel a named scheduled task.
   */
  get asV78(): {id: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SchedulerScheduleCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Scheduler.schedule')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Anonymously schedule a task.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '8cd96b9fc677f09d8930ed62424553c61f5f5ecf324872b8c213d2a1622e8b0e'
  }

  /**
   * Anonymously schedule a task.
   */
  get asV78(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v78.MaybeHashed} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SchedulerScheduleAfterCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Scheduler.schedule_after')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === '95924e5a4190747000e830f0af1e154c4be53005b685e8ab8d48a188350463b0'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV78(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v78.MaybeHashed} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SchedulerScheduleNamedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Scheduler.schedule_named')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Schedule a named task.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === '8cee809e7ad4505b5d23c7a61792b04e7b48194d5661c9c2a1b01613a751de0d'
  }

  /**
   * Schedule a named task.
   */
  get asV78(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v78.MaybeHashed} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SchedulerScheduleNamedAfterCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Scheduler.schedule_named_after')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV78(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === 'ae2a69a89be85855bd74190c562c1e15b7f3e51b53eaa1e87be6720e5113461f'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV78(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v78.MaybeHashed} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SessionPurgeKeysCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Session.purge_keys')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Session.purge_keys') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
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
  get asV78(): null {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SessionSetKeysCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Session.set_keys')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('Session.set_keys') === 'c0b44bc08ddc0ad90c1bd05300acef09fd979fcb434b3b92b011e7817fd56c2f'
  }

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
  get asV78(): {keys: v78.SessionKeys, proof: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSetKeyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.set_key')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Sudo.set_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
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
  get asV78(): {new: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSudoCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.sudo')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === 'c3ab9648cac2ce6a883f8e022d8f23c19a4e02b80c40e0a441ef906a89e47f23'
  }

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
  get asV78(): {call: v78.Call} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSudoAsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.sudo_as')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === 'f5f12465911512e215d52df621b6f4d452b726f9860143ac6b1cc792d86f3960'
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
  get asV78(): {who: Uint8Array, call: v78.Call} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SudoSudoUncheckedWeightCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Sudo.sudo_unchecked_weight')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '9570fb33a7ba09adbaad9eddd011eb3bfcadf557da920e1ce105ecd34e9d91a9'
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
  get asV78(): {call: v78.Call, weight: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemFillBlockCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.fill_block')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * A dispatch that will fill the block weight up to the given ratio.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
  }

  /**
   * A dispatch that will fill the block weight up to the given ratio.
   */
  get asV78(): {ratio: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemKillPrefixCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.kill_prefix')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Kill all storage items with a key that starts with the given prefix.
   * 
   * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
   * the prefix we are removing to accurately calculate the weight of this function.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
  }

  /**
   * Kill all storage items with a key that starts with the given prefix.
   * 
   * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
   * the prefix we are removing to accurately calculate the weight of this function.
   */
  get asV78(): {prefix: Uint8Array, subkeys: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemKillStorageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.kill_storage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Kill some items from storage.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
  }

  /**
   * Kill some items from storage.
   */
  get asV78(): {keys: Uint8Array[]} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemRemarkCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.remark')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Make some on-chain remark.
   * 
   * # <weight>
   * - `O(1)`
   * # </weight>
   */
  get isV78(): boolean {
    return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
  }

  /**
   * Make some on-chain remark.
   * 
   * # <weight>
   * - `O(1)`
   * # </weight>
   */
  get asV78(): {remark: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemRemarkWithEventCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.remark_with_event')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Make some on-chain remark and emit event.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
  }

  /**
   * Make some on-chain remark and emit event.
   */
  get asV78(): {remark: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetCodeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_code')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
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
  get asV78(): {code: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetCodeWithoutChecksCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_code_without_checks')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
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
  get asV78(): {code: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetHeapPagesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_heap_pages')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the number of pages in the WebAssembly environment's heap.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
  }

  /**
   * Set the number of pages in the WebAssembly environment's heap.
   */
  get asV78(): {pages: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetStorageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_storage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set some items of storage.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
  }

  /**
   * Set some items of storage.
   */
  get asV78(): {items: [Uint8Array, Uint8Array][]} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TechnicalCommitteeCloseCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'TechnicalCommittee.close')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
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
  get asV78(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TechnicalCommitteeDisapproveProposalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'TechnicalCommittee.disapprove_proposal')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
  get asV78(): {proposalHash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TechnicalCommitteeExecuteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'TechnicalCommittee.execute')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.execute') === 'd124ab118335541e4d64d7187c5daaa069c9de1f39b3f53c5836cb901c00c46c'
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
  get asV78(): {proposal: v78.Call, lengthBound: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TechnicalCommitteeProposeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'TechnicalCommittee.propose')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.propose') === 'e8d5cbcf2c4d12383b76b2c035a628fa0f77e06a181b0bb6aa77789e3151b25a'
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
  get asV78(): {threshold: number, proposal: v78.Call, lengthBound: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TechnicalCommitteeSetMembersCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'TechnicalCommittee.set_members')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
  }

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
  get asV78(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TechnicalCommitteeVoteCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'TechnicalCommittee.vote')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
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
  get asV78(): {proposal: Uint8Array, index: number, approve: boolean} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TimestampSetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Timestamp.set')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('Timestamp.set') === '6a8b8ba2be107f0853b674eec0026cc440b314db44d0e2c59b36e353355aed14'
  }

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
  get asV78(): {now: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TipsCloseTipCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Tips.close_tip')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Tips.close_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
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
  get asV78(): {hash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TipsReportAwesomeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Tips.report_awesome')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('Tips.report_awesome') === '5f39cdb6a1bab5505c2717a3d34b1ad66c35bb6aca421780ce60b4e9017fe886'
  }

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
  get asV78(): {reason: Uint8Array, who: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TipsRetractTipCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Tips.retract_tip')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Tips.retract_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
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
  get asV78(): {hash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TipsSlashTipCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Tips.slash_tip')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Tips.slash_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
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
  get asV78(): {hash: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TipsTipCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Tips.tip')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Tips.tip') === 'f3795cdab18c292963e0e30ece37a15a2900030efc315a8e3f28ba886b2b9f58'
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
  get asV78(): {hash: Uint8Array, tipValue: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TipsTipNewCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Tips.tip_new')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Tips.tip_new') === '367b1dcdffb32d8c4b26e342e9b515c65f2589dec81f4a3f6f336faaa7e127ac'
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
  get asV78(): {reason: Uint8Array, who: Uint8Array, tipValue: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TokensForceTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Tokens.force_transfer')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Tokens.force_transfer') === '03ae65ffcb050d1a5f07226901a4dd126b516b5cbb0c2ec5486bf9cc4eb92a25'
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
  get asV78(): {source: Uint8Array, dest: Uint8Array, currencyId: number, amount: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TokensSetBalanceCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Tokens.set_balance')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Tokens.set_balance') === 'bb217c2e772e23f283f74504acd25cc61bec482f7cf2843bfc8a333fcca93e41'
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
  get asV78(): {who: Uint8Array, currencyId: number, newFree: bigint, newReserved: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TokensTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Tokens.transfer')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('Tokens.transfer') === 'f9417776835359c4df2af31d48b33bac20ebcc850ed3738fcbccd673124fb252'
  }

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
  get asV78(): {dest: Uint8Array, currencyId: number, amount: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TokensTransferAllCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Tokens.transfer_all')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Tokens.transfer_all') === '0cab462a3623f31f93271da96b823635d8988375ef69ec29a253fe44165a2324'
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
  get asV78(): {dest: Uint8Array, currencyId: number, keepAlive: boolean} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TokensTransferKeepAliveCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Tokens.transfer_keep_alive')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Tokens.transfer_keep_alive') === 'f9417776835359c4df2af31d48b33bac20ebcc850ed3738fcbccd673124fb252'
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
  get asV78(): {dest: Uint8Array, currencyId: number, amount: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TransactionPausePauseTransactionCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'TransactionPause.pause_transaction')
    this._chain = ctx._chain
    this.call = call
  }

  get isV78(): boolean {
    return this._chain.getCallHash('TransactionPause.pause_transaction') === '9f7ea81680daeafc9598d45a2a8cebeeecb2ddd4c023d1961eb29f8509623297'
  }

  get asV78(): {palletName: Uint8Array, functionName: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TransactionPauseUnpauseTransactionCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'TransactionPause.unpause_transaction')
    this._chain = ctx._chain
    this.call = call
  }

  get isV78(): boolean {
    return this._chain.getCallHash('TransactionPause.unpause_transaction') === '9f7ea81680daeafc9598d45a2a8cebeeecb2ddd4c023d1961eb29f8509623297'
  }

  get asV78(): {palletName: Uint8Array, functionName: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TreasuryApproveProposalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Treasury.approve_proposal')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Treasury.approve_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
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
  get asV78(): {proposalId: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TreasuryProposeSpendCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Treasury.propose_spend')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('Treasury.propose_spend') === '98e9af32f46010396e58ac70ce7c017f7e95d81b05c03d5e5aeb94ce27732909'
  }

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
  get asV78(): {value: bigint, beneficiary: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class TreasuryRejectProposalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Treasury.reject_proposal')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Treasury.reject_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
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
  get asV78(): {proposalId: number} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesApproveTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.approve_transfer')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.approve_transfer') === 'e2bc6a584a078f701e2a87282b57b8b974f114f1266f8bc83b275ec2e1ff9d2f'
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
  get asV78(): {class: bigint, instance: bigint, delegate: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesBurnCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.burn')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.burn') === '47839fc14a479775a1b4bb04fc9cab3d7a74b533a52a2d3e308e2e8f3e7843a5'
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
  get asV78(): {class: bigint, instance: bigint, checkOwner: (Uint8Array | undefined)} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesCancelApprovalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.cancel_approval')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.cancel_approval') === 'f71ba524a3f396eb92526d22734ac9ded9ac72ffa34f2678bb59871c82e9ffee'
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
  get asV78(): {class: bigint, instance: bigint, maybeCheckDelegate: (Uint8Array | undefined)} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesClearAttributeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.clear_attribute')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.clear_attribute') === 'fa7fbe839ff03afee447f0395225a1b90a4a0d39db0de47a57b304e0007ae3f1'
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
  get asV78(): {class: bigint, maybeInstance: (bigint | undefined), key: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesClearClassMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.clear_class_metadata')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.clear_class_metadata') === 'de726c651d782a794b6320d324614e9a6d7941df63ec96acd3dcfeefc3e462fc'
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
  get asV78(): {class: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesClearMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.clear_metadata')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.clear_metadata') === 'a8eb242f40f38e99b6acb0b2a5fe4c2895f468e8d68e42a8b577d041f6327531'
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
  get asV78(): {class: bigint, instance: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesCreateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.create')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.create') === 'cd83927cb03589388233766c2e9f8feb573752f7ceffabdcc8eadebc1a718b7e'
  }

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
  get asV78(): {class: bigint, admin: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesDestroyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.destroy')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.destroy') === '5b3264e0470756325df85a61ed9a9041e96224d1ba29102b74991a5914a0e111'
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
  get asV78(): {class: bigint, witness: v78.DestroyWitness} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesForceAssetStatusCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.force_asset_status')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.force_asset_status') === '9bf88a9992763cd61875a298871db3ed7d80ff8ef683db496d723ed21e7b4505'
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
  get asV78(): {class: bigint, owner: Uint8Array, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array, freeHolding: boolean, isFrozen: boolean} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesForceCreateCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.force_create')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.force_create') === 'b597cc61767d7abfd1b13675fb6939049fe086d2275cfda0922034e935222f41'
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
  get asV78(): {class: bigint, owner: Uint8Array, freeHolding: boolean} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesFreezeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.freeze')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.freeze') === 'a8eb242f40f38e99b6acb0b2a5fe4c2895f468e8d68e42a8b577d041f6327531'
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
  get asV78(): {class: bigint, instance: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesFreezeClassCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.freeze_class')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.freeze_class') === 'de726c651d782a794b6320d324614e9a6d7941df63ec96acd3dcfeefc3e462fc'
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
  get asV78(): {class: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesMintCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.mint')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.mint') === '22d6c9cf90c85c2e49710966b541e67e8bd7e4caaa0ede7e5fc52cb7be88bd28'
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
  get asV78(): {class: bigint, instance: bigint, owner: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesRedepositCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.redeposit')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.redeposit') === 'a898eab9074705bbdb214fa3388476a937f56681c99a6fdc6f2775e3937ef6e6'
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
  get asV78(): {class: bigint, instances: bigint[]} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesSetAttributeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.set_attribute')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.set_attribute') === '266eb96b44178238a7d75de203799f5b12d3c3cbcc2a7dc64455c196304b42de'
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
  get asV78(): {class: bigint, maybeInstance: (bigint | undefined), key: Uint8Array, value: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesSetClassMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.set_class_metadata')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.set_class_metadata') === '048f5192b5a715be7a9cfa9fb62d2d4ab7c8eae90057c10636620cdb7c5ddf74'
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
  get asV78(): {class: bigint, data: Uint8Array, isFrozen: boolean} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesSetMetadataCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.set_metadata')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.set_metadata') === 'efb23390e7df146e5fd4a351bde65cef92e370a59dc542a6af66370ef5c17df3'
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
  get asV78(): {class: bigint, instance: bigint, data: Uint8Array, isFrozen: boolean} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesSetTeamCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.set_team')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.set_team') === '5719ec093d2a015bb78e5d8e16720e7839064cf729207359c0e00fc016706d39'
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
  get asV78(): {class: bigint, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesThawCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.thaw')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.thaw') === 'a8eb242f40f38e99b6acb0b2a5fe4c2895f468e8d68e42a8b577d041f6327531'
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
  get asV78(): {class: bigint, instance: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesThawClassCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.thaw_class')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.thaw_class') === 'de726c651d782a794b6320d324614e9a6d7941df63ec96acd3dcfeefc3e462fc'
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
  get asV78(): {class: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.transfer')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.transfer') === '60ba4aeb54be9ec50306eddb95a4167e7ddb2190fdf549860356ac4db90a8896'
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
  get asV78(): {class: bigint, instance: bigint, dest: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UniquesTransferOwnershipCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Uniques.transfer_ownership')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Uniques.transfer_ownership') === 'c001cb6545bb30a3cfe5abd79abc4642b0d84253c7816f0a2ac1b65a7ddf3228'
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
  get asV78(): {class: bigint, owner: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UtilityAsDerivativeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Utility.as_derivative')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '6782d581a79319f8dd4d354416d0907e8b5449987480231a6dc5bc9cb3519d23'
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
  get asV78(): {index: number, call: v78.Call} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UtilityBatchCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Utility.batch')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('Utility.batch') === 'dfd21241b84e647843245b82684359c19b2510fdde80675460ca2662b0e279a0'
  }

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
  get asV78(): {calls: v78.Call[]} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UtilityBatchAllCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Utility.batch_all')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === 'dfd21241b84e647843245b82684359c19b2510fdde80675460ca2662b0e279a0'
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
  get asV78(): {calls: v78.Call[]} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class UtilityDispatchAsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Utility.dispatch_as')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === 'ddaa20f6d73113508d5d4238297b5c037a0d2d515b92cbdbb975162fb4804409'
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
  get asV78(): {asOrigin: v78.OriginCaller, call: v78.Call} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingClaimCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Vesting.claim')
    this._chain = ctx._chain
    this.call = call
  }

  get isV78(): boolean {
    return this._chain.getCallHash('Vesting.claim') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  get asV78(): null {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingClaimForCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Vesting.claim_for')
    this._chain = ctx._chain
    this.call = call
  }

  get isV78(): boolean {
    return this._chain.getCallHash('Vesting.claim_for') === 'b460c0e5be86faa4e205be32c38d7cbf4012485c8ea8f2b0d2831cc6157b2ed8'
  }

  get asV78(): {dest: Uint8Array} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingUpdateVestingSchedulesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Vesting.update_vesting_schedules')
    this._chain = ctx._chain
    this.call = call
  }

  get isV78(): boolean {
    return this._chain.getCallHash('Vesting.update_vesting_schedules') === '77c565e7989e7bc919881bb1ee1a6ea3717748d0dc34dfa233007fbe6386e5d8'
  }

  get asV78(): {who: Uint8Array, vestingSchedules: v78.VestingSchedule[]} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingVestedTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Vesting.vested_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  get isV78(): boolean {
    return this._chain.getCallHash('Vesting.vested_transfer') === '0a3591798ce10f78f229a34448a83d06dfe547006c9e21a950869d29b5510d14'
  }

  get asV78(): {dest: Uint8Array, schedule: v78.VestingSchedule} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class XTokensTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XTokens.transfer')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('XTokens.transfer') === '779953428ade1393c57223ef31a3e0b8a8aa80c03bc446a03beff0f03c84534f'
  }

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
  get asV78(): {currencyId: number, amount: bigint, dest: v78.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class XTokensTransferMultiassetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XTokens.transfer_multiasset')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('XTokens.transfer_multiasset') === 'f33cd4d2466c1e767a4c2d9b00f7b71b359b07f3e78d76d466e3928a3e2ed9b8'
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
  get asV78(): {asset: v78.VersionedMultiAsset, dest: v78.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class XTokensTransferMultiassetWithFeeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XTokens.transfer_multiasset_with_fee')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('XTokens.transfer_multiasset_with_fee') === '72aca3119f971190d4dd5493791879ff41295c5e290079c6179cb41be01e6226'
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
  get asV78(): {asset: v78.VersionedMultiAsset, fee: v78.VersionedMultiAsset, dest: v78.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class XTokensTransferMultiassetsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XTokens.transfer_multiassets')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('XTokens.transfer_multiassets') === '2c9276a8e5652bef69d8e7f6f9bf7caccd48bb5ef0b25b42010d09b4b28b18c5'
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
  get asV78(): {assets: v78.VersionedMultiAssets, feeItem: number, dest: v78.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class XTokensTransferMulticurrenciesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XTokens.transfer_multicurrencies')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('XTokens.transfer_multicurrencies') === 'ae8e439e76fe4660ff35fbf13277a9d4bdd8c18e4ee54c9d06622dd2336bd1e2'
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
  get asV78(): {currencies: [number, bigint][], feeItem: number, dest: v78.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class XTokensTransferWithFeeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XTokens.transfer_with_fee')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('XTokens.transfer_with_fee') === '95051b752e41101340eab37ed9777dfdaab1be321d83671aa84c021755c17e48'
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
  get asV78(): {currencyId: number, amount: bigint, fee: bigint, dest: v78.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class XykAddLiquidityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XYK.add_liquidity')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add liquidity to previously created asset pair pool.
   * 
   * Shares are issued with current price.
   * 
   * Emits `LiquidityAdded` event when successful.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('XYK.add_liquidity') === '49b203a41a53269704b11662e91b99273e01464f22097ed3ac18f7d12e742a9d'
  }

  /**
   * Add liquidity to previously created asset pair pool.
   * 
   * Shares are issued with current price.
   * 
   * Emits `LiquidityAdded` event when successful.
   */
  get asV78(): {assetA: number, assetB: number, amountA: bigint, amountBMaxLimit: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class XykBuyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XYK.buy')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('XYK.buy') === 'ab3eaf0cb16e0fea7650fbfbff002ef0bfa3d8f7908b7be4036eea89529c956d'
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
  get asV78(): {assetOut: number, assetIn: number, amount: bigint, maxLimit: bigint, discount: boolean} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class XykCreatePoolCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XYK.create_pool')
    this._chain = ctx._chain
    this.call = call
  }

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
  get isV78(): boolean {
    return this._chain.getCallHash('XYK.create_pool') === '036b76577b25b1b68f8755f0d220a559f2683a68ad6072247e03c16346d46d7f'
  }

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
  get asV78(): {assetA: number, assetB: number, amount: bigint, initialPrice: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class XykRemoveLiquidityCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XYK.remove_liquidity')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove liquidity from specific liquidity pool in the form of burning shares.
   * 
   * If liquidity in the pool reaches 0, it is destroyed.
   * 
   * Emits 'LiquidityRemoved' when successful.
   * Emits 'PoolDestroyed' when pool is destroyed.
   */
  get isV78(): boolean {
    return this._chain.getCallHash('XYK.remove_liquidity') === '381acbc6a211906fdf77548353137f1d4ffa7bc565402bd59ed9fc09b0186fee'
  }

  /**
   * Remove liquidity from specific liquidity pool in the form of burning shares.
   * 
   * If liquidity in the pool reaches 0, it is destroyed.
   * 
   * Emits 'LiquidityRemoved' when successful.
   * Emits 'PoolDestroyed' when pool is destroyed.
   */
  get asV78(): {assetA: number, assetB: number, liquidityAmount: bigint} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}

export class XykSellCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'XYK.sell')
    this._chain = ctx._chain
    this.call = call
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
  get isV78(): boolean {
    return this._chain.getCallHash('XYK.sell') === 'ed0c4336cf718cfe65339630b1b031d1eedac2f9d2a71bfefbdd5c72723c9d66'
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
  get asV78(): {assetIn: number, assetOut: number, amount: bigint, maxLimit: bigint, discount: boolean} {
    assert(this.isV78)
    return this._chain.decodeCall(this.call)
  }
}
