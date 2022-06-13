---
id: networkGovernance
title: Network Governance
sidebar_label: Network Governance
---

The unichain network is a decentralized network and is governed by decentralized mechanisms. Network-related parameters such as transaction fees, block reward, network upgrade... must be agreed upon by the majority of network nodes before they take effect.

To change any network parameter, an active witness must create a proposal and broadcast it into the network. Other active witnesses will review the proposal and decide whether to approve it or not. If more than ⅔ witnesses approve of the proposal then the network parameter will be changed, otherwise it will be rejected or expired.  All proposal actions (create, cancel, approve, reject) are the transactions on the blockchain network that can be publicly discovered by [UniScan](https://uniscan.world) 


### Create a proposal
Only witnesses can create proposals. To create a proposal, Witnesses can use use wallet cli or web interface provided by [Uni Validator](https://validator.unichain.world) 

By Wallet CLI
```
wallet> CreateProposal 34 2
```
The command to create a proposal: ```crewateProposal <proposal ID> <value>``` 
Where the <proposal ID> can be found in the list below and <value> is the new proposal value

To get all proposal, We an use this command: 
```
wallet> ListProposals
{
"proposals":[
{
"proposal_id":1,
"proposer_address":"US1xxmn45vcHMWyRoT969NBtLsPuLmVkMc",
"parameters":[
{
"key":34,
"value":2
}
],
"expiration_time":1632498600000,
"create_time":1632497874000,
"approvals":[
"US1xxmn45vcHMWyRoT969NBtLsPuLmVkMc",
"UYBEVyN2wxLDZGMQBFrVn2gGL7MSRtirPk",
"Uk28n4A28nfXhgYWnRr6mXDbTbAeCkEtJ7",
"Ujhe4Wb6DXAVVLt9ziT4mf9HC63izpJscv",
"USzHCLkaE1HxbZY9o7AKqTCLCsTuBa3yPB",
"Uh2R7ahQoE5YJDZiM3wc57JRoQmS4xD9Xk",
"UazSBZCDUCABgAkhZv8WDpqgUMV4LPLBCh"
],
"state":"APPROVED"
}
]
}
```
The restructure will look like this: 

```
"proposal_id": <network proposal ID>,
"proposer_address": "proposal address",
"parameters": [
{
"key":<proposal ID>,
"value": <proposal value>
}
],
"expiration_time": expire time,
"create_time": creation time,
"approvals": [
List of witnesses that approved
],
"state": "APPROVED | CANCELED | REJECTED"
```

### Approve or reject a proposal
Only witnesses can approve or reject a proposal. If use command line, witness can approve/reject a proposal by command: ```ApproveProposal <network proposal ID> <response> ```

Where the _<network proposal ID>_ is the network proposal ID, It’s different from proposal ID. Wherever a witness broadcasts a proposal into the network, the network proposal ID will be created (It’s integer number and increased by time). The _<response>_ can be _true_ or _false_. If true, the proposal is approved, otherwise It will be rejected by witnesses.
Example: 

```
    approveProposal 1 true
```

### The proposal ID list
| Title/Description                                    | ID         |  Current value   |
| :---                                                 |    :----:  |          :---    |           
| proposal to modify the maintenance interval          | 0          |    6 hours       |
| proposal to modify the cost to apply for witness     | 1          |    1000 UNW      |
| proposal to modify account creation fee              | 2          |    0.01 UNW      |
| proposal to modify the transaction fee (Ginza/byte)  | 3          |                  |
| proposal to modify the token/asset creation fee      | 4          |                  |
| proposal to modify the witness block generation reward  | 5       |                  |
| proposal to modify the allowance for top 55 witnesses | 6         |                  |
| proposal to modify the maximum execution time of one transaction| 13  |    50 ms |
|                                                      |          |   ? |


