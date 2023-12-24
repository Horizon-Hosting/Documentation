"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[4461],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>f});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?t.createElement(m,i(i({ref:n},u),{},{components:r})):t.createElement(m,i({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9573:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(7462),a=(r(7294),r(3905));const o={id:"using_ftp",title:"Conceptos b\xe1sicos de la transferencia de archivos",description:"Respuesta a todas las preguntas frecuentes en torno al FTP."},i=void 0,l={unversionedId:"general/using_ftp",id:"general/using_ftp",title:"Conceptos b\xe1sicos de la transferencia de archivos",description:"Respuesta a todas las preguntas frecuentes en torno al FTP.",source:"@site/i18n/es/docusaurus-plugin-content-docs-knowledgebase/current/general/using_ftp.md",sourceDirName:"general",slug:"/general/using_ftp",permalink:"/es/knowledgebase/general/using_ftp",draft:!1,editUrl:"https://github.com/Horizon-Hosting/Documentation/edit/pre-release/knowledgebase/general/using_ftp.md",tags:[],version:"current",frontMatter:{id:"using_ftp",title:"Conceptos b\xe1sicos de la transferencia de archivos",description:"Respuesta a todas las preguntas frecuentes en torno al FTP."},sidebar:"tutorialSidebar",previous:{title:"\u2728 General",permalink:"/es/knowledgebase/category/-general"},next:{title:"\ud83d\udcb0 Billing",permalink:"/es/knowledgebase/category/-billing"}},s={},c=[{value:"\xbfQu\xe9 es el FTP?",id:"qu\xe9-es-el-ftp",level:2},{value:"Encontrar su host FTP e informaci\xf3n",id:"encontrar-su-host-ftp-e-informaci\xf3n",level:2},{value:"Conect\xe1ndose a su servidor FTP",id:"conect\xe1ndose-a-su-servidor-ftp",level:2},{value:"FileZilla",id:"filezilla",level:3}],u={toc:c};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"qu\xe9-es-el-ftp"},"\xbfQu\xe9 es el FTP?"),(0,a.kt)("p",null,"FTP es un protocolo de uso com\xfan que le permite mover archivos y carpetas desde su PC directamente a su servidor."),(0,a.kt)("p",null,"Algunos ejemplos de c\xf3mo podr\xeda utilizarse el FTP:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Transporte de carpetas"),(0,a.kt)("li",{parentName:"ul"},"Carga de archivos ZIP"),(0,a.kt)("li",{parentName:"ul"},"Edici\xf3n de archivos de texto y de configuraci\xf3n")),(0,a.kt)("h2",{id:"encontrar-su-host-ftp-e-informaci\xf3n"},"Encontrar su host FTP e informaci\xf3n"),(0,a.kt)("p",null,"En nuestra p\xe1gina de inicio ",(0,a.kt)("a",{parentName:"p",href:"https://hrzn.link/cpanel"},"cPanel"),', hay un cuadro de "Informaci\xf3n general" a la derecha.\nEl host ser\xeda la IP compartida.\nEl puerto siempre ser\xe1 el 21 para FTP.\nEl nombre de usuario y la contrase\xf1a se pueden crear en la secci\xf3n de cuentas FTP.\nAseg\xfarese de eliminar el texto de la casilla Directorio, ya que limitar\xe1 su acceso a los archivos.'),(0,a.kt)("p",null,"En la p\xe1gina de nuestro servidor ",(0,a.kt)("a",{parentName:"p",href:"https://hrzn.link/panel"},"Panel de juego"),', hay una pesta\xf1a "Configuraci\xf3n" en la parte izquierda.\nEn el cuadro DETALLES SFTP, puede encontrar el host y el puerto en el cuadro DIRECCI\xd3N DEL SERVIDOR y copiarlos haciendo clic con el bot\xf3n izquierdo.\nEl nombre de usuario se encuentra simularmente en la casilla USERNAME y puede copiarse con un clic izquierdo.\nLa contrase\xf1a es la misma que la de su cuenta del panel.'),(0,a.kt)("h2",{id:"conect\xe1ndose-a-su-servidor-ftp"},"Conect\xe1ndose a su servidor FTP"),(0,a.kt)("p",null,"La conexi\xf3n a un servidor FTP requiere alg\xfan tipo de cliente FTP."),(0,a.kt)("p",null,"Algunos que recomendamos son ",(0,a.kt)("a",{parentName:"p",href:"https://filezilla-project.org/download.php?type=client"},"Cliente FileZilla")," y ",(0,a.kt)("a",{parentName:"p",href:"https://winscp.net/eng/download.php"},"Cliente WinSCP")),(0,a.kt)("h3",{id:"filezilla"},"FileZilla"),(0,a.kt)("p",null,'En el caso de Filezilla, puede introducir la informaci\xf3n FTP en la barra de conexi\xf3n r\xe1pida de la parte superior de la ventana o guardarla como "Sitio" utilizando el "Gestor de sitios".\nAseg\xfarese de seleccionar el protocolo correcto si lo guarda como "Sitio".\nDeje el tipo de inicio de sesi\xf3n como normal e introduzca la informaci\xf3n y luego seleccione conectar.'))}p.isMDXComponent=!0}}]);