"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{4428:function(n,e,t){t.d(e,{A:function(){return a},k:function(){return i}});var r=t(5667),i={duration:1200,delay:200,smooth:"linear",isDynamic:!0},a=r.NY},1616:function(n,e,t){t.d(e,{j:function(){return c}});var r,i=t(168),a=t(6444).ZP.p(r||(r=(0,i.Z)(["\n  color: red;\n  font-size: 22px;\n"]))),o=t(184),c=function(n){var e=n.children;return(0,o.jsx)(a,{children:e})}},7233:function(n,e,t){t.d(e,{TP:function(){return p},hZ:function(){return u},iN:function(){return d},qF:function(){return l},tx:function(){return f}});var r=t(5861),i=t(7757),a=t.n(i),o=t(2388),c="d210a4e5fa71331bdd85136700dad179";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s={params:{language:"en-US"}},u=function(){var n=(0,r.Z)(a().mark((function n(){var e,t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="trending/movie/day?api_key=".concat(c),n.next=3,o.Z.get(e);case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="search/movie?api_key=".concat(c,"&query=").concat(e,"&include_adult=false"),n.next=3,o.Z.get(t,s);case 3:return r=n.sent,i=r.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"?api_key=").concat(c),n.next=3,o.Z.get(t,s);case 3:return r=n.sent,i=r.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/credits?api_key=").concat(c),n.next=3,o.Z.get(t,s);case 3:return r=n.sent,i=r.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="movie/".concat(e,"/reviews?api_key=").concat(c,"&page=1"),n.next=3,o.Z.get(t,s);case 3:return r=n.sent,i=r.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},983:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,i,a,o,c,s,u,l,p,d,f,x,h,v,g,m=t(5861),Z=t(9439),b=t(7757),j=t.n(b),w=t(2791),y=t(7689),k=t(7233),_=t(1616),P=t(736),z=t(168),U=t(6444),C=U.ZP.div(r||(r=(0,z.Z)(["\n  margin-bottom: 16px;\n"]))),S=U.ZP.img(i||(i=(0,z.Z)(["\n  display: block;\n  margin-bottom: 16px;\n  width: 300px;\n  height: auto;\n  object-fit: cover;\n"]))),T=U.ZP.h2(a||(a=(0,z.Z)(["\n  margin-bottom: 8px;\n"]))),A=U.ZP.p(o||(o=(0,z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 8px;\n\n  width: 70px;\n  height: 40px;\n\n  font-size: 18px;\n  font-weight: 700;\n  color: #fff;\n  background-color: #000000;\n  border-radius: 4px;\n"]))),q=U.ZP.p(c||(c=(0,z.Z)(["\n  font-weight: bold;\n  font-size: 18px;\n  text-transform: Capitalize;\n  margin-bottom: 8px;\n"]))),D=U.ZP.p(s||(s=(0,z.Z)(["\n  margin-bottom: 8px;\n"]))),E=U.ZP.p(u||(u=(0,z.Z)(["\n  font-weight: bold;\n  margin-bottom: 8px;\n"]))),F=U.ZP.ul(l||(l=(0,z.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  list-style: none;\n"]))),G=U.ZP.li(p||(p=(0,z.Z)(["\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),H=t(184),N=function(n){var e=n.poster,t=n.title,r=n.vote,i=n.overview,a=n.year,o=n.genres;return(0,H.jsxs)(C,{children:[(0,H.jsx)(S,{src:"https://image.tmdb.org/t/p/w400".concat(e),alt:t}),(0,H.jsxs)("div",{children:[(0,H.jsx)(T,{children:t}),(0,H.jsxs)(q,{children:["(",new Date(a).getFullYear(),")"]}),(0,H.jsx)(E,{children:"User rating:"}),(0,H.jsx)(A,{children:r}),(0,H.jsx)(E,{children:"Overview"}),i&&(0,H.jsx)(D,{children:i}),(0,H.jsx)(E,{children:"Genres"}),(0,H.jsx)(F,{children:o.map((function(n){return(0,H.jsx)(G,{children:n.name},n.name)}))})]})]})},O=t(1087),R=(U.ZP.div(d||(d=(0,z.Z)([""]))),U.ZP.h2(f||(f=(0,z.Z)(["\n  margin-bottom: 16px;\n"])))),Y=U.ZP.ul(x||(x=(0,z.Z)(["\n  display: flex;\n  gap: 10px;\n  list-style: none;\n  margin-bottom: 20px;\n"]))),B=U.ZP.li(h||(h=(0,z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),I=(0,U.ZP)(O.rU)(v||(v=(0,z.Z)(["\n  padding: 8px;\n  min-width: 100px;\n  height: 40px;\n\n  text-decoration: none;\n  text-align: center;\n  color: inherit;\n\n  font-size: 18px;\n  font-weight: 500;\n  background-color: #225de6;\n  border-radius: 4px;\n\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    color: #fff;\n    background-color: #ddd0d0;\n  }\n\n  &.active {\n    color: #fff;\n    background-color: #ddd0d0;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,\n      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;\n  }\n"]))),L=function(n){var e=n.location;return(0,H.jsxs)("div",{children:[(0,H.jsx)("hr",{}),(0,H.jsx)(R,{children:"Additional information"}),(0,H.jsxs)(Y,{children:[(0,H.jsx)(B,{children:(0,H.jsx)(I,{to:"cast",state:{from:e},children:"Cast"})}),(0,H.jsx)(B,{children:(0,H.jsx)(I,{to:"reviews",state:{from:e},children:"Review"})})]}),(0,H.jsx)("hr",{})]})},M=(0,U.ZP)(O.rU)(g||(g=(0,z.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px;\n  margin-bottom: 32px;\n\n  text-decoration: none;\n  color: #47351f;\n  font-size: 18px;\n  font-weight: 700;\n  text-transform: uppercase;\n\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    color: #225de6;\n  }\n"]))),$=t(1578),J=function(n){var e=n.to,t=n.children;return(0,H.jsxs)(M,{to:e,children:[(0,H.jsx)($.H23,{size:"32"}),t]})},K=t(4428),Q=function(){var n,e=(0,w.useState)(null),t=(0,Z.Z)(e,2),r=t[0],i=t[1],a=(0,w.useState)(null),o=(0,Z.Z)(a,2),c=o[0],s=o[1],u=(0,y.UO)().movieId,l=null!==(n=(0,y.TH)().state.from)&&void 0!==n?n:"/";if((0,w.useEffect)((function(){s(null);var n=function(){var n=(0,m.Z)(j().mark((function n(){var e,t,r,a,o,c,l;return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,k.TP)(u);case 3:e=n.sent,t=e.poster_path,r=e.original_title,a=e.vote_average,o=e.overview,c=e.release_date,l=e.genres,i({poster_path:t,original_title:r,vote_average:a,overview:o,release_date:c,genres:l}),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),s("Movies doesn't respond, or check your internet connection!");case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[u]),(0,w.useEffect)((function(){K.A.scrollToBottom(K.k)}),[]),r)return(0,H.jsxs)("main",{children:[c&&(0,H.jsx)(_.j,{children:c}),(0,H.jsx)(J,{to:l,children:"Go back"}),r!=={}&&(0,H.jsx)(N,{poster:r.poster_path,title:r.original_title,vote:r.vote_average,overview:r.overview,year:r.release_date,genres:r.genres}),(0,H.jsx)(L,{location:l}),(0,H.jsx)(w.Suspense,{fallback:(0,H.jsx)(P.$,{}),children:(0,H.jsx)(y.j3,{})})]})}}}]);
//# sourceMappingURL=983.b43f7c92.chunk.js.map