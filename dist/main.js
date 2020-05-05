(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5:function(e,a,t){var r=t(6);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,t(9).default)("48d2d316",r,!0,{})},6:function(e,a,t){(a=t(7)(!1)).push([e.i,"*,*::before,*::after{box-sizing:border-box}ul,ol{padding:0}body,h1,h2,h3,h4,p,ul,ol,li,figure,figcaption,blockquote,dl,dd{margin:0}body{min-height:100vh;scroll-behavior:smooth;text-rendering:optimizeSpeed;line-height:1.5}ul,ol{list-style:none}a:not([class]){text-decoration-skip-ink:auto}img{max-width:100%;display:block}article>*+*{margin-top:1em}input,button,textarea,select{font:inherit}@media (prefers-reduced-motion: reduce){*{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important}}main{min-height:100vh;max-width:1200px;margin:0 auto}.coffee-cards{width:90%;margin:0 auto}#coffee-card{border:1px solid salmon;padding:30px}\n",""]),e.exports=a},8:function(e,a,t){"use strict";t.r(a);t(3);var r=t(1),o={data:()=>({links:[{name:"Home",to:"/"},{name:"My cards",to:"/mycards"}]})},s=t(0),n=Object(s.a)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("header",[t("ul",e._l(e.links,(function(a,r){return t("li",{key:r},[t("router-link",{attrs:{to:a.to}},[e._v(e._s(a.name))])],1)})),0)]),e._v(" "),t("main",[t("router-view")],1),e._v(" "),t("footer",[e._v("This is the footer")])])}),[],!1,null,null,null).exports,i=t(2),d={data:()=>({label:"New Entry"})},l=Object(s.a)(d,(function(){var e=this,a=e.$createElement;return(e._self._c||a)("button",{on:{click:function(a){return e.$emit("addCount")}}},[e._v(e._s(e.label))])}),[],!1,null,null,null).exports,c={props:["card","index"],data:()=>({})},u=Object(s.a)(c,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("form",{attrs:{id:"coffee-card"}},[t("label",[e._v("Blend")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.blend,expression:"card.blend"}],attrs:{type:"text",rows:"1","max-length":"150"},domProps:{value:e.card.blend},on:{input:function(a){a.target.composing||e.$set(e.card,"blend",a.target.value)}}}),e._v(" "),t("div",{staticClass:"coffee-card-in",attrs:{id:"aroma"}},[t("label",[e._v("Aroma")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.aromaQual,expression:"card.aromaQual"}],attrs:{type:"range",min:"1",max:"5",value:"3"},domProps:{value:e.card.aromaQual},on:{__r:function(a){return e.$set(e.card,"aromaQual",a.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.aromaQuan,expression:"card.aromaQuan"}],attrs:{type:"range",min:"1",max:"5",value:"3"},domProps:{value:e.card.aromaQuan},on:{__r:function(a){return e.$set(e.card,"aromaQuan",a.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.aromaNotes,expression:"card.aromaNotes"}],attrs:{type:"text",rows:"5"},domProps:{value:e.card.aromaNotes},on:{input:function(a){a.target.composing||e.$set(e.card,"aromaNotes",a.target.value)}}})]),e._v(" "),t("div",{staticClass:"coffee-card-in",attrs:{id:"acidity"}},[t("label",[e._v("Acidity")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.acidityQual,expression:"card.acidityQual"}],attrs:{type:"range",min:"1",max:"5",value:"3"},domProps:{value:e.card.acidityQual},on:{__r:function(a){return e.$set(e.card,"acidityQual",a.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.acidityQuan,expression:"card.acidityQuan"}],attrs:{type:"range",min:"1",max:"5",value:"3"},domProps:{value:e.card.acidityQuan},on:{__r:function(a){return e.$set(e.card,"acidityQuan",a.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.acidityNotes,expression:"card.acidityNotes"}],attrs:{type:"text",rows:"5"},domProps:{value:e.card.acidityNotes},on:{input:function(a){a.target.composing||e.$set(e.card,"acidityNotes",a.target.value)}}})]),e._v(" "),t("div",{staticClass:"coffee-card-in",attrs:{id:"sweetness"}},[t("label",[e._v("Sweetness")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.sweetnessQual,expression:"card.sweetnessQual"}],attrs:{type:"range",min:"1",max:"5",value:"3"},domProps:{value:e.card.sweetnessQual},on:{__r:function(a){return e.$set(e.card,"sweetnessQual",a.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.sweetnessQuan,expression:"card.sweetnessQuan"}],attrs:{type:"range",min:"1",max:"5",value:"3"},domProps:{value:e.card.sweetnessQuan},on:{__r:function(a){return e.$set(e.card,"sweetnessQuan",a.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.sweetnessNotes,expression:"card.sweetnessNotes"}],attrs:{type:"text",rows:"5"},domProps:{value:e.card.sweetnessNotes},on:{input:function(a){a.target.composing||e.$set(e.card,"sweetnessNotes",a.target.value)}}})]),e._v(" "),t("div",{staticClass:"coffee-card-in",attrs:{id:"body"}},[t("label",[e._v("Body")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.bodyQual,expression:"card.bodyQual"}],attrs:{type:"range",min:"1",max:"5",value:"3"},domProps:{value:e.card.bodyQual},on:{__r:function(a){return e.$set(e.card,"bodyQual",a.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.bodyQuan,expression:"card.bodyQuan"}],attrs:{type:"range",min:"1",max:"5",value:"3"},domProps:{value:e.card.bodyQuan},on:{__r:function(a){return e.$set(e.card,"bodyQuan",a.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.bodyNotes,expression:"card.bodyNotes"}],attrs:{type:"text",rows:"5"},domProps:{value:e.card.bodyNotes},on:{input:function(a){a.target.composing||e.$set(e.card,"bodyNotes",a.target.value)}}})]),e._v(" "),t("div",{staticClass:"coffee-card-in",attrs:{id:"finish"}},[t("label",[e._v("Finish")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.finishQual,expression:"card.finishQual"}],attrs:{type:"range",min:"1",max:"5",value:"3"},domProps:{value:e.card.finishQual},on:{__r:function(a){return e.$set(e.card,"finishQual",a.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.finishQuan,expression:"card.finishQuan"}],attrs:{type:"range",min:"1",max:"5",value:"3"},domProps:{value:e.card.finishQuan},on:{__r:function(a){return e.$set(e.card,"finishQuan",a.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.finishNotes,expression:"card.finishNotes"}],attrs:{type:"text",rows:"5"},domProps:{value:e.card.finishNotes},on:{input:function(a){a.target.composing||e.$set(e.card,"finishNotes",a.target.value)}}})]),e._v(" "),t("div",{attrs:{id:"overall-notes"}},[t("div",{attrs:{id:"flavor"}},[t("label",[e._v("Flavor")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.flavor,expression:"card.flavor"}],attrs:{type:"text",rows:"5"},domProps:{value:e.card.flavor},on:{input:function(a){a.target.composing||e.$set(e.card,"flavor",a.target.value)}}})]),e._v(" "),t("div",{attrs:{id:"overall"}},[t("label",[e._v("Overall")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.card.overall,expression:"card.overall"}],attrs:{type:"text",rows:"5"},domProps:{value:e.card.overall},on:{input:function(a){a.target.composing||e.$set(e.card,"overall",a.target.value)}}})])]),e._v(" "),t("div",{attrs:{id:"rating"}}),e._v(" "),t("div")])}),[],!1,null,null,null).exports,v={props:["index"],data:()=>({label:"Save"})},m={props:["index"],data:()=>({label:"Remove"})};var p={components:{"new-card-btn":l,"coffee-card":u,"save-btn":Object(s.a)(v,(function(){var e=this,a=e.$createElement;return(e._self._c||a)("button",{on:{click:function(a){return e.$emit("store","index")}}},[e._v(e._s(e.label))])}),[],!1,null,null,null).exports,"remove-btn":Object(s.a)(m,(function(){var e=this,a=e.$createElement;return(e._self._c||a)("button",{on:{click:function(a){return e.$emit("remove","index")}}},[e._v(e._s(e.label)+" index: "+e._s(e.index))])}),[],!1,null,null,null).exports},data:()=>({cards:[],storedCards:[],newCard:null}),mounted(){if(localStorage.getItem("cards"))try{this.cards=JSON.parse(localStorage.getItem("cards"))}catch(e){localStorage.removeItem("cards")}if(localStorage.getItem("storedCards"))try{this.cards=JSON.parse(localStorage.getItem("storedCards"))}catch(e){localStorage.removeItem("storedCards")}},methods:{addCard(){this.addCard&&(this.cards.push({aromaQual:"",aromaQuan:"",aromaNotes:"",acidityQual:"",acidityQuan:"",acidityNotes:"",sweetnessQual:"",sweetnessQuan:"",sweetnessNotes:"",bodyQual:"",bodyQuan:"",bodyNotes:"",finishQual:"",finishQuan:"",finishNotes:"",blend:"",flavor:"",overall:""}),this.saveCard())},removeCard(e){this.cards.splice(e,1),this.saveCard()},saveCard(){const e=JSON.stringify(this.cards);localStorage.setItem("cards",e)},storeCard(e){var a=this.cards.splice(e,1)[0];this.storedCards.push(a);const t=JSON.stringify(this.storedCards);localStorage.setItem("storedCards",t)}},watch:{cards:{deep:!0,handler(e){this.saveCard()}}}},f=Object(s.a)(p,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h1",[e._v("Home page for coffee diary")]),e._v(" "),t("ul",{staticClass:"coffee-cards"},e._l(e.cards,(function(a,r){return t("li",{key:r},[t("coffee-card",{attrs:{card:a,index:r}}),e._v(" "),t("div",{staticClass:"card-btns"},[t("save-btn",{attrs:{index:r},on:{store:e.storeCard}}),e._v(" "),t("remove-btn",{attrs:{index:r},on:{remove:e.removeCard}})],1)],1)})),0),e._v(" "),t("new-card-btn",{on:{addCount:e.addCard}})],1)}),[],!1,null,null,null).exports;localStorage.getItem("storedCards");var g={components:{"coffee-card":u},data:()=>({storedCards:[],aromaQual:"",aromaQuan:"",aromaNotes:"",acidityQual:"",acidityQuan:"",acidityNotes:"",sweetnessQual:"",sweetnessQuan:"",sweetnessNotes:"",bodyQual:"",bodyQuan:"",bodyNotes:"",finishQual:"",finishQuan:"",finishNotes:"",blend:"",flavor:"",overall:""}),mounted(){console.log("Mounted"),localStorage.getItem("storedCards")&&(this.storedCards=JSON.parse(localStorage.getItem("storedCards")))}},_=Object(s.a)(g,(function(){var e=this.$createElement,a=this._self._c||e;return a("div",[a("h1",[this._v("My cards")]),this._v(" "),a("ul",{staticClass:"coffee-cards"},this._l(this.storedCards,(function(e,t){return a("li",{key:t},[a("coffee-card",{attrs:{card:e,index:t}})],1)})),0)])}),[],!1,null,null,null).exports;r.a.use(i.a);var h=new i.a({routes:[{path:"/",name:"Home",component:f},{path:"/mycards",name:"My Cards",component:_}]});t(5);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(e=>{console.log("SW registered: ",e)}).catch(e=>{console.log("SW registration failed: ",e)})}),r.a.config.productionTip=!1,new r.a({el:"#app",router:h,components:{app:n},template:"<app/>"})}},[[8,1,2]]]);
//# sourceMappingURL=main.js.map