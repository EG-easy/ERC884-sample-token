pragma solidity ^0.4.24;
import './ERC884/ERC884ReferenceImpl.sol';

contract MyToken is ERC884ReferenceImpl {
  string public name = "MyToken";
  string public symbol = "MYT";
  uint public decimals = 0;

   constructor(uint initialSupply) public {
    totalSupply_ = initialSupply;
    balances[msg.sender] = initialSupply;
  }
}
