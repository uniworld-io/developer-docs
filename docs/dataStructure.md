---
id: dataStructure
title: Data Structure
sidebar_label: Data Structure
---

Unichain is made up of blocks that are cryptography linked together. It looks like the following picture
![unichain data structure](../img/data-structure.drawio.png)
<div class="img-desc">UniChain data block structure</div>

### Block format
The data structure of each block will have the following format:
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
Where:
- __blockID__: is the block hash
- __block_header__: contains the *raw_data* (block number, witness address, tx root, parent hash, time stamp ...) *and witness_signature* who produces the block
- __transactions__: the list of transaction in the block. Each transaction has the brief information that will be described below.

You can get the block by calling the [full node API](./docs/fullNodeAPI) 
```
curl -X POST ${node_endpoint}/wallet/getblockbynum -d '{"num":  block_numer}' 
```
Or 
```
curl -X POST ${node_endpoint}/wallet/getblockbyid -d '{"value":  "block_hash"}'
``` 
You can also try to get block information by calling the [UniChainJS api](./docs/unichainJS)
```js
const block = await unichain.api.getBlockByNumber(blockNumber)
console.log('Block data:', block)
```

#### Try It yourself
<div class="u_center">
<input id="blockID" class="u_input u_full" placeholder=" Input block ID or block hash" ></input>
<p id="blockError" style="color:red"></p>
<div>
<textarea id="blockRes" style="visibility: hidden; width: 100%;margin-top:5px;padding:5px" disabled>
</textarea>
</div>
<input type="button" class="u_button u_button_primary u_margin_top_10" onClick="getBlock()" value="Get Block Info"></input>
</div>


### Transaction format
The transaction will have the following structure:
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
Where:
- __ret__: Contains the list of status. Normally the *ret[0]* indicates the status of transction. If *ret[0].contractRet* equal to *SUCCESS* then the transaction is successful. Otherwise it will fail with many status such as: *REVERT*, *STACK_OVERFLOW*, *OUT_OF_MEMORY* ...
- __signature__: The list of sender's signatures. There will be more than one signature in case of multisign
- __raw_data__: raw data of the transaction.
   - *contract*: the list of contract but normally, get the first from the list (*contract[0]*). Depending on each type of contract, there will be different parameters. For example, the *TransferContract* above will have the *parameter.value*: *amount* - The amount of UNW to be transferred in Ginza unit (1 UNW = 10^6 Ginza), *owner_address* the sender’s address in hex format, *to_address*: the receiver’s address in hex format. You can check all the input parameters of any contract in the [protobuf specs here](https://github.com/uniworld-io/unichain-core/blob/master/src/main/protos/core/Contract.proto)
    - *ref_block_bytes* and *ref_block_hash*: The height and the hash of the transaction reference block, using the 6th to 8th (exclusive) bytes of the reference block height, a total of 2 bytes. The reference block is used in the UNI TAPOS mechanism, which can prevent a replay of a transaction on forks that do not include the referenced block. Generally the latest solidified block is used as the reference block
    - *expiration*: Transaction expiration time, beyond which the transaction will no longer be packed. The default value from full node is 60 seconds but It can be configured to be a maximum of 24 hours.
    - *timestamp*: The Timestamp of transaction creation
- __raw_data_hex__: The raw data in hex format

You can get transaction data by calling the [full node API](./fullNodeAPI#get-transaction-info-by-id-1)  or [UniChainJS API](./unichainJS)
```
curl -X POST  http://{host}/wallet/gettransactionbyid -d '{"value": "transaction_hash"}'
```
```js
const txid = 'transaction_hash'
const tx = await unichain.api.getTransaction(txid)
console.log('Transaction: ', tx)
```
Please note that the transaction and block will be finalized after ⅔ of the witness confirmation (more than 22 blocks and about 1 minute). For the applications that need more reliability, please get the transaction and block in the relay/solidity node. For example:
```
curl -X POST  http://{host}/walletsolidity/gettransactionbyid -d '{"value": "transaction_hash"}'
```

#### Try It yourself
<div class="u_center">
<input id="txid" class="u_input u_full" placeholder=" Input transaction ID" ></input>
<p id="txError" style="color:red"></p>
<div>
<textarea id="txRes" style="visibility: hidden; width: 100%;margin-top:5px;padding:5px" disabled>
</textarea>
</div>
<input type="button" class="u_button u_button_primary u_margin_top_10" onClick="getTx()" value="Get Transaction Info"></input>
</div>

### Related resources:
- [How to run UniChain node](./getStarted)
- [How to use UniChainJS library](./docs/tutorials/tutorial-002)


<script type="text/javascript">
function isNumeric(value) {
    return /^-?\d+$/.test(value);
}
function isHex (hexString) {
        const re = /[0-9A-Fa-f]{64}/g
        return re.test(hexString)
}
function getBlock() {
    const blockId = document.getElementById("blockID").value 
    //TODO: validate 
    let url = 'https://seed-1.unichain.world/wallet/'
    let data = {}
    console.log(blockId)
    if (isNumeric(blockId)) {
        url += 'getblockbynum'
        data = {num: parseInt(blockId)}
    } else if (isHex(blockId)) { //check hex string
        url += 'getblockbyid'
        data = {value: blockId}
    } else {
        document.getElementById("blockError").innerHTML = 'Invalid block ID or block hash'
        return
    }
    axios.post(url, data).then(res => {
        console.log(res.data)
        document.getElementById("blockRes").innerHTML = JSON.stringify(res.data)
        document.getElementById("blockRes").rows = 10
        document.getElementById("blockRes").style.visibility = 'visible'
    }).catch(err => {
        document.getElementById("blockError").innerHTML = JSON.stringify(err)
    })
}
function getTx() {
    const txid = document.getElementById("txid").value 
    let url = 'https://seed-1.unichain.world/wallet/gettransactionbyid'
    console.log(txid)
    if (txid.length != 64 || !isHex(txid)) {
        document.getElementById("txError").innerHTML = 'Invalid transaction hash'
        return
    }
    axios.post(url, {value: txid}).then(res => {
        console.log(res.data)
        document.getElementById("txRes").innerHTML = JSON.stringify(res.data)
        document.getElementById("txRes").rows = 10
        document.getElementById("txRes").style.visibility = 'visible'
    }).catch(err => {
        console.log(err)
        document.getElementById("txError").innerHTML = JSON.stringify(err)
    })
}
</script>
