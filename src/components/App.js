import React, { Component } from 'react';
import Navbar from "./Navbar"
import './App.css';
import Web3 from 'web3'
import NavbarInfo from './NavbarInfo'
import Token from '../abis/Token.json'
import Main from './Main'

class App extends Component {

    async componentWillMount() {
        await this.loadWeb3();
        await this.loadContract();
        await this.loadAccount();

        window.ethereum.on('accountsChanged', async (accounts)  => {
          await this.loadAccount();
        })
    }
    async loadWeb3() {
        if(window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        } else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }
    async loadAccount() {
        const account = await window.web3.eth.getAccounts();
        this.setState({account: account[0]});
        let balance = await this.state.token.methods.balanceOf(this.state.account).call();

        const decimals = await this.state.token.methods.decimals().call();
        const symbol = await this.state.token.methods.symbol().call();
        const name = await this.state.token.methods.name().call();
        const totalSupply = await this.state.token.methods.totalSupply().call();
        balance = balance / 10 ** decimals ;

        this.setState({balance: balance.toFixed(decimals), name, decimals, symbol, totalSupply})
    
    }
    async loadContract() {
        const networkId = await window.web3.eth.net.getId();
        const networkData = Token.networks[networkId];
        if(networkData) {
            const token = await window.web3.eth.Contract(Token.abi, networkData.address)
            this.setState({token})
        } else {
            alert("Cannot connect to detached network!");
        }
    }
    async checkBlockNumber() {
       const sleep = (milliseconds) => {
           return new Promise(resolve => setTimeout(resolve, milliseconds))
       };
       const blockNumber = await window.web3.eth.getBlockNumber()
       let blockNumberNew = await window.web3.eth.getBlockNumber()
       while(blockNumber === blockNumberNew) {
           blockNumberNew = await window.web3.eth.getBlockNumber()
           await sleep(100);
       }
       await this.loadAccount();

   }
    async transfer(address, tokens) {
        await this.state.token.methods.transfer(address, tokens).send({from: this.state.account}, async (e) => {
            await this.checkBlockNumber();
        })
    }
    async transferFrom(addressFrom, addressTo, tokens) {
        await this.state.token.methods.transferFrom(addressFrom, addressTo, tokens).send({from: this.state.account}, async(e) => {
            await this.checkBlockNumber();
        })
    }
    async approve(address, tokens) {
        await this.state.token.methods.approve(address, tokens).send({from: this.state.account}, async(e) => {
            await this.checkBlockNumber();
        })
    }
    constructor(props) {
        super(props);
        this.state = {
            account: null,
            balance: 0,
        }
    }

  render() {
    return (
      <div>
      <Navbar account={this.state.account} name={this.state.name} symbol={this.state.symbol}/>
      <NavbarInfo approve={this.approve.bind(this)} balance={this.state.balance}/>
      <Main transferFrom={this.transferFrom.bind(this)} transfer={this.transfer.bind(this)}/>
      </div>
    );
  }
}

export default App;
