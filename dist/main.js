(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5:function(t,e,a){var n=a(6);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(9).default)("48d2d316",n,!0,{})},6:function(t,e,a){(e=a(7)(!1)).push([t.i,"*,*::before,*::after{box-sizing:border-box}ul,ol{padding:0}body,h1,h2,h3,h4,p,ul,ol,li,figure,figcaption,blockquote,dl,dd{margin:0}body{min-height:100vh;scroll-behavior:smooth;text-rendering:optimizeSpeed;line-height:1.5}ul,ol{list-style:none}a:not([class]){text-decoration-skip-ink:auto}img{max-width:100%;display:block}article>*+*{margin-top:1em}input,button,textarea,select{font:inherit}@media (prefers-reduced-motion: reduce){*{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important}}main{height:100vh;max-width:1200px;margin:0 auto}#coffee-cards{width:90%;margin:0 auto}#coffee-card{border:1px solid salmon;padding:30px}\n",""]),t.exports=e},8:function(t,e,a){"use strict";a.r(e);a(3);var n=a(1),i={data:()=>({links:[{name:"Home",to:"/"}]})},r=a(0),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",[a("ul",t._l(t.links,(function(e,n){return a("li",{key:n},[a("router-link",{attrs:{to:e.to}},[t._v(t._s(e.name))])],1)})),0)]),t._v(" "),a("main",[a("router-view")],1),t._v(" "),a("footer",[t._v("This is the footer")])])}),[],!1,null,null,null).exports,l=a(2),s={data:()=>({label:"New Entry"})},c={props:["count"],data:()=>({blend:"",flavor:"",overal:""})},d={components:{"new-card-btn":Object(r.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{on:{click:function(e){return t.$emit("addCount")}}},[t._v(t._s(t.label))])}),[],!1,null,null,null).exports,"coffee-card":Object(r.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{id:"coffee-card"}},[a("label",[t._v("Blend")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.blend,expression:"blend"}],attrs:{type:"text",rows:"1","max-length":"150"},domProps:{value:t.blend},on:{input:function(e){e.target.composing||(t.blend=e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("div",{attrs:{id:"overall-notes"}},[a("div",{attrs:{id:"flavor"}},[a("label",[t._v("Flavor")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.flavor,expression:"flavor"}],attrs:{rows:"5"},domProps:{value:t.flavor},on:{input:function(e){e.target.composing||(t.flavor=e.target.value)}}})]),t._v(" "),a("div",{attrs:{id:"overall"}},[a("label",[t._v("Overall")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.overall,expression:"overall"}],attrs:{rows:"5"},domProps:{value:t.overall},on:{input:function(e){e.target.composing||(t.overall=e.target.value)}}})])]),t._v(" "),a("div",{attrs:{id:"rating"}}),t._v(" "),a("div"),t._v(" "),a("p",[t._v(" You clicked me "+t._s(t.count)+" times!")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"coffee-card-in",attrs:{id:"aroma"}},[e("label",[this._v("Aroma")]),this._v(" "),e("input",{attrs:{type:"range",min:"1",max:"5",value:"3"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"coffee-card-in",attrs:{id:"acidity"}},[e("label",[this._v("Acidity")]),this._v(" "),e("input",{attrs:{type:"range",min:"1",max:"5",value:"3"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"coffee-card-in",attrs:{id:"sweetness"}},[e("label",[this._v("Sweetness")]),this._v(" "),e("input",{attrs:{type:"range",min:"1",max:"5",value:"3"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"coffee-card-in",attrs:{id:"body"}},[e("label",[this._v("Body")]),this._v(" "),e("input",{attrs:{type:"range",min:"1",max:"5",value:"3"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"coffee-card-in",attrs:{id:"finish"}},[e("label",[this._v("Finish")]),this._v(" "),e("input",{attrs:{type:"range",min:"1",max:"5",value:"3"}})])}],!1,null,null,null).exports},data:()=>({count:[]}),methods:{newCard:function(t){console.log(this),this.count.push("test")}}},u=Object(r.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Home page for coffee diary")]),this._v(" "),e("ul",{attrs:{id:"coffee-cards"}},this._l(this.count,(function(t,a){return e("li",{key:a},[e("coffee-card",{attrs:{count:t}})],1)})),0),this._v(" "),e("new-card-btn",{on:{addCount:this.newCard}})],1)}),[],!1,null,null,null).exports;n.a.use(l.a);var v=new l.a({routes:[{path:"/",name:"Home",component:u}]});a(5);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(t=>{console.log("SW registered: ",t)}).catch(t=>{console.log("SW registration failed: ",t)})}),n.a.config.productionTip=!1,new n.a({el:"#app",router:v,components:{app:o},template:"<app/>"})}},[[8,1,2]]]);
//# sourceMappingURL=main.js.map