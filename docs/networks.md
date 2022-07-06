---
id: networks
title: UniChain Network
sidebar_label: Networks
---

### UniChain Network
Account is a unique identity on UniChain network. Each account has its  own key pair. The address is an account representation on Blockchain and is generated from private key.
Account has many attributes such as UNW balance, Token balance, voting power, resources ...
Account can only be created by another existed account or by transferring the coin/token to account address.
Create account using wallet-cli example
```
wallet> CreateAccount UenUvV4Yn8qA1af2u4bKCBCV1PVUrGAjLB
```

### Cryptography
UniChain uses the standard ECDSA as signature algorithm. The curve using the SECP256K1. The following describes steps to generate UniChain address
- Generate random 32 bytes as the private key *prvKey*
- Calculate public key from private key ```pubKey = prvKey*G``` where *G* is the elliptic curve base point
- Calculate the hash from public key ```hash = keccak256(pubKey)```
- Take out the last 40 bytes from the keccak256 hash and add the prefix (0x44) ```addressHex = 0x44 + hash.substring(24)```
- Encode with base58 check to get the final address ```address = encodeBase58Check(addressHex)```

All UniChain address (account, smart contract) start with the *U* letter.

#### Signature
UniChain uses the ECDSA, SECP256K algorithm to sign and verify signature. 
_Create signature_
- Convert the raw data (transaction in JSON format for example) to byte array
- Calculate the hash from byte raw data using the SHA256 ```hash = SHA256(rawDataInByteArray)```
- Use private key to sign on the hash ```result = sign(hash, privateKey)```
- The signature maybe added to the tranasction as the extra data

_Verify signature_
The *result* returned from the *sign* function contains the value of *{s, r, v}*. *s* (32 bytes in length) is the signature proof, *r* (32 bytes in length) is the signature result, *v* is the public key recovery. To verify the signature, We calculate the r' from the signing message (the hash of raw data), the signature proof (*s*) ad the public key recovery (*v*). If `r' = r` then the signature is valid, otherwise It is invalid.

### Generate address 
The utility functions below will generate the address from your private key. You can either choose the random private key or input your own. __Please note that these functions are executed from the client side, No one can access the private key except you__. 
<div>
    <input id="privateKey" style="width:95%;height:30px;margin-top:10px" placeholder=" private key. If empty, the random private key will be generated"></input>
    <input id="address" style="width:95%;height:30px;margin-top:10px" placeholder=" generated address" disabled></input>
    <input type="button" style="width:20%;margin-left:40%;height:30px;margin-top:10px" onClick="generateAddress()" value="Generate Address"></input>
</div>

### Convert address to hex and vice versa 
<div>
    <input id="sourceAddress" style="width:95%;height:30px;margin-top:10px" placeholder="Enter your address (Hex or Base58 format)"></input>
    <input id="destinationAddress" style="width:95%;height:30px;margin-top:10px" placeholder=" Converted address" disabled></input>
    <input type="button" style="width:20%;margin-left:40%;height:30px;margin-top:10px" onClick="convertAddress()" value="Convert Address"></input>
</div>
<script type="text/javascript">
    function randomHex () {
        const hexChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
        const min = 0, max = hexChar.length - 1
        let key = ''
        for (let i = 0; i < 64; ++i) {
            let pos = Math.floor(Math.random() * (max - min) + min)
            key += hexChar[pos]
        }
        return key
    }
    function checkHex (hexString) {
        const re = /[0-9A-Fa-f]{64}/g
        return re.test(hexString)
    }
    function generateAddress() {
        let privateKey = document.getElementById("privateKey").value 
        if (privateKey) {
            if (privateKey.length != 64 || !checkHex(privateKey)) {
                document.getElementById("address").value = 'Invalid private key'
                return
            }
        }
        if (!privateKey) {
            privateKey = randomHex()
            document.getElementById("privateKey").value = privateKey
        }
        document.getElementById("address").value = UnichainJS.address.fromPrivateKey(privateKey)
    }
    function convertAddress() {
        const  sourceAddress = document.getElementById("sourceAddress").value
        if (!sourceAddress) {
            document.getElementById("destinationAddress").value = 'Invalid Address. Please input base58 or hex address'
            return
        }
        const reHex = /^44[0-9A-Fa-f]{40}/g
        const reBase58 = /^U[0-9A-Za-z]{33}/g
        if (sourceAddress.length == 42 && reHex.test(sourceAddress)) {
            document.getElementById("destinationAddress").value = UnichainJS.address.fromHex(sourceAddress)
            return
        }
        if (sourceAddress.length == 34 && reBase58.test(sourceAddress)) {
            document.getElementById("destinationAddress").value = UnichainJS.address.toHex(sourceAddress)
            return
        }
        document.getElementById("destinationAddress").value = 'Invalid Address. Please input base58 or hex address'
    }

</script>