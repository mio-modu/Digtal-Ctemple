function e(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var n={exports:{}},r={},i={exports:{}},s={},a=Symbol.for("react.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function _(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||v}function E(){}function k(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||v}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},E.prototype=_.prototype;var S=k.prototype=new E;S.constructor=k,w(S,_.prototype),S.isPureReactComponent=!0;var x=Array.isArray,T=Object.prototype.hasOwnProperty,I={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,i={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)T.call(t,r)&&!C.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:a,type:e,key:s,ref:o,props:i,_owner:I.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function D(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===r?"."+P(l,0):r,x(i)?(n="",null!=e&&(n=e.replace(R,"$&/")+"/"),D(i,t,n,"",(function(e){return e}))):null!=i&&(A(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(R,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",x(e))for(var u=0;u<e.length;u++){var c=r+P(s=e[u],u);l+=D(s,t,n,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=D(s=s.value,t,n,c=r+P(s,u++),i);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function O(e,t,n){if(null==e)return e;var r=[],i=0;return D(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M={current:null},j={transition:null},U={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:j,ReactCurrentOwner:I};function F(){throw Error("act(...) is not supported in production builds of React.")}s.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!A(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},s.Component=_,s.Fragment=l,s.Profiler=c,s.PureComponent=k,s.StrictMode=u,s.Suspense=p,s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,s.act=F,s.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=w({},e.props),i=e.key,s=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,o=I.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)T.call(t,u)&&!C.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:a,type:e.type,key:i,ref:s,props:r,_owner:o}},s.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:h,_context:e},e.Consumer=e},s.createElement=N,s.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},s.createRef=function(){return{current:null}},s.forwardRef=function(e){return{$$typeof:f,render:e}},s.isValidElement=A,s.lazy=function(e){return{$$typeof:g,_payload:{_status:-1,_result:e},_init:L}},s.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},s.startTransition=function(e){var t=j.transition;j.transition={};try{e()}finally{j.transition=t}},s.unstable_act=F,s.useCallback=function(e,t){return M.current.useCallback(e,t)},s.useContext=function(e){return M.current.useContext(e)},s.useDebugValue=function(){},s.useDeferredValue=function(e){return M.current.useDeferredValue(e)},s.useEffect=function(e,t){return M.current.useEffect(e,t)},s.useId=function(){return M.current.useId()},s.useImperativeHandle=function(e,t,n){return M.current.useImperativeHandle(e,t,n)},s.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)},s.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)},s.useMemo=function(e,t){return M.current.useMemo(e,t)},s.useReducer=function(e,t,n){return M.current.useReducer(e,t,n)},s.useRef=function(e){return M.current.useRef(e)},s.useState=function(e){return M.current.useState(e)},s.useSyncExternalStore=function(e,t,n){return M.current.useSyncExternalStore(e,t,n)},s.useTransition=function(){return M.current.useTransition()},s.version="18.3.1",i.exports=s;var V=i.exports;const z=t(V),B=e({__proto__:null,default:z},[V]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $=V,q=Symbol.for("react.element"),H=Symbol.for("react.fragment"),W=Object.prototype.hasOwnProperty,K=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function Q(e,t,n){var r,i={},s=null,a=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(a=t.ref),t)W.call(t,r)&&!G.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:q,type:e,key:s,ref:a,props:i,_owner:K.current}}r.Fragment=H,r.jsx=Q,r.jsxs=Q,n.exports=r;var Y=n.exports,X={},J={exports:{}},Z={},ee={exports:{}},te={};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,s=e[r];if(!(0<i(s,t)))break e;e[r]=t,e[n]=s,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,s=e.length,a=s>>>1;r<a;){var o=2*(r+1)-1,l=e[o],u=o+1,c=e[u];if(0>i(l,n))u<s&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[o]=n,r=o);else{if(!(u<s&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,h=null,d=3,f=!1,p=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,v="undefined"!=typeof setImmediate?setImmediate:null;function w(e){for(var i=n(u);null!==i;){if(null===i.callback)r(u);else{if(!(i.startTime<=e))break;r(u),i.sortIndex=i.expirationTime,t(l,i)}i=n(u)}}function b(e){if(m=!1,w(e),!p)if(null!==n(l))p=!0,P(_);else{var t=n(u);null!==t&&D(b,t.startTime-e)}}function _(t,i){p=!1,m&&(m=!1,y(x),x=-1),f=!0;var s=d;try{for(w(i),h=n(l);null!==h&&(!(h.expirationTime>i)||t&&!C());){var a=h.callback;if("function"==typeof a){h.callback=null,d=h.priorityLevel;var o=a(h.expirationTime<=i);i=e.unstable_now(),"function"==typeof o?h.callback=o:h===n(l)&&r(l),w(i)}else r(l);h=n(l)}if(null!==h)var c=!0;else{var g=n(u);null!==g&&D(b,g.startTime-i),c=!1}return c}finally{h=null,d=s,f=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var E,k=!1,S=null,x=-1,T=5,I=-1;function C(){return!(e.unstable_now()-I<T)}function N(){if(null!==S){var t=e.unstable_now();I=t;var n=!0;try{n=S(!0,t)}finally{n?E():(k=!1,S=null)}}else k=!1}if("function"==typeof v)E=function(){v(N)};else if("undefined"!=typeof MessageChannel){var A=new MessageChannel,R=A.port2;A.port1.onmessage=N,E=function(){R.postMessage(null)}}else E=function(){g(N,0)};function P(e){S=e,k||(k=!0,E())}function D(t,n){x=g((function(){t(e.unstable_now())}),n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){p||f||(p=!0,P(_))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(d){case 1:case 2:case 3:var t=3;break;default:t=d}var n=d;d=t;try{return e()}finally{d=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=d;d=e;try{return t()}finally{d=n}},e.unstable_scheduleCallback=function(r,i,s){var a=e.unstable_now();switch("object"==typeof s&&null!==s?s="number"==typeof(s=s.delay)&&0<s?a+s:a:s=a,r){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return r={id:c++,callback:i,priorityLevel:r,startTime:s,expirationTime:o=s+o,sortIndex:-1},s>a?(r.sortIndex=s,t(u,r),null===n(l)&&r===n(u)&&(m?(y(x),x=-1):m=!0,D(b,s-a))):(r.sortIndex=o,t(l,r),p||f||(p=!0,P(_))),r},e.unstable_shouldYield=C,e.unstable_wrapCallback=function(e){var t=d;return function(){var n=d;d=t;try{return e.apply(this,arguments)}finally{d=n}}}}(te),ee.exports=te;var ne=ee.exports,re=V,ie=ne;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function se(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ae=new Set,oe={};function le(e,t){ue(e,t),ue(e+"Capture",t)}function ue(e,t){for(oe[e]=t,e=0;e<t.length;e++)ae.add(t[e])}var ce=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),he=Object.prototype.hasOwnProperty,de=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fe={},pe={};function me(e,t,n,r,i,s,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){ge[e]=new me(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];ge[t]=new me(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){ge[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){ge[e]=new me(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){ge[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){ge[e]=new me(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){ge[e]=new me(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){ge[e]=new me(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){ge[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)}));var ye=/[\-:]([a-z])/g;function ve(e){return e[1].toUpperCase()}function we(e,t,n,r){var i=ge.hasOwnProperty(t)?ge[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!he.call(pe,e)||!he.call(fe,e)&&(de.test(e)?pe[e]=!0:(fe[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(ye,ve);ge[t]=new me(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(ye,ve);ge[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(ye,ve);ge[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){ge[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)})),ge.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){ge[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)}));var be=re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_e=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),Se=Symbol.for("react.strict_mode"),xe=Symbol.for("react.profiler"),Te=Symbol.for("react.provider"),Ie=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),Ae=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),Oe=Symbol.iterator;function Le(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Oe&&e[Oe]||e["@@iterator"])?e:null}var Me,je=Object.assign;function Ue(e){if(void 0===Me)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Me=t&&t[1]||""}return"\n"+Me+e}var Fe=!1;function Ve(e,t){if(!e||Fe)return"";Fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"==typeof u.stack){for(var i=u.stack.split("\n"),s=r.stack.split("\n"),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(1!==a||1!==o)do{if(a--,0>--o||i[a]!==s[o]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=o);break}}}finally{Fe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ue(e):""}function ze(e){switch(e.tag){case 5:return Ue(e.type);case 16:return Ue("Lazy");case 13:return Ue("Suspense");case 19:return Ue("SuspenseList");case 0:case 2:case 15:return e=Ve(e.type,!1);case 11:return e=Ve(e.type.render,!1);case 1:return e=Ve(e.type,!0);default:return""}}function Be(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case ke:return"Fragment";case Ee:return"Portal";case xe:return"Profiler";case Se:return"StrictMode";case Ne:return"Suspense";case Ae:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case Ie:return(e.displayName||"Context")+".Consumer";case Te:return(e._context.displayName||"Context")+".Provider";case Ce:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return null!==(t=e.displayName||null)?t:Be(e.type)||"Memo";case Pe:t=e._payload,e=e._init;try{return Be(e(t))}catch(n){}}return null}function $e(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Be(t);case 8:return t===Se?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function qe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function He(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function We(e){e._valueTracker||(e._valueTracker=function(e){var t=He(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Ke(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=He(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Ge(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Qe(e,t){var n=t.checked;return je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Ye(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=qe(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Xe(e,t){null!=(t=t.checked)&&we(e,"checked",t,!1)}function Je(e,t){Xe(e,t);var n=qe(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?et(e,t.type,n):t.hasOwnProperty("defaultValue")&&et(e,t.type,qe(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Ze(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function et(e,t,n){"number"===t&&Ge(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var tt=Array.isArray;function nt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qe(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function rt(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(se(91));return je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function it(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(se(92));if(tt(n)){if(1<n.length)throw Error(se(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:qe(n)}}function st(e,t){var n=qe(t.value),r=qe(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function at(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function ot(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ot(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ut,ct,ht=(ct=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ut=ut||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ut.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ct(e,t)}))}:ct);function dt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var ft={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pt=["Webkit","ms","Moz","O"];function mt(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||ft.hasOwnProperty(e)&&ft[e]?(""+t).trim():t+"px"}function gt(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=mt(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(ft).forEach((function(e){pt.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ft[t]=ft[e]}))}));var yt=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(e,t){if(t){if(yt[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(se(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(se(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(se(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(se(62))}}function wt(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function _t(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Et=null,kt=null,St=null;function xt(e){if(e=ws(e)){if("function"!=typeof Et)throw Error(se(280));var t=e.stateNode;t&&(t=_s(t),Et(e.stateNode,e.type,t))}}function Tt(e){kt?St?St.push(e):St=[e]:kt=e}function It(){if(kt){var e=kt,t=St;if(St=kt=null,xt(e),t)for(e=0;e<t.length;e++)xt(t[e])}}function Ct(e,t){return e(t)}function Nt(){}var At=!1;function Rt(e,t,n){if(At)return e(t,n);At=!0;try{return Ct(e,t,n)}finally{At=!1,(null!==kt||null!==St)&&(Nt(),It())}}function Pt(e,t){var n=e.stateNode;if(null===n)return null;var r=_s(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(se(231,t,typeof n));return n}var Dt=!1;if(ce)try{var Ot={};Object.defineProperty(Ot,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",Ot,Ot),window.removeEventListener("test",Ot,Ot)}catch(ct){Dt=!1}function Lt(e,t,n,r,i,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Mt=!1,jt=null,Ut=!1,Ft=null,Vt={onError:function(e){Mt=!0,jt=e}};function zt(e,t,n,r,i,s,a,o,l){Mt=!1,jt=null,Lt.apply(Vt,arguments)}function Bt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function $t(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function qt(e){if(Bt(e)!==e)throw Error(se(188))}function Ht(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Bt(e)))throw Error(se(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qt(i),e;if(s===r)return qt(i),t;s=s.sibling}throw Error(se(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(se(189))}}if(n.alternate!==r)throw Error(se(190))}if(3!==n.tag)throw Error(se(188));return n.stateNode.current===n?e:t}(e))?Wt(e):null}function Wt(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Wt(e);if(null!==t)return t;e=e.sibling}return null}var Kt=ie.unstable_scheduleCallback,Gt=ie.unstable_cancelCallback,Qt=ie.unstable_shouldYield,Yt=ie.unstable_requestPaint,Xt=ie.unstable_now,Jt=ie.unstable_getCurrentPriorityLevel,Zt=ie.unstable_ImmediatePriority,en=ie.unstable_UserBlockingPriority,tn=ie.unstable_NormalPriority,nn=ie.unstable_LowPriority,rn=ie.unstable_IdlePriority,sn=null,an=null;var on=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(ln(e)/un|0)|0},ln=Math.log,un=Math.LN2;var cn=64,hn=4194304;function dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fn(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=268435455&n;if(0!==a){var o=a&~i;0!==o?r=dn(o):0!==(s&=a)&&(r=dn(s))}else 0!==(a=n&~i)?r=dn(a):0!==s&&(r=dn(s));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(s=t&-t)||16===i&&4194240&s))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-on(t)),r|=e[n],t&=~i;return r}function pn(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gn(){var e=cn;return!(4194240&(cn<<=1))&&(cn=64),e}function yn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vn(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-on(t)]=n}function wn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-on(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var bn=0;function _n(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var En,kn,Sn,xn,Tn,In=!1,Cn=[],Nn=null,An=null,Rn=null,Pn=new Map,Dn=new Map,On=[],Ln="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mn(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(t.pointerId)}}function jn(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&(null!==(t=ws(t))&&kn(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Un(e){var t=vs(e.target);if(null!==t){var n=Bt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=$t(n)))return e.blockedOn=t,void Tn(e.priority,(function(){Sn(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Fn(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ws(n))&&kn(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);bt=r,n.target.dispatchEvent(r),bt=null,t.shift()}return!0}function Vn(e,t,n){Fn(e)&&n.delete(t)}function zn(){In=!1,null!==Nn&&Fn(Nn)&&(Nn=null),null!==An&&Fn(An)&&(An=null),null!==Rn&&Fn(Rn)&&(Rn=null),Pn.forEach(Vn),Dn.forEach(Vn)}function Bn(e,t){e.blockedOn===t&&(e.blockedOn=null,In||(In=!0,ie.unstable_scheduleCallback(ie.unstable_NormalPriority,zn)))}function $n(e){function t(t){return Bn(t,e)}if(0<Cn.length){Bn(Cn[0],e);for(var n=1;n<Cn.length;n++){var r=Cn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Nn&&Bn(Nn,e),null!==An&&Bn(An,e),null!==Rn&&Bn(Rn,e),Pn.forEach(t),Dn.forEach(t),n=0;n<On.length;n++)(r=On[n]).blockedOn===e&&(r.blockedOn=null);for(;0<On.length&&null===(n=On[0]).blockedOn;)Un(n),null===n.blockedOn&&On.shift()}var qn=be.ReactCurrentBatchConfig,Hn=!0;function Wn(e,t,n,r){var i=bn,s=qn.transition;qn.transition=null;try{bn=1,Gn(e,t,n,r)}finally{bn=i,qn.transition=s}}function Kn(e,t,n,r){var i=bn,s=qn.transition;qn.transition=null;try{bn=4,Gn(e,t,n,r)}finally{bn=i,qn.transition=s}}function Gn(e,t,n,r){if(Hn){var i=Yn(e,t,n,r);if(null===i)qi(e,t,r,Qn,n),Mn(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Nn=jn(Nn,e,t,n,r,i),!0;case"dragenter":return An=jn(An,e,t,n,r,i),!0;case"mouseover":return Rn=jn(Rn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Pn.set(s,jn(Pn.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Dn.set(s,jn(Dn.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Mn(e,r),4&t&&-1<Ln.indexOf(e)){for(;null!==i;){var s=ws(i);if(null!==s&&En(s),null===(s=Yn(e,t,n,r))&&qi(e,t,r,Qn,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else qi(e,t,r,null,n)}}var Qn=null;function Yn(e,t,n,r){if(Qn=null,null!==(e=vs(e=_t(r))))if(null===(t=Bt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=$t(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qn=e,null}function Xn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jt()){case Zt:return 1;case en:return 4;case tn:case nn:return 16;case rn:return 536870912;default:return 16}default:return 16}}var Jn=null,Zn=null,er=null;function tr(){if(er)return er;var e,t,n=Zn,r=n.length,i="value"in Jn?Jn.value:Jn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[s-t];t++);return er=i.slice(e,1<t?1-t:void 0)}function nr(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function rr(){return!0}function ir(){return!1}function sr(e){function t(t,n,r,i,s){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?rr:ir,this.isPropagationStopped=ir,this}return je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=rr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=rr)},persist:function(){},isPersistent:rr}),t}var ar,or,lr,ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cr=sr(ur),hr=je({},ur,{view:0,detail:0}),dr=sr(hr),fr=je({},hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&"mousemove"===e.type?(ar=e.screenX-lr.screenX,or=e.screenY-lr.screenY):or=ar=0,lr=e),ar)},movementY:function(e){return"movementY"in e?e.movementY:or}}),pr=sr(fr),mr=sr(je({},fr,{dataTransfer:0})),gr=sr(je({},hr,{relatedTarget:0})),yr=sr(je({},ur,{animationName:0,elapsedTime:0,pseudoElement:0})),vr=je({},ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wr=sr(vr),br=sr(je({},ur,{data:0})),_r={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Er={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kr[e])&&!!t[e]}function xr(){return Sr}var Tr=je({},hr,{key:function(e){if(e.key){var t=_r[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=nr(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Er[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xr,charCode:function(e){return"keypress"===e.type?nr(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?nr(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Ir=sr(Tr),Cr=sr(je({},fr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Nr=sr(je({},hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xr})),Ar=sr(je({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rr=je({},fr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pr=sr(Rr),Dr=[9,13,27,32],Or=ce&&"CompositionEvent"in window,Lr=null;ce&&"documentMode"in document&&(Lr=document.documentMode);var Mr=ce&&"TextEvent"in window&&!Lr,jr=ce&&(!Or||Lr&&8<Lr&&11>=Lr),Ur=String.fromCharCode(32),Fr=!1;function Vr(e,t){switch(e){case"keyup":return-1!==Dr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zr(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Br=!1;var $r={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!$r[e.type]:"textarea"===t}function Hr(e,t,n,r){Tt(r),0<(t=Wi(t,"onChange")).length&&(n=new cr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wr=null,Kr=null;function Gr(e){Ui(e,0)}function Qr(e){if(Ke(bs(e)))return e}function Yr(e,t){if("change"===e)return t}var Xr=!1;if(ce){var Jr;if(ce){var Zr="oninput"in document;if(!Zr){var ei=document.createElement("div");ei.setAttribute("oninput","return;"),Zr="function"==typeof ei.oninput}Jr=Zr}else Jr=!1;Xr=Jr&&(!document.documentMode||9<document.documentMode)}function ti(){Wr&&(Wr.detachEvent("onpropertychange",ni),Kr=Wr=null)}function ni(e){if("value"===e.propertyName&&Qr(Kr)){var t=[];Hr(t,Kr,e,_t(e)),Rt(Gr,t)}}function ri(e,t,n){"focusin"===e?(ti(),Kr=n,(Wr=t).attachEvent("onpropertychange",ni)):"focusout"===e&&ti()}function ii(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Qr(Kr)}function si(e,t){if("click"===e)return Qr(t)}function ai(e,t){if("input"===e||"change"===e)return Qr(t)}var oi="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function li(e,t){if(oi(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!he.call(t,i)||!oi(e[i],t[i]))return!1}return!0}function ui(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ci(e,t){var n,r=ui(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ui(r)}}function hi(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?hi(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function di(){for(var e=window,t=Ge();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Ge((e=t.contentWindow).document)}return t}function fi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function pi(e){var t=di(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&hi(n.ownerDocument.documentElement,n)){if(null!==r&&fi(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=void 0===r.end?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=ci(n,s);var a=ci(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mi=ce&&"documentMode"in document&&11>=document.documentMode,gi=null,yi=null,vi=null,wi=!1;function bi(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;wi||null==gi||gi!==Ge(r)||("selectionStart"in(r=gi)&&fi(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vi&&li(vi,r)||(vi=r,0<(r=Wi(yi,"onSelect")).length&&(t=new cr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gi)))}function _i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ei={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionend:_i("Transition","TransitionEnd")},ki={},Si={};function xi(e){if(ki[e])return ki[e];if(!Ei[e])return e;var t,n=Ei[e];for(t in n)if(n.hasOwnProperty(t)&&t in Si)return ki[e]=n[t];return e}ce&&(Si=document.createElement("div").style,"AnimationEvent"in window||(delete Ei.animationend.animation,delete Ei.animationiteration.animation,delete Ei.animationstart.animation),"TransitionEvent"in window||delete Ei.transitionend.transition);var Ti=xi("animationend"),Ii=xi("animationiteration"),Ci=xi("animationstart"),Ni=xi("transitionend"),Ai=new Map,Ri="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pi(e,t){Ai.set(e,t),le(t,[e])}for(var Di=0;Di<Ri.length;Di++){var Oi=Ri[Di];Pi(Oi.toLowerCase(),"on"+(Oi[0].toUpperCase()+Oi.slice(1)))}Pi(Ti,"onAnimationEnd"),Pi(Ii,"onAnimationIteration"),Pi(Ci,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(Ni,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mi=new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));function ji(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,a,o,l){if(zt.apply(this,arguments),Mt){if(!Mt)throw Error(se(198));var u=jt;Mt=!1,jt=null,Ut||(Ut=!0,Ft=u)}}(r,t,void 0,e),e.currentTarget=null}function Ui(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;ji(i,o,u),s=l}else for(a=0;a<r.length;a++){if(l=(o=r[a]).instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;ji(i,o,u),s=l}}}if(Ut)throw e=Ft,Ut=!1,Ft=null,e}function Fi(e,t){var n=t[ms];void 0===n&&(n=t[ms]=new Set);var r=e+"__bubble";n.has(r)||($i(t,e,2,!1),n.add(r))}function Vi(e,t,n){var r=0;t&&(r|=4),$i(n,e,r,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function Bi(e){if(!e[zi]){e[zi]=!0,ae.forEach((function(t){"selectionchange"!==t&&(Mi.has(t)||Vi(t,!1,e),Vi(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[zi]||(t[zi]=!0,Vi("selectionchange",!1,t))}}function $i(e,t,n,r){switch(Xn(t)){case 1:var i=Wn;break;case 4:i=Kn;break;default:i=Gn}n=i.bind(null,t,n,e),i=void 0,!Dt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function qi(e,t,n,r,i){var s=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var o=r.stateNode.containerInfo;if(o===i||8===o.nodeType&&o.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==o;){if(null===(a=vs(o)))return;if(5===(l=a.tag)||6===l){r=s=a;continue e}o=o.parentNode}}r=r.return}Rt((function(){var r=s,i=_t(n),a=[];e:{var o=Ai.get(e);if(void 0!==o){var l=cr,u=e;switch(e){case"keypress":if(0===nr(n))break e;case"keydown":case"keyup":l=Ir;break;case"focusin":u="focus",l=gr;break;case"focusout":u="blur",l=gr;break;case"beforeblur":case"afterblur":l=gr;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=pr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Nr;break;case Ti:case Ii:case Ci:l=yr;break;case Ni:l=Ar;break;case"scroll":l=dr;break;case"wheel":l=Pr;break;case"copy":case"cut":case"paste":l=wr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Cr}var c=!!(4&t),h=!c&&"scroll"===e,d=c?null!==o?o+"Capture":null:o;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=Pt(p,d))&&c.push(Hi(p,m,f)))),h)break;p=p.return}0<c.length&&(o=new l(o,u,null,n,i),a.push({event:o,listeners:c}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(o="mouseover"===e||"pointerover"===e)||n===bt||!(u=n.relatedTarget||n.fromElement)||!vs(u)&&!u[ps])&&(l||o)&&(o=i.window===i?i:(o=i.ownerDocument)?o.defaultView||o.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?vs(u):null)&&(u!==(h=Bt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=pr,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=Cr,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?o:bs(l),f=null==u?o:bs(u),(o=new c(m,p+"leave",l,n,i)).target=h,o.relatedTarget=f,m=null,vs(i)===r&&((c=new c(d,p+"enter",u,n,i)).target=f,c.relatedTarget=h,m=c),h=m,l&&u)e:{for(d=u,p=0,f=c=l;f;f=Ki(f))p++;for(f=0,m=d;m;m=Ki(m))f++;for(;0<p-f;)c=Ki(c),p--;for(;0<f-p;)d=Ki(d),f--;for(;p--;){if(c===d||null!==d&&c===d.alternate)break e;c=Ki(c),d=Ki(d)}c=null}else c=null;null!==l&&Gi(a,o,l,c,!1),null!==u&&null!==h&&Gi(a,h,u,c,!0)}if("select"===(l=(o=r?bs(r):window).nodeName&&o.nodeName.toLowerCase())||"input"===l&&"file"===o.type)var g=Yr;else if(qr(o))if(Xr)g=ai;else{g=ii;var y=ri}else(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(g=si);switch(g&&(g=g(e,r))?Hr(a,g,n,i):(y&&y(e,o,r),"focusout"===e&&(y=o._wrapperState)&&y.controlled&&"number"===o.type&&et(o,"number",o.value)),y=r?bs(r):window,e){case"focusin":(qr(y)||"true"===y.contentEditable)&&(gi=y,yi=r,vi=null);break;case"focusout":vi=yi=gi=null;break;case"mousedown":wi=!0;break;case"contextmenu":case"mouseup":case"dragend":wi=!1,bi(a,n,i);break;case"selectionchange":if(mi)break;case"keydown":case"keyup":bi(a,n,i)}var v;if(Or)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Br?Vr(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(jr&&"ko"!==n.locale&&(Br||"onCompositionStart"!==w?"onCompositionEnd"===w&&Br&&(v=tr()):(Zn="value"in(Jn=i)?Jn.value:Jn.textContent,Br=!0)),0<(y=Wi(r,w)).length&&(w=new br(w,e,null,n,i),a.push({event:w,listeners:y}),v?w.data=v:null!==(v=zr(n))&&(w.data=v))),(v=Mr?function(e,t){switch(e){case"compositionend":return zr(t);case"keypress":return 32!==t.which?null:(Fr=!0,Ur);case"textInput":return(e=t.data)===Ur&&Fr?null:e;default:return null}}(e,n):function(e,t){if(Br)return"compositionend"===e||!Or&&Vr(e,t)?(e=tr(),er=Zn=Jn=null,Br=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return jr&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Wi(r,"onBeforeInput")).length&&(i=new br("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=v))}Ui(a,t)}))}function Hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wi(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=Pt(e,n))&&r.unshift(Hi(e,s,i)),null!=(s=Pt(e,t))&&r.push(Hi(e,s,i))),e=e.return}return r}function Ki(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Gi(e,t,n,r,i){for(var s=t._reactName,a=[];null!==n&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(null!==l&&l===r)break;5===o.tag&&null!==u&&(o=u,i?null!=(l=Pt(n,s))&&a.unshift(Hi(n,l,o)):i||null!=(l=Pt(n,s))&&a.push(Hi(n,l,o))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Qi=/\r\n?/g,Yi=/\u0000|\uFFFD/g;function Xi(e){return("string"==typeof e?e:""+e).replace(Qi,"\n").replace(Yi,"")}function Ji(e,t,n){if(t=Xi(t),Xi(e)!==t&&n)throw Error(se(425))}function Zi(){}var es=null,ts=null;function ns(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var rs="function"==typeof setTimeout?setTimeout:void 0,is="function"==typeof clearTimeout?clearTimeout:void 0,ss="function"==typeof Promise?Promise:void 0,as="function"==typeof queueMicrotask?queueMicrotask:void 0!==ss?function(e){return ss.resolve(null).then(e).catch(os)}:rs;function os(e){setTimeout((function(){throw e}))}function ls(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void $n(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);$n(t)}function us(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function cs(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var hs=Math.random().toString(36).slice(2),ds="__reactFiber$"+hs,fs="__reactProps$"+hs,ps="__reactContainer$"+hs,ms="__reactEvents$"+hs,gs="__reactListeners$"+hs,ys="__reactHandles$"+hs;function vs(e){var t=e[ds];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ps]||n[ds]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=cs(e);null!==e;){if(n=e[ds])return n;e=cs(e)}return t}n=(e=n).parentNode}return null}function ws(e){return!(e=e[ds]||e[ps])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bs(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(se(33))}function _s(e){return e[fs]||null}var Es=[],ks=-1;function Ss(e){return{current:e}}function xs(e){0>ks||(e.current=Es[ks],Es[ks]=null,ks--)}function Ts(e,t){ks++,Es[ks]=e.current,e.current=t}var Is={},Cs=Ss(Is),Ns=Ss(!1),As=Is;function Rs(e,t){var n=e.type.contextTypes;if(!n)return Is;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ps(e){return null!=(e=e.childContextTypes)}function Ds(){xs(Ns),xs(Cs)}function Os(e,t,n){if(Cs.current!==Is)throw Error(se(168));Ts(Cs,t),Ts(Ns,n)}function Ls(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(se(108,$e(e)||"Unknown",i));return je({},n,r)}function Ms(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Is,As=Cs.current,Ts(Cs,e),Ts(Ns,Ns.current),!0}function js(e,t,n){var r=e.stateNode;if(!r)throw Error(se(169));n?(e=Ls(e,t,As),r.__reactInternalMemoizedMergedChildContext=e,xs(Ns),xs(Cs),Ts(Cs,e)):xs(Ns),Ts(Ns,n)}var Us=null,Fs=!1,Vs=!1;function zs(e){null===Us?Us=[e]:Us.push(e)}function Bs(){if(!Vs&&null!==Us){Vs=!0;var e=0,t=bn;try{var n=Us;for(bn=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Us=null,Fs=!1}catch(i){throw null!==Us&&(Us=Us.slice(e+1)),Kt(Zt,Bs),i}finally{bn=t,Vs=!1}}return null}var $s=[],qs=0,Hs=null,Ws=0,Ks=[],Gs=0,Qs=null,Ys=1,Xs="";function Js(e,t){$s[qs++]=Ws,$s[qs++]=Hs,Hs=e,Ws=t}function Zs(e,t,n){Ks[Gs++]=Ys,Ks[Gs++]=Xs,Ks[Gs++]=Qs,Qs=e;var r=Ys;e=Xs;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ys=1<<32-on(t)+i|n<<i|r,Xs=s+e}else Ys=1<<s|n<<i|r,Xs=e}function ea(e){null!==e.return&&(Js(e,1),Zs(e,1,0))}function ta(e){for(;e===Hs;)Hs=$s[--qs],$s[qs]=null,Ws=$s[--qs],$s[qs]=null;for(;e===Qs;)Qs=Ks[--Gs],Ks[Gs]=null,Xs=Ks[--Gs],Ks[Gs]=null,Ys=Ks[--Gs],Ks[Gs]=null}var na=null,ra=null,ia=!1,sa=null;function aa(e,t){var n=Rc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function oa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,na=e,ra=us(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,na=e,ra=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Qs?{id:Ys,overflow:Xs}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Rc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,na=e,ra=null,!0);default:return!1}}function la(e){return!(!(1&e.mode)||128&e.flags)}function ua(e){if(ia){var t=ra;if(t){var n=t;if(!oa(e,t)){if(la(e))throw Error(se(418));t=us(n.nextSibling);var r=na;t&&oa(e,t)?aa(r,n):(e.flags=-4097&e.flags|2,ia=!1,na=e)}}else{if(la(e))throw Error(se(418));e.flags=-4097&e.flags|2,ia=!1,na=e}}}function ca(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;na=e}function ha(e){if(e!==na)return!1;if(!ia)return ca(e),ia=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ns(e.type,e.memoizedProps)),t&&(t=ra)){if(la(e))throw da(),Error(se(418));for(;t;)aa(e,t),t=us(t.nextSibling)}if(ca(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(se(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ra=us(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ra=null}}else ra=na?us(e.stateNode.nextSibling):null;return!0}function da(){for(var e=ra;e;)e=us(e.nextSibling)}function fa(){ra=na=null,ia=!1}function pa(e){null===sa?sa=[e]:sa.push(e)}var ma=be.ReactCurrentBatchConfig;function ga(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(se(309));var r=n.stateNode}if(!r)throw Error(se(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:((t=function(e){var t=i.refs;null===e?delete t[s]:t[s]=e})._stringRef=s,t)}if("string"!=typeof e)throw Error(se(284));if(!n._owner)throw Error(se(290,e))}return e}function ya(e,t){throw e=Object.prototype.toString.call(t),Error(se(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function va(e){return(0,e._init)(e._payload)}function wa(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Dc(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function o(e,t,n,r){return null===t||6!==t.tag?((t=jc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var s=n.type;return s===ke?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===Pe&&va(s)===t.type)?((r=i(t,n.props)).ref=ga(e,t,n),r.return=e,r):((r=Oc(n.type,n.key,n.props,null,e.mode,r)).ref=ga(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Uc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,s){return null===t||7!==t.tag?((t=Lc(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=jc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case _e:return(n=Oc(t.type,t.key,t.props,null,e.mode,n)).ref=ga(e,null,t),n.return=e,n;case Ee:return(t=Uc(t,e.mode,n)).return=e,t;case Pe:return h(e,(0,t._init)(t._payload),n)}if(tt(t)||Le(t))return(t=Lc(t,e.mode,n,null)).return=e,t;ya(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:o(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case _e:return n.key===i?l(e,t,n,r):null;case Ee:return n.key===i?u(e,t,n,r):null;case Pe:return d(e,t,(i=n._init)(n._payload),r)}if(tt(n)||Le(n))return null!==i?null:c(e,t,n,r,null);ya(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return o(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case _e:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case Ee:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case Pe:return f(e,t,n,(0,r._init)(r._payload),i)}if(tt(r)||Le(r))return c(t,e=e.get(n)||null,r,i,null);ya(t,r)}return null}return function o(l,u,c,p){if("object"==typeof c&&null!==c&&c.type===ke&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case _e:e:{for(var m=c.key,g=u;null!==g;){if(g.key===m){if((m=c.type)===ke){if(7===g.tag){n(l,g.sibling),(u=i(g,c.props.children)).return=l,l=u;break e}}else if(g.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===Pe&&va(m)===g.type){n(l,g.sibling),(u=i(g,c.props)).ref=ga(l,g,c),u.return=l,l=u;break e}n(l,g);break}t(l,g),g=g.sibling}c.type===ke?((u=Lc(c.props.children,l.mode,p,c.key)).return=l,l=u):((p=Oc(c.type,c.key,c.props,null,l.mode,p)).ref=ga(l,u,c),p.return=l,l=p)}return a(l);case Ee:e:{for(g=c.key;null!==u;){if(u.key===g){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=Uc(c,l.mode,p)).return=l,l=u}return a(l);case Pe:return o(l,u,(g=c._init)(c._payload),p)}if(tt(c))return function(i,a,o,l){for(var u=null,c=null,p=a,m=a=0,g=null;null!==p&&m<o.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=d(i,p,o[m],l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),a=s(y,a,m),null===c?u=y:c.sibling=y,c=y,p=g}if(m===o.length)return n(i,p),ia&&Js(i,m),u;if(null===p){for(;m<o.length;m++)null!==(p=h(i,o[m],l))&&(a=s(p,a,m),null===c?u=p:c.sibling=p,c=p);return ia&&Js(i,m),u}for(p=r(i,p);m<o.length;m++)null!==(g=f(p,i,m,o[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),a=s(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),ia&&Js(i,m),u}(l,u,c,p);if(Le(c))return function(i,a,o,l){var u=Le(o);if("function"!=typeof u)throw Error(se(150));if(null==(o=u.call(o)))throw Error(se(151));for(var c=u=null,p=a,m=a=0,g=null,y=o.next();null!==p&&!y.done;m++,y=o.next()){p.index>m?(g=p,p=null):g=p.sibling;var v=d(i,p,y.value,l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),a=s(v,a,m),null===c?u=v:c.sibling=v,c=v,p=g}if(y.done)return n(i,p),ia&&Js(i,m),u;if(null===p){for(;!y.done;m++,y=o.next())null!==(y=h(i,y.value,l))&&(a=s(y,a,m),null===c?u=y:c.sibling=y,c=y);return ia&&Js(i,m),u}for(p=r(i,p);!y.done;m++,y=o.next())null!==(y=f(p,i,m,y.value,l))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),a=s(y,a,m),null===c?u=y:c.sibling=y,c=y);return e&&p.forEach((function(e){return t(i,e)})),ia&&Js(i,m),u}(l,u,c,p);ya(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=i(u,c)).return=l,l=u):(n(l,u),(u=jc(c,l.mode,p)).return=l,l=u),a(l)):n(l,u)}}var ba=wa(!0),_a=wa(!1),Ea=Ss(null),ka=null,Sa=null,xa=null;function Ta(){xa=Sa=ka=null}function Ia(e){var t=Ea.current;xs(Ea),e._currentValue=t}function Ca(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Na(e,t){ka=e,xa=Sa=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(wl=!0),e.firstContext=null)}function Aa(e){var t=e._currentValue;if(xa!==e)if(e={context:e,memoizedValue:t,next:null},null===Sa){if(null===ka)throw Error(se(308));Sa=e,ka.dependencies={lanes:0,firstContext:e}}else Sa=Sa.next=e;return t}var Ra=null;function Pa(e){null===Ra?Ra=[e]:Ra.push(e)}function Da(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Pa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Oa(e,r)}function Oa(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var La=!1;function Ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ua(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&Cu){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Oa(e,n)}return null===(i=r.interleaved)?(t.next=t,Pa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Oa(e,n)}function Va(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,wn(e,n)}}function za(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=a:s=s.next=a,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ba(e,t,n,r){var i=e.updateQueue;La=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(null!==o){i.shared.pending=null;var l=o,u=l.next;l.next=null,null===a?s=u:a.next=u,a=l;var c=e.alternate;null!==c&&((o=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===o?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(null!==s){var h=i.baseState;for(a=0,c=u=l=null,o=s;;){var d=o.lane,f=o.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var p=e,m=o;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break e;h=je({},h,d);break e;case 2:La=!0}}null!==o.callback&&0!==o.lane&&(e.flags|=64,null===(d=i.effects)?i.effects=[o]:d.push(o))}else f={eventTime:f,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(u=c=f,l=h):c=c.next=f,a|=d;if(null===(o=o.next)){if(null===(o=i.shared.pending))break;o=(d=o).next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}if(null===c&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===s&&(i.shared.lanes=0);Mu|=a,e.lanes=a,e.memoizedState=h}}function $a(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(se(191,i));i.call(r)}}}var qa={},Ha=Ss(qa),Wa=Ss(qa),Ka=Ss(qa);function Ga(e){if(e===qa)throw Error(se(174));return e}function Qa(e,t){switch(Ts(Ka,t),Ts(Wa,e),Ts(Ha,qa),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:lt(null,"");break;default:t=lt(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}xs(Ha),Ts(Ha,t)}function Ya(){xs(Ha),xs(Wa),xs(Ka)}function Xa(e){Ga(Ka.current);var t=Ga(Ha.current),n=lt(t,e.type);t!==n&&(Ts(Wa,e),Ts(Ha,n))}function Ja(e){Wa.current===e&&(xs(Ha),xs(Wa))}var Za=Ss(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=be.ReactCurrentDispatcher,io=be.ReactCurrentBatchConfig,so=0,ao=null,oo=null,lo=null,uo=!1,co=!1,ho=0,fo=0;function po(){throw Error(se(321))}function mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!oi(e[n],t[n]))return!1;return!0}function go(e,t,n,r,i,s){if(so=s,ao=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Zo:el,e=n(r,i),co){s=0;do{if(co=!1,ho=0,25<=s)throw Error(se(301));s+=1,lo=oo=null,t.updateQueue=null,ro.current=tl,e=n(r,i)}while(co)}if(ro.current=Jo,t=null!==oo&&null!==oo.next,so=0,lo=oo=ao=null,uo=!1,t)throw Error(se(300));return e}function yo(){var e=0!==ho;return ho=0,e}function vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===lo?ao.memoizedState=lo=e:lo=lo.next=e,lo}function wo(){if(null===oo){var e=ao.alternate;e=null!==e?e.memoizedState:null}else e=oo.next;var t=null===lo?ao.memoizedState:lo.next;if(null!==t)lo=t,oo=e;else{if(null===e)throw Error(se(310));e={memoizedState:(oo=e).memoizedState,baseState:oo.baseState,baseQueue:oo.baseQueue,queue:oo.queue,next:null},null===lo?ao.memoizedState=lo=e:lo=lo.next=e}return lo}function bo(e,t){return"function"==typeof t?t(e):t}function _o(e){var t=wo(),n=t.queue;if(null===n)throw Error(se(311));n.lastRenderedReducer=e;var r=oo,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((so&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(o=l=h,a=r):l=l.next=h,ao.lanes|=c,Mu|=c}u=u.next}while(null!==u&&u!==s);null===l?a=r:l.next=o,oi(r,t.memoizedState)||(wl=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,ao.lanes|=s,Mu|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Eo(e){var t=wo(),n=t.queue;if(null===n)throw Error(se(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do{s=e(s,a.action),a=a.next}while(a!==i);oi(s,t.memoizedState)||(wl=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function ko(){}function So(e,t){var n=ao,r=wo(),i=t(),s=!oi(r.memoizedState,i);if(s&&(r.memoizedState=i,wl=!0),r=r.queue,Mo(Io.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==lo&&1&lo.memoizedState.tag){if(n.flags|=2048,Ro(9,To.bind(null,n,r,i,t),void 0,null),null===Nu)throw Error(se(349));30&so||xo(n,t,i)}return i}function xo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ao.updateQueue)?(t={lastEffect:null,stores:null},ao.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function To(e,t,n,r){t.value=n,t.getSnapshot=r,Co(t)&&No(e)}function Io(e,t,n){return n((function(){Co(t)&&No(e)}))}function Co(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!oi(e,n)}catch(r){return!0}}function No(e){var t=Oa(e,1);null!==t&&nc(t,e,1,-1)}function Ao(e){var t=vo();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:e},t.queue=e,e=e.dispatch=Go.bind(null,ao,e),[t.memoizedState,e]}function Ro(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ao.updateQueue)?(t={lastEffect:null,stores:null},ao.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Po(){return wo().memoizedState}function Do(e,t,n,r){var i=vo();ao.flags|=e,i.memoizedState=Ro(1|t,n,void 0,void 0===r?null:r)}function Oo(e,t,n,r){var i=wo();r=void 0===r?null:r;var s=void 0;if(null!==oo){var a=oo.memoizedState;if(s=a.destroy,null!==r&&mo(r,a.deps))return void(i.memoizedState=Ro(t,n,s,r))}ao.flags|=e,i.memoizedState=Ro(1|t,n,s,r)}function Lo(e,t){return Do(8390656,8,e,t)}function Mo(e,t){return Oo(2048,8,e,t)}function jo(e,t){return Oo(4,2,e,t)}function Uo(e,t){return Oo(4,4,e,t)}function Fo(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Vo(e,t,n){return n=null!=n?n.concat([e]):null,Oo(4,4,Fo.bind(null,t,e),n)}function zo(){}function Bo(e,t){var n=wo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $o(e,t){var n=wo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qo(e,t,n){return 21&so?(oi(n,t)||(n=gn(),ao.lanes|=n,Mu|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wl=!0),e.memoizedState=n)}function Ho(e,t){var n=bn;bn=0!==n&&4>n?n:4,e(!0);var r=io.transition;io.transition={};try{e(!1),t()}finally{bn=n,io.transition=r}}function Wo(){return wo().memoizedState}function Ko(e,t,n){var r=tc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qo(e))Yo(t,n);else if(null!==(n=Da(e,t,n,r))){nc(n,e,r,ec()),Xo(n,t,r)}}function Go(e,t,n){var r=tc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qo(e))Yo(t,i);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,oi(o,a)){var l=t.interleaved;return null===l?(i.next=i,Pa(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Da(e,t,i,r))&&(nc(n,e,r,i=ec()),Xo(n,t,r))}}function Qo(e){var t=e.alternate;return e===ao||null!==t&&t===ao}function Yo(e,t){co=uo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xo(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,wn(e,n)}}var Jo={readContext:Aa,useCallback:po,useContext:po,useEffect:po,useImperativeHandle:po,useInsertionEffect:po,useLayoutEffect:po,useMemo:po,useReducer:po,useRef:po,useState:po,useDebugValue:po,useDeferredValue:po,useTransition:po,useMutableSource:po,useSyncExternalStore:po,useId:po,unstable_isNewReconciler:!1},Zo={readContext:Aa,useCallback:function(e,t){return vo().memoizedState=[e,void 0===t?null:t],e},useContext:Aa,useEffect:Lo,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Do(4194308,4,Fo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Do(4194308,4,e,t)},useInsertionEffect:function(e,t){return Do(4,2,e,t)},useMemo:function(e,t){var n=vo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ko.bind(null,ao,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vo().memoizedState=e},useState:Ao,useDebugValue:zo,useDeferredValue:function(e){return vo().memoizedState=e},useTransition:function(){var e=Ao(!1),t=e[0];return e=Ho.bind(null,e[1]),vo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ao,i=vo();if(ia){if(void 0===n)throw Error(se(407));n=n()}else{if(n=t(),null===Nu)throw Error(se(349));30&so||xo(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Lo(Io.bind(null,r,s,e),[e]),r.flags|=2048,Ro(9,To.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=vo(),t=Nu.identifierPrefix;if(ia){var n=Xs;t=":"+t+"R"+(n=(Ys&~(1<<32-on(Ys)-1)).toString(32)+n),0<(n=ho++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fo++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Aa,useCallback:Bo,useContext:Aa,useEffect:Mo,useImperativeHandle:Vo,useInsertionEffect:jo,useLayoutEffect:Uo,useMemo:$o,useReducer:_o,useRef:Po,useState:function(){return _o(bo)},useDebugValue:zo,useDeferredValue:function(e){return qo(wo(),oo.memoizedState,e)},useTransition:function(){return[_o(bo)[0],wo().memoizedState]},useMutableSource:ko,useSyncExternalStore:So,useId:Wo,unstable_isNewReconciler:!1},tl={readContext:Aa,useCallback:Bo,useContext:Aa,useEffect:Mo,useImperativeHandle:Vo,useInsertionEffect:jo,useLayoutEffect:Uo,useMemo:$o,useReducer:Eo,useRef:Po,useState:function(){return Eo(bo)},useDebugValue:zo,useDeferredValue:function(e){var t=wo();return null===oo?t.memoizedState=e:qo(t,oo.memoizedState,e)},useTransition:function(){return[Eo(bo)[0],wo().memoizedState]},useMutableSource:ko,useSyncExternalStore:So,useId:Wo,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=je({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:je({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var il={isMounted:function(e){return!!(e=e._reactInternals)&&Bt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),s=Ua(r,i);s.payload=t,null!=n&&(s.callback=n),null!==(t=Fa(e,s,i))&&(nc(t,e,i,r),Va(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ec(),i=tc(e),s=Ua(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),null!==(t=Fa(e,s,i))&&(nc(t,e,i,r),Va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ec(),r=tc(e),i=Ua(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Fa(e,i,r))&&(nc(t,e,r,n),Va(t,e,r))}};function sl(e,t,n,r,i,s,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,a):!t.prototype||!t.prototype.isPureReactComponent||(!li(n,r)||!li(i,s))}function al(e,t,n){var r=!1,i=Is,s=t.contextType;return"object"==typeof s&&null!==s?s=Aa(s):(i=Ps(t)?As:Cs.current,s=(r=null!=(r=t.contextTypes))?Rs(e,i):Is),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=il,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ol(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&il.enqueueReplaceState(t,t.state,null)}function ll(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ma(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=Aa(s):(s=Ps(t)?As:Cs.current,i.context=Rs(e,s)),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(rl(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&il.enqueueReplaceState(i,i.state,null),Ba(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=ze(r),r=r.return}while(r);var i=n}catch(s){i="\nError generating stack: "+s.message+"\n"+s.stack}return{value:e,source:t,stack:i,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function hl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var dl="function"==typeof WeakMap?WeakMap:Map;function fl(e,t,n){(n=Ua(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qu||(qu=!0,Hu=r),hl(0,t)},n}function pl(e,t,n){(n=Ua(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hl(0,t)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){hl(0,t),"function"!=typeof r&&(null===Wu?Wu=new Set([this]):Wu.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new dl;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=xc.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function yl(e,t,n,r,i){return 1&e.mode?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ua(-1,1)).tag=2,Fa(n,t,1))),n.lanes|=1),e)}var vl=be.ReactCurrentOwner,wl=!1;function bl(e,t,n,r){t.child=null===e?_a(t,null,n,r):ba(t,e.child,n,r)}function _l(e,t,n,r,i){n=n.render;var s=t.ref;return Na(t,i),r=go(e,t,n,r,s,i),n=yo(),null===e||wl?(ia&&n&&ea(t),t.flags|=1,bl(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ql(e,t,i))}function El(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||Pc(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Oc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,kl(e,t,s,r,i))}if(s=e.child,0===(e.lanes&i)){var a=s.memoizedProps;if((n=null!==(n=n.compare)?n:li)(a,r)&&e.ref===t.ref)return ql(e,t,i)}return t.flags|=1,(e=Dc(s,r)).ref=t.ref,e.return=t,t.child=e}function kl(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(li(s,r)&&e.ref===t.ref){if(wl=!1,t.pendingProps=r=s,0===(e.lanes&i))return t.lanes=e.lanes,ql(e,t,i);131072&e.flags&&(wl=!0)}}return Tl(e,t,n,r,i)}function Sl(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ts(Du,Pu),Pu|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,Ts(Du,Pu),Pu|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ts(Du,Pu),Pu|=n;else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,Ts(Du,Pu),Pu|=r;return bl(e,t,i,n),t.child}function xl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Tl(e,t,n,r,i){var s=Ps(n)?As:Cs.current;return s=Rs(t,s),Na(t,i),n=go(e,t,n,r,s,i),r=yo(),null===e||wl?(ia&&r&&ea(t),t.flags|=1,bl(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ql(e,t,i))}function Il(e,t,n,r,i){if(Ps(n)){var s=!0;Ms(t)}else s=!1;if(Na(t,i),null===t.stateNode)$l(e,t),al(t,n,r),ll(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,o=t.memoizedProps;a.props=o;var l=a.context,u=n.contextType;"object"==typeof u&&null!==u?u=Aa(u):u=Rs(t,u=Ps(n)?As:Cs.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;h||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==r||l!==u)&&ol(t,a,r,u),La=!1;var d=t.memoizedState;a.state=d,Ba(t,r,a,i),l=t.memoizedState,o!==r||d!==l||Ns.current||La?("function"==typeof c&&(rl(t,n,c,r),l=t.memoizedState),(o=La||sl(t,n,o,r,d,l,u))?(h||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=o):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ja(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:nl(t.type,o),a.props=u,h=t.pendingProps,d=a.context,"object"==typeof(l=n.contextType)&&null!==l?l=Aa(l):l=Rs(t,l=Ps(n)?As:Cs.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==h||d!==l)&&ol(t,a,r,l),La=!1,d=t.memoizedState,a.state=d,Ba(t,r,a,i);var p=t.memoizedState;o!==h||d!==p||Ns.current||La?("function"==typeof f&&(rl(t,n,f,r),p=t.memoizedState),(u=La||sl(t,n,u,r,d,p,l)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=u):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Cl(e,t,n,r,s,i)}function Cl(e,t,n,r,i,s){xl(e,t);var a=!!(128&t.flags);if(!r&&!a)return i&&js(t,n,!1),ql(e,t,s);r=t.stateNode,vl.current=t;var o=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=ba(t,e.child,null,s),t.child=ba(t,null,o,s)):bl(e,t,o,s),t.memoizedState=r.state,i&&js(t,n,!0),t.child}function Nl(e){var t=e.stateNode;t.pendingContext?Os(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Os(0,t.context,!1),Qa(e,t.containerInfo)}function Al(e,t,n,r,i){return fa(),pa(i),t.flags|=256,bl(e,t,n,r),t.child}var Rl,Pl,Dl,Ol,Ll={dehydrated:null,treeContext:null,retryLane:0};function Ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function jl(e,t,n){var r,i=t.pendingProps,s=Za.current,a=!1,o=!!(128&t.flags);if((r=o)||(r=(null===e||null!==e.memoizedState)&&!!(2&s)),r?(a=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),Ts(Za,1&s),null===e)return ua(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,a?(i=t.mode,a=t.child,o={mode:"hidden",children:o},1&i||null===a?a=Mc(o,i,0,null):(a.childLanes=0,a.pendingProps=o),e=Lc(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ml(n),t.memoizedState=Ll,e):Ul(t,o));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,i,s,a){if(n)return 256&t.flags?(t.flags&=-257,Fl(e,t,a,r=cl(Error(se(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Mc({mode:"visible",children:r.children},i,0,null),(s=Lc(s,i,a,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,1&t.mode&&ba(t,e.child,null,a),t.child.memoizedState=Ml(a),t.memoizedState=Ll,s);if(!(1&t.mode))return Fl(e,t,a,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var o=r.dgst;return r=o,Fl(e,t,a,r=cl(s=Error(se(419)),r,void 0))}if(o=0!==(a&e.childLanes),wl||o){if(null!==(r=Nu)){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|a))?0:i)&&i!==s.retryLane&&(s.retryLane=i,Oa(e,i),nc(r,e,i,-1))}return mc(),Fl(e,t,a,r=cl(Error(se(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Ic.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ra=us(i.nextSibling),na=t,ia=!0,sa=null,null!==e&&(Ks[Gs++]=Ys,Ks[Gs++]=Xs,Ks[Gs++]=Qs,Ys=e.id,Xs=e.overflow,Qs=t),t=Ul(t,r.children),t.flags|=4096,t)}(e,t,o,i,r,s,n);if(a){a=i.fallback,o=t.mode,r=(s=e.child).sibling;var l={mode:"hidden",children:i.children};return 1&o||t.child===s?(i=Dc(s,l)).subtreeFlags=14680064&s.subtreeFlags:((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null),null!==r?a=Dc(r,a):(a=Lc(a,o,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=null===(o=e.child.memoizedState)?Ml(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ll,i}return e=(a=e.child).sibling,i=Dc(a,{mode:"visible",children:i.children}),!(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ul(e,t){return(t=Mc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fl(e,t,n,r){return null!==r&&pa(r),ba(t,e.child,null,n),(e=Ul(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ca(e.return,t,n)}function zl(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Bl(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(bl(e,t,r.children,n),2&(r=Za.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vl(e,n,t);else if(19===e.tag)Vl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ts(Za,r),1&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),zl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===eo(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}zl(t,!0,n,null,s);break;case"together":zl(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function $l(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ql(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Mu|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(se(153));if(null!==t.child){for(n=Dc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Dc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Hl(e,t){if(!ia)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Wl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wl(t),null;case 1:case 17:return Ps(t.type)&&Ds(),Wl(t),null;case 3:return r=t.stateNode,Ya(),xs(Ns),xs(Cs),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ha(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==sa&&(ac(sa),sa=null))),Pl(e,t),Wl(t),null;case 5:Ja(t);var i=Ga(Ka.current);if(n=t.type,null!==e&&null!=t.stateNode)Dl(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(se(166));return Wl(t),null}if(e=Ga(Ha.current),ha(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[ds]=t,r[fs]=s,e=!!(1&t.mode),n){case"dialog":Fi("cancel",r),Fi("close",r);break;case"iframe":case"object":case"embed":Fi("load",r);break;case"video":case"audio":for(i=0;i<Li.length;i++)Fi(Li[i],r);break;case"source":Fi("error",r);break;case"img":case"image":case"link":Fi("error",r),Fi("load",r);break;case"details":Fi("toggle",r);break;case"input":Ye(r,s),Fi("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Fi("invalid",r);break;case"textarea":it(r,s),Fi("invalid",r)}for(var a in vt(n,s),i=null,s)if(s.hasOwnProperty(a)){var o=s[a];"children"===a?"string"==typeof o?r.textContent!==o&&(!0!==s.suppressHydrationWarning&&Ji(r.textContent,o,e),i=["children",o]):"number"==typeof o&&r.textContent!==""+o&&(!0!==s.suppressHydrationWarning&&Ji(r.textContent,o,e),i=["children",""+o]):oe.hasOwnProperty(a)&&null!=o&&"onScroll"===a&&Fi("scroll",r)}switch(n){case"input":We(r),Ze(r,s,!0);break;case"textarea":We(r),at(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=Zi)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{a=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=ot(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),"select"===n&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[ds]=t,e[fs]=r,Rl(e,t,!1,!1),t.stateNode=e;e:{switch(a=wt(n,r),n){case"dialog":Fi("cancel",e),Fi("close",e),i=r;break;case"iframe":case"object":case"embed":Fi("load",e),i=r;break;case"video":case"audio":for(i=0;i<Li.length;i++)Fi(Li[i],e);i=r;break;case"source":Fi("error",e),i=r;break;case"img":case"image":case"link":Fi("error",e),Fi("load",e),i=r;break;case"details":Fi("toggle",e),i=r;break;case"input":Ye(e,r),i=Qe(e,r),Fi("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=je({},r,{value:void 0}),Fi("invalid",e);break;case"textarea":it(e,r),i=rt(e,r),Fi("invalid",e)}for(s in vt(n,i),o=i)if(o.hasOwnProperty(s)){var l=o[s];"style"===s?gt(e,l):"dangerouslySetInnerHTML"===s?null!=(l=l?l.__html:void 0)&&ht(e,l):"children"===s?"string"==typeof l?("textarea"!==n||""!==l)&&dt(e,l):"number"==typeof l&&dt(e,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(oe.hasOwnProperty(s)?null!=l&&"onScroll"===s&&Fi("scroll",e):null!=l&&we(e,s,l,a))}switch(n){case"input":We(e),Ze(e,r,!1);break;case"textarea":We(e),at(e);break;case"option":null!=r.value&&e.setAttribute("value",""+qe(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?nt(e,!!r.multiple,s,!1):null!=r.defaultValue&&nt(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Wl(t),null;case 6:if(e&&null!=t.stateNode)Ol(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(se(166));if(n=Ga(Ka.current),Ga(Ha.current),ha(t)){if(r=t.stateNode,n=t.memoizedProps,r[ds]=t,(s=r.nodeValue!==n)&&null!==(e=na))switch(e.tag){case 3:Ji(r.nodeValue,n,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ji(r.nodeValue,n,!!(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[ds]=t,t.stateNode=r}return Wl(t),null;case 13:if(xs(Za),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ia&&null!==ra&&1&t.mode&&!(128&t.flags))da(),fa(),t.flags|=98560,s=!1;else if(s=ha(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(se(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(se(317));s[ds]=t}else fa(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Wl(t),s=!1}else null!==sa&&(ac(sa),sa=null),s=!0;if(!s)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,1&t.mode&&(null===e||1&Za.current?0===Ou&&(Ou=3):mc())),null!==t.updateQueue&&(t.flags|=4),Wl(t),null);case 4:return Ya(),Pl(e,t),null===e&&Bi(t.stateNode.containerInfo),Wl(t),null;case 10:return Ia(t.type._context),Wl(t),null;case 19:if(xs(Za),null===(s=t.memoizedState))return Wl(t),null;if(r=!!(128&t.flags),null===(a=s.rendering))if(r)Hl(s,!1);else{if(0!==Ou||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(a=eo(e))){for(t.flags|=128,Hl(s,!1),null!==(r=a.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(a=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ts(Za,1&Za.current|2),t.child}e=e.sibling}null!==s.tail&&Xt()>Bu&&(t.flags|=128,r=!0,Hl(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(a))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Hl(s,!0),null===s.tail&&"hidden"===s.tailMode&&!a.alternate&&!ia)return Wl(t),null}else 2*Xt()-s.renderingStartTime>Bu&&1073741824!==n&&(t.flags|=128,r=!0,Hl(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(null!==(n=s.last)?n.sibling=a:t.child=a,s.last=a)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Xt(),t.sibling=null,n=Za.current,Ts(Za,r?1&n|2:1&n),t):(Wl(t),null);case 22:case 23:return hc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&1&t.mode?!!(1073741824&Pu)&&(Wl(t),6&t.subtreeFlags&&(t.flags|=8192)):Wl(t),null;case 24:case 25:return null}throw Error(se(156,t.tag))}function Gl(e,t){switch(ta(t),t.tag){case 1:return Ps(t.type)&&Ds(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Ya(),xs(Ns),xs(Cs),no(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ja(t),null;case 13:if(xs(Za),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(se(340));fa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return xs(Za),null;case 4:return Ya(),null;case 10:return Ia(t.type._context),null;case 22:case 23:return hc(),null;default:return null}}Rl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Pl=function(){},Dl=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ga(Ha.current);var s,a=null;switch(n){case"input":i=Qe(e,i),r=Qe(e,r),a=[];break;case"select":i=je({},i,{value:void 0}),r=je({},r,{value:void 0}),a=[];break;case"textarea":i=rt(e,i),r=rt(e,r),a=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Zi)}for(u in vt(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(oe.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(o=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(null!=l||null!=o))if("style"===u)if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,o=o?o.__html:void 0,null!=l&&o!==l&&(a=a||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(oe.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Fi("scroll",e),a||o===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Ol=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ql=!1,Yl=!1,Xl="function"==typeof WeakSet?WeakSet:Set,Jl=null;function Zl(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){Sc(e,t,r)}else n.current=null}function eu(e,t,n){try{n()}catch(r){Sc(e,t,r)}}var tu=!1;function nu(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,void 0!==s&&eu(t,n,s)}i=i.next}while(i!==r)}}function ru(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function iu(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function su(e){var t=e.alternate;null!==t&&(e.alternate=null,su(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[ds],delete t[fs],delete t[ms],delete t[gs],delete t[ys])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function au(e){return 5===e.tag||3===e.tag||4===e.tag}function ou(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||au(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function lu(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Zi));else if(4!==r&&null!==(e=e.child))for(lu(e,t,n),e=e.sibling;null!==e;)lu(e,t,n),e=e.sibling}function uu(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(uu(e,t,n),e=e.sibling;null!==e;)uu(e,t,n),e=e.sibling}var cu=null,hu=!1;function du(e,t,n){for(n=n.child;null!==n;)fu(e,t,n),n=n.sibling}function fu(e,t,n){if(an&&"function"==typeof an.onCommitFiberUnmount)try{an.onCommitFiberUnmount(sn,n)}catch(o){}switch(n.tag){case 5:Yl||Zl(n,t);case 6:var r=cu,i=hu;cu=null,du(e,t,n),hu=i,null!==(cu=r)&&(hu?(e=cu,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cu.removeChild(n.stateNode));break;case 18:null!==cu&&(hu?(e=cu,n=n.stateNode,8===e.nodeType?ls(e.parentNode,n):1===e.nodeType&&ls(e,n),$n(e)):ls(cu,n.stateNode));break;case 4:r=cu,i=hu,cu=n.stateNode.containerInfo,hu=!0,du(e,t,n),cu=r,hu=i;break;case 0:case 11:case 14:case 15:if(!Yl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,void 0!==a&&(2&s||4&s)&&eu(n,t,a),i=i.next}while(i!==r)}du(e,t,n);break;case 1:if(!Yl&&(Zl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){Sc(n,t,o)}du(e,t,n);break;case 21:du(e,t,n);break;case 22:1&n.mode?(Yl=(r=Yl)||null!==n.memoizedState,du(e,t,n),Yl=r):du(e,t,n);break;default:du(e,t,n)}}function pu(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach((function(t){var r=Cc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function mu(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,o=a;e:for(;null!==o;){switch(o.tag){case 5:cu=o.stateNode,hu=!1;break e;case 3:case 4:cu=o.stateNode.containerInfo,hu=!0;break e}o=o.return}if(null===cu)throw Error(se(160));fu(s,a,i),cu=null,hu=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(u){Sc(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gu(t,e),t=t.sibling}function gu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mu(t,e),yu(e),4&r){try{nu(3,e,e.return),ru(3,e)}catch(m){Sc(e,e.return,m)}try{nu(5,e,e.return)}catch(m){Sc(e,e.return,m)}}break;case 1:mu(t,e),yu(e),512&r&&null!==n&&Zl(n,n.return);break;case 5:if(mu(t,e),yu(e),512&r&&null!==n&&Zl(n,n.return),32&e.flags){var i=e.stateNode;try{dt(i,"")}catch(m){Sc(e,e.return,m)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,a=null!==n?n.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===o&&"radio"===s.type&&null!=s.name&&Xe(i,s),wt(o,a);var u=wt(o,s);for(a=0;a<l.length;a+=2){var c=l[a],h=l[a+1];"style"===c?gt(i,h):"dangerouslySetInnerHTML"===c?ht(i,h):"children"===c?dt(i,h):we(i,c,h,u)}switch(o){case"input":Je(i,s);break;case"textarea":st(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?nt(i,!!s.multiple,f,!1):d!==!!s.multiple&&(null!=s.defaultValue?nt(i,!!s.multiple,s.defaultValue,!0):nt(i,!!s.multiple,s.multiple?[]:"",!1))}i[fs]=s}catch(m){Sc(e,e.return,m)}}break;case 6:if(mu(t,e),yu(e),4&r){if(null===e.stateNode)throw Error(se(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(m){Sc(e,e.return,m)}}break;case 3:if(mu(t,e),yu(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{$n(t.containerInfo)}catch(m){Sc(e,e.return,m)}break;case 4:default:mu(t,e),yu(e);break;case 13:mu(t,e),yu(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,!s||null!==i.alternate&&null!==i.alternate.memoizedState||(zu=Xt())),4&r&&pu(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(Yl=(u=Yl)||c,mu(t,e),Yl=u):mu(t,e),yu(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&1&e.mode)for(Jl=e,c=e.child;null!==c;){for(h=Jl=c;null!==Jl;){switch(f=(d=Jl).child,d.tag){case 0:case 11:case 14:case 15:nu(4,d,d.return);break;case 1:Zl(d,d.return);var p=d.stateNode;if("function"==typeof p.componentWillUnmount){r=d,n=d.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(m){Sc(r,n,m)}}break;case 5:Zl(d,d.return);break;case 22:if(null!==d.memoizedState){_u(h);continue}}null!==f?(f.return=d,Jl=f):_u(h)}c=c.sibling}e:for(c=null,h=e;;){if(5===h.tag){if(null===c){c=h;try{i=h.stateNode,u?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(o=h.stateNode,a=null!=(l=h.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,o.style.display=mt("display",a))}catch(m){Sc(e,e.return,m)}}}else if(6===h.tag){if(null===c)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(m){Sc(e,e.return,m)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:mu(t,e),yu(e),4&r&&pu(e);case 21:}}function yu(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(au(n)){var r=n;break e}n=n.return}throw Error(se(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(dt(i,""),r.flags&=-33),uu(e,ou(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;lu(e,ou(e),s);break;default:throw Error(se(161))}}catch(a){Sc(e,e.return,a)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vu(e,t,n){Jl=e,wu(e)}function wu(e,t,n){for(var r=!!(1&e.mode);null!==Jl;){var i=Jl,s=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Ql;if(!a){var o=i.alternate,l=null!==o&&null!==o.memoizedState||Yl;o=Ql;var u=Yl;if(Ql=a,(Yl=l)&&!u)for(Jl=i;null!==Jl;)l=(a=Jl).child,22===a.tag&&null!==a.memoizedState?Eu(i):null!==l?(l.return=a,Jl=l):Eu(i);for(;null!==s;)Jl=s,wu(s),s=s.sibling;Jl=i,Ql=o,Yl=u}bu(e)}else 8772&i.subtreeFlags&&null!==s?(s.return=i,Jl=s):bu(e)}}function bu(e){for(;null!==Jl;){var t=Jl;if(8772&t.flags){var n=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Yl||ru(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Yl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&$a(t,s,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}$a(t,a,n)}break;case 5:var o=t.stateNode;if(null===n&&4&t.flags){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var h=c.dehydrated;null!==h&&$n(h)}}}break;default:throw Error(se(163))}Yl||512&t.flags&&iu(t)}catch(d){Sc(t,t.return,d)}}if(t===e){Jl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Jl=n;break}Jl=t.return}}function _u(e){for(;null!==Jl;){var t=Jl;if(t===e){Jl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Jl=n;break}Jl=t.return}}function Eu(e){for(;null!==Jl;){var t=Jl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ru(4,t)}catch(l){Sc(t,n,l)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){Sc(t,i,l)}}var s=t.return;try{iu(t)}catch(l){Sc(t,s,l)}break;case 5:var a=t.return;try{iu(t)}catch(l){Sc(t,a,l)}}}catch(l){Sc(t,t.return,l)}if(t===e){Jl=null;break}var o=t.sibling;if(null!==o){o.return=t.return,Jl=o;break}Jl=t.return}}var ku,Su=Math.ceil,xu=be.ReactCurrentDispatcher,Tu=be.ReactCurrentOwner,Iu=be.ReactCurrentBatchConfig,Cu=0,Nu=null,Au=null,Ru=0,Pu=0,Du=Ss(0),Ou=0,Lu=null,Mu=0,ju=0,Uu=0,Fu=null,Vu=null,zu=0,Bu=1/0,$u=null,qu=!1,Hu=null,Wu=null,Ku=!1,Gu=null,Qu=0,Yu=0,Xu=null,Ju=-1,Zu=0;function ec(){return 6&Cu?Xt():-1!==Ju?Ju:Ju=Xt()}function tc(e){return 1&e.mode?2&Cu&&0!==Ru?Ru&-Ru:null!==ma.transition?(0===Zu&&(Zu=gn()),Zu):0!==(e=bn)?e:e=void 0===(e=window.event)?16:Xn(e.type):1}function nc(e,t,n,r){if(50<Yu)throw Yu=0,Xu=null,Error(se(185));vn(e,n,r),2&Cu&&e===Nu||(e===Nu&&(!(2&Cu)&&(ju|=n),4===Ou&&oc(e,Ru)),rc(e,r),1===n&&0===Cu&&!(1&t.mode)&&(Bu=Xt()+500,Fs&&Bs()))}function rc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-on(s),o=1<<a,l=i[a];-1===l?0!==(o&n)&&0===(o&r)||(i[a]=pn(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}}(e,t);var r=fn(e,e===Nu?Ru:0);if(0===r)null!==n&&Gt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Gt(n),1===t)0===e.tag?function(e){Fs=!0,zs(e)}(lc.bind(null,e)):zs(lc.bind(null,e)),as((function(){!(6&Cu)&&Bs()})),n=null;else{switch(_n(r)){case 1:n=Zt;break;case 4:n=en;break;case 16:default:n=tn;break;case 536870912:n=rn}n=Nc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(Ju=-1,Zu=0,6&Cu)throw Error(se(327));var n=e.callbackNode;if(Ec()&&e.callbackNode!==n)return null;var r=fn(e,e===Nu?Ru:0);if(0===r)return null;if(30&r||0!==(r&e.expiredLanes)||t)t=gc(e,r);else{t=r;var i=Cu;Cu|=2;var s=pc();for(Nu===e&&Ru===t||($u=null,Bu=Xt()+500,dc(e,t));;)try{vc();break}catch(o){fc(e,o)}Ta(),xu.current=s,Cu=i,null!==Au?t=0:(Nu=null,Ru=0,t=Ou)}if(0!==t){if(2===t&&(0!==(i=mn(e))&&(r=i,t=sc(e,i))),1===t)throw n=Lu,dc(e,0),oc(e,r),rc(e,Xt()),n;if(6===t)oc(e,r);else{if(i=e.current.alternate,!(30&r||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!oi(s(),i))return!1}catch(a){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)||(t=gc(e,r),2===t&&(s=mn(e),0!==s&&(r=s,t=sc(e,s))),1!==t)))throw n=Lu,dc(e,0),oc(e,r),rc(e,Xt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(se(345));case 2:case 5:_c(e,Vu,$u);break;case 3:if(oc(e,r),(130023424&r)===r&&10<(t=zu+500-Xt())){if(0!==fn(e,0))break;if(((i=e.suspendedLanes)&r)!==r){ec(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=rs(_c.bind(null,e,Vu,$u),t);break}_c(e,Vu,$u);break;case 4:if(oc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-on(r);s=1<<a,(a=t[a])>i&&(i=a),r&=~s}if(r=i,10<(r=(120>(r=Xt()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Su(r/1960))-r)){e.timeoutHandle=rs(_c.bind(null,e,Vu,$u),r);break}_c(e,Vu,$u);break;default:throw Error(se(329))}}}return rc(e,Xt()),e.callbackNode===n?ic.bind(null,e):null}function sc(e,t){var n=Fu;return e.current.memoizedState.isDehydrated&&(dc(e,t).flags|=256),2!==(e=gc(e,t))&&(t=Vu,Vu=n,null!==t&&ac(t)),e}function ac(e){null===Vu?Vu=e:Vu.push.apply(Vu,e)}function oc(e,t){for(t&=~Uu,t&=~ju,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-on(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(6&Cu)throw Error(se(327));Ec();var t=fn(e,0);if(!(1&t))return rc(e,Xt()),null;var n=gc(e,t);if(0!==e.tag&&2===n){var r=mn(e);0!==r&&(t=r,n=sc(e,r))}if(1===n)throw n=Lu,dc(e,0),oc(e,t),rc(e,Xt()),n;if(6===n)throw Error(se(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_c(e,Vu,$u),rc(e,Xt()),null}function uc(e,t){var n=Cu;Cu|=1;try{return e(t)}finally{0===(Cu=n)&&(Bu=Xt()+500,Fs&&Bs())}}function cc(e){null!==Gu&&0===Gu.tag&&!(6&Cu)&&Ec();var t=Cu;Cu|=1;var n=Iu.transition,r=bn;try{if(Iu.transition=null,bn=1,e)return e()}finally{bn=r,Iu.transition=n,!(6&(Cu=t))&&Bs()}}function hc(){Pu=Du.current,xs(Du)}function dc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,is(n)),null!==Au)for(n=Au.return;null!==n;){var r=n;switch(ta(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ds();break;case 3:Ya(),xs(Ns),xs(Cs),no();break;case 5:Ja(r);break;case 4:Ya();break;case 13:case 19:xs(Za);break;case 10:Ia(r.type._context);break;case 22:case 23:hc()}n=n.return}if(Nu=e,Au=e=Dc(e.current,null),Ru=Pu=t,Ou=0,Lu=null,Uu=ju=Mu=0,Vu=Fu=null,null!==Ra){for(t=0;t<Ra.length;t++)if(null!==(r=(n=Ra[t]).interleaved)){n.interleaved=null;var i=r.next,s=n.pending;if(null!==s){var a=s.next;s.next=i,r.next=a}n.pending=r}Ra=null}return e}function fc(e,t){for(;;){var n=Au;try{if(Ta(),ro.current=Jo,uo){for(var r=ao.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}uo=!1}if(so=0,lo=oo=ao=null,co=!1,ho=0,Tu.current=null,null===n||null===n.return){Ou=1,Lu=t,Au=null;break}e:{var s=e,a=n.return,o=n,l=t;if(t=Ru,o.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=o,h=c.tag;if(!(1&c.mode||0!==h&&11!==h&&15!==h)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=gl(a);if(null!==f){f.flags&=-257,yl(f,a,o,0,t),1&f.mode&&ml(s,u,t),l=u;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(!(1&t)){ml(s,u,t),mc();break e}l=Error(se(426))}else if(ia&&1&o.mode){var g=gl(a);if(null!==g){!(65536&g.flags)&&(g.flags|=256),yl(g,a,o,0,t),pa(ul(l,o));break e}}s=l=ul(l,o),4!==Ou&&(Ou=2),null===Fu?Fu=[s]:Fu.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,za(s,fl(0,l,t));break e;case 1:o=l;var y=s.type,v=s.stateNode;if(!(128&s.flags||"function"!=typeof y.getDerivedStateFromError&&(null===v||"function"!=typeof v.componentDidCatch||null!==Wu&&Wu.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t,za(s,pl(s,o,t));break e}}s=s.return}while(null!==s)}bc(n)}catch(w){t=w,Au===n&&null!==n&&(Au=n=n.return);continue}break}}function pc(){var e=xu.current;return xu.current=Jo,null===e?Jo:e}function mc(){0!==Ou&&3!==Ou&&2!==Ou||(Ou=4),null===Nu||!(268435455&Mu)&&!(268435455&ju)||oc(Nu,Ru)}function gc(e,t){var n=Cu;Cu|=2;var r=pc();for(Nu===e&&Ru===t||($u=null,dc(e,t));;)try{yc();break}catch(i){fc(e,i)}if(Ta(),Cu=n,xu.current=r,null!==Au)throw Error(se(261));return Nu=null,Ru=0,Ou}function yc(){for(;null!==Au;)wc(Au)}function vc(){for(;null!==Au&&!Qt();)wc(Au)}function wc(e){var t=ku(e.alternate,e,Pu);e.memoizedProps=e.pendingProps,null===t?bc(e):Au=t,Tu.current=null}function bc(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Gl(n,t)))return n.flags&=32767,void(Au=n);if(null===e)return Ou=6,void(Au=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=Kl(n,t,Pu)))return void(Au=n);if(null!==(t=t.sibling))return void(Au=t);Au=t=e}while(null!==t);0===Ou&&(Ou=5)}function _c(e,t,n){var r=bn,i=Iu.transition;try{Iu.transition=null,bn=1,function(e,t,n,r){do{Ec()}while(null!==Gu);if(6&Cu)throw Error(se(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(se(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-on(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}(e,s),e===Nu&&(Au=Nu=null,Ru=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||Ku||(Ku=!0,Nc(tn,(function(){return Ec(),null}))),s=!!(15990&n.flags),!!(15990&n.subtreeFlags)||s){s=Iu.transition,Iu.transition=null;var a=bn;bn=1;var o=Cu;Cu|=4,Tu.current=null,function(e,t){if(es=Hn,fi(e=di())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(b){n=null;break e}var a=0,o=-1,l=-1,u=0,c=0,h=e,d=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(o=a+i),h!==s||0!==r&&3!==h.nodeType||(l=a+r),3===h.nodeType&&(a+=h.nodeValue.length),null!==(f=h.firstChild);)d=h,h=f;for(;;){if(h===e)break t;if(d===n&&++u===i&&(o=a),d===s&&++c===r&&(l=a),null!==(f=h.nextSibling))break;d=(h=d).parentNode}h=f}n=-1===o||-1===l?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ts={focusedElem:e,selectionRange:n},Hn=!1,Jl=t;null!==Jl;)if(e=(t=Jl).child,1028&t.subtreeFlags&&null!==e)e.return=t,Jl=e;else for(;null!==Jl;){t=Jl;try{var p=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:nl(t.type,m),g);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(se(163))}}catch(b){Sc(t,t.return,b)}if(null!==(e=t.sibling)){e.return=t.return,Jl=e;break}Jl=t.return}p=tu,tu=!1}(e,n),gu(n,e),pi(ts),Hn=!!es,ts=es=null,e.current=n,vu(n),Yt(),Cu=o,bn=a,Iu.transition=s}else e.current=n;if(Ku&&(Ku=!1,Gu=e,Qu=i),s=e.pendingLanes,0===s&&(Wu=null),function(e){if(an&&"function"==typeof an.onCommitFiberRoot)try{an.onCommitFiberRoot(sn,e,void 0,!(128&~e.current.flags))}catch(t){}}(n.stateNode),rc(e,Xt()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qu)throw qu=!1,e=Hu,Hu=null,e;!!(1&Qu)&&0!==e.tag&&Ec(),s=e.pendingLanes,1&s?e===Xu?Yu++:(Yu=0,Xu=e):Yu=0,Bs()}(e,t,n,r)}finally{Iu.transition=i,bn=r}return null}function Ec(){if(null!==Gu){var e=_n(Qu),t=Iu.transition,n=bn;try{if(Iu.transition=null,bn=16>e?16:e,null===Gu)var r=!1;else{if(e=Gu,Gu=null,Qu=0,6&Cu)throw Error(se(331));var i=Cu;for(Cu|=4,Jl=e.current;null!==Jl;){var s=Jl,a=s.child;if(16&Jl.flags){var o=s.deletions;if(null!==o){for(var l=0;l<o.length;l++){var u=o[l];for(Jl=u;null!==Jl;){var c=Jl;switch(c.tag){case 0:case 11:case 15:nu(8,c,s)}var h=c.child;if(null!==h)h.return=c,Jl=h;else for(;null!==Jl;){var d=(c=Jl).sibling,f=c.return;if(su(c),c===u){Jl=null;break}if(null!==d){d.return=f,Jl=d;break}Jl=f}}}var p=s.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}Jl=s}}if(2064&s.subtreeFlags&&null!==a)a.return=s,Jl=a;else e:for(;null!==Jl;){if(2048&(s=Jl).flags)switch(s.tag){case 0:case 11:case 15:nu(9,s,s.return)}var y=s.sibling;if(null!==y){y.return=s.return,Jl=y;break e}Jl=s.return}}var v=e.current;for(Jl=v;null!==Jl;){var w=(a=Jl).child;if(2064&a.subtreeFlags&&null!==w)w.return=a,Jl=w;else e:for(a=v;null!==Jl;){if(2048&(o=Jl).flags)try{switch(o.tag){case 0:case 11:case 15:ru(9,o)}}catch(_){Sc(o,o.return,_)}if(o===a){Jl=null;break e}var b=o.sibling;if(null!==b){b.return=o.return,Jl=b;break e}Jl=o.return}}if(Cu=i,Bs(),an&&"function"==typeof an.onPostCommitFiberRoot)try{an.onPostCommitFiberRoot(sn,e)}catch(_){}r=!0}return r}finally{bn=n,Iu.transition=t}}return!1}function kc(e,t,n){e=Fa(e,t=fl(0,t=ul(n,t),1),1),t=ec(),null!==e&&(vn(e,1,t),rc(e,t))}function Sc(e,t,n){if(3===e.tag)kc(e,e,n);else for(;null!==t;){if(3===t.tag){kc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Wu||!Wu.has(r))){t=Fa(t,e=pl(t,e=ul(n,e),1),1),e=ec(),null!==t&&(vn(t,1,e),rc(t,e));break}}t=t.return}}function xc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ec(),e.pingedLanes|=e.suspendedLanes&n,Nu===e&&(Ru&n)===n&&(4===Ou||3===Ou&&(130023424&Ru)===Ru&&500>Xt()-zu?dc(e,0):Uu|=n),rc(e,t)}function Tc(e,t){0===t&&(1&e.mode?(t=hn,!(130023424&(hn<<=1))&&(hn=4194304)):t=1);var n=ec();null!==(e=Oa(e,t))&&(vn(e,t,n),rc(e,n))}function Ic(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Tc(e,n)}function Cc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(se(314))}null!==r&&r.delete(t),Tc(e,n)}function Nc(e,t){return Kt(e,t)}function Ac(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rc(e,t,n,r){return new Ac(e,t,n,r)}function Pc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Dc(e,t){var n=e.alternate;return null===n?((n=Rc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oc(e,t,n,r,i,s){var a=2;if(r=e,"function"==typeof e)Pc(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case ke:return Lc(n.children,i,s,t);case Se:a=8,i|=8;break;case xe:return(e=Rc(12,n,t,2|i)).elementType=xe,e.lanes=s,e;case Ne:return(e=Rc(13,n,t,i)).elementType=Ne,e.lanes=s,e;case Ae:return(e=Rc(19,n,t,i)).elementType=Ae,e.lanes=s,e;case De:return Mc(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case Te:a=10;break e;case Ie:a=9;break e;case Ce:a=11;break e;case Re:a=14;break e;case Pe:a=16,r=null;break e}throw Error(se(130,null==e?e:typeof e,""))}return(t=Rc(a,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Lc(e,t,n,r){return(e=Rc(7,e,r,t)).lanes=n,e}function Mc(e,t,n,r){return(e=Rc(22,e,r,t)).elementType=De,e.lanes=n,e.stateNode={isHidden:!1},e}function jc(e,t,n){return(e=Rc(6,e,null,t)).lanes=n,e}function Uc(e,t,n){return(t=Rc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yn(0),this.expirationTimes=yn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yn(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vc(e,t,n,r,i,s,a,o,l){return e=new Fc(e,t,n,o,l),1===t?(t=1,!0===s&&(t|=8)):t=0,s=Rc(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ma(s),e}function zc(e){if(!e)return Is;e:{if(Bt(e=e._reactInternals)!==e||1!==e.tag)throw Error(se(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ps(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(se(171))}if(1===e.tag){var n=e.type;if(Ps(n))return Ls(e,n,t)}return t}function Bc(e,t,n,r,i,s,a,o,l){return(e=Vc(n,r,!0,e,0,s,0,o,l)).context=zc(null),n=e.current,(s=Ua(r=ec(),i=tc(n))).callback=null!=t?t:null,Fa(n,s,i),e.current.lanes=i,vn(e,i,r),rc(e,r),e}function $c(e,t,n,r){var i=t.current,s=ec(),a=tc(i);return n=zc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ua(s,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fa(i,t,a))&&(nc(e,i,a,s),Va(e,i,a)),a}function qc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Hc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Wc(e,t){Hc(e,t),(e=e.alternate)&&Hc(e,t)}ku=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ns.current)wl=!0;else{if(0===(e.lanes&n)&&!(128&t.flags))return wl=!1,function(e,t,n){switch(t.tag){case 3:Nl(t),fa();break;case 5:Xa(t);break;case 1:Ps(t.type)&&Ms(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ts(Ea,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ts(Za,1&Za.current),t.flags|=128,null):0!==(n&t.child.childLanes)?jl(e,t,n):(Ts(Za,1&Za.current),null!==(e=ql(e,t,n))?e.sibling:null);Ts(Za,1&Za.current);break;case 19:if(r=0!==(n&t.childLanes),128&e.flags){if(r)return Bl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ts(Za,Za.current),r)break;return null;case 22:case 23:return t.lanes=0,Sl(e,t,n)}return ql(e,t,n)}(e,t,n);wl=!!(131072&e.flags)}else wl=!1,ia&&1048576&t.flags&&Zs(t,Ws,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$l(e,t),e=t.pendingProps;var i=Rs(t,Cs.current);Na(t,n),i=go(null,t,r,e,i,n);var s=yo();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ps(r)?(s=!0,Ms(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Ma(t),i.updater=il,t.stateNode=i,i._reactInternals=t,ll(t,r,e,n),t=Cl(null,t,r,!0,s,n)):(t.tag=0,ia&&s&&ea(t),bl(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($l(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Pc(e)?1:0;if(null!=e){if((e=e.$$typeof)===Ce)return 11;if(e===Re)return 14}return 2}(r),e=nl(r,e),i){case 0:t=Tl(null,t,r,e,n);break e;case 1:t=Il(null,t,r,e,n);break e;case 11:t=_l(null,t,r,e,n);break e;case 14:t=El(null,t,r,nl(r.type,e),n);break e}throw Error(se(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Tl(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 1:return r=t.type,i=t.pendingProps,Il(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 3:e:{if(Nl(t),null===e)throw Error(se(387));r=t.pendingProps,i=(s=t.memoizedState).element,ja(e,t),Ba(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=Al(e,t,r,n,i=ul(Error(se(423)),t));break e}if(r!==i){t=Al(e,t,r,n,i=ul(Error(se(424)),t));break e}for(ra=us(t.stateNode.containerInfo.firstChild),na=t,ia=!0,sa=null,n=_a(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fa(),r===i){t=ql(e,t,n);break e}bl(e,t,r,n)}t=t.child}return t;case 5:return Xa(t),null===e&&ua(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,a=i.children,ns(r,i)?a=null:null!==s&&ns(r,s)&&(t.flags|=32),xl(e,t),bl(e,t,a,n),t.child;case 6:return null===e&&ua(t),null;case 13:return jl(e,t,n);case 4:return Qa(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ba(t,null,r,n):bl(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,_l(e,t,r,i=t.elementType===r?i:nl(r,i),n);case 7:return bl(e,t,t.pendingProps,n),t.child;case 8:case 12:return bl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Ts(Ea,r._currentValue),r._currentValue=a,null!==s)if(oi(s.value,a)){if(s.children===i.children&&!Ns.current){t=ql(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var o=s.dependencies;if(null!==o){a=s.child;for(var l=o.firstContext;null!==l;){if(l.context===r){if(1===s.tag){(l=Ua(-1,n&-n)).tag=2;var u=s.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ca(s.return,n,t),o.lanes|=n;break}l=l.next}}else if(10===s.tag)a=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(a=s.return))throw Error(se(341));a.lanes|=n,null!==(o=a.alternate)&&(o.lanes|=n),Ca(a,n,t),a=s.sibling}else a=s.child;if(null!==a)a.return=s;else for(a=s;null!==a;){if(a===t){a=null;break}if(null!==(s=a.sibling)){s.return=a.return,a=s;break}a=a.return}s=a}bl(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Na(t,n),r=r(i=Aa(i)),t.flags|=1,bl(e,t,r,n),t.child;case 14:return i=nl(r=t.type,t.pendingProps),El(e,t,r,i=nl(r.type,i),n);case 15:return kl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:nl(r,i),$l(e,t),t.tag=1,Ps(r)?(e=!0,Ms(t)):e=!1,Na(t,n),al(t,r,i),ll(t,r,i,n),Cl(null,t,r,!0,e,n);case 19:return Bl(e,t,n);case 22:return Sl(e,t,n)}throw Error(se(156,t.tag))};var Kc="function"==typeof reportError?reportError:function(e){console.error(e)};function Gc(e){this._internalRoot=e}function Qc(e){this._internalRoot=e}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Jc(){}function Zc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if("function"==typeof i){var o=i;i=function(){var e=qc(a);o.call(e)}}$c(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"==typeof r){var s=r;r=function(){var e=qc(a);s.call(e)}}var a=Bc(t,r,e,0,null,!1,0,"",Jc);return e._reactRootContainer=a,e[ps]=a.current,Bi(8===e.nodeType?e.parentNode:e),cc(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var o=r;r=function(){var e=qc(l);o.call(e)}}var l=Vc(e,0,!1,null,0,!1,0,"",Jc);return e._reactRootContainer=l,e[ps]=l.current,Bi(8===e.nodeType?e.parentNode:e),cc((function(){$c(t,l,n,r)})),l}(n,t,e,i,r);return qc(a)}Qc.prototype.render=Gc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(se(409));$c(e,t,null,null)},Qc.prototype.unmount=Gc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cc((function(){$c(null,e,null,null)})),t[ps]=null}},Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=xn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<On.length&&0!==t&&t<On[n].priority;n++);On.splice(n,0,e),0===n&&Un(e)}},En=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dn(t.pendingLanes);0!==n&&(wn(t,1|n),rc(t,Xt()),!(6&Cu)&&(Bu=Xt()+500,Bs()))}break;case 13:cc((function(){var t=Oa(e,1);if(null!==t){var n=ec();nc(t,e,1,n)}})),Wc(e,1)}},kn=function(e){if(13===e.tag){var t=Oa(e,134217728);if(null!==t)nc(t,e,134217728,ec());Wc(e,134217728)}},Sn=function(e){if(13===e.tag){var t=tc(e),n=Oa(e,t);if(null!==n)nc(n,e,t,ec());Wc(e,t)}},xn=function(){return bn},Tn=function(e,t){var n=bn;try{return bn=e,t()}finally{bn=n}},Et=function(e,t,n){switch(t){case"input":if(Je(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=_s(r);if(!i)throw Error(se(90));Ke(r),Je(r,i)}}}break;case"textarea":st(e,n);break;case"select":null!=(t=n.value)&&nt(e,!!n.multiple,t,!1)}},Ct=uc,Nt=cc;var eh={usingClientEntryPoint:!1,Events:[ws,bs,_s,Tt,It,uc]},th={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nh={bundleType:th.bundleType,version:th.version,rendererPackageName:th.rendererPackageName,rendererConfig:th.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ht(e))?null:e.stateNode},findFiberByHostInstance:th.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rh.isDisabled&&rh.supportsFiber)try{sn=rh.inject(nh),an=rh}catch(ct){}}Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eh,Z.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yc(t))throw Error(se(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ee,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},Z.createRoot=function(e,t){if(!Yc(e))throw Error(se(299));var n=!1,r="",i=Kc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Vc(e,1,!1,null,0,n,0,r,i),e[ps]=t.current,Bi(8===e.nodeType?e.parentNode:e),new Gc(t)},Z.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(se(188));throw e=Object.keys(e).join(","),Error(se(268,e))}return e=null===(e=Ht(t))?null:e.stateNode},Z.flushSync=function(e){return cc(e)},Z.hydrate=function(e,t,n){if(!Xc(t))throw Error(se(200));return Zc(null,e,t,!0,n)},Z.hydrateRoot=function(e,t,n){if(!Yc(e))throw Error(se(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",a=Kc;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=Bc(t,null,e,1,null!=n?n:null,i,0,s,a),e[ps]=t.current,Bi(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Qc(t)},Z.render=function(e,t,n){if(!Xc(t))throw Error(se(200));return Zc(null,e,t,!1,n)},Z.unmountComponentAtNode=function(e){if(!Xc(e))throw Error(se(40));return!!e._reactRootContainer&&(cc((function(){Zc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ps]=null}))})),!0)},Z.unstable_batchedUpdates=uc,Z.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xc(n))throw Error(se(200));if(null==e||void 0===e._reactInternals)throw Error(se(38));return Zc(e,t,n,!1,r)},Z.version="18.3.1-next-f1338f8080-20240426",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),J.exports=Z;var ih,sh,ah=J.exports;
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function oh(){return oh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oh.apply(this,arguments)}X.createRoot=ah.createRoot,X.hydrateRoot=ah.hydrateRoot,(sh=ih||(ih={})).Pop="POP",sh.Push="PUSH",sh.Replace="REPLACE";const lh="popstate";function uh(e){return void 0===e&&(e={}),function(e,t,n,r){void 0===r&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,o=ih.Pop,l=null,u=c();null==u&&(u=0,a.replaceState(oh({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function h(){o=ih.Pop;let e=c(),t=null==e?null:e-u;u=e,l&&l({action:o,location:m.location,delta:t})}function d(e,t){o=ih.Push;let n=fh(m.location,e,t);u=c()+1;let r=dh(n,u),h=m.createHref(n);try{a.pushState(r,"",h)}catch(d){if(d instanceof DOMException&&"DataCloneError"===d.name)throw d;i.location.assign(h)}s&&l&&l({action:o,location:m.location,delta:1})}function f(e,t){o=ih.Replace;let n=fh(m.location,e,t);u=c();let r=dh(n,u),i=m.createHref(n);a.replaceState(r,"",i),s&&l&&l({action:o,location:m.location,delta:0})}function p(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:ph(e);return n=n.replace(/ $/,"%20"),ch(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}let m={get action(){return o},get location(){return e(i,a)},listen(e){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(lh,h),l=e,()=>{i.removeEventListener(lh,h),l=null}},createHref:e=>t(i,e),createURL:p,encodeLocation(e){let t=p(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:d,replace:f,go:e=>a.go(e)};return m}((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return fh("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:ph(t)}),0,e)}function ch(e,t){if(!1===e||null==e)throw new Error(t)}function hh(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function dh(e,t){return{usr:e.state,key:e.key,idx:t}}function fh(e,t,n,r){return void 0===n&&(n=null),oh({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?mh(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function ph(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function mh(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}var gh,yh;function vh(e,t,n){return void 0===n&&(n="/"),function(e,t,n){let r="string"==typeof t?mh(t):t,i=Ph(r.pathname||"/",n);if(null==i)return null;let s=wh(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(s);let a=null;for(let o=0;null==a&&o<s.length;++o){let e=Rh(i);a=Nh(s[o],e)}return a}(e,t,n)}function wh(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,s)=>{let a={relativePath:void 0===s?e.path||"":s,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};a.relativePath.startsWith("/")&&(ch(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),a.relativePath=a.relativePath.slice(r.length));let o=Mh([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(ch(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+o+'".'),wh(e.children,t,l,o)),(null!=e.path||e.index)&&t.push({path:o,score:Ch(o,e.index),routesMeta:l})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of bh(e.path))i(e,t,r);else i(e,t)})),t}function bh(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(0===r.length)return i?[s,""]:[s];let a=bh(r.join("/")),o=[];return o.push(...a.map((e=>""===e?s:[s,e].join("/")))),i&&o.push(...a),o.map((t=>e.startsWith("/")&&""===t?"/":t))}(yh=gh||(gh={})).data="data",yh.deferred="deferred",yh.redirect="redirect",yh.error="error";const _h=/^:[\w-]+$/,Eh=3,kh=2,Sh=1,xh=10,Th=-2,Ih=e=>"*"===e;function Ch(e,t){let n=e.split("/"),r=n.length;return n.some(Ih)&&(r+=Th),t&&(r+=kh),n.filter((e=>!Ih(e))).reduce(((e,t)=>e+(_h.test(t)?Eh:""===t?Sh:xh)),r)}function Nh(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let o=0;o<r.length;++o){let e=r[o],n=o===r.length-1,l="/"===s?t:t.slice(s.length)||"/",u=Ah({path:e.relativePath,caseSensitive:e.caseSensitive,end:n},l),c=e.route;if(!u)return null;Object.assign(i,u.params),a.push({params:i,pathname:Mh([s,u.pathname]),pathnameBase:jh(Mh([s,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(s=Mh([s,u.pathnameBase]))}return a}function Ah(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);hh("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let s=new RegExp(i,t?void 0:"i");return[s,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=o[n]||"";a=s.slice(0,s.length-e.length).replace(/(.)\/+$/,"$1")}const l=o[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:s,pathnameBase:a,pattern:e}}function Rh(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return hh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function Ph(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Dh(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function Oh(e,t){let n=function(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function Lh(e,t,n,r){let i;void 0===r&&(r=!1),"string"==typeof e?i=mh(e):(i=oh({},e),ch(!i.pathname||!i.pathname.includes("?"),Dh("?","pathname","search",i)),ch(!i.pathname||!i.pathname.includes("#"),Dh("#","pathname","hash",i)),ch(!i.search||!i.search.includes("#"),Dh("#","search","hash",i)));let s,a=""===e||""===i.pathname,o=a?"/":i.pathname;if(null==o)s=n;else{let e=t.length-1;if(!r&&o.startsWith("..")){let t=o.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}s=e>=0?t[e]:"/"}let l=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"==typeof e?mh(e):e,s=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:s,search:Uh(r),hash:Fh(i)}}(i,s),u=o&&"/"!==o&&o.endsWith("/"),c=(a||"."===o)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}const Mh=e=>e.join("/").replace(/\/\/+/g,"/"),jh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Uh=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Fh=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";const Vh=["post","put","patch","delete"];new Set(Vh);const zh=["get",...Vh];
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Bh(){return Bh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bh.apply(this,arguments)}new Set(zh);const $h=V.createContext(null),qh=V.createContext(null),Hh=V.createContext(null),Wh=V.createContext(null),Kh=V.createContext({outlet:null,matches:[],isDataRoute:!1}),Gh=V.createContext(null);function Qh(){return null!=V.useContext(Wh)}function Yh(){return Qh()||ch(!1),V.useContext(Wh).location}function Xh(e){V.useContext(Hh).static||V.useLayoutEffect(e)}function Jh(){let{isDataRoute:e}=V.useContext(Kh);return e?function(){let{router:e}=function(){let e=V.useContext($h);return e||ch(!1),e}(sd.UseNavigateStable),t=od(ad.UseNavigateStable),n=V.useRef(!1);return Xh((()=>{n.current=!0})),V.useCallback((function(r,i){void 0===i&&(i={}),n.current&&("number"==typeof r?e.navigate(r):e.navigate(r,Bh({fromRouteId:t},i)))}),[e,t])}():function(){Qh()||ch(!1);let e=V.useContext($h),{basename:t,future:n,navigator:r}=V.useContext(Hh),{matches:i}=V.useContext(Kh),{pathname:s}=Yh(),a=JSON.stringify(Oh(i,n.v7_relativeSplatPath)),o=V.useRef(!1);return Xh((()=>{o.current=!0})),V.useCallback((function(n,i){if(void 0===i&&(i={}),!o.current)return;if("number"==typeof n)return void r.go(n);let l=Lh(n,JSON.parse(a),s,"path"===i.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:Mh([t,l.pathname])),(i.replace?r.replace:r.push)(l,i.state,i)}),[t,r,a,s,e])}()}function Zh(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=V.useContext(Hh),{matches:i}=V.useContext(Kh),{pathname:s}=Yh(),a=JSON.stringify(Oh(i,r.v7_relativeSplatPath));return V.useMemo((()=>Lh(e,JSON.parse(a),s,"path"===n)),[e,a,s,n])}function ed(e,t){return function(e,t,n,r){Qh()||ch(!1);let{navigator:i}=V.useContext(Hh),{matches:s}=V.useContext(Kh),a=s[s.length-1],o=a?a.params:{};!a||a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u,c=Yh();if(t){var h;let e="string"==typeof t?mh(t):t;"/"===l||(null==(h=e.pathname)?void 0:h.startsWith(l))||ch(!1),u=e}else u=c;let d=u.pathname||"/",f=d;if("/"!==l){let e=l.replace(/^\//,"").split("/");f="/"+d.replace(/^\//,"").split("/").slice(e.length).join("/")}let p=vh(e,{pathname:f}),m=function(e,t,n,r){var i;void 0===t&&(t=[]);void 0===n&&(n=null);void 0===r&&(r=null);if(null==e){var s;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(s=r)&&s.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let a=e,o=null==(i=n)?void 0:i.errors;if(null!=o){let e=a.findIndex((e=>e.route.id&&void 0!==(null==o?void 0:o[e.route.id])));e>=0||ch(!1),a=a.slice(0,Math.min(a.length,e+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let e=a[c];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=c),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){l=!0,a=u>=0?a.slice(0,u+1):[a[0]];break}}}return a.reduceRight(((e,r,i)=>{let s,c=!1,h=null,d=null;var f;n&&(s=o&&r.route.id?o[r.route.id]:void 0,h=r.route.errorElement||nd,l&&(u<0&&0===i?(ld[f="route-fallback"]||(ld[f]=!0),c=!0,d=null):u===i&&(c=!0,d=r.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,i+1)),m=()=>{let t;return t=s?h:c?d:r.route.Component?V.createElement(r.route.Component,null):r.route.element?r.route.element:e,V.createElement(id,{match:r,routeContext:{outlet:e,matches:p,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===i)?V.createElement(rd,{location:n.location,revalidation:n.revalidation,component:h,error:s,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()}),null)}(p&&p.map((e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Mh([l,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:Mh([l,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,n,r);if(t&&m)return V.createElement(Wh.Provider,{value:{location:Bh({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ih.Pop}},m);return m}(e,t)}function td(){let e=function(){var e;let t=V.useContext(Gh),n=function(){let e=V.useContext(qh);return e||ch(!1),e}(),r=od();if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=function(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},t),n?V.createElement("pre",{style:r},n):null,null)}const nd=V.createElement(td,null);class rd extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?V.createElement(Kh.Provider,{value:this.props.routeContext},V.createElement(Gh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function id(e){let{routeContext:t,match:n,children:r}=e,i=V.useContext($h);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),V.createElement(Kh.Provider,{value:t},r)}var sd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(sd||{}),ad=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ad||{});function od(e){let t=function(){let e=V.useContext(Kh);return e||ch(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||ch(!1),n.route.id}const ld={};function ud(e){ch(!1)}function cd(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ih.Pop,navigator:s,static:a=!1,future:o}=e;Qh()&&ch(!1);let l=t.replace(/^\/*/,"/"),u=V.useMemo((()=>({basename:l,navigator:s,static:a,future:Bh({v7_relativeSplatPath:!1},o)})),[l,o,s,a]);"string"==typeof r&&(r=mh(r));let{pathname:c="/",search:h="",hash:d="",state:f=null,key:p="default"}=r,m=V.useMemo((()=>{let e=Ph(c,l);return null==e?null:{location:{pathname:e,search:h,hash:d,state:f,key:p},navigationType:i}}),[l,c,h,d,f,p,i]);return null==m?null:V.createElement(Hh.Provider,{value:u},V.createElement(Wh.Provider,{children:n,value:m}))}function hd(e){let{children:t,location:n}=e;return ed(dd(t),n)}function dd(e,t){void 0===t&&(t=[]);let n=[];return V.Children.forEach(e,((e,r)=>{if(!V.isValidElement(e))return;let i=[...t,r];if(e.type===V.Fragment)return void n.push.apply(n,dd(e.props.children,i));e.type!==ud&&ch(!1),e.props.index&&e.props.children&&ch(!1);let s={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(s.children=dd(e.props.children,i)),n.push(s)})),n}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fd(){return fd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fd.apply(this,arguments)}new Promise((()=>{}));const pd=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(Vx){}const md=B.startTransition;function gd(e){let{basename:t,children:n,future:r,window:i}=e,s=V.useRef();null==s.current&&(s.current=uh({window:i,v5Compat:!0}));let a=s.current,[o,l]=V.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},c=V.useCallback((e=>{u&&md?md((()=>l(e))):l(e)}),[l,u]);return V.useLayoutEffect((()=>a.listen(c)),[a,c]),V.useEffect((()=>{return null==(e=r)||e.v7_startTransition,void(null==e||e.v7_relativeSplatPath);var e}),[r]),V.createElement(cd,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a,future:r})}const yd="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,vd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wd=V.forwardRef((function(e,t){let n,{onClick:r,relative:i,reloadDocument:s,replace:a,state:o,target:l,to:u,preventScrollReset:c,viewTransition:h}=e,d=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,pd),{basename:f}=V.useContext(Hh),p=!1;if("string"==typeof u&&vd.test(u)&&(n=u,yd))try{let e=new URL(window.location.href),t=u.startsWith("//")?new URL(e.protocol+u):new URL(u),n=Ph(t.pathname,f);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:p=!0}catch(Vx){}let m=function(e,t){let{relative:n}=void 0===t?{}:t;Qh()||ch(!1);let{basename:r,navigator:i}=V.useContext(Hh),{hash:s,pathname:a,search:o}=Zh(e,{relative:n}),l=a;return"/"!==r&&(l="/"===a?r:Mh([r,a])),i.createHref({pathname:l,search:o,hash:s})}(u,{relative:i}),g=function(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:o}=void 0===t?{}:t,l=Jh(),u=Yh(),c=Zh(e,{relative:a});return V.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==r?r:ph(u)===ph(c);l(e,{replace:n,state:i,preventScrollReset:s,relative:a,viewTransition:o})}}),[u,l,c,r,i,n,e,s,a,o])}(u,{replace:a,state:o,target:l,preventScrollReset:c,relative:i,viewTransition:h});return V.createElement("a",fd({},d,{href:n||m,onClick:p||s?r:function(e){r&&r(e),e.defaultPrevented||g(e)},ref:t,target:l}))}));var bd,_d,Ed,kd;(_d=bd||(bd={})).UseScrollRestoration="useScrollRestoration",_d.UseSubmit="useSubmit",_d.UseSubmitFetcher="useSubmitFetcher",_d.UseFetcher="useFetcher",_d.useViewTransitionState="useViewTransitionState",(kd=Ed||(Ed={})).UseFetcher="useFetcher",kd.UseFetchers="useFetchers",kd.UseScrollRestoration="useScrollRestoration";var Sd={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Td={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,a=s?e[i+1]:0,o=i+2<e.length,l=o?e[i+2]:0,u=t>>2,c=(3&t)<<4|a>>4;let h=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(xd(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const a=i<e.length?n[e.charAt(i)]:64;++i;const o=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==a||null==o)throw new Id;const l=t<<2|s>>4;if(r.push(l),64!==a){const e=s<<4&240|a>>2;if(r.push(e),64!==o){const e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Id extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cd=function(e){return function(e){const t=xd(e);return Td.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Nd=function(e){try{return Td.decodeString(e,!0)}catch(Vx){console.error("base64Decode failed: ",Vx)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ad=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Rd=()=>{try{return Ad()||(()=>{if("undefined"==typeof process)return;const e=Sd.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(Vx){return}const t=e&&Nd(e[1]);return t&&JSON.parse(t)})()}catch(Vx){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${Vx}`)}},Pd=e=>{var t,n;return null===(n=null===(t=Rd())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},Dd=()=>{var e;return null===(e=Rd())||void 0===e?void 0:e.config},Od=e=>{var t;return null===(t=Rd())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ld{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Md(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function jd(){return!function(){var e;const t=null===(e=Rd())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(Vx){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class Ud extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ud.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fd.prototype.create)}}class Fd{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Vd,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new Ud(r,a,n)}}const Vd=/\{\$([^}]+)}/g;function zd(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Bd(n)&&Bd(s)){if(!zd(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bd(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function qd(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Hd(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Wd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Kd),void 0===r.error&&(r.error=Kd),void 0===r.complete&&(r.complete=Kd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(Vx){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(Vx){"undefined"!=typeof console&&console.error&&console.error(Vx)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Kd(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(e){return e&&e._delegate?e._delegate:e}class Qd{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Ld;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(Vx){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(Vx){if(r)return null;throw Vx}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Yd})}catch(Vx){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(Vx){}}}}clearInstance(e=Yd){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Yd){return this.instances.has(e)}getOptions(e=Yd){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Yd?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=Yd){return this.component?this.component.multipleInstances?e:Yd:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Jd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zd,ef;(ef=Zd||(Zd={}))[ef.DEBUG=0]="DEBUG",ef[ef.VERBOSE=1]="VERBOSE",ef[ef.INFO=2]="INFO",ef[ef.WARN=3]="WARN",ef[ef.ERROR=4]="ERROR",ef[ef.SILENT=5]="SILENT";const tf={debug:Zd.DEBUG,verbose:Zd.VERBOSE,info:Zd.INFO,warn:Zd.WARN,error:Zd.ERROR,silent:Zd.SILENT},nf=Zd.INFO,rf={[Zd.DEBUG]:"log",[Zd.VERBOSE]:"log",[Zd.INFO]:"info",[Zd.WARN]:"warn",[Zd.ERROR]:"error"},sf=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=rf[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class af{constructor(e){this.name=e,this._logLevel=nf,this._logHandler=sf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Zd))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?tf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Zd.DEBUG,...e),this._logHandler(this,Zd.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Zd.VERBOSE,...e),this._logHandler(this,Zd.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Zd.INFO,...e),this._logHandler(this,Zd.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Zd.WARN,...e),this._logHandler(this,Zd.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Zd.ERROR,...e),this._logHandler(this,Zd.ERROR,...e)}}let of,lf;const uf=new WeakMap,cf=new WeakMap,hf=new WeakMap,df=new WeakMap,ff=new WeakMap;let pf={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return cf.get(e);if("objectStoreNames"===t)return e.objectStoreNames||hf.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yf(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function mf(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(lf||(lf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(vf(this),t),yf(uf.get(this))}:function(...t){return yf(e.apply(vf(this),t))}:function(t,...n){const r=e.call(vf(this),t,...n);return hf.set(r,t.sort?t.sort():[t]),yf(r)}}function gf(e){return"function"==typeof e?mf(e):(e instanceof IDBTransaction&&function(e){if(cf.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));cf.set(e,t)}(e),t=e,(of||(of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,pf):e);var t}function yf(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(yf(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&uf.set(t,e)})).catch((()=>{})),ff.set(t,e),t}(e);if(df.has(e))return df.get(e);const t=gf(e);return t!==e&&(df.set(e,t),ff.set(t,e)),t}const vf=e=>ff.get(e);const wf=["get","getKey","getAll","getAllKeys","count"],bf=["put","add","delete","clear"],_f=new Map;function Ef(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(_f.get(t))return _f.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=bf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!wf.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return _f.set(t,s),s}pf=(e=>({...e,get:(t,n,r)=>Ef(t,n)||e.get(t,n,r),has:(t,n)=>!!Ef(t,n)||e.has(t,n)}))(pf);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Sf="@firebase/app",xf="0.10.13",Tf=new af("@firebase/app"),If="@firebase/app-compat",Cf="@firebase/analytics-compat",Nf="@firebase/analytics",Af="@firebase/app-check-compat",Rf="@firebase/app-check",Pf="@firebase/auth",Df="@firebase/auth-compat",Of="@firebase/database",Lf="@firebase/data-connect",Mf="@firebase/database-compat",jf="@firebase/functions",Uf="@firebase/functions-compat",Ff="@firebase/installations",Vf="@firebase/installations-compat",zf="@firebase/messaging",Bf="@firebase/messaging-compat",$f="@firebase/performance",qf="@firebase/performance-compat",Hf="@firebase/remote-config",Wf="@firebase/remote-config-compat",Kf="@firebase/storage",Gf="@firebase/storage-compat",Qf="@firebase/firestore",Yf="@firebase/vertexai-preview",Xf="@firebase/firestore-compat",Jf="firebase",Zf="[DEFAULT]",ep={[Sf]:"fire-core",[If]:"fire-core-compat",[Nf]:"fire-analytics",[Cf]:"fire-analytics-compat",[Rf]:"fire-app-check",[Af]:"fire-app-check-compat",[Pf]:"fire-auth",[Df]:"fire-auth-compat",[Of]:"fire-rtdb",[Lf]:"fire-data-connect",[Mf]:"fire-rtdb-compat",[jf]:"fire-fn",[Uf]:"fire-fn-compat",[Ff]:"fire-iid",[Vf]:"fire-iid-compat",[zf]:"fire-fcm",[Bf]:"fire-fcm-compat",[$f]:"fire-perf",[qf]:"fire-perf-compat",[Hf]:"fire-rc",[Wf]:"fire-rc-compat",[Kf]:"fire-gcs",[Gf]:"fire-gcs-compat",[Qf]:"fire-fst",[Xf]:"fire-fst-compat",[Yf]:"fire-vertex","fire-js":"fire-js",[Jf]:"fire-js-all"},tp=new Map,np=new Map,rp=new Map;function ip(e,t){try{e.container.addComponent(t)}catch(Vx){Tf.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,Vx)}}function sp(e){const t=e.name;if(rp.has(t))return Tf.debug(`There were multiple attempts to register component ${t}.`),!1;rp.set(t,e);for(const n of tp.values())ip(n,e);for(const n of np.values())ip(n,e);return!0}function ap(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function op(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=new Fd("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class up{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Qd("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lp.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="10.14.1";function hp(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Zf,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw lp.create("bad-app-name",{appName:String(i)});if(n||(n=Dd()),!n)throw lp.create("no-options");const s=tp.get(i);if(s){if(zd(n,s.options)&&zd(r,s.config))return s;throw lp.create("duplicate-app",{appName:i})}const a=new Jd(i);for(const l of rp.values())a.addComponent(l);const o=new up(n,r,a);return tp.set(i,o),o}function dp(e=Zf){const t=tp.get(e);if(!t&&e===Zf&&Dd())return hp();if(!t)throw lp.create("no-app",{appName:e});return t}function fp(e,t,n){var r;let i=null!==(r=ep[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Tf.warn(e.join(" "))}sp(new Qd(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="firebase-heartbeat-store";let mp=null;function gp(){return mp||(mp=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=yf(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(yf(a.result),e.oldVersion,e.newVersion,yf(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),o.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(pp)}catch(Vx){console.warn(Vx)}}}).catch((e=>{throw lp.create("idb-open",{originalErrorMessage:e.message})}))),mp}async function yp(e,t){try{const n=(await gp()).transaction(pp,"readwrite"),r=n.objectStore(pp);await r.put(t,vp(e)),await n.done}catch(Vx){if(Vx instanceof Ud)Tf.warn(Vx.message);else{const t=lp.create("idb-set",{originalErrorMessage:null==Vx?void 0:Vx.message});Tf.warn(t.message)}}}function vp(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _p(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bp();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}catch(Vx){Tf.warn(Vx)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=bp(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ep(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ep(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=Cd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(Vx){return Tf.warn(Vx),""}}}function bp(){return(new Date).toISOString().substring(0,10)}class _p{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(Vx){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await gp()).transaction(pp),n=await t.objectStore(pp).get(vp(e));return await t.done,n}catch(Vx){if(Vx instanceof Ud)Tf.warn(Vx.message);else{const t=lp.create("idb-get",{originalErrorMessage:null==Vx?void 0:Vx.message});Tf.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return yp(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return yp(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ep(e){return Cd(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kp;function Sp(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function xp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}kp="",sp(new Qd("platform-logger",(e=>new kf(e)),"PRIVATE")),sp(new Qd("heartbeat",(e=>new wp(e)),"PRIVATE")),fp(Sf,xf,kp),fp(Sf,xf,"esm2017"),fp("fire-js",""),"function"==typeof SuppressedError&&SuppressedError;const Tp=xp,Ip=new Fd("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Cp=new af("@firebase/auth");function Np(e,...t){Cp.logLevel<=Zd.ERROR&&Cp.error(`Auth (${cp}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(e,...t){throw Op(e,...t)}function Rp(e,...t){return Op(e,...t)}function Pp(e,t,n){const r=Object.assign(Object.assign({},Tp()),{[t]:n});return new Fd("auth","Firebase",r).create(t,{appName:e.name})}function Dp(e){return Pp(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Op(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ip.create(e,...t)}function Lp(e,t,...n){if(!e)throw Op(t,...n)}function Mp(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Np(t),new Error(t)}function jp(e,t){e||Mp(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Fp(){return"http:"===Vp()||"https:"===Vp()}function Vp(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Fp()||function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bp{constructor(e,t){this.shortDelay=e,this.longDelay=t,jp(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Md())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return zp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(e,t){jp(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Mp("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Mp("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Mp("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Wp=new Bp(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Gp(e,t,n,r,i={}){return Qp(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const a=$d(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:o},i);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),qp.fetch()(Xp(e,e.config.apiHost,n,a),l)}))}async function Qp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Hp),t);try{const t=new Zp(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw em(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw em(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw em(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw em(e,"user-disabled",s);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw Pp(e,o,a);Ap(e,o)}}catch(Vx){if(Vx instanceof Ud)throw Vx;Ap(e,"network-request-failed",{message:String(Vx)})}}async function Yp(e,t,n,r,i={}){const s=await Gp(e,t,n,r,i);return"mfaPendingCredential"in s&&Ap(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Xp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?$p(e.config,i):`${e.config.apiScheme}://${i}`}function Jp(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Rp(this.auth,"network-request-failed"))),Wp.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function em(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rp(e,t,r);return i.customData._tokenResponse=n,i}function tm(e){return void 0!==e&&void 0!==e.enterprise}class nm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Jp(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}async function rm(e,t){return Gp(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(Vx){}}function sm(e){return 1e3*Number(e)}function am(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Np("JWT malformed, contained fewer than 3 sections"),null;try{const e=Nd(n);return e?JSON.parse(e):(Np("Failed to decode base64 JWT payload"),null)}catch(Vx){return Np("Caught error parsing JWT payload as JSON",null==Vx?void 0:Vx.toString()),null}}function om(e){const t=am(e);return Lp(t,"internal-error"),Lp(void 0!==t.exp,"internal-error"),Lp(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lm(e,t,n=!1){if(n)return t;try{return await t}catch(Vx){throw Vx instanceof Ud&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Vx)&&e.auth.currentUser===e&&await e.auth.signOut(),Vx}}class um{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(Vx){return void("auth/network-request-failed"===(null==Vx?void 0:Vx.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=im(this.lastLoginAt),this.creationTime=im(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(e){var t;const n=e.auth,r=await e.getIdToken(),i=await lm(e,rm(n,{idToken:r}));Lp(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?dm(s.providerUserInfo):[],o=(l=e.providerData,u=a,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const c=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),d=!!c&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new cm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}function dm(e){return e.map((e=>{var{providerId:t}=e,n=Sp(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fm{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Lp(e.idToken,"internal-error"),Lp(void 0!==e.idToken,"internal-error"),Lp(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):om(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Lp(0!==e.length,"internal-error");const t=om(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(Lp(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await Qp(e,{},(async()=>{const n=$d({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Xp(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qp.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new fm;return n&&(Lp("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Lp("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Lp("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fm,this.toJSON())}_performRefresh(){return Mp("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(e,t){Lp("string"==typeof e||void 0===e,"internal-error",{appName:t})}class mm{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Sp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new um(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await lm(this,this.stsTokenManager.getToken(this.auth,e));return Lp(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Gd(e),r=await n.getIdToken(t),i=am(r);Lp(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:im(sm(i.auth_time)),issuedAtTime:im(sm(i.iat)),expirationTime:im(sm(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Gd(e);await hm(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Lp(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new mm(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Lp(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await hm(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(op(this.auth.app))return Promise.reject(Dp(this.auth));const e=await this.getIdToken();return await lm(this,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Gp(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:E}=t;Lp(v&&E,e,"internal-error");const k=fm.fromJSON(this.name,E);Lp("string"==typeof v,e,"internal-error"),pm(c,e.name),pm(h,e.name),Lp("boolean"==typeof w,e,"internal-error"),Lp("boolean"==typeof b,e,"internal-error"),pm(d,e.name),pm(f,e.name),pm(p,e.name),pm(m,e.name),pm(g,e.name),pm(y,e.name);const S=new mm({uid:v,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(S.providerData=_.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new fm;r.updateFromServerResponse(t);const i=new mm({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await hm(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];Lp(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?dm(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),a=new fm;a.updateFromIdToken(n);const o=new mm({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:s}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new cm(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(o,l),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=new Map;function ym(e){jp(e instanceof Function,"Expected a class definition");let t=gm.get(e);return t?(jp(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,gm.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vm.type="NONE";const wm=vm;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(e,t,n){return`firebase:${e}:${t}:${n}`}class _m{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=bm(this.userKey,r.apiKey,i),this.fullPersistenceKey=bm("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mm._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new _m(ym(wm),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ym(wm);const s=bm(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const t=await u._get(s);if(t){const n=mm._fromJSON(e,t);u!==i&&(a=n),i=u;break}}catch(l){}const o=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&o.length?(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new _m(i,e,n)):new _m(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Tm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(km(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Cm(t))return"Blackberry";if(Nm(t))return"Webos";if(Sm(t))return"Safari";if((t.includes("chrome/")||xm(t))&&!t.includes("edge/"))return"Chrome";if(Im(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function km(e=Md()){return/firefox\//i.test(e)}function Sm(e=Md()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function xm(e=Md()){return/crios\//i.test(e)}function Tm(e=Md()){return/iemobile/i.test(e)}function Im(e=Md()){return/android/i.test(e)}function Cm(e=Md()){return/blackberry/i.test(e)}function Nm(e=Md()){return/webos/i.test(e)}function Am(e=Md()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Rm(){return function(){const e=Md();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Pm(e=Md()){return Am(e)||Im(e)||Nm(e)||Cm(e)||/windows phone/i.test(e)||Tm(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(e,t=[]){let n;switch(e){case"Browser":n=Em(Md());break;case"Worker":n=`${Em(Md())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${cp}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(Vx){r(Vx)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(Vx){t.reverse();for(const r of t)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==Vx?void 0:Vx.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,a;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(n=o.meetsMaxPasswordLength)||void 0===n||n),o.isValid&&(o.isValid=null===(r=o.containsLowercaseLetter)||void 0===r||r),o.isValid&&(o.isValid=null===(i=o.containsUppercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Um(this),this.idTokenSubscription=new Um(this),this.beforeStateQueue=new Om(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ip,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ym(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await _m.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(Vx){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await rm(this,{idToken:e}),n=await mm._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(op(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==s||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(Vx){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(Vx)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Lp(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(Vx){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hm(e)}catch(Vx){if("auth/network-request-failed"!==(null==Vx?void 0:Vx.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(op(this.app))return Promise.reject(Dp(this));const t=e?Gd(e):null;return t&&Lp(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Lp(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return op(this.app)?Promise.reject(Dp(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return op(this.app)?Promise.reject(Dp(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(ym(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Gp(e,"GET","/v2/passwordPolicy",Kp(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new Lm(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fd("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Gp(e,"POST","/v2/accounts:revokeToken",Kp(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ym(e)||this._popupRedirectResolver;Lp(t,this,"argument-error"),this.redirectPersistenceManager=await _m.create(this,[ym(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Lp(a,this,"internal-error"),a.then((()=>{s||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Lp(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Cp.logLevel<=Zd.WARN&&Cp.warn(`Auth (${cp}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function jm(e){return Gd(e)}class Um{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Wd(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Lp(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Vm(e){return Fm.loadJS(e)}class zm{constructor(e){this.type="recaptcha-enterprise",this.auth=jm(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{(async function(e,t){return Gp(e,"GET","/v2/recaptchaConfig",Kp(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new nm(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;tm(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&tm(window.grecaptcha))r(n,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=Fm.recaptchaEnterpriseScript;0!==t.length&&(t+=n),Vm(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Bm(e,t,n,r=!1){const i=new zm(e);let s;try{s=await i.verify(n)}catch(o){s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function $m(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Bm(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await Bm(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(e,t,n){const r=jm(e);Lp(r._canInitEmulator,r,"emulator-config-failed"),Lp(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=Hm(t),{host:s,port:a}=function(e){const t=Hm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Wm(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Wm(t)}}}(t),o=null===a?"":`:${a}`;r.config.emulator={url:`${i}//${s}${o}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})}),function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Hm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Wm(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Km{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mp("not implemented")}_getIdTokenResponse(e){return Mp("not implemented")}_linkToIdToken(e,t){return Mp("not implemented")}_getReauthenticationResolver(e){return Mp("not implemented")}}async function Gm(e,t){return Gp(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qm(e,t){return Yp(e,"POST","/v1/accounts:signInWithPassword",Kp(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ym extends Km{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ym(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ym(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return $m(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Qm);case"emailLink":return async function(e,t){return Yp(e,"POST","/v1/accounts:signInWithEmailLink",Kp(e,t))}(e,{email:this._email,oobCode:this._password});default:Ap(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return $m(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Gm);case"emailLink":return async function(e,t){return Yp(e,"POST","/v1/accounts:signInWithEmailLink",Kp(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ap(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xm(e,t){return Yp(e,"POST","/v1/accounts:signInWithIdp",Kp(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm extends Km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jm(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ap("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Sp(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Jm(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Xm(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Xm(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xm(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$d(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){var t,n,r,i,s,a;const o=qd(Hd(e)),l=null!==(t=o.apiKey)&&void 0!==t?t:null,u=null!==(n=o.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=o.mode)&&void 0!==r?r:null);Lp(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=o.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=o.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=qd(Hd(e)).link,n=t?qd(Hd(t)).deep_link_id:null,r=qd(Hd(e)).deep_link_id;return(r?qd(Hd(r)).link:null)||r||n||t||e}(e);try{return new Zm(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(){this.providerId=eg.PROVIDER_ID}static credential(e,t){return Ym._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Zm.parseLink(t);return Lp(n,"argument-error"),Ym._fromEmailAndCode(e,n.code,n.tenantId)}}eg.PROVIDER_ID="password",eg.EMAIL_PASSWORD_SIGN_IN_METHOD="password",eg.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng extends tg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg extends ng{constructor(){super("facebook.com")}static credential(e){return Jm._fromParams({providerId:rg.PROVIDER_ID,signInMethod:rg.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rg.credentialFromTaggedObject(e)}static credentialFromError(e){return rg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return rg.credential(e.oauthAccessToken)}catch(t){return null}}}rg.FACEBOOK_SIGN_IN_METHOD="facebook.com",rg.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ig extends ng{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Jm._fromParams({providerId:ig.PROVIDER_ID,signInMethod:ig.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ig.credentialFromTaggedObject(e)}static credentialFromError(e){return ig.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ig.credential(t,n)}catch(r){return null}}}ig.GOOGLE_SIGN_IN_METHOD="google.com",ig.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sg extends ng{constructor(){super("github.com")}static credential(e){return Jm._fromParams({providerId:sg.PROVIDER_ID,signInMethod:sg.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sg.credentialFromTaggedObject(e)}static credentialFromError(e){return sg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return sg.credential(e.oauthAccessToken)}catch(t){return null}}}sg.GITHUB_SIGN_IN_METHOD="github.com",sg.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ag extends ng{constructor(){super("twitter.com")}static credential(e,t){return Jm._fromParams({providerId:ag.PROVIDER_ID,signInMethod:ag.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ag.credentialFromTaggedObject(e)}static credentialFromError(e){return ag.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ag.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function og(e,t){return Yp(e,"POST","/v1/accounts:signUp",Kp(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ag.TWITTER_SIGN_IN_METHOD="twitter.com",ag.PROVIDER_ID="twitter.com";class lg{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await mm._fromIdTokenResponse(e,n,r),s=ug(n);return new lg({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ug(n);return new lg({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ug(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg extends Ud{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,cg.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new cg(e,t,n,r)}}function hg(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw cg._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function dg(e,t,n=!1){if(op(e.app))return Promise.reject(Dp(e));const r="signIn",i=await hg(e,r,t),s=await lg._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function fg(e){const t=jm(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function pg(e,t,n){return op(e.app)?Promise.reject(Dp(e)):async function(e,t){return dg(jm(e),t)}(Gd(e),eg.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&fg(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function mg(e,t){const n={identifier:t,continueUri:Fp()?Up():"http://localhost"},{signinMethods:r}=await async function(e,t){return Gp(e,"POST","/v1/accounts:createAuthUri",Kp(e,t))}(Gd(e),n);return r||[]}const gg="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gg,"1"),this.storage.removeItem(gg),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg extends yg{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Pm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Rm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vg.type="LOCAL";const wg=vg;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg extends yg{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bg.type="SESSION";const _g=bg;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eg{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Eg(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(s).map((async e=>e(t.origin,i))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kg(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Eg.receivers=[];class Sg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((a,o)=>{const l=kg("",20);r.port1.start();const u=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(u),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tg(){return void 0!==xg().WorkerGlobalScope&&"function"==typeof xg().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ig="firebaseLocalStorageDb",Cg="firebaseLocalStorage",Ng="fbase_key";class Ag{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Rg(e,t){return e.transaction([Cg],t?"readwrite":"readonly").objectStore(Cg)}function Pg(){const e=indexedDB.open(Ig,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Cg,{keyPath:Ng})}catch(Vx){n(Vx)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Cg)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Ig);return new Ag(e).toPromise()}(),t(await Pg()))}))}))}async function Dg(e,t,n){const r=Rg(e,!0).put({[Ng]:t,value:n});return new Ag(r).toPromise()}function Og(e,t){const n=Rg(e,!0).delete(t);return new Ag(n).toPromise()}class Lg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Pg()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(Vx){if(t++>3)throw Vx;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eg._getInstance(Tg()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Sg(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pg();return await Dg(e,gg,"1"),await Og(e,gg),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Dg(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Rg(e,!1).get(t),r=await new Ag(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Og(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Rg(e,!1).getAll();return new Ag(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Lg.type="LOCAL";const Mg=Lg;new Bp(3e4,6e4);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jg extends Km{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xm(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xm(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xm(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ug(e){return dg(e.auth,new jg(e),e.bypassAuthState)}function Fg(e){const{auth:t,user:n}=e;return Lp(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:r}=e;if(op(r.app))return Promise.reject(Dp(r));const i="reauthenticate";try{const s=await lm(e,hg(r,i,t,e),n);Lp(s.idToken,r,"internal-error");const a=am(s.idToken);Lp(a,r,"internal-error");const{sub:o}=a;return Lp(e.uid===o,r,"user-mismatch"),lg._forOperation(e,i,s)}catch(Vx){throw"auth/user-not-found"===(null==Vx?void 0:Vx.code)&&Ap(r,"user-mismatch"),Vx}}(n,new jg(e),e.bypassAuthState)}async function Vg(e){const{auth:t,user:n}=e;return Lp(n,t,"internal-error"),async function(e,t,n=!1){const r=await lm(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return lg._forOperation(e,"link",r)}(n,new jg(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(Vx){this.reject(Vx)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(Vx){this.reject(Vx)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ug;case"linkViaPopup":case"linkViaRedirect":return Vg;case"reauthViaPopup":case"reauthViaRedirect":return Fg;default:Ap(this.auth,"internal-error")}}resolve(e){jp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=new Bp(2e3,1e4);class $g extends zg{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,$g.currentPopupAction&&$g.currentPopupAction.cancel(),$g.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Lp(e,this.auth,"internal-error"),e}async onExecution(){jp(1===this.filter.length,"Popup operations only handle one event");const e=kg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Rp(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Rp(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$g.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Rp(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Bg.get())};e()}}$g.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qg="pendingRedirect",Hg=new Map;class Wg extends zg{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Hg.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return bm(qg,e.config.apiKey,e.name)}(t),r=function(e){return ym(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(Vx){e=()=>Promise.reject(Vx)}Hg.set(this.auth._key(),e)}return this.bypassAuthState||Hg.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Kg(e,t){Hg.set(e._key(),t)}async function Gg(e,t,n=!1){if(op(e.app))return Promise.reject(Dp(e));const r=jm(e),i=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return t?ym(t):(Lp(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new Wg(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xg(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Xg(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Rp(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yg(e))}saveEventToCache(e){this.cachedEventUids.add(Yg(e)),this.lastProcessedEventTime=Date.now()}}function Yg(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Xg({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zg=/^https?/;async function ey(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Gp(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(ty(r))return}catch(n){}Ap(e,"unauthorized-domain")}function ty(e){const t=Up(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Zg.test(n))return!1;if(Jg.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=new Bp(3e4,6e4);function ry(){const e=xg().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function iy(e){return new Promise(((t,n)=>{var r,i,s;function a(){ry(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ry(),n(Rp(e,"network-request-failed"))},timeout:ny.get()})}if(null===(i=null===(r=xg().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=xg().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return xg()[t]=()=>{gapi.load?a():n(Rp(e,"network-request-failed"))},Vm(`${Fm.gapiScript}?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw sy=null,e}))}let sy=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ay=new Bp(5e3,15e3),oy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ly=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uy(e){const t=e.config;Lp(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?$p(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:cp},i=ly.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${$d(r).slice(1)}`}async function cy(e){const t=await function(e){return sy=sy||iy(e),sy}(e),n=xg().gapi;return Lp(n,e,"internal-error"),t.open({where:document.body,url:uy(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oy,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Rp(e,"network-request-failed"),s=xg().setTimeout((()=>{r(i)}),ay.get());function a(){xg().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class dy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(Vx){}}}function fy(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},hy),{width:r.toString(),height:i.toString(),top:s,left:a}),u=Md().toLowerCase();n&&(o=xm(u)?"_blank":n),km(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Md()){var t;return Am(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",o),new dy(null);const h=window.open(t||"",o,c);Lp(h,e,"popup-blocked");try{h.focus()}catch(Vx){}return new dy(h)}const py="__/auth/handler",my="emulator/auth/handler",gy=encodeURIComponent("fac");async function yy(e,t,n,r,i,s){Lp(e.config.authDomain,e,"auth-domain-config-required"),Lp(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:cp,eventId:i};if(t instanceof tg){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))a[e]=t}if(t instanceof ng){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const c of Object.keys(o))void 0===o[c]&&delete o[c];const l=await e._getAppCheckToken(),u=l?`#${gy}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${py}`;return $p(e,my)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${$d(o).slice(1)}${u}`}const vy="webStorageSupport";const wy=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_g,this._completeRedirectFn=Gg,this._overrideRedirectResult=Kg}async _openPopup(e,t,n,r){var i;jp(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return fy(e,await yy(e,t,n,Up(),r),kg())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){xg().location.href=e}(await yy(e,t,n,Up(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(jp(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await cy(e),n=new Qg(e);return t.register("authEvent",(t=>{Lp(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(vy,{type:vy},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[vy];void 0!==i&&t(!!i),Ap(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ey(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Pm()||Sm()||Am()}};var by="@firebase/auth",_y="1.7.9";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ey{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Lp(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ky=Od("authIdTokenMaxAge")||300;let Sy=null;function xy(e=dp()){const t=ap(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=ap(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(zd(n.getOptions(),null!=t?t:{}))return e;Ap(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:wy,persistence:[Mg,wg,_g]}),r=Od("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>ky)return;const r=null==t?void 0:t.token;Sy!==r&&(Sy=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Gd(e).beforeAuthStateChanged(t,n)}(n,t,(()=>t(n.currentUser))),function(e,t,n,r){Gd(e).onIdTokenChanged(t,n,r)}(n,(e=>t(e)))}}var i;const s=Pd("auth");return s&&qm(n,`http://${s}`),n}var Ty;Fm={loadJS:e=>new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Rp("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},Ty="Browser",sp(new Qd("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=n.options;Lp(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:a,clientPlatform:Ty,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dm(Ty)},l=new Mm(n,r,i,o);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ym);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),sp(new Qd("auth-internal",(e=>{const t=jm(e.getProvider("auth").getImmediate());return new Ey(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),fp(by,_y,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Ty)),fp(by,_y,"esm2017");var Iy,Cy,Ny="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^n&(i^s))+r[0]+3614090360&4294967295;a=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(a<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|a>>>10))+((a=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|a>>>12))+((a=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|a>>>9))+((a=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|a>>>11))+((s=(t=n+((a=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|a>>>22))^((i=s+((a=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|a>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,(function(){this.blockSize=-1})),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,s=this.h,a=0;a<t;){if(0==s)for(;a<=r;)n(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<t;)if(i[s++]=e.charCodeAt(a++),s==this.blockSize){n(this,i),s=0;break}}else for(;a<t;)if(i[s++]=e[a++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function s(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new r([0|e],0>e?-1:0)})):new r([0|e],0>e?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return o;if(0>e)return d(a(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var o=s(0),l=s(1),u=s(16777216);function c(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(l)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(c(t))throw Error("division by zero");if(c(e))return new m(o,o);if(h(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!c(r);){var u=s.add(r);0>=u.l(e)&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return t=f(e,i.j(t)),new m(i,t)}for(i=o;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(s=a(n)).j(t);h(u)||0<u.l(e);)u=(s=a(n-=r)).j(t);c(s)&&(s=l),i=i.add(s),e=f(e,u)}return new m(i,e)}function y(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function v(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],a=0;a<i;a++)s[a]=0<t?e.i(a+n)>>>t|e.i(a+n+1)<<32-t:e.i(a+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(c(this))return"0";if(h(this))return"-"+d(this).toString(e);for(var t=a(Math.pow(e,6)),n=this,r="";;){var i=g(n,t).g,s=((0<(n=f(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(c(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:c(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var a=i+(65535&this.i(s))+(65535&e.i(s)),o=(a>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=o>>>16,a&=65535,o&=65535,n[s]=o<<16|a}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(c(this)||c(e))return o;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(0>this.l(u)&&0>e.l(u))return a(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,f=65535&this.i(i),m=e.i(s)>>>16,g=65535&e.i(s);n[2*i+2*s]+=f*g,p(n,2*i+2*s),n[2*i+2*s+1]+=l*g,p(n,2*i+2*s+1),n[2*i+2*s+1]+=f*m,p(n,2*i+2*s+1),n[2*i+2*s+2]+=l*m,p(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,Cy=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=a,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=a(Math.pow(n,8)),i=o,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+l),n);8>l?(l=a(Math.pow(n,l)),i=i.j(l).add(a(u))):i=(i=i.j(r)).add(a(u))}return i},Iy=r}).apply(void 0!==Ny?Ny:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Ay,Ry,Py,Dy,Oy,Ly,My,jy,Uy="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Uy&&Uy];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var a=e[s];if(!(a in i))break e;i=i[a]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(e,t){return t}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function s(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function a(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function o(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function u(e,t,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}function c(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(s(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function p(e){return/^[\s\xa0]*$/.test(e)}function m(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function g(e){return g[" "](e),e}g[" "]=function(){};var y=!(-1==m().indexOf("Gecko")||-1!=m().toLowerCase().indexOf("webkit")&&-1==m().indexOf("Edge")||-1!=m().indexOf("Trident")||-1!=m().indexOf("MSIE")||-1!=m().indexOf("Edge"));function v(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function w(e){const t={};for(const n in e)t[n]=e[n];return t}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<b.length;t++)n=b[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function E(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function k(e){i.setTimeout((()=>{throw e}),0)}function S(){var e=N;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var x=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new T),(e=>e.reset()));class T{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let I,C=!1,N=new class{constructor(){this.h=this.g=null}add(e,t){const n=x.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},A=()=>{const e=i.Promise.resolve(void 0);I=()=>{e.then(R)}};var R=()=>{for(var e;e=S();){try{e.h.call(e.g)}catch(n){k(n)}var t=x;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}C=!1};function P(){this.s=this.s,this.C=this.C}function D(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}P.prototype.s=!1,P.prototype.ma=function(){this.s||(this.s=!0,this.N())},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},D.prototype.h=function(){this.defaultPrevented=!0};var O=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function L(e,t){if(D.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{g(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:M[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&L.aa.h.call(this)}}h(L,D);var M={2:"touch",3:"pen",4:"mouse"};L.prototype.h=function(){L.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var j="closure_listenable_"+(1e6*Math.random()|0),U=0;function F(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++U,this.da=this.fa=!1}function V(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function z(e){this.src=e,this.g={},this.h=0}function B(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(V(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function $(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}z.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=$(e,t,r,i);return-1<a?(t=e[a],n||(t.fa=!1)):((t=new F(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var q="closure_lm_"+(1e6*Math.random()|0),H={};function W(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)W(e,t[s],n,r,i);return null}return n=Z(n),e&&e[j]?e.K(t,n,!!a(r)&&!!r.capture,i):function(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=a(i)?!!i.capture:!!i,l=X(e);if(l||(e[q]=l=new z(e)),n=l.add(t,n,r,o,s),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Y;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)O||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Q(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function K(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)K(e,t[s],n,r,i);else r=a(r)?!!r.capture:!!r,n=Z(n),e&&e[j]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=$(s=e.g[t],n,r,i))&&(V(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=X(e))&&(t=e.g[t.toString()],e=-1,t&&(e=$(t,n,r,i)),(n=-1<e?t[e]:null)&&G(n))}function G(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[j])B(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Q(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=X(t))?(B(n,e),0==n.h&&(n.src=null,t[q]=null)):V(e)}}}function Q(e){return e in H?H[e]:H[e]="on"+e}function Y(e,t){if(e.da)e=!0;else{t=new L(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&G(e),e=n.call(r,t)}return e}function X(e){return(e=e[q])instanceof z?e:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[J]||(e[J]=function(t){return e.handleEvent(t)}),e[J])}function ee(){P.call(this),this.i=new z(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new D(t,e);else if(t instanceof D)t.target=t.target||e;else{var i=t;_(t=new D(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=ne(a,r,!0,t)&&i}if(i=ne(a=t.g=e,r,!0,t)&&i,i=ne(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ne(a=t.g=n[s],r,!1,t)&&i}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.da&&a.capture==n){var o=a.listener,l=a.ha||a.src;a.fa&&B(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=u(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=u(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ie(e){e.g=re((()=>{e.g=null,e.i&&(e.i=!1,ie(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(ee,P),ee.prototype[j]=!0,ee.prototype.removeEventListener=function(e,t,n,r){K(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)V(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class se extends P{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ie(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ae(e){P.call(this),this.h=e,this.g={}}h(ae,P);var oe=[];function le(e){v(e.g,(function(e,t){this.g.hasOwnProperty(t)&&G(e)}),e),e.g={}}ae.prototype.N=function(){ae.aa.N.call(this),le(this)},ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ue=i.JSON.stringify,ce=i.JSON.parse,he=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function de(){}function fe(e){return e.h||(e.h=e.i())}function pe(){}de.prototype.h=null;var me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){D.call(this,"d")}function ye(){D.call(this,"c")}h(ge,D),h(ye,D);var ve={},we=null;function be(){return we=we||new ee}function _e(e){D.call(this,ve.La,e)}function Ee(e){const t=be();te(t,new _e(t))}function ke(e,t){D.call(this,ve.STAT_EVENT,e),this.stat=t}function Se(e){const t=be();te(t,new ke(t,e))}function xe(e,t){D.call(this,ve.Ma,e),this.size=t}function Te(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){e()}),t)}function Ie(){this.g=!0}function Ce(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}return ue(n)}catch(o){return t}}(e,n)+(r?" "+r:"")}))}ve.La="serverreachability",h(_e,D),ve.STAT_EVENT="statevent",h(ke,D),ve.Ma="timingevent",h(xe,D),Ie.prototype.xa=function(){this.g=!1},Ie.prototype.info=function(){};var Ne,Ae={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Re={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Pe(){}function De(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new ae(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oe}function Oe(){this.i=null,this.g="",this.h=!1}h(Pe,de),Pe.prototype.g=function(){return new XMLHttpRequest},Pe.prototype.i=function(){return{}},Ne=new Pe;var Le={},Me={};function je(e,t,n){e.L=1,e.v=ut(it(t)),e.m=n,e.P=!0,Ue(e,null)}function Ue(e,t){e.F=Date.now(),ze(e),e.A=it(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),kt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Oe,e.g=hn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new se(u(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(oe[0]=i.toString()),i=oe);for(var s=0;s<i.length;s++){var a=W(n,i[s],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.H?w(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ee(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");a=2<=h.length&&"type"==h[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null;else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a}))}(e.i,e.u,e.A,e.l,e.R,e.m)}function Fe(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function Ve(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Me:(n=Number(t.substring(n,r)),isNaN(n)?Le:(r+=1)+n>t.length?Me:(t=t.slice(r,r+n),e.C=r+n,t))}function ze(e){e.S=Date.now()+e.I,Be(e,e.I)}function Be(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Te(u(e.ba,e),t)}function $e(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function qe(e){0==e.j.G||e.J||an(e.j,e)}function He(e){$e(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,le(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function We(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Xe(n.h,e)))if(!e.K&&Xe(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;sn(n),Gt(n)}tn(n),Se(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Te(u(n.Za,n),6e3));if(1>=Ye(n.h)&&n.ca){try{n.ca()}catch(c){}n.ca=void 0}}else ln(n,11)}else if((e.K||n.g==e)&&sn(n),!p(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Je(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,lt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var a=e;if((r=n).qa=cn(r,r.J?r.ia:null,r.W),a.K){Ze(r.h,a);var o=a,l=r.L;l&&(o.I=l),o.B&&($e(o),ze(o)),r.g=a}else en(r);0<n.i.length&&Yt(n)}else"stop"!=u[0]&&"close"!=u[0]||ln(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ln(n,7):Kt(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Ee()}catch(c){}}De.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==$t(e)?t.j():this.Y(e)},De.prototype.Y=function(e){try{if(e==this.g)e:{const d=$t(this.g);var t=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||qt(this.g)))){this.J||4!=d||7==t||Ee(),$e(this);var n=this.g.Z();this.X=n;t:if(Fe(this)){var r=qt(this.g);e="";var s=r.length,a=4==$t(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){He(this),qe(this);var o="";break t}this.h.i=new i.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(a&&t==s-1)});r.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(l)){var c=l;break t}}c=null}if(!(n=c)){this.o=!1,this.s=3,Se(12),He(this),qe(this);break e}Ce(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,We(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;){if(e=Ve(this,o),e==Me){4==d&&(this.s=4,Se(14),n=!1),Ce(this.i,this.l,null,"[Incomplete Response]");break}if(e==Le){this.s=4,Se(15),Ce(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Ce(this.i,this.l,e,null),We(this,e)}if(Fe(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,Se(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),nn(h),h.M=!0,Se(11))}}else Ce(this.i,this.l,o,"[Invalid Chunked Response]"),He(this),qe(this)}else Ce(this.i,this.l,o,null),We(this,o);4==d&&He(this),this.o&&!this.J&&(4==d?an(this.j,this):(this.o=!1,ze(this)))}else(function(e){const t={};e=(e.g&&2<=$t(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(p(e[r]))continue;var n=E(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),He(this),qe(this)}}}catch(d){}},De.prototype.cancel=function(){this.J=!0,He(this)},De.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.i,this.A),2!=this.L&&(Ee(),Se(17)),He(this),this.s=2,qe(this)):Be(this,this.S-e)};var Ke=class{constructor(e,t){this.g=e,this.map=t}};function Ge(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qe(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ye(e){return e.h?1:e.g?e.g.size:0}function Xe(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Je(e,t){e.g?e.g.add(t):e.h=t}function Ze(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function et(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}Ge.prototype.cancel=function(){if(this.i=et(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var nt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof rt){this.h=e.h,st(this,e.j),this.o=e.o,this.g=e.g,at(this,e.s),this.l=e.l;var t=e.i,n=new wt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ot(this,n),this.m=e.m}else e&&(t=String(e).match(nt))?(this.h=!1,st(this,t[1]||"",!0),this.o=ht(t[2]||""),this.g=ht(t[3]||"",!0),at(this,t[4]),this.l=ht(t[5]||"",!0),ot(this,t[6]||"",!0),this.m=ht(t[7]||"")):(this.h=!1,this.i=new wt(null,this.h))}function it(e){return new rt(e)}function st(e,t,n){e.j=n?ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function at(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function ot(e,t,n){t instanceof wt?(e.i=t,function(e,t){t&&!e.j&&(bt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(_t(this,t),kt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=dt(t,yt)),e.i=new wt(t,e.h))}function lt(e,t,n){e.i.set(t,n)}function ut(e){return lt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function dt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ft),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ft(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(dt(t,pt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(dt(t,pt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(dt(n,"/"==n.charAt(0)?gt:mt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",dt(n,vt)),e.join("")};var pt=/[#\/\?@]/g,mt=/[#\?:]/g,gt=/[#\?]/g,yt=/[#\?@]/g,vt=/#/g;function wt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function bt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function _t(e,t){bt(e),t=St(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Et(e,t){return bt(e),t=St(e,t),e.g.has(t)}function kt(e,t,n){_t(e,t),0<n.length&&(e.i=null,e.g.set(St(e,t),d(n)),e.h+=n.length)}function St(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function xt(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Tt(){this.g=new he}function It(e,t,n){const r=n||"";try{tt(e,(function(e,n){let i=e;a(e)&&(i=ue(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(Vx){throw t.push(r+"type="+encodeURIComponent("_badmap")),Vx}}function Ct(e){this.l=e.Ub||null,this.j=e.eb||!1}function Nt(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function At(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Rt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Pt(e)}function Pt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Dt(e){let t="";return v(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Ot(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Dt(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):lt(e,t,n))}function Lt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=wt.prototype).add=function(e,t){bt(this),this.i=null,e=St(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){bt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){bt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){bt(this);let t=[];if("string"==typeof e)Et(this,e)&&(t=t.concat(this.g.get(St(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return bt(this),this.i=null,Et(this,e=St(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),a=this.V(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")},h(Ct,de),Ct.prototype.g=function(){return new Nt(this.l,this.j)},Ct.prototype.i=function(e){return function(){return e}}({}),h(Nt,ee),(e=Nt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Pt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Rt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Pt(this)),this.g&&(this.readyState=3,Pt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;At(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Rt(this):Pt(this),3==this.readyState&&At(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Rt(this))},e.Qa=function(e){this.g&&(this.response=e,Rt(this))},e.ga=function(){this.g&&Rt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Nt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Lt,ee);var Mt=/^https?$/i,jt=["POST","PUT"];function Ut(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Ft(e),zt(e)}function Ft(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function Vt(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=$t(e)||2!=e.Z()))if(e.u&&4==$t(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==$t(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===r){var a=String(e.D).match(nt)[1]||null;!a&&i.self&&i.self.location&&(a=i.self.location.protocol.slice(0,-1)),s=!Mt.test(a?a.toLowerCase():"")}n=s}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var o=2<$t(e)?e.g.statusText:""}catch(l){o=""}e.l=o+" ["+e.Z()+"]",Ft(e)}}finally{zt(e)}}}function zt(e,t){if(e.g){Bt(e);const n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{n.onreadystatechange=r}catch(Vx){}}}function Bt(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function $t(e){return e.g?e.g.readyState:0}function qt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ht(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Wt(e){this.Aa=0,this.i=[],this.j=new Ie,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ht("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ht("baseRetryDelayMs",5e3,e),this.cb=Ht("retryDelaySeedMs",1e4,e),this.Wa=Ht("forwardChannelMaxRetries",2,e),this.wa=Ht("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new Ge(e&&e.concurrentRequestLimit),this.Da=new Tt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Kt(e){if(Qt(e),3==e.G){var t=e.U++,n=it(e.I);if(lt(n,"SID",e.K),lt(n,"RID",t),lt(n,"TYPE","terminate"),Jt(e,n),(t=new De(e,e.j,t)).L=2,t.v=ut(it(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=hn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ze(t)}un(e)}function Gt(e){e.g&&(nn(e),e.g.cancel(),e.g=null)}function Qt(e){Gt(e),e.u&&(i.clearTimeout(e.u),e.u=null),sn(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Yt(e){if(!Qe(e.h)&&!e.s){e.s=!0;var t=e.Ga;I||A(),C||(I(),C=!0),N.add(t,e),e.B=0}}function Xt(e,t){var n;n=t?t.l:e.U++;const r=it(e.I);lt(r,"SID",e.K),lt(r,"RID",n),lt(r,"AID",e.T),Jt(e,r),e.m&&e.o&&Ot(r,e.m,e.o),n=new De(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Zt(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Je(e.h,n),je(n,r,t)}function Jt(e,t){e.H&&v(e.H,(function(e,n){lt(t,n,e)})),e.l&&tt({},(function(e,n){lt(t,n,e)}))}function Zt(e,t,n){n=Math.min(e.i.length,n);var r=e.l?u(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let a=!0;for(let o=0;o<n;o++){let n=i[o].g;const l=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),a=!1;else try{It(l,e,"req"+n+"_")}catch(s){r&&r(l)}}if(a){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function en(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;I||A(),C||(I(),C=!0),N.add(t,e),e.v=0}}function tn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Te(u(e.Fa,e),on(e,e.v)),e.v++,!0)}function nn(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function rn(e){e.g=new De(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=it(e.qa);lt(t,"RID","rpc"),lt(t,"SID",e.K),lt(t,"AID",e.T),lt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&lt(t,"TO",e.ja),lt(t,"TYPE","xmlhttp"),Jt(e,t),e.m&&e.o&&Ot(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ut(it(t)),n.m=null,n.P=!0,Ue(n,e)}function sn(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function an(e,t){var n=null;if(e.g==t){sn(e),nn(e),e.g=null;var r=2}else{if(!Xe(e.h,t))return;n=t.D,Ze(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;te(r=be(),new xe(r,n)),Yt(e)}else en(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Ye(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Te(u(e.Ga,e,t),on(e,e.B)),e.B++,0)))}(e,t)||2==r&&tn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:ln(e,5);break;case 4:ln(e,10);break;case 3:ln(e,6);break;default:ln(e,2)}}function on(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function ln(e,t){if(e.j.info("Error code "+t),2==t){var n=u(e.fb,e),r=e.Xa;const t=!r;r=new rt(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||st(r,"https"),ut(r),t?function(e,t){const n=new Ie;if(i.Image){const r=new Image;r.onload=c(xt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=c(xt,n,"TestLoadImage: error",!1,t,r),r.onabort=c(xt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=c(xt,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ie;const n=new AbortController,r=setTimeout((()=>{n.abort(),xt(0,0,!1,t)}),1e4);fetch(e,{signal:n.signal}).then((e=>{clearTimeout(r),e.ok?xt(0,0,!0,t):xt(0,0,!1,t)})).catch((()=>{clearTimeout(r),xt(0,0,!1,t)}))}(r.toString(),n)}else Se(2);e.G=0,e.l&&e.l.sa(t),un(e),Qt(e)}function un(e){if(e.G=0,e.ka=[],e.l){const t=et(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function cn(e,t,n){var r=n instanceof rt?it(n):new rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),at(r,r.s);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var a=new rt(null);r&&st(a,r),t&&(a.g=t),s&&at(a,s),n&&(a.l=n),r=a}return n=e.D,t=e.ya,n&&t&&lt(r,n,t),lt(r,"VER",e.la),Jt(e,r),r}function hn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Lt(new Ct({eb:n})):new Lt(e.pa)).Ha(e.J),t}function dn(){}function fn(){}function pn(e,t){ee.call(this),this.g=new Wt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!p(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!p(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new yn(this)}function mn(e){ge.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gn(){ye.call(this),this.status=1}function yn(e){this.g=e}(e=Lt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ne.g(),this.v=this.o?fe(this.o):fe(Ne),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(a){return void Ut(this,a)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(jt,t,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bt(this),this.u=!0,this.g.send(e),this.u=!1}catch(a){Ut(this,a)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),zt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zt(this,!0)),Lt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Vt(this):this.bb())},e.bb=function(){Vt(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch(ct){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(ct){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ce(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Wt.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){Se(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=cn(this,null,this.W),Yt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new De(this,this.j,e);let s=this.o;if(this.S&&(s?(s=w(s),_(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zt(this,i,t),lt(n=it(this.I),"RID",e),lt(n,"CVER",22),this.D&&lt(n,"X-HTTP-Session-Id",this.D),Jt(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Dt(s)))+"&"+t:this.m&&Ot(n,this.m,s)),Je(this.h,i),this.Ua&&lt(n,"TYPE","init"),this.P?(lt(n,"$req",t),lt(n,"SID","null"),i.T=!0,je(i,n,null)):je(i,n,t),this.G=2}}else 3==this.G&&(e?Xt(this,e):0==this.i.length||Qe(this.h)||Xt(this))},e.Fa=function(){if(this.u=null,rn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Te(u(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),Gt(this),rn(this))},e.Za=function(){null!=this.C&&(this.C=null,Gt(this),tn(this),Se(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=dn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},fn.prototype.g=function(e,t){return new pn(e,t)},h(pn,ee),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){Kt(this.g)},pn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ue(e),e=n);t.i.push(new Ke(t.Ya++,e)),3==t.G&&Yt(t)},pn.prototype.N=function(){this.g.l=null,delete this.j,Kt(this.g),delete this.g,pn.aa.N.call(this)},h(mn,ge),h(gn,ye),h(yn,dn),yn.prototype.ua=function(){te(this.g,"a")},yn.prototype.ta=function(e){te(this.g,new mn(e))},yn.prototype.sa=function(e){te(this.g,new gn)},yn.prototype.ra=function(){te(this.g,"b")},fn.prototype.createWebChannel=fn.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,jy=function(){return new fn},My=function(){return be()},Ly=ve,Oy={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ae.NO_ERROR=0,Ae.TIMEOUT=8,Ae.HTTP_ERROR=6,Dy=Ae,Re.COMPLETE="complete",Py=Re,pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Ry=pe,Lt.prototype.listenOnce=Lt.prototype.L,Lt.prototype.getLastError=Lt.prototype.Ka,Lt.prototype.getLastErrorCode=Lt.prototype.Ba,Lt.prototype.getStatus=Lt.prototype.Z,Lt.prototype.getResponseJson=Lt.prototype.Oa,Lt.prototype.getResponseText=Lt.prototype.oa,Lt.prototype.send=Lt.prototype.ea,Lt.prototype.setWithCredentials=Lt.prototype.Ha,Ay=Lt}).apply(void 0!==Uy?Uy:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Fy="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vy.UNAUTHENTICATED=new Vy(null),Vy.GOOGLE_CREDENTIALS=new Vy("google-credentials-uid"),Vy.FIRST_PARTY=new Vy("first-party-uid"),Vy.MOCK_USER=new Vy("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let zy="10.14.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=new af("@firebase/firestore");function $y(){return By.logLevel}function qy(e,...t){if(By.logLevel<=Zd.DEBUG){const n=t.map(Ky);By.debug(`Firestore (${zy}): ${e}`,...n)}}function Hy(e,...t){if(By.logLevel<=Zd.ERROR){const n=t.map(Ky);By.error(`Firestore (${zy}): ${e}`,...n)}}function Wy(e,...t){if(By.logLevel<=Zd.WARN){const n=t.map(Ky);By.warn(`Firestore (${zy}): ${e}`,...n)}}function Ky(e){if("string"==typeof e)return e;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(e="Unexpected state"){const t=`FIRESTORE (${zy}) INTERNAL ASSERTION FAILED: `+e;throw Hy(t),new Error(t)}function Qy(e,t){e||Gy()}function Yy(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Jy extends Ud{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Vy.UNAUTHENTICATED)))}shutdown(){}}class nv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class rv{constructor(e){this.t=e,this.currentUser=Vy.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Qy(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Zy;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zy,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},a=e=>{qy("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(qy("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zy)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(qy("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Qy("string"==typeof t.accessToken),new ev(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qy(null===e||"string"==typeof e),new Vy(e)}}class iv{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Vy.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sv{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new iv(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Vy.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class av{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ov{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Qy(void 0===this.o);const n=e=>{null!=e.error&&qy("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,qy("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{qy("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):qy("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Qy("string"==typeof e.token),this.R=e.token,new av(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=lv(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function cv(e,t){return e<t?-1:e>t?1:0}function hv(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Jy(Xy.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Jy(Xy.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Jy(Xy.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Jy(Xy.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return dv.fromMillis(Date.now())}static fromDate(e){return dv.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new dv(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?cv(this.nanoseconds,e.nanoseconds):cv(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fv(e)}static min(){return new fv(new dv(0,0))}static max(){return new fv(new dv(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t,n){void 0===t?t=0:t>e.length&&Gy(),void 0===n?n=e.length-t:n>e.length-t&&Gy(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===pv.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pv?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class mv extends pv{construct(e,t,n){return new mv(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Jy(Xy.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new mv(t)}static emptyPath(){return new mv([])}}const gv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yv extends pv{construct(e,t,n){return new yv(e,t,n)}static isValidIdentifier(e){return gv.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yv.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new yv(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Jy(Xy.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Jy(Xy.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Jy(Xy.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Jy(Xy.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yv(t)}static emptyPath(){return new yv([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.path=e}static fromPath(e){return new vv(mv.fromString(e))}static fromName(e){return new vv(mv.fromString(e).popFirst(5))}static empty(){return new vv(mv.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===mv.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return mv.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new vv(new mv(e.slice()))}}function wv(e){return new bv(e.readTime,e.key,-1)}class bv{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new bv(fv.min(),vv.empty(),-1)}static max(){return new bv(fv.max(),vv.empty(),-1)}}function _v(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=vv.comparator(e.documentKey,t.documentKey),0!==n?n:cv(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class Ev{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(e){if(e.code!==Xy.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;qy("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Gy(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Sv(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Sv?t:Sv.resolve(t)}catch(t){return Sv.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Sv.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Sv.reject(t)}static resolve(e){return new Sv(((t,n)=>{t(e)}))}static reject(e){return new Sv(((t,n)=>{n(e)}))}static waitFor(e){return new Sv(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Sv.resolve(!1);for(const n of e)t=t.next((e=>e?Sv.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Sv(((n,r)=>{const i=e.length,s=new Array(i);let a=0;for(let o=0;o<i;o++){const l=o;t(e[l]).next((e=>{s[l]=e,++a,a===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Sv(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}function xv(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}function Iv(e){return null==e}function Cv(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nv(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Av(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Rv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tv.oe=-1;class Pv{constructor(e,t){this.comparator=e,this.root=t||Ov.EMPTY}insert(e,t){return new Pv(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ov.BLACK,null,null))}remove(e){return new Pv(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ov.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dv(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dv(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dv(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dv(this.root,e,this.comparator,!0)}}class Dv{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ov{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ov.RED,this.left=null!=r?r:Ov.EMPTY,this.right=null!=i?i:Ov.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Ov(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ov.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ov.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ov.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ov.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Gy();if(this.right.isRed())throw Gy();const e=this.left.check();if(e!==this.right.check())throw Gy();return e+(this.isRed()?0:1)}}Ov.EMPTY=null,Ov.RED=!0,Ov.BLACK=!1,Ov.EMPTY=new class{constructor(){this.size=0}get key(){throw Gy()}get value(){throw Gy()}get color(){throw Gy()}get left(){throw Gy()}get right(){throw Gy()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Ov(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lv{constructor(e){this.comparator=e,this.data=new Pv(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Mv(this.data.getIterator())}getIteratorFrom(e){return new Mv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Lv))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Lv(this.comparator);return t.data=e,t}}class Mv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.fields=e,e.sort(yv.comparator)}static empty(){return new jv([])}unionWith(e){let t=new Lv(yv.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new jv(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hv(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Uv("Invalid base64 string: "+t):t}}(e);return new Fv(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Fv(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return cv(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fv.EMPTY_BYTE_STRING=new Fv("");const Vv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zv(e){if(Qy(!!e),"string"==typeof e){let t=0;const n=Vv.exec(e);if(Qy(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Bv(e.seconds),nanos:Bv(e.nanos)}}function Bv(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function $v(e){return"string"==typeof e?Fv.fromBase64String(e):Fv.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Hv(e){const t=e.mapValue.fields.__previous_value__;return qv(t)?Hv(t):t}function Wv(e){const t=zv(e.mapValue.fields.__local_write_time__.timestampValue);return new dv(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class Gv{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Gv("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Gv&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv={};function Yv(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?qv(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?9007199254740991:function(e){var t,n;return"__vector__"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(e)?10:11:Gy()}function Xv(e,t){if(e===t)return!0;const n=Yv(e);if(n!==Yv(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Wv(e).isEqual(Wv(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=zv(e.timestampValue),r=zv(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,$v(e.bytesValue).isEqual($v(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Bv(e.geoPointValue.latitude)===Bv(t.geoPointValue.latitude)&&Bv(e.geoPointValue.longitude)===Bv(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Bv(e.integerValue)===Bv(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Bv(e.doubleValue),r=Bv(t.doubleValue);return n===r?Cv(n)===Cv(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return hv(e.arrayValue.values||[],t.arrayValue.values||[],Xv);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Nv(n)!==Nv(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Xv(n[i],r[i])))return!1;return!0}(e,t);default:return Gy()}var r}function Jv(e,t){return void 0!==(e.values||[]).find((e=>Xv(e,t)))}function Zv(e,t){if(e===t)return 0;const n=Yv(e),r=Yv(t);if(n!==r)return cv(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return cv(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Bv(e.integerValue||e.doubleValue),r=Bv(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ew(e.timestampValue,t.timestampValue);case 4:return ew(Wv(e),Wv(t));case 5:return cv(e.stringValue,t.stringValue);case 6:return function(e,t){const n=$v(e),r=$v(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=cv(n[i],r[i]);if(0!==e)return e}return cv(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=cv(Bv(e.latitude),Bv(t.latitude));return 0!==n?n:cv(Bv(e.longitude),Bv(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return tw(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;const a=e.fields||{},o=t.fields||{},l=null===(n=a.value)||void 0===n?void 0:n.arrayValue,u=null===(r=o.value)||void 0===r?void 0:r.arrayValue,c=cv((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==c?c:tw(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Qv&&t===Qv)return 0;if(e===Qv)return 1;if(t===Qv)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let a=0;a<r.length&&a<s.length;++a){const e=cv(r[a],s[a]);if(0!==e)return e;const t=Zv(n[r[a]],i[s[a]]);if(0!==t)return t}return cv(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Gy()}}function ew(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return cv(e,t);const n=zv(e),r=zv(t),i=cv(n.seconds,r.seconds);return 0!==i?i:cv(n.nanos,r.nanos)}function tw(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Zv(n[i],r[i]);if(e)return e}return cv(n.length,r.length)}function nw(e){return rw(e)}function rw(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=zv(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?$v(e.bytesValue).toBase64():"referenceValue"in e?function(e){return vv.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=rw(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${rw(e.fields[i])}`;return n+"}"}(e.mapValue):Gy()}function iw(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function sw(e){return!!e&&"integerValue"in e}function aw(e){return!!e&&"arrayValue"in e}function ow(e){return!!e&&"nullValue"in e}function lw(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function uw(e){return!!e&&"mapValue"in e}function cw(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Av(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=cw(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=cw(e.arrayValue.values[n]);return t}return Object.assign({},e)}class hw{constructor(e){this.value=e}static empty(){return new hw({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!uw(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=cw(t)}setAll(e){let t=yv.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=cw(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());uw(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xv(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];uw(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Av(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new hw(cw(this.value))}}function dw(e){const t=[];return Av(e.fields,((e,n)=>{const r=new yv([e]);if(uw(n)){const e=dw(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new jv(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class fw{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new fw(e,0,fv.min(),fv.min(),fv.min(),hw.empty(),0)}static newFoundDocument(e,t,n,r){return new fw(e,1,t,fv.min(),n,r,0)}static newNoDocument(e,t){return new fw(e,2,t,fv.min(),fv.min(),hw.empty(),0)}static newUnknownDocument(e,t){return new fw(e,3,t,fv.min(),fv.min(),hw.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(fv.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=hw.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=hw.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fv.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof fw&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fw(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,t){this.position=e,this.inclusive=t}}function mw(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],a=e.position[i];if(r=s.field.isKeyField()?vv.comparator(vv.fromName(a.referenceValue),n.key):Zv(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function gw(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Xv(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t="asc"){this.field=e,this.dir=t}}function vw(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{}class bw extends ww{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Iw(e,t,n):"array-contains"===t?new Rw(e,n):"in"===t?new Pw(e,n):"not-in"===t?new Dw(e,n):"array-contains-any"===t?new Ow(e,n):new bw(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Cw(e,n):new Nw(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Zv(t,this.value)):null!==t&&Yv(this.value)===Yv(t)&&this.matchesComparison(Zv(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Gy()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _w extends ww{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new _w(e,t)}matches(e){return Ew(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ew(e){return"and"===e.op}function kw(e){return function(e){for(const t of e.filters)if(t instanceof _w)return!1;return!0}(e)&&Ew(e)}function Sw(e){if(e instanceof bw)return e.field.canonicalString()+e.op.toString()+nw(e.value);if(kw(e))return e.filters.map((e=>Sw(e))).join(",");{const t=e.filters.map((e=>Sw(e))).join(",");return`${e.op}(${t})`}}function xw(e,t){return e instanceof bw?(n=e,(r=t)instanceof bw&&n.op===r.op&&n.field.isEqual(r.field)&&Xv(n.value,r.value)):e instanceof _w?function(e,t){return t instanceof _w&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&xw(n,t.filters[r])),!0)}(e,t):void Gy();var n,r}function Tw(e){return e instanceof bw?`${(t=e).field.canonicalString()} ${t.op} ${nw(t.value)}`:e instanceof _w?function(e){return e.op.toString()+" {"+e.getFilters().map(Tw).join(" ,")+"}"}(e):"Filter";var t}class Iw extends bw{constructor(e,t,n){super(e,t,n),this.key=vv.fromName(n.referenceValue)}matches(e){const t=vv.comparator(e.key,this.key);return this.matchesComparison(t)}}class Cw extends bw{constructor(e,t){super(e,"in",t),this.keys=Aw("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Nw extends bw{constructor(e,t){super(e,"not-in",t),this.keys=Aw("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Aw(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>vv.fromName(e.referenceValue)))}class Rw extends bw{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return aw(t)&&Jv(t.arrayValue,this.value)}}class Pw extends bw{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Jv(this.value.arrayValue,t)}}class Dw extends bw{constructor(e,t){super(e,"not-in",t)}matches(e){if(Jv(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Jv(this.value.arrayValue,t)}}class Ow extends bw{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!aw(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Jv(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.ue=null}}function Mw(e,t=null,n=[],r=[],i=null,s=null,a=null){return new Lw(e,t,n,r,i,s,a)}function jw(e){const t=Yy(e);if(null===t.ue){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Sw(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Iv(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>nw(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>nw(e))).join(",")),t.ue=e}return t.ue}function Uw(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!vw(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!xw(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!gw(e.startAt,t.startAt)&&gw(e.endAt,t.endAt)}function Fw(e){return vv.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function zw(e){return new Vw(e)}function Bw(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function $w(e){return null!==e.collectionGroup}function qw(e){const t=Yy(e);if(null===t.ce){t.ce=[];const e=new Set;for(const r of t.explicitOrderBy)t.ce.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new Lv(yv.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.ce.push(new yw(r,n))})),e.has(yv.keyField().canonicalString())||t.ce.push(new yw(yv.keyField(),n))}return t.ce}function Hw(e){const t=Yy(e);return t.le||(t.le=function(e,t){if("F"===e.limitType)return Mw(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new yw(e.field,t)}));const n=e.endAt?new pw(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new pw(e.startAt.position,e.startAt.inclusive):null;return Mw(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,qw(e))),t.le}function Ww(e,t){const n=e.filters.concat([t]);return new Vw(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Kw(e,t,n){return new Vw(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Gw(e,t){return Uw(Hw(e),Hw(t))&&e.limitType===t.limitType}function Qw(e){return`${jw(Hw(e))}|lt:${e.limitType}`}function Yw(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Tw(e))).join(", ")}]`),Iv(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>nw(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>nw(e))).join(",")),`Target(${t})`}(Hw(e))}; limitType=${e.limitType})`}function Xw(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):vv.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of qw(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=mw(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,qw(n),r)||n.endAt&&!function(e,t,n){const r=mw(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,qw(n),r)));var n,r}function Jw(e){return(t,n)=>{let r=!1;for(const i of qw(e)){const e=Zw(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Zw(e,t,n){const r=e.field.isKeyField()?vv.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Zv(r,i):Gy()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Gy()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Av(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Rv(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=new Pv(vv.comparator);function nb(){return tb}const rb=new Pv(vv.comparator);function ib(...e){let t=rb;for(const n of e)t=t.insert(n.key,n);return t}function sb(e){let t=rb;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ab(){return lb()}function ob(){return lb()}function lb(){return new eb((e=>e.toString()),((e,t)=>e.isEqual(t)))}const ub=new Pv(vv.comparator),cb=new Lv(vv.comparator);function hb(...e){let t=cb;for(const n of e)t=t.add(n);return t}const db=new Lv(cv);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fb(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cv(t)?"-0":t}}function pb(e){return{integerValue:""+e}}function mb(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Cv(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?pb(t):fb(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this._=void 0}}function yb(e,t,n){return e instanceof bb?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&qv(t)&&(t=Hv(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof _b?Eb(e,t):e instanceof kb?Sb(e,t):function(e,t){const n=wb(e,t),r=Tb(n)+Tb(e.Pe);return sw(n)&&sw(e.Pe)?pb(r):fb(e.serializer,r)}(e,t)}function vb(e,t,n){return e instanceof _b?Eb(e,t):e instanceof kb?Sb(e,t):n}function wb(e,t){return e instanceof xb?sw(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class bb extends gb{}class _b extends gb{constructor(e){super(),this.elements=e}}function Eb(e,t){const n=Ib(t);for(const r of e.elements)n.some((e=>Xv(e,r)))||n.push(r);return{arrayValue:{values:n}}}class kb extends gb{constructor(e){super(),this.elements=e}}function Sb(e,t){let n=Ib(t);for(const r of e.elements)n=n.filter((e=>!Xv(e,r)));return{arrayValue:{values:n}}}class xb extends gb{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Tb(e){return Bv(e.integerValue||e.doubleValue)}function Ib(e){return aw(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Cb{constructor(e,t){this.version=e,this.transformResults=t}}class Nb{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nb}static exists(e){return new Nb(void 0,e)}static updateTime(e){return new Nb(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ab(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Rb{}function Pb(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Bb(e.key,Nb.none()):new jb(e.key,e.data,Nb.none());{const n=e.data,r=hw.empty();let i=new Lv(yv.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Ub(e.key,r,new jv(i.toArray()),Nb.none())}}function Db(e,t,n){var r;e instanceof jb?function(e,t,n){const r=e.value.clone(),i=Vb(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Ub?function(e,t,n){if(!Ab(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Vb(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Fb(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Ob(e,t,n,r){return e instanceof jb?function(e,t,n,r){if(!Ab(e.precondition,t))return n;const i=e.value.clone(),s=zb(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ub?function(e,t,n,r){if(!Ab(e.precondition,t))return n;const i=zb(e.fieldTransforms,r,t),s=t.data;return s.setAll(Fb(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,s=n,Ab(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function Lb(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=wb(r.transform,e||null);null!=i&&(null===n&&(n=hw.empty()),n.set(r.field,i))}return n||null}function Mb(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&hv(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof _b&&r instanceof _b||n instanceof kb&&r instanceof kb?hv(n.elements,r.elements,Xv):n instanceof xb&&r instanceof xb?Xv(n.Pe,r.Pe):n instanceof bb&&r instanceof bb);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class jb extends Rb{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ub extends Rb{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Fb(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Vb(e,t,n){const r=new Map;Qy(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],a=s.transform,o=t.data.field(s.field);r.set(s.field,vb(a,o,n[i]))}return r}function zb(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,yb(e,s,t))}return r}class Bb extends Rb{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $b extends Rb{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Db(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ob(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ob(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ob();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;const o=Pb(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(fv.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),hb())}isEqual(e){return this.batchId===e.batchId&&hv(this.mutations,e.mutations,((e,t)=>Mb(e,t)))&&hv(this.baseMutations,e.baseMutations,((e,t)=>Mb(e,t)))}}class Hb{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Qy(e.mutations.length===n.length);let r=function(){return ub}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Hb(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gb,Qb;function Yb(e){if(void 0===e)return Hy("GRPC error has no .code"),Xy.UNKNOWN;switch(e){case Gb.OK:return Xy.OK;case Gb.CANCELLED:return Xy.CANCELLED;case Gb.UNKNOWN:return Xy.UNKNOWN;case Gb.DEADLINE_EXCEEDED:return Xy.DEADLINE_EXCEEDED;case Gb.RESOURCE_EXHAUSTED:return Xy.RESOURCE_EXHAUSTED;case Gb.INTERNAL:return Xy.INTERNAL;case Gb.UNAVAILABLE:return Xy.UNAVAILABLE;case Gb.UNAUTHENTICATED:return Xy.UNAUTHENTICATED;case Gb.INVALID_ARGUMENT:return Xy.INVALID_ARGUMENT;case Gb.NOT_FOUND:return Xy.NOT_FOUND;case Gb.ALREADY_EXISTS:return Xy.ALREADY_EXISTS;case Gb.PERMISSION_DENIED:return Xy.PERMISSION_DENIED;case Gb.FAILED_PRECONDITION:return Xy.FAILED_PRECONDITION;case Gb.ABORTED:return Xy.ABORTED;case Gb.OUT_OF_RANGE:return Xy.OUT_OF_RANGE;case Gb.UNIMPLEMENTED:return Xy.UNIMPLEMENTED;case Gb.DATA_LOSS:return Xy.DATA_LOSS;default:return Gy()}}(Qb=Gb||(Gb={}))[Qb.OK=0]="OK",Qb[Qb.CANCELLED=1]="CANCELLED",Qb[Qb.UNKNOWN=2]="UNKNOWN",Qb[Qb.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qb[Qb.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qb[Qb.NOT_FOUND=5]="NOT_FOUND",Qb[Qb.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qb[Qb.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qb[Qb.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qb[Qb.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qb[Qb.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qb[Qb.ABORTED=10]="ABORTED",Qb[Qb.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qb[Qb.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qb[Qb.INTERNAL=13]="INTERNAL",Qb[Qb.UNAVAILABLE=14]="UNAVAILABLE",Qb[Qb.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xb=new Iy([4294967295,4294967295],0);function Jb(e){const t=(new TextEncoder).encode(e),n=new Cy;return n.update(t),new Uint8Array(n.digest())}function Zb(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Iy([n,r],0),new Iy([i,s],0)]}class e_{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new t_(`Invalid padding: ${t}`);if(n<0)throw new t_(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new t_(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new t_(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Iy.fromNumber(this.Ie)}Ee(e,t,n){let r=e.add(t.multiply(Iy.fromNumber(n)));return 1===r.compare(Xb)&&(r=new Iy([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ie)return!1;const t=Jb(e),[n,r]=Zb(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);if(!this.de(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new e_(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ie)return;const t=Jb(e),[n,r]=Zb(t);for(let i=0;i<this.hashCount;i++){const e=this.Ee(n,r,i);this.Ae(e)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class t_ extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,r_.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new n_(fv.min(),r,new Pv(cv),nb(),hb())}}class r_{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new r_(n,t,hb(),hb(),hb())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t,n,r){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=r}}class s_{constructor(e,t){this.targetId=e,this.me=t}}class a_{constructor(e,t,n=Fv.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class o_{constructor(){this.fe=0,this.ge=c_(),this.pe=Fv.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=hb(),t=hb(),n=hb();return this.ge.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Gy()}})),new r_(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=c_()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Qy(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class l_{constructor(e){this.Le=e,this.Be=new Map,this.ke=nb(),this.qe=u_(),this.Qe=new Pv(cv)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:Gy()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((e,n)=>{this.ze(n)&&t(n)}))}He(e){const t=e.targetId,n=e.me.count,r=this.Je(t);if(r){const i=r.target;if(Fw(i))if(0===n){const e=new vv(i.path);this.Ue(t,e,fw.newNoDocument(e,fv.min()))}else Qy(1===n);else{const r=this.Ye(t);if(r!==n){const n=this.Ze(e),i=n?this.Xe(n,e,r):1;if(0!==i){this.je(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,e)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,a;try{s=$v(n).toUint8Array()}catch(o){if(o instanceof Uv)return Wy("Decoding the base64 bloom filter in existence filter failed ("+o.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw o}try{a=new e_(s,r,i)}catch(o){return Wy(o instanceof t_?"BloomFilter error: ":"Applying bloom filter failed: ",o),null}return 0===a.Ie?null:a}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Le.tt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.Ue(t,n,null),r++)})),r}rt(e){const t=new Map;this.Be.forEach(((n,r)=>{const i=this.Je(r);if(i){if(n.current&&Fw(i.target)){const t=new vv(i.target.path);null!==this.ke.get(t)||this.it(r,t)||this.Ue(r,t,fw.newNoDocument(t,e))}n.be&&(t.set(r,n.ve()),n.Ce())}}));let n=hb();this.qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Je(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.ke.forEach(((t,n)=>n.setReadTime(e)));const r=new n_(e,t,this.Qe,this.ke,n);return this.ke=nb(),this.qe=u_(),this.Qe=new Pv(cv),r}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,t)?r.Fe(t,1):r.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new o_,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Lv(cv),this.qe=this.qe.insert(e,t)),t}ze(e){const t=null!==this.Je(e);return t||qy("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new o_),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function u_(){return new Pv(vv.comparator)}function c_(){return new Pv(vv.comparator)}const h_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),d_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),f_=(()=>({and:"AND",or:"OR"}))();class p_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function m_(e,t){return e.useProto3Json||Iv(t)?t:{value:t}}function g_(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function y_(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function v_(e,t){return g_(e,t.toTimestamp())}function w_(e){return Qy(!!e),fv.fromTimestamp(function(e){const t=zv(e);return new dv(t.seconds,t.nanos)}(e))}function b_(e,t){return __(e,t).canonicalString()}function __(e,t){const n=(r=e,new mv(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function E_(e){const t=mv.fromString(e);return Qy(V_(t)),t}function k_(e,t){return b_(e.databaseId,t.path)}function S_(e,t){const n=E_(t);if(n.get(1)!==e.databaseId.projectId)throw new Jy(Xy.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Jy(Xy.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new vv(I_(n))}function x_(e,t){return b_(e.databaseId,t)}function T_(e){return new mv(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function I_(e){return Qy(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function C_(e,t,n){return{name:k_(e,t),fields:n.value.mapValue.fields}}function N_(e,t){return{documents:[x_(e,t.path)]}}function A_(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=x_(e,i);const s=function(e){if(0!==e.length)return U_(_w.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const a=function(e){if(0!==e.length)return e.map((e=>{return{field:M_((t=e).field),direction:D_(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const o=m_(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{_t:n,parent:i};var l}function R_(e){let t=function(e){const t=E_(e);return 4===t.length?mv.emptyPath():I_(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Qy(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=P_(e);return t instanceof _w&&kw(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=n.orderBy.map((e=>{return new yw(j_((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let o=null;n.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,Iv(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new pw(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new pw(n,t)}(n.endAt)),function(e,t,n,r,i,s,a,o){return new Vw(e,t,n,r,i,s,a,o)}(t,i,a,s,o,"F",l,u)}function P_(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=j_(e.unaryFilter.field);return bw.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=j_(e.unaryFilter.field);return bw.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=j_(e.unaryFilter.field);return bw.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=j_(e.unaryFilter.field);return bw.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Gy()}}(e):void 0!==e.fieldFilter?(t=e,bw.create(j_(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Gy()}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return _w.create(e.compositeFilter.filters.map((e=>P_(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Gy()}}(e.compositeFilter.op))}(e):Gy();var t}function D_(e){return h_[e]}function O_(e){return d_[e]}function L_(e){return f_[e]}function M_(e){return{fieldPath:e.canonicalString()}}function j_(e){return yv.fromServerFormat(e.fieldPath)}function U_(e){return e instanceof bw?function(e){if("=="===e.op){if(lw(e.value))return{unaryFilter:{field:M_(e.field),op:"IS_NAN"}};if(ow(e.value))return{unaryFilter:{field:M_(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(lw(e.value))return{unaryFilter:{field:M_(e.field),op:"IS_NOT_NAN"}};if(ow(e.value))return{unaryFilter:{field:M_(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:M_(e.field),op:O_(e.op),value:e.value}}}(e):e instanceof _w?function(e){const t=e.getFilters().map((e=>U_(e)));return 1===t.length?t[0]:{compositeFilter:{op:L_(e.op),filters:t}}}(e):Gy()}function F_(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function V_(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t,n,r,i=fv.min(),s=fv.min(),a=Fv.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new z_(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new z_(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new z_(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new z_(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.ct=e}}function $_(e){const t=R_({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Kw(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(){this.un=new H_}addToCollectionParentIndex(e,t){return this.un.add(t),Sv.resolve()}getCollectionParents(e,t){return Sv.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return Sv.resolve()}deleteFieldIndex(e,t){return Sv.resolve()}deleteAllFieldIndexes(e){return Sv.resolve()}createTargetIndexes(e,t){return Sv.resolve()}getDocumentsMatchingTarget(e,t){return Sv.resolve(null)}getIndexType(e,t){return Sv.resolve(0)}getFieldIndexes(e,t){return Sv.resolve([])}getNextCollectionGroupToUpdate(e){return Sv.resolve(null)}getMinOffset(e,t){return Sv.resolve(bv.min())}getMinOffsetFromCollectionGroup(e,t){return Sv.resolve(bv.min())}updateCollectionGroup(e,t,n){return Sv.resolve()}updateIndexEntries(e,t){return Sv.resolve()}}class H_{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Lv(mv.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Lv(mv.comparator)).toArray()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new W_(0)}static kn(){return new W_(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.changes=new eb((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,fw.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Sv.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Ob(n.mutation,e,jv.empty(),dv.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,hb()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=hb()){const r=ab();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=ib();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ab();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,hb())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=nb();const s=lb(),a=lb();return t.forEach(((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof Ub)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),Ob(a.mutation,t,a.mutation.getFieldMask(),dv.now())):s.set(t.key,jv.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return a.set(e,new G_(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=lb();let r=new Pv(((e,t)=>e-t)),i=hb();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let a=n.get(e)||jv.empty();a=i.applyToLocalView(s,a),n.set(e,a);const o=(r.get(i.batchId)||hb()).add(e);r=r.insert(i.batchId,o)}))})).next((()=>{const s=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),o=r.key,l=r.value,u=ob();l.forEach((e=>{if(!i.has(e)){const r=Pb(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return Sv.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return i=t,vv.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):$w(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Sv.resolve(ab());let a=-1,o=i;return s.next((t=>Sv.forEach(t,((t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?Sv.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{o=o.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,o,t,hb()))).next((e=>({batchId:a,changes:sb(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new vv(t)).next((e=>{let t=ib();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=ib();return this.indexManager.getCollectionParents(e,i).next((a=>Sv.forEach(a,(a=>{const o=(l=t,u=a.child(i),new Vw(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,u;return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,fw.newInvalidDocument(r)))}));let n=ib();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&Ob(s.mutation,r,jv.empty(),dv.now()),Xw(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return Sv.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,{id:(n=t).id,version:n.version,createTime:w_(n.createTime)}),Sv.resolve();var n}getNamedQuery(e,t){return Sv.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,{name:(n=t).name,query:$_(n.bundledQuery),readTime:w_(n.readTime)}),Sv.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.overlays=new Pv(vv.comparator),this.Ir=new Map}getOverlay(e,t){return Sv.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ab();return Sv.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),Sv.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ir.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Ir.delete(n)),Sv.resolve()}getOverlaysForCollection(e,t,n){const r=ab(),i=t.length+1,s=new vv(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Sv.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Pv(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ab(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=ab(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach(((e,t)=>a.set(e,t))),!(a.size()>=r)););return Sv.resolve(a)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Ir.get(r.largestBatchId).delete(n.key);this.Ir.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Wb(t,n));let i=this.Ir.get(t);void 0===i&&(i=hb(),this.Ir.set(t,i)),this.Ir.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(){this.sessionToken=Fv.EMPTY_BYTE_STRING}getSessionToken(e){return Sv.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Sv.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(){this.Tr=new Lv(eE.Er),this.dr=new Lv(eE.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new eE(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Vr(new eE(e,t))}mr(e,t){e.forEach((e=>this.removeReference(e,t)))}gr(e){const t=new vv(new mv([])),n=new eE(t,e),r=new eE(t,e+1),i=[];return this.dr.forEachInRange([n,r],(e=>{this.Vr(e),i.push(e.key)})),i}pr(){this.Tr.forEach((e=>this.Vr(e)))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new vv(new mv([])),n=new eE(t,e),r=new eE(t,e+1);let i=hb();return this.dr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new eE(e,0),n=this.Tr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class eE{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return vv.comparator(e.key,t.key)||cv(e.wr,t.wr)}static Ar(e,t){return cv(e.wr,t.wr)||vv.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Lv(eE.Er)}checkEmpty(e){return Sv.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new qb(i,t,n,r);this.mutationQueue.push(s);for(const a of r)this.br=this.br.add(new eE(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return Sv.resolve(s)}lookupMutationBatch(e,t){return Sv.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.vr(n),i=r<0?0:r;return Sv.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Sv.resolve(0===this.mutationQueue.length?-1:this.Sr-1)}getAllMutationBatches(e){return Sv.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new eE(t,0),r=new eE(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([n,r],(e=>{const t=this.Dr(e.wr);i.push(t)})),Sv.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Lv(cv);return t.forEach((e=>{const t=new eE(e,0),r=new eE(e,Number.POSITIVE_INFINITY);this.br.forEachInRange([t,r],(e=>{n=n.add(e.wr)}))})),Sv.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;vv.isDocumentKey(i)||(i=i.child(""));const s=new eE(new vv(i),0);let a=new Lv(cv);return this.br.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.wr)),!0)}),s),Sv.resolve(this.Cr(a))}Cr(e){const t=[];return e.forEach((e=>{const n=this.Dr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Qy(0===this.Fr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.br;return Sv.forEach(t.mutations,(r=>{const i=new eE(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.br=n}))}On(e){}containsKey(e,t){const n=new eE(t,0),r=this.br.firstAfterOrEqual(n);return Sv.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Sv.resolve()}Fr(e,t){return this.vr(e)}vr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.Mr=e,this.docs=new Pv(vv.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Sv.resolve(n?n.document.mutableCopy():fw.newInvalidDocument(t))}getEntries(e,t){let n=nb();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():fw.newInvalidDocument(e))})),Sv.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=nb();const s=t.path,a=new vv(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){const{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||_v(wv(a),n)<=0||(r.has(a.key)||Xw(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return Sv.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Gy()}Or(e,t){return Sv.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new rE(this)}getSize(e){return Sv.resolve(this.size)}}class rE extends K_{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.cr.addEntry(e,r)):this.cr.removeEntry(n)})),Sv.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e){this.persistence=e,this.Nr=new eb((e=>jw(e)),Uw),this.lastRemoteSnapshotVersion=fv.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Z_,this.targetCount=0,this.kr=W_.Bn()}forEachTarget(e,t){return this.Nr.forEach(((e,n)=>t(n))),Sv.resolve()}getLastRemoteSnapshotVersion(e){return Sv.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Sv.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),Sv.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),Sv.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new W_(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,Sv.resolve()}updateTargetData(e,t){return this.Kn(t),Sv.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,Sv.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Nr.forEach(((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Nr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),Sv.waitFor(i).next((()=>r))}getTargetCount(e){return Sv.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return Sv.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),Sv.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Sv.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),Sv.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return Sv.resolve(n)}containsKey(e,t){return Sv.resolve(this.Br.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,t){this.qr={},this.overlays={},this.Qr=new Tv(0),this.Kr=!1,this.Kr=!0,this.$r=new J_,this.referenceDelegate=e(this),this.Ur=new iE(this),this.indexManager=new q_,this.remoteDocumentCache=new nE((e=>this.referenceDelegate.Wr(e))),this.serializer=new B_(t),this.Gr=new Y_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new X_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new tE(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){qy("MemoryPersistence","Starting transaction:",e);const r=new aE(this.Qr.next());return this.referenceDelegate.zr(),n(r).next((e=>this.referenceDelegate.jr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Hr(e,t){return Sv.or(Object.values(this.qr).map((n=>()=>n.containsKey(e,t))))}}class aE extends Ev{constructor(e){super(),this.currentSequenceNumber=e}}class oE{constructor(e){this.persistence=e,this.Jr=new Z_,this.Yr=null}static Zr(e){return new oE(e)}get Xr(){if(this.Yr)return this.Yr;throw Gy()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),Sv.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),Sv.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),Sv.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach((e=>this.Xr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Xr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Sv.forEach(this.Xr,(n=>{const r=vv.fromPath(n);return this.ei(e,r).next((e=>{e||t.removeEntry(r,fv.min())}))})).next((()=>(this.Yr=null,t.apply(e))))}updateLimboDocument(e,t){return this.ei(e,t).next((e=>{e?this.Xr.delete(t.toString()):this.Xr.add(t.toString())}))}Wr(e){return 0}ei(e,t){return Sv.or([()=>Sv.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=r}static Wi(e,t){let n=hb(),r=hb();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new lE(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=jd()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(Md())>0?6:4}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.Yi(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Zi(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new uE;return this.Xi(e,t,n).next((r=>{if(i.result=r,this.zi)return this.es(e,t,n,r.size)}))})).next((()=>i.result))}es(e,t,n,r){return n.documentReadCount<this.ji?($y()<=Zd.DEBUG&&qy("QueryEngine","SDK will not create cache indexes for query:",Yw(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),Sv.resolve()):($y()<=Zd.DEBUG&&qy("QueryEngine","Query:",Yw(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Hi*r?($y()<=Zd.DEBUG&&qy("QueryEngine","The SDK decides to create cache indexes for query:",Yw(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Hw(t))):Sv.resolve())}Yi(e,t){if(Bw(t))return Sv.resolve(null);let n=Hw(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Kw(t,null,"F"),n=Hw(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=hb(...r);return this.Ji.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.ts(t,r);return this.ns(t,s,i,n.readTime)?this.Yi(e,Kw(t,null,"F")):this.rs(e,s,t,n)}))))})))))}Zi(e,t,n,r){return Bw(t)||r.isEqual(fv.min())?Sv.resolve(null):this.Ji.getDocuments(e,n).next((i=>{const s=this.ts(t,i);return this.ns(t,s,n,r)?Sv.resolve(null):($y()<=Zd.DEBUG&&qy("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Yw(t)),this.rs(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=fv.fromTimestamp(1e9===r?new dv(n+1,0):new dv(n,r));return new bv(i,vv.empty(),t)}(r,-1)).next((e=>e)))}))}ts(e,t){let n=new Lv(Jw(e));return t.forEach(((t,r)=>{Xw(e,r)&&(n=n.add(r))})),n}ns(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,t,n){return $y()<=Zd.DEBUG&&qy("QueryEngine","Using full collection scan to execute query:",Yw(t)),this.Ji.getDocumentsMatchingQuery(e,t,bv.min(),n)}rs(e,t,n,r){return this.Ji.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t,n,r){this.persistence=e,this.ss=t,this.serializer=r,this.os=new Pv(cv),this._s=new eb((e=>jw(e)),Uw),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Q_(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.os)))}}async function dE(e,t){const n=Yy(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.ls(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let a=hb();for(const e of r){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next((e=>({hs:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function fE(e){const t=Yy(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ur.getLastRemoteSnapshotVersion(e)))}function pE(e,t){const n=Yy(e),r=t.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];t.targetChanges.forEach(((s,o)=>{const l=i.get(o);if(!l)return;a.push(n.Ur.removeMatchingKeys(e,s.removedDocuments,o).next((()=>n.Ur.addMatchingKeys(e,s.addedDocuments,o))));let u=l.withSequenceNumber(e.currentSequenceNumber);var c,h,d;null!==t.targetMismatches.get(o)?u=u.withResumeToken(Fv.EMPTY_BYTE_STRING,fv.min()).withLastLimboFreeSnapshotVersion(fv.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(o,u),h=u,d=s,(0===(c=l).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&a.push(n.Ur.updateTargetData(e,u))}));let o=nb(),l=hb();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),a.push(function(e,t,n){let r=hb(),i=hb();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=nb();return n.forEach(((n,s)=>{const a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(fv.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):qy("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)})),{Ps:r,Is:i}}))}(e,s,t.documentUpdates).next((e=>{o=e.Ps,l=e.Is}))),!r.isEqual(fv.min())){const t=n.Ur.getLastRemoteSnapshotVersion(e).next((t=>n.Ur.setTargetsMetadata(e,e.currentSequenceNumber,r)));a.push(t)}return Sv.waitFor(a).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,o,l))).next((()=>o))})).then((e=>(n.os=i,e)))}function mE(e,t){const n=Yy(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function gE(e,t,n){const r=Yy(e),i=r.os.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(a){if(!xv(a))throw a;qy("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(i.target)}function yE(e,t,n){const r=Yy(e);let i=fv.min(),s=hb();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=Yy(e),i=r._s.get(n);return void 0!==i?Sv.resolve(r.os.get(i)):r.Ur.getTargetData(t,n)}(r,e,Hw(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.ss.getDocumentsMatchingQuery(e,t,n?i:fv.min(),n?s:hb()))).next((e=>(function(e,t,n){let r=e.us.get(t)||fv.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.us.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,Ts:s})))))}class vE{constructor(){this.activeTargetIds=db}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wE{constructor(){this.so=new vE,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new vE,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{_o(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){qy("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){qy("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EE=null;function kE(){return null===EE?EE=268435456+Math.round(2147483648*Math.random()):EE++,"0x"+EE.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const SE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="WebChannelConnection";class IE extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=t+"://"+e.host,this.vo=`projects/${n}/databases/${r}`,this.Co="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Fo(){return!1}Mo(e,t,n,r,i){const s=kE(),a=this.xo(e,t.toUriEncodedString());qy("RestConnection",`Sending RPC '${e}' ${s}:`,a,n);const o={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(o,r,i),this.No(e,a,o,n).then((t=>(qy("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Wy("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t}))}Lo(e,t,n,r,i,s){return this.Mo(e,t,n,r,i)}Oo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+zy,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}xo(e,t){const n=SE[e];return`${this.Do}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,r){const i=kE();return new Promise(((s,a)=>{const o=new Ay;o.setWithCredentials(!0),o.listenOnce(Py.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Dy.NO_ERROR:const t=o.getResponseJson();qy(TE,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Dy.TIMEOUT:qy(TE,`RPC '${e}' ${i} timed out`),a(new Jy(Xy.DEADLINE_EXCEEDED,"Request time out"));break;case Dy.HTTP_ERROR:const n=o.getStatus();if(qy(TE,`RPC '${e}' ${i} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Xy).indexOf(t)>=0?t:Xy.UNKNOWN}(t.status);a(new Jy(e,t.message))}else a(new Jy(Xy.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new Jy(Xy.UNAVAILABLE,"Connection failed."));break;default:Gy()}}finally{qy(TE,`RPC '${e}' ${i} completed.`)}}));const l=JSON.stringify(r);qy(TE,`RPC '${e}' ${i} sending request:`,r),o.send(t,"POST",l,n,15)}))}Bo(e,t,n){const r=kE(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=jy(),a=My(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Oo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const u=i.join("");qy(TE,`Creating RPC '${e}' stream ${r}: ${u}`,o);const c=s.createWebChannel(u,o);let h=!1,d=!1;const f=new xE({Io:t=>{d?qy(TE,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(qy(TE,`Opening RPC '${e}' stream ${r} transport.`),c.open(),h=!0),qy(TE,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},To:()=>c.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(c,Ry.EventType.OPEN,(()=>{d||(qy(TE,`RPC '${e}' stream ${r} transport opened.`),f.yo())})),p(c,Ry.EventType.CLOSE,(()=>{d||(d=!0,qy(TE,`RPC '${e}' stream ${r} transport closed`),f.So())})),p(c,Ry.EventType.ERROR,(t=>{d||(d=!0,Wy(TE,`RPC '${e}' stream ${r} transport errored:`,t),f.So(new Jy(Xy.UNAVAILABLE,"The operation could not be completed")))})),p(c,Ry.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];Qy(!!i);const s=i,a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){qy(TE,`RPC '${e}' stream ${r} received error:`,a);const t=a.status;let n=function(e){const t=Gb[e];if(void 0!==t)return Yb(t)}(t),i=a.message;void 0===n&&(n=Xy.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),d=!0,f.So(new Jy(n,i)),c.close()}else qy(TE,`RPC '${e}' stream ${r} received:`,i),f.bo(i)}})),p(a,Ly.STAT_EVENT,(t=>{t.stat===Oy.PROXY?qy(TE,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===Oy.NOPROXY&&qy(TE,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.wo()}),0),f}}function CE(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(e){return new p_(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e,t,n=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),r=Math.max(0,t-n);r>0&&qy("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,(()=>(this.Uo=Date.now(),e()))),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){null!==this.$o&&(this.$o.skipDelay(),this.$o=null)}cancel(){null!==this.$o&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,t,n,r,i,s,a,o){this.ui=e,this.Ho=n,this.Jo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new AE(e,t)}n_(){return 1===this.state||5===this.state||this.r_()}r_(){return 2===this.state||3===this.state}start(){this.e_=0,4!==this.state?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&null===this.Zo&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,(()=>this.__())))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,4!==e?this.t_.reset():t&&t.code===Xy.RESOURCE_EXHAUSTED?(Hy(t.toString()),Hy("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===Xy.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Yo===t&&this.P_(e,n)}),(t=>{e((()=>{const e=new Jy(Xy.UNKNOWN,"Fetching auth token failed: "+t.message);return this.I_(e)}))}))}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo((()=>{n((()=>this.listener.Eo()))})),this.stream.Ro((()=>{n((()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,(()=>(this.r_()&&(this.state=3),Promise.resolve()))),this.listener.Ro())))})),this.stream.mo((e=>{n((()=>this.I_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.e_?this.E_(e):this.onNext(e)))}))}i_(){this.state=5,this.t_.Go((async()=>{this.state=0,this.start()}))}I_(e){return qy("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget((()=>this.Yo===e?t():(qy("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class PE extends RE{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Gy(),s=t.targetChange.targetIds||[],a=function(e,t){return e.useProto3Json?(Qy(void 0===t||"string"==typeof t),Fv.fromBase64String(t||"")):(Qy(void 0===t||t instanceof Buffer||t instanceof Uint8Array),Fv.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(e){const t=void 0===e.code?Xy.UNKNOWN:Yb(e.code);return new Jy(t,e.message||"")}(o);n=new a_(i,s,a,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=S_(e,r.document.name),s=w_(r.document.updateTime),a=r.document.createTime?w_(r.document.createTime):fv.min(),o=new hw({mapValue:{fields:r.document.fields}}),l=fw.newFoundDocument(i,s,a,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new i_(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=S_(e,r.document),s=r.readTime?w_(r.readTime):fv.min(),a=fw.newNoDocument(i,s),o=r.removedTargetIds||[];n=new i_([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=S_(e,r.document),s=r.removedTargetIds||[];n=new i_([],s,i,null)}else{if(!("filter"in t))return Gy();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Kb(r,i),a=e.targetId;n=new s_(a,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return fv.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?fv.min():t.readTime?w_(t.readTime):fv.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=T_(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Fw(r)?{documents:N_(e,r)}:{query:A_(e,r)._t},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=y_(e,t.resumeToken);const r=m_(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(fv.min())>0){n.readTime=g_(e,t.snapshotVersion.toTimestamp());const r=m_(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Gy()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=T_(this.serializer),t.removeTarget=e,this.a_(t)}}class DE extends RE{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Qy(!!e.streamToken),this.lastStreamToken=e.streamToken,Qy(!e.writeResults||0===e.writeResults.length),this.listener.f_()}onNext(e){Qy(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=function(e,t){return e&&e.length>0?(Qy(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?w_(e.updateTime):w_(t);return n.isEqual(fv.min())&&(n=w_(t)),new Cb(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=w_(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=T_(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof jb)n={update:C_(e,t.key,t.value)};else if(t instanceof Bb)n={delete:k_(e,t.key)};else if(t instanceof Ub)n={update:C_(e,t.key,t.data),updateMask:F_(t.fieldMask)};else{if(!(t instanceof $b))return Gy();n={verify:k_(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof bb)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof _b)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof kb)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof xb)return{fieldPath:t.field.canonicalString(),increment:n.Pe};throw Gy()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:v_(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Gy())),n;var r,i}(this.serializer,e)))};this.a_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new Jy(Xy.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Mo(e,__(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Xy.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Jy(Xy.UNKNOWN,e.toString())}))}Lo(e,t,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.Lo(e,__(t,n),r,s,a,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Xy.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Jy(Xy.UNKNOWN,e.toString())}))}terminate(){this.y_=!0,this.connection.terminate()}}class LE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){0===this.S_&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve()))))}M_(e){"Online"===this.state?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,"Online"===e&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Hy(t),this.D_=!1):qy("OnlineStateTracker",t)}x_(){null!==this.b_&&(this.b_.cancel(),this.b_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o((e=>{n.enqueueAndForget((async()=>{HE(this)&&(qy("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Yy(e);t.L_.add(4),await UE(t),t.q_.set("Unknown"),t.L_.delete(4),await jE(t)}(this))}))})),this.q_=new LE(n,r)}}async function jE(e){if(HE(e))for(const t of e.B_)await t(!0)}async function UE(e){for(const t of e.B_)await t(!1)}function FE(e,t){const n=Yy(e);n.N_.has(t.targetId)||(n.N_.set(t.targetId,t),qE(n)?$E(n):uk(n).r_()&&zE(n,t))}function VE(e,t){const n=Yy(e),r=uk(n);n.N_.delete(t),r.r_()&&BE(n,t),0===n.N_.size&&(r.r_()?r.o_():HE(n)&&n.q_.set("Unknown"))}function zE(e,t){if(e.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(fv.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}uk(e).A_(t)}function BE(e,t){e.Q_.xe(t),uk(e).R_(t)}function $E(e){e.Q_=new l_({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.N_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),uk(e).start(),e.q_.v_()}function qE(e){return HE(e)&&!uk(e).n_()&&e.N_.size>0}function HE(e){return 0===Yy(e).L_.size}function WE(e){e.Q_=void 0}async function KE(e){e.q_.set("Online")}async function GE(e){e.N_.forEach(((t,n)=>{zE(e,t)}))}async function QE(e,t){WE(e),qE(e)?(e.q_.M_(t),$E(e)):e.q_.set("Unknown")}async function YE(e,t,n){if(e.q_.set("Online"),t instanceof a_&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.N_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.N_.delete(r),e.Q_.removeTarget(r))}(e,t)}catch(r){qy("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await XE(e,r)}else if(t instanceof i_?e.Q_.Ke(t):t instanceof s_?e.Q_.He(t):e.Q_.We(t),!n.isEqual(fv.min()))try{const t=await fE(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Q_.rt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.N_.get(r);i&&e.N_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.N_.get(t);if(!r)return;e.N_.set(t,r.withResumeToken(Fv.EMPTY_BYTE_STRING,r.snapshotVersion)),BE(e,t);const i=new z_(r.target,t,n,r.sequenceNumber);zE(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){qy("RemoteStore","Failed to raise snapshot:",i),await XE(e,i)}}async function XE(e,t,n){if(!xv(t))throw t;e.L_.add(1),await UE(e),e.q_.set("Offline"),n||(n=()=>fE(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{qy("RemoteStore","Retrying IndexedDB access"),await n(),e.L_.delete(1),await jE(e)}))}function JE(e,t){return t().catch((n=>XE(e,n,t)))}async function ZE(e){const t=Yy(e),n=ck(t);let r=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;ek(t);)try{const e=await mE(t.localStore,r);if(null===e){0===t.O_.length&&n.o_();break}r=e.batchId,tk(t,e)}catch(i){await XE(t,i)}nk(t)&&rk(t)}function ek(e){return HE(e)&&e.O_.length<10}function tk(e,t){e.O_.push(t);const n=ck(e);n.r_()&&n.V_&&n.m_(t.mutations)}function nk(e){return HE(e)&&!ck(e).n_()&&e.O_.length>0}function rk(e){ck(e).start()}async function ik(e){ck(e).p_()}async function sk(e){const t=ck(e);for(const n of e.O_)t.m_(n.mutations)}async function ak(e,t,n){const r=e.O_.shift(),i=Hb.from(r,t,n);await JE(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await ZE(e)}async function ok(e,t){t&&ck(e).V_&&await async function(e,t){if(function(e){switch(e){default:return Gy();case Xy.CANCELLED:case Xy.UNKNOWN:case Xy.DEADLINE_EXCEEDED:case Xy.RESOURCE_EXHAUSTED:case Xy.INTERNAL:case Xy.UNAVAILABLE:case Xy.UNAUTHENTICATED:return!1;case Xy.INVALID_ARGUMENT:case Xy.NOT_FOUND:case Xy.ALREADY_EXISTS:case Xy.PERMISSION_DENIED:case Xy.FAILED_PRECONDITION:case Xy.ABORTED:case Xy.OUT_OF_RANGE:case Xy.UNIMPLEMENTED:case Xy.DATA_LOSS:return!0}}(n=t.code)&&n!==Xy.ABORTED){const n=e.O_.shift();ck(e).s_(),await JE(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await ZE(e)}var n}(e,t),nk(e)&&rk(e)}async function lk(e,t){const n=Yy(e);n.asyncQueue.verifyOperationInProgress(),qy("RemoteStore","RemoteStore received new credentials");const r=HE(n);n.L_.add(3),await UE(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.L_.delete(3),await jE(n)}function uk(e){return e.K_||(e.K_=function(e,t,n){const r=Yy(e);return r.w_(),new PE(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:KE.bind(null,e),Ro:GE.bind(null,e),mo:QE.bind(null,e),d_:YE.bind(null,e)}),e.B_.push((async t=>{t?(e.K_.s_(),qE(e)?$E(e):e.q_.set("Unknown")):(await e.K_.stop(),WE(e))}))),e.K_}function ck(e){return e.U_||(e.U_=function(e,t,n){const r=Yy(e);return r.w_(),new DE(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ik.bind(null,e),mo:ok.bind(null,e),f_:sk.bind(null,e),g_:ak.bind(null,e)}),e.B_.push((async t=>{t?(e.U_.s_(),await ZE(e)):(await e.U_.stop(),e.O_.length>0&&(qy("RemoteStore",`Stopping write stream with ${e.O_.length} pending writes`),e.O_=[]))}))),e.U_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class hk{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Zy,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,a=new hk(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Jy(Xy.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dk(e,t){if(Hy("AsyncQueue",`${t}: ${e}`),xv(e))return new Jy(Xy.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.comparator=e?(t,n)=>e(t,n)||vv.comparator(t.key,n.key):(e,t)=>vv.comparator(e.key,t.key),this.keyedMap=ib(),this.sortedSet=new Pv(this.comparator)}static emptySet(e){return new fk(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fk))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new fk;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this.W_=new Pv(vv.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?0!==e.type&&3===n.type?this.W_=this.W_.insert(t,e):3===e.type&&1!==n.type?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.W_=this.W_.remove(t):1===e.type&&2===n.type?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):Gy():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class mk{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new mk(e,t,fk.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gw(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some((e=>e.J_()))}}class yk{constructor(){this.queries=vk(),this.onlineState="Unknown",this.Y_=new Set}terminate(){!function(e,t){const n=Yy(e),r=n.queries;n.queries=vk(),r.forEach(((e,n)=>{for(const r of n.j_)r.onError(t)}))}(this,new Jy(Xy.ABORTED,"Firestore shutting down"))}}function vk(){return new eb((e=>Qw(e)),Gw)}async function wk(e,t){const n=Yy(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.H_()&&t.J_()&&(r=2):(s=new gk,r=t.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const e=dk(a,`Initialization of query '${Yw(t.query)}' failed`);return void t.onError(e)}n.queries.set(i,s),s.j_.push(t),t.Z_(n.onlineState),s.z_&&t.X_(s.z_)&&kk(n)}async function bk(e,t){const n=Yy(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.j_.indexOf(t);e>=0&&(s.j_.splice(e,1),0===s.j_.length?i=t.J_()?0:1:!s.H_()&&t.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _k(e,t){const n=Yy(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.j_)e.X_(i)&&(r=!0);t.z_=i}}r&&kk(n)}function Ek(e,t,n){const r=Yy(e),i=r.queries.get(t);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(t)}function kk(e){e.Y_.forEach((e=>{e.next()}))}var Sk,xk;(xk=Sk||(Sk={})).ea="default",xk.Cache="cache";class Tk{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new mk(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache)return!0;if(!this.J_())return!0;const n="Offline"!==t;return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}oa(e){e=mk.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Sk.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e){this.key=e}}class Ck{constructor(e){this.key=e}}class Nk{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=hb(),this.mutatedKeys=hb(),this.Aa=Jw(e),this.Ra=new fk(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new pk,r=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1;const o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=Xw(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.ga(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.Aa(c,o)>0||l&&this.Aa(c,l)<0)&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ra:s,fa:n,ns:a,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const s=e.fa.G_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Gy()}};return n(e)-n(t)}(e.type,t.type)||this.Aa(e.doc,t.doc))),this.pa(n),r=null!=r&&r;const a=t&&!r?this.ya():[],o=0===this.da.size&&this.current&&!r?1:0,l=o!==this.Ea;return this.Ea=o,0!==s.length||l?{snapshot:new mk(this.query,e.Ra,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new pk,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach((e=>this.Ta=this.Ta.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ta=this.Ta.delete(e))),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=hb(),this.Ra.forEach((e=>{this.Sa(e.key)&&(this.da=this.da.add(e.key))}));const t=[];return e.forEach((e=>{this.da.has(e)||t.push(new Ck(e))})),this.da.forEach((n=>{e.has(n)||t.push(new Ik(n))})),t}ba(e){this.Ta=e.Ts,this.da=hb();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return mk.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,0===this.Ea,this.hasCachedResults)}}class Ak{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Rk{constructor(e){this.key=e,this.va=!1}}class Pk{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ca={},this.Fa=new eb((e=>Qw(e)),Gw),this.Ma=new Map,this.xa=new Set,this.Oa=new Pv(vv.comparator),this.Na=new Map,this.La=new Z_,this.Ba={},this.ka=new Map,this.qa=W_.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return!0===this.Qa}}async function Dk(e,t,n=!0){const r=eS(e);let i;const s=r.Fa.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Lk(r,t,n,!0),i}async function Ok(e,t){const n=eS(e);await Lk(n,t,!0,!1)}async function Lk(e,t,n,r){const i=await function(e,t){const n=Yy(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ur.getTargetData(e,t).next((i=>i?(r=i,Sv.resolve(r)):n.Ur.allocateTargetId(e).next((i=>(r=new z_(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Ur.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.os.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(e.targetId,e),n._s.set(t,e.targetId)),e}))}(e.localStore,Hw(t)),s=i.targetId,a=e.sharedClientState.addLocalQueryTarget(s,n);let o;return r&&(o=await async function(e,t,n,r,i){e.Ka=(t,n,r)=>async function(e,t,n,r){let i=t.view.ma(n);i.ns&&(i=await yE(e.localStore,t.query,!1).then((({documents:e})=>t.view.ma(e,i))));const s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return Gk(e,t.targetId,o.wa),o.snapshot}(e,t,n,r);const s=await yE(e.localStore,t,!0),a=new Nk(t,s.Ts),o=a.ma(s.documents),l=r_.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);Gk(e,n,u.wa);const c=new Ak(t,n,a);return e.Fa.set(t,c),e.Ma.has(n)?e.Ma.get(n).push(t):e.Ma.set(n,[t]),u.snapshot}(e,t,s,"current"===a,i.resumeToken)),e.isPrimaryClient&&n&&FE(e.remoteStore,i),o}async function Mk(e,t,n){const r=Yy(e),i=r.Fa.get(t),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter((e=>!Gw(e,t)))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await gE(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&VE(r.remoteStore,i.targetId),Wk(r,i.targetId)})).catch(kv)):(Wk(r,i.targetId),await gE(r.localStore,i.targetId,!0))}async function jk(e,t){const n=Yy(e),r=n.Fa.get(t),i=n.Ma.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),VE(n.remoteStore,r.targetId))}async function Uk(e,t,n){const r=function(e){const t=Yy(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Bk.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=$k.bind(null,t),t}(e);try{const e=await function(e,t){const n=Yy(e),r=dv.now(),i=t.reduce(((e,t)=>e.add(t.key)),hb());let s,a;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let o=nb(),l=hb();return n.cs.getEntries(e,i).next((e=>{o=e,o.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,o))).next((i=>{s=i;const a=[];for(const e of t){const t=Lb(e,s.get(e.key).overlayedDocument);null!=t&&a.push(new Ub(e.key,t,dw(t.value.mapValue),Nb.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,a,t)})).next((t=>{a=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:a.batchId,changes:sb(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ba[e.currentUser.toKey()];r||(r=new Pv(cv)),r=r.insert(t,n),e.Ba[e.currentUser.toKey()]=r}(r,e.batchId,n),await Xk(r,e.changes),await ZE(r.remoteStore)}catch(i){const e=dk(i,"Failed to persist write");n.reject(e)}}async function Fk(e,t){const n=Yy(e);try{const e=await pE(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Na.get(t);r&&(Qy(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.va=!0:e.modifiedDocuments.size>0?Qy(r.va):e.removedDocuments.size>0&&(Qy(r.va),r.va=!1))})),await Xk(n,e,t)}catch(r){await kv(r)}}function Vk(e,t,n){const r=Yy(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Fa.forEach(((n,r)=>{const i=r.view.Z_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Yy(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.j_)i.Z_(t)&&(r=!0)})),r&&kk(n)}(r.eventManager,t),e.length&&r.Ca.d_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function zk(e,t,n){const r=Yy(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Na.get(t),s=i&&i.key;if(s){let e=new Pv(vv.comparator);e=e.insert(s,fw.newNoDocument(s,fv.min()));const n=hb().add(s),i=new n_(fv.min(),new Map,new Pv(cv),e,n);await Fk(r,i),r.Oa=r.Oa.remove(s),r.Na.delete(t),Yk(r)}else await gE(r.localStore,t,!1).then((()=>Wk(r,t,n))).catch(kv)}async function Bk(e,t){const n=Yy(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Yy(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let a=Sv.resolve();return s.forEach((e=>{a=a.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Qy(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),a.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=hb();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);Hk(n,r,null),qk(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xk(n,e)}catch(i){await kv(i)}}async function $k(e,t,n){const r=Yy(e);try{const e=await function(e,t){const n=Yy(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Qy(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Hk(r,t,n),qk(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Xk(r,e)}catch(i){await kv(i)}}function qk(e,t){(e.ka.get(t)||[]).forEach((e=>{e.resolve()})),e.ka.delete(t)}function Hk(e,t,n){const r=Yy(e);let i=r.Ba[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ba[r.currentUser.toKey()]=i}}function Wk(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Ma.get(t))e.Fa.delete(r),n&&e.Ca.$a(r,n);e.Ma.delete(t),e.isPrimaryClient&&e.La.gr(t).forEach((t=>{e.La.containsKey(t)||Kk(e,t)}))}function Kk(e,t){e.xa.delete(t.path.canonicalString());const n=e.Oa.get(t);null!==n&&(VE(e.remoteStore,n),e.Oa=e.Oa.remove(t),e.Na.delete(n),Yk(e))}function Gk(e,t,n){for(const r of n)r instanceof Ik?(e.La.addReference(r.key,t),Qk(e,r)):r instanceof Ck?(qy("SyncEngine","Document no longer in limbo: "+r.key),e.La.removeReference(r.key,t),e.La.containsKey(r.key)||Kk(e,r.key)):Gy()}function Qk(e,t){const n=t.key,r=n.path.canonicalString();e.Oa.get(n)||e.xa.has(r)||(qy("SyncEngine","New document in limbo: "+n),e.xa.add(r),Yk(e))}function Yk(e){for(;e.xa.size>0&&e.Oa.size<e.maxConcurrentLimboResolutions;){const t=e.xa.values().next().value;e.xa.delete(t);const n=new vv(mv.fromString(t)),r=e.qa.next();e.Na.set(r,new Rk(n)),e.Oa=e.Oa.insert(n,r),FE(e.remoteStore,new z_(Hw(zw(n.path)),r,"TargetPurposeLimboResolution",Tv.oe))}}async function Xk(e,t,n){const r=Yy(e),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach(((e,o)=>{a.push(r.Ka(o,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(o.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(o.targetId,i?"current":"not-current")}if(e){i.push(e);const t=lE.Wi(o.targetId,e);s.push(t)}})))})),await Promise.all(a),r.Ca.d_(i),await async function(e,t){const n=Yy(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Sv.forEach(t,(t=>Sv.forEach(t.$i,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Sv.forEach(t.Ui,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!xv(r))throw r;qy("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.os.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.os=n.os.insert(e,i)}}}(r.localStore,s))}async function Jk(e,t){const n=Yy(e);if(!n.currentUser.isEqual(t)){qy("SyncEngine","User change. New user:",t.toKey());const e=await dE(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).ka.forEach((e=>{e.forEach((e=>{e.reject(new Jy(Xy.CANCELLED,i))}))})),r.ka.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Xk(n,e.hs)}var r,i}function Zk(e,t){const n=Yy(e),r=n.Na.get(t);if(r&&r.va)return hb().add(r.key);{let e=hb();const r=n.Ma.get(t);if(!r)return e;for(const t of r){const r=n.Fa.get(t);e=e.unionWith(r.view.Va)}return e}}function eS(e){const t=Yy(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Fk.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zk.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=zk.bind(null,t),t.Ca.d_=_k.bind(null,t.eventManager),t.Ca.$a=Ek.bind(null,t.eventManager),t}class tS{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=NE(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return function(e,t,n,r){return new hE(e,t,n,r)}(this.persistence,new cE,e.initialUser,this.serializer)}Ga(e){return new sE(oE.Zr,this.serializer)}Wa(e){return new wE}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tS.provider={build:()=>new tS};class nS{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Vk(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Jk.bind(null,this.syncEngine),await async function(e,t){const n=Yy(e);t?(n.L_.delete(2),await jE(n)):t||(n.L_.add(2),await UE(n),n.q_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yk}createDatastore(e){const t=NE(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new IE(r));var r;return function(e,t,n,r){return new OE(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Vk(this.syncEngine,e,0),s=_E.D()?new _E:new bE,new ME(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){const o=new Pk(e,t,n,r,i,s);return a&&(o.Qa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=Yy(e);qy("RemoteStore","RemoteStore shutting down."),t.L_.add(5),await UE(t),t.k_.shutdown(),t.q_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}nS.provider={build:()=>new nS};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Hy("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Vy.UNAUTHENTICATED,this.clientId=uv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async e=>{qy("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(qy("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zy;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=dk(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function sS(e,t){e.asyncQueue.verifyOperationInProgress(),qy("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await dE(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function aS(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){qy("FirestoreClient","Using user provided OfflineComponentProvider");try{await sS(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!("FirebaseError"===(n=i).name?n.code===Xy.FAILED_PRECONDITION||n.code===Xy.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw i;Wy("Error using user provided cache. Falling back to memory cache: "+i),await sS(e,new tS)}}else qy("FirestoreClient","Using default OfflineComponentProvider"),await sS(e,new tS);var n;return e._offlineComponents}(e);qy("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>lk(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>lk(t.remoteStore,n))),e._onlineComponents=t}async function oS(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(qy("FirestoreClient","Using user provided OnlineComponentProvider"),await aS(e,e._uninitializedComponentsProvider._online)):(qy("FirestoreClient","Using default OnlineComponentProvider"),await aS(e,new nS))),e._onlineComponents}async function lS(e){const t=await oS(e),n=t.eventManager;return n.onListen=Dk.bind(null,t.syncEngine),n.onUnlisten=Mk.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Ok.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=jk.bind(null,t.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uS(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const cS=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(e,t,n){if(!n)throw new Jy(Xy.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function dS(e){if(!vv.isDocumentKey(e))throw new Jy(Xy.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function fS(e){if(vv.isDocumentKey(e))throw new Jy(Xy.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function pS(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Gy()}function mS(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Jy(Xy.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pS(e);throw new Jy(Xy.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Jy(Xy.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Jy(Xy.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Jy(Xy.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uS(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Jy(Xy.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Jy(Xy.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Jy(Xy.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class yS{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gS({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Jy(Xy.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Jy(Xy.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gS(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new tv;switch(e.type){case"firstParty":return new sv(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Jy(Xy.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=cS.get(e);t&&(qy("ComponentProvider","Removing Datastore"),cS.delete(e),t.terminate())}(this),Promise.resolve()}}function vS(e,t,n,r={}){var i;const s=(e=mS(e,yS))._getSettings(),a=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&Wy("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Vy.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Cd(JSON.stringify({alg:"none",type:"JWT"})),Cd(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new Jy(Xy.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Vy(s)}e._authCredentials=new nv(new ev(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new wS(this.firestore,e,this._query)}}class bS{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _S(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bS(this.firestore,e,this._key)}}class _S extends wS{constructor(e,t,n){super(e,t,zw(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bS(this.firestore,null,new vv(e))}withConverter(e){return new _S(this.firestore,e,this._path)}}function ES(e,t,...n){if(e=Gd(e),hS("collection","path",t),e instanceof yS){const r=mv.fromString(t,...n);return fS(r),new _S(e,null,r)}{if(!(e instanceof bS||e instanceof _S))throw new Jy(Xy.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(mv.fromString(t,...n));return fS(r),new _S(e.firestore,null,r)}}function kS(e,t,...n){if(e=Gd(e),1===arguments.length&&(t=uv.newId()),hS("doc","path",t),e instanceof yS){const r=mv.fromString(t,...n);return dS(r),new bS(e,null,new vv(r))}{if(!(e instanceof bS||e instanceof _S))throw new Jy(Xy.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(mv.fromString(t,...n));return dS(r),new bS(e.firestore,e instanceof _S?e.converter:null,new vv(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new AE(this,"async_queue_retry"),this.Vu=()=>{const e=CE();e&&qy("AsyncQueue","Visibility state changed to "+e.visibilityState),this.t_.jo()},this.mu=e;const t=CE();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=CE();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise((()=>{}));const t=new Zy;return this.gu((()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Pu.push(e),this.pu())))}async pu(){if(0!==this.Pu.length){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(Vx){if(!xv(Vx))throw Vx;qy("AsyncQueue","Operation failed with retryable error: "+Vx)}this.Pu.length>0&&this.t_.Go((()=>this.pu()))}}gu(e){const t=this.mu.then((()=>(this.du=!0,e().catch((e=>{this.Eu=e,this.du=!1;throw Hy("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.du=!1,e))))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const r=hk.createAndSchedule(this,e,t,n,(e=>this.yu(e)));return this.Tu.push(r),r}fu(){this.Eu&&Gy()}verifyOperationInProgress(){}async wu(){let e;do{e=this.mu,await e}while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then((()=>{this.Tu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Tu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.wu()}))}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function xS(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}(e,["next","error","complete"])}class TS extends yS{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new SS,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new SS(e),this._firestoreClient=void 0,await e}}}function IS(e,t){const n="string"==typeof e?e:"(default)",r=ap("object"==typeof e?e:dp(),"firestore").getImmediate({identifier:n});if(!r._initialized){const e=(e=>{const t=Pd(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]})("firestore");e&&vS(r,...e)}return r}function CS(e){if(e._terminated)throw new Jy(Xy.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r;const i=e._freezeSettings(),s=(a=e._databaseId,o=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,u=i,new Kv(a,o,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,uS(u.experimentalLongPollingOptions),u.useFetchStreams));var a,o,l,u;e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new iS(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),e._firestoreClient}class NS{constructor(e){this._byteString=e}static fromBase64String(e){try{return new NS(Fv.fromBase64String(e))}catch(t){throw new Jy(Xy.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new NS(Fv.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Jy(Xy.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yv(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Jy(Xy.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Jy(Xy.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return cv(this._lat,e._lat)||cv(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=/^__.*__$/;class LS{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Ub(e,this.data,this.fieldMask,t,this.fieldTransforms):new jb(e,this.data,t,this.fieldTransforms)}}function MS(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Gy()}}class jS{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new jS(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.Ou(e),r}Nu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Fu({path:n,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return GS(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(0===e.length)throw this.Bu("Document fields must not be empty");if(MS(this.Cu)&&OS.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class US{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||NE(e)}Qu(e,t,n,r=!1){return new jS({Cu:e,methodName:t,qu:n,path:yv.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function FS(e){const t=e._freezeSettings(),n=NE(e._databaseId);return new US(e._databaseId,!!t.ignoreUndefinedProperties,n)}function VS(e,t,n,r,i,s={}){const a=e.Qu(s.merge||s.mergeFields?2:0,t,n,i);qS("Data must be an object, but it was:",a,r);const o=BS(r,a);let l,u;if(s.merge)l=new jv(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=HS(t,r,n);if(!a.contains(i))throw new Jy(Xy.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);QS(e,i)||e.push(i)}l=new jv(e),u=a.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=a.fieldTransforms;return new LS(new hw(o),l,u)}function zS(e,t){if($S(e=Gd(e)))return qS("Unsupported field value:",t,e),BS(e,t);if(e instanceof RS)return function(e,t){if(!MS(t.Cu))throw t.Bu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Bu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xu&&4!==t.Cu)throw t.Bu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=zS(i,t.Lu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Gd(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return mb(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=dv.fromDate(e);return{timestampValue:g_(t.serializer,n)}}if(e instanceof dv){const n=new dv(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:g_(t.serializer,n)}}if(e instanceof PS)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof NS)return{bytesValue:y_(t.serializer,e._byteString)};if(e instanceof bS){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Bu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:b_(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof DS)return n=t,{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map((e=>{if("number"!=typeof e)throw n.Bu("VectorValues must only contain numeric values.");return fb(n.serializer,e)}))}}}}};var n;throw t.Bu(`Unsupported field value: ${pS(e)}`)}(e,t)}function BS(e,t){const n={};return Rv(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Av(e,((e,r)=>{const i=zS(r,t.Mu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function $S(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof dv||e instanceof PS||e instanceof NS||e instanceof bS||e instanceof RS||e instanceof DS)}function qS(e,t,n){if(!$S(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=pS(n);throw"an object"===r?t.Bu(e+" a custom object"):t.Bu(e+" "+r)}var r}function HS(e,t,n){if((t=Gd(t))instanceof AS)return t._internalPath;if("string"==typeof t)return KS(e,t);throw GS("Field path arguments must be of type string or ",e,!1,void 0,n)}const WS=new RegExp("[~\\*/\\[\\]]");function KS(e,t,n){if(t.search(WS)>=0)throw GS(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new AS(...t.split("."))._internalPath}catch(r){throw GS(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function GS(e,t,n,r,i){const s=r&&!r.isEmpty(),a=void 0!==i;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new Jy(Xy.INVALID_ARGUMENT,o+e+l)}function QS(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bS(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new XS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(JS("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class XS extends YS{data(){return super.data()}}function JS(e,t){return"string"==typeof t?KS(e,t):t instanceof AS?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{}class ex extends ZS{}class tx extends ex{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new tx(e,t,n)}_apply(e){const t=this._parse(e);return ax(e._query,t),new wS(e.firestore,e.converter,Ww(e._query,t))}_parse(e){const t=FS(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Jy(Xy.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){sx(a,s);const t=[];for(const n of a)t.push(ix(r,e,n));o={arrayValue:{values:t}}}else o=ix(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||sx(a,s),o=function(e,t,n,r=!1){return zS(n,e.Qu(r?4:3,t))}(n,t,a,"in"===s||"not-in"===s);return bw.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class nx extends ZS{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new nx(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:_w.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)ax(n,i),n=Ww(n,i)}(e._query,t),new wS(e.firestore,e.converter,Ww(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class rx extends ex{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new rx(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Jy(Xy.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Jy(Xy.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new yw(t,n)}(e._query,this._field,this._direction);return new wS(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Vw(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function ix(e,t,n){if("string"==typeof(n=Gd(n))){if(""===n)throw new Jy(Xy.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$w(t)&&-1!==n.indexOf("/"))throw new Jy(Xy.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(mv.fromString(n));if(!vv.isDocumentKey(r))throw new Jy(Xy.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return iw(e,new vv(r))}if(n instanceof bS)return iw(e,n._key);throw new Jy(Xy.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pS(n)}.`)}function sx(e,t){if(!Array.isArray(e)||0===e.length)throw new Jy(Xy.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ax(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Jy(Xy.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Jy(Xy.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class ox{convertValue(e,t="none"){switch(Yv(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Bv(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes($v(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Gy()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Av(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>Bv(e.doubleValue)));return new DS(i)}convertGeoPoint(e){return new PS(Bv(e.latitude),Bv(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Hv(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Wv(e));default:return null}}convertTimestamp(e){const t=zv(e);return new dv(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=mv.fromString(e);Qy(V_(n));const r=new Gv(n.get(1),n.get(3)),i=new vv(n.popFirst(5));return r.isEqual(t)||Hy(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ux{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cx extends YS{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new hx(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(JS("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class hx extends cx{data(e={}){return super.data(e)}}class dx{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ux(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new hx(this._firestore,this._userDataWriter,n.key,n,new ux(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Jy(Xy.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new hx(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ux(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new hx(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ux(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:fx(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function fx(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Gy()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(e){e=mS(e,bS);const t=mS(e.firestore,TS);return function(e,t,n={}){const r=new Zy;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new rS({next:o=>{s.Za(),t.enqueueAndForget((()=>bk(e,a)));const l=o.docs.has(n);!l&&o.fromCache?i.reject(new Jy(Xy.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&o.fromCache&&r&&"server"===r.source?i.reject(new Jy(Xy.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),a=new Tk(zw(n.path),s,{includeMetadataChanges:!0,_a:!0});return wk(e,a)}(await lS(e),e.asyncQueue,t,n,r))),r.promise}(CS(t),e._key).then((n=>wx(t,e,n)))}class mx extends ox{constructor(e){super(),this.firestore=e}convertBytes(e){return new NS(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new bS(this.firestore,null,t)}}function gx(e,t,n){e=mS(e,bS);const r=mS(e.firestore,TS),i=lx(e.converter,t,n);return vx(r,[VS(FS(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Nb.none())])}function yx(e,...t){var n,r,i;e=Gd(e);let s={includeMetadataChanges:!1,source:"default"},a=0;"object"!=typeof t[a]||xS(t[a])||(s=t[a],a++);const o={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(xS(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let l,u,c;if(e instanceof bS)u=mS(e.firestore,TS),c=zw(e._key.path),l={next:n=>{t[a]&&t[a](wx(u,e,n))},error:t[a+1],complete:t[a+2]};else{const n=mS(e,wS);u=mS(n.firestore,TS),c=n._query;const r=new mx(u);l={next:e=>{t[a]&&t[a](new dx(u,r,n,e))},error:t[a+1],complete:t[a+2]},function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Jy(Xy.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query)}return function(e,t,n,r){const i=new rS(r),s=new Tk(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>wk(await lS(e),s))),()=>{i.Za(),e.asyncQueue.enqueueAndForget((async()=>bk(await lS(e),s)))}}(CS(u),c,o,l)}function vx(e,t){return function(e,t){const n=new Zy;return e.asyncQueue.enqueueAndForget((async()=>Uk(await function(e){return oS(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(CS(e),t)}function wx(e,t,n){const r=n.docs.get(t._key),i=new mx(e);return new cx(e,i,t._key,r,new ux(n.hasPendingWrites,n.fromCache),t.converter)}!function(e,t=!0){zy=cp,sp(new Qd("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new TS(new rv(e.getProvider("auth-internal")),new ov(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Jy(Xy.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gv(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),fp(Fy,"4.7.3",e),fp(Fy,"4.7.3","esm2017")}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
fp("firebase","10.14.1","app");const bx=hp({apiKey:"AIzaSyC13BJTwwqpnxbxEpPNffbLPexhLN2BXDA",authDomain:"digitalctemple.firebaseapp.com",projectId:"digitalctemple",storageBucket:"digitalctemple.firebasestorage.app",messagingSenderId:"623594807576",appId:"1:623594807576:web:7feca52c23b9093251fe6d",measurementId:"G-W4XP3YK5QM"}),_x=xy(bx),Ex=IS(bx),kx=()=>{const e=Jh(),[t,n]=V.useState(!0),[r,i]=V.useState(!1),[s,a]=V.useState({name:"",userId:"",email:"",password:"",confirmPassword:""}),[o,l]=V.useState(""),[u,c]=V.useState(!1),[h,d]=V.useState(!1),f=e=>{const{name:t,value:n}=e.target;a((e=>({...e,[t]:n}))),"userId"===t&&d(!1)};return r?Y.jsx("div",{className:"min-h-screen bg-yellow-50 flex items-center justify-center px-4",children:Y.jsx("div",{className:"max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center",children:Y.jsxs("div",{className:"mb-6",children:[Y.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",children:Y.jsx("svg",{className:"w-8 h-8 text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Y.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})})}),Y.jsx("h2",{className:"text-2xl font-serif text-gray-800 mb-2",children:"회원가입 완료!"}),Y.jsx("p",{className:"text-gray-600",children:"환영합니다. 이제 로그인하실 수 있습니다."})]})})}):Y.jsxs("div",{className:"relative min-h-screen",children:[Y.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat",style:{backgroundImage:"url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",filter:"brightness(0.3)"}}),Y.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"}),Y.jsx("div",{className:"relative min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:Y.jsxs("div",{className:"max-w-md w-full",children:[Y.jsxs("div",{className:"text-center mb-8",children:[Y.jsx(wd,{to:"/",className:"text-4xl font-serif text-yellow-300 hover:text-yellow-400 transition duration-300",children:"디지털 성소"}),Y.jsx("h2",{className:"mt-6 text-3xl font-serif text-white",children:t?"로그인":"회원가입"})]}),Y.jsxs("div",{className:"bg-black/50 backdrop-blur-sm py-8 px-6 shadow-2xl rounded-2xl border border-yellow-300/20",children:[Y.jsxs("div",{className:"flex justify-center space-x-4 mb-8",children:[Y.jsx("button",{onClick:()=>n(!0),className:"px-6 py-3 rounded-full transition duration-300 "+(t?"bg-yellow-300 text-black":"bg-transparent text-yellow-300 border-2 border-yellow-300 hover:bg-yellow-300/10"),children:"로그인"}),Y.jsx("button",{onClick:()=>n(!1),className:"px-6 py-3 rounded-full transition duration-300 "+(t?"bg-transparent text-yellow-300 border-2 border-yellow-300 hover:bg-yellow-300/10":"bg-yellow-300 text-black"),children:"회원가입"})]}),Y.jsxs("form",{className:"space-y-6",onSubmit:async r=>{r.preventDefault(),l(""),c(!0);try{if(!(await(async()=>{if(!t){if(!h)return l("아이디 중복 확인이 필요합니다."),!1;if(s.password!==s.confirmPassword)return l("비밀번호가 일치하지 않습니다."),!1;if(s.password.length<6)return l("비밀번호는 6자 이상이어야 합니다."),!1;try{if((await mg(_x,s.email)).length>0)return l("이미 사용 중인 이메일입니다."),!1}catch(e){return console.error("이메일 확인 중 오류:",e),l("이메일 확인 중 오류가 발생했습니다."),!1}}return!0})()))return void c(!1);if(t)await pg(_x,s.email,s.password),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("username",s.userId),e("/");else{const e=await async function(e,t,n){if(op(e.app))return Promise.reject(Dp(e));const r=jm(e),i=$m(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",og),s=await i.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&fg(e),t})),a=await lg._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}(_x,s.email,s.password);await gx(kS(Ex,"users",e.user.uid),{name:s.name,userId:s.userId,email:s.email,createdAt:(new Date).toISOString()}),i(!0),setTimeout((()=>{n(!0),i(!1)}),2e3)}a({name:"",userId:"",email:"",password:"",confirmPassword:""}),d(!1)}catch(o){switch(console.error("인증 에러:",o),o.code){case"auth/email-already-in-use":l("이미 사용 중인 이메일입니다.");break;case"auth/invalid-email":l("유효하지 않은 이메일 형식입니다.");break;case"auth/weak-password":l("비밀번호는 6자 이상이어야 합니다.");break;case"auth/user-not-found":case"auth/wrong-password":l("이메일 또는 비밀번호가 올바르지 않습니다.");break;default:l("인증 중 오류가 발생했습니다.")}}finally{c(!1)}},children:[o&&Y.jsx("div",{className:"bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 rounded-lg",role:"alert",children:Y.jsx("span",{className:"block sm:inline",children:o})}),Y.jsxs("div",{className:"space-y-4",children:[!t&&Y.jsxs(Y.Fragment,{children:[Y.jsxs("div",{children:[Y.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-yellow-300",children:"이름"}),Y.jsx("input",{id:"name",name:"name",type:"text",required:!0,className:"mt-1 block w-full bg-black/50 border border-yellow-300/30 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 focus:border-transparent",placeholder:"이름을 입력하세요",value:s.name,onChange:f})]}),Y.jsxs("div",{children:[Y.jsx("label",{htmlFor:"userId",className:"block text-sm font-medium text-yellow-300",children:"아이디"}),Y.jsxs("div",{className:"mt-1 flex",children:[Y.jsx("input",{id:"userId",name:"userId",type:"text",required:!0,className:"block w-full bg-black/50 border border-yellow-300/30 rounded-l-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 focus:border-transparent",placeholder:"아이디를 입력하세요",value:s.userId,onChange:f}),Y.jsx("button",{type:"button",onClick:async()=>{if(s.userId)try{const e=kS(Ex,"users",s.userId);(await px(e)).exists()?(l("이미 사용 중인 아이디입니다."),d(!1)):(l(""),d(!0))}catch(e){console.error("아이디 중복 확인 중 오류:",e),l("아이디 중복 확인 중 오류가 발생했습니다."),d(!1)}else l("아이디를 입력해주세요.")},className:"inline-flex items-center px-4 py-3 border border-transparent text-sm font-medium rounded-r-lg text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",children:"중복확인"})]}),h&&Y.jsx("p",{className:"mt-2 text-sm text-green-400",children:"사용 가능한 아이디입니다."})]})]}),Y.jsxs("div",{children:[Y.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-yellow-300",children:"이메일"}),Y.jsx("input",{id:"email",name:"email",type:"email",required:!0,className:"mt-1 block w-full bg-black/50 border border-yellow-300/30 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 focus:border-transparent",placeholder:"이메일을 입력하세요",value:s.email,onChange:f})]}),Y.jsxs("div",{children:[Y.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-yellow-300",children:"비밀번호"}),Y.jsx("input",{id:"password",name:"password",type:"password",required:!0,className:"mt-1 block w-full bg-black/50 border border-yellow-300/30 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 focus:border-transparent",placeholder:"비밀번호를 입력하세요",value:s.password,onChange:f})]}),!t&&Y.jsxs("div",{children:[Y.jsx("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-yellow-300",children:"비밀번호 확인"}),Y.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:"password",required:!0,className:"mt-1 block w-full bg-black/50 border border-yellow-300/30 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 focus:border-transparent",placeholder:"비밀번호를 다시 입력하세요",value:s.confirmPassword,onChange:f})]})]}),Y.jsx("div",{children:Y.jsx("button",{type:"submit",disabled:u,className:"w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 transition duration-300",children:u?"처리 중...":t?"로그인":"회원가입"})})]})]})]})})]})};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Sx(e,t,n,r){return new(n||(n=Promise))((function(t,i){function s(e){try{o(r.next(e))}catch(Vx){i(Vx)}}function a(e){try{o(r.throw(e))}catch(Vx){i(Vx)}}function o(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(s,a)}o((r=r.apply(e,[])).next())}))}function xx(e,t){var n,r,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(Vx){s=[6,Vx],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Tx=function(){return Tx=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Tx.apply(this,arguments)},Ix=function(e){return{loading:null==e,value:e}},Cx=function(e){var t=e?e():void 0,n=V.useReducer((function(e,t){switch(t.type){case"error":return Tx(Tx({},e),{error:t.error,loading:!1,value:void 0});case"reset":return Ix(t.defaultValue);case"value":return Tx(Tx({},e),{error:void 0,loading:!1,value:t.value});default:return e}}),Ix(t)),r=n[0],i=n[1],s=V.useCallback((function(){var t=e?e():void 0;i({type:"reset",defaultValue:t})}),[e]),a=V.useCallback((function(e){i({type:"error",error:e})}),[]),o=V.useCallback((function(e){i({type:"value",value:e})}),[]);return V.useMemo((function(){return{error:r.error,loading:r.loading,reset:s,setError:a,setValue:o,value:r.value}}),[r.error,r.loading,s,a,o,r.value])},Nx=function(e,t){var n=Cx((function(){return e.currentUser})),r=n.error,i=n.loading,s=n.setError,a=n.setValue,o=n.value;return V.useEffect((function(){var n=function(e,t,n,r){return Gd(e).onAuthStateChanged(t,n,r)}(e,(function(e){return Sx(void 0,0,void 0,(function(){var n;return xx(this,(function(r){switch(r.label){case 0:return[3,4];case 1:return r.trys.push([1,3,,4]),[4,t.onUserChanged(e)];case 2:return r.sent(),[3,4];case 3:return n=r.sent(),s(n),[3,4];case 4:return a(e),[2]}}))}))}),s);return function(){n()}}),[e]),[o,i,r]};const Ax=0===Array.from(tp.values()).length?hp({apiKey:"AIzaSyDxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXx",authDomain:"your-app.firebaseapp.com",projectId:"your-app",storageBucket:"your-app.appspot.com",messagingSenderId:"your-sender-id",appId:"your-app-id"}):dp(),Rx=xy(Ax),Px=IS(Ax),Dx=(e,t)=>{const[n,r]=V.useState([]),[i,s]=V.useState(!0);V.useEffect((()=>{const e=new Date;e.setDate(e.getDate()-30);const t=yx(function(e,t,...n){let r=[];t instanceof ZS&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof nx)).length,n=e.filter((e=>e instanceof tx)).length;if(t>1||t>0&&n>0)throw new Jy(Xy.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}(ES(Px,"prayers"),function(e,t,n){const r=t,i=JS("where",e);return tx._create(i,r,n)}("createdAt",">=",dv.fromDate(e)),function(e,t="asc"){const n=t,r=JS("orderBy",e);return rx._create(r,n)}("createdAt","desc")),(e=>{const t=e.docs.map((e=>({id:e.id,...e.data(),date:e.data().createdAt.toDate().toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit"}).replace(/\. /g,".").replace(".","")})));r(t),s(!1)}));return()=>t()}),[]);return{prayers:n,loading:i,addPrayer:async n=>{if(e)try{await function(e,t){const n=mS(e.firestore,TS),r=kS(e),i=lx(e.converter,t);return vx(n,[VS(FS(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Nb.exists(!1))]).then((()=>r))}(ES(Px,"prayers"),{content:n,author:t||"익명",userId:e.uid,createdAt:dv.now()})}catch(r){console.error("Error adding prayer:",r)}}}},Ox=()=>Y.jsxs("div",{className:"relative h-screen flex items-end justify-start text-white",children:[Y.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat",style:{backgroundImage:"url('/jesus-hero.jpg')"},children:Y.jsx("div",{className:"absolute inset-0 bg-black/50"})}),Y.jsxs("div",{className:"relative z-10 text-left px-4 mb-16 ml-12 max-w-2xl",children:[Y.jsx("h1",{className:"text-5xl md:text-7xl font-serif mb-8",children:"Digital Temple"}),Y.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 mb-12",children:["당신의 영적 성장을 위한 디지털 성소.",Y.jsx("br",{}),"기도와 말씀으로 하나님과 더 가까워지세요."]}),Y.jsx(wd,{to:"/auth",className:"inline-block px-8 py-4 bg-yellow-300 text-black rounded-full text-lg font-medium hover:bg-yellow-400 transition duration-300",children:"시작하기"})]})]}),Lx="YOUR_API_KEY",Mx=["설교","목사 설교","크리스천 설교"],jx=()=>{const[e]=Nx(Rx),{userName:t}=(e=>{const[t,n]=V.useState(""),[r,i]=V.useState(!0);return V.useEffect((()=>{(async()=>{if(!e)return n(""),void i(!1);try{const t=await px(kS(Px,"users",e.uid));t.exists()?n(t.data().name||""):(await gx(kS(Px,"users",e.uid),{email:e.email,name:e.displayName||"",createdAt:new Date}),n(e.displayName||""))}catch(t){console.error("Error fetching user profile:",t)}finally{i(!1)}})()}),[e]),{userName:t,loading:r,updateUserName:async t=>{if(e)try{await gx(kS(Px,"users",e.uid),{name:t},{merge:!0}),n(t)}catch(r){console.error("Error updating user name:",r)}}}})(e||null),{prayers:n,loading:r,addPrayer:i}=Dx(e||null,t),[s,a]=V.useState(""),[o,l]=V.useState(1),[u,c]=V.useState(null),[h,d]=V.useState([]),f=(new Date).toISOString().slice(0,10),p=Math.ceil(n.length/5),m=5*(o-1),g=m+5,y=n.slice(m,g),v=e=>{l(e),window.scrollTo({top:0,behavior:"smooth"})};V.useEffect((()=>{(async()=>{try{const e=await fetch("/verses.json"),t=(await e.json())[f];c(t?{verse:t,ref:t.split(" - ")[0],date:f}:null)}catch(Vx){c(null)}})()}),[f]),V.useEffect((()=>{(async()=>{try{const e=Mx.map((async e=>{const t=await fetch(`https://www.googleapis.com/youtube/v3/search?key=${Lx}&q=${encodeURIComponent(e)}&part=snippet,id&order=viewCount&maxResults=1&type=video&relevanceLanguage=ko&regionCode=KR`),n=await t.json();if(n.items&&n.items.length>0){const e=n.items[0],t=await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${Lx}&id=${e.id.videoId}&part=statistics,contentDetails`),r=await t.json();return{videoId:e.id.videoId,title:e.snippet.title,channelTitle:e.snippet.channelTitle,viewCount:r.items[0].statistics.viewCount,publishedAt:e.snippet.publishedAt}}return null})),t=await Promise.all(e);d(t.filter((e=>null!==e)))}catch(e){console.error("설교 영상을 가져오는데 실패했습니다:",e)}})()}),[]);const w=e=>{const t=new Date(e),n=new Date,r=Math.abs(n.getTime()-t.getTime()),i=Math.floor(r/864e5);return 0===i?"오늘":1===i?"어제":i<7?`${i}일 전`:i<30?`${Math.floor(i/7)}주 전`:`${Math.floor(i/30)}개월 전`},b=e=>{const t=parseInt(e);return t>=1e4?`${(t/1e4).toFixed(1)}만회`:t>=1e3?`${(t/1e3).toFixed(1)}천회`:`${t}회`};return Y.jsxs("div",{className:"text-gray-800 font-sans",children:[Y.jsx("nav",{className:"fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-50",children:Y.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Y.jsxs("div",{className:"flex justify-between items-center h-16",children:[Y.jsx(wd,{to:"/",className:"text-yellow-300 font-serif text-xl",children:"Digital Temple"}),Y.jsx("div",{className:"flex items-center space-x-4",children:e?Y.jsxs(Y.Fragment,{children:[Y.jsxs("span",{className:"text-gray-300",children:["Welcome, ",t,"님"]}),Y.jsx(wd,{to:"/mypage",className:"text-gray-300 hover:text-yellow-300 transition duration-300",children:"마이성소"}),Y.jsx("button",{onClick:()=>{Rx.signOut()},className:"text-gray-300 hover:text-yellow-300 transition duration-300",children:"로그아웃"})]}):Y.jsx(wd,{to:"/auth",className:"text-gray-300 hover:text-yellow-300 transition duration-300",children:"로그인"})})]})})}),Y.jsx(Ox,{}),Y.jsxs("section",{className:"relative py-32 px-4 text-center bg-black text-white",children:[Y.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20",style:{backgroundImage:"url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}),Y.jsxs("div",{className:"relative max-w-4xl mx-auto",children:[Y.jsx("h2",{className:"text-5xl font-serif mb-8",children:"🙏 일상의 기도"}),Y.jsxs("p",{className:"text-2xl text-gray-300 mb-8 leading-relaxed",children:["매일의 기도로 영적 성장을 이어가세요.",Y.jsx("br",{}),"당신의 기도가 하늘에 닿는 순간을 경험하세요."]}),Y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mt-16",children:[Y.jsx("div",{className:"bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-64 flex items-center justify-center",children:Y.jsxs("div",{className:"flex flex-col items-center justify-center w-full h-full",children:[Y.jsx("h3",{className:"text-xl font-serif mb-4",children:"아침 기도"}),Y.jsx("p",{className:"text-sm text-gray-300",children:"새로운 하루를 하나님과 함께 시작하세요."})]})}),Y.jsx("div",{className:"bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-64 flex items-center justify-center",children:Y.jsxs("div",{className:"flex flex-col items-center justify-center w-full h-full",children:[Y.jsx("h3",{className:"text-xl font-serif mb-4",children:"저녁 기도"}),Y.jsx("p",{className:"text-sm text-gray-300",children:"하루를 마무리하며 감사와 회개를 나누세요."})]})}),Y.jsx("div",{className:"bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-64 flex items-center justify-center",children:Y.jsxs("div",{className:"flex flex-col items-center justify-center w-full h-full",children:[Y.jsx("h3",{className:"text-xl font-serif mb-4",children:"중보 기도"}),Y.jsx("p",{className:"text-sm text-gray-300",children:"이웃과 세상을 위한 기도로 섬기세요."})]})})]})]})]}),Y.jsxs("section",{className:"relative py-32 px-4 text-center bg-black text-white",children:[Y.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10",style:{backgroundImage:"url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}),Y.jsxs("div",{className:"relative max-w-7xl mx-auto",children:[Y.jsx("h2",{className:"text-6xl font-serif mb-8",children:"📖 말씀 듣기"}),Y.jsxs("p",{className:"text-2xl text-gray-300 mb-16 leading-relaxed",children:["오늘의 추천 설교로 영혼을 채우세요.",Y.jsx("br",{}),"하나님의 말씀이 당신의 삶을 변화시킬 것입니다."]}),Y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:h.map(((e,t)=>Y.jsxs("div",{className:"bg-black/50 p-8 rounded-lg border border-yellow-300/20 hover:border-yellow-300/40 transition-all duration-300",children:[Y.jsx("div",{className:"aspect-video mb-6",children:Y.jsx("iframe",{className:"w-full h-full rounded-lg",src:`https://www.youtube.com/embed/${e.videoId}`,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Y.jsxs("div",{className:"text-left",children:[Y.jsx("p",{className:"text-lg text-yellow-300 mb-2 font-medium",children:e.channelTitle}),Y.jsx("p",{className:"text-gray-300 mb-4 line-clamp-2",children:e.title}),Y.jsxs("div",{className:"flex items-center text-sm text-gray-400",children:[Y.jsxs("span",{className:"mr-4",children:["조회수 ",b(e.viewCount)]}),Y.jsx("span",{children:w(e.publishedAt)})]})]})]},t)))}),Y.jsx("div",{className:"mt-16",children:Y.jsx("button",{className:"px-8 py-4 bg-yellow-300 text-black rounded-full font-medium hover:bg-yellow-400 transition duration-300 text-lg",children:"더 많은 설교 보기"})})]})]}),Y.jsxs("section",{className:"relative py-32 px-4 text-center bg-gray-900 text-white",children:[Y.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20",style:{backgroundImage:"url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}),Y.jsxs("div",{className:"relative max-w-4xl mx-auto",children:[Y.jsx("h2",{className:"text-5xl font-serif mb-8",children:"📖 성경 말씀"}),Y.jsxs("p",{className:"text-2xl text-gray-300 mb-8 leading-relaxed",children:["매일의 말씀으로 영혼을 채우세요.",Y.jsx("br",{}),"하나님의 말씀이 당신의 삶을 변화시킬 것입니다."]}),Y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mt-16",children:[Y.jsxs("div",{className:"bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-64 flex flex-col items-center justify-center text-center",children:[Y.jsxs("h3",{className:"text-2xl font-serif mb-4",children:["오늘의 말씀 ",Y.jsxs("span",{className:"text-base text-gray-400 ml-2",children:["(",f,")"]})]}),u?Y.jsxs(Y.Fragment,{children:[Y.jsxs("p",{className:"text-gray-300 text-lg mb-4",children:['"',u.verse,'"']}),Y.jsxs("p",{className:"text-yellow-300",children:["- ",u.ref]})]}):Y.jsx("p",{className:"text-gray-300",children:"말씀을 불러오는 중..."})]}),Y.jsxs("div",{className:"bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-64 flex flex-col items-center justify-center text-center",children:[Y.jsx("h3",{className:"text-2xl font-serif mb-4",children:"말씀 묵상"}),Y.jsx("p",{className:"text-gray-300 text-lg",children:"하나님의 말씀을 깊이 묵상하며 당신의 삶에 적용해보세요."}),Y.jsx("button",{className:"mt-6 px-6 py-3 bg-yellow-300 text-black rounded-full hover:bg-yellow-400 transition duration-300",children:"묵상하기"})]})]})]})]}),Y.jsxs("section",{className:"relative py-32 px-4 text-center bg-black text-white",children:[Y.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20",style:{backgroundImage:"url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}),Y.jsxs("div",{className:"relative max-w-4xl mx-auto",children:[Y.jsx("h2",{className:"text-5xl font-serif mb-8",children:"🤝 공동체"}),Y.jsxs("p",{className:"text-2xl text-gray-300 mb-8 leading-relaxed",children:["함께 나누는 기도의 기쁨.",Y.jsx("br",{}),"서로를 격려하고 위로하는 믿음의 공동체가 되세요."]}),Y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mt-16",children:[Y.jsxs("div",{className:"bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-48 flex flex-col items-center justify-center text-center",children:[Y.jsx("h3",{className:"text-xl font-serif mb-4",children:"기도 모임"}),Y.jsx("p",{className:"text-base text-gray-300",children:"함께 모여 기도하며 영적 성장을 나누세요."})]}),Y.jsxs("div",{className:"bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-48 flex flex-col items-center justify-center text-center",children:[Y.jsx("h3",{className:"text-xl font-serif mb-4",children:"말씀 나눔"}),Y.jsx("p",{className:"text-base text-gray-300",children:"성경 말씀을 함께 나누며 서로를 격려하세요."})]}),Y.jsxs("div",{className:"bg-black/50 p-8 rounded-lg border border-yellow-300/20 h-48 flex flex-col items-center justify-center text-center",children:[Y.jsx("h3",{className:"text-xl font-serif mb-4",children:"봉사 활동"}),Y.jsx("p",{className:"text-base text-gray-300",children:"이웃을 섬기며 하나님의 사랑을 실천하세요."})]})]})]})]}),Y.jsxs("section",{className:"relative py-32 px-4 text-center bg-gray-900 text-white",children:[Y.jsx("div",{className:"absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20",style:{backgroundImage:"url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')"}}),Y.jsxs("div",{className:"relative max-w-4xl mx-auto",children:[Y.jsx("h3",{className:"text-4xl font-serif mb-8",children:"기도문 게시판"}),Y.jsxs("p",{className:"text-xl text-gray-300 mb-8",children:["당신의 마음을 담아 기도를 올려보세요.",Y.jsx("br",{}),"하나님께서 당신의 기도를 들어주실 것입니다."]}),Y.jsxs("div",{className:"bg-black/50 p-8 rounded-lg border border-yellow-300/20 mb-12",children:[Y.jsx("textarea",{value:s,onChange:e=>a(e.target.value),placeholder:"당신의 기도를 여기에 적어주세요...",className:"w-full p-6 bg-black/50 border border-yellow-300/30 rounded-lg resize-none h-32 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 focus:border-transparent"}),Y.jsx("div",{className:"mt-4 flex justify-end",children:Y.jsx("button",{onClick:async()=>{s.trim()&&(await i(s),a(""))},className:"px-8 py-3 bg-yellow-300 text-black rounded-full font-medium hover:bg-yellow-400 transition duration-300",children:"기도 올리기"})})]}),Y.jsx("div",{className:"space-y-6",children:r?Y.jsx("p",{className:"text-gray-300",children:"기도문을 불러오는 중..."}):Y.jsxs(Y.Fragment,{children:[y.map((e=>Y.jsxs("div",{className:"bg-black/50 p-6 rounded-lg border border-yellow-300/20 text-center",children:[Y.jsxs("div",{className:"flex justify-between items-center mb-4",children:[Y.jsx("h4",{className:"text-lg font-serif text-yellow-300",children:e.author}),Y.jsx("span",{className:"text-sm text-gray-400",children:e.date})]}),Y.jsx("p",{className:"text-gray-300",children:e.content})]},e.id))),p>1&&Y.jsxs("div",{className:"flex justify-center items-center space-x-2 mt-8",children:[Y.jsx("button",{onClick:()=>v(o-1),disabled:1===o,className:"px-4 py-2 bg-yellow-300/20 text-yellow-300 rounded-full font-medium hover:bg-yellow-300/30 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed",children:"이전"}),Array.from({length:p},((e,t)=>t+1)).map((e=>Y.jsx("button",{onClick:()=>v(e),className:"px-4 py-2 rounded-full font-medium transition duration-300 "+(o===e?"bg-yellow-300 text-black":"bg-yellow-300/20 text-yellow-300 hover:bg-yellow-300/30"),children:e},e))),Y.jsx("button",{onClick:()=>v(o+1),disabled:o===p,className:"px-4 py-2 bg-yellow-300/20 text-yellow-300 rounded-full font-medium hover:bg-yellow-300/30 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed",children:"다음"})]})]})})]})]}),Y.jsx("footer",{className:"bg-black text-gray-400 py-16",children:Y.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Y.jsxs("div",{className:"text-center",children:[Y.jsx("h3",{className:"text-2xl font-serif text-yellow-300 mb-8",children:"Digital Temple"}),Y.jsx("p",{className:"text-lg mb-8",children:"당신의 영적 성장을 위한 공간"}),Y.jsxs("div",{className:"flex justify-center gap-8 mb-8",children:[Y.jsx("a",{href:"#",className:"hover:text-yellow-300 transition duration-300",children:"이용약관"}),Y.jsx("a",{href:"#",className:"hover:text-yellow-300 transition duration-300",children:"개인정보처리방침"}),Y.jsx("a",{href:"#",className:"hover:text-yellow-300 transition duration-300",children:"문의하기"})]}),Y.jsx("p",{className:"text-sm",children:"© 2024 Digital Temple. All rights reserved."})]})})})]})},Ux=()=>{const e=Jh(),[t,n]=V.useState(""),[r,i]=V.useState([{id:1,content:"오늘 하루도 감사합니다. 가족들의 건강과 평안을 위해 기도합니다.",date:"2024.03.15"},{id:2,content:"이웃을 향한 하나님의 사랑이 더욱 커지기를 기도합니다.",date:"2024.03.14"}]);return V.useEffect((()=>{const t="true"===localStorage.getItem("isLoggedIn"),r=localStorage.getItem("username");t?n(r||""):e("/auth")}),[e]),Y.jsxs("div",{className:"min-h-screen bg-yellow-50",children:[Y.jsx("nav",{className:"bg-black/80 backdrop-blur-sm",children:Y.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Y.jsxs("div",{className:"flex justify-between items-center h-16",children:[Y.jsx(wd,{to:"/",className:"text-yellow-300 font-serif text-xl",children:"Digital Temple"}),Y.jsxs("div",{className:"flex items-center space-x-4",children:[Y.jsxs("span",{className:"text-gray-300",children:[t,"님"]}),Y.jsx(wd,{to:"/",className:"text-gray-300 hover:text-yellow-300 transition duration-300",children:"홈으로"})]})]})})}),Y.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-12",children:[Y.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8 mb-8",children:[Y.jsx("h2",{className:"text-3xl font-serif text-gray-800 mb-6",children:"마이 성소"}),Y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[Y.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg text-center",children:[Y.jsx("h3",{className:"text-xl font-serif text-gray-800 mb-2",children:"나의 기도"}),Y.jsx("p",{className:"text-3xl font-bold text-yellow-600",children:r.length})]}),Y.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg text-center",children:[Y.jsx("h3",{className:"text-xl font-serif text-gray-800 mb-2",children:"묵상한 말씀"}),Y.jsx("p",{className:"text-3xl font-bold text-yellow-600",children:"12"})]}),Y.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg text-center",children:[Y.jsx("h3",{className:"text-xl font-serif text-gray-800 mb-2",children:"참여한 모임"}),Y.jsx("p",{className:"text-3xl font-bold text-yellow-600",children:"3"})]})]})]}),Y.jsxs("div",{className:"bg-white rounded-2xl shadow-xl p-8",children:[Y.jsx("h3",{className:"text-2xl font-serif text-gray-800 mb-6",children:"나의 기도문"}),Y.jsx("div",{className:"space-y-6",children:r.map((e=>Y.jsxs("div",{className:"bg-yellow-50 p-6 rounded-lg",children:[Y.jsx("div",{className:"flex justify-between items-center mb-4",children:Y.jsx("span",{className:"text-sm text-gray-500",children:e.date})}),Y.jsx("p",{className:"text-gray-700",children:e.content})]},e.id)))})]})]})]})},Fx=()=>Y.jsx(gd,{children:Y.jsxs(hd,{children:[Y.jsx(ud,{path:"/",element:Y.jsx(jx,{})}),Y.jsx(ud,{path:"/auth",element:Y.jsx(kx,{})}),Y.jsx(ud,{path:"/mypage",element:Y.jsx(Ux,{})})]})});X.createRoot(document.getElementById("root")).render(Y.jsx(z.StrictMode,{children:Y.jsx(Fx,{})}));
//# sourceMappingURL=index-DFpjHBoV.js.map
