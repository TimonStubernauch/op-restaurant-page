!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"changeContent",(function(){return b})),n.d(t,"clearContent",(function(){return h}));const i=["Salami","Ham","Peppers","Mushrooms","Onion","Pepperoni","Cheddar","Mozzarella","Tomato"],a=["French Fries","Cuntry Fries","Pizza Roles"],s=["Pappa's Ice","Strawberry Milkshake","Vanilla Milkshake","Choco Milkshake"];let r=0,u=0;function c(e,t){switch(u=0,r=0,e){case"pizza":o(e,Math.floor(10*Math.random())).map(e=>{t.appendChild(e)});break;case"sides":o(e,a.length).map(e=>{t.appendChild(e)});break;case"dessert":o(e,s.length).map(e=>{t.appendChild(e)})}}function o(e,t){const n=[];for(let i=0;i<t;i++){const t=document.createElement("li");t.setAttribute("class","foodItem"),t.setAttribute("id",e+"Item"+i);const a=l(e,Math.floor(4*Math.random())+1),s=document.createElement("div");t.appendChild(s),s.setAttribute("class","foodContainer");const r=document.createElement("img");s.appendChild(r),r.setAttribute("class","foodImg"),r.setAttribute("src","../../dist/"+e+".jpg");const u=document.createElement("div");s.appendChild(u),u.setAttribute("class","foodInfo");const c=document.createElement("p");u.appendChild(c),c.setAttribute("class","foodHeader");const o=document.createElement("p");u.appendChild(o),o.setAttribute("class","foodDetails");const d=document.createElement("div");s.appendChild(d),d.setAttribute("class","foodPriceContainer");const m=document.createElement("p");d.appendChild(m),m.setAttribute("class","foodPrize");let p=0;switch(e){case"pizza":p=4.5,p+=1.2*a.length,c.innerHTML=a[0]+" Pizza";let t="This "+e+" includes: ";a.map(e=>{t+=e+", "}),o.innerHTML=t;break;case"sides":c.innerHTML=a,o.innerHTML="A delicious Side",p=2;break;case"dessert":c.innerHTML=a,o.innerHTML="A delicious Dessert",p=4}m.innerHTML=p+" $",n.push(t)}return n}function l(e,t){let n=[];switch(e){case"pizza":for(let e=0;e<t;e++){let t="",a="";t=Math.floor(Math.random()*i.length),a=i[t],n.includes(a)?e--:n.push(a)}break;case"sides":n=a[r],r++;break;case"dessert":n=s[u],u++}return n}function d(e,t){h(t);const n=document.createElement("ul");switch(t.appendChild(n),n.setAttribute("class","menuList"),e){case"pizza":case"sides":case"dessert":c(e,n)}}let m=document.getElementById("content");var p;function b(e){switch(h(m),e){case"home":m.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div");e.appendChild(t);const n=document.createElement("h3");t.appendChild(n),n.innerHTML="About Us";const i=document.createElement("figure");t.appendChild(i),i.setAttribute("id","aboutUsFigure");const a=document.createElement("img");i.appendChild(a),a.setAttribute("src","../../dist/aboutUs.jpg"),a.setAttribute("id","aboutUsImg");const s=document.createElement("p");t.appendChild(s),s.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus quam lacinia leo suscipit, at ultricies sapien sagittis. Nullam a ante at est rutrum tempor. Integer purus neque, tempus ac eros eget, ultrices dictum velit. Sed mollis venenatis tristique. Cras sed lorem tempor, euismod eros sit amet, hendrerit dui. Sed sed luctus urna. Nullam placerat est quis sem aliquam congue sit amet et turpis. Phasellus lobortis vel lacus nec ullamcorper. Curabitur tincidunt, ex id tempus dictum, felis ligula elementum lectus, at consequat felis libero sit amet elit. Nulla tincidunt nisi pellentesque finibus commodo. Donec maximus tellus at nunc aliquet hendrerit. Ut pulvinar ante et augue consectetur interdum.";const r=document.createElement("p");t.appendChild(r),r.innerHTML="Cras condimentum eu nibh iaculis malesuada. Donec consequat scelerisque tellus a feugiat. Fusce condimentum faucibus ex, pharetra lacinia arcu eleifend id. Mauris vitae luctus nulla. Pellentesque malesuada ullamcorper ipsum ut gravida. Aenean ligula magna, maximus quis tortor ac, mattis mattis quam. Maecenas egestas placerat tellus, id tristique urna posuere non. Nam eleifend a dolor eu ultricies. Sed at neque ac risus semper viverra elementum ut augue. Ut finibus dolor purus, vel consequat odio ornare in.";const u=document.createElement("p");return t.appendChild(u),u.innerHTML="Vivamus sodales eros nibh, a molestie dui venenatis ut. Etiam ut pulvinar eros. Donec maximus arcu vel sagittis luctus. Ut varius orci quis dui varius, at iaculis sem placerat. Etiam vitae diam placerat, facilisis eros eu, bibendum nibh. Mauris interdum rhoncus mi. Donec ac sem ut lorem vehicula iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed in semper orci. Quisque et purus scelerisque, convallis ligula ut, placerat lorem. Maecenas nec consequat lacus, a mattis elit. Sed finibus dolor vel felis aliquet, et mollis nunc tempor. Cras vehicula blandit nulla a cursus. Maecenas semper ipsum nec orci porttitor, ullamcorper pharetra metus blandit.",e}());break;case"menu":m.appendChild(function(){const e=document.createElement("div");e.setAttribute("class","myMenuContainer");const t=document.createElement("ul");e.appendChild(t),t.setAttribute("class","myNav");const n=document.createElement("div");e.appendChild(n),n.setAttribute("class","menuContent");const i=["Pizza","Sides","Dessert"];return i.map(e=>{const a=document.createElement("li");t.appendChild(a),a.setAttribute("class","myNavItem menuOptions"),a.setAttribute("id","li"+e);const s=document.createElement("input");a.appendChild(s),s.setAttribute("class","myNavInput myOptionsInput"),s.setAttribute("id","input"+e),s.setAttribute("type","radio"),s.setAttribute("name","options"),s.setAttribute("value",e.toLowerCase()),e===i[0]?(s.checked=!0,d(e.toLowerCase(),n)):s.checked=!1;const r=document.createElement("label");a.appendChild(r),r.setAttribute("class","myNavLabel myOptionsLable"),r.setAttribute("for","input"+e),r.innerHTML=e,s.addEventListener("change",e=>{d(e.target.value,n)})}),e}());break;case"impressum":m.appendChild(function(){const e=document.createElement("div");e.setAttribute("id","imp");const t=document.createElement("div");e.appendChild(t);const n=document.createElement("h3");t.appendChild(n),n.innerHTML="Opening Hours";const i=document.createElement("ul");t.appendChild(i),i.setAttribute("class","bhList"),["Monday","Thusday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(e=>{const t=document.createElement("li");switch(i.appendChild(t),t.setAttribute("class","bhListItem"),t.setAttribute("id",e),e){case"Monday":t.innerHTML=e+": closed";break;default:t.innerHTML=e+": 12:00 - 15:00 and 17:00 - 22:00"}});const a=document.createElement("div");e.appendChild(a);const s=document.createElement("h3");a.appendChild(s),s.innerHTML="Contact";const r=document.createElement("p");a.append(r),r.innerHTML="Phone: 318-339-8994<br>Email: customerService@pappas.com";const u=document.createElement("div");e.appendChild(u);const c=document.createElement("h3");u.appendChild(c),c.innerHTML="Adress";const o=document.createElement("p");return u.append(o),o.innerHTML="Street: 1738  Roguski Road<br>City: Jonesville<br>State: LA Louisiana<br>ZIP-Cpde: 71343",e}())}}function h(e){for(;e.firstChild;)e.removeChild(e.lastChild)}p=()=>{m=document.getElementById("content"),document.body.insertBefore(function(){const e=document.createElement("div");e.setAttribute("class","myHeader");const t=document.createElement("h1");return t.innerHTML="Pappa's Pizza",t.setAttribute("id","title"),e.appendChild(t),e}(),m),document.body.insertBefore(function(){const e=document.createElement("div");e.setAttribute("class","myNavContainer");const t=document.createElement("ul");e.appendChild(t),t.setAttribute("class","myNav");const n=["Home","Menu","Impressum"];return n.map(e=>{const i=document.createElement("li");t.appendChild(i),i.setAttribute("class","myNavItem"),i.setAttribute("id","li"+e);const a=document.createElement("input");i.appendChild(a),a.setAttribute("class","myNavInput"),a.setAttribute("id","input"+e),a.setAttribute("type","radio"),a.setAttribute("name","nav"),a.setAttribute("value",e.toLowerCase()),e===n[0]?(a.checked=!0,b(e.toLowerCase())):a.checked=!1;const s=document.createElement("label");i.appendChild(s),s.setAttribute("class","myNavLabel"),s.setAttribute("for","input"+e),s.innerHTML=e,a.addEventListener("change",e=>{b(e.target.value)})}),e}(),m)},window.onload=p}]);