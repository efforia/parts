clipper.loadBundle("chunk-6b8a51b9.js",["exports","./chunk-cd937978.js"],function(t,e){var n=new WeakMap;function o(t,e,o,r){void 0===r&&(r=0),n.has(t)!==o&&(o?function(t,e,o){var r=e.parentNode,i=e.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,r.appendChild(i),n.set(t,i);var a="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform="translate3d("+a+"px,"+o+"px,0) scale(0)"}(t,e,r):function(t,e){var o=n.get(t);o&&(n.delete(t),o.remove()),t.style.pointerEvents="",e.style.transform=""}(t,e))}function r(t){return t===t.getRootNode().activeElement}var i="input, textarea, [no-blur]",a=.3;function u(t,n,i,u){var c,s=function(t){c=e.pointerCoord(t)},l=function(s){c&&(function(t,e,n){if(c&&n){var o=c.x-n.x,r=c.y-n.y;return o*o+r*r>36}return!1}(0,0,e.pointerCoord(s))||r(n)||(s.preventDefault(),s.stopPropagation(),function(t,e,n,r){var i=function(t,e,n){return function(e,n,o,r){var i=e.top,u=e.bottom,c=n.top+15,s=.5*Math.min(n.bottom,t.ownerDocument.defaultView.innerHeight-o)-u,l=c-i,d=Math.round(s<0?-s:l>0?-l:0),f=Math.abs(d);return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f/a)),scrollPadding:o,inputSafeY:4-(i-c)}}((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),e.getBoundingClientRect(),n)}(t,n,r);Math.abs(i.scrollAmount)<4?e.focus():(o(t,e,!0,i.inputSafeY),e.focus(),n.scrollByPoint(0,i.scrollAmount,i.scrollDuration).then(function(){o(t,e,!1,i.inputSafeY),e.focus()}))}(t,n,i,u)))};return t.addEventListener("touchstart",s,!0),t.addEventListener("touchend",l,!0),function(){t.removeEventListener("touchstart",s,!0),t.removeEventListener("touchend",l,!0)}}var c="$ionPaddingTimer";function s(t,e){if("INPUT"===t.tagName&&(!t.parentElement||"ION-INPUT"!==t.parentElement.tagName)){var n=t.closest("ion-content");if(null!==n){var o=n[c];o&&clearTimeout(o),e>0?n.style.setProperty("--keyboard-offset",e+"px"):n[c]=setTimeout(function(){n.style.setProperty("--keyboard-offset","0px")},120)}}}t.startInputShims=function(t,e){var n=e.getNumber("keyboardHeight",290),a=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",!0),l=e.getBoolean("inputBlurring",!0),d=e.getBoolean("scrollPadding",!0),f=new WeakMap,v=new WeakMap;function p(t){var e=(t.shadowRoot||t).querySelector("input")||(t.shadowRoot||t).querySelector("textarea"),i=t.closest("ion-content");if(e){if(i&&c&&!f.has(t)){var s=function(t,e,n){if(!n||!e)return function(){};var i=function(n){r(e)&&o(t,e,n)},a=function(){return o(t,e,!1)},u=function(){return i(!0)},c=function(){return i(!1)};return n.addEventListener("ionScrollStart",u),n.addEventListener("ionScrollEnd",c),e.addEventListener("blur",a),function(){n.removeEventListener("ionScrollStart",u),n.removeEventListener("ionScrollEnd",c),e.addEventListener("ionBlur",a)}}(t,e,i);f.set(t,s)}i&&a&&!v.has(t)&&(s=u(t,e,i,n),v.set(t,s))}}l&&function(t){var e=!0,n=!1;t.addEventListener("ionScrollStart",function(){n=!0}),t.addEventListener("focusin",function(){e=!0},!0),t.addEventListener("touchend",function(o){if(n)n=!1;else{var r=t.activeElement;if(r&&!r.matches(i)){var a=o.target;a!==r&&(a.matches(i)||a.closest(i)||(e=!1,setTimeout(function(){e||r.blur()},50)))}}},!1)}(t),d&&function(t,e){t.addEventListener("focusin",function(t){s(t.target,e)}),t.addEventListener("focusout",function(t){s(t.target,0)})}(t,n);for(var m=0,g=Array.from(t.querySelectorAll("ion-input, ion-textarea"));m<g.length;m++)p(g[m]);t.body.addEventListener("ionInputDidLoad",function(t){p(t.target)}),t.body.addEventListener("ionInputDidUnload",function(t){var e,n;e=t.target,c&&((n=f.get(e))&&n(),f.delete(e)),a&&((n=v.get(e))&&n(),v.delete(e))})}});