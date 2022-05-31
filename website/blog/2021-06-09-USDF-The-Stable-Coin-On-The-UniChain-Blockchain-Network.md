---
title: USDF — The Stable Coin from UniFund
author: Jimmy
authorURL: 
authorFBID: 
---

USDF — The Stable Coin On The UniChain Blockchain Network

USDF is backed by UniFund assets in order to retain a stable value of USDF being equal to~ $1. It’s also the native token of the UniFund platform that can be used to investigate, transfer and exchange among other operations. The USDF’s smart contract can be found here: https://github.com/Unifund-De-Capital/USDF-stable-coin

<!--truncate-->

### How USDF Works
Stable coins including USDT and USDC are backed by/pegged to real assets such as gold, FIAT or even ownership shares of real estate. This is to ensure a stable value. Owners of such coins can redeem or exchange them for the asset they are backed by at any time, for example US dollars. In the case of USDF the value is tied to another stable coin, USDT. The following diagram illustrates how this works:
![usdf flow](../../../../img/blog/unifund-01.jpeg)

### Deposit flow
1.1. Users/Investors requests to deposit on the UniFund platform.

1.2. Users/Investors will be redirected to a coin deposit gateway. Currently we support the Binance Smart Chain and users can authenticate with Trust Wallet or Metamask/ the Binance extension.

1.3. After users/investors complete their deposit, UniFund will confirm the amount and convert the amount of coins or tokens to their corresponding USDT value at the most recent exchange rate

2.1 USDF is minted on UniChain

2.2. USDF is returned to UniFund and allocated to the users/investors

### Withdraw flow
![usdf withdraw flow](../../../../img/blog/unifund-02.jpeg)

1. Users/Investors request to withdraw from the UniFund platform. Currently, either USDT or USDF can be withdrawn

2. USDT or USDF will be sent to users/investors wallet address

3. If the request is USDT, the corresponding amount of USDF will be burnt on the UniChain via smart contract as the backed value has been withdrawn from the system

Unifund’s smart contract can be found here: https://github.com/Unifund-De-Capital/Unifund-Smartcontract

*The UniFund De Capital team*

Read the origin article [here](https://medium.com/uniworld-io/usdf-the-stable-coin-on-the-unichain-blockchain-network-270bbdcf8a7e)

