(window.webpackJsonp=window.webpackJsonp||[]).push([[6,7],{243:function(t,e,o){var content=o(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("50cca031",content,!0,{sourceMap:!1})},247:function(t,e,o){"use strict";o.r(e);var n=o(245),r=o.n(n),l={name:"logo",mounted:function(){this.drawLogo()},methods:{drawLogo:function(){var t=this.$refs.logoPathFirst,e=this.$refs.logoPathLast,o=r.a.timeline({easing:"easeOutQuad",duration:1e3});return o.add({targets:this.$refs.wrapper,top:0,opacity:1,duration:500,delay:500}).add({targets:t,begin:function(){t.setAttribute("stroke","url(#linear)")},strokeDashoffset:[r.a.setDashoffset,0]}).add({targets:e,begin:function(){e.setAttribute("stroke","url(#linear)")},strokeDashoffset:[r.a.setDashoffset,0]},"-=500"),o},animateLogo:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];r()({targets:this.$refs.gradient,x1:t?0:-92.797607,y1:t?50.971962:101.9009,x2:t?185.63434:92.825981,y2:t?-50.92894:0,duration:500,easing:"easeOutCubic"})}}},c=(o(254),o(37)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"wrapper",attrs:{id:"logo-wrapper"}},[o("div",{staticClass:"is-clickable",attrs:{id:"logo"},on:{mouseenter:t.animateLogo,mouseleave:function(e){return t.animateLogo(!1)}}},[o("span",{staticClass:"icon is-large"},[o("svg",{staticClass:"logo-svg",attrs:{width:"92.837mm",height:"50.972mm",version:"1.1",viewBox:"0 0 92.836731 50.971962"}},[o("path",{ref:"logoPathFirst",attrs:{d:"M 8.4947642,42.476255 28.1139,8.4962459",fill:"none",stroke:"#00000000","stroke-linecap":"round","stroke-width":"16"}}),t._v(" "),o("path",{ref:"logoPathLast",attrs:{d:"m 67.354131,42.491548 c 9.391796,-4.5e-5 17.00535,-7.613554 17.00535,-17.00535 2.41e-4,-9.392061 -7.613554,-17.0058798 -17.00535,-17.0058798 -6.075022,0.00397 -11.686234,3.2482488 -14.720967,8.5110098 l 0.0068,-4.77e-4 -14.71885,25.485404",fill:"none",stroke:"#00000000","stroke-linecap":"round","stroke-width":"16"}}),t._v(" "),o("defs",[o("linearGradient",{ref:"gradient",attrs:{id:"linear",x1:"-92.797607",y1:"101.9009",x2:"92.825981",y2:"0",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{"stop-color":"#FEC601",offset:"0"}}),t._v(" "),o("stop",{attrs:{"stop-color":"#f45866",offset:"0.125"}}),t._v(" "),o("stop",{attrs:{"stop-color":"#3772ff",offset:"0.5"}}),t._v(" "),o("stop",{attrs:{"stop-color":"#3772ff",offset:"1"}})],1)],1)])]),t._v(" "),o("span",{staticClass:"ml-3 is-size-4 has-text-weight-bold is-hidden-mobile"},[t._v("\n      Max Caplan\n    ")])])])}),[],!1,null,"4a279cae",null);e.default=component.exports},254:function(t,e,o){"use strict";o(243)},255:function(t,e,o){var n=o(48)(!1);n.push([t.i,"#logo-wrapper[data-v-4a279cae]{position:absolute;top:-25px;left:0;z-index:100;display:flex;align-items:center;height:74px;opacity:0}@media only screen and (max-width:1023px){#logo-wrapper[data-v-4a279cae]{height:52px}}#logo[data-v-4a279cae]{display:flex;width:100%;margin-left:12px;color:#7a7a7a;transition:all .25s ease}#logo[data-v-4a279cae]:hover{color:#3772ff}#logo .icon[data-v-4a279cae]{height:auto}.logo-svg[data-v-4a279cae]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}",""]),t.exports=n},256:function(t,e,o){var content=o(270);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("e6321270",content,!0,{sourceMap:!1})},269:function(t,e,o){"use strict";o(256)},270:function(t,e,o){var n=o(48)(!1);n.push([t.i,"#home-wrapper[data-v-64976b2a]{height:calc(100vh - 74px);width:100%}#home[data-v-64976b2a]{height:100%;width:100%;position:absolute;top:0;left:0}#home .container[data-v-64976b2a]{height:100%;display:flex;align-items:center}#header-text[data-v-64976b2a]{opacity:0;-webkit-animation:textFadeIn-data-v-64976b2a 1s ease .5s forwards;animation:textFadeIn-data-v-64976b2a 1s ease .5s forwards}@-webkit-keyframes textFadeIn-data-v-64976b2a{0%{transform:translateY(-24px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes textFadeIn-data-v-64976b2a{0%{transform:translateY(-24px);opacity:0}to{transform:translateY(0);opacity:1}}.title[data-v-64976b2a]{font-size:4rem}.subtitle[data-v-64976b2a]{font-size:2.5rem}",""]),t.exports=n},279:function(t,e,o){"use strict";o.r(e);var n={name:"home",components:{logo:o(247).default}},r=(o(269),o(37)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"home-wrapper"}},[o("logo"),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"section scroll-section",attrs:{id:"home"}},[o("div",{staticClass:"container"},[o("div",{staticStyle:{width:"100%"}},[o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-narrow"},[o("div",{attrs:{id:"header-text"}},[o("h1",{staticClass:"title is-size-1-touch"},[t._v("\n                Hi. "),o("br"),t._v("\n                I'm Max,\n              ")]),t._v(" "),o("h2",{staticClass:"subtitle is-size-3-touch"},[o("span",{staticClass:"has-background-link-light has-text-link-dark px-2 py-1"},[t._v("And I like")]),t._v("\n                designing\n              ")])])]),t._v(" "),o("div",{staticClass:"column"})])])])])}],!1,null,"64976b2a",null);e.default=component.exports;installComponents(component,{Logo:o(247).default})}}]);