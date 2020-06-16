module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/fuelcalc",n(n.s="QfWi")}({GFNa:function(t,e,n){},HteQ:function(t,e){t.exports=require("preact")},ITEe:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("GFNa");var o,r,i,a=n("HteQ"),c=n("ySiU"),s=n.n(c),u=function(){return Object(a.h)("header",{class:s.a.header},Object(a.h)("h1",null,"Fuel Calculator"))},l=0,_=[],h=a.options.__r,p=a.options.diffed,f=a.options.__c,m=a.options.unmount;function b(t,e){a.options.__h&&a.options.__h(r,t,l||e),l=0;var n=r.__H||(r.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function d(t){return l=1,function(t,e,n){var i=b(o++,2);return i.t=t,i.__c||(i.__c=r,i.__=[n?n(e):y(void 0,e),function(t){var e=i.t(i.__[0],t);i.__[0]!==e&&(i.__[0]=e,i.__c.setState({}))}]),i.__}(y,t)}function v(){_.some((function(t){if(t.__P)try{t.__H.__h.forEach(O),t.__H.__h.forEach(j),t.__H.__h=[]}catch(e){return t.__H.__h=[],a.options.__e(e,t.__v),!0}})),_=[]}function O(t){"function"==typeof t.u&&t.u()}function j(t){t.u=t.__()}function g(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}function y(t,e){return"function"==typeof e?e(t):e}a.options.__r=function(t){h&&h(t),o=0;var e=(r=t.__c).__H;e&&(e.__h.forEach(O),e.__h.forEach(j),e.__h=[])},a.options.diffed=function(t){p&&p(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==_.push(e)&&i===a.options.requestAnimationFrame||((i=a.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(o),cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(v))},a.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(O),t.__h=t.__h.filter((function(t){return!t.__||j(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],a.options.__e(n,t.__v)}})),f&&f(t,e)},a.options.unmount=function(t){m&&m(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(O)}catch(t){a.options.__e(t,e.__v)}};var T=n("ITEe"),S=n.n(T),x=function(){function t(t){this.laptimeM=2,this.laptimeS=10,this.raceLength=20,this.literPerLap=2.6,this.maxTank=105,this.onChange=function(){},t&&(this.setState=t.setState,this.laptimeM=t.laptimeM,this.laptimeS=t.laptimeS,this.raceLength=t.raceLength,this.literPerLap=t.literPerLap,this.maxTank=t.maxTank,this.onChange=t.onChange),this.compute()}var e=t.prototype;return e.set=function(t,e){isNaN(e)?console.error("Try to set "+t+" to a value which is not a number"):(this[t]=e,this.compute(),this.onChange())},e.compute=function(){this.laps=60*this.raceLength/(60*this.laptimeM+this.laptimeS+.5)+1,this.litersTotal=this.laps*this.literPerLap+1.5,this.pitstopRequired=this.litersTotal/this.maxTank,this.possibleLapsOnTank=this.maxTank/this.literPerLap-.5},t}();function H(){var t,e,n,i=d(new x),c=i[0],s=i[1];return t=function(){c.onChange=function(){return s(new x(c))}},e=[c],n=b(o++,3),!a.options.__s&&g(n.__H,e)&&(n.__=t,n.__H=e,r.__H.__h.push(n)),c}function L(t){return Math.floor(t)}function k(t,e){console.log(e),e.set(t.target.name,t.target.value)}var P=function(){var t=H();return Object(a.h)("form",{class:S.a.form},Object(a.h)("div",{class:"row"},Object(a.h)("div",{class:"col-sm"},Object(a.h)("div",{class:"container"},Object(a.h)("div",{class:"form-group"},Object(a.h)("label",null,"Lap time (minutes / seconds)"),Object(a.h)("div",{class:"form-row"},Object(a.h)("div",{class:"col"},Object(a.h)("input",{type:"number",class:"form-control",value:t.laptimeM,name:"laptimeM",onChange:function(e){return k(e,t)}})),Object(a.h)("div",{class:"col"},Object(a.h)("input",{type:"number",class:"form-control",value:t.laptimeS,name:"laptimeS",onChange:function(e){return k(e,t)}})))),Object(a.h)("div",{class:"form-group"},Object(a.h)("label",null,"Race length (minutes)"),Object(a.h)("input",{type:"number",class:"form-control",value:t.raceLength,name:"raceLength",onChange:function(e){return k(e,t)}})),Object(a.h)("div",{class:"form-group"},Object(a.h)("label",null,"Consumption (liters/lap)"),Object(a.h)("input",{type:"number",class:"form-control",value:t.literPerLap,name:"literPerLap",onChange:function(e){return k(e,t)}})),Object(a.h)("div",{class:"form-group"},Object(a.h)("label",null,"Max tank capacity (liters)"),Object(a.h)("input",{type:"number",class:"form-control",value:t.maxTank,name:"maxTank",onChange:function(e){return k(e,t)}})))),Object(a.h)("div",{class:"col-sm"},Object(a.h)("div",{class:"container"},Object(a.h)("div",{class:"form-group"},Object(a.h)("label",null,"Total fuel needed (liters)"),Object(a.h)("input",{type:"number",class:"form-control",value:L(t.litersTotal),readOnly:!0})),Object(a.h)("div",{class:"form-group"},Object(a.h)("label",null,"Total Laps (with formation lap)"),Object(a.h)("input",{type:"number",class:"form-control",value:L(t.laps),readOnly:!0})),Object(a.h)("div",{class:"form-group"},Object(a.h)("label",null,"Number of pit stop required"),Object(a.h)("input",{type:"number",class:"form-control",value:L(t.pitstopRequired),readOnly:!0})),Object(a.h)("div",{class:"form-group"},Object(a.h)("label",null,"Possible laps on tank"),Object(a.h)("input",{type:"number",class:"form-control",value:L(t.possibleLapsOnTank),readOnly:!0}))))))};e.default=function(){return Object(a.h)("div",{id:"app",class:"container"},Object(a.h)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossorigin:"anonymous"}),Object(a.h)(u,null),Object(a.h)(P,null))}},ySiU:function(t,e,n){t.exports={header:"header__3QGkI",active:"active__3gItZ"}}});
//# sourceMappingURL=ssr-bundle.js.map