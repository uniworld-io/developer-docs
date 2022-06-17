---
id: buildAndDeployPosBridge
title: Build And Deploy PosBridge
sidebar_label: Build And Deploy PosBridge
---


Smart contract can be deployed on UniChain network using wallet-cli, Unichain-js or node API. This document guide you deploying smart contract using another tool, the *utool*. The complete guide and example are [here](https://github.com/uniworld-io/utool-template)

### Install utool
Install Utool using the command below (for Linux system)
```
sudo npm install @uniworld/utool -g
```
### Compile smart contract
```
utool compile
```
Results look like following
```
Compiling ./contracts/ConvertLib.sol...
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/YourCoin.sol...
Writing artifacts to ./build/contracts
```
### Deploy smart contract
Edit your utool.js configuration file, change the private key then run the following commands

- For the development environment
```utool migrate development``` 
- For the testnet environment
```utool migrate testnet``` 
- For the mainnet environment
```utool migrate mainet``` 

Results after running the migrate command will look like following:
```
Running migration: 1_initial_migration.js
  Deploying Migrations...
  Migrations:
    (base58) Udn2bvDdr3pkiM4ZPWkVt9dXeT9vXK2ZkL
    (hex) 44ad3d8faa982783f8b4a92bcad94de5bfd9983ff0
Saving successful migration to network...
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying ConvertLib...
  ConvertLib:
    (base58) UZ4guXydCCgha1QLKkQ5LnZdk2peXUabK1
    (hex) 44798b8fe01219bc66f8c5073c07c530ef70867e00
  Linking ConvertLib to YourCoin
  Deploying YourCoin...
  YourCoin:
    (base58) UV3YUQur8BAxM8EWyjhyczZ3ycjXNW7Lwo
    (hex) 444d739a712f5a951b3e0c7484a0ac28ea5ef98563
Saving successful migration to network...
Saving artifacts...
```