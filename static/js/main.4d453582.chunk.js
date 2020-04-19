(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{18:function(n,e,r){n.exports=r(25)},25:function(n,e,r){"use strict";r.r(e);var t=r(0),o=r.n(t),a=r(14),i=r.n(a),c=r(1),l=r(2);function u(){var n=Object(l.a)(["\n  html {\n    height: 100%;\n\n    body {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      margin: 0;\n\n      #root {\n        background: ",";\n        color: ",";\n        display: flex;\n        font-family: sans-serif;\n        height: 100%;\n        justify-content: center;\n        padding: 15px;\n      }\n    }\n  }\n"]);return u=function(){return n},n}function f(){var n=Object(l.a)(["\n","\n"]);return f=function(){return n},n}var d=Object(c.b)(f(),(function(n){var e=n.theme;return Object(c.c)(u(),e.colors.background,e.colors.black)})),s=r(4);function v(){var n=Object(l.a)(["\n  max-width: 500px;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n"]);return v=function(){return n},n}var h=c.d.div(v());function b(){var n=Object(l.a)(["\n    color: ",";\n    margin-top: 0;\n    text-align: center;\n  "]);return b=function(){return n},n}function g(){var n=Object(l.a)(["\n  ","\n"]);return g=function(){return n},n}var p=c.d.h1(g(),(function(n){var e=n.theme;return Object(c.c)(b(),e.colors.white)}));function m(){var n=Object(l.a)(["\n    background: ",";\n    border-radius: 15px;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    max-height: fit-content;\n    padding: 15px;\n  "]);return m=function(){return n},n}function x(){var n=Object(l.a)(["\n  ","\n"]);return x=function(){return n},n}var w=c.d.div(x(),(function(n){var e=n.theme;return Object(c.c)(m(),e.colors.white)})),O=r(5),k=r(3);function j(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n"]);return j=function(){return n},n}var y=c.d.div(j());function I(){var n=Object(l.a)(["\n    display: flex;\n    flex-flow: row;\n\n    &:nth-child(1) {\n      div {\n        border-top: 4px solid ",";\n      }\n    }\n    &:nth-child(3),\n    &:nth-child(6) {\n      div {\n        border-bottom: 3px solid ",";\n      }\n    }\n    &:nth-child(9) {\n      div {\n        border-bottom: 4px solid ",";\n      }\n    }\n\n    div {\n      &:nth-child(1) {\n        border-left: 4px solid ",";\n      }\n      &:nth-child(3),\n      &:nth-child(6),\n      &:nth-child(9) {\n        border-right: 4px solid ",";\n      }\n      &:nth-child(4),\n      &:nth-child(7) {\n        border-left: none;\n      }\n    }\n  "]);return I=function(){return n},n}function S(){var n=Object(l.a)(["\n  ","\n"]);return S=function(){return n},n}var G=c.d.div(S(),(function(n){var e=n.theme;return Object(c.c)(I(),e.colors.black,e.colors.black,e.colors.black,e.colors.black,e.colors.black)}));function E(){var n=Object(l.a)(["\n    align-items: center;\n    background: ",";\n    border: 1px solid ",";\n    cursor: pointer;\n    display: flex;\n    flex: 1 0 0;\n    font-weight: ",";\n    font-size: 20px;\n    height: auto;\n    justify-content: center;\n    transition: ",";\n    user-select: none;\n\n    &:before {\n      padding-top: 100%;\n      content: '';\n      float: left;\n    }\n\n    &:hover {\n      background-color: ",";\n    }\n  "]);return E=function(){return n},n}function C(){var n=Object(l.a)(["\n  ","\n"]);return C=function(){return n},n}var A=c.d.div(C(),(function(n){var e=n.theme,r=n.active,t=n.bold;return Object(c.c)(E(),r?e.colors.blue:e.colors.white,e.colors.black,t?"bolder":"lighter",e.transition,e.colors.lightBlue)})),N=function(n){var e=n.colIndex,r=n.rowIndex,t=o.a.useContext(un),a=t.workingGrid,i=t.selectedBlock,c=t.handleSelectBlock,l=t.challengeGrid,u=!!i&&(i[0]===r&&i[1]===e),f=!(!l||!l[r][e]);return o.a.createElement(A,{active:u,bold:f,onClick:function(){u||c(r,e)}},a&&a[r][e]||"")},B=function(){var n=o.a.useContext(un),e=n.selectedBlock,r=n.handleSelectBlock,t=n.handleFillValue,a=n.handleRemoveValue;return Object(k.a)("down",(function(){if(e){var n=e[0]+1;n<=8&&n!==e[0]&&r(n,e[1])}})),Object(k.a)("left",(function(){if(e){var n=e[1]-1;n>=0&&n!==e[1]&&r(e[0],n)}})),Object(k.a)("right",(function(){if(e){var n=e[1]+1;n<=8&&n!==e[1]&&r(e[0],n)}})),Object(k.a)("up",(function(){if(e){var n=e[0]-1;n>=0&&n!==e[0]&&r(n,e[1])}})),Object(k.a)(["backspace","0"],a),Object(k.a)("1",(function(){return t(1)})),Object(k.a)("2",(function(){return t(2)})),Object(k.a)("3",(function(){return t(3)})),Object(k.a)("4",(function(){return t(4)})),Object(k.a)("5",(function(){return t(5)})),Object(k.a)("6",(function(){return t(6)})),Object(k.a)("7",(function(){return t(7)})),Object(k.a)("8",(function(){return t(8)})),Object(k.a)("9",(function(){return t(9)})),o.a.createElement(y,null,o.a.Children.toArray(Object(O.a)(Array(9)).map((function(n,e){return o.a.createElement(G,null,o.a.Children.toArray(Object(O.a)(Array(9)).map((function(n,r){return o.a.createElement(N,{colIndex:r,rowIndex:e})}))))}))))},J=r(9),R=function(n){for(var e=n.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),t=n[e];n[e]=n[r],n[r]=t}},W=function(n){var e=n.grid,r=n.rowIndex,t=n.value;return e[r].includes(t)},V=function(n){for(var e=n.grid,r=n.colIndex,t=n.value,o=!1,a=0;a<9;a++)t===e[a][r]&&(o=!0);return o},M=function(n){var e=n.grid,r=n.rowIndex,t=n.colIndex,o=[];if(r<3)if(t<3)for(var a=0;a<3;a++)o.push([e[a][0],e[a][1],e[a][2]]);else if(t<6)for(var i=0;i<3;i++)o.push([e[i][3],e[i][4],e[i][5]]);else for(var c=0;c<3;c++)o.push([e[c][6],e[c][7],e[c][8]]);else if(r<6)if(t<3)for(var l=3;l<6;l++)o.push([e[l][0],e[l][1],e[l][2]]);else if(t<6)for(var u=3;u<6;u++)o.push([e[u][3],e[u][4],e[u][5]]);else for(var f=3;f<6;f++)o.push([e[f][6],e[f][7],e[f][8]]);else if(t<3)for(var d=6;d<9;d++)o.push([e[d][0],e[d][1],e[d][2]]);else if(t<6)for(var s=6;s<9;s++)o.push([e[s][3],e[s][4],e[s][5]]);else for(var v=6;v<9;v++)o.push([e[v][6],e[v][7],e[v][8]]);return o},T=function(n){var e=n.square,r=n.value;return[].concat(Object(O.a)(e[0]),Object(O.a)(e[1]),Object(O.a)(e[2])).includes(r)},U=function(n){for(var e=0;e<9;e++)for(var r=0;r<9;r++)if(0===n[e][r])return!1;return!0},q=[1,2,3,4,5,6,7,8,9],F=function n(e){for(var r=0,t=0,o=0;o<81;o++)if(t=o%9,0===e[r=Math.floor(o/9)][t]){R(q);var a,i=Object(J.a)(q);try{for(i.s();!(a=i.n()).done;){var c=a.value;if(!W({grid:e,rowIndex:r,value:c})&&!V({grid:e,colIndex:t,value:c})){var l=M({grid:e,rowIndex:r,colIndex:t});if(!T({square:l,value:c})){if(e[r][t]=c,U(e))return!0;if(n(e))return!0}}}}catch(u){i.e(u)}finally{i.f()}break}return e[r][t]=0,!1},z=function(n){for(var e=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],r=0;r<9;r++)for(var t=0;t<9;t++)e[r][t]=n[r][t];return e},L=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]],P=function(){var n=z(L);return F(n),n},Q=function(){return Math.floor(9*Math.random())},$=[1,2,3,4,5,6,7,8,9],D=function n(e){for(var r=0,t=0,o=0;o<81;o++)if(t=o%9,0===e[r=Math.floor(o/9)][t]){var a,i=Object(J.a)($);try{for(i.s();!(a=i.n()).done;){var c=a.value;if(!W({grid:e,rowIndex:r,value:c})&&!V({grid:e,colIndex:t,value:c})){var l=M({grid:e,colIndex:t,rowIndex:r});if(!T({square:l,value:c})){if(e[r][t]=c,U(e)){H.counter++;break}if(n(e))return!0}}}}catch(u){i.e(u)}finally{i.f()}break}e[r][t]=0},H={counter:0},K=function(n){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;e>0;){for(var r=Q(),t=Q();0===n[r][t];)r=Q(),t=Q();var o=n[r][t];n[r][t]=0,H.counter=0;var a=z(n);D(a),1!==H.counter&&(n[r][t]=o,e--)}return n},X=function n(e,r){if(Array.isArray(e)&&Array.isArray(r))return e===r;if(e.length!==r.length)return!1;for(var t=0,o=e.length;t<o;t++)if(!n(e[t],r[t]))return!1;return!0};function Y(){var n=Object(l.a)(["\n    align-items: center;\n    background-color: ",";\n    border: 2px solid ",";\n    border-radius: 4px;\n    color: ",";\n    cursor: pointer;\n    flex: 1;\n    font-size: 16px;\n    font-weight: bold;\n    height: 40px;\n    justify-content: center;\n    margin: 4px 2px;\n    min-height: 40px;\n    opacity: 0.9;\n    padding: 0;\n    transition: ",";\n\n    &:focus {\n      border-color: ",";\n      outline: none;\n    }\n\n    &:hover {\n      opacity: 0.6;\n    }\n  "]);return Y=function(){return n},n}function Z(){var n=Object(l.a)(["\n  ","\n"]);return Z=function(){return n},n}var _=c.d.button(Z(),(function(n){var e=n.theme;return Object(c.c)(Y(),e.colors.black,e.colors.black,e.colors.white,e.transition,e.colors.blue)}));function nn(){var n=Object(l.a)(["\n  display: flex;\n  flex-flow: row;\n"]);return nn=function(){return n},n}var en=c.d.div(nn()),rn=function(){var n=o.a.useContext(un),e=n.handleFillValue,r=n.handleRemoveValue;return o.a.createElement(en,null,[1,2,3,4,5,6,7,8,9].map((function(n){return o.a.createElement(_,{key:n,onClick:function(){return e(n)}},n)})),o.a.createElement(_,{onClick:r},"-"))};function tn(){var n=Object(l.a)(["\n    border: 2px solid ",";\n    border-radius: 4px;\n    color: ",";\n    cursor: pointer;\n    flex: 1;\n    font-size: 16px;\n    font-weight: bold;\n    margin: 4px 2px;\n    padding: 9px 15px;\n    transition: ",";\n\n    &:focus {\n      border-color: ",";\n      outline: none;\n    }\n  "]);return tn=function(){return n},n}function on(){var n=Object(l.a)(["\n  ","\n"]);return on=function(){return n},n}var an=c.d.input(on(),(function(n){var e=n.theme;return Object(c.c)(tn(),e.colors.black,e.colors.black,e.transition,e.colors.blue)})),cn=function(n){var e=n.value,r=n.handleChange;return o.a.createElement(an,{placeholder:"Complexity (default 5)",value:e,onChange:r,type:"number"})},ln=function(){var n=o.a.useState(""),e=Object(s.a)(n,2),r=e[0],t=e[1],a=o.a.useContext(un).handleNewGame;return o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(cn,{value:r,handleChange:function(n){return t(n.target.value)}}),o.a.createElement(_,{onClick:function(){window.confirm("Are you sure you want to start a new game?")&&a(parseInt(r,10))}},"New Game"))},un=o.a.createContext({handleSelectBlock:function(){},handleFillValue:function(){},handleRemoveValue:function(){},handleNewGame:function(){}}),fn=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];var dn=function(){var n=o.a.useState(null),e=Object(s.a)(n,2),r=e[0],t=e[1],a=o.a.useState(fn),i=Object(s.a)(a,2),c=i[0],l=i[1],u=o.a.useState(fn),f=Object(s.a)(u,2),d=f[0],v=f[1],b=o.a.useState(fn),g=Object(s.a)(b,2),m=g[0],x=g[1],O=function(n){var e=P(),r=z(e),t=K(r,n),o=z(t);l(t),v(e),x(o),function(n){var e=n.solvedGrid,r=n.challengeGrid,t=n.workingGrid;localStorage.setItem("solvedGrid",JSON.stringify(e)),localStorage.setItem("challengeGrid",JSON.stringify(r)),localStorage.setItem("workingGrid",JSON.stringify(t))}({solvedGrid:e,challengeGrid:t,workingGrid:o})};return o.a.useEffect((function(){var n=function(){var n=localStorage.getItem("solvedGrid"),e=localStorage.getItem("challengeGrid"),r=localStorage.getItem("workingGrid");return n&&e&&r?{solvedGrid:JSON.parse(n),challengeGrid:JSON.parse(e),workingGrid:JSON.parse(r)}:null}();n?(v(n.solvedGrid),l(n.challengeGrid),x(n.workingGrid)):O(5)}),[]),o.a.createElement(un.Provider,{value:{challengeGrid:c,solvedGrid:d,workingGrid:m,selectedBlock:r,handleSelectBlock:function(n,e){t([n,e])},handleFillValue:function(n){if(r){var e=r[0],t=r[1];if(W({grid:m,rowIndex:e,value:n}))alert("This value is already in this ROW!");else if(V({grid:m,colIndex:t,value:n}))alert("This value is already in this COLUMN!");else{var o=M({grid:m,colIndex:t,rowIndex:e});if(T({square:o,value:n}))alert("This value is already in this SQUARE!");else{var a=z(m);a[e][t]=n,x(a),i=a,localStorage.setItem("workingGrid",JSON.stringify(i)),X(a,d)&&alert("Completed!")}}}var i},handleRemoveValue:function(){if(r){var n=r[0],e=r[1];if(!c[n][e]){var t=z(m);t[n][e]=0,x(t)}}},handleNewGame:O}},o.a.createElement(h,null,o.a.createElement(p,null,"Sudoku"),o.a.createElement(w,null,o.a.createElement(ln,null),o.a.createElement(B,null),o.a.createElement(rn,null))))},sn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function vn(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var r=n.installing;null!=r&&(r.onstatechange=function(){"installed"===r.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}i.a.render(o.a.createElement(c.a,{theme:{colors:{background:"radial-gradient(#282c34cc, #282c34)",black:"#282c34",blue:"#a0e9fd",lightBlue:"#caf3fe",white:"#fff"},transition:"0.3s"}},o.a.createElement(d,null),o.a.createElement(dn,null)),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/sudoku",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/sudoku","/service-worker.js");sn?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(r){var t=r.headers.get("content-type");404===r.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):vn(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):vn(e,n)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.4d453582.chunk.js.map