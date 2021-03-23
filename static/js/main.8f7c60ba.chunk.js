(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{28:function(e,t,a){e.exports=a(54)},33:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),o=a(5),m=a(1),u=(a(33),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement(o.c,{to:"/",exact:!0,className:"navbar__link",activeClassName:"is-active"},"Home"),r.a.createElement(o.c,{to:"/people",className:"navbar__link",activeClassName:"is-active"},"People")))}),s=function(){return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"HomePage")))},i=function(){return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Page not found")))},b=a(18),d=a(7),h=a(14),p=a.n(h),E=a(27),f=a.n(E),g=(a(48),function(e){var t=e.human,a=e.slug,l=e.people,c=Object(m.i)(),u=Object(m.h)().search,s=Object(n.useState)(""),i=Object(d.a)(s,2),b=i[0],h=i[1];return Object(n.useEffect)((function(){h(l.find((function(e){return e.name===t}))||void 0)}),[a]),r.a.createElement("td",null,r.a.createElement(o.c,{key:a,to:{pathname:"".concat(c.url,"/").concat(a),search:u}},void 0!==b?r.a.createElement("span",{className:"".concat("m"===b.sex?"blue":"red")},t):r.a.createElement("span",{className:"black"},t)))}),v=(a(49),function(e){var t=e.person,a=e.index,n=e.people,l=n.find((function(e){return t.motherName===e.name})),c=n.find((function(e){return t.fatherName===e.name}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,a),r.a.createElement(g,{human:t.name,slug:t.slug,people:n}),r.a.createElement("td",null,t.sex),r.a.createElement("td",null,t.born),r.a.createElement("td",null,t.died),l?r.a.createElement(g,{human:t.motherName,slug:l.slug,people:n}):r.a.createElement("td",null,r.a.createElement("strong",null,t.motherName)),c?r.a.createElement(g,{human:t.fatherName,slug:c.slug,people:n}):r.a.createElement("td",null,r.a.createElement("strong",null,t.fatherName)))}),N=["Name","Sex","Born","Died"],O=/^[a-z]+( [a-z]+)+$/i,j=function(e){var t=e.header,a=Object(m.g)(),n=Object(m.h)(),l=new URLSearchParams(n.search),c=l.get("sortBy")||"",o=l.get("sortOrder")||"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"button",onClick:function(){var e;e=t,"desc"===o||c!==e?(l.set("sortBy","".concat(e)),l.set("sortOrder","asc")):l.set("sortOrder","desc"),a.push({search:l.toString()})},style:{textTransform:"capitalize"}},t,t!==c?r.a.createElement("span",null,r.a.createElement("img",{src:"images/sort_both.png",alt:"notSorted"})):r.a.createElement("span",null,"*","asc"===o?r.a.createElement("img",{src:"images/sort_asc.png",alt:"sortAsc"}):r.a.createElement("img",{src:"images/sort_desc.png",alt:"sortDesc"}))))},y=(a(50),r.a.memo((function(e){var t=e.people,a=e.personId;return r.a.createElement("section",{className:"section"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Number"),N.map((function(e){return r.a.createElement("th",{key:e},r.a.createElement(j,{header:e}))})),r.a.createElement("th",null,"Mother"),r.a.createElement("th",null,"Father"))),r.a.createElement("tbody",null,t.map((function(e,n){return r.a.createElement("tr",{key:e.slug,className:f()({highlighted:a===e.slug})},r.a.createElement(v,{person:e,index:n+1,personId:a,people:t}))}))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Number"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Sex"),r.a.createElement("th",null,"Born"),r.a.createElement("th",null,"Died"),r.a.createElement("th",null,"Mother"),r.a.createElement("th",null,"Father")))))}))),_=a(10),S=a(8),x=function(e,t,a){return a?e.filter((function(e){return e.sex===t&&Number(a)-e.born>=15&&e.died-Number(a)>=0})):e.filter((function(e){return e.sex===t}))},C=function(e){if(!e)return!1;var t=(new Date).getFullYear().toString().split("");return new RegExp("^(1[4-9][0-9][0-9]|200[0-9]|[0-".concat(t[0],"][0-").concat(t[1],"][0-").concat(t[2],"][0-").concat(t[3],"])$")).test(e)},F=function(e,t){var a={name:"",sex:"m",died:"0",born:"0",mother:"",father:""},r=Object(n.useState)(a),l=Object(d.a)(r,2),c=l[0],o=l[1],u=Object(n.useState)({name:"",sex:"",died:"",born:"",submit:""}),s=Object(d.a)(u,2),i=s[0],b=s[1],h=Object(n.useState)(!1),E=Object(d.a)(h,2),f=E[0],g=E[1],v=Object(n.useState)(!0),N=Object(d.a)(v,2),j=N[0],y=N[1],x=Object(n.useState)(!1),F=Object(d.a)(x,2),k=F[0],w=F[1],B=Object(m.g)(),P=Object(m.h)(),D=new URLSearchParams(P.search),q=Object(m.i)(),Y=Object(n.useCallback)(p()((function(e,t){var a=t.target.value;if("born"===e){var n=""===a;g(n),y(n)}b((function(a){return Object(S.a)(Object(S.a)({},a),{},Object(_.a)({},e,function(e){var t="",a=e.target,n=a.name,r=a.value;switch(n){case"name":r?O.test(r)||(t="Name is invalid"):t="Name is required";break;case"born":t=r?C(r)?"":"Birth Year is not in range! Valid range is 1400-present":"Enter Birth Year";break;case"died":t=r?C(r)?"":"Death Year is not in range! Valid range  is 1400-present":"Enter Death Year"}return t}(t)))}))}),500),[]);Object(n.useEffect)((function(){if(0===Object.keys(i).length&&k){if(function(e,t){var a=e.name.toLowerCase(),n=Number(e.born);return t.some((function(e){return e.name.toLowerCase()===a&&e.born===n}))}(c,t))return void b((function(e){return Object(S.a)(Object(S.a)({},e),{},{submit:"Person exists"})}));e(c),B.push({pathname:"".concat(q.url),search:D.toString()}),o(a)}}),[i]);return{handleChange:function(e){e.persist();var t=e.target,a=t.name,n=t.value;i[a]&&b((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(_.a)({},a,""))})),o((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(_.a)({},a,n))})),Y(a,e)},handleSubmit:function(e){e&&e.preventDefault(),b(function(e){var t,a,n={};(e.name?O.test(e.name)||(n.name="Name is invalid"):n.name="Name is required",e.born&&"0"!==e.born?C(String(e.born))||(n.born="Birth Year is not in range! Valid range is 1400-present"):n.born="Enter Birth Year",e.died&&"0"!==e.born?C(String(e.died))||(n.died="Birth Year is not in range! Valid range is 1400-present"):n.died="Enter Death Year",e.born&&e.died)&&((t=Number(e.born),!!((a=Number(e.died))-t>=0&&a-t<150))||(n.died="Enter correct Birth/Death Year!"));return n}(c)),w(!0)},values:c,errors:i,disabledBornField:f,disbledParentField:j}},k=(a(51),r.a.memo((function(e){var t=e.people,a=e.onAddPerson,l=F(a,t),c=l.values,o=l.errors,m=l.disabledBornField,u=l.disbledParentField,s=l.handleChange,i=l.handleSubmit,b=Object(n.useMemo)((function(){return x(t,"f",c.born)}),[c.born]),d=Object(n.useMemo)((function(){return x(t,"m",c.born)}),[c.born]);return r.a.createElement("form",{className:"form",onSubmit:function(e){return i(e)}},r.a.createElement("label",{htmlFor:"name"},"Full Name:",r.a.createElement("input",{name:"name",value:c.name||"",type:"text",placeholder:"Name",required:!0,onChange:s})),o.name&&r.a.createElement("p",{className:"error error__is-error"},o.name),r.a.createElement("label",{htmlFor:"mother"},"Mother:",r.a.createElement("select",{value:c.mother,name:"mother",onChange:s,disabled:u},r.a.createElement("option",{value:""},"None"),b.map((function(e){var t=e.name;return r.a.createElement("option",{key:t+new Date,value:t},t)})))),r.a.createElement("label",{htmlFor:"father"},"Father:",r.a.createElement("select",{value:c.father,name:"father",onChange:s,disabled:u},r.a.createElement("option",{value:""},"None"),d.map((function(e){var t=e.name;return r.a.createElement("option",{key:t+new Date,value:t},t)})))),r.a.createElement("label",{htmlFor:"born"},"Born:",r.a.createElement("input",{name:"born",value:c.born,type:"number",required:!0,onChange:s})),o.born&&r.a.createElement("p",{className:"error error__is-error"},o.born),r.a.createElement("label",{htmlFor:"died"},"Died:",r.a.createElement("input",{name:"died",value:c.died,type:"number",required:!0,disabled:m,onChange:s})),o.died&&r.a.createElement("p",{className:"error error__is-error"},o.died),r.a.createElement("label",{htmlFor:"gender_m"},"Male",r.a.createElement("input",{type:"radio",name:"sex",id:"gender_m",value:"m",checked:"m"===c.sex,onChange:s})),r.a.createElement("label",{htmlFor:"gender_f"},"Female",r.a.createElement("input",{type:"radio",name:"sex",id:"gender_f",value:"f",checked:"f"===c.sex,onChange:s})),r.a.createElement("button",{type:"submit"},"Submit Form"),0===Object.keys(o).length&&!o.submit&&r.a.createElement("p",{className:"error error__not-error"},"No errors, submit callback called!"),o.submit&&r.a.createElement("p",{className:"error error__is-error"},o.submit))}))),w=function(){return fetch("".concat("https://mate-academy.github.io/react_people-table/api/people.json")).then((function(e){return e.json()}))},B=(a(52),function(){var e,t=Object(n.useState)([]),a=Object(d.a)(t,2),l=a[0],c=a[1],u=Object(m.g)(),s=Object(m.h)(),i=new URLSearchParams(s.search),h=Object(m.i)("/people/:slug?"),E=(null===h||void 0===h||null===(e=h.params)||void 0===e?void 0:e.slug)||"0",f=i.get("query")||"",g=Object(n.useState)(f),v=Object(d.a)(g,2),N=v[0],O=v[1],j=i.get("sortBy")||"",_=i.get("sortOrder")||"",S=Object(n.useCallback)(p()((function(e){e?i.set("query",e):i.delete("query"),u.push({search:i.toString()})}),500),[]);Object(n.useEffect)((function(){w().then(c)}),[]);var x=Object(n.useMemo)((function(){if(!f)return l;var e=f.toLowerCase();return l.filter((function(t){var a=t.name,n=t.motherName,r=t.fatherName;return"".concat(a," ").concat(r||""," ").concat(n||"").toLowerCase().includes(e)}))}),[l,f]),C=Object(n.useMemo)((function(){if(!j&&!_)return x;var e=j.toLowerCase();return Object(b.a)(x).sort(function(e,t){switch(e){case"name":case"sex":return function(a,n){return"desc"===t?n[e].localeCompare(a[e]):a[e].localeCompare(n[e])};case"born":case"died":return function(a,n){return"desc"===t?Number(n[e])-Number(a[e]):Number(a[e])-Number(n[e])};default:return function(e,a){return"desc"===t?a.slug.localeCompare(e.slug):e.slug.localeCompare(a.slug)}}}(e,_))}),[j,_,x]),F=function(e){var t=function(e,t){var a=e.trim().split(" ");return a.push(t),a.map((function(e){return e.toLowerCase()})).join("-")}(e.name,String(e.born)),a={name:e.name,sex:e.sex,born:Number(e.born),died:Number(e.died),fatherName:e.father?e.father:null,motherName:e.mother?e.mother:null,slug:t},n=[].concat(Object(b.a)(l),[a]);c(n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"People Table"))),r.a.createElement("section",{className:"section"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"query"},r.a.createElement("input",{value:N,id:"query",onChange:function(e){var t=e.target.value;O(t),S(t)},className:"input__search",type:"text",name:"query",placeholder:"Search"}))),r.a.createElement("div",null,"/people/new"===s.pathname?r.a.createElement(k,{people:l,onAddPerson:F}):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{to:{pathname:"/people/new",search:i.toString()}},r.a.createElement("button",{type:"button",className:"button__form "},"Add Person")),r.a.createElement(m.b,{path:"/people/new",exact:!0},r.a.createElement(k,{people:l,onAddPerson:F}))))),l.length&&r.a.createElement(y,{people:C,personId:E}))}),P=(a(53),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/people",component:B}),r.a.createElement(m.b,{path:"/",exact:!0,component:s}),r.a.createElement(m.a,{path:"/home",to:"/"}),r.a.createElement(i,null)))});c.a.render(r.a.createElement(o.a,null,r.a.createElement(P,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.8f7c60ba.chunk.js.map