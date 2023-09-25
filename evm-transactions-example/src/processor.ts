import {EvmBatchProcessor} from '@subsquid/evm-processor'
import {lookupArchive} from '@subsquid/archive-registry'

const ACCOUNT_ADDRESS = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'

export const processor = new EvmBatchProcessor()
    .setDataSource({
        archive: lookupArchive('eth-mainnet'),
        chain: 'https://rpc.ankr.com/eth',
    })
    .setFinalityConfirmation(10)
    .setFields({
        transaction: {
            from: true,
            value: true,
            hash: true,
            input: true,
        },
    })
    // Txs sent to vitalik.eth
    .addTransaction({
        to: [ACCOUNT_ADDRESS],
    })
    // Txs sent from vitalik.eth
    .addTransaction({
        from: [ACCOUNT_ADDRESS],
    })
