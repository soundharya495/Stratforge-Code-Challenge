(this["webpackJsonpstratforge-code-challenge"]=this["webpackJsonpstratforge-code-challenge"]||[]).push([[0],{36:function(e,t,c){},43:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(29),i=c.n(s),r=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))},o=c(8),l=c(2),j=(c(36),c(0)),d=function(){return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("div",{className:"logo",children:"SpaceX"})}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)(o.c,{exact:!0,to:"/",children:"Home"}),Object(j.jsx)(o.c,{to:"/history",children:"History"}),Object(j.jsx)(o.c,{to:"/launches",children:"Launches"}),Object(j.jsx)(o.c,{to:"/rockets",children:"Rockets"})]})]})},h=function(e){var t=e.name,c=e.image,a=e.title,n=e.content,s=e.buttonText,i=e.buttonLink,r=(e.color,e.bgColor,e.position);return Object(j.jsx)("section",{className:t,style:{background:"url(".concat(c,")"),backgroundSize:"cover"},children:Object(j.jsxs)("div",{className:"container",style:"left"===r?{left:0}:"right"===r?{right:0}:{},children:[Object(j.jsx)("div",{className:"title",children:a}),Object(j.jsx)("div",{className:"content",children:n}),(null===s||void 0===s?void 0:s.length)>0&&(null===i||void 0===i?void 0:i.length)>0?Object(j.jsx)(o.b,{to:i,className:"btn",children:s}):null]})})},u=(c(43),c.p+"static/media/Home.026eee2a.jpg"),b=c.p+"static/media/History.053d1dd9.jpg",m=c.p+"static/media/Launches.a318c7ec.jpg",O=c.p+"static/media/Rocket.923ac883.jpg",p=function(){return Object(j.jsxs)("div",{className:"home-page",children:[Object(j.jsx)(h,{name:"main",position:"left",image:u,title:"Space X",content:"Starship, Spacecrafts and Super Heavy rockets design and manufacturer. Reduce space transportation costs and work with our world-class talent ready to tackle challenging projects."}),Object(j.jsx)(h,{name:"history",position:"right",image:b,title:"History",content:"Starship, Spacecrafts and Super Heavy rockets design and manufacturer. Reduce space transportation costs and work with our world-class talent ready to tackle challenging projects.",buttonText:"Know More",buttonLink:"/history"}),Object(j.jsx)(h,{name:"launches",position:"left",image:m,title:"Launches",content:"Starship, Spacecrafts and Super Heavy rockets design and manufacturer. Reduce space transportation costs and work with our world-class talent ready to tackle challenging projects.",buttonText:"Know More",buttonLink:"/launches"}),Object(j.jsx)(h,{name:"rocket",position:"right",image:O,title:"Rocket",content:"Starship, Spacecrafts and Super Heavy rockets design and manufacturer. Reduce space transportation costs and work with our world-class talent ready to tackle challenging projects.",buttonText:"Know More",buttonLink:"/rockets"})]})},x=c(3),g=c(10),f=c(12),v=c.n(f),k=(c(62),c.p+"static/media/YT.6f9e32ba.png"),N=c.p+"static/media/Wiki.39e8e5b0.png",y=c.p+"static/media/Search.aa3405aa.png",w=function(e){var t=e.launchesArray,c=void 0===t?[]:t,a=n.a.useState({filteredData:[],search:""}),s=Object(g.a)(a,2),i=s[0],r=s[1];return n.a.useMemo((function(){r(Object(x.a)(Object(x.a)({},i),{},{filteredData:c.filter((function(e){return e.mission_name.toLowerCase().includes(i.search.toLowerCase())}))}))}),[i.search,c]),Object(j.jsx)("section",{className:"launches",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"filter",children:Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("img",{src:y,height:"20",style:{margin:"0 0.5rem"}}),Object(j.jsx)("input",{value:i.search,onChange:function(e){return r(Object(x.a)(Object(x.a)({},i),{},{search:e.target.value}))}})]})}),Object(j.jsx)("div",{className:"all-launches",children:i.filteredData.length>0?i.filteredData.map((function(e,t){return Object(j.jsx)(S,{launch:e},t)})):Object(j.jsx)("div",{style:{textAlign:"center",width:"100%",padding:"5rem"},children:"loading..."})})]})})},S=function(e){var t,c=e.launch;return Object(j.jsxs)("div",{className:"launch-card",children:[Object(j.jsx)("div",{className:"title",children:c.mission_name}),Object(j.jsxs)("div",{className:"content",children:[null===(t=c.details)||void 0===t?void 0:t.slice(0,100),"..."]}),Object(j.jsx)(o.b,{to:"#",className:"btn",children:"Read More..."}),Object(j.jsx)(L,{links:c.links})]})},L=function(e){var t=e.links;return Object(j.jsxs)("div",{className:"links",children:[""!==t.video_link&&Object(j.jsxs)("a",{href:t.video_link,target:"_blank",children:[" ",Object(j.jsx)("img",{src:k,height:"32",alt:"Video Link"})," "]}),""!==t.wikipedia&&Object(j.jsxs)("a",{href:t.wikipedia,target:"_blank",children:[" ",Object(j.jsx)("img",{src:N,height:"32",alt:"Wikipedia Link"})," "]})]})},H=function(){var e=n.a.useState({launches:[],errors:""}),t=Object(g.a)(e,2),c=t[0],a=t[1];return n.a.useEffect((function(){v.a.get("https://api.spacexdata.com/v3/launches").then((function(e){return a(Object(x.a)(Object(x.a)({},c),{},{launches:e.data}))})).catch((function(e){return a(Object(x.a)(Object(x.a)({},c),{},{errors:e.message}))}))}),[]),Object(j.jsx)(w,{launchesArray:c.launches})},_=c(31),D=function(e){var t=e.timelineArray,c=void 0===t?[]:t;return Object(j.jsx)("section",{className:"timeline-section",children:Object(j.jsx)("div",{className:"timeline-items",children:c.length>0&&c.map((function(e){return Object(j.jsx)(M,{timelineDate:C(e.event_date_unix),timelineHead:e.title,timelineContent:e.details},e.id)}))})})},M=function(e){var t=e.timelineDate,c=e.timelineHead,a=e.timelineContent;return Object(j.jsxs)("div",{className:"timeline-item",children:[Object(j.jsx)("div",{className:"timeline-dot"}),Object(j.jsx)("div",{className:"timeline-date",children:t}),Object(j.jsxs)("div",{className:"timeline-content",children:[Object(j.jsx)("h3",{children:c}),Object(j.jsx)("p",{children:a})]})]})},C=function(e){var t="string"===typeof e?parseInt(e):e,c=new Date(1e3*t),a=c.getDate(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][c.getMonth()],s=c.getFullYear();return"".concat(a,"-").concat(n,"-").concat(s)},R=(c(63),function(){var e=n.a.useState({history:[],errors:""}),t=Object(g.a)(e,2),c=t[0],a=t[1];return n.a.useEffect((function(){v.a.get("https://api.spacexdata.com/v3/history").then((function(e){return a(Object(x.a)(Object(x.a)({},c),{},{history:e.data}))})).catch((function(e){return a(Object(x.a)(Object(x.a)({},c),{},{errors:e.message}))}))}),[]),Object(j.jsx)(D,{timelineArray:Object(_.a)(c.history).reverse()})}),A=(c(64),function(e){var t=e.rocket;return Object(j.jsxs)("div",{className:"rocket-item",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("div",{className:"title",children:t.rocket_name}),Object(j.jsx)("div",{className:"content",children:t.description}),Object(j.jsx)("a",{href:t.wikipedia,target:"_blank",className:"btn",children:"Read More"})]}),Object(j.jsxs)("div",{className:"right overview",children:[Object(j.jsx)("div",{className:"title",children:"Overview"}),Object(j.jsxs)("span",{children:[Object(j.jsx)("p",{children:"Height"})," ",Object(j.jsxs)("p",{children:[t.height.meters," m / ",t.height.feet," ft"]})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("p",{children:"Diameter"})," ",Object(j.jsxs)("p",{children:[t.diameter.meters," m / ",t.diameter.feet," ft"]})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("p",{children:"Mass"})," ",Object(j.jsxs)("p",{children:[t.mass.kg," kg / ",t.mass.lb," lb"]})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("p",{children:"Payload Weight"})," ",Object(j.jsxs)("p",{children:[t.payload_weights.kg," kg / ",t.payload_weights.lb," lb"]})]})]})]})}),T=function(){var e=n.a.useState({rockets:[],errors:""}),t=Object(g.a)(e,2),c=t[0],a=t[1];return n.a.useEffect((function(){v.a.get("https://api.spacexdata.com/v3/rockets").then((function(e){return a(Object(x.a)(Object(x.a)({},c),{},{rockets:e.data}))})).catch((function(e){return a(Object(x.a)(Object(x.a)({},c),{},{errors:e.message}))}))}),[]),console.log(c.rockets),Object(j.jsx)("section",{className:"rockets",children:c.rockets.map((function(e){return Object(j.jsx)(A,{rocket:e})}))})},F=(c(65),function(){return Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",component:p}),Object(j.jsx)(l.a,{path:"/history",component:R}),Object(j.jsx)(l.a,{path:"/launches",component:H}),Object(j.jsx)(l.a,{path:"/rockets",component:T})]})]})})});i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(F,{})}),document.getElementById("root")),r()}},[[66,1,2]]]);
//# sourceMappingURL=main.eaa62822.chunk.js.map