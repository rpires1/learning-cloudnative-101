(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"013z":function(e,t,a){"use strict";var s=a("q1tI"),n=a.n(s),o=a("NmYn"),r=a.n(o),l=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),m=a("TSYQ"),u=a.n(m),d=a("QH2O"),b=a.n(d),p=a("qKvR"),f=function(e){var t,a=e.title,s=e.theme,n=e.tabs,o=void 0===n?[]:n;return Object(p.b)("div",{className:u()(b.a.pageHeader,(t={},t[b.a.withTabs]=o.length,t[b.a.darkMode]="dark"===s,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:b.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,s=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||s,o=n.baseUrl,r=n.subDirectory,i=o+"/edit/"+n.branch+r+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},h=a("FCXl"),v=a("dI71"),j=a("I8xM"),k=function(e){function t(){return e.apply(this,arguments)||this}return Object(v.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,s=e.slug,n=s.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),o=a===n,i=new RegExp(n+"/?(#.*)?$"),c=s.replace(i,a);return Object(p.b)("li",{key:e,className:u()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(p.b)(l.Link,{className:j.link,to:""+c},e))}));return Object(p.b)("div",{className:j.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:j.list},o))))))},t}(n.a.Component),N=a("MjG9"),x=a("CzIb"),C=a("Asxa"),y=a("OIbQ"),T=a.n(y),I=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(C.c,{className:T.a.row},Object(p.b)(C.a,null,Object(p.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,s=e.location,n=e.Title,o=t.frontmatter,m=void 0===o?{}:o,u=t.relativePagePath,d=t.titleType,b=m.tabs,g=m.title,v=m.theme,j=m.description,C=m.keywords,y=m.date,T=Object(x.a)().interiorTheme,M=Object(l.useStaticQuery)("2456312558").site.pathPrefix,w=M?s.pathname.replace(M,""):s.pathname,R=b?w.split("/").filter(Boolean).slice(-1)[0]||r()(b[0],{lower:!0}):"",P=v||T;return Object(p.b)(c.a,{tabs:b,homepage:!1,theme:P,pageTitle:g,pageDescription:j,pageKeywords:C,titleType:d},Object(p.b)(f,{title:n?Object(p.b)(n,null):g,label:"label",tabs:b,theme:P}),b&&Object(p.b)(k,{title:g,slug:w,tabs:b,currentTab:R}),Object(p.b)(N.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:u}),Object(p.b)(I,{date:y})),Object(p.b)(h.a,{pageContext:t,location:s,slug:w,tabs:b,currentTab:R}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},gDaY:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return u}));var s=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("013z"),l=(a("qKvR"),["components"]),i={},c={_frontmatter:i},m=r.a;function u(e){var t=e.components,a=Object(n.a)(e,l);return Object(o.b)(m,Object(s.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Problem"),Object(o.b)("p",null,"Produce and consume events to and from an IBM Event Streams on Cloud instance, using NodeJS and Java console samples on Kubernetes/OpenShift cluster."),Object(o.b)("h3",null,"Using the NodeJS sample"),Object(o.b)("p",null,"To complete this lab scenario, you will need to perform the following steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Make use of the NodeJS project located at ",Object(o.b)("a",{parentName:"li",href:"https://github.com/ibm-messaging/event-streams-samples/tree/master/kafka-nodejs-console-sample"},"https://github.com/ibm-messaging/event-streams-samples/tree/master/kafka-nodejs-console-sample")),Object(o.b)("li",{parentName:"ul"},"Create a lite/free IBM Event Streams instance on IBM Cloud"),Object(o.b)("li",{parentName:"ul"},"Create Service Credentials for your IBM Event Streams instance"),Object(o.b)("li",{parentName:"ul"},"Create kubernetes secret"),Object(o.b)("li",{parentName:"ul"},"Deploy kubernetes pod"),Object(o.b)("li",{parentName:"ul"},"Check the logs")),Object(o.b)("h3",null,"Use the Java sample"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Make use of the Java project located at ",Object(o.b)("a",{parentName:"li",href:"https://github.com/ibm-messaging/event-streams-samples/tree/master/kafka-java-console-sample"},"https://github.com/ibm-messaging/event-streams-samples/tree/master/kafka-java-console-sample")),Object(o.b)("li",{parentName:"ul"},"Create a lite/free IBM Event Streams instance on IBM Cloud"),Object(o.b)("li",{parentName:"ul"},"Create Service Credentials for your IBM Event Streams instance"),Object(o.b)("li",{parentName:"ul"},"Create kubernetes secret"),Object(o.b)("li",{parentName:"ul"},"Deploy kubernetes pod"),Object(o.b)("li",{parentName:"ul"},"Check the logs")),Object(o.b)("h2",null,"Verification"),Object(o.b)("p",null,"When you have completed this lab, you will see output similar to the following in your terminal window. The topic name will be specific to the implementation technology that you are using for the given sample."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"NodeJS")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Creating the topic kafka-nodejs-console-sample-topic with AdminClient\nAdminClient connected\nThis sample app will run until interrupted.\nThe consumer has connected.\nThe producer has connected.\nNo messages consumed\nMessage produced, partition: 0 offset: 535\nMessage produced, partition: 0 offset: 536\nNo messages consumed\nMessage produced, partition: 0 offset: 537\nMessage consumed: topic=kafka-nodejs-console-sample-topic, partition=0, offset=535, key=Key0, value=This is a test message #0\nMessage consumed: topic=kafka-nodejs-console-sample-topic, partition=0, offset=536, key=Key1, value=This is a test message #1\nMessage consumed: topic=kafka-nodejs-console-sample-topic, partition=0, offset=537, key=Key2, value=This is a test message #2\nMessage produced, partition: 0 offset: 538\nMessage consumed: topic=kafka-nodejs-console-sample-topic, partition=0, offset=538, key=Key3, value=This is a test message #3\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Java")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[2020-04-28 20:44:53,004] INFO Using command line arguments to find credentials. (com.eventstreams.samples.EventStreamsConsoleSample)\n[2020-04-28 20:44:53,005] INFO Kafka Endpoints: broker...cloud.ibm.com:9093 (com.eventstreams.samples.EventStreamsConsoleSample)\n[2020-04-28 20:44:56,639] INFO Creating the topic kafka-java-console-sample-topic (com.eventstreams.samples.EventStreamsConsoleSample)\n[2020-04-28 20:44:59,826] INFO Topic kafka-java-console-sample-topic already exists (com.eventstreams.samples.EventStreamsConsoleSample)\n[2020-04-28 20:45:00,816] INFO [Partition(topic = kafka-java-console-sample-topic, partition = 0, leader = 3, replicas = [3,1,2], isr = [3,2,1], offlineReplicas = [])] (com.eventstreams.samples.ConsumerRunnable)\n[2020-04-28 20:45:00,817] INFO class com.eventstreams.samples.ConsumerRunnable is starting. (com.eventstreams.samples.ConsumerRunnable)\n[2020-04-28 20:45:01,646] INFO [Partition(topic = kafka-java-console-sample-topic, partition = 0, leader = 3, replicas = [3,1,2], isr = [3,2,1], offlineReplicas = [])] (com.eventstreams.samples.ProducerRunnable)\n[2020-04-28 20:45:01,646] INFO EventStreamsConsoleSample will run until interrupted. (com.eventstreams.samples.EventStreamsConsoleSample)\n[2020-04-28 20:45:01,646] INFO class com.eventstreams.samples.ProducerRunnable is starting. (com.eventstreams.samples.ProducerRunnable)\n[2020-04-28 20:45:02,590] INFO Message produced, offset: 195 (com.eventstreams.samples.ProducerRunnable)\n[2020-04-28 20:45:03,819] INFO No messages consumed (com.eventstreams.samples.ConsumerRunnable)\n[2020-04-28 20:45:04,697] INFO Message produced, offset: 196 (com.eventstreams.samples.ProducerRunnable)\n[2020-04-28 20:45:06,795] INFO Message produced, offset: 197 (com.eventstreams.samples.ProducerRunnable)\n[2020-04-28 20:45:06,821] INFO No messages consumed (com.eventstreams.samples.ConsumerRunnable)\n[2020-04-28 20:45:07,020] INFO Message consumed: ConsumerRecord(topic = kafka-java-console-sample-topic, partition = 0, leaderEpoch = 56, offset = 197, CreateTime = 1588106706698, serialized key size = 3, serialized value size = 25, headers = RecordHeaders(headers = [], isReadOnly = false), key = key, value = This is a test message #2) (com.eventstreams.samples.ConsumerRunnable)\n[2020-04-28 20:45:08,933] INFO Message produced, offset: 198 (com.eventstreams.samples.ProducerRunnable)\n[2020-04-28 20:45:08,954] INFO Message consumed: ConsumerRecord(topic = kafka-java-console-sample-topic, partition = 0, leaderEpoch = 56, offset = 198, CreateTime = 1588106708797, serialized key size = 3, serialized value size = 25, headers = RecordHeaders(headers = [], isReadOnly = false), key = key, value = This is a test message #3) (com.eventstreams.samples.ConsumerRunnable)\n[2020-04-28 20:45:11,024] INFO Message consumed: ConsumerRecord(topic = kafka-java-console-sample-topic, partition = 0, leaderEpoch = 56, offset = 199, CreateTime = 1588106710933, serialized key size = 3, serialized value size = 25, headers = RecordHeaders(headers = [], isReadOnly = false), key = key, value = This is a test message #4) (com.eventstreams.samples.ConsumerRunnable)\n[2020-04-28 20:45:11,028] INFO Message produced, offset: 199 (com.eventstreams.samples.ProducerRunnable)\n[2020-04-28 20:45:13,114] INFO Message produced, offset: 200 (com.eventstreams.samples.ProducerRunnable)\n[2020-04-28 20:45:13,115] INFO Message consumed: ConsumerRecord(topic = kafka-java-console-sample-topic, partition = 0, leaderEpoch = 56, offset = 200, CreateTime = 1588106713028, serialized key size = 3, serialized value size = 25, headers = RecordHeaders(headers = [], isReadOnly = false), key = key, value = This is a test message #5) (com.eventstreams.samples.ConsumerRunnable)\n")),Object(o.b)("h2",null,"Extra credit"),Object(o.b)("p",null,"Using your knowledge of containerization and CI/CD pipelines gained through the bootcamp, construct a pipeline that will build, deploy, and manage these sample applications on a Kubernetes or OpenShift cluster on IBM Cloud."),Object(o.b)("h2",null,"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/EventStreams?topic=eventstreams-getting_started"},"IBM Event Streams on IBM Cloud - Getting started tutorial"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-eda-activities-labs-lab-0-index-mdx-9697424e2b085ced99db.js.map