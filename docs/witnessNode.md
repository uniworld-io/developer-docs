---
id: witnessNode
title: Witness Node
sidebar_label: Witness Node
---

### What is a witness 
Witness is a special account on UniChain network. Witnesses play an important role in UniChain network. Witnesses maintenance and secure the ledger, validate transactions, produce blocks and manage the chain parameters, network configurations.
UniChain has 55 witness nodes in total. 33 active witness nodes continuously validate transaction, produce block and maintain the network. 22 other witness nodes are in standby status which ready to replace any active witness nodes if they can not function (ex: can not produce block after a specific of time).
Witness nodes are selected from any account in the network through an election process. To become a UniChain witness, one must follow the below steps
- Register an account in UniChain network
- Deposit at least 1000 UNW into account
- Persuade other accounts (community) for their votes
Election will refresh after every 6 hours. The top 55 accounts which receive the most votes will become UniChain witnesses.
Please note that after applying for a witness, 1000 UNW will immediately be burnt. This action is to protect network from spammers.

### How to become a witness
To apply for witness, You can either use the [UniTool](https://utools.unichain.world) or wallet-cli.The following tutorial guide you how to become a witness node using wallet-cli 

_Hardware requirement_
- At least 8 CPU, 16G Ram, 250 GB SSD/HDD
- OS: Linux base: Ubuntu, Redhat, Centos ...(in this tutorial, We use Ubuntu 16.04)
- Static public IP address. High speed network bandwidth.

This tutorial assumes that you are running wallet-cli and witness node at the same server above.

__Prepare environment__
- To run wallet-cli and witness node, Java environment must be set. Follow [this guide](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-get-on-ubuntu-16-04) to set up environment. If you have issues on setting up Java, follow this shortcut:
    - Download Oracle Java from [Oracle Download page](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html), chose the right package according to your OS. For example: jdk-8u202-linux-x64.tar.gz
    - Unzip the file to any location, for example: ```sudo tar -C /opt/ -zxvf jdk-8u202-linux-x64.tar.gz```
    - The file is now unzip to `/otp/jdk1.8.0_202` folder, lets add the PATH to `~/.bashrc` file by adding this line `export PATH=/otp/jdk1.8.0_202/bin/:$PATH` then run the `source ~/.bashrc` command. You can check the setConfig by running the command `java -version`
- Download the [UniChain Node](https://github.com/uniworld-io/unichain-core/releases/download/v1.0.1/unichain-core.jar) and [wallet-cli](https://github.com/uniworld-io/wallet-cli/releases/download/v1.0.1/wallet-cli.jar). If you are using other OS than Linux (Ubuntu), please try building execution file from [source code](https://github.com/uniworld-io)

__Create witness account__
- Generate private key: Please note that you are responsible for managing your private key. If you loose the key, all funds and related control may be lost. Private key in UniChain network is 32 byte long. You can use any tool to generate the private key or choose the random private key from hex characters. For example: `c9ca4d224931b78f95fe9c9bde19f9b294851c64f67ebc38a83c2341df56a72d`
- Generate UniChain account 
```
java -jar wallet-cli.jar

wallet> importwallet
Please input password.
password: 
Please input password again.
password: 
Please input private key.
c9ca4d224931b78f95fe9c9bde19f9b294851c64f67ebc38a83c2341df56a72d
Import a wallet successful, keystore file name is UTC--2020-09-20T08-53-46.852000000Z--UenUvV4Yn8qA1af2u4bKCBCV1PVUrGAjLB.json

```
You must input the password twice and the password must be at least 8 characters, contains of uppercase, lowercase, numeric and other 

- Run the witness node
```
java -jar unichain-core --witness -p c9ca4d224931b78f95fe9c9bde19f9b294851c64f67ebc38a83c2341df56a72d
```
And wait until the synchronization is completed. You can check it in the log file at logs/unichain.log

- Login to wallet cli
```
wallet> Login
Please input your password.
password: 
Login successful !!!

```
- Get your witness account deposited, at least 1000 UNW
- Apply for witness node
```
wallet> CreateWitness UenUvV4Yn8qA1af2u4bKCBCV1PVUrGAjLB "http://your-witness-website.com"

```
Confirm transaction and input your account password.

You are witness candidate now. All you need to do is to persuade community for the votes. You can also vote for yourself. To get the vote and vote for witness node, you must lock your balance. The voting power will be equal to the number of UNW you lock

```
wallet> FreezeBalance 100000000 3 0

```
The example above lock 100 UNW (100 UNW = 100.000.000 Ginza) within 3 days and resource type is BANDWIDTH. You have 100 voting power now, and you can vote for any witness in the network
```
wallet> VoteWitness UenUvV4Yn8qA1af2u4bKCBCV1PVUrGAjLB 100

```
Please note that your vote only take effect when the election cycle is refresh (every 6 hours). You can check your witness status by 
```
wallet> ListWitnesses

```
Or go to the [UniTool](https://utools.unichain.world/witness) to get detail information
