(function(t){function a(a){for(var n,o,i=a[0],c=a[1],l=a[2],b=0,m=[];b<i.length;b++)o=i[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(a);while(m.length)m.shift()();return e.push.apply(e,l||[]),s()}function s(){for(var t,a=0;a<e.length;a++){for(var s=e[a],n=!0,i=1;i<s.length;i++){var c=s[i];0!==r[c]&&(n=!1)}n&&(e.splice(a--,1),t=o(o.s=s[0]))}return t}var n={},r={app:0},e=[];function o(a){if(n[a])return n[a].exports;var s=n[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,a,s){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(s,n,function(a){return t[a]}.bind(null,n));return s},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/macys-snippets/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var d=c;e.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},1160:function(t,a,s){"use strict";var n=s("ee92"),r=s.n(n);r.a},"31a6":function(t,a,s){},"55d0":function(t,a,s){"use strict";var n=s("ef45"),r=s.n(n);r.a},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d"),s("becf"),s("cabf"),s("fee6");var n=s("2b0e"),r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},e=[],o={name:"App"},i=o,c=(s("5c0b"),s("2877")),l=Object(c["a"])(i,r,e,!1,null,null,null),d=l.exports,b=s("8c4f"),m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("TopBar"),s("div",{staticClass:"btns_grp"},[s("router-link",{attrs:{to:{name:"JavaPage"}}},[s("div",{staticClass:"btns"},[s("mdb-btn",{attrs:{block:"",color:"#"}},[s("mdb-icon",{staticClass:"mr-2",attrs:{fab:"",icon:"java",size:"2x"}}),t._v("java")],1)],1)]),s("router-link",{attrs:{to:{name:"PythonPage"}}},[s("div",{staticClass:"btns"},[s("mdb-btn",{attrs:{block:"",color:"#"}},[s("mdb-icon",{staticClass:"mr-2",attrs:{fab:"",icon:"python",size:"2x"}}),t._v("python")],1)],1)]),s("router-link",{attrs:{to:{name:"JavascriptPage"}}},[s("div",{staticClass:"btns"},[s("mdb-btn",{attrs:{block:"",color:"#"}},[s("mdb-icon",{staticClass:"mr-2",attrs:{fab:"",icon:"js-square",size:"2x"}}),t._v("javascript ")],1)],1)])],1),s("mdb-container",{attrs:{fluid:""}},[s("mdb-row",{staticClass:"no-gutters"},[s("mdb-col",{attrs:{col:"3"}},[s("div",{staticClass:"side_menu"},[s("div",{staticClass:"tabs"},[s("div",{staticClass:"tab"},[s("input",{attrs:{type:"radio",id:"rd1",name:"rd"}}),s("label",{staticClass:"tab-label",attrs:{for:"rd1"}},[t._v("Landing")]),s("div",{staticClass:"tab-content"},[t._v(" Lorem, ipsum ")])]),s("div",{staticClass:"tab"},[s("input",{attrs:{type:"radio",id:"rd2",name:"rd"}}),s("label",{staticClass:"tab-label",attrs:{for:"rd2"}},[t._v("Item 2")]),s("div",{staticClass:"tab-content"},[t._v(" sit amet ")])]),s("div",{staticClass:"tab"},[s("input",{attrs:{type:"radio",id:"rd3",name:"rd"}}),s("label",{staticClass:"tab-close",attrs:{for:"rd3"}},[t._v("Collapse ×")])])])])]),s("mdb-col",{attrs:{col:"9"}},[s("div",{staticClass:"main_content"},[t._v("LandingPage")])])],1)],1),s("Footer")],1)},v=[],u=(s("b0c0"),s("91c9")),p=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("mdb-navbar",{attrs:{position:"top",dark:""}},[s("mdb-navbar-brand",{attrs:{href:""}},[s("router-link",{attrs:{to:{name:"LandingPage"}}},[s("mdb-row",[s("mdb-col",{staticClass:"mr-3"},[s("div",{staticClass:"icon-align-middle"},[s("mdb-icon",{attrs:{icon:"code"}})],1)]),s("mdb-col",{staticClass:"snippets"},[t._v("Macy's"),s("br"),t._v("Snippets")])],1)],1)],1),s("mdb-navbar-toggler",[s("mdb-navbar-nav"),s("form")],1)],1)],1)},f=[],C={name:"TopBar",components:{mdbNavbar:u["mdbNavbar"],mdbNavbarBrand:u["mdbNavbarBrand"],mdbNavbarToggler:u["mdbNavbarToggler"],mdbNavbarNav:u["mdbNavbarNav"],mdbIcon:u["mdbIcon"],mdbRow:u["mdbRow"],mdbCol:u["mdbCol"]},data:function(){return{}}},h=C,g=(s("5eb5"),Object(c["a"])(h,p,f,!1,null,"f4c8fc8a",null)),_=g.exports,y=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("mdb-footer",{staticClass:"font-small pt-2 static-bottom",attrs:{color:"black"}},[s("hr",{staticClass:"footer-hr"}),s("mdb-container",{attrs:{fluid:""}},[s("mdb-row",[s("mdb-col",{attrs:{md:"12"}},[s("div",{staticClass:"my-3 flex-center"},[s("a",{attrs:{href:"https://github.com/macymuhia",target:"_blank"}},[s("i",{staticClass:"fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"})]),s("a",{attrs:{href:"https://twitter.com/macymuhia",target:"_blank"}},[s("i",{staticClass:"fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"})]),s("a",{attrs:{href:"https://www.linkedin.com/in/mercy-muhia-015343b7/",target:"_blank"}},[s("i",{staticClass:"fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"})]),s("a",{attrs:{href:"https://www.facebook.com/n.muthomis/",target:"_blank"}},[s("i",{staticClass:"fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"})]),s("a",{attrs:{href:"https://www.instagram.com/macy.muhia/",target:"_blank"}},[s("i",{staticClass:"fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"})])])])],1)],1),s("hr",{staticClass:"footer-hr"}),s("div",{staticClass:"footer-copyright text-center py-4"},[s("mdb-container",{attrs:{fluid:""}},[t._v(" © 2020 Copyright: "),s("a",{attrs:{href:"/"}},[s("span",[t._v("Macy's Snippets")])])])],1)],1)],1)},P=[],w={name:"Footer",components:{mdbFooter:u["mdbFooter"],mdbContainer:u["mdbContainer"],mdbRow:u["mdbRow"],mdbCol:u["mdbCol"]},data:function(){return{}}},k=w,x=(s("1160"),Object(c["a"])(k,y,P,!1,null,"1b97dcf4",null)),j=x.exports,J={name:"LandingPage",components:{mdbBtn:u["mdbBtn"],mdbIcon:u["mdbIcon"],TopBar:_,mdbContainer:u["mdbContainer"],mdbRow:u["mdbRow"],mdbCol:u["mdbCol"],Footer:j},data:function(){return{}},computed:{isLandingPage:function(){return"LandingPage"===this.$route.name}}},B=J,O=(s("ef3a"),Object(c["a"])(B,m,v,!1,null,"0c5e9504",null)),I=O.exports,T=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("TopBar"),s("div",{staticClass:"btns_grp"},[s("router-link",{attrs:{to:{name:"JavaPage"}}},[s("div",{staticClass:"btns active"},[s("mdb-btn",{attrs:{block:"",color:"#"}},[s("mdb-icon",{staticClass:"mr-2",attrs:{fab:"",icon:"java",size:"2x"}}),t._v("java")],1)],1)]),s("router-link",{attrs:{to:{name:"PythonPage"}}},[s("div",{staticClass:"btns"},[s("mdb-btn",{attrs:{block:"",color:"#"}},[s("mdb-icon",{staticClass:"mr-2",attrs:{fab:"",icon:"python",size:"2x"}}),t._v("python")],1)],1)]),s("router-link",{attrs:{to:{name:"JavascriptPage"}}},[s("div",{staticClass:"btns"},[s("mdb-btn",{attrs:{block:"",color:"#"}},[s("mdb-icon",{staticClass:"mr-2",attrs:{fab:"",icon:"js-square",size:"2x"}}),t._v("javascript")],1)],1)])],1),s("mdb-container",{attrs:{fluid:""}},[s("mdb-row",{staticClass:"no-gutters"},[s("mdb-col",{attrs:{col:"3"}},[s("div",{staticClass:"side_menu"},[s("div",{staticClass:"tabs"},[s("div",{staticClass:"tab"},[s("input",{attrs:{type:"radio",id:"rd1",name:"rd"}}),s("label",{staticClass:"tab-label",attrs:{for:"rd1"}},[t._v("Java")]),s("div",{staticClass:"tab-content"},[t._v(" Lorem, ipsum ")])]),s("div",{staticClass:"tab"},[s("input",{attrs:{type:"radio",id:"rd2",name:"rd"}}),s("label",{staticClass:"tab-label",attrs:{for:"rd2"}},[t._v("Item 2")]),s("div",{staticClass:"tab-content"},[t._v(" sit amet ")])]),s("div",{staticClass:"tab"},[s("input",{attrs:{type:"radio",id:"rd3",name:"rd"}}),s("label",{staticClass:"tab-close",attrs:{for:"rd3"}},[t._v("Collapse ×")])])])])]),s("mdb-col",{attrs:{col:"9"}},[s("div",{staticClass:"main_content"},[t._v("JavaPage")])])],1)],1),s("Footer")],1)},z=[],R={name:"JavaPage",components:{mdbBtn:u["mdbBtn"],mdbIcon:u["mdbIcon"],TopBar:_,mdbContainer:u["mdbContainer"],mdbRow:u["mdbRow"],mdbCol:u["mdbCol"],Footer:j},data:function(){return{panes:[{title:"#Java1",content:"Java1"},{title:"#Java1",content:"Java2"},{title:"#Java1",content:"Java3"}]}},computed:{isJavaPage:function(){return"JavaPage"===this.$route.name}}},$=R,F=(s("55d0"),Object(c["a"])($,T,z,!1,null,"deab3bb0",null)),L=F.exports,N=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("TopBar"),s("div",{staticClass:"btns_grp"},[s("router-link",{attrs:{to:{name:"JavaPage"}}},[s("div",{staticClass:"btns"},[s("mdb-btn",{attrs:{block:"",color:"#"}},[s("mdb-icon",{staticClass:"mr-2",attrs:{fab:"",icon:"java",size:"2x"}}),t._v("java")],1)],1)]),s("router-link",{attrs:{to:{name:"PythonPage"}}},[s("div",{staticClass:"btns active"},[s("mdb-btn",{attrs:{block:"",color:"#"}},[s("mdb-icon",{staticClass:"mr-2",attrs:{fab:"",icon:"python",size:"2x"}}),t._v("python")],1)],1)]),s("router-link",{attrs:{to:{name:"JavascriptPage"}}},[s("div",{staticClass:"btns"},[s("mdb-btn",{attrs:{block:"",color:"#"}},[s("mdb-icon",{staticClass:"mr-2",attrs:{fab:"",icon:"js-square",size:"2x"}}),t._v("javascript")],1)],1)])],1),s("mdb-container",{attrs:{fluid:""}},[s("mdb-row",{staticClass:"no-gutters"},[s("mdb-col",{attrs:{col:"3"}},[s("div",{staticClass:"side_menu"},[s("div",{staticClass:"tabs"},[s("div",{staticClass:"tab"},[s("input",{attrs:{type:"radio",id:"rd1",name:"rd"}}),s("label",{staticClass:"tab-label",attrs:{for:"rd1"}},[t._v("Python")]),s("div",{staticClass:"tab-content"},[t._v(" Lorem, ipsum ")])]),s("div",{staticClass:"tab"},[s("input",{attrs:{type:"radio",id:"rd2",name:"rd"}}),s("label",{staticClass:"tab-label",attrs:{for:"rd2"}},[t._v("Item 2")]),s("div",{staticClass:"tab-content"},[t._v(" sit amet ")])]),s("div",{staticClass:"tab"},[s("input",{attrs:{type:"radio",id:"rd3",name:"rd"}}),s("label",{staticClass:"tab-close",attrs:{for:"rd3"}},[t._v("Collapse ×")])])])])]),s("mdb-col",{attrs:{col:"9"}},[s("div",{staticClass:"main_content"},[t._v("PythonPage")])])],1)],1),s("Footer")],1)},S=[],E={name:"PythonPage",components:{mdbBtn:u["mdbBtn"],mdbIcon:u["mdbIcon"],TopBar:_,mdbContainer:u["mdbContainer"],mdbRow:u["mdbRow"],mdbCol:u["mdbCol"],Footer:j},data:function(){return{panes:[{title:"#Python1",content:"Python1"},{title:"#2",content:"Python2"},{title:"#3",content:"Python3"}]}},computed:{isPythonPage:function(){return"PythonPage"===this.$route.name}}},M=E,q=(s("cb43"),Object(c["a"])(M,N,S,!1,null,"64302950",null)),A=q.exports,D=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("TopBar"),s("div",{staticClass:"btns_grp"},[s("router-link",{attrs:{to:{name:"JavaPage"}}},[s("div",{staticClass:"btns"},[s("mdb-btn",{attrs:{block:"",color:"#"}},[s("mdb-icon",{staticClass:"mr-2",attrs:{fab:"",icon:"java",size:"2x"}}),t._v("java")],1)],1)]),s("router-link",{attrs:{to:{name:"PythonPage"}}},[s("div",{staticClass:"btns"},[s("mdb-btn",{attrs:{block:"",color:"#"}},[s("mdb-icon",{staticClass:"mr-2",attrs:{fab:"",icon:"python",size:"2x"}}),t._v("python")],1)],1)]),s("router-link",{attrs:{to:{name:"JavascriptPage"}}},[s("div",{staticClass:"btns active"},[s("mdb-btn",{attrs:{block:"",color:"#"}},[s("mdb-icon",{staticClass:"mr-2",attrs:{fab:"",icon:"js-square",size:"2x"}}),t._v("javascript")],1)],1)])],1),s("mdb-container",{attrs:{fluid:""}},[s("mdb-row",{staticClass:"no-gutters"},[s("mdb-col",{attrs:{col:"3"}},[s("div",{staticClass:"side_menu"},[s("div",{staticClass:"tabs"},[s("div",{staticClass:"tab"},[s("input",{attrs:{type:"radio",id:"rd1",name:"rd"}}),s("label",{staticClass:"tab-label",attrs:{for:"rd1"}},[t._v("Javascript")]),s("div",{staticClass:"tab-content"},[t._v(" Lorem, ipsum ")])]),s("div",{staticClass:"tab"},[s("input",{attrs:{type:"radio",id:"rd2",name:"rd"}}),s("label",{staticClass:"tab-label",attrs:{for:"rd2"}},[t._v("Item 2")]),s("div",{staticClass:"tab-content"},[t._v(" sit amet ")])]),s("div",{staticClass:"tab"},[s("input",{attrs:{type:"radio",id:"rd3",name:"rd"}}),s("label",{staticClass:"tab-close",attrs:{for:"rd3"}},[t._v("Collapse ×")])])])])]),s("mdb-col",{attrs:{col:"9"}},[s("div",{staticClass:"main_content"},[t._v("JavascriptPage")])])],1)],1),s("Footer")],1)},G=[],H={name:"JavascriptPage",components:{mdbBtn:u["mdbBtn"],mdbIcon:u["mdbIcon"],TopBar:_,mdbContainer:u["mdbContainer"],mdbRow:u["mdbRow"],mdbCol:u["mdbCol"],Footer:j},data:function(){return{panes:[{title:"#Javascript1",content:"Javascript1"},{title:"#2",content:"Javascript2"},{title:"#3",content:"Javascript3"}]}},computed:{isJavascriptPage:function(){return"JavascriptPage"===this.$route.name}}},K=H,Q=(s("cc4f"),Object(c["a"])(K,D,G,!1,null,"f6f26332",null)),U=Q.exports;n["a"].use(b["a"]);var V=[{path:"/",name:"LandingPage",component:I},{path:"/java",name:"JavaPage",component:L},{path:"/python",name:"PythonPage",component:A},{path:"/javascript",name:"JavascriptPage",component:U},{path:"*",component:I}],W=new b["a"]({mode:"history",routes:V}),X=W,Y=s("2f62");n["a"].use(Y["a"]);var Z=new Y["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:X,store:Z,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,a,s){"use strict";var n=s("9c0c"),r=s.n(n);r.a},"5eb5":function(t,a,s){"use strict";var n=s("da86"),r=s.n(n);r.a},"9c0c":function(t,a,s){},a188:function(t,a,s){},cb43:function(t,a,s){"use strict";var n=s("31a6"),r=s.n(n);r.a},cc4f:function(t,a,s){"use strict";var n=s("a188"),r=s.n(n);r.a},da86:function(t,a,s){},ee92:function(t,a,s){},ef3a:function(t,a,s){"use strict";var n=s("f30e"),r=s.n(n);r.a},ef45:function(t,a,s){},f30e:function(t,a,s){}});
//# sourceMappingURL=app.846e5858.js.map