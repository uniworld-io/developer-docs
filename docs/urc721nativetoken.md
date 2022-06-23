---
id: urc721nativetoken
title: URC-721 Native Token
sidebar_label: URC-721 Native Token
---

URC-721 Native token is a Non-Fungible Token (NFT) built on top of UVM, compatible with Ethereum ERC-721 ([see more](https://docs.openzeppelin.com/contracts/2.x/erc721)) so that users can create, transfer, exchange NFT assets... Like URC-20 Native Token, we also had some extended features. Users can interact with the token by using APIs from blockchain nodes.

The basic functions of URC-721 Native Token are:
- Create new NFT contract
- Create/remove/renounce miner for a NFT contract
- Change or reaffirm the approved address for an NFT
- Enable or disable approval for a third party to manage all assets
- Mint new NFT
- Burn an NFT
- Transfer or transfer ownership of an NFT
- Get information of an NFT (balance, name, symbol, total supply, token uri, owner, approved or not)
- Get information of a contract or NFT (list contract, list NFT, contract information, token information)

### Issue URC-721 Native token on UniWallet
Users can issue URC-721 Native tokens by using wallet-cli, APIs, SDK ... but the simplest way is to use [UniWallet](https://uniwallet.world).

<ul>
  <li>Step 1: Go to UniWallet website</li>
  <li>Step 2: Login to your wallet</li>
  <li>Step 3: Navigate to the NFT Tool on the left panel and fill the token information</li>
  <li>Step 4: Submit and input your wallet password. A txid will be returned if everything is OK  </li>
</ul>

![Create URC-721 Token](../img/create_urc721_token.png)

The following describes the token params in details

- NFT Name: The name of NFT template.
- NFT Contract: The contract symbol of NFT template. The contract must be unique, only number and alphabet, no special character.
- Total supply: Total supply is the supply at the NFT token creation. It should be integer number with the range from 1 to 2^63 - 1.
- Minter address: The address of minter. Minter is address that allowed to mint a NFT token with this template.
- NFT Description: The brief description of the token.


### Interact with URC-721 Native token by APIs
Developers can interact with URC-721 Native tokens by node’s APIs such as issue token, update token, exchange token, get token, transfer ownership …
The full list API can be found here: [URC-721 APIs](fullNodeAPI#urc721-native-token)

