---
id: posTransferFlow
title: Bridge Transfer Flow
sidebar_label: Transfer Flow
---

## Transfer Flow

Transfer flow consists of 2 key points:
1. Deposit - Swap blockchains native tokens to the child blockchains tokens.
2. Withdraw - Swap child blockchains tokens to blockchains native tokens.

![pos_bridge_overview](../img/pos_transfer_flow.png)

_Both `deposit` and `withdraw` share the same flow, detailed description:_

1. The user wants to swap tokens from Blockchain X to Blockchain Y. A user makes a transaction on Blockchain X — this sends tokens to our Cross-Chain Routing smart contract on Blockchain Y.
2. There are separate validators which catch this event in Blockchain X. For detailed Validator architecture, see below.
3. Each validator signs the transaction by its own signature, and forwards a message to the relayer:

   - Validators work completely independently of each other
   - Validators know nothing about each other

4. When the relayer collects two of three signatures from the Validators, it initiates a transaction on Blockchain Y by calling the function of the Cross-Сhain Routing smart contract in Blockchain Y — sending tokens to the user.
5. The swap contract verifies that ⅔ of the signatures have been collected, and sends tokens to the user.

