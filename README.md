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

This quest is to migrate the [ENS Subgraph](https://docs.ens.domains/contract-api-reference/subgraphdata) to Squid SDK. The repo for the subgraph can be found [here](https://github.com/ensdomains/ens-subgraph). The resulting squid should match the GraphQL API of the subgraph as close as possible, by migrating `schema.graphql`. The judges reserve the right to request improvements afther the initial review of the submission. Reach out to the [Discord Channel]( https://discord.com/channels/857105545135390731/1155812879770058783) for any tech questions regarding this quest. 

# Quest Info

| Category         | Skill Level                          | Time required (hours) | Max Participants | Reward                             | Status |
| ---------------- | ------------------------------------ | --------------------- | ---------------- | ---------------------------------- | ------ |
| Squid Deployment | $\textcolor{green}{\textsf{Intermediate}}$ | ~40                    | 5                | $\textcolor{red}{\textsf{2000tSQD}}$ | open   |

# Acceptance critera

Each quest should be submitted as a PR and will be reviewed manually. The PR should contain `README.MD` with

- Instructions how to run the squid locally
- Sample Squid queries and the corresponding Subgraph queries

The code should be well documented. The judges will access:

- In-line commends where necessary
- Clarity of the code
- Performance and optimization (if [batching](https://docs.subsquid.io/basics/batch-processing/)  and [Multicall queries](https://docs.subsquid.io/tutorials/bayc/step-four-optimizations/#using-multicall-for-aggregating-state-queries) are used whenever appropriate)

# Useful links

- [https://docs.subsquid.io/deploy-squid/quickstart/](Quickstart)
- [TheGraph Migration guide](https://docs.subsquid.io/migrate/migrate-subgraph/)
