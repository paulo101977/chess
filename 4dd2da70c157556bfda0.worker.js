!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="/chess/",e(e.s=5)}([function(t,r,e){t.exports=e(2)},function(t,r,e){"use strict";var n=e(0),o=e(3),a=e(4),i="undefined"!==typeof BigUint64Array,u=Symbol();function c(t,r){var e=new Uint32Array(t),n=new Uint16Array(t),o=e[r+-4>>>2]>>>1,a=r>>>1;if(o<=1024)return String.fromCharCode.apply(String,n.subarray(a,a+o));var i=[];do{var u=n[a+1024-1],c=u>=55296&&u<56320?1023:1024;i.push(String.fromCharCode.apply(String,n.subarray(a,a+=c))),o-=c}while(o>1024);return i.join("")+String.fromCharCode.apply(String,n.subarray(a,a+o))}function s(t){var r={};function e(t,r){return t?c(t.buffer,r):"<yet unknown>"}var n=t.env=t.env||{};return n.abort=n.abort||function(t,o,a,i){var u=r.memory||n.memory;throw Error("abort: "+e(u,t)+" in "+e(u,o)+"("+a+":"+i+")")},n.trace=n.trace||function(t,o){var a=r.memory||n.memory;console.log("trace: "+e(a,t)+(o?" ":"")+Array.prototype.slice.call(arguments,2,2+o).join(", "))},n.seed=n.seed||function(){return Date.now()},t.Math=t.Math||Math,t.Date=t.Date||Date,r}function l(t,r){var e=r.exports,n=e.memory,o=e.table,a=e.__alloc,u=e.__retain,s=e.__rtti_base||-1;function l(t){var r=new Uint32Array(n.buffer);if((t>>>=0)>=r[s>>>2])throw Error("invalid id: "+t);return r[(s+4>>>2)+2*t]}function f(t){var r=new Uint32Array(n.buffer);if((t>>>=0)>=r[s>>>2])throw Error("invalid id: "+t);return r[(s+4>>>2)+2*t+1]}function y(t){return 31-Math.clz32(t>>>5&31)}function p(t,r,e){var o=n.buffer;if(e)switch(t){case 2:return new Float32Array(o);case 3:return new Float64Array(o)}else switch(t){case 0:return new(r?Int8Array:Uint8Array)(o);case 1:return new(r?Int16Array:Uint16Array)(o);case 2:return new(r?Int32Array:Uint32Array)(o);case 3:return new(r?BigInt64Array:BigUint64Array)(o)}throw Error("unsupported align: "+t)}function h(t){var r=new Uint32Array(n.buffer),e=r[t+-8>>>2],o=l(e);if(!(1&o))throw Error("not an array: "+e);var a=y(o),i=r[t+4>>>2],u=2&o?r[t+12>>>2]:r[i+-4>>>2]>>>a;return p(a,1024&o,2048&o).subarray(i>>>=a,i+u)}function d(t,r,e){return new t(g(t,r,e))}function g(t,r,e){var o=n.buffer,a=new Uint32Array(o),i=a[e+4>>>2];return new t(o,i,a[i+-4>>>2]>>>r)}return t.__allocString=function(t){for(var r=t.length,e=a(r<<1,1),o=new Uint16Array(n.buffer),i=0,u=e>>>1;i<r;++i)o[u+i]=t.charCodeAt(i);return e},t.__getString=function(t){var r=n.buffer;if(1!==new Uint32Array(r)[t+-8>>>2])throw Error("not a string: "+t);return c(r,t)},t.__allocArray=function(t,r){var e=l(t);if(!(3&e))throw Error("not an array: "+t+" @ "+e);var o=y(e),i=r.length,c=a(i<<o,0),s=a(2&e?16:12,t),f=new Uint32Array(n.buffer);f[s+0>>>2]=u(c),f[s+4>>>2]=c,f[s+8>>>2]=i<<o,2&e&&(f[s+12>>>2]=i);var h=p(o,1024&e,2048&e);if(8192&e)for(var d=0;d<i;++d)h[(c>>>o)+d]=u(r[d]);else h.set(r,c>>>o);return s},t.__getArrayView=h,t.__getArray=function(t){for(var r=h(t),e=r.length,n=new Array(e),o=0;o<e;o++)n[o]=r[o];return n},t.__getArrayBuffer=function(t){var r=n.buffer,e=new Uint32Array(r)[t+-4>>>2];return r.slice(t,t+e)},t.__getInt8Array=d.bind(null,Int8Array,0),t.__getInt8ArrayView=g.bind(null,Int8Array,0),t.__getUint8Array=d.bind(null,Uint8Array,0),t.__getUint8ArrayView=g.bind(null,Uint8Array,0),t.__getUint8ClampedArray=d.bind(null,Uint8ClampedArray,0),t.__getUint8ClampedArrayView=g.bind(null,Uint8ClampedArray,0),t.__getInt16Array=d.bind(null,Int16Array,1),t.__getInt16ArrayView=g.bind(null,Int16Array,1),t.__getUint16Array=d.bind(null,Uint16Array,1),t.__getUint16ArrayView=g.bind(null,Uint16Array,1),t.__getInt32Array=d.bind(null,Int32Array,2),t.__getInt32ArrayView=g.bind(null,Int32Array,2),t.__getUint32Array=d.bind(null,Uint32Array,2),t.__getUint32ArrayView=g.bind(null,Uint32Array,2),i&&(t.__getInt64Array=d.bind(null,BigInt64Array,3),t.__getInt64ArrayView=g.bind(null,BigInt64Array,3),t.__getUint64Array=d.bind(null,BigUint64Array,3),t.__getUint64ArrayView=g.bind(null,BigUint64Array,3)),t.__getFloat32Array=d.bind(null,Float32Array,2),t.__getFloat32ArrayView=g.bind(null,Float32Array,2),t.__getFloat64Array=d.bind(null,Float64Array,3),t.__getFloat64ArrayView=g.bind(null,Float64Array,3),t.__instanceof=function(t,r){var e=new Uint32Array(n.buffer),o=e[t+-8>>>2];if(o<=e[s>>>2])do{if(o==r)return!0}while(o=f(o));return!1},t.memory=t.memory||n,t.table=t.table||o,v(e,t)}function f(t){return"undefined"!==typeof Response&&t instanceof Response}function y(t,r){return p.apply(this,arguments)}function p(){return(p=a(n.mark((function t(r,e){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f,t.next=3,r;case 3:if(t.t1=r=t.sent,!(0,t.t0)(t.t1)){t.next=6;break}return t.abrupt("return",h(r,e));case 6:if(t.t2=l,t.t3=s(e||(e={})),t.t4=WebAssembly,!(r instanceof WebAssembly.Module)){t.next=13;break}t.t5=r,t.next=16;break;case 13:return t.next=15,WebAssembly.compile(r);case 15:t.t5=t.sent;case 16:return t.t6=t.t5,t.t7=e,t.next=20,t.t4.instantiate.call(t.t4,t.t6,t.t7);case 20:return t.t8=t.sent,t.abrupt("return",(0,t.t2)(t.t3,t.t8));case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,r){return d.apply(this,arguments)}function d(){return(d=a(n.mark((function t(r,e){return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(WebAssembly.instantiateStreaming){t.next=14;break}return t.t0=y,t.t1=f,t.next=5,r;case 5:if(t.t2=r=t.sent,!(0,t.t1)(t.t2)){t.next=10;break}t.t3=r.arrayBuffer(),t.next=11;break;case 10:t.t3=r;case 11:return t.t4=t.t3,t.t5=e,t.abrupt("return",(0,t.t0)(t.t4,t.t5));case 14:return t.t6=l,t.t7=s(e||(e={})),t.next=18,WebAssembly.instantiateStreaming(r,e);case 18:return t.t8=t.sent.instance,t.abrupt("return",(0,t.t6)(t.t7,t.t8));case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,r){var e=r?Object.create(r):{},n=t.__argumentsLength?function(r){t.__argumentsLength.value=r}:t.__setArgumentsLength||t.__setargc||function(){},a=function(r){if(!Object.prototype.hasOwnProperty.call(t,r))return"continue";for(var a=t[r],i=r.split("."),c=e;i.length>1;){var s=i.shift();Object.prototype.hasOwnProperty.call(c,s)||(c[s]={}),c=c[s]}var l=i[0],f=l.indexOf("#");if(f>=0){var y=l.substring(0,f),p=c[y];if("undefined"===typeof p||!p.prototype){var h=function t(){for(var r,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t.wrap((r=t.prototype).constructor.apply(r,[0].concat(n)))};h.prototype={valueOf:function(){return this[u]}},h.wrap=function(t){return Object.create(h.prototype,o({},u,{value:t,writable:!1}))},p&&Object.getOwnPropertyNames(p).forEach((function(t){return Object.defineProperty(h,t,Object.getOwnPropertyDescriptor(p,t))})),c[y]=h}if(l=l.substring(f+1),c=c[y].prototype,/^(get|set):/.test(l)){if(!Object.prototype.hasOwnProperty.call(c,l=l.substring(4))){var d=t[r.replace("set:","get:")],v=t[r.replace("get:","set:")];Object.defineProperty(c,l,{get:function(){return d(this[u])},set:function(t){v(this[u],t)},enumerable:!0})}}else"constructor"===l?(c[l]=function(){return n(arguments.length),a.apply(void 0,arguments)}).original=a:(c[l]=function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return n(r.length),a.apply(void 0,[this[u]].concat(r))}).original=a}else/^(get|set):/.test(l)?Object.prototype.hasOwnProperty.call(c,l=l.substring(4))||Object.defineProperty(c,l,{get:t[r.replace("set:","get:")],set:t[r.replace("get:","set:")],enumerable:!0}):"function"===typeof a&&a!==n?(c[l]=function(){return n(arguments.length),a.apply(void 0,arguments)}).original=a:c[l]=a};for(var i in t)a(i);return e}r.instantiate=y,r.instantiateSync=function(t,r){return l(s(r||(r={})),new WebAssembly.Instance(t instanceof WebAssembly.Module?t:new WebAssembly.Module(t),r))},r.instantiateStreaming=h,r.demangle=v},function(t,r,e){var n=function(t){"use strict";var r=Object.prototype,e=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof l?r:l,a=Object.create(o.prototype),i=new A(n||[]);return a._invoke=function(t,r,e){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var u=b(i,e);if(u){if(u===s)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var l=c(t,r,e);if("normal"===l.type){if(n=e.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(n="completed",e.method="throw",e.arg=l.arg)}}}(t,e,i),a}function c(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var s={};function l(){}function f(){}function y(){}var p={};p[o]=function(){return this};var h=Object.getPrototypeOf,d=h&&h(h(x([])));d&&d!==r&&e.call(d,o)&&(p=d);var v=y.prototype=l.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function m(t){var r;this._invoke=function(n,o){function a(){return new Promise((function(r,a){!function r(n,o,a,i){var u=c(t[n],t,o);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&e.call(l,"__await")?Promise.resolve(l.__await).then((function(t){r("next",t,a,i)}),(function(t){r("throw",t,a,i)})):Promise.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,i)}))}i(u.arg)}(n,o,r,a)}))}return r=r?r.then(a,a):a()}}function b(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,b(t,r),"throw"===r.method))return s;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=c(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,s;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,s):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,s)}function w(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function x(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=v.constructor=y,y.constructor=f,y[i]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===f||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(m.prototype),m.prototype[a]=function(){return this},t.AsyncIterator=m,t.async=function(r,e,n,o){var a=new m(u(r,e,n,o));return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(v),v[i]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=x,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),c=e.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),s},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),s}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;_(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:x(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},function(t,r){t.exports=function(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}},function(t,r){function e(t,r,e,n,o,a,i){try{var u=t[a](i),c=u.value}catch(s){return void e(s)}u.done?r(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function u(t){e(i,o,a,u,c,"next",t)}function c(t){e(i,o,a,u,c,"throw",t)}u(void 0)}))}}},function(t,r,e){"use strict";e.r(r);var n=e(0),o=e.n(n);function a(t,r,e,n,o,a,i){try{var u=t[a](i),c=u.value}catch(s){return void e(s)}u.done?r(c):Promise.resolve(c).then(n,o)}function i(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function u(t){a(i,n,o,u,c,"next",t)}function c(t){a(i,n,o,u,c,"throw",t)}u(void 0)}))}}var u=e(1);function c(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s,l=function(){function t(r,e,n){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.start=e,this.end=n,this.encodedMove=Math.abs(r)|e<<3|n<<10}var r,e,n;return r=t,n=[{key:"fromEncodedMove",value:function(r){return new t(7&r,r>>3&127,r>>10&127)}}],(e=null)&&c(r.prototype,e),n&&c(r,n),t}();function f(){return y.apply(this,arguments)}function y(){return(y=i(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!s){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(u.instantiate)(fetch("./as-api.wasm"));case 4:s=t.sent,console.log("Engine initialized");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){s.newGame()}function h(t){console.log("Start calculation of move ...");var r=s.calculateMove(t),e=l.fromEncodedMove(r);return console.log("Calculation finished"),e}function d(t){var r=s.performMove(t.encodedMove),e=s.__getArray(r);return s.__release(r),g(e)}function v(t,r){var e=s.__allocString(t),n=s.__retain(e),o=s.__allocArray(s.INT32ARRAY_ID,r.map((function(t){return t.encodedMove}))),a=s.__retain(o),i=s.setPosition(n,a),u=s.__getArray(i);return s.__release(n),s.__release(a),s.__release(i),g(u)}e.d(r,"init",(function(){return f})),e.d(r,"newGame",(function(){return p})),e.d(r,"calculateMove",(function(){return h})),e.d(r,"performMove",(function(){return d})),e.d(r,"setPosition",(function(){return v}));function g(t){var r=t.slice(0,64),e=t[64];return{board:r,moves:t.length>65?t.slice(65).map(l.fromEncodedMove):[],gameEnded:0!==(1&e),checkMate:0!==(2&e),staleMate:0!==(4&e),whiteInCheck:0!==(128&e),blackInCheck:0!==(256&e),threefoldRepetition:0!==(8&e),fiftyMoveDraw:0!==(16&e),insufficientMaterial:0!==(32&e),activePlayer:0!==(64&e)?-1:1}}addEventListener("message",(function(t){var e,n=t.data,o=n.type,a=n.method,i=n.id,u=n.params;"RPC"===o&&a&&((e=r[a])?Promise.resolve().then((function(){return e.apply(r,u)})):Promise.reject("No such method")).then((function(t){postMessage({type:"RPC",id:i,result:t})})).catch((function(t){var r={message:t};t.stack&&(r.message=t.message,r.stack=t.stack,r.name=t.name),postMessage({type:"RPC",id:i,error:r})}))})),postMessage({type:"RPC",method:"ready"})}]);
//# sourceMappingURL=4dd2da70c157556bfda0.worker.js.map