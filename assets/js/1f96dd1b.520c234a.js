"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[2409],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),f=o(n),m=r,p=f["".concat(l,".").concat(m)]||f[m]||b[m]||i;return n?a.createElement(p,c(c({ref:t},s),{},{components:n})):a.createElement(p,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,c[1]=d;for(var o=2;o<i;o++)c[o]=n[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},20282:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return f}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),c=["components"],d={sidebar_label:"BSC Slash Evidence",hide_table_of_contents:!1,sidebar_position:2},l="How to send BSC Slash Evidence",o={unversionedId:"validator/send-slash-evidence",id:"validator/send-slash-evidence",isDocsHomePage:!1,title:"How to send BSC Slash Evidence",description:"To submit BSC slash evidence, download the bnbcli binary.",source:"@site/docs/validator/send-slash-evidence.md",sourceDirName:"validator",slug:"/validator/send-slash-evidence",permalink:"/docs/validator/send-slash-evidence",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/docs/validator/send-slash-evidence.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"BSC Slash Evidence",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Slashing and Jail",permalink:"/docs/validator/Penalty-overview"},next:{title:"Scenarios for Slashing",permalink:"/docs/validator/scenarios-slash"}},s=[{value:"Command for submitting evidence",id:"command-for-submitting-evidence",children:[{value:"Parameters for  slashing bsc-submit-evidence",id:"parameters-for--slashing-bsc-submit-evidence",children:[],level:4},{value:"Example",id:"example",children:[],level:4},{value:"Example",id:"example-1",children:[],level:4}],level:3}],b={toc:s};function f(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-send-bsc-slash-evidence"},"How to send BSC Slash Evidence"),(0,i.kt)("p",null,"To submit BSC slash evidence, download the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/binance-chain/node-binary/tree/master/cli/prod/0.8.2"},"bnbcli")," binary."),(0,i.kt)("h3",{id:"command-for-submitting-evidence"},"Command for submitting evidence"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bnbcli slashing bsc-submit-evidence \n \\--from={Name or address of private key with which to sign}\n \\--evidence={Evidence details, including two bsc block headers with json format} \n \\--evidence-file={File of evidence details} \n \\--chain-id={the chain id of binance chain}\n")),(0,i.kt)("h4",{id:"parameters-for--slashing-bsc-submit-evidence"},"Parameters for  slashing bsc-submit-evidence"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Parameter Name")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Example")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Explanation")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Required")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--chan-id"),(0,i.kt)("td",{parentName:"tr",align:null},"Binance-Chain-Tigris"),(0,i.kt)("td",{parentName:"tr",align:null},"the chain id of binance  chain"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--from"),(0,i.kt)("td",{parentName:"tr",align:null},"bnb19awsmku5ch689lp0rj0c6su7x0n5wxhjm65hdd"),(0,i.kt)("td",{parentName:"tr",align:null},"Name or address of  private key with which to sign"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--evidence"),(0,i.kt)("td",{parentName:"tr",align:null},'[{"difficulty":"0x2","extraData":"0xd98301...},{"difficulty":"0x3","extraData":"0xd64372...}]'),(0,i.kt)("td",{parentName:"tr",align:null},"Evidence details,  including two bsc block headers with json format"),(0,i.kt)("td",{parentName:"tr",align:null},"Option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"--evidence-file"),(0,i.kt)("td",{parentName:"tr",align:null},"/user/evidence.json"),(0,i.kt)("td",{parentName:"tr",align:null},"File of evidence details,  if evidence-file is not empty, --evidence will be ignored"),(0,i.kt)("td",{parentName:"tr",align:null},"Option")))),(0,i.kt)("p",null,"In the above command, ","-","-evidence and ","-","-evidence-file are optional parameters. If ","-","-evidence-file is not empty, ","-","-evidence will be ignored. ","-","-from and ","-","-chain-id are mandatory parameters."),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bnbcli slashing bsc-submit-evidence \\--from= bnb19awsmku5ch689lp0rj0c6su7x0n5wxhjm65hdd \\--chain-id=Binance-Chain-Tigris\\--home \\~/home\\_cli\\\n")),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'bash\nbnbcli slashing bsc-submit-evidence --from=bnb19awsmku5ch689lp0rj0c6su7x0n5wxhjm65hdd --evidence=[{"parentHash":"0x6116de25352c93149542e950162c7305f207bbc17b0eb725136b78c80aed79cc","sha3Uncles":"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347","miner":"0x0000000000000000000000000000000000000000","stateRoot":"0xe7cb9d2fd449f7bd11126bff55266e7b74936f2f230e21d44d75c04b7780dfeb","transactionsRoot":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421","receiptsRoot":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421","logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","difficulty":"0x20000","number":"0x1","gasLimit":"0x47e7c4","gasUsed":"0x0","timestamp":"0x5eb2a363","extraData":"0x0000000000000000000000000000000000000000000000000000000000000000a2852203a9da8bb555ec98a78c66365437bb1dde6707a08032e9eb916a8a454e37a1fffeab272bcffc2fc1d82aee6f3124bbdc8ed884efcbadfb6ff862cf4c3801","mixHash":"0x0000000000000000000000000000000000000000000000000000000000000000","nonce":"0x0000000000000000","hash":"0xd977f1acfd035cf717193a9c3a2351cdccdc2ea0719aff871dade0e8daf8069d"},{"parentHash":"0x6116de25352c93149542e950162c7305f207bbc17b0eb725136b78c80aed79cc","sha3Uncles":"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347","miner":"0x0000000000000000000000000000000000000000","stateRoot":"0xe7cb9d2fd449f7bd11126bff55266e7b74936f2f230e21d44d75c04b7780dfeb","transactionsRoot":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421","receiptsRoot":"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421","logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","difficulty":"0x20000","number":"0x1","gasLimit":"0x47e7c4","gasUsed":"0x64","timestamp":"0x5eb2a363","extraData":"0x00000000000000000000000000000000000000000000000000000000000000005eab7a9bf40635d056ccab45ac0d8b4e99be4b4ed859e4246f651b95c0adaacc050760a0afc2d9383f821baab7f995cde07271f286c4805095b413e7ad69d9f401","mixHash":"0x0000000000000000000000000000000000000000000000000000000000000000","nonce":"0x0000000000000000","hash":"0x917c38a507c9807426fc9e3e9e8ded2db07c7f61070bd1c7b57b9df287e8f7b2"}]     --chain-id=test-chain-8d7sJz --home ~/home_cli\n')))}f.isMDXComponent=!0}}]);