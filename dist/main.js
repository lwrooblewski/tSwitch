!function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=function(){function e(t){n(this,e),this.properties={element:!!t.element&&t.element,isActive:!!t.isActive&&t.isActive,isDisabled:!!t.isDisabled&&t.isDisabled,background:t.background?t.background:"#FFF",backgroundActive:t.backgroundActive?t.backgroundActive:"#5d9cec",size:t.size?t.size:"medium",additionalClass:t.additionalClass?t.additionalClass:"",onActivate:t.onActivate?t.onActivate:function(){},onDeactivate:t.onDeactivate?t.onDeactivate:function(){},onToggle:t.onToggle?t.onToggle:function(){},didMountCallback:!!t.didMountCallback},this.replacedElement=this.properties.element,this.destinationElement=!1,this.render(),this.applyCustomStyles(),this.didMountActiveState(),this.toggle=this.toggle.bind(this),this.getIsActive=this.getIsActive.bind(this),this.mountListeners()}return s(e,[{key:"insertAfter",value:function(e,t){t.parentNode.insertBefore(e,t.nextSibling)}},{key:"didMountActiveState",value:function(){!0===this.properties.element.checked&&(this.properties.isActive=!0),!0===this.properties.isDisabled&&this.destinationElement.classList.add("disabled"),!0===this.properties.isActive?(this.destinationElement.classList.add("active"),this.properties.element.checked=!0,!0===this.properties.didMountCallback&&this.properties.onActivate()):(this.properties.element.checked=!1,!0===this.properties.didMountCallback&&this.properties.onDeactivate())}},{key:"getIsActive",value:function(){return this.properties.isActive}},{key:"setActive",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!0===e?(t||this.properties.onActivate(),this.destinationElement.classList.add("active"),this.properties.isActive=!0,this.properties.element.checked=!0,this.destinationElement.style.boxShadow=this.properties.backgroundActive+" 0 0 0 11px inset"):(t||this.properties.onDeactivate(),this.destinationElement.classList.remove("active"),this.properties.isActive=!1,this.properties.element.checked=!1,this.destinationElement.style.boxShadow="rgb(223, 223, 223) 0 0 0 0 inset")}},{key:"mountListeners",value:function(){this.destinationElement.addEventListener("click",this.toggle)}},{key:"toggle",value:function(){if(!0===this.properties.isDisabled)return!1;this.properties.onToggle(!this.properties.isActive);var e=this.destinationElement.classList.toggle("active");this.setActive(e)}},{key:"applyCustomStyles",value:function(){this.destinationElement.style.backgroundColor=this.properties.background,this.destinationElement.classList.add(this.properties.size)}},{key:"render",value:function(){if(!1===this.properties.element)throw new Error("No valid element was providen for element property to render");if("checkbox"!==this.properties.element.getAttribute("type"))throw new Error("Pointed element is not a checkbox type");this.replacedElement.style.display="none";var e=document.createElement("span");e.classList.add("t-switch");var t=document.createElement("small");e.appendChild(t),this.destinationElement=e,this.properties.element.parentNode.insertBefore(e,this.properties.element.nextSibling),this.properties.additionalClass&&e.classList.add(this.properties.additionalClass)}}]),e}();t.default=o},function(e,t){},function(e,t,i){"use strict";var n=i(0),s=function(e){return e&&e.__esModule?e:{default:e}}(n);i(1),window.swch=new s.default({element:document.getElementById("example-switch"),size:"x-small",additionalClass:"lorem",onActivate:function(){console.log("onActivate")},onDeactivate:function(){console.log("onDeactivate")},onToggle:function(e){e?console.log("On toggle checked"):console.log("On toggle unchecked")}})}]);