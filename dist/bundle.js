(()=>{"use strict";var e={283:(e,t,n)=>{n.d(t,{ly:()=>E,ZP:()=>M,GL:()=>T,qk:()=>A,g1:()=>S,_M:()=>C,tJ:()=>k});var r={};function o(){return Date.now()}let i;n.r(r),n.d(r,{get_time:()=>o}),e=n.hmd(e);const a=new Array(32).fill(void 0);function c(e){return a[e]}a.push(void 0,null,!0,!1);let s=a.length;function u(e){s===a.length&&a.push(a.length+1);const t=s;return s=a[t],a[t]=e,t}function _(e){const t=c(e);return function(e){e<36||(a[e]=s,s=e)}(e),t}function d(e){const t=typeof e;if("number"==t||"boolean"==t||null==e)return`${e}`;if("string"==t)return`"${e}"`;if("symbol"==t){const t=e.description;return null==t?"Symbol":`Symbol(${t})`}if("function"==t){const t=e.name;return"string"==typeof t&&t.length>0?`Function(${t})`:"Function"}if(Array.isArray(e)){const t=e.length;let n="[";t>0&&(n+=d(e[0]));for(let r=1;r<t;r++)n+=", "+d(e[r]);return n+="]",n}const n=/\[object ([^\]]+)\]/.exec(toString.call(e));let r;if(!(n.length>1))return toString.call(e);if(r=n[1],"Object"==r)try{return"Object("+JSON.stringify(e)+")"}catch(e){return"Object"}return e instanceof Error?`${e.name}: ${e.message}\n${e.stack}`:r}let l=0,g=new Uint8Array;function f(){return 0===g.byteLength&&(g=new Uint8Array(i.memory.buffer)),g}const b=new TextEncoder("utf-8"),p="function"==typeof b.encodeInto?function(e,t){return b.encodeInto(e,t)}:function(e,t){const n=b.encode(e);return t.set(n),{read:e.length,written:n.length}};function w(e,t,n){if(void 0===n){const n=b.encode(e),r=t(n.length);return f().subarray(r,r+n.length).set(n),l=n.length,r}let r=e.length,o=t(r);const i=f();let a=0;for(;a<r;a++){const t=e.charCodeAt(a);if(t>127)break;i[o+a]=t}if(a!==r){0!==a&&(e=e.slice(a)),o=n(o,r,r=a+3*e.length);const t=f().subarray(o+a,o+r);a+=p(e,t).written}return l=a,o}let m=new Int32Array;function h(){return 0===m.byteLength&&(m=new Int32Array(i.memory.buffer)),m}const y=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});function x(e,t){return y.decode(f().subarray(e,e+t))}function v(e,t){const n=t(1*e.length);return f().set(e,n/1),l=e.length,n}function A(e){const t=v(e,i.__wbindgen_export_0),n=l;i.push_stream(t,n)}function C(e){try{const r=i.__wbindgen_add_to_stack_pointer(-16);i.random_suggestions(r,e);var t=h()[r/4+0],n=h()[r/4+1];return x(t,n)}finally{i.__wbindgen_add_to_stack_pointer(16),i.__wbindgen_export_2(t,n)}}function S(e){const t=v(e,i.__wbindgen_export_0),n=l;i.push_suggestions_stream(t,n)}function E(){i.clear_suggestions_stream()}function k(e,t){try{const o=i.__wbindgen_add_to_stack_pointer(-16),a=w(e,i.__wbindgen_export_0,i.__wbindgen_export_1),c=l;i.suggestions(o,a,c,t);var n=h()[o/4+0],r=h()[o/4+1];return x(n,r)}finally{i.__wbindgen_add_to_stack_pointer(16),i.__wbindgen_export_2(n,r)}}function T(e,t){try{const u=i.__wbindgen_add_to_stack_pointer(-16),d=w(e,i.__wbindgen_export_0,i.__wbindgen_export_1),g=l,f=w(t,i.__wbindgen_export_0,i.__wbindgen_export_1),b=l;i.exec(u,d,g,f,b);var n=h()[u/4+0],r=h()[u/4+1],o=h()[u/4+2],a=h()[u/4+3],c=n,s=r;if(a)throw c=0,s=0,_(o);return x(c,s)}finally{i.__wbindgen_add_to_stack_pointer(16),i.__wbindgen_export_2(c,s)}}function O(e,t){try{return e.apply(this,t)}catch(e){i.__wbindgen_export_3(u(e))}}function j(e,t){return f().subarray(e/1,e/1+t)}function U(e){return null==e}function N(){const t={wbg:{}};return t.wbg.__wbindgen_object_clone_ref=function(e){return u(c(e))},t.wbg.__wbg_process_e56fd54cf6319b6c=function(e){return u(c(e).process)},t.wbg.__wbg_versions_77e21455908dad33=function(e){return u(c(e).versions)},t.wbg.__wbg_node_0dd25d832e4785d5=function(e){return u(c(e).node)},t.wbg.__wbindgen_is_string=function(e){return"string"==typeof c(e)},t.wbg.__wbg_require_0db1598d9ccecb30=function(){return O((function(e,t,n){return u(c(e).require(x(t,n)))}),arguments)},t.wbg.__wbg_crypto_b95d7173266618a9=function(e){return u(c(e).crypto)},t.wbg.__wbg_msCrypto_5a86d77a66230f81=function(e){return u(c(e).msCrypto)},t.wbg.__wbg_newwithlength_66e5530e7079ea1b=function(e){return u(new Uint8Array(e>>>0))},t.wbg.__wbindgen_is_object=function(e){const t=c(e);return"object"==typeof t&&null!==t},t.wbg.__wbindgen_object_drop_ref=function(e){_(e)},t.wbg.__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd=function(){return u(e)},t.wbg.__wbg_randomFillSync_91e2b39becca6147=function(){return O((function(e,t,n){c(e).randomFillSync(j(t,n))}),arguments)},t.wbg.__wbg_subarray_270ff8dd5582c1ac=function(e,t,n){return u(c(e).subarray(t>>>0,n>>>0))},t.wbg.__wbg_getRandomValues_b14734aa289bc356=function(){return O((function(e,t){c(e).getRandomValues(c(t))}),arguments)},t.wbg.__wbg_length_51f19f73d6d9eff3=function(e){return c(e).length},t.wbg.__wbindgen_memory=function(){return u(i.memory)},t.wbg.__wbg_buffer_34f5ec9f8a838ba0=function(e){return u(c(e).buffer)},t.wbg.__wbg_new_cda198d9dbc6d7ea=function(e){return u(new Uint8Array(c(e)))},t.wbg.__wbg_set_1a930cfcda1a8067=function(e,t,n){c(e).set(c(t),n>>>0)},t.wbg.__wbg_self_fd00a1ef86d1b2ed=function(){return O((function(){return u(self.self)}),arguments)},t.wbg.__wbg_window_6f6e346d8bbd61d7=function(){return O((function(){return u(window.window)}),arguments)},t.wbg.__wbg_globalThis_3348936ac49df00a=function(){return O((function(){return u(globalThis.globalThis)}),arguments)},t.wbg.__wbg_global_67175caf56f55ca9=function(){return O((function(){return u(n.g.global)}),arguments)},t.wbg.__wbindgen_is_undefined=function(e){return void 0===c(e)},t.wbg.__wbg_newnoargs_971e9a5abe185139=function(e,t){return u(new Function(x(e,t)))},t.wbg.__wbg_call_33d7bcddbbfa394a=function(){return O((function(e,t){return u(c(e).call(c(t)))}),arguments)},t.wbg.__wbindgen_debug_string=function(e,t){const n=w(d(c(t)),i.__wbindgen_export_0,i.__wbindgen_export_1),r=l;h()[e/4+1]=r,h()[e/4+0]=n},t.wbg.__wbindgen_throw=function(e,t){throw new Error(x(e,t))},t.wbg.__wbg_window_f2efde1c5b5cca14=function(){return O((function(){return u(window.window)}),arguments)},t.wbg.__wbg_instanceof_Window_42f092928baaee84=function(e){return c(e)instanceof Window},t.wbg.__wbg_self_dc2f808420e70e36=function(){return O((function(){return u(self.self)}),arguments)},t.wbg.__wbg_instanceof_WorkerGlobalScope_8f130694dd963bab=function(e){return c(e)instanceof WorkerGlobalScope},t.wbg.__wbg_navigator_9be277c167dac7dc=function(e){return u(c(e).navigator)},t.wbg.__wbg_language_564c607b1b7fb223=function(e,t){const n=c(t).language;var r=U(n)?0:w(n,i.__wbindgen_export_0,i.__wbindgen_export_1),o=l;h()[e/4+1]=o,h()[e/4+0]=r},t.wbg.__wbg_navigator_13521aba02d792d6=function(e){return u(c(e).navigator)},t.wbg.__wbg_language_9f36fb5071744823=function(e,t){const n=c(t).language;var r=U(n)?0:w(n,i.__wbindgen_export_0,i.__wbindgen_export_1),o=l;h()[e/4+1]=o,h()[e/4+0]=r},t.wbg.__wbg_gettimezone_0714f9ce491ca429=function(e){const t=w(Intl.DateTimeFormat().resolvedOptions().timeZone,i.__wbindgen_export_0,i.__wbindgen_export_1),n=l;h()[e/4+1]=n,h()[e/4+0]=t},t["./snippets/yozuk-helper-platform-32143a55e95b9403/inline1.js"]=r,t}async function L(e){void 0===e&&(e=new URL(n(782),n.b));const t=N();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:r,module:o}=await async function(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await e,t);return function(e,t){return i=e.exports,L.__wbindgen_wasm_module=t,m=new Int32Array,g=new Uint8Array,i}(r,o)}y.decode();const M=L},782:(e,t,n)=>{e.exports=n.p+"f390c4ee00158648f884.wasm"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,n),i.loaded=!0,i.exports}n.m=e,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{for(var e=n(283),t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r="undefined"==typeof Uint8Array?[]:new Uint8Array(256),o=0;o<t.length;o++)r[t.charCodeAt(o)]=o;var i=function(e){var t,n,o,i,a,c=.75*e.length,s=e.length,u=0;"="===e[e.length-1]&&(c--,"="===e[e.length-2]&&c--);var _=new ArrayBuffer(c),d=new Uint8Array(_);for(t=0;t<s;t+=4)n=r[e.charCodeAt(t)],o=r[e.charCodeAt(t+1)],i=r[e.charCodeAt(t+2)],a=r[e.charCodeAt(t+3)],d[u++]=n<<2|o>>4,d[u++]=(15&o)<<4|i>>2,d[u++]=(3&i)<<6|63&a;return _};let a=!1;async function c(){a||(await(0,e.ZP)(),a=!0)}const s=new class extends class{async exec(e,t=[]){for(const e of t)await this.push_stream_impl(e);const n=JSON.parse(await this.exec_impl(e,JSON.stringify(this.user_context()))),r=new TextDecoder("utf-8",{fatal:!0});if("ok"==n.type||"fail"==n.type)for(const e of n.outputs)for(const t of e.blocks)if("data"==t.type&&"string"==typeof t.data){const e=i(t.data);try{if(t.data=r.decode(e),t.highlights){let n=[],o=0,i=0;for(const a of t.highlights){i+=r.decode(e.slice(o,a.range.start)).length;let t=i+r.decode(e.slice(a.range.start,a.range.end)).length;n.push({...a,range:{start:i,end:t}}),i=t,o=a.range.end}t.highlights=n}}catch{t.data=e}}return n}async random_suggestions(e=5){return JSON.parse(await this.random_suggestions_impl(e))}async set_suggestions_streams(e){await this.clear_suggestions_stream_impl();for(const t of e)await this.push_suggestions_stream_impl(t)}async suggestions(e,t=5){return JSON.parse(await this.suggestions_impl(e,t))}}{exec_impl(t,n){return c().then((()=>(0,e.GL)(t,n)))}push_stream_impl(t){return c().then((()=>(0,e.qk)(t)))}random_suggestions_impl(t){return c().then((()=>(0,e._M)(t)))}push_suggestions_stream_impl(t){return c().then((()=>(0,e.g1)(t)))}clear_suggestions_stream_impl(){return c().then((()=>(0,e.ly)()))}suggestions_impl(t,n){return c().then((()=>(0,e.tJ)(t,n)))}user_context(){return{locale:navigator.language,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone}}};function u(e){if("ok"===e.type){const t=e.outputs.some((e=>"primary"==e.mode));return e.outputs.filter((e=>!t||"primary"==e.mode)).flatMap(_)}return[]}function _(e){const t=document.createElement("div");t.style.marginTop="0.5em";for(const n of e.metadata)if("color"==n.type){const e=document.createElement("code");e.appendChild(document.createTextNode("       ")),e.style.backgroundColor=n.color,t.appendChild(e)}for(const n of e.blocks.flatMap(d))t.appendChild(n);return[t]}function d(e){const n=document.createElement("div");if("data"==e.type)if("string"==typeof e.data){let t=e.highlights||[{kind:"value",range:{start:0,end:e.data.length}}],r=[],o=0;for(const n of t){const t=e.data.slice(o,n.range.start);t.length>0&&r.push({text:t,value:!1}),r.push({text:e.data.slice(n.range.start,n.range.end),value:!0}),o=n.range.end}const i=e.data.slice(o);i.length>0&&r.push({text:i,value:!1});const a=document.createElement("code");for(const e of r){const t=document.createElement("span");e.value||(t.style.opacity="0.6");const n=document.createTextNode(e.text);t.appendChild(n),a.appendChild(t)}n.appendChild(a)}else if(e.media_type.startsWith("image/")){const r=document.createElement("img");r.setAttribute("src",`data:${e.media_type};base64,${function(e){var n,r=new Uint8Array(e),o=r.length,i="";for(n=0;n<o;n+=3)i+=t[r[n]>>2],i+=t[(3&r[n])<<4|r[n+1]>>4],i+=t[(15&r[n+1])<<2|r[n+2]>>6],i+=t[63&r[n+2]];return o%3==2?i=i.substring(0,i.length-1)+"=":o%3==1&&(i=i.substring(0,i.length-2)+"=="),i}(e.data)}`),n.appendChild(r)}return[n]}document.addEventListener("readystatechange",(e=>{for(const e of document.querySelectorAll("blockquote"))0==e.textContent.trim().length&&e.parentNode.removeChild(e)})),document.addEventListener("readystatechange",(e=>{if("complete"==document.readyState)for(const e of document.querySelectorAll("pre.example")){const t=[];for(const n of e.querySelectorAll("span.file").values()){const e=n.getAttribute("data-filename");t.push({data:new Uint8Array(i(n.textContent)),filename:e})}const n=e.querySelector("code").textContent;e.textContent="";const r=document.createElement("code"),o=document.createElement("span");o.appendChild(document.createTextNode("»»» ")),o.style.color="orange";const a=document.createTextNode(n);r.appendChild(o),r.appendChild(a);for(const e of t){const t=document.createElement("img");t.setAttribute("src","/clip.svg"),t.width=12,t.height=12;const n=document.createElement("span");n.appendChild(t),n.appendChild(document.createTextNode(e.filename)),n.style.backgroundColor="orange",n.style.color="#333",n.style.marginLeft="15px",n.style.paddingLeft="3px",n.style.paddingRight="3px",n.style.paddingTop="1px",n.style.paddingBottom="1px",n.style.borderRadius="3px",r.appendChild(n)}const c=document.createElement("code");c.appendChild(document.createTextNode("Computing...")),e.appendChild(r),e.appendChild(c),s.exec(n,t.map((({data:e})=>e))).then((t=>{e.removeChild(c);for(const n of u(t))e.appendChild(n)}))}}))})()})();