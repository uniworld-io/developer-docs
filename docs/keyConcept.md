---
id: keyConcept
title: Key Concept
sidebar_label: Key Concept
---


Unichain is a highly scalable blockchain platform that takes
advantage of cutting-edge technologies which have the capacity
of handling millions of transactions per second without
compromising decentralization and security.
UniChain is first and foremost designed to serve the Uniworld.io
ecosystem. It is a public Blockchain featuring so-called
multi-side-chains so everyone can connect and use and build upon
this platform for a plethora of purposes. The development tool
kits to work with UniChain ecosystems are provided by us as
well.

### UniChain use DPOS-HotStuff as the consensus algorithm
Consensus is the heart of any Blockchain platform, The previous consensus algorithm such as PoW, PoA, POS ... do not meet the requirement of security and scalability. 
UniChain combine the DPOS and HotStuff consensus algorithm (we call It the DPOS-HotStuff). DPOS has been proved to be a good consensus algorithm which has been implemented in EOS, Bitshare ... while HotStuff is currently implement in Facebook Libra project. The combination of the two cutting-edge consensuses makes UniChain unique and more scalable

### UniChain use the multi-chain architecture
UniChain is a Blockchain platform that supports
multi-chain, with the root and central chain being
UniChain. This core chain plays an important role to
validate all side-chain’s states and also links them
together.

![side chain architecture](../img/sideChain_architecture.png)

Each side-chain has its own block- and transaction
validators. Side-chains are independent of each other,
and have a separate ledger. Operations on chain X cannot
UniChain - The Next Generation Blockchain For AI & Blockchain Economics
- UniWorld.io Ecosystem
take effect on chain Y and vice versa. Because of this
independence, we can ‘scale-out’ the platform as much as we
want.
With side-chains able to handle around ten thousand
transactions per second, we will reach millions worth if
the platform has 100 side-chains.

### UniChain has its own bridge protocol 
Side-chains communicate with the root-chain and other
chains via smart contracts. UniChain provides the smart
contract system for this communication called the UniBridge
protocol. Funds on side-chains are also held on the
root-chain. This allows for fraud proof deposits and
withdrawals of funds on side-chains via state transition.
Side-chains do not disclose all information on the
root-chain. Instead, blockheader hashes and a bit of states
are submitted and if there is proof of fraud on the
root-chain, then the block is rolled back and the block
creator is penalized by the smart contract system governed
by the root-chain.
The UniBridge protocol also helps UniChain to communicate
with other Blockchain platforms. I.e. information, token in
exchange to Ethereum, Bitcoin, or EOS and so forth.

![Bridge protocol](../img/bridge_protocol.png)

In case of the exchange of tokens to other Blockchain
platforms, the UniBridge protocol works as a decentralized
exchange.