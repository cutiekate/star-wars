(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{19:function(e,a,t){e.exports=t(32)},24:function(e,a,t){},25:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(17),s=t.n(n),l=(t(24),t(25),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"sw-title"},"STAR WARS"),c.a.createElement("p",{className:"sw-desc"},"A long time ago in a galaxy far, far away...."))}),m=t(7),i=t(5),o=t.n(i),u=t(10),p="https://swapi.dev/api/",d=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"films/")).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"people/")).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"planets/")).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"species/")).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"starships/")).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(r.useState)([]),a=Object(m.a)(e,2),t=a[0],n=a[1];return Object(r.useEffect)((function(){E().then((function(e){n(e.results)}))}),[]),c.a.createElement("div",null,t.map((function(e){return c.a.createElement("div",{className:"card border-secondary mb-3"},c.a.createElement("p",{className:"card-header"},e.name),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},c.a.createElement("small",{className:"text-muted"},"height: ",e.height)),c.a.createElement("p",{className:"card-text"},c.a.createElement("small",{className:"text-muted"},"mass: ",e.mass)),c.a.createElement("p",{className:"card-text"},c.a.createElement("small",{className:"text-muted"},"hair color: ",e.hair_color)),c.a.createElement("p",{className:"card-text"},c.a.createElement("small",{className:"text-muted"},"skin color: ",e.skin_color)),c.a.createElement("p",{className:"card-text"},c.a.createElement("small",{className:"text-muted"},"eye color: ",e.eye_color)),c.a.createElement("p",{className:"card-text"},c.a.createElement("small",{className:"text-muted"},"birth: ",e.birth_year)),c.a.createElement("p",{className:"card-text"},c.a.createElement("small",{className:"text-muted"},"gender: ",e.gender))))})))},x=function(){var e=Object(r.useState)([]),a=Object(m.a)(e,2),t=a[0],n=a[1];return Object(r.useEffect)((function(){d().then((function(e){n(e.results)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"form-inline"},c.a.createElement("input",{className:"form-control",type:"search",placeholder:"Search.."}),c.a.createElement("button",{className:"btn btn-outline-dark my-2 my-sm-0",type:"submit"},"Search")),c.a.createElement("div",{className:"card-group"},t.map((function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},e.title),c.a.createElement("p",{className:"card-text"},e.opening_crawl),c.a.createElement("div",{className:"card-footer"},c.a.createElement("p",{className:"card-text"},c.a.createElement("small",{className:"text-muted"},"Director: ",e.director)),c.a.createElement("p",{className:"card-text"},c.a.createElement("small",{className:"text-muted"},"Producer: ",e.producer)),c.a.createElement("p",{className:"card-text"},c.a.createElement("small",{className:"text-muted"},"Release date: ",e.release_date)))))}))))},v=function(){var e=Object(r.useState)([]),a=Object(m.a)(e,2),t=a[0],n=a[1];return Object(r.useEffect)((function(){f().then((function(e){n(e.results)}))}),[]),c.a.createElement("div",null,t.map((function(e){return c.a.createElement("div",{className:"card border-secondary mb-3"},c.a.createElement("p",{className:"card-header"},e.name),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"}," Rotation period: ",e.rotation_period),c.a.createElement("p",{className:"card-text"},"Orbital period: ",e.orbital_period),c.a.createElement("p",{className:"card-text"},"Diameter: ",e.diameter),c.a.createElement("p",{className:"card-text"},"Climate: ",e.climate),c.a.createElement("p",{className:"card-text"},"Gravity: ",e.gravity),c.a.createElement("p",{className:"card-text"},"Terrain: ",e.terrain),c.a.createElement("p",{className:"card-text"},"Surface water: ",e.surface_water)))})))},g=function(){var e=Object(r.useState)([]),a=Object(m.a)(e,2),t=a[0],n=a[1];return Object(r.useEffect)((function(){N().then((function(e){n(e.results)}))}),[]),c.a.createElement("div",null,t.map((function(e){return c.a.createElement("div",{className:"card border-secondary mb-3"},c.a.createElement("p",{className:"card-header"},e.name),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},"Classification: ",e.classification),c.a.createElement("p",{className:"card-text"},"Designation: ",e.designation),c.a.createElement("p",{className:"card-text"},"Height: ",e.average_height),c.a.createElement("p",{className:"card-text"},"Skin color: ",e.skin_colors),c.a.createElement("p",{className:"card-text"},"Hair colors: ",e.hair_colors),c.a.createElement("p",{className:"card-text"},"Eye colors: ",e.eye_colors),c.a.createElement("p",{className:"card-text"},"Lifespan: ",e.average_lifespan),c.a.createElement("p",{className:"card-text"},"Language: ",e.language)))})))},y=function(){var e=Object(r.useState)([]),a=Object(m.a)(e,2),t=a[0],n=a[1];return Object(r.useEffect)((function(){h().then((function(e){n(e.results)}))}),[]),c.a.createElement("div",null,t.map((function(e){return c.a.createElement("div",{className:"card border-secondary mb-3"},c.a.createElement("p",{className:"card-header"},e.name),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text"},"Model: ",e.model),c.a.createElement("p",{className:"card-text"},"Manufacturer: ",e.manufacturer),c.a.createElement("p",{className:"card-text"},"Cost in credits:",e.cost_in_credits),c.a.createElement("p",{className:"card-text"},"Length: ",e.length),c.a.createElement("p",{className:"card-text"},"Max atmosphering speed: ",e.max_atmosphering_speed),c.a.createElement("p",{className:"card-text"}," Crew: ",e.crew),c.a.createElement("p",{className:"card-text"},"Passengers: ",e.passengers),c.a.createElement("p",{className:"card-text"},"Capacity: ",e.cargo_capacity),c.a.createElement("p",{className:"card-text"},"Consumables: ",e.consumables),c.a.createElement("p",{className:"card-text"},"Hyperdrive rating: ",e.hyperdrive_rating)))})))},j=t(8),w=t(1);var O=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",null,c.a.createElement("ul",{className:"nav nav-tabs"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(j.b,{className:"nav-link",to:"/",exact:!0},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(j.b,{className:"nav-link",to:"films"},"Films")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(j.b,{className:"nav-link",to:"people"},"People")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(j.b,{className:"nav-link",to:"planets"},"Planets")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(j.b,{className:"nav-link",to:"species"},"Species")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(j.b,{className:"nav-link",to:"starships"},"Starships")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(j.b,{className:"nav-link",to:"vehicles"},"Vehicles")))),c.a.createElement(w.d,null,c.a.createElement(w.b,{path:"/",exact:!0,component:l}),c.a.createElement(w.a,{from:"/home",to:"/"}),c.a.createElement(w.b,{path:"/films",component:x}),c.a.createElement(w.b,{path:"/people",component:b}),c.a.createElement(w.b,{path:"/planets",component:v}),c.a.createElement(w.b,{path:"/species",component:g}),c.a.createElement(w.b,{path:"/starships",component:y}),c.a.createElement(w.b,{path:"/vehicles",component:y})))};s.a.render(c.a.createElement(j.a,null,c.a.createElement(O,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.bf6c6e65.chunk.js.map