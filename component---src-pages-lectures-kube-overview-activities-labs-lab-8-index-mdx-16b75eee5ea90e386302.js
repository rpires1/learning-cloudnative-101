(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),i=a("NmYn"),r=a.n(i),b=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,l=e.tabs,i=void 0===l?[]:l;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=i.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,i=l.baseUrl,r=l.subDirectory,o=i+"/edit/"+l.branch+r+"/src/pages"+t;return i?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},h=a("FCXl"),g=a("dI71"),N=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,l=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===l,o=new RegExp(l+"/?(#.*)?$"),c=n.replace(o,a);return Object(p.b)("li",{key:e,className:d()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(p.b)(b.Link,{className:N.link,to:""+c},e))}));return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:N.list},i))))))},t}(l.a.Component),T=a("MjG9"),f=a("CzIb"),y=a("Asxa"),w=a("OIbQ"),k=a.n(w),P=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(y.c,{className:k.a.row},Object(p.b)(y.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,i=t.frontmatter,s=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,m=s.tabs,O=s.title,g=s.theme,N=s.description,y=s.keywords,w=s.date,k=Object(f.a)().interiorTheme,C=Object(b.useStaticQuery)("2456312558").site.pathPrefix,I=C?n.pathname.replace(C,""):n.pathname,E=m?I.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",H=g||k;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:H,pageTitle:O,pageDescription:N,pageKeywords:y,titleType:u},Object(p.b)(j,{title:l?Object(p.b)(l,null):O,label:"label",tabs:m,theme:H}),m&&Object(p.b)(v,{title:O,slug:I,tabs:m,currentTab:E}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(x,{relativePagePath:d}),Object(p.b)(P,{date:w})),Object(p.b)(h.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:E}),Object(p.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},jku9:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a("wx14"),l=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("013z"),b=(a("qKvR"),["components"]),o={},c={_frontmatter:o},s=r.a;function d(e){var t=e.components,a=Object(l.a)(e,b);return Object(i.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Problem"),Object(i.b)("p",null,"We have a ",Object(i.b)("inlineCode",{parentName:"p"},"jedi-deployment")," and ",Object(i.b)("inlineCode",{parentName:"p"},"yoda-deployment")," that need to communicate with others.  The ",Object(i.b)("inlineCode",{parentName:"p"},"jedi")," needs to talk to the world(outside the cluster), while ",Object(i.b)("inlineCode",{parentName:"p"},"yoda")," only needs to talk to jedi council(others in the cluster)."),Object(i.b)("h2",null,"Your Task"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Examine the two deployments, and create two services that meet the following criteria:")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"jedi-svc")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The service name is ",Object(i.b)("inlineCode",{parentName:"li"},"jedi-svc"),"."),Object(i.b)("li",{parentName:"ul"},"The service exposes the pod replicas managed by the deployment named ",Object(i.b)("inlineCode",{parentName:"li"},"jedi-deployment"),"."),Object(i.b)("li",{parentName:"ul"},"The service listens on port ",Object(i.b)("inlineCode",{parentName:"li"},"80")," and its targetPort matches the port exposed by the pods."),Object(i.b)("li",{parentName:"ul"},"The service type is ",Object(i.b)("inlineCode",{parentName:"li"},"NodePort"),".")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"yoda-svc")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The service name is ",Object(i.b)("inlineCode",{parentName:"li"},"yoda-svc"),"."),Object(i.b)("li",{parentName:"ul"},"The service exposes the pod replicas managed by the deployment named ",Object(i.b)("inlineCode",{parentName:"li"},"yoda-deployment"),"."),Object(i.b)("li",{parentName:"ul"},"The service listens on port ",Object(i.b)("inlineCode",{parentName:"li"},"80")," and its targetPort matches the port exposed by the pods."),Object(i.b)("li",{parentName:"ul"},"The service type is ",Object(i.b)("inlineCode",{parentName:"li"},"ClusterIP"),".")),Object(i.b)("h3",null,"Setup environment:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"kubectl apply -f https://gist.githubusercontent.com/csantanapr/87df4292e94441617707dae5de488cf4/raw/cb515f7bae77a3f0e76fdc7f6aa0f4e89cc5fec7/lab-8-service-setup.yaml\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-8-index-mdx-16b75eee5ea90e386302.js.map