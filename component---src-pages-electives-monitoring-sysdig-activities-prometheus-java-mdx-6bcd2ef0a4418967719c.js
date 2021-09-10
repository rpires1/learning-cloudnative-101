(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),c=a("NmYn"),r=a.n(c),b=a("Wbzz"),o=a("Xrax"),i=a("k4MR"),s=a("TSYQ"),p=a.n(s),u=a("QH2O"),m=a.n(u),d=a("qKvR"),j=function(e){var t,a=e.title,n=e.theme,l=e.tabs,c=void 0===l?[]:l;return Object(d.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=c.length,t[m.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,c=l.baseUrl,r=l.subDirectory,o=c+"/edit/"+l.branch+r+"/src/pages"+t;return c?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},g=a("FCXl"),v=a("dI71"),x=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,l=n.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),c=a===l,o=new RegExp(l+"/?(#.*)?$"),i=n.replace(o,a);return Object(d.b)("li",{key:e,className:p()((t={},t[x.selectedItem]=c,t),x.listItem)},Object(d.b)(b.Link,{className:x.link,to:""+i},e))}));return Object(d.b)("div",{className:x.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:x.list},c))))))},t}(l.a.Component),f=a("MjG9"),w=a("CzIb"),y=a("Asxa"),T=a("OIbQ"),k=a.n(T),A=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(y.c,{className:k.a.row},Object(d.b)(y.a,null,Object(d.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,c=t.frontmatter,s=void 0===c?{}:c,p=t.relativePagePath,u=t.titleType,m=s.tabs,O=s.title,v=s.theme,x=s.description,y=s.keywords,T=s.date,k=Object(w.a)().interiorTheme,P=Object(b.useStaticQuery)("2456312558").site.pathPrefix,E=P?n.pathname.replace(P,""):n.pathname,C=m?E.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",_=v||k;return Object(d.b)(i.a,{tabs:m,homepage:!1,theme:_,pageTitle:O,pageDescription:x,pageKeywords:y,titleType:u},Object(d.b)(j,{title:l?Object(d.b)(l,null):O,label:"label",tabs:m,theme:_}),m&&Object(d.b)(N,{title:O,slug:E,tabs:m,currentTab:C}),Object(d.b)(f.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:p}),Object(d.b)(A,{date:T})),Object(d.b)(g.a,{pageContext:t,location:n,slug:E,tabs:m,currentTab:C}),Object(d.b)(o.a,null))}},"6sdy":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a("wx14"),l=a("zLVn"),c=(a("q1tI"),a("7ljp")),r=a("013z"),b=(a("qKvR"),["components"]),o={},i={_frontmatter:o},s=r.a;function p(e){var t=e.components,a=Object(l.a)(e,b);return Object(c.b)(s,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",null,"Prerequisite"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Configure the Sysdig Agent on a kubernetes cluster, you can use one of the labs in this bootcamp located ",Object(c.b)("a",{parentName:"li",href:"/monitoring/sysdig/#activities"},"here"))),Object(c.b)("h3",null,"Deploy java application enable with prometheus"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Review the instrumented java application ",Object(c.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/learning-cloudnative-101/blob/master/examples/monitoring/prometheus/java/src/main/java/Main.java"},"Main.java"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Creagte a namespace to deploy the application"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns dev\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Deploy the following java application")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | kubectl -n dev apply -f -\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: prometheus-java-app\nspec:\n  selector:\n    matchLabels:\n      app: prometheus-java-app\n  template:\n    metadata:\n      labels:\n        app: prometheus-java-app\n      annotations:\n        prometheus.io/scrape: "true"\n        prometheus.io/path: "/prometheus"\n        prometheus.io/port: "8080"\n    spec:\n      containers:\n        - name: prometheus-java-app\n          image: docker.io/ibmcase/prometheus-java\nEOF\n')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Expose java application service")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"kubectl -n dev create svc nodeport prometheus-java-app --tcp=80:80 --tcp 8080:8080\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Deploy the following java application")),Object(c.b)("h3",null,"Test the application"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Expose application web service on local port 8000, and prometheus on 8080, each command on a new terminal")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"kubectl -n dev port-forward service/prometheus-java-app 8000:80\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"kubectl -n dev port-forward service/prometheus-java-app 8080:8080\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Send http request to the web service")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"while true; do sleep 1; curl http://localhost:8000 -si | head -1 ; done\n")),Object(c.b)("p",null,"Output looks like this"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"HTTP/1.1 200 OK\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Query prometheus endpoint")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:8080/prometheus\n")),Object(c.b)("p",null,"Output looks like this"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.\n# TYPE process_cpu_seconds_total counter\nprocess_cpu_seconds_total 1.39\n# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.\n")),Object(c.b)("h2",null,"Java Prometheus Metrics in Sysdig"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Open Sysdig"),Object(c.b)("li",{parentName:"ul"},"Select Explore"),Object(c.b)("li",{parentName:"ul"},"Select Deployments"),Object(c.b)("li",{parentName:"ul"},"Select ",Object(c.b)("inlineCode",{parentName:"li"},"dev")," namespace"),Object(c.b)("li",{parentName:"ul"},"Select deployment ",Object(c.b)("inlineCode",{parentName:"li"},"prometheus-java-app")),Object(c.b)("li",{parentName:"ul"},"Select from drop down metrics, select Prometheus"),Object(c.b)("li",{parentName:"ul"},"Select metrics collected start with ",Object(c.b)("inlineCode",{parentName:"li"},"jvm_")," or ",Object(c.b)("inlineCode",{parentName:"li"},"java_")," for example ",Object(c.b)("inlineCode",{parentName:"li"},"java_my_counter"))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"84.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAABYlAAAWJQFJUiTwAAACE0lEQVQ4y31Ty24TMRSdv0AsuihIVEgskBAVRUgUiYiHxJ7v4hdYIoq6QEpTVKh4/AAbEOIhTZNM5j0ej+2xPTbH4yRK2sDRzOT62ueee69vgp39J2/ejqRShNKmB2OMc46XseY/wLFg69aDFwcHESO/4mnM6IxTIURd15RSrbW11vRYGt7utBatCq7uDl4Pj401eVVKrVqlqh7g+/D4+ljeFpw3nFW0TgoZ7D19/u70C4LVpIYm1GQPKCB57wGNEAInbPjxI7QynQ6u7A4Oj06ElOF4OoniqqZ2kdtmrGwF27cHw/efYE2jCFl2Pdw+Z7YVVnBfrV0Ph4XR2tV83Kedpum8Q7ozoDW1VcrmqS0L01BbV1ZKy5t5ON4YzqD8cPTBKaMwH7VDwWUODlyOTEpTZHY2cblkiJVbUhlKTF0FWzf3j/q0vayLKrgBB+LRxLKmb0GHflolccgiUBobNAzkyzfuDU8+rpGdcuGOIs95j1ZqRv5KuYCo+SK5wwZ0/HIxHue67e9jkzKg5PrtmAv35bBJuevOnf4n+dL1uxuU14d5lbzqDLbvPFrtNkQxwoRUGGallFyilRhV0Yq2bfUCwbX7z0ann91EiVYq7aclDMMkSYoixz+E0ront47MBSIuUwh29h6/fHUYTqKv3398+/n7z9kkyvJxnJzN8KTjOJ0mWZQVMOCZ5SWW+IZRPMvyv0MBrRCkf3FcAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"java-metrics",title:"java-metrics",src:"/static/d5158492f1755fdd3ebb267aab304add/3cbba/java_my_counter.png",srcSet:["/static/d5158492f1755fdd3ebb267aab304add/7fc1e/java_my_counter.png 288w","/static/d5158492f1755fdd3ebb267aab304add/a5df1/java_my_counter.png 576w","/static/d5158492f1755fdd3ebb267aab304add/3cbba/java_my_counter.png 1152w","/static/d5158492f1755fdd3ebb267aab304add/0b124/java_my_counter.png 1728w","/static/d5158492f1755fdd3ebb267aab304add/7d560/java_my_counter.png 1994w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("h2",null,"References"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Sysdig Blog Prometheus metrics / OpenMetrics code instrumentation (",Object(c.b)("a",{parentName:"li",href:"https://sysdig.com/blog/prometheus-metrics/"},"https://sysdig.com/blog/prometheus-metrics/"),")")))}p.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-electives-monitoring-sysdig-activities-prometheus-java-mdx-6bcd2ef0a4418967719c.js.map