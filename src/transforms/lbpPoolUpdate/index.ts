import { environment } from '../../processor'
import { production } from './production'
import { ParsedPoolUpdate, PoolUpdateEventItem } from './types'

export const parseLBPPoolUpdates = (
  ctx: Ctx,
  item: PoolUpdateEventItem,
  env: environment
): ParsedPoolUpdate => {
  switch (env) {
    case environment.local:
      throw new Error('Not implemented')
    case environment.develop:
      throw new Error('Not implemented')
    case environment.rococo:
      throw new Error('Not implemented')
    case environment.production:
      return production(ctx, item)
  }
}