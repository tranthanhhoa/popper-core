(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7oih":function(e,t,n){"use strict";n("E5k/"),n("zTTH");var a=n("wTIg"),o=n("q1tI"),r=n.n(o),i=n("Wbzz"),l=n("7ljp"),s=n("qKvR"),c=n("eVhr"),d=n("4FWg"),p=n("XQB5"),b=function(e){var t=e.children;return Object(s.d)(i.StaticQuery,{query:"3201492127",render:function(e){var n=e.allMdx.edges.map((function(e){return{navigationLabel:e.node.frontmatter.navigationLabel,slug:e.node.fields.slug}}));return t(n)},data:p})};n("HQhv"),n("zGcK"),n("TAD1");function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];if(e.slug.startsWith(a.slug))return void u(e,a.children)}t.push({navigationLabel:e.navigationLabel,slug:e.slug,order:e.order,children:[]}),t=t.sort((function(e,t){return e.order-t.order}))}function g(e){e=e.sort((function(e,t){return e.slug.split("/").length-t.slug.split("/").length})).filter((function(e){return null!=e.navigationLabel}));for(var t=[],n=0;n<e.length;n++){u(e[n],t)}return t.sort((function(e,t){return t.order-e.order})),t}n("Ll4R");function f(e,t){var n=t.match(/^\/docs\/(v[0-9]+)\//),a=n?n[1]:null;return e.filter((function(e){return!e.slug.startsWith("/docs/")||e.slug.startsWith("/docs/"+a+"/")||e.slug.match(/^\/docs\/v[0-9]+\/$/)}))}var h=n("vUvN"),m=n.n(h),v=(n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("sc67"),n("4DPX"),n("17x9")),O=n.n(v);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j=function(e){var t=e.color,n=e.size,a=x(e,["color","size"]);return r.a.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),r.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))};j.propTypes={color:O.a.string,size:O.a.oneOfType([O.a.string,O.a.number])},j.defaultProps={color:"currentColor",size:"24"};var w=j,k={name:"80dmy3",styles:"display:block;transform:translateX(0);"},N=Object(a.a)("div",{target:"e1y4lhx00"})("background:#c83b50;position:fixed;top:0;height:100%;width:",260,"px;overflow:auto;transform:translateX(-",260,"px);display:none;z-index:1;box-shadow:10px 0 20px -2px rgba(80,0,20,0.2);",(function(e){return e.open&&k})," ",d.e.lg,"{display:block;transform:translateX(0);box-shadow:none;}"),S={name:"2ql0sw",styles:"margin-left:15px;border-left:1px solid rgba(255,200,200,0.5);"},L=Object(a.a)("ul",{target:"e1y4lhx01"})("list-style:none;padding:0;margin-left:",(function(e){return e.root?0:15}),"px;line-height:1.5;",(function(e){return!e.root&&S})),z=Object(a.a)(i.Link,{target:"e1y4lhx02"})({name:"13d61k5",styles:"display:block;color:white;text-decoration:none;padding:10px 15px 5px;text-transform:uppercase;font-size:18px;font-family:'Luckiest Guy',sans-serif;transition:background-color 0.1s;border-radius:0 20px 20px 0;border:none;-webkit-font-smoothing:antialiased;font-weight:normal;&:hover{background-color:rgba(255,255,255,0.2);border:none;}&:active{border-style:none;}"}),C=Object(a.a)("header",{target:"e1y4lhx03"})("display:flex;justify-content:space-between;position:fixed;background-color:#c83b50;padding:15px 0;height:45px;width:100%;z-index:1;",d.e.lg,"{display:none;}"),H={name:"10cca43",styles:"box-shadow:0 10px 15px -4px rgba(100,0,0,0.3);"},E=Object(a.a)("div",{target:"e1y4lhx04"})("background:#c83b50;margin-top:-8px;width:100%;position:sticky;top:0;padding:8px 0;transition:box-shadow 0.4s ease-out;display:none;",d.e.lg,"{display:block;}",(function(e){return e.scrolled&&H})),I=function(e){var t=e.mobile;return Object(s.d)("img",{src:m.a,draggable:"false",alt:"Popper Logo",css:Object(s.c)("display:block;margin:0 auto -10px;width:100px;height:50px;user-select:none;margin-top:",t?"-12px":"0",";")})},B=Object(a.a)("button",{target:"e1y4lhx05"})({name:"1wd4f5b",styles:"position:fixed;border:none;color:white;font-weight:bold;top:0;padding:8px 15px;height:45px;background-color:#c83b50;border-radius:0 0 4px 4px;"}),P=Object(a.a)("button",{target:"e1y4lhx06"})("position:relative;top:10px;left:15px;display:block;background-color:white;color:#c83b50;border:none;font-weight:bold;padding:8px 16px;border-radius:4px;",d.e.lg,"{display:none;}"),T=Object(a.a)("div",{target:"e1y4lhx07"})("padding:0 10px 20px 0;",d.e.lg,"{margin-top:15px;}"),V=function e(t){var n=t.route;return Object(s.d)(r.a.Fragment,null,Object(s.d)(L,{root:!0},Object(s.d)("li",null,Object(s.d)(z,{to:n.slug,activeStyle:{backgroundColor:"#FFF",color:"#C83B50"}},n.navigationLabel)),Object(s.d)(L,{root:2===n.slug.split("/").length},n.children.map((function(t,n){return Object(s.d)(e,{key:n,route:t})})))))},q=0;function M(e){e.description,e.lang,e.meta;var t=e.path,n=Object(o.useState)(!1),a=n[0],i=n[1],l=Object(o.useState)(!1),c=l[0],d=l[1],p=Object(o.useRef)();function u(){i(!0)}function h(){i(!1)}function m(){var e=p.current.scrollTop;q=e,d(e>10)}return Object(o.useLayoutEffect)((function(){var e=p.current;e.scrollTop=q;var t=e.querySelector('[aria-current="page"]');if(t){var n=t.getBoundingClientRect();(n.bottom>window.innerHeight||n.top<0)&&t.scrollIntoView()}}),[]),Object(s.d)(b,null,(function(e){return Object(s.d)(r.a.Fragment,null,Object(s.d)(C,null,Object(s.d)(B,{onClick:u,"aria-expanded":a?"true":"false","aria-label":"Click to open navigation menu"},Object(s.d)(w,{size:30})),Object(s.d)(I,{mobile:!0})),Object(s.d)(N,{open:a,ref:p,onScroll:m},Object(s.d)(E,{scrolled:c},Object(s.d)(I,null)),Object(s.d)(P,{onClick:h},"Close Menu"),Object(s.d)(T,null,g(f(e,t)).map((function(e,t){return Object(s.d)(V,{route:e,key:t})})))))}))}var W=n("9CUm");n("8ypT"),n("cu9l");function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var A=function(e){var t=e.color,n=e.size,a=R(e,["color","size"]);return r.a.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.a.createElement("polyline",{points:"15 18 9 12 15 6"}))};A.propTypes={color:O.a.string,size:O.a.oneOfType([O.a.string,O.a.number])},A.defaultProps={color:"currentColor",size:"24"};var D=A,G=n("EAKA");function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var K=Object(a.a)("main",{target:"e1fogcta0"})("margin-left:0;padding-top:45px;",d.e.lg,"{padding-top:0;margin-left:",260,"px;}"),Q=Object(a.a)(d.c,{target:"e1fogcta1"})("background:none;border-top:1px solid #44395d;",d.e.lg,"{margin-left:",260,"px;}"),U=Object(a.a)("div",{target:"e1fogcta2"})({name:"1u8mrbl",styles:"display:flex;border-top:1px solid #44395d;margin-top:50px;"}),J=Object(a.a)(d.a,{target:"e1fogcta3"})("display:flex;justify-content:space-between;width:100%;padding:0;",d.e.md,"{padding:0 40px;}"),_=Object(a.a)("div",{target:"e1fogcta4"})({name:"1tq8hsw",styles:"display:flex;min-width:0;width:100%;"}),Z=Object(a.a)("div",{target:"e1fogcta5"})("display:none;min-width:1px;background:#44395d;height:100%;",d.e.md,"{display:block;}"),Y=Object(a.a)(i.Link,{target:"e1fogcta6"})("position:relative;font-size:18px;padding:50px 40px;color:#4edee5;border-bottom:2px solid transparent;transition:none;word-break:break-word;width:100%;&[data-first]{padding-right:10px;}&[data-last]{padding-left:10px;text-align:right;}",d.e.md,"{font-size:22px;}",d.e.lg,"{font-size:24px;}&:hover{background-color:#281e36;border-bottom-color:#4edee5;}&:active{border-bottom-style:dashed;}"),$=Object(s.c)("vertical-align:3px;",d.e.md,"{vertical-align:0;}"),ee=Object(a.a)("span",{target:"e1fogcta7"})("position:absolute;top:50px;",d.e.md,"{top:54px;}",d.e.lg,"{top:56px;}&[data-prev]{left:10px;}&[data-next]{right:10px;}"),te={"x-ad":c.a,a:function(e){return Object(s.d)("a",X({},e,{onClick:ne}),e.children)}};function ne(e){try{var t=document.querySelector(window.location.hash);t.scrollIntoView();var n="H2"===t.nodeName;window.innerWidth<=d.f.lg?n||window.scrollBy(0,-60):n&&window.scrollBy(0,50)}catch(a){}}var ae=function e(t){return t.reduce((function(t,n){return t.concat(n).concat(e(n.children))}),[])};t.a=function(e){var t=e.children,n=e.path,a=e.pageResources;return Object(o.useLayoutEffect)(ne,[]),Object(s.d)(l.a,{components:te},Object(s.d)(s.a,{styles:Object(s.c)("h1,h2,h3,h4,h5,h6{color:#f4e0f1;}h1{font-size:40px;margin-top:0;padding-top:20px;line-height:1.1;}h2{font-size:32px;}h3{font-size:24px;margin-bottom:10px;margin-top:40px;}h4{font-size:20px;margin-bottom:10px;}h5{font-size:18px;}h2::before{content:' ';display:block;border-bottom:1px solid #44395d;padding-top:20px;margin-bottom:40px;}blockquote{margin:0;padding:0.5em 30px;border-radius:0px 10px 10px 0px;background-color:rgba(135,82,27,0.25);color:#ddc5a1;border-left:2px dashed #ddc5a1;}h3 > code[class*='language-']{color:#ffe69d;}ul{padding-left:20px;}a{color:#ffe69d;text-decoration:none;padding-bottom:1px;border-bottom:2px solid rgba(255,228,148,0.25);transition:border-bottom-color 0.15s ease-in-out;&:hover{border-bottom:2px solid rgba(255,228,148,1);}&:active{border-bottom-style:dashed;}}",d.e.md,"{pre[class*='language-']{padding:15px 20px;}}h1 .gatsby-link-icon{display:none;}h2,h3,h4,h5,h6{&:hover{.gatsby-link-icon{opacity:1;}}}.gatsby-link-icon{fill:#ffb6b3;border:none;margin-left:-30px;padding-right:10px;opacity:0;transition:opacity 0.15s ease-in-out;float:right;",d.e.md,"{float:left;}&:focus{opacity:1;}&:hover{border:none;}svg{width:20px;height:20px;}}")}),Object(s.d)("div",null,a&&Object(s.d)(W.a,{title:a.json.pageContext.frontmatter.navigationLabel}),Object(s.d)(M,{root:"/",target:"location",path:n}),Object(s.d)(K,null,Object(s.d)(d.a,null,t),Object(s.d)(b,null,(function(e){var t=function(e){var t=ae(g(f(e,n))),a=t.findIndex((function(e){return e.slug===n}));return{prev:t[a-1],next:t[a+1]}}(e),a=t.prev,o=t.next;return Object(s.d)(U,null,Object(s.d)(J,null,Object(s.d)(_,null,a&&Object(s.d)(Y,{to:a.slug+"/","data-first":!0},Object(s.d)(ee,{"data-prev":!0},Object(s.d)(D,{size:28,css:$})),a.navigationLabel)),Object(s.d)(Z,null),Object(s.d)(_,null,o&&Object(s.d)(Y,{to:o.slug+"/","data-last":!0},o.navigationLabel,Object(s.d)(ee,{"data-next":!0},Object(s.d)(G.a,{size:28,css:$}))))))}))),Object(s.d)(Q,null,"© ",(new Date).getFullYear()," MIT License")))}},OzoC:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("E5k/"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("q1tI");var a=n("7ljp"),o=n("7oih");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={},l={_frontmatter:i},s=o.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(s,r({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"browser-support",style:{position:"relative"}},Object(a.b)("a",r({parentName:"h1"},{href:"#browser-support","aria-label":"browser support permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",r({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Browser Support"),Object(a.b)("p",null,"Popper supports modern versions of Chrome, Firefox, Safari, Edge. IE11 works\nwith some polyfills. Additionally, any Chromium-based browser, such as Opera,\nBeaker, etc should be supported."),Object(a.b)("x-ad",null),Object(a.b)("h2",{id:"ie11",style:{position:"relative"}},Object(a.b)("a",r({parentName:"h2"},{href:"#ie11","aria-label":"ie11 permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",r({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"IE11"),Object(a.b)("p",null,"IE11 (and older browsers in general) require polyfills to work. The simplest way\nto make Popper work is to use the following polyfill service:"),Object(a.b)("div",{className:"gatsby-highlight","data-language":"html"},Object(a.b)("pre",r({parentName:"div"},{className:"language-html"}),Object(a.b)("code",r({parentName:"pre"},{className:"language-html"}),Object(a.b)("span",r({parentName:"code"},{className:"token tag"}),Object(a.b)("span",r({parentName:"span"},{className:"token tag"}),Object(a.b)("span",r({parentName:"span"},{className:"token punctuation"}),"<"),"script")," ",Object(a.b)("span",r({parentName:"span"},{className:"token attr-name"}),"src"),Object(a.b)("span",r({parentName:"span"},{className:"token attr-value"}),Object(a.b)("span",r({parentName:"span"},{className:"token punctuation"}),"="),Object(a.b)("span",r({parentName:"span"},{className:"token punctuation"}),'"'),"https://polyfill.io/v3/polyfill.min.js?features=Array.prototype.find,Array.prototype.includes,String.prototype.includes,Array.from,Object.entries,Promise,Object.assign",Object(a.b)("span",r({parentName:"span"},{className:"token punctuation"}),'"')),Object(a.b)("span",r({parentName:"span"},{className:"token punctuation"}),">")),Object(a.b)("span",r({parentName:"code"},{className:"token script"})),Object(a.b)("span",r({parentName:"code"},{className:"token tag"}),Object(a.b)("span",r({parentName:"span"},{className:"token tag"}),Object(a.b)("span",r({parentName:"span"},{className:"token punctuation"}),"</"),"script"),Object(a.b)("span",r({parentName:"span"},{className:"token punctuation"}),">"))))),Object(a.b)("p",null,"Browsers that don't need the polyfills won't be burdened with the JS bundle\nsize."),Object(a.b)("h3",{id:"support-note",style:{position:"relative"}},Object(a.b)("a",r({parentName:"h3"},{href:"#support-note","aria-label":"support note permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",r({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Support note"),Object(a.b)("p",null,"If you need to support old browsers, ensure you ",Object(a.b)("strong",{parentName:"p"},"lock")," Popper's version to a\nspecific number when using the CDN. On new releases, we may add more modern\nfunctions that require new polyfills, or positioning behavior may break in IE11\nsince it is completely untested. We don't plan to officially support IE11, but\nwelcome PRs to fix issues. For the most part, IE11 seems to work without much\ntrouble, but there may be edge cases in some scenarios."),Object(a.b)("h2",{id:"safari",style:{position:"relative"}},Object(a.b)("a",r({parentName:"h2"},{href:"#safari","aria-label":"safari permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",r({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Safari"),Object(a.b)("p",null,"Safari has unfortunate quirks regarding updating the position of DOM elements.\nWe have filed WebKit bugs for these, so hopefully they will be fixed in the\nfuture."),Object(a.b)("h3",{id:"lag",style:{position:"relative"}},Object(a.b)("a",r({parentName:"h3"},{href:"#lag","aria-label":"lag permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",r({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Lag"),Object(a.b)("p",null,"On macOS and iOS, when the popper is prevented from overflowing the root\nviewport boundary, it can appear to lag behind while scrolling (not 1:1\nin-sync). For iOS this also happens in scrolling containers."),Object(a.b)("p",null,"We recommend one of these options for Safari only:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Setting ",Object(a.b)("code",r({parentName:"li"},{className:"language-text"}),"rootBoundary")," to ",Object(a.b)("code",r({parentName:"li"},{className:"language-text"}),'"document"')," for the ",Object(a.b)("code",r({parentName:"li"},{className:"language-text"}),"preventOverflow")," modifier"),Object(a.b)("li",{parentName:"ul"},"Hiding the popper upon scrolling")),Object(a.b)("p",null,Object(a.b)("a",r({parentName:"p"},{href:"https://bugs.webkit.org/show_bug.cgi?id=206228"}),"WebKit bug report")),Object(a.b)("h3",{id:"fixed-strategy",style:{position:"relative"}},Object(a.b)("a",r({parentName:"h3"},{href:"#fixed-strategy","aria-label":"fixed strategy permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",r({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Fixed strategy"),Object(a.b)("p",null,"In the latest version of macOS Safari, when elastic overscroll (rubber-banding\neffect) is in progress, fixed elements will detach from the reference element\nbecause they no longer stick ",Object(a.b)("strong",{parentName:"p"},"including")," the elastic overscroll – which Safari\nreports scroll to include. On iOS, this is not an issue."),Object(a.b)("p",null,'In addition, while scrolling the document, a slight lag as mentioned above also\nbecomes present because the popper needs to be continuously updated while\nscrolling, which Safari is not good at. Ideally this strategy should only be\nused when the reference element is fixed, and not to "break" the popper out of a\nclipping container context.'),Object(a.b)("p",null,Object(a.b)("a",r({parentName:"p"},{href:"https://bugs.webkit.org/show_bug.cgi?id=206227"}),"WebKit bug report")),Object(a.b)("h2",{id:"ie10-and-older",style:{position:"relative"}},Object(a.b)("a",r({parentName:"h2"},{href:"#ie10-and-older","aria-label":"ie10 and older permalink",className:"gatsby-link-icon before"}),Object(a.b)("svg",r({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",r({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"IE10 and older"),Object(a.b)("p",null,"Browsers older than 2013 (including Android 4.4) will never be supported since\nthey are becoming increasingly obsolete and add a lot of complexity (runtime and\nbundle) costs to the library."),Object(a.b)("p",null,"We encourage any Internet Explorer user to upgrade to\n",Object(a.b)("a",r({parentName:"p"},{href:"https://www.microsoft.com/edge"}),"Microsoft Edge"),", their most recent versions are\nbased on Chromium, allowing to render all the modern websites without issues,\nbut still provide a compatibility mode to render legacy websites designed to\nwork with Internet Explorer."))}c.isMDXComponent=!0},XQB5:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"edges":[{"node":{"fields":{"slug":"/404/"},"frontmatter":{"navigationLabel":null}}},{"node":{"fields":{"slug":"/"},"frontmatter":{"navigationLabel":"Home"}}},{"node":{"fields":{"slug":"/docs/v1/"},"frontmatter":{"navigationLabel":"Documentation (v1.x)"}}},{"node":{"fields":{"slug":"/docs/v2/browser-support/"},"frontmatter":{"navigationLabel":"Browser Support"}}},{"node":{"fields":{"slug":"/docs/v2/constructors/"},"frontmatter":{"navigationLabel":"Constructors"}}},{"node":{"fields":{"slug":"/docs/v2/faq/"},"frontmatter":{"navigationLabel":"FAQ"}}},{"node":{"fields":{"slug":"/docs/v2/"},"frontmatter":{"navigationLabel":"Documentation (v2.x)"}}},{"node":{"fields":{"slug":"/docs/v2/tippy/"},"frontmatter":{"navigationLabel":"Tippy.js"}}},{"node":{"fields":{"slug":"/docs/v2/tree-shaking/"},"frontmatter":{"navigationLabel":"Tree-shaking"}}},{"node":{"fields":{"slug":"/docs/v2/tutorial/"},"frontmatter":{"navigationLabel":"Tutorial"}}},{"node":{"fields":{"slug":"/docs/v2/typings/"},"frontmatter":{"navigationLabel":"Typings"}}},{"node":{"fields":{"slug":"/docs/v2/virtual-elements/"},"frontmatter":{"navigationLabel":"Virtual Elements"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/apply-styles/"},"frontmatter":{"navigationLabel":"Apply Styles"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/arrow/"},"frontmatter":{"navigationLabel":"Arrow"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/compute-styles/"},"frontmatter":{"navigationLabel":"Compute Styles"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/event-listeners/"},"frontmatter":{"navigationLabel":"Event Listeners"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/flip/"},"frontmatter":{"navigationLabel":"Flip"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/hide/"},"frontmatter":{"navigationLabel":"Hide"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/"},"frontmatter":{"navigationLabel":"Modifiers"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/offset/"},"frontmatter":{"navigationLabel":"Offset"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/popper-offsets/"},"frontmatter":{"navigationLabel":"Popper Offsets"}}},{"node":{"fields":{"slug":"/docs/v2/modifiers/prevent-overflow/"},"frontmatter":{"navigationLabel":"Prevent Overflow"}}},{"node":{"fields":{"slug":"/docs/v2/utils/detect-overflow/"},"frontmatter":{"navigationLabel":"Detect Overflow"}}},{"node":{"fields":{"slug":"/docs/v2/utils/"},"frontmatter":{"navigationLabel":"Utils"}}}]}}}')},vUvN:function(e,t,n){e.exports=n.p+"static/popper-text-45fb69958c6fc80df98607583c280b4b.svg"},zTTH:function(e,t,n){"use strict";var a=n("P8UN"),o=n("Wadk")(6),r="findIndex",i=!0;r in[]&&Array(1)[r]((function(){i=!1})),a(a.P+a.F*i,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(r)}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-browser-support-mdx-5434715291e096e6557f.js.map