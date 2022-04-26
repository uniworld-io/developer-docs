---
id: unichainJS
title: UniChain-JS API
---

UniChain-JS is the javascript library to interact with UniChain network. It's similar to Web3js on Ethereum. The library can be run on both web browser and server side (Nodejs).The following describes how to use UniChain-JS and list of APIs/Functions

_Note: This document is based on version 1.0.2_

## Set up 
### Install UniChain JS (Nodejs)

```
npm install @uniworld/unichain-js
```
### Setup UniChain JS on web browser
```
<script src="https://cdn.jsdelivr.net/npm/@uniworld/unichain-js@1.0.2/dist/UnichainJS.js"></script>
```
Please remember to use the latest version (unichain-js@version)

### Construct the library

```js
const Unichain = require('@uniworld/unichain-js')
const fullNode = 'https://test-seed.unichain.world' //testnet
const relayNode = 'https://test-seed-relay.unichain.world' //testnet
const eventServer = 'https://test-event.unichain.world' 
const privateKey = 'your-private-key' 
const options = {
    fullNode,
    relayNode, //optional
    eventServer, //optional
    privateKey //optional
}
const unichain = new Unichain (options)
```
Check if the node is connected

```js
unichain.isConnected((err, data) => {
    if (err) console.log('Error: ', err)
    else console.log('UniChain node is connected, info:', data)
})
```
## Static method
### Validate an address
```js
const address = 'UZQWseP7WEN1R3nukDtLksukSduCvB19ef'
const result = Unichain.isAddress(address)
console.log(result) //true
```
### Calculate address from private key
```js
const privateKey = 'ba63ac2b53976497386410adb85b7cd563e6316b5d47c97def69275635b150d1'
const address = unichain.address.fromPrivateKey(privateKey)
console.log(address) //UjYDcuewthU4HL9t5EiPfhWNuAzHAXuHsU
```

### Convert address to hex format
```js
const address = 'UjYDcuewthU4HL9t5EiPfhWNuAzHAXuHsU'
const hexAddress = unichain.address.toHex(address)
console.log(hexAddress) //44ec71b063e96fee1777f973e9f8f41852ddc249b2
```

### Convert address from hex format
```js
const hexAddress = '44ec71b063e96fee1777f973e9f8f41852ddc249b2'
const address = unichain.address.fromHex(hexAddress)
console.log(address) //UjYDcuewthU4HL9t5EiPfhWNuAzHAXuHsU
```
### Convert UTF8 string to hex format
```js
const utf8String = 'MyToken'
const hexString = unichain.fromUtf8(utf8String)
console.log(hexString) //0x4d79546f6b656e
```
### Convert hex string to UTF8 format
```js
const hexString = '0x4d79546f6b656e'
const utf8String = unichain.toUtf8(hexString)
console.log(utf8String) //MyToken
```
### Convert to UNW from Ginza
```js
const ginzaAmount = 1000000
const unwAmount = unichain.fromGinza(ginzaAmount)
console.log(unwAmount) //1
```
### Convert to Ginza from UNW
```js
const unwAmount = 5
const ginzaAmount= Unichain.toGinza(unwAmount)
console.log(ginzaAmount) //5000000
```

## Transaction builder
This module is for building the raw transaction such as transfer balance, vote for witness, transfer token, lock/unlock balance ... The transactions are actually built from connected node and need to be signed before broadcasting to blockchain network

### Send UNW
```js
/* Send UNW example
 * sendUnw(to, amount, availableTime, from)
 * to: the address that receives UNW 
 * amount: the amount of UNW in Ginza unit. 1 UNW = 10^6 Ginza
 * availableTime: 
 *  - If it is set, the received account can be use UNW afer the availableTime. 
 *  - If it is null or zero, UNW can be used immediately (normal transfer)   
 * from: the sender address. 
 */
const to = 'UX2LEiRzaadf1tRoTiJyHN2Hnj26K9qwAr'
const amount = Unichain.toGinza(5) // 5 unw
const availableTime = 1735693200000 // for future use ~ 1/1/2025
const privateKey = 'aabe01e4bd529c6dcd24b908dbda551948edd78e7231e0c11396c93648d0a802'
const fromAddress = Unichain.address.fromPrivateKey(privateKey)
const transaction = await unichain.transactionBuilder.sendUnw(to, amount, availableTime, fromAddress)
//sign the raw transaction
const signedTransaction = await unichain.api.sign(transaction, key);
//broadcast the signed transaction to the network
const result = await unichain.api.sendRawTransaction(signedTransaction);
console.log(result)
```

### Create token
```js
/* Create URC30 example
 * createURC30Token(options)
 * options = {
        name, //name of the token, also the tokenid
        abbr, //abbreviation - token symbol
        max_supply, //max supply
        total_supply, //initial supply
        start_time, //start time
        end_time, //end time
        description,//token description
        url, //url that describe token info
        fee, //the fee in token 
        extra_fee_rate, // extra fee in % of volume
        create_acc_fee, // fee in token when send to non-existent account
        fee_pool, //initial fee pool, must > 10 UNW
        lot, // the minimum number to send in future
        exch_unx_num, // exchange ratio unw 
        exch_num, // exchange raton in token
        owner_address //token owner
  } 
 */
const privateKey = 'aabe01e4bd529c6dcd24b908dbda551948edd78e7231e0c11396c93648d0a802'
const fromAddress = Unichain.address.fromPrivateKey(privateKey)
const data = {
        owner_address: fromAddress,
        name: 'Mytoken',
        abbr: 'MTK',
        description: 'This is my token on UniChain network',
        url: 'https://mytoken-url.org',
        total_supply: 100000000,
        max_supply: 100000000000,
        exch_unx_num: 1000,
        exch_num: 1,
        start_time: 1650516271000,
        end_time: 4806189871000,
        fee: 1,
        extra_fee_rate: 0,
        create_acc_fee: 1,
        fee_pool: 10*1000000,
        lot: 1
    }

// construct the raw tx
const uSignedTx = await unichain.transactionBuilder.createURC30Token(data)
// sign the transaction
const signedTx = await unichain.api.sign(uSignedTx, privateKey)
// broadcast to network
const tx = await unichain.api.sendRawTransaction(signedTx)
console.log(tx)
```

### Send token
```js
/* Send URC30 token
 * function: sendURC30Token(to, amount, tokenName, availableTime)
 * to: receiver's address
 * amount: amount of token 
 * tokenName: the name of token, also the token ID
 * availableTime: if It is set, token can be only used after this time (future sending)
 */
const privateKey = 'private-key'
const ownerAddress = Unichain.address.fromPrivateKey(privateKey)
const toAddress = 'UaQKaz62grZaMLSXjMLcGtez65gbsVfKuS'
const amount = 20
const tokenName = 'XMAS'
const available = 1745629200000 // ~ availabe at 26/4/2025
const unsignedTx = await unichain.transactionBuilder.sendURC30Token(toAddress, amount, tokenName, available, ownerAddress)
const signedTx = await unichain.unx.sign(unsignedTx, privateKey)
const tx = await unichain.unx.sendRawTransaction(signedTx)
console.log(tx)
```

### Mint token
```js
/* Mint URC30 token
 * function: mintToken(tokenName, amount, ownerAddress)
 * tokenName: the name of token, also the token ID
 * amount: amount of token 
 * ownerAddress: owner of the token
 */
const privateKey = 'private-key'
const ownerAddress = Unichain.address.fromPrivateKey(privateKey)
const amount = 1000000
const tokenName = 'XMAS'
const unsignedTx = await unichain.transactionBuilder.mintToken(tokenName, amount, ownerAddress)
const signedTx = await unichain.unx.sign(unsignedTx, privateKey)
const tx = await unichain.unx.sendRawTransaction(signedTx)
console.log(tx)
```

### Burn token
```js
/* Burn URC30 token
 * function: burnToken(tokenName, amount, ownerAddress)
 * tokenName: the name of token, also the token ID
 * amount: amount of token 
 * ownerAddress: owner of the token
 */
const privateKey = 'private-key'
const ownerAddress = Unichain.address.fromPrivateKey(privateKey)
const amount = 50000
const tokenName = 'XMAS'
const unsignedTx = await unichain.transactionBuilder.burnToken(tokenName, amount, ownerAddress)
const signedTx = await unichain.unx.sign(unsignedTx, privateKey)
const tx = await unichain.unx.sendRawTransaction(signedTx)
console.log(tx)
```

### Contribute token fee
```js
/* Contribute fee for URC30 token pool
 * function: contributeTokenFee(tokenName, amount, ownerAddress)
 * tokenName: the name of token, also the token ID
 * amount: amount UNW to contribute to the token pool in Ginza unit 
 * ownerAddress: owner address that perform this operation
 */
const privateKey = 'private-key'
const ownerAddress = Unichain.address.fromPrivateKey(privateKey)
const amount = Unichain.toGinza(10) //10 UNW
const tokenName = 'XMAS'
const unsignedTx = await unichain.transactionBuilder.contributeTokenFee(tokenName, amount, ownerAddress)
const signedTx = await unichain.unx.sign(unsignedTx, privateKey)
const tx = await unichain.unx.sendRawTransaction(signedTx)
console.log(tx)
```

### Withdraw future token
```js
/* Withdraw future token
 * function: withdrawFutureToken(tokenName, ownerAddress)
 * tokenName: the name of token, also the token ID
 * ownerAddress: owner address that perform this operation
 */
const privateKey = 'private-key'
const ownerAddress = Unichain.address.fromPrivateKey(privateKey)
const tokenName = 'XMAS'
const unsignedTx = await unichain.transactionBuilder.withdrawFutureToken(tokenName, ownerAddress)
const signedTx = await unichain.unx.sign(unsignedTx, privateKey)
const tx = await unichain.unx.sendRawTransaction(signedTx)
console.log(tx)
```

### Transfer token ownership
```js
/* Transfer token ownership
 * function: transferTokenOwner(tokenName, to, from)
 * tokenName: the name of token, also the token ID
 * to: new owner's address
 * from: current token owner's address
 */
const privateKey = 'private-key'
const ownerAddress = Unichain.address.fromPrivateKey(privateKey)
const tokenName = 'XMAS'
const toAddress = 'UaQKaz62grZaMLSXjMLcGtez65gbsVfKuS'
const unsignedTx = await unichain.transactionBuilder.transferTokenOwner(tokenName, toAddress, ownerAddress)
const signedTx = await unichain.unx.sign(unsignedTx, privateKey)
const tx = await unichain.unx.sendRawTransaction(signedTx)
console.log(tx)
```

### Apply for witness
```js
/* Apply for witness example 
 * function applyForWitness(witnessAddress, witnessURL)
 * witnessAddress: The owner address that applies for witness 
 * witnessURL: the link to witness information
 */
const witnessPrivateKey = 'Your_witness_private_key'
const witnessAddress = 'Your_witness_address' // = Unichain.address.fromPrivateKey(witnessPrivateKey)
const witnessURL = 'https://witness-test.org'
let unsingedTx = await unichain.transactionBuilder.applyForWitness(witnessAddress, witnessURL)
let signedTx = await unichain.api.signTransaction(unsingedTx, witnessPrivateKey, 0)
let res = await unichain.api.sendRawTransaction(signedTx)
console.log('Apply for witness transaction: ', res)
```

### Lock/Freeze balance
```js
/* Lock/Freeze UNW balance 
 * function freezeBalance(amount, duration, resourceType, ownerAddress)
 * amount: amount of UNW to lock in Ginza unit, 1UNW = 10^6 Ginza
 * duration: duration of the lock. default to 3 days
 * resource type: since version 2.x, only accept the 'BANDWIDTH'
 * ownerAddress: owner address of this operation.
 */
const amount = 100 //100 UNW
const privateKey = 'Your_private_key'
const ownerAddress = 'Your_address'
let unsingedTx = await unichain.transactionBuilder.freezeBalance(Unichain.toGinza(amount), 3, 'BANDWIDTH', ownerAddress)
let signedTx = await unichain.api.signTransaction(unsingedTx, privateKey, 0)
let res = await unichain.api.sendRawTransaction(signedTx)
console.log('Lock coin transaction: ', res)

```

### Vote for witness
Full example
```js
/* vote for witness
 * function vote(witnessToVote, voterAdress)
 * witnessToVote: list of witness to vote & vote count corresponding
 * voterAddress: the address that operates this action
 */
const witnessAddress = 'Witness_address'
const voterAdress = 'Your_voter_address'
const voterPrivateKey = 'Your_voter_key'
let voteCount = 30
let witnessToVote = {[witnessAddress]: voteCount} //can be many witness. format address:voteCount
let unsingedTx = await unichain.transactionBuilder.vote(witnessToVote, voterAdress)
let signedTx = await unichain.api.signTransaction(unsingedTx, voterPrivateKey, 0)
let res = await unichain.api.sendRawTransaction(signedTx)
console.log('Vote tx ', res)
```
### Create a proposal
```js 
/* Crete proposal
 * function createProposal(proposalParam, witnessAddress)
 * proposalParam: the proposal params in array format
 * witnessAddress: the witness that creates the proposal
 * Note: only witness can perform this operation
 */
const witnessPrivateKey = 'witness-private-key'
const witnessAddress = Unichain.address.fromPrivateKey(witnessPrivateKey)
const proposal = [{key: 34, value: 4}] // proposal to upgrade network to version 4
const unsingedTx = await unichain.transactionBuilder.createProposal(proposal, witnessAddress)
const signedTx = await unichain.api.signTransaction(unsingedTx, witnessPrivateKey, 0)
const res = await unichain.api.sendRawTransaction(signedTx)
console.log('proposal tx ', res)
```

### Approve a proposal
Only witness can perform this operation
```js
/* Approve a proposal
 * function voteProposal(proposalID, isApprove, witnessAddress)
 * proposalID: the proposal ID
 * isApprove: true/false
 * witnessAddress: the witness address that perform this operation
 * Note: only witnesses can call this function
 */
 const witnessAddress = 'witness-address'
 const unsingedTx = await unichain.transactionBuilder.voteProposal(5, true,witnessAddress)

```

### Delete a proposal
Only proposal owner can perform this operation
```js
/* Delete a proposal
 * function deleteProposal(proposalID, ownerAddress)
 * proposalID: the proposal ID
 * ownerAddress: the witness that has created this proposal before
 */
const witnessAddress = 'witness-address'
const unsingedTx = await unichain.transactionBuilder.deleteProposal(5 , witnessAddress)

```

### Withdraw reward balance
```js 
/* withdraw reward for witnesses and voters
 * function withdrawBlockRewards(ownerAddress)
 * ownerAddress: the address perform this function
 */
const ownerAddress = 'owner-address'
const unsingedTx = await unichain.transactionBuilder.withdrawBlockRewards(ownerAddress)
```

## APIs
APIs to communicate with UniChain network are wrapped into *unx* class. You can use either callback or async/await syntax to call the apis. For example, to get the current block, the *getCurrentBlock* is called as below
```
//callback style
unichain.api.getCurrentBlock(data => {
    console.log('Current block data:', data)
})

//async/await style
const data = await unichain.api.getCurrentBlock()
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