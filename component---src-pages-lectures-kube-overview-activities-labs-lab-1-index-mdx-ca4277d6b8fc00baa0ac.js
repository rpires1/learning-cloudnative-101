(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("NmYn"),b=a.n(l),o=a("Wbzz"),r=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,i=e.tabs,l=void 0===i?[]:i;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=l.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,l=i.baseUrl,b=i.subDirectory,r=l+"/edit/"+i.branch+b+"/src/pages"+t;return l?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:r},"Edit this page on GitHub"))):null},g=a("FCXl"),h=a("dI71"),f=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),l=a===i,r=new RegExp(i+"/?(#.*)?$"),c=n.replace(r,a);return Object(p.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=l,t),f.listItem)},Object(p.b)(o.Link,{className:f.link,to:""+c},e))}));return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:f.list},l))))))},t}(i.a.Component),N=a("MjG9"),w=a("CzIb"),v=a("Asxa"),k=a("OIbQ"),P=a.n(k),y=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(v.c,{className:P.a.row},Object(p.b)(v.a,null,Object(p.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,l=t.frontmatter,s=void 0===l?{}:l,d=t.relativePagePath,u=t.titleType,m=s.tabs,O=s.title,h=s.theme,f=s.description,v=s.keywords,k=s.date,P=Object(w.a)().interiorTheme,C=Object(o.useStaticQuery)("2456312558").site.pathPrefix,I=C?n.pathname.replace(C,""):n.pathname,E=m?I.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",H=h||P;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:H,pageTitle:O,pageDescription:f,pageKeywords:v,titleType:u},Object(p.b)(x,{title:i?Object(p.b)(i,null):O,label:"label",tabs:m,theme:H}),m&&Object(p.b)(T,{title:O,slug:I,tabs:m,currentTab:E}),Object(p.b)(N.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d}),Object(p.b)(y,{date:k})),Object(p.b)(g.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:E}),Object(p.b)(r.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},LhtV:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return d}));var n=a("wx14"),i=a("zLVn"),l=(a("q1tI"),a("7ljp")),b=a("013z"),o=(a("qKvR"),["components"]),r={},c={_frontmatter:r},s=b.a;function d(e){var t=e.components,a=Object(i.a)(e,o);return Object(l.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"Problem"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Write a pod definition named ",Object(l.b)("inlineCode",{parentName:"li"},"yoda-service-pod.yml")," Then create a pod in the cluster using this definition to make sure it works.")),Object(l.b)("p",null,"The specificationsof this pod are as follows:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Use the ",Object(l.b)("inlineCode",{parentName:"li"},"bitnami/nginx")," container image."),Object(l.b)("li",{parentName:"ul"},"The container needs a containerPort of ",Object(l.b)("inlineCode",{parentName:"li"},"80"),"."),Object(l.b)("li",{parentName:"ul"},"Set the command to run as ",Object(l.b)("inlineCode",{parentName:"li"},"nginx")),Object(l.b)("li",{parentName:"ul"},"Pass in the ",Object(l.b)("inlineCode",{parentName:"li"},"-g daemon off; -q")," args to run nginx in quiet mode."),Object(l.b)("li",{parentName:"ul"},"Create the pod in the ",Object(l.b)("inlineCode",{parentName:"li"},"web")," namespace.")),Object(l.b)("h2",null,"Verification"),Object(l.b)("p",null,"When you have completed this lab, use the following commands to validate your solution. The ‘get pods’ command will "),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"kubectl get pods -n web"),"\n",Object(l.b)("inlineCode",{parentName:"p"},"kubectl describe pod nginx -n web")))}d.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-1-index-mdx-ca4277d6b8fc00baa0ac.js.map