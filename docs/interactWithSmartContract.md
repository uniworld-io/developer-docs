---
id: interactWithSmartContract
title: Interact with smart contract
sidebar_label: Interact with smart contract
---


## Interact with smart contract from code

Smart contract can be interacted from program languages such as nodejs (javascript) with the help from UniChainJS lib. The following examples call and execute function from **[USDF smart contract](https://github.com/Unifund-De-Capital/USDF-stable-coin)** 

```javascript

const Unichain = require('@uniworld/unichain-js')
const host = 'https://node.unichain.world'
const relayHost = 'https://relay-node.unichain.world'

//your private key
const privateKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

const unichain = new Unichain({
    fullHost: host, 
    solidityNode: relayHost, 
    privateKey: privateKey
})

//contract address, example from USDF contract
const contractAddress = 'UdD9fX4iDn5uyBWPCLeHrUpK2AiFmLEZm1'

//get contract function
const getContract = async (contractAddress) => {
    return await unichain.contract().at(contractAddress)
}

//play with some smart contract function
async function interactWithContract () {
    try {
        const contract = await getContract(contractAddress)

        //call view function, ex: deprecated functio name in abi
        let data = await contract.methods['deprecated']().call()
        console.log(data)

        //call view function with param, ex: balanceOf(address) function in abi
        data = await contract.methods['balanceOf']('UV9gyzMNNGwyoZLKsJBPFVMAqMCEJeditr').call()
        console.log(Unichain.BigNumber(data).toNumber()) //Because output type is uint56 -> convert Bigunmber to number

        //call payable and nonpayable function in abi interface: issue token to address
        data = await contract.methods['issue']('UV9gyzMNNGwyoZLKsJBPFVMAqMCEJeditr', 200).send({
            feeLimit:100000000 //optional
        })

        console.log('execute smart contract, data=(txid)', data)

        //another call: add address to whitelist
        data = await contract.methods['addWhileList']('UPZaENe3N17RqLEUK93NzZ58aoHpc1sqVD').send({
            feeLimit:100000000 //optional
        })
        console.log('execute smart contract, data=(txid)', data)

    } catch(err) {
        console.log(err)
    }
}


interactWithContract().then().catch(err => console.log(err))
```
## Interact with smart contract from UI
- Login into web wallet: [https://uniwallet.world](https://uniwallet.world)
- Navigate to *contract tool* tab
- Input smart contract address into search box and hit *Search Contract* button
- Choose *READ CONTRACT* tab for view function ands *WRITE CONTRACT* to execute functions
- Choose functions then input params for smart contract interaction

![Call smart contract function](../img/smartcontract-interaction-1.png)
*<p align="center">Picture 1. Call name() function in smart contract</p>*

![Execute smart contract function](../img/smartcontract-interaction.png)
*<p align="center">Picture 2. Execute transfer(_to, _value) function</p>*
