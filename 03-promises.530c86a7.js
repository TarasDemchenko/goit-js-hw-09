var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var i=n("iQIUW");const r=document.querySelector(".form");function l(e,o){const t={position:e,delay:o},n=Math.random()>.3;return new Promise(((e,i)=>{setTimeout((()=>{n?e(t):i(t)}),o)}))}r.addEventListener("submit",(function(e){e.preventDefault();let o=Number(r.delay.value);for(let e=1;e<=r.amount.value;e+=1)l(e,o).then((({position:e,delay:o})=>{i.Notify.success(`вњ… Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{i.Notify.failure(`вќЊ Rejected promise ${e} in ${o}ms`)})),o+=Number(r.step.value)}));
//# sourceMappingURL=03-promises.530c86a7.js.map
