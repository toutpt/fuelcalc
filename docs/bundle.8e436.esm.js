!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="mdyV")}({GFNa:function(){},ITEe:function(){},QfWi:function(e,t,n){"use strict";function o(e,t){h.options.__h&&h.options.__h(p,e,y||t),y=0;var n=p.__H||(p.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function r(){b.some((function(e){if(e.__P)try{e.__H.__h.forEach(l),e.__H.__h.forEach(i),e.__H.__h=[]}catch(t){return e.__H.__h=[],h.options.__e(t,e.__v),!0}})),b=[]}function l(e){"function"==typeof e.u&&e.u()}function i(e){e.u=e.__()}function _(e,t){return"function"==typeof t?t(e):t}function u(){const[e,t]=function(e){return y=1,function(e,t){var n=o(a++,2);return n.t=e,n.__c||(n.__c=p,n.__=[_(void 0,t),function(e){var t=n.t(n.__[0],e);n.__[0]!==t&&(n.__[0]=t,n.__c.setState({}))}]),n.__}(_,e)}(new C);var n,r,l;return n=()=>{e.setState=t},r=[e.setState],l=o(a++,3),!h.options.__s&&function(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}(l.__H,r)&&(l.__=n,l.__H=r,p.__H.__h.push(l)),e}function c(e){return Math.floor(e)}function s(e,t){console.log(t),t.set(e.target.name,e.target.value)}n.r(t),n("GFNa");var a,p,f,h=n("hosL"),d=n("ySiU"),m=n.n(d),v=()=>Object(h.h)("header",{class:m.a.header},Object(h.h)("h1",null,"Fuel Calculator")),y=0,b=[],g=h.options.__r,k=h.options.diffed,O=h.options.__c,j=h.options.unmount;h.options.__r=function(e){g&&g(e),a=0;var t=(p=e.__c).__H;t&&(t.__h.forEach(l),t.__h.forEach(i),t.__h=[])},h.options.diffed=function(e){k&&k(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==b.push(t)&&f===h.options.requestAnimationFrame||((f=h.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);"undefined"!=typeof window&&(t=requestAnimationFrame(n))})(r))},h.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(l),e.__h=e.__h.filter((function(e){return!e.__||i(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],h.options.__e(n,e.__v)}})),O&&O(e,t)},h.options.unmount=function(e){j&&j(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(l)}catch(e){h.options.__e(e,t.__v)}};var S=n("ITEe"),x=n.n(S);class C{constructor(e){this.laptimeM=2,this.laptimeS=10,this.raceLength=20,this.literPerLap=2.6,this.maxTank=105,e&&(this.setState=e.setState,this.laptimeM=e.laptimeM,this.laptimeS=e.laptimeS,this.raceLength=e.raceLength,this.literPerLap=e.literPerLap,this.maxTank=e.maxTank),this.compute()}set(e,t){isNaN(t)?console.error(`Try to set ${e} to a value which is not a number`):(this[e]=t,this.compute(),this.setState&&this.setState(new C(this)))}compute(){this.laps=60*this.raceLength/(60*this.laptimeM+this.laptimeS+.5)+1,this.litersTotal=this.laps*this.literPerLap+1.5,this.pitstopRequired=this.litersTotal/this.maxTank,this.possibleLapsOnTank=this.maxTank/this.literPerLap-.5}}const T=()=>{const e=u();return Object(h.h)("form",{class:x.a.form},Object(h.h)("div",{class:"row"},Object(h.h)("div",{class:"col-sm"},Object(h.h)("div",{class:"container"},Object(h.h)("div",{class:"form-group"},Object(h.h)("label",null,"Lap time (minutes / seconds)"),Object(h.h)("div",{class:"form-row"},Object(h.h)("div",{class:"col"},Object(h.h)("input",{type:"number",class:"form-control",value:e.laptimeM,name:"laptimeM",onChange:t=>s(t,e)})),Object(h.h)("div",{class:"col"},Object(h.h)("input",{type:"number",class:"form-control",value:e.laptimeS,name:"laptimeS",onChange:t=>s(t,e)})))),Object(h.h)("div",{class:"form-group"},Object(h.h)("label",null,"Race length (minutes)"),Object(h.h)("input",{type:"number",class:"form-control",value:e.raceLength,name:"raceLength",onChange:t=>s(t,e)})),Object(h.h)("div",{class:"form-group"},Object(h.h)("label",null,"Consumption (liters/lap)"),Object(h.h)("input",{type:"number",class:"form-control",value:e.literPerLap,name:"literPerLap",onChange:t=>s(t,e)})),Object(h.h)("div",{class:"form-group"},Object(h.h)("label",null,"Max tank capacity (liters)"),Object(h.h)("input",{type:"number",class:"form-control",value:e.maxTank,name:"maxTank",onChange:t=>s(t,e)})))),Object(h.h)("div",{class:"col-sm"},Object(h.h)("div",{class:"container"},Object(h.h)("div",{class:"form-group"},Object(h.h)("label",null,"Total fuel needed (liters)"),Object(h.h)("input",{type:"number",class:"form-control",value:c(e.litersTotal),readOnly:!0})),Object(h.h)("div",{class:"form-group"},Object(h.h)("label",null,"Total Laps (with formation lap)"),Object(h.h)("input",{type:"number",class:"form-control",value:c(e.laps),readOnly:!0})),Object(h.h)("div",{class:"form-group"},Object(h.h)("label",null,"Number of pit stop required"),Object(h.h)("input",{type:"number",class:"form-control",value:c(e.pitstopRequired),readOnly:!0})),Object(h.h)("div",{class:"form-group"},Object(h.h)("label",null,"Possible laps on tank"),Object(h.h)("input",{type:"number",class:"form-control",value:c(e.possibleLapsOnTank),readOnly:!0}))))))};t.default=function(){return Object(h.h)("div",{id:"app",class:"container"},Object(h.h)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossorigin:"anonymous"}),Object(h.h)(v,null),Object(h.h)(T,null))}},hosL:function(e,t,n){"use strict";function o(e,t){for(var n in t)e[n]=t[n];return e}function r(e){var t=e.parentNode;t&&t.removeChild(e)}function l(e,t,n){var o,r=arguments,l={};for(o in t)"key"!==o&&"ref"!==o&&(l[o]=t[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(r[o]);if(null!=n&&(l.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===l[o]&&(l[o]=e.defaultProps[o]);return i(e,l,t&&t.key,t&&t.ref,null)}function i(e,t,n,o,r){var l={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(l.__v=l),w.vnode&&w.vnode(l),l}function _(){return{}}function u(e){return e.children}function c(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function a(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return a(e)}}function p(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!A++||M!==w.debounceRendering)&&((M=w.debounceRendering)||N)(f)}function f(){for(var e;A=E.length;)e=E.sort((function(e,t){return e.__v.__b-t.__v.__b})),E=[],e.some((function(e){var t,n,r,l,i,_,u;e.__d&&(_=(i=(t=e).__v).__e,(u=t.__P)&&(n=[],(r=o({},i)).__v=r,l=b(u,i,r,t.__n,void 0!==u.ownerSVGElement,null,n,null==_?s(i):_),g(n,i),l!=_&&a(i)))}))}function h(e,t,n,o,l,_,c,a,p,f){var h,d,m,v,y,g,k,S,x,C=o&&o.__k||F,T=C.length;for(p==U&&(p=null!=c?c[0]:T?s(o,0):null),n.__k=[],h=0;h<t.length;h++)if(null!=(v=n.__k[h]=null==(v=t[h])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v?i(null,v,null,null,v):Array.isArray(v)?i(u,{children:v},null,null,null):null!=v.__e||null!=v.__c?i(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(m=C[h])||m&&v.key==m.key&&v.type===m.type)C[h]=void 0;else for(d=0;d<T;d++){if((m=C[d])&&v.key==m.key&&v.type===m.type){C[d]=void 0;break}m=null}if(y=b(e,v,m=m||U,l,_,c,a,p,f),(d=v.ref)&&m.ref!=d&&(S||(S=[]),m.ref&&S.push(m.ref,null,v),S.push(d,v.__c||y,v)),null!=y){if(null==k&&(k=y),x=void 0,void 0!==v.__d)x=v.__d,v.__d=void 0;else if(c==m||y!=p||null==y.parentNode){e:if(null==p||p.parentNode!==e)e.appendChild(y),x=null;else{for(g=p,d=0;(g=g.nextSibling)&&d<T;d+=2)if(g==y)break e;e.insertBefore(y,p),x=p}"option"==n.type&&(e.value="")}p=void 0!==x?x:y.nextSibling,"function"==typeof n.type&&(n.__d=p)}else p&&m.__e==p&&p.parentNode!=e&&(p=s(m))}if(n.__e=k,null!=c&&"function"!=typeof n.type)for(h=c.length;h--;)null!=c[h]&&r(c[h]);for(h=T;h--;)null!=C[h]&&j(C[h],C[h]);if(S)for(h=0;h<S.length;h++)O(S[h],S[++h],S[++h])}function d(e){return null==e||"boolean"==typeof e?[]:Array.isArray(e)?F.concat.apply([],e.map(d)):[e]}function m(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===W.test(t)?n+"px":null==n?"":n}function v(e,t,n,o,r){var l,i,_,u,c;if(r?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(l=e.style,"string"==typeof n)l.cssText=n;else{if("string"==typeof o&&(l.cssText="",o=null),o)for(u in o)n&&u in n||m(l,u,"");if(n)for(c in n)o&&n[c]===o[c]||m(l,c,n[c])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),_=t.toLowerCase(),t=(_ in e?_:t).slice(2),n?(o||e.addEventListener(t,y,i),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,y,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function y(e){this.l[e.type](w.event?w.event(e):e)}function b(e,t,n,r,l,i,_,s,a){var p,f,d,m,v,y,b,g,O,j,x,C=t.type;if(void 0!==t.constructor)return null;(p=w.__b)&&p(t);try{e:if("function"==typeof C){if(g=t.props,O=(p=C.contextType)&&r[p.__c],j=p?O?O.props.value:p.__:r,n.__c?b=(f=t.__c=n.__c).__=f.__E:("prototype"in C&&C.prototype.render?t.__c=f=new C(g,j):(t.__c=f=new c(g,j),f.constructor=C,f.render=S),O&&O.sub(f),f.props=g,f.state||(f.state={}),f.context=j,f.__n=r,d=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=C.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=o({},f.__s)),o(f.__s,C.getDerivedStateFromProps(g,f.__s))),m=f.props,v=f.state,d)null==C.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==C.getDerivedStateFromProps&&g!==m&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(g,j),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(g,f.__s,j)||t.__v===n.__v){for(f.props=g,f.state=f.__s,t.__v!==n.__v&&(f.__d=!1),f.__v=t,t.__e=n.__e,t.__k=n.__k,f.__h.length&&_.push(f),p=0;p<t.__k.length;p++)t.__k[p]&&(t.__k[p].__=t);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(g,f.__s,j),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(m,v,y)}))}f.context=j,f.props=g,f.state=f.__s,(p=w.__r)&&p(t),f.__d=!1,f.__v=t,f.__P=e,p=f.render(f.props,f.state,f.context),null!=f.getChildContext&&(r=o(o({},r),f.getChildContext())),d||null==f.getSnapshotBeforeUpdate||(y=f.getSnapshotBeforeUpdate(m,v)),x=null!=p&&p.type==u&&null==p.key?p.props.children:p,h(e,Array.isArray(x)?x:[x],t,n,r,l,i,_,s,a),f.base=t.__e,f.__h.length&&_.push(f),b&&(f.__E=f.__=null),f.__e=!1}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=k(n.__e,t,n,r,l,i,_,a);(p=w.diffed)&&p(t)}catch(e){t.__v=null,w.__e(e,t,n)}return t.__e}function g(e,t){w.__c&&w.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){w.__e(e,t.__v)}}))}function k(e,t,n,o,r,l,i,_){var u,c,s,a,p,f=n.props,d=t.props;if(r="svg"===t.type||r,null!=l)for(u=0;u<l.length;u++)if(null!=(c=l[u])&&((null===t.type?3===c.nodeType:c.localName===t.type)||e==c)){e=c,l[u]=null;break}if(null==e){if(null===t.type)return document.createTextNode(d);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,d.is&&{is:d.is}),l=null,_=!1}if(null===t.type)f!==d&&e.data!=d&&(e.data=d);else{if(null!=l&&(l=F.slice.call(e.childNodes)),s=(f=n.props||U).dangerouslySetInnerHTML,a=d.dangerouslySetInnerHTML,!_){if(null!=l)for(f={},p=0;p<e.attributes.length;p++)f[e.attributes[p].name]=e.attributes[p].value;(a||s)&&(a&&s&&a.__html==s.__html||(e.innerHTML=a&&a.__html||""))}(function(e,t,n,o,r){var l;for(l in n)"children"===l||"key"===l||l in t||v(e,l,null,n[l],o);for(l in t)r&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||v(e,l,t[l],n[l],o)})(e,d,f,r,_),a?t.__k=[]:(u=t.props.children,h(e,Array.isArray(u)?u:[u],t,n,o,"foreignObject"!==t.type&&r,l,i,U,_)),_||("value"in d&&void 0!==(u=d.value)&&u!==e.value&&v(e,"value",u,f.value,!1),"checked"in d&&void 0!==(u=d.checked)&&u!==e.checked&&v(e,"checked",u,f.checked,!1))}return e}function O(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){w.__e(e,n)}}function j(e,t,n){var o,l,i;if(w.unmount&&w.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||O(o,null,t)),n||"function"==typeof e.type||(n=null!=(l=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){w.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&j(o[i],t,n);null!=l&&r(l)}function S(e,t,n){return this.constructor(e,n)}function x(e,t,n){var o,r,i;w.__&&w.__(e,t),r=(o=n===H)?null:n&&n.__k||t.__k,e=l(u,null,[e]),i=[],b(t,(o?t:n||t).__k=e,r||U,U,void 0!==t.ownerSVGElement,n&&!o?[n]:r?null:t.childNodes.length?F.slice.call(t.childNodes):null,i,n||U,o),g(i,e)}function C(e,t){x(e,t,H)}function T(e,t){var n,r;for(r in t=o(o({},e.props),t),arguments.length>2&&(t.children=F.slice.call(arguments,2)),n={},t)"key"!==r&&"ref"!==r&&(n[r]=t[r]);return i(e.type,n,t.key||e.key,t.ref||e.ref,null)}function P(e){var t={},n={__c:"__cC"+D++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var o,r=this;return this.getChildContext||(o=[],this.getChildContext=function(){return t[n.__c]=r,t},this.shouldComponentUpdate=function(e){r.props.value!==e.value&&o.some((function(t){t.context=e.value,p(t)}))},this.sub=function(e){o.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){o.splice(o.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}n.r(t),n.d(t,"render",(function(){return x})),n.d(t,"hydrate",(function(){return C})),n.d(t,"createElement",(function(){return l})),n.d(t,"h",(function(){return l})),n.d(t,"Fragment",(function(){return u})),n.d(t,"createRef",(function(){return _})),n.d(t,"isValidElement",(function(){return L})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return T})),n.d(t,"createContext",(function(){return P})),n.d(t,"toChildArray",(function(){return d})),n.d(t,"_unmount",(function(){return j})),n.d(t,"options",(function(){return w}));var w,L,E,A,N,M,H,D,U={},F=[],W=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;w={__e:function(e,t){for(var n,o;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(e)),o)return p(n.__E=n)}catch(t){e=t}throw e}},L=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&o(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),p(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),p(this))},c.prototype.render=u,E=[],A=0,N="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,H=U,D=0},mdyV:function(e,t,n){"use strict";n.r(t);var o=n("hosL");const{h:r,render:l,hydrate:i}=o,_=e=>e&&e.default?e.default:e;if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof _(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;(()=>{let t=_(n("QfWi")),o={};const u=document.querySelector('[type="__PREACT_CLI_DATA__"]');u&&(o=JSON.parse(u.innerHTML).preRenderData||o);const c=o.url?"/"===(s=o.url)[s.length-1]?s:s+"/":"";var s;const a=i&&c===location.pathname;e=(a?i:l)(r(t,{CLI_DATA:{preRenderData:o}}),document.body,e)})()}},ySiU:function(e){e.exports={header:"header__3QGkI",active:"active__3gItZ"}}});
//# sourceMappingURL=bundle.8e436.esm.js.map