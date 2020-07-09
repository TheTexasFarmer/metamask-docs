(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{361:function(t,e,r){"use strict";r.r(e);var a=r(7),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"initializing-dapps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#initializing-dapps"}},[t._v("#")]),t._v(" Initializing Dapps")]),t._v(" "),r("p",[t._v("Once you have your basic dev environment "),r("a",{attrs:{href:"./Getting-Started"}},[t._v("set up")]),t._v(", you are ready to start interacting with some smart contracts. There are some basic things you'll need regardless of what convenience library you're using, when communicating with a smart contract:")]),t._v(" "),r("h2",{attrs:{id:"the-contract-network"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-contract-network"}},[t._v("#")]),t._v(" The Contract Network")]),t._v(" "),r("p",[t._v("If you aren't connected to the right network, you aren't going to have any luck sending transactions to your contract, so make sure you have this right!")]),t._v(" "),r("p",[t._v('Many clever dapps will recognize the user\'s current network, and actually adapt to it! For example, if you detect a test network, you could deliberately connect to a test-network version of your smart contract, which makes it easy for users to "try out" your system without using real money!')]),t._v(" "),r("h2",{attrs:{id:"the-contract-address"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-contract-address"}},[t._v("#")]),t._v(" The Contract Address")]),t._v(" "),r("p",[t._v("Every account in Ethereum has an address, whether it's an external key-pair account, or a smart contract. In order for any smart contract library to communicate with your contracts, they'll need to know its exact address.")]),t._v(" "),r("h2",{attrs:{id:"the-contract-abi"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-contract-abi"}},[t._v("#")]),t._v(" The Contract ABI")]),t._v(" "),r("p",[t._v("In Ethereum, "),r("a",{attrs:{href:"https://solidity.readthedocs.io/en/develop/abi-spec.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("The ABI Specification"),r("OutboundLink")],1),t._v(" is a way to encode the interface of a smart contract in a way that your user interface can make sense of.\nIt is an array of method-describing objects, and when you feed this and the address into a contract-abstraction library, this "),r("code",[t._v("ABI")]),t._v(" tells those libraries about what methods to provide, and how to compose transactions to call those methods.")]),t._v(" "),r("p",[t._v("Example libraries include:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.npmjs.com/package/ethers",target:"_blank",rel:"noopener noreferrer"}},[t._v("ethers"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.npmjs.com/package/web3",target:"_blank",rel:"noopener noreferrer"}},[t._v("web3.js"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://framework.embarklabs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Embark"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.npmjs.com/package/ethjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("ethjs"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.trufflesuite.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("truffle"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"the-contract-bytecode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-contract-bytecode"}},[t._v("#")]),t._v(" The Contract Bytecode")]),t._v(" "),r("p",[t._v("If your web app is going to publish a new smart contract that is pre-compiled, it may need to include some "),r("code",[t._v("bytecode")]),t._v(". In this case, you will not know the contract address in advance, but instead will have to publish, watch for the transaction to be processed, and then extract the final contract's address from the completed transaction.")]),t._v(" "),r("p",[t._v("If publishing a contract from bytecode, you will still want an "),r("code",[t._v("ABI")]),t._v(" if you want to interact with it! The bytecode does not describe how to interact with the final contract.")]),t._v(" "),r("h2",{attrs:{id:"the-contract-source-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-contract-source-code"}},[t._v("#")]),t._v(" The Contract Source Code")]),t._v(" "),r("p",[t._v("If your website is going to allow users to edit smart contract source code and compile it, like "),r("a",{attrs:{href:"http://remix.ethereum.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Remix"),r("OutboundLink")],1),t._v(", you may import a whole compiler, in which case you're going to derive your bytecode and ABI from that source code, and eventually you will derive the contract's address from the completed transaction publishing that bytecode.")])])}),[],!1,null,null,null);e.default=o.exports}}]);