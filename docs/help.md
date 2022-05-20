---
id: help
title: Help
sidebar_label: Help
---

## Contact for help

If you need the help, please contact us via emails
- support@uniworld.io
- dev@uniworld.io
- support@unichain.world
          
Or join us on Telegram channels
- [UniWorld Ecosystem](https://t.me/UniworldOfficial)
- [Group Discussion](https://t.me/MiaworldMultiple)
- [UniMe Channel](https://t.me/UnimeOfficial)
- [UniBot Channel](https://t.me/UnibotOfficial)
- [UniChain](https://t.me/UnichainWorldOfficial)

- [Discord for development discussion](https://discord.gg/W4teW5mThv) 

## Frequently Ask Questions
<details>
  <summary>__1. What is UniChain?__</summary>
UniChain is a blockchain platform that modify, customize and
combine the cutting-edge technologies so that It is highly scalable,
security and has capacity to handle millions of transactions per
second.
</details>

<details>
  <summary>__2. What is the relationship between UniChain and UniWorld?__</summary>
UniChain is one of UniWorld products, Most of Uniworld products use
UniChain, It’s an ecosystem.
</details>

<details>
  <summary>__3. What is UniChain smart contract languague?__</summary>
UniChain use Solidity as the primary smart contract language. The smart contracts written in UniChain are compatible with Ethereum and Tron. If you have your Dapps on ETH and Tron, You can also deploy on UniChain network.
</details>

<details>
  <summary>__4. Does UniChain use source code from other project?__</summary>
Yes, UniChain uses source code from many open source projects, including Bitcoin, Tron, Libra ... You may see that many concepts and models that are used in Tron also re-used in UniChain.
</details>

<details>
<summary>__5. What cryptography algorithms are used in UniChain?__</summary>
UniChain uses many common cryptography algorithms that are already used in other blockchain such as SHA256, SHA512, Keccak256, Keccak512, Elliptic Curve Digital Signature (EDCA).
Private key in Unichain is 256 bit long (64 hex characters). Address is encoded and start with letter U (stand for UniWorld/UniChain)
</details>

<details>
<summary>__6. What type of database does UniChain use?__</summary>
Currently, We support LevelDB and RockDB. LevelDB is the default engine. We are investigating other database like MogoDB and will integrate in the near feature
</details>

<details>
<summary>__7. Why DPOS Hotstuff is chosen as a consensus mechanism?__</summary>
DPOS and Hotstuff are two popular consensus algorithms that are already used in other blockchain networks such as EOS, Facebook Libra.
We, UniChain, are not the one who create these algorithms but the first one who combines the advantages of both.
DPOS removes the energy waste from the PoW algorithm. It works based on community power (vote). Noone can control the network.
In traditional DPOS (with BFT) (that is used in EOS), the communication in the network is the star topology which is O(n3)complexity. Our approach reduce to nearly linear model: O(n)
DPOS Hotstuff help our network faster, more scalable and security
Combining DPOS Hotstuff also help block finalized after 1 block
</details>

<details>
<summary>__8. Can you explain how blocks are produced in the UniChain network?__</summary>
Blocks are produced intervally. Currently, It is set to 1 second, but depends on network conditions such as high latency or unstable state ..., It may increase (ex: 3 seconds).
Witnesses are responsible for transaction validation and block creation. 
For every interval, the are two process: (1) produce block, (2) prepare for next producer (running the random witness in the next phase to produce block based on random algorithm that described in Whitepaper) 
After transactions are validated, the current witness packages all transactions into block, signs to block use its private key and broadcast information to the network.
</details>

<details>
<summary>__9. How to choose witnesses in the network?__</summary>
Witnesses are very important in the UniChain network. It must be chosen from the voting process. Noone can take control.
Everyone can apply to be a witness as long as they meet some certain conditions (such as have some balance in account, and pay for transaction fees). 
To become a real witness, candidates must persuade the community for their voting. Every 6 hours, the network will be refreshed. The top 55 candidates which received the most votes from the community will become the active witness.
</details>

<details>
<summary>__10. Why is UniChain more scalable than other networks?__</summary>
By using Dpos Hotstuff consensus, UniChain removes the latency from mining-based blockchain platforms which may measure in minutes. 
By using side chain architecture, UniChain can improve the transaction per second (TPS) up to millions.
</details>

<details>
<summary>__11. How can UniChain protect the network from spammers?__</summary>
There are many ways to protect spammers such as:
- Limit the connection and request from an IP address
- Transaction fees: If someone spams the network, they must have to pay for transaction fees which cost them in real $. 
- Each transaction is validate carefully before adding to block
</details>

<details>
<summary>__12. Are UniChain network parameters fixed or flexible?__</summary>
Most Unichain network parameters are flexible. It mean that committee/witness can change parameters 
To change network params, committee/witness create a proposal then broadcast to all networks. If the proposal receives enough vote from others committees/witnesses then the network parameter will be changed in the next maintenance time
</details>

<details>
<summary>__13. How does UniChain connect to other blockchain networks?__</summary>
We develop our bridge protocol to connect UniChain to other blockchain network such as Bitcoin or Ethereum
Protocol consists of a smart contract system and the edge gateway. It converts data between the chains automatically and decentralized.
</details>

<details>
<summary>__14. Why Transaction fee is burning to unknown-private-key address instead of rewarding to miners__</summary>
First of all, there are no miners in the UniChain network. Block is produced by witnesses. Witnesses will be rewarded and may share the rewards with their voters. Transactions fees will be burned to avoid the inflation so that the value of Uni coin will be stable.

The address that received the burning coin is missing its private key (address that We don’t know the private key ie: U00000000000.... ). This address is also locked from sending Uni coins. 
</details>

<details>
<summary>__15.Do you have any plans to improve UniChain?__</summary>
Yes, UniChain is an active project, It is improving day by day. One of the features We are researching is quantum resistance. You know that quantum computing threatens most current blockchain technologies. We must be ready for that. 
</details>

<details>
<summary>__16. Can you compare Unichain with other blockchain platforms__</summary>
UniChain is the first blockchain platform that takes advantage of most modern blockchain technologies such as Dpos-Hotstuff, Side chain, Cross chain protocol … (other cutting-edge technology like quantum resistance also investigated)

UniChain is designed to be secure and scalable, the transaction per second (TPS) may be up to millions.
UniChain has strong ecosystem, It’s not only technologies but also the whole real life applications

It is an active project, hundreds of talent engineers working on it and is supported by several big financial firms.
</details>
