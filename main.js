(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>p});var r=n(601),o=n.n(r),a=n(314),i=n.n(a),c=n(417),d=n.n(c),s=new URL(n(597),n.b),l=i()(o()),u=d()(s);l.push([e.id,`*{\n    padding: 0px;\n    border: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n}\n\n:root{\n    --hdr-bg-color: rgba(0,0,0,0.9);\n    --hero-bg-color: #111111;\n    --hero-txt-color: #ffffff;\n    --hero-txt-bg-color: rgba(0,0,0,0.8);\n    --hero-txt-font: system-ui, apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --menu-hding-txt-color: var(--hero-txt-color, #ffffff);\n}\n\nbody{\n    height: 100vh;\n}\n\nheader, \nbody{\n    background-color: var(--hdr-bg-color,#111111);\n}\n\nheader nav{\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: end;\n    gap: 50px;\n}\n\nnav button{\n    padding: 12px 30px;\n    border-radius: 10px 10px 0px 0px;\n}\n\n#content,\n.menu,\n.about{\n    height: 100%;\n}\n\n.hero,\n.card {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    overflow: hidden;\n    background-size: cover ;\n    background-repeat: no-repeat;\n    background-position: center 20%;\n}\n\n.card{\n    min-height: 500px;\n}\n\n.hero{\n    background-image: url(${u});\n    height: 100vh;\n}\n\n@media (max-width: 600px){\n    .hero,\n    .card{\n        grid-template-columns: 1fr;\n    }\n    .card-desc{\n        font-size: 18px;\n    }\n}\n\n.hero .txt,\n.card .card-txt{\n    width: clamp(max-content, 100%, 100%);\n    height: clamp(max-content, 500px, 500px);\n    padding: 24px;\n    font-family: var(--hero-txt-font, arial);\n    font-size: 24px;\n    color: var(--hero-txt-color,#ffffff);\n    background-image: linear-gradient(90deg ,var(--hero-txt-bg-color,rgba(0,0,0,0.8)) 50%, var(--hero-bg-color, #111111));\n}\n\n.card-txt .card-name,\n.hero .txt .hding {\n    margin-bottom: 24px;\n}\n\n.menu .hding,\n.about .hding{\n    text-align: center;\n    font-size: 30px;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: var(--menu-hding-txt-color,#ffffff);\n    padding: 24px;\n    position: sticky;\n    top: 0px;\n    background-color: var(--hdr-bg-color,#111111);\n}\n\n`,""]);const p=l},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},597:(e,t,n)=>{e.exports=n.p+"4d7ab8b411826379d13f.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var r=n(72),o=n.n(r),a=n(825),i=n.n(a),c=n(659),d=n.n(c),s=n(56),l=n.n(s),u=n(540),p=n.n(u),f=n(113),h=n.n(f),m=n(208),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),o()(m.A,g),m.A&&m.A.locals&&m.A.locals;const v=function(){let e=document.querySelector("#content");e.remove(),e=document.createElement("div"),e.id="content";let t=document.createElement("div");t.classList.add("hero");let n=document.createElement("div");n.classList.add("txt");let r=document.createElement("h1");r.classList.add("hding"),r.textContent="Feed that ROARSOME appetite!";let o=document.createElement("p");o.classList.add("subhding"),o.textContent=" Step into a world of prehistoric delights, where every bite is a journey through time.",n.appendChild(r),n.appendChild(o),t.appendChild(n),e.appendChild(t),document.body.appendChild(e)},b=n.p+"f5cb33b9608e34cf4ee9.png";class x{constructor(e,t,n){this.info={hding:e,subhding:t,imgUrl:n}}makeHTML(){let e=document.createElement("div");e.classList.add("card"),e.setAttribute("style",`background-image: url(${this.info.imgUrl})`);let t=document.createElement("div");t.classList.add("card-txt");let n=document.createElement("h2");n.classList.add("card-hding"),n.textContent=this.info.hding;let r=document.createElement("p");return r.classList.add("card-desc"),r.textContent=this.info.subhding,t.append(n,r),e.appendChild(t),e}}const y=n.p+"4768c42a5f0464475ae9.png";v();let S=document.querySelector("#home-btn"),C=document.querySelector("#menu-btn"),E=document.querySelector("#about-btn");S.addEventListener("click",v),C.addEventListener("click",(function(){let e=document.querySelector("#content");e.remove(),e=document.createElement("div"),e.id="content";let t=document.createElement("div");t.classList.add("menu");let n=document.createElement("h1");n.classList.add("hding"),n.textContent="Menu";let r=new x("Dino Nuggets: A Roaringly Good Snack!","Sink your teeth into our Dino Nuggets—crispy, golden treats shaped like dinosaurs! Made with high-quality chicken, they’re juicy, flavorful, and perfect for kids and adults. Enjoy as a snack, meal, or party favorite with dipping sauces like BBQ, ranch, or ketchup. Take a bite out of prehistoric perfection today! 🦖✨",b);t.append(n,r.makeHTML()),e.appendChild(t),document.body.appendChild(e)})),E.addEventListener("click",(function(){let e=document.querySelector("#content");e.remove(),e=document.createElement("div"),e.id="content";let t=document.createElement("h1");t.classList.add("hding"),t.textContent="About";let n=document.createElement("div");n.classList.add("about");let r=new x("Contact Us","HP: 9999 9999, Address: Dino Street",y);n.append(t,r.makeHTML()),e.appendChild(n),document.body.appendChild(e)}))})();