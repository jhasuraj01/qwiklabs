"use strict";(self.webpackChunkqwiklabs=self.webpackChunkqwiklabs||[]).push([[245],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2033:function(e,t,n){n.d(t,{I:function(){return a}});var a=function(e){return[].concat(e.split(",").map((function(e){return e.trim()})),["Google Cloud Ready","GCP","Qwiklabs","GoogleCloudReady","30DaysOfGoogleCloud","Cloud","Qwiklab","Qwiklabs Google Cloud","web","google cloud","Google Cloud Platform","Google Events","Free Google Swag","Google Cloud ready facilitator program","Google Cloud Ready Program","30 days of google cloud","Google Cloud Ready Program Prizes","Challenge Lab Qwiklabs","Learn to Earn Cloud Challenge"]).join(",")}},685:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"GSP007",title:"Set Up Network and HTTP Load Balancers",hide_title:!0,description:"In this hands-on lab, you'll learn how setup both network load balancers and HTTP load balancers for your application running in Compute Engine virtual machines.\n",tags:["Qwiklabs"]},s=void 0,c={unversionedId:"GSP007",id:"GSP007",isDocsHomePage:!1,title:"Set Up Network and HTTP Load Balancers",description:"In this hands-on lab, you'll learn how setup both network load balancers and HTTP load balancers for your application running in Compute Engine virtual machines.\n",source:"@site/docs/GSP007.mdx",sourceDirName:".",slug:"/GSP007",permalink:"/qwiklabs/labs/GSP007",editUrl:"https://github.com/jhasuraj01/qwiklabs/tree/main/docs/GSP007.mdx",tags:[{label:"Qwiklabs",permalink:"/qwiklabs/labs/tags/qwiklabs"}],version:"current",lastUpdatedAt:1633331176,formattedLastUpdatedAt:"10/4/2021",frontMatter:{id:"GSP007",title:"Set Up Network and HTTP Load Balancers",hide_title:!0,description:"In this hands-on lab, you'll learn how setup both network load balancers and HTTP load balancers for your application running in Compute Engine virtual machines.\n",tags:["Qwiklabs"]},sidebar:"sidebar",previous:{title:"Kubernetes Engine: Qwik Start",permalink:"/qwiklabs/labs/GSP100"},next:{title:"GSP313 Challenge Lab",permalink:"/qwiklabs/labs/GSP313"}},u=[],p={toc:u};function d(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("meta",{name:"keywords",content:n(2033).I("GSP007")})),(0,o.kt)("h1",{id:"gsp007-set-up-network-and-http-load-balancers"},"GSP007 Set Up Network and HTTP Load Balancers"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Challenge Lab: ",(0,o.kt)("a",{parentName:"p",href:"https://google.qwiklabs.com/focuses/12007?parent=catalog"},"https://google.qwiklabs.com/focuses/12007?parent=catalog"))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"TO DO")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Wanna Contribute? Click the edit button below and create a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jhasuraj01/qwiklabs/tree/main/docs/GSP322.mdx"},(0,o.kt)("inlineCode",{parentName:"a"},"Pull Request")),"!"))))}d.isMDXComponent=!0}}]);