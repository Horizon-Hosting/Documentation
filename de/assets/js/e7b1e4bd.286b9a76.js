"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[7124],{3905:(e,n,i)=>{i.d(n,{Zo:()=>m,kt:()=>p});var t=i(7294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=t.createContext({}),s=function(e){var n=t.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},m=function(e){var n=s(e.components);return t.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(i),p=r,f=c["".concat(d,".").concat(p)]||c[p]||u[p]||a;return i?t.createElement(f,l(l({ref:n},m),{},{components:i})):t.createElement(f,l({ref:n},m))}));function p(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=i[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,i)}c.displayName="MDXCreateElement"},5066:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var t=i(7462),r=(i(7294),i(3905));const a={id:"setting_up_minecraft_subdomain",title:"Einrichten einer Minecraft-Subdomain",description:"Wie Sie eine Sub-Domain f\xfcr Ihren Minecraft-Server erstellen und einrichten."},l=void 0,o={unversionedId:"game_servers/minecraft/setting_up_minecraft_subdomain",id:"game_servers/minecraft/setting_up_minecraft_subdomain",title:"Einrichten einer Minecraft-Subdomain",description:"Wie Sie eine Sub-Domain f\xfcr Ihren Minecraft-Server erstellen und einrichten.",source:"@site/i18n/de/docusaurus-plugin-content-docs-knowledgebase/current/game_servers/minecraft/setting_up_minecraft_subdomain.md",sourceDirName:"game_servers/minecraft",slug:"/game_servers/minecraft/setting_up_minecraft_subdomain",permalink:"/de/knowledgebase/game_servers/minecraft/setting_up_minecraft_subdomain",draft:!1,editUrl:"https://github.com/Horizon-Hosting/Documentation/edit/pre-release/knowledgebase/game_servers/minecraft/setting_up_minecraft_subdomain.md",tags:[],version:"current",frontMatter:{id:"setting_up_minecraft_subdomain",title:"Einrichten einer Minecraft-Subdomain",description:"Wie Sie eine Sub-Domain f\xfcr Ihren Minecraft-Server erstellen und einrichten."},sidebar:"tutorialSidebar",previous:{title:"Installing server mods",permalink:"/de/knowledgebase/game_servers/minecraft/installing_mods"},next:{title:"\xc4ndern des Ports auf einem Horizon Gameserver",permalink:"/de/knowledgebase/game_servers/tutorial_changing_port"}},d={},s=[{value:"Anforderungen",id:"anforderungen",level:2},{value:"Erstellen der Sub-Domain",id:"erstellen-der-sub-domain",level:2},{value:"Vorbedingung",id:"vorbedingung",level:3},{value:"Hinzuf\xfcgen der DNS-Eintr\xe4ge",id:"hinzuf\xfcgen-der-dns-eintr\xe4ge",level:3},{value:"Ein Rekord",id:"ein-rekord",level:4},{value:"SRV-Eintrag",id:"srv-eintrag",level:4},{value:"Gemeinsame Probleme",id:"gemeinsame-probleme",level:2},{value:"Kein Beitritt \xfcber die Sub-Dom\xe4ne m\xf6glich",id:"kein-beitritt-\xfcber-die-sub-dom\xe4ne-m\xf6glich",level:4}],m={toc:s};function u(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Minecraft-Server k\xf6nnen eine Subdomain erstellen und verwenden, die viel einfacher zu merken ist als eine IP-Adresse und ein Port."),(0,r.kt)("h2",{id:"anforderungen"},"Anforderungen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Eine registrierte Domain."),(0,r.kt)("li",{parentName:"ul"},"Ein Minecraft-Server."),(0,r.kt)("li",{parentName:"ul"},"Ein DNS-Anbieter. (Beispiel: ",(0,r.kt)("a",{parentName:"li",href:"https://www.cloudflare.com"},"Cloudflare"),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.namecheap.com"},"Namecheap"),", ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/dns/"},"Google Cloud DNS"),")")),(0,r.kt)("p",null,"*Hinweis: Sie k\xf6nnen f\xfcr dieses Tutorial keinen lokal gehosteten Minecraft-Server verwenden."),(0,r.kt)("h2",{id:"erstellen-der-sub-domain"},"Erstellen der Sub-Domain"),(0,r.kt)("h3",{id:"vorbedingung"},"Vorbedingung"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigieren Sie zur ",(0,r.kt)("a",{parentName:"li",href:"https://hrzn.link/panel"},"Spielkonsole")," und w\xe4hlen Sie den Server, den Sie verwenden m\xf6chten."),(0,r.kt)("li",{parentName:"ol"},"Suchen Sie die IP-Adresse und den Port des Servers, die sich auf der linken Seite des Server-Terminals befinden.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sie sollte in etwa so aussehen: ",(0,r.kt)("inlineCode",{parentName:"li"},"94.130.165.43:00000"),"."))),(0,r.kt)("li",{parentName:"ol"},"Notieren Sie sich die IP-Adresse und den Port, die Sie sp\xe4ter noch ben\xf6tigen.")),(0,r.kt)("h3",{id:"hinzuf\xfcgen-der-dns-eintr\xe4ge"},"Hinzuf\xfcgen der DNS-Eintr\xe4ge"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigieren Sie zu Ihrem DNS-Anbieter f\xfcr Ihre Domain, z.B. ",(0,r.kt)("a",{parentName:"li",href:"https://www.cloudflare.com"},"Cloudflare"),", und melden Sie sich an."),(0,r.kt)("li",{parentName:"ol"},'W\xe4hlen Sie Ihre Domain und gehen Sie zum Abschnitt "DNS".',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bitte beachten Sie, dass Ihr DNS-Anbieter dies m\xf6glicherweise an anderer Stelle gespeichert hat.")))),(0,r.kt)("h4",{id:"ein-rekord"},"Ein Rekord"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Klicken Sie im Abschnitt "DNS" auf die Schaltfl\xe4che "Eintrag hinzuf\xfcgen".'),(0,r.kt)("li",{parentName:"ol"},'W\xe4hlen Sie f\xfcr den Aufzeichnungstyp "A".'),(0,r.kt)("li",{parentName:"ol"},"Geben Sie f\xfcr den Datensatznamen ein, wie der Name der Sub-Domain lauten soll.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Beispiel: Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"play")," zeigt auf ",(0,r.kt)("inlineCode",{parentName:"li"},"play.ihredomain.com"),"."))),(0,r.kt)("li",{parentName:"ol"},"Geben Sie als IP-Adresse die IP-Adresse des Servers ein, die Sie zuvor kopiert haben.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Geben Sie in diesem Abschnitt nicht den Server-Port an, da dies dazu f\xfchrt, dass die Subdomain nicht richtig funktioniert."))),(0,r.kt)("li",{parentName:"ol"},"Es kann nach dem Proxy-Status und/oder der TTL-Zeit fragen, lassen Sie diese Werte unver\xe4ndert.")),(0,r.kt)("p",null,"Beispiel:\n",(0,r.kt)("img",{parentName:"p",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/A_record.png",alt:"Ein Rekordbeispiel"})),(0,r.kt)("h4",{id:"srv-eintrag"},"SRV-Eintrag"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Klicken Sie im Abschnitt "DNS" auf die Schaltfl\xe4che "Eintrag hinzuf\xfcgen".'),(0,r.kt)("li",{parentName:"ol"},"W\xe4hlen Sie als Datensatztyp ",(0,r.kt)("inlineCode",{parentName:"li"},"SRV"),"."),(0,r.kt)("li",{parentName:"ol"},"Geben Sie f\xfcr den Aufzeichnungsdienst ",(0,r.kt)("inlineCode",{parentName:"li"},"_minecraft")," ein."),(0,r.kt)("li",{parentName:"ol"},"F\xfcr das Aufzeichnungsprotokoll geben Sie ein oder w\xe4hlen Sie ",(0,r.kt)("inlineCode",{parentName:"li"},"_tcp.")),(0,r.kt)("li",{parentName:"ol"},"Geben Sie als Datensatznamen den Namen Ihrer Subdomain ein, zum Beispiel: ",(0,r.kt)("inlineCode",{parentName:"li"},"play"),"."),(0,r.kt)("li",{parentName:"ol"},"Geben Sie als Ziel des Datensatzes die vollst\xe4ndige Subdom\xe4ne ein, z.B.: ",(0,r.kt)("inlineCode",{parentName:"li"},"play.ihredomain.com"),"."),(0,r.kt)("li",{parentName:"ol"},"F\xfcr die Aufnahmepriorit\xe4t geben Sie ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," ein."),(0,r.kt)("li",{parentName:"ol"},"F\xfcr das Rekordgewicht geben Sie ",(0,r.kt)("inlineCode",{parentName:"li"},"5")," ein."),(0,r.kt)("li",{parentName:"ol"},'Geben Sie f\xfcr den Datensatz-Port den Port ein, der mit Ihrem Server verbunden ist, zum Beispiel: "25560".'),(0,r.kt)("li",{parentName:"ol"},"Belassen Sie die TTL f\xfcr die Aufzeichnung auf der Standardeinstellung oder der niedrigstm\xf6glichen Option.")),(0,r.kt)("p",null,"Beispiel:\n",(0,r.kt)("img",{parentName:"p",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/SRV_record.png",alt:"SRV-Eintrag Beispiel"})),(0,r.kt)("h2",{id:"gemeinsame-probleme"},"Gemeinsame Probleme"),(0,r.kt)("h4",{id:"kein-beitritt-\xfcber-die-sub-dom\xe4ne-m\xf6glich"},"Kein Beitritt \xfcber die Sub-Dom\xe4ne m\xf6glich"),(0,r.kt)("p",null,"Wenn Sie nicht in der Lage sind, dem Server beizutreten, nachdem Sie alles in Ihren DNS-Eintr\xe4gen korrekt konfiguriert haben, m\xfcssen Sie Ihrem DNS-Anbieter bis zu 72 Stunden Zeit geben, um die Daten vollst\xe4ndig zu \xfcbertragen."))}u.isMDXComponent=!0}}]);