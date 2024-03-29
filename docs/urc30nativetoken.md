---
id: urc30nativetoken
title: URC-30 Native Token
sidebar_label: URC-30 Native Token
---

<div  class="u_warning">
<span><img src="../img/icon/warning-icon.png" /></span>
<span>From block version 5, the native URC-30 token is migrated to native URC-20 token!</span>
</div>
URC-30 Native token is the native token on UniChain network. It has the same function as the URC-20 token but the big difference is that It is not based on smart contracts. Users can interact with the token by using APIs from blockchain nodes. Unlike URC-20 token, transferring URC-30 Native token does not require UNW as the transaction fee (gas). Instead, the transaction fee is from the token itself.
The following picture describes how the transaction fee model in URC-30 works.

![URC-30 token fee](../img/urc30_token_fee.png)

Each URC-30 Native token has the token pool fee providing the transaction fee (in UNW) for all token transfer. The pool is initiated by the token owner and contributed by anyone. When user A transfers a token to user B, for example 100 token X, the following will occur:

- The pool fee of token X will be taken out for executing the transfer transaction. Currently, It costs about 0.000268 UNW
- An amount of token X will be transfer to token owner, for example 1 token X
- User B only receive 99 token X

The token owner can specify the transaction fee in terms of token to balance out with the UNW deposited to the token pool.

The basic functions of URC-30 Native token as below:
- Create an URC-30 Native token
- Transfer token from users to users
- Transfer token for future uses (same as lock token)
- Update token information
- Exchange token with UNW
- Mint token (increase the total supply)
- Burnt token (decrease total supply)
- Contribute fee to the token pool
- Transfer ownership

### Issue URC-30 Native token on UniWallet
Users can issue URC-30 Native tokens by using wallet-cli, APIs, SDK ... but the simplest way is to use [UniWallet](https://uniwallet.world).

<ul>
  <li>Step 1: Go to UniWallet website</li>
  <li>Step 2: Login to your wallet</li>
  <li>Step 3: Navigate to the Token Tool on the left panel and fill the token information</li>
  <li>Step 4: Submit and input your wallet password. A txid will be returned if everything is OK  </li>
</ul>

![Create URC-30 Token](../img/create_urc30_token.png)

The following describes the token params in details

- Token Name: The name of the token. The name must be unique, less than 32 human-readable characters.
- Abbr: Abbreviation of the token, Abbr should less than 32 human-readable characters
- Total supply: Total supply is the supply at the token creation. It should be integer number with the range from 1 to 2^63 - 1
- Max supply: The maximum supply of the token. It should be integer number with the range from 1 to 2^63 -1
- Start time: Start time is the time that token can be used. Token can be issued for future uses. - Date and time are from UTC timezone. The default value is now (token can be used after creation)
- End time: End time is the time that token cannot be used. The default value is 50 years and maximum value is 200 years (from now)
- Url: the url to website or information of token creators.
- Extra fee rate: The extra fee rate is the transaction fee calculated in percentage of transferred amount. For example, if the extra fee rate is 1%, when transferring  100 token X from user A to user B, there will be 100 token X transferred from A to B, 1 token X will be transferred to the token creator. Value range of extra fee is from 0 to 100
- Fee: The transaction fee for transferring a token regardless of token amount. Please note that the token transaction fee of transferring a token will be transaction fee and extra fee.  For example, if the fee is set to 2, the extra fee rate is set to 1%. The total transaction fee when transferring 100 token X will be 2 + 1% * 100 = 3 token X, total token subtracted  from source account will be 100 token X, token owner receives 3 token X fee, target account receives 97 token X.
- Lot: the minimum token amount to transfer in each transaction. It should be integer number with the range from 1 to 2^63 - 1
- Conversion rate: The rate when users exchange UNW to token. This conversion rate is calculated by the number of token and number of UNW in Ginza unit. Please note that 1 UNW = 10^6 Ginza. For example: The *Token quantity = 1* and *Ginza quantity = 1000* (1 token for 0.001 UNW). If calling the exchange API with 10 UNW, users will get 10/0.001 = 10000 token.
- Fee pool: The initial fee pool for token. Minimum value is 10 UNW (enough for 37453 transactions at the moment) and everyone can always contribute a token fee pool later.
- Description: the brief description of the token

*Please note that the transaction fee for issuing token is 500 UNW*

### Transfer URC-30 Native token
Transfer URC-30 Native token is just like transfer UNW.
Users click on the *Send*  button, choose a token to send and enter the receiver address, token amount then confirm and input the wallet address.
If the *Send Future* is chosen, users must specify the *available time* of the token to be spent. The *Send Future* is the same as the lock function. Although token is in receivers wallet, they can only withdraw and use that token when after the *available time*
![Transfer Token](../img/transfer_urc30_token.png)

To withdraw future token, users login to wallet and select the token on the *Future Token* drop box then click on *Withdraw* button.
![Transfer Token](../img/future_urc30_token.png)

### Update URC-30 Native token
Most of URC-30 Native token params can be updated except the token name, token abbreviation, max supply and start time.
When a token is updated, It cannot be used in 180 seconds (users cannot transfer, contribute fee …). This amount of time informs users that some token parameters are changed and users may take a look at token information before transacting.
To update a token: go to UniWallet, login, click to the Token Tool in the left panel then update the token. Please note that only token owners can perform this operation.

### Exchange URC-30 Native token
Users can exchange (or buy) token by UNW.
Step to exchange token on UniWallet:
- Go to [UniWallet](https://uniwallet.world) and login
- Click on Token Tool
- Search for token you want to buy
- Enter amount of UNW to buy then confirm and input wallet password
  ![Exchange UNW token](../img/buy_urc30_token.png)

### Transfer token ownership
Token owner’s account can be transferred to another account in many cases such as when the account is compromised or the developer completed the integration and transfer to the operation account … When token ownership is transferred, the transaction fee in terms of token is sent to the new account and only the new account can manage the token (update, burn, mint).  Token will be suspended in 180 seconds to inform users from this operation.

### Interact with URC-30 Native token by APIs
Developers can interact with URC-30 Native tokens by node’s APIs such as issue token, update token, exchange token, get token, transfer ownership …
The full list API can be found here: [URC-30 APIs](fullNodeAPI#urc30-token)
