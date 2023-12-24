"use strict";(self.webpackChunkknowledgebase=self.webpackChunkknowledgebase||[]).push([[2813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||s;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const s={id:"setting_up_prometheus",title:"Setting Up Prometheus",description:"Setting up Prometheus for new nodes."},a=void 0,i={unversionedId:"internal/infrastructure/setting_up_prometheus",id:"internal/infrastructure/setting_up_prometheus",title:"Setting Up Prometheus",description:"Setting up Prometheus for new nodes.",source:"@site/docs/internal/infrastructure/setting_up_prometheus.md",sourceDirName:"internal/infrastructure",slug:"/internal/infrastructure/setting_up_prometheus",permalink:"/sv/docs/internal/infrastructure/setting_up_prometheus",draft:!1,tags:[],version:"current",frontMatter:{id:"setting_up_prometheus",title:"Setting Up Prometheus",description:"Setting up Prometheus for new nodes."},sidebar:"defaultSidebar",previous:{title:"Authentication",permalink:"/sv/docs/internal/infrastructure/authentication"},next:{title:"Archive",permalink:"/sv/docs/internal/Archive"}},l={},u=[{value:"Create User",id:"create-user",level:3},{value:"Download Files",id:"download-files",level:3},{value:"Configure Systemd",id:"configure-systemd",level:3},{value:"Start, Test and Enable Service",id:"start-test-and-enable-service",level:2},{value:"\u2139 If the <code>sudo systemctl status node_exporter</code> command shows <code>Active: failed...</code> then please report the logs to the development team.",id:"\u2139-if-the-sudo-systemctl-status-node_exporter-command-shows-active-failed-then-please-report-the-logs-to-the-development-team",level:4},{value:"Adding to Prometheus",id:"adding-to-prometheus",level:4}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This is a ",(0,o.kt)("strong",{parentName:"p"},"Horizon Hosting Specific")," document! It can be used by others as a guide, but is only intended for internal use.")),(0,o.kt)("h3",{id:"create-user"},"Create User"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd /\nsudo useradd --system --shell /bin/false node_exporter\n")),(0,o.kt)("h3",{id:"download-files"},"Download Files"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://github.com/prometheus/node_exporter/releases/download/v1.3.1/node_exporter-1.3.1.linux-amd64.tar.gz \\\n  | sudo tar -zxvf - -C /usr/local/bin --strip-components=1 node_exporter-1.3.1.linux-amd64/node_exporter \\\n  && sudo chown node_exporter:node_exporter /usr/local/bin/node_exporter\n")),(0,o.kt)("h3",{id:"configure-systemd"},"Configure Systemd"),(0,o.kt)("p",null,"Create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"node_exporter.service")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/")," with the contents below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Node Exporter\n# ----------------------------------\n\n[Unit]\nDescription=Node Exporter\n\n[Service]\nUser=node_exporter\nGroup=node_exporter\nEnvironmentFile=-/etc/sysconfig/node_exporter\nExecStart=/usr/local/bin/node_exporter $OPTIONS\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("h2",{id:"start-test-and-enable-service"},"Start, Test and Enable Service"),(0,o.kt)("h4",{id:"\u2139-if-the-sudo-systemctl-status-node_exporter-command-shows-active-failed-then-please-report-the-logs-to-the-development-team"},"\u2139 If the ",(0,o.kt)("inlineCode",{parentName:"h4"},"sudo systemctl status node_exporter")," command shows ",(0,o.kt)("inlineCode",{parentName:"h4"},"Active: failed...")," then please report the logs to the development team."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload && \\\nsudo systemctl start node_exporter && \\\nsudo systemctl status node_exporter && \\\nsudo systemctl enable node_exporter\n")),(0,o.kt)("h4",{id:"adding-to-prometheus"},"Adding to Prometheus"),(0,o.kt)("p",null,"This is a ",(0,o.kt)("strong",{parentName:"p"},"stub"),"!"))}p.isMDXComponent=!0}}]);