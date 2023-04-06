import{c as P}from"./solid-fb57ed3a.js";import{v as M}from"./package-b4497a7a.js";import{a as V,j as y,f as Z}from"./utils-e474e5df.js";let l=await chrome.storage.sync.get(null);await chrome.storage.sync.get(null);chrome.runtime.onMessage.addListener(function(b,E,v){if(b.action=="refresh_iframes")for(var x=document.getElementsByTagName("iframe"),S=0;S<x.length;S++)x[S].src=x[S].src});function K(){if(!l.apikey)return;function b(){return document.querySelector(".task-answers")!==null}function E(){return document.querySelectorAll(".task-image .image")?.length===9}function v(){return document.querySelector(".bounding-box-example")!==null}(async()=>{if(l.power===!1||l.hCap===!1)return;const x=e=>document.querySelector(e);function S(){const e=document.body.getBoundingClientRect();return e?.width===0||e?.height===0?!1:document.querySelector("div.check")!==null}function w(e){return new Promise(n=>setTimeout(n,e))}function D(e,n){return Math.floor(Math.random()*(n-e)+e)}function B(){try{const e=document.querySelector("div.check");return e&&e.style.display==="block"}catch(e){return console.error(e),!1}}const U=()=>!navigator.onLine||F||l.apikey===void 0||l.apikey==="";async function T(e){const n=await(await fetch(e)).blob();return new Promise(function(a){const c=new FileReader;c.readAsDataURL(n),c.addEventListener("loadend",function(){a(c.result.replace(/^data:image\/(png|jpeg);base64,/,""))}),c.addEventListener("error",function(){s&&console.log("❌ Failed to convert url to base64")})})}const[A]=P((await chrome.storage.sync.get("apikey")).apikey),[_,Q]=P((await chrome.storage.sync.get("plantype")).plantype);new URLSearchParams(location.hash);let j,F=!1;const W={"Content-Type":"application/json",apikey:A()},s=l.logs;for(;!U();)if(await w(1e3),l.autoOpen&&S()){if(B()&&(s&&console.log("found solved"),l.debug&&H(),l.hCAlwaysSolve===!1))break;x("#checkbox")?.click()}else l.autoSolve&&x("h2.prompt-text")!==null&&(l.logs&&s&&console.log("opening box"),await w(1200),V(".interface-challenge","-1px"),await G());function H(){document.querySelectorAll("iframe").forEach(n=>{n.src=n.src})}async function N(){v()?(await w(200),document.querySelector(".display-language.button").click(),await w(100),document.querySelector(".language-selector .option:nth-child(23)").click()):E()?(await w(100),document.querySelector(".language-selector .option:nth-child(23)").click()):b()&&(document.querySelector(".display-language.button").click(),await w(200),document.querySelector(".language-selector .option:nth-child(23)").click(),await w(200))}async function G(){j=new Date;let e=[];if(l.debug&&!v()){document.querySelector(".button-submit").click();return}if(l.english&&(document.documentElement.lang||navigator.language)!=="en"&&await N(),s&&console.log(e),!e!=[])return;const{target:n,cells:a,images:c,example:g,choices:i}=await J();if(!l.autoSolve)return;const f=new URLSearchParams(location.hash),h=b()?"multi":v()?"bbox":"grid";s&&console.log(h,n,a,c,g,i);try{e=c,s&&console.log(e);let t=await fetch(Y("solve"),{method:"POST",headers:W,body:JSON.stringify({images:c,target:n,method:"hcaptcha_base64",type:h,choices:b()?i:[],sitekey:f.get("sitekey"),site:f.get("host"),ln:document.documentElement.lang||navigator.language,softid:`chromeExt_V${M}`})});t=await t.json();const m=t.answer,o=t.message,r=t.status,k=t.url,q=D(300,380);s&&console.log(m,o,r,k,q);let p=0;if(t.error)s&&console.log(o),y("⚠"+o);else if(r==="skip")s&&console.log(o),y("⚠ "+o);else if(r==="new"){if(b()){const u=t.answer;console.log("multi",u),o&&y("⚠ "+o),await R(u),p=p+1}else if(E()){const u=await(await fetch(k)).json();o&&y("⚠ "+o);for(const d of u.solution)a[d].click(),await w(q)}else if(v()){const d=(await(await fetch(k)).json()).answer;if(o&&y("⚠ "+o),console.log("bbox",d),!d)return;d?.length===2&&(console.log("bbox",d),await O(d),p=p+1)}}else if(r==="solved"){if(b()){const u=t.answer;s&&console.log("multi",u),o&&y("⚠ "+o),await R(u),p=p+1,s&&console.log("multi hcap ~ clicks",p)}else if(E()){const u=X(t?.solution);o&&y("⚠ "+o);for(const d of u)a[d].click(),await w(q)}else if(v()){const d=(await(await fetch(k)).json()).answer;if(!d)return;o&&y("⚠ "+o),d?.length===2&&(await O(d),p=p+1)}}else r==="falied"&&(s&&console.log(o),y("⚠"+o));const C=new Date-j,L=b()?l.hcaptime_multi*1e3-C:v()?l.hcaptime_bbox*1e3-C:l.hcaptime*1e3-C;if(L<0&&await w(300),await w(L),p>0)try{(async()=>{const u=await z();Z(u,t.target,"bbox",t.id,t.answer,A(),"v"+M)})()}catch{console.log("feedback couldn't be sent")}document.querySelector(".button-submit").click(),j=0,e=[]}catch(t){y("⚠"+t),console.warn(t)}}function X(e){for(let n=e.length-1;n>0;n--){const a=Math.floor(Math.random()*(n+1));[e[n],e[a]]=[e[a],e[n]]}return e}function I(e){["mouseover","mousedown","mouseup","click"].forEach(n=>{if(e.fireEvent)e.fireEvent("on"+n);else{const a=document.createEvent("MouseEvents");a.initEvent(n,!0,!1),e.dispatchEvent(a)}})}async function O(e){function n(i,f,h){const t=i.getBoundingClientRect(),m=["mouseover","mousedown","mouseup","click"],o={clientX:f+t.left,clientY:h+t.top,bubbles:!0};for(let r=0;r<m.length;r++){const k=new MouseEvent(m[r],o);i.dispatchEvent(k)}}const a=document.querySelector("canvas");a.addEventListener("mousedown",function(i){const f=a.getBoundingClientRect(),h=event.clientX-f.left,t=event.clientY-f.top;s&&console.log("x: "+h+" y: "+t,e)});const[c,g]=e;n(a,c,g)}function Y(e){return"https://"+_()+".nocaptchaai.com/"+e}async function R(e){for(const n of e){const a=[...document.querySelectorAll(".answer-text")].find(c=>c.outerText===n);I(a),[...document.querySelectorAll(".answer-example")].some(c=>c.style.backgroundColor==="rgb(116, 116, 116)")||I(a)}}async function $(){const e=document.querySelector("canvas");if(!e)return null;const[n,a]=[e.width,e.height],g=e.getContext("2d").getImageData(0,0,n,a);if(Array.from(g.data).every((q,p)=>p%4===3||q===0))return console.error("The original canvas has no valid content"),null;const f=parseInt(e.style.width,10),h=parseInt(e.style.height,10);if(f<=0||h<=0)return console.error("Desired width and height should be positive numbers"),null;const t=Math.min(f/n,h/a),[m,o]=[n*t,a*t],r=document.createElement("canvas");return Object.assign(r,{width:m,height:o}),r.getContext("2d").drawImage(e,0,0,n,a,0,0,m,o),r.toDataURL("image/jpeg",.4).replace(/^data:image\/(png|jpeg);base64,/,"")}function z(){const e=document.querySelector("canvas");if(!e)return null;const n=e.toDataURL("image/jpeg",.1);if(!/^data:image\/(png|jpeg);base64,([A-Za-z0-9+/=])+/.test(n))return null;const a=n.replace(/^data:image\/(png|jpeg);base64,/,""),c=new Image;return c.src="data:image/jpeg;base64,"+a,new Promise((g,i)=>{c.onload=()=>{c.width>0&&c.height>0?g(a):i(new Error("Corrupted image"))},c.onerror=()=>i(new Error("Invalid image"))})}function J(e=500){return new Promise(async n=>{const a=setInterval(async function(){let c=document.querySelector(".prompt-text")?.textContent;if(!c)return;let g=null,i={},f={},h=[];if(E()){if(g=document.querySelectorAll(".task-image .image"),g.length!==9)return;for(let t=0;t<g.length;t++){const m=g[t];if(!m)return;const o=m.style.background.match(/url\("(.*)"/)?.at(1)||null;if(!o||o==="")return;i[t]=await T(o)}}else if(b()){const t=document.querySelector(".task-image .image").style.background;if(!t)return;let m="";try{m=await T(t.match(/url\("(.*)"/)?.at(1))||""}catch(r){s&&console.log(r)}if(!f)return;Object.assign(i,{[Object.keys(i).length]:m}),s&&console.log("images",i);const o=document.querySelectorAll(".answer-text");h=Array.from(o).map(r=>r.outerText)}else if(v()){const t=await $();if(!t)return;s&&console.log("canvasImg",t),Object.assign(i,{[Object.keys(i).length]:t}),s&&console.log("images",i)}return clearInterval(a),n({target:c,cells:g,images:i,example:f,choices:h})},e)})}})()}K();