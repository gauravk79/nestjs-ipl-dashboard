(this["webpackJsonpipl-dashboard-frontend"]=this["webpackJsonpipl-dashboard-frontend"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},28:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(18),r=c.n(s),i=(c(25),c(26),c(4)),j=c(2),l=c(8),h=c.n(l),m=c(10),o=c(11),d=c(20),u=(c(28),c(0)),b=function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner,r=new Date(c.date);return Object(u.jsxs)("div",{className:s?"MatchDetailCard  won-card":"MatchDetailCard lost-card",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"vs",children:"vs."}),Object(u.jsx)("h1",{children:Object(u.jsx)(i.b,{to:n,children:a})}),Object(u.jsx)("h2",{className:"match-date",children:r.toDateString()}),Object(u.jsxs)("h3",{className:"match-venue",children:["at ",c.venue]}),Object(u.jsxs)("h3",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]}),Object(u.jsxs)("div",{className:"additional-detail",children:[Object(u.jsx)("h3",{children:"First Innings"}),Object(u.jsx)("p",{children:c.team1}),Object(u.jsx)("h3",{children:"Second Innings"}),Object(u.jsx)("p",{children:c.team2}),Object(u.jsx)("h3",{children:"Man of the match"}),Object(u.jsx)("p",{children:c.playerOfMatch}),Object(u.jsx)("h3",{children:"Umpires"}),Object(u.jsxs)("p",{children:[c.umpire1,", ",c.umpire2]})]})]})},O=(c(35),function(e){var t=e.teamName,c=e.match;if(!c)return null;var a=c.team1===t?c.team2:c.team1,n="/teams/".concat(a),s=t===c.matchWinner;return Object(u.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(u.jsx)("span",{className:"vs",children:"vs."}),Object(u.jsx)("h3",{children:Object(u.jsx)(i.b,{to:n,children:a})}),Object(u.jsxs)("p",{className:"match-result",children:[c.matchWinner," won by ",c.resultMargin," ",c.result]})]})}),x=(c(36),function(){var e=Object(a.useState)({matches:[]}),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(j.f)().teamName;return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/teams/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),c&&c.teamName?Object(u.jsxs)("div",{className:"TeamPage",children:[Object(u.jsx)("div",{className:"team-name-section",children:Object(u.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(u.jsxs)("div",{className:"win-loss-section",children:["Wins / Losses",Object(u.jsx)(d.PieChart,{data:[{title:"Losses",value:c.totalMatches-c.totalWins,color:"#e15233"},{title:"Wins",value:c.totalWins,color:"green"}]})]}),Object(u.jsxs)("div",{className:"match-detail-section",children:[Object(u.jsx)("h3",{children:"Latest Matches"}),Object(u.jsx)(b,{teamName:c.teamName,match:c.matches[0]})]}),c.matches.slice(1).map((function(e){return Object(u.jsx)(O,{teamName:c.teamName,match:e},e.id)})),Object(u.jsx)("div",{className:"more-link",children:Object(u.jsx)(i.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:"More >"})})]}):Object(u.jsx)("h1",{children:"Team not found!"})}),f=(c(37),c(38),function(e){for(var t=e.teamName,c=e.selectedYear,a=[],n="2020";n>="2008";n--)a.push(n);return Object(u.jsx)("ol",{className:"YearSelector",children:a.map((function(e){return Object(u.jsx)("li",{className:c==e?"selected-year":"",children:Object(u.jsx)(i.b,{to:"/teams/".concat(t,"/matches/").concat(e),children:e})},e)}))})}),p=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(j.f)(),r=s.teamName,l=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/teams/").concat(r,"/matches?year=").concat(l));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),n(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,l]),Object(u.jsxs)("div",{className:"MatchPage",children:[Object(u.jsxs)("div",{className:"year-selector",children:[Object(u.jsx)("h3",{children:"Select Year"}),Object(u.jsx)(f,{teamName:r,selectedYear:l})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{className:"page-heading",children:[Object(u.jsx)(i.b,{to:"/teams/".concat(r),children:r})," matches in ",l]}),c.length>0?c.map((function(e){return Object(u.jsx)(b,{teamName:r,match:e},e.id)})):Object(u.jsx)("h3",{children:"No Matches found!"})]})]})},v=(c(39),function(e){var t=e.teamName;return Object(u.jsx)("div",{className:"TeamTile",children:Object(u.jsx)(i.b,{to:"/teams/".concat(t),children:Object(u.jsx)("h2",{children:t})})})}),N=(c(40),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(m.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/teams"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsx)("div",{className:"HomePage",children:Object(u.jsx)("div",{className:"team-grid",children:c.map((function(e){return Object(u.jsx)(v,{teamName:e.teamName},e.id)}))})})}),g=(c(41),function(){return Object(u.jsx)("div",{className:"HeaderSection",children:Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("h1",{className:"app-name",children:"IPL Cricket Dashbaord"})})})});var w=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(i.a,{children:[Object(u.jsx)(g,{}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/teams/:teamName/matches/:year",children:Object(u.jsx)(p,{})}),Object(u.jsx)(j.a,{path:"/teams/:teamName",children:Object(u.jsx)(x,{})}),Object(u.jsx)(j.a,{path:"/",children:Object(u.jsx)(N,{})})]})]})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),M()}},[[42,1,2]]]);
//# sourceMappingURL=main.d7076439.chunk.js.map