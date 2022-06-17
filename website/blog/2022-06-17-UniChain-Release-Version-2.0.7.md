---
author: Henry Nguyen
authorURL: https://twitter.com/Henry_ngv
authorImageUrl: ../../../../img/blog/identity-01.png
---

# UniChain releases new version 2.0.7

UniChain has released a new version 2.0.7 as the active development. There were some bugs fixed and features added to this version, including: 

### Release the native URC-20 token
In the previous version, UniChain releases the URC-30 which follows the ERC-20 standard and running on top of UVM, that means users does not need to deploy smart contracts for URC-30 tokens and transferring URC-30 token does not need UNW as the transaction fee (the gas). However, the URC-30 lacked some features such as transferFrom, approve … functions, the token name, symbol and address are not consistent too. 
The native URC-20 token is totally compatible with URC-20 (follow the ERC-20 standard) and can be used as the URC-30 replacement. 

In short, the native URC-20: 
- Follow the ERC-20 standard and totally compatible with URC-20 token
- Token is running on top of UVM, No smart contract is required to create a token
- Transferring token does not need UNW as the transaction fee 
- Support transferring token for future uses (lock)

### Release native URC-721 token
After a long time of testing, this version has included the native URC-721 token. This feature supports native NFTs which means that any users can create the NFT token on UniChain network without any smart contract. It helps the traditional users such as the artist, musician, photographers … to NFTized their digital assets with some simple clicks. 

### Support transferring the future deal 
Transfering futures from user A to user B means that user B can use the coin/token after a specific time in the futures (like lock the coin/token). This version supports transferring the feature deal which means user B cannot use the coin/token of feature transfer from user A but user B can transfer that deal to another user (user C for example) and user C can use the coin/token from user A in the future.

### Support for native event server in MongoDB
The previous version supported the event in the message queue, kafka. This version supports MongoDB for more convenience. 

The release package can be [downloaded here](https://github.com/uniworld-io/unichain-core/releases/tag/v2.0.7)  

The update will be done through a network proposal. We recommend all running nodes to update to this version as soon as possible. After switching to new version, the blockchain nodes running the old version may be disconnected and cannot sync with the network

### How to upgrade to new version 
The steps below describe how to upgrade UniChain to the new version

- Step 1: Stop the current UniChain node 
- Step 2: Remove current version unichain-core.jar ```rm -fr unichain-core.jar```
- Step 3: Download the new version here or by command: ```wget ….```
- Step 4: Run new UniChain version ```java -jar unichain-core.jar```

If you are running a witness node, please run with witness command as normal, for example: ```java -jar unichain-core.jar –witness -p <your_private_key> ```

You can also check for detailed information for network upgrade by [this link](../docs/networkUpgrade)


