// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface , bytecode } = require('./compile');

const provider = new HDWalletProvider(

    'foot left share runway inquiry urge maid finger name auction path disorder',
    'https://rinkeby.infura.io/v3/fcc21d23ee5a4258b69b4b239f28c14e'
);
const web3 = new Web3(provider);

const deploy = async ()=>{
const accounts = await web3.eth.getAccounts();

console.log('Attempting to Deploy from account ' , accounts[0]);

const result = await new web3.eth.Contract(JSON.parse(interface))
.deploy({data: bytecode , arguments: ['Hi There']})
.send({gas: '1000000' , from: accounts[0]});


console.log('contract deploy to ' , result.options.address);
provider.engine.stop();


};

deploy();