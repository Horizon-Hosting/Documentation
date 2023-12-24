"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[6164],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>p});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(t),p=a,v=c["".concat(i,".").concat(p)]||c[p]||m[p]||o;return t?n.createElement(v,s(s({ref:r},d),{},{components:t})):n.createElement(v,s({ref:r},d))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=c;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3073:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=t(7462),a=(t(7294),t(3905));const o={id:"gameserver_login_tokens",title:"Obtenir et installer un jeton de serveur de jeux (jeton GSL)",description:"Comment authentifier votre serveur dans la liste des serveurs \xe0 l'aide d'un jeton GSL ?"},s=void 0,l={unversionedId:"game_servers/garrys_mod/gameserver_login_tokens",id:"game_servers/garrys_mod/gameserver_login_tokens",title:"Obtenir et installer un jeton de serveur de jeux (jeton GSL)",description:"Comment authentifier votre serveur dans la liste des serveurs \xe0 l'aide d'un jeton GSL ?",source:"@site/i18n/fr/docusaurus-plugin-content-docs-knowledgebase/current/game_servers/garrys_mod/gameserver_login_tokens.md",sourceDirName:"game_servers/garrys_mod",slug:"/game_servers/garrys_mod/gameserver_login_tokens",permalink:"/fr/knowledgebase/game_servers/garrys_mod/gameserver_login_tokens",draft:!1,editUrl:"https://github.com/Horizon-Hosting/Documentation/edit/pre-release/knowledgebase/game_servers/garrys_mod/gameserver_login_tokens.md",tags:[],version:"current",frontMatter:{id:"gameserver_login_tokens",title:"Obtenir et installer un jeton de serveur de jeux (jeton GSL)",description:"Comment authentifier votre serveur dans la liste des serveurs \xe0 l'aide d'un jeton GSL ?"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\udd21 Garry's Mod",permalink:"/fr/knowledgebase/category/-garrys-mod"},next:{title:"Installation des modules compl\xe9mentaires",permalink:"/fr/knowledgebase/game_servers/garrys_mod/installing_addons"}},i={},u=[{value:"Cr\xe9ation et installation d&#39;un jeton de connexion au serveur de jeux",id:"cr\xe9ation-et-installation-dun-jeton-de-connexion-au-serveur-de-jeux",level:2},{value:"D\xe9pannage",id:"d\xe9pannage",level:2}],d={toc:u};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tous les serveurs Garry's Mod peuvent \xeatre affich\xe9s publiquement dans la liste des serveurs Garry's Mod. Pour ce faire, un GSLT doit \xeatre install\xe9 sur le serveur."),(0,a.kt)("h2",{id:"cr\xe9ation-et-installation-dun-jeton-de-connexion-au-serveur-de-jeux"},"Cr\xe9ation et installation d'un jeton de connexion au serveur de jeux"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Allez dans la zone ",(0,a.kt)("a",{parentName:"li",href:"https://steamcommunity.com/dev/managegameservers"},"Manage Game Servers")," sur le site Web de steam et connectez-vous."),(0,a.kt)("li",{parentName:"ol"},"Localisez l'option \"Cr\xe9er un nouveau compte de serveur de jeu\" en bas de l'\xe9cran."),(0,a.kt)("li",{parentName:"ol"},"Saisissez l'App ID pour Garry's Mod (4000) ainsi qu'un m\xe9mo pour vous souvenir du serveur auquel il est destin\xe9. Par exemple, \"DarkRP Server\""),(0,a.kt)("li",{parentName:"ol"},'Copiez le "Login Token" dans la liste des comptes de serveur de jeu.'),(0,a.kt)("li",{parentName:"ol"},"Allez dans le ",(0,a.kt)("a",{parentName:"li",href:"https://hrzn.link/panel"},"Game Panel")," et allez sur votre serveur."),(0,a.kt)("li",{parentName:"ol"},'Dans la section de d\xe9marrage, collez le jeton du serveur de jeux dans la case "STEAM ACCOUNT TOKEN".'),(0,a.kt)("li",{parentName:"ol"},"Red\xe9marrez le serveur et le serveur devrait maintenant s'autoriser avec la liste des serveurs.")),(0,a.kt)("h2",{id:"d\xe9pannage"},"D\xe9pannage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Veillez \xe0 utiliser un jeton par serveur, car l'utilisation d'un jeton pour plusieurs serveurs entra\xeenera des probl\xe8mes d'authentification qui conduiront \xe0 l'exclusion de vos joueurs."),(0,a.kt)("li",{parentName:"ul"},"Si un Token GSL n'est pas utilis\xe9 pendant une longue p\xe9riode, il expirera et vous obtiendrez ce message lorsque vous essayerez de lancer le serveur. Impossible d'\xe9tablir une connexion avec les serveurs Steam. (jeton GSL expir\xe9)`.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Pour r\xe9soudre ce probl\xe8me, vous devez retourner sur ",(0,a.kt)("a",{parentName:"li",href:"https://steamcommunity.com/dev/managegameservers"},"Manage Game Server"),' et choisir "Regenerate Token" sur le token que vous souhaitez utiliser. Ensuite, vous pouvez prendre le nouveau jeton g\xe9n\xe9r\xe9 et l\'installer sur votre serveur.')))))}m.isMDXComponent=!0}}]);