

# Snapshot Subgraph

This is a starter **Snapshot Subgraph** ported from The Graph [Snapshot Subgraph](https://thegraph.com/hosted-service/subgraph/snapshot-labs/snapshot). 
See [Squid SDK docs](https://docs.subsquid.io/) for a complete reference.

## Quickstart and run locally

```cmd
# 0. Install @subsquid/cli a.k.a. the sqd command globally
npm i -g @subsquid/cli

# 1. Clone current repository
git clone https://github.com/Asdjamez/Migration_Quest_Snap

# 2. Load the repository
cd Migration_Quest_Snap

# 3. Install dependencies
npm i

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
#    To start the graphql server open the separate  cmd terminal
#    and run
sqd serve
```
>> NOTE: A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).

## Query Examples:

### Squid Query
 - 1st
```
query MyQuery {
  gravatars(limit: 2) {
    displayName
    id
    imageUrl
    owner
  }
}
```
Output:
<img width="1257" src="https://github.com/Asdjamez/Migration_Quest_Snap/blob/main/assets/gravatar1.jpg">

 - 2nd
```
query MyQuery {
  gravatarByUniqueInput(where: {id: "0x8"}) {
    owner
    imageUrl
    displayName
    id
  }
}
```
Output:
<img width="1386" src="https://github.com/Asdjamez/Migration_Quest_Snap/blob/main/assets/gravatar2.jpg">


 - 3rd:
```
query MyQuery {
  gravatars(where: {displayName_not_endsWith: "a"}) {
    id
    displayName
    imageUrl
    owner
  }
}

```
Output
<img width="1392" src="https://github.com/Asdjamez/Migration_Quest_Snap/blob/main/assets/gravatar3.jpg">

