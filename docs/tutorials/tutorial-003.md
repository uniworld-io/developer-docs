---
id: tutorial-003
title: Send UNW from web app
---

This tutorial guides you step by step how to send UNW from the web application. You’ll learn how to set up the Unichain-js library and work with some basic functions. The tutorial is written in one html file, and the UI/UX is very simple. Learners are required to have basic knowledge of html language, but if they don’t, It’s very easy to read and learn the code.  

There are 3 main steps in the tutorial: 
Generate a random private key and wallet address
Get UNW faucet from testnet 
Send UNW to another address 

## Generate random private key and wallet address 
The private key is 64 hex-characters. Users can use any random method from any library to generate the private key. In this tutorial, We use pure javascript, so the random private key will be generated like following

``` js
function getRandomKey () {
	//the hex characters array
    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'f']
    const len = chars.length
    let key = ''
    for (let i = 0; i < 64; ++i) {
        const random = Math.floor(Math.random() * (len - 0))
        const char = chars[random]
        key += char
    }
    return key
}

```
To generate a unichain address from a private key, We’ll need to use the help from Unichain-js. Setup Unichain js on the web is very simple
```js
<script src="https://cdn.jsdelivr.net/npm/@uniworld/unichain-js@1.0.8/dist/UnichainJS.js"></script>
function setupUichainJS () {
    const fullNode = 'https://testnet-seed-1.unichain.world'
    const relayNode = 'https://testnet-relay-1.unichain.world'
    return new UnichainJS({fullNode, relayNode})
}

```
Please change the blockchain nodes to the corresponding networks. You can use the [public nodes here](https://developers.unichain.world/public-resources)  for testing.

The function to generate the account on Unichain network will look like:
```js
function generateRandomWallet() {
    const unichainJs = setupUichainJS()
    const privateKey = getRandomKey()
    const address = unichainJs.address.fromPrivateKey(privateKey)
    //bind results on UI
    document.getElementById("privateKey").value = privateKey
    document.getElementById("address").value = address
}

``` 

## Get UNW faucet from testnet
We distributed 10 UNW for an address every 24 hours. Please note that UNW in testnet is used for testing purposes only. It has no value and can be reseted at any time.
Get 10 UNW faucet here: [Faucet Link](/faucet) by enter the address generated above and click the dropdown button *Give me UNW -> 10 UNW* 

Please write down the private key, wallet address for later uses so that you don't need to get the faucet again.

## Send UNW to another address
## Send UNW to another address
Assume that we’ve already generated the private key/address and got the UNW faucet from testnet. Now We will transfer a piece of UNW to another address.
First, We need to get the inputs from UI, then prepare and validate: 
From address: the address that will send UNW. It’s the address we generate above.
```
const fromAddress = document.getElementById("address").value

```
Private key: the private key generated above, corresponding to *from address*. It is used to signed transaction from client side (on web)
```
const fromAddress = document.getElementById("address").value

```
To address: the address that receive UNW, We can validate this address by using the *isAddress()* function in unichain-js
```js
const toAddress = document.getElementById('toAddress').value
//check received address
               if (!unichainJs.isAddress(toAddress)) {
                   throw `${toAddress} is not valid`
               }
```
Amount: the amount of UNW to be sent. This amount should be converted into Ginza, 1 UNW = 1.000.000 Ginza, We can uses function *toGinza* from unichain-js to convert 
```js
let amount = document.getElementById('amount').value
amount = unichainJs.toGinza(parseFloat(amount))

```

Now We can build the transaction to send UNW.
The sendUNW interface look like following:
```js
sendUnw(toAddress, amount, avaibaleTime, fromAddress)
```
Where: 
- toAddress: address that receive UNW
- amount: amount of UNW in Ginza unit
- availableTime: the time that UNW will be available in the receiver's wallet.  It’s the *send future* feature, similar to *lock coin* in popular smart contracts. availableTime is the unix timestamp, For example: if the availableTime is set to 1735693200000 (1/1/2025 - check [this site](https://www.epochconverter.com/) for the conversion), Users will receive the amount of UNW but they can only use It after 1/1/2025. If the availableTime is set to 0, It’s the *normal send*, receivers can use the UNW immediately 
- fromAddress: the sender’s address
	
Please note that, the transaction built from the *transactionBuilder* class needs to be signed by the sender's private key so that It will be valid on the blockchain network. 
The sign interface: 
```js
sign(unsignedTx, privateKey)
```
Where *unsignedTx* is the transaction build from previous step and *privatekey* is the private key provided by users. 
Finally, the signed transaction will be broadcasted to the network. If everything is ok, the transaction will be added to the ledger of the network.

The full function of sending UNW as below:
```js
async function sendUNW() {
    const unichainJs = setupUichainJS()
    try {
        //Get input from UI: to address, amount, private key, from address
        const toAddress = document.getElementById('toAddress').value
        let amount = document.getElementById('amount').value
        const privateKey = document.getElementById("privateKey").value
        const fromAddress = document.getElementById("address").value

        //convert amount to Ginza. 1 UNW = 10^6 Ginza
        amount = unichainJs.toGinza(parseFloat(amount))

        //check received address
        if (!unichainJs.isAddress(toAddress)) {
            throw `${toAddress} is not valid`
        }

        //create unsigned transaction
        const unsignedTx = await unichainJs.transactionBuilder.sendUnw(toAddress, amount, 0, fromAddress)
        
        //signed transaction by private key
        const signedTx = await unichainJs.api.sign(unsignedTx, privateKey)

        //broadcast signed transaction into network
        const broastTx = await unichainJs.api.sendRawTransaction(signedTx)
        document.getElementById("result").innerHTML = 'Broadcast transaction success, data = ' + JSON.stringify(broastTx)

    } catch (err) {
        document.getElementById("result").innerHTML = 'Error ' + err
    }
}

```
The web appearance will look like the following picture:

The full source code of this tutorial is uploaded to the tutorial repository on github. [Source code here](https://github.com/uniworld-io/tutorials/tree/master/send-unw-from-web)



