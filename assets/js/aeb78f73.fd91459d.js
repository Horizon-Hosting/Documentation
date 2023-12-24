"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[6049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?l.createElement(g,r(r({ref:t},u),{},{components:n})):l.createElement(g,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));const i={id:"tutorial_filezilla_sftp",title:"Installing and Using FileZilla FTP Client",description:"How to download and Install FileZilla, and use it to transfer files to your server."},r=void 0,o={unversionedId:"game_servers/tutorial_filezilla_sftp",id:"game_servers/tutorial_filezilla_sftp",title:"Installing and Using FileZilla FTP Client",description:"How to download and Install FileZilla, and use it to transfer files to your server.",source:"@site/knowledgebase/game_servers/tutorial_filezilla_sftp.md",sourceDirName:"game_servers",slug:"/game_servers/tutorial_filezilla_sftp",permalink:"/knowledgebase/game_servers/tutorial_filezilla_sftp",draft:!1,editUrl:"https://github.com/Horizon-Hosting/Documentation/edit/pre-release/knowledgebase/game_servers/tutorial_filezilla_sftp.md",tags:[],version:"current",frontMatter:{id:"tutorial_filezilla_sftp",title:"Installing and Using FileZilla FTP Client",description:"How to download and Install FileZilla, and use it to transfer files to your server."},sidebar:"tutorialSidebar",previous:{title:"Changing the port on a Horizon gameserver",permalink:"/knowledgebase/game_servers/tutorial_changing_port"},next:{title:"\ud83c\udf10 Web Servers",permalink:"/knowledgebase/category/-web-servers"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"FileZilla Setup",id:"filezilla-setup",level:2},{value:"Downloading and Installing FileZilla",id:"downloading-and-installing-filezilla",level:3},{value:"Connecting to your server",id:"connecting-to-your-server",level:3},{value:"Video",id:"video",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This guide details how to use SFTP with the Horizon Hosting gamepanel. This can be advantageous as SFTP allows for ",(0,a.kt)("strong",{parentName:"p"},"faster"),", ",(0,a.kt)("strong",{parentName:"p"},"bulk")," file transfer. However, it is not as intuitive as using the gamepanel's inbuilt file manager. This guide details how to install and setup ",(0,a.kt)("strong",{parentName:"p"},"FileZilla"),", a popular SFTP client. There is also a video available at the bottom of this page."),(0,a.kt)("p",null,"SFTP is a variant of the ",(0,a.kt)("strong",{parentName:"p"},"File Transfer Protocol")," (FTP) that allows for secure transfer. These days, SFTP is generally preferred."),(0,a.kt)("h2",{id:"filezilla-setup"},"FileZilla Setup"),(0,a.kt)("h3",{id:"downloading-and-installing-filezilla"},"Downloading and Installing FileZilla"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the ",(0,a.kt)("a",{parentName:"li",href:"https://filezilla-project.org/download.php"},"FileZilla Client download page")),(0,a.kt)("li",{parentName:"ol"},'Click "Download FileZilla Client"'),(0,a.kt)("li",{parentName:"ol"},"Run the downloaded file",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/1FileZilla%20Download.png",alt:"FileZilla downloads page"})))),(0,a.kt)("li",{parentName:"ol"},'If prompted, click "Yes" on the User Account Control prompt.',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/2Windows%20Prompt.png",alt:"User Account Control prompt, with Yes highlighted"})))),(0,a.kt)("li",{parentName:"ol"},"Agree with the license agreement",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/3Installer%20Accept.png",alt:"License Agreement page of the FileZilla installer"})))),(0,a.kt)("li",{parentName:"ol"},"Decline the optional offer"),(0,a.kt)("li",{parentName:"ol"},"Click next",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/4Installer%20Decline%20Offer.png",alt:"Optional Offer page, with decline option selected"})))),(0,a.kt)("li",{parentName:"ol"},"Select who you would like FileZilla to be installed for."),(0,a.kt)("li",{parentName:"ol"},"Click next",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/5Installation%20Options.png",alt:"Installation Options"})))),(0,a.kt)("li",{parentName:"ol"},"Select which components you want. Gernally, the default selection is okay. If you would like a FileZilla icon on your desktop, select this option."),(0,a.kt)("li",{parentName:"ol"},"Click next",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/6Installer%20Components.png",alt:"FileZilla Components"})))),(0,a.kt)("li",{parentName:"ol"},"Choose a folder to install FileZilla to. Changing this is not neccessary"),(0,a.kt)("li",{parentName:"ol"},"Click next",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/7Installer%20Install%20Location.png",alt:"Install Location"})))),(0,a.kt)("li",{parentName:"ol"},"Click install",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/8Installer%20Start%20Menu%20Folder.png",alt:"Start menu folder"})))),(0,a.kt)("li",{parentName:"ol"},"Once the install is complete, click finish",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/9Installer%20Completion.png",alt:"Install complete"}))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"FileZilla is now installed.")),(0,a.kt)("h3",{id:"connecting-to-your-server"},"Connecting to your server"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to your server on the panel",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/10Horizon%20Panel%20Servers.png",alt:"Gamepanel servers page"})))),(0,a.kt)("li",{parentName:"ol"},"Go to settings, and view the SFTP details",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/11Horizon%20Panel%20Server%20Settings.png",alt:"Gamepanel settings page"})))),(0,a.kt)("li",{parentName:"ol"},'Copy the server address, and paste it into the "Host" section on FileZilla'),(0,a.kt)("li",{parentName:"ol"},'Copy the username, and paste it into the "Username" section on FileZilla',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/12Horizon%20Panel%20SFTP%20Details.png",alt:"Server page, with SFTP details highlighted"})),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("img",{parentName:"li",src:"https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/13FileZilla%20Connection%20Details.png",alt:"FileZilla UI, with Host and Username sections highlighted"})))),(0,a.kt)("li",{parentName:"ol"},"Enter your password - this is the same password you use to login to the panel"),(0,a.kt)("li",{parentName:"ol"},"Leave the port blank - this will be filled in automatically"),(0,a.kt)("li",{parentName:"ol"},'Click "Quickconnect"')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You should now be connected to your server.")," The remote server files should be shown on the right-hand side. "),(0,a.kt)("p",null,"If you do not see the files, or see errors in the status box, please check your password or ",(0,a.kt)("a",{parentName:"p",href:"https://hrzn.link/getting_support"},"contact us")," for further support."),(0,a.kt)("h2",{id:"video"},"Video"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Ex3IiPE1Eg8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Ex3IiPE1Eg8"},"Watch this video on YouTube")))}c.isMDXComponent=!0}}]);