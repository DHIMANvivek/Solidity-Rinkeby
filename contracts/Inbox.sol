pragma solidity ^0.4.19;

contract Inbox {

    string public message;


    function Inbox(string memory initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }


}