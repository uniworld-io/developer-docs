---
id: getStarted
title: Setup environment
---

## Run UniChain Mainet Node
### Download UniChain node
```
wget https://github.com/uniworld-io/unichain-core/releases/download/v1.0.1/unichain-core.jar
``` 
or click on this [link](https://github.com/uniworld-io/unichain-core/releases/download/v1.0.1/unichain-core.jar)

Please note that the binary above is build for Linux (Ubuntu) only. If you have another different OS, please rebuild the source code.

### Build UniChain Node
#### Prepare dependencies
- JDK 1.8 (JDK 1.9+ are not supported yet)
- On Linux Ubuntu system (e.g. Ubuntu 16.04.4 LTS), ensure that the machine has Oracle JDK 8, instead of having Open JDK 8 in the system. If you are building the source code by using Open JDK 8, you may get fails
#### Build UniChain node
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
java -jar unichain-core --witness -p your_witness_private_key
java -jar unichain-core --witness -p f06f6fbea136162c1bfac04869ff94331ca2a9861f737e4b05b56527b0b8bf46
```
