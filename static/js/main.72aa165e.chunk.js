(this.webpackJsonpmachive=this.webpackJsonpmachive||[]).push([[1],{18:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return c}));var a=t(9),o=t(0),r=t.n(o),i=Object(o.createContext)(),c=function(e){var n=Object(o.useState)("favorite"),t=Object(a.a)(n,2),c={currPage:[t[0],t[1]]};return r.a.createElement(i.Provider,{value:c},e.children)}},27:function(e,n,t){e.exports=t(40)},32:function(e,n,t){},33:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},35:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(19),i=t.n(r),c=(t(32),t(9)),l=(t(33),t(20)),u=t(6),s=t(42),d=(t(34),t(43)),f=(t(35),Object(a.lazy)((function(){return Promise.all([t.e(4),t.e(7)]).then(t.bind(null,63))})),Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,64))}))),h=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,69))})),v=Object(a.lazy)((function(){return t.e(9).then(t.bind(null,65))})),m=Object(a.lazy)((function(){return t.e(10).then(t.bind(null,66))})),b=Object(a.lazy)((function(){return t.e(6).then(t.bind(null,67))}));var g=function(){var e=Object(s.a)(["theme"]),n=Object(c.a)(e,2),t=n[0],r=(n[1],void 0===t?"light-mode":t.theme);return Object(a.useEffect)((function(){})),o.a.createElement(l.a,null,o.a.createElement("div",{id:"body",className:r},o.a.createElement(a.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(f,null),o.a.createElement(d.a,{fluid:!0},o.a.createElement(u.a,{path:"/",exact:!0},o.a.createElement(h,null)),o.a.createElement(u.a,{path:"/explore"},o.a.createElement(v,null)),o.a.createElement(u.a,{path:"/history"},o.a.createElement(m,null)),o.a.createElement(u.a,{path:"/setting"},o.a.createElement(b,null))))))},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var E=t(18),y=t(44);i.a.render(o.a.createElement(y.a,null,o.a.createElement(E.b,null,o.a.createElement(g,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");p?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(n,e)}))}}()}},[[27,2,3]]]);
//# sourceMappingURL=main.72aa165e.chunk.js.map