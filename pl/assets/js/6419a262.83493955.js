"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[7507],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,k=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={id:"tutorial_changing_port",title:"Zmiana portu na serwerze gier Horizon",description:"Chc\u0105 Pa\u0144stwo zmieni\u0107 port na swoim serwerze?"},i=void 0,l={unversionedId:"game_servers/tutorial_changing_port",id:"game_servers/tutorial_changing_port",title:"Zmiana portu na serwerze gier Horizon",description:"Chc\u0105 Pa\u0144stwo zmieni\u0107 port na swoim serwerze?",source:"@site/i18n/pl/docusaurus-plugin-content-docs-knowledgebase/current/game_servers/tutorial_changing_port.md",sourceDirName:"game_servers",slug:"/game_servers/tutorial_changing_port",permalink:"/pl/knowledgebase/game_servers/tutorial_changing_port",draft:!1,editUrl:"https://github.com/Horizon-Hosting/Documentation/edit/pre-release/knowledgebase/game_servers/tutorial_changing_port.md",tags:[],version:"current",frontMatter:{id:"tutorial_changing_port",title:"Zmiana portu na serwerze gier Horizon",description:"Chc\u0105 Pa\u0144stwo zmieni\u0107 port na swoim serwerze?"},sidebar:"tutorialSidebar",previous:{title:"Konfiguracja subdomeny Minecraft",permalink:"/pl/knowledgebase/game_servers/minecraft/setting_up_minecraft_subdomain"},next:{title:"Instalacja i korzystanie z klienta FTP FileZilla",permalink:"/pl/knowledgebase/game_servers/tutorial_filezilla_sftp"}},s={},p=[{value:"Wprowadzenie",id:"wprowadzenie",level:2},{value:"Przewodnik",id:"przewodnik",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"wprowadzenie"},"Wprowadzenie"),(0,a.kt)("p",null,"W tym przewodniku opisano szczeg\xf3\u0142owo, jak uzyska\u0107 nowy losowo przydzielony port dla serwera gier. Mo\u017ce to by\u0107 przydatne, je\u015bli kto\u015b nie chce zna\u0107 adresu IP/portu, a serwer ma pozosta\u0107 prywatny."),(0,a.kt)("h2",{id:"przewodnik"},"Przewodnik"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Prosz\u0119 przej\u015b\u0107 do swojego serwera w panelu",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/10Horizon%20Panel%20Servers.png",alt:"Strona serwer\xf3w Gamepanel"})))),(0,a.kt)("li",{parentName:"ol"},"Prosz\u0119 przej\u015b\u0107 do zak\u0142adki Sie\u0107 i utworzy\u0107 now\u0105 alokacj\u0119",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Creating%20Allocation.png",alt:"Strona sieciowa Gamepanel"})))),(0,a.kt)("li",{parentName:"ol"},"Prosz\u0119 ustawi\u0107 now\u0105 alokacj\u0119 jako podstawow\u0105",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Making%20Allocation%20Primary.png",alt:"Strona sieciowa Gamepanel"})))),(0,a.kt)("li",{parentName:"ol"},"Prosz\u0119 usun\u0105\u0107 star\u0105 alokacj\u0119",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Deleting%20Allocation.png",alt:"Strona sieciowa Gamepanel"})))),(0,a.kt)("li",{parentName:"ol"},"Prosz\u0119 potwierdzi\u0107 usuni\u0119cie",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/Removing%20Allocation.png",alt:"Usu\u0144 tryb alokacji"})))),(0,a.kt)("li",{parentName:"ol"},"Gotowe! Nowy adres IP mo\u017cna wy\u015bwietli\u0107 na stronie konsoli",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Changing%20port/New%20IP.png",alt:"Strona konsoli Gamepanel"}))))))}u.isMDXComponent=!0}}]);