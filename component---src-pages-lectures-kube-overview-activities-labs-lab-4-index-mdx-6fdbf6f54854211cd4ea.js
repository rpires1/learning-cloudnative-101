(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),s=a.n(i),o=a("Wbzz"),l=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),d=a.n(c),u=a("QH2O"),p=a.n(u),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,s=r.subDirectory,l=i+"/edit/"+r.branch+s+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},x=a("FCXl"),g=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),i=a===r,l=new RegExp(r+"/?(#.*)?$"),b=n.replace(l,a);return Object(m.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(m.b)(o.Link,{className:f.link,to:""+b},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},i))))))},t}(r.a.Component),T=a("MjG9"),w=a("CzIb"),y=a("Asxa"),v=a("OIbQ"),k=a.n(v),P=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(y.c,{className:k.a.row},Object(m.b)(y.a,null,Object(m.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,c=void 0===i?{}:i,d=t.relativePagePath,u=t.titleType,p=c.tabs,O=c.title,g=c.theme,f=c.description,y=c.keywords,v=c.date,k=Object(w.a)().interiorTheme,C=Object(o.useStaticQuery)("2456312558").site.pathPrefix,I=C?n.pathname.replace(C,""):n.pathname,E=p?I.split("/").filter(Boolean).slice(-1)[0]||s()(p[0],{lower:!0}):"",H=g||k;return Object(m.b)(b.a,{tabs:p,homepage:!1,theme:H,pageTitle:O,pageDescription:f,pageKeywords:y,titleType:u},Object(m.b)(h,{title:r?Object(m.b)(r,null):O,label:"label",tabs:p,theme:H}),p&&Object(m.b)(N,{title:O,slug:I,tabs:p,currentTab:E}),Object(m.b)(T.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:d}),Object(m.b)(P,{date:v})),Object(m.b)(x.a,{pageContext:t,location:n,slug:I,tabs:p,currentTab:E}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},gERQ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("013z"),o=(a("qKvR"),["components"]),l={},b={_frontmatter:l},c=s.a;function d(e){var t=e.components,a=Object(r.a)(e,o);return Object(i.b)(c,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Container Health Issues"),Object(i.b)("p",null,"The first issue is caused by application instances entering an unhealthy state and responding to user requests with error messages. Unfortunately, this state does not cause the container to stop, so the Kubernetes cluster is not able to detect this state and restart the container. Luckily, the application has an internal endpoint that can be used to detect whether or not it is healthy. This endpoint is ",Object(i.b)("inlineCode",{parentName:"p"},"/healthz")," on port ",Object(i.b)("inlineCode",{parentName:"p"},"8080"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Your first task will be to ",Object(i.b)("em",{parentName:"li"},"create a probe")," to check this endpoint periodically.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If the endpoint returns an ",Object(i.b)("strong",{parentName:"li"},"error")," or ",Object(i.b)("strong",{parentName:"li"},"fails")," to respond, the probe will detect this and the cluster will restart the container.")))),Object(i.b)("h3",null,"Container Startup Issues"),Object(i.b)("p",null,"Another issue is caused by new pods when they are starting up. The application takes a few seconds after startup before it is ready to service requests. As a result, some users are getting error message during this brief time."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To fix this, you will need to ",Object(i.b)("em",{parentName:"p"},"create another probe"),". To detect whether the application is ",Object(i.b)("inlineCode",{parentName:"p"},"ready"),", the probe should simply make a request to the root endpoint, ",Object(i.b)("em",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"em"},"/ready"),", on port ",Object(i.b)("inlineCode",{parentName:"em"},"8080")),". If this request succeeds, then the application is ready.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Also set a ",Object(i.b)("inlineCode",{parentName:"p"},"initial delay")," of ",Object(i.b)("inlineCode",{parentName:"p"},"5 seconds")," for the probes."))),Object(i.b)("p",null,"Here is the Pod yaml file,  ",Object(i.b)("strong",{parentName:"p"},"add")," the probes, then ",Object(i.b)("strong",{parentName:"p"},"create")," the pod in the cluster to test it."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: energy-shield-service\nspec:\n  containers:\n  - name: energy-shield\n    image: ibmcase/energy-shield:1\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-4-index-mdx-6fdbf6f54854211cd4ea.js.map