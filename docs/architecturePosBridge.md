---
id: architecturePosBridge
title: Architecture PosBridge
sidebar_label: Architecture PosBridge
---


## Smart contract language

UniChain uses Solidity as the primary smart contract language. Other languages such as NodeJS or Java will be implemented in the future. The smart contracts written in UniChain are quite compatible with Ethereum network so that the migration from Ethereum to UniChain is very simple.

## Your first smart contract

Let's write the first smart contract named: *Your Coin*
This is very simple with few line of codes.

```javascript
pragma solidity ^0.5.4;

import "./ConvertLib.sol";

contract YourCoin {
  mapping(address => uint) balances;

  event Transfer(address _from, address _to, uint256 _value);

  address owner;

  constructor(uint initialBalance) public {
    owner = msg.sender;
    balances[msg.sender] = initialBalance;
  }

  function sendCoin(address receiver, uint amount) public returns (bool sufficient) {
    if (balances[msg.sender] < amount) return false;
    balances[msg.sender] -= amount;
    balances[receiver] += amount;
    emit Transfer(msg.sender, receiver, amount);
    return true;
  }

  function getBalanceInEth(address addr) public view returns (uint){

    return ConvertLib.convert(getBalance(addr), 2);
  }

  function getBalance(address addr) public view returns (uint) {
    return balances[addr];
  }

  function getOwner() public view returns (address) {
    return owner;
  }
}

```

The *ConvertLib.sol* is defined in another file, It's just have only simple function, but you can define any function in the separated file like this.

```javascript
//convert lib 
pragma solidity >=0.4.4 < 0.6.0;

library ConvertLib{
	function convert(uint amount,uint conversionRate) public pure returns (uint convertedAmount)
	{
		return amount * conversionRate;
	}
}

```

Let's go to the next part for smart contract deployment