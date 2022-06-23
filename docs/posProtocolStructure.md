---
id: posProtocolStructure
title: Bridge Protocol Structure
sidebar_label: Protocol Structure
---

## Protocol Structure

The Cross-Chain Swap Protocol solution consists of 2 key points:

1. **Protocol Layer** – Smart contracts on each blockchain.
2. **PoS Bridge Level** – Off-network verification nodes.

![pos_bridge_overview](../img/pos_structure.png)


**The protocol** layer is a set of smart contracts on the blockchain that are used to manage assets, verify signatures of validators/relayers and reach consensus between validators; since a transaction is considered valid only if the required threshold of minimum validators confirmations is reached. The smart contract stores and assigns parameters such as:

- Info token mapping
- A list of selected validators
- Chain id
- Transaction origin, and much more.

The pos-bridge layer is based on a set of physical servers, each of which performs an assigned role – that of a validator or a relayer.

