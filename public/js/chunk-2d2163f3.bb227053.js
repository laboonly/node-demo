(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2163f3"],{c23a:function(e,i,n){"use strict";n.r(i);var r=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",[n("div",[n("h1",[e._v("权限指令")]),n("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["admin"],expression:"['admin']"}]},[e._v("admin")]),n("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["editor"],expression:"['editor']"}]},[e._v("editor")]),n("el-tag",{directives:[{name:"permission",rawName:"v-permission",value:["admin","editor"],expression:"['admin','editor']"}]},[e._v("Both admin or editor can see this")])],1)])},s=[],o=n("4360");function t(e,i){const{value:n}=i,r=o["a"].getters&&o["a"].getters.roles;if(!(n&&n instanceof Array))throw new Error("need roles! Like v-permission=\"['admin','editor']\"");if(n.length>0){const i=n,s=r.some(e=>i.includes(e));s||e.parentNode&&e.parentNode.removeChild(e)}}var a={inserted(e,i){t(e,i)},update(e,i){t(e,i)}};const d=function(e){e.directive("permission",a)};window.Vue&&(window["permission"]=a,Vue.use(d)),a.install=d;var m=a,c={directives:{permission:m}},v=c,l=n("0c7c"),p=Object(l["a"])(v,r,s,!1,null,null,null);i["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d2163f3.bb227053.js.map