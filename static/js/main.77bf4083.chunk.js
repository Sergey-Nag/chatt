(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{29:function(e,t,a){e.exports={time:"MessageBox_time__1amKO",system:"MessageBox_system__2871Y",message:"MessageBox_message__6lLNX",messageBox:"MessageBox_messageBox__1uNVV",right:"MessageBox_right__2tdT1",left:"MessageBox_left__2dMyd"}},31:function(e,t,a){e.exports={link:"ListCard_link__2li7z",row:"ListCard_row__R_5PR",time:"ListCard_time__uVD_M",name:"ListCard_name__3VpCW"}},37:function(e,t,a){e.exports={editor:"FormatTextEditor_editor__2v75u"}},38:function(e,t,a){e.exports={wrapp:"ChatLayout_wrapp__3MyNo"}},45:function(e,t,a){},47:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var c=a(7),n=a.n(c),s=a(35),r=a.n(s),i=a(24),o=(a(45),a(0)),l=a.n(o),u=a(4),j=a(8),b=a(12),d=(a(47),a(11)),O=a(15),m=a(2),h=a(5),f=a(17),x=function e(t,a){var c,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;(Object(m.a)(this,e),"object"===typeof t)?(t.text=t.textMarkup?t.text.trim():t.textMarkup=t.text.trim(),this.from=t.from,this.text=t.text,this.textMarkup=t.textMarkup.trim(),this.timestamp=null!==(c=t.timestamp)&&void 0!==c?c:Date.now()):(a=n?a.trim():n=a.trim(),this.from=t,this.text=a,this.textMarkup=n.trim(),this.timestamp=null!==s&&void 0!==s?s:Date.now())},v=function(){function e(t){Object(m.a)(this,e),this._app=t}return Object(h.a)(e,[{key:"_getDb",value:function(){return Object(f.c)(this._app)}},{key:"_getDbRef",value:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return f.j.apply(void 0,[this._getDb()].concat(t))}},{key:"getData",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=this._getDbRef(),e.next=4,Object(f.b)(Object(f.a)(a,t));case 4:return c=e.sent,e.abrupt("return",c.val());case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"writeData",value:function(e,t){try{var a=this._getDb();Object(f.l)(Object(f.j)(a,e),t)}catch(c){return null}}},{key:"listenData",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=a.limit,n=void 0===c?null:c,s=this._getDbRef(e),r=n?Object(f.i)(s,Object(f.g)(),Object(f.d)(n)):Object(f.i)(s);return Object(f.f)(r,(function(e){return t(e.val())})),function(){return Object(f.e)(s)}}},{key:"updateData",value:function(){var e=Object(u.a)(l.a.mark((function e(t,a){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=this._getDbRef(t),e.next=3,Object(f.k)(c,a);case 3:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"createChatBetween",value:function(e,t){var a=Date.now(),c=a.toString(36),n=new x("system","chat created");return this.writeData("chatsMeta/".concat(c),{chatBetween:[e,t],createdAt:a,lastMessage:n}),this.pushMessageToChat(c,n),this.updateData("users/".concat(e,"/chats"),this._addFieldToArr(c)),this.updateData("users/".concat(t,"/chats"),this._addFieldToArr(c)),c}},{key:"pushMessageToChat",value:function(e,t){var a=this;try{var c=this._getDbRef("chatsMessages/".concat(e)),n=Object(f.h)(c);Object(f.l)(n,t).then((function(){a.writeData("chatsMeta/".concat(e,"/lastMessage"),t)}))}catch(s){console.log(s)}}},{key:"_addFieldToArr",value:function(e){return function(t){return Array.isArray(t)&&!t.includes(e)?[].concat(Object(O.a)(t),[e]):Array.isArray(t)?void 0:[e]}}}]),e}(),p=new v,_=function(e){return p.updateData("users/".concat(e.nickname),(function(t){return Object(d.a)(Object(d.a)({},t),e)})),localStorage.setItem("user",JSON.stringify(e)),{type:"auth",payload:e.nickname}},g={authState:localStorage.getItem("user")?2:0,user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,nickname:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).nickname:null},S=Object(c.createContext)(g),E=function(e,t){var a=t.type,c=t.payload;switch(a){case"auth":return Object(d.a)(Object(d.a)({},e),{},{nickname:c,authState:1});case"user/set":return Object(d.a)(Object(d.a)({},e),{},{user:c,authState:2});case"user/remove":return Object(d.a)(Object(d.a)({},e),{},{user:null,nickname:null,authState:0});default:return e}};function C(e,t){return t?Object.keys(e).map((function(t){return Object(d.a)(Object(d.a)({},e[t]),{},{key:t})})):Object.values(e)}var N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.filterCallback,n=void 0===a?null:a,s=t.startListen,r=void 0===s?null:s,i=t.limit,o=void 0===i?null:i,l=t.saveKey,u=void 0!==l&&l,b=Object(c.useState)(null),d=Object(j.a)(b,2),O=d[0],m=d[1];return Object(c.useEffect)((function(){if(null===r||r){var t=p.listenData(e,(function(e){if(null!==e){var t=e;n&&(t=C(t,u).filter(n)),m(t)}}),{limit:o});return function(){return t()}}}),[e,n,r,o,u]),[O]},T=a(27),y=function(e){var t=e.providerData,a=e.metadata,c=e.email;return Object(d.a)(Object(d.a)({},t[0]),{},{nickname:c.split("@")[0].replace(/\./g,""),lastLoginAt:a.lastLoginAt})},k=a(6);function D(){var e=Object(c.useContext)(S),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(c.useCallback)(Object(u.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(T.b)(),a=new T.a,e.prev=2,e.next=5,Object(T.c)(t,a);case 5:c=e.sent,n(_(y(c.user))),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),[n]);return Object(c.useEffect)((function(){document.title="Auth"}),[]),2===a.authState?Object(k.jsx)(b.a,{to:"/chat"}):Object(k.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"},children:Object(k.jsxs)("button",{onClick:s,className:"btn btn-primary btn-lg",children:[Object(k.jsx)("i",{className:"bi bi-google"})," ","Sign In"]})})}function A(e){var t=e.isAside,a=e.setAside,n=Object(c.useContext)(S),s=Object(j.a)(n,2),r=s[0].user,i=s[1],o=Object(c.useState)(!1),l=Object(j.a)(o,1)[0],u=Object(c.useMemo)((function(){return[r.photoURL,r.displayName]}),[r]),b=Object(j.a)(u,2),d=b[0],O=b[1];return Object(k.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("div",{className:"col-".concat(t?3:1," text-start"),children:Object(k.jsx)("button",{className:"navbar-toggler",type:"button",onClick:function(){return a(!t)},children:Object(k.jsx)("span",{className:"navbar-toggler-icon"})})}),Object(k.jsxs)("div",{className:"col d-flex justify-content-".concat(l?"between":"end"),children:[l&&Object(k.jsxs)("span",{className:"ms-2",children:[Object(k.jsx)("img",{src:l.profile_picture,alt:"",width:"30",height:"30",className:"d-inline-block align-text-top rounded"}),Object(k.jsx)("span",{className:"mx-3 align-middle",children:Object(k.jsx)("b",{children:l.username})})]}),Object(k.jsxs)("span",{className:"ms-5",children:[Object(k.jsx)("span",{className:"mx-3 align-middle",children:Object(k.jsx)("b",{children:O})}),Object(k.jsx)("img",{src:d,alt:"",width:"30",height:"30",className:"d-inline-block align-text-top rounded"}),Object(k.jsxs)("div",{className:"btn-group ms-3",children:[Object(k.jsx)("button",{className:"btn btn-sm dropdown-toggle",type:"button","data-bs-toggle":"dropdown",id:"settingsList","aria-expanded":"false",children:Object(k.jsx)("i",{className:"bi bi-gear"})}),Object(k.jsx)("ul",{className:"dropdown-menu dropdown-menu-end",children:Object(k.jsx)("li",{children:Object(k.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){return i((localStorage.removeItem("user"),{type:"user/remove"}))},children:"Logout"})})})]})]})]})]})})}var R=a(28),w=a.n(R),M=function(e){var t=w()(e),a=w()();return a.isAfter(t,"date")?a.to(t):t.format("HH:mm")},P=function(e){return w()(e).format("DD.MM.YY HH:mm")},L=a(31),I=a.n(L),H=a(23),B=a.n(H);function F(e){var t=e.photo,a=e.text,n=e.time,s=e.link,r=e.title,o=Object(c.useState)(M(n)),l=Object(j.a)(o,2),u=l[0],b=l[1];return Object(c.useEffect)((function(){b(M(n))}),[n]),Object(k.jsx)(i.b,{to:s,className:I.a.link,title:r,children:Object(k.jsx)("div",{className:"card ms-2 pe-3 mb-2",children:Object(k.jsxs)("div",{className:"row align-center flex-nowrap",children:[Object(k.jsx)("div",{className:"col-3 p-0",children:Object(k.jsx)("img",{src:t,className:"w-100 rounded-start",alt:""})}),Object(k.jsxs)("div",{className:"col d-flex justify-content-between align-self-center align-items-baseline overflow-hidden",children:[Object(k.jsx)("span",{className:B()(I.a.name,"col","text-start","system"===r&&I.a.time),children:a}),Object(k.jsx)("span",{className:B()(I.a.time,"col","text-end"),children:u})]})]})})})}function K(){var e,t=Object(c.useContext)(S),a=Object(j.a)(t,1)[0].user,n=N("users",{filterCallback:Object(c.useCallback)((function(e){var t=e.uid,c=e.chats;return t!==a.uid&&!c||c&&a.chats&&!(null===c||void 0===c?void 0:c.some((function(e){return a.chats.includes(e)})))}),[a])}),s=Object(j.a)(n,1)[0];return Object(k.jsxs)("div",{className:"bg-white py-3",children:[Object(k.jsxs)("span",{className:"text-muted",children:["Users: ",null!==(e=null===s||void 0===s?void 0:s.length)&&void 0!==e?e:0]}),s&&s.length>0&&s.map((function(e){var t=e.uid,a=e.nickname,c=e.displayName,n=e.photoURL,s=e.lastLoginAt;return Object(k.jsx)(F,{text:c,time:+s,photo:n,link:"new?user=".concat(a)},t)}))]})}function U(e){var t=e.chatId,a=e.nickname,n=N("chatsMeta/".concat(t)),s=Object(j.a)(n,1)[0],r=Object(c.useState)(null),i=Object(j.a)(r,2),o=i[0],b=i[1],d=Object(c.useMemo)((function(){var e,t=function(e){var t;return null!==(t=null===e||void 0===e?void 0:e.chatBetween.find((function(e){return e!==a})))&&void 0!==t?t:a};return[(null===s||void 0===s?void 0:s.lastMessage.from)||t(s),null===s||void 0===s?void 0:s.lastMessage.text,null!==(e=null===s||void 0===s?void 0:s.lastMessage.timestamp)&&void 0!==e?e:null===s||void 0===s?void 0:s.createdAt,t(s)]}),[s,a]),O=Object(j.a)(d,4),m=O[0],h=O[1],f=O[2],x=O[3];return Object(c.useEffect)((function(){Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.getData("users/".concat(x,"/photoURL"));case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})))()}),[x]),Object(k.jsx)(k.Fragment,{children:s&&Object(k.jsx)(F,{text:h||m,time:f,link:t,title:m,photo:null!==o&&void 0!==o?o:""})})}function W(){var e,t,a=Object(c.useContext)(S),n=Object(j.a)(a,1)[0].user;return Object(k.jsxs)("div",{className:"bg-white h-100 py-3",children:[Object(k.jsxs)("span",{className:"text-muted",children:["Chats: ",null!==(e=null===(t=n.chats)||void 0===t?void 0:t.length)&&void 0!==e?e:0]}),n.chats&&n.chats.map((function(e){return Object(k.jsx)(U,{chatId:e,nickname:n.nickname},e)}))]})}function V(){return Object(k.jsxs)("div",{className:"py-3 text-start",children:[Object(k.jsx)(K,{}),Object(k.jsx)("hr",{className:"m-0"}),Object(k.jsx)(W,{})]})}function J(){var e=Object(c.useState)(!0),t=Object(j.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){document.title="Chat"}),[]),Object(k.jsxs)("div",{children:[Object(k.jsx)(A,{isAside:a,setAside:n}),Object(k.jsx)("div",{className:"container",style:{height:"calc(100vh - 56px)"},children:Object(k.jsxs)("div",{className:"row h-100",children:[a&&Object(k.jsx)("div",{className:"col-3 h-100",children:Object(k.jsx)(V,{})}),Object(k.jsx)("div",{className:"col h-100",children:Object(k.jsx)(b.b,{})})]})})]})}function Y(){var e=Object(c.useContext)(S);return 0===Object(j.a)(e,1)[0].authState?Object(k.jsx)(b.a,{to:"/auth"}):Object(k.jsx)(b.b,{})}var z=a(36);function G(){var e=Object(b.g)().search,t=Object(c.useState)(null),a=Object(j.a)(t,2),n=a[0],s=a[1],r=Object(c.useMemo)((function(){return new URLSearchParams(e).get("user")}),[e]),i=Object(z.useContext)(S),o=Object(j.a)(i,1)[0].user;return Object(c.useEffect)((function(){r&&s(p.createChatBetween(o.nickname,r))}),[o,r]),n&&Object(k.jsx)(b.a,{to:"/chat/"+n,replace:!0})}var X=a(37),q=a.n(X);function Q(e){var t=e.label,a=e.onChange,n=e.isClear,s=e.onEnterHotKey,r=Object(c.useRef)(null),i=Object(c.useCallback)((function(e){var t=e.target,c=e.shiftKey,n=e.keyCode,r=t.textContent,i=t.innerHTML;a({textContent:r,innerHTML:i}),c||13!==n||s()}),[a,s]);return Object(c.useEffect)((function(){r.current.innerHTML=""}),[n]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{ref:r,role:"textbox",contentEditable:!0,className:B()("form-control perfect-scroll",q.a.editor),onKeyUp:i}),Object(k.jsx)("label",{children:t})]})}function Z(e){var t=e.chatId,a=Object(c.useContext)(S),n=Object(j.a)(a,1)[0].user,s=Object(c.useState)(""),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(c.useState)(""),u=Object(j.a)(l,2),b=u[0],d=u[1],O=Object(c.useState)(!1),m=Object(j.a)(O,2),h=m[0],f=m[1],v=Object(c.useCallback)((function(){if(n&&i&&b){var e=new x(n.nickname,i,b);p.pushMessageToChat(t,e),f(!h)}}),[t,n,b,i,h]),_=Object(c.useCallback)((function(){v(i),o("")}),[i,v]),g=Object(c.useCallback)((function(e){var t=e.textContent,a=e.innerHTML;o(t),d(a)}),[]);return Object(k.jsxs)("div",{className:"p-3",children:[Object(k.jsx)("div",{className:"form-floating",children:Object(k.jsx)(Q,{label:"Your message",onChange:g,isClear:h,onEnterHotKey:_})}),Object(k.jsx)("div",{className:"form-group",children:Object(k.jsxs)("div",{className:"row pt-3",children:[Object(k.jsx)("div",{className:"col-7 text-start",children:Object(k.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic outlined example"})}),Object(k.jsx)("div",{className:"col-5 d-grid",children:Object(k.jsx)("button",{className:"btn btn-primary",onClick:_,children:"Send"})})]})})]})}var $=a(38),ee=a.n($),te=a(29),ae=a.n(te);function ce(e){var t=e.markup,a=e.from,n=e.isUser,s=e.time,r=e.setLastMsg,i=Object(c.useState)(P(s)),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(c.useEffect)((function(){u("system"===a?P(s):function(e){var t=w()(e),a=w()();return t.isAfter(a,"date")?t.format("DD.MM HH:mm"):t.format("HH:mm")}(s))}),[a,s]),Object(k.jsxs)("div",{className:"d-flex m-3 justify-content-".concat(n?"end":"start"),ref:function(e){return r(e)},children:["system"===a&&Object(k.jsx)("div",{title:l,className:ae.a.system,children:t}),"system"!==a&&Object(k.jsx)("div",{className:B()(ae.a.messageBox,ae.a[n?"right":"left"],"card px-3 p-2"),children:Object(k.jsx)("div",{className:"row",children:Object(k.jsxs)("div",{className:B()("col",n?"text-end":"text-start"),children:[Object(k.jsx)("p",{className:ae.a.message,dangerouslySetInnerHTML:{__html:t}}),Object(k.jsx)("span",{className:B()("text-secondary",ae.a.time),children:l})]})})})]})}function ne(e){var t=e.messages,a=Object(c.useContext)(S),n=Object(j.a)(a,1)[0].user,s=Object(c.useState)([]),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(c.useState)(null),u=Object(j.a)(l,2),b=u[0],d=u[1];return Object(c.useEffect)((function(){t&&o(C(t).map((function(e){return new x(e)})))}),[t]),Object(c.useEffect)((function(){b&&b.scrollIntoView({behavior:"smooth"})}),[b]),Object(k.jsx)("div",{className:"flex-grow-1 overflow-auto bg-light perfect-scroll",children:i&&i.map((function(e){return Object(k.jsx)(ce,{markup:e.textMarkup,from:e.from,isUser:e.from===n.nickname,time:e.timestamp,setLastMsg:d},e.timestamp)}))})}function se(){var e=Object(b.i)().chatId,t=N("chatsMessages/".concat(e),{limit:50}),a=Object(j.a)(t,1)[0];return Object(k.jsxs)("div",{className:ee.a.wrapp,children:[Object(k.jsx)(ne,{messages:a}),Object(k.jsx)(Z,{chatId:e})]})}function re(){return Object(k.jsx)("div",{className:"d-flex justify-content-center align-items-center h-100 text-muted bg-light",children:Object(k.jsx)("h1",{children:"Choose a chat"})})}var ie=function(){var e=Object(c.useReducer)(E,g),t=Object(j.a)(e,2),a=t[0],n=t[1],s=N("/users/".concat(a.nickname),{startListen:0!==a.authState}),r=Object(j.a)(s,1)[0],i=Object(c.useCallback)(function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:a=e.sent,n(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(c.useEffect)((function(){r&&n({type:"user/set",payload:r})}),[r]),Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(S.Provider,{value:[a,n,i],children:Object(k.jsxs)(b.e,{children:[Object(k.jsx)(b.c,{index:!0,element:r?Object(k.jsx)(b.a,{to:"chat"}):Object(k.jsx)(b.a,{to:"auth"})}),Object(k.jsx)(b.c,{path:"auth",element:Object(k.jsx)(D,{})}),Object(k.jsx)(b.c,{element:Object(k.jsx)(Y,{}),children:Object(k.jsxs)(b.c,{path:"chat",element:Object(k.jsx)(J,{}),children:[Object(k.jsx)(b.c,{index:!0,element:Object(k.jsx)(re,{})}),Object(k.jsx)(b.c,{path:"new",element:Object(k.jsx)(G,{})}),Object(k.jsx)(b.c,{path:":chatId",element:Object(k.jsx)(se,{})})]})})]})})})},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,58)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))},le=a(39),ue=(a(52),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_SENDER_ID,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_DATABASE,appId:Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_APP_ID});Object(le.a)(ue),a(53),a(54);r.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(i.a,{children:Object(k.jsx)(ie,{})})}),document.getElementById("root")),oe()}},[[55,1,2]]]);
//# sourceMappingURL=main.77bf4083.chunk.js.map