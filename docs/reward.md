---
id: reward
title: Reward Mechanism
sidebar_label: Reward Mechanism
---

### Overview
To encourage users for their voting and witness nodes for their works (verify and produce transactions, blocks), UniChain has the reward mechanism for both of them. 
The rewards are accumulated every 6 hours (election time) in the sub account and must be withdrawn to the main account before used. 

The following accounts will be received rewards:
- The active witness nodes (33 nodes)
- The candidate nodes (55 candidates)
- Voters who vote for active witness nodes or candidate nodes

*The active witness nodes are also the candidate nodes*

### Reward Calculation
Because rewards are accumulated every __6 hours__, Let's calculate the rewards in that duration.
- __For active witness nodes:__ Reward per each block is 1 UNW. Assume that block time is 3 seconds => total reward for active witness nodes are *1x6x60x60/3 = 7200* UNW. However, active witness nodes share reward with their voters by a specific ratio, so the actutal reward that an individual active witness may receive is *0.2x7200/33 = 43.6* UNW (assume that the ration is 20%:80%). 
- __For candidate nodes:__ 55 candidate nodes share 7363 UNW for every 6 hours. The actual reward that an individual candidate node may receive will depend on the votes that the candidate node receive and the distribution ratio sharing with his voters. The amount is calculated as following formular: *candidate_reward = candidate_distribution_ratio x 7363 x votes/total_network_votes*
assume that the distribution ratio is 0.2 (20%), and the votes/total_network_votes is 1/55 (equal voting) so the reward is *0.2x7363x1/55 = 26.7* UNW. 

- *The active witness node is also the candidate node so the actual reward in example above would be 43.6 + 26.7 = 70.3 UNW (~281.2 UNW/day)*

- __For voters:__ 
    - If the votes are on the active witness nodes, reward will be calcualated as following 
    *reward = (1-witness_distribution_ratio) x votes x 7200/active_witness_votes/33*. For example,user votes for witness A 10000 votes while witness A receives 250000 votes and assume that the *witness_distribution_ratio* is 0.2, We have: *reward = (1 - 0.2) x 10000 x 7200/250000/33 = 7 UNW* 
    - If the votes are on the candidate nodes, reward will be calculate as following
    *reward = (1-witness_distribution_ratio) x votes x 7363/total_network_vote*. Keep the above assumption and the *total_network_vote* is 100.000.000 votes, We have: *reward = 0.8x10000x7363/100000000 = 0.59 UNW*
    - Please note that the active witness node is also the candidate node and therefore, if users votes are on active witness node, they get both reward. In the example about user's reward for 6 hours would be *7 + 0.59 = 7.59 UNW* (~ 30.36 UNW/day)

*Please note that all calculations above are just the example. The actual reward will depend on many factors such as the distribution ration, the total network votes and users votes.*

### Check account reward
- By wallet cli: Run the command below
```
>wallet getreward <address>
```
- By explorer: go to [UniScan page](https://uniscan.world) and enter the address to check
- By web wallet: login into [Uni Wallet](https://uniwallet.world) to check 

### Widthdraw reward
Login into [Uni Wallet](https://uniwallet.world) and widthdraw reward into main account.