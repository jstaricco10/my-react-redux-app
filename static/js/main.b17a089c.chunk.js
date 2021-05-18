(this["webpackJsonpmy-react-redux-app"]=this["webpackJsonpmy-react-redux-app"]||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){},193:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(13),c=a.n(r),i=(a(121),a(122),a(63)),s=a(18),j=a(235),l=a(231),b=a(199),d=a(246),u=a(236),o=a(4),O=[{label:"Players",route:"/players"},{label:"Teams",route:"/teams"}];function m(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(l.a,{position:"static",children:Object(o.jsx)(j.a,{variant:"dense",children:Object(o.jsx)(u.a,{color:"secondary","aria-label":"outlined primary button group",children:O.map((function(e){return Object(o.jsx)(b.a,{children:Object(o.jsx)(d.a,{children:Object(o.jsx)(i.b,{to:e.route,children:e.label})})},e.label)}))})})})})}var h=a(23),f=a(237),x=a(238),y=a(200),p=a(247),g=a(239),v=a(24),D=a(195),C=Object(f.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));function E(){var e=Object(v.c)((function(e){return e.playersData.players})),t=C();return Object(o.jsxs)("div",{className:t.root,children:["PLAYERS LIST",Object(o.jsxs)(x.a,{children:[Object(o.jsx)(g.a,{}),e.map((function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(y.a,{button:!0,children:Object(o.jsxs)(p.a,{children:[e.name," ",e.lastname," | ",e.age," |"," ",Object(D.default)(e.dateofbirth,"MM/dd/yyyy")," |"]})},e.id),Object(o.jsx)(g.a,{})]})}))]})]})}var P=a(20),w=a(12),T=a(67),S=a.n(T),A="CREATE_PLAYER_SUCCESS",F="CREATE_TEAM_SUCCESS",_="ADD_PLAYER_TO_TEAM",k="DELETE_PLAYER_FROM_TEAM";var M=a(240),N=a(241),L=a(242),R=a(243),I=a(69),q=a.n(I);a(89);function J(){var e=Object(v.b)(),t=Object(n.useState)({id:"",name:"",lastname:"",age:21,dateofbirth:new Date(1999,6,16)}),a=Object(h.a)(t,2),r=a[0],c=a[1],i=function(e){return c(Object(w.a)(Object(w.a)({},r),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(M.a,{id:"team-form",children:[Object(o.jsxs)(N.a,{children:[Object(o.jsx)(d.a,{children:"Name"}),Object(o.jsx)(L.a,{value:r.name,name:"name","aria-describedby":"my-helper-text",onChange:i})]}),Object(o.jsxs)(N.a,{children:[Object(o.jsx)(d.a,{children:"Last Name"}),Object(o.jsx)(L.a,{value:r.lastname,name:"lastname","aria-describedby":"my-helper-text",onChange:i})]}),Object(o.jsxs)(N.a,{children:[Object(o.jsx)(d.a,{children:"Date of Birth"}),Object(o.jsx)(q.a,{selected:r.dateofbirth,onChange:function(e){var t=function(e){var t=Date.now()-e.getTime(),a=new Date(t);return Math.abs(a.getUTCFullYear()-1970)}(e);t<18?alert("Invalid Date, player age must be > than 18"):c(Object(w.a)(Object(w.a)({},r),{},{dateofbirth:e,age:t}))}})]}),Object(o.jsx)(N.a,{}),Object(o.jsxs)(N.a,{children:[Object(o.jsxs)(d.a,{children:["Age ",r.age]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(R.a,{id:"my-helper-text",children:"Age must be higher or equal to 18"})]})]}),Object(o.jsx)(b.a,{color:"secondary",onClick:function(){var t=S()("test-id-"),a=Object(w.a)(Object(w.a)({},r),{},{id:t});return a.name?a.lastname?(e(function(e){return{type:A,player:e}}(a)),void c({id:"",name:"",lastname:"",age:21,dateofbirth:new Date(1999,6,16)})):alert("Player lastname is required"):alert("Player name is required")},variant:"outlined",children:Object(o.jsx)(d.a,{children:"Add New Player"})})]})}function Y(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],r=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b.a,{variant:"outlined",onClick:function(){r(!a)},children:Object(o.jsx)(d.a,{children:"Player Form"})}),a&&Object(o.jsx)(J,{}),Object(o.jsx)(E,{})]})}var U=a(22),B=a(245),z=a(244);var W=Object(f.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}}));function X(){var e=Object(v.b)(),t=Object(v.c)((function(e){return e.teamsData.teams})),a=Object(v.c)((function(e){return e.playersData.players})),n=W(),r=function(n){var r=n.target.value,c=n.target.name,i=t.filter((function(e){return e.id===c})),s=a.filter((function(e){return e.id===r}));if(i.length>0&&s.length>0){var j=i[0],l=s[0],b=[].concat(Object(U.a)(j.players),[l]),d=j.players.filter((function(e){return e.id!==l.id})),u=Object(w.a)(Object(w.a)({},j),{},{players:b,numberOfPlayers:j.numberOfPlayers+1}),o=Object(w.a)(Object(w.a)({},j),{},{players:d,numberOfPlayers:j.numberOfPlayers-1}),O=!(j.players.filter((function(e){return e.id===l.id})).length>0);e(O?function(e,t){return{type:_,player:t,team:e}}(u,l):function(e,t){return{type:k,player:t,team:e}}(o,l))}};return Object(o.jsxs)("div",{className:n.root,children:["TEAMS LIST",Object(o.jsxs)(x.a,{children:[Object(o.jsx)(g.a,{}),t.map((function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(y.a,{button:!0,children:[Object(o.jsxs)(p.a,{children:[e.name," | ",e.stadium," | Number of Players:"," ",e.numberOfPlayers," |"," ",Object(D.default)(e.dateofbirth,"MM/dd/yyyy")," |"]}),Object(o.jsx)(B.a,{name:e.id,value:a,onChange:r,children:a.map((function(t){return e.players.filter((function(e){return e.id===t.id})).length>0?Object(o.jsxs)(z.a,{value:t.id,style:{backgroundColor:"#b3fcbc"},children:[t.name," ",t.lastname]}):Object(o.jsxs)(z.a,{value:t.id,style:{backgroundColor:"#ffabc2"},children:[t.name," ",t.lastname]})}))})]}),Object(o.jsx)(g.a,{})]})}))]})]})}function G(){var e=Object(v.b)(),t=Object(n.useState)({id:"",name:"",stadium:"",players:[],dateofbirth:new Date(1891,6,16),numberOfPlayers:0}),a=Object(h.a)(t,2),r=a[0],c=a[1],i=Object(v.c)((function(e){return e.teamsData.teams})),s=function(e){c(Object(w.a)(Object(w.a)({},r),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(M.a,{children:[Object(o.jsxs)(N.a,{children:[Object(o.jsx)(d.a,{children:"Name"}),Object(o.jsx)(L.a,{value:r.name,name:"name","aria-describedby":"my-helper-text",onChange:s})]}),Object(o.jsxs)(N.a,{children:[Object(o.jsx)(d.a,{children:"Stadium"}),Object(o.jsx)(L.a,{value:r.stadium,name:"stadium","aria-describedby":"my-helper-text",onChange:s})]}),Object(o.jsxs)(N.a,{children:[Object(o.jsx)(d.a,{children:"Date of Fundation"}),Object(o.jsx)(q.a,{selected:r.dateofbirth,onChange:function(e){c(Object(w.a)(Object(w.a)({},r),{},{dateofbirth:e}))}})]}),Object(o.jsx)("br",{})]}),Object(o.jsx)(b.a,{color:"secondary",onClick:function(){var t=S()("test-id-"),a=!0,n=Object(w.a)(Object(w.a)({},r),{},{id:t});if(i.forEach((function(e){e.stadium===n.stadium&&(a=!1)})),a){if(!n.name)return alert("Team name is required");if(!n.stadium)return alert("Team stadium is required");e(function(e){return{type:F,team:e}}(n)),c({id:"",name:"",stadium:"",players:[],dateofbirth:new Date(1891,6,16),numberOfPlayers:0})}else alert("Invalid Team, stadium name already exists")},variant:"outlined",children:Object(o.jsx)(d.a,{children:"Add New Team"})})]})}function V(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),a=t[0],r=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b.a,{variant:"outlined",onClick:function(){r(!a)},children:Object(o.jsx)(d.a,{children:"Team Form"})}),a&&Object(o.jsx)(G,{}),Object(o.jsx)(X,{})]})}var H=function(){return Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(m,{}),Object(o.jsxs)(s.d,{children:[Object(o.jsx)(s.b,{path:"/players",children:Object(o.jsx)(Y,{})}),Object(o.jsx)(s.b,{path:"/teams",children:Object(o.jsx)(V,{})}),Object(o.jsx)(s.b,{path:"*",children:Object(o.jsx)(s.a,{to:"/players"})})]})]})})},K=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,249)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},Q=a(51),Z={playersData:{players:[{id:"1",name:"Jope",lastname:"Algorta",age:21,dateofbirth:new Date(1999,6,16)},{id:"2",name:"Juan",lastname:"Perez",age:22,dateofbirth:new Date(1998,6,16)},{id:"3",name:"Joaquin",lastname:"Fernandez",age:21,dateofbirth:new Date(1999,6,16)}]},teamsData:{teams:[{id:"1",name:"Manya",stadium:"CDS",dateofbirth:new Date(1891,8,16),players:[{id:"1",name:"Jope",lastname:"Algorta",age:21,dateofbirth:new Date(1999,6,16)}],numberOfPlayers:1},{id:"2",name:"Nacional",stadium:"GPC",dateofbirth:new Date(1910,8,16),players:[],numberOfPlayers:0}]}};var $=Object(Q.b)({playersData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z.playersData,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(w.a)(Object(w.a)({},e),{},{players:[].concat(Object(U.a)(e.players),[t.player])});default:return e}},teamsData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z.teamsData,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(w.a)(Object(w.a)({},e),{},{teams:[].concat(Object(U.a)(e.teams),[t.team])});case _:case k:return Object(w.a)(Object(w.a)({},e),{},{teams:e.teams.map((function(e){return e.id===t.team.id?t.team:e}))});default:return e}}}),ee=a(105),te=a.n(ee);var ae=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.c;return Object(Q.d)($,e,t(Object(Q.a)(te()())))}(Z);c.a.render(Object(o.jsx)(v.a,{store:ae,children:Object(o.jsx)(H,{})}),document.getElementById("root")),K()}},[[193,1,2]]]);
//# sourceMappingURL=main.b17a089c.chunk.js.map