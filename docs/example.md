---
id: example
title: Example & Demo
sidebar_label: Example & Demo
---

In this page, We will guide you how to work with UniChain using UniChain-Js. The examples and functions below may be suitable for creating a wallet or working with exchanges. 

## Prepare Environment
- Config UniChain local nodes . Refer [this link](./getStarted), or simply run the following commands
```
java -jar unichain-core.jar
java -jar relay-node.jar
```
You need to wait for the synchronization to complete before start working with.

- Install UniChain-JS
```
npm install @uniworld/unichain-js 
```

## Construct UniChain-JS
```
const Unichain = require('@uniworld/unichain-js')
const host = 'http://127.0.0.1:6636' 
const relayHost = 'http://127.0.0.1:7749' 

const unichain = new Unichain({fullHost: host, solidityNode: relayHost})
```

Check if the node is connected
```
unichain.isConnected((err, data) => {
    if (err) console.log('Error: ', err)
    else console.log('UniChain node is connected, info:', data)
})
```

## Utility Functions
You can check more utility functions in [this link](./UnichainJS). The codes below demonstrate on how to create wallet, send UNW coin and load the transaction history ... in NodeJS

### Example for wallet functions

```js
const Unichain = require('@uniworld/unichain-js')
const crypto = require('crypto')

const host = 'http://127.0.0.1:6636' 
const relayHost = 'http://127.0.0.1:7749' 

const unichain = new Unichain({fullHost: host, solidityNode: relayHost})

//Create a random private key 
const generateRandomKey = () => {
    const length = 32
    const randomBytes = crypto.randomBytes(length)
    const privateKey = randomBytes.toString('hex')
    return privateKey
}

//convert UNW to Ginza
const toGinza = (unw) => unw*1000000

//Send UNW coin 
const sendCoin = async (fromAddress, toAddress, amount) => {
  if (fromAddress == toAddress) {
      console.log('cannot send to your own address')
      return null
  }

  amount = toGinza(amount) 
  const data = {
      to_address: unichain.address.toHex(toAddress),
      owner_address: unichain.address.toHex(fromAddress),
      amount: parseInt(amount) 
  }
  let unsingedTx = await unichain.currentProviders().fullNode.request('wallet/createtransaction', data, 'post')
  let signedTx = await unichain.unx.signTransaction(unsingedTx, privateKey, 0)
  let res = await unichain.unx.sendRawTransaction(signedTx)
  return res
}


//const privateKey = generateRandomKey()
const privateKey = '57a47e242dece5a6ec6351a60784a1d9abb9cae175d4fc22475122ede47e7d11'
const fromAddress = unichain.address.fromPrivateKey(privateKey)
console.log('fromAddress:', fromAddress)
//fromAddress: UZ1XxkZEQru4dJjjQfxVMG42SGSxpPrhRu
//You need to deposit to fromAddress before sending UNW to another address
const toAddress = 'UP4DP51jR2U5n5XaoaxKQ9TG2kvmh3Cy8X' //for test

sendCoin(fromAddress, toAddress, 1)
.then(res => {console.log(res)})
.catch(err => console.log('error:', err))

```
Result should look like this
```js
{
    result:true,
    transaction:{
        visible:false,
        txID:'232176ccd94b079bbc1afe8687f656a2708ee29e4aea254699f0323bbb8ab530',
        raw_data:{
        contract:[
            Array
        ],
        ref_block_bytes:'c0f3',
        ref_block_hash:'9af2438cd42944e7',
        expiration:1603211226000,
        timestamp:1603211167488
    },
    raw_data_hex:'0a02c0f322089af2438cd42944e74090d7d7b6d42e5a67080112630a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412320a154478f2d8fc9a88eec78c1fd95873bd4b02177065cd1215440bc353c683213030a0525cb76169442d3c729f0118c0843d70808ed4b6d42e',
    signature:[
    'a9fe1b28a35ffcb2cf6ed46f25926978f76df0ac166bf0c22e84db2e23d3a7b901d856582da97081ab3b1a2b7c97daaaa85f1ca760bb568d0c73a3bb30b4e8d701'
    ]
}
}
```
__Get transaction by txid__
```js
const txid = '232176ccd94b079bbc1afe8687f656a2708ee29e4aea254699f0323bbb8ab530'
unichain.unx.getTransaction(txid, (err, tx) => {
    console.log(tx)
})
```
Result should be following
```js
{
    ret: [
        {
            contractRet: 'SUCCESS'
        }
    ],
    signature: [
        'a9fe1b28a35ffcb2cf6ed46f25926978f76df0ac166bf0c22e84db2e23d3a7b901d856582da97081ab3b1a2b7c97daaaa85f1ca760bb568d0c73a3bb30b4e8d701'
    ],
    txID: '232176ccd94b079bbc1afe8687f656a2708ee29e4aea254699f0323bbb8ab530',
    raw_data: {
        contract: [
            {
                parameter: {
                    value: {
                        amount: 1000000,
                        owner_address: '4478f2d8fc9a88eec78c1fd95873bd4b02177065cd',
                        to_address: '440bc353c683213030a0525cb76169442d3c729f01'
                    },
                    type_url: 'type.googleapis.com/protocol.TransferContract'
                },
                type: 'TransferContract'
            }
        ],
        ref_block_bytes: 'c0f3',
        ref_block_hash: '9af2438cd42944e7',
        expiration: 1603211226000,
        timestamp: 1603211167488
    },
    raw_data_hex: '0a02c0f322089af2438cd42944e74090d7d7b6d42e5a67080112630a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412320a154478f2d8fc9a88eec78c1fd95873bd4b02177065cd1215440bc353c683213030a0525cb76169442d3c729f0118c0843d70808ed4b6d42e'
}
```

__Get account information including balance and other resources, permissions__

```js
//Get account information, can use async/await style
const accountAddress = 'UZ1XxkZEQru4dJjjQfxVMG42SGSxpPrhRu'
unichain.unx.getAccount(accountAddress)
.then(account => {
    console.log('account information: ', account)})
.catch(err => {
    console.log(err)
})

```
Result:
```js
{ 
    address: '4478f2d8fc9a88eec78c1fd95873bd4b02177065cd',
    balance: 8999000,
    create_time: 1603210485000,
    latest_opration_time: 1603211166000,
    account_resource: {},
    owner_permission: { permission_name: 'owner', threshold: 1, keys: [ [Object] ] },
    active_permission: [
        { 
            type: 'Active',
            id: 2,
            permission_name: 'active',
            threshold: 1,
            operations: '7fff1fc0033e0100000000000000000000000000000000000000000000000000',
            keys: [Array] 
        } 
    ] 
}
```

### Example for exchange or explorer
__Get current block__
```js
unichain.unx.getCurrentBlock()
.then(block => console.log('current block: ', block))
.catch(err => console.log(err))
```
Result:
```js
{ 
    blockID: '00000000003cc4161434bb0943403341f97a36e9d58ec80c5e2128f37fb8464e',
    block_header: { 
        raw_data: { 
            number: 3982358,
            txTrieRoot:'0000000000000000000000000000000000000000000000000000000000000000',
            witness_address: '4496c72c4c51f2d152bdd8645af121093e73579bbc',
            parentHash: '00000000003cc415170b554d4e672021b8221902bebb0f156fb58d5ba938bb3a',
            version: 1,
            timestamp: 1603213575000 
        },
        witness_signature:
        '91e08dfded8c3c85d446e192d475b082183ef4af3de5a17618f03fd94ec5c935672489ad4d662e4c4dccdc3c921d8c44139c0d946c1ad8b3a48d94dff7bf184700' 
    } 
}
```

__Get block detail by number (or hash)__
```js
unichain.unx.getBlockByNumber(3981329)
.then(block => console.log('block detail: ', block))
.catch(err => console.log(err))
```
Result:
```js
{ 
    blockID: '00000000003cc011a919fc5a51a5be8580ac7e1ff9e35786c75c954cdef5e519',
    block_header:{ 
        raw_data:{ 
            number: 3981329,
            txTrieRoot: '0f7f7af667b935544ba5a09d597a8f78738fe2b501a7f48ff35d06aeff10422f',
            witness_address: '44b198c855605d829bb418cd9696c9fd1a0b42ed79',
            parentHash: '00000000003cc010ce8b672ba201bd3bfb54f1b6ec4b036eb3a92bc33ad9dcd2',
            version: 1,
            timestamp: 1603210488000 
        },
        witness_signature:
        'f81fda75a3ed8e590c67815f4ba1af8c61be4240b90fb0029d35f0ae4b9799d44127aa5da76ed28c6394f3f4bbbfbbfabd78a7cb84ca56ff6994bb2f281764fa01' },
    transactions:[ 
        { 
            ret: [Array],
            signature: [Array],
            txID: 'aab2250cf3ca199f41c018a1fa89a31b05b6e2053290dd8d85778a9defc0bfc6',
            raw_data: [Object],
            raw_data_hex:
                '0a02c0102208ce8b672ba201bd3b40e88eaeb6d42e5a68080112640a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412330a1544106a6917bbafb7e96861c97aa95e24bbaa8230ca12154478f2d8fc9a88eec78c1fd95873bd4b02177065cd1880ade2047096c9aab6d42e' 
        } 
    ] 
}
```

__Get transaction detail in block__
```js
//extract transfer transaction in block | crawl data
let transactionInfo = []
unichain.unx.getBlockByNumber(3981556)
.then(block => {
    const transactions = block.transactions
    if (transactions.length <= 0) return
    transactions.forEach(tx => {
        const rawData = tx.raw_data
        const contract = rawData.contract[0]
        if (contract.type != 'TransferContract') 
            return //we are working with transfer unw transaction
        const value = contract.parameter.value
        const txStatus = tx.ret[0].contractRet
        const txID = tx.txID
        const fromAddress = unichain.address.fromHex(value.owner_address)
        const toAddress = unichain.address.fromHex(value.to_address)
        const amount = value.amount //this amount is in Ginza unit.
        const timestamp = rawData.timestamp
        
        transactionInfo.push({
            txID,
            txStatus,
            fromAddress,
            toAddress,
            amount,
            timestamp
        })
    })

    //print result
    transactionInfo.forEach(tx => console.log(tx))
}).catch(err => console.log(err))
```
Result:
```js
{ 
    txID: '232176ccd94b079bbc1afe8687f656a2708ee29e4aea254699f0323bbb8ab530',
    txStatus: 'SUCCESS',
    fromAddress: 'UZ1XxkZEQru4dJjjQfxVMG42SGSxpPrhRu',
    toAddress: 'UP4DP51jR2U5n5XaoaxKQ9TG2kvmh3Cy8X',
    amount: 1000000,
    timestamp: 1603211167488 
}
```

Results above can be used for crawling data from blockchain. It may be useful for exchange or bock explorer.
