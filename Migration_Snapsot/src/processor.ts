import { EvmBatchProcessor} from '@subsquid/evm-processor'
import { events } from './abi/Gravity'
import { lookupArchive } from '@subsquid/archive-registry'

export const GRAVATAR_CONTRACT = '0x2E645469f354BB4F5c8a05B3b30A929361cf77eC'.toLowerCase()

export const processor = new EvmBatchProcessor()
  .setDataSource({
    archive: lookupArchive('eth-mainnet'),
    chain: 'https://rpc.ankr.com/eth'
  })
  .setBlockRange({ from: 6175243 })
  .setFinalityConfirmation(75)
  .addLog({
    address: [ GRAVATAR_CONTRACT ],
    topic0: [
      events.NewGravatar.topic,
      events.UpdatedGravatar.topic,
    ],
  })

