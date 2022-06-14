---
id: networkUpgrade
title: Network Upgrade
sidebar_label: Network Upgrade
---

## Network Upgrade
Normally, UniChain development team will release a new software version every month or quarter. New software versions will add new features, fix bugs and create a stable version.
When a new version is released, there may be many software packages released accordingly such as _blockchain node_, _wallet cli_, _unichain-js_, … 

UniChain team will make announcements on social media whenever a new software is released with the detailed changelog and the packages can be download from [github repos](https://github.com/uniworld-io/unichain-core/releases)

In most cases, users can download the packages (Unichain node) and replace the old version to update the software. But in some cases the change may affect the genesis information, ledger state, network configuration … and the _hardfork_ is needed.

UniChain has a flexible mechanism that allows the network to have a _soft hardfork_ or exactly the _network upgrade_ by the network proposal (check the previous session for more information). The witness (normally from UniChain foundation) will broadcast a _network upgrade proposal_ into the network and notify all the network by on-chain and off-chain channels. The proposal will expire in 72 hours and if the network collects enough approvals from ⅔ of 33 active witness nodes, the proposal will take effect and the network will be upgraded. 

```
wallet> CreateProposal 34 3
```
The command above creates a proposal to upgrade the network to version 3 in wallet cli. (Where _34_ is the proposal ID of network upgrade, _3_ is the network version).
To accept the proposal: 
```
wallet> approveProposal 5 true
```
Or reject the proposal:
```
wallet> approveProposal 5 false
```
Where _5_ is the network proposal ID that was created by the witnesses above (_5_ is an example).

Witnesses can also use the web interface from [Uni Validator](https://validator.unichain.world) to create/approve/reject any proposals.

Please note that when the network is switched to the new higher version, the older version will be disconnected and cannot sync with the network. The node owners (including the witness) must update the new version before the network upgrade.


## How to upgrade new version
 To upgrade to the new UniChain core version (for full node and relay node), please follow the following steps.

- Step 1: Stop the current software version (ex: kill the session, Ctrl + C …)
- Step 2: Download the newest version from [github repos](https://github.com/uniworld-io/unichain-core/releases)
- Step 3: Replace the binary files (full node, relay node, wallet-cli)
- Step 4: Start the service like before, ex: _java -jar unichain-core.jar_ 

If you encounter any problem while upgrading the software, please join the [UniChain Dev](https://discord.gg/W4teW5mThv) discord group and ask for help. 
