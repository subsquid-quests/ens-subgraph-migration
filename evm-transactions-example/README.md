[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/subsquid-labs/transactions-example)

### this example shows how to move `vitalik.eth` operations with subsquid.


## 🟢 Updates

```shell
sudo apt update -y && sudo apt upgrade -y
```

```shell
apt install npm
```

## 🟢 Docker Setup

```shell
apt install docker-compose
```

```shell

sudo apt-get update && sudo apt install jq && sudo apt install apt-transport-https ca-certificates curl software-properties-common -y && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add - && sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable" && sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin && sudo apt-get install docker-compose-plugin

```

## 🟢 Subsquid Cli install

```shell
npm i -q @subsquid/cli@latest
```

## 🟢 Repo Clone

```shell
git clone https://github.com/subsquid-quests/ens-subgraph-migration.git
```

```shell
cd snapshot-subgraph-migration/evm-transactions-example/
```

<hr>
** Open the processor.ts file in the src folder and change the chain section.

![image](https://github.com/HerculesNode/ens-subgraph-migration/assets/101635385/214c803c-259f-4535-a0ce-16462ff7623d)

<hr>

## 🟢 How to run a squid

```shell
npm ci
```

![image](https://github.com/HerculesNode/ens-subgraph-migration/assets/101635385/b182047b-6cc9-4c78-95b5-5f979d8b10cf)

```shell
cd snapshot-subgraph-migration/evm-transactions-example/
```


```shell
sqd codegen
```
![image](https://github.com/HerculesNode/ens-subgraph-migration/assets/101635385/a0001bdd-aa88-4f04-abeb-2806c9b6d45c)

```shell
sqd typegen
```
![image](https://github.com/HerculesNode/ens-subgraph-migration/assets/101635385/fe970208-eb28-4e1f-a553-526f9a5beca0)

```shell
sqd build
```
![image](https://github.com/HerculesNode/ens-subgraph-migration/assets/101635385/b1d194f1-5d62-4c62-88d1-777f1d143628)

```shell
sqd up
```
![image](https://github.com/HerculesNode/ens-subgraph-migration/assets/101635385/d84b1eb0-34f4-4433-b88b-97deb5ef1062)

```shell
sqd migration:generate
```
![image](https://github.com/HerculesNode/ens-subgraph-migration/assets/101635385/24ccd2f1-a0b6-4d6d-a225-1fcb81a30bc6)

```shell
sqd process
```
![image](https://github.com/HerculesNode/ens-subgraph-migration/assets/101635385/48e567d3-8494-4a31-9d7f-e318e2dff57a)

## 🟢 Let's connect to our graphql server.

```shell
sqd serve
```
![image](https://github.com/HerculesNode/ens-subgraph-migration/assets/101635385/5edb6350-a78b-4c35-afb5-4df651c6c768)


Let's go to our browser and connect with our ip address and see the output.

`http://IPADRESS:4350/graphql`

![image](https://github.com/HerculesNode/ens-subgraph-migration/assets/101635385/23a3e2da-6e74-4aff-9520-2eb215ecfe76)

