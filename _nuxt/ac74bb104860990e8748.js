(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{813:function(t,e,n){"use strict";var r=n(174),o=n.n(r);n(478);e.a=o.a.database()},818:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={transition:{mode:"out-in",enterActiveClass:"fade-enter-active",leaveActiveClass:"fade-leave-active",appearActiveClass:"fade-enter-active"}}},819:function(t,e,n){var content=n(829);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(120).default)("c1dafa50",content,!0,{sourceMap:!1})},828:function(t,e,n){"use strict";var r=n(819);n.n(r).a},829:function(t,e,n){(t.exports=n(119)(!1)).push([t.i,".container[data-v-7b93df46]{width:100%;height:100%;display:grid;flex-direction:column;justify-content:center;align-items:center;text-align:center}.container .mobile[data-v-7b93df46]{max-width:480px}.container .mobile img[data-v-7b93df46]{width:70%}.container .mobile form[data-v-7b93df46]{width:100%}.container .mobile form input[data-v-7b93df46]{width:60%;text-align:center;margin-bottom:12px}",""])},837:function(t,e,n){"use strict";n.r(e);n(175),n(479);var r=n(813),o=n(818),c={mixins:[o.a],data:function(){return{name:"",status:"",message:""}},firebase:{users:{source:r.a.ref("/users"),asArray:!0}},methods:{input:function(t){var e=this;this.name=t.target.value,0!==this.users.filter(function(t){return t.name===e.name}).length?(this.message="중복된 이름이 있습니다!",this.status="error"):this.name.length>10?(this.message="10자 이하로 만들어주세요!",this.name=this.name.slice(0,10),this.status="error"):(this.message="",this.status="")},pressEnter:function(){this.isValid&&this.goClick()},goClick:function(){var t={uid:String(Math.random()).substring(2).split("").reverse().join(""),name:this.name,isTapped:!1};r.a.ref("/users/".concat(t.uid)).set(t),this.$router.push("/tap?uid=".concat(t.uid))}},computed:{isValid:function(){var t=this;return""!==this.name&&this.users&&0===this.users.filter(function(e){return e.name===t.name}).length&&this.name.length<=10}}},l=(n(828),n(79)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",{staticClass:"mobile"},[n("img",{attrs:{src:"https://storage.googleapis.com/io-19-assets/images/global/hashtag.gif"}}),t._v(" "),n("a-form",[n("a-form-item",{attrs:{"validate-status":t.status,"has-feedback":"",help:t.message}},[n("a-input",{attrs:{value:t.name,size:"large",placeholder:"이름을 입력해주세요!"},on:{change:t.input,pressEnter:t.pressEnter}})],1),t._v(" "),n("a-button",{attrs:{type:"primary",disabled:!t.isValid},on:{click:t.goClick}},[t._v("GO!")])],1)],1)])},[],!1,null,"7b93df46",null);e.default=component.exports}}]);