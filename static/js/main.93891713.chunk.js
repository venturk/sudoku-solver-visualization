(this["webpackJsonpsudoku-solver-visualization"]=this["webpackJsonpsudoku-solver-visualization"]||[]).push([[0],[,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(2),l=t.n(o);t(8),t(9);function c(e,a){return Math.floor(Math.random()*(a-e+1))+e}var i=function(e){for(var a=function(e){for(var a=[],t=[[8,2,7,1,5,4,3,9,6],[9,6,5,3,2,7,1,4,8],[3,4,1,6,8,9,7,5,2],[5,9,3,4,6,8,2,7,1],[4,7,2,5,1,3,6,8,9],[6,1,8,9,7,2,4,3,5],[7,8,6,2,3,5,9,1,4],[1,5,4,7,9,6,8,2,3],[2,3,9,8,4,1,5,6,7]],n=0;n<81;++n)a.push(n);for(var r,o,l=a.length;0!==l;)o=Math.floor(Math.random()*l),r=a[--l],a[l]=a[o],a[o]=r;for(var c=0;c<a.length-e;++c){var i=Math.floor(a[c]/9),m=a[c]%9;t[i][m]=0}return t}(e),t=0;t<9;t+=3){var n=c(t,t+2);if(n!==t){var r=a[t];a[t]=a[n],a[n]=r}if((n=c(t,t+2))!==t)for(var o=0;o<9;++o){var l=a[o][t];a[o][t]=a[o][n],a[o][n]=l}}var i=3*c(0,2);if(0!==i)for(var m=0;m<3;++m){var s=a[m];a[m]=a[i+m],a[i+m]=s}return a},m=function(e){var a=void 0!==e.children?e.children:i(e.numOfElements);return r.a.createElement("table",null,r.a.createElement("tbody",null,a.map((function(a,t){return r.a.createElement("tr",{key:t},a.map((function(a,n){return r.a.createElement("td",{className:"".concat((9*t+n)%9===3||(9*t+n)%9===6||(9*t+n)%9===0?"td-left-border":(9*t+n)%9===8?"td-right-border":""," \n                                            ").concat((9*t+n)%27>=0&&(9*t+n)%27<=8?"td-top-border":(9*t+n)%27>=18&&(9*t+n)%27<=26?"td-bottom-border":"","\n                                            "),key:n,value:9*t+n},r.a.createElement("input",{className:"table-cell-text ".concat(9*t+n),type:"text",value:0===a?"":a,onChange:e.onChange}))})))}))))},s=(t(10),function(e){return r.a.createElement("header",{className:"toolbar"},r.a.createElement("nav",{className:"toolbar__navigation"},r.a.createElement("div",null),r.a.createElement("div",{className:"toolbar__logo"},"Sudoku Solver Visualization"),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"num-of-elements"},"30"),r.a.createElement("input",{className:"slider",type:"range",min:"30",max:"81",onChange:e.onSliderChange}),r.a.createElement("div",{className:"num-of-elements"},"81"),r.a.createElement("div",{className:"spacer"}),r.a.createElement("div",{className:"toolbar_navigation-items"},r.a.createElement("ul",null,e.children.map((function(e){return r.a.createElement("li",null,e)}))))))});var u=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null,r.a.createElement("button",{onClick:""},"Randomize Board"),r.a.createElement("button",{onClick:""},"Solve")),r.a.createElement(m,{numOfElements:"35"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[3,1,2]]]);
//# sourceMappingURL=main.93891713.chunk.js.map