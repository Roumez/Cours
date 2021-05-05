```
pragma solidity ^0.8.0;                       // version du compilateur
contract Hello {                              // Definition de notre contrat
     string public hello = "Hello world!";    // unne variable public de type string
}
```
```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract SimpleStorage {
    uint256 private _storedData;


    function set(uint256 x) public {
        _storedData = x;
    }


    function storedData() public view returns (uint256) {
        return _storedData;
    }
}
```