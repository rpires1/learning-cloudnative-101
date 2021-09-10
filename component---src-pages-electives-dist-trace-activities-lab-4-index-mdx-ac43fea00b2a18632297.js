(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),c=a.n(i),l=a("Wbzz"),o=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),d=a.n(m),j=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(j.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=i.length,t[d.a.darkMode]="dark"===n,t))},Object(j.b)("div",{className:"bx--grid"},Object(j.b)("div",{className:"bx--row"},Object(j.b)("div",{className:"bx--col-lg-12"},Object(j.b)("h1",{id:"page-title",className:d.a.text},a)))))},O=a("BAC9"),u=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,c=r.subDirectory,o=i+"/edit/"+r.branch+c+"/src/pages"+t;return i?Object(j.b)("div",{className:"bx--row "+O.row},Object(j.b)("div",{className:"bx--col"},Object(j.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},h=a("FCXl"),N=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),i=a===r,o=new RegExp(r+"/?(#.*)?$"),b=n.replace(o,a);return Object(j.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(j.b)(l.Link,{className:f.link,to:""+b},e))}));return Object(j.b)("div",{className:f.tabsContainer},Object(j.b)("div",{className:"bx--grid"},Object(j.b)("div",{className:"bx--row"},Object(j.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(j.b)("nav",{"aria-label":t},Object(j.b)("ul",{className:f.list},i))))))},t}(r.a.Component),A=a("MjG9"),y=a("CzIb"),T=a("Asxa"),C=a("OIbQ"),x=a.n(C),P=function(e){var t=e.date,a=new Date(t);return t?Object(j.b)(T.c,{className:x.a.row},Object(j.b)(T.a,null,Object(j.b)("div",{className:x.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,s=void 0===i?{}:i,p=t.relativePagePath,m=t.titleType,d=s.tabs,O=s.title,N=s.theme,f=s.description,T=s.keywords,C=s.date,x=Object(y.a)().interiorTheme,w=Object(l.useStaticQuery)("2456312558").site.pathPrefix,E=w?n.pathname.replace(w,""):n.pathname,k=d?E.split("/").filter(Boolean).slice(-1)[0]||c()(d[0],{lower:!0}):"",R=N||x;return Object(j.b)(b.a,{tabs:d,homepage:!1,theme:R,pageTitle:O,pageDescription:f,pageKeywords:T,titleType:m},Object(j.b)(g,{title:r?Object(j.b)(r,null):O,label:"label",tabs:d,theme:R}),d&&Object(j.b)(v,{title:O,slug:E,tabs:d,currentTab:k}),Object(j.b)(A.a,{padded:!0},a,Object(j.b)(u,{relativePagePath:p}),Object(j.b)(P,{date:C})),Object(j.b)(h.a,{pageContext:t,location:n,slug:E,tabs:d,currentTab:k}),Object(j.b)(o.a,null))}},"7h4w":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),c=a("013z"),l=(a("qKvR"),["components"]),o={},b={_frontmatter:o},s=c.a;function p(e){var t=e.components,a=Object(r.a)(e,l);return Object(i.b)(s,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"General Instructions"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Clone the git repository"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"git clone https://github.com/ibm-cloud-architecture/learning-distributed-tracing-101.git\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Change to the lab directory"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"cd learning-distrubing-tracing-101/lab-jaeger-ocp\n")))),Object(i.b)("h2",null,"Understanding Jaeger"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Read the OpenShift Documentation ",Object(i.b)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.1/service_mesh/service_mesh_arch/ossm-jaeger.html"},"Understanding Jaeger"))),Object(i.b)("h2",null,"Installing the Jaeger operator"),Object(i.b)("p",null,"OpenShift 3"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Install from OperatorHub.io ",Object(i.b)("a",{parentName:"li",href:"https://operatorhub.io/operator/jaeger"},"Jaeger Operator"),"\nOpenShift 4, You can use the CodeReady Containers for local development cluster ",Object(i.b)("a",{parentName:"li",href:"https://cloud.redhat.com/openshift/install/crc/installer-provisioned"},"Code Ready Containers")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.1/service_mesh/service_mesh_install/installing-ossm.html#ossm-operator-install-jaeger_installing-ossm"},"Installing the Jaeger Operator on OpenShift 4"))),Object(i.b)("h2",null,"(OpenShift 3) Creating an instance of Jaeger"),Object(i.b)("p",null,"Create a Custom Resource for Jaeger"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Log in to the OpenShift Container Platform web console.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select project ",Object(i.b)("inlineCode",{parentName:"p"},"operators")," ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Verify Jaeger Operator installed")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"From the command line, create a Jaeger instance in the ",Object(i.b)("inlineCode",{parentName:"p"},"default")," namespace"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"kubectl apply -f - <<EOF\napiVersion: jaegertracing.io/v1\nkind: Jaeger\nmetadata:\n  name: my-jaeger\nEOF\n")))),Object(i.b)("h2",null,"(OpenShift 4) Creating an instance of Jaeger"),Object(i.b)("p",null,"Create a Custom Resource for Jaeger"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Log in to the OpenShift Container Platform web console."),Object(i.b)("li",{parentName:"ol"},"Select project ",Object(i.b)("inlineCode",{parentName:"li"},"openshift-operators")),Object(i.b)("li",{parentName:"ol"},"Navigate to ",Object(i.b)("strong",{parentName:"li"},"Operators → Installed Operators")),Object(i.b)("li",{parentName:"ol"},"Click the ",Object(i.b)("strong",{parentName:"li"},"Jaeger Operator")," provided by Red Hat"),Object(i.b)("li",{parentName:"ol"},"Under ",Object(i.b)("strong",{parentName:"li"},"Provided APIs")," "),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Create Instance")),Object(i.b)("li",{parentName:"ol"},"Edit namespace to your project for example ",Object(i.b)("inlineCode",{parentName:"li"},"default")),Object(i.b)("li",{parentName:"ol"},"Review yaml and Click Create")),Object(i.b)("h2",null,"Verify Jaeger instance created"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Verify the Jaeger services in the ",Object(i.b)("inlineCode",{parentName:"p"},"default")," namespace"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"oc get services -n default | grep jaeger\nmy-jaeger-agent                ClusterIP      None             <none>      5775/UDP,5778/TCP,6831/UDP,6832/UDP      7m\nmy-jaeger-collector            ClusterIP      172.21.191.135   <none>      9411/TCP,14250/TCP,14267/TCP,14268/TCP   7m\nmy-jaeger-collector-headless   ClusterIP      None             <none>      9411/TCP,14250/TCP,14267/TCP,14268/TCP   7m\nmy-jaeger-query                ClusterIP      172.21.89.78     <none>      443/TCP                                  7m\n")))),Object(i.b)("p",null,"NOTE: Take a look at the ",Object(i.b)("inlineCode",{parentName:"p"},"my-jaeger-collector")," on port ",Object(i.b)("inlineCode",{parentName:"p"},"14268/TCP")," this is the service to be used by our services to send the Jaeger traces containing the spans, you will configure this in the kubernetes deployment yaml manifest."),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Find the route to the Jaeger UI"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"oc get route my-jaeger        \nNAME        HOST/PORT                            PATH   SERVICES          PORT    TERMINATION   WILDCARD\nmy-jaeger   my-jaeger-default.apps-crc.testing          my-jaeger-query   <all>   reencrypt     None\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the Jaeger UI in the browser using value HOST/PORT - ",Object(i.b)("a",{parentName:"p",href:"https://my-jaeger-default.apps-crc.testing"},"https://my-jaeger-default.apps-crc.testing")))),Object(i.b)("h2",null,"Deploy the Application"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Deploy the services ",Object(i.b)("inlineCode",{parentName:"li"},"service-a")," and ",Object(i.b)("inlineCode",{parentName:"li"},"service-b"))),Object(i.b)("p",null,"Use the file ",Object(i.b)("inlineCode",{parentName:"p"},"jaeger-nodejs.yaml")," for Node.js or the file ",Object(i.b)("inlineCode",{parentName:"p"},"jaeger-java.yaml")," for Java"),Object(i.b)("p",null,"Here is an example using Node.js services and deployments:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"oc apply -f jaeger-nodejs.yaml -n default\n")),Object(i.b)("p",null,"Let’s look at the file content on how the services are defined to be deploy into OpenShift cluster:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"---\napiVersion: v1\nkind: Service\nmetadata:\n  name: service-a\n  labels:\n    app: service-a\nspec:\n  ports:\n    - port: 8080\n      name: http\n  selector:\n    app: service-a\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: service-a\n  labels:\n    app: service-a\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: service-a\n  template:\n    metadata:\n      labels:\n        app: service-a\n        version: v1\n    spec:\n      containers:\n        - name: app\n          image: csantanapr/service-a-nodejs\n          env:\n            - name: JAEGER_ENDPOINT\n              value: http://my-jaeger-collector:14268/api/traces\n            - name: SERVICE_FORMATTER\n              value: service-b\n          imagePullPolicy: Always\n          ports:\n            - containerPort: 8080\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: service-b\n  labels:\n    app: service-b\nspec:\n  ports:\n    - port: 8081\n      name: http\n  selector:\n    app: service-b\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: service-b\n  labels:\n    app: service-b\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: service-b\n  template:\n    metadata:\n      labels:\n        app: service-b\n        version: v1\n    spec:\n      containers:\n        - name: app\n          image: csantanapr/service-b-nodejs\n          env:\n            - name: JAEGER_ENDPOINT\n              value: http://my-jaeger-collector:14268/api/traces\n          imagePullPolicy: Always\n          ports:\n            - containerPort: 8081\n\n")),Object(i.b)("p",null,"In the yaml deployment manifest there are few items to point out:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Ports")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The port for the container is specified in the service and the container in the deployment, for example ",Object(i.b)("inlineCode",{parentName:"li"},"service-a")," with port ",Object(i.b)("inlineCode",{parentName:"li"},"8080")," and ",Object(i.b)("inlineCode",{parentName:"li"},"service-b")," with port ",Object(i.b)("inlineCode",{parentName:"li"},"8081"),".")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Environment Variables")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The variable ",Object(i.b)("inlineCode",{parentName:"li"},"JAEGER_ENDPOINT")," is specified to indicate to the Jaeger client library to send the traces using http to the jaeger collector service ",Object(i.b)("inlineCode",{parentName:"li"},"http://my-jaeger-collector:14268/api/traces")," that is deployed on the same namespace ",Object(i.b)("inlineCode",{parentName:"li"},"default")," as the services. You could also opt for using a side card and use UDP to send traces to an agent side card and this will foward the traces to the jaeger collector for more info see the jaeger operator documentation on how to enable this with an annotation.  "),Object(i.b)("li",{parentName:"ul"},"The variable ",Object(i.b)("inlineCode",{parentName:"li"},"SERVICE_FORMATTER")," used by ",Object(i.b)("inlineCode",{parentName:"li"},"service-a")," to indicate the hostname of ",Object(i.b)("inlineCode",{parentName:"li"},"service-b")," that will use to format the hello message.")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Verify services are deployed and running:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"oc get all -l app=service-a -n default\noc get all -l app=service-b -n default\nNAME                             READY   STATUS    RESTARTS   AGE\npod/service-a-785975554d-5cql2   1/1     Running   0          19m\npod/service-b-674b748766-t7464   1/1     Running   0          19m\n\nNAME                TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE\nservice/service-a   ClusterIP   172.30.182.142   <none>        8080/TCP   20m\nservice/service-b   ClusterIP   172.30.108.212   <none>        8081/TCP   19m\n\nNAME                        READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/service-a   1/1     1            1           19m\ndeployment.apps/service-b   1/1     1            1           19m\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Expose the service ",Object(i.b)("inlineCode",{parentName:"p"},"service-a")," with a route"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"oc create route edge  --service=service-a -n default\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Get the hostname for the route:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"oc get route service-a -n default\nNAME        HOST/PORT                            PATH   SERVICES    PORT   TERMINATION   WILDCARD\nservice-a   service-a-default.apps-crc.testing          service-a   http   edge          None\n")))),Object(i.b)("h2",null,"Find Traces"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use curl or open browser with the endpoint URL using the HOST/PORT of the route"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"curl -k https://service-a-default.apps-crc.testing/sayHello/Carlos\nHello from service-b Carlos!\n")))),Object(i.b)("p",null,"From the result you can see that ",Object(i.b)("inlineCode",{parentName:"p"},"service-a")," called ",Object(i.b)("inlineCode",{parentName:"p"},"service-b")," and replied back."),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"In the Jaeger UI select service-a and click ",Object(i.b)("strong",{parentName:"li"},"Find Traces"))),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABYlAAAWJQFJUiTwAAABWklEQVQoz5WSTU7DMBCFc0wkaKW2C9RdF+UknKMS56A7BBFikzYpDaRx7NQ/ie3U5TmhBRZI6ehJGVn5Zt6MHUwmk7v5/HG5fAvD+8Xi6uHhdjYbDYfXN//GYDCYTqej8ThQxpRVVRRFlmW6ro/OefWLoGAsKwpgVVXVdW2MaZqmF+pcwDlnlGoN3PMgXdvZWOtOFqxtDodDl+OHLscnEG3Up0AuhWxsY7S2KNAKhVHdaAMhV1KijzUmkFJ6oA3AO0rT3Y5yTsqSMJYzhrxUspQ/okJAe6W87bLEyiqlFOAkz5+iKFyvX1arcB2HcbIiJBViy/lZKRc4gTxM25nBw1JOabRNn5PkNd5sss93UnywfcrK39pSFuUkJsTPzBiD59O2tWsa7A0DWu3L+Q39lbWWKiVq/Q3Dcwc7H0fX76q9bbyQc2fX+4V4GJ3Bn6/qMhgNAXdXBfMXwV8Gq9RPz1iExAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"jaeger-trace",title:"jaeger-trace",src:"/static/4b8d8c1bf8781b913001981dae853258/3cbba/ocp-jaeger-traces.png",srcSet:["/static/4b8d8c1bf8781b913001981dae853258/7fc1e/ocp-jaeger-traces.png 288w","/static/4b8d8c1bf8781b913001981dae853258/a5df1/ocp-jaeger-traces.png 576w","/static/4b8d8c1bf8781b913001981dae853258/3cbba/ocp-jaeger-traces.png 1152w","/static/4b8d8c1bf8781b913001981dae853258/0b124/ocp-jaeger-traces.png 1728w","/static/4b8d8c1bf8781b913001981dae853258/4ea69/ocp-jaeger-traces.png 2304w","/static/4b8d8c1bf8781b913001981dae853258/fed10/ocp-jaeger-traces.png 2658w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Click on one of the traces and expand the spans in the trace")),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"92.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAABYlAAAWJQFJUiTwAAACXUlEQVQ4y3WT207bQBCG/eyoVxQa2j4A6hXqHVKfgYNoBSqHpkBCqGOvd+3dnZ092E5ipx07BZTQ/vo8+ne9o7Fn7OjzwcGXw8PLi4vhzc2n/f03W1sfBoP3g8He7i4x2NkZUHzi3c7b3e1t4uPeHp2JuHP3Gf8+Hl9NJneMTaRMrS3qWs7mpm31ojHtcgU03RK6zUV3oK6jschjtKn3LITEWmaMsDZDJNMBsPJ9hFRypkSmc2FkLNJo/PAwGg4l5yUian2WstOMn7DsOGVHSbryR9OElqcso2W3SaY/EMVgrjPxCIbq/0J7PE1OGLtQ+lyqc6l71DNnXBBfRf4tL8hEvKqv0N1a/6OPSTzlcWyklILrPIci72MREL0BI5XVGpVyoB1AlJXVJeAtuiG6O+vjNI3jmAuRMsayrAucE+TTLCNDt1Y7hZRryRQLpcoQMAQbgitLRzGE+knVk8iHEDYri6KwFsFahWisJUMxrMkH38k595L8s6+sjVnM58o5olmQnXfXKy0WDRWPeFlda7y3nsqOrKdkkgZqjkG0viuzjuueDLRCoyMX/DSNE5Yo0NbbuqI3LGc99TP9JkEd8ChKJxywgDxqm6atdVvJtpTLSqVJPLq/o9Y6h97bvl9/oaVWEkAZA86iAR21bbucwbJWxO8ZpEkymTzSiKbxNFuNqhuQoBmtfJ7nvFdRyLXkZa2LXGilAZHYEL0r8SJjNpOVkjQDTT8Wtc1aQtG0HI18UzSt/yQ7xwEMNbf8t+g76T6Stm3amel61qOpJ1IprYWUuVL0oK9Fs1RKAcAfDATZqJUNObcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"jaeger-span",title:"jaeger-span",src:"/static/e6ff5abc20ca048a28847aa35ea03f77/3cbba/ocp-jaeger-spans.png",srcSet:["/static/e6ff5abc20ca048a28847aa35ea03f77/7fc1e/ocp-jaeger-spans.png 288w","/static/e6ff5abc20ca048a28847aa35ea03f77/a5df1/ocp-jaeger-spans.png 576w","/static/e6ff5abc20ca048a28847aa35ea03f77/3cbba/ocp-jaeger-spans.png 1152w","/static/e6ff5abc20ca048a28847aa35ea03f77/0b124/ocp-jaeger-spans.png 1728w","/static/e6ff5abc20ca048a28847aa35ea03f77/4ea69/ocp-jaeger-spans.png 2304w","/static/e6ff5abc20ca048a28847aa35ea03f77/630e6/ocp-jaeger-spans.png 2656w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null,"Check one of the labs ",Object(i.b)("a",{parentName:"p",href:"./lab1"},"Lab Jaeger - Node.js")," or ",Object(i.b)("a",{parentName:"p",href:"./lab2"},"Lab Jaeger - Java")," for a more in depth lab for Opentracing with Jaeger."))}p.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-electives-dist-trace-activities-lab-4-index-mdx-ac43fea00b2a18632297.js.map