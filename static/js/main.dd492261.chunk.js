(this.webpackJsonprajattyagi=this.webpackJsonprajattyagi||[]).push([[0],{167:function(e,t,c){},317:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c(0),a=c.n(n),i=c(36),r=c.n(i),l=(c(167),c(324)),j=c(319),o=c(321),b=c(160),d=c(325),h=function(){var e=(new Date).getFullYear();return Object(s.jsx)(l.a,{fluid:!0,style:{overflow:"hidden",marginTop:"20px",backgroundColor:"#030852",borderRadius:"10px",padding:"20px"},children:Object(s.jsxs)(j.a,{style:{backgroundColor:"#030852",color:"#f7f7f9"},children:[Object(s.jsx)(o.a,{children:"Rajat Tyagi"}),Object(s.jsxs)(o.a,{pullRight:!0,children:["\xa92020-",e,". All rights reserved."]})]})})},x=c(105),u=c(161),O=c(14),m=function(e){e.onSelect,e.activeKey;var t=Object(u.a)(e,["onSelect","activeKey"]);return Object(s.jsxs)(j.a,Object(x.a)(Object(x.a)({},t),{},{style:{borderRadius:"10px"},children:[Object(s.jsx)(O.b,{to:"/",children:Object(s.jsx)(j.a.Header,{style:{backgroundImage:"linear-gradient(#6e42cd, #c86883)",borderRadius:"10px",paddingLeft:"15px",paddingRight:"18px",paddingTop:"18px"},children:Object(s.jsx)(b.a,{icon:"home",size:"lg",style:{color:"#f7f7f9",alignItems:"center",paddingLeft:"5px"}})})}),Object(s.jsxs)(j.a.Body,{children:[Object(s.jsxs)(o.a,{children:[Object(s.jsx)(O.b,{to:"/resume",children:Object(s.jsx)(o.a.Item,{children:"Resume"})}),Object(s.jsx)(O.b,{to:"/portfolio",children:Object(s.jsx)(o.a.Item,{children:"Portfolio"})}),Object(s.jsx)(O.b,{to:"/blog",children:Object(s.jsx)(o.a.Item,{children:"Blog"})})]}),Object(s.jsx)(o.a,{pullRight:!0,children:Object(s.jsx)(O.b,{to:"/contact",children:Object(s.jsx)(o.a.Item,{children:"Contact"})})})]})]}))},g=function(){return Object(s.jsx)("div",{children:Object(s.jsx)(m,{})})},p={main_div:function(e){return{alignContent:"center"}}},f=function(){return Object(s.jsx)("div",{style:p.main_div("true"),children:Object(s.jsxs)(l.a,{className:"main_container",children:[Object(s.jsx)(g,{}),Object(s.jsxs)(l.a,{fluid:"true",style:{overflow:"hidden",marginTop:"20px",backgroundColor:"#f7f7f9",borderRadius:"10px",alignItems:"center"},children:[Object(s.jsx)("img",{className:"profile_pic",src:"/img/my.png",alt:"my profile"}),Object(s.jsx)("h2",{className:"name_intro",children:"Hi, I am Rajat Tyagi"}),Object(s.jsx)("p",{className:"intro_text",children:"Hi, I am a developer/cyber security Enthusiast works on multiple technologies. This portfolio website is the show case for my work and a blog for my thoughts. I am here to help you solve your business problems and ease your business processes. I love to work in different technologies because they all give you a different perspective to solve a certain problem."})]}),Object(s.jsx)(l.a,{fluid:"true",className:"section_style",children:Object(s.jsxs)(j.a,{children:[Object(s.jsxs)(o.a,{children:[Object(s.jsx)("a",{href:"https://github.com/chessrajat",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(b.a,{style:{marginLeft:"10px",marginRight:"10px"},icon:"github",size:"2x"})}),Object(s.jsx)("a",{href:"https://stackoverflow.com/users/9573338/rajat-tyagi",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(b.a,{style:{marginLeft:"10px",marginRight:"10px"},icon:"stack-overflow",size:"2x"})}),Object(s.jsx)("a",{style:{marginTop:"30px"},href:"https://tryhackme.com/p/Drag0",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(d.a,{style:{position:"relative",top:"8px",marginLeft:"10px",marginRight:"10px",backgroundColor:"#f7f7f9"},circle:!0,size:"sm",src:"/img/icons/thm.png"})})]}),Object(s.jsxs)(o.a,{pullRight:!0,style:{marginTop:"5px"},children:[Object(s.jsx)(b.a,{icon:"at"}),"\xa0 rajattyagi.coder@gmail.com"]})]})}),Object(s.jsx)(h,{})]})})},y=(c(315),c(10)),v=function(){return Object(s.jsx)("div",{style:{alignContent:"center"},children:Object(s.jsxs)(l.a,{className:"main_container",children:[Object(s.jsx)(g,{}),Object(s.jsx)(l.a,{fluid:!0,style:{alignItems:"center"},className:"section_style",children:Object(s.jsx)("h3",{children:"rajattyagi.coder@gmail.com"})})]})})},w=c(22),_=c.n(w),k=c(41),I=c(28),N=c(323),C=c(322),R=c(159),S=c(158),T=function(e){var t=e.skills;return Object(s.jsxs)(N.a.Item,{className:"skill_icon",children:[Object(s.jsx)("img",{style:{width:"70px"},src:"/img/icons/".concat(t.icon_name),alt:"".concat(t.text," icon")}),Object(s.jsxs)("h5",{children:[Object(S.a)(Array(t.count)).map((function(e,t){return Object(s.jsx)("span",{children:"\xa0"})})),t.text]})]})},z=function(){var e=Object(n.useState)(null),t=Object(I.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(null),r=Object(I.a)(i,2),j=r[0],o=r[1],b=Object(n.useState)(!1),d=Object(I.a)(b,2),x=d[0],u=d[1],O=function(){var e=Object(k.a)(_.a.mark((function e(){var t,c,s,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/data/technicalskills.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,a(c),e.next=9,fetch("/data/business_skills.json");case 9:return s=e.sent,e.next=12,s.json();case 12:n=e.sent,o(n);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){O()}),[]),Object(s.jsx)("div",{style:{alignContent:"center"},children:Object(s.jsxs)(l.a,{className:"main_container",children:[Object(s.jsx)(g,{}),Object(s.jsxs)(l.a,{fluid:!0,style:{alignItems:"center"},className:"section_style",children:[Object(s.jsx)("h2",{children:"Education"}),Object(s.jsx)("p",{children:"B.sc Computer Science , University of Delhi, India"})]}),Object(s.jsxs)(l.a,{fluid:!0,style:{alignItems:"left"},className:"section_style",children:[Object(s.jsx)("h2",{style:{textAlign:"center"},children:"Experience"}),Object(s.jsx)("br",{}),Object(s.jsx)("h4",{children:"TCS (Tata Consultancy Services)"}),Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"From:"})," Feb,2020"]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"To:"})," Currently working"]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Designation: "})," Systems Engineer"]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("b",{children:"Role: "})," Automation Developer"]})]}),Object(s.jsxs)(l.a,{fluid:!0,style:{alignItems:"center"},className:"section_style",children:[Object(s.jsx)("h2",{children:"Technical Skills"}),Object(s.jsx)(N.a,{children:c&&c.map((function(e,t){return Object(s.jsx)(T,{skills:e},t)}))})]}),Object(s.jsxs)(l.a,{style:{alignItems:"center"},fluid:!0,className:"section_style",children:[Object(s.jsx)("h2",{children:"Business Skills"}),Object(s.jsx)(N.a,{children:j&&j.map((function(e,t){return Object(s.jsx)("h6",{className:"skill_icon",children:e},t)}))})]}),Object(s.jsxs)(l.a,{style:{alignItems:"center"},fluid:!0,className:"section_style",children:[Object(s.jsx)("h2",{children:"Certification"}),Object(s.jsx)("br",{}),Object(s.jsx)(N.a,{children:Object(s.jsx)("img",{src:"/img/certificates/az900.png",alt:"microsoft az900 certificate",width:"200px",onClick:function(){return u(!0)}})}),Object(s.jsxs)(C.a,{show:x,children:[Object(s.jsx)("img",{src:"/img/certificates/az900.png",alt:"microsoft az900 certificate",width:"100%"}),Object(s.jsx)(R.a,{className:"light_button",width:"100%",onClick:function(){return u(!1)},children:"Close"})]})]}),Object(s.jsx)(h,{})]})})},E=c(326),F=function(){return Object(s.jsx)("div",{style:{alignContent:"center"},children:Object(s.jsxs)(l.a,{className:"main_container",children:[Object(s.jsx)(g,{}),Object(s.jsx)(l.a,{fluid:!0,style:{alignItems:"center"},className:"section_style",children:Object(s.jsxs)(N.a,{justify:"space-between",style:{maxWidth:"650px"},children:[Object(s.jsx)(N.a.Item,{componentClass:E.a,colspan:24,sm:11,children:Object(s.jsx)("img",{className:"image_shadow",style:{width:"100%"},src:"/img/projects/upasswords.jpg",alt:"upasswords api"})}),Object(s.jsxs)(N.a.Item,{className:"project_brief",componentClass:E.a,colspan:24,sm:12,children:[Object(s.jsx)("p",{children:"Upassword is a Rest API build in python-flask with flask-restful. with database as mongodb and docker for container. some features are authentication, generate password, save passwords."}),Object(s.jsx)("a",{href:"https://github.com/chessrajat/upasswords_flask",target:"_blank",rel:"noreferrer",children:Object(s.jsxs)(R.a,{className:"light_button",children:[Object(s.jsx)(b.a,{icon:"github",size:"lg"}),"\xa0View"]})})]})]})})]})})},L=function(){var e=Object(n.useState)(null),t=Object(I.a)(e,2),c=t[0],a=t[1],i=function(){var e=Object(k.a)(_.a.mark((function e(){var t,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/data/blogs.json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),Object(s.jsx)("div",{style:{alignContent:"center"},children:Object(s.jsxs)(l.a,{className:"main_container",children:[Object(s.jsx)(g,{}),Object(s.jsx)(l.a,{fluid:!0,style:{alignItems:"center"},className:"section_style",children:Object(s.jsx)(N.a,{style:{maxWidth:"650px"},children:c&&c.map((function(e,t){return Object(s.jsxs)(N.a.Item,{className:"blog_grid",componentClass:E.a,colspan:24,sm:11,children:[Object(s.jsx)(O.b,{to:{pathname:"/blog/".concat(e.name)},children:Object(s.jsx)("img",{className:"image_shadow",style:{width:"100%"},src:"/img/blogs/".concat(e.name,".jpg"),alt:"".concat(e.name)})}),Object(s.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",color:"gray"},children:[Object(s.jsxs)("div",{children:[Object(s.jsx)(b.a,{icon:"tag"})," ",e.category]}),Object(s.jsx)("p",{children:e.date})]})]},t)}))})})]})})},B=function(){var e=Object(n.useState)(null),t=Object(I.a)(e,2),c=t[0],a=t[1],i=Object(y.f)(),r="/blogs/".concat(i.blogname,".html");return Object(n.useEffect)((function(){fetch(r).then(function(){var e=Object(k.a)(_.a.mark((function e(t){var c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.text();case 2:c=e.sent,a(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),console.log("File don't exists")}))})),Object(s.jsx)("div",{style:{alignContent:"center"},children:Object(s.jsxs)(l.a,{className:"main_container",children:[Object(s.jsx)(g,{}),Object(s.jsx)(l.a,{fluid:!0,style:{alignItems:"center"},className:"section_style",children:c&&Object(s.jsx)("span",{style:{width:"100%"},dangerouslySetInnerHTML:{__html:c}})})]})})},D=function(){return Object(s.jsx)("div",{style:{alignContent:"center"},children:Object(s.jsxs)(l.a,{className:"main_container",children:[Object(s.jsx)(g,{}),Object(s.jsxs)(l.a,{fluid:!0,style:{alignItems:"center"},className:"section_style",children:[Object(s.jsx)("img",{style:{width:"95%",maxWidth:"500px"},src:"/img/icons/404.png",alt:"404 page"}),Object(s.jsx)("h3",{children:"Page not found"})]})]})})};var A=function(){return Object(s.jsx)("div",{className:"main_app",children:Object(s.jsxs)(y.c,{children:[Object(s.jsx)(y.a,{path:"/",exact:!0,children:Object(s.jsx)(f,{})}),Object(s.jsx)(y.a,{path:"/resume",children:Object(s.jsx)(z,{})}),Object(s.jsx)(y.a,{path:"/portfolio",children:Object(s.jsx)(F,{})}),Object(s.jsx)(y.a,{path:"/contact",children:Object(s.jsx)(v,{})}),Object(s.jsx)(y.a,{path:"/blog",exact:!0,children:Object(s.jsx)(L,{})}),Object(s.jsx)(y.a,{path:"/blog/:blogname",children:Object(s.jsx)(B,{})}),Object(s.jsx)(y.a,{children:Object(s.jsx)(D,{})})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,327)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(O.a,{children:Object(s.jsx)(A,{})})}),document.getElementById("root")),P()}},[[317,1,2]]]);
//# sourceMappingURL=main.dd492261.chunk.js.map