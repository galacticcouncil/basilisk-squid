import { LbpPoolUpdatedEvent } from '../../types/types-production/events'
import { ParsedPoolUpdate } from './types'

export const production = (ctx: Ctx, item: any): ParsedPoolUpdate => {
  const event = new LbpPoolUpdatedEvent(ctx, item.event)
  if (event.isV16) {
    throw new Error('Not implemented')
  } else if (event.isV25) {
    throw new Error('Not implemented')
  } else if (event.isV38) {
    throw new Error('Not implemented')
  } else {
    const e55 = event.asV55
    return {
      poolId: e55.pool,
      poolData: {
        ...e55.data,
        owner: e55.data.owner.toString(),
        feeCollector: e55.data.feeCollector.toString()
      }
    }
  }
}
