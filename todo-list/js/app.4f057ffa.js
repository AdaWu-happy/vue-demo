(function(e){function t(t){for(var o,c,s=t[0],r=t[1],a=t[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(l,c)&&l[c]&&p.push(l[c][0]),l[c]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var r=n[s];0!==l[r]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},l={app:0},i=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var u=r;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b0c":function(e,t,n){},"27f0":function(e,t,n){},"301e":function(e,t,n){"use strict";var o=n("5449"),l=n.n(o);l.a},5297:function(e,t,n){},5449:function(e,t,n){},"555a":function(e,t,n){"use strict";var o=n("d065"),l=n.n(o);l.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c=(n("5c0b"),n("2877")),s={},r=Object(c["a"])(s,l,i,!1,null,null,null),a=r.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("p",[e._v("simple todolist")]),n("todo")],1)},p=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"todo-index-box"},[n("Add",{on:{addItem:e.addItem}}),n("List",{attrs:{list:e.todos,delItem:e.delItem}}),e.todos.length>0?n("Footer",{attrs:{list:e.todos,selectAll:e.selectAll,delCompleted:e.delCompleted}}):e._e()],1)},f=[],h=(n("4de4"),n("a434"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"todo-add-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],ref:"addIpt",staticClass:"todo-add-ipt",attrs:{type:"text",placeholder:"请输入任务内容，按回车提交"},domProps:{value:e.title},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addValue(t)},input:function(t){t.target.composing||(e.title=t.target.value)}}})])}),v=[],b=(n("498a"),{data:function(){return{title:""}},props:{addItem:Function},components:{},created:function(){},computed:{},mounted:function(){},methods:{addValue:function(){console.log("add");var e=this.title.trim();if(console.log("title",e),e){var t={title:e,complete:!1};this.$emit("addItem",t),this.title=""}else alert("必须输入内容")}}}),y=b,_=(n("555a"),Object(c["a"])(y,h,v,!1,null,null,null)),w=_.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"todo-list-box"},[n("ul",{staticClass:"todo-list-ul"},[e.list.length?e._l(e.list,(function(t,o){return n("list-item",{key:o,attrs:{item:t,index:o,delItem:e.delItem}})})):[e._v("暂时没有任务 Q-Q")]],2)])},x=[],A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("li",{staticClass:"todo-list-p",style:{color:e.color},on:{mouseenter:function(t){return e.handleMove(!0)},mouseleave:function(t){return e.handleMove(!1)}}},[n("span",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.item.complete,expression:"item.complete"}],staticClass:"todo-list-check",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.item.complete)?e._i(e.item.complete,null)>-1:e.item.complete},on:{change:function(t){var n=e.item.complete,o=t.target,l=!!o.checked;if(Array.isArray(n)){var i=null,c=e._i(n,i);o.checked?c<0&&e.$set(e.item,"complete",n.concat([i])):c>-1&&e.$set(e.item,"complete",n.slice(0,c).concat(n.slice(c+1)))}else e.$set(e.item,"complete",l)}}}),n("span",[e._v(e._s(e.item.title))])])]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"del-this-btn",on:{click:e.del}},[e._v("删除")])])])},S=[],O=(n("a9e3"),n("911a")),k=n.n(O),I={data:function(){return{color:"#000",isShow:!1}},props:{item:Object,index:Number},components:{},created:function(){},computed:{},mounted:function(){},methods:{handleMove:function(e){e?(this.color="blue",this.isShow=!0):(this.color="#000",this.isShow=!1)},del:function(){console.log("删除 index",this.index);var e=this.item,t=this.index;window.confirm("确认删除".concat(e.title,"吗？"))&&k.a.publish("delItem",t)}}},j=I,C=(n("6a9f"),Object(c["a"])(j,A,S,!1,null,null,null)),N=C.exports,$={data:function(){return{}},props:{list:Array,delItem:Function},components:{ListItem:N},created:function(){},computed:{},mounted:function(){},methods:{}},P=$,E=(n("301e"),Object(c["a"])(P,g,x,!1,null,null,null)),T=E.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"todo-footer-box"},[n("p",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isSelectAll,expression:"isSelectAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isSelectAll)?e._i(e.isSelectAll,null)>-1:e.isSelectAll},on:{change:function(t){var n=e.isSelectAll,o=t.target,l=!!o.checked;if(Array.isArray(n)){var i=null,c=e._i(n,i);o.checked?c<0&&(e.isSelectAll=n.concat([i])):c>-1&&(e.isSelectAll=n.slice(0,c).concat(n.slice(c+1)))}else e.isSelectAll=l}}})]),n("span",[e._v("已完成 "+e._s(e.completeNum))]),e._v(" / "),n("span",[e._v("全部 "+e._s(e.list.length))])]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.completeNum,expression:"completeNum"}],staticClass:"del-all-btn",on:{click:e.delCompleted}},[e._v("清除已完成任务")])])},F=[],J={data:function(){return{}},props:{list:Array,selectAll:Function,delCompleted:Function},components:{},created:function(){},computed:{completeNum:function(){return this.list.reduce((function(e,t){return e+(t.complete?1:0)}),0)},isSelectAll:{get:function(){return this.completeNum===this.list.length&&this.completeNum>0},set:function(e){this.selectAll(e)}}},mounted:function(){},methods:{}},L=J,Q=(n("7efc"),Object(c["a"])(L,M,F,!1,null,null,null)),V=Q.exports,q="todos_key",z={saveTodos:function(e){window.localStorage.setItem(q,JSON.stringify(e))},getTodos:function(){return JSON.parse(window.localStorage.getItem(q)||"[]")}},B={data:function(){return{todos:z.getTodos()}},watch:{todos:{deep:!0,handler:z.saveTodos}},props:{},components:{Add:w,List:T,Footer:V},created:function(){},computed:{},mounted:function(){var e=this;k.a.subscribe("delItem",(function(t,n){e.delItem(n)}))},methods:{addItem:function(e){this.todos.unshift(e)},delItem:function(e){this.todos.splice(e,1)},selectAll:function(e){this.todos.forEach((function(t){return t.complete=e}))},delCompleted:function(){this.todos=this.todos.filter((function(e){return!e.complete}))}}},D=B,G=(n("7483"),Object(c["a"])(D,m,f,!1,null,null,null)),H=G.exports,K={name:"home",components:{Todo:H}},R=K,U=Object(c["a"])(R,d,p,!1,null,null,null),W=U.exports;o["a"].use(u["a"]);var X=[{path:"/",name:"home",component:W}],Y=new u["a"]({routes:X}),Z=Y,ee=n("2f62");o["a"].use(ee["a"]);var te=new ee["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:Z,store:te,render:function(e){return e(a)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),l=n.n(o);l.a},"6a9f":function(e,t,n){"use strict";var o=n("1b0c"),l=n.n(o);l.a},7483:function(e,t,n){"use strict";var o=n("5297"),l=n.n(o);l.a},"7efc":function(e,t,n){"use strict";var o=n("27f0"),l=n.n(o);l.a},"9c0c":function(e,t,n){},d065:function(e,t,n){}});
//# sourceMappingURL=app.4f057ffa.js.map