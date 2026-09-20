(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var dm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hm={exports:{}},Al={},pm={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),m_=Symbol.for("react.portal"),g_=Symbol.for("react.fragment"),__=Symbol.for("react.strict_mode"),v_=Symbol.for("react.profiler"),x_=Symbol.for("react.provider"),y_=Symbol.for("react.context"),S_=Symbol.for("react.forward_ref"),M_=Symbol.for("react.suspense"),E_=Symbol.for("react.memo"),w_=Symbol.for("react.lazy"),jf=Symbol.iterator;function T_(t){return t===null||typeof t!="object"?null:(t=jf&&t[jf]||t["@@iterator"],typeof t=="function"?t:null)}var mm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gm=Object.assign,_m={};function Is(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||mm}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vm(){}vm.prototype=Is.prototype;function Rd(t,e,n){this.props=t,this.context=e,this.refs=_m,this.updater=n||mm}var Pd=Rd.prototype=new vm;Pd.constructor=Rd;gm(Pd,Is.prototype);Pd.isPureReactComponent=!0;var Xf=Array.isArray,xm=Object.prototype.hasOwnProperty,Ld={current:null},ym={key:!0,ref:!0,__self:!0,__source:!0};function Sm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)xm.call(e,i)&&!ym.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),l=0;l<o;l++)c[l]=arguments[l+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:zo,type:t,key:s,ref:a,props:r,_owner:Ld.current}}function A_(t,e){return{$$typeof:zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Dd(t){return typeof t=="object"&&t!==null&&t.$$typeof===zo}function C_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yf=/\/+/g;function Yl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?C_(""+t.key):e.toString(36)}function Fa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case zo:case m_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Yl(a,0):i,Xf(r)?(n="",t!=null&&(n=t.replace(Yf,"$&/")+"/"),Fa(r,e,n,"",function(l){return l})):r!=null&&(Dd(r)&&(r=A_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Yf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Xf(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+Yl(s,o);a+=Fa(s,e,n,c,r)}else if(c=T_(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+Yl(s,o++),a+=Fa(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ko(t,e,n){if(t==null)return t;var i=[],r=0;return Fa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function b_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $t={current:null},ka={transition:null},R_={ReactCurrentDispatcher:$t,ReactCurrentBatchConfig:ka,ReactCurrentOwner:Ld};function Mm(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:Ko,forEach:function(t,e,n){Ko(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ko(t,function(){e++}),e},toArray:function(t){return Ko(t,function(e){return e})||[]},only:function(t){if(!Dd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Is;je.Fragment=g_;je.Profiler=v_;je.PureComponent=Rd;je.StrictMode=__;je.Suspense=M_;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R_;je.act=Mm;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=gm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Ld.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)xm.call(e,c)&&!ym.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var l=0;l<c;l++)o[l]=arguments[l+2];i.children=o}return{$$typeof:zo,type:t.type,key:r,ref:s,props:i,_owner:a}};je.createContext=function(t){return t={$$typeof:y_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:x_,_context:t},t.Consumer=t};je.createElement=Sm;je.createFactory=function(t){var e=Sm.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:S_,render:t}};je.isValidElement=Dd;je.lazy=function(t){return{$$typeof:w_,_payload:{_status:-1,_result:t},_init:b_}};je.memo=function(t,e){return{$$typeof:E_,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=ka.transition;ka.transition={};try{t()}finally{ka.transition=e}};je.unstable_act=Mm;je.useCallback=function(t,e){return $t.current.useCallback(t,e)};je.useContext=function(t){return $t.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return $t.current.useDeferredValue(t)};je.useEffect=function(t,e){return $t.current.useEffect(t,e)};je.useId=function(){return $t.current.useId()};je.useImperativeHandle=function(t,e,n){return $t.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return $t.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return $t.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return $t.current.useMemo(t,e)};je.useReducer=function(t,e,n){return $t.current.useReducer(t,e,n)};je.useRef=function(t){return $t.current.useRef(t)};je.useState=function(t){return $t.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return $t.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return $t.current.useTransition()};je.version="18.3.1";pm.exports=je;var pt=pm.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_=pt,L_=Symbol.for("react.element"),D_=Symbol.for("react.fragment"),N_=Object.prototype.hasOwnProperty,I_=P_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U_={key:!0,ref:!0,__self:!0,__source:!0};function Em(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)N_.call(e,i)&&!U_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:L_,type:t,key:s,ref:a,props:r,_owner:I_.current}}Al.Fragment=D_;Al.jsx=Em;Al.jsxs=Em;hm.exports=Al;var N=hm.exports,wm={exports:{}},hn={},Tm={exports:{}},Am={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,V){var H=U.length;U.push(V);e:for(;0<H;){var ee=H-1>>>1,ie=U[ee];if(0<r(ie,V))U[ee]=V,U[H]=ie,H=ee;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var V=U[0],H=U.pop();if(H!==V){U[0]=H;e:for(var ee=0,ie=U.length,Ce=ie>>>1;ee<Ce;){var L=2*(ee+1)-1,se=U[L],q=L+1,Z=U[q];if(0>r(se,H))q<ie&&0>r(Z,se)?(U[ee]=Z,U[q]=H,ee=q):(U[ee]=se,U[L]=H,ee=L);else if(q<ie&&0>r(Z,H))U[ee]=Z,U[q]=H,ee=q;else break e}}return V}function r(U,V){var H=U.sortIndex-V.sortIndex;return H!==0?H:U.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(U){for(var V=n(l);V!==null;){if(V.callback===null)i(l);else if(V.startTime<=U)i(l),V.sortIndex=V.expirationTime,e(c,V);else break;V=n(l)}}function y(U){if(v=!1,x(U),!m)if(n(c)!==null)m=!0,G(R);else{var V=n(l);V!==null&&Q(y,V.startTime-U)}}function R(U,V){m=!1,v&&(v=!1,h(b),b=-1),p=!0;var H=f;try{for(x(V),d=n(c);d!==null&&(!(d.expirationTime>V)||U&&!C());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,f=d.priorityLevel;var ie=ee(d.expirationTime<=V);V=t.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(c)&&i(c),x(V)}else i(c);d=n(c)}if(d!==null)var Ce=!0;else{var L=n(l);L!==null&&Q(y,L.startTime-V),Ce=!1}return Ce}finally{d=null,f=H,p=!1}}var T=!1,A=null,b=-1,E=5,S=-1;function C(){return!(t.unstable_now()-S<E)}function D(){if(A!==null){var U=t.unstable_now();S=U;var V=!0;try{V=A(!0,U)}finally{V?O():(T=!1,A=null)}}else T=!1}var O;if(typeof _=="function")O=function(){_(D)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,X=k.port2;k.port1.onmessage=D,O=function(){X.postMessage(null)}}else O=function(){g(D,0)};function G(U){A=U,T||(T=!0,O())}function Q(U,V){b=g(function(){U(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,G(R))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var H=f;f=V;try{return U()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,V){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var H=f;f=U;try{return V()}finally{f=H}},t.unstable_scheduleCallback=function(U,V,H){var ee=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ee+H:ee):H=ee,U){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=H+ie,U={id:u++,callback:V,priorityLevel:U,startTime:H,expirationTime:ie,sortIndex:-1},H>ee?(U.sortIndex=H,e(l,U),n(c)===null&&U===n(l)&&(v?(h(b),b=-1):v=!0,Q(y,H-ee))):(U.sortIndex=ie,e(c,U),m||p||(m=!0,G(R))),U},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(U){var V=f;return function(){var H=f;f=V;try{return U.apply(this,arguments)}finally{f=H}}}})(Am);Tm.exports=Am;var O_=Tm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_=pt,fn=O_;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cm=new Set,xo={};function Rr(t,e){Ss(t,e),Ss(t+"Capture",e)}function Ss(t,e){for(xo[t]=e,t=0;t<e.length;t++)Cm.add(e[t])}var hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=Object.prototype.hasOwnProperty,k_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$f={},qf={};function z_(t){return Kc.call(qf,t)?!0:Kc.call($f,t)?!1:k_.test(t)?qf[t]=!0:($f[t]=!0,!1)}function B_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function H_(t,e,n,i){if(e===null||typeof e>"u"||B_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nd=/[\-:]([a-z])/g;function Id(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nd,Id);It[e]=new qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nd,Id);It[e]=new qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nd,Id);It[e]=new qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ud(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(H_(e,n,r,i)&&(n=null),i||r===null?z_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=F_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Zo=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),Qr=Symbol.for("react.fragment"),Od=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),bm=Symbol.for("react.provider"),Rm=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Jc=Symbol.for("react.suspense_list"),kd=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),Pm=Symbol.for("react.offscreen"),Kf=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=Kf&&t[Kf]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,$l;function eo(t){if($l===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$l=e&&e[1]||""}return`
`+$l+t}var ql=!1;function Kl(t,e){if(!t||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var i=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){i=l}t.call(e.prototype)}else{try{throw Error()}catch(l){i=l}t()}}catch(l){if(l&&i&&typeof l.stack=="string"){for(var r=l.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?eo(t):""}function V_(t){switch(t.tag){case 5:return eo(t.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return t=Kl(t.type,!1),t;case 11:return t=Kl(t.type.render,!1),t;case 1:return t=Kl(t.type,!0),t;default:return""}}function eu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qr:return"Fragment";case Zr:return"Portal";case Zc:return"Profiler";case Od:return"StrictMode";case Qc:return"Suspense";case Jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Rm:return(t.displayName||"Context")+".Consumer";case bm:return(t._context.displayName||"Context")+".Provider";case Fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kd:return e=t.displayName||null,e!==null?e:eu(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return eu(t(e))}catch{}}return null}function G_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return eu(e);case 8:return e===Od?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function W_(t){var e=Lm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Qo(t){t._valueTracker||(t._valueTracker=W_(t))}function Dm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Lm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function tu(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Yi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Nm(t,e){e=e.checked,e!=null&&Ud(t,"checked",e,!1)}function nu(t,e){Nm(t,e);var n=Yi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?iu(t,e.type,n):e.hasOwnProperty("defaultValue")&&iu(t,e.type,Yi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function iu(t,e,n){(e!=="number"||tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var to=Array.isArray;function ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Yi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(to(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yi(n)}}function Im(t,e){var n=Yi(e.value),i=Yi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function eh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Um(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function su(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Um(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jo,Om=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jo=Jo||document.createElement("div"),Jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},j_=["Webkit","ms","Moz","O"];Object.keys(ao).forEach(function(t){j_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ao[e]=ao[t]})});function Fm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ao.hasOwnProperty(t)&&ao[t]?(""+e).trim():e+"px"}function km(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Fm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var X_=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ou(t,e){if(e){if(X_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function au(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lu=null;function zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cu=null,fs=null,hs=null;function th(t){if(t=Vo(t)){if(typeof cu!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Ll(e),cu(t.stateNode,t.type,e))}}function zm(t){fs?hs?hs.push(t):hs=[t]:fs=t}function Bm(){if(fs){var t=fs,e=hs;if(hs=fs=null,th(t),e)for(t=0;t<e.length;t++)th(e[t])}}function Hm(t,e){return t(e)}function Vm(){}var Zl=!1;function Gm(t,e,n){if(Zl)return t(e,n);Zl=!0;try{return Hm(t,e,n)}finally{Zl=!1,(fs!==null||hs!==null)&&(Vm(),Bm())}}function So(t,e){var n=t.stateNode;if(n===null)return null;var i=Ll(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var uu=!1;if(hi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{uu=!1}function Y_(t,e,n,i,r,s,a,o,c){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(u){this.onError(u)}}var lo=!1,nl=null,il=!1,du=null,$_={onError:function(t){lo=!0,nl=t}};function q_(t,e,n,i,r,s,a,o,c){lo=!1,nl=null,Y_.apply($_,arguments)}function K_(t,e,n,i,r,s,a,o,c){if(q_.apply(this,arguments),lo){if(lo){var l=nl;lo=!1,nl=null}else throw Error(oe(198));il||(il=!0,du=l)}}function Pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nh(t){if(Pr(t)!==t)throw Error(oe(188))}function Z_(t){var e=t.alternate;if(!e){if(e=Pr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return nh(r),t;if(s===i)return nh(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function jm(t){return t=Z_(t),t!==null?Xm(t):null}function Xm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xm(t);if(e!==null)return e;t=t.sibling}return null}var Ym=fn.unstable_scheduleCallback,ih=fn.unstable_cancelCallback,Q_=fn.unstable_shouldYield,J_=fn.unstable_requestPaint,xt=fn.unstable_now,ev=fn.unstable_getCurrentPriorityLevel,Bd=fn.unstable_ImmediatePriority,$m=fn.unstable_UserBlockingPriority,rl=fn.unstable_NormalPriority,tv=fn.unstable_LowPriority,qm=fn.unstable_IdlePriority,Cl=null,$n=null;function nv(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:sv,iv=Math.log,rv=Math.LN2;function sv(t){return t>>>=0,t===0?32:31-(iv(t)/rv|0)|0}var ea=64,ta=4194304;function no(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=no(o):(s&=a,s!==0&&(i=no(s)))}else a=n&~r,a!==0?i=no(a):s!==0&&(i=no(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function ov(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function av(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-On(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=ov(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function fu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Km(){var t=ea;return ea<<=1,!(ea&4194240)&&(ea=64),t}function Ql(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function lv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Hd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function Zm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qm,Vd,Jm,eg,tg,hu=!1,na=[],Fi=null,ki=null,zi=null,Mo=new Map,Eo=new Map,Di=[],cv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rh(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":zi=null;break;case"pointerover":case"pointerout":Mo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(e.pointerId)}}function Ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Vo(e),e!==null&&Vd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function uv(t,e,n,i,r){switch(e){case"focusin":return Fi=Ws(Fi,t,e,n,i,r),!0;case"dragenter":return ki=Ws(ki,t,e,n,i,r),!0;case"mouseover":return zi=Ws(zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Mo.set(s,Ws(Mo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Eo.set(s,Ws(Eo.get(s)||null,t,e,n,i,r)),!0}return!1}function ng(t){var e=hr(t.target);if(e!==null){var n=Pr(e);if(n!==null){if(e=n.tag,e===13){if(e=Wm(n),e!==null){t.blockedOn=e,tg(t.priority,function(){Jm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function za(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);lu=i,n.target.dispatchEvent(i),lu=null}else return e=Vo(n),e!==null&&Vd(e),t.blockedOn=n,!1;e.shift()}return!0}function sh(t,e,n){za(t)&&n.delete(e)}function dv(){hu=!1,Fi!==null&&za(Fi)&&(Fi=null),ki!==null&&za(ki)&&(ki=null),zi!==null&&za(zi)&&(zi=null),Mo.forEach(sh),Eo.forEach(sh)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,hu||(hu=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,dv)))}function wo(t){function e(r){return js(r,t)}if(0<na.length){js(na[0],t);for(var n=1;n<na.length;n++){var i=na[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&js(Fi,t),ki!==null&&js(ki,t),zi!==null&&js(zi,t),Mo.forEach(e),Eo.forEach(e),n=0;n<Di.length;n++)i=Di[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Di.length&&(n=Di[0],n.blockedOn===null);)ng(n),n.blockedOn===null&&Di.shift()}var ps=xi.ReactCurrentBatchConfig,ol=!0;function fv(t,e,n,i){var r=et,s=ps.transition;ps.transition=null;try{et=1,Gd(t,e,n,i)}finally{et=r,ps.transition=s}}function hv(t,e,n,i){var r=et,s=ps.transition;ps.transition=null;try{et=4,Gd(t,e,n,i)}finally{et=r,ps.transition=s}}function Gd(t,e,n,i){if(ol){var r=pu(t,e,n,i);if(r===null)lc(t,e,i,al,n),rh(t,i);else if(uv(r,t,e,n,i))i.stopPropagation();else if(rh(t,i),e&4&&-1<cv.indexOf(t)){for(;r!==null;){var s=Vo(r);if(s!==null&&Qm(s),s=pu(t,e,n,i),s===null&&lc(t,e,i,al,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else lc(t,e,i,null,n)}}var al=null;function pu(t,e,n,i){if(al=null,t=zd(i),t=hr(t),t!==null)if(e=Pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return al=t,null}function ig(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ev()){case Bd:return 1;case $m:return 4;case rl:case tv:return 16;case qm:return 536870912;default:return 16}default:return 16}}var Ui=null,Wd=null,Ba=null;function rg(){if(Ba)return Ba;var t,e=Wd,n=e.length,i,r="value"in Ui?Ui.value:Ui.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Ba=r.slice(t,1<i?1-i:void 0)}function Ha(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ia(){return!0}function oh(){return!1}function pn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ia:oh,this.isPropagationStopped=oh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jd=pn(Us),Ho=gt({},Us,{view:0,detail:0}),pv=pn(Ho),Jl,ec,Xs,bl=gt({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Jl=t.screenX-Xs.screenX,ec=t.screenY-Xs.screenY):ec=Jl=0,Xs=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),ah=pn(bl),mv=gt({},bl,{dataTransfer:0}),gv=pn(mv),_v=gt({},Ho,{relatedTarget:0}),tc=pn(_v),vv=gt({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=pn(vv),yv=gt({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sv=pn(yv),Mv=gt({},Us,{data:0}),lh=pn(Mv),Ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Av(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Tv[t])?!!e[t]:!1}function Xd(){return Av}var Cv=gt({},Ho,{key:function(t){if(t.key){var e=Ev[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ha(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xd,charCode:function(t){return t.type==="keypress"?Ha(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ha(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bv=pn(Cv),Rv=gt({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ch=pn(Rv),Pv=gt({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xd}),Lv=pn(Pv),Dv=gt({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nv=pn(Dv),Iv=gt({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Uv=pn(Iv),Ov=[9,13,27,32],Yd=hi&&"CompositionEvent"in window,co=null;hi&&"documentMode"in document&&(co=document.documentMode);var Fv=hi&&"TextEvent"in window&&!co,sg=hi&&(!Yd||co&&8<co&&11>=co),uh=" ",dh=!1;function og(t,e){switch(t){case"keyup":return Ov.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ag(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function kv(t,e){switch(t){case"compositionend":return ag(e);case"keypress":return e.which!==32?null:(dh=!0,uh);case"textInput":return t=e.data,t===uh&&dh?null:t;default:return null}}function zv(t,e){if(Jr)return t==="compositionend"||!Yd&&og(t,e)?(t=rg(),Ba=Wd=Ui=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sg&&e.locale!=="ko"?null:e.data;default:return null}}var Bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Bv[t.type]:e==="textarea"}function lg(t,e,n,i){zm(i),e=ll(e,"onChange"),0<e.length&&(n=new jd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var uo=null,To=null;function Hv(t){xg(t,0)}function Rl(t){var e=ns(t);if(Dm(e))return t}function Vv(t,e){if(t==="change")return e}var cg=!1;if(hi){var nc;if(hi){var ic="oninput"in document;if(!ic){var hh=document.createElement("div");hh.setAttribute("oninput","return;"),ic=typeof hh.oninput=="function"}nc=ic}else nc=!1;cg=nc&&(!document.documentMode||9<document.documentMode)}function ph(){uo&&(uo.detachEvent("onpropertychange",ug),To=uo=null)}function ug(t){if(t.propertyName==="value"&&Rl(To)){var e=[];lg(e,To,t,zd(t)),Gm(Hv,e)}}function Gv(t,e,n){t==="focusin"?(ph(),uo=e,To=n,uo.attachEvent("onpropertychange",ug)):t==="focusout"&&ph()}function Wv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rl(To)}function jv(t,e){if(t==="click")return Rl(e)}function Xv(t,e){if(t==="input"||t==="change")return Rl(e)}function Yv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:Yv;function Ao(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Kc.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function mh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gh(t,e){var n=mh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mh(n)}}function dg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fg(){for(var t=window,e=tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tl(t.document)}return e}function $d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $v(t){var e=fg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dg(n.ownerDocument.documentElement,n)){if(i!==null&&$d(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=gh(n,s);var a=gh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qv=hi&&"documentMode"in document&&11>=document.documentMode,es=null,mu=null,fo=null,gu=!1;function _h(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gu||es==null||es!==tl(i)||(i=es,"selectionStart"in i&&$d(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fo&&Ao(fo,i)||(fo=i,i=ll(mu,"onSelect"),0<i.length&&(e=new jd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=es)))}function ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ts={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},rc={},hg={};hi&&(hg=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function Pl(t){if(rc[t])return rc[t];if(!ts[t])return t;var e=ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hg)return rc[t]=e[n];return t}var pg=Pl("animationend"),mg=Pl("animationiteration"),gg=Pl("animationstart"),_g=Pl("transitionend"),vg=new Map,vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,e){vg.set(t,e),Rr(e,[t])}for(var sc=0;sc<vh.length;sc++){var oc=vh[sc],Kv=oc.toLowerCase(),Zv=oc[0].toUpperCase()+oc.slice(1);Qi(Kv,"on"+Zv)}Qi(pg,"onAnimationEnd");Qi(mg,"onAnimationIteration");Qi(gg,"onAnimationStart");Qi("dblclick","onDoubleClick");Qi("focusin","onFocus");Qi("focusout","onBlur");Qi(_g,"onTransitionEnd");Ss("onMouseEnter",["mouseout","mouseover"]);Ss("onMouseLeave",["mouseout","mouseover"]);Ss("onPointerEnter",["pointerout","pointerover"]);Ss("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qv=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function xh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,K_(i,e,void 0,t),t.currentTarget=null}function xg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,l=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;xh(r,o,l),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,l=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;xh(r,o,l),s=c}}}if(il)throw t=du,il=!1,du=null,t}function ut(t,e){var n=e[Su];n===void 0&&(n=e[Su]=new Set);var i=t+"__bubble";n.has(i)||(yg(e,t,2,!1),n.add(i))}function ac(t,e,n){var i=0;e&&(i|=4),yg(n,t,i,e)}var sa="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[sa]){t[sa]=!0,Cm.forEach(function(n){n!=="selectionchange"&&(Qv.has(n)||ac(n,!1,t),ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sa]||(e[sa]=!0,ac("selectionchange",!1,e))}}function yg(t,e,n,i){switch(ig(e)){case 1:var r=fv;break;case 4:r=hv;break;default:r=Gd}n=r.bind(null,e,n,t),r=void 0,!uu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function lc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=hr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Gm(function(){var l=s,u=zd(n),d=[];e:{var f=vg.get(t);if(f!==void 0){var p=jd,m=t;switch(t){case"keypress":if(Ha(n)===0)break e;case"keydown":case"keyup":p=bv;break;case"focusin":m="focus",p=tc;break;case"focusout":m="blur",p=tc;break;case"beforeblur":case"afterblur":p=tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Lv;break;case pg:case mg:case gg:p=xv;break;case _g:p=Nv;break;case"scroll":p=pv;break;case"wheel":p=Uv;break;case"copy":case"cut":case"paste":p=Sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ch}var v=(e&4)!==0,g=!v&&t==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var _=l,x;_!==null;){x=_;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=So(_,h),y!=null&&v.push(bo(_,y,x)))),g)break;_=_.return}0<v.length&&(f=new p(f,m,null,n,u),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==lu&&(m=n.relatedTarget||n.fromElement)&&(hr(m)||m[pi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=l,m=m?hr(m):null,m!==null&&(g=Pr(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=l),p!==m)){if(v=ah,y="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=ch,y="onPointerLeave",h="onPointerEnter",_="pointer"),g=p==null?f:ns(p),x=m==null?f:ns(m),f=new v(y,_+"leave",p,n,u),f.target=g,f.relatedTarget=x,y=null,hr(u)===l&&(v=new v(h,_+"enter",m,n,u),v.target=x,v.relatedTarget=g,y=v),g=y,p&&m)t:{for(v=p,h=m,_=0,x=v;x;x=Ir(x))_++;for(x=0,y=h;y;y=Ir(y))x++;for(;0<_-x;)v=Ir(v),_--;for(;0<x-_;)h=Ir(h),x--;for(;_--;){if(v===h||h!==null&&v===h.alternate)break t;v=Ir(v),h=Ir(h)}v=null}else v=null;p!==null&&yh(d,f,p,v,!1),m!==null&&g!==null&&yh(d,g,m,v,!0)}}e:{if(f=l?ns(l):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=Vv;else if(fh(f))if(cg)R=Xv;else{R=Wv;var T=Gv}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=jv);if(R&&(R=R(t,l))){lg(d,R,n,u);break e}T&&T(t,f,l),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&iu(f,"number",f.value)}switch(T=l?ns(l):window,t){case"focusin":(fh(T)||T.contentEditable==="true")&&(es=T,mu=l,fo=null);break;case"focusout":fo=mu=es=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,_h(d,n,u);break;case"selectionchange":if(qv)break;case"keydown":case"keyup":_h(d,n,u)}var A;if(Yd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Jr?og(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(sg&&n.locale!=="ko"&&(Jr||b!=="onCompositionStart"?b==="onCompositionEnd"&&Jr&&(A=rg()):(Ui=u,Wd="value"in Ui?Ui.value:Ui.textContent,Jr=!0)),T=ll(l,b),0<T.length&&(b=new lh(b,t,null,n,u),d.push({event:b,listeners:T}),A?b.data=A:(A=ag(n),A!==null&&(b.data=A)))),(A=Fv?kv(t,n):zv(t,n))&&(l=ll(l,"onBeforeInput"),0<l.length&&(u=new lh("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:l}),u.data=A))}xg(d,e)})}function bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ll(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=So(t,n),s!=null&&i.unshift(bo(t,s,r)),s=So(t,e),s!=null&&i.push(bo(t,s,r))),t=t.return}return i}function Ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,l=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&l!==null&&(o=l,r?(c=So(n,s),c!=null&&a.unshift(bo(n,c,o))):r||(c=So(n,s),c!=null&&a.push(bo(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Jv=/\r\n?/g,ex=/\u0000|\uFFFD/g;function Sh(t){return(typeof t=="string"?t:""+t).replace(Jv,`
`).replace(ex,"")}function oa(t,e,n){if(e=Sh(e),Sh(t)!==e&&n)throw Error(oe(425))}function cl(){}var _u=null,vu=null;function xu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,tx=typeof clearTimeout=="function"?clearTimeout:void 0,Mh=typeof Promise=="function"?Promise:void 0,nx=typeof queueMicrotask=="function"?queueMicrotask:typeof Mh<"u"?function(t){return Mh.resolve(null).then(t).catch(ix)}:yu;function ix(t){setTimeout(function(){throw t})}function cc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),wo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);wo(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Eh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Os,Ro="__reactProps$"+Os,pi="__reactContainer$"+Os,Su="__reactEvents$"+Os,rx="__reactListeners$"+Os,sx="__reactHandles$"+Os;function hr(t){var e=t[Wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pi]||n[Wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Eh(t);t!==null;){if(n=t[Wn])return n;t=Eh(t)}return e}t=n,n=t.parentNode}return null}function Vo(t){return t=t[Wn]||t[pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Ll(t){return t[Ro]||null}var Mu=[],is=-1;function Ji(t){return{current:t}}function dt(t){0>is||(t.current=Mu[is],Mu[is]=null,is--)}function at(t,e){is++,Mu[is]=t.current,t.current=e}var $i={},Vt=Ji($i),en=Ji(!1),Sr=$i;function Ms(t,e){var n=t.type.contextTypes;if(!n)return $i;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function ul(){dt(en),dt(Vt)}function wh(t,e,n){if(Vt.current!==$i)throw Error(oe(168));at(Vt,e),at(en,n)}function Sg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,G_(t)||"Unknown",r));return gt({},n,i)}function dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,Sr=Vt.current,at(Vt,t),at(en,en.current),!0}function Th(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=Sg(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,dt(en),dt(Vt),at(Vt,t)):dt(en),at(en,n)}var oi=null,Dl=!1,uc=!1;function Mg(t){oi===null?oi=[t]:oi.push(t)}function ox(t){Dl=!0,Mg(t)}function er(){if(!uc&&oi!==null){uc=!0;var t=0,e=et;try{var n=oi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,Dl=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),Ym(Bd,er),r}finally{et=e,uc=!1}}return null}var rs=[],ss=0,fl=null,hl=0,vn=[],xn=0,Mr=null,ai=1,li="";function lr(t,e){rs[ss++]=hl,rs[ss++]=fl,fl=t,hl=e}function Eg(t,e,n){vn[xn++]=ai,vn[xn++]=li,vn[xn++]=Mr,Mr=t;var i=ai;t=li;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ai=1<<32-On(e)+r|n<<r|i,li=s+t}else ai=1<<s|n<<r|i,li=t}function qd(t){t.return!==null&&(lr(t,1),Eg(t,1,0))}function Kd(t){for(;t===fl;)fl=rs[--ss],rs[ss]=null,hl=rs[--ss],rs[ss]=null;for(;t===Mr;)Mr=vn[--xn],vn[xn]=null,li=vn[--xn],vn[xn]=null,ai=vn[--xn],vn[xn]=null}var un=null,cn=null,ft=!1,Nn=null;function wg(t,e){var n=Sn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ah(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,cn=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:ai,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Sn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,cn=null,!0):!1;default:return!1}}function Eu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wu(t){if(ft){var e=cn;if(e){var n=e;if(!Ah(t,e)){if(Eu(t))throw Error(oe(418));e=Bi(n.nextSibling);var i=un;e&&Ah(t,e)?wg(i,n):(t.flags=t.flags&-4097|2,ft=!1,un=t)}}else{if(Eu(t))throw Error(oe(418));t.flags=t.flags&-4097|2,ft=!1,un=t}}}function Ch(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function aa(t){if(t!==un)return!1;if(!ft)return Ch(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xu(t.type,t.memoizedProps)),e&&(e=cn)){if(Eu(t))throw Tg(),Error(oe(418));for(;e;)wg(t,e),e=Bi(e.nextSibling)}if(Ch(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=un?Bi(t.stateNode.nextSibling):null;return!0}function Tg(){for(var t=cn;t;)t=Bi(t.nextSibling)}function Es(){cn=un=null,ft=!1}function Zd(t){Nn===null?Nn=[t]:Nn.push(t)}var ax=xi.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function la(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bh(t){var e=t._init;return e(t._payload)}function Ag(t){function e(h,_){if(t){var x=h.deletions;x===null?(h.deletions=[_],h.flags|=16):x.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Wi(h,_),h.index=0,h.sibling=null,h}function s(h,_,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<_?(h.flags|=2,_):x):(h.flags|=2,_)):(h.flags|=1048576,_)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function o(h,_,x,y){return _===null||_.tag!==6?(_=_c(x,h.mode,y),_.return=h,_):(_=r(_,x),_.return=h,_)}function c(h,_,x,y){var R=x.type;return R===Qr?u(h,_,x.props.children,y,x.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ri&&bh(R)===_.type)?(y=r(_,x.props),y.ref=Ys(h,_,x),y.return=h,y):(y=$a(x.type,x.key,x.props,null,h.mode,y),y.ref=Ys(h,_,x),y.return=h,y)}function l(h,_,x,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=vc(x,h.mode,y),_.return=h,_):(_=r(_,x.children||[]),_.return=h,_)}function u(h,_,x,y,R){return _===null||_.tag!==7?(_=xr(x,h.mode,y,R),_.return=h,_):(_=r(_,x),_.return=h,_)}function d(h,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=_c(""+_,h.mode,x),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Zo:return x=$a(_.type,_.key,_.props,null,h.mode,x),x.ref=Ys(h,null,_),x.return=h,x;case Zr:return _=vc(_,h.mode,x),_.return=h,_;case Ri:var y=_._init;return d(h,y(_._payload),x)}if(to(_)||Vs(_))return _=xr(_,h.mode,x,null),_.return=h,_;la(h,_)}return null}function f(h,_,x,y){var R=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:o(h,_,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Zo:return x.key===R?c(h,_,x,y):null;case Zr:return x.key===R?l(h,_,x,y):null;case Ri:return R=x._init,f(h,_,R(x._payload),y)}if(to(x)||Vs(x))return R!==null?null:u(h,_,x,y,null);la(h,x)}return null}function p(h,_,x,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,o(_,h,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Zo:return h=h.get(y.key===null?x:y.key)||null,c(_,h,y,R);case Zr:return h=h.get(y.key===null?x:y.key)||null,l(_,h,y,R);case Ri:var T=y._init;return p(h,_,x,T(y._payload),R)}if(to(y)||Vs(y))return h=h.get(x)||null,u(_,h,y,R,null);la(_,y)}return null}function m(h,_,x,y){for(var R=null,T=null,A=_,b=_=0,E=null;A!==null&&b<x.length;b++){A.index>b?(E=A,A=null):E=A.sibling;var S=f(h,A,x[b],y);if(S===null){A===null&&(A=E);break}t&&A&&S.alternate===null&&e(h,A),_=s(S,_,b),T===null?R=S:T.sibling=S,T=S,A=E}if(b===x.length)return n(h,A),ft&&lr(h,b),R;if(A===null){for(;b<x.length;b++)A=d(h,x[b],y),A!==null&&(_=s(A,_,b),T===null?R=A:T.sibling=A,T=A);return ft&&lr(h,b),R}for(A=i(h,A);b<x.length;b++)E=p(A,h,b,x[b],y),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?b:E.key),_=s(E,_,b),T===null?R=E:T.sibling=E,T=E);return t&&A.forEach(function(C){return e(h,C)}),ft&&lr(h,b),R}function v(h,_,x,y){var R=Vs(x);if(typeof R!="function")throw Error(oe(150));if(x=R.call(x),x==null)throw Error(oe(151));for(var T=R=null,A=_,b=_=0,E=null,S=x.next();A!==null&&!S.done;b++,S=x.next()){A.index>b?(E=A,A=null):E=A.sibling;var C=f(h,A,S.value,y);if(C===null){A===null&&(A=E);break}t&&A&&C.alternate===null&&e(h,A),_=s(C,_,b),T===null?R=C:T.sibling=C,T=C,A=E}if(S.done)return n(h,A),ft&&lr(h,b),R;if(A===null){for(;!S.done;b++,S=x.next())S=d(h,S.value,y),S!==null&&(_=s(S,_,b),T===null?R=S:T.sibling=S,T=S);return ft&&lr(h,b),R}for(A=i(h,A);!S.done;b++,S=x.next())S=p(A,h,b,S.value,y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?b:S.key),_=s(S,_,b),T===null?R=S:T.sibling=S,T=S);return t&&A.forEach(function(D){return e(h,D)}),ft&&lr(h,b),R}function g(h,_,x,y){if(typeof x=="object"&&x!==null&&x.type===Qr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Zo:e:{for(var R=x.key,T=_;T!==null;){if(T.key===R){if(R=x.type,R===Qr){if(T.tag===7){n(h,T.sibling),_=r(T,x.props.children),_.return=h,h=_;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ri&&bh(R)===T.type){n(h,T.sibling),_=r(T,x.props),_.ref=Ys(h,T,x),_.return=h,h=_;break e}n(h,T);break}else e(h,T);T=T.sibling}x.type===Qr?(_=xr(x.props.children,h.mode,y,x.key),_.return=h,h=_):(y=$a(x.type,x.key,x.props,null,h.mode,y),y.ref=Ys(h,_,x),y.return=h,h=y)}return a(h);case Zr:e:{for(T=x.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(h,_.sibling),_=r(_,x.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=vc(x,h.mode,y),_.return=h,h=_}return a(h);case Ri:return T=x._init,g(h,_,T(x._payload),y)}if(to(x))return m(h,_,x,y);if(Vs(x))return v(h,_,x,y);la(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,x),_.return=h,h=_):(n(h,_),_=_c(x,h.mode,y),_.return=h,h=_),a(h)):n(h,_)}return g}var ws=Ag(!0),Cg=Ag(!1),pl=Ji(null),ml=null,os=null,Qd=null;function Jd(){Qd=os=ml=null}function ef(t){var e=pl.current;dt(pl),t._currentValue=e}function Tu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){ml=t,Qd=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(Qd!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(ml===null)throw Error(oe(308));os=t,ml.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var pr=null;function tf(t){pr===null?pr=[t]:pr.push(t)}function bg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,tf(e)):(n.next=r.next,r.next=n),e.interleaved=n,mi(t,i)}function mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pi=!1;function nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mi(t,n)}return r=i.interleaved,r===null?(e.next=e,tf(i)):(e.next=r.next,r.next=e),i.interleaved=e,mi(t,n)}function Va(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hd(t,n)}}function Rh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gl(t,e,n,i){var r=t.updateQueue;Pi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,l=c.next;c.next=null,a===null?s=l:a.next=l,a=c;var u=t.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==a&&(o===null?u.firstBaseUpdate=l:o.next=l,u.lastBaseUpdate=c))}if(s!==null){var d=r.baseState;a=0,u=l=c=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=t,v=o;switch(f=e,p=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,f=typeof m=="function"?m.call(p,d,f):m,f==null)break e;d=gt({},d,f);break e;case 2:Pi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(c=d),r.baseState=c,r.firstBaseUpdate=l,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);wr|=a,t.lanes=a,t.memoizedState=d}}function Ph(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Go={},qn=Ji(Go),Po=Ji(Go),Lo=Ji(Go);function mr(t){if(t===Go)throw Error(oe(174));return t}function rf(t,e){switch(at(Lo,e),at(Po,t),at(qn,Go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:su(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=su(e,t)}dt(qn),at(qn,e)}function Ts(){dt(qn),dt(Po),dt(Lo)}function Pg(t){mr(Lo.current);var e=mr(qn.current),n=su(e,t.type);e!==n&&(at(Po,t),at(qn,n))}function sf(t){Po.current===t&&(dt(qn),dt(Po))}var ht=Ji(0);function _l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dc=[];function of(){for(var t=0;t<dc.length;t++)dc[t]._workInProgressVersionPrimary=null;dc.length=0}var Ga=xi.ReactCurrentDispatcher,fc=xi.ReactCurrentBatchConfig,Er=0,mt=null,Tt=null,Pt=null,vl=!1,ho=!1,Do=0,lx=0;function Ot(){throw Error(oe(321))}function af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function lf(t,e,n,i,r,s){if(Er=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ga.current=t===null||t.memoizedState===null?fx:hx,t=n(i,r),ho){s=0;do{if(ho=!1,Do=0,25<=s)throw Error(oe(301));s+=1,Pt=Tt=null,e.updateQueue=null,Ga.current=px,t=n(i,r)}while(ho)}if(Ga.current=xl,e=Tt!==null&&Tt.next!==null,Er=0,Pt=Tt=mt=null,vl=!1,e)throw Error(oe(300));return t}function cf(){var t=Do!==0;return Do=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?mt.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function wn(){if(Tt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Pt===null?mt.memoizedState:Pt.next;if(e!==null)Pt=e,Tt=t;else{if(t===null)throw Error(oe(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Pt===null?mt.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function No(t,e){return typeof e=="function"?e(t):e}function hc(t){var e=wn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,l=s;do{var u=l.lane;if((Er&u)===u)c!==null&&(c=c.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),i=l.hasEagerState?l.eagerState:t(i,l.action);else{var d={lane:u,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};c===null?(o=c=d,a=i):c=c.next=d,mt.lanes|=u,wr|=u}l=l.next}while(l!==null&&l!==s);c===null?a=i:c.next=o,zn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pc(t){var e=wn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);zn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Lg(){}function Dg(t,e){var n=mt,i=wn(),r=e(),s=!zn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,uf(Ug.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,Io(9,Ig.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(oe(349));Er&30||Ng(n,e,r)}return r}function Ng(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ig(t,e,n,i){e.value=n,e.getSnapshot=i,Og(e)&&Fg(t)}function Ug(t,e,n){return n(function(){Og(e)&&Fg(t)})}function Og(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function Fg(t){var e=mi(t,1);e!==null&&Fn(e,t,1,-1)}function Lh(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:t},e.queue=t,t=t.dispatch=dx.bind(null,mt,t),[e.memoizedState,t]}function Io(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function kg(){return wn().memoizedState}function Wa(t,e,n,i){var r=Vn();mt.flags|=t,r.memoizedState=Io(1|e,n,void 0,i===void 0?null:i)}function Nl(t,e,n,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var a=Tt.memoizedState;if(s=a.destroy,i!==null&&af(i,a.deps)){r.memoizedState=Io(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Io(1|e,n,s,i)}function Dh(t,e){return Wa(8390656,8,t,e)}function uf(t,e){return Nl(2048,8,t,e)}function zg(t,e){return Nl(4,2,t,e)}function Bg(t,e){return Nl(4,4,t,e)}function Hg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vg(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4,4,Hg.bind(null,e,t),n)}function df(){}function Gg(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&af(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Wg(t,e){var n=wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&af(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function jg(t,e,n){return Er&21?(zn(n,e)||(n=Km(),mt.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function cx(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=fc.transition;fc.transition={};try{t(!1),e()}finally{et=n,fc.transition=i}}function Xg(){return wn().memoizedState}function ux(t,e,n){var i=Gi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Yg(t))$g(e,n);else if(n=bg(t,e,n,i),n!==null){var r=Xt();Fn(n,t,i,r),qg(n,e,i)}}function dx(t,e,n){var i=Gi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yg(t))$g(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,zn(o,a)){var c=e.interleaved;c===null?(r.next=r,tf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=bg(t,e,r,i),n!==null&&(r=Xt(),Fn(n,t,i,r),qg(n,e,i))}}function Yg(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function $g(t,e){ho=vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hd(t,n)}}var xl={readContext:En,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},fx={readContext:En,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:Dh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wa(4194308,4,Hg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wa(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ux.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:Lh,useDebugValue:df,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=Lh(!1),e=t[0];return t=cx.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Vn();if(ft){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Lt===null)throw Error(oe(349));Er&30||Ng(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Dh(Ug.bind(null,i,s,t),[t]),i.flags|=2048,Io(9,Ig.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=Lt.identifierPrefix;if(ft){var n=li,i=ai;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Do++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=lx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hx={readContext:En,useCallback:Gg,useContext:En,useEffect:uf,useImperativeHandle:Vg,useInsertionEffect:zg,useLayoutEffect:Bg,useMemo:Wg,useReducer:hc,useRef:kg,useState:function(){return hc(No)},useDebugValue:df,useDeferredValue:function(t){var e=wn();return jg(e,Tt.memoizedState,t)},useTransition:function(){var t=hc(No)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Lg,useSyncExternalStore:Dg,useId:Xg,unstable_isNewReconciler:!1},px={readContext:En,useCallback:Gg,useContext:En,useEffect:uf,useImperativeHandle:Vg,useInsertionEffect:zg,useLayoutEffect:Bg,useMemo:Wg,useReducer:pc,useRef:kg,useState:function(){return pc(No)},useDebugValue:df,useDeferredValue:function(t){var e=wn();return Tt===null?e.memoizedState=t:jg(e,Tt.memoizedState,t)},useTransition:function(){var t=pc(No)[0],e=wn().memoizedState;return[t,e]},useMutableSource:Lg,useSyncExternalStore:Dg,useId:Xg,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Au(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Il={isMounted:function(t){return(t=t._reactInternals)?Pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Gi(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Fn(e,t,r,i),Va(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Gi(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Fn(e,t,r,i),Va(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Gi(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(t,r,i),e!==null&&(Fn(e,t,i,n),Va(e,t,i))}};function Nh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ao(n,i)||!Ao(r,s):!0}function Kg(t,e,n){var i=!1,r=$i,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=tn(e)?Sr:Vt.current,i=e.contextTypes,s=(i=i!=null)?Ms(t,r):$i),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Il,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ih(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Il.enqueueReplaceState(e,e.state,null)}function Cu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},nf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=tn(e)?Sr:Vt.current,r.context=Ms(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Au(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Il.enqueueReplaceState(r,r.state,null),gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",i=e;do n+=V_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function mc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mx=typeof WeakMap=="function"?WeakMap:Map;function Zg(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Sl||(Sl=!0,ku=i),bu(t,e)},n}function Qg(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){bu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bu(t,e),typeof i!="function"&&(Vi===null?Vi=new Set([this]):Vi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Uh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new mx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Rx.bind(null,t,e,n),e.then(t,t))}function Oh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,Hi(n,e,1))),n.lanes|=1),t)}var gx=xi.ReactCurrentOwner,Jt=!1;function jt(t,e,n,i){e.child=t===null?Cg(e,null,n,i):ws(e,t.child,n,i)}function kh(t,e,n,i,r){n=n.render;var s=e.ref;return ms(e,r),i=lf(t,e,n,i,s,r),n=cf(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ft&&n&&qd(e),e.flags|=1,jt(t,e,i,r),e.child)}function zh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!xf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jg(t,e,s,i,r)):(t=$a(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ao,n(a,i)&&t.ref===e.ref)return gi(t,e,r)}return e.flags|=1,t=Wi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Jg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ao(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,gi(t,e,r)}return Ru(t,e,n,i,r)}function e0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(ls,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(ls,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,at(ls,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,at(ls,ln),ln|=i;return jt(t,e,r,n),e.child}function t0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ru(t,e,n,i,r){var s=tn(n)?Sr:Vt.current;return s=Ms(e,s),ms(e,r),n=lf(t,e,n,i,s,r),i=cf(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gi(t,e,r)):(ft&&i&&qd(e),e.flags|=1,jt(t,e,n,r),e.child)}function Bh(t,e,n,i,r){if(tn(n)){var s=!0;dl(e)}else s=!1;if(ms(e,r),e.stateNode===null)ja(t,e),Kg(e,n,i),Cu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,l=n.contextType;typeof l=="object"&&l!==null?l=En(l):(l=tn(n)?Sr:Vt.current,l=Ms(e,l));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==l)&&Ih(e,a,i,l),Pi=!1;var f=e.memoizedState;a.state=f,gl(e,i,a,r),c=e.memoizedState,o!==i||f!==c||en.current||Pi?(typeof u=="function"&&(Au(e,n,u,i),c=e.memoizedState),(o=Pi||Nh(e,n,o,i,f,c,l))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=l,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Rg(t,e),o=e.memoizedProps,l=e.type===e.elementType?o:Ln(e.type,o),a.props=l,d=e.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=En(c):(c=tn(n)?Sr:Vt.current,c=Ms(e,c));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||f!==c)&&Ih(e,a,i,c),Pi=!1,f=e.memoizedState,a.state=f,gl(e,i,a,r);var m=e.memoizedState;o!==d||f!==m||en.current||Pi?(typeof p=="function"&&(Au(e,n,p,i),m=e.memoizedState),(l=Pi||Nh(e,n,l,i,f,m,c)||!1)?(u||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,m,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,m,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),a.props=i,a.state=m,a.context=c,i=l):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Pu(t,e,n,i,s,r)}function Pu(t,e,n,i,r,s){t0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Th(e,n,!1),gi(t,e,s);i=e.stateNode,gx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ws(e,t.child,null,s),e.child=ws(e,null,o,s)):jt(t,e,o,s),e.memoizedState=i.state,r&&Th(e,n,!0),e.child}function n0(t){var e=t.stateNode;e.pendingContext?wh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wh(t,e.context,!1),rf(t,e.containerInfo)}function Hh(t,e,n,i,r){return Es(),Zd(r),e.flags|=256,jt(t,e,n,i),e.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Du(t){return{baseLanes:t,cachePool:null,transitions:null}}function i0(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(ht,r&1),t===null)return wu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Fl(a,i,0,null),t=xr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Du(n),e.memoizedState=Lu,t):ff(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return _x(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Wi(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Wi(o,s):(s=xr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Du(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Lu,i}return s=t.child,t=s.sibling,i=Wi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ff(t,e){return e=Fl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ca(t,e,n,i){return i!==null&&Zd(i),ws(e,t.child,null,n),t=ff(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _x(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=mc(Error(oe(422))),ca(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Fl({mode:"visible",children:i.children},r,0,null),s=xr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ws(e,t.child,null,a),e.child.memoizedState=Du(a),e.memoizedState=Lu,s);if(!(e.mode&1))return ca(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(oe(419)),i=mc(s,i,void 0),ca(t,e,a,i)}if(o=(a&t.childLanes)!==0,Jt||o){if(i=Lt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mi(t,r),Fn(i,t,r,-1))}return vf(),i=mc(Error(oe(421))),ca(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Px.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,cn=Bi(r.nextSibling),un=e,ft=!0,Nn=null,t!==null&&(vn[xn++]=ai,vn[xn++]=li,vn[xn++]=Mr,ai=t.id,li=t.overflow,Mr=e),e=ff(e,i.children),e.flags|=4096,e)}function Vh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Tu(t.return,e,n)}function gc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function r0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vh(t,n,e);else if(t.tag===19)Vh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&_l(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),gc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&_l(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}gc(e,!0,n,null,s);break;case"together":gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ja(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Wi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vx(t,e,n){switch(e.tag){case 3:n0(e),Es();break;case 5:Pg(e);break;case 1:tn(e.type)&&dl(e);break;case 4:rf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?i0(t,e,n):(at(ht,ht.current&1),t=gi(t,e,n),t!==null?t.sibling:null);at(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return r0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,e0(t,e,n)}return gi(t,e,n)}var s0,Nu,o0,a0;s0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nu=function(){};o0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(qn.current);var s=null;switch(n){case"input":r=tu(t,r),i=tu(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=ru(t,r),i=ru(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=cl)}ou(n,i);var a;n=null;for(l in r)if(!i.hasOwnProperty(l)&&r.hasOwnProperty(l)&&r[l]!=null)if(l==="style"){var o=r[l];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(xo.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in i){var c=i[l];if(o=r!=null?r[l]:void 0,i.hasOwnProperty(l)&&c!==o&&(c!=null||o!=null))if(l==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(l,n)),n=c;else l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(l,c)):l==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(l,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(xo.hasOwnProperty(l)?(c!=null&&l==="onScroll"&&ut("scroll",t),s||o===c||(s=[])):(s=s||[]).push(l,c))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};a0=function(t,e,n,i){n!==i&&(e.flags|=4)};function $s(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function xx(t,e,n){var i=e.pendingProps;switch(Kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return tn(e.type)&&ul(),Ft(e),null;case 3:return i=e.stateNode,Ts(),dt(en),dt(Vt),of(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(Hu(Nn),Nn=null))),Nu(t,e),Ft(e),null;case 5:sf(e);var r=mr(Lo.current);if(n=e.type,t!==null&&e.stateNode!=null)o0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Ft(e),null}if(t=mr(qn.current),aa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Wn]=e,i[Ro]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<io.length;r++)ut(io[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Zf(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Jf(i,s),ut("invalid",i)}ou(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&oa(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&oa(i.textContent,o,t),r=["children",""+o]):xo.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":Qo(i),Qf(i,s,!0);break;case"textarea":Qo(i),eh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Um(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Wn]=e,t[Ro]=i,s0(t,e,!1,!1),e.stateNode=t;e:{switch(a=au(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<io.length;r++)ut(io[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Zf(t,i),r=tu(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Jf(t,i),r=ru(t,i),ut("invalid",t);break;default:r=i}ou(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?km(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Om(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&yo(t,c):typeof c=="number"&&yo(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xo.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ut("scroll",t):c!=null&&Ud(t,s,c,a))}switch(n){case"input":Qo(t),Qf(t,i,!1);break;case"textarea":Qo(t),eh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Yi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)a0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=mr(Lo.current),mr(qn.current),aa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Wn]=e,(s=i.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:oa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Wn]=e,e.stateNode=i}return Ft(e),null;case 13:if(dt(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&cn!==null&&e.mode&1&&!(e.flags&128))Tg(),Es(),e.flags|=98560,s=!1;else if(s=aa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Wn]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Nn!==null&&(Hu(Nn),Nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?At===0&&(At=3):vf())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return Ts(),Nu(t,e),t===null&&Co(e.stateNode.containerInfo),Ft(e),null;case 10:return ef(e.type._context),Ft(e),null;case 17:return tn(e.type)&&ul(),Ft(e),null;case 19:if(dt(ht),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)$s(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=_l(t),a!==null){for(e.flags|=128,$s(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Cs&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304)}else{if(!i)if(t=_l(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ft)return Ft(e),null}else 2*xt()-s.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=ht.current,at(ht,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return _f(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function yx(t,e){switch(Kd(e),e.tag){case 1:return tn(e.type)&&ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ts(),dt(en),dt(Vt),of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sf(e),null;case 13:if(dt(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(ht),null;case 4:return Ts(),null;case 10:return ef(e.type._context),null;case 22:case 23:return _f(),null;case 24:return null;default:return null}}var ua=!1,Bt=!1,Sx=typeof WeakSet=="function"?WeakSet:Set,ye=null;function as(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function Iu(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Gh=!1;function Mx(t,e){if(_u=ol,t=fg(),$d(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,l=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(c=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++l===r&&(o=a),f===s&&++u===i&&(c=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(vu={focusedElem:t,selectionRange:n},ol=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,g=m.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:Ln(e.type,v),g);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(y){vt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return m=Gh,Gh=!1,m}function po(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Iu(e,n,s)}r=r.next}while(r!==i)}}function Ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Uu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function l0(t){var e=t.alternate;e!==null&&(t.alternate=null,l0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wn],delete e[Ro],delete e[Su],delete e[rx],delete e[sx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function c0(t){return t.tag===5||t.tag===3||t.tag===4}function Wh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ou(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cl));else if(i!==4&&(t=t.child,t!==null))for(Ou(t,e,n),t=t.sibling;t!==null;)Ou(t,e,n),t=t.sibling}function Fu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Fu(t,e,n),t=t.sibling;t!==null;)Fu(t,e,n),t=t.sibling}var Dt=null,Dn=!1;function Mi(t,e,n){for(n=n.child;n!==null;)u0(t,e,n),n=n.sibling}function u0(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 5:Bt||as(n,e);case 6:var i=Dt,r=Dn;Dt=null,Mi(t,e,n),Dt=i,Dn=r,Dt!==null&&(Dn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Dn?(t=Dt,n=n.stateNode,t.nodeType===8?cc(t.parentNode,n):t.nodeType===1&&cc(t,n),wo(t)):cc(Dt,n.stateNode));break;case 4:i=Dt,r=Dn,Dt=n.stateNode.containerInfo,Dn=!0,Mi(t,e,n),Dt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Iu(n,e,a),r=r.next}while(r!==i)}Mi(t,e,n);break;case 1:if(!Bt&&(as(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){vt(n,e,o)}Mi(t,e,n);break;case 21:Mi(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,Mi(t,e,n),Bt=i):Mi(t,e,n);break;default:Mi(t,e,n)}}function jh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Sx),e.forEach(function(i){var r=Lx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Dt=o.stateNode,Dn=!1;break e;case 3:Dt=o.stateNode.containerInfo,Dn=!0;break e;case 4:Dt=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Dt===null)throw Error(oe(160));u0(s,a,r),Dt=null,Dn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(l){vt(r,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)d0(e,t),e=e.sibling}function d0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Hn(t),i&4){try{po(3,t,t.return),Ul(3,t)}catch(v){vt(t,t.return,v)}try{po(5,t,t.return)}catch(v){vt(t,t.return,v)}}break;case 1:Cn(e,t),Hn(t),i&512&&n!==null&&as(n,n.return);break;case 5:if(Cn(e,t),Hn(t),i&512&&n!==null&&as(n,n.return),t.flags&32){var r=t.stateNode;try{yo(r,"")}catch(v){vt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Nm(r,s),au(o,a);var l=au(o,s);for(a=0;a<c.length;a+=2){var u=c[a],d=c[a+1];u==="style"?km(r,d):u==="dangerouslySetInnerHTML"?Om(r,d):u==="children"?yo(r,d):Ud(r,u,d,l)}switch(o){case"input":nu(r,s);break;case"textarea":Im(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ds(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ro]=s}catch(v){vt(t,t.return,v)}}break;case 6:if(Cn(e,t),Hn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){vt(t,t.return,v)}}break;case 3:if(Cn(e,t),Hn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(e.containerInfo)}catch(v){vt(t,t.return,v)}break;case 4:Cn(e,t),Hn(t);break;case 13:Cn(e,t),Hn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(mf=xt())),i&4&&jh(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(l=Bt)||u,Cn(e,t),Bt=l):Cn(e,t),Hn(t),i&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!u&&t.mode&1)for(ye=t,u=t.child;u!==null;){for(d=ye=u;ye!==null;){switch(f=ye,p=f.child,f.tag){case 0:case 11:case 14:case 15:po(4,f,f.return);break;case 1:as(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){vt(i,n,v)}}break;case 5:as(f,f.return);break;case 22:if(f.memoizedState!==null){Yh(d);continue}}p!==null?(p.return=f,ye=p):Yh(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,l?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,c=d.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Fm("display",a))}catch(v){vt(t,t.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(v){vt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Cn(e,t),Hn(t),i&4&&jh(t);break;case 21:break;default:Cn(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(c0(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(yo(r,""),i.flags&=-33);var s=Wh(t);Fu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Wh(t);Ou(t,o,a);break;default:throw Error(oe(161))}}catch(c){vt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ex(t,e,n){ye=t,f0(t)}function f0(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ua;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||Bt;o=ua;var l=Bt;if(ua=a,(Bt=c)&&!l)for(ye=r;ye!==null;)a=ye,c=a.child,a.tag===22&&a.memoizedState!==null?$h(r):c!==null?(c.return=a,ye=c):$h(r);for(;s!==null;)ye=s,f0(s),s=s.sibling;ye=r,ua=o,Bt=l}Xh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):Xh(t)}}function Xh(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||Ul(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ph(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ph(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var u=l.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&wo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Bt||e.flags&512&&Uu(e)}catch(f){vt(e,e.return,f)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Yh(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function $h(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ul(4,e)}catch(c){vt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){vt(e,r,c)}}var s=e.return;try{Uu(e)}catch(c){vt(e,s,c)}break;case 5:var a=e.return;try{Uu(e)}catch(c){vt(e,a,c)}}}catch(c){vt(e,e.return,c)}if(e===t){ye=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ye=o;break}ye=e.return}}var wx=Math.ceil,yl=xi.ReactCurrentDispatcher,hf=xi.ReactCurrentOwner,Mn=xi.ReactCurrentBatchConfig,$e=0,Lt=null,Mt=null,Nt=0,ln=0,ls=Ji(0),At=0,Uo=null,wr=0,Ol=0,pf=0,mo=null,Qt=null,mf=0,Cs=1/0,si=null,Sl=!1,ku=null,Vi=null,da=!1,Oi=null,Ml=0,go=0,zu=null,Xa=-1,Ya=0;function Xt(){return $e&6?xt():Xa!==-1?Xa:Xa=xt()}function Gi(t){return t.mode&1?$e&2&&Nt!==0?Nt&-Nt:ax.transition!==null?(Ya===0&&(Ya=Km()),Ya):(t=et,t!==0||(t=window.event,t=t===void 0?16:ig(t.type)),t):1}function Fn(t,e,n,i){if(50<go)throw go=0,zu=null,Error(oe(185));Bo(t,n,i),(!($e&2)||t!==Lt)&&(t===Lt&&(!($e&2)&&(Ol|=n),At===4&&Ni(t,Nt)),nn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Cs=xt()+500,Dl&&er()))}function nn(t,e){var n=t.callbackNode;av(t,e);var i=sl(t,t===Lt?Nt:0);if(i===0)n!==null&&ih(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ih(n),e===1)t.tag===0?ox(qh.bind(null,t)):Mg(qh.bind(null,t)),nx(function(){!($e&6)&&er()}),n=null;else{switch(Zm(i)){case 1:n=Bd;break;case 4:n=$m;break;case 16:n=rl;break;case 536870912:n=qm;break;default:n=rl}n=y0(n,h0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function h0(t,e){if(Xa=-1,Ya=0,$e&6)throw Error(oe(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var i=sl(t,t===Lt?Nt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=El(t,i);else{e=i;var r=$e;$e|=2;var s=m0();(Lt!==t||Nt!==e)&&(si=null,Cs=xt()+500,vr(t,e));do try{Cx();break}catch(o){p0(t,o)}while(!0);Jd(),yl.current=s,$e=r,Mt!==null?e=0:(Lt=null,Nt=0,e=At)}if(e!==0){if(e===2&&(r=fu(t),r!==0&&(i=r,e=Bu(t,r))),e===1)throw n=Uo,vr(t,0),Ni(t,i),nn(t,xt()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!Tx(r)&&(e=El(t,i),e===2&&(s=fu(t),s!==0&&(i=s,e=Bu(t,s))),e===1))throw n=Uo,vr(t,0),Ni(t,i),nn(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:cr(t,Qt,si);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=mf+500-xt(),10<e)){if(sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=yu(cr.bind(null,t,Qt,si),e);break}cr(t,Qt,si);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-On(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wx(i/1960))-i,10<i){t.timeoutHandle=yu(cr.bind(null,t,Qt,si),i);break}cr(t,Qt,si);break;case 5:cr(t,Qt,si);break;default:throw Error(oe(329))}}}return nn(t,xt()),t.callbackNode===n?h0.bind(null,t):null}function Bu(t,e){var n=mo;return t.current.memoizedState.isDehydrated&&(vr(t,e).flags|=256),t=El(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&Hu(e)),t}function Hu(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function Tx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~pf,e&=~Ol,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function qh(t){if($e&6)throw Error(oe(327));gs();var e=sl(t,0);if(!(e&1))return nn(t,xt()),null;var n=El(t,e);if(t.tag!==0&&n===2){var i=fu(t);i!==0&&(e=i,n=Bu(t,i))}if(n===1)throw n=Uo,vr(t,0),Ni(t,e),nn(t,xt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,Qt,si),nn(t,xt()),null}function gf(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Cs=xt()+500,Dl&&er())}}function Tr(t){Oi!==null&&Oi.tag===0&&!($e&6)&&gs();var e=$e;$e|=1;var n=Mn.transition,i=et;try{if(Mn.transition=null,et=1,t)return t()}finally{et=i,Mn.transition=n,$e=e,!($e&6)&&er()}}function _f(){ln=ls.current,dt(ls)}function vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tx(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Kd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ul();break;case 3:Ts(),dt(en),dt(Vt),of();break;case 5:sf(i);break;case 4:Ts();break;case 13:dt(ht);break;case 19:dt(ht);break;case 10:ef(i.type._context);break;case 22:case 23:_f()}n=n.return}if(Lt=t,Mt=t=Wi(t.current,null),Nt=ln=e,At=0,Uo=null,pf=Ol=wr=0,Qt=mo=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}pr=null}return t}function p0(t,e){do{var n=Mt;try{if(Jd(),Ga.current=xl,vl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}vl=!1}if(Er=0,Pt=Tt=mt=null,ho=!1,Do=0,hf.current=null,n===null||n.return===null){At=1,Uo=e,Mt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=Nt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var l=c,u=o,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Oh(a);if(p!==null){p.flags&=-257,Fh(p,a,o,s,e),p.mode&1&&Uh(s,l,e),e=p,c=l;var m=e.updateQueue;if(m===null){var v=new Set;v.add(c),e.updateQueue=v}else m.add(c);break e}else{if(!(e&1)){Uh(s,l,e),vf();break e}c=Error(oe(426))}}else if(ft&&o.mode&1){var g=Oh(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Fh(g,a,o,s,e),Zd(As(c,o));break e}}s=c=As(c,o),At!==4&&(At=2),mo===null?mo=[s]:mo.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Zg(s,c,e);Rh(s,h);break e;case 1:o=c;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Vi===null||!Vi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Qg(s,o,e);Rh(s,y);break e}}s=s.return}while(s!==null)}_0(n)}catch(R){e=R,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function m0(){var t=yl.current;return yl.current=xl,t===null?xl:t}function vf(){(At===0||At===3||At===2)&&(At=4),Lt===null||!(wr&268435455)&&!(Ol&268435455)||Ni(Lt,Nt)}function El(t,e){var n=$e;$e|=2;var i=m0();(Lt!==t||Nt!==e)&&(si=null,vr(t,e));do try{Ax();break}catch(r){p0(t,r)}while(!0);if(Jd(),$e=n,yl.current=i,Mt!==null)throw Error(oe(261));return Lt=null,Nt=0,At}function Ax(){for(;Mt!==null;)g0(Mt)}function Cx(){for(;Mt!==null&&!Q_();)g0(Mt)}function g0(t){var e=x0(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?_0(t):Mt=e,hf.current=null}function _0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yx(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Mt=null;return}}else if(n=xx(n,e,ln),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);At===0&&(At=5)}function cr(t,e,n){var i=et,r=Mn.transition;try{Mn.transition=null,et=1,bx(t,e,n,i)}finally{Mn.transition=r,et=i}return null}function bx(t,e,n,i){do gs();while(Oi!==null);if($e&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(lv(t,s),t===Lt&&(Mt=Lt=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||da||(da=!0,y0(rl,function(){return gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var a=et;et=1;var o=$e;$e|=4,hf.current=null,Mx(t,n),d0(n,t),$v(vu),ol=!!_u,vu=_u=null,t.current=n,Ex(n),J_(),$e=o,et=a,Mn.transition=s}else t.current=n;if(da&&(da=!1,Oi=t,Ml=r),s=t.pendingLanes,s===0&&(Vi=null),nv(n.stateNode),nn(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Sl)throw Sl=!1,t=ku,ku=null,t;return Ml&1&&t.tag!==0&&gs(),s=t.pendingLanes,s&1?t===zu?go++:(go=0,zu=t):go=0,er(),null}function gs(){if(Oi!==null){var t=Zm(Ml),e=Mn.transition,n=et;try{if(Mn.transition=null,et=16>t?16:t,Oi===null)var i=!1;else{if(t=Oi,Oi=null,Ml=0,$e&6)throw Error(oe(331));var r=$e;for($e|=4,ye=t.current;ye!==null;){var s=ye,a=s.child;if(ye.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var l=o[c];for(ye=l;ye!==null;){var u=ye;switch(u.tag){case 0:case 11:case 15:po(8,u,s)}var d=u.child;if(d!==null)d.return=u,ye=d;else for(;ye!==null;){u=ye;var f=u.sibling,p=u.return;if(l0(u),u===l){ye=null;break}if(f!==null){f.return=p,ye=f;break}ye=p}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}ye=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ye=a;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:po(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ye=h;break e}ye=s.return}}var _=t.current;for(ye=_;ye!==null;){a=ye;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ye=x;else e:for(a=_;ye!==null;){if(o=ye,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ul(9,o)}}catch(R){vt(o,o.return,R)}if(o===a){ye=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ye=y;break e}ye=o.return}}if($e=r,er(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Cl,t)}catch{}i=!0}return i}finally{et=n,Mn.transition=e}}return!1}function Kh(t,e,n){e=As(n,e),e=Zg(t,e,1),t=Hi(t,e,1),e=Xt(),t!==null&&(Bo(t,1,e),nn(t,e))}function vt(t,e,n){if(t.tag===3)Kh(t,t,n);else for(;e!==null;){if(e.tag===3){Kh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Vi===null||!Vi.has(i))){t=As(n,t),t=Qg(e,t,1),e=Hi(e,t,1),t=Xt(),e!==null&&(Bo(e,1,t),nn(e,t));break}}e=e.return}}function Rx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Nt&n)===n&&(At===4||At===3&&(Nt&130023424)===Nt&&500>xt()-mf?vr(t,0):pf|=n),nn(t,e)}function v0(t,e){e===0&&(t.mode&1?(e=ta,ta<<=1,!(ta&130023424)&&(ta=4194304)):e=1);var n=Xt();t=mi(t,e),t!==null&&(Bo(t,e,n),nn(t,n))}function Px(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),v0(t,n)}function Lx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),v0(t,n)}var x0;x0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,vx(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,ft&&e.flags&1048576&&Eg(e,hl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ja(t,e),t=e.pendingProps;var r=Ms(e,Vt.current);ms(e,n),r=lf(null,e,i,t,r,n);var s=cf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,dl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nf(e),r.updater=Il,e.stateNode=r,r._reactInternals=e,Cu(e,i,t,n),e=Pu(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&qd(e),jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ja(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Nx(i),t=Ln(i,t),r){case 0:e=Ru(null,e,i,t,n);break e;case 1:e=Bh(null,e,i,t,n);break e;case 11:e=kh(null,e,i,t,n);break e;case 14:e=zh(null,e,i,Ln(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ru(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Bh(t,e,i,r,n);case 3:e:{if(n0(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Rg(t,e),gl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=As(Error(oe(423)),e),e=Hh(t,e,i,n,r);break e}else if(i!==r){r=As(Error(oe(424)),e),e=Hh(t,e,i,n,r);break e}else for(cn=Bi(e.stateNode.containerInfo.firstChild),un=e,ft=!0,Nn=null,n=Cg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),i===r){e=gi(t,e,n);break e}jt(t,e,i,n)}e=e.child}return e;case 5:return Pg(e),t===null&&wu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,xu(i,r)?a=null:s!==null&&xu(i,s)&&(e.flags|=32),t0(t,e),jt(t,e,a,n),e.child;case 6:return t===null&&wu(e),null;case 13:return i0(t,e,n);case 4:return rf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ws(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),kh(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,at(pl,i._currentValue),i._currentValue=a,s!==null)if(zn(s.value,a)){if(s.children===r.children&&!en.current){e=gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=di(-1,n&-n),c.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var u=l.pending;u===null?c.next=c:(c.next=u.next,u.next=c),l.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Tu(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(oe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Tu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ms(e,n),r=En(r),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),zh(t,e,i,r,n);case 15:return Jg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),ja(t,e),e.tag=1,tn(i)?(t=!0,dl(e)):t=!1,ms(e,n),Kg(e,i,r),Cu(e,i,r,n),Pu(null,e,i,!0,t,n);case 19:return r0(t,e,n);case 22:return e0(t,e,n)}throw Error(oe(156,e.tag))};function y0(t,e){return Ym(t,e)}function Dx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(t,e,n,i){return new Dx(t,e,n,i)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nx(t){if(typeof t=="function")return xf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fd)return 11;if(t===kd)return 14}return 2}function Wi(t,e){var n=t.alternate;return n===null?(n=Sn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $a(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")xf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Qr:return xr(n.children,r,s,e);case Od:a=8,r|=8;break;case Zc:return t=Sn(12,n,e,r|2),t.elementType=Zc,t.lanes=s,t;case Qc:return t=Sn(13,n,e,r),t.elementType=Qc,t.lanes=s,t;case Jc:return t=Sn(19,n,e,r),t.elementType=Jc,t.lanes=s,t;case Pm:return Fl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case bm:a=10;break e;case Rm:a=9;break e;case Fd:a=11;break e;case kd:a=14;break e;case Ri:a=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Sn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function xr(t,e,n,i){return t=Sn(7,t,i,e),t.lanes=n,t}function Fl(t,e,n,i){return t=Sn(22,t,i,e),t.elementType=Pm,t.lanes=n,t.stateNode={isHidden:!1},t}function _c(t,e,n){return t=Sn(6,t,null,e),t.lanes=n,t}function vc(t,e,n){return e=Sn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ix(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function yf(t,e,n,i,r,s,a,o,c){return t=new Ix(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Sn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(s),t}function Ux(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function S0(t){if(!t)return $i;t=t._reactInternals;e:{if(Pr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(tn(n))return Sg(t,n,e)}return e}function M0(t,e,n,i,r,s,a,o,c){return t=yf(n,i,!0,t,r,s,a,o,c),t.context=S0(null),n=t.current,i=Xt(),r=Gi(n),s=di(i,r),s.callback=e??null,Hi(n,s,r),t.current.lanes=r,Bo(t,r,i),nn(t,i),t}function kl(t,e,n,i){var r=e.current,s=Xt(),a=Gi(r);return n=S0(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(r,e,a),t!==null&&(Fn(t,r,a,s),Va(t,r,a)),a}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sf(t,e){Zh(t,e),(t=t.alternate)&&Zh(t,e)}function Ox(){return null}var E0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mf(t){this._internalRoot=t}zl.prototype.render=Mf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));kl(t,e,null,null)};zl.prototype.unmount=Mf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){kl(null,t,null,null)}),e[pi]=null}};function zl(t){this._internalRoot=t}zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=eg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Di.length&&e!==0&&e<Di[n].priority;n++);Di.splice(n,0,t),n===0&&ng(t)}};function Ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qh(){}function Fx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var l=wl(a);s.call(l)}}var a=M0(e,i,t,0,null,!1,!1,"",Qh);return t._reactRootContainer=a,t[pi]=a.current,Co(t.nodeType===8?t.parentNode:t),Tr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var l=wl(c);o.call(l)}}var c=yf(t,0,!1,null,null,!1,!1,"",Qh);return t._reactRootContainer=c,t[pi]=c.current,Co(t.nodeType===8?t.parentNode:t),Tr(function(){kl(e,c,n,i)}),c}function Hl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=wl(a);o.call(c)}}kl(e,a,t,r)}else a=Fx(n,e,t,r,i);return wl(a)}Qm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=no(e.pendingLanes);n!==0&&(Hd(e,n|1),nn(e,xt()),!($e&6)&&(Cs=xt()+500,er()))}break;case 13:Tr(function(){var i=mi(t,1);if(i!==null){var r=Xt();Fn(i,t,1,r)}}),Sf(t,1)}};Vd=function(t){if(t.tag===13){var e=mi(t,134217728);if(e!==null){var n=Xt();Fn(e,t,134217728,n)}Sf(t,134217728)}};Jm=function(t){if(t.tag===13){var e=Gi(t),n=mi(t,e);if(n!==null){var i=Xt();Fn(n,t,e,i)}Sf(t,e)}};eg=function(){return et};tg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};cu=function(t,e,n){switch(e){case"input":if(nu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ll(i);if(!r)throw Error(oe(90));Dm(i),nu(i,r)}}}break;case"textarea":Im(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};Hm=gf;Vm=Tr;var kx={usingClientEntryPoint:!1,Events:[Vo,ns,Ll,zm,Bm,gf]},qs={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zx={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jm(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||Ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{Cl=fa.inject(zx),$n=fa}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kx;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ef(e))throw Error(oe(200));return Ux(t,e,null,n)};hn.createRoot=function(t,e){if(!Ef(t))throw Error(oe(299));var n=!1,i="",r=E0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=yf(t,1,!1,null,null,n,!1,i,r),t[pi]=e.current,Co(t.nodeType===8?t.parentNode:t),new Mf(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=jm(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return Tr(t)};hn.hydrate=function(t,e,n){if(!Bl(e))throw Error(oe(200));return Hl(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!Ef(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=E0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=M0(e,null,t,1,n??null,r,!1,s,a),t[pi]=e.current,Co(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zl(e)};hn.render=function(t,e,n){if(!Bl(e))throw Error(oe(200));return Hl(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Bl(t))throw Error(oe(40));return t._reactRootContainer?(Tr(function(){Hl(null,null,t,!1,function(){t._reactRootContainer=null,t[pi]=null})}),!0):!1};hn.unstable_batchedUpdates=gf;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bl(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Hl(t,e,n,!1,i)};hn.version="18.3.1-next-f1338f8080-20240426";function w0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w0)}catch(t){console.error(t)}}w0(),wm.exports=hn;var T0=wm.exports,A0,Jh=T0;A0=Jh.createRoot,Jh.hydrateRoot;var C0={exports:{}};(function(t,e){(function(n,i){t.exports=i(pt)})(typeof self<"u"?self:dm,n=>(()=>{var i={7403:(o,c,l)=>{l.d(c,{default:()=>U});var u=l(4087),d=l.n(u);const f=function(V){return new RegExp(/<[a-z][\s\S]*>/i).test(V)},p=function(V,H){return Math.floor(Math.random()*(H-V+1))+V};var m="TYPE_CHARACTER",v="REMOVE_CHARACTER",g="REMOVE_ALL",h="REMOVE_LAST_VISIBLE_NODE",_="PAUSE_FOR",x="CALL_FUNCTION",y="ADD_HTML_TAG_ELEMENT",R="CHANGE_DELETE_SPEED",T="CHANGE_DELAY",A="CHANGE_CURSOR",b="PASTE_STRING",E="HTML_TAG";function S(V){return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(H){return typeof H}:function(H){return H&&typeof Symbol=="function"&&H.constructor===Symbol&&H!==Symbol.prototype?"symbol":typeof H},S(V)}function C(V,H){var ee=Object.keys(V);if(Object.getOwnPropertySymbols){var ie=Object.getOwnPropertySymbols(V);H&&(ie=ie.filter(function(Ce){return Object.getOwnPropertyDescriptor(V,Ce).enumerable})),ee.push.apply(ee,ie)}return ee}function D(V){for(var H=1;H<arguments.length;H++){var ee=arguments[H]!=null?arguments[H]:{};H%2?C(Object(ee),!0).forEach(function(ie){G(V,ie,ee[ie])}):Object.getOwnPropertyDescriptors?Object.defineProperties(V,Object.getOwnPropertyDescriptors(ee)):C(Object(ee)).forEach(function(ie){Object.defineProperty(V,ie,Object.getOwnPropertyDescriptor(ee,ie))})}return V}function O(V){return function(H){if(Array.isArray(H))return k(H)}(V)||function(H){if(typeof Symbol<"u"&&H[Symbol.iterator]!=null||H["@@iterator"]!=null)return Array.from(H)}(V)||function(H,ee){if(H){if(typeof H=="string")return k(H,ee);var ie=Object.prototype.toString.call(H).slice(8,-1);return ie==="Object"&&H.constructor&&(ie=H.constructor.name),ie==="Map"||ie==="Set"?Array.from(H):ie==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ie)?k(H,ee):void 0}}(V)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function k(V,H){(H==null||H>V.length)&&(H=V.length);for(var ee=0,ie=new Array(H);ee<H;ee++)ie[ee]=V[ee];return ie}function X(V,H){for(var ee=0;ee<H.length;ee++){var ie=H[ee];ie.enumerable=ie.enumerable||!1,ie.configurable=!0,"value"in ie&&(ie.writable=!0),Object.defineProperty(V,Q(ie.key),ie)}}function G(V,H,ee){return(H=Q(H))in V?Object.defineProperty(V,H,{value:ee,enumerable:!0,configurable:!0,writable:!0}):V[H]=ee,V}function Q(V){var H=function(ee,ie){if(S(ee)!=="object"||ee===null)return ee;var Ce=ee[Symbol.toPrimitive];if(Ce!==void 0){var L=Ce.call(ee,"string");if(S(L)!=="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(ee)}(V);return S(H)==="symbol"?H:String(H)}const U=function(){function V(ie,Ce){var L=this;if(function(q,Z){if(!(q instanceof Z))throw new TypeError("Cannot call a class as a function")}(this,V),G(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),G(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),G(this,"setupWrapperElement",function(){L.state.elements.container&&(L.state.elements.wrapper.className=L.options.wrapperClassName,L.state.elements.cursor.className=L.options.cursorClassName,L.state.elements.cursor.innerHTML=L.options.cursor,L.state.elements.container.innerHTML="",L.state.elements.container.appendChild(L.state.elements.wrapper),L.state.elements.container.appendChild(L.state.elements.cursor))}),G(this,"start",function(){return L.state.eventLoopPaused=!1,L.runEventLoop(),L}),G(this,"pause",function(){return L.state.eventLoopPaused=!0,L}),G(this,"stop",function(){return L.state.eventLoop&&((0,u.cancel)(L.state.eventLoop),L.state.eventLoop=null),L}),G(this,"pauseFor",function(q){return L.addEventToQueue(_,{ms:q}),L}),G(this,"typeOutAllStrings",function(){return typeof L.options.strings=="string"?(L.typeString(L.options.strings).pauseFor(L.options.pauseFor),L):(L.options.strings.forEach(function(q){L.typeString(q).pauseFor(L.options.pauseFor).deleteAll(L.options.deleteSpeed)}),L)}),G(this,"typeString",function(q){var Z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(f(q))return L.typeOutHTMLString(q,Z);if(q){var ce=(L.options||{}).stringSplitter,de=typeof ce=="function"?ce(q):q.split("");L.typeCharacters(de,Z)}return L}),G(this,"pasteString",function(q){var Z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return f(q)?L.typeOutHTMLString(q,Z,!0):(q&&L.addEventToQueue(b,{character:q,node:Z}),L)}),G(this,"typeOutHTMLString",function(q){var Z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,ce=arguments.length>2?arguments[2]:void 0,de=function(Pe){var I=document.createElement("div");return I.innerHTML=Pe,I.childNodes}(q);if(de.length>0)for(var pe=0;pe<de.length;pe++){var Ie=de[pe],Le=Ie.innerHTML;Ie&&Ie.nodeType!==3?(Ie.innerHTML="",L.addEventToQueue(y,{node:Ie,parentNode:Z}),ce?L.pasteString(Le,Ie):L.typeString(Le,Ie)):Ie.textContent&&(ce?L.pasteString(Ie.textContent,Z):L.typeString(Ie.textContent,Z))}return L}),G(this,"deleteAll",function(){var q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return L.addEventToQueue(g,{speed:q}),L}),G(this,"changeDeleteSpeed",function(q){if(!q)throw new Error("Must provide new delete speed");return L.addEventToQueue(R,{speed:q}),L}),G(this,"changeDelay",function(q){if(!q)throw new Error("Must provide new delay");return L.addEventToQueue(T,{delay:q}),L}),G(this,"changeCursor",function(q){if(!q)throw new Error("Must provide new cursor");return L.addEventToQueue(A,{cursor:q}),L}),G(this,"deleteChars",function(q){if(!q)throw new Error("Must provide amount of characters to delete");for(var Z=0;Z<q;Z++)L.addEventToQueue(v);return L}),G(this,"callFunction",function(q,Z){if(!q||typeof q!="function")throw new Error("Callback must be a function");return L.addEventToQueue(x,{cb:q,thisArg:Z}),L}),G(this,"typeCharacters",function(q){var Z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q||!Array.isArray(q))throw new Error("Characters must be an array");return q.forEach(function(ce){L.addEventToQueue(m,{character:ce,node:Z})}),L}),G(this,"removeCharacters",function(q){if(!q||!Array.isArray(q))throw new Error("Characters must be an array");return q.forEach(function(){L.addEventToQueue(v)}),L}),G(this,"addEventToQueue",function(q,Z){var ce=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return L.addEventToStateProperty(q,Z,ce,"eventQueue")}),G(this,"addReverseCalledEvent",function(q,Z){var ce=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return L.options.loop?L.addEventToStateProperty(q,Z,ce,"reverseCalledEvents"):L}),G(this,"addEventToStateProperty",function(q,Z){var ce=arguments.length>2&&arguments[2]!==void 0&&arguments[2],de=arguments.length>3?arguments[3]:void 0,pe={eventName:q,eventArgs:Z||{}};return L.state[de]=ce?[pe].concat(O(L.state[de])):[].concat(O(L.state[de]),[pe]),L}),G(this,"runEventLoop",function(){L.state.lastFrameTime||(L.state.lastFrameTime=Date.now());var q=Date.now(),Z=q-L.state.lastFrameTime;if(!L.state.eventQueue.length){if(!L.options.loop)return;L.state.eventQueue=O(L.state.calledEvents),L.state.calledEvents=[],L.options=D({},L.state.initialOptions)}if(L.state.eventLoop=d()(L.runEventLoop),!L.state.eventLoopPaused){if(L.state.pauseUntil){if(q<L.state.pauseUntil)return;L.state.pauseUntil=null}var ce,de=O(L.state.eventQueue),pe=de.shift();if(!(Z<=(ce=pe.eventName===h||pe.eventName===v?L.options.deleteSpeed==="natural"?p(40,80):L.options.deleteSpeed:L.options.delay==="natural"?p(120,160):L.options.delay))){var Ie=pe.eventName,Le=pe.eventArgs;switch(L.logInDevMode({currentEvent:pe,state:L.state,delay:ce}),Ie){case b:case m:var Pe=Le.character,I=Le.node,Ke=document.createTextNode(Pe),Ne=Ke;L.options.onCreateTextNode&&typeof L.options.onCreateTextNode=="function"&&(Ne=L.options.onCreateTextNode(Pe,Ke)),Ne&&(I?I.appendChild(Ne):L.state.elements.wrapper.appendChild(Ne)),L.state.visibleNodes=[].concat(O(L.state.visibleNodes),[{type:"TEXT_NODE",character:Pe,node:Ne}]);break;case v:de.unshift({eventName:h,eventArgs:{removingCharacterNode:!0}});break;case _:var Ve=pe.eventArgs.ms;L.state.pauseUntil=Date.now()+parseInt(Ve);break;case x:var be=pe.eventArgs,rt=be.cb,Re=be.thisArg;rt.call(Re,{elements:L.state.elements});break;case y:var P=pe.eventArgs,M=P.node,W=P.parentNode;W?W.appendChild(M):L.state.elements.wrapper.appendChild(M),L.state.visibleNodes=[].concat(O(L.state.visibleNodes),[{type:E,node:M,parentNode:W||L.state.elements.wrapper}]);break;case g:var te=L.state.visibleNodes,re=Le.speed,J=[];re&&J.push({eventName:R,eventArgs:{speed:re,temp:!0}});for(var Me=0,fe=te.length;Me<fe;Me++)J.push({eventName:h,eventArgs:{removingCharacterNode:!1}});re&&J.push({eventName:R,eventArgs:{speed:L.options.deleteSpeed,temp:!0}}),de.unshift.apply(de,J);break;case h:var xe=pe.eventArgs.removingCharacterNode;if(L.state.visibleNodes.length){var We=L.state.visibleNodes.pop(),ae=We.type,ve=We.node,De=We.character;L.options.onRemoveNode&&typeof L.options.onRemoveNode=="function"&&L.options.onRemoveNode({node:ve,character:De}),ve&&ve.parentNode.removeChild(ve),ae===E&&xe&&de.unshift({eventName:h,eventArgs:{}})}break;case R:L.options.deleteSpeed=pe.eventArgs.speed;break;case T:L.options.delay=pe.eventArgs.delay;break;case A:L.options.cursor=pe.eventArgs.cursor,L.state.elements.cursor.innerHTML=pe.eventArgs.cursor}L.options.loop&&(pe.eventName===h||pe.eventArgs&&pe.eventArgs.temp||(L.state.calledEvents=[].concat(O(L.state.calledEvents),[pe]))),L.state.eventQueue=de,L.state.lastFrameTime=q}}}),ie)if(typeof ie=="string"){var se=document.querySelector(ie);if(!se)throw new Error("Could not find container element");this.state.elements.container=se}else this.state.elements.container=ie;Ce&&(this.options=D(D({},this.options),Ce)),this.state.initialOptions=D({},this.options),this.init()}var H,ee;return H=V,(ee=[{key:"init",value:function(){var ie,Ce;this.setupWrapperElement(),this.addEventToQueue(A,{cursor:this.options.cursor},!0),this.addEventToQueue(g,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(ie=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(Ce=document.createElement("style")).appendChild(document.createTextNode(ie)),document.head.appendChild(Ce),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(ie){this.options.devMode&&console.log(ie)}}])&&X(H.prototype,ee),Object.defineProperty(H,"prototype",{writable:!1}),V}()},8552:(o,c,l)=>{var u=l(852)(l(5639),"DataView");o.exports=u},1989:(o,c,l)=>{var u=l(1789),d=l(401),f=l(7667),p=l(1327),m=l(1866);function v(g){var h=-1,_=g==null?0:g.length;for(this.clear();++h<_;){var x=g[h];this.set(x[0],x[1])}}v.prototype.clear=u,v.prototype.delete=d,v.prototype.get=f,v.prototype.has=p,v.prototype.set=m,o.exports=v},8407:(o,c,l)=>{var u=l(7040),d=l(4125),f=l(2117),p=l(7518),m=l(4705);function v(g){var h=-1,_=g==null?0:g.length;for(this.clear();++h<_;){var x=g[h];this.set(x[0],x[1])}}v.prototype.clear=u,v.prototype.delete=d,v.prototype.get=f,v.prototype.has=p,v.prototype.set=m,o.exports=v},7071:(o,c,l)=>{var u=l(852)(l(5639),"Map");o.exports=u},3369:(o,c,l)=>{var u=l(4785),d=l(1285),f=l(6e3),p=l(9916),m=l(5265);function v(g){var h=-1,_=g==null?0:g.length;for(this.clear();++h<_;){var x=g[h];this.set(x[0],x[1])}}v.prototype.clear=u,v.prototype.delete=d,v.prototype.get=f,v.prototype.has=p,v.prototype.set=m,o.exports=v},3818:(o,c,l)=>{var u=l(852)(l(5639),"Promise");o.exports=u},8525:(o,c,l)=>{var u=l(852)(l(5639),"Set");o.exports=u},8668:(o,c,l)=>{var u=l(3369),d=l(619),f=l(2385);function p(m){var v=-1,g=m==null?0:m.length;for(this.__data__=new u;++v<g;)this.add(m[v])}p.prototype.add=p.prototype.push=d,p.prototype.has=f,o.exports=p},6384:(o,c,l)=>{var u=l(8407),d=l(7465),f=l(3779),p=l(7599),m=l(4758),v=l(4309);function g(h){var _=this.__data__=new u(h);this.size=_.size}g.prototype.clear=d,g.prototype.delete=f,g.prototype.get=p,g.prototype.has=m,g.prototype.set=v,o.exports=g},2705:(o,c,l)=>{var u=l(5639).Symbol;o.exports=u},1149:(o,c,l)=>{var u=l(5639).Uint8Array;o.exports=u},577:(o,c,l)=>{var u=l(852)(l(5639),"WeakMap");o.exports=u},4963:o=>{o.exports=function(c,l){for(var u=-1,d=c==null?0:c.length,f=0,p=[];++u<d;){var m=c[u];l(m,u,c)&&(p[f++]=m)}return p}},4636:(o,c,l)=>{var u=l(2545),d=l(5694),f=l(1469),p=l(4144),m=l(5776),v=l(6719),g=Object.prototype.hasOwnProperty;o.exports=function(h,_){var x=f(h),y=!x&&d(h),R=!x&&!y&&p(h),T=!x&&!y&&!R&&v(h),A=x||y||R||T,b=A?u(h.length,String):[],E=b.length;for(var S in h)!_&&!g.call(h,S)||A&&(S=="length"||R&&(S=="offset"||S=="parent")||T&&(S=="buffer"||S=="byteLength"||S=="byteOffset")||m(S,E))||b.push(S);return b}},2488:o=>{o.exports=function(c,l){for(var u=-1,d=l.length,f=c.length;++u<d;)c[f+u]=l[u];return c}},2908:o=>{o.exports=function(c,l){for(var u=-1,d=c==null?0:c.length;++u<d;)if(l(c[u],u,c))return!0;return!1}},8470:(o,c,l)=>{var u=l(7813);o.exports=function(d,f){for(var p=d.length;p--;)if(u(d[p][0],f))return p;return-1}},8866:(o,c,l)=>{var u=l(2488),d=l(1469);o.exports=function(f,p,m){var v=p(f);return d(f)?v:u(v,m(f))}},4239:(o,c,l)=>{var u=l(2705),d=l(9607),f=l(2333),p=u?u.toStringTag:void 0;o.exports=function(m){return m==null?m===void 0?"[object Undefined]":"[object Null]":p&&p in Object(m)?d(m):f(m)}},9454:(o,c,l)=>{var u=l(4239),d=l(7005);o.exports=function(f){return d(f)&&u(f)=="[object Arguments]"}},939:(o,c,l)=>{var u=l(2492),d=l(7005);o.exports=function f(p,m,v,g,h){return p===m||(p==null||m==null||!d(p)&&!d(m)?p!=p&&m!=m:u(p,m,v,g,f,h))}},2492:(o,c,l)=>{var u=l(6384),d=l(7114),f=l(8351),p=l(6096),m=l(4160),v=l(1469),g=l(4144),h=l(6719),_="[object Arguments]",x="[object Array]",y="[object Object]",R=Object.prototype.hasOwnProperty;o.exports=function(T,A,b,E,S,C){var D=v(T),O=v(A),k=D?x:m(T),X=O?x:m(A),G=(k=k==_?y:k)==y,Q=(X=X==_?y:X)==y,U=k==X;if(U&&g(T)){if(!g(A))return!1;D=!0,G=!1}if(U&&!G)return C||(C=new u),D||h(T)?d(T,A,b,E,S,C):f(T,A,k,b,E,S,C);if(!(1&b)){var V=G&&R.call(T,"__wrapped__"),H=Q&&R.call(A,"__wrapped__");if(V||H){var ee=V?T.value():T,ie=H?A.value():A;return C||(C=new u),S(ee,ie,b,E,C)}}return!!U&&(C||(C=new u),p(T,A,b,E,S,C))}},8458:(o,c,l)=>{var u=l(3560),d=l(5346),f=l(3218),p=l(346),m=/^\[object .+?Constructor\]$/,v=Function.prototype,g=Object.prototype,h=v.toString,_=g.hasOwnProperty,x=RegExp("^"+h.call(_).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");o.exports=function(y){return!(!f(y)||d(y))&&(u(y)?x:m).test(p(y))}},8749:(o,c,l)=>{var u=l(4239),d=l(1780),f=l(7005),p={};p["[object Float32Array]"]=p["[object Float64Array]"]=p["[object Int8Array]"]=p["[object Int16Array]"]=p["[object Int32Array]"]=p["[object Uint8Array]"]=p["[object Uint8ClampedArray]"]=p["[object Uint16Array]"]=p["[object Uint32Array]"]=!0,p["[object Arguments]"]=p["[object Array]"]=p["[object ArrayBuffer]"]=p["[object Boolean]"]=p["[object DataView]"]=p["[object Date]"]=p["[object Error]"]=p["[object Function]"]=p["[object Map]"]=p["[object Number]"]=p["[object Object]"]=p["[object RegExp]"]=p["[object Set]"]=p["[object String]"]=p["[object WeakMap]"]=!1,o.exports=function(m){return f(m)&&d(m.length)&&!!p[u(m)]}},280:(o,c,l)=>{var u=l(5726),d=l(6916),f=Object.prototype.hasOwnProperty;o.exports=function(p){if(!u(p))return d(p);var m=[];for(var v in Object(p))f.call(p,v)&&v!="constructor"&&m.push(v);return m}},2545:o=>{o.exports=function(c,l){for(var u=-1,d=Array(c);++u<c;)d[u]=l(u);return d}},1717:o=>{o.exports=function(c){return function(l){return c(l)}}},4757:o=>{o.exports=function(c,l){return c.has(l)}},4429:(o,c,l)=>{var u=l(5639)["__core-js_shared__"];o.exports=u},7114:(o,c,l)=>{var u=l(8668),d=l(2908),f=l(4757);o.exports=function(p,m,v,g,h,_){var x=1&v,y=p.length,R=m.length;if(y!=R&&!(x&&R>y))return!1;var T=_.get(p),A=_.get(m);if(T&&A)return T==m&&A==p;var b=-1,E=!0,S=2&v?new u:void 0;for(_.set(p,m),_.set(m,p);++b<y;){var C=p[b],D=m[b];if(g)var O=x?g(D,C,b,m,p,_):g(C,D,b,p,m,_);if(O!==void 0){if(O)continue;E=!1;break}if(S){if(!d(m,function(k,X){if(!f(S,X)&&(C===k||h(C,k,v,g,_)))return S.push(X)})){E=!1;break}}else if(C!==D&&!h(C,D,v,g,_)){E=!1;break}}return _.delete(p),_.delete(m),E}},8351:(o,c,l)=>{var u=l(2705),d=l(1149),f=l(7813),p=l(7114),m=l(8776),v=l(1814),g=u?u.prototype:void 0,h=g?g.valueOf:void 0;o.exports=function(_,x,y,R,T,A,b){switch(y){case"[object DataView]":if(_.byteLength!=x.byteLength||_.byteOffset!=x.byteOffset)return!1;_=_.buffer,x=x.buffer;case"[object ArrayBuffer]":return!(_.byteLength!=x.byteLength||!A(new d(_),new d(x)));case"[object Boolean]":case"[object Date]":case"[object Number]":return f(+_,+x);case"[object Error]":return _.name==x.name&&_.message==x.message;case"[object RegExp]":case"[object String]":return _==x+"";case"[object Map]":var E=m;case"[object Set]":var S=1&R;if(E||(E=v),_.size!=x.size&&!S)return!1;var C=b.get(_);if(C)return C==x;R|=2,b.set(_,x);var D=p(E(_),E(x),R,T,A,b);return b.delete(_),D;case"[object Symbol]":if(h)return h.call(_)==h.call(x)}return!1}},6096:(o,c,l)=>{var u=l(8234),d=Object.prototype.hasOwnProperty;o.exports=function(f,p,m,v,g,h){var _=1&m,x=u(f),y=x.length;if(y!=u(p).length&&!_)return!1;for(var R=y;R--;){var T=x[R];if(!(_?T in p:d.call(p,T)))return!1}var A=h.get(f),b=h.get(p);if(A&&b)return A==p&&b==f;var E=!0;h.set(f,p),h.set(p,f);for(var S=_;++R<y;){var C=f[T=x[R]],D=p[T];if(v)var O=_?v(D,C,T,p,f,h):v(C,D,T,f,p,h);if(!(O===void 0?C===D||g(C,D,m,v,h):O)){E=!1;break}S||(S=T=="constructor")}if(E&&!S){var k=f.constructor,X=p.constructor;k==X||!("constructor"in f)||!("constructor"in p)||typeof k=="function"&&k instanceof k&&typeof X=="function"&&X instanceof X||(E=!1)}return h.delete(f),h.delete(p),E}},1957:(o,c,l)=>{var u=typeof l.g=="object"&&l.g&&l.g.Object===Object&&l.g;o.exports=u},8234:(o,c,l)=>{var u=l(8866),d=l(9551),f=l(3674);o.exports=function(p){return u(p,f,d)}},5050:(o,c,l)=>{var u=l(7019);o.exports=function(d,f){var p=d.__data__;return u(f)?p[typeof f=="string"?"string":"hash"]:p.map}},852:(o,c,l)=>{var u=l(8458),d=l(7801);o.exports=function(f,p){var m=d(f,p);return u(m)?m:void 0}},9607:(o,c,l)=>{var u=l(2705),d=Object.prototype,f=d.hasOwnProperty,p=d.toString,m=u?u.toStringTag:void 0;o.exports=function(v){var g=f.call(v,m),h=v[m];try{v[m]=void 0;var _=!0}catch{}var x=p.call(v);return _&&(g?v[m]=h:delete v[m]),x}},9551:(o,c,l)=>{var u=l(4963),d=l(479),f=Object.prototype.propertyIsEnumerable,p=Object.getOwnPropertySymbols,m=p?function(v){return v==null?[]:(v=Object(v),u(p(v),function(g){return f.call(v,g)}))}:d;o.exports=m},4160:(o,c,l)=>{var u=l(8552),d=l(7071),f=l(3818),p=l(8525),m=l(577),v=l(4239),g=l(346),h="[object Map]",_="[object Promise]",x="[object Set]",y="[object WeakMap]",R="[object DataView]",T=g(u),A=g(d),b=g(f),E=g(p),S=g(m),C=v;(u&&C(new u(new ArrayBuffer(1)))!=R||d&&C(new d)!=h||f&&C(f.resolve())!=_||p&&C(new p)!=x||m&&C(new m)!=y)&&(C=function(D){var O=v(D),k=O=="[object Object]"?D.constructor:void 0,X=k?g(k):"";if(X)switch(X){case T:return R;case A:return h;case b:return _;case E:return x;case S:return y}return O}),o.exports=C},7801:o=>{o.exports=function(c,l){return c==null?void 0:c[l]}},1789:(o,c,l)=>{var u=l(4536);o.exports=function(){this.__data__=u?u(null):{},this.size=0}},401:o=>{o.exports=function(c){var l=this.has(c)&&delete this.__data__[c];return this.size-=l?1:0,l}},7667:(o,c,l)=>{var u=l(4536),d=Object.prototype.hasOwnProperty;o.exports=function(f){var p=this.__data__;if(u){var m=p[f];return m==="__lodash_hash_undefined__"?void 0:m}return d.call(p,f)?p[f]:void 0}},1327:(o,c,l)=>{var u=l(4536),d=Object.prototype.hasOwnProperty;o.exports=function(f){var p=this.__data__;return u?p[f]!==void 0:d.call(p,f)}},1866:(o,c,l)=>{var u=l(4536);o.exports=function(d,f){var p=this.__data__;return this.size+=this.has(d)?0:1,p[d]=u&&f===void 0?"__lodash_hash_undefined__":f,this}},5776:o=>{var c=/^(?:0|[1-9]\d*)$/;o.exports=function(l,u){var d=typeof l;return!!(u=u??9007199254740991)&&(d=="number"||d!="symbol"&&c.test(l))&&l>-1&&l%1==0&&l<u}},7019:o=>{o.exports=function(c){var l=typeof c;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?c!=="__proto__":c===null}},5346:(o,c,l)=>{var u,d=l(4429),f=(u=/[^.]+$/.exec(d&&d.keys&&d.keys.IE_PROTO||""))?"Symbol(src)_1."+u:"";o.exports=function(p){return!!f&&f in p}},5726:o=>{var c=Object.prototype;o.exports=function(l){var u=l&&l.constructor;return l===(typeof u=="function"&&u.prototype||c)}},7040:o=>{o.exports=function(){this.__data__=[],this.size=0}},4125:(o,c,l)=>{var u=l(8470),d=Array.prototype.splice;o.exports=function(f){var p=this.__data__,m=u(p,f);return!(m<0||(m==p.length-1?p.pop():d.call(p,m,1),--this.size,0))}},2117:(o,c,l)=>{var u=l(8470);o.exports=function(d){var f=this.__data__,p=u(f,d);return p<0?void 0:f[p][1]}},7518:(o,c,l)=>{var u=l(8470);o.exports=function(d){return u(this.__data__,d)>-1}},4705:(o,c,l)=>{var u=l(8470);o.exports=function(d,f){var p=this.__data__,m=u(p,d);return m<0?(++this.size,p.push([d,f])):p[m][1]=f,this}},4785:(o,c,l)=>{var u=l(1989),d=l(8407),f=l(7071);o.exports=function(){this.size=0,this.__data__={hash:new u,map:new(f||d),string:new u}}},1285:(o,c,l)=>{var u=l(5050);o.exports=function(d){var f=u(this,d).delete(d);return this.size-=f?1:0,f}},6e3:(o,c,l)=>{var u=l(5050);o.exports=function(d){return u(this,d).get(d)}},9916:(o,c,l)=>{var u=l(5050);o.exports=function(d){return u(this,d).has(d)}},5265:(o,c,l)=>{var u=l(5050);o.exports=function(d,f){var p=u(this,d),m=p.size;return p.set(d,f),this.size+=p.size==m?0:1,this}},8776:o=>{o.exports=function(c){var l=-1,u=Array(c.size);return c.forEach(function(d,f){u[++l]=[f,d]}),u}},4536:(o,c,l)=>{var u=l(852)(Object,"create");o.exports=u},6916:(o,c,l)=>{var u=l(5569)(Object.keys,Object);o.exports=u},1167:(o,c,l)=>{o=l.nmd(o);var u=l(1957),d=c&&!c.nodeType&&c,f=d&&o&&!o.nodeType&&o,p=f&&f.exports===d&&u.process,m=function(){try{return f&&f.require&&f.require("util").types||p&&p.binding&&p.binding("util")}catch{}}();o.exports=m},2333:o=>{var c=Object.prototype.toString;o.exports=function(l){return c.call(l)}},5569:o=>{o.exports=function(c,l){return function(u){return c(l(u))}}},5639:(o,c,l)=>{var u=l(1957),d=typeof self=="object"&&self&&self.Object===Object&&self,f=u||d||Function("return this")();o.exports=f},619:o=>{o.exports=function(c){return this.__data__.set(c,"__lodash_hash_undefined__"),this}},2385:o=>{o.exports=function(c){return this.__data__.has(c)}},1814:o=>{o.exports=function(c){var l=-1,u=Array(c.size);return c.forEach(function(d){u[++l]=d}),u}},7465:(o,c,l)=>{var u=l(8407);o.exports=function(){this.__data__=new u,this.size=0}},3779:o=>{o.exports=function(c){var l=this.__data__,u=l.delete(c);return this.size=l.size,u}},7599:o=>{o.exports=function(c){return this.__data__.get(c)}},4758:o=>{o.exports=function(c){return this.__data__.has(c)}},4309:(o,c,l)=>{var u=l(8407),d=l(7071),f=l(3369);o.exports=function(p,m){var v=this.__data__;if(v instanceof u){var g=v.__data__;if(!d||g.length<199)return g.push([p,m]),this.size=++v.size,this;v=this.__data__=new f(g)}return v.set(p,m),this.size=v.size,this}},346:o=>{var c=Function.prototype.toString;o.exports=function(l){if(l!=null){try{return c.call(l)}catch{}try{return l+""}catch{}}return""}},7813:o=>{o.exports=function(c,l){return c===l||c!=c&&l!=l}},5694:(o,c,l)=>{var u=l(9454),d=l(7005),f=Object.prototype,p=f.hasOwnProperty,m=f.propertyIsEnumerable,v=u(function(){return arguments}())?u:function(g){return d(g)&&p.call(g,"callee")&&!m.call(g,"callee")};o.exports=v},1469:o=>{var c=Array.isArray;o.exports=c},8612:(o,c,l)=>{var u=l(3560),d=l(1780);o.exports=function(f){return f!=null&&d(f.length)&&!u(f)}},4144:(o,c,l)=>{o=l.nmd(o);var u=l(5639),d=l(5062),f=c&&!c.nodeType&&c,p=f&&o&&!o.nodeType&&o,m=p&&p.exports===f?u.Buffer:void 0,v=(m?m.isBuffer:void 0)||d;o.exports=v},8446:(o,c,l)=>{var u=l(939);o.exports=function(d,f){return u(d,f)}},3560:(o,c,l)=>{var u=l(4239),d=l(3218);o.exports=function(f){if(!d(f))return!1;var p=u(f);return p=="[object Function]"||p=="[object GeneratorFunction]"||p=="[object AsyncFunction]"||p=="[object Proxy]"}},1780:o=>{o.exports=function(c){return typeof c=="number"&&c>-1&&c%1==0&&c<=9007199254740991}},3218:o=>{o.exports=function(c){var l=typeof c;return c!=null&&(l=="object"||l=="function")}},7005:o=>{o.exports=function(c){return c!=null&&typeof c=="object"}},6719:(o,c,l)=>{var u=l(8749),d=l(1717),f=l(1167),p=f&&f.isTypedArray,m=p?d(p):u;o.exports=m},3674:(o,c,l)=>{var u=l(4636),d=l(280),f=l(8612);o.exports=function(p){return f(p)?u(p):d(p)}},479:o=>{o.exports=function(){return[]}},5062:o=>{o.exports=function(){return!1}},75:function(o){(function(){var c,l,u,d,f,p;typeof performance<"u"&&performance!==null&&performance.now?o.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(o.exports=function(){return(c()-f)/1e6},l=process.hrtime,d=(c=function(){var m;return 1e9*(m=l())[0]+m[1]})(),p=1e9*process.uptime(),f=d-p):Date.now?(o.exports=function(){return Date.now()-u},u=Date.now()):(o.exports=function(){return new Date().getTime()-u},u=new Date().getTime())}).call(this)},4087:(o,c,l)=>{for(var u=l(75),d=typeof window>"u"?l.g:window,f=["moz","webkit"],p="AnimationFrame",m=d["request"+p],v=d["cancel"+p]||d["cancelRequest"+p],g=0;!m&&g<f.length;g++)m=d[f[g]+"Request"+p],v=d[f[g]+"Cancel"+p]||d[f[g]+"CancelRequest"+p];if(!m||!v){var h=0,_=0,x=[];m=function(y){if(x.length===0){var R=u(),T=Math.max(0,16.666666666666668-(R-h));h=T+R,setTimeout(function(){var A=x.slice(0);x.length=0;for(var b=0;b<A.length;b++)if(!A[b].cancelled)try{A[b].callback(h)}catch(E){setTimeout(function(){throw E},0)}},Math.round(T))}return x.push({handle:++_,callback:y,cancelled:!1}),_},v=function(y){for(var R=0;R<x.length;R++)x[R].handle===y&&(x[R].cancelled=!0)}}o.exports=function(y){return m.call(d,y)},o.exports.cancel=function(){v.apply(d,arguments)},o.exports.polyfill=function(y){y||(y=d),y.requestAnimationFrame=m,y.cancelAnimationFrame=v}},8156:o=>{o.exports=n}},r={};function s(o){var c=r[o];if(c!==void 0)return c.exports;var l=r[o]={id:o,loaded:!1,exports:{}};return i[o].call(l.exports,l,l.exports,s),l.loaded=!0,l.exports}s.n=o=>{var c=o&&o.__esModule?()=>o.default:()=>o;return s.d(c,{a:c}),c},s.d=(o,c)=>{for(var l in c)s.o(c,l)&&!s.o(o,l)&&Object.defineProperty(o,l,{enumerable:!0,get:c[l]})},s.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),s.o=(o,c)=>Object.prototype.hasOwnProperty.call(o,c),s.nmd=o=>(o.paths=[],o.children||(o.children=[]),o);var a={};return(()=>{s.d(a,{default:()=>x});var o=s(8156),c=s.n(o),l=s(7403),u=s(8446),d=s.n(u);function f(y){return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(R){return typeof R}:function(R){return R&&typeof Symbol=="function"&&R.constructor===Symbol&&R!==Symbol.prototype?"symbol":typeof R},f(y)}function p(y,R){for(var T=0;T<R.length;T++){var A=R[T];A.enumerable=A.enumerable||!1,A.configurable=!0,"value"in A&&(A.writable=!0),Object.defineProperty(y,h(A.key),A)}}function m(y,R){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(T,A){return T.__proto__=A,T},m(y,R)}function v(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function g(y){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(R){return R.__proto__||Object.getPrototypeOf(R)},g(y)}function h(y){var R=function(T,A){if(f(T)!=="object"||T===null)return T;var b=T[Symbol.toPrimitive];if(b!==void 0){var E=b.call(T,"string");if(f(E)!=="object")return E;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(T)}(y);return f(R)==="symbol"?R:String(R)}var _=function(y){(function(C,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function");C.prototype=Object.create(D&&D.prototype,{constructor:{value:C,writable:!0,configurable:!0}}),Object.defineProperty(C,"prototype",{writable:!1}),D&&m(C,D)})(S,y);var R,T,A,b,E=(A=S,b=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var C,D=g(A);if(b){var O=g(this).constructor;C=Reflect.construct(D,arguments,O)}else C=D.apply(this,arguments);return function(k,X){if(X&&(f(X)==="object"||typeof X=="function"))return X;if(X!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(k)}(this,C)});function S(){var C,D,O,k;(function(U,V){if(!(U instanceof V))throw new TypeError("Cannot call a class as a function")})(this,S);for(var X=arguments.length,G=new Array(X),Q=0;Q<X;Q++)G[Q]=arguments[Q];return D=v(C=E.call.apply(E,[this].concat(G))),k={instance:null},(O=h(O="state"))in D?Object.defineProperty(D,O,{value:k,enumerable:!0,configurable:!0,writable:!0}):D[O]=k,C}return R=S,(T=[{key:"componentDidMount",value:function(){var C=this,D=new l.default(this.typewriter,this.props.options);this.setState({instance:D},function(){var O=C.props.onInit;O&&O(D)})}},{key:"componentDidUpdate",value:function(C){d()(this.props.options,C.options)||this.setState({instance:new l.default(this.typewriter,this.props.options)})}},{key:"componentWillUnmount",value:function(){this.state.instance&&this.state.instance.stop()}},{key:"render",value:function(){var C=this,D=this.props.component;return c().createElement(D,{ref:function(O){return C.typewriter=O},className:"Typewriter","data-testid":"typewriter-wrapper"})}}])&&p(R.prototype,T),Object.defineProperty(R,"prototype",{writable:!1}),S}(o.Component);_.defaultProps={component:"div"};const x=_})(),a.default})())})(C0);var Bx=C0.exports;const Hx=fm(Bx),Vx="Dimitri",Gx="Makarov",Wx="Full-Stack Developer",jx="Summary",Xx={label:"CV (PDF)",file:"Dimitri_Makarov_CV_CDI.pdf"},Yx={constName:"whoAmI",value:"Dima Makarov"},$x="Full-stack developer covering the whole chain: a reactive front end (React, Astro, Alpine.js), a Node.js API, containerisation and continuous delivery on Google Cloud. I shipped an editorial media platform to production single-handed — 67,000 lines, 8 content types, 51 admin screens (MAAG) — and worked in a team of four on a B2B SaaS run in TDD and BDD/Gherkin (Mentormatic). A deliberate career change: nearly twenty years of production management and client relations before the code, which is where my ease with scoping and hitting deadlines comes from. Trilingual — French and Russian native, English C1.",b0={firstName:Vx,lastName:Gx,jobTitle:Wx,summaryLabel:jx,cv:Xx,typewriter:Yx,summary:$x},{typewriter:xc,summary:qx}=b0,ha=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),ep=()=>{const t=document.querySelector(".Typewriter__wrapper");t&&(t.innerHTML="")},Kx=()=>N.jsx("div",{className:"typewriterText_div",children:N.jsx(Hx,{onInit:t=>{t.changeDelay(70).pauseFor(2200).typeString(`<code>const <span class="whoAmI">${ha(xc.constName)}</span> = {<span class="dm_const">${ha(xc.value)}</span>};</code>`).pauseFor(1500).callFunction(ep).typeString(`<code>console.<span class="console_log">log</span>(<span class="whoAmI">${ha(xc.constName)}</span>);</code>`).pauseFor(1e3).callFunction(ep).pauseFor(250).pasteString(`<br />${ha(qx)}`,null).pauseFor(2500).stop().start()}})}),{firstName:Zx,lastName:Qx,jobTitle:Jx,summaryLabel:ey,cv:R0}=b0,ty=`/react_cv_v2/${R0.file}`,ny=()=>N.jsx("section",{className:"section_about",id:"about",children:N.jsx("article",{children:N.jsxs("div",{className:"about_container",children:[N.jsxs("div",{className:"about_left",children:[N.jsxs("div",{className:"picture_container",children:[N.jsxs("div",{className:"border_container",children:[N.jsx("svg",{className:"picture_frame",viewBox:"0 0 200 200",children:N.jsx("circle",{cx:"100",cy:"100",r:"92"})}),N.jsx("svg",{className:"picture_frame_reverse",viewBox:"0 0 200 200",children:N.jsx("circle",{cx:"100",cy:"100",r:"92"})})]}),N.jsx("div",{className:"picture"})]}),N.jsxs("div",{className:"name_container",children:[N.jsxs("div",{className:"dima",children:[N.jsx("span",{className:"tag",children:"<"}),Zx]}),N.jsxs("div",{className:"makarov",children:[Qx,N.jsx("span",{className:"closing_slash",children:" /"}),N.jsx("span",{className:"tag",children:">"})]})]}),N.jsx("div",{className:"title_container",children:Jx})]}),N.jsxs("div",{className:"about_right",children:[N.jsxs("div",{className:"summary_title",children:[N.jsx("span",{className:"tag",children:"<"}),ey,N.jsx("span",{className:"closing_slash",children:" /"}),N.jsx("span",{className:"tag",children:">"})]}),N.jsx(Kx,{}),N.jsx("div",{className:"download_cv",children:N.jsxs("a",{href:ty,className:"cta-button",download:!0,children:[N.jsx("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"download_icon",children:N.jsx("path",{d:"M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333",strokeLinecap:"round",strokeLinejoin:"round"})}),R0.label]})})]})]})})});var P0={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(dm,function(){return function(n){function i(s){if(r[s])return r[s].exports;var a=r[s]={exports:{},id:s,loaded:!1};return n[s].call(a.exports,a,a.exports,i),a.loaded=!0,a.exports}var r={};return i.m=n,i.c=r,i.p="dist/",i(0)}([function(n,i,r){function s(k){return k&&k.__esModule?k:{default:k}}var a=Object.assign||function(k){for(var X=1;X<arguments.length;X++){var G=arguments[X];for(var Q in G)Object.prototype.hasOwnProperty.call(G,Q)&&(k[Q]=G[Q])}return k},o=r(1),c=(s(o),r(6)),l=s(c),u=r(7),d=s(u),f=r(8),p=s(f),m=r(9),v=s(m),g=r(10),h=s(g),_=r(11),x=s(_),y=r(14),R=s(y),T=[],A=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},E=function(){var k=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(k&&(A=!0),A)return T=(0,x.default)(T,b),(0,h.default)(T,b.once),T},S=function(){T=(0,R.default)(),E()},C=function(){T.forEach(function(k,X){k.node.removeAttribute("data-aos"),k.node.removeAttribute("data-aos-easing"),k.node.removeAttribute("data-aos-duration"),k.node.removeAttribute("data-aos-delay")})},D=function(k){return k===!0||k==="mobile"&&v.default.mobile()||k==="phone"&&v.default.phone()||k==="tablet"&&v.default.tablet()||typeof k=="function"&&k()===!0},O=function(k){b=a(b,k),T=(0,R.default)();var X=document.all&&!window.atob;return D(b.disable)||X?C():(b.disableMutationObserver||p.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),b.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?E(!0):b.startEvent==="load"?window.addEventListener(b.startEvent,function(){E(!0)}):document.addEventListener(b.startEvent,function(){E(!0)}),window.addEventListener("resize",(0,d.default)(E,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,d.default)(E,b.debounceDelay,!0)),window.addEventListener("scroll",(0,l.default)(function(){(0,h.default)(T,b.once)},b.throttleDelay)),b.disableMutationObserver||p.default.ready("[data-aos]",S),T)};n.exports={init:O,refresh:E,refreshHard:S}},function(n,i){},,,,,function(n,i){(function(r){function s(D,O,k){function X(I){var Ke=L,Ne=se;return L=se=void 0,pe=I,Z=D.apply(Ne,Ke)}function G(I){return pe=I,ce=setTimeout(V,O),Ie?X(I):Z}function Q(I){var Ke=I-de,Ne=I-pe,Ve=O-Ke;return Le?S(Ve,q-Ne):Ve}function U(I){var Ke=I-de,Ne=I-pe;return de===void 0||Ke>=O||Ke<0||Le&&Ne>=q}function V(){var I=C();return U(I)?H(I):void(ce=setTimeout(V,Q(I)))}function H(I){return ce=void 0,Pe&&L?X(I):(L=se=void 0,Z)}function ee(){ce!==void 0&&clearTimeout(ce),pe=0,L=de=se=ce=void 0}function ie(){return ce===void 0?Z:H(C())}function Ce(){var I=C(),Ke=U(I);if(L=arguments,se=this,de=I,Ke){if(ce===void 0)return G(de);if(Le)return ce=setTimeout(V,O),X(de)}return ce===void 0&&(ce=setTimeout(V,O)),Z}var L,se,q,Z,ce,de,pe=0,Ie=!1,Le=!1,Pe=!0;if(typeof D!="function")throw new TypeError(f);return O=u(O)||0,o(k)&&(Ie=!!k.leading,Le="maxWait"in k,q=Le?E(u(k.maxWait)||0,O):q,Pe="trailing"in k?!!k.trailing:Pe),Ce.cancel=ee,Ce.flush=ie,Ce}function a(D,O,k){var X=!0,G=!0;if(typeof D!="function")throw new TypeError(f);return o(k)&&(X="leading"in k?!!k.leading:X,G="trailing"in k?!!k.trailing:G),s(D,O,{leading:X,maxWait:O,trailing:G})}function o(D){var O=typeof D>"u"?"undefined":d(D);return!!D&&(O=="object"||O=="function")}function c(D){return!!D&&(typeof D>"u"?"undefined":d(D))=="object"}function l(D){return(typeof D>"u"?"undefined":d(D))=="symbol"||c(D)&&b.call(D)==m}function u(D){if(typeof D=="number")return D;if(l(D))return p;if(o(D)){var O=typeof D.valueOf=="function"?D.valueOf():D;D=o(O)?O+"":O}if(typeof D!="string")return D===0?D:+D;D=D.replace(v,"");var k=h.test(D);return k||_.test(D)?x(D.slice(2),k?2:8):g.test(D)?p:+D}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},f="Expected a function",p=NaN,m="[object Symbol]",v=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,_=/^0o[0-7]+$/i,x=parseInt,y=(typeof r>"u"?"undefined":d(r))=="object"&&r&&r.Object===Object&&r,R=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,T=y||R||Function("return this")(),A=Object.prototype,b=A.toString,E=Math.max,S=Math.min,C=function(){return T.Date.now()};n.exports=a}).call(i,function(){return this}())},function(n,i){(function(r){function s(C,D,O){function k(Pe){var I=Ce,Ke=L;return Ce=L=void 0,de=Pe,q=C.apply(Ke,I)}function X(Pe){return de=Pe,Z=setTimeout(U,D),pe?k(Pe):q}function G(Pe){var I=Pe-ce,Ke=Pe-de,Ne=D-I;return Ie?E(Ne,se-Ke):Ne}function Q(Pe){var I=Pe-ce,Ke=Pe-de;return ce===void 0||I>=D||I<0||Ie&&Ke>=se}function U(){var Pe=S();return Q(Pe)?V(Pe):void(Z=setTimeout(U,G(Pe)))}function V(Pe){return Z=void 0,Le&&Ce?k(Pe):(Ce=L=void 0,q)}function H(){Z!==void 0&&clearTimeout(Z),de=0,Ce=ce=L=Z=void 0}function ee(){return Z===void 0?q:V(S())}function ie(){var Pe=S(),I=Q(Pe);if(Ce=arguments,L=this,ce=Pe,I){if(Z===void 0)return X(ce);if(Ie)return Z=setTimeout(U,D),k(ce)}return Z===void 0&&(Z=setTimeout(U,D)),q}var Ce,L,se,q,Z,ce,de=0,pe=!1,Ie=!1,Le=!0;if(typeof C!="function")throw new TypeError(d);return D=l(D)||0,a(O)&&(pe=!!O.leading,Ie="maxWait"in O,se=Ie?b(l(O.maxWait)||0,D):se,Le="trailing"in O?!!O.trailing:Le),ie.cancel=H,ie.flush=ee,ie}function a(C){var D=typeof C>"u"?"undefined":u(C);return!!C&&(D=="object"||D=="function")}function o(C){return!!C&&(typeof C>"u"?"undefined":u(C))=="object"}function c(C){return(typeof C>"u"?"undefined":u(C))=="symbol"||o(C)&&A.call(C)==p}function l(C){if(typeof C=="number")return C;if(c(C))return f;if(a(C)){var D=typeof C.valueOf=="function"?C.valueOf():C;C=a(D)?D+"":D}if(typeof C!="string")return C===0?C:+C;C=C.replace(m,"");var O=g.test(C);return O||h.test(C)?_(C.slice(2),O?2:8):v.test(C)?f:+C}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},d="Expected a function",f=NaN,p="[object Symbol]",m=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,h=/^0o[0-7]+$/i,_=parseInt,x=(typeof r>"u"?"undefined":u(r))=="object"&&r&&r.Object===Object&&r,y=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,R=x||y||Function("return this")(),T=Object.prototype,A=T.toString,b=Math.max,E=Math.min,S=function(){return R.Date.now()};n.exports=s}).call(i,function(){return this}())},function(n,i){function r(u){var d=void 0,f=void 0;for(d=0;d<u.length;d+=1)if(f=u[d],f.dataset&&f.dataset.aos||f.children&&r(f.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!s()}function o(u,d){var f=window.document,p=s(),m=new p(c);l=d,m.observe(f.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function c(u){u&&u.forEach(function(d){var f=Array.prototype.slice.call(d.addedNodes),p=Array.prototype.slice.call(d.removedNodes),m=f.concat(p);if(r(m))return l()})}Object.defineProperty(i,"__esModule",{value:!0});var l=function(){};i.default={isSupported:a,ready:o}},function(n,i){function r(f,p){if(!(f instanceof p))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var a=function(){function f(p,m){for(var v=0;v<m.length;v++){var g=m[v];g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(p,g.key,g)}}return function(p,m,v){return m&&f(p.prototype,m),v&&f(p,v),p}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=function(){function f(){r(this,f)}return a(f,[{key:"phone",value:function(){var p=s();return!(!o.test(p)&&!c.test(p.substr(0,4)))}},{key:"mobile",value:function(){var p=s();return!(!l.test(p)&&!u.test(p.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),f}();i.default=new d},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(a,o,c){var l=a.node.getAttribute("data-aos-once");o>a.position?a.node.classList.add("aos-animate"):typeof l<"u"&&(l==="false"||!c&&l!=="true")&&a.node.classList.remove("aos-animate")},s=function(a,o){var c=window.pageYOffset,l=window.innerHeight;a.forEach(function(u,d){r(u,l+c,o)})};i.default=s},function(n,i,r){function s(l){return l&&l.__esModule?l:{default:l}}Object.defineProperty(i,"__esModule",{value:!0});var a=r(12),o=s(a),c=function(l,u){return l.forEach(function(d,f){d.node.classList.add("aos-init"),d.position=(0,o.default)(d.node,u.offset)}),l};i.default=c},function(n,i,r){function s(l){return l&&l.__esModule?l:{default:l}}Object.defineProperty(i,"__esModule",{value:!0});var a=r(13),o=s(a),c=function(l,u){var d=0,f=0,p=window.innerHeight,m={offset:l.getAttribute("data-aos-offset"),anchor:l.getAttribute("data-aos-anchor"),anchorPlacement:l.getAttribute("data-aos-anchor-placement")};switch(m.offset&&!isNaN(m.offset)&&(f=parseInt(m.offset)),m.anchor&&document.querySelectorAll(m.anchor)&&(l=document.querySelectorAll(m.anchor)[0]),d=(0,o.default)(l).top,m.anchorPlacement){case"top-bottom":break;case"center-bottom":d+=l.offsetHeight/2;break;case"bottom-bottom":d+=l.offsetHeight;break;case"top-center":d+=p/2;break;case"bottom-center":d+=p/2+l.offsetHeight;break;case"center-center":d+=p/2+l.offsetHeight/2;break;case"top-top":d+=p;break;case"bottom-top":d+=l.offsetHeight+p;break;case"center-top":d+=l.offsetHeight/2+p}return m.anchorPlacement||m.offset||isNaN(u)||(f=u),d+f};i.default=c},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){for(var a=0,o=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)a+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),o+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:o,left:a}};i.default=r},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(a){return{node:a}})};i.default=r}])})})(P0);var iy=P0.exports;const qi=fm(iy),ry="experience",sy={role:"Full-Stack Web Developer",employment:"Freelance / Independent",location:"Île-de-France, France",start:"01 / 2025",end:"Present",note:"Client missions and product work run in parallel."},oy=[{id:"mentormatic",name:"Mentormatic",tagline:"B2B mentoring & coaching SaaS",context:"Team of 4 developers",start:"01 / 2025",end:"04 / 2026",link:{label:"mentormatic.com",href:"https://mentormatic.com"},highlights:["Full-stack work on a B2B SaaS in production — Astro SSR, React and Alpine.js over Moleculer microservices — built in TDD and BDD/Gherkin, with feature flags, Vitest and Playwright suites, and Docker → Google Cloud Run deployments.","Designed and shipped the access-controlled note sharing system: a per-role permission matrix, sharing scoped to a programme or session, and automatic revocation of access on events.","Built an in-house Alpine.js lazy-loading layer for ~40 components using dynamic imports and skeleton-first rendering, cutting the initial JS bundle. Adopted by the whole team.","Led the response to an npm supply-chain malware incident: forensic investigation of a hijacked Git commit, then detection tooling and a blocking pre-commit hook."]},{id:"maag",name:"MAAG",tagline:"Editorial media platform",context:"Solo build, end to end",start:"2026",end:"Present",link:{label:"maagfrance.fr",href:"https://maagfrance.fr"},highlights:["Designed and built an online media outlet now in production entirely on my own — front end, API and infrastructure: 67,000 lines, 187 Astro components, 20 REST controllers.","Custom CMS driving 8 editorial content types through 51 admin screens, with a block editor of 15 typed block types including composite layouts.","Editorial placement engine: the composition of the home page is itself an editable entity, each slot switching between manual selection and rule-based auto-fill.","Express.js API on Firebase / Firestore, Sharp image pipeline, 9 versioned migrations (dry-run / apply), Stripe subscriptions, GDPR banner, technical SEO, Docker → Cloud Run with GitHub Actions CI."]},{id:"robofleet",name:"Robofleet",tagline:"Robot fleet management",context:"Freelance mission · team of 3",start:"09 / 2025",end:"11 / 2025",highlights:["Management and monitoring interface built with React 18 and Mantine Core.","Stripe billing with recurring subscriptions, Prisma data modelling, and a GitHub Actions CI/CD pipeline deploying over SSH."]},{id:"wurkspaces",name:"wurkspaces.dev",tagline:"Bilingual showcase site",context:"Client mission",start:"2025",link:{label:"wurkspaces.dev",href:"https://www.wurkspaces.dev"},highlights:["Bilingual (FR / EN) showcase site in Astro, Alpine.js and Tailwind, with a GDPR cookie banner built as a reusable Astro module."]}],ay={title:"Previous career — production & client relations",note:"Nearly two decades of production management and client relations before moving into code.",items:[{role:"Client relations officer",company:"Executive Hotel",location:"Gennevilliers, France",period:"2018 – 2022"},{role:"Production assistant, film & TV",company:"Ezra, Eaux Vives, Fechner",location:"Paris, France",period:"2017 – 2018"},{role:"CGI production & assistant director",company:"Studio GRAD, Ball-Park",location:"Moscow, Russia",period:"2010 – 2015"},{role:"Marketing manager",company:"Geodis RUS",location:"Moscow, Russia",period:"2005 – 2010"}]},ly={title:ry,current:sy,projects:oy,previous:ay},{title:cy,current:Ur,projects:uy,previous:yc}=ly,dy=()=>(pt.useEffect(()=>{qi.init({duration:1e3})},[]),N.jsxs("section",{id:"experience",className:"section_experience",children:[N.jsxs("h2",{className:"experience_section_title",children:[cy,N.jsx("span",{className:"brackets",children:"()"})]}),N.jsxs("div",{"data-aos":"fade-up",className:"exp_current",children:[N.jsx("h3",{className:"exp_current_role",children:Ur.role}),N.jsx("h4",{className:"exp_current_employment",children:Ur.employment}),N.jsxs("p",{className:"exp_current_period",children:[Ur.start," — ",Ur.end," · ",Ur.location]}),N.jsx("p",{className:"exp_current_note",children:Ur.note})]}),N.jsx("div",{className:"timeline",children:uy.map(t=>N.jsxs("div",{"data-aos":"fade-up",className:"timeline-item",children:[N.jsx("div",{className:"circle"}),N.jsxs("div",{className:"content",children:[N.jsxs("div",{className:"banner",children:[N.jsx("div",{className:"date left",children:N.jsx("span",{children:t.start})}),t.end&&N.jsxs(N.Fragment,{children:[N.jsx("div",{className:"connector"}),N.jsx("div",{className:"date right",children:N.jsx("span",{children:t.end})})]})]}),N.jsx("h3",{children:t.name}),N.jsx("h5",{children:t.tagline}),N.jsxs("p",{className:"exp_country",children:[t.context,t.link&&N.jsxs(N.Fragment,{children:[" · ",N.jsx("a",{href:t.link.href,target:"_blank",rel:"noreferrer",className:"exp_link",children:t.link.label})]})]}),t.highlights.map(e=>N.jsx("p",{children:e},e))]})]},t.id))}),N.jsxs("div",{"data-aos":"fade-up",className:"exp_previous",children:[N.jsx("h3",{className:"exp_previous_title",children:yc.title}),N.jsx("p",{className:"exp_previous_note",children:yc.note}),N.jsx("ul",{className:"exp_previous_list",children:yc.items.map(t=>N.jsxs("li",{className:"exp_previous_item",children:[N.jsx("span",{className:"exp_previous_period",children:t.period}),N.jsx("span",{className:"exp_previous_role",children:t.role}),N.jsxs("span",{className:"exp_previous_company",children:[t.company," · ",t.location]})]},t.role))})]})]})),fy=[{href:"#skills",label:"Tech Stack"},{href:"#skill_cloud",label:"Skills Cloud"},{href:"#projects",label:"Projects"},{href:"#experience",label:"Experience"},{href:"#education",label:"Education"},{href:"#contact",label:"Contact"}],L0={links:fy},hy=()=>N.jsx("nav",{id:"desktop_nav",children:L0.links.map(t=>N.jsx("a",{href:t.href,children:t.label},t.href))}),Vu=({width:t=71,height:e=46})=>N.jsx("svg",{width:t,height:e,viewBox:"0 0 71 46",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"logo","aria-hidden":"true",children:N.jsx("path",{d:"M0.90625 46V0.5H12.6875C14.7917 0.5 16.7604 0.760417 18.5938 1.28125C20.4271 1.78125 22.0938 2.5 23.5938 3.4375C24.9062 4.20833 26.0729 5.15625 27.0938 6.28125C28.1354 7.38542 29.0417 8.59375 29.8125 9.90625C30.7083 11.5104 31.3958 13.2812 31.875 15.2188C32.375 17.1562 32.625 19.2188 32.625 21.4062V25.1562C32.625 27.2604 32.3958 29.25 31.9375 31.125C31.4792 33 30.8333 34.7188 30 36.2812C29.2083 37.6771 28.2812 38.9688 27.2188 40.1562C26.1562 41.3229 24.9896 42.3021 23.7188 43.0938C22.2396 44.0312 20.6042 44.75 18.8125 45.25C17.0417 45.75 15.1458 46 13.125 46H0.90625ZM9.75 7.625V38.9375H13.125C14.2083 38.9375 15.2188 38.8021 16.1562 38.5312C17.0938 38.2604 17.9479 37.8646 18.7188 37.3438C19.5104 36.8021 20.2188 36.1146 20.8438 35.2812C21.4896 34.4271 22.0417 33.4375 22.5 32.3125C22.875 31.3333 23.1562 30.25 23.3438 29.0625C23.5521 27.8542 23.6562 26.5521 23.6562 25.1562V21.3438C23.6562 20.0312 23.5521 18.7917 23.3438 17.625C23.1562 16.4375 22.875 15.3542 22.5 14.375C22.0417 13.2083 21.4375 12.1667 20.6875 11.25C19.9583 10.3333 19.1042 9.58333 18.125 9C17.375 8.5625 16.5417 8.22917 15.625 8C14.7292 7.75 13.75 7.625 12.6875 7.625H9.75ZM50.3125 0.5L54.625 17.5938L59.5312 0.5H70.4375V46H62.375V32.5312L62.75 11.25L56.7812 31H52.4375L47.0938 12.0938L47.4688 32.5312V46H39.4062V0.5H50.3125Z"})}),py=()=>{const[t,e]=pt.useState(!1);return pt.useEffect(()=>{if(!t)return;const n=i=>{i.key==="Escape"&&e(!1)};return document.addEventListener("keydown",n),document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",()=>{document.removeEventListener("keydown",n),document.body.style.overflow="",document.documentElement.style.overflow=""}},[t]),N.jsxs("div",{className:"mobile_nav_wrapper",children:[N.jsx("button",{type:"button",className:"mobile_nav_toggle","aria-label":"Open menu","aria-expanded":t,onClick:()=>e(!0),children:N.jsx("div",{className:"mobile_menu",children:N.jsxs("svg",{width:"30px",height:"30px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[N.jsx("path",{d:"M8 12H8.00901M12.0045 12H12.0135M15.991 12H16",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),N.jsx("circle",{cx:"12",cy:"12",r:"10",strokeWidth:"1.5"})]})})}),t&&T0.createPortal(N.jsxs("nav",{id:"mobile_nav",className:"mobile_nav",children:[N.jsxs("div",{className:"mobile_close_wrapper",children:[N.jsx("div",{className:"mobile_logo",children:N.jsx(Vu,{width:35.5,height:23})}),N.jsx("button",{type:"button",className:"mobile_close_button","aria-label":"Close menu",onClick:()=>e(!1),children:N.jsx("svg",{width:"40px",height:"40px",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:N.jsx("path",{d:"M9.5 15.5L12.5 12.5M12.5 12.5L15.5 9.5M12.5 12.5L9.5 9.5M12.5 12.5L15.5 15.5M20.5 12.5C20.5 16.9183 16.9183 20.5 12.5 20.5C8.08172 20.5 4.5 16.9183 4.5 12.5C4.5 8.08172 8.08172 4.5 12.5 4.5C16.9183 4.5 20.5 8.08172 20.5 12.5Z",stroke:"currentColor",strokeWidth:"1.2"})})})]}),L0.links.map(n=>N.jsx("div",{className:"mobile_link_wrapper",children:N.jsx("a",{href:n.href,onClick:()=>e(!1),children:n.label})},n.href))]}),document.body)]})},my=()=>N.jsxs("header",{children:[N.jsxs("div",{className:"header_container-desktop",children:[N.jsx("div",{className:"logo_container",children:N.jsx("a",{href:"/index.html",children:N.jsx(Vu,{})})}),N.jsx(hy,{})]}),N.jsxs("div",{className:"header_container-mobile",children:[N.jsx("div",{className:"logo_container",children:N.jsx("a",{href:"/index.html",children:N.jsx(Vu,{})})}),N.jsx(py,{})]})]}),gy="stack",_y=[{name:"TypeScript",icon:"ts"},{name:"React",icon:"react"},{name:"Astro",icon:"astro"},{name:"Alpine JS",icon:"alpinejs"},{name:"Tailwind",icon:"tailwind"},{name:"HTML5",icon:"html"},{name:"CSS3",icon:"css"},{name:"JavaScript",icon:"js"},{name:"Three.js",icon:"threejs"},{name:"Node",icon:"nodejs"},{name:"Express",icon:"express"},{name:"Moleculer",icon:"moleculer",local:!0},{name:"Prisma",icon:"prisma"},{name:"Firebase",icon:"firebase"},{name:"Docker",icon:"docker"},{name:"Google Cloud",icon:"gcp"},{name:"GitHub Actions",icon:"githubactions"},{name:"Linux",icon:"linux"},{name:"Vite",icon:"vite"},{name:"Vitest",icon:"vitest"},{name:"npm",icon:"npm"},{name:"Git",icon:"git"},{name:"GitHub",icon:"github"},{name:"Figma",icon:"figma"}],vy="Also working with",xy=["Stripe API","Playwright","WebSocket / socket.io","Zod","JWT","MJML","Mantine Core","DaisyUI","REST API","GDPR / RGPD","BDD / Gherkin","Spec-Driven Development","Technical SEO","Monorepo (npm workspaces)"],yy={title:gy,items:_y,alsoTitle:vy,also:xy},Sy="/react_cv_v2/assets/moleculer-DLFmdQKB.png",{title:My,items:tp,alsoTitle:Ey,also:wy}=yy,Ty={moleculer:Sy},Ay=t=>t.local?Ty[t.icon]:`https://skillicons.dev/icons?i=${t.icon}`,pa=3,Cy=Array.from({length:Math.ceil(tp.length/pa)},(t,e)=>tp.slice(e*pa,e*pa+pa)),by=()=>(pt.useEffect(()=>{qi.init({duration:1e3})},[]),N.jsx("section",{id:"skills",className:"section_skills",children:N.jsxs("article",{children:[N.jsxs("h2",{className:"h2_skills",children:[My,N.jsx("span",{className:"brackets",children:"()"})]}),N.jsx("div",{className:"skills_container",children:Cy.map((t,e)=>N.jsx("div",{"data-aos":e%2===0?"slide-right":"slide-left",className:"skillsSet",children:t.map(n=>N.jsxs("div",{className:"skill",children:[N.jsx("p",{className:"p_to_center",children:N.jsx("img",{src:Ay(n),alt:n.name,width:"48",height:"48",loading:"lazy"})}),N.jsx("p",{children:n.name})]},n.name))},t[0].name))}),N.jsxs("div",{"data-aos":"fade-up",className:"skills_also",children:[N.jsx("p",{className:"skills_also_title",children:Ey}),N.jsx("ul",{className:"skills_also_list",children:wy.map(t=>N.jsx("li",{children:t},t))})]})]})}));/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wf="170",_s={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ry=0,np=1,Py=2,D0=1,Ly=2,ri=3,Ki=0,rn=1,jn=2,ji=0,vs=1,ip=2,rp=3,sp=4,Dy=5,dr=100,Ny=101,Iy=102,Uy=103,Oy=104,Fy=200,ky=201,zy=202,By=203,Gu=204,Wu=205,Hy=206,Vy=207,Gy=208,Wy=209,jy=210,Xy=211,Yy=212,$y=213,qy=214,ju=0,Xu=1,Yu=2,bs=3,$u=4,qu=5,Ku=6,Zu=7,N0=0,Ky=1,Zy=2,Xi=0,Qy=1,Jy=2,e1=3,t1=4,n1=5,i1=6,r1=7,I0=300,Rs=301,Ps=302,Qu=303,Ju=304,Vl=306,ed=1e3,gr=1001,td=1002,kn=1003,s1=1004,ma=1005,Xn=1006,Sc=1007,_r=1008,_i=1009,U0=1010,O0=1011,Oo=1012,Tf=1013,Ar=1014,ci=1015,Wo=1016,Af=1017,Cf=1018,Ls=1020,F0=35902,k0=1021,z0=1022,Un=1023,B0=1024,H0=1025,xs=1026,Ds=1027,V0=1028,bf=1029,G0=1030,Rf=1031,Pf=1033,qa=33776,Ka=33777,Za=33778,Qa=33779,nd=35840,id=35841,rd=35842,sd=35843,od=36196,ad=37492,ld=37496,cd=37808,ud=37809,dd=37810,fd=37811,hd=37812,pd=37813,md=37814,gd=37815,_d=37816,vd=37817,xd=37818,yd=37819,Sd=37820,Md=37821,Ja=36492,Ed=36494,wd=36495,W0=36283,Td=36284,Ad=36285,Cd=36286,o1=3200,a1=3201,l1=0,c1=1,Ii="",_n="srgb",Fs="srgb-linear",Gl="linear",tt="srgb",Or=7680,op=519,u1=512,d1=513,f1=514,j0=515,h1=516,p1=517,m1=518,g1=519,ap=35044,lp="300 es",ui=2e3,Tl=2001;class Lr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cp=1234567;const _o=Math.PI/180,Fo=180/Math.PI;function ks(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Ht(t,e,n){return Math.max(e,Math.min(n,t))}function Lf(t,e){return(t%e+e)%e}function _1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function v1(t,e,n){return t!==e?(n-t)/(e-t):0}function vo(t,e,n){return(1-n)*t+n*e}function x1(t,e,n,i){return vo(t,e,1-Math.exp(-n*i))}function y1(t,e=1){return e-Math.abs(Lf(t,e*2)-e)}function S1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function M1(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function E1(t,e){return t+Math.floor(Math.random()*(e-t+1))}function w1(t,e){return t+Math.random()*(e-t)}function T1(t){return t*(.5-Math.random())}function A1(t){t!==void 0&&(cp=t);let e=cp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function C1(t){return t*_o}function b1(t){return t*Fo}function R1(t){return(t&t-1)===0&&t!==0}function P1(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function L1(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function D1(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),c=a(n/2),l=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),p=s((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":t.set(o*u,c*d,c*f,o*l);break;case"YZY":t.set(c*f,o*u,c*d,o*l);break;case"ZXZ":t.set(c*d,c*f,o*u,o*l);break;case"XZX":t.set(o*u,c*m,c*p,o*l);break;case"YXY":t.set(c*p,o*u,c*m,o*l);break;case"ZYZ":t.set(c*m,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Gt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const X0={DEG2RAD:_o,RAD2DEG:Fo,generateUUID:ks,clamp:Ht,euclideanModulo:Lf,mapLinear:_1,inverseLerp:v1,lerp:vo,damp:x1,pingpong:y1,smoothstep:S1,smootherstep:M1,randInt:E1,randFloat:w1,randFloatSpread:T1,seededRandom:A1,degToRad:C1,radToDeg:b1,isPowerOfTwo:R1,ceilPowerOfTwo:P1,floorPowerOfTwo:L1,setQuaternionFromProperEuler:D1,normalize:Gt,denormalize:Kr};class Ge{constructor(e=0,n=0){Ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,a,o,c,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],p=i[5],m=i[8],v=r[0],g=r[3],h=r[6],_=r[1],x=r[4],y=r[7],R=r[2],T=r[5],A=r[8];return s[0]=a*v+o*_+c*R,s[3]=a*g+o*x+c*T,s[6]=a*h+o*y+c*A,s[1]=l*v+u*_+d*R,s[4]=l*g+u*x+d*T,s[7]=l*h+u*y+d*A,s[2]=f*v+p*_+m*R,s[5]=f*g+p*x+m*T,s[8]=f*h+p*y+m*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,f=o*c-u*s,p=l*s-a*c,m=n*d+i*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(u*n-r*c)*v,e[5]=(r*s-o*n)*v,e[6]=p*v,e[7]=(i*c-l*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Mc.makeScale(e,n)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mc=new ze;function Y0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ko(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function N1(){const t=ko("canvas");return t.style.display="block",t}const up={};function ro(t){t in up||(up[t]=!0,console.warn(t))}function I1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function U1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function O1(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===tt&&(t.r=fi(t.r),t.g=fi(t.g),t.b=fi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===tt&&(t.r=ys(t.r),t.g=ys(t.g),t.b=ys(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Ii?Gl:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function fi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ys(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const dp=[.64,.33,.3,.6,.15,.06],fp=[.2126,.7152,.0722],hp=[.3127,.329],pp=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mp=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[Fs]:{primaries:dp,whitePoint:hp,transfer:Gl,toXYZ:pp,fromXYZ:mp,luminanceCoefficients:fp,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:dp,whitePoint:hp,transfer:tt,toXYZ:pp,fromXYZ:mp,luminanceCoefficients:fp,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}});let Fr;class F1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fr===void 0&&(Fr=ko("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ko("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(fi(n[i]/255)*255):n[i]=fi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let k1=0;class $0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=ks(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ec(r[a].image)):s.push(Ec(r[a]))}else s=Ec(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ec(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?F1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let z1=0;class Yt extends Lr{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=gr,r=gr,s=Xn,a=_r,o=Un,c=_i,l=Yt.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=ks(),this.name="",this.source=new $0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==I0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case gr:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case gr:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=I0;Yt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,n=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],m=c[9],v=c[2],g=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(l+1)/2,y=(p+1)/2,R=(h+1)/2,T=(u+f)/4,A=(d+v)/4,b=(m+g)/4;return x>y&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=T/i,s=A/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=b/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(d-v)/_,this.z=(f-u)/_,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class B1 extends Lr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new $0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends B1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class q0 extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H1 extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kn,this.minFilter=kn,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class br{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];if(o===0){e[n+0]=c,e[n+1]=l,e[n+2]=u,e[n+3]=d;return}if(o===1){e[n+0]=f,e[n+1]=p,e[n+2]=m,e[n+3]=v;return}if(d!==v||c!==f||l!==p||u!==m){let g=1-o;const h=c*f+l*p+u*m+d*v,_=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const R=Math.sqrt(x),T=Math.atan2(R,h*_);g=Math.sin(g*T)/R,o=Math.sin(o*T)/R}const y=o*_;if(c=c*g+f*y,l=l*g+p*y,u=u*g+m*y,d=d*g+v*y,g===1-o){const R=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=R,l*=R,u*=R,d*=R}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[a],f=s[a+1],p=s[a+2],m=s[a+3];return e[n]=o*m+u*d+c*p-l*f,e[n+1]=c*m+u*f+l*d-o*p,e[n+2]=l*m+u*p+o*f-c*d,e[n+3]=u*m-o*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),d=o(s/2),f=c(i/2),p=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=f*u*d+l*p*m,this._y=l*p*d-f*u*m,this._z=l*u*m+f*p*d,this._w=l*u*d-f*p*m;break;case"YXZ":this._x=f*u*d+l*p*m,this._y=l*p*d-f*u*m,this._z=l*u*m-f*p*d,this._w=l*u*d+f*p*m;break;case"ZXY":this._x=f*u*d-l*p*m,this._y=l*p*d+f*u*m,this._z=l*u*m+f*p*d,this._w=l*u*d-f*p*m;break;case"ZYX":this._x=f*u*d-l*p*m,this._y=l*p*d+f*u*m,this._z=l*u*m-f*p*d,this._w=l*u*d+f*p*m;break;case"YZX":this._x=f*u*d+l*p*m,this._y=l*p*d+f*u*m,this._z=l*u*m-f*p*d,this._w=l*u*d-f*p*m;break;case"XZY":this._x=f*u*d-l*p*m,this._y=l*p*d-f*u*m,this._z=l*u*m+f*p*d,this._w=l*u*d+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-n)*u)/l,f=Math.sin(n*u)/l;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+c*l+a*d-o*u,this.y=i+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wc.copy(this).projectOnVector(e),this.sub(wc)}reflect(e){return this.sub(wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wc=new j,gp=new br;class jo{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),_a.subVectors(this.max,Ks),kr.subVectors(e.a,Ks),zr.subVectors(e.b,Ks),Br.subVectors(e.c,Ks),Ei.subVectors(zr,kr),wi.subVectors(Br,zr),nr.subVectors(kr,Br);let n=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-nr.z,nr.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,nr.z,0,-nr.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-nr.y,nr.x,0];return!Tc(n,kr,zr,Br,_a)||(n=[1,0,0,0,1,0,0,0,1],!Tc(n,kr,zr,Br,_a))?!1:(va.crossVectors(Ei,wi),n=[va.x,va.y,va.z],Tc(n,kr,zr,Br,_a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new j,new j,new j,new j,new j,new j,new j,new j],bn=new j,ga=new jo,kr=new j,zr=new j,Br=new j,Ei=new j,wi=new j,nr=new j,Ks=new j,_a=new j,va=new j,ir=new j;function Tc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ir.fromArray(t,s);const o=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),c=e.dot(ir),l=n.dot(ir),u=i.dot(ir);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const V1=new jo,Zs=new j,Ac=new j;class Df{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):V1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const n=Zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Ac)),this.expandByPoint(Zs.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new j,Cc=new j,xa=new j,Ti=new j,bc=new j,ya=new j,Rc=new j;class K0{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,n),ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Cc.copy(e).add(n).multiplyScalar(.5),xa.copy(n).sub(e).normalize(),Ti.copy(this.origin).sub(Cc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(xa),o=Ti.dot(this.direction),c=-Ti.dot(xa),l=Ti.lengthSq(),u=Math.abs(1-a*a);let d,f,p,m;if(u>0)if(d=a*c-o,f=a*o-c,m=s*u,d>=0)if(f>=-m)if(f<=m){const v=1/u;d*=v,f*=v,p=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Cc).addScaledVector(xa,f),p}intersectSphere(e,n){ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,n,i,r,s){bc.subVectors(n,e),ya.subVectors(i,e),Rc.crossVectors(bc,ya);let a=this.direction.dot(Rc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);const c=o*this.direction.dot(ya.crossVectors(Ti,ya));if(c<0)return null;const l=o*this.direction.dot(bc.cross(Ti));if(l<0||c+l>a)return null;const u=-o*Ti.dot(Rc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,a,o,c,l,u,d,f,p,m,v,g){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,u,d,f,p,m,v,g)}set(e,n,i,r,s,a,o,c,l,u,d,f,p,m,v,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=m,h[11]=v,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),a=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*d,m=o*u,v=o*d;n[0]=c*u,n[4]=-c*d,n[8]=l,n[1]=p+m*l,n[5]=f-v*l,n[9]=-o*c,n[2]=v-f*l,n[6]=m+p*l,n[10]=a*c}else if(e.order==="YXZ"){const f=c*u,p=c*d,m=l*u,v=l*d;n[0]=f+v*o,n[4]=m*o-p,n[8]=a*l,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=p*o-m,n[6]=v+f*o,n[10]=a*c}else if(e.order==="ZXY"){const f=c*u,p=c*d,m=l*u,v=l*d;n[0]=f-v*o,n[4]=-a*d,n[8]=m+p*o,n[1]=p+m*o,n[5]=a*u,n[9]=v-f*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const f=a*u,p=a*d,m=o*u,v=o*d;n[0]=c*u,n[4]=m*l-p,n[8]=f*l+v,n[1]=c*d,n[5]=v*l+f,n[9]=p*l-m,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,m=o*c,v=o*l;n[0]=c*u,n[4]=v-f*d,n[8]=m*d+p,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=p*d+m,n[10]=f-v*d}else if(e.order==="XZY"){const f=a*c,p=a*l,m=o*c,v=o*l;n[0]=c*u,n[4]=-d,n[8]=l*u,n[1]=f*d+v,n[5]=a*u,n[9]=p*d-m,n[2]=m*d-p,n[6]=o*u,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G1,e,W1)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Ai.crossVectors(i,on),Ai.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ai.crossVectors(i,on)),Ai.normalize(),Sa.crossVectors(on,Ai),r[0]=Ai.x,r[4]=Sa.x,r[8]=on.x,r[1]=Ai.y,r[5]=Sa.y,r[9]=on.y,r[2]=Ai.z,r[6]=Sa.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],p=i[13],m=i[2],v=i[6],g=i[10],h=i[14],_=i[3],x=i[7],y=i[11],R=i[15],T=r[0],A=r[4],b=r[8],E=r[12],S=r[1],C=r[5],D=r[9],O=r[13],k=r[2],X=r[6],G=r[10],Q=r[14],U=r[3],V=r[7],H=r[11],ee=r[15];return s[0]=a*T+o*S+c*k+l*U,s[4]=a*A+o*C+c*X+l*V,s[8]=a*b+o*D+c*G+l*H,s[12]=a*E+o*O+c*Q+l*ee,s[1]=u*T+d*S+f*k+p*U,s[5]=u*A+d*C+f*X+p*V,s[9]=u*b+d*D+f*G+p*H,s[13]=u*E+d*O+f*Q+p*ee,s[2]=m*T+v*S+g*k+h*U,s[6]=m*A+v*C+g*X+h*V,s[10]=m*b+v*D+g*G+h*H,s[14]=m*E+v*O+g*Q+h*ee,s[3]=_*T+x*S+y*k+R*U,s[7]=_*A+x*C+y*X+R*V,s[11]=_*b+x*D+y*G+R*H,s[15]=_*E+x*O+y*Q+R*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],p=e[14],m=e[3],v=e[7],g=e[11],h=e[15];return m*(+s*c*d-r*l*d-s*o*f+i*l*f+r*o*p-i*c*p)+v*(+n*c*p-n*l*f+s*a*f-r*a*p+r*l*u-s*c*u)+g*(+n*l*d-n*o*p-s*a*d+i*a*p+s*o*u-i*l*u)+h*(-r*o*u-n*c*d+n*o*f+r*a*d-i*a*f+i*c*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[12],v=e[13],g=e[14],h=e[15],_=d*g*l-v*f*l+v*c*p-o*g*p-d*c*h+o*f*h,x=m*f*l-u*g*l-m*c*p+a*g*p+u*c*h-a*f*h,y=u*v*l-m*d*l+m*o*p-a*v*p-u*o*h+a*d*h,R=m*d*c-u*v*c-m*o*f+a*v*f+u*o*g-a*d*g,T=n*_+i*x+r*y+s*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=_*A,e[1]=(v*f*s-d*g*s-v*r*p+i*g*p+d*r*h-i*f*h)*A,e[2]=(o*g*s-v*c*s+v*r*l-i*g*l-o*r*h+i*c*h)*A,e[3]=(d*c*s-o*f*s-d*r*l+i*f*l+o*r*p-i*c*p)*A,e[4]=x*A,e[5]=(u*g*s-m*f*s+m*r*p-n*g*p-u*r*h+n*f*h)*A,e[6]=(m*c*s-a*g*s-m*r*l+n*g*l+a*r*h-n*c*h)*A,e[7]=(a*f*s-u*c*s+u*r*l-n*f*l-a*r*p+n*c*p)*A,e[8]=y*A,e[9]=(m*d*s-u*v*s-m*i*p+n*v*p+u*i*h-n*d*h)*A,e[10]=(a*v*s-m*o*s+m*i*l-n*v*l-a*i*h+n*o*h)*A,e[11]=(u*o*s-a*d*s-u*i*l+n*d*l+a*i*p-n*o*p)*A,e[12]=R*A,e[13]=(u*v*r-m*d*r+m*i*f-n*v*f-u*i*g+n*d*g)*A,e[14]=(m*o*r-a*v*r-m*i*c+n*v*c+a*i*g-n*o*g)*A,e[15]=(a*d*r-u*o*r+u*i*c-n*d*c-a*i*f+n*o*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,d=o+o,f=s*l,p=s*u,m=s*d,v=a*u,g=a*d,h=o*d,_=c*l,x=c*u,y=c*d,R=i.x,T=i.y,A=i.z;return r[0]=(1-(v+h))*R,r[1]=(p+y)*R,r[2]=(m-x)*R,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(f+h))*T,r[6]=(g+_)*T,r[7]=0,r[8]=(m+x)*A,r[9]=(g-_)*A,r[10]=(1-(f+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const a=Hr.set(r[4],r[5],r[6]).length(),o=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const l=1/s,u=1/a,d=1/o;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,n.setFromRotationMatrix(Rn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ui){const c=this.elements,l=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,m;if(o===ui)p=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===Tl)p=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui){const c=this.elements,l=1/(n-e),u=1/(i-r),d=1/(a-s),f=(n+e)*l,p=(i+r)*u;let m,v;if(o===ui)m=(a+s)*d,v=-2*d;else if(o===Tl)m=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new j,Rn=new Et,G1=new j(0,0,0),W1=new j(1,1,1),Ai=new j,Sa=new j,on=new j,_p=new Et,vp=new br;class vi{constructor(e=0,n=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _p.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_p,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vp.setFromEuler(this),this.setFromQuaternion(vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class Z0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let j1=0;const xp=new j,Vr=new br,ti=new Et,Ma=new j,Qs=new j,X1=new j,Y1=new br,yp=new j(1,0,0),Sp=new j(0,1,0),Mp=new j(0,0,1),Ep={type:"added"},$1={type:"removed"},Gr={type:"childadded",child:null},Pc={type:"childremoved",child:null};class dn extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new j,n=new vi,i=new br,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new ze}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Z0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(yp,e)}rotateY(e){return this.rotateOnAxis(Sp,e)}rotateZ(e){return this.rotateOnAxis(Mp,e)}translateOnAxis(e,n){return xp.copy(e).applyQuaternion(this.quaternion),this.position.add(xp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(yp,e)}translateY(e){return this.translateOnAxis(Sp,e)}translateZ(e){return this.translateOnAxis(Mp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ma.copy(e):Ma.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Qs,Ma,this.up):ti.lookAt(Ma,Qs,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(ti),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ep),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent($1),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ep),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,X1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,Y1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}dn.DEFAULT_UP=new j(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new j,ni=new j,Lc=new j,ii=new j,Wr=new j,jr=new j,wp=new j,Dc=new j,Nc=new j,Ic=new j,Uc=new yt,Oc=new yt,Fc=new yt;class In{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ni.subVectors(i,n),Lc.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ni),c=Pn.dot(Lc),l=ni.dot(ni),u=ni.dot(Lc),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(l*c-o*u)*f,m=(a*u-o*c)*f;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ii.x),c.addScaledVector(a,ii.y),c.addScaledVector(o,ii.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Uc.setScalar(0),Oc.setScalar(0),Fc.setScalar(0),Uc.fromBufferAttribute(e,n),Oc.fromBufferAttribute(e,i),Fc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Uc,s.x),a.addScaledVector(Oc,s.y),a.addScaledVector(Fc,s.z),a}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ni.subVectors(e,n),Pn.cross(ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Pn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return In.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,i),jr.subVectors(s,i),Dc.subVectors(e,i);const c=Wr.dot(Dc),l=jr.dot(Dc);if(c<=0&&l<=0)return n.copy(i);Nc.subVectors(e,r);const u=Wr.dot(Nc),d=jr.dot(Nc);if(u>=0&&d<=u)return n.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(Wr,a);Ic.subVectors(e,s);const p=Wr.dot(Ic),m=jr.dot(Ic);if(m>=0&&p<=m)return n.copy(s);const v=p*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),n.copy(i).addScaledVector(jr,o);const g=u*m-p*d;if(g<=0&&d-u>=0&&p-m>=0)return wp.subVectors(s,r),o=(d-u)/(d-u+(p-m)),n.copy(r).addScaledVector(wp,o);const h=1/(g+v+f);return a=v*h,o=f*h,n.copy(i).addScaledVector(Wr,a).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=Lf(e,1),n=Ht(n,0,1),i=Ht(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=kc(a,s,e+1/3),this.g=kc(a,s,e),this.b=kc(a,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,n=_n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_n){const i=Q0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return Ye.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ht(zt.r*255,0,255))*65536+Math.round(Ht(zt.g*255,0,255))*256+Math.round(Ht(zt.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=_n){Ye.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==_n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+n,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ci),e.getHSL(Ea);const i=vo(Ci.h,Ea.h,n),r=vo(Ci.s,Ea.s,n),s=vo(Ci.l,Ea.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new it;it.NAMES=Q0;let q1=0;class Wl extends Lr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=ks(),this.name="",this.blending=vs,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gu,this.blendDst=Wu,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gu&&(i.blendSrc=this.blendSrc),this.blendDst!==Wu&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==op&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nf extends Wl{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=N0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new j,wa=new Ge;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ap,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wa.fromBufferAttribute(this,n),wa.applyMatrix3(e),this.setXY(n,wa.x,wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Kr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Kr(n,this.array)),n}setX(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Kr(n,this.array)),n}setY(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Kr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Kr(n,this.array)),n}setW(e,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Gt(n,this.array),i=Gt(i,this.array),r=Gt(r,this.array),s=Gt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ap&&(e.usage=this.usage),e}}class J0 extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class e_ extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yr extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let K1=0;const gn=new Et,zc=new dn,Xr=new j,an=new jo,Js=new jo,Rt=new j;class Dr extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y0(e)?e_:J0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yr(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Df);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(an.min,Js.min),an.expandByPoint(Rt),Rt.addVectors(an.max,Js.max),an.expandByPoint(Rt)):(an.expandByPoint(Js.min),an.expandByPoint(Js.max))}an.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Rt.fromBufferAttribute(o,l),c&&(Xr.fromBufferAttribute(e,l),Rt.add(Xr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let b=0;b<i.count;b++)o[b]=new j,c[b]=new j;const l=new j,u=new j,d=new j,f=new Ge,p=new Ge,m=new Ge,v=new j,g=new j;function h(b,E,S){l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,E),m.fromBufferAttribute(s,S),u.sub(l),d.sub(l),p.sub(f),m.sub(f);const C=1/(p.x*m.y-m.x*p.y);isFinite(C)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(C),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(C),o[b].add(v),o[E].add(v),o[S].add(v),c[b].add(g),c[E].add(g),c[S].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,E=_.length;b<E;++b){const S=_[b],C=S.start,D=S.count;for(let O=C,k=C+D;O<k;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new j,y=new j,R=new j,T=new j;function A(b){R.fromBufferAttribute(r,b),T.copy(R);const E=o[b];x.copy(E),x.sub(R.multiplyScalar(R.dot(E))).normalize(),y.crossVectors(T,E);const C=y.dot(c[b])<0?-1:1;a.setXYZW(b,x.x,x.y,x.z,C)}for(let b=0,E=_.length;b<E;++b){const S=_[b],C=S.start,D=S.count;for(let O=C,k=C+D;O<k;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,a=new j,o=new j,c=new j,l=new j,u=new j,d=new j;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,g),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),o.add(u),c.add(u),l.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u);let p=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*u;for(let h=0;h<u;h++)f[m++]=l[p++]}return new Kn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Dr,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const f=l[u],p=e(f,i);c.push(p)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tp=new Et,rr=new K0,Ta=new Df,Ap=new j,Aa=new j,Ca=new j,ba=new j,Bc=new j,Ra=new j,Cp=new j,Pa=new j;class Yn extends dn{constructor(e=new Dr,n=new Nf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ra.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(Bc.fromBufferAttribute(d,e),a?Ra.addScaledVector(Bc,u):Ra.addScaledVector(Bc.sub(n),u))}n.add(Ra)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(Ta.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Ta,Ap)===null||rr.origin.distanceToSquared(Ap)>(e.far-e.near)**2))&&(Tp.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Tp),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const g=f[m],h=a[g.materialIndex],_=Math.max(g.start,p.start),x=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=_,R=x;y<R;y+=3){const T=o.getX(y),A=o.getX(y+1),b=o.getX(y+2);r=La(this,h,e,i,l,u,d,T,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=m,h=v;g<h;g+=3){const _=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);r=La(this,a,e,i,l,u,d,_,x,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){const g=f[m],h=a[g.materialIndex],_=Math.max(g.start,p.start),x=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let y=_,R=x;y<R;y+=3){const T=y,A=y+1,b=y+2;r=La(this,h,e,i,l,u,d,T,A,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let g=m,h=v;g<h;g+=3){const _=g,x=g+1,y=g+2;r=La(this,a,e,i,l,u,d,_,x,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Z1(t,e,n,i,r,s,a,o){let c;if(e.side===rn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Ki,o),c===null)return null;Pa.copy(o),Pa.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Pa);return l<n.near||l>n.far?null:{distance:l,point:Pa.clone(),object:t}}function La(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,Aa),t.getVertexPosition(c,Ca),t.getVertexPosition(l,ba);const u=Z1(t,e,n,i,Aa,Ca,ba,Cp);if(u){const d=new j;In.getBarycoord(Cp,Aa,Ca,ba,d),r&&(u.uv=In.getInterpolatedAttribute(r,o,c,l,d,new Ge)),s&&(u.uv1=In.getInterpolatedAttribute(s,o,c,l,d,new Ge)),a&&(u.normal=In.getInterpolatedAttribute(a,o,c,l,d,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new j,materialIndex:0};In.getNormal(Aa,Ca,ba,f.normal),u.face=f,u.barycoord=d}return u}class Xo extends Dr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let f=0,p=0;m("z","y","x",-1,-1,i,n,e,a,s,0),m("z","y","x",1,-1,i,n,-e,a,s,1),m("x","z","y",1,1,e,i,n,r,a,2),m("x","z","y",1,-1,e,i,-n,r,a,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new yr(l,3)),this.setAttribute("normal",new yr(u,3)),this.setAttribute("uv",new yr(d,2));function m(v,g,h,_,x,y,R,T,A,b,E){const S=y/A,C=R/b,D=y/2,O=R/2,k=T/2,X=A+1,G=b+1;let Q=0,U=0;const V=new j;for(let H=0;H<G;H++){const ee=H*C-O;for(let ie=0;ie<X;ie++){const Ce=ie*S-D;V[v]=Ce*_,V[g]=ee*x,V[h]=k,l.push(V.x,V.y,V.z),V[v]=0,V[g]=0,V[h]=T>0?1:-1,u.push(V.x,V.y,V.z),d.push(ie/A),d.push(1-H/b),Q+=1}}for(let H=0;H<b;H++)for(let ee=0;ee<A;ee++){const ie=f+ee+X*H,Ce=f+ee+X*(H+1),L=f+(ee+1)+X*(H+1),se=f+(ee+1)+X*H;c.push(ie,Ce,se),c.push(Ce,L,se),U+=6}o.addGroup(p,U,E),p+=U,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=Ns(t[n]);for(const r in i)e[r]=i[r]}return e}function Q1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function t_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const J1={clone:Ns,merge:Wt};var eS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Wl{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eS,this.fragmentShader=tS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=Q1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class n_ extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new j,bp=new Ge,Rp=new Ge;class yn extends n_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(_o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,n){return this.getViewBounds(e,bp,Rp),n.subVectors(Rp,bp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_o*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,$r=1;class nS extends dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Yr,$r,e,n);r.layers=this.layers,this.add(r);const s=new yn(Yr,$r,e,n);s.layers=this.layers,this.add(s);const a=new yn(Yr,$r,e,n);a.layers=this.layers,this.add(a);const o=new yn(Yr,$r,e,n);o.layers=this.layers,this.add(o);const c=new yn(Yr,$r,e,n);c.layers=this.layers,this.add(c);const l=new yn(Yr,$r,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class i_ extends Yt{constructor(e,n,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],n=n!==void 0?n:Rs,super(e,n,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iS extends Cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new i_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xo(5,5,5),s=new Zi({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:ji});s.uniforms.tEquirect.value=n;const a=new Yn(r,s),o=n.minFilter;return n.minFilter===_r&&(n.minFilter=Xn),new nS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Hc=new j,rS=new j,sS=new ze;class Li{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Hc.subVectors(i,n).cross(rS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Hc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||sS.getNormalMatrix(e),r=this.coplanarPoint(Hc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Df,Da=new j;class r_{constructor(e=new Li,n=new Li,i=new Li,r=new Li,s=new Li,a=new Li){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],d=r[6],f=r[7],p=r[8],m=r[9],v=r[10],g=r[11],h=r[12],_=r[13],x=r[14],y=r[15];if(i[0].setComponents(c-s,f-l,g-p,y-h).normalize(),i[1].setComponents(c+s,f+l,g+p,y+h).normalize(),i[2].setComponents(c+a,f+u,g+m,y+_).normalize(),i[3].setComponents(c-a,f-u,g-m,y-_).normalize(),i[4].setComponents(c-o,f-d,g-v,y-x).normalize(),n===ui)i[5].setComponents(c+o,f+d,g+v,y+x).normalize();else if(n===Tl)i[5].setComponents(o,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Da.x=r.normal.x>0?e.max.x:e.min.x,Da.y=r.normal.y>0?e.max.y:e.min.y,Da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function s_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function oS(t){const e=new WeakMap;function n(o,c){const l=o.array,u=o.usage,d=l.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=t.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=t.SHORT;else if(l instanceof Uint32Array)p=t.UNSIGNED_INT;else if(l instanceof Int32Array)p=t.INT;else if(l instanceof Int8Array)p=t.BYTE;else if(l instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(t.bindBuffer(l,o),d.length===0)t.bufferSubData(l,0,u);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){const m=d[f],v=d[p];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){const v=d[p];t.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Yo extends Dr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,d=e/o,f=n/c,p=[],m=[],v=[],g=[];for(let h=0;h<u;h++){const _=h*f-a;for(let x=0;x<l;x++){const y=x*d-s;m.push(y,-_,0),v.push(0,0,1),g.push(x/o),g.push(1-h/c)}}for(let h=0;h<c;h++)for(let _=0;_<o;_++){const x=_+l*h,y=_+l*(h+1),R=_+1+l*(h+1),T=_+1+l*h;p.push(x,y,T),p.push(y,R,T)}this.setIndex(p),this.setAttribute("position",new yr(m,3)),this.setAttribute("normal",new yr(v,3)),this.setAttribute("uv",new yr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var aS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_S=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,SS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,MS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,PS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,DS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,NS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,US=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FS="gl_FragColor = linearToOutputTexel( gl_FragColor );",kS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,VS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$S=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,JS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,EM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,OM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,GM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$M=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,KM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,TE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:aS,alphahash_pars_fragment:lS,alphamap_fragment:cS,alphamap_pars_fragment:uS,alphatest_fragment:dS,alphatest_pars_fragment:fS,aomap_fragment:hS,aomap_pars_fragment:pS,batching_pars_vertex:mS,batching_vertex:gS,begin_vertex:_S,beginnormal_vertex:vS,bsdfs:xS,iridescence_fragment:yS,bumpmap_pars_fragment:SS,clipping_planes_fragment:MS,clipping_planes_pars_fragment:ES,clipping_planes_pars_vertex:wS,clipping_planes_vertex:TS,color_fragment:AS,color_pars_fragment:CS,color_pars_vertex:bS,color_vertex:RS,common:PS,cube_uv_reflection_fragment:LS,defaultnormal_vertex:DS,displacementmap_pars_vertex:NS,displacementmap_vertex:IS,emissivemap_fragment:US,emissivemap_pars_fragment:OS,colorspace_fragment:FS,colorspace_pars_fragment:kS,envmap_fragment:zS,envmap_common_pars_fragment:BS,envmap_pars_fragment:HS,envmap_pars_vertex:VS,envmap_physical_pars_fragment:JS,envmap_vertex:GS,fog_vertex:WS,fog_pars_vertex:jS,fog_fragment:XS,fog_pars_fragment:YS,gradientmap_pars_fragment:$S,lightmap_pars_fragment:qS,lights_lambert_fragment:KS,lights_lambert_pars_fragment:ZS,lights_pars_begin:QS,lights_toon_fragment:eM,lights_toon_pars_fragment:tM,lights_phong_fragment:nM,lights_phong_pars_fragment:iM,lights_physical_fragment:rM,lights_physical_pars_fragment:sM,lights_fragment_begin:oM,lights_fragment_maps:aM,lights_fragment_end:lM,logdepthbuf_fragment:cM,logdepthbuf_pars_fragment:uM,logdepthbuf_pars_vertex:dM,logdepthbuf_vertex:fM,map_fragment:hM,map_pars_fragment:pM,map_particle_fragment:mM,map_particle_pars_fragment:gM,metalnessmap_fragment:_M,metalnessmap_pars_fragment:vM,morphinstance_vertex:xM,morphcolor_vertex:yM,morphnormal_vertex:SM,morphtarget_pars_vertex:MM,morphtarget_vertex:EM,normal_fragment_begin:wM,normal_fragment_maps:TM,normal_pars_fragment:AM,normal_pars_vertex:CM,normal_vertex:bM,normalmap_pars_fragment:RM,clearcoat_normal_fragment_begin:PM,clearcoat_normal_fragment_maps:LM,clearcoat_pars_fragment:DM,iridescence_pars_fragment:NM,opaque_fragment:IM,packing:UM,premultiplied_alpha_fragment:OM,project_vertex:FM,dithering_fragment:kM,dithering_pars_fragment:zM,roughnessmap_fragment:BM,roughnessmap_pars_fragment:HM,shadowmap_pars_fragment:VM,shadowmap_pars_vertex:GM,shadowmap_vertex:WM,shadowmask_pars_fragment:jM,skinbase_vertex:XM,skinning_pars_vertex:YM,skinning_vertex:$M,skinnormal_vertex:qM,specularmap_fragment:KM,specularmap_pars_fragment:ZM,tonemapping_fragment:QM,tonemapping_pars_fragment:JM,transmission_fragment:eE,transmission_pars_fragment:tE,uv_pars_fragment:nE,uv_pars_vertex:iE,uv_vertex:rE,worldpos_vertex:sE,background_vert:oE,background_frag:aE,backgroundCube_vert:lE,backgroundCube_frag:cE,cube_vert:uE,cube_frag:dE,depth_vert:fE,depth_frag:hE,distanceRGBA_vert:pE,distanceRGBA_frag:mE,equirect_vert:gE,equirect_frag:_E,linedashed_vert:vE,linedashed_frag:xE,meshbasic_vert:yE,meshbasic_frag:SE,meshlambert_vert:ME,meshlambert_frag:EE,meshmatcap_vert:wE,meshmatcap_frag:TE,meshnormal_vert:AE,meshnormal_frag:CE,meshphong_vert:bE,meshphong_frag:RE,meshphysical_vert:PE,meshphysical_frag:LE,meshtoon_vert:DE,meshtoon_frag:NE,points_vert:IE,points_frag:UE,shadow_vert:OE,shadow_frag:FE,sprite_vert:kE,sprite_frag:zE},ue={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Gn={basic:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new it(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Wt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Wt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new it(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Wt([ue.points,ue.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Wt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Wt([ue.common,ue.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Wt([ue.sprite,ue.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Wt([ue.common,ue.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Wt([ue.lights,ue.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Gn.physical={uniforms:Wt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Na={r:0,b:0,g:0},or=new vi,BE=new Et;function HE(t,e,n,i,r,s,a){const o=new it(0);let c=s===!0?0:1,l,u,d=null,f=0,p=null;function m(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?n:e).get(x)),x}function v(_){let x=!1;const y=m(_);y===null?h(o,c):y&&y.isColor&&(h(y,1),x=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,x){const y=m(x);y&&(y.isCubeTexture||y.mapping===Vl)?(u===void 0&&(u=new Yn(new Xo(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Ns(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),or.copy(x.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(BE.makeRotationFromEuler(or)),u.material.toneMapped=Ye.getTransfer(y.colorSpace)!==tt,(d!==y||f!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Yn(new Yo(2,2),new Zi({name:"BackgroundMaterial",uniforms:Ns(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(y.colorSpace)!==tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==t.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,p=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function h(_,x){_.getRGB(Na,t_(t)),i.buffers.color.setClear(Na.r,Na.g,Na.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),c=x,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,h(o,c)},render:v,addToRenderList:g}}function VE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(S,C,D,O,k){let X=!1;const G=d(O,D,C);s!==G&&(s=G,l(s.object)),X=p(S,O,D,k),X&&m(S,O,D,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(S,C,D,O),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return t.createVertexArray()}function l(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,C,D){const O=D.wireframe===!0;let k=i[S.id];k===void 0&&(k={},i[S.id]=k);let X=k[C.id];X===void 0&&(X={},k[C.id]=X);let G=X[O];return G===void 0&&(G=f(c()),X[O]=G),G}function f(S){const C=[],D=[],O=[];for(let k=0;k<n;k++)C[k]=0,D[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,C,D,O){const k=s.attributes,X=C.attributes;let G=0;const Q=D.getAttributes();for(const U in Q)if(Q[U].location>=0){const H=k[U];let ee=X[U];if(ee===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),H===void 0||H.attribute!==ee||ee&&H.data!==ee.data)return!0;G++}return s.attributesNum!==G||s.index!==O}function m(S,C,D,O){const k={},X=C.attributes;let G=0;const Q=D.getAttributes();for(const U in Q)if(Q[U].location>=0){let H=X[U];H===void 0&&(U==="instanceMatrix"&&S.instanceMatrix&&(H=S.instanceMatrix),U==="instanceColor"&&S.instanceColor&&(H=S.instanceColor));const ee={};ee.attribute=H,H&&H.data&&(ee.data=H.data),k[U]=ee,G++}s.attributes=k,s.attributesNum=G,s.index=O}function v(){const S=s.newAttributes;for(let C=0,D=S.length;C<D;C++)S[C]=0}function g(S){h(S,0)}function h(S,C){const D=s.newAttributes,O=s.enabledAttributes,k=s.attributeDivisors;D[S]=1,O[S]===0&&(t.enableVertexAttribArray(S),O[S]=1),k[S]!==C&&(t.vertexAttribDivisor(S,C),k[S]=C)}function _(){const S=s.newAttributes,C=s.enabledAttributes;for(let D=0,O=C.length;D<O;D++)C[D]!==S[D]&&(t.disableVertexAttribArray(D),C[D]=0)}function x(S,C,D,O,k,X,G){G===!0?t.vertexAttribIPointer(S,C,D,k,X):t.vertexAttribPointer(S,C,D,O,k,X)}function y(S,C,D,O){v();const k=O.attributes,X=D.getAttributes(),G=C.defaultAttributeValues;for(const Q in X){const U=X[Q];if(U.location>=0){let V=k[Q];if(V===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),V!==void 0){const H=V.normalized,ee=V.itemSize,ie=e.get(V);if(ie===void 0)continue;const Ce=ie.buffer,L=ie.type,se=ie.bytesPerElement,q=L===t.INT||L===t.UNSIGNED_INT||V.gpuType===Tf;if(V.isInterleavedBufferAttribute){const Z=V.data,ce=Z.stride,de=V.offset;if(Z.isInstancedInterleavedBuffer){for(let pe=0;pe<U.locationSize;pe++)h(U.location+pe,Z.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let pe=0;pe<U.locationSize;pe++)g(U.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let pe=0;pe<U.locationSize;pe++)x(U.location+pe,ee/U.locationSize,L,H,ce*se,(de+ee/U.locationSize*pe)*se,q)}else{if(V.isInstancedBufferAttribute){for(let Z=0;Z<U.locationSize;Z++)h(U.location+Z,V.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Z=0;Z<U.locationSize;Z++)g(U.location+Z);t.bindBuffer(t.ARRAY_BUFFER,Ce);for(let Z=0;Z<U.locationSize;Z++)x(U.location+Z,ee/U.locationSize,L,H,ee*se,ee/U.locationSize*Z*se,q)}}else if(G!==void 0){const H=G[Q];if(H!==void 0)switch(H.length){case 2:t.vertexAttrib2fv(U.location,H);break;case 3:t.vertexAttrib3fv(U.location,H);break;case 4:t.vertexAttrib4fv(U.location,H);break;default:t.vertexAttrib1fv(U.location,H)}}}}_()}function R(){b();for(const S in i){const C=i[S];for(const D in C){const O=C[D];for(const k in O)u(O[k].object),delete O[k];delete C[D]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const D in C){const O=C[D];for(const k in O)u(O[k].object),delete O[k];delete C[D]}delete i[S.id]}function A(S){for(const C in i){const D=i[C];if(D[S.id]===void 0)continue;const O=D[S.id];for(const k in O)u(O[k].object),delete O[k];delete D[S.id]}}function b(){E(),a=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:_}}function GE(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,d){d!==0&&(t.drawArraysInstanced(i,l,u,d),n.update(u,i,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let p=0;for(let m=0;m<d;m++)p+=u[m];n.update(p,i,1)}function c(l,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)a(l[m],u[m],f[m]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v]*f[v];n.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function WE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Un&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const b=A===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==_i&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ci&&!b)}function c(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:R,maxSamples:T}}function jE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Li,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?u(null):l();else{const _=s?0:i,x=_*4;let y=h.clippingState||null;c.value=y,y=u(m,f,x,p);for(let R=0;R!==x;++R)y[R]=n[R];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,m){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const h=p+v*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,y=p;x!==v;++x,y+=4)a.copy(d[x]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function XE(t){let e=new WeakMap;function n(a,o){return o===Qu?a.mapping=Rs:o===Ju&&(a.mapping=Ps),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qu||o===Ju)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new iS(c.height);return l.fromEquirectangularTexture(t,a),e.set(a,l),a.addEventListener("dispose",r),n(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class YE extends n_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const us=4,Pp=[.125,.215,.35,.446,.526,.582],fr=20,Vc=new YE,Lp=new it;let Gc=null,Wc=0,jc=0,Xc=!1;const ur=(1+Math.sqrt(5))/2,qr=1/ur,Dp=[new j(-ur,qr,0),new j(ur,qr,0),new j(-qr,0,ur),new j(qr,0,ur),new j(0,ur,-qr),new j(0,ur,qr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Np{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,jc),this._renderer.xr.enabled=Xc,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Rs||e.mapping===Ps?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Wo,format:Un,colorSpace:Fs,depthBuffer:!1},r=Ip(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ip(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$E(s)),this._blurMaterial=qE(s,e,n)}return r}_compileMaterial(e){const n=new Yn(this._lodPlanes[0],e);this._renderer.compile(n,Vc)}_sceneToCubeUV(e,n,i,r){const o=new yn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Lp),u.toneMapping=Xi,u.autoClear=!1;const p=new Nf({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),m=new Yn(new Xo,p);let v=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,v=!0):(p.color.copy(Lp),v=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):_===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const x=this._cubeSize;Ia(r,_*x,h>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(m,o),u.render(e,o)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Rs||e.mapping===Ps;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Up());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Yn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ia(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Vc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Dp[(r-s-1)%Dp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Yn(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fr-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):fr;g>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fr}`);const h=[];let _=0;for(let A=0;A<fr;++A){const b=A/v,E=Math.exp(-b*b/2);h.push(E),A===0?_+=E:A<g&&(_+=2*E)}for(let A=0;A<h.length;A++)h[A]=h[A]/_;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-i;const y=this._sizeLods[r],R=3*y*(r>x-us?r-x+us:0),T=4*(this._cubeSize-y);Ia(n,R,T,3*y,2*y),c.setRenderTarget(n),c.render(d,Vc)}}function $E(t){const e=[],n=[],i=[];let r=t;const s=t-us+1+Pp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>t-us?c=Pp[a-t+us-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,m=6,v=3,g=2,h=1,_=new Float32Array(v*m*p),x=new Float32Array(g*m*p),y=new Float32Array(h*m*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,b=T>2?0:-1,E=[A,b,0,A+2/3,b,0,A+2/3,b+1,0,A,b,0,A+2/3,b+1,0,A,b+1,0];_.set(E,v*m*T),x.set(f,g*m*T);const S=[T,T,T,T,T,T];y.set(S,h*m*T)}const R=new Dr;R.setAttribute("position",new Kn(_,v)),R.setAttribute("uv",new Kn(x,g)),R.setAttribute("faceIndex",new Kn(y,h)),e.push(R),r>us&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ip(t,e,n){const i=new Cr(t,e,n);return i.texture.mapping=Vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ia(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function qE(t,e,n){const i=new Float32Array(fr),r=new j(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Up(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Op(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:If(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function If(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function KE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Qu||c===Ju,u=c===Rs||c===Ps;if(l||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Np(t)),d=l?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Np(t)),d=l?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function ZE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ro("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function QE(t,e,n,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const v=f.morphAttributes[m];for(let g=0,h=v.length;g<h;g++)e.remove(v[g])}f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(d){const f=d.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const m in p){const v=p[m];for(let g=0,h=v.length;g<h;g++)e.update(v[g],t.ARRAY_BUFFER)}}function l(d){const f=[],p=d.index,m=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let x=0,y=_.length;x<y;x+=3){const R=_[x+0],T=_[x+1],A=_[x+2];f.push(R,T,T,A,A,R)}}else if(m!==void 0){const _=m.array;v=m.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const R=x+0,T=x+1,A=x+2;f.push(R,T,T,A,A,R)}}else return;const g=new(Y0(f)?e_:J0)(f,1);g.version=v;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function JE(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,p){t.drawElements(i,p,s,f*a),n.update(p,i,1)}function l(f,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,f*a,m),n.update(p,i,m))}function u(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,m);let g=0;for(let h=0;h<m;h++)g+=p[h];n.update(g,i,1)}function d(f,p,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)l(f[h]/a,p[h],v[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,m);let h=0;for(let _=0;_<m;_++)h+=p[_]*v[_];n.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ew(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tw(t,e,n){const i=new WeakMap,r=new yt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let S=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let R=o.attributes.position.count*y,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*T*4*d),b=new q0(A,R,T,d);b.type=ci,b.needsUpdate=!0;const E=y*4;for(let C=0;C<d;C++){const D=h[C],O=_[C],k=x[C],X=R*T*4*C;for(let G=0;G<D.count;G++){const Q=G*E;m===!0&&(r.fromBufferAttribute(D,G),A[X+Q+0]=r.x,A[X+Q+1]=r.y,A[X+Q+2]=r.z,A[X+Q+3]=0),v===!0&&(r.fromBufferAttribute(O,G),A[X+Q+4]=r.x,A[X+Q+5]=r.y,A[X+Q+6]=r.z,A[X+Q+7]=0),g===!0&&(r.fromBufferAttribute(k,G),A[X+Q+8]=r.x,A[X+Q+9]=r.y,A[X+Q+10]=r.z,A[X+Q+11]=k.itemSize===4?r.w:1)}}f={count:d,texture:b,size:new Ge(R,T)},i.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const v=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function nw(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:a}}class o_ extends Yt{constructor(e,n,i,r,s,a,o,c,l,u=xs){if(u!==xs&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===xs&&(i=Ar),i===void 0&&u===Ds&&(i=Ls),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:kn,this.minFilter=c!==void 0?c:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const a_=new Yt,Fp=new o_(1,1),l_=new q0,c_=new H1,u_=new i_,kp=[],zp=[],Bp=new Float32Array(16),Hp=new Float32Array(9),Vp=new Float32Array(4);function zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=kp[r];if(s===void 0&&(s=new Float32Array(r),kp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function jl(t,e){let n=zp[e];n===void 0&&(n=new Int32Array(e),zp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function iw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function aw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Vp.set(i),t.uniformMatrix2fv(this.addr,!1,Vp),bt(n,i)}}function lw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Hp.set(i),t.uniformMatrix3fv(this.addr,!1,Hp),bt(n,i)}}function cw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;Bp.set(i),t.uniformMatrix4fv(this.addr,!1,Bp),bt(n,i)}}function uw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function pw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function vw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Fp.compareFunction=j0,s=Fp):s=a_,n.setTexture2D(e||s,r)}function xw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||c_,r)}function yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||u_,r)}function Sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||l_,r)}function Mw(t){switch(t){case 5126:return iw;case 35664:return rw;case 35665:return sw;case 35666:return ow;case 35674:return aw;case 35675:return lw;case 35676:return cw;case 5124:case 35670:return uw;case 35667:case 35671:return dw;case 35668:case 35672:return fw;case 35669:case 35673:return hw;case 5125:return pw;case 36294:return mw;case 36295:return gw;case 36296:return _w;case 35678:case 36198:case 36298:case 36306:case 35682:return vw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return yw;case 36289:case 36303:case 36311:case 36292:return Sw}}function Ew(t,e){t.uniform1fv(this.addr,e)}function ww(t,e){const n=zs(e,this.size,2);t.uniform2fv(this.addr,n)}function Tw(t,e){const n=zs(e,this.size,3);t.uniform3fv(this.addr,n)}function Aw(t,e){const n=zs(e,this.size,4);t.uniform4fv(this.addr,n)}function Cw(t,e){const n=zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bw(t,e){const n=zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Rw(t,e){const n=zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Pw(t,e){t.uniform1iv(this.addr,e)}function Lw(t,e){t.uniform2iv(this.addr,e)}function Dw(t,e){t.uniform3iv(this.addr,e)}function Nw(t,e){t.uniform4iv(this.addr,e)}function Iw(t,e){t.uniform1uiv(this.addr,e)}function Uw(t,e){t.uniform2uiv(this.addr,e)}function Ow(t,e){t.uniform3uiv(this.addr,e)}function Fw(t,e){t.uniform4uiv(this.addr,e)}function kw(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||a_,s[a])}function zw(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||c_,s[a])}function Bw(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||u_,s[a])}function Hw(t,e,n){const i=this.cache,r=e.length,s=jl(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||l_,s[a])}function Vw(t){switch(t){case 5126:return Ew;case 35664:return ww;case 35665:return Tw;case 35666:return Aw;case 35674:return Cw;case 35675:return bw;case 35676:return Rw;case 5124:case 35670:return Pw;case 35667:case 35671:return Lw;case 35668:case 35672:return Dw;case 35669:case 35673:return Nw;case 5125:return Iw;case 36294:return Uw;case 36295:return Ow;case 36296:return Fw;case 35678:case 36198:case 36298:case 36306:case 35682:return kw;case 35679:case 36299:case 36307:return zw;case 35680:case 36300:case 36308:case 36293:return Bw;case 36289:case 36303:case 36311:case 36292:return Hw}}class Gw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Mw(n.type)}}class Ww{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Vw(n.type)}}class jw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Yc=/(\w+)(\])?(\[|\.)?/g;function Gp(t,e){t.seq.push(e),t.map[e.id]=e}function Xw(t,e,n){const i=t.name,r=i.length;for(Yc.lastIndex=0;;){const s=Yc.exec(i),a=Yc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Gp(n,l===void 0?new Gw(o,t,e):new Ww(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new jw(o),Gp(n,d)),n=d}}}class el{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Xw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Wp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Yw=37297;let $w=0;function qw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const jp=new ze;function Kw(t){Ye._getMatrix(jp,Ye.workingColorSpace,t);const e=`mat3( ${jp.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case Gl:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Xp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+qw(t.getShaderSource(e),a)}else return r}function Zw(t,e){const n=Kw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Qw(t,e){let n;switch(e){case Qy:n="Linear";break;case Jy:n="Reinhard";break;case e1:n="Cineon";break;case t1:n="ACESFilmic";break;case i1:n="AgX";break;case r1:n="Neutral";break;case n1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ua=new j;function Jw(){Ye.getLuminanceCoefficients(Ua);const t=Ua.x.toFixed(4),e=Ua.y.toFixed(4),n=Ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function tT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function so(t){return t!==""}function Yp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $p(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iT=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(t){return t.replace(iT,sT)}const rT=new Map;function sT(t,e){let n=He[e];if(n===void 0){const i=rT.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bd(n)}const oT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qp(t){return t.replace(oT,aT)}function aT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===D0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ly?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function cT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Rs:case Ps:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ps:e="ENVMAP_MODE_REFRACTION";break}return e}function dT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case N0:e="ENVMAP_BLENDING_MULTIPLY";break;case Ky:e="ENVMAP_BLENDING_MIX";break;case Zy:e="ENVMAP_BLENDING_ADD";break}return e}function fT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function hT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=lT(n),l=cT(n),u=uT(n),d=dT(n),f=fT(n),p=eT(n),m=tT(s),v=r.createProgram();let g,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(so).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(so).join(`
`),h.length>0&&(h+=`
`)):(g=[Kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),h=[Kp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xi?"#define TONE_MAPPING":"",n.toneMapping!==Xi?He.tonemapping_pars_fragment:"",n.toneMapping!==Xi?Qw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Zw("linearToOutputTexel",n.outputColorSpace),Jw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(so).join(`
`)),a=bd(a),a=Yp(a,n),a=$p(a,n),o=bd(o),o=Yp(o,n),o=$p(o,n),a=qp(a),o=qp(o),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=_+g+a,y=_+h+o,R=Wp(r,r.VERTEX_SHADER,x),T=Wp(r,r.FRAGMENT_SHADER,y);r.attachShader(v,R),r.attachShader(v,T),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(C){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(R).trim(),k=r.getShaderInfoLog(T).trim();let X=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,R,T);else{const Q=Xp(r,R,"vertex"),U=Xp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+Q+`
`+U)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||k==="")&&(G=!1);G&&(C.diagnostics={runnable:X,programLog:D,vertexShader:{log:O,prefix:g},fragmentShader:{log:k,prefix:h}})}r.deleteShader(R),r.deleteShader(T),b=new el(r,v),E=nT(r,v)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,Yw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$w++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}let pT=0;class mT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new gT(e),n.set(e,i)),i}}class gT{constructor(e){this.id=pT++,this.code=e,this.usedTimes=0}}function _T(t,e,n,i,r,s,a){const o=new Z0,c=new mT,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,S,C,D,O){const k=D.fog,X=O.geometry,G=E.isMeshStandardMaterial?D.environment:null,Q=(E.isMeshStandardMaterial?n:e).get(E.envMap||G),U=Q&&Q.mapping===Vl?Q.image.height:null,V=m[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const H=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ee=H!==void 0?H.length:0;let ie=0;X.morphAttributes.position!==void 0&&(ie=1),X.morphAttributes.normal!==void 0&&(ie=2),X.morphAttributes.color!==void 0&&(ie=3);let Ce,L,se,q;if(V){const Je=Gn[V];Ce=Je.vertexShader,L=Je.fragmentShader}else Ce=E.vertexShader,L=E.fragmentShader,c.update(E),se=c.getVertexShaderID(E),q=c.getFragmentShaderID(E);const Z=t.getRenderTarget(),ce=t.state.buffers.depth.getReversed(),de=O.isInstancedMesh===!0,pe=O.isBatchedMesh===!0,Ie=!!E.map,Le=!!E.matcap,Pe=!!Q,I=!!E.aoMap,Ke=!!E.lightMap,Ne=!!E.bumpMap,Ve=!!E.normalMap,be=!!E.displacementMap,rt=!!E.emissiveMap,Re=!!E.metalnessMap,P=!!E.roughnessMap,M=E.anisotropy>0,W=E.clearcoat>0,te=E.dispersion>0,re=E.iridescence>0,J=E.sheen>0,Me=E.transmission>0,fe=M&&!!E.anisotropyMap,xe=W&&!!E.clearcoatMap,We=W&&!!E.clearcoatNormalMap,ae=W&&!!E.clearcoatRoughnessMap,ve=re&&!!E.iridescenceMap,De=re&&!!E.iridescenceThicknessMap,Ue=J&&!!E.sheenColorMap,Se=J&&!!E.sheenRoughnessMap,Xe=!!E.specularMap,Be=!!E.specularColorMap,st=!!E.specularIntensityMap,F=Me&&!!E.transmissionMap,he=Me&&!!E.thicknessMap,K=!!E.gradientMap,ne=!!E.alphaMap,_e=E.alphaTest>0,me=!!E.alphaHash,Fe=!!E.extensions;let _t=Xi;E.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Ut={shaderID:V,shaderType:E.type,shaderName:E.name,vertexShader:Ce,fragmentShader:L,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:q,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:pe,batchingColor:pe&&O._colorsTexture!==null,instancing:de,instancingColor:de&&O.instanceColor!==null,instancingMorph:de&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Fs,alphaToCoverage:!!E.alphaToCoverage,map:Ie,matcap:Le,envMap:Pe,envMapMode:Pe&&Q.mapping,envMapCubeUVHeight:U,aoMap:I,lightMap:Ke,bumpMap:Ne,normalMap:Ve,displacementMap:f&&be,emissiveMap:rt,normalMapObjectSpace:Ve&&E.normalMapType===c1,normalMapTangentSpace:Ve&&E.normalMapType===l1,metalnessMap:Re,roughnessMap:P,anisotropy:M,anisotropyMap:fe,clearcoat:W,clearcoatMap:xe,clearcoatNormalMap:We,clearcoatRoughnessMap:ae,dispersion:te,iridescence:re,iridescenceMap:ve,iridescenceThicknessMap:De,sheen:J,sheenColorMap:Ue,sheenRoughnessMap:Se,specularMap:Xe,specularColorMap:Be,specularIntensityMap:st,transmission:Me,transmissionMap:F,thicknessMap:he,gradientMap:K,opaque:E.transparent===!1&&E.blending===vs&&E.alphaToCoverage===!1,alphaMap:ne,alphaTest:_e,alphaHash:me,combine:E.combine,mapUv:Ie&&v(E.map.channel),aoMapUv:I&&v(E.aoMap.channel),lightMapUv:Ke&&v(E.lightMap.channel),bumpMapUv:Ne&&v(E.bumpMap.channel),normalMapUv:Ve&&v(E.normalMap.channel),displacementMapUv:be&&v(E.displacementMap.channel),emissiveMapUv:rt&&v(E.emissiveMap.channel),metalnessMapUv:Re&&v(E.metalnessMap.channel),roughnessMapUv:P&&v(E.roughnessMap.channel),anisotropyMapUv:fe&&v(E.anisotropyMap.channel),clearcoatMapUv:xe&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:We&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(E.sheenRoughnessMap.channel),specularMapUv:Xe&&v(E.specularMap.channel),specularColorMapUv:Be&&v(E.specularColorMap.channel),specularIntensityMapUv:st&&v(E.specularIntensityMap.channel),transmissionMapUv:F&&v(E.transmissionMap.channel),thicknessMapUv:he&&v(E.thicknessMap.channel),alphaMapUv:ne&&v(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ve||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Ie||ne),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ce,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:Ie&&E.map.isVideoTexture===!0&&Ye.getTransfer(E.map.colorSpace)===tt,decodeVideoTextureEmissive:rt&&E.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(E.emissiveMap.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===jn,flipSided:E.side===rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function h(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)S.push(C),S.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(_(S,E),x(S,E),S.push(t.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function _(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function x(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){const S=m[E.type];let C;if(S){const D=Gn[S];C=J1.clone(D.uniforms)}else C=E.uniforms;return C}function R(E,S){let C;for(let D=0,O=u.length;D<O;D++){const k=u[D];if(k.cacheKey===S){C=k,++C.usedTimes;break}}return C===void 0&&(C=new hT(t,S,E,s),u.push(C)),C}function T(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function A(E){c.remove(E)}function b(){c.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:y,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:b}}function vT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function xT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Zp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,f,p,m,v,g){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:m,renderOrder:d.renderOrder,z:v,group:g},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=m,h.renderOrder=d.renderOrder,h.z=v,h.group=g),e++,h}function o(d,f,p,m,v,g){const h=a(d,f,p,m,v,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function c(d,f,p,m,v,g){const h=a(d,f,p,m,v,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function l(d,f){n.length>1&&n.sort(d||xT),i.length>1&&i.sort(f||Zp),r.length>1&&r.sort(f||Zp)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function yT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Qp,t.set(i,[a])):r>=s.length?(a=new Qp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ST(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new it};break;case"SpotLight":n={position:new j,direction:new j,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function MT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ET=0;function wT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function TT(t){const e=new ST,n=MT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new j);const r=new j,s=new Et,a=new Et;function o(l){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,m=0,v=0,g=0,h=0,_=0,x=0,y=0,R=0,T=0,A=0;l.sort(wT);for(let E=0,S=l.length;E<S;E++){const C=l[E],D=C.color,O=C.intensity,k=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=D.r*O,d+=D.g*O,f+=D.b*O;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],O);A++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,U=n.get(C);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=C.shadow.matrix,_++}i.directional[p]=G,p++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(D).multiplyScalar(O),G.distance=k,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[v]=G;const Q=C.shadow;if(C.map&&(i.spotLightMap[R]=C.map,R++,Q.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[v]=Q.matrix,C.castShadow){const U=n.get(C);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,i.spotShadow[v]=U,i.spotShadowMap[v]=X,y++}v++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(D).multiplyScalar(O),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=G,g++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const Q=C.shadow,U=n.get(C);U.shadowIntensity=Q.intensity,U.shadowBias=Q.bias,U.shadowNormalBias=Q.normalBias,U.shadowRadius=Q.radius,U.shadowMapSize=Q.mapSize,U.shadowCameraNear=Q.camera.near,U.shadowCameraFar=Q.camera.far,i.pointShadow[m]=U,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=C.shadow.matrix,x++}i.point[m]=G,m++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(O),G.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[h]=G,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const b=i.hash;(b.directionalLength!==p||b.pointLength!==m||b.spotLength!==v||b.rectAreaLength!==g||b.hemiLength!==h||b.numDirectionalShadows!==_||b.numPointShadows!==x||b.numSpotShadows!==y||b.numSpotMaps!==R||b.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,b.directionalLength=p,b.pointLength=m,b.spotLength=v,b.rectAreaLength=g,b.hemiLength=h,b.numDirectionalShadows=_,b.numPointShadows=x,b.numSpotShadows=y,b.numSpotMaps=R,b.numLightProbes=A,i.version=ET++)}function c(l,u){let d=0,f=0,p=0,m=0,v=0;const g=u.matrixWorldInverse;for(let h=0,_=l.length;h<_;h++){const x=l[h];if(x.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:i}}function Jp(t){const e=new TT(t),n=[],i=[];function r(u){l.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function c(u){e.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function AT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Jp(t),e.set(r,[o])):s>=a.length?(o=new Jp(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class CT extends Wl{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=o1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bT extends Wl{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const RT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LT(t,e,n){let i=new r_;const r=new Ge,s=new Ge,a=new yt,o=new CT({depthPacking:a1}),c=new bT,l={},u=n.maxTextureSize,d={[Ki]:rn,[rn]:Ki,[jn]:jn},f=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:RT,fragmentShader:PT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new Dr;m.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Yn(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D0;let h=this.type;this.render=function(T,A,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),D=t.state;D.setBlending(ji),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=h!==ri&&this.type===ri,k=h===ri&&this.type!==ri;for(let X=0,G=T.length;X<G;X++){const Q=T[X],U=Q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const V=U.getFrameExtents();if(r.multiply(V),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,U.mapSize.y=s.y)),U.map===null||O===!0||k===!0){const ee=this.type!==ri?{minFilter:kn,magFilter:kn}:{};U.map!==null&&U.map.dispose(),U.map=new Cr(r.x,r.y,ee),U.map.texture.name=Q.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const H=U.getViewportCount();for(let ee=0;ee<H;ee++){const ie=U.getViewport(ee);a.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),D.viewport(a),U.updateMatrices(Q,ee),i=U.getFrustum(),y(A,b,U.camera,Q,this.type)}U.isPointLightShadow!==!0&&this.type===ri&&_(U,b),U.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(E,S,C)};function _(T,A){const b=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Cr(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,b,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,b,p,v,null)}function x(T,A,b,E){let S=null;const C=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)S=C;else if(S=b.isPointLight===!0?c:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const D=S.uuid,O=A.uuid;let k=l[D];k===void 0&&(k={},l[D]=k);let X=k[O];X===void 0&&(X=S.clone(),k[O]=X,A.addEventListener("dispose",R)),S=X}if(S.visible=A.visible,S.wireframe=A.wireframe,E===ri?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const D=t.properties.get(S);D.light=b}return S}function y(T,A,b,E,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===ri)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const O=e.update(T),k=T.material;if(Array.isArray(k)){const X=O.groups;for(let G=0,Q=X.length;G<Q;G++){const U=X[G],V=k[U.materialIndex];if(V&&V.visible){const H=x(T,V,E,S);T.onBeforeShadow(t,T,A,b,O,H,U),t.renderBufferDirect(b,null,O,H,T,U),T.onAfterShadow(t,T,A,b,O,H,U)}}}else if(k.visible){const X=x(T,k,E,S);T.onBeforeShadow(t,T,A,b,O,X,null),t.renderBufferDirect(b,null,O,X,T,null),T.onAfterShadow(t,T,A,b,O,X,null)}}const D=T.children;for(let O=0,k=D.length;O<k;O++)y(D[O],A,b,E,S)}function R(T){T.target.removeEventListener("dispose",R);for(const b in l){const E=l[b],S=T.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const DT={[ju]:Xu,[Yu]:Ku,[$u]:Zu,[bs]:qu,[Xu]:ju,[Ku]:Yu,[Zu]:$u,[qu]:bs};function NT(t,e){function n(){let F=!1;const he=new yt;let K=null;const ne=new yt(0,0,0,0);return{setMask:function(_e){K!==_e&&!F&&(t.colorMask(_e,_e,_e,_e),K=_e)},setLocked:function(_e){F=_e},setClear:function(_e,me,Fe,_t,Ut){Ut===!0&&(_e*=_t,me*=_t,Fe*=_t),he.set(_e,me,Fe,_t),ne.equals(he)===!1&&(t.clearColor(_e,me,Fe,_t),ne.copy(he))},reset:function(){F=!1,K=null,ne.set(-1,0,0,0)}}}function i(){let F=!1,he=!1,K=null,ne=null,_e=null;return{setReversed:function(me){if(he!==me){const Fe=e.get("EXT_clip_control");he?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const _t=_e;_e=null,this.setClear(_t)}he=me},getReversed:function(){return he},setTest:function(me){me?Z(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(me){K!==me&&!F&&(t.depthMask(me),K=me)},setFunc:function(me){if(he&&(me=DT[me]),ne!==me){switch(me){case ju:t.depthFunc(t.NEVER);break;case Xu:t.depthFunc(t.ALWAYS);break;case Yu:t.depthFunc(t.LESS);break;case bs:t.depthFunc(t.LEQUAL);break;case $u:t.depthFunc(t.EQUAL);break;case qu:t.depthFunc(t.GEQUAL);break;case Ku:t.depthFunc(t.GREATER);break;case Zu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=me}},setLocked:function(me){F=me},setClear:function(me){_e!==me&&(he&&(me=1-me),t.clearDepth(me),_e=me)},reset:function(){F=!1,K=null,ne=null,_e=null,he=!1}}}function r(){let F=!1,he=null,K=null,ne=null,_e=null,me=null,Fe=null,_t=null,Ut=null;return{setTest:function(Je){F||(Je?Z(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(Je){he!==Je&&!F&&(t.stencilMask(Je),he=Je)},setFunc:function(Je,Tn,Zn){(K!==Je||ne!==Tn||_e!==Zn)&&(t.stencilFunc(Je,Tn,Zn),K=Je,ne=Tn,_e=Zn)},setOp:function(Je,Tn,Zn){(me!==Je||Fe!==Tn||_t!==Zn)&&(t.stencilOp(Je,Tn,Zn),me=Je,Fe=Tn,_t=Zn)},setLocked:function(Je){F=Je},setClear:function(Je){Ut!==Je&&(t.clearStencil(Je),Ut=Je)},reset:function(){F=!1,he=null,K=null,ne=null,_e=null,me=null,Fe=null,_t=null,Ut=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,p=[],m=null,v=!1,g=null,h=null,_=null,x=null,y=null,R=null,T=null,A=new it(0,0,0),b=0,E=!1,S=null,C=null,D=null,O=null,k=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(U)[1]),G=Q>=1):U.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),G=Q>=2);let V=null,H={};const ee=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),Ce=new yt().fromArray(ee),L=new yt().fromArray(ie);function se(F,he,K,ne){const _e=new Uint8Array(4),me=t.createTexture();t.bindTexture(F,me),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<K;Fe++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(he+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return me}const q={};q[t.TEXTURE_2D]=se(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=se(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(t.DEPTH_TEST),a.setFunc(bs),Ne(!1),Ve(np),Z(t.CULL_FACE),I(ji);function Z(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function ce(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function de(F,he){return d[F]!==he?(t.bindFramebuffer(F,he),d[F]=he,F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=he),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=he),!0):!1}function pe(F,he){let K=p,ne=!1;if(F){K=f.get(he),K===void 0&&(K=[],f.set(he,K));const _e=F.textures;if(K.length!==_e.length||K[0]!==t.COLOR_ATTACHMENT0){for(let me=0,Fe=_e.length;me<Fe;me++)K[me]=t.COLOR_ATTACHMENT0+me;K.length=_e.length,ne=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,ne=!0);ne&&t.drawBuffers(K)}function Ie(F){return m!==F?(t.useProgram(F),m=F,!0):!1}const Le={[dr]:t.FUNC_ADD,[Ny]:t.FUNC_SUBTRACT,[Iy]:t.FUNC_REVERSE_SUBTRACT};Le[Uy]=t.MIN,Le[Oy]=t.MAX;const Pe={[Fy]:t.ZERO,[ky]:t.ONE,[zy]:t.SRC_COLOR,[Gu]:t.SRC_ALPHA,[jy]:t.SRC_ALPHA_SATURATE,[Gy]:t.DST_COLOR,[Hy]:t.DST_ALPHA,[By]:t.ONE_MINUS_SRC_COLOR,[Wu]:t.ONE_MINUS_SRC_ALPHA,[Wy]:t.ONE_MINUS_DST_COLOR,[Vy]:t.ONE_MINUS_DST_ALPHA,[Xy]:t.CONSTANT_COLOR,[Yy]:t.ONE_MINUS_CONSTANT_COLOR,[$y]:t.CONSTANT_ALPHA,[qy]:t.ONE_MINUS_CONSTANT_ALPHA};function I(F,he,K,ne,_e,me,Fe,_t,Ut,Je){if(F===ji){v===!0&&(ce(t.BLEND),v=!1);return}if(v===!1&&(Z(t.BLEND),v=!0),F!==Dy){if(F!==g||Je!==E){if((h!==dr||y!==dr)&&(t.blendEquation(t.FUNC_ADD),h=dr,y=dr),Je)switch(F){case vs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ip:t.blendFunc(t.ONE,t.ONE);break;case rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case vs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ip:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,x=null,R=null,T=null,A.set(0,0,0),b=0,g=F,E=Je}return}_e=_e||he,me=me||K,Fe=Fe||ne,(he!==h||_e!==y)&&(t.blendEquationSeparate(Le[he],Le[_e]),h=he,y=_e),(K!==_||ne!==x||me!==R||Fe!==T)&&(t.blendFuncSeparate(Pe[K],Pe[ne],Pe[me],Pe[Fe]),_=K,x=ne,R=me,T=Fe),(_t.equals(A)===!1||Ut!==b)&&(t.blendColor(_t.r,_t.g,_t.b,Ut),A.copy(_t),b=Ut),g=F,E=!1}function Ke(F,he){F.side===jn?ce(t.CULL_FACE):Z(t.CULL_FACE);let K=F.side===rn;he&&(K=!K),Ne(K),F.blending===vs&&F.transparent===!1?I(ji):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ne=F.stencilWrite;o.setTest(ne),ne&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),rt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Z(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(F){S!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),S=F)}function Ve(F){F!==Ry?(Z(t.CULL_FACE),F!==C&&(F===np?t.cullFace(t.BACK):F===Py?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),C=F}function be(F){F!==D&&(G&&t.lineWidth(F),D=F)}function rt(F,he,K){F?(Z(t.POLYGON_OFFSET_FILL),(O!==he||k!==K)&&(t.polygonOffset(he,K),O=he,k=K)):ce(t.POLYGON_OFFSET_FILL)}function Re(F){F?Z(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function P(F){F===void 0&&(F=t.TEXTURE0+X-1),V!==F&&(t.activeTexture(F),V=F)}function M(F,he,K){K===void 0&&(V===null?K=t.TEXTURE0+X-1:K=V);let ne=H[K];ne===void 0&&(ne={type:void 0,texture:void 0},H[K]=ne),(ne.type!==F||ne.texture!==he)&&(V!==K&&(t.activeTexture(K),V=K),t.bindTexture(F,he||q[F]),ne.type=F,ne.texture=he)}function W(){const F=H[V];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(F){Ce.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Ce.copy(F))}function Se(F){L.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),L.copy(F))}function Xe(F,he){let K=l.get(he);K===void 0&&(K=new WeakMap,l.set(he,K));let ne=K.get(F);ne===void 0&&(ne=t.getUniformBlockIndex(he,F.name),K.set(F,ne))}function Be(F,he){const ne=l.get(he).get(F);c.get(he)!==ne&&(t.uniformBlockBinding(he,ne,F.__bindingPointIndex),c.set(he,ne))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},V=null,H={},d={},f=new WeakMap,p=[],m=null,v=!1,g=null,h=null,_=null,x=null,y=null,R=null,T=null,A=new it(0,0,0),b=0,E=!1,S=null,C=null,D=null,O=null,k=null,Ce.set(0,0,t.canvas.width,t.canvas.height),L.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:ce,bindFramebuffer:de,drawBuffers:pe,useProgram:Ie,setBlending:I,setMaterial:Ke,setFlipSided:Ne,setCullFace:Ve,setLineWidth:be,setPolygonOffset:rt,setScissorTest:Re,activeTexture:P,bindTexture:M,unbindTexture:W,compressedTexImage2D:te,compressedTexImage3D:re,texImage2D:ve,texImage3D:De,updateUBOMapping:Xe,uniformBlockBinding:Be,texStorage2D:We,texStorage3D:ae,texSubImage2D:J,texSubImage3D:Me,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:Ue,viewport:Se,reset:st}}function em(t,e,n,i){const r=IT(i);switch(n){case k0:return t*e;case B0:return t*e;case H0:return t*e*2;case V0:return t*e/r.components*r.byteLength;case bf:return t*e/r.components*r.byteLength;case G0:return t*e*2/r.components*r.byteLength;case Rf:return t*e*2/r.components*r.byteLength;case z0:return t*e*3/r.components*r.byteLength;case Un:return t*e*4/r.components*r.byteLength;case Pf:return t*e*4/r.components*r.byteLength;case qa:case Ka:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Za:case Qa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case id:case sd:return Math.max(t,16)*Math.max(e,8)/4;case nd:case rd:return Math.max(t,8)*Math.max(e,8)/2;case od:case ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case dd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case pd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case md:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _d:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case xd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Md:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ja:case Ed:case wd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case W0:case Td:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ad:case Cd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function IT(t){switch(t){case _i:case U0:return{byteLength:1,components:1};case Oo:case O0:case Wo:return{byteLength:2,components:1};case Af:case Cf:return{byteLength:2,components:4};case Ar:case Tf:case ci:return{byteLength:4,components:1};case F0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function UT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,M){return p?new OffscreenCanvas(P,M):ko("canvas")}function v(P,M,W){let te=1;const re=Re(P);if((re.width>W||re.height>W)&&(te=W/Math.max(re.width,re.height)),te<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const J=Math.floor(te*re.width),Me=Math.floor(te*re.height);d===void 0&&(d=m(J,Me));const fe=M?m(J,Me):d;return fe.width=J,fe.height=Me,fe.getContext("2d").drawImage(P,0,0,J,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+J+"x"+Me+")."),fe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function g(P){return P.generateMipmaps}function h(P){t.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(P,M,W,te,re=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=M;if(M===t.RED&&(W===t.FLOAT&&(J=t.R32F),W===t.HALF_FLOAT&&(J=t.R16F),W===t.UNSIGNED_BYTE&&(J=t.R8)),M===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.R8UI),W===t.UNSIGNED_SHORT&&(J=t.R16UI),W===t.UNSIGNED_INT&&(J=t.R32UI),W===t.BYTE&&(J=t.R8I),W===t.SHORT&&(J=t.R16I),W===t.INT&&(J=t.R32I)),M===t.RG&&(W===t.FLOAT&&(J=t.RG32F),W===t.HALF_FLOAT&&(J=t.RG16F),W===t.UNSIGNED_BYTE&&(J=t.RG8)),M===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.RG8UI),W===t.UNSIGNED_SHORT&&(J=t.RG16UI),W===t.UNSIGNED_INT&&(J=t.RG32UI),W===t.BYTE&&(J=t.RG8I),W===t.SHORT&&(J=t.RG16I),W===t.INT&&(J=t.RG32I)),M===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.RGB8UI),W===t.UNSIGNED_SHORT&&(J=t.RGB16UI),W===t.UNSIGNED_INT&&(J=t.RGB32UI),W===t.BYTE&&(J=t.RGB8I),W===t.SHORT&&(J=t.RGB16I),W===t.INT&&(J=t.RGB32I)),M===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),W===t.UNSIGNED_INT&&(J=t.RGBA32UI),W===t.BYTE&&(J=t.RGBA8I),W===t.SHORT&&(J=t.RGBA16I),W===t.INT&&(J=t.RGBA32I)),M===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),M===t.RGBA){const Me=re?Gl:Ye.getTransfer(te);W===t.FLOAT&&(J=t.RGBA32F),W===t.HALF_FLOAT&&(J=t.RGBA16F),W===t.UNSIGNED_BYTE&&(J=Me===tt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(P,M){let W;return P?M===null||M===Ar||M===Ls?W=t.DEPTH24_STENCIL8:M===ci?W=t.DEPTH32F_STENCIL8:M===Oo&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ar||M===Ls?W=t.DEPTH_COMPONENT24:M===ci?W=t.DEPTH_COMPONENT32F:M===Oo&&(W=t.DEPTH_COMPONENT16),W}function R(P,M){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==kn&&P.minFilter!==Xn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function T(P){const M=P.target;M.removeEventListener("dispose",T),b(M),M.isVideoTexture&&u.delete(M)}function A(P){const M=P.target;M.removeEventListener("dispose",A),S(M)}function b(P){const M=i.get(P);if(M.__webglInit===void 0)return;const W=P.source,te=f.get(W);if(te){const re=te[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(P),Object.keys(te).length===0&&f.delete(W)}i.remove(P)}function E(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const W=P.source,te=f.get(W);delete te[M.__cacheKey],a.memory.textures--}function S(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let re=0;re<M.__webglFramebuffer[te].length;re++)t.deleteFramebuffer(M.__webglFramebuffer[te][re]);else t.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)t.deleteFramebuffer(M.__webglFramebuffer[te]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=P.textures;for(let te=0,re=W.length;te<re;te++){const J=i.get(W[te]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(W[te])}i.remove(P)}let C=0;function D(){C=0}function O(){const P=C;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),C+=1,P}function k(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function X(P,M){const W=i.get(P);if(P.isVideoTexture&&be(P),P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){const te=P.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{L(W,P,M);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+M)}function G(P,M){const W=i.get(P);if(P.version>0&&W.__version!==P.version){L(W,P,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+M)}function Q(P,M){const W=i.get(P);if(P.version>0&&W.__version!==P.version){L(W,P,M);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+M)}function U(P,M){const W=i.get(P);if(P.version>0&&W.__version!==P.version){se(W,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+M)}const V={[ed]:t.REPEAT,[gr]:t.CLAMP_TO_EDGE,[td]:t.MIRRORED_REPEAT},H={[kn]:t.NEAREST,[s1]:t.NEAREST_MIPMAP_NEAREST,[ma]:t.NEAREST_MIPMAP_LINEAR,[Xn]:t.LINEAR,[Sc]:t.LINEAR_MIPMAP_NEAREST,[_r]:t.LINEAR_MIPMAP_LINEAR},ee={[u1]:t.NEVER,[g1]:t.ALWAYS,[d1]:t.LESS,[j0]:t.LEQUAL,[f1]:t.EQUAL,[m1]:t.GEQUAL,[h1]:t.GREATER,[p1]:t.NOTEQUAL};function ie(P,M){if(M.type===ci&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Xn||M.magFilter===Sc||M.magFilter===ma||M.magFilter===_r||M.minFilter===Xn||M.minFilter===Sc||M.minFilter===ma||M.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,V[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,V[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,V[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,H[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,H[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===kn||M.minFilter!==ma&&M.minFilter!==_r||M.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ce(P,M){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",T));const te=M.source;let re=f.get(te);re===void 0&&(re={},f.set(te,re));const J=k(M);if(J!==P.__cacheKey){re[J]===void 0&&(re[J]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,W=!0),re[J].usedTimes++;const Me=re[P.__cacheKey];Me!==void 0&&(re[P.__cacheKey].usedTimes--,Me.usedTimes===0&&E(M)),P.__cacheKey=J,P.__webglTexture=re[J].texture}return W}function L(P,M,W){let te=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=t.TEXTURE_3D);const re=Ce(P,M),J=M.source;n.bindTexture(te,P.__webglTexture,t.TEXTURE0+W);const Me=i.get(J);if(J.version!==Me.__version||re===!0){n.activeTexture(t.TEXTURE0+W);const fe=Ye.getPrimaries(Ye.workingColorSpace),xe=M.colorSpace===Ii?null:Ye.getPrimaries(M.colorSpace),We=M.colorSpace===Ii||fe===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ae=v(M.image,!1,r.maxTextureSize);ae=rt(M,ae);const ve=s.convert(M.format,M.colorSpace),De=s.convert(M.type);let Ue=x(M.internalFormat,ve,De,M.colorSpace,M.isVideoTexture);ie(te,M);let Se;const Xe=M.mipmaps,Be=M.isVideoTexture!==!0,st=Me.__version===void 0||re===!0,F=J.dataReady,he=R(M,ae);if(M.isDepthTexture)Ue=y(M.format===Ds,M.type),st&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Ue,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Ue,ae.width,ae.height,0,ve,De,null));else if(M.isDataTexture)if(Xe.length>0){Be&&st&&n.texStorage2D(t.TEXTURE_2D,he,Ue,Xe[0].width,Xe[0].height);for(let K=0,ne=Xe.length;K<ne;K++)Se=Xe[K],Be?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Se.width,Se.height,ve,De,Se.data):n.texImage2D(t.TEXTURE_2D,K,Ue,Se.width,Se.height,0,ve,De,Se.data);M.generateMipmaps=!1}else Be?(st&&n.texStorage2D(t.TEXTURE_2D,he,Ue,ae.width,ae.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,ve,De,ae.data)):n.texImage2D(t.TEXTURE_2D,0,Ue,ae.width,ae.height,0,ve,De,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ue,Xe[0].width,Xe[0].height,ae.depth);for(let K=0,ne=Xe.length;K<ne;K++)if(Se=Xe[K],M.format!==Un)if(ve!==null)if(Be){if(F)if(M.layerUpdates.size>0){const _e=em(Se.width,Se.height,M.format,M.type);for(const me of M.layerUpdates){const Fe=Se.data.subarray(me*_e/Se.data.BYTES_PER_ELEMENT,(me+1)*_e/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,me,Se.width,Se.height,1,ve,Fe)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Se.width,Se.height,ae.depth,ve,Se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Ue,Se.width,Se.height,ae.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Se.width,Se.height,ae.depth,ve,De,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Ue,Se.width,Se.height,ae.depth,0,ve,De,Se.data)}else{Be&&st&&n.texStorage2D(t.TEXTURE_2D,he,Ue,Xe[0].width,Xe[0].height);for(let K=0,ne=Xe.length;K<ne;K++)Se=Xe[K],M.format!==Un?ve!==null?Be?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,Se.width,Se.height,ve,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Ue,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Se.width,Se.height,ve,De,Se.data):n.texImage2D(t.TEXTURE_2D,K,Ue,Se.width,Se.height,0,ve,De,Se.data)}else if(M.isDataArrayTexture)if(Be){if(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Ue,ae.width,ae.height,ae.depth),F)if(M.layerUpdates.size>0){const K=em(ae.width,ae.height,M.format,M.type);for(const ne of M.layerUpdates){const _e=ae.data.subarray(ne*K/ae.data.BYTES_PER_ELEMENT,(ne+1)*K/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,ae.width,ae.height,1,ve,De,_e)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ve,De,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,ae.width,ae.height,ae.depth,0,ve,De,ae.data);else if(M.isData3DTexture)Be?(st&&n.texStorage3D(t.TEXTURE_3D,he,Ue,ae.width,ae.height,ae.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ve,De,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,ae.width,ae.height,ae.depth,0,ve,De,ae.data);else if(M.isFramebufferTexture){if(st)if(Be)n.texStorage2D(t.TEXTURE_2D,he,Ue,ae.width,ae.height);else{let K=ae.width,ne=ae.height;for(let _e=0;_e<he;_e++)n.texImage2D(t.TEXTURE_2D,_e,Ue,K,ne,0,ve,De,null),K>>=1,ne>>=1}}else if(Xe.length>0){if(Be&&st){const K=Re(Xe[0]);n.texStorage2D(t.TEXTURE_2D,he,Ue,K.width,K.height)}for(let K=0,ne=Xe.length;K<ne;K++)Se=Xe[K],Be?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ve,De,Se):n.texImage2D(t.TEXTURE_2D,K,Ue,ve,De,Se);M.generateMipmaps=!1}else if(Be){if(st){const K=Re(ae);n.texStorage2D(t.TEXTURE_2D,he,Ue,K.width,K.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,De,ae)}else n.texImage2D(t.TEXTURE_2D,0,Ue,ve,De,ae);g(M)&&h(te),Me.__version=J.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function se(P,M,W){if(M.image.length!==6)return;const te=Ce(P,M),re=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+W);const J=i.get(re);if(re.version!==J.__version||te===!0){n.activeTexture(t.TEXTURE0+W);const Me=Ye.getPrimaries(Ye.workingColorSpace),fe=M.colorSpace===Ii?null:Ye.getPrimaries(M.colorSpace),xe=M.colorSpace===Ii||Me===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let ne=0;ne<6;ne++)!We&&!ae?ve[ne]=v(M.image[ne],!0,r.maxCubemapSize):ve[ne]=ae?M.image[ne].image:M.image[ne],ve[ne]=rt(M,ve[ne]);const De=ve[0],Ue=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),Xe=x(M.internalFormat,Ue,Se,M.colorSpace),Be=M.isVideoTexture!==!0,st=J.__version===void 0||te===!0,F=re.dataReady;let he=R(M,De);ie(t.TEXTURE_CUBE_MAP,M);let K;if(We){Be&&st&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Xe,De.width,De.height);for(let ne=0;ne<6;ne++){K=ve[ne].mipmaps;for(let _e=0;_e<K.length;_e++){const me=K[_e];M.format!==Un?Ue!==null?Be?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,me.width,me.height,Ue,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,Xe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,me.width,me.height,Ue,Se,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,Xe,me.width,me.height,0,Ue,Se,me.data)}}}else{if(K=M.mipmaps,Be&&st){K.length>0&&he++;const ne=Re(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Xe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ae){Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ve[ne].width,ve[ne].height,Ue,Se,ve[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Xe,ve[ne].width,ve[ne].height,0,Ue,Se,ve[ne].data);for(let _e=0;_e<K.length;_e++){const Fe=K[_e].image[ne].image;Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,Fe.width,Fe.height,Ue,Se,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,Xe,Fe.width,Fe.height,0,Ue,Se,Fe.data)}}else{Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ue,Se,ve[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Xe,Ue,Se,ve[ne]);for(let _e=0;_e<K.length;_e++){const me=K[_e];Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,Ue,Se,me.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,Xe,Ue,Se,me.image[ne])}}}g(M)&&h(t.TEXTURE_CUBE_MAP),J.__version=re.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function q(P,M,W,te,re,J){const Me=s.convert(W.format,W.colorSpace),fe=s.convert(W.type),xe=x(W.internalFormat,Me,fe,W.colorSpace),We=i.get(M),ae=i.get(W);if(ae.__renderTarget=M,!We.__hasExternalTextures){const ve=Math.max(1,M.width>>J),De=Math.max(1,M.height>>J);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,J,xe,ve,De,M.depth,0,Me,fe,null):n.texImage2D(re,J,xe,ve,De,0,Me,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Ve(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,re,ae.__webglTexture,0,Ne(M)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,re,ae.__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Z(P,M,W){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const te=M.depthTexture,re=te&&te.isDepthTexture?te.type:null,J=y(M.stencilBuffer,re),Me=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=Ne(M);Ve(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,J,M.width,M.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,J,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,J,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,P)}else{const te=M.textures;for(let re=0;re<te.length;re++){const J=te[re],Me=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),xe=x(J.internalFormat,Me,fe,J.colorSpace),We=Ne(M);W&&Ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,We,xe,M.width,M.height):Ve(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We,xe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,xe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(M.depthTexture);te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const re=te.__webglTexture,J=Ne(M);if(M.depthTexture.format===xs)Ve(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(M.depthTexture.format===Ds)Ve(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function de(P){const M=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const te=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),te){const re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,te.removeEventListener("dispose",re)};te.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=te}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ce(M.__webglFramebuffer,P)}else if(W){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]===void 0)M.__webglDepthbuffer[te]=t.createRenderbuffer(),Z(M.__webglDepthbuffer[te],P,!1);else{const re=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Z(M.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,re)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(P,M,W){const te=i.get(P);M!==void 0&&q(te.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&de(P)}function Ie(P){const M=P.texture,W=i.get(P),te=i.get(M);P.addEventListener("dispose",A);const re=P.textures,J=P.isWebGLCubeRenderTarget===!0,Me=re.length>1;if(Me||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,a.memory.textures++),J){W.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[fe]=[];for(let xe=0;xe<M.mipmaps.length;xe++)W.__webglFramebuffer[fe][xe]=t.createFramebuffer()}else W.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)W.__webglFramebuffer[fe]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Me)for(let fe=0,xe=re.length;fe<xe;fe++){const We=i.get(re[fe]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&Ve(P)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let fe=0;fe<re.length;fe++){const xe=re[fe];W.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[fe]);const We=s.convert(xe.format,xe.colorSpace),ae=s.convert(xe.type),ve=x(xe.internalFormat,We,ae,xe.colorSpace,P.isXRRenderTarget===!0),De=Ne(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,ve,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,W.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),Z(W.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),ie(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)q(W.__webglFramebuffer[fe][xe],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else q(W.__webglFramebuffer[fe],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let fe=0,xe=re.length;fe<xe;fe++){const We=re[fe],ae=i.get(We);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),ie(t.TEXTURE_2D,We),q(W.__webglFramebuffer,P,We,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),g(We)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(fe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,te.__webglTexture),ie(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)q(W.__webglFramebuffer[xe],P,M,t.COLOR_ATTACHMENT0,fe,xe);else q(W.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,fe,0);g(M)&&h(fe),n.unbindTexture()}P.depthBuffer&&de(P)}function Le(P){const M=P.textures;for(let W=0,te=M.length;W<te;W++){const re=M[W];if(g(re)){const J=_(P),Me=i.get(re).__webglTexture;n.bindTexture(J,Me),h(J),n.unbindTexture()}}}const Pe=[],I=[];function Ke(P){if(P.samples>0){if(Ve(P)===!1){const M=P.textures,W=P.width,te=P.height;let re=t.COLOR_BUFFER_BIT;const J=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(P),fe=M.length>1;if(fe)for(let xe=0;xe<M.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[xe]);const We=i.get(M[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,We,0)}t.blitFramebuffer(0,0,W,te,0,0,W,te,re,t.NEAREST),c===!0&&(Pe.length=0,I.length=0,Pe.push(t.COLOR_ATTACHMENT0+xe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Pe.push(J),I.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,I)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Pe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<M.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,Me.__webglColorRenderbuffer[xe]);const We=i.get(M[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,We,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ne(P){return Math.min(r.maxSamples,P.samples)}function Ve(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function be(P){const M=a.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function rt(P,M){const W=P.colorSpace,te=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Fs&&W!==Ii&&(Ye.getTransfer(W)===tt?(te!==Un||re!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function Re(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=U,this.rebindTextures=pe,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Ve}function OT(t,e){function n(i,r=Ii){let s;const a=Ye.getTransfer(r);if(i===_i)return t.UNSIGNED_BYTE;if(i===Af)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Cf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===F0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===U0)return t.BYTE;if(i===O0)return t.SHORT;if(i===Oo)return t.UNSIGNED_SHORT;if(i===Tf)return t.INT;if(i===Ar)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===Wo)return t.HALF_FLOAT;if(i===k0)return t.ALPHA;if(i===z0)return t.RGB;if(i===Un)return t.RGBA;if(i===B0)return t.LUMINANCE;if(i===H0)return t.LUMINANCE_ALPHA;if(i===xs)return t.DEPTH_COMPONENT;if(i===Ds)return t.DEPTH_STENCIL;if(i===V0)return t.RED;if(i===bf)return t.RED_INTEGER;if(i===G0)return t.RG;if(i===Rf)return t.RG_INTEGER;if(i===Pf)return t.RGBA_INTEGER;if(i===qa||i===Ka||i===Za||i===Qa)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ka)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nd||i===id||i===rd||i===sd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===id)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===od||i===ad||i===ld)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===od||i===ad)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ld)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cd||i===ud||i===dd||i===fd||i===hd||i===pd||i===md||i===gd||i===_d||i===vd||i===xd||i===yd||i===Sd||i===Md)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ud)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===md)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_d)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sd)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Md)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ja||i===Ed||i===wd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ja)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ed)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===W0||i===Td||i===Ad||i===Cd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ja)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Td)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ad)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class FT extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oo extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kT={type:"move"};class $c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),h=this._getHandJoint(l,v);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kT)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new oo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const zT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Zi({vertexShader:zT,fragmentShader:BT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yn(new Yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VT extends Lr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,m=null;const v=new HT,g=n.getContextAttributes();let h=null,_=null;const x=[],y=[],R=new Ge;let T=null;const A=new yn;A.viewport=new yt;const b=new yn;b.viewport=new yt;const E=[A,b],S=new FT;let C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let se=x[L];return se===void 0&&(se=new $c,x[L]=se),se.getTargetRaySpace()},this.getControllerGrip=function(L){let se=x[L];return se===void 0&&(se=new $c,x[L]=se),se.getGripSpace()},this.getHand=function(L){let se=x[L];return se===void 0&&(se=new $c,x[L]=se),se.getHandSpace()};function O(L){const se=y.indexOf(L.inputSource);if(se===-1)return;const q=x[se];q!==void 0&&(q.update(L.inputSource,L.frame,l||a),q.dispatchEvent({type:L.type,data:L.inputSource}))}function k(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",X);for(let L=0;L<x.length;L++){const se=y[L];se!==null&&(y[L]=null,x[L].disconnect(se))}C=null,D=null,v.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,_=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",k),r.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const se={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Cr(p.framebufferWidth,p.framebufferHeight,{format:Un,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let se=null,q=null,Z=null;g.depth&&(Z=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=g.stencil?Ds:xs,q=g.stencil?Ls:Ar);const ce={colorFormat:n.RGBA8,depthFormat:Z,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Cr(f.textureWidth,f.textureHeight,{format:Un,type:_i,depthTexture:new o_(f.textureWidth,f.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(L){for(let se=0;se<L.removed.length;se++){const q=L.removed[se],Z=y.indexOf(q);Z>=0&&(y[Z]=null,x[Z].disconnect(q))}for(let se=0;se<L.added.length;se++){const q=L.added[se];let Z=y.indexOf(q);if(Z===-1){for(let de=0;de<x.length;de++)if(de>=y.length){y.push(q),Z=de;break}else if(y[de]===null){y[de]=q,Z=de;break}if(Z===-1)break}const ce=x[Z];ce&&ce.connect(q)}}const G=new j,Q=new j;function U(L,se,q){G.setFromMatrixPosition(se.matrixWorld),Q.setFromMatrixPosition(q.matrixWorld);const Z=G.distanceTo(Q),ce=se.projectionMatrix.elements,de=q.projectionMatrix.elements,pe=ce[14]/(ce[10]-1),Ie=ce[14]/(ce[10]+1),Le=(ce[9]+1)/ce[5],Pe=(ce[9]-1)/ce[5],I=(ce[8]-1)/ce[0],Ke=(de[8]+1)/de[0],Ne=pe*I,Ve=pe*Ke,be=Z/(-I+Ke),rt=be*-I;if(se.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(rt),L.translateZ(be),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),ce[10]===-1)L.projectionMatrix.copy(se.projectionMatrix),L.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Re=pe+be,P=Ie+be,M=Ne-rt,W=Ve+(Z-rt),te=Le*Ie/P*Re,re=Pe*Ie/P*Re;L.projectionMatrix.makePerspective(M,W,te,re,Re,P),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function V(L,se){se===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(se.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;let se=L.near,q=L.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(q=v.depthFar)),S.near=b.near=A.near=se,S.far=b.far=A.far=q,(C!==S.near||D!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,D=S.far),A.layers.mask=L.layers.mask|2,b.layers.mask=L.layers.mask|4,S.layers.mask=A.layers.mask|b.layers.mask;const Z=L.parent,ce=S.cameras;V(S,Z);for(let de=0;de<ce.length;de++)V(ce[de],Z);ce.length===2?U(S,A,b):S.projectionMatrix.copy(A.projectionMatrix),H(L,S,Z)};function H(L,se,q){q===null?L.matrix.copy(se.matrixWorld):(L.matrix.copy(q.matrixWorld),L.matrix.invert(),L.matrix.multiply(se.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(se.projectionMatrix),L.projectionMatrixInverse.copy(se.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Fo*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(L){c=L,f!==null&&(f.fixedFoveation=L),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=L)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ee=null;function ie(L,se){if(u=se.getViewerPose(l||a),m=se,u!==null){const q=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Z=!1;q.length!==S.cameras.length&&(S.cameras.length=0,Z=!0);for(let de=0;de<q.length;de++){const pe=q[de];let Ie=null;if(p!==null)Ie=p.getViewport(pe);else{const Pe=d.getViewSubImage(f,pe);Ie=Pe.viewport,de===0&&(e.setRenderTargetTextures(_,Pe.colorTexture,f.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(_))}let Le=E[de];Le===void 0&&(Le=new yn,Le.layers.enable(de),Le.viewport=new yt,E[de]=Le),Le.matrix.fromArray(pe.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(pe.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),de===0&&(S.matrix.copy(Le.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Z===!0&&S.cameras.push(Le)}const ce=r.enabledFeatures;if(ce&&ce.includes("depth-sensing")){const de=d.getDepthInformation(q[0]);de&&de.isValid&&de.texture&&v.init(e,de,r.renderState)}}for(let q=0;q<x.length;q++){const Z=y[q],ce=x[q];Z!==null&&ce!==void 0&&ce.update(Z,se,l||a)}ee&&ee(L,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),m=null}const Ce=new s_;Ce.setAnimationLoop(ie),this.setAnimationLoop=function(L){ee=L},this.dispose=function(){}}}const ar=new vi,GT=new Et;function WT(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,t_(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,_,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,y)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),v(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(a(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?c(g,h,_,x):h.isSpriteMaterial?l(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===rn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===rn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const _=e.get(h),x=_.envMap,y=_.envMapRotation;x&&(g.envMap.value=x,ar.copy(y),ar.x*=-1,ar.y*=-1,ar.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),g.envMapRotation.value.setFromMatrix4(GT.makeRotationFromEuler(ar)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function a(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function c(g,h,_,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*_,g.scale.value=x*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function l(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,_){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function v(g,h){const _=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,x){const y=x.program;i.uniformBlockBinding(_,y)}function l(_,x){let y=r[_.id];y===void 0&&(m(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",g));const R=x.program;i.updateUBOMapping(_,R);const T=e.render.frame;s[_.id]!==T&&(f(_),s[_.id]=T)}function u(_){const x=d();_.__bindingPointIndex=x;const y=t.createBuffer(),R=_.__size,T=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=r[_.id],y=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let T=0,A=y.length;T<A;T++){const b=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,S=b.length;E<S;E++){const C=b[E];if(p(C,T,E,R)===!0){const D=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let X=0;X<O.length;X++){const G=O[X],Q=v(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,D+k,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,k),k+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,D,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,x,y,R){const T=_.value,A=x+"_"+y;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const b=R[A];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return R[A]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function m(_){const x=_.uniforms;let y=0;const R=16;for(let A=0,b=x.length;A<b;A++){const E=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,C=E.length;S<C;S++){const D=E[S],O=Array.isArray(D.value)?D.value:[D.value];for(let k=0,X=O.length;k<X;k++){const G=O[k],Q=v(G),U=y%R,V=U%Q.boundary,H=U+V;y+=V,H!==0&&R-H<Q.storage&&(y+=R-H),D.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=Q.storage}}}const T=y%R;return T>0&&(y+=R-T),_.__size=y,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function g(_){const x=_.target;x.removeEventListener("dispose",g);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class XT{constructor(e={}){const{canvas:n=N1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,h=null;const _=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=Xi,this.toneMappingExposure=1;const y=this;let R=!1,T=0,A=0,b=null,E=-1,S=null;const C=new yt,D=new yt;let O=null;const k=new it(0);let X=0,G=n.width,Q=n.height,U=1,V=null,H=null;const ee=new yt(0,0,G,Q),ie=new yt(0,0,G,Q);let Ce=!1;const L=new r_;let se=!1,q=!1;const Z=new Et,ce=new Et,de=new j,pe=new yt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function Pe(){return b===null?U:1}let I=i;function Ke(w,z){return n.getContext(w,z)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wf}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",_e,!1),n.addEventListener("webglcontextcreationerror",me,!1),I===null){const z="webgl2";if(I=Ke(z,w),I===null)throw Ke(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ne,Ve,be,rt,Re,P,M,W,te,re,J,Me,fe,xe,We,ae,ve,De,Ue,Se,Xe,Be,st,F;function he(){Ne=new ZE(I),Ne.init(),Be=new OT(I,Ne),Ve=new WE(I,Ne,e,Be),be=new NT(I,Ne),Ve.reverseDepthBuffer&&f&&be.buffers.depth.setReversed(!0),rt=new ew(I),Re=new vT,P=new UT(I,Ne,be,Re,Ve,Be,rt),M=new XE(y),W=new KE(y),te=new oS(I),st=new VE(I,te),re=new QE(I,te,rt,st),J=new nw(I,re,te,rt),Ue=new tw(I,Ve,P),ae=new jE(Re),Me=new _T(y,M,W,Ne,Ve,st,ae),fe=new WT(y,Re),xe=new yT,We=new AT(Ne),De=new HE(y,M,W,be,J,p,c),ve=new LT(y,J,Ve),F=new jT(I,rt,Ve,be),Se=new GE(I,Ne,rt),Xe=new JE(I,Ne,rt),rt.programs=Me.programs,y.capabilities=Ve,y.extensions=Ne,y.properties=Re,y.renderLists=xe,y.shadowMap=ve,y.state=be,y.info=rt}he();const K=new VT(y,I);this.xr=K,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Ne.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ne.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(w){w!==void 0&&(U=w,this.setSize(G,Q,!1))},this.getSize=function(w){return w.set(G,Q)},this.setSize=function(w,z,Y=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,Q=z,n.width=Math.floor(w*U),n.height=Math.floor(z*U),Y===!0&&(n.style.width=w+"px",n.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(G*U,Q*U).floor()},this.setDrawingBufferSize=function(w,z,Y){G=w,Q=z,U=Y,n.width=Math.floor(w*Y),n.height=Math.floor(z*Y),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(ee)},this.setViewport=function(w,z,Y,$){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,z,Y,$),be.viewport(C.copy(ee).multiplyScalar(U).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,z,Y,$){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,z,Y,$),be.scissor(D.copy(ie).multiplyScalar(U).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(w){be.setScissorTest(Ce=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){H=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(w=!0,z=!0,Y=!0){let $=0;if(w){let B=!1;if(b!==null){const le=b.texture.format;B=le===Pf||le===Rf||le===bf}if(B){const le=b.texture.type,ge=le===_i||le===Ar||le===Oo||le===Ls||le===Af||le===Cf,Ee=De.getClearColor(),we=De.getClearAlpha(),Oe=Ee.r,ke=Ee.g,Te=Ee.b;ge?(m[0]=Oe,m[1]=ke,m[2]=Te,m[3]=we,I.clearBufferuiv(I.COLOR,0,m)):(v[0]=Oe,v[1]=ke,v[2]=Te,v[3]=we,I.clearBufferiv(I.COLOR,0,v))}else $|=I.COLOR_BUFFER_BIT}z&&($|=I.DEPTH_BUFFER_BIT),Y&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",_e,!1),n.removeEventListener("webglcontextcreationerror",me,!1),xe.dispose(),We.dispose(),Re.dispose(),M.dispose(),W.dispose(),J.dispose(),st.dispose(),F.dispose(),Me.dispose(),K.dispose(),K.removeEventListener("sessionstart",Ff),K.removeEventListener("sessionend",kf),tr.stop()};function ne(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=rt.autoReset,z=ve.enabled,Y=ve.autoUpdate,$=ve.needsUpdate,B=ve.type;he(),rt.autoReset=w,ve.enabled=z,ve.autoUpdate=Y,ve.needsUpdate=$,ve.type=B}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Fe(w){const z=w.target;z.removeEventListener("dispose",Fe),_t(z)}function _t(w){Ut(w),Re.remove(w)}function Ut(w){const z=Re.get(w).programs;z!==void 0&&(z.forEach(function(Y){Me.releaseProgram(Y)}),w.isShaderMaterial&&Me.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,Y,$,B,le){z===null&&(z=Ie);const ge=B.isMesh&&B.matrixWorld.determinant()<0,Ee=f_(w,z,Y,$,B);be.setMaterial($,ge);let we=Y.index,Oe=1;if($.wireframe===!0){if(we=re.getWireframeAttribute(Y),we===void 0)return;Oe=2}const ke=Y.drawRange,Te=Y.attributes.position;let qe=ke.start*Oe,ot=(ke.start+ke.count)*Oe;le!==null&&(qe=Math.max(qe,le.start*Oe),ot=Math.min(ot,(le.start+le.count)*Oe)),we!==null?(qe=Math.max(qe,0),ot=Math.min(ot,we.count)):Te!=null&&(qe=Math.max(qe,0),ot=Math.min(ot,Te.count));const lt=ot-qe;if(lt<0||lt===1/0)return;st.setup(B,$,Ee,Y,we);let Kt,Ze=Se;if(we!==null&&(Kt=te.get(we),Ze=Xe,Ze.setIndex(Kt)),B.isMesh)$.wireframe===!0?(be.setLineWidth($.wireframeLinewidth*Pe()),Ze.setMode(I.LINES)):Ze.setMode(I.TRIANGLES);else if(B.isLine){let Ae=$.linewidth;Ae===void 0&&(Ae=1),be.setLineWidth(Ae*Pe()),B.isLineSegments?Ze.setMode(I.LINES):B.isLineLoop?Ze.setMode(I.LINE_LOOP):Ze.setMode(I.LINE_STRIP)}else B.isPoints?Ze.setMode(I.POINTS):B.isSprite&&Ze.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ze.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))Ze.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ae=B._multiDrawStarts,Qn=B._multiDrawCounts,Qe=B._multiDrawCount,An=we?te.get(we).bytesPerElement:1,Nr=Re.get($).currentProgram.getUniforms();for(let sn=0;sn<Qe;sn++)Nr.setValue(I,"_gl_DrawID",sn),Ze.render(Ae[sn]/An,Qn[sn])}else if(B.isInstancedMesh)Ze.renderInstances(qe,lt,B.count);else if(Y.isInstancedBufferGeometry){const Ae=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Qn=Math.min(Y.instanceCount,Ae);Ze.renderInstances(qe,lt,Qn)}else Ze.render(qe,lt)};function Je(w,z,Y){w.transparent===!0&&w.side===jn&&w.forceSinglePass===!1?(w.side=rn,w.needsUpdate=!0,qo(w,z,Y),w.side=Ki,w.needsUpdate=!0,qo(w,z,Y),w.side=jn):qo(w,z,Y)}this.compile=function(w,z,Y=null){Y===null&&(Y=w),h=We.get(Y),h.init(z),x.push(h),Y.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),w!==Y&&w.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();const $=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const le=B.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const Ee=le[ge];Je(Ee,Y,B),$.add(Ee)}else Je(le,Y,B),$.add(le)}),x.pop(),h=null,$},this.compileAsync=function(w,z,Y=null){const $=this.compile(w,z,Y);return new Promise(B=>{function le(){if($.forEach(function(ge){Re.get(ge).currentProgram.isReady()&&$.delete(ge)}),$.size===0){B(w);return}setTimeout(le,10)}Ne.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Tn=null;function Zn(w){Tn&&Tn(w)}function Ff(){tr.stop()}function kf(){tr.start()}const tr=new s_;tr.setAnimationLoop(Zn),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(w){Tn=w,K.setAnimationLoop(w),w===null?tr.stop():tr.start()},K.addEventListener("sessionstart",Ff),K.addEventListener("sessionend",kf),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(z),z=K.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,z,b),h=We.get(w,x.length),h.init(z),x.push(h),ce.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),L.setFromProjectionMatrix(ce),q=this.localClippingEnabled,se=ae.init(this.clippingPlanes,q),g=xe.get(w,_.length),g.init(),_.push(g),K.enabled===!0&&K.isPresenting===!0){const le=y.xr.getDepthSensingMesh();le!==null&&Xl(le,z,-1/0,y.sortObjects)}Xl(w,z,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(V,H),Le=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Le&&De.addToRenderList(g,w),this.info.render.frame++,se===!0&&ae.beginShadows();const Y=h.state.shadowsArray;ve.render(Y,w,z),se===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,B=g.transmissive;if(h.setupLights(),z.isArrayCamera){const le=z.cameras;if(B.length>0)for(let ge=0,Ee=le.length;ge<Ee;ge++){const we=le[ge];Bf($,B,w,we)}Le&&De.render(w);for(let ge=0,Ee=le.length;ge<Ee;ge++){const we=le[ge];zf(g,w,we,we.viewport)}}else B.length>0&&Bf($,B,w,z),Le&&De.render(w),zf(g,w,z);b!==null&&(P.updateMultisampleRenderTarget(b),P.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(y,w,z),st.resetDefaultState(),E=-1,S=null,x.pop(),x.length>0?(h=x[x.length-1],se===!0&&ae.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,_.pop(),_.length>0?g=_[_.length-1]:g=null};function Xl(w,z,Y,$){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||L.intersectsSprite(w)){$&&pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ce);const ge=J.update(w),Ee=w.material;Ee.visible&&g.push(w,ge,Ee,Y,pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||L.intersectsObject(w))){const ge=J.update(w),Ee=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),pe.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),pe.copy(ge.boundingSphere.center)),pe.applyMatrix4(w.matrixWorld).applyMatrix4(ce)),Array.isArray(Ee)){const we=ge.groups;for(let Oe=0,ke=we.length;Oe<ke;Oe++){const Te=we[Oe],qe=Ee[Te.materialIndex];qe&&qe.visible&&g.push(w,ge,qe,Y,pe.z,Te)}}else Ee.visible&&g.push(w,ge,Ee,Y,pe.z,null)}}const le=w.children;for(let ge=0,Ee=le.length;ge<Ee;ge++)Xl(le[ge],z,Y,$)}function zf(w,z,Y,$){const B=w.opaque,le=w.transmissive,ge=w.transparent;h.setupLightsView(Y),se===!0&&ae.setGlobalState(y.clippingPlanes,Y),$&&be.viewport(C.copy($)),B.length>0&&$o(B,z,Y),le.length>0&&$o(le,z,Y),ge.length>0&&$o(ge,z,Y),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Bf(w,z,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[$.id]===void 0&&(h.state.transmissionRenderTarget[$.id]=new Cr(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?Wo:_i,minFilter:_r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const le=h.state.transmissionRenderTarget[$.id],ge=$.viewport||C;le.setSize(ge.z,ge.w);const Ee=y.getRenderTarget();y.setRenderTarget(le),y.getClearColor(k),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),Le&&De.render(Y);const we=y.toneMapping;y.toneMapping=Xi;const Oe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),h.setupLightsView($),se===!0&&ae.setGlobalState(y.clippingPlanes,$),$o(w,Y,$),P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Te=0,qe=z.length;Te<qe;Te++){const ot=z[Te],lt=ot.object,Kt=ot.geometry,Ze=ot.material,Ae=ot.group;if(Ze.side===jn&&lt.layers.test($.layers)){const Qn=Ze.side;Ze.side=rn,Ze.needsUpdate=!0,Hf(lt,Y,$,Kt,Ze,Ae),Ze.side=Qn,Ze.needsUpdate=!0,ke=!0}}ke===!0&&(P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le))}y.setRenderTarget(Ee),y.setClearColor(k,X),Oe!==void 0&&($.viewport=Oe),y.toneMapping=we}function $o(w,z,Y){const $=z.isScene===!0?z.overrideMaterial:null;for(let B=0,le=w.length;B<le;B++){const ge=w[B],Ee=ge.object,we=ge.geometry,Oe=$===null?ge.material:$,ke=ge.group;Ee.layers.test(Y.layers)&&Hf(Ee,z,Y,we,Oe,ke)}}function Hf(w,z,Y,$,B,le){w.onBeforeRender(y,z,Y,$,B,le),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(y,z,Y,$,w,le),B.transparent===!0&&B.side===jn&&B.forceSinglePass===!1?(B.side=rn,B.needsUpdate=!0,y.renderBufferDirect(Y,z,$,B,w,le),B.side=Ki,B.needsUpdate=!0,y.renderBufferDirect(Y,z,$,B,w,le),B.side=jn):y.renderBufferDirect(Y,z,$,B,w,le),w.onAfterRender(y,z,Y,$,B,le)}function qo(w,z,Y){z.isScene!==!0&&(z=Ie);const $=Re.get(w),B=h.state.lights,le=h.state.shadowsArray,ge=B.state.version,Ee=Me.getParameters(w,B.state,le,z,Y),we=Me.getProgramCacheKey(Ee);let Oe=$.programs;$.environment=w.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(w.isMeshStandardMaterial?W:M).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",Fe),Oe=new Map,$.programs=Oe);let ke=Oe.get(we);if(ke!==void 0){if($.currentProgram===ke&&$.lightsStateVersion===ge)return Gf(w,Ee),ke}else Ee.uniforms=Me.getUniforms(w),w.onBeforeCompile(Ee,y),ke=Me.acquireProgram(Ee,we),Oe.set(we,ke),$.uniforms=Ee.uniforms;const Te=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Te.clippingPlanes=ae.uniform),Gf(w,Ee),$.needsLights=p_(w),$.lightsStateVersion=ge,$.needsLights&&(Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMap.value=B.state.directionalShadowMap,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotShadowMap.value=B.state.spotShadowMap,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMap.value=B.state.pointShadowMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix),$.currentProgram=ke,$.uniformsList=null,ke}function Vf(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=el.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Gf(w,z){const Y=Re.get(w);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function f_(w,z,Y,$,B){z.isScene!==!0&&(z=Ie),P.resetTextureUnits();const le=z.fog,ge=$.isMeshStandardMaterial?z.environment:null,Ee=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Fs,we=($.isMeshStandardMaterial?W:M).get($.envMap||ge),Oe=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ke=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Te=!!Y.morphAttributes.position,qe=!!Y.morphAttributes.normal,ot=!!Y.morphAttributes.color;let lt=Xi;$.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(lt=y.toneMapping);const Kt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ze=Kt!==void 0?Kt.length:0,Ae=Re.get($),Qn=h.state.lights;if(se===!0&&(q===!0||w!==S)){const mn=w===S&&$.id===E;ae.setState($,w,mn)}let Qe=!1;$.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Qn.state.version||Ae.outputColorSpace!==Ee||B.isBatchedMesh&&Ae.batching===!1||!B.isBatchedMesh&&Ae.batching===!0||B.isBatchedMesh&&Ae.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ae.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ae.instancing===!1||!B.isInstancedMesh&&Ae.instancing===!0||B.isSkinnedMesh&&Ae.skinning===!1||!B.isSkinnedMesh&&Ae.skinning===!0||B.isInstancedMesh&&Ae.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ae.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ae.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ae.instancingMorph===!1&&B.morphTexture!==null||Ae.envMap!==we||$.fog===!0&&Ae.fog!==le||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ae.numPlanes||Ae.numIntersection!==ae.numIntersection)||Ae.vertexAlphas!==Oe||Ae.vertexTangents!==ke||Ae.morphTargets!==Te||Ae.morphNormals!==qe||Ae.morphColors!==ot||Ae.toneMapping!==lt||Ae.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Ae.__version=$.version);let An=Ae.currentProgram;Qe===!0&&(An=qo($,z,B));let Nr=!1,sn=!1,Bs=!1;const ct=An.getUniforms(),Bn=Ae.uniforms;if(be.useProgram(An.program)&&(Nr=!0,sn=!0,Bs=!0),$.id!==E&&(E=$.id,sn=!0),Nr||S!==w){be.buffers.depth.getReversed()?(Z.copy(w.projectionMatrix),U1(Z),O1(Z),ct.setValue(I,"projectionMatrix",Z)):ct.setValue(I,"projectionMatrix",w.projectionMatrix),ct.setValue(I,"viewMatrix",w.matrixWorldInverse);const yi=ct.map.cameraPosition;yi!==void 0&&yi.setValue(I,de.setFromMatrixPosition(w.matrixWorld)),Ve.logarithmicDepthBuffer&&ct.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ct.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,sn=!0,Bs=!0)}if(B.isSkinnedMesh){ct.setOptional(I,B,"bindMatrix"),ct.setOptional(I,B,"bindMatrixInverse");const mn=B.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),ct.setValue(I,"boneTexture",mn.boneTexture,P))}B.isBatchedMesh&&(ct.setOptional(I,B,"batchingTexture"),ct.setValue(I,"batchingTexture",B._matricesTexture,P),ct.setOptional(I,B,"batchingIdTexture"),ct.setValue(I,"batchingIdTexture",B._indirectTexture,P),ct.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&ct.setValue(I,"batchingColorTexture",B._colorsTexture,P));const Hs=Y.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0)&&Ue.update(B,Y,An),(sn||Ae.receiveShadow!==B.receiveShadow)&&(Ae.receiveShadow=B.receiveShadow,ct.setValue(I,"receiveShadow",B.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Bn.envMap.value=we,Bn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(Bn.envMapIntensity.value=z.environmentIntensity),sn&&(ct.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&h_(Bn,Bs),le&&$.fog===!0&&fe.refreshFogUniforms(Bn,le),fe.refreshMaterialUniforms(Bn,$,U,Q,h.state.transmissionRenderTarget[w.id]),el.upload(I,Vf(Ae),Bn,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(el.upload(I,Vf(Ae),Bn,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ct.setValue(I,"center",B.center),ct.setValue(I,"modelViewMatrix",B.modelViewMatrix),ct.setValue(I,"normalMatrix",B.normalMatrix),ct.setValue(I,"modelMatrix",B.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const mn=$.uniformsGroups;for(let yi=0,Si=mn.length;yi<Si;yi++){const Wf=mn[yi];F.update(Wf,An),F.bind(Wf,An)}}return An}function h_(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function p_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,z,Y){Re.get(w.texture).__webglTexture=z,Re.get(w.depthTexture).__webglTexture=Y;const $=Re.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){const Y=Re.get(w);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,Y=0){b=w,T=z,A=Y;let $=!0,B=null,le=!1,ge=!1;if(w){const we=Re.get(w);if(we.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(I.FRAMEBUFFER,null),$=!1;else if(we.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(we.__hasExternalTextures)P.rebindTextures(w,Re.get(w.texture).__webglTexture,Re.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Te=w.depthTexture;if(we.__boundDepthTexture!==Te){if(Te!==null&&Re.has(Te)&&(w.width!==Te.image.width||w.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ge=!0);const ke=Re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[z])?B=ke[z][Y]:B=ke[z],le=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?B=Re.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?B=ke[Y]:B=ke,C.copy(w.viewport),D.copy(w.scissor),O=w.scissorTest}else C.copy(ee).multiplyScalar(U).floor(),D.copy(ie).multiplyScalar(U).floor(),O=Ce;if(be.bindFramebuffer(I.FRAMEBUFFER,B)&&$&&be.drawBuffers(w,B),be.viewport(C),be.scissor(D),be.setScissorTest(O),le){const we=Re.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,Y)}else if(ge){const we=Re.get(w.texture),Oe=z||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.__webglTexture,Y||0,Oe)}E=-1},this.readRenderTargetPixels=function(w,z,Y,$,B,le,ge){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){be.bindFramebuffer(I.FRAMEBUFFER,Ee);try{const we=w.texture,Oe=we.format,ke=we.type;if(!Ve.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-$&&Y>=0&&Y<=w.height-B&&I.readPixels(z,Y,$,B,Be.convert(Oe),Be.convert(ke),le)}finally{const we=b!==null?Re.get(b).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,z,Y,$,B,le,ge){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){const we=w.texture,Oe=we.format,ke=we.type;if(!Ve.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-$&&Y>=0&&Y<=w.height-B){be.bindFramebuffer(I.FRAMEBUFFER,Ee);const Te=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.bufferData(I.PIXEL_PACK_BUFFER,le.byteLength,I.STREAM_READ),I.readPixels(z,Y,$,B,Be.convert(Oe),Be.convert(ke),0);const qe=b!==null?Re.get(b).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,qe);const ot=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await I1(I,ot,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Te),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,le),I.deleteBuffer(Te),I.deleteSync(ot),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,z=null,Y=0){w.isTexture!==!0&&(ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);const $=Math.pow(2,-Y),B=Math.floor(w.image.width*$),le=Math.floor(w.image.height*$),ge=z!==null?z.x:0,Ee=z!==null?z.y:0;P.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,ge,Ee,B,le),be.unbindTexture()},this.copyTextureToTexture=function(w,z,Y=null,$=null,B=0){w.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],z=arguments[2],B=arguments[3]||0,Y=null);let le,ge,Ee,we,Oe,ke,Te,qe,ot;const lt=w.isCompressedTexture?w.mipmaps[B]:w.image;Y!==null?(le=Y.max.x-Y.min.x,ge=Y.max.y-Y.min.y,Ee=Y.isBox3?Y.max.z-Y.min.z:1,we=Y.min.x,Oe=Y.min.y,ke=Y.isBox3?Y.min.z:0):(le=lt.width,ge=lt.height,Ee=lt.depth||1,we=0,Oe=0,ke=0),$!==null?(Te=$.x,qe=$.y,ot=$.z):(Te=0,qe=0,ot=0);const Kt=Be.convert(z.format),Ze=Be.convert(z.type);let Ae;z.isData3DTexture?(P.setTexture3D(z,0),Ae=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),Ae=I.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),Ae=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const Qn=I.getParameter(I.UNPACK_ROW_LENGTH),Qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),An=I.getParameter(I.UNPACK_SKIP_PIXELS),Nr=I.getParameter(I.UNPACK_SKIP_ROWS),sn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,lt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,we),I.pixelStorei(I.UNPACK_SKIP_ROWS,Oe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke);const Bs=w.isDataArrayTexture||w.isData3DTexture,ct=z.isDataArrayTexture||z.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Bn=Re.get(w),Hs=Re.get(z),mn=Re.get(Bn.__renderTarget),yi=Re.get(Hs.__renderTarget);be.bindFramebuffer(I.READ_FRAMEBUFFER,mn.__webglFramebuffer),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Si=0;Si<Ee;Si++)Bs&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.get(w).__webglTexture,B,ke+Si),w.isDepthTexture?(ct&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Re.get(z).__webglTexture,B,ot+Si),I.blitFramebuffer(we,Oe,le,ge,Te,qe,le,ge,I.DEPTH_BUFFER_BIT,I.NEAREST)):ct?I.copyTexSubImage3D(Ae,B,Te,qe,ot+Si,we,Oe,le,ge):I.copyTexSubImage2D(Ae,B,Te,qe,ot+Si,we,Oe,le,ge);be.bindFramebuffer(I.READ_FRAMEBUFFER,null),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ct?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Ae,B,Te,qe,ot,le,ge,Ee,Kt,Ze,lt.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(Ae,B,Te,qe,ot,le,ge,Ee,Kt,lt.data):I.texSubImage3D(Ae,B,Te,qe,ot,le,ge,Ee,Kt,Ze,lt):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,B,Te,qe,le,ge,Kt,Ze,lt.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,B,Te,qe,lt.width,lt.height,Kt,lt.data):I.texSubImage2D(I.TEXTURE_2D,B,Te,qe,le,ge,Kt,Ze,lt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Qn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,An),I.pixelStorei(I.UNPACK_SKIP_ROWS,Nr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,sn),B===0&&z.generateMipmaps&&I.generateMipmap(Ae),be.unbindTexture()},this.copyTextureToTexture3D=function(w,z,Y=null,$=null,B=0){return w.isTexture!==!0&&(ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,w=arguments[2],z=arguments[3],B=arguments[4]||0),ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,z,Y,$,B)},this.initRenderTarget=function(w){Re.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),be.unbindTexture()},this.resetState=function(){T=0,A=0,b=null,be.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}class YT extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const tm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class $T{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const p=l[d],m=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null}}}const qT=new $T;class Uf{constructor(e){this.manager=e!==void 0?e:qT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Uf.DEFAULT_MATERIAL_NAME="__DEFAULT";class KT extends Uf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=tm.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=ko("img");function c(){u(),tm.add(e,this),n&&n(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class ZT extends Uf{constructor(e){super(e)}load(e,n,i,r){const s=new Yt,a=new KT(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class QT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=nm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function nm(){return performance.now()}class im{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ht(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class JT extends Lr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wf);const rm={type:"change"},Of={type:"start"},d_={type:"end"},Oa=new K0,sm=new Li,e2=Math.cos(70*X0.DEG2RAD),wt=new j,Zt=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qc=1e-6;class t2 extends JT{constructor(e,n=null){super(e,n),this.state=nt.NONE,this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_s.ROTATE,MIDDLE:_s.DOLLY,RIGHT:_s.PAN},this.touches={ONE:cs.ROTATE,TWO:cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new br,this._lastTargetPosition=new j,this._quat=new br().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new im,this._sphericalDelta=new im,this._scale=1,this._panOffset=new j,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new j,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=i2.bind(this),this._onPointerDown=n2.bind(this),this._onPointerUp=r2.bind(this),this._onContextMenu=d2.bind(this),this._onMouseWheel=a2.bind(this),this._onKeyDown=l2.bind(this),this._onTouchStart=c2.bind(this),this._onTouchMove=u2.bind(this),this._onMouseDown=s2.bind(this),this._onMouseMove=o2.bind(this),this._interceptControlDown=f2.bind(this),this._interceptControlUp=h2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rm),this.update(),this.state=nt.NONE}update(e=null){const n=this.object.position;wt.copy(n).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Zt:i>Math.PI&&(i-=Zt),r<-Math.PI?r+=Zt:r>Math.PI&&(r-=Zt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),n.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=wt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new j(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new j(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Oa.origin.copy(this.object.position),Oa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oa.direction))<e2?this.object.lookAt(this.target):(sm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oa.intersectPlane(sm,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>qc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qc||this._lastTargetPosition.distanceToSquared(this.target)>qc?(this.dispatchEvent(rm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zt/60*this.autoRotateSpeed*e:Zt/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){wt.setFromMatrixColumn(n,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,n){this.screenSpacePanning===!0?wt.setFromMatrixColumn(n,1):(wt.setFromMatrixColumn(n,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;wt.copy(r).sub(this.target);let s=wt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/n.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/n.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ge,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function n2(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function i2(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function r2(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(d_),this.state=nt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function s2(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=nt.DOLLY;break;case _s.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=nt.ROTATE}break;case _s.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Of)}function o2(t){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function a2(t){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(t.preventDefault(),this.dispatchEvent(Of),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(d_))}function l2(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function c2(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=nt.TOUCH_ROTATE;break;case cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=nt.TOUCH_DOLLY_PAN;break;case cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(Of)}function u2(t){switch(this._trackPointer(t),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=nt.NONE}}function d2(t){this.enabled!==!1&&t.preventDefault()}function f2(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function h2(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const p2=["svg/ts.svg","svg/js.svg","svg/react.svg","svg/astro.svg","svg/alpinejs.svg","svg/tailwindcss.svg","svg/html.svg","svg/css.svg","svg/threejs.svg","svg/node.svg","svg/express.svg","svg/moleculer.svg","svg/prisma.svg","svg/firebase.svg","svg/docker.svg","svg/gc.svg","svg/githubactions.svg","svg/linux.svg","svg/ubuntu.svg","svg/nginx.svg","svg/bash.svg","svg/git.svg","svg/gh.svg","svg/npm.svg","svg/vitejs.svg","svg/vitest.svg","svg/vsc.svg","svg/neovim.svg","svg/figma.svg","svg/markdown.svg","svg/macos.svg","svg/shields.svg","svg/svg.svg"],m2={icons:p2},g2=m2.icons.map(t=>`/react_cv_v2/${t}`);function _2(){const t=document.querySelector("#skill_cloud_container");if(t.querySelector("canvas"))return;const e=document.createElement("canvas");t.appendChild(e);const n=new YT,i=new yn(75,window.innerWidth/window.innerHeight,.1,1e3),r=new XT({canvas:e,antialias:!0});r.setSize(window.innerWidth,window.innerHeight);const s=new oo;n.add(s),r.setClearColor(0,0);function a(y,R){const T=new Yo(1,1),A=new Nf({map:y,transparent:!0,side:jn}),b=new Yn(T,A);return b.position.set(R.x,R.y,R.z),b.lookAt(i.position),b}function o(y,R){for(const T of s.children)if(T.position.distanceTo(y)<R)return!0;return!1}const c=new ZT,l=1.8;function u(y){c.load(y,R=>{const T=R.image;if(!(T!=null&&T.width)||!(T!=null&&T.height)){console.warn(`Icon ${y} has no intrinsic size (an SVG needs width and height, not just a viewBox) - skipping`),R.dispose();return}let A,b=0;const E=50;do{const C=Math.acos(1-2*Math.random()),D=2*Math.PI*Math.random(),O=8*Math.sin(C)*Math.cos(D),k=6*Math.sin(C)*Math.sin(D),X=6*Math.cos(C);A=new j(O,k,X),b++}while(o(A,l)&&b<E);if(b>=E){console.warn(`Could not place icon ${y} after ${E} attempts - skipping`);return}const S=a(R,A);s.add(S)},void 0,R=>{console.error("Error loading texture:",R)})}g2.forEach(u),i.position.z=window.innerWidth<768?11:15;const d=new t2(i,r.domElement);d.enableZoom=!1,d.enableRotate=!0,d.enablePan=!1,d.enableZoom=!1,d.minPolarAngle=Math.PI/2,d.maxPolarAngle=Math.PI/2,d.enablePan=!1;let f=!0;const p=window.matchMedia("(prefers-reduced-motion: reduce)");let m=p.matches;p.addEventListener("change",y=>{m=y.matches}),d.addEventListener("start",()=>{f=!1}),d.addEventListener("end",()=>{f=!0});const v=.18,g=.1,h=new QT;function _(){requestAnimationFrame(_);const y=Math.min(h.getDelta(),g);f&&!m&&(s.rotation.y+=v*y),s.children.forEach(R=>{R.lookAt(i.position)}),d.update(),r.render(n,i)}_(),window.addEventListener("resize",x);function x(){const y=t.clientWidth,R=t.clientHeight;r.setSize(y,R),i.aspect=y/R;const T=X0.degToRad(i.fov/2),A=Math.atan(Math.tan(T)*i.aspect);i.position.z=Math.max(7/Math.sin(T),9/Math.sin(A)),i.updateProjectionMatrix()}x()}const v2=()=>(pt.useEffect(()=>{_2()},[]),pt.useEffect(()=>{qi.init({duration:1e3})},[]),N.jsxs("section",{id:"skill_cloud",className:"section_skill_cloud",children:[N.jsx("div",{className:"skill_cloud_title",children:N.jsxs("h2",{children:["mySkillsCloud",N.jsx("span",{className:"brackets",children:"()"})]})}),N.jsx("div",{"data-aos":"fade-up","data-aos-delay":"300","data-aos-duration":"800","data-aos-easing":"ease-in-out",id:"skill_cloud_container"})]})),x2="myProjects",y2="Production work, live right now",S2=[{id:"maag",title:"MAAG",image:"maag",alt:"MAAG editorial media platform",description:["An online media outlet built end to end on my own: custom CMS with 8 content types across 51 admin screens, a 15-block editor, and a placement engine where the home page composition is itself editable.","Astro front end, Express.js API on Firebase / Firestore, Stripe subscriptions, Docker → Cloud Run."],badge:"https://img.shields.io/website?url=https%3A%2F%2Fmaagfrance.fr",demo:"https://maagfrance.fr"},{id:"mentormatic",title:"Mentormatic",image:"mentormatic",alt:"Mentormatic mentoring and coaching platform",description:["A B2B mentoring and coaching SaaS built with a team of four, in TDD and BDD/Gherkin. Astro SSR, React and Alpine.js over Moleculer microservices.","I designed the access-controlled note sharing system and an in-house Alpine.js lazy-loading layer that the whole team adopted."],badge:"https://img.shields.io/website?url=https%3A%2F%2Fmentormatic.com",demo:"https://mentormatic.com"},{id:"wurkspaces",title:"wurkspaces.dev",image:"wurkspaces",alt:"wurkspaces.dev bilingual showcase site",description:["A bilingual (FR / EN) showcase site in Astro, Alpine.js and Tailwind.","GDPR cookie banner built as a reusable Astro module."],badge:"https://img.shields.io/website?url=https%3A%2F%2Fwww.wurkspaces.dev",demo:"https://www.wurkspaces.dev"}],M2={title:x2,intro:y2,items:S2},E2="/react_cv_v2/assets/maag-BdC9az6m.webp",w2="/react_cv_v2/assets/mentormatic-B0ZnlOo_.webp",T2="/react_cv_v2/assets/wurkspaces-DkbTIRKW.webp",A2={maag:E2,mentormatic:w2,wurkspaces:T2},{title:C2,intro:b2,items:om}=M2,am="(max-width: 768px)",R2=()=>{const[t,e]=pt.useState(()=>window.matchMedia(am).matches);return pt.useEffect(()=>{const n=window.matchMedia(am),i=r=>e(r.matches);return n.addEventListener("change",i),()=>n.removeEventListener("change",i)},[]),t},P2=(t,e,n,i)=>t.aos?t.aos:!i&&e===n-1&&n%2===1?"fade-up":e%2===0?"slide-right":"slide-left",L2=()=>N.jsx("svg",{width:"20px",height:"20px",viewBox:"0 -3 256 256",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",children:N.jsx("g",{children:N.jsx("path",{d:"M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"})})}),D2=()=>{const t=R2();return pt.useEffect(()=>{qi.init({duration:1e3})},[]),pt.useEffect(()=>{qi.refreshHard()},[t]),N.jsx("section",{id:"projects",className:"section_projects",children:N.jsxs("article",{children:[N.jsxs("h2",{className:"projects_section_title",children:[C2,N.jsx("span",{className:"brackets",children:"()"})]}),N.jsx("p",{className:"projects_list_p",children:b2}),N.jsx("div",{className:"card-container",children:om.map((e,n)=>N.jsxs("div",{"data-aos":P2(e,n,om.length,t),className:"card",children:[N.jsx("div",{className:"card-image_wrapper",children:N.jsx("img",{src:A2[e.image],alt:e.alt})}),N.jsxs("div",{className:"card-content",children:[N.jsx("div",{className:"card_title_wrapper",children:N.jsx("h2",{className:"card-title",children:e.title})}),e.description.map(i=>N.jsx("p",{className:"card-description",children:i},i))]}),N.jsxs("div",{className:"card-buttons",children:[N.jsx("img",{className:"card-badge",alt:"Website",src:e.badge}),e.demo&&N.jsx("a",{href:e.demo,target:"_blank",className:"card-button_demo",children:"Demo"}),e.code&&N.jsxs("a",{href:e.code,target:"_blank",className:"card-button_code",children:["Code",N.jsx(L2,{})]})]})]},e.id))})]})})},N2="education",I2="Visit school website",U2="Close",O2=[{id:"studi",cardTitle:"Professional title (TP) level 5, Web and mobile web developer",school:"Studi",logo:"studi",date:"03/2023 - 06/2024",country:"France",description:"Professional title (TP) level 5, Web and mobile web developer.",website:"https://studi.fr/"},{id:"mitro",cardTitle:"Higher National Diploma, Film/Video and Photographic Arts",school:'Moscow Institute of Television and Radio Broadcasting "Ostankino" (MITRO)',logo:"mitro",date:"09/2007 - 05/2010",country:"Russia",description:"Higher National Diploma, Film/Video and Photographic Arts.",website:"https://www.mitro-tv.ru/tv-school/"},{id:"isg",cardTitle:"Bachelor of Business Administration (BBA), Marketing",school:"ISG Institut Supérieur de Gestion",logo:"isg",date:"05/2000 - 06/2003",country:"France",description:"Bachelor of Business Administration (BBA), Marketing.",website:"https://www.isg.fr/"}],F2={title:N2,modalCta:I2,modalClose:U2,items:O2},k2="/react_cv_v2/assets/studi-RwjnmlQ2.png",z2="/react_cv_v2/assets/mitro-DrSXCYtL.png",B2="/react_cv_v2/assets/isg-CmR2Y9vW.png",{title:H2,modalCta:V2,modalClose:G2,items:lm}=F2,cm={studi:k2,mitro:z2,isg:B2},um='a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',W2=()=>{const[t,e]=pt.useState(null),n=lm.find(r=>r.id===t)??null,i=pt.useRef(null);return pt.useEffect(()=>{qi.init({duration:1e3})},[]),pt.useEffect(()=>{var o;if(!n)return;const r=i.current,s=document.activeElement;(o=r==null?void 0:r.querySelector(um))==null||o.focus();const a=c=>{if(c.key==="Escape"){e(null);return}if(c.key!=="Tab"||!r)return;const l=Array.from(r.querySelectorAll(um));if(l.length===0)return;const u=l[0],d=l[l.length-1],f=document.activeElement;c.shiftKey&&f===u?(c.preventDefault(),d.focus()):!c.shiftKey&&f===d&&(c.preventDefault(),u.focus())};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a),s==null||s.focus()}},[n]),N.jsxs("section",{id:"education",className:"section_education",children:[N.jsxs("div",{className:"educ_wrapper",children:[N.jsxs("h2",{children:[H2,N.jsx("span",{className:"brackets",children:"()"})]}),N.jsx("div",{"data-aos":"fade-up",className:"educ-cards_wrapper",children:lm.map(r=>N.jsxs("button",{type:"button",className:"educ-card",onClick:()=>e(r.id),children:[N.jsx("div",{className:"educ_card_title",children:N.jsx("h3",{children:r.cardTitle})}),N.jsx("div",{className:`educ_card_logo educ_card_logo--${r.id}`,children:N.jsx("img",{src:cm[r.logo],alt:r.school})}),N.jsx("div",{className:"educ_card_date",children:N.jsx("p",{children:r.date})}),N.jsx("div",{className:"educ_card_country",children:N.jsx("span",{className:"country",children:r.country})})]},r.id))})]}),n&&N.jsxs(N.Fragment,{children:[N.jsx("div",{className:"educ-backdrop","aria-hidden":"true",onClick:()=>e(null)}),N.jsx("div",{className:"educ-modal",role:"dialog","aria-modal":"true","aria-label":n.school,ref:i,children:N.jsxs("div",{className:"educ-modal_content",children:[N.jsx("div",{className:"educ-modal_image",children:N.jsx("img",{src:cm[n.logo],alt:n.school})}),N.jsx("h2",{className:"educ-modal_title",children:n.school}),N.jsx("hr",{}),N.jsx("p",{className:"educ-modal_description",children:n.description}),N.jsx("hr",{}),N.jsx("a",{href:n.website,target:"_blank",rel:"noreferrer",children:V2}),N.jsx("button",{type:"button",className:"educ-modal_close",onClick:()=>e(null),children:G2})]})})]})]})},j2=()=>N.jsxs(N.Fragment,{children:[N.jsx("div",{className:"github-skill_container",children:N.jsx("a",{href:"https://github.com/Dima-McArrow",target:"_blank",rel:"noopener noreferrer",className:"the_github-link",children:N.jsx("svg",{width:"30px",height:"30px",viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:N.jsx("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:N.jsx("g",{id:"Dribbble-Light-Preview",transform:"translate(-140.000000, -7559.000000)",fill:"#000000",children:N.jsx("g",{id:"icons",transform:"translate(56.000000, 160.000000)",children:N.jsx("path",{d:"M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399",id:"github-[#142]"})})})})})})}),N.jsx("div",{className:"github_desk",children:"my GitHub page"})]}),X2=()=>N.jsxs(N.Fragment,{children:[N.jsx("div",{className:"the_link-container",children:N.jsx("a",{href:"https://www.linkedin.com/in/dimitri-makarov-58602851/",target:"_blank",rel:"noopener noreferrer",className:"the_link",children:N.jsxs("svg",{width:"30px",height:"30px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[N.jsx("path",{d:"M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z",fill:"#0F0F0F"}),N.jsx("path",{d:"M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z",fill:"#0F0F0F"}),N.jsx("path",{d:"M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z",fill:"#0F0F0F"}),N.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z",fill:"#0F0F0F"})]})})}),N.jsx("div",{className:"linkedin_desk",children:"my LinkedIn page"})]}),Y2=()=>(pt.useEffect(()=>{qi.init({duration:1e3})},[]),N.jsxs("div",{"data-aos":"zoom-in","data-aos-delay":"300",className:"social_links",children:[N.jsx(j2,{}),N.jsx(X2,{})]})),$2=()=>(pt.useEffect(()=>{qi.init({duration:1e3})},[]),N.jsxs("section",{id:"contact",className:"section_contact",children:[N.jsxs("h2",{children:["contactMe",N.jsx("span",{className:"brackets",children:"()"})]}),N.jsx("div",{"data-aos":"fade-up",className:"contact-form_wrapper",children:N.jsxs("form",{id:"resume-contact_form",action:"https://formspree.io/f/xqakqyre",method:"POST",children:[N.jsx("div",{className:"name-input_wrapper",children:N.jsx("input",{name:"user_name",className:"contact_input",type:"text",placeholder:"Enter your name please ... *",required:!0})}),N.jsx("div",{className:"email-input_wrapper",children:N.jsx("input",{name:"user_email",className:"contact_input",type:"email",placeholder:"Enter your email please ... *",required:!0,pattern:"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"})}),N.jsx("div",{className:"message-input_wrapper",children:N.jsx("textarea",{className:"contact_input",name:"message",placeholder:"Enter your message ..."})}),N.jsxs("div",{className:"massage-mandatory-fields",children:[N.jsx("sup",{children:"*"})," Required fields"]}),N.jsx("button",{className:"contact_button",type:"submit",children:"Send"})]})}),N.jsx(Y2,{})]})),q2=()=>N.jsx("footer",{className:"footer",children:N.jsx("div",{className:"footer__container",children:N.jsx("div",{className:"footer__copyright",children:N.jsxs("p",{children:["Dimitri Makarov © ",new Date().getFullYear()]})})})}),K2=()=>{const[t,e]=pt.useState(!1),[n,i]=pt.useState(!1);pt.useEffect(()=>{const s=()=>{const a=document.getElementById("skills"),o=a==null?void 0:a.getBoundingClientRect();o&&o.top<=window.innerHeight&&window.scrollY>0?e(!0):e(!1)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[]);const r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return N.jsxs(N.Fragment,{children:[N.jsx("button",{className:`to-top-button ${t?"visible":""}`,onClick:r,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:N.jsx("div",{className:"svg_wrapper",children:N.jsxs("svg",{width:"50px",height:"50px",viewBox:"0 0 24 24",version:"1.1",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[N.jsx("path",{d:"M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8    S16.4,20,12,20z"}),N.jsx("path",{d:"M12.7,9.3c-0.4-0.4-1-0.4-1.4,0l-3,3c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l2.3-2.3l2.3,2.3c0.2,0.2,0.5,0.3,0.7,0.3    s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L12.7,9.3z"})]})})}),N.jsx("div",{className:`button_to-top_description ${n?"visible":""}`,children:N.jsx("p",{children:"To top"})})]})};function Z2(){return N.jsxs("main",{children:[N.jsx(my,{}),N.jsx(ny,{}),N.jsx(by,{}),N.jsx(v2,{}),N.jsx(D2,{}),N.jsx(dy,{}),N.jsx(W2,{}),N.jsx($2,{}),N.jsx(q2,{}),N.jsx(K2,{})]})}A0(document.getElementById("root")).render(N.jsx(pt.StrictMode,{children:N.jsx(Z2,{})}));
