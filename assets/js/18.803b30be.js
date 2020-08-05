(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{359:function(t,e,a){"use strict";a.r(e);var n=a(7),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[t._v("#")]),t._v(" Best Practices")]),t._v(" "),a("p",[t._v("If this page doesn't answer your question, please feel free to open an issue "),a("a",{attrs:{href:"https://github.com/MetaMask/metamask-mobile",target:"_blank",rel:"noopener noreferrer"}},[t._v("in our repository"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"the-provider-window-ethereum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-provider-window-ethereum"}},[t._v("#")]),t._v(" The Provider (window.ethereum)")]),t._v(" "),a("p",[t._v("The "),a("RouterLink",{attrs:{to:"/guide/ethereum-provider.html"}},[t._v("provider API")]),t._v(" is the same for both MetaMask mobile and the desktop extension.\nHowever, the providers become available (i.e., are injected into the page) at different points in the page lifecycle.")],1),t._v(" "),a("h3",{attrs:{id:"provider-availability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-availability"}},[t._v("#")]),t._v(" Provider Availability")]),t._v(" "),a("p",[t._v("If you use "),a("a",{attrs:{href:"https://npmjs.com/package/@metamask/detect-provider",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("@metamask/detect-provider")]),a("OutboundLink")],1),t._v(", there's nothing to worry about; it will reliably detect both the mobile and extension provider.")]),t._v(" "),a("p",[t._v("If you don't use the "),a("code",[t._v("detect-provider")]),t._v(" package, you have to detect the mobile provider manually.")]),t._v(" "),a("p",[t._v("The extension provider will always be available by the time your code is executed.\nBecause of platform limitations, the mobile provider may not be injected until later in the page lifecycle.\nFor this purpose, the MetaMask provider dispatches the event "),a("code",[t._v("ethereum#initialized")]),t._v(" on "),a("code",[t._v("window")]),t._v(" when it is fully initialized.")]),t._v(" "),a("p",[t._v("You can reliably detect both the mobile and extension provider with the following snippet.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleEthereum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ethereum#initialized'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handleEthereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    once"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the event is not dispatched by the end of the timeout,")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the user probably doesn't have MetaMask installed.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handleEthereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3 seconds")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleEthereum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ethereum "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ethereum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" ethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isMetaMask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ethereum successfully detected!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Access the decentralized web!")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Please install MetaMask!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"using-walletconnect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-walletconnect"}},[t._v("#")]),t._v(" Using WalletConnect")]),t._v(" "),a("p",[t._v("With WalletConnect, you can use MetaMask mobile as a signer while using applications on another browser, desktop, or mobile application.\nCheck out the "),a("a",{attrs:{href:"https://docs.walletconnect.org/mobile-linking",target:"_blank",rel:"noopener noreferrer"}},[t._v("WalletConnect mobile linking docs"),a("OutboundLink")],1),t._v(" for more info.")]),t._v(" "),a("h2",{attrs:{id:"deeplinking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deeplinking"}},[t._v("#")]),t._v(" Deeplinking")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://metamask.github.io/metamask-deeplinks/#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Click here to create deeplinks for your application."),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("Deeplinks enable instant invocation of the user's preferred wallet application with correctly parameterized transactions.")]),t._v(" "),a("p",[t._v("Only the (authenticated) user can confirm the transaction, and the wallet can be a web, mobile or desktop app.")]),t._v(" "),a("p",[t._v("URLs embedded in QR codes, hyperlinks in web pages, emails, or chat messages enable robust, cross-application signaling between otherwise loosely coupled applications.")]),t._v(" "),a("p",[t._v("You can use deeplinks for things like:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Creating a URL so your users can open your app directly in MetaMask mobile to interact with your application with their Ethereum account.")])]),t._v(" "),a("li",[a("p",[t._v("Providing a one-click experience such that users can easily make payments to another account (with pre-filled parameters like recipient address, amount, network, etc.)")])]),t._v(" "),a("li",[a("p",[t._v("Let your users make gasless and instant transactions with Connext payment channel requests")]),t._v(" "),a("ul",[a("li",[t._v("This requires that the user opts in for the InstaPay experimental feature.")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);