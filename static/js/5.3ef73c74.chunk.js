(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{33:function(t,e,r){"use strict";r.d(e,"d",(function(){return v})),r.d(e,"b",(function(){return d})),r.d(e,"e",(function(){return l})),r.d(e,"a",(function(){return h})),r.d(e,"c",(function(){return m}));var n=r(15),a=r(31),c=r.n(a),u=r(32),s=r(38),i=r.n(s),o=r(10),p=r.n(o);i.a.defaults.baseURL="https://api.themoviedb.org/3";var f={api_key:"c8e555b792369f2cdd4fa1e59af4be3e",language:"en-US"},v=function(){var t=Object(u.a)(c.a.mark((function t(){var e,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/trending/movie/day",{params:f});case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(u.a)(c.a.mark((function t(e){var r,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/movie/".concat(e),{params:f});case 3:return r=t.sent,n=r.data,t.abrupt("return",n);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(u.a)(c.a.mark((function t(e){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/search/movie",{params:Object(n.a)(Object(n.a)({},f),{},{query:e,page:1,include_adult:!1})});case 3:return r=t.sent,a=r.data,t.abrupt("return",a.results);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(u.a)(c.a.mark((function t(e){var r,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/movie/".concat(e,"/credits"),{params:f});case 3:return r=t.sent,n=r.data,t.abrupt("return",n.cast);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(u.a)(c.a.mark((function t(e){var r,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/movie/".concat(e,"/reviews"),{params:f});case 3:return r=t.sent,n=r.data,t.abrupt("return",n.results);case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();d.propTypes={movieId:p.a.number.isRequired},l.propTypes={query:p.a.string.isRequired},h.propTypes={movieId:p.a.number.isRequired},m.propTypes={movieId:p.a.number.isRequired}},39:function(t,e,r){"use strict";r(0);var n=r(9),a=r(2),c=r(1);e.a=Object(a.f)((function(t){var e=t.films,r=t.location;return Object(c.jsx)("ul",{children:e.map((function(t){return Object(c.jsx)("li",{children:Object(c.jsx)(n.b,{to:{pathname:"/movies/".concat(t.id),state:{from:r}},children:t.title})},t.id)}))})}))},69:function(t,e,r){"use strict";r.r(e);var n=r(31),a=r.n(n),c=r(32),u=r(34),s=r(35),i=r(37),o=r(36),p=r(0),f=r(33),v=r(39),d=r(1),l=function(t){Object(i.a)(r,t);var e=Object(o.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={films:[]},t}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var t=Object(c.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.d)();case 2:e=t.sent,this.setState({films:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.films;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Trending today"}),t.length>0&&Object(d.jsx)(v.a,{films:t})]})}}]),r}(p.Component);e.default=l}}]);
//# sourceMappingURL=5.3ef73c74.chunk.js.map