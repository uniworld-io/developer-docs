---
id: runLocalNetwork
title: Run Local Network
---

## Build UniChain Node
### Prepare dependencies
- JDK 1.8 (JDK 1.9+ are not supported yet)
- On Linux Ubuntu system (e.g. Ubuntu 16.04.4 LTS), ensure that the machine has Oracle JDK 8, instead of having Open JDK 8 in the system. If you are building the source code by using Open JDK 8, you may get fails
### Build UniChain node
```
git clone https://github.com/uniworld-io/unichain-core.git
# checkout to stable version 
cd unichain-core
./gradlew build
``` 
Binary files located in build/libs folder.

## Run UniChain Local Node
### Config preparation
You can create your own local UniChain blockchain network for testing or developing purposes. To create local network, some config must be changed. You can get the config file in *src/main/resources/config.conf*. The following demonstration the network with two witness nodes.
- Config for witness 1 (config1.conf)
```
...
seed.node = {
  ip.list = [
    "127.0.0.1:5525"
  ]
}

...
genesis.block = {
  # Initial balance, change this address to your address
  assets = [
    {
      accountName = "Unichain"
      accountType = "AssetIssue"
      address = "UaKMBcTKBDP4EgUwbRG3SontVEdV8ZgkoA"
      balance = "1000000000000000"
    },
    //don't care about this account
    {
      accountName = "BurnAccount"
      accountType = "AssetIssue"
      address = "UW7neBCwwkgirGXiPXDxCbYXh8r5v4VJAT"
      balance = "-1500000000000000"
    }
  ]
  
  #Initial witness, You must change address to your address
  witnesses = [
    {
      address: USUUQXSKDyoeucNPJQL4oF9k1Jp4DcFFTp,
      url = "https://your_website.com",
      voteCount = 5000005
    },
    {
      address: UjozYP3LSMu1ZamZPPVGZt2FJA9AZ6Mib2,
      url = "https://your_another_website.com",
      voteCount = 5000001
    }
  ]

}
...

block = {
  needSyncCheck = false
  ...
}
```
- Config for witness 2 (config2.conf)

```
...
node {
    ...
  listen.port = 5526
  ...
}
...
http {
    fullNodePort = 6637
    solidityPort = 7750
  }

  rpc {
    port = 8865
}

...
seed.node = {
  ip.list = [
    "127.0.0.1:5525"
  ]
}

...
genesis.block = {
  # Initial balance, change this address to your address
  assets = [
    {
      accountName = "Unichain"
      accountType = "AssetIssue"
      address = "UaKMBcTKBDP4EgUwbRG3SontVEdV8ZgkoA"
      balance = "1000000000000000"
    },
    //don't care about this account
    {
      accountName = "BurnAccount"
      accountType = "AssetIssue"
      address = "UW7neBCwwkgirGXiPXDxCbYXh8r5v4VJAT"
      balance = "-1500000000000000"
    }
  ]
  
  #Initial witness, You must change address to your address
  witnesses = [
    {
      address: USUUQXSKDyoeucNPJQL4oF9k1Jp4DcFFTp,
      url = "https://your_website.com",
      voteCount = 5000005
    },
    {
      address: UjozYP3LSMu1ZamZPPVGZt2FJA9AZ6Mib2,
      url = "https://your_another_website.com",
      voteCount = 5000001
    }
  ]

}
...

block = {
  needSyncCheck = true
  ...
}
```
You can use [UniChain-JS](./unichainJS) to generate the private key and address. 
```
const Unichain = require('@uniworld/unichain-js')
const crypto = require('crypto')
crypto.randomBytes(32, (err, buf) => {
  if (err) throw err;
  const privateKey = buf.toString('hex')
  const address    = Unichain.address.fromPrivateKey(privateKey)
  console.log('private key: ', privateKey)
  console.log('address:', address)
})
```
For convenience, We generated some key/address which are used in config above
```
a8d6690d9e8a70068292852705f21c178674e4d2f6e31c909c9640c67eacf84b: UaKMBcTKBDP4EgUwbRG3SontVEdV8ZgkoA
904191941cccacccd9761afb502bbacaa6262bedecb595171709f1f23dbd4217: UW7neBCwwkgirGXiPXDxCbYXh8r5v4VJAT
e5a74cd1e72f2f67ec12af0e3e41d5da7db891046351d2000fec7597d79c758a: USUUQXSKDyoeucNPJQL4oF9k1Jp4DcFFTp
a86cb4c5ccaee3d598ceead01d33a58387f557b8b57447720cde44b584de5a70: UjozYP3LSMu1ZamZPPVGZt2FJA9AZ6Mib2
4c28da0501de1eec466cab1bd2b45e86c6e9b95cdb62fed3e669ac4b1cba088d: URT9ERnFQuwWLoen3CbKUevAUPopP7GvbQ
c6679cf92ab586f9201956e3b8a865eae6ef5444d7cae02df0f05a876b3c792b: UYBg5jAcjS71puZgfqYNmtrSvfu4XudCKh
c9ca4d224931b78f95fe9c9bde19f9b294851c64f67ebc38a83c2341df56a72d: UenUvV4Yn8qA1af2u4bKCBCV1PVUrGAjLB
```

### Run network with two witness nodes
- Witness 1
```
java -jar unichain-core -c ./config1.conf --witness -p e5a74cd1e72f2f67ec12af0e3e41d5da7db891046351d2000fec7597d79c758a
```
- Witness 2
```
java -jar unichain-core -c ./config2.conf --witness -p a86cb4c5ccaee3d598ceead01d33a58387f557b8b57447720cde44b584de5a70
``` 

Network is up a running now. You can check the running logs at logs/unichain.log and start communicating with the network