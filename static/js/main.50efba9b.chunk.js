/*! For license information please see main.50efba9b.chunk.js.LICENSE.txt */
(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(9),i=a.n(l),r=(a(15),a(7)),s=a(3),u=a(2),d=(a(16),a(17),a(18),a(0)),o=function(e){var t=new Intl.DateTimeFormat("en-gb",{month:"long",year:"numeric",day:"numeric"}).format(e.date).split(" "),a=Object(u.a)(t,3),n=a[0],c=a[1],l=a[2];return Object(d.jsxs)("div",{className:"expense-date",children:[Object(d.jsx)("div",{className:"expense-date__month",children:c}),Object(d.jsx)("div",{className:"expense-date__day",children:n}),Object(d.jsx)("div",{className:"expense-date__year",children:l})]})};o.defaultProps={date:new Date};a(20);function j(e){return Object(d.jsx)("div",{className:"card ".concat(e.className),children:e.children})}var b=function(e){return Object(d.jsxs)(j,{className:"expense-item ",children:[Object(d.jsx)(o,{date:e.date}),Object(d.jsxs)("div",{className:"expense-item__description ",children:[Object(d.jsx)("h2",{children:e.title}),Object(d.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})};b.defaultProps={date:new Date,title:"Home Loan",amount:"$500.0"};a(21),a(22);var x=function(e){return Object(d.jsx)("div",{className:"expenses-filter",children:Object(d.jsxs)("div",{className:"expenses-filter__control",children:[Object(d.jsx)("label",{children:"Filter by year"}),Object(d.jsxs)("select",{onChange:e.filterHandler,children:[Object(d.jsx)("option",{value:"",children:"All"}),Object(d.jsx)("option",{value:"2022",children:"2022"}),Object(d.jsx)("option",{value:"2021",children:"2021"}),Object(d.jsx)("option",{value:"2020",children:"2020"}),Object(d.jsx)("option",{value:"2019",children:"2019"})]})]})})},m=a(10);a(23),a(24);function O(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(d.jsxs)("div",{className:"chart-bar",children:[Object(d.jsx)("div",{className:"chart-bar__inner",children:Object(d.jsx)("div",{style:{height:t},className:"chart-bar__fill"})}),Object(d.jsx)("div",{className:"chart-bar__label",children:e.label})]})}function h(e){return Object(d.jsx)("div",{className:"chart",children:e.dataSet.map((function(t){return Object(d.jsx)(O,{label:t.label,value:t.value,maxValue:e.max},t.label)}))})}function v(e){var t,a=e.data.map((function(e){return e.amount})),n=Math.round(Math.max.apply(Math,Object(r.a)(a))),c=[{label:"Jan",value:0},{label:"Fab",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],l=Object(m.a)(e.data);try{for(l.s();!(t=l.n()).done;){var i=t.value;c[i.date.getMonth()].value+=i.amount}}catch(s){l.e(s)}finally{l.f()}return Object(d.jsx)(h,{dataSet:c,max:n})}function p(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],i=e.data.filter((function(e){return e.date.getFullYear().toString().includes("".concat(c))}));return Object(d.jsxs)(j,{className:"expenses",children:[Object(d.jsx)(x,{filterHandler:function(e){var t=e.target.value;l(t)}}),Object(d.jsx)(v,{data:i}),i[0]?i.map((function(e){return Object(d.jsx)(b,{date:e.date,title:e.title,amount:e.amount},e.id)})):Object(d.jsx)("p",{children:"No Expenses Found"})]})}a(25);var f=a(6);a(26);function N(e){var t=Object(n.useState)({title:"",amount:"",date:""}),a=Object(u.a)(t,2),c=a[0],l=a[1];function i(e){l((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(f.a)({},e.target.name,e.target.value))}))}return Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=Object(s.a)(Object(s.a)({},c),{},{date:new Date(c.date)});e.onSaveHandler(a),l({title:"",amount:"",date:""}),e.hideForm()},children:[Object(d.jsxs)("div",{className:"new-expense__controls",children:[Object(d.jsxs)("div",{className:"new-expense__control",children:[Object(d.jsx)("label",{htmlFor:"title",children:"Title"}),Object(d.jsx)("input",{required:!0,value:c.title,onChange:i,name:"title",type:"text",id:"title"})]}),Object(d.jsxs)("div",{className:"new-expense__control",children:[Object(d.jsx)("label",{htmlFor:"amount",children:"Amount"}),Object(d.jsx)("input",{required:!0,onChange:i,name:"amount",type:"number",id:"amount",value:c.amount,min:"0.01",step:"0.01"})]}),Object(d.jsxs)("div",{className:"new-expense__control",children:[Object(d.jsx)("label",{htmlFor:"date",children:"Date"}),Object(d.jsx)("input",{required:!0,onChange:i,name:"date",type:"date",value:c.date,id:"date",min:"2019-01-01",max:"2022-12-31"})]})]}),Object(d.jsx)("div",{className:"new-expense__actions",children:Object(d.jsx)("button",{type:"submit",children:"Add Expense"})})]})}function _(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],l=a[1];function i(){l(!c)}return Object(d.jsx)("div",{className:"new-expense",children:c?Object(d.jsx)(N,{onSaveHandler:e.onSaveHandler,hideForm:i}):Object(d.jsx)("button",{onClick:i,children:"New Expenses"})})}var g=function(){var e=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],t=Object(n.useState)(e),a=Object(u.a)(t,2),c=a[0],l=a[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(_,{onSaveHandler:function(e){e=Object(s.a)(Object(s.a)({},e),{},{id:(10*Math.random()).toString()}),l((function(t){return[e].concat(Object(r.a)(t))}))}}),Object(d.jsx)(p,{data:c})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),l(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),w()}],[[27,1,2]]]);
//# sourceMappingURL=main.50efba9b.chunk.js.map