import { ParachainSystemSetValidationDataCall } from '../../types/types-production/calls'
import { ParsedParachainSystemValidationData } from './types'

export const production = (
  ctx: Ctx,
  item: any
): ParsedParachainSystemValidationData => {
  const call = new ParachainSystemSetValidationDataCall(ctx, item.call)
  if (call.isV16) {
    const c16 = call.asV16
    return {
      relayChainBlockNumber: c16.data.validationData.relayParentNumber
    }
  } else {
    const c25 = call.asV25
    return {
      relayChainBlockNumber: c25.data.validationData.relayParentNumber
    }
  }
}
