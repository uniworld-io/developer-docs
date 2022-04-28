---
id: wallet
title: UniChain Wallet
sidebar_label: Wallet
---

### UniChain Wallet
UniChain has many wallet applications: wallet cli (command line), web wallet, mobile wallet, web extension wallet. Many partners are going to integrate Unichain into their wallets.

All Unichain's wallets are client side. That means the private keys are always on users devices and users are always responsible for the funds on their wallets.

### Wallet CLI 
Wallet CLI is the command line wallet that is always released with unichain core modules. It’s basic and supports the full features of the unichain core. However, It’s not friendly and mostly used for developers or technical users. 
Users can __[download uniwallet here](https://github.com/uniworld-io/wallet-cli)__  

Usage example: 

Get account balance
```
wallet>getbalance UkLYd6k11DXsFHBDFWJEYgejHC1Arn4tpW
```
Send 1 UNW to another address
```
wallet>sendcoin UkLYd6k11DXsFHBDFWJEYgejHC1Arn4tpW 1000000
```
To see all commands and usages, please type *help*
```
wallet>help
```

### Web wallet 
The web wallet supports most of the functions including sending coins, sending a token, creating a token, interacting with smart contracts, voting for witnesses … 

Users must remember the encrypted passwords or the backup key/mnemonic words, otherwise no one can recover the funds once the password or key is lost.
Access the __[web wallet here](https://uniwallet.world)__ , create a new one (or login) then start to use it.

### Mobile wallet
Mobile wallet is designed for simple use and focuses on the end-users. Users can transfer UNW coins, URC20/URC30 tokens, vote for witnesses and claim rewards. 

![mobile wallet image](../img/mobile-wallet.png)

__[Download wallet for android here](https://play.google.com/store/apps/details?id=com.jsmile.uniworldwallet)__

__[Donwload wallet for IOS here](https://apps.apple.com/us/app/uniworld-wallet/id1544097974)__

### Web wallet extension
Web wallet extension is designed for end-users to interact with Dapp from the browser. Users can transfer UNW, URC20/URC30 tokens and invoke the popup to sign a raw transaction from the smart contract function. Users can create multiple accounts from wallet extension.

![Uniwallet extension](../img/uniwallet-extension.png)

### Technical note
Users can use one of the abow wallets or use all of them. The private key is compatible for all wallets, however, the mnemonic word phrases may be different.
 
The mobile and web wallet are mono style and support 24 mnemonic word phrases while the wallet extension can be HD wallet (multiple account address) and support for 12 mnemonic word phrases. Recovery wallet by keystore file is available on web wallet, wallet cli and wallet extension.

Generate address in mobile wallet and web wallet from mnemonic and private key: 
```js
const bip39 = require('bip39')
const crypto = require('crypto')
const Unichain = require('@uniworld/unichain-js')

//generate private key randomly - can use any random functions
const privateKey = crypto.randomBytes(32).toString('hex')

//or private key from mnemonic
const words = '24 words sperated by space'
const privateKey = bip39.mnemonicToEntropy(words)
const address = Unichain.address.fromPrivateKey(privateKey)

```

Generate address in wallet extension is quite different because It supports for HD Wallet. 
```js
const bip39 = require('bip39')
const Unichain = require('@uniworld/unichain-js')
const seed = bip39.mnemonicToSeed(mnemonic) //12 word phrase
const node = bip32.fromSeed(seed)
const index = 0 //account at index 0
const child = node.derivePath(`m/44'/968'/${index}'/0/0`)
const privateKey = child.privateKey.toString('hex')
const address = Unichain.address.fromPrivateKey(privateKey)

```
The code above generates address at _index 0_, We can get many other account addresses with same mnemonic words by deriving the account path. The path will be _`m/44'/968'/${index}'/0/0`_ , where _${index}_ is the account index and 968 is the coin type of UNW which is registered in slip-0044 reposistory.
checkout here __[https://github.com/satoshilabs/slips/blob/master/slip-0044.md](https://github.com/satoshilabs/slips/blob/master/slip-0044.md)__ 

The walle keystore file follows the Ethereum keystore file standard and looks like this: 
```
UTC--2022-04-08T02_32_03.188Z--UiePeLF7cixhJ7iwf3s6QpAmGE4WnKRtGa
```
And the content inside: 
```
{"address":"UiePeLF7cixhJ7iwf3s6QpAmGE4WnKRtGa","crypto":{"cipher":"aes-128-ctr","ciphertext":"56e2fec385d7641c2b6c4d87244df4b9e95ac77222d4e31686c4b3df31d011de","cipherparams":{"iv":"5a0d3e96d2ecbd613feebf70f24f9b6f"},"mac":"fedcc97dcf96151363915163e45e3401b04bb4ee34988e9ee14f2b6d0f6bbd7f","kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"r":8,"p":1,"salt":"55f37b1a186137f9898bd61e037321765a52e4410bd663487cc4efa25ab66238"}},"id":"4f258431-63d5-4b2c-ae3e-40c12243d2d0","version":3}
``` 
