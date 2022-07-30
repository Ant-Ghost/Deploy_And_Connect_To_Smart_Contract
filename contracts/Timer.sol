// SPDX-License-Identifier: ISC

pragma solidity >=0.7.0 <0.9.0;


contract Timer {
    uint private _start ;
    uint private _end ;

    modifier checkFinish() {
        require(block.timestamp<=_end, "Time up");
        _;
    }
    function setStart() public {
        _start = block.timestamp;
    }

    function setEnd(uint time) public {
        _end = _start + time;
    }

    function remainingTime() public checkFinish view  returns(uint) {
        return _end - block.timestamp;
    }

    function getBlockTime() public view returns(uint){
        return block.timestamp;
    }
}