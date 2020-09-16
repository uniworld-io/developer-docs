---
id: unichainToken
title: UniChain token
sidebar_label: UniChain Token
---


## UniChain Token

Tokens are simply digital assets that are being built on top of the blockchain blockchain platform (for example UniChain, EOS, ETH ...). They benefit from blockchain's existing infrastructure instead of developers having to build an entirely new blockchain. UniChain supports two types of token: UNC and UNC-20. 
- UNC token is the build-in token on UniChain network, It's very easy to create with simple functions including *create token*, *transfer token* and *swap token (UNW to tokens)*
- UNC-20 token is the extension of UNC token. User's can defined more business logics by using the smart contract system (for example: lock the token, transfer with condition ...). 

## How to create UniChain token

### For UNC token type:
**Use wallet-cli**
```
>AssetIssue <AssetName> <AbbrName> <TotalSupply> <UnxNum> <AssetNum> <Precision> <StartDate> <EndDate> <Description> <Url>
```
- AssetName: Name of token
- AbbrName: Token name abbreviation
- TotalSypply: Total supply
- UnxNum, AssetNum repesents the ratio of UNW:Asset
- Precision: Precision number
- StartDate: Start date of token, must greater than today
- EndDate: Date that token expires.

**Use [UniTools](https://utools.unichain.world)**
- Go to [UniTools](https://utools.unichain.world) website
- Login with UniWorld account. Please register a new account at [UniWorld.io](https://accounts.uniworld.io) if you don't have 
- Navigate to *Token tool* in the left pannel and fill all the token information
- Confirm and enter your password to broacast the transaction

![issue token on Unitools](../img/create_token.png) 

*Please note that the transaction fee for issuing token is 500 UNW*

### For UNC-20 token type
UNC-20 token is the smart a smart contract. Please go to smart contract session to learn how to write and deploy smart contract on UniChain network.