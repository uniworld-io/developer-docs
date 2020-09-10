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
    "to_address": "xxx",
    "owner_address": "xxx",
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
    "value": "50fc6fa3de1383e41f57fd8a8f27611f98e393b50d067cef214f2c53225d8bd7"
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
    "owner_address": "41d1e7a6bc354106cb410e65ff8b181c600ff14292",
    "account_address": "41e552f6487585c2b58bc2c9bb4492bc1f17132cd0"
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
    "address": "41E552F6487585C2B58BC2C9BB4492BC1F17132CD0"
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
    "account_name": "0x7570646174654e616d6531353330383933343635353139",
    "owner_address": "41d1e7a6bc354106cb410e65ff8b181c600ff14292"
}'
```
### Create address
- Path: wallet/createaddress
- Method: POST
- Description: Create an address with a password
- Params and data example:
```
$ curl -X POST http://{host}/wallet/createaddress -d
'{
    "value": "3230313271756265696a696e67"
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
    "address": "4189139CB1387AF85E3D24E212A008AC974967E561"
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
    "address": "419844f7600e018fd0d710e2145351d607b3316ce9"
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
    "address": "4112E621D5577311998708F4D7B9F71F86DAE138B5"
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
    "owner_address": "41a7d8a35b260395c14aa456297662092ba3b76fc0",
    "account_id": "6161616162626262"
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
    "account_id": "6161616162626262"
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
    "fromAddress": "419844f7600e018fd0d710e2145351d607b3316ce9",
    "toAddress": "41c6600433381c731f22fc2b9f864b14fe518b322f"
}'
```
### Lock UNW balance
- Path: wallet/freezebalance
- Method: POST
- Description: Lock UNW balance
- Params and data example:
```$ curl -X POST http://{host}/wallet/freezebalance -d
'{
    "owner_address": "41e472f387585c2b58bc2c9bb4492bc1f17342cd1",
    "frozen_balance": 10000,
    "frozen_duration": 3,
    "resource": "BANDWIDTH",
    "receiver_address": "414332f387585c2b58bc2c9bb4492bc1f17342cd1"
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
    "owner_address": "41e472f387585c2b58bc2c9bb4492bc1f17342cd1",
    "resource": "BANDWIDTH",
    "receiver_address": "414332f387585c2b58bc2c9bb4492bc1f17342cd1"
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
    "owner_address": "41d1e7a6bc354106cb410e65ff8b181c600ff14292",
    "url": "007570646174654e616d6531353330363038383733343633"
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
    "owner_address": "41d1e7a6bc354106cb410e65ff8b181c600ff14292",
    "update_url": "007570646174654e616d6531353330363038383733343633"
}'
```

### Update witness brokerage
- Path: wallet/updateBrokerage
- Method: POST
- Description: Update witness brokerage
- Params and data example:
```
$ curl -X POST  http://{host}/wallet/updateBrokerage  -d '{
"owner_address":"41E552F6487585C2B58BC2C9BB4492BC1F17132CD0",
"brokerage":30
}'
```

### Get witness brokerage
- Path: wallet/getbrokerage
- Method: GET
- Description: Query the ratio of brokerage of the witness
- Params and data example:
```
$ curl -X GET  http://{host}/wallet/getBrokerage -d '{
"address":"41E552F6487585C2B58BC2C9BB4492BC1F17132CD0"}'
```

### Get reward
- Path: wallet/getreward
- Method: GET
- Description: Query unclaimed reward
- Params and data example:
```
$ curl -X GET
http://{host}/wallet/getReward -d '{
"address":"41E552F6487585C2B58BC2C9BB4492BC1F17132CD0"}'
```
### Withdraw balance
- Path: wallet/withdrawbalance
- Method: POST
- Description: Withdraw reward to account balance for witnesses
- Params and data example:
```
$ curl -X POST http://{host}/wallet/withdrawbalance -d
'{
    "owner_address": "41e472f387585c2b58bc2c9bb4492bc1f17342cd1"
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
    "owner_address": "419844F7600E018FD0D710E2145351D607B3316CE9",
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
    "owner_address": "419844F7600E018FD0D710E2145351D607B3316CE9",
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
    "owner_address": "419844F7600E018FD0D710E2145351D607B3316CE9",
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
    "owner_address": "41e552f6487585c2b58bc2c9bb4492bc1f17132cd0",
    "name": "0x6173736574497373756531353330383934333132313538",
    "abbr": "0x6162627231353330383934333132313538",
    "total_supply": 4321,
    "unx_num": 1,
    "num": 1,
    "start_time": 1530894315158,
    "end_time": 1533894312158,
    "description": "007570646174654e616d6531353330363038383733343633",
    "url": "007570646174654e616d6531353330363038383733343633",
    "free_asset_net_limit": 10000,
    "public_free_asset_net_limit": 10000,
    "frozen_supply": {
        "frozen_amount": 1,
        "frozen_days": 2
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
    "to_address": "41e552f6487585c2b58bc2c9bb4492bc1f17132cd0",
    "owner_address": "41e472f387585c2b58bc2c9bb4492bc1f17342cd1",
    "amount": 100,
    "asset_name": "3230313271756265696a696e67"
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
    "address": "41F9395ED64A6E1D4ED37CD17C75A1D247223CAF2D"
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
    "value": "44756354616E"
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
    "value": "44756354616E"
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
    "value": "44756354616E"
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
    "owner_address": "41e472f387585c2b58bc2c9bb4492bc1f17342cd1",
    "description": "",
    "url": "",
    "new_limit": 1000000,
    "new_public_limit": 100
}'
```

## Smart contract

## Other network API
### Broadcast transaction
 - Path: wallet/broadcasttransaction
 - Method: POST
 - Description: Broadcast the signed transaction into blockchain network
 - Params and data example: 
 ```
 $ curl -X POST  http://{host}/wallet/broadcasttransaction -d
'{
    "signature": [
        "97c825b41c77de2a8bd65b3df55cd4c0df59c307c0187e42321dcc1cc455ddba583dd9502e17cfec5945b34cad0511985a6165999092a6dec84c2bdd97e649fc01"
    ],
    "txID": "454f156bf1256587ff6ccdbc56e64ad0c51e4f8efea5490dcbc720ee606bc7b8",
    "raw_data": {
        "contract": [
            {
                "parameter": {
                    "value": {
                        "amount": 1000,
                        "owner_address": "41e552f6487585c2b58bc2c9bb4492bc1f17132cd0",
                        "to_address": "41d1e7a6bc354106cb410e65ff8b181c600ff14292"
                    },
                    "type_url": "type.googleapis.com/protocol.TransferContract"
                },
                "type": "TransferContract"
            }
        ],
        "ref_block_bytes": "267e",
        "ref_block_hash": "9a447d222e8de9f2",
        "expiration": 1530893064000,
        "timestamp": 1530893006233
    }
}'
 ```

### Broadcast transaction by hex
 - Path: wallet/broadcasttransaction
 - Method: POST
 - Description: Broadcast the signed transaction in the hex format into blockchain network
 - Params and data example: 
$ curl -X POST  http://{host}/wallet/broadcasthex -d
'{
   "transaction":"0A8A010A0202DB2208C89D4811359A28004098A4E0A6B52D5A730802126F0A32747970652E676F6F676C65617069732E636F6D2F70726F746F636F6C2E5472616E736665724173736574436F6E747261637412390A07313030303030311215415A523B449890854C8FC460AB602DF9F31FE4293F1A15416B0580DA195542DDABE288FEC436C7D5AF769D24206412418BF3F2E492ED443607910EA9EF0A7EF79728DAAAAC0EE2BA6CB87DA38366DF9AC4ADE54B2912C1DEB0EE6666B86A07A6C7DF68F1F9DA171EEE6A370B3CA9CBBB00"
}'
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
    "value": "0000000000038809c59ee8409a3b6c051e369ef1096603c7ee723c16e2376c73"
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
    "num": 5
}'
 ```
