(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{"397d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("a34a")),a=u(n("0048"));function u(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,r,a,u,i){try{var s=t[u](i),c=s.value}catch(o){return void n(o)}s.done?e(c):Promise.resolve(c).then(r,a)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var u=t.apply(e,n);function s(t){i(u,r,a,s,c,"next",t)}function c(t){i(u,r,a,s,c,"throw",t)}s(void 0)}))}}var c={mixins:[a.default],data:function(){return{swiperList:[],navList:[],floorList:[]}},onLoad:function(){this.getSwiperList(),this.getNavList(),this.getFloorList()},methods:{getSwiperList:function(){var e=this;return s(r.default.mark((function n(){var a,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("https://api-ugo-web.itheima.net/api/public/v1/home/swiperdata");case 2:if(a=n.sent,u=a.data,200===u.meta.status){n.next=6;break}return n.abrupt("return",t.$showMsg());case 6:e.swiperList=u.message;case 7:case"end":return n.stop()}}),n)})))()},getNavList:function(){var e=this;return s(r.default.mark((function n(){var a,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("https://api-ugo-web.itheima.net/api/public/v1/home/catitems");case 2:if(a=n.sent,u=a.data,200===u.meta.status){n.next=6;break}return n.abrupt("return",t.$showMsg());case 6:e.navList=u.message;case 7:case"end":return n.stop()}}),n)})))()},navClickHandler:function(e){"分类"==e.name&&t.switchTab({url:"/pages/cate/cate"})},getFloorList:function(){var e=this;return s(r.default.mark((function n(){var a,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$http.get("https://api-ugo-web.itheima.net/api/public/v1/home/floordata");case 2:if(a=n.sent,u=a.data,200===u.meta.status){n.next=6;break}return n.abrupt("return",t.$showMsg());case 6:u.message.forEach((function(t){t.product_list.forEach((function(t){t.url="/subpkg/goods_list/goods_list?"+t.navigator_url.split("?")[1]}))})),e.floorList=u.message;case 8:case"end":return n.stop()}}),n)})))()},gotoSearch:function(){t.navigateTo({url:"/subpkg/search/search"})}}};e.default=c}).call(this,n("543d")["default"])},"4fc2":function(t,e,n){"use strict";n.r(e);var r=n("8884"),a=n("c4d1");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("679c");var i,s=n("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);e["default"]=c.exports},"679c":function(t,e,n){"use strict";var r=n("d0eb"),a=n.n(r);a.a},8884:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var r={mySearch:function(){return n.e("components/my-search/my-search").then(n.bind(null,"9115"))}},a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"946e":function(t,e,n){"use strict";(function(t){n("f41f");r(n("66fd"));var e=r(n("4fc2"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},c4d1:function(t,e,n){"use strict";n.r(e);var r=n("397d"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=a.a},d0eb:function(t,e,n){}},[["946e","common/runtime","common/vendor"]]]);