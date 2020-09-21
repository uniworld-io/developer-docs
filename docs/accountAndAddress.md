---
id: accountAndAddress
title: Account and Address
sidebar_label: Account and Address
---

### UniChain Account
Account is a unique identity on UniChain network. Each account has its  own key pair. The address is an account representation on Blockchain and is generated from private key.
Account has many attributes such as UNW balance, Token balance, voting power, resources ...
Account can only be created by another existed account or by transfering the coin/token to account address.
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

