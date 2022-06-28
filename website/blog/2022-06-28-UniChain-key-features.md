---
title: The UniChain's unique features
author: Henry Nguyen
authorURL: https://twitter.com/Henry_ngv
authorImageUrl: ../../../../img/blog/identity-01.png
---

Unichain is a layer-1 blockchain platform focusing on smart society 5.0, web3 and metaverse.
UniChain combines many current advanced technologies from various blockchain platforms and has launched mainnet since June 2020. The following features are really hard to find in other blockchain platforms.

## The native token 
Token is the digital assets that run on top of a specific blockchain platform, for example, USDT is a token that is deployed on Ethereum, TRON, Solana … There are many types of token but the most popular is the token based on ERC-20 standards which is usually used as the crypto currency. ERC-20 token types use smart contracts on blockchain platforms and depending on the type of blockchain they may have different names. For example, on Binance smart chain it is called BEP-20, on Tron it is called TRC-20, on UniChain it's URC-20… 

Although ERC-20 tokens are very popular in cryptocurrency (accounting for more than 90% on coinmarketcap), the creation and use of this token is not easy, especially for traditional users. 

### For token creators: 
To create tokens, you need to be technically savvy, especially in the field of blockchain. The number of engineers with knowledge of this technology and smart contract programming around the world is very scarce even if you hire a technical team with rich blockchain experience, there are still many problems such as security, the ownership of the token (because usually the programmer will be the deployer of the smart contract and they are the owner of the token) and costs. The above inadequacies make it possible for only a few people or organizations to create and own their tokens.

### For users: 
Tokens will mostly be used to transfer, receive or interact with Dapp, Defi applications (staking, farming...). All interactions with the token require the user to pay a fee in the native coin on the blockchain platform on which the token is running. For example: AXS is a token of Axie Infinity running on the Ethereum network. To send AXS from one person to another, users need to have ETH (native coin) as a transaction fee. Normally, to receive/transfer AXS token, users need to do the following:
- Create a wallet that support for ETH network (Metamask is a good one)
- Ask someone to transfer AXS to the wallet created above (the receive is simple)
- Send AXS to another wallet: 
    + Create an account on popular crypto exchanges (Binance, FTX, Houbi …)
    + Verify account by email, phone number, enable 2FA 
    + Complete the KYC by providing the legal documents (ID card, passport), biometrics (your face, portrait image …) 
    + Deposit fiat to your account or directly by coin or USDT on P2P market
    + Convert/exchange fiat, USDT to ETH (if not directly buy ETH)
    + Request withdraw ETH from exchange to your wallet created above
    + After some verification and confirmation, you get ETH on your wallet and you can start to send AXS to another wallet because you have ETH as the transaction fee.

You can see that the steps above are mandatory and very complicated even for the crypto-users. Those are the big obstacles that prevent blockchain technology from being widely applied

UniChain provides a great convenience to users with the native URC-20 tokens. 
Native URC-20 token follows the URC-20 token standards (and also compatible with ERC-20 on Ethereum network) but has the special features below: 
- Native URC-20 tokens run on top of UVM and reach the consensus by the built-in logics. That means the token does not require writing and deploying any smart contracts. Everyone can create their own tokens by using the web/mobile interface even for the farmers or grandmothers. No need to have a deep understanding of blockchain technology or spend the expensive on hiring the blockchain engineers.
- Native URC-20  tokens can be sent for future use. It’s equal to the lock function in smart contracts. Check the session below for more detail.
- Native URC-20 tokens can be transferred to other wallets without the native coin as the transaction fee, Instead, the fee will be charged in the token itself.

![Transaction fee flow in URC-20 token](../../../../img/blog/urc30_token_fee.png)
<div class="img-desc">Transaction fee flow in native URC-20 token</div>

This is a very special feature that helps to remove all completed steps (as denoted above) from other blockchain platforms and bring the blockchain technology close to life.
Detailed specs of native URC-20 token can be [found here](../../../../docs/urc30nativetoken)

## The native NFT 
NFT stands for Non-fungible token which can be represented for digital assets issued on a specific blockchain platform. Most NFT tokens follow the ERC-721 or ERC-1155 standards and tokens are created by smart contracts which are the obstacles for traditional users to access the great technology. Some application layers like OpenSea reduce the complexity of NFT creation but It’s the middle layers, users still not directly accessed to the blockchain platforms.

UniChain provides the native NFT token which follows the ERC-721 standards. Because It’s the native token (similar to native URC-20 token), users do not need to use the smart contract to create and interact with the token. Instead, NFT token can be created with some simple click from mobile/web interface. 
The detailed specs of native NFT token can be [found here](../../../../docs/urc721nativetoken).
Thanks to the native NFT, everyone can now tokenize their digital assets easier than ever. The painters can NFTize their masterpiece pictures, musicians can NFTize their musics and any physical assets can be digitized and NFTized on the UniChain network.

![Transaction fee flow in URC-20 token](../../../../img/blog/unichain-advance-feature-2.png)
<div class="img-desc">Minting the native NFT token is very simple</div>

## Send future 
Send future means that the assets are transferred from senders wallet to receivers wallet but receivers cannot use those assets until after the specific time in the feature. 
Let’s see the following story: 

There is a father who is about to die, he wants to pass all his assets to his 12-year-old son, but he only wants him to use the assets when he is an adult (above 18 years old for example). He can get a lawyer to create a will, but even so, he cannot be sure that the assets will only be used in the future or that the will may have been forged. If this old father knows UniChain, He may find the solution. 
And the solution is quite simple, just convert the physical assets to the digital assets and then send for the futures. He can set the expiration time for 6 years and the assets are on his son’s wallet, there is no way for the son to use the assets until he is 18 years old.
The _send future_ feature is very useful for many cases such as vesting schedule of token investment, escrow, fulfill a commitment … 

UniChain supports the _send future_ for both $UNW and native URC-20 tokens.

![Transaction fee flow in URC-20 token](../../../../img/blog/unichain-advance-feature-1.png)
<div class="img-desc">Send UNW in normal way and send future in UniWallet</div>

## DPOS-Hotstuff consensus algorithm 
The consensus algorithm is a process in computer science used to achieve agreement on a single data value among distributed processes or systems. There are many types of consensus such as the PoW (Proof of Work) in Bitcoin, Ethereum …, PoS (Proof of Stake) in Cardano, Solana, Celo … 
Each consensus has its own pros and cons, for example: the PoW seems more decentralized but It consumes huge amounts of energy and has low transaction throughput. The PoS is faster, consumes less energy but has the problem of _nothing at stake_ and seems more centralized. 
UniChain uses the hybrid consensus algorithm. It’s the combination of DPOS and Hotstuff which is lighter, energy friendly, high transaction throughput and more decentralized. 

To understand more about this consensus algorithm, please the the detail in [UniChain Whitepaper](https://developers.unichain.world/asset/Unichain-whitepaper-v2.pdf)

## The scalability 
Scalability is one of the very important factors of any blockchain platform. If the blockchain platform is not scalable, it is almost impossible to apply in real life.
Platforms using PoW consensus algorithms usually have low scalability (3-7 TPS in bitcoin, 15 TPS in Ethereum). Platforms using PoA,  POS, DPOS consensus algorithms usually achieve high speed (up to several thousand transactions per second)
UniChain is one of the few blockchain platforms that achieves impressive transaction throughput The transaction speed on the mainnet of UniChain can reach about 5000 TPS. With the upcoming sidechain architecture, transaction speeds across the entire network can be expected in the millions of TPS which is enough for any type of application. 

## The compatibility  and interoperability  
UniChain uses UVM to execute smart contracts. Because UVM is the EVM based, contracts written in solidity language in many blockchain platforms such as Ethereum, Binance Smart Chain, Avalanche … can also execute on the UniChain network. That means the application on other networks can migrate to UniChain easily and seamlessly. Blockchain developers who are familiar with other networks can add UniChain to their experience too.

To communicate with other networks, UniChain uses the bridge protocol. With the Uni Bridge, users can move their digital assets (coin, token) from UniChain to others easily and safely. 
Unlike many current bridges which use the centralized gateway (or network) to move assets among different platforms, Uni Bridge uses the decentralized approach. 
The Uni Bridge actually is a small blockchain platform which uses the PoS consensus algorithm. 

![Transaction fee flow in URC-20 token](../../../../img/blog/pos_structure.png)
<div class="img-desc">The PoS bridge architecture</div>

Every cross-chain transaction is validated by the validator nodes in the bridge. If It passes the majority of the validators in the bridge network, the transaction is valid, otherwise It will be rejected.
Because the bridge is a blockchain network, It has almost all of the functions of the blockchain platform: the consensus algorithm, reward mechanism, peer to peer communication, validator registration … The uni bridge solves the problems of traditional bridges such as the availability, security and decentralization. Using uni bridge protocol can prevent the cyber attacks which happen recently leading to the loss of hundreds of millions of dollars. The detailed technical information of Uni Bridge can be [found here](../../../../docs/posProtocolStructure)

In short, UniChain is a layer-1 blockchain platform with a lot of advanced features. UniChain can be used for many Defi, Web3, Metaverse applications. It can be also applied to many traditional businesses and helps non-crypto users to access blockchain technology easily and simply.
