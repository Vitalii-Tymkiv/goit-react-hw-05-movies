"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{4428:function(n,t,r){r.d(t,{A:function(){return c},k:function(){return a}});var e=r(5667),a={duration:1200,delay:200,smooth:"linear",isDynamic:!0},c=e.NY},3387:function(n,t,r){r.r(t),r.d(t,{default:function(){return P}});var e,a,c,i,u,o=r(5861),s=r(9439),p=r(7757),f=r.n(p),d=r(2791),l=r(7689),x=r(1616),h=r(168),v=r(6444),m=v.ZP.ul(e||(e=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  list-style: none;\n"]))),b=v.ZP.li(a||(a=(0,h.Z)(["\n  align-items: center;\n  justify-content: center;\n  flex-basis: calc((100% - 3 * 48px) / 4);\n\n  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,\n    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,\n    rgba(0, 0, 0, 0.07) 0px 16px 16px;\n  border-radius: 4px;\n\n  overflow: hidden;\n  transform: scale(1);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    transform: scale(1.05);\n  }\n"]))),g=v.ZP.img(c||(c=(0,h.Z)(["\n  width: 100%;\n  height: auto;\n"]))),Z=v.ZP.div(i||(i=(0,h.Z)(["\n  padding: 10px;\n"]))),w=v.ZP.p(u||(u=(0,h.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 18px;\n"]))),k=r(7233),y=r(312),j=r(4428),_=r(184),P=function(){var n=(0,d.useState)([]),t=(0,s.Z)(n,2),r=t[0],e=t[1],a=(0,d.useState)(null),c=(0,s.Z)(a,2),i=c[0],u=c[1],p=(0,l.UO)().movieId;return(0,d.useEffect)((function(){var n=function(){var n=(0,o.Z)(f().mark((function n(){var t,r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,k.iN)(p);case 3:t=n.sent,r=t.cast.map((function(n){return{id:n.id,name:n.name,character:n.character,profile_path:n.profile_path}})),e(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),u("Movies doesn't respond, or check your internet connection!");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[p]),(0,d.useEffect)((function(){j.A.scrollToBottom(j.k)}),[]),(0,_.jsxs)(_.Fragment,{children:[i&&(0,_.jsx)(x.j,{children:i}),r?(0,_.jsx)(m,{children:r.map((function(n){var t=n.id,r=n.profile_path,e=n.name,a=n.character;return(0,_.jsxs)(b,{children:[(0,_.jsx)(g,{src:r?"https://image.tmdb.org/t/p/w300".concat(r):y,alt:e}),(0,_.jsxs)(Z,{children:[(0,_.jsx)("p",{children:e}),(0,_.jsxs)("p",{children:[(0,_.jsx)("b",{children:"Character: "}),a]})]})]},t)}))}):(0,_.jsx)(w,{children:"Files about actors of this film are empty!"})]})}},1616:function(n,t,r){r.d(t,{j:function(){return u}});var e,a=r(168),c=r(6444).ZP.p(e||(e=(0,a.Z)(["\n  color: red;\n  font-size: 22px;\n"]))),i=r(184),u=function(n){var t=n.children;return(0,i.jsx)(c,{children:t})}},7233:function(n,t,r){r.d(t,{TP:function(){return f},hZ:function(){return s},iN:function(){return d},qF:function(){return p},tx:function(){return l}});var e=r(5861),a=r(7757),c=r.n(a),i=r(2388),u="d210a4e5fa71331bdd85136700dad179";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o={params:{language:"en-US"}},s=function(){var n=(0,e.Z)(c().mark((function n(){var t,r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="trending/movie/day?api_key=".concat(u),n.next=3,i.Z.get(t);case 3:return r=n.sent,e=r.data,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="search/movie?api_key=".concat(u,"&query=").concat(t,"&include_adult=false"),n.next=3,i.Z.get(r,o);case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(t,"?api_key=").concat(u),n.next=3,i.Z.get(r,o);case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(t,"/credits?api_key=").concat(u),n.next=3,i.Z.get(r,o);case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r,e,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="movie/".concat(t,"/reviews?api_key=").concat(u,"&page=1"),n.next=3,i.Z.get(r,o);case 3:return e=n.sent,a=e.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},312:function(n,t,r){n.exports=r.p+"static/media/broken_img.d25e8d14857edd0cff6b.png"}}]);
//# sourceMappingURL=387.3ea6f0e0.chunk.js.map