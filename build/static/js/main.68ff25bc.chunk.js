(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(15),a=t.n(r),o=t(6),i=t(3),u=t(4),s=t.n(u),d="/api/persons",j=function(){return s.a.get(d).then((function(e){return e.data}))},l=function(e){return s.a.post(d,e).then((function(e){return e.data}))},b=function(e,n){return s.a.put("".concat(d,"/").concat(n),e).then((function(e){return e.data}))},h=function(e){return s.a.delete("".concat(d,"/").concat(e)).then((function(e){return e}))},f=t(0),m=function(e){var n=e.value,t=e.onChange;return Object(f.jsx)("form",{children:Object(f.jsxs)("div",{children:["Filter shown with: ",Object(f.jsx)("input",{value:n,onChange:t}),console.log()]})})},O=function(e){var n=e.addPerson,t=e.newName,c=e.handleNameChange,r=e.newNumber,a=e.handleNumberChange;return Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{children:["name: ",Object(f.jsx)("input",{value:t,onChange:c})]}),Object(f.jsxs)("div",{children:["number: ",Object(f.jsx)("input",{value:r,onChange:a})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"add"})})]})},v=function(e){var n=e.handleDeleteClick,t=e.id;return Object(f.jsx)("button",{onClick:function(){return n(t)},children:"Delete"})},g=function(e){var n=e.persons,t=e.handleDeleteClick;return Object(f.jsx)("div",{children:n.map((function(e){return Object(f.jsxs)("p",{children:[e.name," ",e.number,Object(f.jsx)(v,{id:e.id,handleDeleteClick:t})]},e.name)}))})},x=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),u=Object(i.a)(a,2),s=u[0],d=u[1],v=Object(c.useState)(""),x=Object(i.a)(v,2),p=x[0],w=x[1],C=Object(c.useState)(""),k=Object(i.a)(C,2),y=k[0],N=k[1],S=Object(c.useState)(""),D=Object(i.a)(S,2),P=D[0],T=D[1],A=Object(c.useState)(""),B=Object(i.a)(A,2),E=B[0],J=B[1];Object(c.useEffect)((function(){j().then((function(e){return r(e)}))}),[]);var L=y?t.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())})):t,z=function(e){var n=e.message,t={color:e.color,background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return""===n?null:Object(f.jsx)("div",{style:t,children:n})},F=function(e){var n=e.message;return Object(f.jsx)(z,{message:n,color:"green"})},I=function(e){var n=e.message;return Object(f.jsx)(z,{message:n,color:"red"})};return Object(f.jsxs)("div",{children:[Object(f.jsx)(F,{message:P}),Object(f.jsx)(I,{message:E}),Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(m,{value:y,onChange:function(e){N(e.target.value)}}),Object(f.jsx)("h2",{children:"Add new person"}),Object(f.jsx)(O,{addPerson:function(e){if(e.preventDefault(),t.some((function(e){return e.name===s}))){var n=t.filter((function(e){return e.name===s}))[0];if(window.confirm("".concat(s," already exists in the phonebook, do you want to replace the old number with a new"))){var c=Object(o.a)(Object(o.a)({},n),{},{number:p});b(c,n.id).then((function(e){r(t.map((function(t){return t.id!==n.id?t:e}))),d(""),w(""),T("Updated ".concat(n.name)),setTimeout((function(){T("")}),5e3)})).catch((function(){J("".concat(n.name," has already been removed from the server")),setTimeout((function(){J("")}),5e3),r(t.filter((function(e){return e.id!==n.id})))}))}}else{var a={name:s,number:p};l(a).then((function(e){r(t.concat(e)),d(""),w(""),T("Added ".concat(a.name)),setTimeout((function(){T("")}),5e3)}))}},newName:s,handleNameChange:function(e){d(e.target.value)},newNumber:p,handleNumberChange:function(e){w(e.target.value)}}),Object(f.jsx)("h2",{children:"Numbers"}),Object(f.jsx)(g,{persons:L,handleDeleteClick:function(e){var n=t.filter((function(n){return n.id===e}))[0].name;window.confirm("Do you want to delete ".concat(n))&&h(e).then((function(){r(t.filter((function(n){return n.id!==e})))}))}})]})};a.a.render(Object(f.jsx)(x,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.68ff25bc.chunk.js.map