(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("NmYn"),c=a.n(l),o=a("Wbzz"),i=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,l=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=l.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,l=r.baseUrl,c=r.subDirectory,i=l+"/edit/"+r.branch+c+"/src/pages"+t;return l?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),T=a("I8xM"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),l=a===r,i=new RegExp(r+"/?(#.*)?$"),b=n.replace(i,a);return Object(p.b)("li",{key:e,className:d()((t={},t[T.selectedItem]=l,t),T.listItem)},Object(p.b)(o.Link,{className:T.link,to:""+b},e))}));return Object(p.b)("div",{className:T.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:T.list},l))))))},t}(r.a.Component),k=a("MjG9"),v=a("CzIb"),w=a("Asxa"),y=a("OIbQ"),N=a.n(y),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:N.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,l=t.frontmatter,s=void 0===l?{}:l,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,f=s.theme,T=s.description,w=s.keywords,y=s.date,N=Object(v.a)().interiorTheme,I=Object(o.useStaticQuery)("2456312558").site.pathPrefix,E=I?n.pathname.replace(I,""):n.pathname,C=m?E.split("/").filter(Boolean).slice(-1)[0]||c()(m[0],{lower:!0}):"",L=f||N;return Object(p.b)(b.a,{tabs:m,homepage:!1,theme:L,pageTitle:g,pageDescription:T,pageKeywords:w,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:L}),m&&Object(p.b)(h,{title:g,slug:E,tabs:m,currentTab:C}),Object(p.b)(k.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d}),Object(p.b)(P,{date:y})),Object(p.b)(j.a,{pageContext:t,location:n,slug:E,tabs:m,currentTab:C}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},IaTu:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),c=a("013z"),o=(a("qKvR"),["components"]),i={},b={_frontmatter:i},s=c.a;function d(e){var t=e.components,a=Object(r.a)(e,o);return Object(l.b)(s,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"Problem"),Object(l.b)("p",null,"Setup minikube"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"minikube start --network-plugin=cni\nkubectl apply -f https://docs.projectcalico.org/v3.9/manifests/calico.yaml\nkubectl -n kube-system set env daemonset/calico-node FELIX_IGNORELOOSERPF=true\nkubectl -n kube-system get pods | grep calico-node\n")),Object(l.b)("p",null,"Create secured pod"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: network-policy-secure-pod\n  labels:\n    app: secure-app\nspec:\n  containers:\n  - name: nginx\n    image: bitnami/nginx\n    ports:\n    - containerPort: 8080\n")),Object(l.b)("p",null,"Create client pod"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: network-policy-client-pod\nspec:\n  containers:\n  - name: busybox\n    image: radial/busyboxplus:curl\n    command: ["/bin/sh", "-c", "while true; do sleep 3600; done"]\n')),Object(l.b)("p",null,"Create a policy to allow only client pods with label ",Object(l.b)("inlineCode",{parentName:"p"},'allow-access: "true"')," to access secure pod"))}d.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-9-index-mdx-985c7e309c80a854a065.js.map