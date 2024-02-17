// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract chat{

    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    address payable owner; //owner is going to receive funds


    constructor(){
        owner = payable(msg.sender);
    }
//payable function, because it will help us receive Ether
    function buyChai( string calldata name, string calldata message) external payable{
        require(msg.value>0, "Please pay more than 0 ether"); //anyone who wants to buy something, the money should be over 0
        owner.transfer(msg.value);
        memos.push(Memo(name,message,block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }

}