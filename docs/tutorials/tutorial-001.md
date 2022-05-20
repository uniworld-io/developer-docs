---
id: tutorial-001
title: Run UniChain Mainet Node
---

### Prepare environment and dependencies
*Hardware requirement*
- OS: Window, Mac, Ubuntu, Centos ... Linux base such as Ubuntu (version > 16.04) is better
- At least 4 core CPU, 8GB Memory, 250 GB SSD (8 core CPU and 16GB Memory is recommended)
- High speed internet connection 
- The following port should be allowed: 5525, 6636, 7749, 8864. For quick test, please allow all TCP ports

*Dependency*
- UniChain is based on Java and It needs the JDK 1.8 (from Oracle). The following commands are the quick steps for setting up JDK on Ubuntu server
```
- mkdir $HOME/lib & cd $HOME/lib
- wget https://developers.unichain.world/archives/jdk-8u202-linux-x64.tar.gz
- tar xf jdk-8u202-linux-x64.tar.gz
- vi ~/.bashrc # add following line in the end of file and save it
- export PATH=$PATH:$HOME/lib/jdk1.8.0_202/bin
- source ~/.bashrc
- java -version # check if java environment is OK
java version "1.8.0_202"
Java(TM) SE Runtime Environment (build 1.8.0_202-b08)
Java HotSpot(TM) 64-Bit Server VM (build 25.202-b08, mixed mode)
```
_Please note that, the above package is just for testing. Please go to [ocracle page](https://www.oracle.com) register, accept the terms and conditions and then download the right package according to your OS architecture_

### Download UniChain node
```
wget https://github.com/uniworld-io/unichain-core/releases/download/<Release_version>/unichain-core.jar
``` 
or click on this [link](https://github.com/uniworld-io/unichain-core/releases)

Please note that the binary above is build for Linux (Ubuntu) only. If you have another different OS, please rebuild the source code.

### Download Relay node
```wget https://github.com/uniworld-io/unichain-core/releases/download/<Release_version>/relay-node.jar```

or click on this [link](https://github.com/uniworld-io/unichain-core/releases)

### Run UniChain node
```
java -jar unichain-core-[Version].jar
     _   _ _ __ (_) ___| |__   __ _(_)_ __  
    | | | | '_ \| |/ __| '_ \ / _` | | '_ \ 
    | |_| | | | | | (__| | | | (_| | | | | |
     \__,_|_| |_|_|\___|_| |_|\__,_|_|_| |_|
```

## Build UniChain from source code

### Build UniChain node
```
git clone https://github.com/uniworld-io/unichain-core.git
# checkout to stable version 
cd unichain-core
./gradlew build
``` 
Binary files located in build/libs folder.

### Run unichain node
```
cd build/libs
java -jar unichain-core.jar
     _   _ _ __ (_) ___| |__   __ _(_)_ __  
    | | | | '_ \| |/ __| '_ \ / _` | | '_ \ 
    | |_| | | | | | (__| | | | (_| | | | | |
     \__,_|_| |_|_|\___|_| |_|\__,_|_|_| |_|
```

Run unichain node with customized config
```
cd build/libs
java -jar unichain-core.jar -c ./your_localtion/of_config_file.conf
```

If you are witness, run unichain node with --witness and -p options (-p: witness private key)
```
java -jar unichain-core.jar --witness -p your_witness_private_key
java -jar unichain-core.jar --witness -p f06f6fbea136162c1bfac04869ff94331ca2a9861f737e4b05b56527b0b8bf46
```
