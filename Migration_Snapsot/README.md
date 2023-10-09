

# Snapshot Subgraph

This is a starter **Snapshot Subgraph** ported from The Graph [Snapshot Subgraph](https://thegraph.com/hosted-service/subgraph/snapshot-labs/snapshot). 
See [Squid SDK docs](https://docs.subsquid.io/) for a complete reference.

## Quickstart and run locally

```bash
# 0. Install @subsquid/cli a.k.a. the sqd command globally
npm i -g @subsquid/cli

# 1. Install dependencies
npm ci

# 2. Clone current repository
git clone https://github.com/Asdjamez/ens-subgraph-migration/tree/main/Migration_Snapsot

# 3. Build project
sqd build

# 4. Start a Postgres database container and detach
sqd up

# 5. Build and start the processor
sqd process

# 6. The command above will block the terminal
#    being busy with fetching the chain data, 
#    transforming and storing it in the target database.
#
#    To start the graphql server open the separate terminal
#    and run
sqd serve
```
>> NOTE: A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).

## Query Examples:

### Squid Query





