(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c,a,r=n(1),o=n.n(r),s=n(24),i=n.n(s),u=n(13),l=n(2),j=(n(31),n(3)),d=n.n(j),b=n(17),f=n(7),O=n(6),h=Object(r.createContext)({state:{notes:[]},actions:{createNote:function(){},updateNote:function(e){console.log("The updateNote function isn't working")},deleteNote:function(){}}}),p=null!==(c=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_HOST)&&void 0!==c?c:"http://localhost",v=null!==(a=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_PORT)&&void 0!==a?a:4e3,m="".concat(p,":").concat(v),x=n(0),N=function(e){var t=e.children,n=Object(r.useState)([]),c=Object(O.a)(n,2),a=c[0],o=c[1],s=Object(l.f)();Object(r.useEffect)((function(){fetch("".concat(m,"/notes"),{method:"GET",credentials:"include"}).then((function(e){return 401===e.status&&s.push("/login"),e.json()})).then((function(e){o(e)}))}),[]);var i=function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:"",contents:""},e.next=3,fetch("".concat(m,"/notes"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return o([e].concat(Object(b.a)(a))),e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(f.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("updating"),e.next=3,fetch("".concat(m,"/notes/").concat(t.id),{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:n=e.sent,console.log(n),e.t0=n.status,e.next=400===e.t0?8:401===e.t0?10:200===e.t0?12:15;break;case 8:return console.log("Update Note: Bad Request"),e.abrupt("break",15);case 10:return console.log("Update Note: Note was not found"),e.abrupt("break",15);case 12:return c=a.map((function(e){return t.id===e.id?t:e})),o(Object(b.a)(c)),e.abrupt("break",15);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={state:{notes:a},actions:{createNote:i,updateNote:u,deleteNote:function(){var e=Object(f.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("deleting note"),e.next=3,fetch("".concat(m,"/notes/").concat(t.id),{method:"DELETE",credentials:"include"});case 3:n=e.sent,console.log(n),e.t0=n.status,e.next=400===e.t0?8:404===e.t0?10:200===e.t0?12:18;break;case 8:return console.log("Delete Note: Invalid request (Note ID)"),e.abrupt("break",18);case 10:return console.log("Delete Note: Note was not found"),e.abrupt("break",18);case 12:return console.log("Note successfully deleted"),c=(c=a).filter((function(e){return e.id!==t.id})),console.log(c),o(Object(b.a)(c)),e.abrupt("break",18);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}};return Object(x.jsx)(h.Provider,{value:j,children:t})},_=(n(38),n(39),n(5)),g=n(11);n(40);var S=function(e){var t=e.className,n=e.text,c=Object(g.a)(e,["className","text"]);return Object(x.jsx)("button",Object(_.a)(Object(_.a)({className:"Button ".concat(t)},c),{},{children:n}))};n(41);var C=function(e){var t=e.className,n=Object(g.a)(e,["className"]);return Object(x.jsx)("input",Object(_.a)({className:"Input ".concat(t)},n))};var T=function(e){var t=e.className,n=e.onSubmit,c=e.submitText,a=void 0===c?"submit":c,o=Object(r.useState)(""),s=Object(O.a)(o,2),i=s[0],u=s[1],l=Object(r.useState)(""),j=Object(O.a)(l,2),d=j[0],b=j[1];return Object(x.jsxs)("form",{className:"Form ".concat(t),autoComplete:"off",noValidate:!0,onSubmit:function(e){e.preventDefault(),!n||n({email:i,password:d})},children:[Object(x.jsx)("label",{htmlFor:"email",className:"Form__Label",children:"email"}),Object(x.jsx)(C,{name:"email",className:"Form__Input",value:i,onChange:function(e){u(e.currentTarget.value)}}),Object(x.jsx)("label",{htmlFor:"password",className:"Form__Label Form__Label--password",children:"password"}),Object(x.jsx)(C,{type:"password",name:"password",className:"Form__Input",value:d,onChange:function(e){b(e.currentTarget.value)}}),Object(x.jsx)(S,{className:"Form__Button",text:a.toLowerCase()})]})};var k=function(){var e=Object(l.f)();Object(r.useEffect)((function(){var e=!0;return e&&function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/session"),{method:"DELETE"});case 2:t=e.sent,e.t0=t.status,e.next=200===e.t0?6:7;break;case 6:return e.abrupt("break",7);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){e=!1}}));var t=function(){var t=Object(f.a)(d.a.mark((function t(n){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(m,"/session"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)});case 2:c=t.sent,t.t0=c.status,t.next=401===t.t0?6:200===t.t0?8:11;break;case 6:return console.log("invalid input"),t.abrupt("break",11);case 8:return console.log("redirecting to notes"),e.push("/"),t.abrupt("break",11);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"Login",children:[Object(x.jsx)(T,{className:"Login__Form",onSubmit:t}),Object(x.jsxs)("p",{className:"Login__Paragraph",children:["not a user yet? ",Object(x.jsx)("br",{})," register an account"," ",Object(x.jsx)("a",{href:"/register",children:Object(x.jsx)("b",{children:"here"})}),"."]})]})};n(42),n(43);var w=function(e){var t=Object(l.f)(),n=function(){var e=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/session"),{method:"DELETE",credentials:"include"});case 2:switch(e.sent.status){case 200:console.log("logout"),t.push("/login")}case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("header",{className:"Header",children:[Object(x.jsx)(S,{text:"logout",className:"Header__Button",onClick:n}),Object(x.jsx)("h1",{className:"Header__Title",children:"simple notes"}),Object(x.jsx)("span",{className:"Header__Circle Header__Circle--Dark"}),Object(x.jsx)("span",{className:"Header__Circle Header__Circle--Medium"}),Object(x.jsx)("span",{className:"Header__Circle Header__Circle--Light"})]})})};n(44);var y=function(e){var t=e.searchQuery,n=e.setSearchQuery,c=Object(g.a)(e,["searchQuery","setSearchQuery"]);return Object(x.jsxs)("div",{className:"SearchBar ".concat(c.className),children:[Object(x.jsx)("img",{className:"SearchBar__Icon",src:"searchIcon.svg",alt:""}),Object(x.jsx)(C,Object(_.a)(Object(_.a)({},c),{},{value:t,onChange:function(e){return n(e.currentTarget.value)},placeholder:"search for notes",className:"SearchBar__Input"}))]})},E=Object(r.createContext)({state:{},actions:{openNoteModal:function(e){}}});var L=function(){return Object(r.useContext)(E)};var F=function(){return Object(r.useContext)(h)};n(45);var I=function(e){var t=F().actions.createNote,n=L().actions.openNoteModal,c=function(){var e=Object(f.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:(c=e.sent)&&n(c);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)("button",Object(_.a)(Object(_.a)({},e),{},{className:"AddNoteButton ".concat(e.className),onClick:c,children:Object(x.jsx)("img",{className:"AddNoteButon__Icon",src:"plusIcon.svg",alt:""})}))};n(46);var B=function(e){var t=L().actions.openNoteModal;return Object(x.jsxs)("div",{className:"Note",onClick:function(){return t(e.note)},children:[Object(x.jsx)("h1",{className:"Note__Title",children:e.note.title}),Object(x.jsx)("div",{className:"Note__Contents",children:e.note.contents})]})};n(47);var P=function(e){var t=F().state.notes,n=Object(r.useState)([]),c=Object(O.a)(n,2),a=c[0],o=c[1];Object(r.useEffect)((function(){o(s(t,e.searchQuery))}),[t,e.searchQuery]);var s=function(e,t){return t?e.filter((function(e){var n=e.title.toLowerCase(),c=e.contents.toLowerCase();return n.includes(t)||c.includes(t)})):e};return Object(x.jsx)("section",{className:"NotesGrid",children:0!==a.length?a.map((function(e){return Object(x.jsx)(B,{note:e},e.id)})):Object(x.jsx)("p",{children:"Seems like there's nothing here..."})})};var D=function(){var e=Object(r.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(x.jsxs)("div",{className:"Notes",children:[Object(x.jsx)(w,{}),Object(x.jsxs)("main",{children:[Object(x.jsx)(y,{className:"Notes__SearchBar",searchQuery:n,setSearchQuery:c}),Object(x.jsx)(P,{searchQuery:n}),Object(x.jsx)(I,{className:"Notes__AddNoteButton"})]})]})},H=n(26),R=n.n(H);n(48);var M=function(e){return Object(x.jsx)("div",{className:"IconButton",onClick:e.onClick,children:Object(x.jsx)("img",{className:"IconButton__Icon",src:e.iconPath,alt:e.alt})})},A=(n(49),function(e){return Object(x.jsx)("div",{className:"IconButtonBar",children:e.children})});n(50);var Q=function(e){var t,n,c,a,o=e.setShow,s=Object(g.a)(e,["setShow"]),i=Object(r.useState)((null===(t=s.note)||void 0===t?void 0:t.title)||""),u=Object(O.a)(i,2),l=u[0],j=u[1],d=Object(r.useState)((null===(n=s.note)||void 0===n?void 0:n.contents)||""),b=Object(O.a)(d,2),f=b[0],h=b[1],p=Object(r.useRef)(null),v=Object(r.useRef)(null),m=F().actions,N=m.updateNote,C=m.deleteNote;c=v,a=k,Object(r.useEffect)((function(){function e(e){var t;c.current&&!(null===(t=c.current)||void 0===t?void 0:t.contains(e.target))&&a()}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[c,a]),function(e){Object(r.useEffect)((function(){var t=function(t){27===t.keyCode&&e()};return document.addEventListener("keydown",t,!1),function(){document.removeEventListener("keydown",t,!1)}}),[e])}(k),Object(r.useEffect)((function(){var e,t;j((null===(e=s.note)||void 0===e?void 0:e.title)||""),h((null===(t=s.note)||void 0===t?void 0:t.contents)||"")}),[s.note]);var T=Object(r.useCallback)(R()((function(e){return N(e)}),3e3,{maxWait:3e3}),[]);function k(){console.log("closing"),s.note&&N(Object(_.a)(Object(_.a)({},s.note),{},{title:l,contents:f})),o(!1)}return Object(r.useEffect)((function(){s.note&&T(Object(_.a)(Object(_.a)({},s.note),{},{contents:f,title:l}))}),[f,s.note,l]),Object(x.jsx)("div",Object(_.a)(Object(_.a)({},s),{},{className:"NoteModal",ref:p,children:Object(x.jsxs)("div",{className:"NoteModal__Container",ref:v,children:[Object(x.jsxs)("main",{className:"NoteModal__Note",children:[Object(x.jsx)("input",{type:"text",placeholder:"Title",value:l,onChange:function(e){return j(e.currentTarget.value)},className:"NoteModal__Title"}),Object(x.jsx)("textarea",{name:"",placeholder:"Contents",value:f,onChange:function(e){return h(e.currentTarget.value)},className:"NoteModal__Contents",spellCheck:!1})]}),Object(x.jsxs)("footer",{className:"NoteModal__Footer",children:[Object(x.jsx)(S,{text:"close",className:"NoteModal__CloseButton",onClick:k}),Object(x.jsx)(A,{children:Object(x.jsx)(M,{iconPath:"trashIcon.svg",alt:"delete",onClick:function(){C(s.note),k()}})})]})]})}))},U=function(e){var t=e.children,n=Object(r.useState)({id:"",title:"",contents:""}),c=Object(O.a)(n,2),a=c[0],o=c[1],s=Object(r.useState)(!1),i=Object(O.a)(s,2),u=i[0],l=i[1],j={state:{},actions:{openNoteModal:function(e){l(!0),o(e)}}};return Object(x.jsxs)(E.Provider,{value:j,children:[t,u&&Object(x.jsx)(Q,{note:a,setShow:l})]})},W=(n(51),function(e){var t=Object(l.f)(),n=function(){var e=Object(f.a)(d.a.mark((function e(n){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(m,"/users"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)});case 2:c=e.sent,e.t0=c.status,e.next=400===e.t0?6:200===e.t0?8:11;break;case 6:return console.log("invalid input"),e.abrupt("break",11);case 8:return console.log("redirecting to notes"),t.push("/login"),e.abrupt("break",11);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"Register",children:Object(x.jsx)(T,{className:"Register__Form",onSubmit:n,submitText:"register"})})});var J=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(u.a,{children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{path:"/login",children:Object(x.jsx)(k,{})}),Object(x.jsx)(l.a,{path:"/register",children:Object(x.jsx)(W,{})}),Object(x.jsx)(l.a,{path:"/",children:Object(x.jsx)(N,{children:Object(x.jsx)(U,{children:Object(x.jsx)(D,{})})})})]})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};i.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(J,{})}),document.getElementById("root")),K()}},[[52,1,2]]]);
//# sourceMappingURL=main.266240a1.chunk.js.map