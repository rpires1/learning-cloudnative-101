(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),c=a("Wbzz"),l=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),u=a.n(b),p=a("QH2O"),d=a.n(p),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(m.b)("div",{className:u()(d.a.pageHeader,(t={},t[d.a.withTabs]=o.length,t[d.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},a)))))},O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,l=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+O.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},g=a("FCXl"),f=a("dI71"),w=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,l=new RegExp(r+"/?(#.*)?$"),s=n.replace(l,a);return Object(m.b)("li",{key:e,className:u()((t={},t[w.selectedItem]=o,t),w.listItem)},Object(m.b)(c.Link,{className:w.link,to:""+s},e))}));return Object(m.b)("div",{className:w.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:w.list},o))))))},t}(r.a.Component),k=a("MjG9"),x=a("CzIb"),v=a("Asxa"),N=a("OIbQ"),T=a.n(N),C=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(v.c,{className:T.a.row},Object(m.b)(v.a,null,Object(m.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,u=t.relativePagePath,p=t.titleType,d=b.tabs,O=b.title,f=b.theme,w=b.description,v=b.keywords,N=b.date,T=Object(x.a)().interiorTheme,I=Object(c.useStaticQuery)("2456312558").site.pathPrefix,D=I?n.pathname.replace(I,""):n.pathname,L=d?D.split("/").filter(Boolean).slice(-1)[0]||i()(d[0],{lower:!0}):"",A=f||T;return Object(m.b)(s.a,{tabs:d,homepage:!1,theme:A,pageTitle:O,pageDescription:w,pageKeywords:v,titleType:p},Object(m.b)(h,{title:r?Object(m.b)(r,null):O,label:"label",tabs:d,theme:A}),d&&Object(m.b)(y,{title:O,slug:D,tabs:d,currentTab:L}),Object(m.b)(k.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:u}),Object(m.b)(C,{date:N})),Object(m.b)(g.a,{pageContext:t,location:n,slug:D,tabs:d,currentTab:L}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},OVS1:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),["components"]),l={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=s("AnchorLinks"),u=s("AnchorLink"),p={_frontmatter:l},d=i.a;function m(e){var t=e.components,a=Object(r.a)(e,c);return Object(o.b)(d,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{small:!0,mdxType:"AnchorLinks"},Object(o.b)(u,{mdxType:"AnchorLink"},"Introduction"),Object(o.b)(u,{mdxType:"AnchorLink"},"Containers"),Object(o.b)(u,{mdxType:"AnchorLink"},"Why containers ?"),Object(o.b)(u,{mdxType:"AnchorLink"},"Different Container Standards"),Object(o.b)(u,{mdxType:"AnchorLink"},"Benefits"),Object(o.b)(u,{mdxType:"AnchorLink"},"Docker"),Object(o.b)(b,{small:!0,mdxType:"AnchorLinks"},Object(o.b)(u,{mdxType:"AnchorLink"},"Docker Image"),Object(o.b)(u,{mdxType:"AnchorLink"},"Docker Container"),Object(o.b)(u,{mdxType:"AnchorLink"},"Docker Engine"),Object(o.b)(u,{mdxType:"AnchorLink"},"Docker Registry"),Object(o.b)(u,{mdxType:"AnchorLink"},"Docker Commands")),Object(o.b)(u,{mdxType:"AnchorLink"},"References")),Object(o.b)("h2",null,"Introduction"),Object(o.b)("p",null,"You wanted to run your application on different computing environments. It may be your laptop, test environment, staging environment or production environment."),Object(o.b)("p",null,"So, when you run it on these different environments, will your application work reliably ?"),Object(o.b)("p",null,"What if some underlying software changes ? What if the security policies are different ? or something else changes ?"),Object(o.b)("p",null,"To solve this problems, we need Containers."),Object(o.b)("h2",null,"Containers"),Object(o.b)("p",null,"Containers are a standard way to package an application and all its dependencies so that it can be moved between environments and run without change. They work by hiding the differences between applications inside the container so that everything outside the container can be standardized."),Object(o.b)("p",null,"For example, Docker created standard way to create images for Linux Containers."),Object(o.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.21890547263681%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(o.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/0qotVMX-J5s",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(o.b)("h2",null,"Why containers ?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We can run them anywhere."),Object(o.b)("li",{parentName:"ul"},"They are lightweight ."),Object(o.b)("li",{parentName:"ul"},"Isolate your application from others.")),Object(o.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"75%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(o.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/muTkqVewJMI",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(o.b)("h2",null,"Different Container Standards"),Object(o.b)("p",null,"There are many different container standards available today. Some of them are as follows."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Docker")," - The most common standard, made Linux containers usable by the masses."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Rocket (rkt)")," - An emerging container standard from CoreOS, the company that developed etcd."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Garden")," - The format Cloud Foundry builds using buildpacks."),Object(o.b)("p",null,"Among them, Docker was one of the most popular mainstream container software tools."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Open Container Initiative (OCI)"))),Object(o.b)("p",null,"A Linux Foundation project developing a governed container standard. Docker and Rocket are OCI-compliant. But, Garden is not."),Object(o.b)("h2",null,"Benefits"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Lightweight"),Object(o.b)("li",{parentName:"ul"},"Scalable"),Object(o.b)("li",{parentName:"ul"},"Efficient"),Object(o.b)("li",{parentName:"ul"},"Portable"),Object(o.b)("li",{parentName:"ul"},"Supports agile development")),Object(o.b)("p",null,"To know more about Containerization, we have couple of guides. Feel free to check them out."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/learn/containerization"},"Containerization: A Complete Guide"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/learn/containers"},"Containers: A Complete Guide"),".")),Object(o.b)("h2",null,"Docker"),Object(o.b)("p",null,"Docker is one of the most popular Containerization platforms which allows you to develop, deploy, and run application inside containers."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It is an open source project."),Object(o.b)("li",{parentName:"ul"},"Can run it anywhere.")),Object(o.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"75%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(o.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/wFNWl-QwPfc",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(o.b)("p",null,"An installation of Docker includes an engine. This comes with a daemon, REST APIs, and CLI. Users can use CLI to interact with the docker using commands. These commands are sent to the daemon which listens for the Docker Rest APIs which in turn manages images and containers. The engine runs a container by retrieving its image from the local system or registry. A running container starts one or more processes in the Linux kernel."),Object(o.b)("h3",null,"Docker Image"),Object(o.b)("p",null,"A read-only snapshot of a container that is stored in Docker Hub or in private repository. You use an image as a template for building containers."),Object(o.b)("p",null,"These images are build from the ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Dockerfile")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It is a text document that contains all the instructions that are necessary to build a docker image."),Object(o.b)("li",{parentName:"ul"},"It is written in an easy-to-understand syntax."),Object(o.b)("li",{parentName:"ul"},"It specifies the operating system."),Object(o.b)("li",{parentName:"ul"},"It also includes things like environmental variables, ports, file locations etc.")),Object(o.b)("p",null,"If you want to try building docker images, try this course on ",Object(o.b)("a",{parentName:"p",href:"https://www.katacoda.com/"},"Katacoda")," (Interactive Learning Platform)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.katacoda.com/courses/docker/2"},"Building Container Images")," -  Estimated Time: 10 minutes.")),Object(o.b)("h3",null,"Docker Container"),Object(o.b)("p",null,"The standard unit where the application service is located or transported. It packages up all code and its dependencies so that the application runs quickly and reliably from one computing environment to another."),Object(o.b)("p",null,"If you want to try deploying a docker container, try this course on ",Object(o.b)("a",{parentName:"p",href:"https://www.katacoda.com/"},"Katacoda")," (Interactive Learning Platform)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.katacoda.com/courses/docker/deploying-first-container"},"Deploying Your First Docker Container")," -  Estimated Time: 10 minutes.")),Object(o.b)("h3",null,"Docker Engine"),Object(o.b)("p",null,"Docker Engine is a program that creates, ships, and runs application containers. The engine runs on any physical or virtual machine or server locally, in private or public cloud. The client communicates with the engine to run commands."),Object(o.b)("h3",null,"Docker Registry"),Object(o.b)("p",null,"The registry stores, distributes, and shares container images. It is available in software as a service (SaaS) or in an enterprise to deploy anywhere you that you choose."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Docker Hub")," is a popular registry. It is a registry which allows you to download docker images which are built by different communities. You can also store your own images there. You can check out various images available on docker hub ",Object(o.b)("a",{parentName:"p",href:"https://hub.docker.com/search?q=&type=image"},"here"),"."),Object(o.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"75%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(o.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/CPJLKqvR8II",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(o.b)("p",null,"If you are interested, check this ",Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/content/course/containers-and-docker/0"},"course")," out on Containers and Docker."),Object(o.b)("h2",null,"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.docker.com/resources"},"Docker resources")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/get-started/"},"Docker tutorial")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://dzone.com/articles/evolution-of-linux-containers-future"},"The Evolution of Linux Containers and Their Future")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.opencontainers.org"},"Open Container Initiative (OCI)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.cncf.io"},"Cloud Native Computing Foundation (CNCF)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://blog.docker.com/2017/07/demystifying-open-container-initiative-oci-specifications"},"Demystifying the Open Container Initiative (OCI) Specifications"))))}m.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-concepts-containers-index-mdx-68ba97a46e1b4cceee8d.js.map