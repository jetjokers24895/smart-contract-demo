
'use strict';

var web3;
var Contract;
var ContractInstance;
var event;
// var abi= JSON.parse('[{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"certis","outputs":[{"name":"mssv","type":"bytes32"},{"name":"name","type":"bytes32"},{"name":"state","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"querynumCerti","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"requester","type":"address"}],"name":"queryCerti","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"queryBalen","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"mssv","type":"bytes32"},{"name":"name","type":"bytes32"}],"name":"setCerti","outputs":[{"name":"certiId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"mssv","type":"bytes32"},{"indexed":false,"name":"name","type":"bytes32"},{"indexed":false,"name":"state","type":"bytes32"}],"name":"emitSetCerti","type":"event"}]')

// var address='0x93f87243369ccb42c8e837d1bfabf09861ede17a';

var abi = JSON.parse('[{"constant":false,"inputs":[{"name":"reciver","type":"address"},{"name":"value","type":"uint256"}],"name":"SendEthe","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"certis","outputs":[{"name":"mssv","type":"bytes32"},{"name":"name","type":"bytes32"},{"name":"state","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"querynumCerti","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"requester","type":"address"}],"name":"queryCerti","outputs":[{"name":"","type":"bytes32"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"queryBalen","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"mssv","type":"bytes32"},{"name":"name","type":"bytes32"}],"name":"setCerti","outputs":[{"name":"certiId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"mssv","type":"bytes32"},{"indexed":false,"name":"name","type":"bytes32"},{"indexed":false,"name":"state","type":"bytes32"}],"name":"emitSetCerti","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"mssv","type":"bytes32"}],"name":"Emitmssv","type":"event"}]');
var address = '0x629e62e94ba37481506ec93a23438b5bf9f1b9f8';

function add() {
    return new Promise((resolve,reject) => {
        
        resolve();
        
    })
}

function querybalence() {
    return ContractInstance.queryBalen(web3.eth.accounts[0],{from:web3.eth.accounts[0]}).toString();
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
// .then((web3)=>{
    
//     console.log(web3.eth.accounts);
// }).then
.then((web3)=>{

    Contract = web3.eth.contract(abi);
    return Contract;
})
.then((Contract)=>{
    ContractInstance = Contract.at(address);
})
.then(()=>{
    var event1 = ContractInstance.emitSetCerti();
    event1.watch(function(err,result) {
        if(!err){
            console.log(result);
        }
    })
    // var event2 = ContractInstance.emit
})
// .then(()=>{
//     let a = ContractInstance.queryBalen(web3.eth.accounts[0],{from:web3.eth.accounts[0]}).toString();
//     $("#Ether-id").html(web3.fromWei(a,'Ether'));
//     $("#wei-id").html(a);
//     $("#balence-id").html(web3.eth.accounts[0].toString());
// })

function SendTransaction() {
    let account = $("#inputAddress").val();
    let a = ContractInstance.queryBalen(account,{from:web3.eth.accounts[0]}).toString();
    $("#balence-id").html(account);
    $("#Ether-id").html(web3.fromWei(a,'Ether'));
    $("#wei-id").html(a);    
}

function setCerti() {
    var name = $("#set-name").val();
    var mssv = $("#set-mssv").val();
    var setAddress= $("#setAddress").val();
    console.log(mssv+" "+name);
    let res = ContractInstance.setCerti(mssv.toString(),name.toString(),{from:setAddress}).toString();
    $("#result").html(res.toString());
}



