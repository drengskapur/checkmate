import{w as a}from"./index.D1cIUrcn.js";function p(){const{subscribe:e,set:t,update:o}=a("light");return{subscribe:e,toggleTheme:()=>o(n=>n==="light"?"dark":"light"),setTheme:n=>t(n)}}const U=p();let u;const h=new Uint8Array(16);function g(){if(!u&&(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(h)}const i=[];for(let e=0;e<256;++e)i.push((e+256).toString(16).slice(1));function k(e,t=0){return i[e[t+0]]+i[e[t+1]]+i[e[t+2]]+i[e[t+3]]+"-"+i[e[t+4]]+i[e[t+5]]+"-"+i[e[t+6]]+i[e[t+7]]+"-"+i[e[t+8]]+i[e[t+9]]+"-"+i[e[t+10]]+i[e[t+11]]+i[e[t+12]]+i[e[t+13]]+i[e[t+14]]+i[e[t+15]]}const v=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),m={randomUUID:v};function d(e,t,o){if(m.randomUUID&&!t&&!e)return m.randomUUID();e=e||{};const n=e.random||(e.rng||g)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,k(n)}function y(){const{subscribe:e,set:t,update:o}=a({templates:[],activeChecklists:[]});return{subscribe:e,addTemplate:(n,c)=>o(s=>{const r={id:d(),name:n,items:c};return{...s,templates:[...s.templates,r]}}),removeTemplate:n=>o(c=>{const s=c.templates.filter(r=>r.id!==n);return{...c,templates:s}}),startChecklist:n=>o(c=>{const s=c.templates.find(r=>r.id===n);if(s){const r={id:d(),name:s.name,items:s.items.map(l=>({...l,id:d()}))};return{...c,activeChecklists:[r,...c.activeChecklists]}}return c}),updateActiveChecklist:(n,c)=>o(s=>{const r=s.activeChecklists.map(l=>l.id===n?{...l,items:c}:l);return{...s,activeChecklists:r}}),removeActiveChecklist:n=>o(c=>{const s=c.activeChecklists.filter(r=>r.id!==n);return{...c,activeChecklists:s}}),loadChecklists:n=>o(c=>({...c,templates:n}))}}const b=y();export{b as c,U as t,d as v};
