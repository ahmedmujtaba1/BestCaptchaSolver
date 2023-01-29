import{c as xe,a as h,s as I,b as fe,o as ve,d as q,S as K,e as ce,v as me}from"./hCaptcha.jsx-218694e1.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();function ye(e,l,t){let o=t.length,n=l.length,s=o,r=0,i=0,p=l[n-1].nextSibling,b=null;for(;r<n||i<s;){if(l[r]===t[i]){r++,i++;continue}for(;l[n-1]===t[s-1];)n--,s--;if(n===r){const w=s<o?i?t[i-1].nextSibling:t[s-i]:p;for(;i<s;)e.insertBefore(t[i++],w)}else if(s===i)for(;r<n;)(!b||!b.has(l[r]))&&l[r].remove(),r++;else if(l[r]===t[s-1]&&t[i]===l[n-1]){const w=l[--n].nextSibling;e.insertBefore(t[i++],l[r++].nextSibling),e.insertBefore(t[--s],w),l[n]=t[s]}else{if(!b){b=new Map;let T=i;for(;T<s;)b.set(t[T],T++)}const w=b.get(l[r]);if(w!=null)if(i<w&&w<s){let T=r,Y=1,Q;for(;++T<n&&T<s&&!((Q=b.get(l[T]))==null||Q!==w+Y);)Y++;if(Y>w-i){const X=l[r];for(;i<w;)e.insertBefore(t[i++],X)}else e.replaceChild(t[i++],l[r++])}else r++;else l[r++].remove()}}}const de="_$DX_DELEGATE";function we(e,l,t,o={}){let n;return xe(s=>{n=s,l===document?e():f(l,e(),l.firstChild?null:void 0,t)},o.owner),()=>{n(),l.textContent=""}}function B(e,l,t){const o=document.createElement("template");o.innerHTML=e;let n=o.content.firstChild;return t&&(n=n.firstChild),n}function Ce(e,l=window.document){const t=l[de]||(l[de]=new Set);for(let o=0,n=e.length;o<n;o++){const s=e[o];t.has(s)||(t.add(s),l.addEventListener(s,$e))}}function F(e,l,t){t==null?e.removeAttribute(l):e.setAttribute(l,t)}function _(e,l){l==null?e.removeAttribute("class"):e.className=l}function f(e,l,t,o){if(t!==void 0&&!o&&(o=[]),typeof l!="function")return Z(e,l,o,t);h(n=>Z(e,l(),n,t),o)}function $e(e){const l=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),I.registry&&!I.done&&(I.done=!0,document.querySelectorAll("[id^=pl-]").forEach(o=>{for(;o&&o.nodeType!==8&&o.nodeValue!=="pl-"+e;){let n=o.nextSibling;o.remove(),o=n}o&&o.remove()}));t;){const o=t[l];if(o&&!t.disabled){const n=t[`${l}Data`];if(n!==void 0?o.call(t,n,e):o.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function Z(e,l,t,o,n){for(I.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(l===t)return t;const s=typeof l,r=o!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,s==="string"||s==="number"){if(I.context)return t;if(s==="number"&&(l=l.toString()),r){let i=t[0];i&&i.nodeType===3?i.data=l:i=document.createTextNode(l),t=j(e,t,o,i)}else t!==""&&typeof t=="string"?t=e.firstChild.data=l:t=e.textContent=l}else if(l==null||s==="boolean"){if(I.context)return t;t=j(e,t,o)}else{if(s==="function")return h(()=>{let i=l();for(;typeof i=="function";)i=i();t=Z(e,i,t,o)}),()=>t;if(Array.isArray(l)){const i=[],p=t&&Array.isArray(t);if(W(i,l,t,n))return h(()=>t=Z(e,i,t,o,!0)),()=>t;if(I.context){if(!i.length)return t;for(let b=0;b<i.length;b++)if(i[b].parentNode)return t=i}if(i.length===0){if(t=j(e,t,o),r)return t}else p?t.length===0?Ae(e,i,o):ye(e,t,i):(t&&j(e),Ae(e,i));t=i}else if(l instanceof Node){if(I.context&&l.parentNode)return t=r?[l]:l;if(Array.isArray(t)){if(r)return t=j(e,t,o,l);j(e,t,null,l)}else t==null||t===""||!e.firstChild?e.appendChild(l):e.replaceChild(l,e.firstChild);t=l}}return t}function W(e,l,t,o){let n=!1;for(let s=0,r=l.length;s<r;s++){let i=l[s],p=t&&t[s];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))n=W(e,i,p)||n;else if(typeof i=="function")if(o){for(;typeof i=="function";)i=i();n=W(e,Array.isArray(i)?i:[i],Array.isArray(p)?p:[p])||n}else e.push(i),n=!0;else{const b=String(i);p&&p.nodeType===3&&p.data===b?e.push(p):e.push(document.createTextNode(b))}}return n}function Ae(e,l,t=null){for(let o=0,n=l.length;o<n;o++)e.insertBefore(l[o],t)}function j(e,l,t,o){if(t===void 0)return e.textContent="";const n=o||document.createTextNode("");if(l.length){let s=!1;for(let r=l.length-1;r>=0;r--){const i=l[r];if(n!==i){const p=i.parentNode===e;!s&&!r?p?e.replaceChild(n,i):e.insertBefore(n,t):p&&i.remove()}else s=!0}}else e.insertBefore(n,t);return[n]}const Le="data:image/png;base64,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",Se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAIGElEQVRo3t2ZC1AU9x3HPeEOOB6KhOCUTnicIAeCUGxQOA64O+S4QxAxaUwjNpiaDirYWgKVIdqgghDACsgzgHBvIIpvzUyaaZxJk+YxZmzajM40sbF1akwmNiS148z299/977G3t7v34NCZ7sx3uJ27/e/n83/tf/8sWvR/eoggfhCxj+KPg8pcjMtfuEOxZUvQlo6bZ5/tnSXI9FDZgvNMN5Wf0Dk2l6dxnvodlUztyIP0Dca7azYY38sqmxgseHr8+V/stayqqKgNwkILIiMJiIxMKG68+mbF0VliE50uKuU4GzuplNHpmEspToq6h0gpHCXkhUYiSWOFTEKmiNSiydmsjZb252pH5bh1RL7uQsGS8PBUbeMHf/BUoJQpoEECfUSyZoyQMwRWqqftydBPvrn5hZF0X7eIXaJ433tvs+HdEdjwKggU9gB4PyFXDxPJaqOTQKIKRz1FZJZYRquqmpa5kBDV149K3BVFPwoRL12aoT9w4wZX7bsSSAaBZDUlIFdBK6jNnAIJqikyco3tK93WoSdxazjx6PUvSFPWW6y427l1iH968J2XUBcq97D/ky2gQQJ9AP4aBAmME0kg4VD7DIEVBVPQGtOEsny8kgUp0um2S1M0ppOxykkCzqXuwPtXtv/1QLmrrsNT+3MC/XMCGiRggFg54enI8qcIRdl4DT3AdboqaUqh6RSCxwKhruD9nmv9uIYP3p3aJ7uQmiGgYQoYiZUqK6cAgqejKBvempNTFppcaJqJy6PgsUCYEPzi7a+8peLr867guQWGSYEk9QQloDKBgAkEbLwC8QCMzmHcfITg3RUQVe3uiNrYee8eG9qp23QKw5c4CZygBFRGDG8CcBQrr0A8BmfCx+baBAXEFS2fTbqE7xDuOrRAiuYowPfNCagMpECig4AZwK0+ERA9u29mbRlXTXsBjwJl5gYsidBEy3K2ydKquxOUA3cSHQTMVApMAG9zgvdUQFJ25NY7noLrDn85q9730TU2PBZ4HM8YEZAYyJqYlK2NMtVr3zHhE/LNZGT5VuHaFxAQbfyleTUbki80fNHL165H/nClVhwUlqWqu/I2E76kfZa+kQivQtGUGAz5wZLH4zWy7OOfJqrMdvgVeVRk+TbB2ucT8C9t/kuvu+Ao2t9cux4UEZUF14ajAiXB4amql959i4ZnCLCf7khkaVBYxJNx2d2fMAVk8Dc+zwSx2uHdEkhSKEL1bV//RwjYAb7t7nfRstUFuKDF9rUTSOTX/fH3AgL2qRp9Fx6ZqIhTnJil4SkBFItdgt19uARExbuHM0oFgNkDNbPiUCNctwyDOC4AQ8JXIQm9sAD5sExISItemTf4IRs+DkVJSbDhYxTOAn7afVdedAJ+9VsyG9odU3To8zsBAQEyngUVlli2Kr/hg0toMcj3vCkv/3loWtHYDA0vy7fgmqfgUWLJvzaXApKipk9GacCStntUjnzDmeyfjXThmUUktBQPXLo8FpXN9f2mTTsA/sQpIXjUCrFKKxlSAsNzCQRpD978EMHpj3xN6FvvUmn5koyOleS8qmL8rutqKS7mkLTDryhwho/nhIfkonN+geD1r9z+SgfQusP/IooP/YPQoRy8xZmoxLQ4Vt93+yWpvNwZHs39bPi4PBZ8rhXA6TgLhOpb/vlAd/g2Bdn8OaH97Q1Ce+A6oX35UzJFjMDvH+PZfRB8JczJeSYobf3w6YT8cZgyUSYgBkKmhOQaiPjcCZBAMQA0OocoJog4hYFMbA6VGAh7OR12+fJlwpNcunTJKUaj8d2SkhKhFw00Hp6AZEDQ82OtF0HXrUbd3kHgwoULhLc5f/48MTAwcDUkJETOM2iZ40KCbz6fBLJbOsxbcJTe3t4/S6XSDBcz04IeYZ4AM4Phf4ThFy96REcYF5yrAPw1sVj8yOG9EhgbG7sJ8Jk+gBdVV1dL59v1PBY4efLk/dLS0gye/Ru34RsbG2NmZmbuNDc3y+dTEV51ocnJyVuVlZXLvaw90Y4dOx6bnp7+4uzZswRIfAsyKd5KeCWAMjU1dWvnzl8letgSfk1NTbLp6ddJeDpIoqGhIdUbCY8Ezp075xC48f2enp6G9PR0qcDTmPyfg1qtDh4YGNqLrmHCz1cijA3lTU7NzHwzMjbW3dXVpdyzZ0+UXC6XoKDP3d3dytHR0aOnT5++xwXOlqirq1vliYRPBJhBLXXx4kUy6NwVNI+E22PC5wLeQDNz5swZGF+nUHdKdmeScBKAef42Kuhhg9PwdGCm+zeMmyUeCaDlgb+/f25NTc3gw4Jmg6PAeCFqa2vb3dlKtwv09/d/DE/YDPzCHr9//37TQkILwdfX15/Am2FilwKokMHBwasAn85YHqBlq2zv3l/3+hLWHfidO3d3owrkWjpzHSFDQ0PvA/xq1pJYhAuI2bR5czX0x+8XEhzFYrF8X1RcvAvXfKC7T/kAOOLxFoiI5yUkKjo6WnXs2LH30Y0WotY7Ojr+BPdQw72W43u6vUTh20FwePxD0Gwg12q126G7feaNCBd4X1/f35RK5YuobHwP/4VadtPjIhKSmp2dva21tfUNs9n8X0/BbTbb/ZaWljcyM3+8DZWFd7EDH9Z7hR9+N0W7E2ght1aRl/c8THnHOzs7r4yMjPzdYDDMQn9+gDIxMTE7PDz8RVtb25Vdu3YdX7duXRV+QU/EZQTNc1k+rxaR4C3zCLzjkARBM9kavIOQhT+n4++ewL8Nxtc+0jc5tow/hgrk2UmQ4N/4DPp/N0P1KyiVEy8AAAAASUVORK5CYII=",_e=B('<button class=" badge badge-sm text-sm ml-1 p-1 font-light badge-primary lowercase"></button>'),ke=B('<div class="p-3"><input type="checkbox" id="power" data-tip="Turn extension on/off"></div>'),Ee=B('<div class="flex flex-row justify-around pt-3 "><span class="mr-2">Wallet: <br><b class="text-xs text-success"> 💲</b></span><span class="mr-2">Plan:<br><b class="text-xs text-success"> <!> of <!> left</b></span><span>NextReset: <br><b class="text-xs text-success"></b></span></div>'),Ne=B('<div class="flex flex-row justify-around pt-3 "><span class="mr-2">User: <br><b class="text-xs text-success"> </b></span><span class="mr-2">Daily <!>:<br><b class="text-xs text-success"> / </b></span><span>NextReset: <br><b class="text-xs text-success"> </b></span></div>'),Ue=B('<div class="text-center pl-5 pr-5"><label class="label cursor-pointer flex hover:shadow-inner hover:bg-cyan-900 hover:bg-opacity-40 hover:rounded-lg"><span class="text-lg">Enable hCaptcha</span><input id="hCap" type="checkbox" data-tip="Turn hCaptcha solving on/off"></label></div>'),Be=B('<div class="collapse-content m-1"><div class="form-control flex flex-row flex-wrap justify-between"><label class="label cursor-pointer flex hover:shadow-inner hover:bg-cyan-900 hover:bg-opacity-40 hover:rounded-lg"><span class="label-text mr-5">Auto Open</span><input id="autoOpen" type="checkbox" data-tip="Turn auto open on/off"></label><label class="label cursor-pointer flex hover:shadow-inner hover:bg-cyan-900 hover:bg-opacity-40 hover:rounded-lg"><span class="label-text flex-1 mr-2 text-md font-medium">Logs</span><input id="logs" type="checkbox" data-tip="Turn logs on/off"></label></div><div class="form-control flex flex-row flex-wrap justify-between"><label class="label cursor-pointer flex hover:shadow-inner hover:bg-cyan-900 hover:bg-opacity-40 hover:rounded-lg"><span class="label-text mr-5">Auto Solve</span><input id="autoSolve" type="checkbox" data-tip="Turn auto solve on/off"></label><label class="label cursor-pointer flex hover:shadow-inner hover:bg-cyan-900 hover:bg-opacity-40 hover:rounded-lg"><span class="text-sm mr-5">Fast Animation</span><input id="fast" type="checkbox" data-tip="Turn fast animations on/off"></label></div><div class="form-control flex flex-row justify-between"><label data-tip="control solving time in seconds" class="tooltip tooltip-right label cursor-pointer flex hover:shadow-inner hover:bg-cyan-900 hover:bg-opacity-40 hover:rounded-lg"><span class="label-text flex-0 text-sm pr-1 font-medium">Solve in</span><input type="number" min="2" max="10" class=" input input-bordered input-ghost input-sm w-16"><b class="text-md font-bold ml-1">Sec</b></label></div></div>'),Te=B('<p class="text-warning text-center text-sm">Lower than 5s probably might fail solving</p>'),Re=B('<div class="text-center pl-5 pr-5"><label class="label cursor-pointer flex hover:shadow-inner hover:bg-cyan-900 hover:bg-opacity-40 hover:rounded-lg"><span class="text-lg">Enable reCaptcha</span><input id="reCap" type="checkbox" data-tip="Turn hCaptcha solving on/off"></label></div>'),Pe=B('<div class="collapse-content m-1"><div class="text-lg text-error text-center">settings coming on next update</div><div class="form-control flex flex-row flex-wrap justify-between"><label class="label cursor-pointer flex hover:shadow-inner hover:bg-cyan-900 hover:bg-opacity-40 hover:rounded-lg"><span class="label-text mr-5">Auto Open</span><input id="RautoOpen" type="checkbox" data-tip="Turn auto open on/off" disabled></label><label class="label cursor-pointer flex hover:shadow-inner hover:bg-cyan-900 hover:bg-opacity-40 hover:rounded-lg"><span class="label-text mr-5">Auto Solve</span><input id="RautoSolve" type="checkbox" data-tip="Turn auto solve on/off" disabled></label></div><div class="form-control flex flex-row flex-wrap justify-between"><label class="label cursor-pointer flex hover:shadow-inner hover:bg-cyan-900 hover:bg-opacity-40 hover:rounded-lg"><span class="label-text mr-5">Fast Animation</span><input id="Rfast" type="checkbox" data-tip="Turn fast animations on/off" disabled></label><label class="label cursor-pointer flex hover:shadow-inner hover:bg-cyan-900 hover:bg-opacity-40 hover:rounded-lg"><span class="label-text flex-1 mr-2 text-md font-medium">Logs</span><input id="Rlogs" type="checkbox" data-tip="Turn logs on/off" disabled></label></div><div class="form-control flex flex-row justify-between"></div></div>'),De=B(`<div class="card rounded-lg p-2"><div class="flex flex-row justify-between text-xl font-bold text-center p-2  boder border-b-2 border-gray-700"><div class="flex flex-col text-start"><h1 class=""><a data-tip="https://dash.noCaptchaAi.com" target="_blank" href="https://dash.noCaptchaAi.com" class="tooltip tooltip-bottom text-bold text-3xl">noCaptchaAi</a></h1><i class="text-sm">ai captcha solving</i></div></div><div class="flex flex-row justify-between w-96 m-1 border border-gray-600/60 rounded-md"><div class="text-center font-bold flex flex-1 w-full"><div id="edit" class="text-lg bg-gray-900 absolute w-full max-w-sm mx-auto pb-1 mb-2 rounded-md cursor-pointer hover:opacity-70">APIKEY ✒️</div><input type="text" class="input input-bordered input-info input-sm w-full
            placeholder:text-slate-400 placeholder:italic
            "></div></div><div><div class="collapse collapse-arrow bg-cyan-700/60 rounded-lg m-1"><input type="checkbox"><div class="collapse-title text-xl font-medium flex"><img class="mr-2" alt="hcaptcha_logo" srcset="" width="30px">hCaptcha</div></div></div><div><div class=" collapse collapse-arrow bg-sky-800 mt-2 shadow-2xl rounded-lg m-1"><input type="checkbox"><div class=" collapse-title text-xl font-medium flex"><img alt="recaptcha_logo" width="30px" class="mr-2">reCaptcha v2 (Free Use Beta)</div></div></div><p class="text-center text-md p-2 opacity-60 flex justify-between"><a target="_blank" href="https://noCaptchaAi.com">2022-<!> @ noCaptchaAi.com</a><b>Version:</b></p></div>`);function ee(e,l){chrome.storage.local.set({[e]:l},()=>console.log(`${e} set = `+l)),le()}function te(e){return new Promise(l=>{chrome.storage.local.get([e],t=>{console.log(`${e}  is `+t[e]),l(t[e])})})}const O=e=>document.querySelector(e),qe=e=>document.getElementById(e),[L,Oe]=fe(),[y,Ie]=fe("");function k(e,l){qe(`${e}`)&&(O(e)?.classList.toggle("btn-success",l),O(e)?.classList.toggle("btn-error",!l),ee(e,l),te(e).then(console.log),le())}const E=["power","apikey","plantype","hCap","reCap","autoOpen","RautoOpen","autoSolve","RautoSolve","solveInSec","fast","Rfast","logs","Rlogs"];let a={};async function le(){for(let e=0;e<E.length;e++)await te(E[e]).then(l=>{a[E[e]]=l,console.log(`${E[e]}`,a[E[e]])}),O([E[e]])?.checked==="true"?(O([E[e]])?.classList.add("btn-success"),O([E[e]])?.classList.remove("btn-error")):O([E[e]])?.checked===!1&&(O([E[e]])?.classList.remove("btn-success"),O([E[e]])?.classList.add("btn-error"));Oe(a),console.log(a.plantype,a.apikey),console.log("signal",L().apikey)}ve(async()=>{await le(),L().apikey!==null&&await fetch(`https://${a.plantype==="PRO"?"manage":"free"}.noCaptchaAi.com/balance`.toLowerCase(),{method:"get",headers:{"Content-Type":"application/json",apikey:a.apikey}}).then(e=>{e.json().then(l=>{Ie(l)})}).catch(e=>{console.log(e)})});function Me(){return(()=>{const e=De.cloneNode(!0),l=e.firstChild,t=l.firstChild,o=t.firstChild;o.firstChild;const n=l.nextSibling,s=n.firstChild,r=s.firstChild,i=r.nextSibling,p=n.nextSibling,b=p.firstChild,w=b.firstChild,T=w.nextSibling,Y=T.firstChild,Q=p.nextSibling,X=Q.firstChild,ge=X.firstChild,he=ge.nextSibling,pe=he.firstChild,ue=Q.nextSibling,G=ue.firstChild,be=G.firstChild,ie=be.nextSibling;ie.nextSibling;const ne=G.nextSibling;return ne.firstChild,f(o,q(K,{get when(){return L()?.apikey!==void 0||""},fallback:"",get children(){const d=_e.cloneNode(!0);return f(d,()=>L().plantype),d}}),null),f(l,q(K,{get when(){return L()!==void 0},get children(){const d=ke.cloneNode(!0),g=d.firstChild;return g.addEventListener("change",v=>k(v.target.id,v.target.checked)),h(()=>_(g,`toggle tooltip tooltip-left toggle-lg toggle-${a.power==!0?"success":"error"}`)),h(()=>g.checked=a.power),d}}),null),f(e,q(K,{get when(){return ce(()=>L()?.plantype==="PRO")()&&y()!==void 0},fallback:"",get children(){const d=Ee.cloneNode(!0),g=d.firstChild,v=g.firstChild,u=v.nextSibling,x=u.nextSibling;x.firstChild;const C=g.nextSibling,M=C.firstChild,N=M.nextSibling,m=N.nextSibling,R=m.firstChild,$=R.nextSibling,P=$.nextSibling,S=P.nextSibling;S.nextSibling;const V=C.nextSibling,D=V.firstChild,U=D.nextSibling,A=U.nextSibling;return f(g,()=>y().user_id,u),f(x,()=>y().Balance,null),f(m,()=>y()?.Subscription?.plan,R),f(m,"",$),f(m,()=>y()?.Subscription?.remaining,$),f(m,"",S),f(m,()=>y()?.Subscription?.dailyLimit,S),f(A,()=>y()?.Subscription?.nextReset),d}}),n),f(e,q(K,{get when(){return ce(()=>y()!==void 0)()&&L()?.plantype==="FREE"},fallback:"",get children(){const d=Ne.cloneNode(!0),g=d.firstChild,v=g.firstChild,u=v.nextSibling,x=u.nextSibling;x.firstChild;const C=g.nextSibling,M=C.firstChild,N=M.nextSibling,m=N.nextSibling,R=m.nextSibling,$=R.nextSibling,P=$.firstChild,S=C.nextSibling,V=S.firstChild,D=V.nextSibling,U=D.nextSibling;return U.firstChild,f(g,()=>y().user_id,u),f(x,()=>y().status,null),f(C,()=>y()?.plan,N),f($,()=>y()?.remaining,P),f($,()=>y()?.dailyLimit,null),f(U,()=>y()?.nextReset,null),d}}),n),r.$$click=()=>{document.getElementById("edit").classList.add("opacity-0"),document.getElementById("edit").style.display="none"},i.$$input=d=>ee("apikey",d.target.value),F(Y,"src",Le),f(b,q(K,{get when(){return L()!==void 0},get children(){return[(()=>{const d=Ue.cloneNode(!0),g=d.firstChild,v=g.firstChild,u=v.nextSibling;return u.addEventListener("change",x=>k(x.target.id,x.target.checked)),h(()=>_(u,`toggle tooltip tooltip-left toggle-${a.hCap==!0?"success":"error"}`)),h(()=>u.checked=a.hCap),d})(),(()=>{const d=Be.cloneNode(!0),g=d.firstChild,v=g.firstChild,u=v.firstChild,x=u.nextSibling,C=v.nextSibling,M=C.firstChild,N=M.nextSibling,m=g.nextSibling,R=m.firstChild,$=R.firstChild,P=$.nextSibling,S=R.nextSibling,V=S.firstChild,D=V.nextSibling,U=m.nextSibling,A=U.firstChild,J=A.firstChild,H=J.nextSibling;return x.addEventListener("change",c=>k(c.target.id,c.target.checked)),N.addEventListener("change",c=>k(c.target.id,c.target.checked)),P.addEventListener("change",c=>k(c.target.id,c.target.checked)),D.addEventListener("change",c=>k(c.target.id,c.target.checked)),H.addEventListener("change",c=>ee("solveInSec",c.target.value)),h(c=>{const z=`toggle tooltip tooltip-right toggle-${a.power==!0?"success":"error"}`,oe=`toggle tooltip tooltip-left toggle-${a.power==!0?"success":"error"}`,se=`toggle tooltip tooltip-right toggle-${a.power==!0?"success":"error"}`,re=`toggle tooltip tooltip-left toggle-${a.power==!0?"success":"error"}`,ae=L().solveInSec;return z!==c._v$&&_(x,c._v$=z),oe!==c._v$2&&_(N,c._v$2=oe),se!==c._v$3&&_(P,c._v$3=se),re!==c._v$4&&_(D,c._v$4=re),ae!==c._v$5&&F(H,"placeholder",c._v$5=ae),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),h(()=>x.checked=a.autoOpen),h(()=>N.checked=a.logs),h(()=>P.checked=a.autoSolve),h(()=>D.checked=a.fast),d})()]}}),null),f(e,q(K,{get when(){return te("solveIn")<5},fallback:"",get children(){return Te.cloneNode(!0)}}),Q),F(pe,"src",Se),f(X,q(K,{get when(){return L()!==void 0},get children(){return[(()=>{const d=Re.cloneNode(!0),g=d.firstChild,v=g.firstChild,u=v.nextSibling;return u.addEventListener("change",x=>k(x.target.id,x.target.checked)),h(()=>_(u,`toggle tooltip tooltip-left toggle-${a.reCap==!0?"success":"error"}`)),h(()=>u.checked=a.reCap),d})(),(()=>{const d=Pe.cloneNode(!0),g=d.firstChild,v=g.nextSibling,u=v.firstChild,x=u.firstChild,C=x.nextSibling,M=u.nextSibling,N=M.firstChild,m=N.nextSibling,R=v.nextSibling,$=R.firstChild,P=$.firstChild,S=P.nextSibling,V=$.nextSibling,D=V.firstChild,U=D.nextSibling;return C.addEventListener("change",A=>k(A.target.id,A.target.checked)),m.addEventListener("change",A=>k(A.target.id,A.target.checked)),S.addEventListener("change",A=>k(A.target.id,A.target.checked)),U.addEventListener("change",A=>k(A.target.id,A.target.checked)),h(A=>{const J=`toggle tooltip tooltip-right toggle-${a.RautoOpen==!0?"success":"error"}`,H=`toggle tooltip tooltip-left toggle-${a.RautoSolve==!0?"success":"error"}`,c=`toggle tooltip tooltip-right toggle-${a.Rfast==!0?"success":"error"}`,z=`toggle tooltip tooltip-left toggle-${a.Rlogs==!0?"success":"error"}`;return J!==A._v$6&&_(C,A._v$6=J),H!==A._v$7&&_(m,A._v$7=H),c!==A._v$8&&_(S,A._v$8=c),z!==A._v$9&&_(U,A._v$9=z),A},{_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),h(()=>C.checked=a.RautoOpen),h(()=>m.checked=a.RautoSolve),h(()=>S.checked=a.Rfast),h(()=>U.checked=a.Rlogs),d})()]}}),null),f(G,()=>new Date().getFullYear(),ie),f(ne,me,null),h(()=>F(i,"placeholder",L()!==void 0?L().apikey:"")),e})()}Ce(["click","input"]);we(()=>q(Me,{}),document.getElementById("root"));