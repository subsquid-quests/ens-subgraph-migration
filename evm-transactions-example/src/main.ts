import {TypeormDatabase} from '@subsquid/typeorm-store'
import {processor} from './processor'
import {Transaction} from './model'

processor.run(new TypeormDatabase({supportHotBlocks: true}), async (ctx) => {
    let transactions: Transaction[] = []

    for (let block of ctx.blocks) {
        for (let transaction of block.transactions) {
            transactions.push(
                new Transaction({
                    id: transaction.id,
                    block: block.header.height,
                    timestamp: new Date(block.header.timestamp),
                    from: transaction.from || '0x',
                    to: transaction.to || '0x',
                    hash: transaction.hash,
                    input: transaction.input,
                })
            )
        }
    }

    await ctx.store.insert(transactions)
})
