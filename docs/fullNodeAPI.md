---
id: fullNodeAPI
title: Full Node API
---

The following is the list of API to interact with blockchain node. They are Rest APIs

## Transaction
### Create Transaction
 - Path: /wallet/createtransaction
 - Method: POST
 - Description: Create a transfer transaction, if to address is not existed, then create the account on the blockchain
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/wallet/createtransaction -d
'{
    "to_address": "44c88aa676111b8169bd000d092548a9ac4390af41",
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "amount": 1000
}'
 ```

 ### Get Transaction by ID
 - Path: /walletsolidity/gettransactionbyid
 - Method: POST
 - Description: Get transaction detail by transaction ID
 - Params and data example: 
 ```
    curl -X POST  http://{host}/walletsolidity/gettransactionbyid -d
'{
    "value": "1700cc7ebfca2f7c54b4320b01ff9489416e38a12cc4147cd4848b196e49dbce"
}'
 ```

 ### Get Transaction info by ID
 - Path: /walletsolidity/gettransactioninfobyid
 - Method: POST
 - Description: Get transaction info by transaction ID
 - Params and data example: 
 ```
    curl -X POST  http://{host}/walletsolidity/gettransactioninfobyid -d
'{
    "value": "1700cc7ebfca2f7c54b4320b01ff9489416e38a12cc4147cd4848b196e49dbce"
}'
 ```

  ### Get Transaction info by ID
 - Path: /wallet/gettransactioninfobyid
 - Method: POST
 - Description: Get transaction info by transaction ID
 - Params and data example: 
 ```
    curl -X POST  http://{host}/wallet/gettransactioninfobyid -d
'{
    "value": "1700cc7ebfca2f7c54b4320b01ff9489416e38a12cc4147cd4848b196e49dbce"
}'
 ```

### Get Transaction count in block
- Path: /walletsolidity/gettransactioncountbyblocknum
- Method: POST
- Description: Get number of transaction in a block
- Params and data example:
```
$ curl -X POST  http://{host}/walletsolidity/gettransactioncountbyblocknum -d
'{
    "num": 1470
}'
```

### Get transaction info in block 
- Path: walletsolidity/gettransactioninfobyblocknum
- Method: POST
- Description: Get the list of transaction in a specific block
- Params and data example:
```
$ curl -X POST  http://{host}/walletsolidity/gettransactioninfobyblocknum -d
'{
    "num": 1470
}'
```

## Account
### Create account
- Path: wallet/createaccount
- Method: POST
- Description: Create account on blockchain
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/createaccount -d
'{
    "owner_address": "44c88aa676111b8169bd000d092548a9ac4390af41",
    "account_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3"
}'
```
### Get account
- Path: /walletsolidity/getaccount
- Method: POST
- Description: Query an account information
- Params and data example:
```
$ curl -X POST  http://{host}/walletsolidity/getaccount -d
'{
    "address": "44c88aa676111b8169bd000d092548a9ac4390af41"
}'
```
### Update account
- Path: wallet/updateaccount
- Method: POST
- Description: Update name of account
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/updateaccount -d
'{
    "account_name": "0x756e69636861696e67656e6573697361646472657373",
    "owner_address": "44c88aa676111b8169bd000d092548a9ac4390af41"
}'
```
### Create address
- Path: wallet/createaddress
- Method: POST
- Description: Create an address with a password (password is in hex string format)
- Params and data example:
```
$ curl -X POST http://{host}/wallet/createaddress -d
'{
    "value": "73616d706c6570617373776f7264"
}'
```

### Generate address
- Path: wallet/generateaddress
- Method: POST
- Description: Generate address and privatekey
- Params and data example:
```
$ curl -X GET  http://{host}/wallet/generateaddress

```
### Validate wallet address
- Path: wallet/validateaddress
- Method: POST
- Description: Validate address
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/validateaddress -d
'{
    "address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3"
}'
```
### Get account resource
- Path: wallet/getaccountresource
- Method: POST
- Description: Query resource information of an account
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/getaccountresource -d
'{
    "address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3"
}'
```
### Get account net
- Path: wallet/getaccountnet
- Method: POST
- Description: Query bandwidth information of an account
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/getaccountnet -d
'{
    "address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3"
}'
```
### Set account by ID
- Path: wallet/setaccountid
- Method: POST
- Description: To set an account id for an account
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/setaccountid -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "account_id": "1234567891012333"
}'
```
### Get account by ID
- Path: wallet/getaccountbyid
- Method: POST
- Description: Create account on blockchain
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/getaccountbyid -d
'{
    "account_id": "1234567891012333"
}'
```
### Get delegated resource
- Path: wallet/getdelegatedresource
- Method: POST
- Description: Query the energy delegation information
- Params and data example:
```
$ curl -X POST  http://{host}/walletsolidity/getdelegatedresource -d
'{
    "fromAddress": "44c88aa676111b8169bd000d092548a9ac4390af41",
    "toAddress": "4422b7ec06542e524db6045a41cc767bd83db3dbc3"
}'
```
*fromAddress*: Energy from address, default hexString
*toAddress*: Energy to address, default hexString
Return: Energy delegation information

### Lock UNW balance
- Path: wallet/freezebalance
- Method: POST
- Description: Lock UNW balance
- Params and data example:
```$ curl -X POST http://{host}/wallet/freezebalance -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "frozen_balance": 10000,
    "frozen_duration": 3,
    "resource": "BANDWIDTH",
    "receiver_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3"
}'
```
### Unlock UNW balance
- Path: wallet/unfreezebalance
- Method: POST
- Description: Unlock UNW balance
- Params and data example:
```
$ curl -X POST http://{host}/wallet/unfreezebalance -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "resource": "BANDWIDTH",
    "receiver_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3"
}'
```

## Witness 
### Create witness 
- Path: wallet/createwitness
- Method: POST
- Description: Apply to become a witness
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/createwitness -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "url": "68747470733a2f2f756e69636861696e2d7769746e6573732e6f7267"
}'
```

### Get witness list
- Path: wallet/listwitnesses
- Method: GET
- Description: Get the list of network witness
- Params and data example:
```
$ curl -X GET  http://{host}/wallet/listwitnesses

```
### Update witness information 
- Path: wallet/updatewitness
- Method: POST
- Description: Update wallet website url
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/updatewitness -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "update_url": "68747470733a2f2f6e65772d7570646174652d7769746e6573732e6f7267"
}'
```

### Update witness brokerage
- Path: wallet/updateBrokerage
- Method: POST
- Description: Update witness brokerage
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/updateBrokerage  -d '{
"owner_address":"4422b7ec06542e524db6045a41cc767bd83db3dbc3",
"brokerage":40
}'
```

### Get witness brokerage
- Path: wallet/getbrokerage
- Method: GET
- Description: Query the ratio of brokerage of the witness
- Params and data example:
```
$ curl -X GET  http://{host}/wallet/getBrokerage -d '{
"address":"4422b7ec06542e524db6045a41cc767bd83db3dbc3"}'
```

### Get reward
- Path: wallet/getreward
- Method: GET
- Description: Query unclaimed reward
- Params and data example:
```
$ curl -X GET
http://{host}/wallet/getReward -d '{
"address":"4422b7ec06542e524db6045a41cc767bd83db3dbc3"}'
```
### Withdraw balance
- Path: wallet/withdrawbalance
- Method: POST
- Description: Withdraw reward to account balance for witnesses
- Params and data example:
```
$ curl -X POST http://{host}/wallet/withdrawbalance -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3"
}'
```
### Create a proposal
- Path: wallet/proposalcreate
- Method: POST
- Description: Create the proposal, only witness node has the permission to perform this operation
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/proposalcreate -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "parameters": [
        {
            "key": 0,
            "value": 100000
        },
        {
            "key": 1,
            "value": 2
        }
    ]
}'
```
### Create hardfork proposal
- Path: wallet/proposalcreate
- Method: POST
- Description: Create the hardfork proposal, only witness node has the permission to perform this operation. Hardfork key is 34 and value is supported block version, now support upto block version 2
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/proposalcreate -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "parameters": [
        {
            "key": 34,
            "value": 2
        }
    ]
}'
```
### Get the proposal list
- Path: wallet/listproposals
- Method: POST
- Description: Query all proposals on network
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/listproposals
```
### Get proposal by ID
- Path: wallet/getproposalbyid
- Method: POST
- Description: Get proposal by ID
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/getproposalbyid -d
'{
    "id": 1
}'

```
### Approve proposal
- Path: wallet/proposalapprove
- Method: POST
- Description: Approve for specific proposal. Only witness node has this permision.
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/proposalapprove -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "proposal_id": 1,
    "is_add_approval": true
}'
```
### Delete the proposal
- Path: wallet/proposaldelete
- Method: POST
- Description: Delete a specific proposal. Only proposal's owner can perform this operation
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/proposaldelete -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "proposal_id": 1
}'
```
### Get proposal list
- Path: wallet/getapprovedlist
- Method: POST
- Description: Get proposal list
- Params and data example:
```
```

### Get paginated proposal list
- Path: wallet/getpaginatedproposallist
- Method: POST
- Description: Query the list of all the proposals by pagination
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/getpaginatedproposallist -d
'{
    "offset": 0,
    "limit": 10
}'
```

## Smart contract
### Deploy smart contract
- Path: wallet/deploycontract
- Method: POST
- Description: Deploy smart contract to network
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/deploycontract -d
'{
    "abi": "[{inputs:[{name:\"initialBalance\",type:\"uint256\"}],payable:false,stateMutability:\"nonpayable\",type:\"constructor\"},{anonymous:false,inputs:[{indexed:false,name:\"_from\",type:\"address\"},{indexed:false,name:\"_to\",type:\"address\"},{indexed:false,name:\"_value\",type:\"uint256\"}],name:\"Transfer\",type:\"event\"},{constant:false,inputs:[{name:\"receiver\",type:\"address\"},{name:\"amount\",type:\"uint256\"}],name:\"sendCoin\",outputs:[{name:\"sufficient\",type:\"bool\"}],payable:false,stateMutability:\"nonpayable\",type:\"function\"},{constant:!0,inputs:[{name:\"addr\",type:\"address\"}],name:\"getBalanceInEth\",outputs:[{name:\"\",type:\"uint256\"}],payable:false,stateMutability:\"view\",type:\"function\"},{constant:!0,inputs:[{name:\"addr\",type:\"address\"}],name:\"getBalance\",outputs:[{name:\"\",type:\"uint256\"}],payable:false,stateMutability:\"view\",type:\"function\"},{constant:!0,inputs:[],name:\"getOwner\",outputs:[{name:\"\",type:\"address\"}],payable:false,stateMutability:\"view\",type:\"function\"}];",
    "bytecode": "0x608060405234801561001057600080fd5b50d3801561001d57600080fd5b50d2801561002a57600080fd5b506040516020806105c88339810180604052602081101561004a57600080fd5b810190808051906020019092919050505033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550506104d9806100ef6000396000f3fe608060405234801561001057600080fd5b50d3801561001d57600080fd5b50d2801561002a57600080fd5b5060043610610083576000357c0100000000000000000000000000000000000000000000000000000000900480637bd703e814610088578063893d20e8146100e057806390b98a111461012a578063f8b2cb4f14610190575b600080fd5b6100ca6004803603602081101561009e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101e8565b6040518082815260200191505060405180910390f35b6100e86102a8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101766004803603604081101561014057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506102d2565b604051808215151515815260200191505060405180910390f35b6101d2600480360360208110156101a657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610465565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61020d84610465565b60026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b15801561026657600080fd5b505af415801561027a573d6000803e3d6000fd5b505050506040513d602081101561029057600080fd5b81019080805190602001909291905050509050919050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610323576000905061045f565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef338484604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a1600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905091905056fea165627a7a72305820184743ddad08375f6d08ae957e327d6bb1a68183fb62ed5a51c96d3b143ec7120029",
    "parameter": "",
    "call_value": 100,
    "name": "YourCoin",
    "consume_user_resource_percent": 30,
    "fee_limit": 10,
    "origin_energy_limit": 10,
    "owner_address": "440bc353c683213030a0525cb76169442d3c729f01"
}'
```

### Query contract
- Path: wallet/getcontract
- Method: POST
- Description: Query smart contract from contract address
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/getcontract -d
'{
    "value": "442fc353c683247d30a0165cb73329892d3c7f9f17"
}'
```

## Other network API
### Broadcast transaction
 - Path: wallet/broadcasttransaction
 - Method: POST
 - Description: Broadcast the signed transaction into blockchain network
 - Params and data example: 
 ```
 $ curl -X POST  http://{host}/wallet/broadcasttransaction -d
'{ visible: false,
  txID:
   "de3400ed12a9460058e015edf1ef1fb8b82cc698051b1b12a58186d014690fb4",
  raw_data: { 
        contract: [
            { 
                parameter: { 
                    value:{
                        amount: 10000000000,
                        owner_address: "440bc353c683213030a0525cb76169442d3c729f01",
                        to_address: "44276adef944a4b1dd7c99cd68752e7d671954838f" 
                    },
                type_url: "type.googleapis.com/protocol.TransferContract",
                },
                type: "TransferContract" 
            } 
        ],
      ref_block_bytes: "7931",
      ref_block_hash: "d41991b0a1ed3cd8",
      expiration: 1599971334000,
      timestamp: 1599971274761 
    } 
  raw_data_hex:
   "0a0279312208d41991b0a1ed3cd840f0aee4adc82e5a69080112650a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412340a15440bc353c683213030a0525cb76169442d3c729f01121544276adef944a4b1dd7c99cd68752e7d671954838f1880c8afa0257089e0e0adc82e",
  signature:
   [ "7821d87623366f5780d6c81c1e8b17130198cdfc8f56500538dca026a27b1e004e1034c12308449e5896ad780e67c5fc470f1a01dc7cb512b5ae62af8325df0001" 
   ] 
}'
 ```

### Broadcast transaction by hex
 - Path: wallet/broadcasttransaction
 - Method: POST
 - Description: Broadcast the signed transaction in the hex format into blockchain network
 - Params and data example: 
$ curl -X POST  http://{host}/wallet/broadcasthex -d
```
'{
   "transaction":"0a0279312208d41991b0a1ed3cd840f0aee4adc82e5a69080112650a2d747970652e676f6f676c65617069732e636f6d2f70726f746f636f6c2e5472616e73666572436f6e747261637412340a15440bc353c683213030a0525cb76169442d3c729f01121544276adef944a4b1dd7c99cd68752e7d671954838f1880c8afa0257089e0e0adc82e"
}'
```
### List nodes
 - Path: wallet/listnodes
 - Method: GET
 - Description: Query the list of nodes connected to the ip of the api
 - Params and data example: 
 ```
 $ curl -X GET  http://{host}/wallet/listnodes
```

### Get next maintenance time
 - Path: wallet/getnextmaintenancetime
 - Method: GET
 - Description: Query the time interval till the next vote round
 - Params and data example: 
 ```
 $ curl -X GET  http://{host}/wallet/getnextmaintenancetime

```
### Get node information
 - Path: wallet/getnodeinfo
 - Method: GET
 - Description: Query the current node infromation
 - Params and data example: 
 ```
 $ curl -X GET http://{host}/wallet/getnodeinfo

```
### Get nework chain parameters
 - Path: wallet/getchainparameters
 - Method: GET
 - Description: Query the parameters of the blockchain used for witnessses to create a proposal
 - Params and data example: 
 ```
 $ curl -X GET  http://{host}/wallet/getchainparameters

```
### Get current block
 - Path: walletsolidity/getnowblock
 - Method: GET
 - Description: Query the latest block information
 - Params and data example: 
 ```
 $ curl -X GET  http://{host}/walletsolidity/getnowblock

```

### Get block by number
 - Path: walletsolidity/getblockbynum
 - Method: POST
 - Description: Query a block information by block height
 - Params and data example: 
 ```
 $ curl -X POST  http://{host}/walletsolidity/getblockbynum -d
'{
    "num": 100
}'
```

### Get block by ID
 - Path: walletsolidity/getblockbyid
 - Method: POST
 - Description: Query a block information by block id
 - Params and data example: 
 ```
 $ curl -X POST  http://{host}/walletsolidity/getblockbyid-d
'{
    "value": "00000000002c4e7810a2ac64a17e08d6ed61c74674ab00acb6589e8c050f2570"
}'
```
### Get block by limit
 - Path: walletsolidity/getblockbylimitnext
 - Method: POST
 - Description: Query a list of blocks by range
 - Params and data example: 
 ```
 $ curl -X POST  http://{host}/walletsolidity/getblockbylimitnext -d
'{
    "startNum": 1,
    "endNum": 2
}'
 ```
### Get block by latest number
 - Path: walletsolidity/getblockbylimgetblockbylatestnumitnext
 - Method: POST
 - Description: Query the several latest blocks
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/walletsolidity/getblockbylatestnum -d
'{
    "num": 10
}'
 ```


## Future transfer
### Create future transfer
 - Path: wallet/createfuturetransaction
 - Method: POST
 - Description: create future transfer transaction
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/wallet/createfuturetransaction -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "to_address": "44c88aa676111b8169bd000d092548a9ac4390af41",
    "amount": 1000,
    "expire_time": 1633361417000
}'
 ```

### Withdraw expired future deals 
 - Path: wallet/withdrawfuturetransaction
 - Method: POST
 - Description: create future transfer transaction
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/wallet/withdrawfuturetransaction -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3"
}'
 ```

### List future deals on full node
 - Path: wallet/getfuturetransfer
 - Method: POST
 - Description: create future transfer transaction
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/wallet/getfuturetransfer -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "page_size": 10,
    "page_index": 0
}'
 ```

### List future deals solidity node
 - Path: walletsolidity/getfuturetransfer
 - Method: POST
 - Description: create future transfer transaction
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/walletsolidity/getfuturetransfer -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "page_size": 10,
    "page_index": 0
}'
 ```


## URC30 Token
### Create new URC30 token
 - Path: wallet/createtoken
 - Method: POST
 - Description: create token v2
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/wallet/createtoken -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "name":"PWR",
    "abbr":"pwr",
    "max_supply": 1000000000,
    "total_supply": 500000000,
    "start_time": 1633361417000,
    "end_time": 1791127817000,
    "description":"Token for Solar Power Solution Inc",
    "url":"http://solarpower.com",
    "fee": 10,
    "extra_fee_rate": 1,
    "fee_pool": 1000000,
    "lot": 10000,
    "fee": 10,
    "exch_unx_num": 10,
    "exch_num": 1000
}'
 ```

### Contribute UNW to URC30 token pool fee
 - Path: wallet/contributetokenfee
 - Method: POST
 - Description: contrinute UNW to token fee pool
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/wallet/contributetokenfee -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "token_name":"PWR",
    "amount": 1000000
}'
 ```

### Update URC30 token params
 - Path: wallet/updatetokenparams
 - Method: POST
 - Description: update token params
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/wallet/updatetokenparams -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "token_name": "PWR",
    "amount": "600000000", //token transfer fee
    "extra_fee_rate": 2,
    "lot": 200,
    "url": "http://solarpower2.com",
    "description":"Solar Power Solution Inc",
    "total_supply":"Solar Power Solution Inc",
    "fee_pool": 10000000,
    "total_supply": 10000000,
    "exch_unx_num": 20,
    "exch_num": 1000
}'
 ```

### Mint URC30 token
 - Path: wallet/minetoken
 - Method: POST
 - Description: mint to increasse more token to curculation
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/wallet/minetoken -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "token_name": "PWR",
    "amount": 100000000
}'
 ```

### Burn URC30 token
 - Path: wallet/burntoken
 - Method: POST
 - Description: burn to decrease token from curculation
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/wallet/burntoken -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "token_name": "PWR",
    "amount": 100000000
}'
 ```

### Transfer URC30 token
 - Path: wallet/transfertoken
 - Method: POST
 - Description: create future transfer transaction
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/wallet/transfertoken -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "to_address": "44c88aa676111b8169bd000d092548a9ac4390af41",
    "token_name": "PWR",
    "amount": 1000000,
    "available_time": 1791127817000
}'
 ```

### Withdraw expired future URC30 token deals
 - Path: wallet/withdrawfuturetoken
 - Method: POST
 - Description: withdraw expired future token deals
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/wallet/withdrawfuturetoken -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "token_name": "PWR"
}'
 ```

 ### Update URC30 token's owner
 - Path: wallet/transfertokenowner
 - Method: POST
 - Description: transfer URC30 token's ownership to another account
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/wallet/transfertokenowner -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "to_address": "44c88aa676111b8169bd000d092548a9ac4390af41",
    "token_name": "PWR"
}'
 ```


 ### Exchange UNW to URC30 token
 - Path: wallet/exchangetoken
 - Method: POST
 - Description: exchange UNW to URC30 token
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/wallet/exchangetoken -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "token_name": "PWR",
    "amount": 1000000
}'
 ```

### List URC30 token on full node
 - Path: wallet/gettokenpool
 - Method: POST
 - Description: List all created token v2 on full node
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/wallet/gettokenpool -d
'{
    "token_name": "PWR",
    "page_size": 10,
    "page_index": 0
}'
 ```
 - Output example:
 ```
 {
  "total": 3,
  "page_index": 0,
  "page_size": 1,
  "tokens": [
    {
      "fee_pool": 109996058,
      "total_supply": 550000000,
      "fee": 10,
      "end_time": "2041-12-15 19:29:42",
      "description": "desc",
      "owner_address": "44e4257594e51b856d87428771a1a9ccdcab8bf5cb",
      "url": "url",
      "burned": 50000000,
      "lot": 100,
      "start_time": "2021-12-20 19:29:42",
      "name": "SSI",
      "max_supply": 1000000000,
      "extra_fee_rate": 1,
      "latest_operation_time": "2021-12-21 08:46:39",
      "abbr": "ssi",
      "fee_pool_origin": 100000000,
      "exch_unx_num": 1,
      "exch_num": 10,
      "critical_update_time": "2021-12-21 08:46:39" //exist in block version >= 3
    }
  ]
}
```

### List URC30 token on solidity node
 - Path: walletsolidity/gettokenpool
 - Method: POST
 - Description: List all created token v2 on solidity node
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/walletsolidity/gettokenpool -d
'{
    "token_name": "PWR",
    "page_size": 10,
    "page_index": 0
}'
 ```
- Output example:
 ```
 {
  "total": 3,
  "page_index": 0,
  "page_size": 1,
  "tokens": [
    {
      "fee_pool": 109996058,
      "total_supply": 550000000,
      "fee": 10,
      "end_time": "2041-12-15 19:29:42",
      "description": "desc",
      "owner_address": "44e4257594e51b856d87428771a1a9ccdcab8bf5cb",
      "url": "url",
      "burned": 50000000,
      "lot": 100,
      "start_time": "2021-12-20 19:29:42",
      "name": "SSI",
      "max_supply": 1000000000,
      "extra_fee_rate": 1,
      "latest_operation_time": "2021-12-21 08:46:39",
      "abbr": "ssi",
      "fee_pool_origin": 100000000,
      "exch_unx_num": 1,
      "exch_num": 10,
      "critical_update_time": "2021-12-21 08:46:39" //exist in block version >= 3
    }
  ]
}
```

### List all future URC30 token transfer deals on full node
 - Path: wallet/getfuturetoken
 - Method: POST
 - Description: List all future token v2 transfer deals
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/wallet/getfuturetoken -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "token_name": "PWR",
    "page_size": 10,
    "page_index": 0
}'
 ```

### List all future URC30 token transfer deals on solidity node
 - Path: walletsolidity/getfuturetoken
 - Method: POST
 - Description: List all future token v2 transfer deals
 - Params and data example: 
 ```
$ curl -X POST  http://{host}/walletsolidity/getfuturetoken -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "token_name": "PWR",
    "page_size": 10,
    "page_index": 0
}'
 ```

###
## URC20 Native Token
### Create new Urc20 token contract
- Path: /urc20createcontract
- Method: POST
- Description: Create new Urc20 contract
- Params and data example:
```
curl --location --request POST 'http://{host}/urc20createcontract' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "address": "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "symbol": "TEST",
    "name": "Test Token",
    "decimals": 10,
    "max_supply": 1000000000,
    "total_supply": 500000000,
    "start_time": 1640995200,
    "end_time": 1861920000,
    "url": "https://example.com",
    "fee": 100,
    "extra_fee_rate": 100,
    "fee_pool": 10000000,
    "burned": 500000000,
    "latest_operation_time": 1861920000,
    "lot": 12345,
    "fee_pool_origin": 10000000,
    "exch_unx_num": 12345,
    "exch_num": 12345,
    "exch_enable": true,
    "critical_update_time": 1861920000,
    "create_acc_fee" 1
}'
 ```

### Transfer Urc20 token
- Path: /urc20transfer
- Method: POST
- Description: Transfer token to other account
- Params and data example:
```
curl --location --request POST 'http://{host}/urc20transfer' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "to": "44276adef944a4b1dd7c99cd68752e7d671954838f",
    "address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "amount": "10",
    "available_time": 1861920000

}'
 ```

### Transfer from Urc20 token
- Path: /urc20transferfrom
- Method: POST
- Description: Moves amount tokens from sender to recipient using the allowance mechanism. amount is then deducted from the caller’s allowance.
- Params and data example:
```
curl --location --request POST 'http://{host}/urc20transferfrom' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "from": "440bc353c683213030a0525cb76169442d3c729f01",
    "to": "44276adef944a4b1dd7c99cd68752e7d671954838f",
    "address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "amount": "10",
    "available_time": 1861920000
}'
 ```

### Approve Urc20 token 
- Path: /urc20approve
- Method: POST
- Description: Emitted when the allowance of a spender for an owner is set by a call to approve. value is the new allowance.
- Params and data example:
```
curl --location --request POST 'http://{host}/urc20approve' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "address": "440bc353c683213030a0525cb76169442d3c729f01",
    "spender": "44276adef944a4b1dd7c99cd68752e7d671954838f",
    "amount": 10
}'
 ```

### Contribute Urc20 token to pool fee
- Path: /urc20contributepoolfee
- Method: POST
- Description: Contribute token to a pool fee 
- Params and data example:
```
curl --location --request POST 'http://{host}/urc20contributepoolfee' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "address": "440bc353c683213030a0525cb76169442d3c729f01",
    "amount": 100
}'
 ```

### Update parameters Urc20 token contract
- Path: /urc20updateparams
- Method: POST
- Description: Update parameters of Urc20 contract
- Params and data example:
```
curl --location --request POST 'http://{host}/urc20updateparams' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "address": "440bc353c683213030a0525cb76169442d3c729f01",
    "fee": 100,
    "extra_fee_rate": 100,
    "lot": 12345,
    "url": "https://example.com",
    "total_supply": 2000000000,
    "fee_pool": 20000000,
    "exch_unx_num": 123456,
    "exch_num": 123456,
    "create_acc_fee": 1000
}'
 ```

### Mint Urc20 token 
- Path: /urc20mint
- Method: POST
- Description: Mint new amount of token
- Params and data example:
```
curl --location --request POST 'http://{host}/urc20mint' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "address": "440bc353c683213030a0525cb76169442d3c729f01",
    "amount": 1000000000,
    "to_address": "44276adef944a4b1dd7c99cd68752e7d671954838f"
}'
 ```

### Burn Urc20 token 
- Path: /urc20burn
- Method: POST
- Description: Burn token
- Params and data example:
```
curl --location --request POST 'http://{host}/urc20burn' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "44276adef944a4b1dd7c99cd68752e7d671954838f",
    "address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "amount": 1000000000
}'
 ```

### Withdraw Urc20 token in future 
- Path: /urc20withdrawfuture
- Method: POST
- Description: Withdraw locked deal in the future
- Params and data example:
```
curl --location --request POST 'http://{host}/urc20withdrawfuture' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "address": "44276adef944a4b1dd7c99cd68752e7d671954838f"
}'
 ```

### Transfer owner of Urc20 token 
- Path: /urc20transferowner
- Method: POST
- Description: Transfer owner of a token to new address
- Params and data example:
```
curl --location --request POST 'http://{host}/urc20transferowner' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "44276adef944a4b1dd7c99cd68752e7d671954838f",
    "to_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "address": "442fc353c683247d30a0165cb73329892d3c7f9f17"
}'
 ```

### Exchange Urc20 token 
- Path: /urc20exchange
- Method: POST
- Description: Exchange token to other address
- Params and data example:
```
curl --location --request POST 'http://{host}/urc20exchange' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "amount": 10000
}'
 ```

### List Urc20 token contracts 
- Path: /urc20contractlist
- Method: GET
- Description: Get list of contracts
- Params and data example:
```
curl --location --request GET 'http://{host}/urc20contractlist?address=4422b7ec06542e524db6045a41cc767bd83db3dbc3&symbol=UNW&page_size=1&page_index=1'
 ```

### Get future deal of Urc20 token 
- Path: /urc20futureget
- Method: GET
- Description: Get information of a future deal
- Params and data example:
```
curl --location --request GET 'http://{host}/urc20futureget?owner_address=4422b7ec06542e524db6045a41cc767bd83db3dbc3&address=UikVt2k4YfmkrDyp7cnJxKxVdz7sjsd5cN&page_size=1&page_index=1'
 ```

### Get Urc20 token name 
- Path: /urc20name
- Method: GET
- Description: Get name of a token by address
- Params and data example:
```
curl --location --request GET 'http://{host}/urc20name?address=4422b7ec06542e524db6045a41cc767bd83db3dbc3'
 ```

### Get Urc20 token symbol 
- Path: /urc20symbol
- Method: GET
- Description: Get symbol of a token by address
- Params and data example:
```
curl --location --request GET 'http://{host}/urc20symbol?address=4422b7ec06542e524db6045a41cc767bd83db3dbc3'
 ```

### Get Urc20 token decimals 
- Path: /urc20decimals
- Method: GET
- Description: Get decimals of a token by address
- Params and data example:
```
curl --location --request GET 'http://{host}/urc20decimals?address=4422b7ec06542e524db6045a41cc767bd83db3dbc3'
 ```

### Get total supply of Urc20 token 
- Path: /urc20totalsupply
- Method: GET
- Description: Get total supply of a token by address
- Params and data example:
```
curl --location --request POST 'http://{host}/urc20totalsupply?address=4422b7ec06542e524db6045a41cc767bd83db3dbc3'
 ```

### Get Urc20 balance 
- Path: /urc20balanceof
- Method: GET
- Description: Get balance token of an address
- Params and data example:
```
curl --location --request GET 'http://{host}/urc20balanceof?address=4422b7ec06542e524db6045a41cc767bd83db3dbc3'
 ```

### Get owner of Urc20 token 
- Path: /urc20getowner
- Method: GET
- Description: Get owner of an address
- Params and data example:
```
curl --location --request GET 'http://{host}/urc20getowner?address=4422b7ec06542e524db6045a41cc767bd83db3dbc3'
 ```

### Allowance Urc20 token 
- Path: /urc20allowance
- Method: POST
- Description: Returns the remaining number of tokens that spender will be allowed to spend on behalf of owner through transferFrom.
- Params and data example:
 ```
curl --location --request POST 'http://{host}/urc20allowance' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner":  "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "spender": "44276adef944a4b1dd7c99cd68752e7d671954838f"
}'
 ```

###
## URC721 Token
### Create new Urc721 contract
- Path: /urc721createcontract
- Method: POST
- Description: Create new Urc721 contract. A model has created for generate token from itself.
- Params and data example:
 ```
curl --location --request POST 'http://{host}/urc721createcontract' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address":  "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "address": "440bc353c683213030a0525cb76169442d3c729f01",
    "symbol": "TEST",
    "name": "Test Token",
    "total_supply": 10000000,
    "minter": "4422b7ec06542e524db6045a41cc767bd83db3dbc3"
}'
 ```

### Add minter for Urc721 contract
- Path: /urc721addminter
- Method: POST
- Description: Add minter of an existed Urc721 contract.
- Params and data example:
 ```
curl --location --request POST 'http://{host}/urc721addminter' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address":  "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "address": "440bc353c683213030a0525cb76169442d3c729f01",
    "minter": "4422b7ec06542e524db6045a41cc767bd83db3dbc3"
}'
 ```

### Remove minter of an existed Urc721 contract
- Path: /urc721removeminter
- Method: POST
- Description: Remove minter of an existed Urc721 contract.
- Params and data example:
 ```
curl --location --request POST 'http://{host}/urc721removeminter' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address":  "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "address": "440bc353c683213030a0525cb76169442d3c729f01"
}'
 ```

### Renounce minter of Urc721 token
- Path: /urc721renounceminter
- Method: POST
- Description: An address has assigned minter of contract that can refuse.
- Params and data example:
 ```
curl --location --request POST 'http://{host}/urc721renounceminter' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "address": "440bc353c683213030a0525cb76169442d3c729f01"
}'
 ```

### Mint Urc721 token
- Path: /urc721mint
- Method: POST
- Description: This creates token from contract template.
- Params and data example:
 ```
curl --location --request POST 'http://{host}/urc721mint' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "address": "440bc353c683213030a0525cb76169442d3c729f01",
    "to_address": "44276adef944a4b1dd7c99cd68752e7d671954838f",
    "uri": "https://example.com",
    "token_id": 12345
}'
 ```

### Burn Urc721 token
- Path: /urc721burn
- Method: POST
- Description: Remove an Urc721 token by id.
- Params and data example:
 ```
curl --location --request POST 'http://{host}/urc721burn' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "address": "440bc353c683213030a0525cb76169442d3c729f01",
    "token_id": 11234
}'
 ```

### Approve Urc721 token
- Path: /urc721approve
- Method: POST
- Description: Approve an address for Urc21 token, so it can do transfer, burn ... operation.
- Params and data example:
 ```
curl --location --request POST 'http://{host}/urc721approve' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "address": "44276adef944a4b1dd7c99cd68752e7d671954838f",
    "token_id": 12345,
    "to": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "approve": true
}'
 ```

### Approve all Urc721 token
- Path: /urc721setapprovalforall
- Method: POST
- Description: Approve all Urc721 token of owner to other address, so the address can do transfer, burn ... operation on all Urc721 token of the owner.
- Params and data example:
 ```
curl --location --request POST 'http://{host}/urc721setapprovalforall' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "442fc353c683247d30a0165cb73329892d3c7f9f17",
    "to_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "address": "440bc353c683213030a0525cb76169442d3c729f01",
    "approve": true
}'
 ```

### Transfer from Urc721 token
- Path: /urc721transferfrom
- Method: POST
- Description: Transfer Urc721 token to other address. 
- Params and data example:
 ```
curl --location --request POST 'http://{host}/urc721transferfrom' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "440bc353c683213030a0525cb76169442d3c729f01",
    "address": "44276adef944a4b1dd7c99cd68752e7d671954838f",
    "to": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "token_id": 1
}'
 ```

### Get balance of Urc721 token
- Path: /urc721balanceof
- Method: GET
- Description: Get total Urc721 token by owner
- Params and data example:
 ```
 curl --location --request GET 'http://{host}/urc721balanceof?owner_address=44ee39d5d97b1ebf4c12860db9297fcf52930ba72e&address=442fc353c683247d30a0165cb73329892d3c7f9f17'
 ```

### Get name of Urc721 token
- Path: /urc721name
- Method: GET
- Description: Get Urc721 token name by address
- Params and data example:
 ```
curl --location --request GET 'http://{host}/urc721name?address=44ee39d5d97b1ebf4c12860db9297fcf52930ba72e'
 ```

### Get symbol of Urc721 token
- Path: /urc721symbol
- Method: GET
- Description: Get Urc721 token symbol by address
- Params and data example:
 ```
curl --location --request GET 'http://{host}/urc721symbol?address=44ee39d5d97b1ebf4c12860db9297fcf52930ba72e'
 ```

### Get uri of Urc721 token
- Path: /urc721tokenuri
- Method: GET
- Description: Get Urc721 token URI by address and token_id
- Params and data example:
 ```
curl --location --request GET 'http://{host}/urc721tokenuri?address=44ee39d5d97b1ebf4c12860db9297fcf52930ba72e&id=12345'
 ```

### Get total supply of Urc721 token
- Path: /urc721totalsupply
- Method: GET
- Description: Get Urc721 total supply by address
- Params and data example:
 ```
curl --location --request GET 'http://{host}/urc721totalsupply?address=44ee39d5d97b1ebf4c12860db9297fcf52930ba72e'
 ```

### Get owner of an Urc721 token
- Path: /urc721ownerof
- Method: GET
- Description: Find owner of Urc721 token with address and id
- Params and data example:
 ```
curl --location --request GET 'http://{host}/urc721ownerof?address=44ee39d5d97b1ebf4c12860db9297fcf52930ba72e&id=12345'
 ```

### Get Urc721 approved token
- Path: /urc721getapproved
- Method: GET
- Description: Get Urc721 approved token with address and id
- Params and data example:
 ```
curl --location --request GET 'http://{host}/urc721getapproved?address=44ee39d5d97b1ebf4c12860db9297fcf52930ba72e&id=12345'
 ```

### Check if Urc721 token is approved for all
- Path: /urc721isapprovedforall
- Method: GET
- Description: Check if Urc721 token is approved for all
- Params and data example:
 ```
curl --location --request GET 'http://{host}/urc721isapprovedforall?owner_address=44ee39d5d97b1ebf4c12860db9297fcf52930ba72e&address=442fc353c683247d30a0165cb73329892d3c7f9f17&operator=4422b7ec06542e524db6045a41cc767bd83db3dbc3'
 ```


### List Urc721 contracts
- Path: /urc721contractlist
- Method: GET
- Description: Get list contracts of Urc721 
- Params and data example:
 ```
curl --location --request GET 'http://{host}/urc721contractlist?owner_address=44ee39d5d97b1ebf4c12860db9297fcf52930ba72e&page_size=1&page_index=1&owner_type=owner'
 ```

### List Urc721 token
- Path: /urc721tokenlist
- Method: GET
- Description: Get list of Urc721 token 
- Params and data example:
 ```
curl --location --request GET 'http://{host}/urc721tokenlist?owner_address=44ee39d5d97b1ebf4c12860db9297fcf52930ba72e&address=44276adef944a4b1dd7c99cd68752e7d671954838f&page_index=0&page_size=5&owner_type=owner'
 ```

### Urc721 contract info
- Path: /urc721contractget
- Method: GET
- Description: Get Urc721 contract info
- Params and data example:
 ```
curl --location --request GET 'http://{host}/urc721contractget?address=44276adef944a4b1dd7c99cd68752e7d671954838f'
 ```

### Urc721 token info
- Path: /urc721tokenget
- Method: GET
- Description: Get Urc721 token info
- Params and data example:
 ```
curl --location --request GET 'http://{host}/urc721tokenget?address=44276adef944a4b1dd7c99cd68752e7d671954838f&id=123'
 ```


