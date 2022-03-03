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
## Token/Asset
### Create token/asset
- Path: wallet/createassetissue
- Method: POST
- Description: Create token on UniChain network
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/createassetissue -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "name": "0x4d79546f6b656e",
    "abbr": "0x4d544b",
    "total_supply": 10000,
    "unx_num": 1,
    "num": 1,
    "start_time": 1599970530000,
    "end_time": 1631506569000,
    "description": "54686973206973206d79207465737420746f6b656e",
    "url": "68747470733a2f2f6d792d746573742d746f6b656e2e6f7267",
    "free_asset_net_limit": 10000,
    "public_free_asset_net_limit": 10000,
    "frozen_supply": {
        "frozen_amount": 1,
        "frozen_days": 1
    }
}'
```
	
### Purchase token/asset
- Path: wallet/participateassetissue
- Method: POST
- Description: Purchase for a specific token
- Params and data example:
```
$ curl -X POST http://{host}/wallet/participateassetissue -d
'{
    "to_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "owner_address": "44c88aa676111b8169bd000d092548a9ac4390af41",
    "amount": 300,
    "asset_name": "4d79546f6b656e"
}'
```

### Get token issued by account
- Path: wallet/getassetissuebyaccount
- Method: POST
- Description: Get token issued by an address
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/getassetissuebyaccount -d
'{
    "address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3"
}'
```
### Get token issued by name
- Path: wallet/getassetissuebyname
- Method: POST
- Description: Get token issued by name
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/getassetissuebyname -d
'{
    "value": "44756354616E"
}'
```
### Query list of token by name
- Path: wallet/getassetissuelistbyname
- Method: POST
- Description: Query list of token by name
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/getassetissuelistbyname -d
'{
    "value": "4d79546f6b656e"
}'
```
### Get list of token
- Path: wallet/getassetissuelist
- Method: POST
- Description: Query list of token by name
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/getassetissuelistbyname -d
'{
    "value": "4d79546f6b656e"
}'
```
### Get list of token/asset by pagination
- Path: wallet/getpaginatedassetissuelist
- Method: POST
- Description: Get list of token/asset by pagination
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/getpaginatedassetissuelist -d
'{
    "offset": 0,
    "limit": 10
}'
```
### Get token/asset by ID
- Path: wallet/getassetissuebyid
- Method: POST
- Description: Query the list of tokens by name
- Params and data example:
```
$ curl -X POST  http://{host}/walletsolidity/getassetissuelistbyname -d
'{
    "value": "4d79546f6b656e"
}'
```
### Update token/asset
- Path: wallet/updateasset
- Method: POST
- Description: Update token information
- Params and data example:
```
$ curl -X POST http://{host}/wallet/updateasset -d
'{
    "owner_address": "4422b7ec06542e524db6045a41cc767bd83db3dbc3",
    "description": "",
    "url": "",
    "new_limit": 1000000,
    "new_public_limit": 100
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
## NFT
### Create new nft template
- Path: /wallet/createnfttemplate
- Method: POST
- Description: Create new nft template
- Params and data example:
 ```
curl --location --request POST 'http://{host}/wallet/createnfttemplate' \
--header 'Content-Type: application/json' \
--data-raw '{
    "symbol":  "ABC",
    "name": "TESTABC",
    "total_supply": 10,
    "minter": "55533178786d6e34357663484d5779526f543936394e42744c7350754c6d566b4d63",
    "owner": "556b32386e344132386e6658686759576e5272366d58446254624165436b45744a37"
}'
 ```

### Create new nft token
- Path: /wallet/createtoken
- Method: POST
- Description: Create new nft token
- Params and data example:
 ```
curl --location --request POST 'http://{host}/wallet/createtoken' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "556b32386e344132386e6658686759576e5272366d58446254624165436b45744a37",
    "name": "TokenTest",
    "abbr": "",
    "max_supply": 100,
    "total_supply": 100,
    "start_time": null,
    "end_time": null,
    "description": "test",
    "url": "https://www.facebook.com/photo/?fbid=2358336604315632&set=a.103203789828936",
    "fee": 10,
    "extra_fee_rate": 10,
    "fee_pool": 10,
    "burned": null,
    "latest_operation_time": null,
    "lot": null,
    "fee_pool_origin": 10,
    "exch_unx_num": null,
    "exch_num": null,
    "critical_update_time": null,
    "create_acc_fee": 10
}'
 ```

### Get Nft template
- Path: /wallet/getnfttemplate
- Method: GET
- Description: Get nft template by symbol
- Params and data example:
 ```
curl --location --request GET 'http://{host}/wallet/getnfttemplate?symbol=VIETANH'
 ```
### Get Nft token
- Path: /wallet/getnfttoken
- Method: GET
- Description: Get nft token by symbol and id
- Params and data example:
 ```
curl --location --request GET 'http://{host}/wallet/getnfttoken?symbol=VIETANH&id=1'
 ```

### Get Nft balance
- Path: /wallet/getnftbalanceOf
- Method: GET
- Description: Get count token by owner
- Params and data example:
 ```
 curl --location --request GET 'http://{host}/wallet/getnftbalanceOf?owner_address=44ee39d5d97b1ebf4c12860db9297fcf52930ba72e'
 ```

### List Nft template
- Path: /wallet/listnfttemplate
- Method: GET
- Description: Get page nft template by owner address
- Params and data example:
 ```
curl --location --request GET 'http://{host}/wallet/listnfttemplate?owner_address=44ee39d5d97b1ebf4c12860db9297fcf52930ba72e&page_index=0&page_size=5'
 ```

### List Nft token
- Path: /wallet/listnfttoken
- Method: GET
- Description: Get page nft token 
- Params and data example:
 ```
curl --location --request GET 'http://{host}/wallet/listnfttoken?owner_address=44ee39d5d97b1ebf4c12860db9297fcf52930ba72e&page_index=0&page_size=5&symbol=LEXUS'
 ```

### Create Mint Nft token
- Path: /wallet/mintnfttoken
- Method: POST
- Description: create new mint nft token
- Params and data example:
 ```
curl --location --request POST 'http://{host}/wallet/mintnfttoken' \
--header 'Content-Type: application/json' \
--data-raw '{
    "owner_address": "556b32386e344132386e6658686759576e5272366d58446254624165436b45744a37",
    "to_address": "55533178786d6e34357663484d5779526f543936394e42744c7350754c6d566b4d63",
    "uri": "https://www.facebook.com/photo/?fbid=2358336604315632&set=a.103203789828936",
    "symbol": "VIETANH",
    "metadata": ""
}'
 ```


