"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[7641],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(r),p=a,f=u["".concat(s,".").concat(p)]||u[p]||c[p]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9796:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={id:"installing_mods",title:"Installing server mods",description:"How to install server mods on your server"},i=void 0,l={unversionedId:"game_servers/minecraft/installing_mods",id:"game_servers/minecraft/installing_mods",title:"Installing server mods",description:"How to install server mods on your server",source:"@site/knowledgebase/game_servers/minecraft/installing_mods.md",sourceDirName:"game_servers/minecraft",slug:"/game_servers/minecraft/installing_mods",permalink:"/knowledgebase/game_servers/minecraft/installing_mods",draft:!1,editUrl:"https://github.com/Horizon-Hosting/Documentation/edit/pre-release/knowledgebase/game_servers/minecraft/installing_mods.md",tags:[],version:"current",frontMatter:{id:"installing_mods",title:"Installing server mods",description:"How to install server mods on your server"},sidebar:"tutorialSidebar",previous:{title:"How much RAM do I need?",permalink:"/knowledgebase/game_servers/minecraft/how_much_RAM"},next:{title:"Setting up a Minecraft sub-domain",permalink:"/knowledgebase/game_servers/minecraft/setting_up_minecraft_subdomain"}},s={},d=[{value:"Where can I find mod files?",id:"where-can-i-find-mod-files",level:2},{value:"Installing a mod",id:"installing-a-mod",level:2}],m={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To install Fabric or Forge mods on your server you need to download the mod ",(0,a.kt)("inlineCode",{parentName:"p"},".jar")," file you wish to use and then upload it to the server, this guide will explain how to do this."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Even though both ",(0,a.kt)("a",{parentName:"p",href:"https://www.curseforge.com/minecraft"},"CurseForge")," and ",(0,a.kt)("a",{parentName:"p",href:"https://modrinth.com/"},"Modrinth")," are reputable sites, malware is still occasionally uploaded. Please be cautious with what you are downloading and using.")),(0,a.kt)("h2",{id:"where-can-i-find-mod-files"},"Where can I find mod files?"),(0,a.kt)("p",null,"You are able to find mods published at many different places, some of these locations include ",(0,a.kt)("a",{parentName:"p",href:"https://www.curseforge.com/minecraft"},"CurseForge")," and ",(0,a.kt)("a",{parentName:"p",href:"https://modrinth.com/"},"Modrinth")," however there is many more sites available."),(0,a.kt)("p",null,"When downloading a mod file you must also ensure the following applies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The file is the correct Minecraft version and the same as your server."),(0,a.kt)("li",{parentName:"ul"},"You also download any dependancies that the mod needs, these are usually listed on the mods page."),(0,a.kt)("li",{parentName:"ul"},"You ensure that the mod if for the correct mod loader Forge/Fabric")),(0,a.kt)("h2",{id:"installing-a-mod"},"Installing a mod"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You need to obtain the mod file for example ",(0,a.kt)("inlineCode",{parentName:"li"},"EXAMPLE_PLUGIN.jar")," and ensuring its using the correct Minecraft version that you are running your server with."),(0,a.kt)("li",{parentName:"ol"},"Once obtaining the jar file you can upload it to your Minecraft server using either the panel file manager or an SFTP client like ",(0,a.kt)("a",{parentName:"li",href:"/knowledgebase/game_servers/tutorial_filezilla_sftp"},"FileZilla"),"."),(0,a.kt)("li",{parentName:"ol"},"Upload the plugin file inside the directory named ",(0,a.kt)("inlineCode",{parentName:"li"},"mods")),(0,a.kt)("li",{parentName:"ol"},"After uploading the jar file you can go back to the console tab and restart the server.")))}c.isMDXComponent=!0}}]);