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
```
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
```
function openExtension() {
    if (window.unichainJs) {
        window.unichainJs.extension.open();
    }
}
```

##### Send UNW via extension

You can send UNW or any tokens by signing transaction via extension
```
async function sendUNW() {
    if (!window.unichainJs || !window.unichainJs.defaultAddress.base58) {
        // wallet not ready
        return
    }
    try {
        let unichainjs = window.unichainJs
        const toAddress = document.getElementById('toAddress').value
        const amount = parseFloat(document.getElementById('amount').value)
        const fromAddress = window.unichainJs.defaultAddress.base58
        let tx = await unichainjs.transactionBuilder.sendUnw(toAddress, 1000000*amount, 1656561818000, fromAddress)
        let signedTx = await unichainjs.api.sign(tx)
        let broastTx = await unichainjs.api.sendRawTransaction(signedTx)
        return broastTx;
    } catch (err) {
        return err;
    }
}
```

##### Call Smart contract - Send method
You can send an amount of a contract address of currently selected wallet with:
```
async function callContract() {
    if (!window.unichainJs || !window.unichainJs.defaultAddress.base58) {
        // wallet not ready
        return
    }
    try {
        const unichainjs = window.unichainJs
        const contractAddress = 'UdD9fX4iDn5uyBWPCLeHrUpK2AiFmLEZm1'
        const method = 'transfer'
        const toAddress = 'UYsGTjikAoBGQzR8nqk3JXX5W9iKpraf6u'
        const amount = 10
        const contract = await unichainjs.contract().at(contractAddress)
        if (!contract || !contract.abi) {
            console.log('Cannot find contract')
            return
        }
        const txid = await contract.transfer(toAddress, amount).send({
            feeLimit:100000000 //optional
        })
        return txid
    } catch (err) {
        document.getElementById("result").innerHTML = 'Error ' + err
    }
}
```

##### Call Smart contract - Get balance method
You can get balance of a contract address of any wallet with this code below:
```
async function callContractValue(method) {
    if (!window.unichainJs || !window.unichainJs.defaultAddress.base58) {
        console.log('Wallet is not ready')
        return
    }
    try {
        const unichainjs = window.unichainJs
        const contractAddress = 'UTrAS9bjBMMZLF8Q4vSiHTCKD5fhDVBWgH'
        const contract = await unichainjs.contract().at(contractAddress)
        const toAddress = unichainjs.defaultAddress.base58
        let res = ''
        if (method == 'balanceOf') {
            const data = await contract.methods['balanceOf'](toAddress).call()
            res = unichainjs.BigNumber(data).toNumber()
        } 
        if (method == 'paused') {
            res = await contract.methods['paused']().call()
        }
        return res
    } catch (err) {
        console.log('ERR ', err)
    }
}
```

##### Create URC30 token
Create a URC30 tokens:
```
async function createURC30Token () {
    if (!window.unichainJs || !window.unichainJs.defaultAddress.base58) {
        console.log('Wallet is not ready')
        return
    }
    const unichainjs = window.unichainJs
    const fromAddress = window.unichainJs.defaultAddress.base58
    const data = {
        owner_address: fromAddress,
        name: 'FXSToken',
        abbr: 'FXS',
        description: 'Token for forex operation on UniChain',
        url: 'https://fxtoken.network',
        total_supply: 100000000,
        max_supply: 100000000000,
        exch_unx_num: 1000,
        exch_num: 1,
        start_time: 1655976172000,
        end_time: 4806189871000,
        fee: 1,
        extra_fee_rate: 0,
        create_acc_fee: 1,
        fee_pool: 10*1000000,
        lot: 1
    }
    const res = await unichainjs.transactionBuilder.createURC30Token(data)
    console.log(tx)
}
```

Besides, you can visit [UniChain Developer Docs](https://developers.unichain.world/docs/fullNodeAPI.html) for more actions with UniChain.

@ Samurai Lab Team
