"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{1616:function(n,t,e){e.d(t,{j:function(){return o}});var r,a=e(168),i=e(6444).ZP.p(r||(r=(0,a.Z)(["\n  color: red;\n  font-size: 22px;\n"]))),c=e(184),o=function(n){var t=n.children;return(0,c.jsx)(i,{children:t})}},7234:function(n,t,e){e.d(t,{C:function(){return o}});var r,a=e(168),i=e(6444).ZP.h1(r||(r=(0,a.Z)(["\n  padding: 8px;\n  margin-top: 0;\n  margin-bottom: 32px;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 40px;\n  font-weight: 500;\n  text-align: center;\n  background-image: repeating-linear-gradient(\n    -45deg,\n    #26f3fa,\n    #26f3fa 15px,\n    #b7d0da 15px,\n    #b7d0da 30px\n  );\n"]))),c=e(184),o=function(n){var t=n.text;return(0,c.jsx)(i,{children:t})}},1987:function(n,t,e){e.d(t,{Q:function(){return d}});var r,a,i=e(6856),c=e(168),o=e(6444),u=e(1087),s=o.ZP.ul(r||(r=(0,c.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n"]))),p=(0,o.ZP)(u.rU)(a||(a=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  width: 100%;\n  min-height: 60px;\n\n  text-decoration: none;\n  color: #fff;\n  font-size: 22px;\n  font-weight: 500;\n  background-color: #26f3fa;\n  border-radius: 4px;\n\n  transform: scale(1);\n  box-shadow: none;\n\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #fff;\n    background-color: #c7904e;\n    transform: scale(1.03);\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,\n      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n  }\n\n  > svg {\n    margin-right: 8px;\n  }\n"]))),f=e(184),d=function(n){var t=n.movies,e=n.prevLocation;return(0,f.jsx)(s,{children:t.map((function(n){var t=n.id,r=n.original_title;return(0,f.jsx)("li",{children:(0,f.jsxs)(p,{to:"/movies/".concat(t),state:{from:e},children:[(0,f.jsx)(i.ex0,{size:28})," ",r]})},t)}))})}},7233:function(n,t,e){e.d(t,{TP:function(){return f},hZ:function(){return s},iN:function(){return d},qF:function(){return p},tx:function(){return l}});var r=e(5861),a=e(7757),i=e.n(a),c=e(2388),o="d210a4e5fa71331bdd85136700dad179";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u={params:{language:"en-US"}},s=function(){var n=(0,r.Z)(i().mark((function n(){var t,e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="trending/movie/day?api_key=".concat(o),n.next=3,c.Z.get(t);case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="search/movie?api_key=".concat(o,"&query=").concat(t,"&include_adult=false"),n.next=3,c.Z.get(e,u);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"?api_key=").concat(o),n.next=3,c.Z.get(e,u);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/credits?api_key=").concat(o),n.next=3,c.Z.get(e,u);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/reviews?api_key=").concat(o,"&page=1"),n.next=3,c.Z.get(e,u);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},5415:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),i=e(7757),c=e.n(i),o=e(2791),u=e(7689),s=e(7234),p=e(7233),f=e(1616),d=e(736),l=e(1987),x=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),e=t[0],i=t[1],v=(0,o.useState)(null),h=(0,a.Z)(v,2),g=h[0],m=h[1],b=(0,o.useState)(!1),Z=(0,a.Z)(b,2),k=Z[0],w=Z[1],y=(0,u.TH)();return(0,o.useEffect)((function(){m(null);var n=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w(!0),n.next=4,(0,p.hZ)();case 4:t=n.sent,e=t.results.map((function(n){return{id:n.id,original_title:n.original_title}})),i(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),m("Movies doesn't respond, or check your internet connection!");case 12:return n.prev=12,w(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,x.jsxs)("main",{children:[k&&(0,x.jsx)(d.$,{}),(0,x.jsx)(s.C,{text:"Trending today"}),e.length>0&&(0,x.jsx)(l.Q,{movies:e,prevLocation:y}),g&&(0,x.jsx)(f.j,{children:g})]})}}}]);
//# sourceMappingURL=415.cd743190.chunk.js.map