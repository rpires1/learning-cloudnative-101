(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),s=a("NmYn"),o=a.n(s),l=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),m=a("QH2O"),u=a.n(m),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,s=void 0===r?[]:r;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=s.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,s=r.baseUrl,o=r.subDirectory,i=s+"/edit/"+r.branch+o+"/src/pages"+t;return s?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},j=a("FCXl"),v=a("dI71"),T=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),s=a===r,i=new RegExp(r+"/?(#.*)?$"),c=n.replace(i,a);return Object(p.b)("li",{key:e,className:d()((t={},t[T.selectedItem]=s,t),T.listItem)},Object(p.b)(l.Link,{className:T.link,to:""+c},e))}));return Object(p.b)("div",{className:T.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:T.list},s))))))},t}(r.a.Component),h=a("MjG9"),N=a("CzIb"),P=a("Asxa"),k=a("OIbQ"),w=a.n(k),y=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(P.c,{className:w.a.row},Object(p.b)(P.a,null,Object(p.b)("div",{className:w.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,s=t.frontmatter,b=void 0===s?{}:s,d=t.relativePagePath,m=t.titleType,u=b.tabs,g=b.title,v=b.theme,T=b.description,P=b.keywords,k=b.date,w=Object(N.a)().interiorTheme,q=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=q?n.pathname.replace(q,""):n.pathname,I=u?C.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",M=v||w;return Object(p.b)(c.a,{tabs:u,homepage:!1,theme:M,pageTitle:g,pageDescription:T,pageKeywords:P,titleType:m},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:u,theme:M}),u&&Object(p.b)(f,{title:g,slug:C,tabs:u,currentTab:I}),Object(p.b)(h.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d}),Object(p.b)(y,{date:k})),Object(p.b)(j.a,{pageContext:t,location:n,slug:C,tabs:u,currentTab:I}),Object(p.b)(i.a,null))}},"AO+z":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),s=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),["components"]),i={},c={_frontmatter:i},b=o.a;function d(e){var t=e.components,a=Object(r.a)(e,l);return Object(s.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",null,"Solution"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: postgresql-pv\nspec:\n  storageClassName: localdisk\n  capacity:\n    storage: 1Gi\n  accessModes:\n    - ReadWriteOnce\n  hostPath:\n    path: "/mnt/data"\n')),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: postgresql-pv-claim\nspec:\n  storageClassName: localdisk\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 500Mi\n")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: postgresql-pod\nspec:\n  containers:\n  - name: postgresql\n    image: bitnami/postgresql\n    ports:\n    - containerPort: 5432\n    env:\n    - name: MYSQL_ROOT_PASSWORD\n      value: password\n    volumeMounts:\n    - name: sql-storage\n      mountPath: /bitnami/postgresql/\n  volumes:\n  - name: sql-storage\n    persistentVolumeClaim:\n      claimName: postgresql-pv-claim\n")),Object(s.b)("p",null,"verify via ",Object(s.b)("inlineCode",{parentName:"p"},"ls /mnt/data")," on node"))}d.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-10-solution-mdx-cb1d2b13c798f84db53b.js.map