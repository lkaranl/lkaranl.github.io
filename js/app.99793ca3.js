(function(t){function e(e){for(var n,a,o=e[0],c=e[1],l=e[2],f=0,d=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={app:0},r=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="fogeid.github.io/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("b3c3"),s=i.n(n);s.a},"0e21":function(t,e,i){},"387e":function(t,e,i){t.exports=i.p+"img/github.d7993014.svg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",[i("profile"),i("midia")],1)])},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile text-primary text-center"},[n("div",{staticClass:"row justify-center"},[n("div",{staticClass:"col-md-7 col-xs-10 flex justify-center"},[n("q-avatar",{attrs:{size:"150px"}},[n("img",{staticClass:"profile__photo",attrs:{src:i("8311"),alt:"Diego Batista"}})]),n("div",{staticClass:"profile__inf"},[n("h1",{staticClass:"profile__info__title text-h4 text-weight-bold q-mb-none"},[t._v(t._s(t.name))]),n("h2",{staticClass:"profile__info__subtitle text-subtitle1 q-mb-none"},[t._v(" "+t._s(t.course)+" at "),n("a",{staticClass:"profile__info__linkUniversity",attrs:{href:t.linkUniversity,target:"_blank"}},[t._v(t._s(t.university))])]),n("h2",{staticClass:"profile__info__subtitle text-subtitle1 q-mt-none"},[t._v(" Front-end Developer Working @ "),n("a",{staticClass:"profile__info__linkWork",attrs:{href:t.linkWork,target:"_blank"}},[t._v(t._s(t.work))])]),n("p",{staticClass:"profile__info__description text-body2 text-weight-light q-my-none"},[t._v(" Hi, I'm Diego Batista, a Computer Science student at the Universidade Federal do Mato Grosso and a front-end developer at the startup Estuda.com, I'm passionate about technology, sports, beer and coffee. I really like Front-End / Back-End and enthusiasm for machine learning. Since I was a child, I like technology and computers, so I decided to pursue an IT career. ")])])],1)])])},o=[],c={name:"Profile",data:function(){return{name:"Diego Batista",course:"Computer Science",university:"Universidade Federal do Mato Grosso",linkUniversity:"https://www.ufmt.br/",work:"Estuda.com",linkWork:"https://estuda.com/"}}},l=c,u=(i("d649"),i("2877")),f=i("fe09"),d=Object(u["a"])(l,a,o,!1,null,"408e79a6",null),p=d.exports;d.options.components=Object.assign(Object.create(d.options.components||null),d.options.components||{},{QAvatar:f["a"]});var _=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"midia text-center"},[n("div",{staticClass:"row justify-center"},[n("div",{staticClass:"col-md-7 col-xs-10"},[n("h2",{staticClass:"midia__title text-subtitle1 text-primary q-mt-lg"},[t._v("You can find me on:")]),n("ul",{staticClass:"midia__list q-pa-none row justify-center"},[n("li",{staticClass:"midia__icons"},[n("a",{staticClass:"midia__icons__link flex items-center q-mr-lg",attrs:{href:t.linkGithub,target:"_blank"}},[n("img",{staticClass:"midia__icons__img q-mx-sm",attrs:{src:i("387e"),alt:"Github"}}),t._v(" "+t._s(t.github)+" ")])]),n("li",{staticClass:"midia__icons"},[n("a",{staticClass:"midia__icons__link flex items-center",attrs:{href:t.linkLinkedin,target:"_blank"}},[n("img",{staticClass:"midia__icons__img q-mx-sm",attrs:{src:i("953d"),alt:"Linkedin"}}),t._v(" "+t._s(t.linkedin)+" ")])])])])])])},m=[],v={name:"Midia",data:function(){return{github:"Github",linkGithub:"https://github.com/fogeid",linkedin:"Linkedin",linkLinkedin:"https://www.linkedin.com/in/dbatista/"}}},b=v,h=(i("8de9"),Object(u["a"])(b,_,m,!1,null,"6c08b286",null)),g=h.exports,k={name:"App",components:{Profile:p,Midia:g}},y=k,x=(i("034f"),Object(u["a"])(y,s,r,!1,null,null,null)),w=x.exports,C=(i("0e21"),i("7d6e"),i("e54f"),i("573e"),i("b05d"));n["a"].use(C["a"],{config:{},components:{},directives:{},plugins:{}}),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(w)}}).$mount("#app")},8311:function(t,e,i){t.exports=i.p+"img/photo.2cf30590.jpg"},"8cc4":function(t,e,i){},"8de9":function(t,e,i){"use strict";var n=i("f07c"),s=i.n(n);s.a},"953d":function(t,e,i){t.exports=i.p+"img/linkedin.f2539818.svg"},b3c3:function(t,e,i){},d649:function(t,e,i){"use strict";var n=i("8cc4"),s=i.n(n);s.a},f07c:function(t,e,i){}});
//# sourceMappingURL=app.99793ca3.js.map