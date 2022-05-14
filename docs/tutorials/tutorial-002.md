---
id: tutorial-002
title: Setup UniChain-JS library
---

__Unichain JS__ is the javascript library to interact with UniChain network. It's similar to web3js on Ethereum. UniChain JS can be run on both web browser and server side (nodejs)

### Install UniChain JS 

- For Nodejs server: Install by _npm_ command
```
npm install @uniworld/unichain-js
```

- For web browser: Import from static file 
```
<script src="https://cdn.jsdelivr.net/npm/@uniworld/unichain-js@1.0.5/dist/UnichainJS.js"></script>
```
Please note to chooese the latest version.

### Use UniChain JS

- Init library
```js
const Unichain = require('@uniworld/unichain-js')
const host = 'https://test-seed.unichain.world' //testnet
const relayHost = 'https://test-seed-relay.unichain.world' //testnet
const event = 'https://test-event.unichain.world' 
const unichain = new Unichain ({
     fullHost: host, 
     solidityNode: relayHost,
     event: event
})
```

- Use static function
```js
//check address validity
const address = 'UZQWseP7WEN1R3nukDtLksukSduCvB19ef'
const result = Unichain.isAddress(address)
console.log(result) //true

//private key to address
const privateKey = 'ba63ac2b53976497386410adb85b7cd563e6316b5d47c97def69275635b150d1'
const address = Unichain.address.fromPrivateKey(privateKey)
console.log(address) //UjYDcuewthU4HL9t5EiPfhWNuAzHAXuHsU
```

- Build transaction 
```js
//Build transaction for sending UNW
const privateKey = 'ba63ac2b53976497386410adb85b7cd563e6316b5d47c97def69275635b150d1'
const fromAddress = Unichain.address.fromPrivateKey(privateKey)
const toAddress = 'UZQWseP7WEN1R3nukDtLksukSduCvB19ef'
const amount = unichain.toGinza(10) //UNW 
const tx = await unichain.transactionBuilder.sendUnw(toAddress, amount, fromAddress)
//sign transaction offline 
const signedTx = await unichain.api.sign(signedTx, privateKey)
//broadcast transaction to network
const txId = await unichain.api.sendRawTransaction(signedTx)
console.log('Transaction ID:', txId)
```

- Interact with network
```js
//Get current block
const block = await unichain.api.getCurrentBlock()

//Get transaction by txid
const txid = '6cf3c4a2ec744f1e6d8a9c71cfd8855d9d98a9072b936fc1e00555086d3121f3'
const transaction = await unichain.api.getTransaction(txid)
```

The detailed function and APIs list can be found [here](../unichainJS)