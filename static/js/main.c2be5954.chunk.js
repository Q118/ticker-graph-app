(this.webpackJsonpstock_viewer=this.webpackJsonpstock_viewer||[]).push([[0],{144:function(e,t,a){e.exports=a(176)},149:function(e,t,a){},151:function(e,t,a){},169:function(e,t){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o);a(149),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(132),i=a(133),u=a(140),s=a(135),m=a(141),d=(a(150),a(151),a(179)),v=a(181),b=a(182),f=a(180),g=a(7),h=a(142),E=a(136),p=a.n(E),k=a(178);var O=function(){return r.a.createElement("div",{className:"spinner-container"},r.a.createElement(k.a,{animation:"border",variant:"success"}))};var j=function(){var e=Object(n.useState)(!1),t=Object(g.a)(e,2),o=t[0],l=t[1],c=r.a.useRef(),i=Object(n.useState)(null),u=Object(g.a)(i,2),s=u[0],m=u[1],d=Object(n.useState)("ETH"),v=Object(g.a)(d,2),b=v[0],f=v[1],E=Object(n.useState)(null),k=Object(g.a)(E,2),j=k[0],y=k[1],C=Object(n.useState)(1551650578),w=Object(g.a)(C,2),S=w[0],D=w[1],B=Object(n.useState)(null),T=Object(g.a)(B,2),x=T[0],I=T[1],L=Object(n.useState)(1583186578),F=Object(g.a)(L,2),H=F[0],N=F[1],Y=document.getElementById("symbol"),_=document.getElementById("start"),A=document.getElementById("end");function M(e){var t=new Date(1e3*e);return p()(t).utc().format("YYYY-MM-DD")}function W(e){return console.log("".concat(e," is being passed in")),Math.floor(new Date(e)/1e3)}var J=Object(n.useState)(null),z=Object(g.a)(J,2),K=(z[0],z[1]),P=a(153);P.ApiClient.instance.authentications.api_key.apiKey="c82m3d2ad3ia12596ssg";var R,V=new P.DefaultApi;return Object(n.useEffect)((function(){for(var e=[],t=0;t<localStorage.length;t++){var a=localStorage.key(t),n=localStorage.getItem(a);e.push({time:a,value:n})}K(e)}),[f]),Object(n.useEffect)((function(){!function(e,t,a){var n,r;R=[{time:Date,value:Number}],""!==e&&void 0!==e&&null!==e||(e="ETH"),n=j?W(t):1551650578,r=x?W(a):1583186578,V.stockCandles(e,"D",n,r,(function(e,t){if(!e){for(var a=0;a<(null===t||void 0===t?void 0:null===(n=t.t)||void 0===n?void 0:n.length);a++){var n;R[a]={time:M(t.t[a]),value:t.c[a]}}for(var r=0;r<R.length;r++)localStorage.setItem(R[r].time,R[r].value);return R}console.error(e)}))}(b,S,H);var e,t=Object(h.a)(c.current,{width:900,height:500}),a=t.addAreaSeries({topColor:"rgba(33, 150, 243, 0.56)",bottomColor:"rgba(33, 150, 243, 0.04)",lineColor:"rgba(33, 150, 243, 1)",lineWidth:2}),n={Dark:{chart:{layout:{backgroundColor:"#2B2B43",lineColor:"#2B2B43",textColor:"#D9D9D9"},watermark:{color:"rgba(0, 0, 0, 0)"},crosshair:{color:"#758696"},grid:{vertLines:{color:"#2B2B43"},horzLines:{color:"#363C4E"}}},series:{topColor:"rgba(32, 226, 47, 0.56)",bottomColor:"rgba(32, 226, 47, 0.04)",lineColor:"rgba(32, 226, 47, 1)"}}};return setTimeout((function(){l(!1),a.setData(R)}),850),localStorage.clear(),e="Dark",t.applyOptions(n[e].chart),a.applyOptions(n[e].series),function(){t.remove()}}),[b,R,S,H,o]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h3",null,"Enter the ticker symbol of the stock you want to see."),r.a.createElement("div",{style:{paddingTop:"10px",paddingBottom:"10px"}},r.a.createElement("h6",null,"Stock Ticker"),r.a.createElement("input",{type:"text",id:"symbol",onChange:function(e){m(e.target.value)},value:s,placeholder:"ex: ETH"}),"            ",r.a.createElement("label",{htmlFor:"start"},"Starting Date: "),r.a.createElement("input",{type:"date",id:"start",htmlFor:"start",value:j,onChange:function(e){y(e.target.value)}}),"            ",r.a.createElement("label",{htmlFor:"end"},"Ending Date: "),r.a.createElement("input",{type:"date",id:"end",htmlFor:"end",value:x,onChange:function(e){I(e.target.value)}}),"            ",r.a.createElement("button",{className:"btn-success",onClick:function(){f(Y.value),D(_.value),N(A.value),l(!0)}},"Submit")),o&&r.a.createElement(O,{visible:!0})),r.a.createElement("div",{ref:c}),r.a.createElement("div",null,r.a.createElement("h3",null,"Viewing Info for: ",b||"ETH")))},y=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{fluid:!0},r.a.createElement(v.a,{hover:"true",style:{backgroundColor:"#3d4147"},expand:"lg",variant:"dark",sticky:"top"},r.a.createElement(v.a.Brand,{style:{color:"#20c94d"},href:"/stock_view"},"Covey"),r.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(b.a,{className:"ml-auto"},r.a.createElement(b.a.Link,{href:"#"},"Home"),r.a.createElement(b.a.Link,{href:"#"},"Leaderboard"),r.a.createElement(b.a.Link,{href:"#"},"Communities"))),r.a.createElement(f.a,{className:"join-btn"},"Create Portfolio")),r.a.createElement("br",null),r.a.createElement(j,null))}}]),t}(r.a.Component);l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[144,1,2]]]);
//# sourceMappingURL=main.c2be5954.chunk.js.map