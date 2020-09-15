---
id: unichainJS
title: UniChain-JS API
---

The following describes the UinChain-JS, a Javascript library for working with UniChain network. 

## Set up 
### Install UniChain JS
```
npm install @uniworld/unichain-js
```

### Construct the library

```
const Unichain = require('@uniworld/unichain-js')
const host = 'https://testnet-node.unichain.world' // or your local full node, mainet full node ...
const relayHost = 'https://testnet-relay-node.unichain.world' // or your local relay node, mainet relay node ...

const unichain = new Unichain({fullHost: host, solidityNode: relayHost})
```
Check if the node is connected

```
unichain.isConnected((err, data) => {
    if (err) console.log('Error: ', err)
    else console.log('UniChain node is connected, info:', data)
})
```
## Static method
### Validate an address
```
const address = 'UZQWseP7WEN1R3nukDtLksukSduCvB19ef'
const result = Unichain.isAddress(address)
console.log(result) //true
```
### Calculate address from private key
```
const privateKey = 'ba63ac2b53976497386410adb85b7cd563e6316b5d47c97def69275635b150d1'
const address = unichain.address.fromPrivateKey(privateKey)
console.log(address) 
//UjYDcuewthU4HL9t5EiPfhWNuAzHAXuHsU
```

### Convert address to hex format
```
const address = 'UjYDcuewthU4HL9t5EiPfhWNuAzHAXuHsU'
const hexAddress = unichain.address.toHex(address)
console.log(hexAddress)
//44ec71b063e96fee1777f973e9f8f41852ddc249b2
```

### Convert address from hex format
```
const hexAddress = '44ec71b063e96fee1777f973e9f8f41852ddc249b2'
const address = unichain.address.fromHex(hexAddress)
console.log(address)
//UjYDcuewthU4HL9t5EiPfhWNuAzHAXuHsU
```
### Convert UTF8 string to hex format
```
const utf8String = 'MyToken'
const hexString = unichain.fromUtf8(utf8String)
console.log(hexString)
//0x4d79546f6b656e
```
### Convert hex string to UTF8 format
```
const hexString = '0x4d79546f6b656e'
const utf8String = unichain.toUtf8(hexString)
console.log(utf8String)
//MyToken
```
### Convert to UNW from Ginza
```
const ginzaAmount = 1000000
const unwAmount = unichain.fromGinza(ginzaAmount)
console.log(unwAmount)
//1
```
### Convert to Ginza from UNW
```
const unwAmount = 5
const ginzaAmount= unichain.toGinza(unwAmount)
console.log(ginzaAmount)
//5000000
```

## Transaction builder
This module is for building the raw transaction such as transfer balance, vote for witness, purchase for token or lock/unlock balance ... The transactions are actually built from connected node and need to be signed before broadcasting to blockchain network

### Create token
```
function createToken(tokenSpec, ownerAddress)
```
Full example of creating a new token
```
const privateKey = 'your_private_key' 
const ownerAddress = 'your_address'
const tokenSpec = {
    name: 'TestToken',
    abbreviation: 'TEST',
    description: 'Test Token',
    url: 'https://testtoken.org',
    totalSupply: 1000000000000, //precision = 6 => 1.000.000 Token
    unxRatio: 1, // How much UNX will `tokenRatio` cost?
    tokenRatio: 1, // How many tokens will `unxRatio` afford?
    saleStart: Date.now() + 5*1000, //5 second from now
    saleEnd: Date.now() + 60*60*24*365*1000, //1 year
    precision: 6
}

const createToken = async (tokenSpec) => {
    const unsingedTx = await unichain.transactionBuilder.createToken(tokenSpec, ownerAddress)
    console.log(unsingedTx)
    const signedTx = await unichain.unx.signTransaction(unsingedTx, privateKey, 0)
    const res = await unichain.unx.sendRawTransaction(signedTx)
    console.log('create token done: ', res)
}
```

### Apply for witness
```
function applyForWitness(witnessAddress, witnessURL)
```
Full example
```
const witnessAddress = 'Your_witness_address'
const witnessPrivateKey = 'Your_witness_private_key'
const applyWitness = async () => {
    let unsingedTx = await unichain.transactionBuilder.applyForWitness(witnessAddress, 'https://witness-test.org')
    let signedTx = await unichain.unx.signTransaction(unsingedTx, witnessPrivateKey, 0)
    let res = await unichain.unx.sendRawTransaction(signedTx)
    console.log('Apply for witness transaction: ', res)
}
```

### Lock/Freeze balance
```
function freezeBalance(numberOfCoin, timeToLock, resourceType, ownerAddress)
```
Full example 
```
const coinToLock = 100
const ownerAddress = 'Your_address'
const privateKey = 'Your_private_key'
const lockBalance = async () => {
    let unsingedTx = await unichain.transactionBuilder.freezeBalance(unichain.toGinza(coinToLock), 3, 'BANDWIDTH', ownerAddress)
    console.log('lockBalance unsingedTx :', unsingedTx)
    let signedTx = await unichain.unx.signTransaction(unsingedTx, privateKey, 0)
    let res = await unichain.unx.sendRawTransaction(signedTx)
    console.log('Lock coin transaction: ', res)
}
```

### Vote for witness
```
function vote(witnessToVote, voterAdress)
```
Full example
```
const witnessAddress = 'Witness_address'
const voterAdress = 'Your_voter_address'
const voterPrivateKey = 'Your_voter_key'
const voteForWitness = async () => {
    let voteCount = 30
    let witnessToVote = {[witnessAddress]: voteCount} //can be many witness. format address:voteCount
    let unsingedTx = await unichain.transactionBuilder.vote(witnessToVote, voterAdress)
    let signedTx = await unichain.unx.signTransaction(unsingedTx, voterPrivateKey, 0)
    let res = await unichain.unx.sendRawTransaction(signedTx)
    console.log('Vote tx ', res)
}
```
### Create a proposal
Only witness can perform this operation
```
function createProposal(proposalParam, witnessAddress)
```

### Approve a proposal
Only witness can perform this operation
```
function voteProposal(proposalID, isApprove, witnessAddress)
```

### Delete a proposal
Only proposal owner can perform this operation
```
function deleteProposal(proposalID, ownerAddress)
```

### Withdraw reward balance
```
function withdrawBlockRewards(ownerAddress)
```

## APIs
APIs to communicate with UniChain network are wrapped into *unx* class. You can use either callback or async/await syntax to call the apis. For example, to get the current block, the *getCurrentBlock* is called as below
```
//callback style
unichain.unx.getCurrentBlock(data => {
    console.log('Current block data:', data)
})

//async/await style
const data = await unichain.unx.getCurrentBlock()
console.log('Current block data:', data)

```

### Get current block
Get current block information
```
function getCurrentBlock()
```

### Get block
Get block information by block hash
```
function getBlockByHash(blockHash) 
```

### Get block by ID
Get block information by block ID (block number)
```
function getBlockByNumber(blockNumber)
```

### Get number of transaction in a block
Get number of transaction in a block. If blockHash is empty, the API return the number of transaction in current block
```
function getBlockTransactionCount(blockHash) 
```

### Get Transaction
Get transaction detail by transaction hash
```
function getTransaction(txid)
```

### Get account
Get account information from an address
```
function getAccount(address)
```

### Get balance
Get balance of an address
```
function getBalance(address)
```
### Get bandwidth 
Get bandwidth of an address
```
function getBandwidth(address)
```

### Get token issued by an address
Get token issued by an address
```
function getTokensIssuedByAddress(address)
```

### Get token by name
Get token by token name
```
function getTokenFromID(tokenID)
```

### Get connected node
Get connected nodes
```
function listNodes()
```

### Get witness list
Get list of witness
```
function listWitnesses()
```

### Get token list
List the token in the network with limit and offset
```
function listTokens(limit, offset)
```

### Get next maintenance time
Get next maintenance time
```
function timeUntilNextVoteCycle()
```

### Get contract
Get contract information from contract address
```
function getContract(contractAddress)
```

### Sign transaction
Sign transaction offline with private key
```
function sign(unsignedTransaction, privateKey)
```

### Send raw transaction
Broadcash signed transaction into network
```
function sendRawTransaction(signedTransaction)
```

### Send token
This API return the unsigned transaction. To send the token, You need to sign on the return transaction, then broadcast to network
```
function sendToken(to, amount, tokenID)
```

### List proposal
List all proposal from network
```
function listProposals()
```

### Get proposal by ID
Get proposal by proposal ID
```
function getProposal(proposalID)
```

### Get network parameters 
Get network parameters
```
function getChainParameters()
```

### Get account resource
Get account resource of an address
```
function getAccountResources(address)
```

### Get node infomation
Get node information
```
function getNodeInfo()
```

### Get reward
Get accumulated reward of an address (witness or voters)
```
function getReward(address)
```

### 