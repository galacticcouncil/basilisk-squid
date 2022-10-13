import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result} from './support'
import * as v16 from './v16'
import * as v19 from './v19'
import * as v25 from './v25'
import * as v38 from './v38'
import * as v43 from './v43'
import * as v55 from './v55'
import * as v65 from './v65'
import * as v69 from './v69'
import * as v76 from './v76'

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
  get isV16(): boolean {
    return this._chain.getCallHash('AssetRegistry.register') === '3d0edaa2ffeb672234b436730fa697690060a5ce6ed579d0841f8dd0abdac433'
  }

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
  get asV16(): {name: Uint8Array, assetType: v16.AssetType, existentialDeposit: bigint} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
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
  get asV25(): {name: Uint8Array, assetType: v25.AssetType, existentialDeposit: bigint} {
    assert(this.isV25)
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
   *  Set asset native location.
   * 
   *  Adds mapping between native location and local asset id and vice versa.
   * 
   *  Mainly used in XCM.
   * 
   *  Emits `LocationSet` event when successful.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('AssetRegistry.set_location') === '2d0a7f532351916ce6c108d8db05d03b730ddcefafcbfb71befe9f3919ca8fcd'
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
  get asV16(): {assetId: number, location: v16.AssetNativeLocation} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV19(): boolean {
    return this._chain.getCallHash('AssetRegistry.set_location') === 'e0f03d28506a1de96e5f3fc25f388171abfbc6bbb5a5a4f99a14ad90344663a0'
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
  get asV19(): {assetId: number, location: v19.AssetNativeLocation} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
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
  get asV25(): {assetId: number, location: v25.AssetLocation} {
    assert(this.isV25)
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
   *  Set metadata for an asset.
   * 
   *  - `asset_id`: Asset identifier.
   *  - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
   *  - `decimals`: The number of decimals this asset uses to represent one unit.
   * 
   *  Emits `MetadataSet` event when successful.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('AssetRegistry.set_metadata') === '5733a2ab6f544e91ef9651644e4a8f3fc7257fa3a961ba51dd1f0c862b7a7a0a'
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
  get asV16(): {assetId: number, symbol: Uint8Array, decimals: number} {
    assert(this.isV16)
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
   *  Update registered asset.
   * 
   *  Updates also mapping between name and asset id if provided name is different than currently registered.
   * 
   *  Emits `Updated` event when successful.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('AssetRegistry.update') === 'b6ff9b4510378f7185d5e7d4468b04cfb547a1baa56abd94c9538ed5d051aa21'
  }

  /**
   *  Update registered asset.
   * 
   *  Updates also mapping between name and asset id if provided name is different than currently registered.
   * 
   *  Emits `Updated` event when successful.
   */
  get asV16(): {assetId: number, name: Uint8Array, assetType: v16.AssetType, existentialDeposit: (bigint | undefined)} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Update registered asset.
   * 
   * Updates also mapping between name and asset id if provided name is different than currently registered.
   * 
   * Emits `Updated` event when successful.
   */
  get isV25(): boolean {
    return this._chain.getCallHash('AssetRegistry.update') === 'be93bc22aab747596aaafa42bfd6623605951ab0303c4ef01b675f2fa5ca9e44'
  }

  /**
   * Update registered asset.
   * 
   * Updates also mapping between name and asset id if provided name is different than currently registered.
   * 
   * Emits `Updated` event when successful.
   */
  get asV25(): {assetId: number, name: Uint8Array, assetType: v25.AssetType, existentialDeposit: (bigint | undefined)} {
    assert(this.isV25)
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
   *  Provide a set of uncles.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Authorship.set_uncles') === '9a1db486e7d8bdc2279795278657cb4c1db0f89a8f87255f2ab6a839f5683ddf'
  }

  /**
   *  Provide a set of uncles.
   */
  get asV16(): {newUncles: v16.Header[]} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Provide a set of uncles.
   */
  get isV25(): boolean {
    return this._chain.getCallHash('Authorship.set_uncles') === '491502deec691ea043fa56fc39b50b58deab8a6411c511016c06289ee5867611'
  }

  /**
   * Provide a set of uncles.
   */
  get asV25(): {newUncles: v25.Header[]} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Provide a set of uncles.
   */
  get isV38(): boolean {
    return this._chain.getCallHash('Authorship.set_uncles') === 'cf2d7dac8c8babfdda54dfcca36fda32336dc937b0f1767c6b2332a9b718e0b5'
  }

  /**
   * Provide a set of uncles.
   */
  get asV38(): {newUncles: v38.Header[]} {
    assert(this.isV38)
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
   *  Exactly as `transfer`, except the origin must be root and the source account may be
   *  specified.
   *  # <weight>
   *  - Same as transfer, but additional read and write because the source account is
   *    not assumed to be in the overlay.
   *  # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Balances.force_transfer') === '2fe8348cf811b833de74f02f6eeab668dbfad8a5d53274dd89837666ed3eb6fe'
  }

  /**
   *  Exactly as `transfer`, except the origin must be root and the source account may be
   *  specified.
   *  # <weight>
   *  - Same as transfer, but additional read and write because the source account is
   *    not assumed to be in the overlay.
   *  # </weight>
   */
  get asV16(): {source: Uint8Array, dest: Uint8Array, value: bigint} {
    assert(this.isV16)
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
  get isV25(): boolean {
    return this._chain.getCallHash('Balances.force_unreserve') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Unreserve some balance from a user by force.
   * 
   * Can only be called by ROOT.
   */
  get asV25(): {who: Uint8Array, amount: bigint} {
    assert(this.isV25)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Balances.set_balance') === 'a65ed3500227691ff89565c1bf5a0244c2a05366e34d1ab50167d0c006774edc'
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
  get asV16(): {who: Uint8Array, newFree: bigint, newReserved: bigint} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Balances.transfer') === 'cf5bb376709277883598390b3462e93b0f3c383df391c0649728c965e8da82fd'
  }

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
  get asV16(): {dest: Uint8Array, value: bigint} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Balances.transfer_all') === '55f3f63b765a5b0a714fcbe6c824b0f6fc21773aab999a719c36e7dc7db49575'
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
  get asV16(): {dest: Uint8Array, keepAlive: boolean} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Balances.transfer_keep_alive') === 'cf5bb376709277883598390b3462e93b0f3c383df391c0649728c965e8da82fd'
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
  get asV16(): {dest: Uint8Array, value: bigint} {
    assert(this.isV16)
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

  get isV16(): boolean {
    return this._chain.getCallHash('CollatorSelection.leave_intent') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  get asV16(): null {
    assert(this.isV16)
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

  get isV16(): boolean {
    return this._chain.getCallHash('CollatorSelection.register_as_candidate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  get asV16(): null {
    assert(this.isV16)
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

  get isV16(): boolean {
    return this._chain.getCallHash('CollatorSelection.set_candidacy_bond') === 'a862ec70ffc8f3bd1c3d634825c052f8531eba68afa42769689fc18a6d718eda'
  }

  get asV16(): {bond: bigint} {
    assert(this.isV16)
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

  get isV16(): boolean {
    return this._chain.getCallHash('CollatorSelection.set_desired_candidates') === '405f1447d8db6ecc920213976cf7f98b6e74c5ceb4e2ecf66c742895e40e5d78'
  }

  get asV16(): {max: number} {
    assert(this.isV16)
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

  get isV16(): boolean {
    return this._chain.getCallHash('CollatorSelection.set_invulnerables') === '4f4db85b7e763f702804fa793ac5cba68cfd546b497830a9c3c21dced2b91524'
  }

  get asV16(): {new: Uint8Array[]} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Council.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
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
  get asV16(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Council.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
  get asV16(): {proposalHash: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Council.execute') === '186e126fc260283bdda4de17e89495abf4cdade0f6b4fdf5953203d6cadd08fe'
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
  get asV16(): {proposal: v16.Proposal, lengthBound: number} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV19(): boolean {
    return this._chain.getCallHash('Council.execute') === '179fb8d8f7746565ce3afe942d5233075a687818e1d56f5cbb99af1fa8ab175c'
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
  get asV19(): {proposal: v19.Proposal, lengthBound: number} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
    return this._chain.getCallHash('Council.execute') === 'b2543f355fe0179179fe8b9bdd162d87576d9969f6cb923e88e356dc1c611fec'
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
  get asV25(): {proposal: v25.Call, lengthBound: number} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
    return this._chain.getCallHash('Council.execute') === '18621f10a1c741d0f53ab9302a9a0950007ec8bcbe34fe9ac0754522b3dbecd1'
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
  get asV38(): {proposal: v38.Call, lengthBound: number} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
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
  get isV43(): boolean {
    return this._chain.getCallHash('Council.execute') === 'f375c351932f898dc4c7f2b6d8d64822c0a20bee898890712421f66aed1f8a13'
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
  get asV43(): {proposal: v43.Call, lengthBound: number} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
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
  get isV55(): boolean {
    return this._chain.getCallHash('Council.execute') === 'c55e32a381262eed8e87f0a5355307a87e4ace513481b4f08f203f5a6bb6532d'
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
  get asV55(): {proposal: v55.Call, lengthBound: number} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
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
  get isV65(): boolean {
    return this._chain.getCallHash('Council.execute') === '33349d8e357311e3a355ad9a9f7b3369980650e37d28fd6488044d9350e4710b'
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
  get asV65(): {proposal: v65.Call, lengthBound: number} {
    assert(this.isV65)
    return this._chain.decodeCall(this.call)
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
  get isV69(): boolean {
    return this._chain.getCallHash('Council.execute') === 'b6044956e6d4484d27d76535db379b483602da36cdb8c1caee4a6700e2363211'
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
  get asV69(): {proposal: v69.Call, lengthBound: number} {
    assert(this.isV69)
    return this._chain.decodeCall(this.call)
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
  get isV76(): boolean {
    return this._chain.getCallHash('Council.execute') === '42e69d69e53b0f9421e3da3ca250ab50f2594e9e57bf6196b3d4c744ad5f3862'
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
  get asV76(): {proposal: v76.Call, lengthBound: number} {
    assert(this.isV76)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Council.propose') === 'ff07de05ae8e89d62927bee23b595f4a2d8b3ed8757de21f6fd5c4609b7aefa2'
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
  get asV16(): {threshold: number, proposal: v16.Proposal, lengthBound: number} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV19(): boolean {
    return this._chain.getCallHash('Council.propose') === '9fa4a68dc53539896739b3160dab29ccecfe222612165ea51520c6c3b96c9560'
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
  get asV19(): {threshold: number, proposal: v19.Proposal, lengthBound: number} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
    return this._chain.getCallHash('Council.propose') === 'c9f4194d41e2fe5e5198e130685bb9d2a881f12da90abd3312941e6a2ae657b7'
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
  get asV25(): {threshold: number, proposal: v25.Call, lengthBound: number} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
    return this._chain.getCallHash('Council.propose') === '75e0921656a67e4021d1392efa8ee8f35dc843babe28f3ce4d8bd742bdbce192'
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
  get asV38(): {threshold: number, proposal: v38.Call, lengthBound: number} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
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
  get isV43(): boolean {
    return this._chain.getCallHash('Council.propose') === '3d5700a14e197a0c0858a362d224141b498a0a9475a48ea6b8de3e7d0cc7b73f'
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
  get asV43(): {threshold: number, proposal: v43.Call, lengthBound: number} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
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
  get isV55(): boolean {
    return this._chain.getCallHash('Council.propose') === '90c55f27e624156eb7f215b9bf8f0c7e977d575325dc86a906fb1a152cacc67b'
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
  get asV55(): {threshold: number, proposal: v55.Call, lengthBound: number} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
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
  get isV65(): boolean {
    return this._chain.getCallHash('Council.propose') === '1a85393b74874f260e7f90279375b923786a4757057b149e9b3c7958229aa371'
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
  get asV65(): {threshold: number, proposal: v65.Call, lengthBound: number} {
    assert(this.isV65)
    return this._chain.decodeCall(this.call)
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
  get isV69(): boolean {
    return this._chain.getCallHash('Council.propose') === '2bd8545b9aeb711d97f6ec6b5604e73d0475188a02f3e4cc3a2b3e99e0de4ad1'
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
  get asV69(): {threshold: number, proposal: v69.Call, lengthBound: number} {
    assert(this.isV69)
    return this._chain.decodeCall(this.call)
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
  get isV76(): boolean {
    return this._chain.getCallHash('Council.propose') === 'abdbf0a364b16ed7e1b01d71fbf0be6e986367a4d6dd7d5e99e54be4f27bc0df'
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
  get asV76(): {threshold: number, proposal: v76.Call, lengthBound: number} {
    assert(this.isV76)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Council.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
  }

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
  get asV16(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Council.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
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
  get asV16(): {proposal: Uint8Array, index: number, approve: boolean} {
    assert(this.isV16)
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
   *  Transfer some balance to another account under `currency_id`.
   * 
   *  The dispatch origin for this call must be `Signed` by the
   *  transactor.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Currencies.transfer') === 'f9417776835359c4df2af31d48b33bac20ebcc850ed3738fcbccd673124fb252'
  }

  /**
   *  Transfer some balance to another account under `currency_id`.
   * 
   *  The dispatch origin for this call must be `Signed` by the
   *  transactor.
   */
  get asV16(): {dest: Uint8Array, currencyId: number, amount: bigint} {
    assert(this.isV16)
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
   *  Transfer some native currency to another account.
   * 
   *  The dispatch origin for this call must be `Signed` by the
   *  transactor.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Currencies.transfer_native_currency') === '94a3f31b6c27b88829aa15b00a4c891eb6d26aea983baf4152003a578ce990f7'
  }

  /**
   *  Transfer some native currency to another account.
   * 
   *  The dispatch origin for this call must be `Signed` by the
   *  transactor.
   */
  get asV16(): {dest: Uint8Array, amount: bigint} {
    assert(this.isV16)
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
   *  update amount of account `who` under `currency_id`.
   * 
   *  The dispatch origin of this call must be _Root_.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Currencies.update_balance') === '0658a1a329a71de06a309dcf439763a0012143af692c1162a6d0f9923368e33f'
  }

  /**
   *  update amount of account `who` under `currency_id`.
   * 
   *  The dispatch origin of this call must be _Root_.
   */
  get asV16(): {who: Uint8Array, currencyId: number, amount: bigint} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.blacklist') === '8d8922c0775adfb1df719211ab4fc6fb40b6cc8864038bcb1b544d9cf039b30a'
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
  get asV16(): {proposalHash: Uint8Array, maybeRefIndex: (number | undefined)} {
    assert(this.isV16)
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
   *  Remove a proposal.
   * 
   *  The dispatch origin of this call must be `CancelProposalOrigin`.
   * 
   *  - `prop_index`: The index of the proposal to cancel.
   * 
   *  Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.cancel_proposal') === '0e50c7564a4a7f4e6a09a0abcc8022f4445c064144d2318ed086e6080bee800d'
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
  get asV16(): {propIndex: number} {
    assert(this.isV16)
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
   *  Cancel a proposal queued for enactment.
   * 
   *  The dispatch origin of this call must be _Root_.
   * 
   *  - `which`: The index of the referendum to cancel.
   * 
   *  Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.cancel_queued') === '60780274011857b5305b5413b2b4742e5d41eb58a0948049d0672e81af198cb7'
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
  get asV16(): {which: number} {
    assert(this.isV16)
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
   *  Remove a referendum.
   * 
   *  The dispatch origin of this call must be _Root_.
   * 
   *  - `ref_index`: The index of the referendum to cancel.
   * 
   *  # Weight: `O(1)`.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.cancel_referendum') === 'efe4ecff834678ca8b73ea6e2f38e514997eb402e82da2ce4cf036008844a857'
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
  get asV16(): {refIndex: number} {
    assert(this.isV16)
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
   *  Clears all public proposals.
   * 
   *  The dispatch origin of this call must be _Root_.
   * 
   *  Weight: `O(1)`.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.clear_public_proposals') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  Clears all public proposals.
   * 
   *  The dispatch origin of this call must be _Root_.
   * 
   *  Weight: `O(1)`.
   */
  get asV16(): null {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.delegate') === '719d303e364256b757876a8d1b18c8d62a96223d68ffc6f6c1bf18240e8d9793'
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
  get asV16(): {to: Uint8Array, conviction: v16.Conviction, balance: bigint} {
    assert(this.isV16)
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
   *  Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
   *  referendum.
   * 
   *  The dispatch origin of this call must be `CancellationOrigin`.
   * 
   *  -`ref_index`: The index of the referendum to cancel.
   * 
   *  Weight: `O(1)`.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.emergency_cancel') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
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
  get asV16(): {refIndex: number} {
    assert(this.isV16)
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
   *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.enact_proposal') === 'de192ab0f058d1fb7eacc523bf0e05128d16509ec21bf445f0eefa47c89e60bf'
  }

  /**
   *  Enact a proposal from a referendum. For now we just make the weight be the maximum.
   */
  get asV16(): {proposalHash: Uint8Array, index: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.external_propose') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
  get asV16(): {proposalHash: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.external_propose_default') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
  get asV16(): {proposalHash: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.external_propose_majority') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
  get asV16(): {proposalHash: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.fast_track') === '27cb200e922e485b41e3150b3d7bf5e8624346f6ff1d78601373ba3d80689c89'
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
  get asV16(): {proposalHash: Uint8Array, votingPeriod: number, delay: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.note_imminent_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
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
  get asV16(): {encodedProposal: Uint8Array} {
    assert(this.isV16)
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
   *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.note_imminent_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
  }

  /**
   *  Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get asV16(): {encodedProposal: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.note_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
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
  get asV16(): {encodedProposal: Uint8Array} {
    assert(this.isV16)
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
   *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.note_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
  }

  /**
   *  Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get asV16(): {encodedProposal: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.propose') === '99f964e94c86db2029fab3e54a9230e36fe7533d252b5ecbc36f16c06e11f18b'
  }

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
  get asV16(): {proposalHash: Uint8Array, value: bigint} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.reap_preimage') === '23573ffc912e8a31889875352d3543e4538e2f3beb6a89ef86d10cf1cb8b7aca'
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
  get asV16(): {proposalHash: Uint8Array, proposalLenUpperBound: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.remove_other_vote') === '57db819150acc73e380a9908a05d4f777cd3af825527d7ad88560426e1d0f652'
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
  get asV16(): {target: Uint8Array, index: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.remove_vote') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
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
  get asV16(): {index: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.second') === 'abe1357aae784eefd21f6999076deb6cfbc92fcb9e80c21e93a944ceb739423c'
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
  get asV16(): {proposal: number, secondsUpperBound: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.undelegate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
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
  get asV16(): null {
    assert(this.isV16)
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
   *  Unlock tokens that have an expired lock.
   * 
   *  The dispatch origin of this call must be _Signed_.
   * 
   *  - `target`: The account to remove the lock on.
   * 
   *  Weight: `O(R)` with R number of vote of target.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.unlock') === '66d8abf7976ff596d8d614948b9d84cb24f0b898d88d24eb2cc035ae5e93c7b8'
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
  get asV16(): {target: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.veto_external') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
  get asV16(): {proposalHash: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Democracy.vote') === '6cdb35b5ffcb74405cdf222b0cc0bf7ad7025d59f676bea6712d77bcc9aff1db'
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
  get asV16(): {refIndex: number, vote: v16.AccountVote} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
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
  get asV25(): {refIndex: number, vote: v25.AccountVote} {
    assert(this.isV25)
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
  get isV16(): boolean {
    return this._chain.getCallHash('DmpQueue.service_overweight') === 'f6b281f58290b6af96ac2dda36163d81223f37d0a8a100877e2526969a57d772'
  }

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
  get asV16(): {index: bigint, weightLimit: bigint} {
    assert(this.isV16)
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
   *  Add account to list of non-dustable account. Account whihc are excluded from udsting.
   *  If such account should be dusted - `AccountBlacklisted` error is returned.
   *  Only root can perform this action.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Duster.add_nondustable_account') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   *  Add account to list of non-dustable account. Account whihc are excluded from udsting.
   *  If such account should be dusted - `AccountBlacklisted` error is returned.
   *  Only root can perform this action.
   */
  get asV16(): {account: Uint8Array} {
    assert(this.isV16)
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
   *  Dust specified account.
   *  IF account balance is < min. existential deposit of given currency, and account is allowed to
   *  be dusted, the remaining balance is transferred to selected account (usually treasury).
   * 
   *  Caller is rewarded with chosen reward in native currency.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Duster.dust_account') === 'd3feddb5891b6dffbacca67c361c7faded12f59c061734980a1a27e78b3c54fa'
  }

  /**
   *  Dust specified account.
   *  IF account balance is < min. existential deposit of given currency, and account is allowed to
   *  be dusted, the remaining balance is transferred to selected account (usually treasury).
   * 
   *  Caller is rewarded with chosen reward in native currency.
   */
  get asV16(): {account: Uint8Array, currencyId: number} {
    assert(this.isV16)
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
   *  Remove account from list of non-dustable accounts. That means account can be dusted again.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Duster.remove_nondustable_account') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   *  Remove account from list of non-dustable accounts. That means account can be dusted again.
   */
  get asV16(): {account: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Elections.clean_defunct_voters') === '8279e35309d0c9a5d36cd12cce19e58fef95829d4096e23fe93a055a47afd8a0'
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
  get asV16(): {numVoters: number, numDefunct: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Elections.remove_member') === 'cc43d536f862eb65fab1d583cca3ea302b95423702ae1dac84b75df432320893'
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
  get asV16(): {who: Uint8Array, hasReplacement: boolean} {
    assert(this.isV16)
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
   *  Remove `origin` as a voter.
   * 
   *  This removes the lock and returns the deposit.
   * 
   *  The dispatch origin of this call must be signed and be a voter.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Elections.remove_voter') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   *  Remove `origin` as a voter.
   * 
   *  This removes the lock and returns the deposit.
   * 
   *  The dispatch origin of this call must be signed and be a voter.
   */
  get asV16(): null {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Elections.renounce_candidacy') === '401403901ca3dfbfca98e7a65d20f6398fed6b8c66eaaea7d313512fd66df467'
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
  get asV16(): {renouncing: v16.Renouncing} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
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
  get asV25(): {renouncing: v25.Renouncing} {
    assert(this.isV25)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Elections.submit_candidacy') === 'f9d2bc9f755e33c27d34db4c3b063daa9e2490111d35f89ea1995d74e59b1819'
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
  get asV16(): {candidateCount: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Elections.vote') === '75939c25de1c96145b5d2d4bc8627a3fc22299f0e1f1f6f0709e54e884796bda'
  }

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
  get asV16(): {votes: Uint8Array[], value: bigint} {
    assert(this.isV16)
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
   *  Create buy intention
   *  Calculate current spot price, create an intention and store in ```ExchangeAssetsIntentions```
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Exchange.buy') === '895d06cec55d2ba6786140ff36b3ffb1ce14db05a42a9706adc8db7137abc0e8'
  }

  /**
   *  Create buy intention
   *  Calculate current spot price, create an intention and store in ```ExchangeAssetsIntentions```
   */
  get asV16(): {assetBuy: number, assetSell: number, amountBuy: bigint, maxSold: bigint, discount: boolean} {
    assert(this.isV16)
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
   *  Create sell intention
   *  Calculate current spot price, create an intention and store in ```ExchangeAssetsIntentions```
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Exchange.sell') === '2081ff6ca378ad66cdf3cf7a7427c8b796d0db4bac39021743f47a062807c548'
  }

  /**
   *  Create sell intention
   *  Calculate current spot price, create an intention and store in ```ExchangeAssetsIntentions```
   */
  get asV16(): {assetSell: number, assetBuy: number, amountSell: bigint, minBought: bigint, discount: boolean} {
    assert(this.isV16)
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
  get isV55(): boolean {
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
  get asV55(): {account: Uint8Array} {
    assert(this.isV55)
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
  get isV55(): boolean {
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
  get asV55(): {sub: Uint8Array, data: v55.Data} {
    assert(this.isV55)
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
  get isV55(): boolean {
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
  get asV55(): {regIndex: number} {
    assert(this.isV55)
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
  get isV55(): boolean {
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
  get asV55(): null {
    assert(this.isV55)
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
  get isV55(): boolean {
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
  get asV55(): {target: Uint8Array} {
    assert(this.isV55)
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
  get isV55(): boolean {
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
  get asV55(): {regIndex: number, target: Uint8Array, judgement: v55.Judgement} {
    assert(this.isV55)
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
  get isV55(): boolean {
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
  get asV55(): null {
    assert(this.isV55)
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
  get isV55(): boolean {
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
  get asV55(): {sub: Uint8Array} {
    assert(this.isV55)
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
  get isV55(): boolean {
    return this._chain.getCallHash('Identity.rename_sub') === '3a44789cb2db1c330353e6200ca05fb21d197f103560aec42b25fed99b8ede6d'
  }

  /**
   * Alter the associated name of the given sub-account.
   * 
   * The dispatch origin for this call must be _Signed_ and the sender must have a registered
   * sub identity of `sub`.
   */
  get asV55(): {sub: Uint8Array, data: v55.Data} {
    assert(this.isV55)
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
  get isV55(): boolean {
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
  get asV55(): {regIndex: number, maxFee: bigint} {
    assert(this.isV55)
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
  get isV55(): boolean {
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
  get asV55(): {index: number, new: Uint8Array} {
    assert(this.isV55)
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
  get isV55(): boolean {
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
  get asV55(): {index: number, fee: bigint} {
    assert(this.isV55)
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
  get isV55(): boolean {
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
  get asV55(): {index: number, fields: bigint} {
    assert(this.isV55)
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
  get isV55(): boolean {
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
  get asV55(): {info: v55.IdentityInfo} {
    assert(this.isV55)
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
  get isV55(): boolean {
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
  get asV55(): {subs: [Uint8Array, v55.Data][]} {
    assert(this.isV55)
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
  get isV16(): boolean {
    return this._chain.getCallHash('LBP.add_liquidity') === '3a85b1dfe318146be75bd4f0f9df60b5241f5b7f4f4806e513923814250c86af'
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
  get asV16(): {amountA: [number, bigint], amountB: [number, bigint]} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('LBP.buy') === 'cc661073455d8d24a5203cf26d61f8f26da24dd5d3859c180e99506e90ab09c1'
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
  get asV16(): {assetOut: number, assetIn: number, amount: bigint, maxLimit: bigint} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('LBP.create_pool') === '4ca665842f285f84b04cef1d8a102921dd3abfb0661bb9cfe02833373c99aac7'
  }

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
  get asV16(): {poolOwner: Uint8Array, assetA: v16.LBPAssetInfo, assetB: v16.LBPAssetInfo, saleDuration: [number, number], weightCurve: v16.WeightCurveType, pausable: boolean, fee: v16.Fee, feeReceiver: Uint8Array} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
   * - `final_weight`: Final weight of the asset_a. 1_000_000 corresponding to 1% and 100_000_000 to 100%
   * - `weight_curve`: The weight function used to update the LBP weights. Currently,
   * there is only one weight function implemented, the linear function.
   * - `fee`: The trading fee charged on every trade distributed to `fee_collector`.
   * - `fee_collector`: The account to which trading fees will be transferred.
   * 
   * Emits `PoolCreated` event when successful.
   */
  get isV25(): boolean {
    return this._chain.getCallHash('LBP.create_pool') === '39a1c1e0236c0a2daeb73e64e78bb074b3aa0da20249ab48841317942a82ba88'
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
   * - `final_weight`: Final weight of the asset_a. 1_000_000 corresponding to 1% and 100_000_000 to 100%
   * - `weight_curve`: The weight function used to update the LBP weights. Currently,
   * there is only one weight function implemented, the linear function.
   * - `fee`: The trading fee charged on every trade distributed to `fee_collector`.
   * - `fee_collector`: The account to which trading fees will be transferred.
   * 
   * Emits `PoolCreated` event when successful.
   */
  get asV25(): {poolOwner: Uint8Array, assetA: number, assetAAmount: bigint, assetB: number, assetBAmount: bigint, initialWeight: number, finalWeight: number, weightCurve: v25.WeightCurveType, fee: v25.Fee, feeCollector: Uint8Array} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
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
  get asV38(): {poolOwner: Uint8Array, assetA: number, assetAAmount: bigint, assetB: number, assetBAmount: bigint, initialWeight: number, finalWeight: number, weightCurve: v38.WeightCurveType, fee: [number, number], feeCollector: Uint8Array, repayTarget: bigint} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
  }
}

export class LbpPausePoolCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LBP.pause_pool')
    this._chain = ctx._chain
    this.call = call
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
  get isV16(): boolean {
    return this._chain.getCallHash('LBP.pause_pool') === '80360f283e15fc119f8a0810b4d9675d6da65eb2354c77cc4e4cdb65236120a0'
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
  get asV16(): {poolId: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('LBP.remove_liquidity') === '80360f283e15fc119f8a0810b4d9675d6da65eb2354c77cc4e4cdb65236120a0'
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
  get asV16(): {poolId: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('LBP.sell') === '7437ca2cbbe4a3ead498b3f7d205b81655351b35c5b894344a349a6b4feb4f3d'
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
  get asV16(): {assetIn: number, assetOut: number, amount: bigint, maxLimit: bigint} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }
}

export class LbpUnpausePoolCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LBP.unpause_pool')
    this._chain = ctx._chain
    this.call = call
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
  get isV16(): boolean {
    return this._chain.getCallHash('LBP.unpause_pool') === '80360f283e15fc119f8a0810b4d9675d6da65eb2354c77cc4e4cdb65236120a0'
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
  get asV16(): {poolId: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('LBP.update_pool_data') === 'b3fd4a59f60d9b742c1b1900398a6d94eea1b8c4cb918940a4ea2c13a01bbb22'
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
  get asV16(): {poolId: Uint8Array, duration: ([number, number] | undefined), initialWeights: ([[number, number], [number, number]] | undefined), finalWeights: ([[number, number], [number, number]] | undefined), fee: (v16.Fee | undefined), feeReceiver: (Uint8Array | undefined)} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
    return this._chain.getCallHash('LBP.update_pool_data') === 'c9758e1289dcaa5cbeac3711e9672908459e6a227300578f95e5359e008b2cbf'
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
  get asV25(): {poolId: Uint8Array, poolOwner: (Uint8Array | undefined), start: (number | undefined), end: (number | undefined), initialWeight: (number | undefined), finalWeight: (number | undefined), fee: (v25.Fee | undefined), feeCollector: (Uint8Array | undefined)} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
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
  get asV38(): {poolId: Uint8Array, poolOwner: (Uint8Array | undefined), start: (number | undefined), end: (number | undefined), initialWeight: (number | undefined), finalWeight: (number | undefined), fee: ([number, number] | undefined), feeCollector: (Uint8Array | undefined), repayTarget: (bigint | undefined)} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningAddLiquidityPoolCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.add_liquidity_pool')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Add liquidity pool to farm and allow yield farming for given `asset_pair` amm.
   *  
   * Only farm owner can perform this action.
   * 
   * Only AMMs with `asset_pair` with `incentivized_asset` can be added into the farm. AMM
   * for `asset_pair` has to exist to successfully add liq. pool to the farm. Same AMM can
   * in the same farm only once.
   * 
   * Parameters:
   * - `farm_id`: farm id to which a liq. pool will be added.
   * - `asset_pair`: asset pair identifying liq. pool. Liq. mining will be allowed for this
   * `asset_pair` and one of the assets in the pair must be `incentivized_asset`.
   * - `multiplier`: liq. pool multiplier in the farm.
   * - `loyalty_curve`: curve to calculate loyalty multiplier to distribute rewards to users
   * with time incentive. `None` means no loyalty multiplier.
   * 
   * Emits `LiquidityPoolAdded` event when successful.
   */
  get isV43(): boolean {
    return this._chain.getCallHash('LiquidityMining.add_liquidity_pool') === '3acd5d759d60d7203785c344bf3e2ee690d8d56406083e9a129d35f419062980'
  }

  /**
   * Add liquidity pool to farm and allow yield farming for given `asset_pair` amm.
   *  
   * Only farm owner can perform this action.
   * 
   * Only AMMs with `asset_pair` with `incentivized_asset` can be added into the farm. AMM
   * for `asset_pair` has to exist to successfully add liq. pool to the farm. Same AMM can
   * in the same farm only once.
   * 
   * Parameters:
   * - `farm_id`: farm id to which a liq. pool will be added.
   * - `asset_pair`: asset pair identifying liq. pool. Liq. mining will be allowed for this
   * `asset_pair` and one of the assets in the pair must be `incentivized_asset`.
   * - `multiplier`: liq. pool multiplier in the farm.
   * - `loyalty_curve`: curve to calculate loyalty multiplier to distribute rewards to users
   * with time incentive. `None` means no loyalty multiplier.
   * 
   * Emits `LiquidityPoolAdded` event when successful.
   */
  get asV43(): {farmId: number, assetPair: v43.AssetPair, multiplier: bigint, loyaltyCurve: (v43.LoyaltyCurve | undefined)} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningCancelLiquidityPoolCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.cancel_liquidity_pool')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel liq. miming for specific liq. pool.
   * 
   * This function claims rewards from `GlobalPool` last time and stops liq. pool
   * incentivization from a `GlobalPool`. Users will be able to only withdraw
   * shares(with claiming) after calling this function.
   * `deposit_shares()` and `claim_rewards()` are not allowed on canceled liq. pool.
   *  
   * Only farm owner can perform this action.
   * 
   * Parameters:
   * - `farm_id`: farm id in which liq. pool will be canceled.
   * - `asset_pair`: asset pair identifying liq. pool in the farm.
   * 
   * Emits `LiquidityMiningCanceled` event when successful.
   */
  get isV43(): boolean {
    return this._chain.getCallHash('LiquidityMining.cancel_liquidity_pool') === 'd9d4fdd576aff898bc808f8fda35f8b0274f3f303fc1c0b0e10e479ad4e91395'
  }

  /**
   * Cancel liq. miming for specific liq. pool.
   * 
   * This function claims rewards from `GlobalPool` last time and stops liq. pool
   * incentivization from a `GlobalPool`. Users will be able to only withdraw
   * shares(with claiming) after calling this function.
   * `deposit_shares()` and `claim_rewards()` are not allowed on canceled liq. pool.
   *  
   * Only farm owner can perform this action.
   * 
   * Parameters:
   * - `farm_id`: farm id in which liq. pool will be canceled.
   * - `asset_pair`: asset pair identifying liq. pool in the farm.
   * 
   * Emits `LiquidityMiningCanceled` event when successful.
   */
  get asV43(): {farmId: number, assetPair: v43.AssetPair} {
    assert(this.isV43)
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
   * WARN: User have to use `withdraw_shares()` if liq. pool is canceled, removed or whole
   * farm is destroyed.
   * 
   * Parameters:
   * - `origin`: account owner of deposit(nft).
   * - `nft_id`: nft id representing deposit in the liq. pool.
   * 
   * Emits `RewardClaimed` event when successful.
   */
  get isV43(): boolean {
    return this._chain.getCallHash('LiquidityMining.claim_rewards') === 'd0a2cf120a82fdc705dfe0d5901c4357b5d732d3049a5a9348189cb7710a2b66'
  }

  /**
   * Claim rewards from liq. mining for deposit represented by `nft_id`.
   * 
   * This function calculate user rewards from liq. mining and transfer rewards to `origin`
   * account. Claiming in the same period is allowed only once.
   * 
   * WARN: User have to use `withdraw_shares()` if liq. pool is canceled, removed or whole
   * farm is destroyed.
   * 
   * Parameters:
   * - `origin`: account owner of deposit(nft).
   * - `nft_id`: nft id representing deposit in the liq. pool.
   * 
   * Emits `RewardClaimed` event when successful.
   */
  get asV43(): {nftId: bigint} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningCreateFarmCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.create_farm')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Create new liquidity mining program with proved parameters.
   * 
   * `owner` account have to have at least `total_rewards` balance. This fund will be
   * transferred from `owner` to farm account.
   * 
   * The dispatch origin for this call must be `T::CreateOrigin`.
   * 
   * Parameters:
   * - `origin`: account allowed to create new liq. mining program.
   * - `total_rewards`: total rewards planned to distribute. This rewards will be
   * distributed between all liq. pools in liq. mining program.
   * - `planned_yielding_periods`: planned number of periods to distribute `total_rewards`.
   * WARN: THIS IS NOT HARD DEADLINE. Not all rewards have to be distributed in
   * `planned_yielding_periods`. Rewards are distributed based on the situation in the liq.
   * pools and can be distributed in a longer time frame but never in the shorter time frame.
   * - `blocks_per_period`:  number of blocks in a single period. Min. number of blocks per
   * period is 1.
   * - `incentivized_asset`: asset to be incentivized in AMM pools. All liq. pools added into
   * liq. mining program have to have `incentivized_asset` in their pair.
   * - `reward_currency`: payoff currency of rewards.
   * - `owner`: liq. mining farm owner.
   * - `yield_per_period`: percentage return on `reward_currency` of all pools p.a.
   * 
   * Emits `FarmCreated` event when successful.
   */
  get isV43(): boolean {
    return this._chain.getCallHash('LiquidityMining.create_farm') === '858f554b8fa3e1c43e501ae9b3688f59d6edfb17b97f1873465a21930eabb949'
  }

  /**
   * Create new liquidity mining program with proved parameters.
   * 
   * `owner` account have to have at least `total_rewards` balance. This fund will be
   * transferred from `owner` to farm account.
   * 
   * The dispatch origin for this call must be `T::CreateOrigin`.
   * 
   * Parameters:
   * - `origin`: account allowed to create new liq. mining program.
   * - `total_rewards`: total rewards planned to distribute. This rewards will be
   * distributed between all liq. pools in liq. mining program.
   * - `planned_yielding_periods`: planned number of periods to distribute `total_rewards`.
   * WARN: THIS IS NOT HARD DEADLINE. Not all rewards have to be distributed in
   * `planned_yielding_periods`. Rewards are distributed based on the situation in the liq.
   * pools and can be distributed in a longer time frame but never in the shorter time frame.
   * - `blocks_per_period`:  number of blocks in a single period. Min. number of blocks per
   * period is 1.
   * - `incentivized_asset`: asset to be incentivized in AMM pools. All liq. pools added into
   * liq. mining program have to have `incentivized_asset` in their pair.
   * - `reward_currency`: payoff currency of rewards.
   * - `owner`: liq. mining farm owner.
   * - `yield_per_period`: percentage return on `reward_currency` of all pools p.a.
   * 
   * Emits `FarmCreated` event when successful.
   */
  get asV43(): {totalRewards: bigint, plannedYieldingPeriods: number, blocksPerPeriod: number, incentivizedAsset: number, rewardCurrency: number, owner: Uint8Array, yieldPerPeriod: number} {
    assert(this.isV43)
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
   * - `farm_id`: id of farm to which user want to deposit LP shares.
   * - `asset_pair`: asset pair identifying LP shares user want to deposit.
   * - `shares_amount`: amount of LP shares user want to deposit.
   * 
   * Emits `SharesDeposited` event when successful.
   */
  get isV43(): boolean {
    return this._chain.getCallHash('LiquidityMining.deposit_shares') === '0b0bf636f26c22103825da6cfe92f6acbb6cee4d4ae3238eca442f558e58bc81'
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
   * - `farm_id`: id of farm to which user want to deposit LP shares.
   * - `asset_pair`: asset pair identifying LP shares user want to deposit.
   * - `shares_amount`: amount of LP shares user want to deposit.
   * 
   * Emits `SharesDeposited` event when successful.
   */
  get asV43(): {farmId: number, assetPair: v43.AssetPair, sharesAmount: bigint} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningDestroyFarmCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.destroy_farm')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Destroy existing liq. mining program.
   * 
   * Only farm owner can perform this action.
   * 
   * WARN: To successfully destroy a farm, farm have to be empty(all liq. pools have to be
   * removed from the farm) and all undistributed rewards have to be withdrawn.
   * 
   * Parameters:
   * - `farm_id`: id of farm to be destroyed.
   * 
   * Emits `FarmDestroyed` event when successful.
   */
  get isV43(): boolean {
    return this._chain.getCallHash('LiquidityMining.destroy_farm') === 'aed136ad19076af5369692d9d87fc0904bec288537324ee96c30bd1667f8242e'
  }

  /**
   * Destroy existing liq. mining program.
   * 
   * Only farm owner can perform this action.
   * 
   * WARN: To successfully destroy a farm, farm have to be empty(all liq. pools have to be
   * removed from the farm) and all undistributed rewards have to be withdrawn.
   * 
   * Parameters:
   * - `farm_id`: id of farm to be destroyed.
   * 
   * Emits `FarmDestroyed` event when successful.
   */
  get asV43(): {farmId: number} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningRemoveLiquidityPoolCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.remove_liquidity_pool')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove liq. pool for a farm.
   * 
   * This function remove liq. pool from the farm and also from storage. Users will be able to
   * only withdraw shares(without claiming rewards from liq. mining). Unpaid rewards will be
   * transferred back to farm(`GlobalPool`) account and will be used to distribute to other
   * liq. pools in the farm.
   * 
   * Liq. pool must be canceled before calling this function.
   * 
   * Only farm owner can perform this action.
   * 
   * Parameters:
   * - `farm_id`: farm id from which liq. pool should be removed.
   * - `asset_pair`: asset pair identifying liq. pool in the farm.
   * 
   * Emits `LiquidityPoolRemoved` event when successful.
   */
  get isV43(): boolean {
    return this._chain.getCallHash('LiquidityMining.remove_liquidity_pool') === 'd9d4fdd576aff898bc808f8fda35f8b0274f3f303fc1c0b0e10e479ad4e91395'
  }

  /**
   * Remove liq. pool for a farm.
   * 
   * This function remove liq. pool from the farm and also from storage. Users will be able to
   * only withdraw shares(without claiming rewards from liq. mining). Unpaid rewards will be
   * transferred back to farm(`GlobalPool`) account and will be used to distribute to other
   * liq. pools in the farm.
   * 
   * Liq. pool must be canceled before calling this function.
   * 
   * Only farm owner can perform this action.
   * 
   * Parameters:
   * - `farm_id`: farm id from which liq. pool should be removed.
   * - `asset_pair`: asset pair identifying liq. pool in the farm.
   * 
   * Emits `LiquidityPoolRemoved` event when successful.
   */
  get asV43(): {farmId: number, assetPair: v43.AssetPair} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningResumeLiquidityPoolCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.resume_liquidity_pool')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Resume liq. miming for canceled liq. pool.
   * 
   * This function resume incentivization from `GlobalPool` and restore full functionality
   * for liq. pool. Users will be able to deposit, claim and withdraw again.
   * 
   * WARN: Liq. pool is NOT rewarded for time it was canceled.
   * 
   * Only farm owner can perform this action.
   * 
   * Parameters:
   * - `farm_id`: farm id in which liq. pool will be resumed.
   * - `asset_pair`: asset pair identifying liq. pool in the farm.
   * - `multiplier`: liq. pool multiplier in the farm.
   * 
   * Emits `LiquidityMiningResumed` event when successful.
   */
  get isV43(): boolean {
    return this._chain.getCallHash('LiquidityMining.resume_liquidity_pool') === 'cc0b174e857676b7067e1415a85a3715f98d10270c13e59894130b3630dc27a4'
  }

  /**
   * Resume liq. miming for canceled liq. pool.
   * 
   * This function resume incentivization from `GlobalPool` and restore full functionality
   * for liq. pool. Users will be able to deposit, claim and withdraw again.
   * 
   * WARN: Liq. pool is NOT rewarded for time it was canceled.
   * 
   * Only farm owner can perform this action.
   * 
   * Parameters:
   * - `farm_id`: farm id in which liq. pool will be resumed.
   * - `asset_pair`: asset pair identifying liq. pool in the farm.
   * - `multiplier`: liq. pool multiplier in the farm.
   * 
   * Emits `LiquidityMiningResumed` event when successful.
   */
  get asV43(): {farmId: number, assetPair: v43.AssetPair, multiplier: bigint} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningUpdateLiquidityPoolCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.update_liquidity_pool')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Update liquidity pool multiplier.
   *  
   * Only farm owner can perform this action.
   * 
   * Parameters:
   * - `farm_id`: farm id in which liq. pool will be updated.
   * - `asset_pair`: asset pair identifying liq. pool in farm.
   * - `multiplier`: new liq. pool multiplier in the farm.
   * 
   * Emits `LiquidityPoolUpdated` event when successful.
   */
  get isV43(): boolean {
    return this._chain.getCallHash('LiquidityMining.update_liquidity_pool') === 'cc0b174e857676b7067e1415a85a3715f98d10270c13e59894130b3630dc27a4'
  }

  /**
   * Update liquidity pool multiplier.
   *  
   * Only farm owner can perform this action.
   * 
   * Parameters:
   * - `farm_id`: farm id in which liq. pool will be updated.
   * - `asset_pair`: asset pair identifying liq. pool in farm.
   * - `multiplier`: new liq. pool multiplier in the farm.
   * 
   * Emits `LiquidityPoolUpdated` event when successful.
   */
  get asV43(): {farmId: number, assetPair: v43.AssetPair, multiplier: bigint} {
    assert(this.isV43)
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
   * * liq. mining is active(liq. pool is not canceled) - claim and transfer rewards(if it
   * wasn't claimed in this period) and transfer LP shares.
   * * liq. mining is canceled - claim and transfer rewards(if it
   * wasn't claimed in this period) and transfer LP shares.
   * * liq. pool was removed - only LP shares will be transferred.
   * * farm was destroyed - only LP shares will be transferred.
   * * SPECIAL CASE: AMM pool does not exist - claiming based on liq. pool/farm state, LP
   * shares will not be transfered.
   * 
   * This function transfer user's unclaimable rewards back to global pool's account.
   * 
   * Parameters:
   * - `origin`: account owner of deposit(nft).
   * - `nft_id`: nft id representing deposit in the liq. pool.
   * 
   * Emits:
   * * `RewardClaimed` if claim happen
   * * `SharesWithdrawn` event when successful
   */
  get isV43(): boolean {
    return this._chain.getCallHash('LiquidityMining.withdraw_shares') === 'd0a2cf120a82fdc705dfe0d5901c4357b5d732d3049a5a9348189cb7710a2b66'
  }

  /**
   * Withdraw LP shares from liq. mining. with reward claiming if possible.
   * 
   * Cases for transfer LP shares and claimed rewards:
   * 
   * * liq. mining is active(liq. pool is not canceled) - claim and transfer rewards(if it
   * wasn't claimed in this period) and transfer LP shares.
   * * liq. mining is canceled - claim and transfer rewards(if it
   * wasn't claimed in this period) and transfer LP shares.
   * * liq. pool was removed - only LP shares will be transferred.
   * * farm was destroyed - only LP shares will be transferred.
   * * SPECIAL CASE: AMM pool does not exist - claiming based on liq. pool/farm state, LP
   * shares will not be transfered.
   * 
   * This function transfer user's unclaimable rewards back to global pool's account.
   * 
   * Parameters:
   * - `origin`: account owner of deposit(nft).
   * - `nft_id`: nft id representing deposit in the liq. pool.
   * 
   * Emits:
   * * `RewardClaimed` if claim happen
   * * `SharesWithdrawn` event when successful
   */
  get asV43(): {nftId: bigint} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
  }
}

export class LiquidityMiningWithdrawUndistributedRewardsCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'LiquidityMining.withdraw_undistributed_rewards')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer all rewards left to distribute from farm account to farm's `owner` account.
   *  
   * Only farm owner can perform this action.
   * 
   * WARN: Farm have to be empty(all liq. pools have to be removed for the farm) to
   * successfully withdraw rewards left to distribute from the farm.
   * 
   * Parameters:
   * - `farm_id`: id of farm to be destroyed.
   * 
   * Emits `UndistributedRewardsWithdrawn` event when successful.
   */
  get isV43(): boolean {
    return this._chain.getCallHash('LiquidityMining.withdraw_undistributed_rewards') === 'aed136ad19076af5369692d9d87fc0904bec288537324ee96c30bd1667f8242e'
  }

  /**
   * Transfer all rewards left to distribute from farm account to farm's `owner` account.
   *  
   * Only farm owner can perform this action.
   * 
   * WARN: Farm have to be empty(all liq. pools have to be removed for the farm) to
   * successfully withdraw rewards left to distribute from the farm.
   * 
   * Parameters:
   * - `farm_id`: id of farm to be destroyed.
   * 
   * Emits `UndistributedRewardsWithdrawn` event when successful.
   */
  get asV43(): {farmId: number} {
    assert(this.isV43)
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
  get isV43(): boolean {
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
  get asV43(): {classId: bigint, instanceId: bigint, maker: Uint8Array} {
    assert(this.isV43)
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
   * - `royalty`: Percentage reward from each trade for the author
   */
  get isV43(): boolean {
    return this._chain.getCallHash('Marketplace.add_royalty') === '6bac2944b8cf035005b88ae73355bbd3f533e8fb8e1732001a4d3adfcd1ca04d'
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
  get asV43(): {classId: bigint, instanceId: bigint, author: Uint8Array, royalty: number} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
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
  get isV76(): boolean {
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
  get asV76(): {classId: bigint, instanceId: bigint, author: Uint8Array, royalty: number} {
    assert(this.isV76)
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
  get isV43(): boolean {
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
  get asV43(): {classId: bigint, instanceId: bigint} {
    assert(this.isV43)
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
  get isV43(): boolean {
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
  get asV43(): {classId: bigint, instanceId: bigint, amount: bigint, expires: number} {
    assert(this.isV43)
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
  get isV43(): boolean {
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
  get asV43(): {classId: bigint, instanceId: bigint, newPrice: (bigint | undefined)} {
    assert(this.isV43)
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
  get isV43(): boolean {
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
  get asV43(): {classId: bigint, instanceId: bigint, maker: Uint8Array} {
    assert(this.isV43)
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
   *  Add a currency to the list of accepted currencies.
   * 
   *  Only member can perform this action.
   * 
   *  Currency must not be already accepted. Core asset id cannot be explicitly added.
   * 
   *  Emits `CurrencyAdded` event when successful.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('MultiTransactionPayment.add_currency') === '13125ec4790da3a904a34273acd08b2e8e32d1bf678dd213a2f092ab76db8c15'
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
  get asV16(): {currency: number, price: bigint} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiTransactionPaymentAddMemberCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiTransactionPayment.add_member')
    this._chain = ctx._chain
    this.call = call
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
  get isV16(): boolean {
    return this._chain.getCallHash('MultiTransactionPayment.add_member') === '13de6e9f12582c043401d65d7388be083b4b273c04f13f132e51e1f673bee999'
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
  get asV16(): {member: Uint8Array} {
    assert(this.isV16)
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
   *  Remove currency from the list of supported currencies
   *  Only selected members can perform this action
   * 
   *  Core asset cannot be removed.
   * 
   *  Emits `CurrencyRemoved` when successful.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('MultiTransactionPayment.remove_currency') === '6f30827fd1d3f25813ac86311eb2a11bef512c91dba46a2d0279d52ddf3b5cc9'
  }

  /**
   *  Remove currency from the list of supported currencies
   *  Only selected members can perform this action
   * 
   *  Core asset cannot be removed.
   * 
   *  Emits `CurrencyRemoved` when successful.
   */
  get asV16(): {currency: number} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiTransactionPaymentRemoveMemberCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiTransactionPayment.remove_member')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Rmove account from list of authorities who can manage list of accepted currencies
   * 
   *  Only root can be perform this action.
   * 
   *  Emits `MemberRemoved` when successful.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('MultiTransactionPayment.remove_member') === '13de6e9f12582c043401d65d7388be083b4b273c04f13f132e51e1f673bee999'
  }

  /**
   *  Rmove account from list of authorities who can manage list of accepted currencies
   * 
   *  Only root can be perform this action.
   * 
   *  Emits `MemberRemoved` when successful.
   */
  get asV16(): {member: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('MultiTransactionPayment.set_currency') === '6f30827fd1d3f25813ac86311eb2a11bef512c91dba46a2d0279d52ddf3b5cc9'
  }

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
  get asV16(): {currency: number} {
    assert(this.isV16)
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
  get isV55(): boolean {
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
  get asV55(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v55.Timepoint | undefined), callHash: Uint8Array, maxWeight: bigint} {
    assert(this.isV55)
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
  get isV55(): boolean {
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
  get asV55(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v55.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: bigint} {
    assert(this.isV55)
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
  get isV55(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '241b6a75b0d2e33b6cdd2f84df7236c81a59f38c78124825656ed96cdd2ff097'
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
  get asV55(): {otherSignatories: Uint8Array[], call: v55.Call} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
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
  get isV65(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '499d59cdf92f076e417256e749038bbc9d5f1fd6c3701673eca44a0d5cc0f52b'
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
  get asV65(): {otherSignatories: Uint8Array[], call: v65.Call} {
    assert(this.isV65)
    return this._chain.decodeCall(this.call)
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
  get isV69(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'bb58d4e5cb0ef8d3dff4357630afb18307408313c3648116c5eb4af5f687003e'
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
  get asV69(): {otherSignatories: Uint8Array[], call: v69.Call} {
    assert(this.isV69)
    return this._chain.decodeCall(this.call)
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
  get isV76(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '489c876bc58083e6c8c9402a1685b3c960fbcff96402999126e8ff8bbcacfac6'
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
  get asV76(): {otherSignatories: Uint8Array[], call: v76.Call} {
    assert(this.isV76)
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
  get isV55(): boolean {
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
  get asV55(): {threshold: number, otherSignatories: Uint8Array[], timepoint: v55.Timepoint, callHash: Uint8Array} {
    assert(this.isV55)
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
   *  Removes a token from existence
   * 
   *  Parameters:
   *  - `token`: unique identificator of a token
   */
  get isV16(): boolean {
    return this._chain.getCallHash('NFT.burn') === 'd4a31d025a70ec8537a62f5fd5173f0bfa6f4322a698d69271b4d303ebc06e21'
  }

  /**
   *  Removes a token from existence
   * 
   *  Parameters:
   *  - `token`: unique identificator of a token
   */
  get asV16(): {token: [bigint, bigint]} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Removes a token from existence
   * 
   * Parameters:
   * - `class_id`: The class of the asset to be burned.
   * - `instance_id`: The instance of the asset to be burned.
   */
  get isV38(): boolean {
    return this._chain.getCallHash('NFT.burn') === '18e8e90d1b8337d9cb9adb4e591fd4023ae1d770742db60369ff7818b78184cf'
  }

  /**
   * Removes a token from existence
   * 
   * Parameters:
   * - `class_id`: The class of the asset to be burned.
   * - `instance_id`: The instance of the asset to be burned.
   */
  get asV38(): {classId: bigint, instanceId: bigint} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
  }
}

export class NftBuyFromPoolCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'NFT.buy_from_pool')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  NFTs can be bought from a pool for a constant price
   * 
   *  Parameters:
   *  - `token`: unique identificator of a token
   */
  get isV16(): boolean {
    return this._chain.getCallHash('NFT.buy_from_pool') === 'd4a31d025a70ec8537a62f5fd5173f0bfa6f4322a698d69271b4d303ebc06e21'
  }

  /**
   *  NFTs can be bought from a pool for a constant price
   * 
   *  Parameters:
   *  - `token`: unique identificator of a token
   */
  get asV16(): {token: [bigint, bigint]} {
    assert(this.isV16)
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
   *  Creates an NFT class
   *  This is necessary as the first step, because tokens will be minted as part of this class
   *  An amount X (ClassBondAmount) is reserved
   * 
   *  Parameters:
   *  - `metadata`: Arbitrary info/description of a class
   *  - `data`: Field(s) defined in the ClassData struct
   */
  get isV16(): boolean {
    return this._chain.getCallHash('NFT.create_class') === '650f8dc99e9b88b35252f05ec502df98636519a42ce3e3f901df635f16283012'
  }

  /**
   *  Creates an NFT class
   *  This is necessary as the first step, because tokens will be minted as part of this class
   *  An amount X (ClassBondAmount) is reserved
   * 
   *  Parameters:
   *  - `metadata`: Arbitrary info/description of a class
   *  - `data`: Field(s) defined in the ClassData struct
   */
  get asV16(): {metadata: Uint8Array, data: v16.ClassData} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
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
  get asV38(): {classId: bigint, classType: v38.ClassType, metadata: Uint8Array} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
  }
}

export class NftCreatePoolCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'NFT.create_pool')
    this._chain = ctx._chain
    this.call = call
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
  get isV16(): boolean {
    return this._chain.getCallHash('NFT.create_pool') === 'd1a2231f8191bd19dc5aed6ecc273a7bbc5e40c364c24e87775ad4b568a5ae20'
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
  get asV16(): {metadata: Uint8Array, data: v16.ClassData, price: bigint} {
    assert(this.isV16)
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
   *  Removes a class from existence
   *  Returns the bond amount
   * 
   *  Parameters:
   *  - `class_id`: unique identificator of a class
   */
  get isV16(): boolean {
    return this._chain.getCallHash('NFT.destroy_class') === '20e77ecb71922bbdfaf9d84c125fc876384e28538e39c4cf5aabe61ecd52af6d'
  }

  /**
   *  Removes a class from existence
   *  Returns the bond amount
   * 
   *  Parameters:
   *  - `class_id`: unique identificator of a class
   */
  get asV16(): {classId: bigint} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Removes a class from existence
   * 
   * Parameters:
   * - `class_id`: The identifier of the asset class to be destroyed.
   */
  get isV38(): boolean {
    return this._chain.getCallHash('NFT.destroy_class') === 'd20dd3096242c6bb790f5e276ab157448db821e6055469d40fc77a4ee3490636'
  }

  /**
   * Removes a class from existence
   * 
   * Parameters:
   * - `class_id`: The identifier of the asset class to be destroyed.
   */
  get asV38(): {classId: bigint} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
  }
}

export class NftDestroyPoolCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'NFT.destroy_pool')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Removes a pool from existence
   *  Returns the bond amount
   * 
   *  Parameters:
   *  - `class_id`: unique identificator of a class
   */
  get isV16(): boolean {
    return this._chain.getCallHash('NFT.destroy_pool') === '20e77ecb71922bbdfaf9d84c125fc876384e28538e39c4cf5aabe61ecd52af6d'
  }

  /**
   *  Removes a pool from existence
   *  Returns the bond amount
   * 
   *  Parameters:
   *  - `class_id`: unique identificator of a class
   */
  get asV16(): {classId: bigint} {
    assert(this.isV16)
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
   *  NFT is minted in the specified class
   * 
   *  Parameters:
   *  - `class_id`: identificator of a class
   *  - `metadata`: Arbitrary info/description of a token
   *  - `data`: Field(s) defined in the TokenData struct
   */
  get isV16(): boolean {
    return this._chain.getCallHash('NFT.mint') === '443b12927b1a7c47065263cbc8fce683f1a3de265cac4f9e7bb0dfd893afa77d'
  }

  /**
   *  NFT is minted in the specified class
   * 
   *  Parameters:
   *  - `class_id`: identificator of a class
   *  - `metadata`: Arbitrary info/description of a token
   *  - `data`: Field(s) defined in the TokenData struct
   */
  get asV16(): {classId: bigint, metadata: Uint8Array, tokenData: v16.TokenData} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
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
  get asV38(): {classId: bigint, instanceId: bigint, metadata: Uint8Array} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
  }
}

export class NftSellToPoolCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'NFT.sell_to_pool')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Owned NFTs can be sold back to the pool for the original price
   * 
   *  Parameters:
   *  - `token`: unique identificator of a token
   */
  get isV16(): boolean {
    return this._chain.getCallHash('NFT.sell_to_pool') === 'd4a31d025a70ec8537a62f5fd5173f0bfa6f4322a698d69271b4d303ebc06e21'
  }

  /**
   *  Owned NFTs can be sold back to the pool for the original price
   * 
   *  Parameters:
   *  - `token`: unique identificator of a token
   */
  get asV16(): {token: [bigint, bigint]} {
    assert(this.isV16)
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
   *  Transfers NFT from account A to account B
   *  Only the owner can send their NFT to another account
   * 
   *  Parameters:
   *  - `dest`: The destination account a token will be sent to
   *  - `token`: unique identificator of a token
   */
  get isV16(): boolean {
    return this._chain.getCallHash('NFT.transfer') === '498c59857d4ad6a6d090de96aa6446526b9a2de27b9de9e35aac0c81d1a8977a'
  }

  /**
   *  Transfers NFT from account A to account B
   *  Only the owner can send their NFT to another account
   * 
   *  Parameters:
   *  - `dest`: The destination account a token will be sent to
   *  - `token`: unique identificator of a token
   */
  get asV16(): {dest: Uint8Array, token: [bigint, bigint]} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
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
  get asV38(): {classId: bigint, instanceId: bigint, dest: Uint8Array} {
    assert(this.isV38)
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
  get isV38(): boolean {
    return this._chain.getCallHash('OrmlXcm.send_as_sovereign') === '3ca4beb317aeed3e0a00ae870ffd3bef841bb6f4e766db0b286c7fc5d8eef886'
  }

  /**
   * Send an XCM message as parachain sovereign.
   */
  get asV38(): {dest: v38.VersionedMultiLocation, message: v38.VersionedXcm} {
    assert(this.isV38)
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

  get isV16(): boolean {
    return this._chain.getCallHash('ParachainSystem.authorize_upgrade') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
  }

  get asV16(): {codeHash: Uint8Array} {
    assert(this.isV16)
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

  get isV16(): boolean {
    return this._chain.getCallHash('ParachainSystem.enact_authorized_upgrade') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
  }

  get asV16(): {code: Uint8Array} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemSetUpgradeBlockCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.set_upgrade_block')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   *  Force an already scheduled validation function upgrade to happen on a particular block.
   * 
   *  Note that coordinating this block for the upgrade has to happen independently on the
   *  relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
   *  and this bypasses all checks and and normal protocols. Very easy to brick your chain
   *  if done wrong.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('ParachainSystem.set_upgrade_block') === '4552b4c9a331e27653dd826226a620c7ef63c4af553ba86f11cdfd63fb1b1028'
  }

  /**
   *  Force an already scheduled validation function upgrade to happen on a particular block.
   * 
   *  Note that coordinating this block for the upgrade has to happen independently on the
   *  relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
   *  and this bypasses all checks and and normal protocols. Very easy to brick your chain
   *  if done wrong.
   */
  get asV16(): {relayChainBlock: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('ParachainSystem.set_validation_data') === '22ec3fbecbfd95518ed01cc8bea79e7382fdee331e8c2bc72c401a6985444f34'
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
  get asV16(): {data: v16.ParachainInherentData} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
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
  get asV25(): {data: v25.ParachainInherentData} {
    assert(this.isV25)
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

  get isV16(): boolean {
    return this._chain.getCallHash('ParachainSystem.sudo_send_upward_message') === '34457b6daded32ddc4ec3a5a21e34b9af8dcd7d190a5a7833fa8a7ed53b31206'
  }

  get asV16(): {message: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('PolkadotXcm.execute') === '6b0d22c87d1e94810a244d87b54fef72ce8f46738d07a69db5b02ca4f5d6628c'
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
  get asV16(): {message: v16.Xcm, maxWeight: bigint} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV19(): boolean {
    return this._chain.getCallHash('PolkadotXcm.execute') === 'e84234db9011cc6f7564dd781f1d6a281bda863b7b71f5cab9c8114345416f0a'
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
  get asV19(): {message: v19.VersionedXcm, maxWeight: bigint} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
    return this._chain.getCallHash('PolkadotXcm.execute') === '41f7d0295efed5db73229cbd1e9f1fdc0e7f9e159af3b17a10880e74bcdb3ad4'
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
  get asV25(): {message: v25.Type_209, maxWeight: bigint} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
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
  get asV38(): {message: v38.Type_233, maxWeight: bigint} {
    assert(this.isV38)
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
  get isV25(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_default_xcm_version') === 'd4bcd64cc4c940eafd14296ec6cbfb7d27e4ca42a4c7dab4c0b89f6c8102257e'
  }

  /**
   * Set a safe XCM version (the version that XCM should be encoded with if the most recent
   * version a destination can accept is unknown).
   * 
   * - `origin`: Must be Root.
   * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
   */
  get asV25(): {maybeXcmVersion: (number | undefined)} {
    assert(this.isV25)
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
  get isV25(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_subscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
  }

  /**
   * Ask a location to notify us regarding their XCM version and any changes to it.
   * 
   * - `origin`: Must be Root.
   * - `location`: The location to which we should subscribe for XCM version notifications.
   */
  get asV25(): {location: v25.VersionedMultiLocation} {
    assert(this.isV25)
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
  get isV25(): boolean {
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
  get asV25(): {location: v25.VersionedMultiLocation} {
    assert(this.isV25)
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
  get isV25(): boolean {
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
  get asV25(): {location: v25.V1MultiLocation, xcmVersion: number} {
    assert(this.isV25)
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
  get isV25(): boolean {
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
  get asV25(): {dest: v25.VersionedMultiLocation, beneficiary: v25.VersionedMultiLocation, assets: v25.VersionedMultiAssets, feeAssetItem: number, weightLimit: v25.V2WeightLimit} {
    assert(this.isV25)
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
   * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
   */
  get isV25(): boolean {
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
   * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
   */
  get asV25(): {dest: v25.VersionedMultiLocation, beneficiary: v25.VersionedMultiLocation, assets: v25.VersionedMultiAssets, feeAssetItem: number, weightLimit: v25.V2WeightLimit} {
    assert(this.isV25)
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
  get isV16(): boolean {
    return this._chain.getCallHash('PolkadotXcm.reserve_transfer_assets') === '774ab6f7f10a0a74a84b5705dc885bc7aeca80d91bde94a0e0faabe4d06ecdf1'
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
  get asV16(): {dest: v16.MultiLocation, beneficiary: v16.MultiLocation, assets: v16.MultiAsset[], destWeight: bigint} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
   *    `ReserveAssetDeposited { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get isV19(): boolean {
    return this._chain.getCallHash('PolkadotXcm.reserve_transfer_assets') === '1626a7b3bf7048e3565b3a4ce4400cb7f4a23aa1a7a30bb99a107cf0b4d75ffa'
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
   *    `ReserveAssetDeposited { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get asV19(): {dest: v19.VersionedMultiLocation, beneficiary: v19.VersionedMultiLocation, assets: v19.VersionedMultiAssets, feeAssetItem: number, destWeight: bigint} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
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
  get asV25(): {dest: v25.VersionedMultiLocation, beneficiary: v25.VersionedMultiLocation, assets: v25.VersionedMultiAssets, feeAssetItem: number} {
    assert(this.isV25)
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

  get isV16(): boolean {
    return this._chain.getCallHash('PolkadotXcm.send') === 'ae04c3d41058ff29d7d3fe0c53f3e3363779a7166edfc4ef9ff47453f484a7dd'
  }

  get asV16(): {dest: v16.MultiLocation, message: v16.Xcm} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  get isV19(): boolean {
    return this._chain.getCallHash('PolkadotXcm.send') === '543a76c164d443cb4ad905107237af6cd5f45b7b0eadeb1374266d3cb09564df'
  }

  get asV19(): {dest: v19.VersionedMultiLocation, message: v19.VersionedXcm} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
  }

  get isV25(): boolean {
    return this._chain.getCallHash('PolkadotXcm.send') === '9ec4149ae6cee6240a6e2aa06a8ef90285e68be29dd0de109b35af7922311609'
  }

  get asV25(): {dest: v25.VersionedMultiLocation, message: v25.VersionedXcm} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
  }

  get isV38(): boolean {
    return this._chain.getCallHash('PolkadotXcm.send') === '3ca4beb317aeed3e0a00ae870ffd3bef841bb6f4e766db0b286c7fc5d8eef886'
  }

  get asV38(): {dest: v38.VersionedMultiLocation, message: v38.VersionedXcm} {
    assert(this.isV38)
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
  get isV16(): boolean {
    return this._chain.getCallHash('PolkadotXcm.teleport_assets') === '774ab6f7f10a0a74a84b5705dc885bc7aeca80d91bde94a0e0faabe4d06ecdf1'
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
  get asV16(): {dest: v16.MultiLocation, beneficiary: v16.MultiLocation, assets: v16.MultiAsset[], destWeight: bigint} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
   *  - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *    `dest` side. May not be empty.
   *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *    `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get isV19(): boolean {
    return this._chain.getCallHash('PolkadotXcm.teleport_assets') === '1626a7b3bf7048e3565b3a4ce4400cb7f4a23aa1a7a30bb99a107cf0b4d75ffa'
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
   *  - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *    `dest` side. May not be empty.
   *  - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *    `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get asV19(): {dest: v19.VersionedMultiLocation, beneficiary: v19.VersionedMultiLocation, assets: v19.VersionedMultiAssets, feeAssetItem: number, destWeight: bigint} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
   * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get isV25(): boolean {
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
   * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get asV25(): {dest: v25.VersionedMultiLocation, beneficiary: v25.VersionedMultiLocation, assets: v25.VersionedMultiAssets, feeAssetItem: number} {
    assert(this.isV25)
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
  get isV38(): boolean {
    return this._chain.getCallHash('Preimage.note_preimage') === 'fb6f9f7fd683160ab20dcde42ca8f757bc13845dc544f497e534fcf19c270a46'
  }

  /**
   * Register a preimage on-chain.
   * 
   * If the preimage was previously requested, no fees or deposits are taken for providing
   * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
   */
  get asV38(): {bytes: Uint8Array} {
    assert(this.isV38)
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
  get isV38(): boolean {
    return this._chain.getCallHash('Preimage.request_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * Request a preimage be uploaded to the chain without paying any fees or deposits.
   * 
   * If the preimage requests has already been provided on-chain, we unreserve any deposit
   * a user may have paid, and take the control of the preimage out of their hands.
   */
  get asV38(): {hash: Uint8Array} {
    assert(this.isV38)
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
  get isV38(): boolean {
    return this._chain.getCallHash('Preimage.unnote_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * Clear an unrequested preimage from the runtime storage.
   */
  get asV38(): {hash: Uint8Array} {
    assert(this.isV38)
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
  get isV38(): boolean {
    return this._chain.getCallHash('Preimage.unrequest_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * Clear a previously made request for a preimage.
   * 
   * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
   */
  get asV38(): {hash: Uint8Array} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {delegate: Uint8Array, proxyType: v38.ProxyType, delay: number} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {real: Uint8Array, callHash: Uint8Array} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {proxyType: v38.ProxyType, delay: number, index: number} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {spawner: Uint8Array, proxyType: v38.ProxyType, index: number, height: number, extIndex: number} {
    assert(this.isV38)
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
  get isV38(): boolean {
    return this._chain.getCallHash('Proxy.proxy') === 'b2abfad3e505dcd9e3591cda1a5f559b3e0670176b71f4de7a7f643782952359'
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
  get asV38(): {real: Uint8Array, forceProxyType: (v38.ProxyType | undefined), call: v38.Call} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
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
  get isV43(): boolean {
    return this._chain.getCallHash('Proxy.proxy') === 'dea684944718f71c690bd3404fae83ec74f65b6c2593c4439ec060b8aa6e3f91'
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
  get asV43(): {real: Uint8Array, forceProxyType: (v43.ProxyType | undefined), call: v43.Call} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
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
  get isV55(): boolean {
    return this._chain.getCallHash('Proxy.proxy') === '3118d7f6c1f86f03066e6ab05e11fc6475280040b3e8d975cfa1cee87565eda6'
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
  get asV55(): {real: Uint8Array, forceProxyType: (v55.ProxyType | undefined), call: v55.Call} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
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
  get isV65(): boolean {
    return this._chain.getCallHash('Proxy.proxy') === 'c413e824ee32af4aab57abd56774128d14c45b389d3131ebb19912878dfe6a24'
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
  get asV65(): {real: Uint8Array, forceProxyType: (v65.ProxyType | undefined), call: v65.Call} {
    assert(this.isV65)
    return this._chain.decodeCall(this.call)
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
  get isV69(): boolean {
    return this._chain.getCallHash('Proxy.proxy') === '1d5c47999767651f02048b4ae07de84c4c335fea0dcd8638f2527adbc7072111'
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
  get asV69(): {real: Uint8Array, forceProxyType: (v69.ProxyType | undefined), call: v69.Call} {
    assert(this.isV69)
    return this._chain.decodeCall(this.call)
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
  get isV76(): boolean {
    return this._chain.getCallHash('Proxy.proxy') === 'cf0752b6f95b516d75eb6aa9e5aa5a53cbd59547e82b47c93edaaf773939ddcc'
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
  get asV76(): {real: Uint8Array, forceProxyType: (v76.ProxyType | undefined), call: v76.Call} {
    assert(this.isV76)
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
  get isV38(): boolean {
    return this._chain.getCallHash('Proxy.proxy_announced') === 'a6b3016af596b9c6596e945e2076bf2c5a0c1d12cdaaf337671d2326c70c800a'
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
  get asV38(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v38.ProxyType | undefined), call: v38.Call} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
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
  get isV43(): boolean {
    return this._chain.getCallHash('Proxy.proxy_announced') === '9e3df1f6c3759e51be3cdd610bc7453ad18a31a97f5d28b2fc006bbe760603e1'
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
  get asV43(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v43.ProxyType | undefined), call: v43.Call} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
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
  get isV55(): boolean {
    return this._chain.getCallHash('Proxy.proxy_announced') === '21ad86507c88e4f31e95467d95b9e95264cdf87ec7f04722b51578cdd3d71b63'
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
  get asV55(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v55.ProxyType | undefined), call: v55.Call} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
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
  get isV65(): boolean {
    return this._chain.getCallHash('Proxy.proxy_announced') === '942c9e840462f4dd614646f18cabcca1ce45bec6c301cc0392362ca979af9d5e'
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
  get asV65(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v65.ProxyType | undefined), call: v65.Call} {
    assert(this.isV65)
    return this._chain.decodeCall(this.call)
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
  get isV69(): boolean {
    return this._chain.getCallHash('Proxy.proxy_announced') === '391a6a9f281c3d2622ae8667817ae4058c6c314dc9ccce13baf40dd545d13aa6'
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
  get asV69(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v69.ProxyType | undefined), call: v69.Call} {
    assert(this.isV69)
    return this._chain.decodeCall(this.call)
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
  get isV76(): boolean {
    return this._chain.getCallHash('Proxy.proxy_announced') === 'e52fbc9658f1329707a23f5bb9524a9bd63b1ac35af586f44ade429890f16db1'
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
  get asV76(): {delegate: Uint8Array, real: Uint8Array, forceProxyType: (v76.ProxyType | undefined), call: v76.Call} {
    assert(this.isV76)
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
  get isV38(): boolean {
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
  get asV38(): {delegate: Uint8Array, callHash: Uint8Array} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {real: Uint8Array, callHash: Uint8Array} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): null {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {delegate: Uint8Array, proxyType: v38.ProxyType, delay: number} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
  }
}

export class RouterBuyCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Router.buy')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Executes a buy with a series of trades specified in the route.
   * The price for each trade is determined by the corresponding AMM.
   * 
   * - `origin`: The executor of the trade
   * - `asset_in`: The identifier of the asset to be swapped to buy `asset_out`
   * - `asset_out`: The identifier of the asset to buy
   * - `amount_out`: The amount of `asset_out` to buy
   * - `max_amount_in`: The max amount of `asset_in` to spend on the buy.
   * - `route`: Series of [`Trade<AssetId>`] to be executed. A [`Trade<AssetId>`] specifies the asset pair (`asset_in`, `asset_out`) and the AMM (`pool`) in which the trade is executed.
   * 
   * Emits `RouteExecuted` when successful.
   */
  get isV76(): boolean {
    return this._chain.getCallHash('Router.buy') === 'dd3993d9aecee9da59c8145525c8eb56b40bc184d03d1de5b4228e483ff101d9'
  }

  /**
   * Executes a buy with a series of trades specified in the route.
   * The price for each trade is determined by the corresponding AMM.
   * 
   * - `origin`: The executor of the trade
   * - `asset_in`: The identifier of the asset to be swapped to buy `asset_out`
   * - `asset_out`: The identifier of the asset to buy
   * - `amount_out`: The amount of `asset_out` to buy
   * - `max_amount_in`: The max amount of `asset_in` to spend on the buy.
   * - `route`: Series of [`Trade<AssetId>`] to be executed. A [`Trade<AssetId>`] specifies the asset pair (`asset_in`, `asset_out`) and the AMM (`pool`) in which the trade is executed.
   * 
   * Emits `RouteExecuted` when successful.
   */
  get asV76(): {assetIn: number, assetOut: number, amountOut: bigint, maxAmountIn: bigint, route: v76.Trade[]} {
    assert(this.isV76)
    return this._chain.decodeCall(this.call)
  }
}

export class RouterSellCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Router.sell')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Executes a sell with a series of trades specified in the route.
   * The price for each trade is determined by the corresponding AMM.
   * 
   * - `origin`: The executor of the trade
   * - `asset_in`: The identifier of the asset to sell
   * - `asset_out`: The identifier of the asset to receive
   * - `amount_in`: The amount of `asset_in` to sell
   * - `min_amount_out`: The minimum amount of `asset_out` to receive.
   * - `route`: Series of [`Trade<AssetId>`] to be executed. A [`Trade<AssetId>`] specifies the asset pair (`asset_in`, `asset_out`) and the AMM (`pool`) in which the trade is executed.
   * 
   * Emits `RouteExecuted` when successful.
   */
  get isV76(): boolean {
    return this._chain.getCallHash('Router.sell') === '1085d0285500d88ace246ae11b71ba548b51a07b7c4d191e7b85cbcac5099261'
  }

  /**
   * Executes a sell with a series of trades specified in the route.
   * The price for each trade is determined by the corresponding AMM.
   * 
   * - `origin`: The executor of the trade
   * - `asset_in`: The identifier of the asset to sell
   * - `asset_out`: The identifier of the asset to receive
   * - `amount_in`: The amount of `asset_in` to sell
   * - `min_amount_out`: The minimum amount of `asset_out` to receive.
   * - `route`: Series of [`Trade<AssetId>`] to be executed. A [`Trade<AssetId>`] specifies the asset pair (`asset_in`, `asset_out`) and the AMM (`pool`) in which the trade is executed.
   * 
   * Emits `RouteExecuted` when successful.
   */
  get asV76(): {assetIn: number, assetOut: number, amountIn: bigint, minAmountOut: bigint, route: v76.Trade[]} {
    assert(this.isV76)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Scheduler.cancel') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
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
  get asV16(): {when: number, index: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Scheduler.cancel_named') === 'a0b847240e1232c10a62578340a2af6708e760669b06344b70c15e6370b514cf'
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
  get asV16(): {id: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === 'e2650f385b0f3276c3beb286a84d1d01635a9ea5d5a212f1b66fef52145675bf'
  }

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
  get asV16(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v16.Type_50} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

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
  get isV19(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '898cad8d0c22dcce241f9f70539a75696c2078cfbdd9987ece64cd246d893981'
  }

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
  get asV19(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v19.Type_50} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 22.29 + .126 * S µs
   * - DB Weight:
   *     - Read: Agenda
   *     - Write: Agenda
   * - Will use base weight of 25 which should be good for up to 30 scheduled calls
   * # </weight>
   */
  get isV25(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '3601021d2b018e10063be7af2fd19dff7f84a854464525dbc92972b6cdabd76d'
  }

  /**
   * Anonymously schedule a task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 22.29 + .126 * S µs
   * - DB Weight:
   *     - Read: Agenda
   *     - Write: Agenda
   * - Will use base weight of 25 which should be good for up to 30 scheduled calls
   * # </weight>
   */
  get asV25(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v25.Call} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task.
   */
  get isV38(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '5975da12e1af5d85070b342c75ae128b814faa5fc541d4b26f088b92acf857ba'
  }

  /**
   * Anonymously schedule a task.
   */
  get asV38(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v38.MaybeHashed} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task.
   */
  get isV43(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === 'dbd950a1a970a1c236584891f2a99ed0069bd3f13d3728714a07013a6534c92b'
  }

  /**
   * Anonymously schedule a task.
   */
  get asV43(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v43.MaybeHashed} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task.
   */
  get isV55(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '3c102e57c1f566161d3c998798d76381c6dc2b2a45474a5b19ec9bdc93887507'
  }

  /**
   * Anonymously schedule a task.
   */
  get asV55(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v55.MaybeHashed} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task.
   */
  get isV65(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '8e1bf1a3f71a7015baf7fa726e3f2dc1b42cd6912c9fdeba6e1882a1e0d92159'
  }

  /**
   * Anonymously schedule a task.
   */
  get asV65(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v65.MaybeHashed} {
    assert(this.isV65)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task.
   */
  get isV69(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '9bdcd37bc5b82eaf92edacdeeafe06e4c90c0fb79a72dcafc2ab9161b1ef0a6d'
  }

  /**
   * Anonymously schedule a task.
   */
  get asV69(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v69.MaybeHashed} {
    assert(this.isV69)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task.
   */
  get isV76(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === 'b73a993de36496e0600890ff47bbd8c6056c39e4435481374bc086942d35443c'
  }

  /**
   * Anonymously schedule a task.
   */
  get asV76(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v76.MaybeHashed} {
    assert(this.isV76)
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
   *  Anonymously schedule a task after a delay.
   * 
   *  # <weight>
   *  Same as [`schedule`].
   *  # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === 'de4082bb85730f3532a703ac9206e860ba28bafe421e472f4eb86e47b087e84c'
  }

  /**
   *  Anonymously schedule a task after a delay.
   * 
   *  # <weight>
   *  Same as [`schedule`].
   *  # </weight>
   */
  get asV16(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v16.Type_50} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Anonymously schedule a task after a delay.
   * 
   *  # <weight>
   *  Same as [`schedule`].
   *  # </weight>
   */
  get isV19(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === 'a02a8eefdc73bae7d415ee9d6fdef26c2fe0fe8a0dda76460f7a4a16334ab257'
  }

  /**
   *  Anonymously schedule a task after a delay.
   * 
   *  # <weight>
   *  Same as [`schedule`].
   *  # </weight>
   */
  get asV19(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v19.Type_50} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV25(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === '12552cd5edac0dc0975b1acf6a29fad68cd468493c0bebe4f11f2f1788132698'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV25(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v25.Call} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV38(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === 'd49ffe577d07fc610c668deacfdc0548f19d4efb099f49abaa243eb14aec335b'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV38(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v38.MaybeHashed} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV43(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === '7b6bfe0b95edbae8c1e7f87c31846e54374421c3e945f868fb205856d4ea436f'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV43(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v43.MaybeHashed} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV55(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === '07f246cdf2d156694eb9754ebf94c992ff6559463a9b9b349a1c1a3b9e0b6b42'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV55(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v55.MaybeHashed} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV65(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === '6009ac69d023980069cdc1bb30f04ad6c1fe95dccfdb818e036484a335e0cdb8'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV65(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v65.MaybeHashed} {
    assert(this.isV65)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV69(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === 'd183f155d9308d031213dafef17775695edcb6d9cb8f34247247257ace4770c2'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV69(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v69.MaybeHashed} {
    assert(this.isV69)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV76(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === 'c72a5b90b681843b79938c1f60d43c1074130b07101b6a44470b80a1a8984840'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV76(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v76.MaybeHashed} {
    assert(this.isV76)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === 'acfc967caee37d12a4b7e52ef8be2d3a8aedfd9617a8862b2a813f846c61db6a'
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
  get asV16(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v16.Type_50} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV19(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === '2db7952abf46711f3c15ccd4782ea638bd19f00081c076d8c0a52281c96a9bed'
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
  get asV19(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v19.Type_50} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 29.6 + .159 * S µs
   * - DB Weight:
   *     - Read: Agenda, Lookup
   *     - Write: Agenda, Lookup
   * - Will use base weight of 35 which should be good for more than 30 scheduled calls
   * # </weight>
   */
  get isV25(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === 'e588943ece90c1ed304b63659db91e1b700cb94d7868d33ca1a282e46ee8fb8c'
  }

  /**
   * Schedule a named task.
   * 
   * # <weight>
   * - S = Number of already scheduled calls
   * - Base Weight: 29.6 + .159 * S µs
   * - DB Weight:
   *     - Read: Agenda, Lookup
   *     - Write: Agenda, Lookup
   * - Will use base weight of 35 which should be good for more than 30 scheduled calls
   * # </weight>
   */
  get asV25(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v25.Call} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task.
   */
  get isV38(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === '03315f0437a6d931d4086806dd708e1e3d7008707ea7fa26db91f7e046135f3f'
  }

  /**
   * Schedule a named task.
   */
  get asV38(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v38.MaybeHashed} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task.
   */
  get isV43(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === '0583060d4f444eb729396c0b38a3f2420490399b848b3a53468c9ae40f301e7d'
  }

  /**
   * Schedule a named task.
   */
  get asV43(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v43.MaybeHashed} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task.
   */
  get isV55(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === '75626b13b44e57404b159fea829dc2e01c88b74d37a331f2cd8111f58457acaf'
  }

  /**
   * Schedule a named task.
   */
  get asV55(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v55.MaybeHashed} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task.
   */
  get isV65(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === 'b112c5cb9334f2fcf177fce04ff5fa2a34ab826a19960f19abbd015e86ea8854'
  }

  /**
   * Schedule a named task.
   */
  get asV65(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v65.MaybeHashed} {
    assert(this.isV65)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task.
   */
  get isV69(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === '964ea15474956cce26eb65c410861a65e2bdc999ac7d570ed73e5401a9006244'
  }

  /**
   * Schedule a named task.
   */
  get asV69(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v69.MaybeHashed} {
    assert(this.isV69)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task.
   */
  get isV76(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === 'ed6f24c04640fc1166c8555af46f1bf04f5ccb51689a15f9186bc637b6fb19c6'
  }

  /**
   * Schedule a named task.
   */
  get asV76(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v76.MaybeHashed} {
    assert(this.isV76)
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
   *  Schedule a named task after a delay.
   * 
   *  # <weight>
   *  Same as [`schedule_named`](Self::schedule_named).
   *  # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === '6c1816eaae2700030db50b1ef614951cf60bfcdec1a27e9c3a046f4db2d4e44c'
  }

  /**
   *  Schedule a named task after a delay.
   * 
   *  # <weight>
   *  Same as [`schedule_named`](Self::schedule_named).
   *  # </weight>
   */
  get asV16(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v16.Type_50} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

  /**
   *  Schedule a named task after a delay.
   * 
   *  # <weight>
   *  Same as [`schedule_named`](Self::schedule_named).
   *  # </weight>
   */
  get isV19(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === '2285def613026528c6dc01c584cb5df60c5f15dcf4faece5cb7631658fdda21f'
  }

  /**
   *  Schedule a named task after a delay.
   * 
   *  # <weight>
   *  Same as [`schedule_named`](Self::schedule_named).
   *  # </weight>
   */
  get asV19(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v19.Type_50} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV25(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === '20bd20a4ee45c80b10286d526c582ae6ced6e59691adccf9c98a0c82ede81bb2'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV25(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v25.Call} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV38(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === '878d23e9ebfa0d5093776836cdbbf13f46e47a4bfa25a0f04209d5b56b4f664e'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV38(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v38.MaybeHashed} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV43(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === 'cda9bc74439a2970a9f45f1d651342a301f21e6aa5db1c412e964c87ee31bcc7'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV43(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v43.MaybeHashed} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV55(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === 'c2fa6c97ab303dca6822e796e159440463211deeef6a4b2e56aedcb6bf99659a'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV55(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v55.MaybeHashed} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV65(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === '62a68475a58f311c17ded81df7071ea98bbb15c971b2f027d94267dc9aa50339'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV65(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v65.MaybeHashed} {
    assert(this.isV65)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV69(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === '630743ae9526999a1059b0d0082b39143a17fd280f968a1427e0e23a5e98a54d'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV69(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v69.MaybeHashed} {
    assert(this.isV69)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV76(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === 'cfd98dc2e4d1a30715657b69d585abcc4142b2c6f39901a35bf1913da2424803'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV76(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v76.MaybeHashed} {
    assert(this.isV76)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Session.purge_keys') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
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
  get asV16(): null {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Session.set_keys') === 'c7b330a679f9bd903c6c1f11c1663dda10320887744436efcf21d3d2bbf3b85f'
  }

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
  get asV16(): {keys: [Uint8Array, Uint8Array, Uint8Array, Uint8Array], proof: Uint8Array} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
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
  get asV25(): {keys: v25.SessionKeys, proof: Uint8Array} {
    assert(this.isV25)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Sudo.set_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
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
  get asV16(): {new: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === '19e2aa09110f5595a6df522453af031849315770b099e79b60e43c427bf334f9'
  }

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
  get asV16(): {call: v16.Type_50} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

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
  get isV19(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === '7301d39dba823fe38a403c2e8b9efef07037a4dee3e02def04a84ac49d257449'
  }

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
  get asV19(): {call: v19.Type_50} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === 'b3c141c9248430e53850a69354ecd06a949668a232148a92dca094f7c4b9dc0f'
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
  get asV25(): {call: v25.Call} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === '4a509cb78ecdc09ac99783187e3605f488db24f7bfeb6efb12ea6ff4298e774f'
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
  get asV38(): {call: v38.Call} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
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
  get isV43(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === 'ea0a1e03656b5cf8db66a55f9af4864bb4a54575179395f06049ca6351387ed0'
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
  get asV43(): {call: v43.Call} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
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
  get isV55(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === 'de29388fa240578baf4dc1302ff73c7c2fabca0079f8122f571a528d97fcfabf'
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
  get asV55(): {call: v55.Call} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
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
  get isV65(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === '279f87b3bac936522579e9f28aff71d8529a74478c6a87967def77d07bc7edb9'
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
  get asV65(): {call: v65.Call} {
    assert(this.isV65)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === 'c58ae17f1de61085ff3a4b974ebf5dd442efe3504b889d01406bf3284b002a57'
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
  get asV16(): {who: Uint8Array, call: v16.Type_50} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV19(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === 'a85df94850b531372a2f510dcfa7233614ab22248e0774b1f25ee635887c5db1'
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
  get asV19(): {who: Uint8Array, call: v19.Type_50} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '88d7df9df95df24cbab79b643a3d9523ef0230145d6c443c2ac2067138100354'
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
  get asV25(): {who: Uint8Array, call: v25.Call} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '1530e1a09ef1caa1948c9196ed8ec6e03aba5a02c921649911d001f8fd091dfd'
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
  get asV38(): {who: Uint8Array, call: v38.Call} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
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
  get isV43(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '0be5e5cd0d1e9b5779e3f99e0e4c28e429063383eec3f9f3b8deceb2b54437f4'
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
  get asV43(): {who: Uint8Array, call: v43.Call} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
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
  get isV55(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === 'ee4ca4154bab6c9f3775bd8f8a5d65cedf050fa26c918c600205b74eb25322cb'
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
  get asV55(): {who: Uint8Array, call: v55.Call} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
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
  get isV65(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === 'f33ab6ea1304edc77e7868bf7c87ec5c64c4fc3aa2d422f5f49dd3c7d3c51f76'
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
  get asV65(): {who: Uint8Array, call: v65.Call} {
    assert(this.isV65)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '1e2c2047d1ff1d41a1d6464e106e52920ee5c69ef3f7c3fde556f2e60cede2fb'
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
  get asV16(): {call: v16.Type_50, weight: bigint} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV19(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'c65f1472973f58a3e02d572b6c4b1fa7daf9f043fa96ba7ae4eae233f242e927'
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
  get asV19(): {call: v19.Type_50, weight: bigint} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '536fe61d051ee470fe8c03d9e087f9e392f5cd5ca99f63cdea43b3698de0650d'
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
  get asV25(): {call: v25.Call, weight: bigint} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'bfdee2b7021f7dc11ad14b14bf122e21775d3e0d46fc8837a829d5438e281209'
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
  get asV38(): {call: v38.Call, weight: bigint} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
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
  get isV43(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'f706a418e371de0b9aaf9b4aff4e5973df2093657b15456f5843151fc9794b7f'
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
  get asV43(): {call: v43.Call, weight: bigint} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
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
  get isV55(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '5a043d3d0ae50a37b406687298aa98f4daf35a095265d8b32d48a84a69db44fb'
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
  get asV55(): {call: v55.Call, weight: bigint} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
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
  get isV65(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'a3d13105881c5b3acd13a8e641873dc786a6d04c72bbcb15ede388240a2565ad'
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
  get asV65(): {call: v65.Call, weight: bigint} {
    assert(this.isV65)
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
   *  A dispatch that will fill the block weight up to the given ratio.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
  }

  /**
   *  A dispatch that will fill the block weight up to the given ratio.
   */
  get asV16(): {ratio: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
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
  get asV16(): {prefix: Uint8Array, subkeys: number} {
    assert(this.isV16)
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
   *  Kill some items from storage.
   * 
   *  # <weight>
   *  - `O(IK)` where `I` length of `keys` and `K` length of one key
   *  - `I` storage deletions.
   *  - Base Weight: .378 * i µs
   *  - Writes: Number of items
   *  # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
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
  get asV16(): {keys: Uint8Array[]} {
    assert(this.isV16)
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
   *  Make some on-chain remark.
   * 
   *  # <weight>
   *  - `O(1)`
   *  # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
  }

  /**
   *  Make some on-chain remark.
   * 
   *  # <weight>
   *  - `O(1)`
   *  # </weight>
   */
  get asV16(): {remark: Uint8Array} {
    assert(this.isV16)
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
   *  Make some on-chain remark and emit event.
   * 
   *  # <weight>
   *  - `O(b)` where b is the length of the remark.
   *  - 1 event.
   *  # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
  }

  /**
   *  Make some on-chain remark and emit event.
   * 
   *  # <weight>
   *  - `O(b)` where b is the length of the remark.
   *  - 1 event.
   *  # </weight>
   */
  get asV16(): {remark: Uint8Array} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetChangesTrieConfigCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_changes_trie_config')
    this._chain = ctx._chain
    this.call = call
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
  get isV16(): boolean {
    return this._chain.getCallHash('System.set_changes_trie_config') === 'ced137e2f8792ce87e1f2b20f97e1de9a31001f9c44069dc6e73b9e4c061c311'
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
  get asV16(): {changesTrieConfig: (v16.ChangesTrieConfiguration | undefined)} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
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
  get asV16(): {code: Uint8Array} {
    assert(this.isV16)
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
   *  Set the new runtime code without doing any checks of the given `code`.
   * 
   *  # <weight>
   *  - `O(C)` where `C` length of `code`
   *  - 1 storage write (codec `O(C)`).
   *  - 1 event.
   *  The weight of this function is dependent on the runtime. We will treat this as a full block.
   *  # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
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
  get asV16(): {code: Uint8Array} {
    assert(this.isV16)
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
   *  Set the number of pages in the WebAssembly environment's heap.
   * 
   *  # <weight>
   *  - `O(1)`
   *  - 1 storage write.
   *  - Base Weight: 1.405 µs
   *  - 1 write to HEAP_PAGES
   *  # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
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
  get asV16(): {pages: bigint} {
    assert(this.isV16)
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
   *  Set some items of storage.
   * 
   *  # <weight>
   *  - `O(I)` where `I` length of `items`
   *  - `I` storage writes (`O(1)`).
   *  - Base Weight: 0.568 * i µs
   *  - Writes: Number of items
   *  # </weight>
   */
  get isV16(): boolean {
    return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
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
  get asV16(): {items: [Uint8Array, Uint8Array][]} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
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
  get asV16(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
  get asV16(): {proposalHash: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.execute') === '186e126fc260283bdda4de17e89495abf4cdade0f6b4fdf5953203d6cadd08fe'
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
  get asV16(): {proposal: v16.Proposal, lengthBound: number} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV19(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.execute') === '179fb8d8f7746565ce3afe942d5233075a687818e1d56f5cbb99af1fa8ab175c'
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
  get asV19(): {proposal: v19.Proposal, lengthBound: number} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.execute') === 'b2543f355fe0179179fe8b9bdd162d87576d9969f6cb923e88e356dc1c611fec'
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
  get asV25(): {proposal: v25.Call, lengthBound: number} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.execute') === '18621f10a1c741d0f53ab9302a9a0950007ec8bcbe34fe9ac0754522b3dbecd1'
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
  get asV38(): {proposal: v38.Call, lengthBound: number} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
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
  get isV43(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.execute') === 'f375c351932f898dc4c7f2b6d8d64822c0a20bee898890712421f66aed1f8a13'
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
  get asV43(): {proposal: v43.Call, lengthBound: number} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
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
  get isV55(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.execute') === 'c55e32a381262eed8e87f0a5355307a87e4ace513481b4f08f203f5a6bb6532d'
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
  get asV55(): {proposal: v55.Call, lengthBound: number} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
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
  get isV65(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.execute') === '33349d8e357311e3a355ad9a9f7b3369980650e37d28fd6488044d9350e4710b'
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
  get asV65(): {proposal: v65.Call, lengthBound: number} {
    assert(this.isV65)
    return this._chain.decodeCall(this.call)
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
  get isV69(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.execute') === 'b6044956e6d4484d27d76535db379b483602da36cdb8c1caee4a6700e2363211'
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
  get asV69(): {proposal: v69.Call, lengthBound: number} {
    assert(this.isV69)
    return this._chain.decodeCall(this.call)
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
  get isV76(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.execute') === '42e69d69e53b0f9421e3da3ca250ab50f2594e9e57bf6196b3d4c744ad5f3862'
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
  get asV76(): {proposal: v76.Call, lengthBound: number} {
    assert(this.isV76)
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
  get isV16(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.propose') === 'ff07de05ae8e89d62927bee23b595f4a2d8b3ed8757de21f6fd5c4609b7aefa2'
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
  get asV16(): {threshold: number, proposal: v16.Proposal, lengthBound: number} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV19(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.propose') === '9fa4a68dc53539896739b3160dab29ccecfe222612165ea51520c6c3b96c9560'
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
  get asV19(): {threshold: number, proposal: v19.Proposal, lengthBound: number} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.propose') === 'c9f4194d41e2fe5e5198e130685bb9d2a881f12da90abd3312941e6a2ae657b7'
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
  get asV25(): {threshold: number, proposal: v25.Call, lengthBound: number} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.propose') === '75e0921656a67e4021d1392efa8ee8f35dc843babe28f3ce4d8bd742bdbce192'
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
  get asV38(): {threshold: number, proposal: v38.Call, lengthBound: number} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
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
  get isV43(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.propose') === '3d5700a14e197a0c0858a362d224141b498a0a9475a48ea6b8de3e7d0cc7b73f'
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
  get asV43(): {threshold: number, proposal: v43.Call, lengthBound: number} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
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
  get isV55(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.propose') === '90c55f27e624156eb7f215b9bf8f0c7e977d575325dc86a906fb1a152cacc67b'
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
  get asV55(): {threshold: number, proposal: v55.Call, lengthBound: number} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
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
  get isV65(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.propose') === '1a85393b74874f260e7f90279375b923786a4757057b149e9b3c7958229aa371'
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
  get asV65(): {threshold: number, proposal: v65.Call, lengthBound: number} {
    assert(this.isV65)
    return this._chain.decodeCall(this.call)
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
  get isV69(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.propose') === '2bd8545b9aeb711d97f6ec6b5604e73d0475188a02f3e4cc3a2b3e99e0de4ad1'
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
  get asV69(): {threshold: number, proposal: v69.Call, lengthBound: number} {
    assert(this.isV69)
    return this._chain.decodeCall(this.call)
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
  get isV76(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.propose') === 'abdbf0a364b16ed7e1b01d71fbf0be6e986367a4d6dd7d5e99e54be4f27bc0df'
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
  get asV76(): {threshold: number, proposal: v76.Call, lengthBound: number} {
    assert(this.isV76)
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
  get isV16(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
  }

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
  get asV16(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
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
  get asV16(): {proposal: Uint8Array, index: number, approve: boolean} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Timestamp.set') === '6a8b8ba2be107f0853b674eec0026cc440b314db44d0e2c59b36e353355aed14'
  }

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
  get asV16(): {now: bigint} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Tips.close_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
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
  get asV16(): {hash: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Tips.report_awesome') === '5f39cdb6a1bab5505c2717a3d34b1ad66c35bb6aca421780ce60b4e9017fe886'
  }

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
  get asV16(): {reason: Uint8Array, who: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Tips.retract_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
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
  get asV16(): {hash: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Tips.slash_tip') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
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
  get asV16(): {hash: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Tips.tip') === 'f3795cdab18c292963e0e30ece37a15a2900030efc315a8e3f28ba886b2b9f58'
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
  get asV16(): {hash: Uint8Array, tipValue: bigint} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Tips.tip_new') === '367b1dcdffb32d8c4b26e342e9b515c65f2589dec81f4a3f6f336faaa7e127ac'
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
  get asV16(): {reason: Uint8Array, who: Uint8Array, tipValue: bigint} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Tokens.force_transfer') === '03ae65ffcb050d1a5f07226901a4dd126b516b5cbb0c2ec5486bf9cc4eb92a25'
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
  get asV16(): {source: Uint8Array, dest: Uint8Array, currencyId: number, amount: bigint} {
    assert(this.isV16)
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
   *  Set the balances of a given account.
   * 
   *  This will alter `FreeBalance` and `ReservedBalance` in storage. it
   *  will also decrease the total issuance of the system
   *  (`TotalIssuance`). If the new free or reserved balance is below the
   *  existential deposit, it will reap the `AccountInfo`.
   * 
   *  The dispatch origin for this call is `root`.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('Tokens.set_balance') === 'bb217c2e772e23f283f74504acd25cc61bec482f7cf2843bfc8a333fcca93e41'
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
  get asV16(): {who: Uint8Array, currencyId: number, newFree: bigint, newReserved: bigint} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Tokens.transfer') === 'f9417776835359c4df2af31d48b33bac20ebcc850ed3738fcbccd673124fb252'
  }

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
  get asV16(): {dest: Uint8Array, currencyId: number, amount: bigint} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Tokens.transfer_all') === '0cab462a3623f31f93271da96b823635d8988375ef69ec29a253fe44165a2324'
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
  get asV16(): {dest: Uint8Array, currencyId: number, keepAlive: boolean} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Tokens.transfer_keep_alive') === 'f9417776835359c4df2af31d48b33bac20ebcc850ed3738fcbccd673124fb252'
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
  get asV16(): {dest: Uint8Array, currencyId: number, amount: bigint} {
    assert(this.isV16)
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

  get isV65(): boolean {
    return this._chain.getCallHash('TransactionPause.pause_transaction') === '9f7ea81680daeafc9598d45a2a8cebeeecb2ddd4c023d1961eb29f8509623297'
  }

  get asV65(): {palletName: Uint8Array, functionName: Uint8Array} {
    assert(this.isV65)
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

  get isV65(): boolean {
    return this._chain.getCallHash('TransactionPause.unpause_transaction') === '9f7ea81680daeafc9598d45a2a8cebeeecb2ddd4c023d1961eb29f8509623297'
  }

  get asV65(): {palletName: Uint8Array, functionName: Uint8Array} {
    assert(this.isV65)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Treasury.approve_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
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
  get asV16(): {proposalId: number} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Treasury.propose_spend') === '98e9af32f46010396e58ac70ce7c017f7e95d81b05c03d5e5aeb94ce27732909'
  }

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
  get asV16(): {value: bigint, beneficiary: Uint8Array} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Treasury.reject_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
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
  get asV16(): {proposalId: number} {
    assert(this.isV16)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, instance: bigint, delegate: Uint8Array} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, instance: bigint, checkOwner: (Uint8Array | undefined)} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, instance: bigint, maybeCheckDelegate: (Uint8Array | undefined)} {
    assert(this.isV38)
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
   * - `instance`: The identifier of the asset instance whose metadata to set.
   * - `key`: The key of the attribute.
   * - `value`: The value to which to set the attribute.
   * 
   * Emits `AttributeSet`.
   * 
   * Weight: `O(1)`
   */
  get isV38(): boolean {
    return this._chain.getCallHash('Uniques.clear_attribute') === 'fa7fbe839ff03afee447f0395225a1b90a4a0d39db0de47a57b304e0007ae3f1'
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
   * - `instance`: The identifier of the asset instance whose metadata to set.
   * - `key`: The key of the attribute.
   * - `value`: The value to which to set the attribute.
   * 
   * Emits `AttributeSet`.
   * 
   * Weight: `O(1)`
   */
  get asV38(): {class: bigint, maybeInstance: (bigint | undefined), key: Uint8Array} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, instance: bigint} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, admin: Uint8Array} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, witness: v38.DestroyWitness} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, owner: Uint8Array, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array, freeHolding: boolean, isFrozen: boolean} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, owner: Uint8Array, freeHolding: boolean} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, instance: bigint} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, instance: bigint, owner: Uint8Array} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, instances: bigint[]} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, maybeInstance: (bigint | undefined), key: Uint8Array, value: Uint8Array} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, data: Uint8Array, isFrozen: boolean} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, instance: bigint, data: Uint8Array, isFrozen: boolean} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, issuer: Uint8Array, admin: Uint8Array, freezer: Uint8Array} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, instance: bigint} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, instance: bigint, dest: Uint8Array} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {class: bigint, owner: Uint8Array} {
    assert(this.isV38)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === 'f1e6010811a1f840511cea56f712908a27f2d800714d921f01381d5ab55ddb6e'
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
  get asV16(): {index: number, call: v16.Type_50} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV19(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '1f30a5190a9a0fee2c022099ccc5fb2152fff8f92250d3cbb78bdbf651818ec3'
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
  get asV19(): {index: number, call: v19.Type_50} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === 'a5ae6583c46a3f0982e2589f2cdc4b8e9c27689c701105c1fae3a4305d25439a'
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
  get asV25(): {index: number, call: v25.Call} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '4c6a9c3857a2e169a43fede1621222b86adaa9cf1a3f543b2016368d684bc7a3'
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
  get asV38(): {index: number, call: v38.Call} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
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
  get isV43(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '0f13dc6d7cddc971f8417980f45ac8a36855c0b62b325fc7870ea94c6b165e63'
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
  get asV43(): {index: number, call: v43.Call} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
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
  get isV55(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '93fceab1bcea3a29f9479332d75294f0da947ebd66df0fe0c548b07d5f9a587c'
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
  get asV55(): {index: number, call: v55.Call} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
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
  get isV65(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === 'fc8c3d9c1cca6b9e4fced539276c4804f0d36ef7512cfa00305b5b4c076f9071'
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
  get asV65(): {index: number, call: v65.Call} {
    assert(this.isV65)
    return this._chain.decodeCall(this.call)
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
  get isV69(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '2c5f69a6b89a53497592b2a8404b533f28f445da64c72cda791c666835c6d1e7'
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
  get asV69(): {index: number, call: v69.Call} {
    assert(this.isV69)
    return this._chain.decodeCall(this.call)
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
  get isV76(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '78d33648c959cad228e5f3af47ab17964cd00761387937df4ea11b19995c2468'
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
  get asV76(): {index: number, call: v76.Call} {
    assert(this.isV76)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Utility.batch') === '4f62eb1c9be921d5d8ac1ba085db745ba18846ce1344ad702206d859675cf56e'
  }

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
  get asV16(): {calls: v16.Type_50[]} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

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
  get isV19(): boolean {
    return this._chain.getCallHash('Utility.batch') === '49471b6eff24c2a2282ddd14dc19babf25e176a880b360a4bd4dd5df3063e54e'
  }

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
  get asV19(): {calls: v19.Type_50[]} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
    return this._chain.getCallHash('Utility.batch') === '6cb533f3183efa915fbb5d1179194f5a7005d56f8250c026cbdde82b666881ee'
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
  get asV25(): {calls: v25.Call[]} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
    return this._chain.getCallHash('Utility.batch') === 'b12f059cc8c1016d937c89ea748470ce1bb348d8e71cdc8edcfcb7971bac4f6d'
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
  get asV38(): {calls: v38.Call[]} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
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
  get isV43(): boolean {
    return this._chain.getCallHash('Utility.batch') === '6bc925d582246935ad4a2d2dc950b03583a21fcff6939848cea9209a0b42bc8f'
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
  get asV43(): {calls: v43.Call[]} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
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
  get isV55(): boolean {
    return this._chain.getCallHash('Utility.batch') === '37bac653c066bf45c05cbb7ee644f40a9a5f514a9cdf02aac65819b02bc7bd55'
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
  get asV55(): {calls: v55.Call[]} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
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
  get isV65(): boolean {
    return this._chain.getCallHash('Utility.batch') === '08ebab1922b3b182d8de2867cdfc4e42e83d18f0b523c01967af1ed4a3e0cf45'
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
  get asV65(): {calls: v65.Call[]} {
    assert(this.isV65)
    return this._chain.decodeCall(this.call)
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
  get isV69(): boolean {
    return this._chain.getCallHash('Utility.batch') === '68de9bad50ac86661cea7a270b85167172afd01b631f18c323c19441f10929bc'
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
  get asV69(): {calls: v69.Call[]} {
    assert(this.isV69)
    return this._chain.decodeCall(this.call)
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
  get isV76(): boolean {
    return this._chain.getCallHash('Utility.batch') === 'ecc61f67022161ac1e8e314d27fec5230bae6f2277ffe12b04f5c217243a8e35'
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
  get asV76(): {calls: v76.Call[]} {
    assert(this.isV76)
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
  get isV16(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '4f62eb1c9be921d5d8ac1ba085db745ba18846ce1344ad702206d859675cf56e'
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
  get asV16(): {calls: v16.Type_50[]} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV19(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '49471b6eff24c2a2282ddd14dc19babf25e176a880b360a4bd4dd5df3063e54e'
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
  get asV19(): {calls: v19.Type_50[]} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '6cb533f3183efa915fbb5d1179194f5a7005d56f8250c026cbdde82b666881ee'
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
  get asV25(): {calls: v25.Call[]} {
    assert(this.isV25)
    return this._chain.decodeCall(this.call)
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
  get isV38(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === 'b12f059cc8c1016d937c89ea748470ce1bb348d8e71cdc8edcfcb7971bac4f6d'
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
  get asV38(): {calls: v38.Call[]} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
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
  get isV43(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '6bc925d582246935ad4a2d2dc950b03583a21fcff6939848cea9209a0b42bc8f'
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
  get asV43(): {calls: v43.Call[]} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
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
  get isV55(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '37bac653c066bf45c05cbb7ee644f40a9a5f514a9cdf02aac65819b02bc7bd55'
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
  get asV55(): {calls: v55.Call[]} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
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
  get isV65(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '08ebab1922b3b182d8de2867cdfc4e42e83d18f0b523c01967af1ed4a3e0cf45'
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
  get asV65(): {calls: v65.Call[]} {
    assert(this.isV65)
    return this._chain.decodeCall(this.call)
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
  get isV69(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '68de9bad50ac86661cea7a270b85167172afd01b631f18c323c19441f10929bc'
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
  get asV69(): {calls: v69.Call[]} {
    assert(this.isV69)
    return this._chain.decodeCall(this.call)
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
  get isV76(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === 'ecc61f67022161ac1e8e314d27fec5230bae6f2277ffe12b04f5c217243a8e35'
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
  get asV76(): {calls: v76.Call[]} {
    assert(this.isV76)
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
  get isV38(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === '3eb176012a7a465c61bf3b2d13cd3842fcf43f7a7d70033061d8f068db63b4fe'
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
  get asV38(): {asOrigin: v38.OriginCaller, call: v38.Call} {
    assert(this.isV38)
    return this._chain.decodeCall(this.call)
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
  get isV43(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === '2303090f055e6627df255f829fcca4ee5deeeb56e48ef4ac66752dc8e1b2df78'
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
  get asV43(): {asOrigin: v43.OriginCaller, call: v43.Call} {
    assert(this.isV43)
    return this._chain.decodeCall(this.call)
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
  get isV55(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === '7eebf2661d08479563333212697614bb7699184da7914d969edf70f8ff5077ce'
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
  get asV55(): {asOrigin: v55.OriginCaller, call: v55.Call} {
    assert(this.isV55)
    return this._chain.decodeCall(this.call)
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
  get isV65(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === '643646b31ef1d0ebf7c140544083bc1193046d55d26f30371fbfec8364bcf8ab'
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
  get asV65(): {asOrigin: v65.OriginCaller, call: v65.Call} {
    assert(this.isV65)
    return this._chain.decodeCall(this.call)
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
  get isV69(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === 'c2adaa4f64b4737e82f7d14dbbe8a5ed779cf28795747de8c4a616b9a7bb5e11'
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
  get asV69(): {asOrigin: v69.OriginCaller, call: v69.Call} {
    assert(this.isV69)
    return this._chain.decodeCall(this.call)
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
  get isV76(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === '660eab84e0e8e594e56ef9996e160b7fbbaa29298472c470c78b92913e7a3dd9'
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
  get asV76(): {asOrigin: v76.OriginCaller, call: v76.Call} {
    assert(this.isV76)
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

  get isV16(): boolean {
    return this._chain.getCallHash('Vesting.claim') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  get asV16(): null {
    assert(this.isV16)
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

  get isV16(): boolean {
    return this._chain.getCallHash('Vesting.claim_for') === 'b460c0e5be86faa4e205be32c38d7cbf4012485c8ea8f2b0d2831cc6157b2ed8'
  }

  get asV16(): {dest: Uint8Array} {
    assert(this.isV16)
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

  get isV16(): boolean {
    return this._chain.getCallHash('Vesting.update_vesting_schedules') === '77c565e7989e7bc919881bb1ee1a6ea3717748d0dc34dfa233007fbe6386e5d8'
  }

  get asV16(): {who: Uint8Array, vestingSchedules: v16.VestingScheduleOf[]} {
    assert(this.isV16)
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

  get isV16(): boolean {
    return this._chain.getCallHash('Vesting.vested_transfer') === '0a3591798ce10f78f229a34448a83d06dfe547006c9e21a950869d29b5510d14'
  }

  get asV16(): {dest: Uint8Array, schedule: v16.VestingScheduleOf} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('XTokens.transfer') === 'a2bad76fd5cbf9087690b293e4356c7975530079cbfc88216e8e1e420b4fdd0f'
  }

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
  get asV16(): {currencyId: number, amount: bigint, dest: v16.MultiLocation, destWeight: bigint} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }

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
  get isV19(): boolean {
    return this._chain.getCallHash('XTokens.transfer') === '8364aa3f56c7922e8bd1265a98bcdf16d8e564bb774fa44618f637b73b0ee9cc'
  }

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
  get asV19(): {currencyId: number, amount: bigint, dest: v19.MultiLocation, destWeight: bigint} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
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
  get asV25(): {currencyId: number, amount: bigint, dest: v25.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV25)
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
  get isV16(): boolean {
    return this._chain.getCallHash('XTokens.transfer_multiasset') === '7548332d29b0bb224e6af041d51264352d65c29a2808e4b23d840fb14b5f2152'
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
  get asV16(): {asset: v16.MultiAsset, dest: v16.MultiLocation, destWeight: bigint} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
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
  get isV19(): boolean {
    return this._chain.getCallHash('XTokens.transfer_multiasset') === '1ccd03b3e7d8d9989455a6697c670dbc8e7db1e5cb60d09c0695787a0e6c3805'
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
  get asV19(): {asset: v19.MultiAsset, dest: v19.MultiLocation, destWeight: bigint} {
    assert(this.isV19)
    return this._chain.decodeCall(this.call)
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
  get isV25(): boolean {
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
  get asV25(): {asset: v25.VersionedMultiAsset, dest: v25.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV25)
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
  get isV38(): boolean {
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
  get asV38(): {asset: v38.VersionedMultiAsset, fee: v38.VersionedMultiAsset, dest: v38.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {assets: v38.VersionedMultiAssets, feeItem: number, dest: v38.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {currencies: [number, bigint][], feeItem: number, dest: v38.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV38)
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
  get isV38(): boolean {
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
  get asV38(): {currencyId: number, amount: bigint, fee: bigint, dest: v38.VersionedMultiLocation, destWeight: bigint} {
    assert(this.isV38)
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
   *  Add liquidity to previously created asset pair pool.
   * 
   *  Shares are issued with current price.
   * 
   *  Emits `LiquidityAdded` event when successful.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('XYK.add_liquidity') === '49b203a41a53269704b11662e91b99273e01464f22097ed3ac18f7d12e742a9d'
  }

  /**
   *  Add liquidity to previously created asset pair pool.
   * 
   *  Shares are issued with current price.
   * 
   *  Emits `LiquidityAdded` event when successful.
   */
  get asV16(): {assetA: number, assetB: number, amountA: bigint, amountBMaxLimit: bigint} {
    assert(this.isV16)
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
   *  Trade asset in for asset out.
   * 
   *  Executes a swap of `asset_in` for `asset_out`. Price is determined by the liquidity pool.
   * 
   *  `max_limit` - maximum amount of `asset_in` to be sold in exchange for `asset_out`.
   * 
   *  Emits `BuyExecuted` when successful.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('XYK.buy') === 'ab3eaf0cb16e0fea7650fbfbff002ef0bfa3d8f7908b7be4036eea89529c956d'
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
  get asV16(): {assetOut: number, assetIn: number, amount: bigint, maxLimit: bigint, discount: boolean} {
    assert(this.isV16)
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
  get isV16(): boolean {
    return this._chain.getCallHash('XYK.create_pool') === '036b76577b25b1b68f8755f0d220a559f2683a68ad6072247e03c16346d46d7f'
  }

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
  get asV16(): {assetA: number, assetB: number, amount: bigint, initialPrice: bigint} {
    assert(this.isV16)
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
   *  Remove liquidity from specific liquidity pool in the form of burning shares.
   * 
   *  If liquidity in the pool reaches 0, it is destroyed.
   * 
   *  Emits 'LiquidityRemoved' when successful.
   *  Emits 'PoolDestroyed' when pool is destroyed.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('XYK.remove_liquidity') === '381acbc6a211906fdf77548353137f1d4ffa7bc565402bd59ed9fc09b0186fee'
  }

  /**
   *  Remove liquidity from specific liquidity pool in the form of burning shares.
   * 
   *  If liquidity in the pool reaches 0, it is destroyed.
   * 
   *  Emits 'LiquidityRemoved' when successful.
   *  Emits 'PoolDestroyed' when pool is destroyed.
   */
  get asV16(): {assetA: number, assetB: number, liquidityAmount: bigint} {
    assert(this.isV16)
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
   *  Trade asset in for asset out.
   * 
   *  Executes a swap of `asset_in` for `asset_out`. Price is determined by the liquidity pool.
   * 
   *  `max_limit` - minimum amount of `asset_out` / amount of asset_out to be obtained from the pool in exchange for `asset_in`.
   * 
   *  Emits `SellExecuted` when successful.
   */
  get isV16(): boolean {
    return this._chain.getCallHash('XYK.sell') === 'ed0c4336cf718cfe65339630b1b031d1eedac2f9d2a71bfefbdd5c72723c9d66'
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
  get asV16(): {assetIn: number, assetOut: number, amount: bigint, maxLimit: bigint, discount: boolean} {
    assert(this.isV16)
    return this._chain.decodeCall(this.call)
  }
}
