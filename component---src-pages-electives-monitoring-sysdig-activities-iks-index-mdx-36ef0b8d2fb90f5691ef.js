(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),i=a("NmYn"),s=a.n(i),r=a("Wbzz"),b=a("Xrax"),o=a("k4MR"),l=a("TSYQ"),d=a.n(l),g=a("QH2O"),p=a.n(g),m=a("qKvR"),u=function(e){var t,a=e.title,n=e.theme,c=e.tabs,i=void 0===c?[]:c;return Object(m.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},A=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,c=a||n,i=c.baseUrl,s=c.subDirectory,b=i+"/edit/"+c.branch+s+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+A.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:A.link,href:b},"Edit this page on GitHub"))):null},x=a("FCXl"),O=a("dI71"),w=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,c=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),i=a===c,b=new RegExp(c+"/?(#.*)?$"),o=n.replace(b,a);return Object(m.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=i,t),w.listItem)},Object(m.b)(r.Link,{className:w.link,to:""+o},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:w.list},i))))))},t}(c.a.Component),y=a("MjG9"),N=a("CzIb"),h=a("Asxa"),k=a("OIbQ"),v=a.n(k),T=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(h.c,{className:v.a.row},Object(m.b)(h.a,null,Object(m.b)("div",{className:v.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,c=e.Title,i=t.frontmatter,l=void 0===i?{}:i,d=t.relativePagePath,g=t.titleType,p=l.tabs,A=l.title,O=l.theme,w=l.description,h=l.keywords,k=l.date,v=Object(N.a)().interiorTheme,S=Object(r.useStaticQuery)("2456312558").site.pathPrefix,z=S?n.pathname.replace(S,""):n.pathname,P=p?z.split("/").filter(Boolean).slice(-1)[0]||s()(p[0],{lower:!0}):"",B=O||v;return Object(m.b)(o.a,{tabs:p,homepage:!1,theme:B,pageTitle:A,pageDescription:w,pageKeywords:h,titleType:g},Object(m.b)(u,{title:c?Object(m.b)(c,null):A,label:"label",tabs:p,theme:B}),p&&Object(m.b)(j,{title:A,slug:z,tabs:p,currentTab:P}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(f,{relativePagePath:d}),Object(m.b)(T,{date:k})),Object(m.b)(x.a,{pageContext:t,location:n,slug:z,tabs:p,currentTab:P}),Object(m.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},V0RL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a("wx14"),c=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("013z"),r=(a("qKvR"),["components"]),b={},o={_frontmatter:b},l=s.a;function d(e){var t=e.components,a=Object(c.a)(e,r);return Object(i.b)(l,Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Prerequisite"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create an IBM Kubernetes Cluster, it can be a Cluster using the Free plan")),Object(i.b)("h3",null,"Connecting a Sysdig agent to a standard Kubernetes cluster"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open you Kubernetes Cluster Overview, in the Summary find _Monitoring__ row and click ",Object(i.b)("strong",{parentName:"li"},"Connect"),Object(i.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB7klEQVQoz5WRy27UMBSG54VgrqUs2i5QF7wVG1jxHiwK3fEOVEIICQECTTOZ6TTNJLEdx8eOr3E4maGV2FTil+WrPv//sUcnJ6fPjo/HTweNx+NDP99rOp3OZvOjxfz8dHZ+Nnv54ujs+ZMFHizmi+l0MpmMPn/9uV4lyWZ1e5dltxmquldZVoxWq5vqzUXz+oK/esffXvL0ttpmVZZXRVmNKkqbphEStNZt2yql/F4hBOd9FzwH9+HKX17F95/6j186qb023thOaztar1NCSFmUdV1LKRljMcau65xz2Pd975ztgxRiqfR1Hy3udLGzzqLTaJ2mNWNojiTnHNOiJ0bBswPsXShhw/QdN+UOEtxUVtGGDnBOSKMGYWwkkUdgVxLVDvlxLhQr5aqpgVOxg6V1MmjZsHKAV4TsAFopkRcA6I8A1o7N2SGkMbqA6xpKDiSHpfc2aNNQNsBaKSQB+bZlWHyeB2tq3gKyPsSheN9aUUBSiEQaHkInW0UP8OC1l8Irshu+3cSG1YWgWyK/f4sgjHMSpFZGt+be6C80Ogy4wptonm2Xv03NagINAffrRy/BOA9CADLywUj+C+9jE0orQrFOpS1m7vcyxjxYPQbjaydJgh9rQ29d7GP8D5hSmqaptQZ037TReYTjI/Afdjyyls3SLroAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"iks cluster overview",title:"iks cluster overview",src:"/static/308968ff49239eb711c6242ca44e8c16/3cbba/iks-connect-sysdig.png",srcSet:["/static/308968ff49239eb711c6242ca44e8c16/7fc1e/iks-connect-sysdig.png 288w","/static/308968ff49239eb711c6242ca44e8c16/a5df1/iks-connect-sysdig.png 576w","/static/308968ff49239eb711c6242ca44e8c16/3cbba/iks-connect-sysdig.png 1152w","/static/308968ff49239eb711c6242ca44e8c16/0b124/iks-connect-sysdig.png 1728w","/static/308968ff49239eb711c6242ca44e8c16/4ea69/iks-connect-sysdig.png 2304w","/static/308968ff49239eb711c6242ca44e8c16/61aca/iks-connect-sysdig.png 2496w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Create and connect"),Object(i.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.22222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAABYlAAAWJQFJUiTwAAABF0lEQVQoz6VQSU7DQBCcS5C4QG78ggQu8I4gIQ4kRCwnAhf7HSAioXzOtixl8YoX2XK8zLQpxopD4MCBUqvUrqkudZsFQbBarVzXnc/ni8XCsqzlcgmlacCNaNs2nNUGRVFkWcYgaZoGh2mamNF1PYqi9rksS/B6vcYn57zeBUuSJJT4kAg38DwPueA4jqH7vg9GxM4wfIZhOI4DKxzNJBocAqWNQwr2AhPRdjjPcyzWrvT97U8w3IPDEIEGnKapPE98/RbOK05c1FVTXJbYFqv/AaYoiqqqT78xeZw8K+NpOJrVw3cxmtHlGw1e6ULW4IWupsTOJPo/cdLvHfdOz4/GdvehPrwT3Xvav6HOkPZkda7p4FZ8AjpIxwyTDzUgAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"create and connect",title:"create and connect",src:"/static/2553d237adfa460fc3105edf6ba2ba05/3cbba/create-connect.png",srcSet:["/static/2553d237adfa460fc3105edf6ba2ba05/7fc1e/create-connect.png 288w","/static/2553d237adfa460fc3105edf6ba2ba05/a5df1/create-connect.png 576w","/static/2553d237adfa460fc3105edf6ba2ba05/3cbba/create-connect.png 1152w","/static/2553d237adfa460fc3105edf6ba2ba05/d9278/create-connect.png 1446w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("li",{parentName:"ol"},"Select a Sysdig plan such as ",Object(i.b)("strong",{parentName:"li"},"Free")," and click ",Object(i.b)("strong",{parentName:"li"},"Create")),Object(i.b)("li",{parentName:"ol"},"Verify Cluster is connected to Sysdig service instance by clicking the button ",Object(i.b)("strong",{parentName:"li"},"Launch")," next to ",Object(i.b)("strong",{parentName:"li"},"Monitoringg"),Object(i.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.77777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB3klEQVQoz3WRzY7TMBDH8z5VtyUp4oL4uCw8FoLXWA4cgLdY4IQQp+Wym0JpmsRp0rix48/EsR0mLUIIib9GI9vSf+Y3nuDhSRfz+eLit+bz+Ww2WywWURSFUbSKls+eRJePw+dPw8tH4YP70WoVRctlFN4LPn6+ie9u4/V6vf2RbJPNZpNl2X6/RwjlOapK9C0uXr47vHp/ePEWcnVzV/xMUJIWSYqCvKgIaSilUkullJSy6zpjzDAMfW+cNRUxV9f29Qd3dT2++eThqjqju0GqPkh3CcZHEK4xmNu2hTyOo7XWew8H7+3opetrozLvKLw476wb+q4D864sSwLdm4ZznqYppS0EYwz8pypOaJG1t1ilkPXAAaw61kKIABUFOXUTchJjLRA3lBvTn83ejYjGQtMSYcLrWu68tZwfYcQgw3jLmBKCQ3BeVSXQUtK0LdVKeaB2Y9F+Z/rIqSayOshkNFbTZjKLk+0sYE3z3Dmv4NN6A8BnbPigPV9jlexZbJzudFdX1YQt/gigKal3W8tbThTFkjPDie4Z01orrSjD0y50J6RgjP9t5hw2VR8kyiw5kpI2qBFfv6hdbnAtOJuKC8X5NNq50b+dYU/rOIayQnsmnaFsJNjaQfxHvwBokjzt0lrZoAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"launch",title:"launch",src:"/static/f0cb4d2a97969b6cadda8da22f637cc9/3cbba/connected-sysdig.png",srcSet:["/static/f0cb4d2a97969b6cadda8da22f637cc9/7fc1e/connected-sysdig.png 288w","/static/f0cb4d2a97969b6cadda8da22f637cc9/a5df1/connected-sysdig.png 576w","/static/f0cb4d2a97969b6cadda8da22f637cc9/3cbba/connected-sysdig.png 1152w","/static/f0cb4d2a97969b6cadda8da22f637cc9/0b124/connected-sysdig.png 1728w","/static/f0cb4d2a97969b6cadda8da22f637cc9/4ea69/connected-sysdig.png 2304w","/static/f0cb4d2a97969b6cadda8da22f637cc9/0b97a/connected-sysdig.png 2406w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For more information on configuring and using the Sysdig Agent on your Cluster:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/Monitoring-with-Sysdig?topic=Monitoring-with-Sysdig-kubernetes_cluster"},"Monitorting a Kubernetes cluster"))))))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-monitoring-sysdig-activities-iks-index-mdx-36ef0b8d2fb90f5691ef.js.map