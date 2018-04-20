'use strict';

var web3;
var contractInstance;
function add() {
    return new Promise((resolve,reject) => {
        
        resolve();
        
    })
}
add()
.then(()=>{
    var Web3 = require('web3');
    return Web3;
})
.then((Web3)=> {
  
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    return web3;
})
.then((web3)=>{
    
    console.log(web3.eth.accounts);
})
.catch((err)=>{
    throw new Error('failed'+ err);
})
.then(()=> {
    
})