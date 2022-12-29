"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[774],{1616:function(n,r,e){e.d(r,{j:function(){return c}});var t,a=e(168),o=e(6444).ZP.p(t||(t=(0,a.Z)(["\n  color: red;\n  font-size: 22px;\n"]))),i=e(184),c=function(n){var r=n.children;return(0,i.jsx)(o,{children:r})}},7234:function(n,r,e){e.d(r,{C:function(){return c}});var t,a=e(168),o=e(6444).ZP.h1(t||(t=(0,a.Z)(["\n  padding: 8px;\n  margin-top: 0;\n  margin-bottom: 32px;\n  border-radius: 8px;\n  color: #fff;\n  font-size: 40px;\n  font-weight: 500;\n  text-align: center;\n  background-image: repeating-linear-gradient(\n    -45deg,\n    #26f3fa,\n    #26f3fa 15px,\n    #b7d0da 15px,\n    #b7d0da 30px\n  );\n"]))),i=e(184),c=function(n){var r=n.text;return(0,i.jsx)(o,{children:r})}},1987:function(n,r,e){e.d(r,{Q:function(){return d}});var t,a,o=e(6856),i=e(168),c=e(6444),u=e(1087),s=c.ZP.ul(t||(t=(0,i.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n"]))),p=(0,c.ZP)(u.rU)(a||(a=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  width: 100%;\n  min-height: 60px;\n\n  text-decoration: none;\n  color: #fff;\n  font-size: 22px;\n  font-weight: 500;\n  background-color: #26f3fa;\n  border-radius: 4px;\n\n  transform: scale(1);\n  box-shadow: none;\n\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #fff;\n    background-color: #c7904e;\n    transform: scale(1.03);\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,\n      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n  }\n\n  > svg {\n    margin-right: 8px;\n  }\n"]))),f=e(184),d=function(n){var r=n.movies,e=n.prevLocation;return(0,f.jsx)(s,{children:r.map((function(n){var r=n.id,t=n.original_title;return(0,f.jsx)("li",{children:(0,f.jsxs)(p,{to:"/movies/".concat(r),state:{from:e},children:[(0,f.jsx)(o.ex0,{size:28})," ",t]})},r)}))})}},7233:function(n,r,e){e.d(r,{TP:function(){return f},hZ:function(){return s},iN:function(){return d},qF:function(){return p},tx:function(){return l}});var t=e(5861),a=e(7757),o=e.n(a),i=e(2388),c="d210a4e5fa71331bdd85136700dad179";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u={params:{language:"en-US"}},s=function(){var n=(0,t.Z)(o().mark((function n(){var r,e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="trending/movie/day?api_key=".concat(c),n.next=3,i.Z.get(r);case 3:return e=n.sent,t=e.data,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="search/movie?api_key=".concat(c,"&query=").concat(r,"&include_adult=false"),n.next=3,i.Z.get(e,u);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(r,"?api_key=").concat(c),n.next=3,i.Z.get(e,u);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(r,"/credits?api_key=").concat(c),n.next=3,i.Z.get(e,u);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(o().mark((function n(r){var e,t,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(r,"/reviews?api_key=").concat(c,"&page=1"),n.next=3,i.Z.get(e,u);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},8774:function(n,r,e){e.r(r),e.d(r,{default:function(){return P}});var t,a,o,i=e(5861),c=e(9439),u=e(7757),s=e.n(u),p=e(2791),f=e(1087),d=e(7689),l=e(7234),x=e(168),h=e(6444),v=h.ZP.form(t||(t=(0,x.Z)(["\n  display: inline-flex;\n\n  margin-bottom: 32px;\n"]))),m=h.ZP.input(a||(a=(0,x.Z)(["\n  padding: 10px 15px;\n  border-radius: 8px;\n  border: 3px solid #26f3fa;\n  margin-right: 20px;\n  font-size: 20px;\n  outline: transparent;\n  :hover {\n    background-color: #f4f8fa;\n  }\n"]))),g=h.ZP.button(o||(o=(0,x.Z)(["\n  cursor: pointer;\n  padding: 8px 15px;\n  margin-bottom: 15px;\n  box-shadow: 1px 2px 2px 0 rgb(0, 0, 0/0.5);\n  transition: box-shadow 250ms linear;\n  border-radius: 8px;\n  border: 3px solid #26f3fa;\n  font-weight: bold;\n  align-self: baseline;\n  :hover {\n    background-color: #2196f3;\n    color: white;\n  }\n"]))),b=e(184),Z=function(n){var r=n.onSubmit;return(0,b.jsxs)(v,{onSubmit:r,children:[(0,b.jsx)(m,{name:"search",type:"text",autocomplete:"off",placeholder:"Find movie..."}),(0,b.jsx)(g,{children:"Find"})]})},w=e(1616),y=e(1987),k=e(736),j=e(9014),_=e(7233),P=function(){var n,r=(0,p.useState)([]),e=(0,c.Z)(r,2),t=e[0],a=e[1],o=(0,p.useState)(!1),u=(0,c.Z)(o,2),x=u[0],h=u[1],v=(0,p.useState)(null),m=(0,c.Z)(v,2),g=m[0],P=m[1],S=(0,f.lr)(),q=(0,c.Z)(S,2),z=q[0],C=q[1],F=null!==(n=z.get("query"))&&void 0!==n?n:"",L=(0,d.TH)();(0,p.useEffect)((function(){if(P(null),""!==F){var n=function(){var n=(0,i.Z)(s().mark((function n(){var r,e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,_.qF)(F);case 4:r=n.sent,e=r.results.map((function(n){return{id:n.id,original_title:n.original_title}})),a(e),0===r.total_results&&P("Enter correct query!"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),P("Movies doesn't respond, or check your internet connection!");case 13:return n.prev=13,h(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}}),[F]);return(0,b.jsxs)("main",{children:[(0,b.jsx)(l.C,{text:"Find your movie"}),(0,b.jsx)(Z,{onSubmit:function(n){n.preventDefault();var r=n.target.search.value;if(""===r.trim())return j.ZP.error("Searchbar is empty! Enter film name!",{duration:2e3,style:{border:"1px solid #3f51b5",padding:"16px",color:"#3f51b5",width:"400px"}});C({query:r.toLowerCase()}),n.currentTarget.reset()}}),g&&(0,b.jsx)(w.j,{children:g}),x&&(0,b.jsx)(k.$,{}),t.length>0&&(0,b.jsx)(y.Q,{movies:t,prevLocation:L})]})}}}]);
//# sourceMappingURL=774.5b72cc0a.chunk.js.map