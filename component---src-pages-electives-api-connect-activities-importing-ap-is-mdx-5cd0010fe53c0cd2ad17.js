(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"013z":function(e,a,t){"use strict";var i=t("q1tI"),n=t.n(i),c=t("NmYn"),s=t.n(c),l=t("Wbzz"),b=t("Xrax"),p=t("k4MR"),o=t("TSYQ"),r=t.n(o),d=t("QH2O"),A=t.n(d),g=t("qKvR"),m=function(e){var a,t=e.title,i=e.theme,n=e.tabs,c=void 0===n?[]:n;return Object(g.b)("div",{className:r()(A.a.pageHeader,(a={},a[A.a.withTabs]=c.length,a[A.a.darkMode]="dark"===i,a))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:A.a.text},t)))))},u=t("BAC9"),f=function(e){var a=e.relativePagePath,t=e.repository,i=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,n=t||i,c=n.baseUrl,s=n.subDirectory,b=c+"/edit/"+n.branch+s+"/src/pages"+a;return c?Object(g.b)("div",{className:"bx--row "+u.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:u.link,href:b},"Edit this page on GitHub"))):null},w=t("FCXl"),h=t("dI71"),N=t("I8xM"),O=function(e){function a(){return e.apply(this,arguments)||this}return Object(h.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,i=e.slug,n=i.split("/").filter(Boolean).slice(-1)[0],c=t.map((function(e){var a,t=s()(e,{lower:!0,strict:!0}),c=t===n,b=new RegExp(n+"/?(#.*)?$"),p=i.replace(b,t);return Object(g.b)("li",{key:e,className:r()((a={},a[N.selectedItem]=c,a),N.listItem)},Object(g.b)(l.Link,{className:N.link,to:""+p},e))}));return Object(g.b)("div",{className:N.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":a},Object(g.b)("ul",{className:N.list},c))))))},a}(n.a.Component),j=t("MjG9"),y=t("CzIb"),x=t("Asxa"),k=t("OIbQ"),v=t.n(k),C=function(e){var a=e.date,t=new Date(a);return a?Object(g.b)(x.c,{className:v.a.row},Object(g.b)(x.a,null,Object(g.b)("div",{className:v.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};a.a=function(e){var a=e.pageContext,t=e.children,i=e.location,n=e.Title,c=a.frontmatter,o=void 0===c?{}:c,r=a.relativePagePath,d=a.titleType,A=o.tabs,u=o.title,h=o.theme,N=o.description,x=o.keywords,k=o.date,v=Object(y.a)().interiorTheme,B=Object(l.useStaticQuery)("2456312558").site.pathPrefix,Q=B?i.pathname.replace(B,""):i.pathname,E=A?Q.split("/").filter(Boolean).slice(-1)[0]||s()(A[0],{lower:!0}):"",S=h||v;return Object(g.b)(p.a,{tabs:A,homepage:!1,theme:S,pageTitle:u,pageDescription:N,pageKeywords:x,titleType:d},Object(g.b)(m,{title:n?Object(g.b)(n,null):u,label:"label",tabs:A,theme:S}),A&&Object(g.b)(O,{title:u,slug:Q,tabs:A,currentTab:E}),Object(g.b)(j.a,{padded:!0},t,Object(g.b)(f,{relativePagePath:r}),Object(g.b)(C,{date:k})),Object(g.b)(w.a,{pageContext:a,location:i,slug:Q,tabs:A,currentTab:E}),Object(g.b)(b.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},Et9O:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return r}));var i=t("wx14"),n=t("zLVn"),c=(t("q1tI"),t("7ljp")),s=t("013z"),l=(t("qKvR"),["components"]),b={},p={_frontmatter:b},o=s.a;function r(e){var a=e.components,t=Object(n.a)(e,l);return Object(c.b)(o,Object(i.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"To setup API Connect follow the instructions for ",Object(c.b)("a",{parentName:"p",href:"./accessAPI"},"API Connect Access"),"."),Object(c.b)("h2",null,"Create a New Catalog"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Once logged in, we will be on the API Connect Dashboard.")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVQoz6WQy0rDQBiF81q2iBdw0yK1WryB3fkeLkVwpa/gxgfwthCLKFi0W5G2SdN2giaxTdrMPZNxklAUtRgQPg7zc863GW2hvLVS3V2q7OSKa/liRWVKPiFXiJkprM4ury+Wt+dKGyqVMl/aVGj7J/XrR13vvT3rVqtr630nxUjSBI4B4ke750wqtwPeLXtou572OsB+QCFhAWaIhIgKyoQ5jBqWPG/KgztZM4QUISQhpp8QFs80ytTBEUnADGJGCGu74r4rj2q4esrPXoQM6Rgx1abACRr8ciiCpAaeaAB5eOntXeDbTiRYLH9b/i5jwsyBqPflVTM6fpA3ehhxllmmHLjjljWy/PDJRIaNKOVBFhnG38a9EfRHASGUYIwQ+bmZKqe+Yprzh5yRf8kf02BIoYp8I9wAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"apidashboard",title:"apidashboard",src:"/static/23a7e8a5786122c62ffc26671be6458b/3cbba/apiconnect-dash.png",srcSet:["/static/23a7e8a5786122c62ffc26671be6458b/7fc1e/apiconnect-dash.png 288w","/static/23a7e8a5786122c62ffc26671be6458b/a5df1/apiconnect-dash.png 576w","/static/23a7e8a5786122c62ffc26671be6458b/3cbba/apiconnect-dash.png 1152w","/static/23a7e8a5786122c62ffc26671be6458b/3fe90/apiconnect-dash.png 1674w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Click the ",Object(c.b)("inlineCode",{parentName:"p"},"Add")," button in the upper left corner and select ",Object(c.b)("inlineCode",{parentName:"p"},"Catalog"),".")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Name your catalog whatever you like, in this case we are using ",Object(c.b)("inlineCode",{parentName:"p"},"Dev"),"."))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnUlEQVQoz5WRTWtTQRSG8y/9F3YhCOKiLkRcinThRnChJbGoRSmtbdWiVWlCbe+tNfUS0qbeJJOEO/cjd77OuWfGSUClRRfCew5zhvdhDu/UWCIWH7Ueb0fnLI0Z77NkOMknqRhzMUpm3Z+TTKS5KAqRpML7R6nMS1NKqGVTvXs0DLtJKVQQ692uOYihzbAzRpaZ04k5YbjXw80IGwE2e0YIXQgjNQoFNanBOYsVWYT1iB603Ku2e9Oxe7GLMzoa0s6ZW23bW2/tlRVXDytHMJXgyRnsaypNIYAQNiK6+8HVD/DOS755Uv3IqJvQl75dDcy1Br+5Ra+jitBcgOc8uMosB3R1zd17D9cb/Mk+fmXUzygYuOeH5sYKX/pMG/+CLZoX32hh3d1+Z+shPWu7w0F1ysnvv92xT0Naarr5y/AXuALY6ej7n3A5tK3Ybn1Xx0MfmN7vyeMRfezRw6ZqnQMClJdgLx9gwtM8SysEpXSW5VMhxxM+YGM/aqWLPBdCCoW/kT/wXOhX8D/hI/xl8h1LObspFZQXzJfh/9NPvuMkh0V1ZoAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"apidev",title:"apidev",src:"/static/74e9318e91916364d508d2ad16e46ee8/3cbba/apiconnect-dev.png",srcSet:["/static/74e9318e91916364d508d2ad16e46ee8/7fc1e/apiconnect-dev.png 288w","/static/74e9318e91916364d508d2ad16e46ee8/a5df1/apiconnect-dev.png 576w","/static/74e9318e91916364d508d2ad16e46ee8/3cbba/apiconnect-dev.png 1152w","/static/74e9318e91916364d508d2ad16e46ee8/ecbf4/apiconnect-dev.png 1272w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"We will be using this catalog for all of our tutorials.")),Object(c.b)("h2",null,"Create a New Product"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Start by clicking on your catalog name from the main dashboard.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Click on the top left arrows button next to the catalog name."))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA20lEQVQoz+3MPW/CMBAG4PyxdoGyVCIdADVCDQNV2fqTO7Rq5UDs2L4PO2bhSAhCytLulR6dXp3uvWxb7N7z7bx8u8+Li6fiLn+WeTVbbWarUuZ0UT6uXyeLl4dlOV1usrqhnxqUBgdsLFpPwjj0GK7cKPQyCumrch/f+lNZpVkZVprOYaQyQXSBG4hSPJe1JQvyNTpse54GOExsGx+M4/4AQ7qUZQucMBwhpN6hgUq7qnYyVe32xsvSYjCeMXZnPJS5e3MLuQUSUUKXI3HieBS3ZxmNmr/3X/6jE0THjE5BBaYuAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"product",title:"product",src:"/static/b446eca10f74ae547562a515cee1551b/3cbba/apiconnect-product.png",srcSet:["/static/b446eca10f74ae547562a515cee1551b/7fc1e/apiconnect-product.png 288w","/static/b446eca10f74ae547562a515cee1551b/a5df1/apiconnect-product.png 576w","/static/b446eca10f74ae547562a515cee1551b/3cbba/apiconnect-product.png 1152w","/static/b446eca10f74ae547562a515cee1551b/5d3f2/apiconnect-product.png 1279w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Next, Select ",Object(c.b)("inlineCode",{parentName:"li"},"Drafts"),".")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"438px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"103.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAAACXBIWXMAAAsTAAALEwEAmpwYAAABuklEQVQ4y+2SSUvDQBSA54/owQ1BD25dwa1VWy0uafXgglLxoP4Ab/4ejyIeFUEFsVLEamuaWk211Va7hNpkUjOZjNNUQRBsxKsfH483yXsMvDeg0+Gp67C32ByN5n7dgRaro9HU30Dt6WvSj99ttgy22p3A5GbWNjYdvgWvf21sbnmAmRueWfTMr9Do869bx3wNtN8+1GxzVqV5fXfv1NLq6KwfWEe9tM7kYmyeaYubMY1M9YxMWtxes4uxe6a7nONtva72PvdX6Rda0D00AaI3t6EIG47GwixHY0SX5h+Ru7mOxb+r/4oBjHEum4WSlM2+ZNJpuSwTQjRNIwYACCFVB33wNf+BSo1+c6FQEkWqBKEIIXpTNGMATVU5ls09vyTu+NT9Q5JPlOUyMQZQtk/wcYQcXJKjMDkMa3sXaDcgymUJ1hYUr/hEEbL3uUA0wyXzApTFnVMh/yqUoPAq/Swo7V9kuMd0iOeDt0+hRJFLSVuHglCq2VlpxgFODca0qudxfMbhEI8wplOvaWXa/FMqXcjHH5NidclEMzowrOLK2t4UpCBVoQddY4DPnRH9Yf1OQP7Af/MveQfsOkDZTZYCXwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"drafts",title:"drafts",src:"/static/f8d8025ea7aa35453826a7358b7c6f4c/33837/apiconnect-drafts.png",srcSet:["/static/f8d8025ea7aa35453826a7358b7c6f4c/7fc1e/apiconnect-drafts.png 288w","/static/f8d8025ea7aa35453826a7358b7c6f4c/33837/apiconnect-drafts.png 438w"],sizes:"(max-width: 438px) 100vw, 438px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"On the ",Object(c.b)("inlineCode",{parentName:"li"},"Drafts")," page, click on the ",Object(c.b)("inlineCode",{parentName:"li"},"Add")," button in the top left side. Then click ",Object(c.b)("inlineCode",{parentName:"li"},"New Product"),".")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA2klEQVQoz63NQWrCQBTG8Xee2hs0uLULcSleruAiG0/gsm5cCSKKkdgkJo04htjJZCbzMk6kbcCNThFsKfxW/8fHg8fm81O72+z0HqzWrzSsFsxWXhC9z1fuwvWct8BZ+3darn0YvG76QzfcZhkrqdCsqHJ5+onJqmZEGNpj+2UUTbzD1I+dmGSYfGBCTSlTNSPCZ0y+yL6MdseQYMpRn7DUqKpLAhVJaXJg8roDoXmwJdEuobzIUXOpBZq4PNIcM45GByEVL0peqPqhvO38yohw63AP+MPmf8bfz+oJG79hqBUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"newproduct",title:"newproduct",src:"/static/86da82d4e4a2dc9d6b48d13812f9894f/3cbba/apinewproduct.png",srcSet:["/static/86da82d4e4a2dc9d6b48d13812f9894f/7fc1e/apinewproduct.png 288w","/static/86da82d4e4a2dc9d6b48d13812f9894f/a5df1/apinewproduct.png 576w","/static/86da82d4e4a2dc9d6b48d13812f9894f/3cbba/apinewproduct.png 1152w","/static/86da82d4e4a2dc9d6b48d13812f9894f/0b124/apinewproduct.png 1728w","/static/86da82d4e4a2dc9d6b48d13812f9894f/4ea69/apinewproduct.png 2304w","/static/86da82d4e4a2dc9d6b48d13812f9894f/0c150/apinewproduct.png 2396w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Fill in the ",Object(c.b)("inlineCode",{parentName:"li"},"Product")," info with the following:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Title: ",Object(c.b)("inlineCode",{parentName:"li"},"Development")),Object(c.b)("li",{parentName:"ul"},"Name: ",Object(c.b)("inlineCode",{parentName:"li"},"Test")),Object(c.b)("li",{parentName:"ul"},"Version: ",Object(c.b)("inlineCode",{parentName:"li"},"1.0.0"))))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.52777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA8ElEQVQoz5WS63KEIAyFef+X7PQy262uSiQRBHdOQ8T+6lTrzCcRkkMO6LqR0XvB651wewRMFEBBEFPGEted9AttrebRzIpo3QL3NQT0I2lSMYIsKKXgv0/ZnvAq6rrB4+XthtGzCdbJiRgpb9dYN6w27rXu496rgICXaiXb5GOafzo+Q9oYVbDadp/dgPdb1wQLJj2PmRMW3VniXnDGIWgdjj5YRxJzs8x2uGt+atJ2idQs26UcQtahxkEiiCNYY25rlyw3DVdfB/sZ6m80ELzaJllbF+VPUssxwdphpX5YrDuRZMwqVqEzuObtGqIa34PHvAUEYp6sAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"apidev",title:"apidev",src:"/static/ce7890a75e4a5b67d6038b9c55e434d0/3cbba/product-details.png",srcSet:["/static/ce7890a75e4a5b67d6038b9c55e434d0/7fc1e/product-details.png 288w","/static/ce7890a75e4a5b67d6038b9c55e434d0/a5df1/product-details.png 576w","/static/ce7890a75e4a5b67d6038b9c55e434d0/3cbba/product-details.png 1152w","/static/ce7890a75e4a5b67d6038b9c55e434d0/ce6f1/product-details.png 1328w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Now a new Product named ",Object(c.b)("inlineCode",{parentName:"li"},"Test")," has been created. On the ",Object(c.b)("inlineCode",{parentName:"li"},"Design")," page all the details about the product can be changed.")),Object(c.b)("h2",null,"Importing a New API"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"With a product created, now we can create a new API for that product.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Navigate back to the ",Object(c.b)("inlineCode",{parentName:"p"},"Drafts")," page.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Click on the top left arrows button next to the catalog name."))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA20lEQVQoz+3MPW/CMBAG4PyxdoGyVCIdADVCDQNV2fqTO7Rq5UDs2L4PO2bhSAhCytLulR6dXp3uvWxb7N7z7bx8u8+Li6fiLn+WeTVbbWarUuZ0UT6uXyeLl4dlOV1usrqhnxqUBgdsLFpPwjj0GK7cKPQyCumrch/f+lNZpVkZVprOYaQyQXSBG4hSPJe1JQvyNTpse54GOExsGx+M4/4AQ7qUZQucMBwhpN6hgUq7qnYyVe32xsvSYjCeMXZnPJS5e3MLuQUSUUKXI3HieBS3ZxmNmr/3X/6jE0THjE5BBaYuAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"product",title:"product",src:"/static/b446eca10f74ae547562a515cee1551b/3cbba/apiconnect-product.png",srcSet:["/static/b446eca10f74ae547562a515cee1551b/7fc1e/apiconnect-product.png 288w","/static/b446eca10f74ae547562a515cee1551b/a5df1/apiconnect-product.png 576w","/static/b446eca10f74ae547562a515cee1551b/3cbba/apiconnect-product.png 1152w","/static/b446eca10f74ae547562a515cee1551b/5d3f2/apiconnect-product.png 1279w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Next, Select ",Object(c.b)("inlineCode",{parentName:"li"},"Drafts"),".")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"438px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"103.125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAIAAADJt1n/AAAACXBIWXMAAAsTAAALEwEAmpwYAAABuklEQVQ4y+2SSUvDQBSA54/owQ1BD25dwa1VWy0uafXgglLxoP4Ab/4ejyIeFUEFsVLEamuaWk211Va7hNpkUjOZjNNUQRBsxKsfH483yXsMvDeg0+Gp67C32ByN5n7dgRaro9HU30Dt6WvSj99ttgy22p3A5GbWNjYdvgWvf21sbnmAmRueWfTMr9Do869bx3wNtN8+1GxzVqV5fXfv1NLq6KwfWEe9tM7kYmyeaYubMY1M9YxMWtxes4uxe6a7nONtva72PvdX6Rda0D00AaI3t6EIG47GwixHY0SX5h+Ru7mOxb+r/4oBjHEum4WSlM2+ZNJpuSwTQjRNIwYACCFVB33wNf+BSo1+c6FQEkWqBKEIIXpTNGMATVU5ls09vyTu+NT9Q5JPlOUyMQZQtk/wcYQcXJKjMDkMa3sXaDcgymUJ1hYUr/hEEbL3uUA0wyXzApTFnVMh/yqUoPAq/Swo7V9kuMd0iOeDt0+hRJFLSVuHglCq2VlpxgFODca0qudxfMbhEI8wplOvaWXa/FMqXcjHH5NidclEMzowrOLK2t4UpCBVoQddY4DPnRH9Yf1OQP7Af/MveQfsOkDZTZYCXwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"drafts",title:"drafts",src:"/static/f8d8025ea7aa35453826a7358b7c6f4c/33837/apiconnect-drafts.png",srcSet:["/static/f8d8025ea7aa35453826a7358b7c6f4c/7fc1e/apiconnect-drafts.png 288w","/static/f8d8025ea7aa35453826a7358b7c6f4c/33837/apiconnect-drafts.png 438w"],sizes:"(max-width: 438px) 100vw, 438px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Once on the ",Object(c.b)("inlineCode",{parentName:"li"},"Drafts")," page, Click on the ",Object(c.b)("inlineCode",{parentName:"li"},"API's")," tab in the top left.")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+ElEQVQY03XNzU7CQBAH8L6kF6JCowdQAUGtIfFJPPgUvIOJJ0/EaCoHWm0rX+t+z267TluDYMLkt5uZZP+znt+/PepcXnVH7ZPBoX/eOBs2OoN/mt3A7wetXtDs3ZwOR8cX15g68Nueti7JaPQYzp8jm6ytczYvbOG2mXynN3nhnJtFsTcn/O7h6X48mcaL93gxS0mUfe+V1g0hDF5eQ49LSJcs+VotV2vGhAajdUlpqGmwGzhSrpE2xVs49YQyQqqPzwyLECKwOBYrD6V4S20VWIkbwYIxuB/9hvFnHIQCqUBIzaUqicp2X6Fc1u93wn9w3I9XNuEf6oduINBiE2AAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"apisimpo",title:"apisimpo",src:"/static/d8f8d9154f8b2481dedce0bdfab60216/3cbba/draft-apis.png",srcSet:["/static/d8f8d9154f8b2481dedce0bdfab60216/7fc1e/draft-apis.png 288w","/static/d8f8d9154f8b2481dedce0bdfab60216/a5df1/draft-apis.png 576w","/static/d8f8d9154f8b2481dedce0bdfab60216/3cbba/draft-apis.png 1152w","/static/d8f8d9154f8b2481dedce0bdfab60216/b5ff4/draft-apis.png 1281w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Click ",Object(c.b)("inlineCode",{parentName:"li"},"Add")," -> ",Object(c.b)("inlineCode",{parentName:"li"},"Import API from a file or URL"))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"470px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"92.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAClklEQVQ4y52Uu27UQBiF/UA8BDU9NJQUSLRUtNDQIoSAhgegJCEFBRINEQLERYFkk934fvfa47HHd+fwzyzZRBsTRYz0acaW5+z5b6vptocj3cbccBQL04XpBnD8CDPdw8LycWR4sL0QFmG6tF+ClhcV/CiFFy6h21IoQVl1SHmLr4cJDiyGPT1DkNaomgFNN16KVoqGBFq0bQ/gRHEyjogzAdNnWLiZ4tBaImECoqLv1Z1ptEKKdT1+kotnWzO8eDvDy51DxZ6RgZcNsqIFF53aJQmriWoSjYtWuXr1boFrd17jxoMd3Hr4Dtfvb+P51m/82Nfxfebi894xvu1b+PLLIMcMRsCh+xzGBlpBgjLE7U8Obj56j7tPPuLe013cfvwBb3ZNhEuOuZ1gbkU4duQew4kKuHE5iSbqTuWwEDVSxmFThQ3LVQmeWk1D4Zc1Tu9togSly6KsUIkSge9jmSRgGeWPczDGFMMwKMGqqiE7o6J7YoK1ICfBsixhGAbCMEIQhupsmhaCIKDqVkpQkCAjwfJKDiuh3GVpijxniEhUOk2SGDm5XAk2SIsGvB6QV/0F1jnM8gJ101Pz9jj9EfV8LhzZ8EJUGP+GP7XOBFkBPy5wYCyxcDKqbKZ2nVrkyMqIFKaXo6Bw+37AOJ5goO7Y5CyHBU0BFcVxbCRxhDgK4boOfM+FS+9831MO0ozBpjnnNC2M7sh8nkeT7qToMsvhBSEcz4frB3A9mmtCni3HU+cwSqBbzkqQWifj4gLrkOumo3y1yGnUZMV5KVShpPOm7Wg8O/qmXYVLI99THvthvMAqZBKUD3U7YO5xuFFGzU3tEsXwqYXGccRV19ph1UgXA7p+k1G9l38gZwz/ZJ3DqSb9H/4AOalUp4xAiEUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"import",title:"import",src:"/static/d8fd792b2c1e130a314932d1b823b87d/f9c87/import.png",srcSet:["/static/d8fd792b2c1e130a314932d1b823b87d/7fc1e/import.png 288w","/static/d8fd792b2c1e130a314932d1b823b87d/f9c87/import.png 470w"],sizes:"(max-width: 470px) 100vw, 470px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Next Click ",Object(c.b)("inlineCode",{parentName:"li"},"Or import from URL..."))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"656px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.68055555555555%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA50lEQVQoz51R2U7DMBDM//8VT0h8AwhomzSNEx+xNz7SZFjHilpAQsDKo/Veoz2qECJCjIgxYfIe2XZEoMkXm2M+hE1vsq78vqOEVlQX0aPtBJQxONTN9s/I/qa94NSc8fJ2QC/lp+Kvsvsr/ENycZoXXK9L0ctdh9YRHh6fODBDKgXicTV3m6G0wcC+QSqY0bJvxGgtyCccO4eTcGh6wkjpRpj38/z6jphmtEJBGotu0AwDqQuJYjiamMzBOgcfZ9S9Q82E54Hg/B3hPkbk1oUO6JQvmqFs/NMath3ma+bL/pT4G+y5H1pLIjaHGk+YAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"import",title:"import",src:"/static/ef6e3c8e12afbef508d0500e10450be2/ba351/import-url.png",srcSet:["/static/ef6e3c8e12afbef508d0500e10450be2/7fc1e/import-url.png 288w","/static/ef6e3c8e12afbef508d0500e10450be2/a5df1/import-url.png 576w","/static/ef6e3c8e12afbef508d0500e10450be2/ba351/import-url.png 656w"],sizes:"(max-width: 656px) 100vw, 656px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Now in the ",Object(c.b)("inlineCode",{parentName:"li"},"URL")," paste ",Object(c.b)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/bkribbs15/nodejs-express-api/master/swagger.yaml"),". Nothing is needed for the ",Object(c.b)("inlineCode",{parentName:"li"},"Username")," and ",Object(c.b)("inlineCode",{parentName:"li"},"Password"),", so click ",Object(c.b)("inlineCode",{parentName:"li"},"Import"),".")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.80555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVQoz6WPSw+CMBCE+f//x5NHzx48mhgPUl6igLSFlpaOWx6RGKNRm3yZ7WNnp0HJW+SlIDiyosZNKEhlIZQZtTUf4U0Heo79MUTABUecZuiMRdNqKEWX+oExPYx9j+/1y/sEvqhFg0slSBUqSrzET/cpyloO6edEYkEtNTQlDKNkNPRTJGXWlKYbJj5jB9Wkr1CdhSMfFpNh35NZ09L3DH5ezg3C4hSBo42bDub6W/qpP0rIkJ0L/EOYXXFgOdbbE1abHe5KsR+egJsQvgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"import",title:"import",src:"/static/42d1dd9d940e0cbcac43a8e1355ac5e1/3cbba/import-link.png",srcSet:["/static/42d1dd9d940e0cbcac43a8e1355ac5e1/7fc1e/import-link.png 288w","/static/42d1dd9d940e0cbcac43a8e1355ac5e1/a5df1/import-link.png 576w","/static/42d1dd9d940e0cbcac43a8e1355ac5e1/3cbba/import-link.png 1152w","/static/42d1dd9d940e0cbcac43a8e1355ac5e1/0b124/import-link.png 1728w","/static/42d1dd9d940e0cbcac43a8e1355ac5e1/e2c46/import-link.png 1794w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The API will now be imported in and you will be taken to the ",Object(c.b)("inlineCode",{parentName:"li"},"Design")," page of the API.")),Object(c.b)("h2",null,"Testing the New API"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"To test the newly imported API, go to the ",Object(c.b)("inlineCode",{parentName:"li"},"Assemble")," page.")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1125px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"70.83333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWElEQVQoz42Sy0rDQBSG522KBZdiLXSh9QIKgogbH1AQ3IpY3NhYrRJFuhPx0pLYWzrJXDPJZCZOrNZVmwzfZga++c85HFCuba9s7a8fHFf3jiq7h8u1naXVjXKlXlqrl6qbiwFXLbth2c2HTvuxc31r3501mqcXNyfnrUvLsp+t9pN1PxdAw2SMIkjiWOpIKg2pGgZ6iFIh07wDPIi4iFkYMx75CIVCmFdt0DrNA/RHE8KjTM58LqVUSv+icwAvb136I3MhfcLdke8TgVhcBOAMxgFm02QfEUyZTFSS6CKAT6ffdQaYCZMMEXWHMCACs7gI4PWjh2loKjdjQyaXi0SlMtEmPxfgDr1pzUY2yZ5PMYsCGpmPCc8BOP0x/Zs2JgwG2FyNmXWu9GIy2ZQ9lc1nHhIQZ0wKAN57X7NkM0Cls4ZjqWQBgDvwZjJloQcDxkOzP/+rMp9vj031dvv1jXUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"import",title:"import",src:"/static/203e0a53e56167568790a653288b9fe6/55d53/import-assemble.png",srcSet:["/static/203e0a53e56167568790a653288b9fe6/7fc1e/import-assemble.png 288w","/static/203e0a53e56167568790a653288b9fe6/a5df1/import-assemble.png 576w","/static/203e0a53e56167568790a653288b9fe6/55d53/import-assemble.png 1125w"],sizes:"(max-width: 1125px) 100vw, 1125px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Now you will see all the operations that were imported in, and we can start the test by clicking the ",Object(c.b)("inlineCode",{parentName:"li"},"test")," button.")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"78.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAABYlAAAWJQFJUiTwAAABv0lEQVQoz42TS2/TQBSF/Xco264oEmKRdknZIJUN7Pg/SEiIv8GCDVuQitRHCEloVUWt2lKah8fznjszdjj2FJMGRGMdjeQ7/uace0fO1jtPtp69fLz9/NH2zvrW07WNzv2Hm2sbm/cedO5Utt/73u0fD09OD/a+9brDL1+PP+0Pu4OTwdGof5eyOZ6qwlL2TsPhKFeeqUBxvsqTnZ1fnF/+8DG6MTc/maXgnMcKGdfI+kXVdYraeihzRCHGsiwV+UI5AUnDuLyezCazfMaEUKaVMjSe5NO8SHyWAlRVpTVxUW9LZQErGTnHWUZqJ7StV2WxmxcSu0hUw4UQQio42+YdqgEV9s4+Hl0dSOmN867xAQ+lXm5ia2NijHDGR6op4WCy83e7rz70315e5FwI5xDHwA9wwm5g8j7FBpxKyUFozZWpTQwhbVu/BYcQAGNii3AhzJTlOS+cL9uc/4ClUj4E9Gx+l5iQ3s7ffH7xvvd6Ota4DvIBU0TsFOEPjJ6TeQsr44wtB1e7o+shKzRuDiTmu0Q2PdNyz0meKqLKUFgCbsEzxpacW39t6T9kDXMh0dXf8CrKcMn1X7Ew7dX1C9/+ZnFlIB82AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"import",title:"import",src:"/static/b98e2423a73fa229a785596301489ab4/3cbba/import-test.png",srcSet:["/static/b98e2423a73fa229a785596301489ab4/7fc1e/import-test.png 288w","/static/b98e2423a73fa229a785596301489ab4/a5df1/import-test.png 576w","/static/b98e2423a73fa229a785596301489ab4/3cbba/import-test.png 1152w","/static/b98e2423a73fa229a785596301489ab4/0b124/import-test.png 1728w","/static/b98e2423a73fa229a785596301489ab4/c58c0/import-test.png 1958w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The API hasn’t been added to the ",Object(c.b)("inlineCode",{parentName:"li"},"Product")," yet, so click on ",Object(c.b)("inlineCode",{parentName:"li"},"Add API"),".")),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"402px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"222.22222222222223%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAsCAIAAADqwg+aAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE50lEQVRIx5VWWY+jRhDm/7/kNcpb8hApx0O0UqSsNtpVMtnszO7YHmzG+DaHuQ8DDd2NAZOvwTs7907Qp3LR7mqKqq+qkHJapjmPMxYktGCHNGdJVqSEAlnBsQKQgidYyRmA/ZRVUcpgIjlRvrGTay2SV0FWVJrpbAHDUeZryw0ZrwgtoyQ3bH+5NTe6Faf5oWqsgOheJhHKeVkf6mNZ1XhCTvG0ErLXb+G0yHhp+tnVKpTXgbTWrb/OLz8MxouNwQ9N3vnZoSq+6HdWsqLc6HaWMynap7YXGpbrBjHD6+U0L9hXsU8ySvHOjq0oyry7oijK0psr6UTS32TZHRCSZRmRwjDcapqm64vlMkkSznlBaVFAnCQu0u19cBEpSojth16YBHEGqe/cnRvYfmTanu1FuuXqOwfJw6t2MfsCBE/CDnm6GKvL+VpfbneDsTqeLqeLrTJbz9Y6EjaZrXEucnYvfgi+xMq6atpD3ZaHRuSsOiLmQK8ghQDlDyPfGcMly/EdNxDOPPCtx0NLHCeMkad/P40giycsHwIZjvcZFAlamJAXmt0Fl+BAWTWQeHnhEpx8GUS0fT+wbNsPAtfz9gkIQJ7AKbe3IZmmcSXLw9EIAGE6OtwhU0evm+v2X6iqnDJ+AHhZUQZ/OKhbCPCexoUoJpaRIgVVUHOfgYhJuuV9GMgfr66vrhfgAwhzOVZBEnm6PB9OLuUplCtlPpzM1JW21nfYcDGcjGerrGASyHg+HE/UFTbtsyLLcSQTEk8DkJU071Zwy0UzIbRvNSJgMPDjFLJf2qcFyAh9n+Zxh3vcuIFIFZ48HKsjZQ4az1Ya3LscT+EIlOFEBcNJ8QjDTvTs8nw8Jfnz2bcf8qjlyRiuhlGyT0lfDzilx2nHE5Y33I7OB/Kn0QQeqsstWhpCvTXsZ56JUCEigttoyHhtw/YMyzNt3wti14/9MHmG1TDueyve+QBvUcxgOACH+S230Sj3BFvFYEgI8icUyE5hUk7hxukwoYiDy16BcZjQ4TK4mHrnU+9s4kw20WAefFR91UiCpJAY51VdAXWDllL1OnCoDljBQABVorRICGYNjTGMCgYZZZg+hbSP0TwV255r2sQwprudau1UXb92nDmk6y4ce+45C8O4dq2Zt1G8rbJVB4W7qlkscWpZlgro+sQ0rw1dsXZTXVdcZw7dsWcCOGgt+9/97H//Kvjxd/eHV/mrt/W3v0nH2m/bqD1GbRsLCKXDMTxJocQtsduziwUp5YiPfTqkDf31nXSsgqYKjnXYNmFz8KFgpe1uj3XQNlFbwT5uqdv+9Dp8O/Teyd6bYfBBKb/5RdqnaRAjsaFpo7lnLnpKFFuuZzmYXgEWbc+H1HaWM5j7/1y5Z6N8uKgUjSqatNKsP88u3r2/fPP3+Sd5+sfb9+8vZXWlK4sNZoC61ICxulJmm43nL1x/ajkB47RtSdNIKEAM161pg2cb04a+MWyQBIQBW3rCdxQ6IqdAyWsKCoBh6CRMTPa27OYDJOaDmNJf67unqnp0UDxVEvdLEvWhm1aEVvLiifGl6eMnEa2LPeNhd+792hbG+LmpocfrHrG9A/RjfFLwk/FzlvyA7wMMhzzPCelBMAbEd8NXje93TLQRivFQZ6JsmfSSwN4ANoZPRqswSBmK9H8bu3ExM/ZBgu7P/gPZrakTDqwegwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"add",title:"add",src:"/static/c2edb306c445094e3e2affdb4e26a2ca/0e9c4/add-api.png",srcSet:["/static/c2edb306c445094e3e2affdb4e26a2ca/7fc1e/add-api.png 288w","/static/c2edb306c445094e3e2affdb4e26a2ca/0e9c4/add-api.png 402w"],sizes:"(max-width: 402px) 100vw, 402px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Then ",Object(c.b)("inlineCode",{parentName:"p"},"Republish")," your ",Object(c.b)("inlineCode",{parentName:"p"},"Product")," in order for the API to go live.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Now we can choose an ",Object(c.b)("inlineCode",{parentName:"p"},"Operation")," to invoke. For the first one we will pick ",Object(c.b)("inlineCode",{parentName:"p"},"/students"),"."))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"960px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"99.30555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFElEQVQ4y51UW27bMBDURXubXqG36Dn61498BAgQOJWt94Ok+BRFCZ0uWdtxUxep8jFYidSOdoc7zJickTBpDFzCuAV8MhCSoD2a0aBhFtousLRn3kF2qgdwaSG1g1Ax0WOiZ2VmVL1E0RHaKa2HbUFYV6zb9ifW1+fsVBSQUtLfHYyxCdYSsTZQSsH7BX4JhA34CYQAzMsKNwc4HzD7FT5sFENClhc1Xo4Fmm5A248plk0HMSlKWiCNo+oCRsXw9eEzSvYD2sSfrIkgdtKP/LXlpuc4FF1qrWUmoR40Om7BlKeEWHlAKxp8+fYJj/l3VNVIyY668kmqigqIZJaqzqSk5HHCiXSKmrVM00Eo5LWg9+n6oZtXhIXa9Ru1uiZNL3szyRFjqjA/nhDBGAcXApyLpKOLFZCWhqq4fHyLuPZ2PVXYjBI9U6nKiJ5J6POmOSfcI7wluY3Z4djh6bnAQK1OimYwzqRwGAlM2L+S3kNW1fXvljmnMdE0QgoyxjOM9fsI45E3PaOhNuc2/BXazvsrjGRVS24h6/1Lq12EdTemw4hejknRsxei29HYoWGDl/xIGgqasYXGhdq0LkFHK+7V8JAXeHx6RoyHY0k2LJMEDdmwH8VHWma4RdkMOFUtzeN0vc52EYqknU/2uVho5BPFJWE34b2TjcTD5FAOZj/hPW/adG15cDV/nPDezLk3Pv0fwl/MmAOLplr6agAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"students",title:"students",src:"/static/82eec422471669ce39f2c759eff32264/4552c/operation-students.png",srcSet:["/static/82eec422471669ce39f2c759eff32264/7fc1e/operation-students.png 288w","/static/82eec422471669ce39f2c759eff32264/a5df1/operation-students.png 576w","/static/82eec422471669ce39f2c759eff32264/4552c/operation-students.png 960w"],sizes:"(max-width: 960px) 100vw, 960px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"With the operation chosen we can add any parameters the API would need, but in this case we don’t need any so we can just press ",Object(c.b)("inlineCode",{parentName:"p"},"Invoke"),".")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"If everything is successful we will see response with a status of ",Object(c.b)("inlineCode",{parentName:"p"},"200")," and a JSON object like the one below. "))),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"933px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"117.70833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAAAsTAAALEwEAmpwYAAACyElEQVQ4y5WUyW/TUBDGzQUhcQFE6amoqFz6v3IBcQDE2gWqQtJFFaq4gaCqKMulQLc0rh3bceIl3nd9zHtJ3ZQAii19st9L/PPMNzNPkLUOXD9CECXwwzOxte0E9FtI6whhGCPLU668KFAMia3zvP8sWD2PXvThBQySDkHTAThGyPdjFBm4wjijvaz8L1tHSc6fBVltQ5RVMDB7yQuGxCKnPcv1kCXAxo+7WN+9A9dJKPKAoi0IlsK0Xegdk4MFVdMgSTJM04TreXBct5RL8oMItusjjYHNXw+wsXsPimJCNwhA0fv0YQ7sngL1LmRVh0GbQXjeRxYl85JbQfcsBVISS4+9zGwaSVnv2lB1kwP9P4CsWHbPHfI2Hui0cOk539mzoFHuXcuByT0cBRqmjSDORn77mzhQVlQcNZrokAcRSy+MSvUclwPDAfA0ov9JECUFh8ciJEWDrLTR0nQupd2B4/kwrV4Z4VjApqxBbLVxLKlonChce0ci7elU3QBGVaBFpnvUGqxKcVrw3mMtkGcZ0iTqRxhVALKv9z1KywlJsgLbewbWtyXqNxtRlQgN0wKTS355XsDvQRDg60Eb73ZEdAyrWlEazRM0RYm8sindkAOZWLpZElLKdjUP9xsSVbWLNjV4v0nZVKTw6O74cfUqs4pKNHqswR0vKscq5qMUV6/yz4MmjkQZPWqRnkcp2h6fHN3owaJjzbSdcrzGAn78/A3vt3bwYfsLtna+4xOpcdKixu5SQezqQFHRcSgq2D+W0aRm1iiy4avfhxWA84tLmFt4iXp9DbXaKmr1VbyurWBp+Q023m7yGa/UNjMztzFxfQKXLl+EcEGAIJzpxuQkJFnpTxA/G8cAzs7O4ubUFK5cuzoCvDU9DamlVgPWV9bw6PFTPH8xj7m5RZ7+wuIr3H/4DE/mlwdHez5+yvjHlZOCFJUPh9+QOPv/TfNGrwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"add",title:"add",src:"/static/bf49a225e9359c8acde0b3ad8d0b28c3/592d2/success.png",srcSet:["/static/bf49a225e9359c8acde0b3ad8d0b28c3/7fc1e/success.png 288w","/static/bf49a225e9359c8acde0b3ad8d0b28c3/a5df1/success.png 576w","/static/bf49a225e9359c8acde0b3ad8d0b28c3/592d2/success.png 933w"],sizes:"(max-width: 933px) 100vw, 933px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"That’s it. We have successfully imported an API. Try out the other operations as well.")))}r.isMDXComponent=!0},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,a,t){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-electives-api-connect-activities-importing-ap-is-mdx-5cd0010fe53c0cd2ad17.js.map