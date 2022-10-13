import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'

interface ParsedPoolUpdate {
  poolId: Uint8Array
  poolData: LBPPoolDataUpdate
}
