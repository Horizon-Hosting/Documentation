"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[7754],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={id:"simple_voice_chat",title:"Simple Voice Chat Setup",description:"How to install Simple Voice Chat on your Minecraft server."},o=void 0,l={unversionedId:"game_servers/minecraft/plugins/simple_voice_chat",id:"game_servers/minecraft/plugins/simple_voice_chat",title:"Simple Voice Chat Setup",description:"How to install Simple Voice Chat on your Minecraft server.",source:"@site/knowledgebase/game_servers/minecraft/plugins/simple_voice_chat.md",sourceDirName:"game_servers/minecraft/plugins",slug:"/game_servers/minecraft/plugins/simple_voice_chat",permalink:"/it/knowledgebase/game_servers/minecraft/plugins/simple_voice_chat",draft:!1,editUrl:"https://github.com/Horizon-Hosting/Documentation/edit/pre-release/knowledgebase/game_servers/minecraft/plugins/simple_voice_chat.md",tags:[],version:"current",frontMatter:{id:"simple_voice_chat",title:"Simple Voice Chat Setup",description:"How to install Simple Voice Chat on your Minecraft server."},sidebar:"tutorialSidebar",previous:{title:"Dynmap Setup",permalink:"/it/knowledgebase/game_servers/minecraft/plugins/dynmap"},next:{title:"Changing the server Icon",permalink:"/it/knowledgebase/game_servers/minecraft/changing_server_icon"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Setup Guide",id:"setup-guide",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A proximity voice chat for Minecraft. You can choose between push to talk (PTT) or voice activation. The default PTT key is ",(0,i.kt)("inlineCode",{parentName:"p"},"CAPS LOCK"),", but it can be changed in the key bind settings. You can access the voice chat settings by pressing the ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," key."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("a",{parentName:"li",href:"https://modrinth.com/plugin/simple-voice-chat/versions"},"download page")," for Simple Voice Chat"),(0,i.kt)("li",{parentName:"ol"},"Locate the latest version that supports your server version and type and download the ",(0,i.kt)("inlineCode",{parentName:"li"},"voicechat-*.jar")," file"),(0,i.kt)("li",{parentName:"ol"},"Once obtaining the Simple Voice Chat jar file you can upload it to your Minecraft server using either the pterodactyl file manager or a SFTP client like ",(0,i.kt)("a",{parentName:"li",href:"/knowledgebase/game_servers/tutorial_filezilla_sftp"},"FileZilla.")),(0,i.kt)("li",{parentName:"ol"},"Upload the plugin file inside the relevant directory either ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"mods")),(0,i.kt)("li",{parentName:"ol"},"After uploading the jar file you can go back to the console tab and restart the server")),(0,i.kt)("h2",{id:"setup-guide"},"Setup Guide"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to your server on the panel"),(0,i.kt)("li",{parentName:"ol"},"Stop the server inside the console tab of your server"),(0,i.kt)("li",{parentName:"ol"},"Navigate to Network, and create a new allocation"),(0,i.kt)("li",{parentName:"ol"},"Note down the IP Address and Port of the new allocation you just created"),(0,i.kt)("li",{parentName:"ol"},"Using either the pterodactyl file manager or a SFTP client like ",(0,i.kt)("a",{parentName:"li",href:"/knowledgebase/game_servers/tutorial_filezilla_sftp"},"FileZilla.")," locate the ",(0,i.kt)("inlineCode",{parentName:"li"},"voicechat")," folder inside of the ",(0,i.kt)("inlineCode",{parentName:"li"},"plugins")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"mods")," folder"),(0,i.kt)("li",{parentName:"ol"},"Locate and open the ",(0,i.kt)("inlineCode",{parentName:"li"},"voicechat-server.properties")," file"),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"voicechat-server.properties")," find the line that says ",(0,i.kt)("inlineCode",{parentName:"li"},"port=24454")," and replace this with ",(0,i.kt)("inlineCode",{parentName:"li"},"port=<port from step 4>")),(0,i.kt)("li",{parentName:"ol"},"Save changes to the ",(0,i.kt)("inlineCode",{parentName:"li"},"voicechat-server.properties")),(0,i.kt)("li",{parentName:"ol"},"Go back to the console tab on your server and click ",(0,i.kt)("strong",{parentName:"li"},"start"))))}m.isMDXComponent=!0}}]);