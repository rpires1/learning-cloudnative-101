(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"013z":function(e,t,A){"use strict";var a=A("q1tI"),o=A.n(a),n=A("NmYn"),i=A.n(n),s=A("Wbzz"),r=A("Xrax"),l=A("k4MR"),c=A("TSYQ"),d=A.n(c),b=A("QH2O"),p=A.n(b),u=A("qKvR"),m=function(e){var t,A=e.title,a=e.theme,o=e.tabs,n=void 0===o?[]:o;return Object(u.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=n.length,t[p.a.darkMode]="dark"===a,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},A)))))},g=A("BAC9"),h=function(e){var t=e.relativePagePath,A=e.repository,a=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=A||a,n=o.baseUrl,i=o.subDirectory,r=n+"/edit/"+o.branch+i+"/src/pages"+t;return n?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:r},"Edit this page on GitHub"))):null},y=A("FCXl"),j=A("dI71"),f=A("I8xM"),E=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,A=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],n=A.map((function(e){var t,A=i()(e,{lower:!0,strict:!0}),n=A===o,r=new RegExp(o+"/?(#.*)?$"),l=a.replace(r,A);return Object(u.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=n,t),f.listItem)},Object(u.b)(s.Link,{className:f.link,to:""+l},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},n))))))},t}(o.a.Component),w=A("MjG9"),v=A("CzIb"),x=A("Asxa"),O=A("OIbQ"),N=A.n(O),B=function(e){var t=e.date,A=new Date(t);return t?Object(u.b)(x.c,{className:N.a.row},Object(u.b)(x.a,null,Object(u.b)("div",{className:N.a.text},"Page last updated: ",A.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,A=e.children,a=e.location,o=e.Title,n=t.frontmatter,c=void 0===n?{}:n,d=t.relativePagePath,b=t.titleType,p=c.tabs,g=c.title,j=c.theme,f=c.description,x=c.keywords,O=c.date,N=Object(v.a)().interiorTheme,Q=Object(s.useStaticQuery)("2456312558").site.pathPrefix,D=Q?a.pathname.replace(Q,""):a.pathname,k=p?D.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",C=j||N;return Object(u.b)(l.a,{tabs:p,homepage:!1,theme:C,pageTitle:g,pageDescription:f,pageKeywords:x,titleType:b},Object(u.b)(m,{title:o?Object(u.b)(o,null):g,label:"label",tabs:p,theme:C}),p&&Object(u.b)(E,{title:g,slug:D,tabs:p,currentTab:k}),Object(u.b)(w.a,{padded:!0},A,Object(u.b)(h,{relativePagePath:d}),Object(u.b)(B,{date:O})),Object(u.b)(y.a,{pageContext:t,location:a,slug:D,tabs:p,currentTab:k}),Object(u.b)(r.a,null))}},BAC9:function(e,t,A){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,A){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,A){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,A){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ivzS:function(e,t,A){"use strict";A.r(t),A.d(t,"_frontmatter",(function(){return r})),A.d(t,"default",(function(){return u}));var a=A("wx14"),o=A("zLVn"),n=(A("q1tI"),A("7ljp")),i=A("013z"),s=(A("qKvR"),["components"]),r={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},c=l("AnchorLinks"),d=l("AnchorLink"),b={_frontmatter:r},p=i.a;function u(e){var t=e.components,A=Object(o.a)(e,s);return Object(n.b)(p,Object(a.a)({},b,A,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{small:!0,mdxType:"AnchorLinks"},Object(n.b)(d,{mdxType:"AnchorLink"},"Introduction"),Object(n.b)(d,{mdxType:"AnchorLink"},"ArgoCD"),Object(n.b)(d,{mdxType:"AnchorLink"},"Continuous Delivery"),Object(n.b)(d,{mdxType:"AnchorLink"},"Continuous Deployment"),Object(n.b)(d,{mdxType:"AnchorLink"},"References")),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"Continuous Integration, Delivery, and Deployment are important devOps practices and we often hear a lot about them. These processes are valuable and ensures that the software is up to date timely."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Continuous Integration")," is an automation process which allows developers to integrate their work into a repository. When a developer pushes his work into the source code repository, it ensures that the software continues to work properly. It helps to enable collaborative development across the teams and also helps to identify the integration bugs sooner."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Continuous Delivery")," comes after Continuous Integration. It prepares the code for release. It automates the steps that are needed to deploy a build."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Continuous Deployment")," is the final step which succeeds Continuous Delivery. It automatically deploys the code whenever a code change is done. Entire process of deployment is automated.")),Object(n.b)("h2",null,"ArgoCD"),Object(n.b)("p",null,"ArgoCD is a declarative, GitOps continuous delivery tool for Kubernetes. In your applications, application definitions, configurations, and environments should be declarative and version controlled. Also application deployment and lifecycle management should be automated, auditable, and easy to understand. All this can be done using Argo."),Object(n.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"75%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(n.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/KJzgwJrY-mE",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(n.b)("p",null,"Check these guides out if you want to know more about Argo - ",Object(n.b)("a",{parentName:"p",href:"https://argoproj.github.io/argo-cd/"},"Argo CD - Declarative GitOps CD for Kubernetes"),"."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAdqSgJf/xAAYEAADAQEAAAAAAAAAAAAAAAAAAQIDE//aAAgBAQABBQJymc4FnKP/xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8BgX//xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8BpX//xAAYEAEAAwEAAAAAAAAAAAAAAAAAASExMv/aAAgBAQAGPwLHKof/xAAYEAADAQEAAAAAAAAAAAAAAAAAAREx8f/aAAgBAQABPyHWC7BHJo//2gAMAwEAAgADAAAAEAPv/8QAFhEBAQEAAAAAAAAAAAAAAAAAERAh/9oACAEDAQE/ENEn/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERQf/aAAgBAgEBPxCWlZ//xAAZEAEAAwEBAAAAAAAAAAAAAAABABEh0WH/2gAIAQEAAT8QGEGvWFGgDjrsoQTat7P/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"cicd",title:"cicd",src:"/static/a7477b825701fe5ad2bfcc80b24cbd2b/4edc6/cicd.jpg",srcSet:["/static/a7477b825701fe5ad2bfcc80b24cbd2b/69549/cicd.jpg 288w","/static/a7477b825701fe5ad2bfcc80b24cbd2b/473e3/cicd.jpg 576w","/static/a7477b825701fe5ad2bfcc80b24cbd2b/4edc6/cicd.jpg 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h2",null,"Continuous Delivery"),Object(n.b)("p",null,"Continuous Delivery is the next step for Continuous Integration. The artifacts produced in the Continous Integration stage will be deployed on a production like environment. It is more about making sure that the software is ready to be released and it can be deployed to production like environment at any time."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"802px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB3ksRJAP/xAAWEAEBAQAAAAAAAAAAAAAAAAAhACD/2gAIAQEAAQUCMt//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAWEAADAAAAAAAAAAAAAAAAAAAAIEH/2gAIAQEABj8CWH//xAAdEAADAAAHAAAAAAAAAAAAAAAAAREQITFBUYHx/9oACAEBAAE/IbyWZ2irdrDVwngf/9oADAMBAAIAAwAAABDs/wD/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPxBn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHBABAAIDAAMAAAAAAAAAAAAAAQARITFxUaHw/9oACAEBAAE/EEkGzTO4WIlLfqAKFb8wAKDUHgvFFTNv47P/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"cd process",title:"cd process",src:"/static/a07ca09eb2ee5cf3958988ebb291e674/475c9/cd_process.jpg",srcSet:["/static/a07ca09eb2ee5cf3958988ebb291e674/69549/cd_process.jpg 288w","/static/a07ca09eb2ee5cf3958988ebb291e674/473e3/cd_process.jpg 576w","/static/a07ca09eb2ee5cf3958988ebb291e674/475c9/cd_process.jpg 802w"],sizes:"(max-width: 802px) 100vw, 802px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"Developer initially write code to implement a feature or make a change, compile it, and runs all the required tests. If it is running fine and working well, the next thing is to decide the release to the customer. Before doing the release, there are so many things one should take care of. We need to make sure all the configurations are done properly. Respective configuration files should be replaced correctly in the corresponding environments. Also, backups of the previous version of the software should be taken just in case to use them if the system breaks. There may be need to stop some of the services. For example, if your release involves updating the database, you need to stop some of the services which use that database. Also, when this process is done, we need to turn on the maintenance page because we don’t want our users to panic seeing this site can’t be reached. After doing all this, we test the software and if the tests are all working, we can restart the service we stopped previously."),Object(n.b)("p",null,"Initially, we deploy it to staging environment. If everything looks good, we will receive the approval and then we need to deploy it to production like environment. Once you get the approval, we need to do all the steps we did previously again. This process involves so many steps and it is hard to do all of them correctly every time."),Object(n.b)("p",null,"To make lives easier and not to miss any of the steps, automated deployment is necessary. This allows us to deploy more often. Just imagine, if you want to follow all the steps mentioned earlier for every small change, you tend to wait. If we do so and the changes are a lot, then there are more chances of failure and the system may break. So, making the release process automated is very important. By automation, it is easier to deploy smaller changes more frequently. It is also easier to rollback if there is a failure. Moreover, it reduces the overall risk of failure. This allows you to deploy to production like environment at any point of time. To make it possible, the software must all always be in a deliverable state. All your code should be compiled, tested, and the build should succeed."),Object(n.b)("h2",null,"Continuous Deployment"),Object(n.b)("p",null,"Continuous Deployment is the final step. In this stage, every change goes through the pipeline and if it passes all the tests, the code will be deployed into the production automatically. Every step should be automated in this process and the release quality depends mostly on the test suite as everything is automated."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"802px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB3ksRJAP/xAAWEAEBAQAAAAAAAAAAAAAAAAAhACD/2gAIAQEAAQUCMt//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAWEAADAAAAAAAAAAAAAAAAAAAAIEH/2gAIAQEABj8CWH//xAAcEAEAAgEFAAAAAAAAAAAAAAABABEQIUFRgfH/2gAIAQEAAT8hvkazslm6YG2V4T//2gAMAwEAAgADAAAAEOz/AP/EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAEDAQE/EGf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAcEAEBAAICAwAAAAAAAAAAAAABEQAxIVFxofD/2gAIAQEAAT8QSQaac7woiRb6wBZW4AEDWJEeS9TG2/jzn//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"cd deploy",title:"cd deploy",src:"/static/e29fbd3bdb616286cfd0579599ada306/475c9/cdply_process.jpg",srcSet:["/static/e29fbd3bdb616286cfd0579599ada306/69549/cdply_process.jpg 288w","/static/e29fbd3bdb616286cfd0579599ada306/473e3/cdply_process.jpg 576w","/static/e29fbd3bdb616286cfd0579599ada306/475c9/cdply_process.jpg 802w"],sizes:"(max-width: 802px) 100vw, 802px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("p",null,"All the steps that apply in Continuous Delivery also applies here. You may do some things manually in case of Continuous Delivery but in Continuous Deployment, everything is automated. So, basically every piece of code that is pushed in to the SCM system gets automatically deployed in production like environment if the build is successful. The rationale behind the process is that you are going to deploy the code to production sooner or later anyway."),Object(n.b)("p",null,"But it is always recommended not to use it. Because there may be many factors that need to be considered before the release like marketing etc. It is hard to achieve this using Continuous Deployment. But, Continuous Delivery is a must as we are enabling the capability to deliver the software to any given environment at any given time."),Object(n.b)("p",null,"To understand continuous delivery and deployment better, feel free to watch this ",Object(n.b)("a",{parentName:"p",href:"https://mediacenter.ibm.com/media/Continuous+delivery+vs.+continuous+deployment/0_lcetzlcd"},"video"),"."),Object(n.b)("h2",null,"References"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://learning.oreilly.com/library/view/devops-continuous-delivery/9781789132991/"},"Sricharan Vadapalli (2018). DevOps: Continuous Delivery, Integration, and Deployment with DevOps. Publisher: Packt Publishing")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://learning.oreilly.com/library/view/continuous-integration-delivery/9781787286610/"},"Sander Rossel (2017). Continuous Integration, Delivery, and Deployment. Publisher: Packt Publishing"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-concepts-cd-index-mdx-e8222d83ec0e72a82f5f.js.map