"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[2704],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,d=g["".concat(s,".").concat(m)]||g[m]||c[m]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1415:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={id:"tutorial_changing_port",title:"\xc4ndra porten p\xe5 en Horizon-spelserver",description:"Vill du \xe4ndra porten p\xe5 din server?"},o=void 0,l={unversionedId:"game_servers/tutorial_changing_port",id:"game_servers/tutorial_changing_port",title:"\xc4ndra porten p\xe5 en Horizon-spelserver",description:"Vill du \xe4ndra porten p\xe5 din server?",source:"@site/i18n/sv/docusaurus-plugin-content-docs-knowledgebase/current/game_servers/tutorial_changing_port.md",sourceDirName:"game_servers",slug:"/game_servers/tutorial_changing_port",permalink:"/sv/knowledgebase/game_servers/tutorial_changing_port",draft:!1,editUrl:"https://github.com/Horizon-Hosting/Documentation/edit/pre-release/knowledgebase/game_servers/tutorial_changing_port.md",tags:[],version:"current",frontMatter:{id:"tutorial_changing_port",title:"\xc4ndra porten p\xe5 en Horizon-spelserver",description:"Vill du \xe4ndra porten p\xe5 din server?"},sidebar:"tutorialSidebar",previous:{title:"Skapa en Minecraft-subdom\xe4n",permalink:"/sv/knowledgebase/game_servers/minecraft/setting_up_minecraft_subdomain"},next:{title:"Installera och anv\xe4nda FTP-klienten FileZilla",permalink:"/sv/knowledgebase/game_servers/tutorial_filezilla_sftp"}},s={},p=[{value:"Introduktion",id:"introduktion",level:2},{value:"Guide",id:"guide",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduktion"},"Introduktion"),(0,a.kt)("p",null,"Den h\xe4r guiden beskriver hur du f\xe5r en ny slumpm\xe4ssigt tilldelad port f\xf6r din spelserver. Detta kan vara anv\xe4ndbart om n\xe5gon du inte vill ska veta IP/port, och du vill h\xe5lla din server privat."),(0,a.kt)("h2",{id:"guide"},"Guide"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigera till din server p\xe5 panelen",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/10Horizon%20Panel%20Servers.png",alt:"Gamepanel servers page"})))),(0,a.kt)("li",{parentName:"ol"},"Navigera till Network och skapa en ny allokering",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Creating%20Allocation.png",alt:"Gamepanel n\xe4tverkssida"})))),(0,a.kt)("li",{parentName:"ol"},"Ange den nya allokeringen som prim\xe4r",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Making%20Allocation%20Primary.png",alt:"Gamepanel n\xe4tverkssida"})))),(0,a.kt)("li",{parentName:"ol"},"Radera den gamla allokeringen",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Deleting%20Allocation.png",alt:"Gamepanel network page"})))),(0,a.kt)("li",{parentName:"ol"},"Bekr\xe4fta borttagningen",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Removing%20Allocation.png",alt:"Ta bort tilldelning Modal"})))),(0,a.kt)("li",{parentName:"ol"},"Klart! Den nya IP:n kan visas p\xe5 konsolsidan",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/New%20IP.png",alt:"Spelpanelens konsolsida"}))))))}c.isMDXComponent=!0}}]);