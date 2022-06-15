---
id: tutorial-005
title: Use Wallet Extension 
---
This tutorial is for developers who use the wallet extension to interact with UniChain network
## Overview
A browser extension is a small software module for customizing a web browser or doing some specific tasks. UniWallet extension is the browser extension (web application) for UniChain wallet. 
UniWallet extension is a client-side wallet which means that the private key is encrypted and stored on the user's devices, no sensitive information is transferred to the server. UniWallet extension support for following functions:
- Create multi account wallet
- Export/restore wallet by private key or mnemonics
- Send UNW coin, receive UNW by QR code
- Send/Receive URC-20/URC-30/URC-40/URC-721 tokens
- Show wallet balance, transaction history 
- Send Future (for UNW coin and URC-30/URC-40 tokens)
- Trigger smart contracts
- Sign all transactions that were created from UniChainJS library or UniChain nodes such as: create token, lock coin, apply for witness node, vote for witness node, withdraw balance …  
- Sign and verify message/signature

Go to [Google Chrome store](https://chrome.google.com/webstore/detail/uniwallet/glifbmajcmgbjkeklllabmmpbgecnmnn) to install UniWallet extension

## Use Wallet extension

### Getting Started
To develop for UniChain, install UniWallet Extension in the Chrome browser on your development machine. [Dowload here](https://chrome.google.com/webstore/detail/uniwallet/glifbmajcmgbjkeklllabmmpbgecnmnn)
Once UniWallet Extension is installed and running (make sure you back up your Menmonic Phrase and Private), you should find that new browser tabs have a **window.unichainJs** object available in the developer console. This is how your website will interact with UniChain.

### Basic Considerations

##### UniChain Browser Detection
To verify if the browser is running UniChain Extension, copy and paste the code snippet below in the developer console of your web browser:
```
if (typeof window.unichainJs !== 'undefined') {
  console.log('UniChain is installed!');
}
```

##### Running a Test Network
In the top right meny of UniWallet Extension, choose "Node manage", then select the network you are currently connected to. We supply you 2 networks for now: Testnet and Mainnet.

##### User State
Currently there are a few stateful things to consider when interacting with this API:
- What is the current network?
- What is the current account?

Both of these are available synchronously as **unichainJs.fullNode** and **unichainJs.defaultAddress.base58**.

##### Connecting to UniWallet Extension
"Connecting" to UniWallet Extension means "to access the user's UniChain accounts".

You should only initiate a connection request in response to direct user action, such as clicking a button. You should always disable the "connect" button while the connection request is pending. You should never initiate a connection request on page load.

We recommend that you provide a button to allow the user to connect UniWallet Extension to your dapp. Clicking this button should call the following method:
```js
function connectWallet() {
    let address = 'N/A'
    // check whether global "window" variable are injected to your dapps or not
    if (window.unichainJs && window.unichainJs.defaultAddress.base58) {
        address = window.unichainJs.defaultAddress.base58
    }
    // show UniChain wallet address on your dapps
}
```

##### Open extension programmatically

Please use this snippet below:
```js
function openExtension() {
    if (window.unichainJs) {
        window.unichainJs.extension.open();
    }
}
```

##### Send UNW via extension

You can send UNW or any tokens by signing transaction via extension. The bellow code is the example of sending _10 UNW_ to _UWLndt5XcHRpvhVJohS6CGNh5eC1X1pt3S_ address 
```js
async function sendUNW() {
    if (!window.unichainJs || !window.unichainJs.defaultAddress.base58) {
        // show users that wallet not ready!
        return
    }
    try {
        let unichainjs = window.unichainJs
        const toAddress = 'UWLndt5XcHRpvhVJohS6CGNh5eC1X1pt3S'
        const amount = 10
        const fromAddress = window.unichainJs.defaultAddress.base58
        let tx = await unichainjs.transactionBuilder.sendUnw(toAddress, 1000000*amount, 0, fromAddress)
        let signedTx = await unichainjs.api.sign(tx)
        let broastTx = await unichainjs.api.sendRawTransaction(signedTx)
        return broastTx;
    } catch (err) {
        return err;
    }
}
```

When the function ```unichainjs.api.sign(tx)``` is called, the wallet extension will be opened and ask users to confirm or reject the transaction so that the code does not need to provide any private key in the ```sign``` function. 

##### Call Smart contract - Send method
UniWallet extension will be open whenever users trigger a smart contract functions.
```js
async function callContract() {
    if (!window.unichainJs || !window.unichainJs.defaultAddress.base58) {
        // show users that wallet not ready!
        return
    }
    try {
        const unichainjs = window.unichainJs
        const contractAddress = 'UdD9fX4iDn5uyBWPCLeHrUpK2AiFmLEZm1'
        const method = 'transfer'
        const toAddress = 'UYsGTjikAoBGQzR8nqk3JXX5W9iKpraf6u'
        const amount = 10 //use Bignumber to convert to correct decimals
        const contract = await unichainjs.contract().at(contractAddress)
        if (!contract || !contract.abi) {
            console.log('Cannot find contract')
            return
        }
        //The code line below will be triggered and the extension will be opened.
        const txid = await contract.transfer(toAddress, amount).send({
            feeLimit:100000000 //optional
        })

        return txid
    } catch (err) {
        return err
    }
}
```

Generally, Developers can write codes as usual, only when they need to interact with the network  using the private key (signing), the wallet extension will be opened and ask the users whether to accept the transaction or not. If the users accept, the transaction will be signed by the private key managed by the extension and broadcast the transaction to the network