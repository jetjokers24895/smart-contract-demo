'use strict';

var web3;
var contractInstance;
var byteCode;
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
.then(()=>{
    var fs = require('fs');
    return fs;
})
.then((fs)=>{
    var code = fs.readFileSync('request.sol').toString();
    // console.log(code);
    return code;
})
.then((code)=>{
    var solc = require('solc');
    return [solc,code];
})
.then((handle)=>{
    return handle[0].compile(handle[1]);
})
.then((compiledCode)=>{
    // console.log(compiledCode);
    var abiDefinition = JSON.parse(compiledCode.contracts[':requestCer'].interface);
    // console.log(abiDefinition);
    return [compiledCode,abiDefinition];
})
.then((handle)=>{
    var VotingContract= web3.eth.contract(handle[1]);
    // console.log(VotingContract);
    return [handle[0],VotingContract];
})
.then((handle)=>{
    byteCode = handle[0].contracts[':requestCer'].bytecode;
    return handle[1];
})
.then((handle)=>{
    return [handle.new(0,{data:byteCode,from: web3.eth.accounts[0], gas: 4700000}),handle];
    // var deployedContract = handle[1].new(0,{data:handle[0], from:web3.eth.accounts[0], gas: 4700000});
    // // console.log(deployedContract.address);
    // // return [deployedContract,handle[1]];
})
.then((handle)=>{
    contractInstance = handle[1].at(handle[0].address);
    return contractInstance.address;
})
.then((res)=>{
    console.log(res);
})
.catch((err) => {
    throw new Error(err);
})



// .then(()=>{
//     let a = contractInstance.queryBalen(web3.eth.accounts[0],{from:web3.eth.accounts[0]});
//     console.log(a)
// })



    // function addProvider() {
//     return new Promise ((resolve,reject) => {
//         web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
//     });
// };
// addProvider().then(
//     function() {
//        var code = fs.readFileSync('request.sol').toString();
//         return;
//     }).then(function(){
//         var solc = require('solc');
//         return;
//     });



    // }).then(function() {var compiledCode = solc.compile(code)});
//     }.then(
//         function() {
//             var abiDefinition = JSON.parse(compiledCode.contracts[':requestCer'].interface);
//         }.then(
//             function() {
//                 var VotingContract = web3.eth.contract(abiDefinition);
//             }.then(
//                 function() {
//                     var byteCode = compiledCode.contracts[':requestCer'].bytecode;
//             }.then(
//                 function() {
//                     var deployedContract = VotingContract.new([],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000});
//                 }.then(
//                     function(){
//                         var contractInstance = VotingContract.at(deployedContract.address);
//                         console.log(deployedContract.address);
//                     }.then(
//                         function(){
//                             contractInstance.setCerti('13520149',{from:web3.eth.accounts[0]});
//                         }
//                     )
//                 )
//             )
//         )
//         )
//     )
// ));




// compile and deployed






