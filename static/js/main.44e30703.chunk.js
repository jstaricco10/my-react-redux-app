(this["webpackJsonpmy-react-redux-app"]=this["webpackJsonpmy-react-redux-app"]||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){},193:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(12),c=a.n(r),i=(a(121),a(122),a(63)),s=a(18),j=a(235),l=a(231),b=a(199),d=a(246),o=a(236),u=a(4),O=[{label:"Players",route:"/players"},{label:"Teams",route:"/teams"}];function m(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l.a,{position:"static",children:Object(u.jsx)(j.a,{variant:"dense",children:Object(u.jsx)(o.a,{color:"secondary","aria-label":"outlined primary button group",children:O.map((function(e){return Object(u.jsx)(b.a,{children:Object(u.jsx)(d.a,{children:Object(u.jsx)(i.b,{to:e.route,children:e.label})})},e.label)}))})})})})}var h=a(23),x=a(237),f=a(238),g=a(200),y=a(247),p=a(239),v=a(24),C=a(195),w=Object(x.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}})),P=function(){var e=Object(v.c)((function(e){return e.players})),t=w();return Object(u.jsxs)("div",{className:t.root,children:["PLAYERS LIST",Object(u.jsxs)(f.a,{children:[Object(u.jsx)(p.a,{}),e.map((function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g.a,{button:!0,children:Object(u.jsxs)(y.a,{children:[e.name," ",e.lastname," | ",e.age," |"," ",Object(C.default)(e.dateofbirth,"MM/dd/yyyy")," |"]})},e.id),Object(u.jsx)(p.a,{})]})}))]})]})},S=a(20),T=a(15),D=a(67),E=a.n(D),A="CREATE_PLAYER_SUCCESS",F="CREATE_TEAM_SUCCESS",_="ADD_PLAYER_TO_TEAM";var N=a(240),k=a(241),M=a(242),L=a(243),I=a(69),q=a.n(I);a(89);function J(){var e=Object(v.b)(),t=Object(n.useState)({id:"",name:"",lastname:"",age:21,dateofbirth:new Date(1999,6,16)}),a=Object(h.a)(t,2),r=a[0],c=a[1],i=function(e){return c(Object(T.a)(Object(T.a)({},r),{},Object(S.a)({},e.target.name,e.target.value)))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(N.a,{children:[Object(u.jsxs)(k.a,{children:[Object(u.jsx)(d.a,{children:"Name"}),Object(u.jsx)(M.a,{name:"name","aria-describedby":"my-helper-text",onChange:i})]}),Object(u.jsxs)(k.a,{children:[Object(u.jsx)(d.a,{children:"Last Name"}),Object(u.jsx)(M.a,{name:"lastname","aria-describedby":"my-helper-text",onChange:i})]}),Object(u.jsxs)(k.a,{children:[Object(u.jsx)(d.a,{children:"Date of Birth"}),Object(u.jsx)(q.a,{selected:r.dateofbirth,onChange:function(e){console.log(e);var t=function(e){var t=Date.now()-e.getTime(),a=new Date(t);return Math.abs(a.getUTCFullYear()-1970)}(e);t<18?alert("Invalid Date, player age must be > than 18"):c(Object(T.a)(Object(T.a)({},r),{},{dateofbirth:e,age:t}))}})]}),Object(u.jsx)(k.a,{}),Object(u.jsxs)(k.a,{children:[Object(u.jsxs)(d.a,{children:["Age ",r.age]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(L.a,{id:"my-helper-text",children:"Age must be higher or equal to 18"})]})]}),Object(u.jsx)(b.a,{color:"secondary",onClick:function(){var t=E()("test-id-"),a=Object(T.a)(Object(T.a)({},r),{},{id:t});return a.name?a.lastname?void e(function(e){return{type:A,player:e}}(a)):alert("Player lastname is required"):alert("Player name is required")},variant:"outlined",children:Object(u.jsx)(d.a,{children:"Add New Player"})})]})}function R(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.a,{variant:"outlined",onClick:function(){r(!a)},children:Object(u.jsx)(d.a,{children:"Player Form"})}),a&&Object(u.jsx)(J,{}),Object(u.jsx)(P,{})]})}var U=a(22),Y=a(245),B=a(244);var z=Object(x.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}})),W=function(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.teams})),a=Object(v.c)((function(e){return e.players})),n=z(),r=function(n){var r,c,i=n.target.value,s=n.target.name,j=t.filter((function(e){return e.id===s})),l=a.filter((function(e){return e.id===i}));if(j.length>0&&l.length>0){var b=[].concat(Object(U.a)(j[0].players),[l[0]]),d=Object(T.a)(Object(T.a)({},j[0]),{},{players:b,numberOfPlayers:j[0].numberOfPlayers+1});e((r=d,c=l[0],{type:_,player:c,team:r}))}};return Object(u.jsxs)("div",{className:n.root,children:["TEAMS LIST",Object(u.jsxs)(f.a,{children:[Object(u.jsx)(p.a,{}),t.map((function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(g.a,{button:!0,children:[Object(u.jsxs)(y.a,{children:[e.name," | ",e.stadium," | Number of Players:"," ",e.numberOfPlayers," |"," ",Object(C.default)(e.dateofbirth,"MM/dd/yyyy")," |"]}),Object(u.jsx)(Y.a,{name:e.id,value:a,onChange:r,children:a.map((function(t){if(!(e.players.filter((function(e){return e.id===t.id})).length>0))return Object(u.jsxs)(B.a,{value:t.id,children:[t.name," ",t.lastname]})}))})]}),Object(u.jsx)(p.a,{})]})}))]})]})};function X(){var e=Object(v.b)(),t=Object(n.useState)({id:"",name:"",stadium:"",players:[],dateofbirth:new Date(1891,6,16),numberOfPlayers:0}),a=Object(h.a)(t,2),r=a[0],c=a[1],i=Object(v.c)((function(e){return e.teams})),s=function(e){console.log(e.target.name),console.log(e.target.value),c(Object(T.a)(Object(T.a)({},r),{},Object(S.a)({},e.target.name,e.target.value))),console.log(r)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(N.a,{children:[Object(u.jsxs)(k.a,{children:[Object(u.jsx)(d.a,{children:"Name"}),Object(u.jsx)(M.a,{name:"name","aria-describedby":"my-helper-text",onChange:s})]}),Object(u.jsxs)(k.a,{children:[Object(u.jsx)(d.a,{children:"Stadium"}),Object(u.jsx)(M.a,{name:"stadium","aria-describedby":"my-helper-text",onChange:s})]}),Object(u.jsxs)(k.a,{children:[Object(u.jsx)(d.a,{children:"Date of Fundation"}),Object(u.jsx)(q.a,{selected:r.dateofbirth,onChange:function(e){console.log(e),c(Object(T.a)(Object(T.a)({},r),{},{dateofbirth:e})),console.log(r)}})]}),Object(u.jsx)("br",{})]}),Object(u.jsx)(b.a,{color:"secondary",onClick:function(){var t=E()("test-id-"),a=!0,n=Object(T.a)(Object(T.a)({},r),{},{id:t});if(i.map((function(e){e.stadium===n.stadium&&(a=!1)})),a)return n.name?n.stadium?void e(function(e){return{type:F,team:e}}(n)):alert("Team stadium is required"):alert("Team name is required");alert("Invalid Team, stadium name already exists")},variant:"outlined",children:Object(u.jsx)(d.a,{children:"Add New Team"})})]})}function G(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.a,{variant:"outlined",onClick:function(){r(!a)},children:Object(u.jsx)(d.a,{children:"Team Form"})}),a&&Object(u.jsx)(X,{}),Object(u.jsx)(W,{})]})}var V=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m,{}),Object(u.jsxs)(s.d,{children:[Object(u.jsx)(s.b,{path:"/players",children:Object(u.jsx)(R,{})}),Object(u.jsx)(s.b,{path:"/teams",children:Object(u.jsx)(G,{})}),Object(u.jsx)(s.b,{path:"*",children:Object(u.jsx)(s.a,{to:"/players"})})]})]})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,249)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},K=a(51),Q={players:[{id:"1",name:"Jope",lastname:"Algorta",age:21,dateofbirth:new Date(1999,6,16)},{id:"2",name:"Juan",lastname:"Perez",age:22,dateofbirth:new Date(1998,6,16)},{id:"3",name:"Joaquin",lastname:"Fernandez",age:21,dateofbirth:new Date(1999,6,16)}],teams:[{id:"1",name:"Manya",stadium:"CDS",dateofbirth:new Date(1891,8,16),players:[{id:"1",name:"Jope",lastname:"Algorta",age:21,dateofbirth:new Date(1999,6,16)}],numberOfPlayers:1},{id:"2",name:"Nacional",stadium:"GPC",dateofbirth:new Date(1910,8,16),players:[],numberOfPlayers:0}]};var Z=Object(K.b)({players:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q.players,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return[].concat(Object(U.a)(e),[Object(T.a)({},t.player)]);default:return e}},teams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q.teams,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return[].concat(Object(U.a)(e),[Object(T.a)({},t.team)]);case _:return e.map((function(e){return e.id===t.team.id?t.team:e}));default:return e}}}),$=a(105),ee=a.n($);var te=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.c;return Object(K.d)(Z,e,t(Object(K.a)(ee()())))}(Q);c.a.render(Object(u.jsx)(v.a,{store:te,children:Object(u.jsx)(V,{})}),document.getElementById("root")),H()}},[[193,1,2]]]);
//# sourceMappingURL=main.44e30703.chunk.js.map