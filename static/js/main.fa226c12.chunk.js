(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(3),a=n.n(s),o=(n(12),n(4)),i=n(5),h=n(7),b=n(6),l=(n.p,n(13),n(0)),u=function(e){var t=e.name,n=e.email,c=e.id;return Object(l.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(c,"?200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{children:n})]})]})},d=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=function(e){var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=(n(15),function(e){return Object(l.jsx)("div",{className:"scroll-bar",children:e.children})}),g=(n(16),function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"RoboFriends"}),Object(l.jsx)(j,{searchChange:this.onSearchChange}),Object(l.jsx)(f,{children:Object(l.jsx)(d,{robots:c})})]}):Object(l.jsx)("h1",{children:"Loading..."})}}]),n}(c.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(17);a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.fa226c12.chunk.js.map