(this.webpackJsonpbreeds=this.webpackJsonpbreeds||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(19),r=c.n(a),i=c(7),o=c(5),d=c.n(o),j=c(9),l=c(3),u=c(10),b=c.n(u),O=(c(43),c(44),c(45),c(0)),f=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("svg",{className:e.favorite?"heart gray":"heart red",viewBox:"0 0 32 29.6",children:Object(O.jsx)("path",{d:"M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2 c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"})})})},h=function(e){var t=Object(n.useState)(!1),c=Object(l.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)([!1]),o=Object(l.a)(r,2),d=o[0],j=o[1],u=Object(n.useState)(!0),b=Object(l.a)(u,2),h=b[0],m=b[1],x=Object(n.useRef)(),v=function(t){e.showModal&&!x.current.contains(t.target)&&a(!0)};Object(n.useEffect)((function(){return document.addEventListener("mousedown",v),function(){return document.removeEventListener("mousedown",v)}})),Object(n.useEffect)((function(){s&&e.setShowModal(!1)}),[s]),Object(n.useEffect)((function(){if(e.selectedBreed&&e.selectedBreed.sub.length>0){var t=Array(e.selectedBreed.sub.length+1).fill(!1);j(t)}}),[e.selectedBreed]),Object(n.useEffect)((function(){var t=!0;d.map((function(e){e||(t=!1)})),t&&(m(!1),e.setShowLoader(!1))}),[d]);var p=function(e){var t=Object(i.a)(d);t[e]=!0,j(t)};return e.showModal?Object(O.jsx)("div",{className:"modal__container",children:Object(O.jsxs)("div",{className:h?"modal__contents hidden":"modal__contents",ref:x,onClick:function(){return a(!1)},children:[Object(O.jsxs)("div",{className:"modal__add",onClick:e.addToFavorite,children:[Object(O.jsx)("span",{children:Object(O.jsx)(f,{favorite:e.favoriteList.includes(e.selectedBreed.name)})}),e.favoriteList.includes(e.selectedBreed.name)?Object(O.jsx)("span",{children:"remove from favorite"}):Object(O.jsx)("span",{children:"add to favorite"})]}),Object(O.jsx)("h1",{children:e.selectedBreed.name}),Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:e.selectedBreed.img,alt:e.selectedBreed,onLoad:function(){return p(0)}})}),e.selectedBreed.sub.length>0&&Object(O.jsx)("p",{children:"sub-breeds"}),e.selectedBreed.sub.length>0&&e.selectedBreed.sub.map((function(t,c){return Object(O.jsxs)("div",{className:"modal__sub",children:[Object(O.jsx)("h1",{children:t}),Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:e.selectedBreed.subImg[c],alt:t,onLoad:function(){return p(c+1)}})})]},t)})),Object(O.jsx)("h2",{onClick:function(){e.setShowModal(!1)},children:"close"})]})}):Object(O.jsx)("span",{})},m=function(e){return e.showLoader?Object(O.jsx)("div",{className:"loader__container",children:Object(O.jsxs)("div",{className:"loader__contents",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})}):Object(O.jsx)("span",{})},x=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),r=Object(l.a)(a,2),o=r[0],u=r[1],f=Object(n.useState)(!1),x=Object(l.a)(f,2),v=x[0],p=x[1],g=Object(n.useState)(null),_=Object(l.a)(g,2),w=_[0],B=_[1],k=Object(n.useState)([]),S=Object(l.a)(k,2),N=S[0],E=S[1],L=Object(n.useState)(!1),y=Object(l.a)(L,2),C=y[0],M=y[1];Object(n.useEffect)((function(){p(!0),b()({method:"get",url:"https://dog.ceo/api/breeds/list/all"}).then((function(e){p(!1),200===e.status&&(s(e.data.message),console.log(e.data.message))})).catch((function(e){p(!1),console.log(e)}))}),[]);var F=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,s,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,I(!1,t);case 3:if(n=e.sent,s=[],!c[t]){e.next=15;break}a=0;case 7:if(!(a<c[t].length)){e.next=15;break}return e.next=10,I(!0,t,c[t][a]);case 10:r=e.sent,s.push(r);case 12:a++,e.next=7;break;case 15:B({name:t,sub:c[t],img:n,subImg:s}),u(!0);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(j.a)(d.a.mark((function e(t,c,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b()({method:"get",url:t?"https://dog.ceo/api/breed/".concat(c,"/").concat(n,"/images/random"):"https://dog.ceo/api/breed/".concat(c,"/images/random")}).then((function(e){if(200===e.status)return e.data.message})).catch((function(e){alert("error"),console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o||p(!1)}),[o]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"main__container",children:[Object(O.jsx)(m,{showLoader:v}),Object(O.jsx)("h1",{className:"main__title",children:"DOG BREEDS"}),!c&&Object(O.jsx)("p",{children:"loading..."}),c&&Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"checkbox",name:"filter",onClick:function(){M(!C)}}),Object(O.jsx)("label",{htmlFor:"filter",children:"filter by favorite"}),Object(O.jsxs)("ol",{className:"main__list",children:[!C&&Object.keys(c).map((function(e){return Object(O.jsx)("li",{className:"main__breed",onClick:function(){F(e)},children:e},e)})),C&&Object.keys(c).map((function(e){if(N.includes(e))return Object(O.jsx)("li",{className:"main__breed",onClick:function(){F(e)},children:e},e)}))]})]})]}),Object(O.jsx)(h,{showModal:o,setShowLoader:p,setShowModal:u,selectedBreed:w,favoriteList:N,addToFavorite:function(){var e=Object(i.a)(N),t=e.indexOf(w.name);t>-1?e.splice(t,1):e.push(w.name),E(e)}})]})};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(x,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.689da1ec.chunk.js.map