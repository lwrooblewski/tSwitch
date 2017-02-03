!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,n){var i=n(2);"string"==typeof i&&(i=[[e.i,i,""]]);n(4)(i,{});i.locals&&(e.exports=i.locals)},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),a=(i(s),function(){function e(t){o(this,e),this.properties={element:!!t.element&&t.element,isActive:!!t.isActive&&t.isActive,isDisabled:!!t.isDisabled&&t.isDisabled,background:t.background?t.background:"#FFF",backgroundActive:t.backgroundActive?t.backgroundActive:"#5d9cec",size:t.size?t.size:"small",onActivate:t.onActivate?t.onActivate:function(){},onDeactivate:t.onDeactivate?t.onDeactivate:function(){},onToggle:t.onToggle?t.onToggle:function(){},didMountCallback:!!t.didMountCallback},this.replacedElement=this.properties.element,this.destinationElement=!1,this.render(),this.applyCustomStyles(),this.didMountActiveState(),this.toggle=this.toggle.bind(this),this.getIsActive=this.getIsActive.bind(this),this.mountListeners()}return r(e,[{key:"insertAfter",value:function(e,t){t.parentNode.insertBefore(e,t.nextSibling)}},{key:"didMountActiveState",value:function(){this.properties.element.checked===!0&&(this.properties.isActive=!0),this.properties.isDisabled===!0&&this.destinationElement.classList.add("disabled"),this.properties.isActive===!0?(this.destinationElement.classList.add("active"),this.properties.element.checked=!0,this.properties.didMountCallback===!0&&this.properties.onActivate()):(this.properties.element.checked=!1,this.properties.didMountCallback===!0&&this.properties.onDeactivate())}},{key:"getIsActive",value:function(){return this.properties.isActive}},{key:"setActive",value:function(e){e===!0?(this.properties.onActivate(),this.properties.isActive=!0,this.properties.element.checked=!0,this.destinationElement.style.boxShadow=this.properties.backgroundActive+" 0 0 0 11px inset"):(this.properties.onDeactivate(),this.properties.isActive=!1,this.properties.element.checked=!1,this.destinationElement.style.boxShadow="rgb(223, 223, 223) 0 0 0 0 inset")}},{key:"mountListeners",value:function(){this.destinationElement.addEventListener("click",this.toggle)}},{key:"toggle",value:function(){if(this.properties.isDisabled===!0)return!1;this.properties.onToggle(!this.properties.isActive);var e=this.destinationElement.classList.toggle("active");this.setActive(e)}},{key:"applyCustomStyles",value:function(){this.destinationElement.style.backgroundColor=this.properties.background,this.destinationElement.classList.add(this.properties.size)}},{key:"render",value:function(){if(this.properties.element===!1)throw new Error("No valid ID was providen for element to render");if("checkbox"!==this.properties.element.getAttribute("type"))throw new Error("Pointed element is not a checkbox type");this.replacedElement.style.display="none";var e=document.createElement("span");e.classList.add("t-switch");var t=document.createElement("small");e.appendChild(t),this.destinationElement=e,this.properties.element.parentNode.insertBefore(e,this.properties.element.nextSibling)}}]),e}());t.default=a},function(e,t,n){t=e.exports=n(3)(),t.push([e.i,"body,html{margin:0;padding:0}.t-switch{width:35px;height:22px;border-radius:11px;border:1px solid #dfdfdf;display:block;background-color:#fff;user-select:none;box-sizing:content-box;background-clip:content-box;cursor:pointer;transition:box-shadow .2s ease-in-out}.t-switch.active{box-shadow:inset 0 0 0 11px #5d9cec}.t-switch.active small{left:13.66666667px}.t-switch.disabled{opacity:.6;cursor:not-allowed}.t-switch small{width:20px;height:20px;border:1px solid #dfdfdf;background-color:#fff;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,.4);display:block;transition:left .2s ease-in-out;position:relative;left:0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=p[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(c(i.parts[r],t))}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(c(i.parts[r],t));p[i.id]={id:i.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},i=0;i<e.length;i++){var o=e[i],r=o[0],s=o[1],a=o[2],c=o[3],l={css:s,media:a,sourceMap:c};n[r]?n[r].parts.push(l):t.push(n[r]={id:r,parts:[l]})}return t}function o(e,t){var n=v(),i=m[m.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),m.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=m.indexOf(e);t>=0&&m.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function a(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function c(e,t){var n,i,o;if(t.singleton){var c=b++;n=g||(g=s(t)),i=l.bind(null,n,c,!1),o=l.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(t),i=d.bind(null,n),o=function(){r(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),i=u.bind(null,n),o=function(){r(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function l(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function u(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,i=t.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var p={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=f(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,b=0,m=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=i(e);return n(o,t),function(e){for(var r=[],s=0;s<o.length;s++){var a=o[s],c=p[a.id];c.refs--,r.push(c)}if(e){var l=i(e);n(l,t)}for(var s=0;s<r.length;s++){var c=r[s];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete p[c.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(1),r=i(o);new r.default({element:document.getElementById("example-switch"),onActivate:function(){console.log("onActivate")},onDeactivate:function(){console.log("onDeactivate")},onToggle:function(e){e?console.log("On toggle checked"):console.log("On toggle unchecked")}})}]);