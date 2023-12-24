"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[5012],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),g=a,v=m["".concat(u,".").concat(g)]||m[g]||c[g]||o;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"tutorial_changing_port",title:"Changer le port d'un serveur de jeux Horizon",description:"Vous voulez changer le port de votre serveur ?"},i=void 0,l={unversionedId:"game_servers/tutorial_changing_port",id:"game_servers/tutorial_changing_port",title:"Changer le port d'un serveur de jeux Horizon",description:"Vous voulez changer le port de votre serveur ?",source:"@site/i18n/fr/docusaurus-plugin-content-docs-knowledgebase/current/game_servers/tutorial_changing_port.md",sourceDirName:"game_servers",slug:"/game_servers/tutorial_changing_port",permalink:"/fr/knowledgebase/game_servers/tutorial_changing_port",draft:!1,editUrl:"https://github.com/Horizon-Hosting/Documentation/edit/pre-release/knowledgebase/game_servers/tutorial_changing_port.md",tags:[],version:"current",frontMatter:{id:"tutorial_changing_port",title:"Changer le port d'un serveur de jeux Horizon",description:"Vous voulez changer le port de votre serveur ?"},sidebar:"tutorialSidebar",previous:{title:"Mise en place d'un sous-domaine Minecraft",permalink:"/fr/knowledgebase/game_servers/minecraft/setting_up_minecraft_subdomain"},next:{title:"Installation et utilisation du client FTP FileZilla",permalink:"/fr/knowledgebase/game_servers/tutorial_filezilla_sftp"}},u={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Guide",id:"guide",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Ce guide d\xe9taille comment obtenir un nouveau port allou\xe9 al\xe9atoirement pour votre serveur de jeux. Cela peut \xeatre utile si quelqu'un que vous ne voulez pas voir conna\xeet l'IP/port, et que vous voulez garder votre serveur priv\xe9."),(0,a.kt)("h2",{id:"guide"},"Guide"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Naviguez vers votre serveur sur le panel",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/10Horizon%20Panel%20Servers.png",alt:"Page serveurs du Gamepanel"})))),(0,a.kt)("li",{parentName:"ol"},"Naviguez vers Network, et cr\xe9ez une nouvelle allocation",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Creating%20Allocation.png",alt:"Page r\xe9seau de Gamepanel"})))),(0,a.kt)("li",{parentName:"ol"},"D\xe9finissez la nouvelle allocation comme primaire",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Making%20Allocation%20Primary.png",alt:"Page r\xe9seau de Gamepanel"})))),(0,a.kt)("li",{parentName:"ol"},"Supprimez l'ancienne allocation",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Deleting%20Allocation.png",alt:"Page r\xe9seau Gamepanel"})))),(0,a.kt)("li",{parentName:"ol"},"Confirmez la suppression",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Removing%20Allocation.png",alt:"Remove Allocation Modal"})))),(0,a.kt)("li",{parentName:"ol"},"C'est fait ! La nouvelle IP peut \xeatre visualis\xe9e sur la page de la console",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/New%20IP.png",alt:"Page console Gamepanel"}))))))}c.isMDXComponent=!0}}]);