import { environment } from '../../processor'
import { production } from './production'
import { ParsedParachainSystemValidationData } from './types'

export const parseParachainSystemValidationData = (
  ctx: Ctx,
  item: any,
  env: environment
): ParsedParachainSystemValidationData => {
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
