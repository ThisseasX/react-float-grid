(this["webpackJsonpreact-float-grid"]=this["webpackJsonpreact-float-grid"]||[]).push([[0],{35:function(e,t,c){e.exports=c(50)},50:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(25),i=c.n(r),o=c(15),d=c(29),l=c(6),u=c(61),b=Object(u.a)({grid:{margin:"-8px","& > div":{margin:"8px"},userSelect:"none"},item:{float:"left",width:"calc(100% / 3 * 2 - 16px)",height:"120px",boxSizing:"border-box"},itemPaper:{height:"100%",boxSizing:"border-box"},itemRight:{float:"right",width:"calc(100% / 3 - 16px)",height:"256px",boxSizing:"border-box"},itemRightPaper:{height:"100%",backgroundColor:"red !important",boxSizing:"border-box"},expanded33:{width:"calc(100% / 3 - 16px)"},expanded50:{width:"calc(50% - 16px)"},expanded66:{width:"calc(100% / 3 * 2 - 16px)"},expanded100:{width:"calc(100% - 16px)"},expandedRight33:{height:"calc(120px * 1 + 16px * 0)"},expandedRight50:{height:"calc(120px * 2 + 16px * 1)"},expandedRight66:{height:"calc(120px * 3 + 16px * 2)"},expandedRight100:{height:"calc(120px * 4 + 16px * 3)"}}),p=c(3),s=c(5),x=function(e,t,c,a){var n,r;return a?(n={},Object(l.a)(n,e.expandedRight33,t.includes("".concat(c,"-33"))),Object(l.a)(n,e.expandedRight50,t.includes("".concat(c,"-50"))),Object(l.a)(n,e.expandedRight66,t.includes("".concat(c,"-66"))),Object(l.a)(n,e.expandedRight100,t.includes("".concat(c,"-100"))),n):(r={},Object(l.a)(r,e.expanded33,t.includes("".concat(c,"-33"))),Object(l.a)(r,e.expanded50,t.includes("".concat(c,"-50"))),Object(l.a)(r,e.expanded66,t.includes("".concat(c,"-66"))),Object(l.a)(r,e.expanded100,t.includes("".concat(c,"-100"))),r)},h=function(){var e=b(),t=Object(a.useState)(["0-66","1-50","2-66","3-33","4-33","5-33"]),c=Object(d.a)(t,2),r=c[0],i=c[1],l=function(e){return function(){i((function(t){var c="".concat(e,"-33"),a="".concat(e,"-50"),n="".concat(e,"-66"),r="".concat(e,"-100"),i=Object(p.includes)(c,t),d=Object(p.includes)(a,t),l=Object(p.includes)(n,t),u=Object(p.includes)(r,t);return i?[].concat(Object(o.a)(Object(p.reject)(Object(p.eq)(c),t)),[a]):d?[].concat(Object(o.a)(Object(p.reject)(Object(p.eq)(a),t)),[n]):l?[].concat(Object(o.a)(Object(p.reject)(Object(p.eq)(n),t)),[r]):u?[].concat(Object(o.a)(Object(p.reject)(Object(p.eq)(r),t)),[c]):t}))}};return n.a.createElement("div",{className:e.grid},Array(6).fill().map((function(t,c){return n.a.createElement(v,{key:c,className:Object(s.a)(1===c?e.itemRight:e.item,x(e,r,c,1===c)),onClick:l(c)},n.a.createElement(O,{className:1===c?e.itemRightPaper:e.itemPaper}))})))},g=c(64),m=c(63),j=c(66),O=function(e){var t=e.className;return n.a.createElement(g.a,{clone:!0,p:2,boxShadow:"0 4px 8px 0 rgba(0,0,0,.32)"},n.a.createElement(m.a,{className:t},n.a.createElement(j.a,{variant:"h4",gutterBottom:!0},"Header"),n.a.createElement(j.a,{variant:"body1"},"Some content below the header")))},f=c(30),R=function(e){return e&&"running"===e.playState},v=function(e){var t=e.className,c=e.children,r=Object(f.a)(e,["className","children"]),i=Object(a.useRef)(),o=Object(a.useRef)(),d=Object(a.useRef)(),l=i.current?i.current.getBoundingClientRect():{};return Object(a.useLayoutEffect)((function(){var e=R(d.current)?l:o.current;if(R(d.current)&&d.current&&d.current.finish(),i.current){var t=i.current.getBoundingClientRect();if(e){var c=e.x-t.x,a=e.y-t.y,n="translate(".concat(c,"px, ").concat(a,"px)");d.current=i.current.animate([{transform:n,transformOrigin:"top left"},{transform:"none",transformOrigin:"top left"}],{duration:500,easing:"ease-in-out",fill:"both"})}o.current=t}})),n.a.createElement("div",Object.assign({className:t},r,{ref:i}),c)};i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.e32a2d36.chunk.js.map