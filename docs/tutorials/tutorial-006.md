---
id: tutorial-006
title: Build your own wallet
---

This tutorial guides you building your own mobile wallet for your own purpose. The wallet supports only URC30 tokens, and because URC-30 token does not require UNW as the transaction fee for transferring, you can customize your logo, wallet appearance to make It your own brand. Imagine you own your digital bank. 

## Technical notes:
The most important path on mobile wallets is to manage the wallet private key. Private keys should be encrypted and stored securely on mobile applications. Leaking the private key may cause the fund to be lost. Users should be responsible to backup the keys in safe places. If they forget the private key (or mnemonic), no one can help them to restore their funds.

### How wallet is generated
First of all, We will generate a random private key or mnemonic. The mnemonic is the 12 or 24 random words that represent the private key. We can get private keys from mnemonic but cannot convert private keys back to mnemonic. Each private key will generate a unique wallet address. But with mnemonic phrases we can generate many derived private keys and then have unlimited wallet addresses. We call It the HD wallet.
For simplicity, In this tutorial, We use HD wallet but get only wallet address from index `0` 
```js
import { ethers, utils } from 'ethers';
const generateMnemonic = async () => {
 try {
   const randomBytes = utils.randomBytes(32);
   const mnemonic = utils.HDNode.entropyToMnemonic(randomBytes, en);
   return mnemonic;
 } catch (e) {
   return false;
 }
};


function generatePrivKeyWithUnichain(mnemonic) {
 try {
   const index = 0;
   const path = `m/44'/968'/${index}'/0/0`;
   const wallet = UnichainWallet.fromMnemonic(mnemonic, path);
   const privateKey = wallet.privateKey.replace(/^0x/, ''); //eth return 0x.. in private key
   const address = Unichain.address.fromPrivateKey(privateKey);
   return privateKey;
 } catch (error) {
   console.log(error);
 }
}

```
The private key then will be encrypted with AES encryption algorithm 

```js
import CryptoJS from 'crypto-js';

const keySize = 256;
const iterations = 100;

function encryptPrivateKey(msg, pass) {
  const salt = CryptoJS.lib.WordArray.random(128 / 8);

  const key = CryptoJS.PBKDF2(pass, salt, {
    keySize: keySize / 32,
    iterations: iterations,
  });

  const iv = CryptoJS.lib.WordArray.random(128 / 8);

  const encrypted = CryptoJS.AES.encrypt(msg, key, {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  });

```

### How to send URC-30 token
To send a URC-30 token, We must construct the raw transaction, sign the transaction by private key and then broadcast the signed transaction into the network. 
To construct the raw transaction, We can both use the transaction builder from Unichain-js or use the API from blockchain node. 
```js
const unsignedTx = await unichain.transactionBuilder.sendURC30Token(toAddress, amount, tokenName, available, ownerAddress)

```

```js
const createAndSendV2 = async (url, data, privateKey) => {
 const unsingedTxObj = await axios.post(url, data);
 const unsingedTx = unsingedTxObj.data;
 try {
   const signedTx = await unichain.api.signTransaction(
     unsingedTx,
     privateKey,
     0
   );
   return await unichain.api.sendRawTransaction(signedTx);
 } catch (err) {
   return {
     status: false,
     message: unsingedTxObj.data,
   };
 }
};

```
Where *url* is the UniChain node, the data to send URC-30 token will look like following:
```js
const data = {
  owner_address: Unichain.address.toHex(SENDER_ADDRESS),
   to_address: Unichain.address.toHex(RECEIVER_ADDRESS),
   token_name: TOKEN_NAME,
   amount: TOKEN_AMOUNT,
   available_time: AVAILABLE_TIME,
}

``` 
The *available_time* is for *send future*. If it is set to 0, the receiver can use Token immediately. Otherwise, receiver can use token only after the *AVAILABLE_TIME*. *available_time* is the unix timestamp (for example: *available_time = 1735693200000* will be 1/1/2025) 


The *private_key* to sign the transaction above is decrypted with the key is the user’s password. The function to decrypt private key:

```js
export const decrypt = (text, encryptKey) => {
 try {
   let bytes = CryptoJS.AES.decrypt(text, encryptKey);
   const originalText = bytes.toString(CryptoJS.enc.Utf8);
   return originalText.toString();
 } catch (error) {
   return null;
 }
``` 

## How to build your own wallet from template 
### prerequisite: 
This is a mobile application written in React Native, so being familiar with mobile development is required. 

The mobile application must be updated with:
- [React 17](https://reactjs.org)
- [React Native 0.66.0 and upper](https://reactnative.dev)
- [Native Base v2](https://nativebase.io/)
- [React Navigation v5](https://reactnavigation.org/docs/5.x/getting-started)

Procedures:
- Check if your Node.js version is >= 14.
- Setup [development environment](https://reactnative.dev/docs/environment-setup)
- Clone [this repository](https://github.com/uniworld-io/tutorials/tree/master/mobile-wallet-template)
- Run ```npm install``` or yarn to install the dependencies.
- With iOS, run ```cd ios && pod install``` to install podfile
- Run ```yarn ios``` or ```yarn android``` To build application
 
### Wallet customization 
Users can customize their wallet by changing the config in *customize.js* file. The following is the example
```js
import { COLORS } from "../utils/colorHelper";
import images from "./images";

export const CONSTANTS = {
   CURRENCY: 'TEMPLATE'
};

export const NETWORK_CONFIG = {
  
   UNICHAIN_NETWORK: 'https://test-seed.unichain.world',
   RELAY_NETWORK: 'https://test-seed-relay.unichain.world',
  
   BASE_EXPLORER_URL: 'https://uniscan.world/api',
   UNI_SCAN_URL: 'https://uniscan.world',
   BASE_URL: 'https://node.unichain.world',
   RELAY_NODE: 'https://relay-node-1.unichain.world',
};

export const CUSTOMIZE = {
   primary_color: COLORS.black,
   banner: images.banner,
   token_icon: images.token_icon,
   banner_title: 'Wallet Template',
   token_name: 'MYTOKEN',
};
```
*primary_color* can be black, white, blue, grey, …
*banner* is the banner on the top of wallet
*token_icon* is the icon of the token 
*banner_title* is the title of the image 
*token_name* the name of the token. This is a very important config as It’s the key of the token and this name must have existed on the Unichain network. Your wallet will show only this token. To create the token, you can use the UniMobile wallet or [web wallet](https://uniwallet.world). Read [this article](../unichainToken#urc-30-token) to know how to create your own token on UniChain network without technical knowledge. 

### Image demostration
Successful application should look like the below picture

<div style="text-align:center">
<img src="../../img/tutorial/wallet-template-1.jpg" height="680" />
<p><i>The home screen </i></p>
<p></p>
<img src="../../img/tutorial/wallet-template-2.jpg" height="680" />
<p><i>The send screen </i></p>
<p></p>
<img src="../../img/tutorial/wallet-template-3.jpg" height="680" />
<p><i>The receive screen </i></p>
</div>

### Source code
The full source code can be [download here](https://github.com/uniworld-io/tutorials/tree/master/mobile-wallet-template)