(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("NmYn"),r=a.n(o),l=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),d=a("TSYQ"),b=a.n(d),u=a("QH2O"),p=a.n(u),m=a("qKvR"),v=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return Object(m.b)("div",{className:b()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},h=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,o=i.baseUrl,r=i.subDirectory,c=o+"/edit/"+i.branch+r+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),O=a("dI71"),j=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===i,c=new RegExp(i+"/?(#.*)?$"),s=n.replace(c,a);return Object(m.b)("li",{key:e,className:b()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(m.b)(l.Link,{className:j.link,to:""+s},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:j.list},o))))))},t}(i.a.Component),y=a("MjG9"),T=a("CzIb"),w=a("Asxa"),N=a("OIbQ"),k=a.n(N),C=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(w.c,{className:k.a.row},Object(m.b)(w.a,null,Object(m.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,o=t.frontmatter,d=void 0===o?{}:o,b=t.relativePagePath,u=t.titleType,p=d.tabs,h=d.title,O=d.theme,j=d.description,w=d.keywords,N=d.date,k=Object(T.a)().interiorTheme,P=Object(l.useStaticQuery)("2456312558").site.pathPrefix,I=P?n.pathname.replace(P,""):n.pathname,A=p?I.split("/").filter(Boolean).slice(-1)[0]||r()(p[0],{lower:!0}):"",L=O||k;return Object(m.b)(s.a,{tabs:p,homepage:!1,theme:L,pageTitle:h,pageDescription:j,pageKeywords:w,titleType:u},Object(m.b)(v,{title:i?Object(m.b)(i,null):h,label:"label",tabs:p,theme:L}),p&&Object(m.b)(f,{title:h,slug:I,tabs:p,currentTab:A}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(x,{relativePagePath:b}),Object(m.b)(C,{date:N})),Object(m.b)(g.a,{pageContext:t,location:n,slug:I,tabs:p,currentTab:A}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},qwkn:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return h}));var n=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),["components"]),c={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},d=s("AnchorLinks"),b=s("AnchorLink"),u=s("CardGroup"),p=s("MiniCard"),m={_frontmatter:c},v=r.a;function h(e){var t=e.components,a=Object(i.a)(e,l);return Object(o.b)(v,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(d,{small:!0,mdxType:"AnchorLinks"},Object(o.b)(b,{mdxType:"AnchorLink"},"Cloud-Native"),Object(o.b)(b,{mdxType:"AnchorLink"},"Advantages and disadvantages"),Object(o.b)(b,{mdxType:"AnchorLink"},"Resources")),Object(o.b)("h2",null,"Cloud-Native"),Object(o.b)("p",null,"Cloud-native refers less to where an application resides and more to how\nit is built and deployed."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A cloud-native application consists of discrete, reusable components\nknown as microservices that are designed to integrate into any cloud\nenvironment."),Object(o.b)("li",{parentName:"ul"},"These microservices act as building blocks and are often packaged in\ncontainers."),Object(o.b)("li",{parentName:"ul"},"Microservices work together as a whole to comprise an application,\nyet each can be independently scaled, continuously improved, and\nquickly iterated through automation and orchestration processes."),Object(o.b)("li",{parentName:"ul"},"The flexibility of each microservice adds to the agility and\ncontinuous improvement of cloud-native applications.")),Object(o.b)("h2",null,"Advantages and Disadvantages"),Object(o.b)("p",null,"IBM customers find themselves increasingly tasked with improving existing applications, building new applications, and enhancing user experience.\nCloud native applications meet these demands by improving app performance, flexibility, and extensibility."),Object(o.b)("h3",null,"Advantages"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Compared to traditional monolithic apps, cloud native applications can be easier to manage as iterative improvements occur using Agile and DevOps processes."),Object(o.b)("li",{parentName:"ul"},"Comprised of individual microservices, cloud native applications can be improved incrementally and automatically to continuously add new and improved application features."),Object(o.b)("li",{parentName:"ul"},"Improvements can be made non-intrusively, causing no downtime or disruption of the end-user experience."),Object(o.b)("li",{parentName:"ul"},"Scaling up or down proves easier with the elastic infrastructure that underpins cloud native apps."),Object(o.b)("li",{parentName:"ul"},"The cloud native development process more closely matches the speed and innovation demanded by today’s business environment.")),Object(o.b)("h3",null,"Disadvantages"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Although microservices enable an iterative approach to application improvement, they also create the necessity of managing more elements. Rather than one large application, it becomes necessary to manage far more small, discrete services."),Object(o.b)("li",{parentName:"ul"},"Cloud native apps demand additional toolsets to manage the DevOps pipeline, replace traditional monitoring structures, and control microservices architecture."),Object(o.b)("li",{parentName:"ul"},"Cloud native applications allow for rapid development and deployment, but they also demand a business culture that can cope with the pace of that innovation.")),Object(o.b)("h2",null,"Resources"),Object(o.b)(u,{mdxType:"CardGroup"},Object(o.b)(p,{title:"What is Cloud Native",href:"/slides/01-What-Is-Cloud-Native.pdf",mdxType:"MiniCard"})))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-cloud-native-index-mdx-aeca50f15889f8bafc77.js.map