<p align="center">
<picture>
    <source srcset="https://uploads-ssl.webflow.com/63b5a9958fccedcf67d716ac/64662df3a5a568fd99e3600c_Squid_Pose_1_White-transparent-slim%201.png" media="(prefers-color-scheme: dark)">
    <img src="https://uploads-ssl.webflow.com/63b5a9958fccedcf67d716ac/64662df3a5a568fd99e3600c_Squid_Pose_1_White-transparent-slim%201.png" alt="Subsquid Logo">
</picture>
</p>

[![docs.rs](https://docs.rs/leptos/badge.svg)](https://docs.subsquid.io/)
[![Discord](https://img.shields.io/discord/1031524867910148188?color=%237289DA&label=discord)](https://discord.gg/subsquid)

[Website](https://subsquid.io) | [Docs](https://docs.subsquid.io/) | [Discord](https://discord.gg/subsquid)

# ENS Subgraph migration 

**ATT: We updated and re-opened this quest to submissions on Oct 27th**

This quest is to migrate the [ENS Subgraph](https://thegraph.com/hosted-service/subgraph/ensdomains/ens) to Squid SDK. The repo for the subgraph can be found [here](https://github.com/ensdomains/ens-subgraph). The resulting squid should match the GraphQL API of the subgraph as close as possible, by migrating `schema.graphql`. The judges reserve the right to request improvements afther the initial review of the submission. Reach out to the [Discord Channel]( https://discord.com/channels/857105545135390731/1155812879770058783) for any tech questions regarding this quest. 

# Quest Info

| Category         | Skill Level                          | Time required (hours) | Max Participants | Reward                             | Status |
| ---------------- | ------------------------------------ | --------------------- | ---------------- | ---------------------------------- | ------ |
| Squid Deployment | $\textcolor{orange}{\textsf{Medium}}$ | ~100                    | 5                | $\textcolor{red}{\textsf{5000tSQD}}$ | ended |

# Acceptance critera

Ultimately, the solutions are accepted at the discretion of judges following a manual review. This sections is a rough guide that is in no way binding on our side.

Some of the reasons why the solution will not be accepted include:
- squid does not start
- squid fails to sync fully due to internal errors
- [batch handler filters](https://docs.subsquid.io/evm-indexing/configuration/caveats/) are not set up correctly (leads to a late sync failure in [RPC-ingesting](https://docs.subsquid.io/evm-indexing/evm-processor/#rpc-ingestion) squids)
- data returned for any query is not consistent with subgraph data

You may find [this tool](https://github.com/abernatskiy/compareGraphQL) to be useful for squid to subgraph API comparisons.

It is desirable that your solution:
- includes a suite of test GraphQL queries that touches every [schema entity](https://docs.subsquid.io/store/postgres/schema-file/entities/) and, if used, every [custom resolver](https://docs.subsquid.io/graphql-api/custom-resolvers/) at least once, with corresponding subgraph queries (listing in README is enough)
- has high code quality (readability, simplicity, comments where necessary)
- uses [batch processing](https://docs.subsquid.io/basics/batch-processing/) consistently
- avoids any "sleeping bugs": logic errors that accidentally happen to not break the data
- follows the standard squid startup procedure:
  ```
  git clone <repo_url>
  cd <repo_url>
  npm ci
  sqd up
  sqd process &
  sqd serve
  ```
  If it does not, describe your startup procedure in the README.

Please test your solutions before submitting. We do allow some corrections, but judges' time is not limitless.

To submit, invite the following github accounts to your private repo : [@dariaag](https://github.com/dariaag), [@belopash](https://github.com/belopash), [@abernatskiy](https://github.com/abernatskiy) and [@dzhelezov](https://github.com/dzhelezov).

# Rewards

tSQD rewards will be delivered via the [quests page](https://app.subsquid.io/quests) of Subsquid Cloud. Make sure you use the same GitHub handle to make a submission and when linking to that page.

Winners will be listed at the quest repository README. If you do not wish to be listed please tell us that in an issue in your submission repo.

# Useful links

- [Quickstart](https://docs.subsquid.io/deploy-squid/quickstart/)
- [TheGraph Migration guide](https://docs.subsquid.io/migrate/migrate-subgraph/)
- [ENS Subgraph source code](https://docs.ens.domains/contract-api-reference/subgraphdata)
