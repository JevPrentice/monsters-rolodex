(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var s=t(1),r=t.n(s),a=t(3),o=t.n(a),c=(t(12),t(4)),i=t(5),l=t(7),h=t(6),u=(t(13),t(14),t(15),t(0)),d=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.name,"?set=set4&size=180x180")}),Object(u.jsx)("h2",{children:e.monster.name}),Object(u.jsx)("p",{children:e.monster.email})]})},m=function(e){return Object(u.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(u.jsx)(d,{monster:e},e.id)}))})},j=(t(17),function(e){var n=e.placeHolder,t=e.handleChange;return Object(u.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})}),p=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(e){var s;return Object(c.a)(this,t),(s=n.call(this,e)).handleChange=function(e){s.setState({searchField:e.target.value})},s.state={monsters:[],searchField:""},s}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){var t=JSON.parse('{\n    "id": 11,\n    "name": "Simone",\n    "username": "simone",\n    "email": "scoester50@gmail.com",\n    "address": {\n        "street": "Kulas Light",\n        "suite": "Apt. 556",\n        "city": "Gwenborough",\n        "zipcode": "92998-3874",\n        "geo": {\n            "lat": "-37.3159",\n            "lng": "81.1496"\n        }\n    },\n    "phone": "1-770-736-8031 x56442",\n    "website": "hildegard.org",\n    "company": {\n        "name": "Romaguera-Crona",\n        "catchPhrase": "Multi-layered client-server neural-net",\n        "bs": "harness real-time e-markets"\n    }\n}'),s=JSON.parse('{\n    "id": 12,\n    "name": "Jev",\n    "username": "jev",\n    "email": "jevprentice@gmail.com",\n    "address": {\n        "street": "Kulas Light",\n        "suite": "Apt. 556",\n        "city": "Gwenborough",\n        "zipcode": "92998-3874",\n        "geo": {\n            "lat": "-37.3159",\n            "lng": "81.1496"\n        }\n    },\n    "phone": "1-770-736-8031 x56442",\n    "website": "hildegard.org",\n    "company": {\n        "name": "Romaguera-Crona",\n        "catchPhrase": "Multi-layered client-server neural-net",\n        "bs": "harness real-time e-markets"\n    }\n}');n.push(t),n.push(s),e.setState({monsters:n})}))}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField.toLowerCase(),s=n.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Monsters Rolodex"}),Object(u.jsx)(j,{placeHolder:"Search monsters",handleChange:this.handleChange}),Object(u.jsx)(m,{monsters:s})]})}}]),t}(s.Component),g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,s=n.getFID,r=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),s(e),r(e),a(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.cdc79326.chunk.js.map