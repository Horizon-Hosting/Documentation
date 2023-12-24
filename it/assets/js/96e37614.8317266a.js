"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[9975],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var l=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,i=function(e,t){if(null==e)return{};var a,l,i={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=l.createContext({}),c=function(e){var t=l.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return l.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=i,b=d["".concat(r,".").concat(m)]||d[m]||u[m]||n;return a?l.createElement(b,s(s({ref:t},p),{},{components:a})):l.createElement(b,s({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=d;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6939:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var l=a(7462),i=(a(7294),a(3905));const n={id:"cobalt_essentials_installation",title:"Installazione di Cobalt Essentials",description:"Cosa sono Cobalt Essentials e Cobalt Essentials Interface e come si installano?"},s=void 0,o={unversionedId:"game_servers/beammp/cobalt_essentials/cobalt_essentials_installation",id:"game_servers/beammp/cobalt_essentials/cobalt_essentials_installation",title:"Installazione di Cobalt Essentials",description:"Cosa sono Cobalt Essentials e Cobalt Essentials Interface e come si installano?",source:"@site/i18n/it/docusaurus-plugin-content-docs-knowledgebase/current/game_servers/beammp/cobalt_essentials/cobalt_essentials_installation.md",sourceDirName:"game_servers/beammp/cobalt_essentials",slug:"/game_servers/beammp/cobalt_essentials/cobalt_essentials_installation",permalink:"/it/knowledgebase/game_servers/beammp/cobalt_essentials/cobalt_essentials_installation",draft:!1,editUrl:"https://github.com/Horizon-Hosting/Documentation/edit/pre-release/knowledgebase/game_servers/beammp/cobalt_essentials/cobalt_essentials_installation.md",tags:[],version:"current",frontMatter:{id:"cobalt_essentials_installation",title:"Installazione di Cobalt Essentials",description:"Cosa sono Cobalt Essentials e Cobalt Essentials Interface e come si installano?"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd27 Cobalt Essentials",permalink:"/it/knowledgebase/category/-cobalt-essentials"},next:{title:"How to change Cobalt Essentials' Vehicle Limit",permalink:"/it/knowledgebase/game_servers/beammp/cobalt_essentials/tutorial_vehicle_limits"}},r={},c=[{value:"Cobalto Essenziale (CE)",id:"cobalto-essenziale-ce",level:2},{value:"Che cos&#39;\xe8 Cobalto Essentials?",id:"che-cos\xe8-cobalto-essentials",level:3},{value:"Requisiti",id:"requisiti",level:3},{value:"Installazione",id:"installazione",level:3},{value:"Pannello di hosting HRZN",id:"pannello-di-hosting-hrzn",level:4},{value:"Interfaccia Cobalto Essentials (CEI)",id:"interfaccia-cobalto-essentials-cei",level:2},{value:"Che cos&#39;\xe8 la CEI?",id:"che-cos\xe8-la-cei",level:3},{value:"Requisiti",id:"requisiti-1",level:3},{value:"Installazione",id:"installazione-1",level:3},{value:"Pannello di hosting HRZN",id:"pannello-di-hosting-hrzn-1",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cobalto-essenziale-ce"},"Cobalto Essenziale (CE)"),(0,i.kt)("h3",{id:"che-cos\xe8-cobalto-essentials"},"Che cos'\xe8 Cobalto Essentials?"),(0,i.kt)("p",null,'Cobalt Essentials \xe8 un plugin di amministrazione basato sulla chat, che aggiunge "elementi essenziali" al suo server.\nSi tratta di un sistema modulare di gestione dei permessi e del server, il che significa che pu\xf2 ottenere dei componenti aggiuntivi per estendere le sue funzionalit\xe0!'),(0,i.kt)("p",null,"\xc8 stato scritto da ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prestonelam2003"},"Preston")," e dalla comunit\xe0 open source, ed \xe8 disponibile per il download su ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prestonelam2003/CobaltEssentials"},"GitHub"),".\nHanno anche un ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/UV74wNXKdz"},"server Discord")," per l'assistenza e altre richieste."),(0,i.kt)("h3",{id:"requisiti"},"Requisiti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Un server BeamMP con la versione ",(0,i.kt)("inlineCode",{parentName:"li"},"3.x.x"),".")),(0,i.kt)("h3",{id:"installazione"},"Installazione"),(0,i.kt)("h4",{id:"pannello-di-hosting-hrzn"},"Pannello di hosting HRZN"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Vada al suo server BeamMP sul nostro ",(0,i.kt)("a",{parentName:"li",href:"https://hrzn.link/panel"},"pannello di gioco"),"."),(0,i.kt)("li",{parentName:"ol"},'Clicchi sull\'opzione "Mods" della barra laterale.'),(0,i.kt)("li",{parentName:"ol"},'Clicchi su installa per "Cobalt Essentials". Se non lo vede, la preghiamo di ',(0,i.kt)("a",{parentName:"li",href:"/knowledgebase/getting_support"},"contattare l'assistenza"),"."),(0,i.kt)("li",{parentName:"ol"},'Riavvii il suo server BeamMP nella scheda "Console".')),(0,i.kt)("p",null,"Manuale ####"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Scarichi il ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/prestonelam2003/CobaltEssentials/archive/refs/heads/master.zip"},"File ZIP Cobalt Essentials"),"."),(0,i.kt)("li",{parentName:"ol"},"Sposti/carichi lo ZIP scaricato nella sua cartella ",(0,i.kt)("inlineCode",{parentName:"li"},"Resources/Server"),"."),(0,i.kt)("li",{parentName:"ol"},"Decomprima il file l\xec."),(0,i.kt)("li",{parentName:"ol"},"Riavvii il suo server.")),(0,i.kt)("h2",{id:"interfaccia-cobalto-essentials-cei"},"Interfaccia Cobalto Essentials (CEI)"),(0,i.kt)("h3",{id:"che-cos\xe8-la-cei"},"Che cos'\xe8 la CEI?"),(0,i.kt)("p",null,"CEI \xe8 un'interfaccia di gioco per CE. Consente al personale di amministrazione del server di utilizzare un'interfaccia semplice, anzich\xe9 l'elenco dei comandi della chat.\n\xc8 stato scritto da ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/StanleyDudek"},"Stanley Dudek")," ed \xe8 disponibile per il download su ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/StanleyDudek/CobaltEssentialsInterface"},"GitHub"),"."),(0,i.kt)("h3",{id:"requisiti-1"},"Requisiti"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Un server BeamMP con la versione ",(0,i.kt)("inlineCode",{parentName:"li"},"3.x.x"),"."),(0,i.kt)("li",{parentName:"ul"},"Cobalt Essentials gi\xe0 installato")),(0,i.kt)("h3",{id:"installazione-1"},"Installazione"),(0,i.kt)("h4",{id:"pannello-di-hosting-hrzn-1"},"Pannello di hosting HRZN"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Vada al suo server BeamMP sul nostro ",(0,i.kt)("a",{parentName:"li",href:"https://hrzn.link/panel"},"pannello di gioco"),"."),(0,i.kt)("li",{parentName:"ol"},'Clicchi sull\'opzione "Mods" della barra laterale.'),(0,i.kt)("li",{parentName:"ol"},'Clicchi su installa per "Interfaccia Cobalt Essentials". Se non la vede, la preghiamo di ',(0,i.kt)("a",{parentName:"li",href:"/knowledgebase/getting_support"},"contattare l'assistenza"),"."),(0,i.kt)("li",{parentName:"ol"},'Riavvii il suo server BeamMP nella scheda "Console".')),(0,i.kt)("p",null,"Manuale ####"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/StanleyDudek/CobaltEssentialsInterface/releases"},"Scarica CEI")," cliccando su ",(0,i.kt)("inlineCode",{parentName:"li"},"Cobalt_Essentials_Interface_...zip"),"."),(0,i.kt)("li",{parentName:"ol"},"Carichi lo ZIP nella root (",(0,i.kt)("inlineCode",{parentName:"li"},'"/"'),", dove si trova l'eseguibile di BeamMP-Server) del suo server."),(0,i.kt)("li",{parentName:"ol"},"Disarchivi il file ZIP."),(0,i.kt)("li",{parentName:"ol"},"Apra il file ",(0,i.kt)("inlineCode",{parentName:"li"},"Resources\\Server\\CobaltEssentials\\LoadExtensions.cfg")," e aggiunga ",(0,i.kt)("inlineCode",{parentName:"li"},'CEI = "CEI"')," in fondo."),(0,i.kt)("li",{parentName:"ol"},"Riavvii il suo server")),(0,i.kt)("p",null,"Per aprire la CEI, esegua il comando ",(0,i.kt)("inlineCode",{parentName:"p"},"/CEI")," in chat!"))}u.isMDXComponent=!0}}]);