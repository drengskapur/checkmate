import{s as f,c as d,u as p,g as _,a as h,b as c,o as g}from"../chunks/scheduler.CLOVJmCQ.js";import{S,i as k,t as y,a as b}from"../chunks/index.BewsEQmK.js";import{t as m,c as u}from"../chunks/checklistStore.tkQ-hNKO.js";function I(s){let o;const n=s[3].default,e=d(n,s,s[2],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,l){e&&e.m(t,l),o=!0},p(t,[l]){e&&e.p&&(!o||l&4)&&p(e,n,t,t[2],o?h(n,t[2],l,null):_(t[2]),null)},i(t){o||(y(e,t),o=!0)},o(t){b(e,t),o=!1},d(t){e&&e.d(t)}}}function C(s,o,n){let e,t;c(s,u,a=>n(0,e=a)),c(s,m,a=>n(1,t=a));let{$$slots:l={},$$scope:i}=o;return g(()=>{const a=localStorage.getItem("theme")||"light";m.setTheme(a);const r=localStorage.getItem("checklists");r&&u.loadChecklists(JSON.parse(r))}),s.$$set=a=>{"$$scope"in a&&n(2,i=a.$$scope)},s.$$.update=()=>{s.$$.dirty&2&&typeof document<"u"&&(document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)),s.$$.dirty&1&&typeof localStorage<"u"&&localStorage.setItem("checklists",JSON.stringify(e.templates))},[e,t,i,l]}class T extends S{constructor(o){super(),k(this,o,C,I,f,{})}}export{T as component};
