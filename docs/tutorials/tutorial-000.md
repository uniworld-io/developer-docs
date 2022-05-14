---
id: tutorial-000
title: General Information
---

## Overview
All tutorials contains the following parts:
- The general knowledge and explanation of general concepts. 
- Code example with comment or explanation 
- Link to source code (github) if any
- Technical notes

All the code examples are written in Nodejs and a few lines of bash script.

Although the target is for Unichain network, the tutorial’s concepts and source codes can be applied to many EVM’s blockchain platforms with little modification.
Developers can join the [UniLab Dao Discord](https://discord.gg/ncwvpc8e)  channel for discussing any topics asking for any questions

## Software requirement 
Each tutorial may require the different software package (see the _package.json_ for more detail) but in general, the following is required: 
### prerequisites: 
- OS: any OS but Linux based (Ubuntu, Mac …) are recommended 
- NodeJS: version > 10.x is required 
- Uniwallet extension
### Dependencies 
- Unichain-js ```npm install @uniworld/unichain-js```
- Axios: ```npm install axios```
- Bip39, Bip32, Ethers … may be required in some tutorials

## Public resource (Blockchain nodes)
Uniworld provides some resources for developers and applications to integrate with the Unichain network. As the public resources, all the nodes are accessed by publicity. We have the rate limit and cannot guarantee the availability if the nodes are over accessed. For stability and production use, please run your own nodes. The guides to run the blockchain nodes can be [found here](./tutorial-001)

### Testnet nodes:
Full Node:
- testnet-seed-1.unichain.world
- testnet-seed-2.unichain.world 

Relay Node:
- testnet-relay-1.unichain.world
- testnet-relay-2.unichain.world

Event:
- Testnet-event-1.unichain.world

### Mainnet nodes:
Full Node:
- seed-1.unichain.world
- seed-2.unichain.world 
- seed-3.unichain.world 

Relay Node:
- relay-1.unichain.world
- relay-2.unichain.world 
- relay-3.unichain.world 

Event:
- event-1.unichain.world
- event-2.unichain.world
- event-3.unichain.world

## Claim faucet 
We distributed 10 UNW for an address every 24 hours. Please note that UNW in testnet has no value and can be reseted at any time.

Get 10 UNW faucet here: [Faucet Link](/faucet)
