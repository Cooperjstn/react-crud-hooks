(window["webpackJsonpreact-crud-hooks-app"]=window["webpackJsonpreact-crud-hooks-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(3),a(16),a(10)),s=a(1),m=a(2);a(4);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var i=function(e){var t=Object(n.useState)(e.currentUser),a=Object(s.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)(function(){l(e.currentUser)},[e]);var o=function(e){var t=e.target,a=t.name,n=t.value;l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},c,Object(m.a)({},a,n)))};return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updateUser(c.id,c)}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",value:c.name,onChange:o})),r.a.createElement("div",{className:"col"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",className:"form-control",name:"username",value:c.username,onChange:o})),r.a.createElement("div",{className:"col"},r.a.createElement("label",null,"Country"),r.a.createElement("input",{type:"text",className:"form-control",name:"country",value:c.country,onChange:o})),r.a.createElement("button",{className:"btn btn-light"},"Update user"),r.a.createElement("button",{onClick:function(){return e.setEditing(!1)},className:"btn btn-secondary"},"Cancel"))))};function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var d=function(e){var t={id:null,name:"",username:"",country:""},a=Object(n.useState)(t),c=Object(s.a)(a,2),l=c[0],o=c[1],u=function(e){var t=e.target,a=t.name,n=t.value;o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach(function(t){Object(m.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},l,Object(m.a)({},a,n)))};return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),l.name&&l.username&&l.country&&(e.addUser(l),o(t))}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"name",value:l.name,onChange:u})),r.a.createElement("div",{className:"col"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",className:"form-control",name:"username",value:l.username,onChange:u})),r.a.createElement("div",{className:"col"},r.a.createElement("label",null,"Country"),r.a.createElement("input",{type:"text",className:"form-control",name:"country",value:l.country,onChange:u}))),r.a.createElement("span",{class:"input-group-btn"},r.a.createElement("button",{className:"btn btn-outline-success btn-xs center",id:"form-btn"},"Add User"))))},E=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{class:"table-responsive"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Username"),r.a.createElement("th",{scope:"col"},"Country"),r.a.createElement("th",{scope:"col"},"Actions"))),r.a.createElement("tbody",null,e.users.length>0?e.users.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.username),r.a.createElement("td",null,t.country),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){e.editRow(t)},className:"btn btn-info"},"Edit"),r.a.createElement("button",{onClick:function(){return e.deleteUser(t.id)},className:"btn btn-danger"},"Delete")))}):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:3},"No users"))))))},p=a(9),f=a.n(p),y=function(){var e=Object(n.useState)([{id:1,name:"Liza",username:"beatudown",country:"Canada"},{id:2,name:"Darren",username:"kickhighaimlow",country:"USA"},{id:3,name:"Keiko",username:"thousandfists",country:"Japan"},{id:4,name:"Cameron",username:"norest4weary",country:"UK"}]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),m=Object(s.a)(l,2),u=m[0],b=m[1],p=Object(n.useState)({id:null,name:"",username:"",country:""}),y=Object(s.a)(p,2),v=y[0],O=y[1];return r.a.createElement(f.a,null,r.a.createElement("div",{className:"top"}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title text-center"},"React w/Hooks CRUD App"),r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"flex-large"},u?r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:"tabletitle"},"Edit user"),r.a.createElement(i,{editing:u,setEditing:b,currentUser:v,updateUser:function(e,t){b(!1),c(a.map(function(a){return a.id===e?t:a}))}})):r.a.createElement(n.Fragment,null,r.a.createElement("h2",{className:"tabletitle"},"Add User"),r.a.createElement(d,{addUser:function(e){e.id=a.length+1,c([].concat(Object(o.a)(a),[e]))}}))),r.a.createElement("div",{className:"flex-large vw"},r.a.createElement("h2",{className:"tabletitle"},"View Users"),r.a.createElement(E,{users:a,editRow:function(e){b(!0),O({id:e.id,name:e.name,username:e.username,country:e.country})},deleteUser:function(e){c(a.filter(function(t){return t.id!==e}))}})))))};l.a.render(r.a.createElement(y,null),document.getElementById("root"))},3:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.4b7abcf6.chunk.js.map