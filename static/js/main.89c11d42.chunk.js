(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,,,,,function(e,t,n){},,function(e,t,n){e.exports={form:"Form_form__1yEA-"}},function(e,t,n){e.exports={submitBtn:"Button_submitBtn__1Z9dp"}},function(e,t,n){e.exports={h1:"SectionH1_h1__3lB5n"}},function(e,t,n){e.exports={contact:"Contacts_contact__1nvHe"}},function(e,t,n){e.exports={h2:"SectionH2_h2__35p2m"}},,,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(8),i=n.n(r),o=(n(19),n(14)),s=n(3),u=n(26),l=(n(20),n(9)),b=n.n(l),d=n(10),j=n.n(d),m=n(0);function f(e){var t=e.type,n=e.text;return Object(m.jsx)("button",{className:j.a.submitBtn,type:t,children:n})}var h=n(7),O=n.n(h);function x(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{className:O.a.nameLabel,children:["Name",Object(m.jsx)("input",{className:O.a.inputField,onChange:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:t})]})}function p(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{className:"nameLabel",children:["Number",Object(m.jsx)("input",{onChange:n,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:t})]})}function v(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),l=u[0],d=u[1],j=function(){i(""),d("")},h=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":d(a);break;default:return}};return Object(m.jsxs)("form",{className:b.a.form,name:"addContact",onSubmit:function(e){e.preventDefault(),t({name:r,number:l}),j()},children:[Object(m.jsx)(x,{value:r,onChange:h,name:"name"}),Object(m.jsx)(p,{value:l,onChange:h,name:"number"}),Object(m.jsx)(f,{type:"submit",text:"Add contact"})]})}var C=n(11),g=n.n(C);function y(e){var t=e.title,n=e.children;return Object(m.jsxs)("section",{children:[Object(m.jsx)("h1",{className:g.a.h1,children:t}),Object(m.jsx)("div",{children:n})]})}var S=n(2),_=n.n(S),k=n(12),N=n.n(k);function w(e){var t=e.type,n=e.text,a=e.id,c=e.onClick;return Object(m.jsx)("button",{type:t,onClick:function(){return c(a)},children:n})}function L(e){var t=e.contactsList,n=e.onDeleteContact;return Object(m.jsx)("ul",{children:t.map((function(e){return Object(m.jsxs)("li",{className:N.a.contact,children:[e.name,": ",e.number," ",Object(m.jsx)(w,{type:"button",text:"Delete",id:e.id,onClick:n})]},e.id)}))})}w.propTypes={contactsList:_.a.arrayOf(_.a.shape({key:_.a.string.isRequired,type:_.a.string.isRequired,text:_.a.string.isRequired,id:_.a.string.isRequired,onClick:_.a.func})),onDeleteContact:_.a.func};var A=n(13),B=n.n(A);function q(e){var t=e.title,n=e.children;return Object(m.jsxs)("section",{children:[Object(m.jsx)("h2",{className:B.a.h2,children:t}),Object(m.jsx)("div",{children:n})]})}function D(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{children:["Find contacts by name",Object(m.jsx)("input",{name:"filter",type:"text",onChange:n,value:t})]})}var E=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];function J(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),i=Object(s.a)(r,2),l=i[0],b=i[1];Object(a.useEffect)((function(){var e;c(null!==(e=JSON.parse(localStorage.getItem("contacts")))&&void 0!==e?e:E)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var d=l.toLowerCase(),j=n.filter((function(e){return e.name.toLowerCase().includes(d)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y,{title:"Phonebook",children:Object(m.jsx)(v,{onSubmit:function(e){var t=e.name,a={name:t,number:e.number,id:Object(u.a)()};n.map((function(e){return e.name.toLowerCase()})).includes(t.toLowerCase())?alert("".concat(t," is already in contacts.")):c((function(e){return[].concat(Object(o.a)(e),[a])}))}})}),Object(m.jsxs)(q,{title:"Contacts",children:[Object(m.jsx)(D,{value:l,onChange:function(e){var t=e.target.value;b(t)}}),Object(m.jsx)(L,{contactsList:j,onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})]})}i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(J,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.89c11d42.chunk.js.map