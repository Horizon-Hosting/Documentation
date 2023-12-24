"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[6504],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,h=u["".concat(s,".").concat(m)]||u[m]||g[m]||a;return t?n.createElement(h,o(o({ref:r},p),{},{components:t})):n.createElement(h,o({ref:r},p))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9782:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const a={id:"changing_server_icon",title:"Changing the server Icon",description:"How to change the server icon that displays on the multiplayer server list."},o=void 0,l={unversionedId:"game_servers/minecraft/changing_server_icon",id:"game_servers/minecraft/changing_server_icon",title:"Changing the server Icon",description:"How to change the server icon that displays on the multiplayer server list.",source:"@site/knowledgebase/game_servers/minecraft/changing_server_icon.md",sourceDirName:"game_servers/minecraft",slug:"/game_servers/minecraft/changing_server_icon",permalink:"/sv/knowledgebase/game_servers/minecraft/changing_server_icon",draft:!1,editUrl:"https://github.com/Horizon-Hosting/Documentation/edit/pre-release/knowledgebase/game_servers/minecraft/changing_server_icon.md",tags:[],version:"current",frontMatter:{id:"changing_server_icon",title:"Changing the server Icon",description:"How to change the server icon that displays on the multiplayer server list."},sidebar:"tutorialSidebar",previous:{title:"Simple Voice Chat Setup",permalink:"/sv/knowledgebase/game_servers/minecraft/plugins/simple_voice_chat"},next:{title:"Changing the Minecraft Version",permalink:"/sv/knowledgebase/game_servers/minecraft/changing_version"}},s={},c=[{value:"Preparing the image",id:"preparing-the-image",level:2},{value:"Setting up the icon",id:"setting-up-the-icon",level:2}],p={toc:c};function g(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A server icon is a picture or logo that shows up on the left side of the server name in your Minecraft client's multiplayer list."),(0,i.kt)("h2",{id:"preparing-the-image"},"Preparing the image"),(0,i.kt)("p",null,"Before setting up a server icon on your server you will need an image, for which there are a few requirements."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The image size must be 64 pixels by 64 pixels"),(0,i.kt)("li",{parentName:"ul"},"The file type must be a ",(0,i.kt)("inlineCode",{parentName:"li"},".png")),(0,i.kt)("li",{parentName:"ul"},"The file name must be ",(0,i.kt)("inlineCode",{parentName:"li"},"server-icon"))),(0,i.kt)("h2",{id:"setting-up-the-icon"},"Setting up the icon"),(0,i.kt)("p",null,"After preparing your image, follow the below steps to setup your server icon."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"After prepairing your image, upload it to your Minecraft server using either the Panel file manager or a SFTP client like ",(0,i.kt)("a",{parentName:"li",href:"/knowledgebase/game_servers/tutorial_filezilla_sftp"},"FileZilla"),"."),(0,i.kt)("li",{parentName:"ol"},"Upload the ",(0,i.kt)("inlineCode",{parentName:"li"},"server-icon.png")," file inside the root directory (/home/container)"),(0,i.kt)("li",{parentName:"ol"},"After uploading the icon file, go back to the console tab and restart the server to apply the server-icon changes.")))}g.isMDXComponent=!0}}]);