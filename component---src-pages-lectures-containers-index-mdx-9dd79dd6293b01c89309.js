(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),r=n("NmYn"),b=n.n(r),c=n("Wbzz"),i=n("Xrax"),o=n("k4MR"),d=n("TSYQ"),u=n.n(d),s=n("QH2O"),m=n.n(s),O=n("qKvR"),j=function(e){var t,n=e.title,a=e.theme,l=e.tabs,r=void 0===l?[]:l;return Object(O.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===a,t))},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12"},Object(O.b)("h1",{id:"page-title",className:m.a.text},n)))))},p=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,a=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,l=n||a,r=l.baseUrl,b=l.subDirectory,i=r+"/edit/"+l.branch+b+"/src/pages"+t;return r?Object(O.b)("div",{className:"bx--row "+p.row},Object(O.b)("div",{className:"bx--col"},Object(O.b)("a",{className:p.link,href:i},"Edit this page on GitHub"))):null},h=n("FCXl"),N=n("dI71"),k=n("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,l=a.split("/").filter(Boolean).slice(-1)[0],r=n.map((function(e){var t,n=b()(e,{lower:!0,strict:!0}),r=n===l,i=new RegExp(l+"/?(#.*)?$"),o=a.replace(i,n);return Object(O.b)("li",{key:e,className:u()((t={},t[k.selectedItem]=r,t),k.listItem)},Object(O.b)(c.Link,{className:k.link,to:""+o},e))}));return Object(O.b)("div",{className:k.tabsContainer},Object(O.b)("div",{className:"bx--grid"},Object(O.b)("div",{className:"bx--row"},Object(O.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(O.b)("nav",{"aria-label":t},Object(O.b)("ul",{className:k.list},r))))))},t}(l.a.Component),y=n("MjG9"),w=n("CzIb"),f=n("Asxa"),v=n("OIbQ"),C=n.n(v),T=function(e){var t=e.date,n=new Date(t);return t?Object(O.b)(f.c,{className:C.a.row},Object(O.b)(f.a,null,Object(O.b)("div",{className:C.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,l=e.Title,r=t.frontmatter,d=void 0===r?{}:r,u=t.relativePagePath,s=t.titleType,m=d.tabs,p=d.title,N=d.theme,k=d.description,f=d.keywords,v=d.date,C=Object(w.a)().interiorTheme,I=Object(c.useStaticQuery)("2456312558").site.pathPrefix,D=I?a.pathname.replace(I,""):a.pathname,R=m?D.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",A=N||C;return Object(O.b)(o.a,{tabs:m,homepage:!1,theme:A,pageTitle:p,pageDescription:k,pageKeywords:f,titleType:s},Object(O.b)(j,{title:l?Object(O.b)(l,null):p,label:"label",tabs:m,theme:A}),m&&Object(O.b)(x,{title:p,slug:D,tabs:m,currentTab:R}),Object(O.b)(y.a,{padded:!0},n,Object(O.b)(g,{relativePagePath:u}),Object(O.b)(T,{date:v})),Object(O.b)(h.a,{pageContext:t,location:a,slug:D,tabs:m,currentTab:R}),Object(O.b)(i.a,null))}},"5S1X":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n("wx14"),l=n("zLVn"),r=(n("q1tI"),n("7ljp")),b=n("013z"),c=(n("qKvR"),["components"]),i={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},d=o("MiniCard"),u=o("Accordion"),s=o("AccordionItem"),m=o("InlineNotification"),O={_frontmatter:i},j=b.a;function p(e){var t=e.components,n=Object(l.a)(e,c);return Object(r.b)(j,Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Containers"),Object(r.b)("p",null,"Containers are a standard way to package an application and all its dependencies so that it can be moved between environments and run without change. They work by hiding the differences between applications inside the container so that everything outside the container can be standardized."),Object(r.b)("p",null,"For example, Docker created standard way to create images for Linux Containers."),Object(r.b)("h2",null,"Resources"),Object(r.b)(d,{title:"Container Basics Presentation",href:"/slides/02-Containers-Basics.pdf",mdxType:"MiniCard"}),Object(r.b)("h2",null,"Basic Docker Commands"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Action"),Object(r.b)("th",{parentName:"tr",align:null},"Command"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Get Docker version"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"docker version"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Run ",Object(r.b)("inlineCode",{parentName:"td"},"hello-world")," Container"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"docker run hello-world"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"List Running Containers"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"docker ps"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Stop a container"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"docker stop <container-name/container-id>"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"List Docker Images"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"}," docker images"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Login into registry"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"docker login"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Build an image"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"docker build -t <image_name>:<tag> ."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Inspect a docker object"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"}," docker inspect <name/id>"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Inspect a docker image"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"}," docker inspect image <name/id>"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Pull an image"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"}," docker pull <image_name>:<tag>"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Push an Image"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"}," docker push <image_name>:<tag>"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Remove a container"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"}," docker rm <container-name/container-id>"))))),Object(r.b)("h2",null,"Running Docker on Kubernetes"),Object(r.b)("ol",null,Object(r.b)("li",null,"Make sure you are logged in to your Kubernetes cluster through a terminal or IBM Cloud Shell."),Object(r.b)("p",null,"{” “}"),Object(r.b)("li",null,"Next, we need to apply the yaml file for the Docker in Docker pod.",Object(r.b)("code",null,"kubectl apply -f https://raw.githubusercontent.com/ibm-cloud-architecture/learning-cloudnative-101/master/static/yamls/containers/dind.yaml")),Object(r.b)("p",null,"{” “}"),Object(r.b)("li",null,"Then, we need to bash into the running pod.",Object(r.b)("code",null,"kubectl exec -it dind bash")),Object(r.b)("li",null,"Finally check to make sure you can run docker commands, such as"," ",Object(r.b)("strong",null,Object(r.b)("em",null,"docker version")))),Object(r.b)("h2",null,"Docker Lecture Walkthroughs"),Object(r.b)(u,{mdxType:"Accordion"},Object(r.b)(s,{title:"Verify Docker Installation",mdxType:"AccordionItem"},Object(r.b)("ol",null,Object(r.b)("li",null,"Check the Docker Version",Object(r.b)("code",null,"docker version")),Object(r.b)("li",null,"Run the `hello-world` container",Object(r.b)("code",null,"docker run hello-world"),Object(r.b)(m,{mdxType:"InlineNotification"},"Notice: If it is not already on your machine, it will be downloaded automatically.")),Object(r.b)("li",null,"Check the output:",Object(r.b)("blockquote",null,"Hello from Docker! ",Object(r.b)("br",null),"This message shows that your installation appears to be working correctly!....")))),Object(r.b)(s,{title:"Running a Basic Container",mdxType:"AccordionItem"},Object(r.b)("ol",null,Object(r.b)("li",null,"Start and nginx container and name it `nginx`.",Object(r.b)("code",null,"docker run --rm -d --name nginx -p 8080:8080 bitnami/nginx")),Object(r.b)("li",null,"Check to see if the container is running",Object(r.b)("code",null,"docker ps")),Object(r.b)("li",null,"Bash into the running nginx container",Object(r.b)("code",null,"docker exec -it nginx bash")),Object(r.b)("li",null,"Accessing the running nginx container",Object(r.b)("code",null,"curl http://localhost:8080")),Object(r.b)("li",null,"Stopping the nginx container",Object(r.b)("code",null,"docker stop nginx")))),Object(r.b)(s,{title:"Building and Running a Docker Image",mdxType:"AccordionItem"},Object(r.b)("ol",null,Object(r.b)("li",null,"Let's start by creating a directory named"," ",Object(r.b)("strong",null,Object(r.b)("em",null,"assets"))," ","and add an"," ",Object(r.b)("strong",null,Object(r.b)("em",null,"index.html"))," ","file to it. ",Object(r.b)("br",null),Object(r.b)("code",null,'mkdir -p assets; echo "Welcome to the Cloud Native BootCamp" > assets/index.html; cd assets')),Object(r.b)("li",null,"Download the sample"," ",Object(r.b)("strong",null,Object(r.b)("em",null,"Dockerfile"))," ","into the"," ",Object(r.b)("strong",null,Object(r.b)("em",null,"assets"))," ","directory.",Object(r.b)("code",null,"wget https://raw.githubusercontent.com/ibm-cloud-architecture/learning-cloudnative-101/master/static/yamls/containers/Dockerfile")),Object(r.b)("li",null,"Build the docker image and name it"," ",Object(r.b)("strong",null,Object(r.b)("em",null,"webserver"))," ","with a tag of"," ",Object(r.b)("strong",null,Object(r.b)("em",null,"1.0")),".",Object(r.b)("code",null,"docker build -t webserver:1.0 .")),Object(r.b)("li",null,"Run the new image in a container.",Object(r.b)("code",null,"docker run --rm -d -p 8000:8080 webserver:1.0")),Object(r.b)("li",null,"Access the new container",Object(r.b)("code",null,"curl http://localhost:8000")))),Object(r.b)(s,{title:"Pushing to a Container Registry",mdxType:"AccordionItem"},Object(r.b)("ol",null,Object(r.b)("li",null,"Login to Docker Hub using YOUR created username and password.",Object(r.b)("code",null,"docker login -u USERNAME -p PASSWORD")),Object(r.b)("li",null,"Tag the docker image with docker hub username",Object(r.b)("code",null,"docker tag webserver:1.0 USERNAME/webserver:1.0")),Object(r.b)("li",null,"Push the image to the registry",Object(r.b)("code",null,"docker push USERNAME/webserver:1.0")),Object(r.b)("li",null,"Run the new image",Object(r.b)("code",null,"docker run --rm -p 8000:8080 USERNAME/webserver:1.0")),Object(r.b)("li",null,"You can also pull down other images from other users.",Object(r.b)("code",null,"docker pull USERNAME/webserver:1.0")))),Object(r.b)(s,{title:"Adding Environment Variables for your Container.",mdxType:"AccordionItem"},Object(r.b)("ol",null,Object(r.b)("li",null,"Create a Docker file",Object(r.b)("code",null,"docker run --rm --name nginx -e USERNAME=Carlos -e PASSWORD=IlikeYAML -e LOG_LEVEL=ERROR -p 8080:8080 bitnami/nginx")),Object(r.b)("li",null,"Create a Docker file",Object(r.b)("code",null,"docker exec -it nginx sh -c \"env | grep 'USERNAME\\|PASSWORD\\|LOG_LEVEL'\"")))),Object(r.b)(s,{title:"Running a Container with a Mounted Volume",mdxType:"AccordionItem"},Object(r.b)("ol",null,Object(r.b)("li",null,"Run the image with a volume attached.",Object(r.b)("code",null,"docker run --rm --name nginx -p 8080:8080 -v $PWD/assets:/app bitnami/nginx"))))),Object(r.b)("h2",null,"Activities"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Task"),Object(r.b)("th",{parentName:"tr",align:null},"Description"),Object(r.b)("th",{parentName:"tr",align:"left"},"Link"),Object(r.b)("th",{parentName:"tr",align:null},"Time"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Walkthroughs "))),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:"left"}),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"What is a Container?"),Object(r.b)("td",{parentName:"tr",align:null},"A look under the the covers at what is a Linux Container?"),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{href:"https://www.katacoda.com/courses/container-runtimes/what-is-a-container",target:"_blank"},"Understand Containers")),Object(r.b)("td",{parentName:"tr",align:null},"10 min")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"What is an Image?"),Object(r.b)("td",{parentName:"tr",align:null},"A look under the the covers at what is a Linux Container Image?"),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{href:"https://www.katacoda.com/courses/container-runtimes/what-is-a-container-image",target:"_blank"},"Container Images")),Object(r.b)("td",{parentName:"tr",align:null},"10 min")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Docker Basics"),Object(r.b)("td",{parentName:"tr",align:null},"Set of walkthroughs that cover docker basics"),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{href:"https://www.katacoda.com/courses/docker",target:"_blank"},"Docker Basics")),Object(r.b)("td",{parentName:"tr",align:null},"10 min")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(r.b)("td",{parentName:"tr",align:null}),Object(r.b)("td",{parentName:"tr",align:"left"}),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"IBM Container Registry"),Object(r.b)("td",{parentName:"tr",align:null},"Build and Deploy Run using IBM Container Registry"),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"./activities/ibmcloud-cr"},"IBM Container Registry")),Object(r.b)("td",{parentName:"tr",align:null},"30 min")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Docker Lab"),Object(r.b)("td",{parentName:"tr",align:null},"Running a Sample Application on Docker"),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"./activities/"},"Docker Lab")),Object(r.b)("td",{parentName:"tr",align:null},"30 min")))),Object(r.b)("p",null,"Once you have completed these tasks, you should have a base understanding of containers and how to use Docker."))}p.isMDXComponent=!0},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-lectures-containers-index-mdx-9dd79dd6293b01c89309.js.map