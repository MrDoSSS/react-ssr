"use strict";function t(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=t(require("react")),r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}var o,i=function(t){return t&&t.Math==Math&&t},u=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof r&&r)||function(){return this}()||Function("return this")(),c=function(t){try{return!!t()}catch(t){return!0}},a=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,l={f:s&&!f.call({1:2},1)?function(t){var e=s(this,t);return!!e&&e.enumerable}:f},p=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},y={}.toString,h=function(t){return y.call(t).slice(8,-1)},d="".split,v=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==h(t)?d.call(t,""):Object(t)}:Object,g=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},b=function(t){return v(g(t))},m=function(t){return"object"==typeof t?null!==t:"function"==typeof t},S=function(t,e){if(!m(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!m(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!m(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!m(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},w={}.hasOwnProperty,O=function(t,e){return w.call(t,e)},j=u.document,P=m(j)&&m(j.createElement),T=function(t){return P?j.createElement(t):{}},_=!a&&!c((function(){return 7!=Object.defineProperty(T("div"),"a",{get:function(){return 7}}).a})),E=Object.getOwnPropertyDescriptor,A={f:a?E:function(t,e){if(t=b(t),e=S(e,!0),_)try{return E(t,e)}catch(t){}if(O(t,e))return p(!l.f.call(t,e),t[e])}},x=/#|\.prototype\./,L=function(t,e){var r=k[I(t)];return r==M||r!=C&&("function"==typeof e?c(e):!!e)},I=L.normalize=function(t){return String(t).replace(x,".").toLowerCase()},k=L.data={},C=L.NATIVE="N",M=L.POLYFILL="P",F=L,N={},R=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},D=function(t,e,r){if(R(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}},G=function(t){if(!m(t))throw TypeError(String(t)+" is not an object");return t},V=Object.defineProperty,q={f:a?V:function(t,e,r){if(G(t),e=S(e,!0),G(r),_)try{return V(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},z=a?function(t,e,r){return q.f(t,e,p(1,r))}:function(t,e,r){return t[e]=r,t},W=A.f,B=function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e},H=function(t,e){var r,n,o,i,c,a,f,s,l=t.target,p=t.global,y=t.stat,h=t.proto,d=p?u:y?u[l]:(u[l]||{}).prototype,v=p?N:N[l]||(N[l]={}),g=v.prototype;for(o in e)r=!F(p?o:l+(y?".":"#")+o,t.forced)&&d&&O(d,o),c=v[o],r&&(a=t.noTargetGet?(s=W(d,o))&&s.value:d[o]),i=r&&a?a:e[o],r&&typeof c==typeof i||(f=t.bind&&r?D(i,u):t.wrap&&r?B(i):h&&"function"==typeof i?D(Function.call,i):i,(t.sham||i&&i.sham||c&&c.sham)&&z(f,"sham",!0),v[o]=f,h&&(O(N,n=l+"Prototype")||z(N,n,{}),N[n][o]=i,t.real&&g&&!g[o]&&z(g,o,i)))},J=function(t){return"function"==typeof t?t:void 0},U=function(t,e){return arguments.length<2?J(N[t])||J(u[t]):N[t]&&N[t][e]||u[t]&&u[t][e]},Y=Math.ceil,Q=Math.floor,X=function(t){return isNaN(t=+t)?0:(t>0?Q:Y)(t)},K=Math.min,Z=function(t){return t>0?K(X(t),9007199254740991):0},$=Math.max,tt=Math.min,et=function(t){return function(e,r,n){var o,i=b(e),u=Z(i.length),c=function(t,e){var r=X(t);return r<0?$(r+e,0):tt(r,e)}(n,u);if(t&&r!=r){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},rt={includes:et(!0),indexOf:et(!1)},nt={},ot=rt.indexOf,it=function(t,e){var r,n=b(t),o=0,i=[];for(r in n)!O(nt,r)&&O(n,r)&&i.push(r);for(;e.length>o;)O(n,r=e[o++])&&(~ot(i,r)||i.push(r));return i},ut=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ct=Object.keys||function(t){return it(t,ut)},at=a?Object.defineProperties:function(t,e){G(t);for(var r,n=ct(e),o=n.length,i=0;o>i;)q.f(t,r=n[i++],e[r]);return t},ft=U("document","documentElement"),st=u["__core-js_shared__"]||function(t,e){try{z(u,t,e)}catch(r){u[t]=e}return e}("__core-js_shared__",{}),lt=n((function(t){(t.exports=function(t,e){return st[t]||(st[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.2",mode:"pure",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),pt=0,yt=Math.random(),ht=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++pt+yt).toString(36)},dt=lt("keys"),vt=function(t){return dt[t]||(dt[t]=ht(t))},gt=vt("IE_PROTO"),bt=function(){},mt=function(t){return"<script>"+t+"<\/script>"},St=function(){try{o=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;St=o?function(t){t.write(mt("")),t.close();var e=t.parentWindow.Object;return t=null,e}(o):((e=T("iframe")).style.display="none",ft.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(mt("document.F=Object")),t.close(),t.F);for(var r=ut.length;r--;)delete St.prototype[ut[r]];return St()};nt[gt]=!0;var wt=Object.create||function(t,e){var r;return null!==t?(bt.prototype=G(t),r=new bt,bt.prototype=null,r[gt]=t):r=St(),void 0===e?r:at(r,e)},Ot=[].slice,jt={},Pt=function(t,e,r){if(!(e in jt)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";jt[e]=Function("C,a","return new C("+n.join(",")+")")}return jt[e](t,r)},Tt=Function.bind||function(t){var e=R(this),r=Ot.call(arguments,1),n=function(){var o=r.concat(Ot.call(arguments));return this instanceof n?Pt(e,o.length,o):e.apply(t,o)};return m(e.prototype)&&(n.prototype=e.prototype),n},_t=U("Reflect","construct"),Et=c((function(){function t(){}return!(_t((function(){}),[],t)instanceof t)})),At=!c((function(){_t((function(){}))})),xt=Et||At;H({target:"Reflect",stat:!0,forced:xt,sham:xt},{construct:function(t,e){R(t),G(e);var r=arguments.length<3?t:R(arguments[2]);if(At&&!Et)return _t(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(Tt.apply(t,n))}var o=r.prototype,i=wt(m(o)?o:Object.prototype),u=Function.apply.call(t,i,e);return m(u)?u:i}});var Lt=N.Reflect.construct;var It=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};H({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperty:q.f});var kt=n((function(t){var e=N.Object,r=t.exports=function(t,r,n){return e.defineProperty(t,r,n)};e.defineProperty.sham&&(r.sham=!0)}));function Ct(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),kt(t,n.key,n)}}var Mt=function(t,e,r){return e&&Ct(t.prototype,e),r&&Ct(t,r),t};H({target:"Object",stat:!0,sham:!a},{create:wt});var Ft=N.Object,Nt=function(t,e){return Ft.create(t,e)},Rt=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return G(r),function(t){if(!m(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(n),e?t.call(r,n):r.__proto__=n,r}}():void 0);H({target:"Object",stat:!0},{setPrototypeOf:Rt});var Dt=N.Object.setPrototypeOf,Gt=n((function(t){function e(r,n){return t.exports=e=Dt||function(t,e){return t.__proto__=e,t},e(r,n)}t.exports=e}));var Vt=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Nt(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Gt(t,e)},qt=!!Object.getOwnPropertySymbols&&!c((function(){return!String(Symbol())})),zt=qt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Wt=lt("wks"),Bt=u.Symbol,Ht=zt?Bt:Bt&&Bt.withoutSetter||ht,Jt=function(t){return O(Wt,t)||(qt&&O(Bt,t)?Wt[t]=Bt[t]:Wt[t]=Ht("Symbol."+t)),Wt[t]},Ut={f:Jt},Yt=q.f,Qt=function(t){var e=N.Symbol||(N.Symbol={});O(e,t)||Yt(e,t,{value:Ut.f(t)})};Qt("iterator");var Xt=function(t){return function(e,r){var n,o,i=String(g(e)),u=X(r),c=i.length;return u<0||u>=c?t?"":void 0:(n=i.charCodeAt(u))<55296||n>56319||u+1===c||(o=i.charCodeAt(u+1))<56320||o>57343?t?i.charAt(u):n:t?i.slice(u,u+2):o-56320+(n-55296<<10)+65536}},Kt={codeAt:Xt(!1),charAt:Xt(!0)},Zt=Function.toString;"function"!=typeof st.inspectSource&&(st.inspectSource=function(t){return Zt.call(t)});var $t,te,ee,re=st.inspectSource,ne=u.WeakMap,oe="function"==typeof ne&&/native code/.test(re(ne)),ie=u.WeakMap;if(oe){var ue=st.state||(st.state=new ie),ce=ue.get,ae=ue.has,fe=ue.set;$t=function(t,e){return e.facade=t,fe.call(ue,t,e),e},te=function(t){return ce.call(ue,t)||{}},ee=function(t){return ae.call(ue,t)}}else{var se=vt("state");nt[se]=!0,$t=function(t,e){return e.facade=t,z(t,se,e),e},te=function(t){return O(t,se)?t[se]:{}},ee=function(t){return O(t,se)}}var le,pe,ye,he={set:$t,get:te,has:ee,enforce:function(t){return ee(t)?te(t):$t(t,{})},getterFor:function(t){return function(e){var r;if(!m(e)||(r=te(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},de=function(t){return Object(g(t))},ve=!c((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),ge=vt("IE_PROTO"),be=Object.prototype,me=ve?Object.getPrototypeOf:function(t){return t=de(t),O(t,ge)?t[ge]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?be:null},Se=(Jt("iterator"),!1);[].keys&&("next"in(ye=[].keys())?(pe=me(me(ye)))!==Object.prototype&&(le=pe):Se=!0),null==le&&(le={});var we={IteratorPrototype:le,BUGGY_SAFARI_ITERATORS:Se},Oe={};Oe[Jt("toStringTag")]="z";var je="[object z]"===String(Oe),Pe=Jt("toStringTag"),Te="Arguments"==h(function(){return arguments}()),_e=je?h:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Pe))?r:Te?h(e):"Object"==(n=h(e))&&"function"==typeof e.callee?"Arguments":n},Ee=je?{}.toString:function(){return"[object "+_e(this)+"]"},Ae=q.f,xe=Jt("toStringTag"),Le=function(t,e,r,n){if(t){var o=r?t:t.prototype;O(o,xe)||Ae(o,xe,{configurable:!0,value:e}),n&&!je&&z(o,"toString",Ee)}},Ie=we.IteratorPrototype,ke=function(t,e,r,n){n&&n.enumerable?t[e]=r:z(t,e,r)},Ce=we.IteratorPrototype,Me=we.BUGGY_SAFARI_ITERATORS,Fe=Jt("iterator"),Ne=function(t,e,r,n,o,i,u){!function(t,e,r){var n=e+" Iterator";t.prototype=wt(Ie,{next:p(1,r)}),Le(t,n,!1,!0)}(r,e,n);var c,a,f,s=function(t){if(t===o&&v)return v;if(!Me&&t in h)return h[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},l=e+" Iterator",y=!1,h=t.prototype,d=h[Fe]||h["@@iterator"]||o&&h[o],v=!Me&&d||s(o),g="Array"==e&&h.entries||d;if(g&&(c=me(g.call(new t)),Ce!==Object.prototype&&c.next&&Le(c,l,!0,!0)),"values"==o&&d&&"values"!==d.name&&(y=!0,v=function(){return d.call(this)}),u&&h[Fe]!==v&&z(h,Fe,v),o)if(a={values:s("values"),keys:i?v:s("keys"),entries:s("entries")},u)for(f in a)(Me||y||!(f in h))&&ke(h,f,a[f]);else H({target:e,proto:!0,forced:Me||y},a);return a},Re=Kt.charAt,De=he.set,Ge=he.getterFor("String Iterator");Ne(String,"String",(function(t){De(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=Ge(this),r=e.string,n=e.index;return n>=r.length?{value:void 0,done:!0}:(t=Re(r,n),e.index+=t.length,{value:t,done:!1})}));var Ve=he.set,qe=he.getterFor("Array Iterator"),ze=(Ne(Array,"Array",(function(t,e){Ve(this,{type:"Array Iterator",target:b(t),index:0,kind:e})}),(function(){var t=qe(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),Jt("toStringTag"));for(var We in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Be=u[We],He=Be&&Be.prototype;He&&_e(He)!==ze&&z(He,ze,We)}var Je,Ue,Ye=Ut.f("iterator"),Qe=Array.isArray||function(t){return"Array"==h(t)},Xe=function(t,e,r){var n=S(e);n in t?q.f(t,n,p(0,r)):t[n]=r},Ke=Jt("species"),Ze=function(t,e){var r;return Qe(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!Qe(r.prototype)?m(r)&&null===(r=r[Ke])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},$e=U("navigator","userAgent")||"",tr=u.process,er=tr&&tr.versions,rr=er&&er.v8;rr?Ue=(Je=rr.split("."))[0]+Je[1]:$e&&(!(Je=$e.match(/Edge\/(\d+)/))||Je[1]>=74)&&(Je=$e.match(/Chrome\/(\d+)/))&&(Ue=Je[1]);var nr,or=Ue&&+Ue,ir=Jt("species"),ur=Jt("isConcatSpreadable"),cr=or>=51||!c((function(){var t=[];return t[ur]=!1,t.concat()[0]!==t})),ar=(nr="concat",or>=51||!c((function(){var t=[];return(t.constructor={})[ir]=function(){return{foo:1}},1!==t[nr](Boolean).foo}))),fr=function(t){if(!m(t))return!1;var e=t[ur];return void 0!==e?!!e:Qe(t)};H({target:"Array",proto:!0,forced:!cr||!ar},{concat:function(t){var e,r,n,o,i,u=de(this),c=Ze(u,0),a=0;for(e=-1,n=arguments.length;e<n;e++)if(fr(i=-1===e?u:arguments[e])){if(a+(o=Z(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<o;r++,a++)r in i&&Xe(c,a,i[r])}else{if(a>=9007199254740991)throw TypeError("Maximum allowed index exceeded");Xe(c,a++,i)}return c.length=a,c}});var sr=ut.concat("length","prototype"),lr={f:Object.getOwnPropertyNames||function(t){return it(t,sr)}},pr=lr.f,yr={}.toString,hr="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],dr={f:function(t){return hr&&"[object Window]"==yr.call(t)?function(t){try{return pr(t)}catch(t){return hr.slice()}}(t):pr(b(t))}},vr={f:Object.getOwnPropertySymbols},gr=[].push,br=function(t){var e=1==t,r=2==t,n=3==t,o=4==t,i=6==t,u=7==t,c=5==t||i;return function(a,f,s,l){for(var p,y,h=de(a),d=v(h),g=D(f,s,3),b=Z(d.length),m=0,S=l||Ze,w=e?S(a,b):r||u?S(a,0):void 0;b>m;m++)if((c||m in d)&&(y=g(p=d[m],m,h),t))if(e)w[m]=y;else if(y)switch(t){case 3:return!0;case 5:return p;case 6:return m;case 2:gr.call(w,p)}else switch(t){case 4:return!1;case 7:gr.call(w,p)}return i?-1:n||o?o:w}},mr={forEach:br(0),map:br(1),filter:br(2),some:br(3),every:br(4),find:br(5),findIndex:br(6),filterOut:br(7)}.forEach,Sr=vt("hidden"),wr=Jt("toPrimitive"),Or=he.set,jr=he.getterFor("Symbol"),Pr=Object.prototype,Tr=u.Symbol,_r=U("JSON","stringify"),Er=A.f,Ar=q.f,xr=dr.f,Lr=l.f,Ir=lt("symbols"),kr=lt("op-symbols"),Cr=lt("string-to-symbol-registry"),Mr=lt("symbol-to-string-registry"),Fr=lt("wks"),Nr=u.QObject,Rr=!Nr||!Nr.prototype||!Nr.prototype.findChild,Dr=a&&c((function(){return 7!=wt(Ar({},"a",{get:function(){return Ar(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Er(Pr,e);n&&delete Pr[e],Ar(t,e,r),n&&t!==Pr&&Ar(Pr,e,n)}:Ar,Gr=function(t,e){var r=Ir[t]=wt(Tr.prototype);return Or(r,{type:"Symbol",tag:t,description:e}),a||(r.description=e),r},Vr=zt?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Tr},qr=function(t,e,r){t===Pr&&qr(kr,e,r),G(t);var n=S(e,!0);return G(r),O(Ir,n)?(r.enumerable?(O(t,Sr)&&t[Sr][n]&&(t[Sr][n]=!1),r=wt(r,{enumerable:p(0,!1)})):(O(t,Sr)||Ar(t,Sr,p(1,{})),t[Sr][n]=!0),Dr(t,n,r)):Ar(t,n,r)},zr=function(t,e){G(t);var r=b(e),n=ct(r).concat(Jr(r));return mr(n,(function(e){a&&!Wr.call(r,e)||qr(t,e,r[e])})),t},Wr=function(t){var e=S(t,!0),r=Lr.call(this,e);return!(this===Pr&&O(Ir,e)&&!O(kr,e))&&(!(r||!O(this,e)||!O(Ir,e)||O(this,Sr)&&this[Sr][e])||r)},Br=function(t,e){var r=b(t),n=S(e,!0);if(r!==Pr||!O(Ir,n)||O(kr,n)){var o=Er(r,n);return!o||!O(Ir,n)||O(r,Sr)&&r[Sr][n]||(o.enumerable=!0),o}},Hr=function(t){var e=xr(b(t)),r=[];return mr(e,(function(t){O(Ir,t)||O(nt,t)||r.push(t)})),r},Jr=function(t){var e=t===Pr,r=xr(e?kr:b(t)),n=[];return mr(r,(function(t){!O(Ir,t)||e&&!O(Pr,t)||n.push(Ir[t])})),n};if(qt||(ke((Tr=function(){if(this instanceof Tr)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=ht(t),r=function(t){this===Pr&&r.call(kr,t),O(this,Sr)&&O(this[Sr],e)&&(this[Sr][e]=!1),Dr(this,e,p(1,t))};return a&&Rr&&Dr(Pr,e,{configurable:!0,set:r}),Gr(e,t)}).prototype,"toString",(function(){return jr(this).tag})),ke(Tr,"withoutSetter",(function(t){return Gr(ht(t),t)})),l.f=Wr,q.f=qr,A.f=Br,lr.f=dr.f=Hr,vr.f=Jr,Ut.f=function(t){return Gr(Jt(t),t)},a&&Ar(Tr.prototype,"description",{configurable:!0,get:function(){return jr(this).description}})),H({global:!0,wrap:!0,forced:!qt,sham:!qt},{Symbol:Tr}),mr(ct(Fr),(function(t){Qt(t)})),H({target:"Symbol",stat:!0,forced:!qt},{for:function(t){var e=String(t);if(O(Cr,e))return Cr[e];var r=Tr(e);return Cr[e]=r,Mr[r]=e,r},keyFor:function(t){if(!Vr(t))throw TypeError(t+" is not a symbol");if(O(Mr,t))return Mr[t]},useSetter:function(){Rr=!0},useSimple:function(){Rr=!1}}),H({target:"Object",stat:!0,forced:!qt,sham:!a},{create:function(t,e){return void 0===e?wt(t):zr(wt(t),e)},defineProperty:qr,defineProperties:zr,getOwnPropertyDescriptor:Br}),H({target:"Object",stat:!0,forced:!qt},{getOwnPropertyNames:Hr,getOwnPropertySymbols:Jr}),H({target:"Object",stat:!0,forced:c((function(){vr.f(1)}))},{getOwnPropertySymbols:function(t){return vr.f(de(t))}}),_r){var Ur=!qt||c((function(){var t=Tr();return"[null]"!=_r([t])||"{}"!=_r({a:t})||"{}"!=_r(Object(t))}));H({target:"JSON",stat:!0,forced:Ur},{stringify:function(t,e,r){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=e,(m(e)||void 0!==t)&&!Vr(t))return Qe(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!Vr(e))return e}),o[1]=e,_r.apply(null,o)}})}Tr.prototype[wr]||z(Tr.prototype,wr,Tr.prototype.valueOf),Le(Tr,"Symbol"),nt[Sr]=!0,Qt("asyncIterator"),Qt("hasInstance"),Qt("isConcatSpreadable"),Qt("match"),Qt("matchAll"),Qt("replace"),Qt("search"),Qt("species"),Qt("split"),Qt("toPrimitive"),Qt("toStringTag"),Qt("unscopables"),Le(u.JSON,"JSON",!0);var Yr=N.Symbol;Qt("asyncDispose"),Qt("dispose"),Qt("observable"),Qt("patternMatch"),Qt("replaceAll");var Qr=Yr,Xr=n((function(t){function e(r){return t.exports=e="function"==typeof Qr&&"symbol"==typeof Ye?function(t){return typeof t}:function(t){return t&&"function"==typeof Qr&&t.constructor===Qr&&t!==Qr.prototype?"symbol":typeof t},e(r)}t.exports=e}));var Kr=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};var Zr=function(t,e){return!e||"object"!==Xr(e)&&"function"!=typeof e?Kr(t):e},$r=c((function(){me(1)}));H({target:"Object",stat:!0,forced:$r,sham:!ve},{getPrototypeOf:function(t){return me(de(t))}});var tn=N.Object.getPrototypeOf,en=n((function(t){function e(r){return t.exports=e=Dt?tn:function(t){return t.__proto__||tn(t)},e(r)}t.exports=e}));function rn(t){var e=function(){if("undefined"==typeof Reflect||!Lt)return!1;if(Lt.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Lt(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=en(t);if(e){var o=en(this).constructor;r=Lt(n,arguments,o)}else r=n.apply(this,arguments);return Zr(this,r)}}var nn=require("./head"),on=require("./main"),un=function(t){Vt(n,t);var r=rn(n);function n(){return It(this,n),r.apply(this,arguments)}return Mt(n,[{key:"render",value:function(){return e.default.createElement("html",this.props)}}]),n}(e.default.Component),cn=function(t){Vt(n,t);var r=rn(n);function n(){return It(this,n),r.apply(this,arguments)}return Mt(n,[{key:"render",value:function(){return e.default.createElement(un,null,e.default.createElement(nn,null),e.default.createElement("body",null,e.default.createElement(on,null)))}}]),n}(e.default.Component);module.exports=cn;
