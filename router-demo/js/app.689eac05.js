(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/home"}},[t._v("Home")]),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("div",{staticClass:"app-view"},[n("router-view")],1)])},a=[],i=(n("5c0b"),n("2877")),s={},c=Object(i["a"])(s,o,a,!1,null,null,null),u=c.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-box"},[n("p",{staticStyle:{"margin-left":"20px"}},[t._v("home")])])}],f={},v=f,b=(n("cccb"),Object(i["a"])(v,d,p,!1,null,null,null)),h=b.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-box"},[n("div",{staticClass:"about-box-nav"},[n("router-link",{staticClass:"about-box-nav-item",attrs:{to:"/about/message"}},[t._v("Message")]),n("router-link",{staticClass:"about-box-nav-item",attrs:{to:"/about/news"}},[t._v("News")])],1),n("div",{staticClass:"about-box-view"},[n("router-view")],1)])},_=[],w=(n("f26d"),{}),y=Object(i["a"])(w,m,_,!1,null,null,null),g=y.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message-box"},[n("p",[t._v("this is message page")])])}],j={data:function(){return{}},props:{},components:{},created:function(){},computed:{},mounted:function(){},methods:{}},$=j,k=Object(i["a"])($,x,O,!1,null,null,null),C=k.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ol",t._l(t.newsList,(function(e,r){return n("li",{key:r},[n("router-link",{attrs:{to:"/about/news/newsdetail/"+e.id}},[t._v(t._s(e.title))])],1)})),0),n("hr"),n("div",[n("router-view")],1)])},S=[],P={data:function(){return{newsList:[]}},props:{},components:{},created:function(){},computed:{},mounted:function(){var t=this;setTimeout((function(){t.newsList=[{title:"aaa",id:1},{title:"bbb",id:2},{title:"ccc",id:3}]}),100)},methods:{}},T=P,M=Object(i["a"])(T,E,S,!1,null,null,null),D=M.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticStyle:{color:"blue"}},[t._v("newsdetails")]),n("p",[t._v("ID:"+t._s(t.details.id))]),n("p",[t._v("Title:"+t._s(t.details.title))]),n("p",[t._v("Content:"+t._s(t.details.content))])])},J=[],A=(n("7db0"),{data:function(){return{details:{}}},props:{},components:{},created:function(){},computed:{},mounted:function(){var t=this;setTimeout((function(){var e=[{id:1,title:"aaa",content:"this is aaa,hahahah"},{id:2,title:"bbb",content:"this is bbb,yyyyyyyyyy"},{id:3,title:"ccc",content:"this is ccc,wwwwwwwwww"}];t.allDetails=e;var n=1*t.$route.params.id;t.details=e.find((function(t){return t.id===n}))}),100)},watch:{$route:function(t){var e=1*t.params.id;this.details=this.allDetails.find((function(t){return t.id===e}))}},methods:{}}),H=A,I=Object(i["a"])(H,L,J,!1,null,null,null),N=I.exports;r["a"].use(l["a"]);var q=[{path:"/",redirect:"/home"},{path:"/home",component:h},{path:"/about",component:g,children:[{path:"message",component:C},{path:"news",component:D,children:[{path:"newsdetail/:id",component:N}]},{path:"/",redirect:"/about/message"}]}],z=new l["a"]({routes:q}),B=z,F=n("2f62");r["a"].use(F["a"]);var G=new F["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:B,store:G,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"5ced":function(t,e,n){},"5f83":function(t,e,n){},"9c0c":function(t,e,n){},cccb:function(t,e,n){"use strict";var r=n("5ced"),o=n.n(r);o.a},f26d:function(t,e,n){"use strict";var r=n("5f83"),o=n.n(r);o.a}});
//# sourceMappingURL=app.689eac05.js.map