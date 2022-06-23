---
id: urc20token
title: URC-20 Token
sidebar_label: URC-20 Token
---

URC-20 token follows the ERC-20 standards. Users can use ERC-20 smart contract interface to issue the token. The interface looks like following
```javascript
pragma solidity ^0.6.0;

interface IURC20 {

    function totalSupply() external view returns (uint256);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);

    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

```
Please go to smart contract session to learn how to write and deploy smart contract on UniChain network.