pragma solidity ^0.4.18;


contract requestCer{

    struct Certi {
        bytes32 mssv;
        bytes32 name;
        // address requester;
        bytes32 state;

    }
    uint numberCerti;
    mapping (address => Certi) public certis;
    // function checkCoin() public returns (bool) {
    //     if (msg.value < 1000) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }

    // function requestCer() public {
    //     sender = msg.sender;
    // }
    event emitSetCerti(bytes32 mssv,bytes32 name, bytes32 state);

    function queryBalen(address sender) view public returns (uint){
        return sender.balance;
    }

    function SendEthe(address reciver,uint value) public{
        
        address sender = msg.sender;
        require(sender.balance > value);
        reciver.transfer(value);
    }

    function setCerti(bytes32 mssv,bytes32 name) public returns (uint certiId)  {
        //require(checkCoin());      
        Certi storage c = certis[msg.sender];
        // c.requester = msg.sender;
        c.mssv = mssv;
        c.state = "actived";
        numberCerti += 1;
        emit emitSetCerti(mssv,name,"actived");
        return certiId;
    }
    event Emitmssv(bytes32 mssv );
    function queryCerti(address requester) payable public returns (bytes32) {
        // Certi storage q = certis[certiid];
        // if (q.requester != msg.sender ) {return bytes32("You dont have permission");}
        // // mssv = q.mssv;
        // return q;s
        emit Emitmssv(certis[requester].mssv);
        return certis[requester].mssv;
    }

    function querynumCerti() view public returns (uint) {
        return numberCerti;
    }

}

//     requestCer.emitSetCerti().watch({}, '', function(error, result) {
//     if (!error) {
//         console.log("Coin transfer: " + result.args.amount +
//             " coins were sent from " + result.args.from +
//             " to " + result.args.to + ".");
//         console.log("Balances now:\n" +
//             "Sender: " + Coin.balances.call(result.args.from) +
//             "Receiver: " + Coin.balances.call(result.args.to));
//     }
// })