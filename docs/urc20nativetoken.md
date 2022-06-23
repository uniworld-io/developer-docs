---
id: urc20nativetoken
title: URC-20 Native Token
sidebar_label: URC-20 Native Token
---

URC-20 Native Token is the native token on UniChain network. Generally, it is an update version of URC-30 Native Token and compatible with Ethereum ERC-20 ([see more](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20)), but we had made some extended features. Users can interact with the token by using APIs from blockchain nodes.

URC-20 Native token has all features of URC-30 Native Token, the extent functions are below:
- Transfer token from sender to recipient using allowance mechanism
- Allow token that spender spent on behalf of owner
- Approve amount as the allowance of spender over caller's token
- Get balance of token owned by account
- Get number of decimals used to get user representation
- Get token's owner
- Get token's name
- Get token's symbol
- Get token's total supply
- Get list contract token
- Get future token info
  
### Issue URC-20 Native token on UniWallet
Users can issue URC-20 Native tokens by using wallet-cli, APIs, SDK ... but the simplest way is to use [UniWallet](https://uniwallet.world).

<ul>
  <li>Step 1: Go to UniWallet website</li>
  <li>Step 2: Login to your wallet</li>
  <li>Step 3: Navigate to the Token Tool on the left panel and fill the token information</li>
  <li>Step 4: Submit and input your wallet password. A txid will be returned if everything is OK  </li>
</ul>

![Create URC-20 Token](../img/create_urc_20_token.png)

The following describes the token params in details

- Token Name: The name of the token. The name must be unique, less than 32 human-readable characters.
- Token Symbol: The symbol by which the token contract should be known
- Total supply: Total supply is the supply at the token creation. It should be integer number with the range from 1 to 2^63 - 1
- Max supply: The maximum supply of the token. It should be integer number with the range from 1 to 2^63 -1
- Start time: Start time is the time that token can be used. Token can be issued for future uses. - Date and time are from UTC timezone. The default value is now (token can be used after creation)
- End time: End time is the time that token cannot be used. The default value is 50 years and maximum value is 200 years (from now)
- Url: the url to website or information of token creators.
- Extra fee rate: The extra fee rate is the transaction fee calculated in percentage of transferred amount. For example, if the extra fee rate is 1%, when transferring  100 token X from user A to user B, there will be 100 token X transferred from A to B, 1 token X will be transferred to the token creator. Value range of extra fee is from 0 - 100
- Lot: the minimum token amount to transfer in each transaction. It should be integer number with the range from 1 to 2^63 - 1
- Fee: The transaction fee for transferring a token regardless of token amount. Please note that the token transaction fee of transferring a token will be transaction fee and extra fee.  For example, if the fee is set to 2, the extra fee rate is set to 1%. The total transaction fee when transfering 100 token X will be 2 + 1% * 100 = 3 token X, total token subtracted  from source account will be 100 token X, token owner receives 3 token X fee, target account receives 97 token X.
- Token quantity and Ginza quantity: The rate when users exchange UNW to token. This conversion rate is calculated by the number of token and number of UNW in Ginza unit below. Please note that 1 UNW = 10^6 Ginza.
- Conversion rate: The rate when users exchange UNW to token. This conversion rate is calculated by the number of token and number of UNW in Ginza unit. Please note that 1 UNW = 10^6 Ginza. For example: The *Token quantity = 1* and *Ginza quantity = 1000* (1 token for 0.001 UNW). If calling the exchange API with 10 UNW, users will get 10/0.001 = 10000 token.
- Fee pool: The initial fee pool for token. Minimum value is 10 UNW (enough for 37453 transactions at the moment) and everyone can always contribute a token fee pool later.
- Create Account Fee: Fee for creating new account
- Description: the brief description of the token

*Please note that the transaction fee for issuing token is 500 UNW*

You can transfer, exchange, update or interact with URC-20 Native token like URC-30

### Interact with URC-20 Native token by APIs
Developers can interact with URC-20 Native tokens by node’s APIs such as issue token, update token, exchange token, get token, transfer ownership …
The full list API can be found here: [URC-20 APIs](fullNodeAPI#urc20-native-token)