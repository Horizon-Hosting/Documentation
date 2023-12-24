"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[3920],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=i,f=c["".concat(s,".").concat(m)]||c[m]||g[m]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4287:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const a={id:"installing_plugins",title:"Installing plugins",description:"How to install plugins on your minecraft server.",sidebar_position:1},l=void 0,o={unversionedId:"game_servers/minecraft/plugins/installing_plugins",id:"game_servers/minecraft/plugins/installing_plugins",title:"Installing plugins",description:"How to install plugins on your minecraft server.",source:"@site/knowledgebase/game_servers/minecraft/plugins/installing_plugins.md",sourceDirName:"game_servers/minecraft/plugins",slug:"/game_servers/minecraft/plugins/installing_plugins",permalink:"/nl/knowledgebase/game_servers/minecraft/plugins/installing_plugins",draft:!1,editUrl:"https://github.com/Horizon-Hosting/Documentation/edit/pre-release/knowledgebase/game_servers/minecraft/plugins/installing_plugins.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"installing_plugins",title:"Installing plugins",description:"How to install plugins on your minecraft server.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/nl/knowledgebase/category/plugins"},next:{title:"Dynmap Setup",permalink:"/nl/knowledgebase/game_servers/minecraft/plugins/dynmap"}},s={},p=[{value:"Where can I find plugins?",id:"where-can-i-find-plugins",level:2},{value:"Installing a plugin",id:"installing-a-plugin",level:2}],u={toc:p};function g(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Minecraft servers such as Spigot or Paper are able to run plugins which modify the experience within the server. Plugins come in many different forms and this guide explains how to setup and install plugins on your server."),(0,i.kt)("h2",{id:"where-can-i-find-plugins"},"Where can I find plugins?"),(0,i.kt)("p",null,"You are able to find plugins published at many different places, some of these locations include ",(0,i.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/"},"SpigotMC")," and ",(0,i.kt)("a",{parentName:"p",href:"https://hangar.papermc.io/"},"Hangar")," however there is many more sites available."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Even though both ",(0,i.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/"},"SpigotMC")," and ",(0,i.kt)("a",{parentName:"p",href:"https://hangar.papermc.io/"},"Hangar")," are reputable sites, malware is still occasionally uploaded. Please be cautious with what you are downloading and using.")),(0,i.kt)("h2",{id:"installing-a-plugin"},"Installing a plugin"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You need to download the plugin file and after ensure it's built for the same Minecraft version that your  server is running."),(0,i.kt)("li",{parentName:"ol"},"Once obtaining the jar file you can upload it to your Minecraft server using either the panel file manager or a SFTP client like ",(0,i.kt)("a",{parentName:"li",href:"/knowledgebase/game_servers/tutorial_filezilla_sftp"},"FileZilla"),"."),(0,i.kt)("li",{parentName:"ol"},"Upload the plugin file inside the directory named ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins")),(0,i.kt)("li",{parentName:"ol"},"After uploading the jar file you can go back to the console tab and restart the server.")))}g.isMDXComponent=!0}}]);