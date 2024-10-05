var Ql=Object.defineProperty;var Jl=(t,e,n)=>e in t?Ql(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var zn=(t,e,n)=>Jl(t,typeof e!="symbol"?e+"":e,n);function ie(){}function Sa(t){return t()}function so(){return Object.create(null)}function Ee(t){t.forEach(Sa)}function _a(t){return typeof t=="function"}function $t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Kl(t){return Object.keys(t).length===0}function ec(t,...e){if(t==null){for(const i of e)i(void 0);return ie}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Fn(t,e,n){t.$$.on_destroy.push(ec(e,n))}function F(t,e){t.appendChild(e)}function H(t,e,n){t.insertBefore(e,n||null)}function z(t){t.parentNode&&t.parentNode.removeChild(t)}function Cn(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function ci(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function st(t){return document.createTextNode(t)}function Y(){return st(" ")}function Jr(){return st("")}function q(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function oo(t){return function(e){return e.preventDefault(),t.call(this,e)}}function V(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:V(t,e,n)}function tc(t){return Array.from(t.childNodes)}function Kr(t,e){e=""+e,t.data!==e&&(t.data=e)}function ao(t,e,n){t.classList.toggle(e,!!n)}let es;function gn(t){es=t}function nc(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const Lt=[],lo=[];let Nt=[];const co=[],ic=Promise.resolve();let zr=!1;function rc(){zr||(zr=!0,ic.then(Ta))}function Br(t){Nt.push(t)}const fr=new Set;let Ot=0;function Ta(){if(Ot!==0)return;const t=es;do{try{for(;Ot<Lt.length;){const e=Lt[Ot];Ot++,gn(e),sc(e.$$)}}catch(e){throw Lt.length=0,Ot=0,e}for(gn(null),Lt.length=0,Ot=0;lo.length;)lo.pop()();for(let e=0;e<Nt.length;e+=1){const n=Nt[e];fr.has(n)||(fr.add(n),n())}Nt.length=0}while(Lt.length);for(;co.length;)co.pop()();zr=!1,fr.clear(),gn(t)}function sc(t){if(t.fragment!==null){t.update(),Ee(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Br)}}function oc(t){const e=[],n=[];Nt.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),Nt=e}const ni=new Set;let vt;function ac(){vt={r:0,c:[],p:vt}}function lc(){vt.r||Ee(vt.c),vt=vt.p}function it(t,e){t&&t.i&&(ni.delete(t),t.i(e))}function yt(t,e,n,i){if(t&&t.o){if(ni.has(t))return;ni.add(t),vt.c.push(()=>{ni.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function We(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function wn(t){t&&t.c()}function Bt(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),Br(()=>{const s=t.$$.on_mount.map(Sa).filter(_a);t.$$.on_destroy?t.$$.on_destroy.push(...s):Ee(s),t.$$.on_mount=[]}),r.forEach(Br)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(oc(n.after_update),Ee(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function cc(t,e){t.$$.dirty[0]===-1&&(Lt.push(t),rc(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Wt(t,e,n,i,r,s,o=null,a=[-1]){const c=es;gn(t);const l=t.$$={fragment:null,ctx:[],props:s,update:ie,not_equal:r,bound:so(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:so(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(d,f,...p)=>{const m=p.length?p[0]:f;return l.ctx&&r(l.ctx[d],l.ctx[d]=m)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](m),u&&cc(t,d)),f}):[],l.update(),u=!0,Ee(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){const d=tc(e.target);l.fragment&&l.fragment.l(d),d.forEach(z)}else l.fragment&&l.fragment.c();e.intro&&it(t.$$.fragment),Bt(t,e.target,e.anchor),Ta()}gn(c)}class Gt{constructor(){zn(this,"$$");zn(this,"$$set")}$destroy(){Ht(this,1),this.$destroy=ie}$on(e,n){if(!_a(n))return ie;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!Kl(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const uc="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(uc);const Vt=[];function ts(t,e=ie){let n;const i=new Set;function r(a){if($t(t,a)&&(t=a,n)){const c=!Vt.length;for(const l of i)l[1](),Vt.push(l,t);if(c){for(let l=0;l<Vt.length;l+=2)Vt[l][0](Vt[l+1]);Vt.length=0}}}function s(a){r(a(t))}function o(a,c=ie){const l=[a,c];return i.add(l),i.size===1&&(n=e(r,s)||ie),a(t),()=>{i.delete(l),i.size===0&&n&&(n(),n=null)}}return{set:r,update:s,subscribe:o}}function hc(){const{subscribe:t,set:e,update:n}=ts("light");return{subscribe:t,toggleTheme:()=>n(i=>i==="light"?"dark":"light"),setTheme:i=>e(i)}}const uo=hc(),ot=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();ot.trustedTypes===void 0&&(ot.trustedTypes={createPolicy:(t,e)=>e});const Fa={configurable:!1,enumerable:!1,writable:!1};ot.FAST===void 0&&Reflect.defineProperty(ot,"FAST",Object.assign({value:Object.create(null)},Fa));const xn=ot.FAST;if(xn.getById===void 0){const t=Object.create(null);Reflect.defineProperty(xn,"getById",Object.assign({value(e,n){let i=t[e];return i===void 0&&(i=n?t[e]=n():null),i}},Fa))}const bn=Object.freeze([]);function Ca(){const t=new WeakMap;return function(e){let n=t.get(e);if(n===void 0){let i=Reflect.getPrototypeOf(e);for(;n===void 0&&i!==null;)n=t.get(i),i=Reflect.getPrototypeOf(i);n=n===void 0?[]:n.slice(0),t.set(e,n)}return n}}const pr=ot.FAST.getById(1,()=>{const t=[],e=[];function n(){if(e.length)throw e.shift()}function i(o){try{o.call()}catch(a){e.push(a),setTimeout(n,0)}}function r(){let a=0;for(;a<t.length;)if(i(t[a]),a++,a>1024){for(let c=0,l=t.length-a;c<l;c++)t[c]=t[c+a];t.length-=a,a=0}t.length=0}function s(o){t.length<1&&ot.requestAnimationFrame(r),t.push(o)}return Object.freeze({enqueue:s,process:r})}),Da=ot.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let gr=Da;const mn=`fast-${Math.random().toString(36).substring(2,8)}`,Aa=`${mn}{`,ns=`}${mn}`,U=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(gr!==Da)throw new Error("The HTML policy can only be set once.");gr=t},createHTML(t){return gr.createHTML(t)},isMarker(t){return t&&t.nodeType===8&&t.data.startsWith(mn)},extractDirectiveIndexFromMarker(t){return parseInt(t.data.replace(`${mn}:`,""))},createInterpolationPlaceholder(t){return`${Aa}${t}${ns}`},createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(t){return`<!--${mn}:${t}-->`},queueUpdate:pr.enqueue,processUpdates:pr.process,nextUpdate(){return new Promise(pr.enqueue)},setAttribute(t,e,n){n==null?t.removeAttribute(e):t.setAttribute(e,n)},setBooleanAttribute(t,e,n){n?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;e!==null;e=t.firstChild)t.removeChild(e)},createTemplateWalker(t){return document.createTreeWalker(t,133,null,!1)}});class Hr{constructor(e,n){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=n}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const n=this.spillover;if(n===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else n.indexOf(e)===-1&&n.push(e)}unsubscribe(e){const n=this.spillover;if(n===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const i=n.indexOf(e);i!==-1&&n.splice(i,1)}}notify(e){const n=this.spillover,i=this.source;if(n===void 0){const r=this.sub1,s=this.sub2;r!==void 0&&r.handleChange(i,e),s!==void 0&&s.handleChange(i,e)}else for(let r=0,s=n.length;r<s;++r)n[r].handleChange(i,e)}}class Ra{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var n;const i=this.subscribers[e];i!==void 0&&i.notify(e),(n=this.sourceSubscribers)===null||n===void 0||n.notify(e)}subscribe(e,n){var i;if(n){let r=this.subscribers[n];r===void 0&&(this.subscribers[n]=r=new Hr(this.source)),r.subscribe(e)}else this.sourceSubscribers=(i=this.sourceSubscribers)!==null&&i!==void 0?i:new Hr(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,n){var i;if(n){const r=this.subscribers[n];r!==void 0&&r.unsubscribe(e)}else(i=this.sourceSubscribers)===null||i===void 0||i.unsubscribe(e)}}const M=xn.getById(2,()=>{const t=/(:|&&|\|\||if)/,e=new WeakMap,n=U.queueUpdate;let i,r=l=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function s(l){let u=l.$fastController||e.get(l);return u===void 0&&(Array.isArray(l)?u=r(l):e.set(l,u=new Ra(l))),u}const o=Ca();class a{constructor(u){this.name=u,this.field=`_${u}`,this.callback=`${u}Changed`}getValue(u){return i!==void 0&&i.watch(u,this.name),u[this.field]}setValue(u,d){const f=this.field,p=u[f];if(p!==d){u[f]=d;const m=u[this.callback];typeof m=="function"&&m.call(u,p,d),s(u).notify(this.name)}}}class c extends Hr{constructor(u,d,f=!1){super(u,d),this.binding=u,this.isVolatileBinding=f,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(u,d){this.needsRefresh&&this.last!==null&&this.disconnect();const f=i;i=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const p=this.binding(u,d);return i=f,p}disconnect(){if(this.last!==null){let u=this.first;for(;u!==void 0;)u.notifier.unsubscribe(this,u.propertyName),u=u.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(u,d){const f=this.last,p=s(u),m=f===null?this.first:{};if(m.propertySource=u,m.propertyName=d,m.notifier=p,p.subscribe(this,d),f!==null){if(!this.needsRefresh){let k;i=void 0,k=f.propertySource[f.propertyName],i=this,u===k&&(this.needsRefresh=!0)}f.next=m}this.last=m}handleChange(){this.needsQueue&&(this.needsQueue=!1,n(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let u=this.first;return{next:()=>{const d=u;return d===void 0?{value:void 0,done:!0}:(u=u.next,{value:d,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(l){r=l},getNotifier:s,track(l,u){i!==void 0&&i.watch(l,u)},trackVolatile(){i!==void 0&&(i.needsRefresh=!0)},notify(l,u){s(l).notify(u)},defineProperty(l,u){typeof u=="string"&&(u=new a(u)),o(l).push(u),Reflect.defineProperty(l,u.name,{enumerable:!0,get:function(){return u.getValue(this)},set:function(d){u.setValue(this,d)}})},getAccessors:o,binding(l,u,d=this.isVolatileBinding(l)){return new c(l,u,d)},isVolatileBinding(l){return t.test(l.toString())}})});function B(t,e){M.defineProperty(t,e)}function dc(t,e,n){return Object.assign({},n,{get:function(){return M.trackVolatile(),n.get.apply(this)}})}const ho=xn.getById(3,()=>{let t=null;return{get(){return t},set(e){t=e}}});class kn{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return ho.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){ho.set(e)}}M.defineProperty(kn.prototype,"index");M.defineProperty(kn.prototype,"length");const vn=Object.seal(new kn);class is{constructor(){this.targetIndex=0}}class Ea extends is{constructor(){super(...arguments),this.createPlaceholder=U.createInterpolationPlaceholder}}class Ia extends is{constructor(e,n,i){super(),this.name=e,this.behavior=n,this.options=i}createPlaceholder(e){return U.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function fc(t,e){this.source=t,this.context=e,this.bindingObserver===null&&(this.bindingObserver=M.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function pc(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function gc(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function bc(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function mc(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function vc(t){U.setAttribute(this.target,this.targetName,t)}function yc(t){U.setBooleanAttribute(this.target,this.targetName,t)}function wc(t){if(t==null&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function xc(t){this.target[this.targetName]=t}function kc(t){const e=this.classVersions||Object.create(null),n=this.target;let i=this.version||0;if(t!=null&&t.length){const r=t.split(/\s+/);for(let s=0,o=r.length;s<o;++s){const a=r[s];a!==""&&(e[a]=i,n.classList.add(a))}}if(this.classVersions=e,this.version=i+1,i!==0){i-=1;for(const r in e)e[r]===i&&n.classList.remove(r)}}class rs extends Ea{constructor(e){super(),this.binding=e,this.bind=fc,this.unbind=gc,this.updateTarget=vc,this.isBindingVolatile=M.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=xc,this.cleanedTargetName==="innerHTML"){const n=this.binding;this.binding=(i,r)=>U.createHTML(n(i,r))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=yc;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=pc,this.unbind=mc;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=kc);break}}targetAtContent(){this.updateTarget=wc,this.unbind=bc}createBehavior(e){return new $c(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class $c{constructor(e,n,i,r,s,o,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=n,this.isBindingVolatile=i,this.bind=r,this.unbind=s,this.updateTarget=o,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){kn.setEvent(e);const n=this.binding(this.source,this.context);kn.setEvent(null),n!==!0&&e.preventDefault()}}let br=null;class ss{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){br=this}static borrow(e){const n=br||new ss;return n.directives=e,n.reset(),br=null,n}}function Sc(t){if(t.length===1)return t[0];let e;const n=t.length,i=t.map(o=>typeof o=="string"?()=>o:(e=o.targetName||e,o.binding)),r=(o,a)=>{let c="";for(let l=0;l<n;++l)c+=i[l](o,a);return c},s=new rs(r);return s.targetName=e,s}const _c=ns.length;function Oa(t,e){const n=e.split(Aa);if(n.length===1)return null;const i=[];for(let r=0,s=n.length;r<s;++r){const o=n[r],a=o.indexOf(ns);let c;if(a===-1)c=o;else{const l=parseInt(o.substring(0,a));i.push(t.directives[l]),c=o.substring(a+_c)}c!==""&&i.push(c)}return i}function fo(t,e,n=!1){const i=e.attributes;for(let r=0,s=i.length;r<s;++r){const o=i[r],a=o.value,c=Oa(t,a);let l=null;c===null?n&&(l=new rs(()=>a),l.targetName=o.name):l=Sc(c),l!==null&&(e.removeAttributeNode(o),r--,s--,t.addFactory(l))}}function Tc(t,e,n){const i=Oa(t,e.textContent);if(i!==null){let r=e;for(let s=0,o=i.length;s<o;++s){const a=i[s],c=s===0?e:r.parentNode.insertBefore(document.createTextNode(""),r.nextSibling);typeof a=="string"?c.textContent=a:(c.textContent=" ",t.captureContentBinding(a)),r=c,t.targetIndex++,c!==e&&n.nextNode()}t.targetIndex--}}function Fc(t,e){const n=t.content;document.adoptNode(n);const i=ss.borrow(e);fo(i,t,!0);const r=i.behaviorFactories;i.reset();const s=U.createTemplateWalker(n);let o;for(;o=s.nextNode();)switch(i.targetIndex++,o.nodeType){case 1:fo(i,o);break;case 3:Tc(i,o,s);break;case 8:U.isMarker(o)&&i.addFactory(e[U.extractDirectiveIndexFromMarker(o)])}let a=0;(U.isMarker(n.firstChild)||n.childNodes.length===1&&e.length)&&(n.insertBefore(document.createComment(""),n.firstChild),a=-1);const c=i.behaviorFactories;return i.release(),{fragment:n,viewBehaviorFactories:c,hostBehaviorFactories:r,targetOffset:a}}const mr=document.createRange();class Cc{constructor(e,n){this.fragment=e,this.behaviors=n,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const n=this.lastChild;if(e.previousSibling===n)return;const i=e.parentNode;let r=this.firstChild,s;for(;r!==n;)s=r.nextSibling,i.insertBefore(r,e),r=s;i.insertBefore(n,e)}}remove(){const e=this.fragment,n=this.lastChild;let i=this.firstChild,r;for(;i!==n;)r=i.nextSibling,e.appendChild(i),i=r;e.appendChild(n)}dispose(){const e=this.firstChild.parentNode,n=this.lastChild;let i=this.firstChild,r;for(;i!==n;)r=i.nextSibling,e.removeChild(i),i=r;e.removeChild(n);const s=this.behaviors,o=this.source;for(let a=0,c=s.length;a<c;++a)s[a].unbind(o)}bind(e,n){const i=this.behaviors;if(this.source!==e)if(this.source!==null){const r=this.source;this.source=e,this.context=n;for(let s=0,o=i.length;s<o;++s){const a=i[s];a.unbind(r),a.bind(e,n)}}else{this.source=e,this.context=n;for(let r=0,s=i.length;r<s;++r)i[r].bind(e,n)}}unbind(){if(this.source===null)return;const e=this.behaviors,n=this.source;for(let i=0,r=e.length;i<r;++i)e[i].unbind(n);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){mr.setStartBefore(e[0].firstChild),mr.setEndAfter(e[e.length-1].lastChild),mr.deleteContents();for(let n=0,i=e.length;n<i;++n){const r=e[n],s=r.behaviors,o=r.source;for(let a=0,c=s.length;a<c;++a)s[a].unbind(o)}}}}class po{constructor(e,n){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=n}create(e){if(this.fragment===null){let l;const u=this.html;if(typeof u=="string"){l=document.createElement("template"),l.innerHTML=U.createHTML(u);const f=l.content.firstElementChild;f!==null&&f.tagName==="TEMPLATE"&&(l=f)}else l=u;const d=Fc(l,this.directives);this.fragment=d.fragment,this.viewBehaviorFactories=d.viewBehaviorFactories,this.hostBehaviorFactories=d.hostBehaviorFactories,this.targetOffset=d.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const n=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,r=new Array(this.behaviorCount),s=U.createTemplateWalker(n);let o=0,a=this.targetOffset,c=s.nextNode();for(let l=i.length;o<l;++o){const u=i[o],d=u.targetIndex;for(;c!==null;)if(a===d){r[o]=u.createBehavior(c);break}else c=s.nextNode(),a++}if(this.hasHostBehaviors){const l=this.hostBehaviorFactories;for(let u=0,d=l.length;u<d;++u,++o)r[o]=l[u].createBehavior(e)}return new Cc(n,r)}render(e,n,i){typeof n=="string"&&(n=document.getElementById(n)),i===void 0&&(i=n);const r=this.create(i);return r.bind(e,vn),r.appendTo(n),r}}const Dc=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function _e(t,...e){const n=[];let i="";for(let r=0,s=t.length-1;r<s;++r){const o=t[r];let a=e[r];if(i+=o,a instanceof po){const c=a;a=()=>c}if(typeof a=="function"&&(a=new rs(a)),a instanceof Ea){const c=Dc.exec(o);c!==null&&(a.targetName=c[2])}a instanceof is?(i+=a.createPlaceholder(n.length),n.push(a)):i+=a}return i+=t[t.length-1],new po(i,n)}class ve{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}ve.create=(()=>{if(U.supportsAdoptedStyleSheets){const t=new Map;return e=>new Ac(e,t)}return t=>new Ic(t)})();function os(t){return t.map(e=>e instanceof ve?os(e.styles):[e]).reduce((e,n)=>e.concat(n),[])}function Va(t){return t.map(e=>e instanceof ve?e.behaviors:null).reduce((e,n)=>n===null?e:(e===null&&(e=[]),e.concat(n)),null)}const La=Symbol("prependToAdoptedStyleSheets");function Pa(t){const e=[],n=[];return t.forEach(i=>(i[La]?e:n).push(i)),{prepend:e,append:n}}let Na=(t,e)=>{const{prepend:n,append:i}=Pa(e);t.adoptedStyleSheets=[...n,...t.adoptedStyleSheets,...i]},Ma=(t,e)=>{t.adoptedStyleSheets=t.adoptedStyleSheets.filter(n=>e.indexOf(n)===-1)};if(U.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Na=(t,e)=>{const{prepend:n,append:i}=Pa(e);t.adoptedStyleSheets.splice(0,0,...n),t.adoptedStyleSheets.push(...i)},Ma=(t,e)=>{for(const n of e){const i=t.adoptedStyleSheets.indexOf(n);i!==-1&&t.adoptedStyleSheets.splice(i,1)}}}catch{}class Ac extends ve{constructor(e,n){super(),this.styles=e,this.styleSheetCache=n,this._styleSheets=void 0,this.behaviors=Va(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,n=this.styleSheetCache;this._styleSheets=os(e).map(i=>{if(i instanceof CSSStyleSheet)return i;let r=n.get(i);return r===void 0&&(r=new CSSStyleSheet,r.replaceSync(i),n.set(i,r)),r})}return this._styleSheets}addStylesTo(e){Na(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Ma(e,this.styleSheets),super.removeStylesFrom(e)}}let Rc=0;function Ec(){return`fast-style-class-${++Rc}`}class Ic extends ve{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Va(e),this.styleSheets=os(e),this.styleClass=Ec()}addStylesTo(e){const n=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let r=0;r<n.length;r++){const s=document.createElement("style");s.innerHTML=n[r],s.className=i,e.append(s)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const n=e.querySelectorAll(`.${this.styleClass}`);for(let i=0,r=n.length;i<r;++i)e.removeChild(n[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const ui=Object.freeze({locate:Ca()}),za={toView(t){return t?"true":"false"},fromView(t){return!(t==null||t==="false"||t===!1||t===0)}},ki={toView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e.toString()},fromView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e}};class hi{constructor(e,n,i=n.toLowerCase(),r="reflect",s){this.guards=new Set,this.Owner=e,this.name=n,this.attribute=i,this.mode=r,this.converter=s,this.fieldName=`_${n}`,this.callbackName=`${n}Changed`,this.hasCallback=this.callbackName in e.prototype,r==="boolean"&&s===void 0&&(this.converter=za)}setValue(e,n){const i=e[this.fieldName],r=this.converter;r!==void 0&&(n=r.fromView(n)),i!==n&&(e[this.fieldName]=n,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,n),e.$fastController.notify(this.name))}getValue(e){return M.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,n){this.guards.has(e)||(this.guards.add(e),this.setValue(e,n),this.guards.delete(e))}tryReflectToAttribute(e){const n=this.mode,i=this.guards;i.has(e)||n==="fromView"||U.queueUpdate(()=>{i.add(e);const r=e[this.fieldName];switch(n){case"reflect":const s=this.converter;U.setAttribute(e,this.attribute,s!==void 0?s.toView(r):r);break;case"boolean":U.setBooleanAttribute(e,this.attribute,r);break}i.delete(e)})}static collect(e,...n){const i=[];n.push(ui.locate(e));for(let r=0,s=n.length;r<s;++r){const o=n[r];if(o!==void 0)for(let a=0,c=o.length;a<c;++a){const l=o[a];typeof l=="string"?i.push(new hi(e,l)):i.push(new hi(e,l.property,l.attribute,l.mode,l.converter))}}return i}}function C(t,e){let n;function i(r,s){arguments.length>1&&(n.property=s),ui.locate(r.constructor).push(n)}if(arguments.length>1){n={},i(t,e);return}return n=t===void 0?{}:t,i}const go={mode:"open"},bo={},Ur=xn.getById(4,()=>{const t=new Map;return Object.freeze({register(e){return t.has(e.type)?!1:(t.set(e.type,e),!0)},getByType(e){return t.get(e)}})});class $i{constructor(e,n=e.definition){typeof n=="string"&&(n={name:n}),this.type=e,this.name=n.name,this.template=n.template;const i=hi.collect(e,n.attributes),r=new Array(i.length),s={},o={};for(let a=0,c=i.length;a<c;++a){const l=i[a];r[a]=l.attribute,s[l.name]=l,o[l.attribute]=l}this.attributes=i,this.observedAttributes=r,this.propertyLookup=s,this.attributeLookup=o,this.shadowOptions=n.shadowOptions===void 0?go:n.shadowOptions===null?void 0:Object.assign(Object.assign({},go),n.shadowOptions),this.elementOptions=n.elementOptions===void 0?bo:Object.assign(Object.assign({},bo),n.elementOptions),this.styles=n.styles===void 0?void 0:Array.isArray(n.styles)?ve.create(n.styles):n.styles instanceof ve?n.styles:ve.create([n.styles])}get isDefined(){return!!Ur.getByType(this.type)}define(e=customElements){const n=this.type;if(Ur.register(this)){const i=this.attributes,r=n.prototype;for(let s=0,o=i.length;s<o;++s)M.defineProperty(r,i[s]);Reflect.defineProperty(n,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,n,this.elementOptions),this}}$i.forType=Ur.getByType;const Ba=new WeakMap,Oc={bubbles:!0,composed:!0,cancelable:!0};function vr(t){return t.shadowRoot||Ba.get(t)||null}class as extends Ra{constructor(e,n){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=n;const i=n.shadowOptions;if(i!==void 0){const s=e.attachShadow(i);i.mode==="closed"&&Ba.set(e,s)}const r=M.getAccessors(e);if(r.length>0){const s=this.boundObservables=Object.create(null);for(let o=0,a=r.length;o<a;++o){const c=r[o].name,l=e[c];l!==void 0&&(delete e[c],s[c]=l)}}}get isConnected(){return M.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,M.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const n=vr(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)n.append(e);else if(!e.isAttachedTo(n)){const i=e.behaviors;e.addStylesTo(n),i!==null&&this.addBehaviors(i)}}removeStyles(e){const n=vr(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)n.removeChild(e);else if(e.isAttachedTo(n)){const i=e.behaviors;e.removeStylesFrom(n),i!==null&&this.removeBehaviors(i)}}addBehaviors(e){const n=this.behaviors||(this.behaviors=new Map),i=e.length,r=[];for(let s=0;s<i;++s){const o=e[s];n.has(o)?n.set(o,n.get(o)+1):(n.set(o,1),r.push(o))}if(this._isConnected){const s=this.element;for(let o=0;o<r.length;++o)r[o].bind(s,vn)}}removeBehaviors(e,n=!1){const i=this.behaviors;if(i===null)return;const r=e.length,s=[];for(let o=0;o<r;++o){const a=e[o];if(i.has(a)){const c=i.get(a)-1;c===0||n?i.delete(a)&&s.push(a):i.set(a,c)}}if(this._isConnected){const o=this.element;for(let a=0;a<s.length;++a)s[a].unbind(o)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,vn);const n=this.behaviors;if(n!==null)for(const[i]of n)i.bind(e,vn);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const n=this.behaviors;if(n!==null){const i=this.element;for(const[r]of n)r.unbind(i)}}onAttributeChangedCallback(e,n,i){const r=this.definition.attributeLookup[e];r!==void 0&&r.onAttributeChangedCallback(this.element,i)}emit(e,n,i){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:n},Oc),i))):!1}finishInitialization(){const e=this.element,n=this.boundObservables;if(n!==null){const r=Object.keys(n);for(let s=0,o=r.length;s<o;++s){const a=r[s];e[a]=n[a]}this.boundObservables=null}const i=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const n=this.element,i=vr(n)||n;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||U.removeChildNodes(i),e&&(this.view=e.render(n,i,n))}static forCustomElement(e){const n=e.$fastController;if(n!==void 0)return n;const i=$i.forType(e.constructor);if(i===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new as(e,i)}}function mo(t){return class extends t{constructor(){super(),as.forCustomElement(this)}$emit(e,n,i){return this.$fastController.emit(e,n,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,n,i){this.$fastController.onAttributeChangedCallback(e,n,i)}}}const Si=Object.assign(mo(HTMLElement),{from(t){return mo(t)},define(t,e){return new $i(t,e).define().type}});class ls{createCSS(){return""}createBehavior(){}}function Ha(t,e){const n=[];let i="";const r=[];for(let s=0,o=t.length-1;s<o;++s){i+=t[s];let a=e[s];if(a instanceof ls){const c=a.createBehavior();a=a.createCSS(),c&&r.push(c)}a instanceof ve||a instanceof CSSStyleSheet?(i.trim()!==""&&(n.push(i),i=""),n.push(a)):i+=a}return i+=t[t.length-1],i.trim()!==""&&n.push(i),{styles:n,behaviors:r}}function X(t,...e){const{styles:n,behaviors:i}=Ha(t,e),r=ve.create(n);return i.length&&r.withBehaviors(...i),r}class Vc extends ls{constructor(e,n){super(),this.behaviors=n,this.css="";const i=e.reduce((r,s)=>(typeof s=="string"?this.css+=s:r.push(s),r),[]);i.length&&(this.styles=ve.create(i))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}function Ie(t,...e){const{styles:n,behaviors:i}=Ha(t,e);return new Vc(n,i)}class Lc{constructor(e,n){this.target=e,this.propertyName=n}bind(e){e[this.propertyName]=this.target}unbind(){}}function Ne(t){return new Ia("fast-ref",Lc,t)}const Ua=t=>typeof t=="function",Pc=()=>null;function vo(t){return t===void 0?Pc:Ua(t)?t:()=>t}function ja(t,e,n){const i=Ua(t)?t:()=>t,r=vo(e),s=vo(n);return(o,a)=>i(o,a)?r(o,a):s(o,a)}class Nc{constructor(e,n){this.target=e,this.options=n,this.source=null}bind(e){const n=this.options.property;this.shouldUpdate=M.getAccessors(e).some(i=>i.name===n),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(bn),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Mc extends Nc{constructor(e,n){super(e,n)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function _i(t){return typeof t=="string"&&(t={property:t}),new Ia("fast-slotted",Mc,t)}class cs{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const us=(t,e)=>_e`
    <span
        part="end"
        ${Ne("endContainer")}
        class=${n=>e.end?"end":void 0}
    >
        <slot name="end" ${Ne("end")} @slotchange="${n=>n.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,hs=(t,e)=>_e`
    <span
        part="start"
        ${Ne("startContainer")}
        class="${n=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Ne("start")}
            @slotchange="${n=>n.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,og=_e`
    <span part="end" ${Ne("endContainer")}>
        <slot
            name="end"
            ${Ne("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`,ag=_e`
    <span part="start" ${Ne("startContainer")}>
        <slot
            name="start"
            ${Ne("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function w(t,e,n,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s}const yr=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(n){Reflect.defineMetadata(t,e,n)}},Reflect.defineMetadata=function(t,e,n){let i=yr.get(n);i===void 0&&yr.set(n,i=new Map),i.set(t,e)},Reflect.getOwnMetadata=function(t,e){const n=yr.get(e);if(n!==void 0)return n.get(t)});class zc{constructor(e,n){this.container=e,this.key=n}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Wa(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,n){const{container:i,key:r}=this;return this.container=this.key=void 0,i.registerResolver(r,new Fe(r,e,n))}}function sn(t){const e=t.slice(),n=Object.keys(t),i=n.length;let r;for(let s=0;s<i;++s)r=n[s],Ga(r)||(e[r]=t[r]);return e}const Bc=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton(t){return new Fe(t,1,t)},transient(t){return new Fe(t,2,t)}}),wr=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Bc.singleton})}),yo=new Map;function wo(t){return e=>Reflect.getOwnMetadata(t,e)}let xo=null;const J=Object.freeze({createContainer(t){return new yn(null,Object.assign({},wr.default,t))},findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:J.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(qa,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||J.getOrCreateDOMContainer()},getOrCreateDOMContainer(t,e){return t?t.$$container$$||new yn(t,Object.assign({},wr.default,e,{parentLocator:J.findParentContainer})):xo||(xo=new yn(null,Object.assign({},wr.default,e,{parentLocator:()=>null})))},getDesignParamtypes:wo("design:paramtypes"),getAnnotationParamtypes:wo("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=yo.get(t);if(e===void 0){const n=t.inject;if(n===void 0){const i=J.getDesignParamtypes(t),r=J.getAnnotationParamtypes(t);if(i===void 0)if(r===void 0){const s=Object.getPrototypeOf(t);typeof s=="function"&&s!==Function.prototype?e=sn(J.getDependencies(s)):e=[]}else e=sn(r);else if(r===void 0)e=sn(i);else{e=sn(i);let s=r.length,o;for(let l=0;l<s;++l)o=r[l],o!==void 0&&(e[l]=o);const a=Object.keys(r);s=a.length;let c;for(let l=0;l<s;++l)c=a[l],Ga(c)||(e[c]=r[c])}}else e=sn(n);yo.set(t,e)}return e},defineProperty(t,e,n,i=!1){const r=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let s=this[r];if(s===void 0&&(s=(this instanceof HTMLElement?J.findResponsibleContainer(this):J.getOrCreateDOMContainer()).get(n),this[r]=s,i&&this instanceof Si)){const a=this.$fastController,c=()=>{const u=J.findResponsibleContainer(this).get(n),d=this[r];u!==d&&(this[r]=s,a.notify(e))};a.subscribe({handleChange:c},"isConnected")}return s}})},createInterface(t,e){const n=typeof t=="function"?t:e,i=typeof t=="string"?t:t&&"friendlyName"in t&&t.friendlyName||_o,r=typeof t=="string"?!1:t&&"respectConnection"in t&&t.respectConnection||!1,s=function(o,a,c){if(o==null||new.target!==void 0)throw new Error(`No registration for interface: '${s.friendlyName}'`);if(a)J.defineProperty(o,a,s,r);else{const l=J.getOrCreateAnnotationParamTypes(o);l[c]=s}};return s.$isInterface=!0,s.friendlyName=i??"(anonymous)",n!=null&&(s.register=function(o,a){return n(new zc(o,a??s))}),s.toString=function(){return`InterfaceSymbol<${s.friendlyName}>`},s},inject(...t){return function(e,n,i){if(typeof i=="number"){const r=J.getOrCreateAnnotationParamTypes(e),s=t[0];s!==void 0&&(r[i]=s)}else if(n)J.defineProperty(e,n,t[0]);else{const r=i?J.getOrCreateAnnotationParamTypes(i.value):J.getOrCreateAnnotationParamTypes(e);let s;for(let o=0;o<t.length;++o)s=t[o],s!==void 0&&(r[o]=s)}}},transient(t){return t.register=function(n){return $n.transient(t,t).register(n)},t.registerInRequestor=!1,t},singleton(t,e=Uc){return t.register=function(i){return $n.singleton(t,t).register(i)},t.registerInRequestor=e.scoped,t}}),Hc=J.createInterface("Container");J.inject;const Uc={scoped:!1};class Fe{constructor(e,n,i){this.key=e,this.strategy=n,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,n){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(n),this.strategy=0,this.resolving=!1,this.state}case 2:{const i=e.getFactory(this.state);if(i===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(n)}case 3:return this.state(e,n,this);case 4:return this.state[0].resolve(e,n);case 5:return n.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var n,i,r;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(r=(i=(n=e.getResolver(this.state))===null||n===void 0?void 0:n.getFactory)===null||i===void 0?void 0:i.call(n,e))!==null&&r!==void 0?r:null;default:return null}}}function ko(t){return this.get(t)}function jc(t,e){return e(t)}class qc{constructor(e,n){this.Type=e,this.dependencies=n,this.transformers=null}construct(e,n){let i;return n===void 0?i=new this.Type(...this.dependencies.map(ko,e)):i=new this.Type(...this.dependencies.map(ko,e),...n),this.transformers==null?i:this.transformers.reduce(jc,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const Wc={$isResolver:!0,resolve(t,e){return e}};function ii(t){return typeof t.register=="function"}function Gc(t){return ii(t)&&typeof t.registerInRequestor=="boolean"}function $o(t){return Gc(t)&&t.registerInRequestor}function Zc(t){return t.prototype!==void 0}const Yc=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),qa="__DI_LOCATE_PARENT__",xr=new Map;class yn{constructor(e,n){this.owner=e,this.config=n,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Hc,Wc),e instanceof Node&&e.addEventListener(qa,i=>{i.composedPath()[0]!==this.owner&&(i.detail.container=this,i.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...n){return this.context=e,this.register(...n),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let n,i,r,s,o;const a=this.context;for(let c=0,l=e.length;c<l;++c)if(n=e[c],!!To(n))if(ii(n))n.register(this,a);else if(Zc(n))$n.singleton(n,n).register(this);else for(i=Object.keys(n),s=0,o=i.length;s<o;++s)r=n[i[s]],To(r)&&(ii(r)?r.register(this,a):this.register(r));return--this.registerDepth,this}registerResolver(e,n){Bn(e);const i=this.resolvers,r=i.get(e);return r==null?i.set(e,n):r instanceof Fe&&r.strategy===4?r.state.push(n):i.set(e,new Fe(e,4,[r,n])),n}registerTransformer(e,n){const i=this.getResolver(e);if(i==null)return!1;if(i.getFactory){const r=i.getFactory(this);return r==null?!1:(r.registerTransformer(n),!0)}return!1}getResolver(e,n=!0){if(Bn(e),e.resolve!==void 0)return e;let i=this,r;for(;i!=null;)if(r=i.resolvers.get(e),r==null){if(i.parent==null){const s=$o(e)?this:i;return n?this.jitRegister(e,s):null}i=i.parent}else return r;return null}has(e,n=!1){return this.resolvers.has(e)?!0:n&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(Bn(e),e.$isResolver)return e.resolve(this,this);let n=this,i;for(;n!=null;)if(i=n.resolvers.get(e),i==null){if(n.parent==null){const r=$o(e)?this:n;return i=this.jitRegister(e,r),i.resolve(n,this)}n=n.parent}else return i.resolve(n,this);throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,n=!1){Bn(e);const i=this;let r=i,s;if(n){let o=bn;for(;r!=null;)s=r.resolvers.get(e),s!=null&&(o=o.concat(So(s,r,i))),r=r.parent;return o}else for(;r!=null;)if(s=r.resolvers.get(e),s==null){if(r=r.parent,r==null)return bn}else return So(s,r,i);return bn}getFactory(e){let n=xr.get(e);if(n===void 0){if(Xc(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);xr.set(e,n=new qc(e,J.getDependencies(e)))}return n}registerFactory(e,n){xr.set(e,n)}createChild(e){return new yn(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,n){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Yc.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(ii(e)){const i=e.register(n);if(!(i instanceof Object)||i.resolve==null){const r=n.resolvers.get(e);if(r!=null)return r;throw new Error("A valid resolver was not returned from the static register method")}return i}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const i=this.config.defaultResolver(e,n);return n.resolvers.set(e,i),i}}}}const kr=new WeakMap;function Wa(t){return function(e,n,i){if(kr.has(i))return kr.get(i);const r=t(e,n,i);return kr.set(i,r),r}}const $n=Object.freeze({instance(t,e){return new Fe(t,0,e)},singleton(t,e){return new Fe(t,1,e)},transient(t,e){return new Fe(t,2,e)},callback(t,e){return new Fe(t,3,e)},cachedCallback(t,e){return new Fe(t,3,Wa(e))},aliasTo(t,e){return new Fe(e,5,t)}});function Bn(t){if(t==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function So(t,e,n){if(t instanceof Fe&&t.strategy===4){const i=t.state;let r=i.length;const s=new Array(r);for(;r--;)s[r]=i[r].resolve(e,n);return s}return[t.resolve(e,n)]}const _o="(anonymous)";function To(t){return typeof t=="object"&&t!==null||typeof t=="function"}const Xc=function(){const t=new WeakMap;let e=!1,n="",i=0;return function(r){return e=t.get(r),e===void 0&&(n=r.toString(),i=n.length,e=i>=29&&i<=100&&n.charCodeAt(i-1)===125&&n.charCodeAt(i-2)<=32&&n.charCodeAt(i-3)===93&&n.charCodeAt(i-4)===101&&n.charCodeAt(i-5)===100&&n.charCodeAt(i-6)===111&&n.charCodeAt(i-7)===99&&n.charCodeAt(i-8)===32&&n.charCodeAt(i-9)===101&&n.charCodeAt(i-10)===118&&n.charCodeAt(i-11)===105&&n.charCodeAt(i-12)===116&&n.charCodeAt(i-13)===97&&n.charCodeAt(i-14)===110&&n.charCodeAt(i-15)===88,t.set(r,e)),e}}(),Hn={};function Ga(t){switch(typeof t){case"number":return t>=0&&(t|0)===t;case"string":{const e=Hn[t];if(e!==void 0)return e;const n=t.length;if(n===0)return Hn[t]=!1;let i=0;for(let r=0;r<n;++r)if(i=t.charCodeAt(r),r===0&&i===48&&n>1||i<48||i>57)return Hn[t]=!1;return Hn[t]=!0}default:return!1}}function Fo(t){return`${t.toLowerCase()}:presentation`}const Un=new Map,Za=Object.freeze({define(t,e,n){const i=Fo(t);Un.get(i)===void 0?Un.set(i,e):Un.set(i,!1),n.register($n.instance(i,e))},forTag(t,e){const n=Fo(t),i=Un.get(n);return i===!1?J.findResponsibleContainer(e).get(n):i||null}});class Qc{constructor(e,n){this.template=e||null,this.styles=n===void 0?null:Array.isArray(n)?ve.create(n):n instanceof ve?n:ve.create([n])}applyTo(e){const n=e.$fastController;n.template===null&&(n.template=this.template),n.styles===null&&(n.styles=this.styles)}}class De extends Si{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Za.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(n={})=>new Jc(this===De?class extends De{}:this,e,n)}}w([B],De.prototype,"template",void 0);w([B],De.prototype,"styles",void 0);function on(t,e,n){return typeof t=="function"?t(e,n):t}class Jc{constructor(e,n,i){this.type=e,this.elementDefinition=n,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,n){const i=this.definition,r=this.overrideDefinition,o=`${i.prefix||n.elementPrefix}-${i.baseName}`;n.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{const c=new Qc(on(i.template,a,i),on(i.styles,a,i));a.definePresentation(c);let l=on(i.shadowOptions,a,i);a.shadowRootMode&&(l?r.shadowOptions||(l.mode=a.shadowRootMode):l!==null&&(l={mode:a.shadowRootMode})),a.defineElement({elementOptions:on(i.elementOptions,a,i),shadowOptions:l,attributes:on(i.attributes,a,i)})}})}}function ut(t,...e){const n=ui.locate(t);e.forEach(i=>{Object.getOwnPropertyNames(i.prototype).forEach(s=>{s!=="constructor"&&Object.defineProperty(t.prototype,s,Object.getOwnPropertyDescriptor(i.prototype,s))}),ui.locate(i).forEach(s=>n.push(s))})}function Kc(t,e){let n=t.length;for(;n--;)if(e(t[n],n,t))return n;return-1}function eu(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function tu(...t){return t.every(e=>e instanceof HTMLElement)}function nu(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}let dt;function iu(){if(typeof dt=="boolean")return dt;if(!eu())return dt=!1,dt;const t=document.createElement("style"),e=nu();e!==null&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),dt=!0}catch{dt=!1}finally{document.head.removeChild(t)}return dt}var Co;(function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"})(Co||(Co={}));const ds="ArrowDown";const fs="ArrowUp",ps="Enter",gs="Escape",bs="Home",ms="End";const Ti=" ",vs="Tab";var jr;(function(t){t.ltr="ltr",t.rtl="rtl"})(jr||(jr={}));function jn(t,e,n=0){return[e,n]=[e,n].sort((i,r)=>i-r),e<=t&&t<n}let ru=0;function Ya(t=""){return`${t}${ru++}`}var b;(function(t){t.Canvas="Canvas",t.CanvasText="CanvasText",t.LinkText="LinkText",t.VisitedText="VisitedText",t.ActiveText="ActiveText",t.ButtonFace="ButtonFace",t.ButtonText="ButtonText",t.Field="Field",t.FieldText="FieldText",t.Highlight="Highlight",t.HighlightText="HighlightText",t.GrayText="GrayText"})(b||(b={}));class K{}w([C({attribute:"aria-atomic"})],K.prototype,"ariaAtomic",void 0);w([C({attribute:"aria-busy"})],K.prototype,"ariaBusy",void 0);w([C({attribute:"aria-controls"})],K.prototype,"ariaControls",void 0);w([C({attribute:"aria-current"})],K.prototype,"ariaCurrent",void 0);w([C({attribute:"aria-describedby"})],K.prototype,"ariaDescribedby",void 0);w([C({attribute:"aria-details"})],K.prototype,"ariaDetails",void 0);w([C({attribute:"aria-disabled"})],K.prototype,"ariaDisabled",void 0);w([C({attribute:"aria-errormessage"})],K.prototype,"ariaErrormessage",void 0);w([C({attribute:"aria-flowto"})],K.prototype,"ariaFlowto",void 0);w([C({attribute:"aria-haspopup"})],K.prototype,"ariaHaspopup",void 0);w([C({attribute:"aria-hidden"})],K.prototype,"ariaHidden",void 0);w([C({attribute:"aria-invalid"})],K.prototype,"ariaInvalid",void 0);w([C({attribute:"aria-keyshortcuts"})],K.prototype,"ariaKeyshortcuts",void 0);w([C({attribute:"aria-label"})],K.prototype,"ariaLabel",void 0);w([C({attribute:"aria-labelledby"})],K.prototype,"ariaLabelledby",void 0);w([C({attribute:"aria-live"})],K.prototype,"ariaLive",void 0);w([C({attribute:"aria-owns"})],K.prototype,"ariaOwns",void 0);w([C({attribute:"aria-relevant"})],K.prototype,"ariaRelevant",void 0);w([C({attribute:"aria-roledescription"})],K.prototype,"ariaRoledescription",void 0);const su=(t,e)=>_e`
    <button
        class="control"
        part="control"
        ?autofocus="${n=>n.autofocus}"
        ?disabled="${n=>n.disabled}"
        form="${n=>n.formId}"
        formaction="${n=>n.formaction}"
        formenctype="${n=>n.formenctype}"
        formmethod="${n=>n.formmethod}"
        formnovalidate="${n=>n.formnovalidate}"
        formtarget="${n=>n.formtarget}"
        name="${n=>n.name}"
        type="${n=>n.type}"
        value="${n=>n.value}"
        aria-atomic="${n=>n.ariaAtomic}"
        aria-busy="${n=>n.ariaBusy}"
        aria-controls="${n=>n.ariaControls}"
        aria-current="${n=>n.ariaCurrent}"
        aria-describedby="${n=>n.ariaDescribedby}"
        aria-details="${n=>n.ariaDetails}"
        aria-disabled="${n=>n.ariaDisabled}"
        aria-errormessage="${n=>n.ariaErrormessage}"
        aria-expanded="${n=>n.ariaExpanded}"
        aria-flowto="${n=>n.ariaFlowto}"
        aria-haspopup="${n=>n.ariaHaspopup}"
        aria-hidden="${n=>n.ariaHidden}"
        aria-invalid="${n=>n.ariaInvalid}"
        aria-keyshortcuts="${n=>n.ariaKeyshortcuts}"
        aria-label="${n=>n.ariaLabel}"
        aria-labelledby="${n=>n.ariaLabelledby}"
        aria-live="${n=>n.ariaLive}"
        aria-owns="${n=>n.ariaOwns}"
        aria-pressed="${n=>n.ariaPressed}"
        aria-relevant="${n=>n.ariaRelevant}"
        aria-roledescription="${n=>n.ariaRoledescription}"
        ${Ne("control")}
    >
        ${hs(t,e)}
        <span class="content" part="content">
            <slot ${_i("defaultSlottedContent")}></slot>
        </span>
        ${us(t,e)}
    </button>
`,Do="form-associated-proxy",Ao="ElementInternals",Ro=Ao in window&&"setFormValue"in window[Ao].prototype,Eo=new WeakMap;function ys(t){const e=class extends t{constructor(...n){super(...n),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Ro}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const n=this.proxy.labels,i=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),r=n?i.concat(Array.from(n)):i;return Object.freeze(r)}else return bn}valueChanged(n,i){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(n,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(n,i){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),U.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(n,i){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(n,i){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),U.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Ro)return null;let n=Eo.get(this);return n||(n=this.attachInternals(),Eo.set(this,n)),n}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(n=>this.proxy.removeEventListener(n,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(n,i,r){this.elementInternals?this.elementInternals.setValidity(n,i,r):typeof i=="string"&&this.proxy.setCustomValidity(i)}formDisabledCallback(n){this.disabled=n}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var n;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(i=>this.proxy.addEventListener(i,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Do),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Do)),(n=this.shadowRoot)===null||n===void 0||n.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var n;this.removeChild(this.proxy),(n=this.shadowRoot)===null||n===void 0||n.removeChild(this.proxySlot)}validate(n){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,n)}setFormValue(n,i){this.elementInternals&&this.elementInternals.setFormValue(n,i||n)}_keypressHandler(n){switch(n.key){case ps:if(this.form instanceof HTMLFormElement){const i=this.form.querySelector("[type=submit]");i==null||i.click()}break}}stopPropagation(n){n.stopPropagation()}};return C({mode:"boolean"})(e.prototype,"disabled"),C({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),C({attribute:"current-value"})(e.prototype,"currentValue"),C(e.prototype,"name"),C({mode:"boolean"})(e.prototype,"required"),B(e.prototype,"value"),e}function ou(t){class e extends ys(t){}class n extends e{constructor(...r){super(r),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(r,s){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),r!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(r,s){this.checked=this.currentChecked}updateForm(){const r=this.checked?this.value:null;this.setFormValue(r,r)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return C({attribute:"checked",mode:"boolean"})(n.prototype,"checkedAttribute"),C({attribute:"current-checked",converter:za})(n.prototype,"currentChecked"),B(n.prototype,"defaultChecked"),B(n.prototype,"checked"),n}class au extends De{}class lu extends ys(au){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Oe=class extends lu{constructor(){super(...arguments),this.handleClick=e=>{var n;this.disabled&&((n=this.defaultSlottedContent)===null||n===void 0?void 0:n.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,n){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),n==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),n==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const n=Array.from((e=this.control)===null||e===void 0?void 0:e.children);n&&n.forEach(i=>{i.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const n=Array.from((e=this.control)===null||e===void 0?void 0:e.children);n&&n.forEach(i=>{i.removeEventListener("click",this.handleClick)})}};w([C({mode:"boolean"})],Oe.prototype,"autofocus",void 0);w([C({attribute:"form"})],Oe.prototype,"formId",void 0);w([C],Oe.prototype,"formaction",void 0);w([C],Oe.prototype,"formenctype",void 0);w([C],Oe.prototype,"formmethod",void 0);w([C({mode:"boolean"})],Oe.prototype,"formnovalidate",void 0);w([C],Oe.prototype,"formtarget",void 0);w([C],Oe.prototype,"type",void 0);w([B],Oe.prototype,"defaultSlottedContent",void 0);class Fi{}w([C({attribute:"aria-expanded"})],Fi.prototype,"ariaExpanded",void 0);w([C({attribute:"aria-pressed"})],Fi.prototype,"ariaPressed",void 0);ut(Fi,K);ut(Oe,cs,Fi);const cu=(t,e)=>_e`
    <slot></slot>
`;let Xa=class extends De{};const uu=(t,e)=>_e`
    <template
        role="checkbox"
        aria-checked="${n=>n.checked}"
        aria-required="${n=>n.required}"
        aria-disabled="${n=>n.disabled}"
        aria-readonly="${n=>n.readOnly}"
        tabindex="${n=>n.disabled?null:0}"
        @keypress="${(n,i)=>n.keypressHandler(i.event)}"
        @click="${(n,i)=>n.clickHandler(i.event)}"
        class="${n=>n.readOnly?"readonly":""} ${n=>n.checked?"checked":""} ${n=>n.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${n=>n.defaultSlottedNodes&&n.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${_i("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class hu extends De{}class du extends ou(hu){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ci extends du{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case Ti:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}w([C({attribute:"readonly",mode:"boolean"})],Ci.prototype,"readOnly",void 0);w([B],Ci.prototype,"defaultSlottedNodes",void 0);w([B],Ci.prototype,"indeterminate",void 0);function Qa(t){return tu(t)&&(t.getAttribute("role")==="option"||t instanceof HTMLOptionElement)}class Qe extends De{constructor(e,n,i,r){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),n&&(this.initialValue=n),i&&(this.defaultSelected=i),r&&(this.selected=r),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,n){if(typeof n=="boolean"){this.ariaChecked=n?"true":"false";return}this.ariaChecked=null}contentChanged(e,n){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,n){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,n){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,n;return(n=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&n!==void 0?n:""}set value(e){const n=`${e??""}`;this._value=n,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=n),M.notify(this,"value")}get value(){var e;return M.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}}w([B],Qe.prototype,"checked",void 0);w([B],Qe.prototype,"content",void 0);w([B],Qe.prototype,"defaultSelected",void 0);w([C({mode:"boolean"})],Qe.prototype,"disabled",void 0);w([C({attribute:"selected",mode:"boolean"})],Qe.prototype,"selectedAttribute",void 0);w([B],Qe.prototype,"selected",void 0);w([C({attribute:"value",mode:"fromView"})],Qe.prototype,"initialValue",void 0);class Zt{}w([B],Zt.prototype,"ariaChecked",void 0);w([B],Zt.prototype,"ariaPosInSet",void 0);w([B],Zt.prototype,"ariaSelected",void 0);w([B],Zt.prototype,"ariaSetSize",void 0);ut(Zt,K);ut(Qe,cs,Zt);let Be=class ri extends De{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,n;return(n=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&n!==void 0?n:0}get options(){return M.track(this,"options"),this._options}set options(e){this._options=e,M.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const n=e.target.closest("option,[role=option]");if(n&&!n.disabled)return this.selectedIndex=this.options.indexOf(n),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),n=new RegExp(`^${e}`,"gi");return this.options.filter(i=>i.text.trim().match(n))}getSelectableIndex(e=this.selectedIndex,n){const i=e>n?-1:e<n?1:0,r=e+i;let s=null;switch(i){case-1:{s=this.options.reduceRight((o,a,c)=>!o&&!a.disabled&&c<r?a:o,s);break}case 1:{s=this.options.reduce((o,a,c)=>!o&&!a.disabled&&c>r?a:o,s);break}}return this.options.indexOf(s)}handleChange(e,n){switch(n){case"selected":{ri.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,ri.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const n=e.key;switch(n){case bs:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case ds:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case fs:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case ms:{e.preventDefault(),this.selectLastOption();break}case vs:return this.focusAndScrollOptionIntoView(),!0;case ps:case gs:return!0;case Ti:if(this.typeaheadExpired)return!0;default:return n.length===1&&this.handleTypeAhead(`${n}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,n){this.ariaMultiSelectable=n?"true":null}selectedIndexChanged(e,n){var i;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((i=this.options[this.selectedIndex])===null||i===void 0)&&i.disabled&&typeof e=="number"){const r=this.getSelectableIndex(e,n),s=r>-1?r:e;this.selectedIndex=s,n===s&&this.selectedIndexChanged(n,s);return}this.setSelectedOptions()}selectedOptionsChanged(e,n){var i;const r=n.filter(ri.slottedOptionFilter);(i=this.options)===null||i===void 0||i.forEach(s=>{const o=M.getNotifier(s);o.unsubscribe(this,"selected"),s.selected=r.includes(s),o.subscribe(this,"selected")})}selectFirstOption(){var e,n;this.disabled||(this.selectedIndex=(n=(e=this.options)===null||e===void 0?void 0:e.findIndex(i=>!i.disabled))!==null&&n!==void 0?n:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Kc(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,n;this.selectedIndex=(n=(e=this.options)===null||e===void 0?void 0:e.findIndex(i=>i.defaultSelected))!==null&&n!==void 0?n:-1}setSelectedOptions(){var e,n,i;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(i=(n=this.firstSelectedOption)===null||n===void 0?void 0:n.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,n){this.options=n.reduce((r,s)=>(Qa(s)&&r.push(s),r),[]);const i=`${this.options.length}`;this.options.forEach((r,s)=>{r.id||(r.id=Ya("option-")),r.ariaPosInSet=`${s+1}`,r.ariaSetSize=i}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,n){if(this.$fastController.isConnected){const i=this.getTypeaheadMatches();if(i.length){const r=this.options.indexOf(i[0]);r>-1&&(this.selectedIndex=r)}this.typeaheadExpired=!1}}};Be.slottedOptionFilter=t=>Qa(t)&&!t.hidden;Be.TYPE_AHEAD_TIMEOUT_MS=1e3;w([C({mode:"boolean"})],Be.prototype,"disabled",void 0);w([B],Be.prototype,"selectedIndex",void 0);w([B],Be.prototype,"selectedOptions",void 0);w([B],Be.prototype,"slottedOptions",void 0);w([B],Be.prototype,"typeaheadBuffer",void 0);class St{}w([B],St.prototype,"ariaActiveDescendant",void 0);w([B],St.prototype,"ariaDisabled",void 0);w([B],St.prototype,"ariaExpanded",void 0);w([B],St.prototype,"ariaMultiSelectable",void 0);ut(St,K);ut(Be,St);const $r={above:"above",below:"below"};function di(t){const e=t.parentElement;if(e)return e;{const n=t.getRootNode();if(n.host instanceof HTMLElement)return n.host}return null}function fu(t,e){let n=e;for(;n!==null;){if(n===t)return!0;n=di(n)}return!1}const Xe=document.createElement("div");function pu(t){return t instanceof Si}class ws{setProperty(e,n){U.queueUpdate(()=>this.target.setProperty(e,n))}removeProperty(e){U.queueUpdate(()=>this.target.removeProperty(e))}}class gu extends ws{constructor(e){super();const n=new CSSStyleSheet;n[La]=!0,this.target=n.cssRules[n.insertRule(":host{}")].style,e.$fastController.addStyles(ve.create([n]))}}class bu extends ws{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class mu extends ws{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const n=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[n].style}}}class Ja{constructor(e){this.store=new Map,this.target=null;const n=e.$fastController;this.style=document.createElement("style"),n.addStyles(this.style),M.getNotifier(n).subscribe(this,"isConnected"),this.handleChange(n,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,n]of this.store.entries())this.target.setProperty(e,n)}setProperty(e,n){this.store.set(e,n),U.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,n)})}removeProperty(e){this.store.delete(e),U.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,n){const{sheet:i}=this.style;if(i){const r=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[r].style}else this.target=null}}w([B],Ja.prototype,"target",void 0);class vu{constructor(e){this.target=e.style}setProperty(e,n){U.queueUpdate(()=>this.target.setProperty(e,n))}removeProperty(e){U.queueUpdate(()=>this.target.removeProperty(e))}}class le{setProperty(e,n){le.properties[e]=n;for(const i of le.roots.values())Pt.getOrCreate(le.normalizeRoot(i)).setProperty(e,n)}removeProperty(e){delete le.properties[e];for(const n of le.roots.values())Pt.getOrCreate(le.normalizeRoot(n)).removeProperty(e)}static registerRoot(e){const{roots:n}=le;if(!n.has(e)){n.add(e);const i=Pt.getOrCreate(this.normalizeRoot(e));for(const r in le.properties)i.setProperty(r,le.properties[r])}}static unregisterRoot(e){const{roots:n}=le;if(n.has(e)){n.delete(e);const i=Pt.getOrCreate(le.normalizeRoot(e));for(const r in le.properties)i.removeProperty(r)}}static normalizeRoot(e){return e===Xe?document:e}}le.roots=new Set;le.properties={};const Sr=new WeakMap,yu=U.supportsAdoptedStyleSheets?gu:Ja,Pt=Object.freeze({getOrCreate(t){if(Sr.has(t))return Sr.get(t);let e;return t===Xe?e=new le:t instanceof Document?e=U.supportsAdoptedStyleSheets?new bu:new mu:pu(t)?e=new yu(t):e=new vu(t),Sr.set(t,e),e}});class be extends ls{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=be.uniqueId(),be.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new be({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return be.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const n=ne.getOrCreate(e).get(this);if(n!==void 0)return n;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,n){return this._appliedTo.add(e),n instanceof be&&(n=this.alias(n)),ne.getOrCreate(e).set(this,n),this}deleteValueFor(e){return this._appliedTo.delete(e),ne.existsFor(e)&&ne.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Xe,e),this}subscribe(e,n){const i=this.getOrCreateSubscriberSet(n);n&&!ne.existsFor(n)&&ne.getOrCreate(n),i.has(e)||i.add(e)}unsubscribe(e,n){const i=this.subscribers.get(n||this);i&&i.has(e)&&i.delete(e)}notify(e){const n=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(i=>i.handleChange(n)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(i=>i.handleChange(n))}alias(e){return n=>e.getValueFor(n)}}be.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})();be.tokensById=new Map;class wu{startReflection(e,n){e.subscribe(this,n),this.handleChange({token:e,target:n})}stopReflection(e,n){e.unsubscribe(this,n),this.remove(e,n)}handleChange(e){const{token:n,target:i}=e;this.add(n,i)}add(e,n){Pt.getOrCreate(n).setProperty(e.cssCustomProperty,this.resolveCSSValue(ne.getOrCreate(n).get(e)))}remove(e,n){Pt.getOrCreate(n).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class xu{constructor(e,n,i){this.source=e,this.token=n,this.node=i,this.dependencies=new Set,this.observer=M.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,vn))}}class ku{constructor(){this.values=new Map}set(e,n){this.values.get(e)!==n&&(this.values.set(e,n),M.getNotifier(this).notify(e.id))}get(e){return M.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const an=new WeakMap,ln=new WeakMap;class ne{constructor(e){this.target=e,this.store=new ku,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(n,i)=>{const r=be.getTokenById(i);r&&(r.notify(this.target),this.updateCSSTokenReflection(n,r))}},an.set(e,this),M.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Si?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return an.get(e)||new ne(e)}static existsFor(e){return an.has(e)}static findParent(e){if(Xe!==e.target){let n=di(e.target);for(;n!==null;){if(an.has(n))return an.get(n);n=di(n)}return ne.getOrCreate(Xe)}return null}static findClosestAssignedNode(e,n){let i=n;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==Xe?ne.getOrCreate(Xe):null}while(i!==null);return null}get parent(){return ln.get(this)||null}updateCSSTokenReflection(e,n){if(be.isCSSDesignToken(n)){const i=this.parent,r=this.isReflecting(n);if(i){const s=i.get(n),o=e.get(n);s!==o&&!r?this.reflectToCSS(n):s===o&&r&&this.stopReflectToCSS(n)}else r||this.reflectToCSS(n)}}has(e){return this.assignedValues.has(e)}get(e){const n=this.store.get(e);if(n!==void 0)return n;const i=this.getRaw(e);if(i!==void 0)return this.hydrate(e,i),this.get(e)}getRaw(e){var n;return this.assignedValues.has(e)?this.assignedValues.get(e):(n=ne.findClosestAssignedNode(e,this))===null||n===void 0?void 0:n.getRaw(e)}set(e,n){be.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,n),be.isDerivedDesignTokenValue(n)?this.setupBindingObserver(e,n):this.store.set(e,n)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const n=this.getRaw(e);n?this.hydrate(e,n):this.store.delete(e)}bind(){const e=ne.findParent(this);e&&e.appendChild(this);for(const n of this.assignedValues.keys())n.notify(this.target)}unbind(){this.parent&&ln.get(this).removeChild(this)}appendChild(e){e.parent&&ln.get(e).removeChild(e);const n=this.children.filter(i=>e.contains(i));ln.set(e,this),this.children.push(e),n.forEach(i=>e.appendChild(i)),M.getNotifier(this.store).subscribe(e);for(const[i,r]of this.store.all())e.hydrate(i,this.bindingObservers.has(i)?this.getRaw(i):r)}removeChild(e){const n=this.children.indexOf(e);return n!==-1&&this.children.splice(n,1),M.getNotifier(this.store).unsubscribe(e),e.parent===this?ln.delete(e):!1}contains(e){return fu(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),ne.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),ne.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,n){const i=be.getTokenById(n);i&&(this.hydrate(i,this.getRaw(i)),this.updateCSSTokenReflection(this.store,i))}hydrate(e,n){if(!this.has(e)){const i=this.bindingObservers.get(e);be.isDerivedDesignTokenValue(n)?i?i.source!==n&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,n)):this.setupBindingObserver(e,n):(i&&this.tearDownBindingObserver(e),this.store.set(e,n))}}setupBindingObserver(e,n){const i=new xu(n,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}ne.cssCustomPropertyReflector=new wu;w([B],ne.prototype,"children",void 0);function $u(t){return be.from(t)}const ee=Object.freeze({create:$u,notifyConnection(t){return!t.isConnected||!ne.existsFor(t)?!1:(ne.getOrCreate(t).bind(),!0)},notifyDisconnection(t){return t.isConnected||!ne.existsFor(t)?!1:(ne.getOrCreate(t).unbind(),!0)},registerRoot(t=Xe){le.registerRoot(t)},unregisterRoot(t=Xe){le.unregisterRoot(t)}}),_r=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Tr=new Map,si=new Map;let Mt=null;const cn=J.createInterface(t=>t.cachedCallback(e=>(Mt===null&&(Mt=new el(null,e)),Mt))),Ka=Object.freeze({tagFor(t){return si.get(t)},responsibleFor(t){const e=t.$$designSystem$$;return e||J.findResponsibleContainer(t).get(cn)},getOrCreate(t){if(!t)return Mt===null&&(Mt=J.getOrCreateDOMContainer().get(cn)),Mt;const e=t.$$designSystem$$;if(e)return e;const n=J.getOrCreateDOMContainer(t);if(n.has(cn,!1))return n.get(cn);{const i=new el(t,n);return n.register($n.instance(cn,i)),i}}});function Su(t,e,n){return typeof t=="string"?{name:t,type:e,callback:n}:t}class el{constructor(e,n){this.owner=e,this.container=n,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>_r.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const n=this.container,i=[],r=this.disambiguate,s=this.shadowRootMode,o={elementPrefix:this.prefix,tryDefineElement(a,c,l){const u=Su(a,c,l),{name:d,callback:f,baseClass:p}=u;let{type:m}=u,k=d,N=Tr.get(k),A=!0;for(;N;){const O=r(k,m,N);switch(O){case _r.ignoreDuplicate:return;case _r.definitionCallbackOnly:A=!1,N=void 0;break;default:k=O,N=Tr.get(k);break}}A&&((si.has(m)||m===De)&&(m=class extends m{}),Tr.set(k,m),si.set(m,k),p&&si.set(p,k)),i.push(new _u(n,k,m,s,f,A))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&ee.registerRoot(this.designTokenRoot)),n.registerWithContext(o,...e);for(const a of i)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}}class _u{constructor(e,n,i,r,s,o){this.container=e,this.name=n,this.type=i,this.shadowRootMode=r,this.callback=s,this.willDefine=o,this.definition=null}definePresentation(e){Za.define(this.name,e,this.container)}defineElement(e){this.definition=new $i(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Ka.tagFor(e)}}const Tu=(t,e)=>_e`
    <template
        aria-checked="${n=>n.ariaChecked}"
        aria-disabled="${n=>n.ariaDisabled}"
        aria-posinset="${n=>n.ariaPosInSet}"
        aria-selected="${n=>n.ariaSelected}"
        aria-setsize="${n=>n.ariaSetSize}"
        class="${n=>[n.checked&&"checked",n.selected&&"selected",n.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${hs(t,e)}
        <span class="content" part="content">
            <slot ${_i("content")}></slot>
        </span>
        ${us(t,e)}
    </template>
`;class Di extends Be{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(n=>n.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,n){var i,r;this.ariaActiveDescendant=(r=(i=this.options[n])===null||i===void 0?void 0:i.id)!==null&&r!==void 0?r:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((n,i)=>{n.checked=jn(i,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((n,i)=>{n.checked=jn(i,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((n,i)=>{n.checked=jn(i,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((n,i)=>{n.checked=jn(i,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var n;if(!this.multiple)return super.clickHandler(e);const i=(n=e.target)===null||n===void 0?void 0:n.closest("[role=option]");if(!(!i||i.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:n,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,n){case bs:{this.checkFirstOption(i);return}case ds:{this.checkNextOption(i);return}case fs:{this.checkPreviousOption(i);return}case ms:{this.checkLastOption(i);return}case vs:return this.focusAndScrollOptionIntoView(),!0;case gs:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Ti:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return n.length===1&&this.handleTypeAhead(`${n}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,n){var i;this.ariaMultiSelectable=n?"true":null,(i=this.options)===null||i===void 0||i.forEach(r=>{r.checked=n?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,n){var i;const r=Math.max(0,parseInt((i=n==null?void 0:n.toFixed())!==null&&i!==void 0?i:"",10));r!==n&&U.queueUpdate(()=>{this.size=r})}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter(i=>!i.disabled),n=!e.every(i=>i.selected);e.forEach(i=>i.selected=n),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,n){if(!this.multiple){super.typeaheadBufferChanged(e,n);return}if(this.$fastController.isConnected){const i=this.getTypeaheadMatches(),r=this.options.indexOf(i[0]);r>-1&&(this.activeIndex=r,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(n=>n.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}}w([B],Di.prototype,"activeIndex",void 0);w([C({mode:"boolean"})],Di.prototype,"multiple",void 0);w([C({converter:ki})],Di.prototype,"size",void 0);const Io=44,Fu=(t,e)=>_e`
    <template
        role="progressbar"
        aria-valuenow="${n=>n.value}"
        aria-valuemin="${n=>n.min}"
        aria-valuemax="${n=>n.max}"
        class="${n=>n.paused?"paused":""}"
    >
        ${ja(n=>typeof n.value=="number",_e`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${n=>Io*n.percentComplete/100}px ${Io}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,_e`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class Yt extends De{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e=typeof this.min=="number"?this.min:0,n=typeof this.max=="number"?this.max:100,i=typeof this.value=="number"?this.value:0,r=n-e;this.percentComplete=r===0?0:Math.fround((i-e)/r*100)}}w([C({converter:ki})],Yt.prototype,"value",void 0);w([C({converter:ki})],Yt.prototype,"min",void 0);w([C({converter:ki})],Yt.prototype,"max",void 0);w([C({mode:"boolean"})],Yt.prototype,"paused",void 0);w([B],Yt.prototype,"percentComplete",void 0);class Cu extends Di{}class Du extends ys(Cu){constructor(){super(...arguments),this.proxy=document.createElement("select")}}let Je=class extends Du{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Ya("listbox-"),this.maxHeight=0}openChanged(e,n){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,U.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return M.track(this,"value"),this._value}set value(e){var n,i,r,s,o,a,c;const l=`${this._value}`;if(!((n=this._options)===null||n===void 0)&&n.length){const u=this._options.findIndex(p=>p.value===e),d=(r=(i=this._options[this.selectedIndex])===null||i===void 0?void 0:i.value)!==null&&r!==void 0?r:null,f=(o=(s=this._options[u])===null||s===void 0?void 0:s.value)!==null&&o!==void 0?o:null;(u===-1||d!==f)&&(e="",this.selectedIndex=u),e=(c=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&c!==void 0?c:e}l!==e&&(this._value=e,super.valueChanged(l,e),M.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var n,i;this.$fastController.isConnected&&(this.value=(i=(n=this.firstSelectedOption)===null||n===void 0?void 0:n.value)!==null&&i!==void 0?i:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,n){super.selectedIndexChanged(e,n),this.updateValue()}positionChanged(e,n){this.positionAttribute=n,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),i=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>i?$r.above:$r.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===$r.above?~~e.top:~~i}get displayValue(){var e,n;return M.track(this,"displayValue"),(n=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&n!==void 0?n:""}disabledChanged(e,n){super.disabledChanged&&super.disabledChanged(e,n),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const n=e.target.closest("option,[role=option]");if(n&&n.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var n;if(super.focusoutHandler(e),!this.open)return!0;const i=e.relatedTarget;if(this.isSameNode(i)){this.focus();return}!((n=this.options)===null||n===void 0)&&n.includes(i)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,n){super.handleChange(e,n),n==="value"&&this.updateValue()}slottedOptionsChanged(e,n){this.options.forEach(i=>{M.getNotifier(i).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,n),this.options.forEach(i=>{M.getNotifier(i).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var n;return e.offsetX>=0&&e.offsetX<=((n=this.listbox)===null||n===void 0?void 0:n.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,n){super.multipleChanged(e,n),this.proxy&&(this.proxy.multiple=n)}selectedOptionsChanged(e,n){var i;super.selectedOptionsChanged(e,n),(i=this.options)===null||i===void 0||i.forEach((r,s)=>{var o;const a=(o=this.proxy)===null||o===void 0?void 0:o.options.item(s);a&&(a.selected=r.selected)})}setDefaultSelectedOption(){var e;const n=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(Be.slottedOptionFilter),i=n==null?void 0:n.findIndex(r=>r.hasAttribute("selected")||r.selected||r.value===this.value);if(i!==-1){this.selectedIndex=i;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const n=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);n&&this.proxy.options.add(n)}))}keydownHandler(e){super.keydownHandler(e);const n=e.key||e.key.charCodeAt(0);switch(n){case Ti:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case bs:case ms:{e.preventDefault();break}case ps:{e.preventDefault(),this.open=!this.open;break}case gs:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case vs:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(n===ds||n===fs)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,n){super.sizeChanged(e,n),this.proxy&&(this.proxy.size=n)}updateDisplayValue(){this.collapsible&&M.notify(this,"displayValue")}};w([C({attribute:"open",mode:"boolean"})],Je.prototype,"open",void 0);w([dc],Je.prototype,"collapsible",null);w([B],Je.prototype,"control",void 0);w([C({attribute:"position"})],Je.prototype,"positionAttribute",void 0);w([B],Je.prototype,"position",void 0);w([B],Je.prototype,"maxHeight",void 0);class xs{}w([B],xs.prototype,"ariaControls",void 0);ut(xs,St);ut(Je,cs,xs);const Au=(t,e)=>_e`
    <template
        class="${n=>[n.collapsible&&"collapsible",n.collapsible&&n.open&&"open",n.disabled&&"disabled",n.collapsible&&n.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${n=>n.ariaActiveDescendant}"
        aria-controls="${n=>n.ariaControls}"
        aria-disabled="${n=>n.ariaDisabled}"
        aria-expanded="${n=>n.ariaExpanded}"
        aria-haspopup="${n=>n.collapsible?"listbox":null}"
        aria-multiselectable="${n=>n.ariaMultiSelectable}"
        ?open="${n=>n.open}"
        role="combobox"
        tabindex="${n=>n.disabled?null:"0"}"
        @click="${(n,i)=>n.clickHandler(i.event)}"
        @focusin="${(n,i)=>n.focusinHandler(i.event)}"
        @focusout="${(n,i)=>n.focusoutHandler(i.event)}"
        @keydown="${(n,i)=>n.keydownHandler(i.event)}"
        @mousedown="${(n,i)=>n.mousedownHandler(i.event)}"
    >
        ${ja(n=>n.collapsible,_e`
                <div
                    class="control"
                    part="control"
                    ?disabled="${n=>n.disabled}"
                    ${Ne("control")}
                >
                    ${hs(t,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${n=>n.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${us(t,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${n=>n.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${n=>n.disabled}"
            ?hidden="${n=>n.collapsible?!n.open:!1}"
            ${Ne("listbox")}
        >
            <slot
                ${_i({filter:Be.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;class Ru{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:n}=this,i=this.constructListener(e);i.bind(n)(),n.addListener(i),this.listenerCache.set(e,i)}unbind(e){const n=this.listenerCache.get(e);n&&(this.query.removeListener(n),this.listenerCache.delete(e))}}class Dn extends Ru{constructor(e,n){super(e),this.styles=n}static with(e){return n=>new Dn(e,n)}constructListener(e){let n=!1;const i=this.styles;return function(){const{matches:s}=this;s&&!n?(e.$fastController.addStyles(i),n=s):!s&&n&&(e.$fastController.removeStyles(i),n=s)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const Me=Dn.with(window.matchMedia("(forced-colors)"));Dn.with(window.matchMedia("(prefers-color-scheme: dark)"));Dn.with(window.matchMedia("(prefers-color-scheme: light)"));class Eu{constructor(e,n,i){this.propertyName=e,this.value=n,this.styles=i}bind(e){M.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){M.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,n){e[n]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}const Ai="not-allowed",Iu=":host([hidden]){display:none}";function Xt(t){return`${Iu}:host{display:${t}}`}const Ae=iu()?"focus-visible":"focus";function mt(t,e,n){return isNaN(t)||t<=e?e:t>=n?n:t}function Fr(t,e,n){return isNaN(t)||t<=e?0:t>=n?1:t/(n-e)}function ft(t,e,n){return isNaN(t)?e:e+t*(n-e)}function Ou(t){const e=Math.round(mt(t,0,255)).toString(16);return e.length===1?"0"+e:e}function qn(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:e+t*(n-e)}function me(t,e){const n=Math.pow(10,e);return Math.round(t*n)/n}class Sn{constructor(e,n,i){this.h=e,this.s=n,this.l=i}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.l)?new Sn(e.h,e.s,e.l):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new Sn(me(this.h,e),me(this.s,e),me(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class ce{constructor(e,n,i){this.l=e,this.a=n,this.b=i}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.a)&&!isNaN(e.b)?new ce(e.l,e.a,e.b):null}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new ce(me(this.l,e),me(this.a,e),me(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}ce.epsilon=216/24389;ce.kappa=24389/27;class re{constructor(e,n,i,r){this.r=e,this.g=n,this.b=i,this.a=typeof r=="number"&&!isNaN(r)?r:1}static fromObject(e){return e&&!isNaN(e.r)&&!isNaN(e.g)&&!isNaN(e.b)?new re(e.r,e.g,e.b,e.a):null}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(ft(this.r,0,255))},${Math.round(ft(this.g,0,255))},${Math.round(ft(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(ft(this.r,0,255))},${Math.round(ft(this.g,0,255))},${Math.round(ft(this.b,0,255))},${mt(this.a,0,1)})`}roundToPrecision(e){return new re(me(this.r,e),me(this.g,e),me(this.b,e),me(this.a,e))}clamp(){return new re(mt(this.r,0,1),mt(this.g,0,1),mt(this.b,0,1),mt(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return Ou(ft(e,0,255))}}class Se{constructor(e,n,i){this.x=e,this.y=n,this.z=i}static fromObject(e){return e&&!isNaN(e.x)&&!isNaN(e.y)&&!isNaN(e.z)?new Se(e.x,e.y,e.z):null}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new Se(me(this.x,e),me(this.y,e),me(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}Se.whitePoint=new Se(.95047,1,1.08883);function Vu(t){return t.r*.2126+t.g*.7152+t.b*.0722}function tl(t){function e(n){return n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return Vu(new re(e(t.r),e(t.g),e(t.b),1))}function Cr(t,e,n){return n-e===0?0:(t-e)/(n-e)}function Dr(t,e,n){const i=Cr(t.r,e.r,n.r),r=Cr(t.g,e.g,n.g),s=Cr(t.b,e.b,n.b);return(i+r+s)/3}function Lu(t,e,n=null){let i=0,r=n;return r!==null?i=Dr(t,e,r):(r=new re(0,0,0,1),i=Dr(t,e,r),i<=0&&(r=new re(1,1,1,1),i=Dr(t,e,r))),i=Math.round(i*1e3)/1e3,new re(r.r,r.g,r.b,i)}function Oo(t){const e=Math.max(t.r,t.g,t.b),n=Math.min(t.r,t.g,t.b),i=e-n;let r=0;i!==0&&(e===t.r?r=60*((t.g-t.b)/i%6):e===t.g?r=60*((t.b-t.r)/i+2):r=60*((t.r-t.g)/i+4)),r<0&&(r+=360);const s=(e+n)/2;let o=0;return i!==0&&(o=i/(1-Math.abs(2*s-1))),new Sn(r,o,s)}function Pu(t,e=1){const n=(1-Math.abs(2*t.l-1))*t.s,i=n*(1-Math.abs(t.h/60%2-1)),r=t.l-n/2;let s=0,o=0,a=0;return t.h<60?(s=n,o=i,a=0):t.h<120?(s=i,o=n,a=0):t.h<180?(s=0,o=n,a=i):t.h<240?(s=0,o=i,a=n):t.h<300?(s=i,o=0,a=n):t.h<360&&(s=n,o=0,a=i),new re(s+r,o+r,a+r,e)}function Nu(t){const e=(t.l+16)/116,n=e+t.a/500,i=e-t.b/200,r=Math.pow(n,3),s=Math.pow(e,3),o=Math.pow(i,3);let a=0;r>ce.epsilon?a=r:a=(116*n-16)/ce.kappa;let c=0;t.l>ce.epsilon*ce.kappa?c=s:c=t.l/ce.kappa;let l=0;return o>ce.epsilon?l=o:l=(116*i-16)/ce.kappa,a=Se.whitePoint.x*a,c=Se.whitePoint.y*c,l=Se.whitePoint.z*l,new Se(a,c,l)}function Mu(t){function e(c){return c>ce.epsilon?Math.pow(c,1/3):(ce.kappa*c+16)/116}const n=e(t.x/Se.whitePoint.x),i=e(t.y/Se.whitePoint.y),r=e(t.z/Se.whitePoint.z),s=116*i-16,o=500*(n-i),a=200*(i-r);return new ce(s,o,a)}function zu(t){function e(c){return c<=.04045?c/12.92:Math.pow((c+.055)/1.055,2.4)}const n=e(t.r),i=e(t.g),r=e(t.b),s=n*.4124564+i*.3575761+r*.1804375,o=n*.2126729+i*.7151522+r*.072175,a=n*.0193339+i*.119192+r*.9503041;return new Se(s,o,a)}function Bu(t,e=1){function n(o){return o<=.0031308?o*12.92:1.055*Math.pow(o,1/2.4)-.055}const i=n(t.x*3.2404542-t.y*1.5371385-t.z*.4985314),r=n(t.x*-.969266+t.y*1.8760108+t.z*.041556),s=n(t.x*.0556434-t.y*.2040259+t.z*1.0572252);return new re(i,r,s,e)}function Hu(t){return Mu(zu(t))}function Ar(t,e=1){return Bu(Nu(t),e)}var Vo;(function(t){t[t.Burn=0]="Burn",t[t.Color=1]="Color",t[t.Darken=2]="Darken",t[t.Dodge=3]="Dodge",t[t.Lighten=4]="Lighten",t[t.Multiply=5]="Multiply",t[t.Overlay=6]="Overlay",t[t.Screen=7]="Screen"})(Vo||(Vo={}));function Uu(t,e){if(e.a>=1)return e;if(e.a<=0)return new re(t.r,t.g,t.b,1);const n=e.a*e.r+(1-e.a)*t.r,i=e.a*e.g+(1-e.a)*t.g,r=e.a*e.b+(1-e.a)*t.b;return new re(n,i,r,1)}function Wn(t,e,n){return isNaN(t)||t<=0?e:t>=1?n:new re(qn(t,e.r,n.r),qn(t,e.g,n.g),qn(t,e.b,n.b),qn(t,e.a,n.a))}var Lo;(function(t){t[t.RGB=0]="RGB",t[t.HSL=1]="HSL",t[t.HSV=2]="HSV",t[t.XYZ=3]="XYZ",t[t.LAB=4]="LAB",t[t.LCH=5]="LCH"})(Lo||(Lo={}));const ju=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function zt(t){const e=ju.exec(t);if(e===null)return null;let n=e[1];if(n.length===3){const r=n.charAt(0),s=n.charAt(1),o=n.charAt(2);n=r.concat(r,s,s,o,o)}const i=parseInt(n,16);return isNaN(i)?null:new re(Fr((i&16711680)>>>16,0,255),Fr((i&65280)>>>8,0,255),Fr(i&255,0,255),1)}function fi(t,e){const n=t.relativeLuminance>e.relativeLuminance?t:e,i=t.relativeLuminance>e.relativeLuminance?e:t;return(n.relativeLuminance+.05)/(i.relativeLuminance+.05)}const ze=Object.freeze({create(t,e,n){return new pi(t,e,n)},from(t){return new pi(t.r,t.g,t.b)}});function qu(t){const e={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const n in e)if(typeof e[n]!=typeof t[n])return!1;return!0}class pi extends re{constructor(e,n,i){super(e,n,i,1),this.toColorString=this.toStringHexRGB,this.contrast=fi.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=tl(this)}static fromObject(e){return new pi(e.r,e.g,e.b)}}function qr(t,e,n=0,i=t.length-1){if(i===n)return t[n];const r=Math.floor((i-n)/2)+n;return e(t[r])?qr(t,e,n,r):qr(t,e,r+1,i)}const Wu=(-.1+Math.sqrt(.21))/2;function An(t){return t.relativeLuminance<=Wu}function _t(t){return An(t)?-1:1}const Po={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1};function Gu(t,e,n){return typeof t=="number"?_n.from(ze.create(t,e,n)):_n.from(t)}function Zu(t,e){return qu(t)?qe.from(t,e):qe.from(ze.create(t.r,t.g,t.b),e)}const _n=Object.freeze({create:Gu,from:Zu});class qe{constructor(e,n){this.closestIndexCache=new Map,this.source=e,this.swatches=n,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,n,i,r){i===void 0&&(i=this.closestIndexOf(e));let s=this.swatches;const o=this.lastIndex;let a=i;r===void 0&&(r=_t(e));const c=l=>fi(e,l)>=n;return r===-1&&(s=this.reversedSwatches,a=o-a),qr(s,c,a,o)}get(e){return this.swatches[e]||this.swatches[mt(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let n=this.swatches.indexOf(e);if(n!==-1)return this.closestIndexCache.set(e.relativeLuminance,n),n;const i=this.swatches.reduce((r,s)=>Math.abs(s.relativeLuminance-e.relativeLuminance)<Math.abs(r.relativeLuminance-e.relativeLuminance)?s:r);return n=this.swatches.indexOf(i),this.closestIndexCache.set(e.relativeLuminance,n),n}static saturationBump(e,n){const r=Oo(e).s,s=Oo(n);if(s.s<r){const o=new Sn(s.h,r,s.l);return Pu(o)}return n}static ramp(e){const n=e/100;return n>.5?(n-.5)/.5:2*n}static createHighResolutionPalette(e){const n=[],i=Hu(re.fromObject(e).roundToPrecision(4)),r=Ar(new ce(0,i.a,i.b)).clamp().roundToPrecision(4),s=Ar(new ce(50,i.a,i.b)).clamp().roundToPrecision(4),o=Ar(new ce(100,i.a,i.b)).clamp().roundToPrecision(4),a=new re(0,0,0),c=new re(1,1,1),l=o.equalValue(c)?0:14,u=r.equalValue(a)?0:14;for(let d=100+l;d>=0-u;d-=.5){let f;if(d<0){const p=d/u+1;f=Wn(p,a,r)}else if(d<=50)f=Wn(qe.ramp(d),r,s);else if(d<=100)f=Wn(qe.ramp(d),s,o);else{const p=(d-100)/l;f=Wn(p,o,c)}f=qe.saturationBump(s,f).roundToPrecision(4),n.push(ze.from(f))}return new qe(e,n)}static adjustEnd(e,n,i,r){const s=r===-1?n.swatches:n.reversedSwatches,o=l=>{const u=n.closestIndexOf(l);return r===1?n.lastIndex-u:u};r===1&&i.reverse();const a=e(i[i.length-2]);if(me(fi(i[i.length-1],i[i.length-2]),2)<a){i.pop();const l=n.colorContrast(s[n.lastIndex],a,void 0,r),u=o(l),d=o(i[i.length-2]),f=u-d;let p=1;for(let m=i.length-f-1;m<i.length;m++){const k=o(i[m]),N=m===i.length-1?n.lastIndex:k+p;i[m]=s[N],p++}}r===1&&i.reverse()}static createColorPaletteByContrast(e,n){const i=qe.createHighResolutionPalette(e),r=a=>{const c=n.stepContrast+n.stepContrast*(1-a.relativeLuminance)*n.stepContrastRamp;return me(c,2)},s=[];let o=n.preserveSource?e:i.swatches[0];s.push(o);do{const a=r(o);o=i.colorContrast(o,a,void 0,1),s.push(o)}while(o.relativeLuminance>0);if(n.preserveSource){o=e;do{const a=r(o);o=i.colorContrast(o,a,void 0,-1),s.unshift(o)}while(o.relativeLuminance<1)}return this.adjustEnd(r,i,s,-1),n.preserveSource&&this.adjustEnd(r,i,s,1),s}static from(e,n){const i=n===void 0?Po:Object.assign(Object.assign({},Po),n);return new qe(e,Object.freeze(qe.createColorPaletteByContrast(e,i)))}}const gi=ze.create(1,1,1),ks=ze.create(0,0,0),Yu=ze.create(.5,.5,.5),Rr=zt("#0078D4"),Xu=ze.create(Rr.r,Rr.g,Rr.b);function nl(t,e,n,i,r){const s=u=>u.contrast(gi)>=r?gi:ks,o=s(t),a=s(e),c=o.relativeLuminance===a.relativeLuminance?o:s(n),l=s(i);return{rest:o,hover:a,active:c,focus:l}}class Ri{constructor(e,n,i,r){this.toColorString=()=>this.cssGradient,this.contrast=fi.bind(null,this),this.createCSS=this.toColorString,this.color=new re(e,n,i),this.cssGradient=r,this.relativeLuminance=tl(this.color),this.r=e,this.g=n,this.b=i}static fromObject(e,n){return new Ri(e.r,e.g,e.b,n)}}const Qu=new re(0,0,0),Ju=new re(1,1,1);function il(t,e,n,i,r,s,o,a,c=10,l=!1){const u=t.closestIndexOf(e);a===void 0&&(a=_t(e));function d(P){if(l){const R=t.closestIndexOf(e),_=t.get(R),Q=P.relativeLuminance<e.relativeLuminance?Qu:Ju,we=Lu(zt(P.toColorString()),zt(_.toColorString()),Q).roundToPrecision(2),$e=Uu(zt(e.toColorString()),we);return ze.from($e)}else return P}const f=u+a*n,p=f+a*(i-n),m=f+a*(r-n),k=f+a*(s-n),N=a===-1?0:100-c,A=a===-1?c:100;function O(P,R){const _=t.get(P);if(R){const Q=t.get(P+a*o),we=a===-1?Q:_,$e=a===-1?_:Q,Ki=`linear-gradient(${d(we).toColorString()} ${N}%, ${d($e).toColorString()} ${A}%)`;return Ri.fromObject(we,Ki)}else return d(_)}return{rest:O(f,!0),hover:O(p,!0),active:O(m,!1),focus:O(k,!0)}}function Ku(t,e,n,i,r,s,o,a){const c=t.closestIndexOf(e),l=_t(e),u=c+l*n,d=u+l*(i-n),f=u+l*(r-n),p=u+l*(s-n),m=`calc(100% - ${a})`;function k(N,A){const O=t.get(N);if(A){const P=t.get(N+l*o),R=`linear-gradient(${O.toColorString()} ${m}, ${P.toColorString()} ${m}, ${P.toColorString()})`;return Ri.fromObject(O,R)}else return O}return{rest:k(u,!0),hover:k(d,!0),active:k(f,!1),focus:k(p,!0)}}function eh(t,e,n){return t.colorContrast(e,n)}function Ut(t,e,n,i,r,s,o,a){a==null&&(a=_t(e));const c=t.closestIndexOf(t.colorContrast(e,n));return{rest:t.get(c+a*i),hover:t.get(c+a*r),active:t.get(c+a*s),focus:t.get(c+a*o)}}function th(t,e,n,i,r,s,o,a=void 0,c,l,u,d,f,p=void 0){return An(e)?Ut(t,e,c,l,u,d,f,p):Ut(t,e,n,i,r,s,o,a)}function nh(t,e,n){return t.get(t.closestIndexOf(e)+_t(e)*n)}function at(t,e,n,i,r,s,o){const a=t.closestIndexOf(e);return o==null&&(o=_t(e)),{rest:t.get(a+o*n),hover:t.get(a+o*i),active:t.get(a+o*r),focus:t.get(a+o*s)}}function $s(t,e,n,i,r,s,o=void 0,a,c,l,u,d=void 0){return An(e)?at(t,e,a,c,l,u,d):at(t,e,n,i,r,s,o)}function ih(t,e){return An(e)?gi:ks}function rh(t,e,n){return An(e)?ks:gi}function sh(t){return ze.create(t,t,t)}var Wr;(function(t){t[t.LightMode=.98]="LightMode",t[t.DarkMode=.15]="DarkMode"})(Wr||(Wr={}));function Rn(t,e){return t.closestIndexOf(sh(e))}function oh(t,e){return t.get(Rn(t,e))}function ah(t,e,n){return t.get(Rn(t,e)+n)}function rl(t,e,n){return t.get(Rn(t,e)+n*-1)}function lh(t,e,n){return t.get(Rn(t,e)+n*-1*2)}function ch(t,e,n){return t.get(Rn(t,e)+n*-1*3)}const uh={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},{create:g}=ee;function y(t){return ee.create({name:t,cssCustomPropertyName:null})}const Er=g("direction").withDefault(jr.ltr),Ei=g("disabled-opacity").withDefault(.3),hh=g("base-height-multiplier").withDefault(8),hg=g("base-horizontal-spacing-multiplier").withDefault(3),sl=g("density").withDefault(0),Le=g("design-unit").withDefault(4),jt=g("control-corner-radius").withDefault(4),ol=g("layer-corner-radius").withDefault(8),Ce=g("stroke-width").withDefault(1),rt=g("focus-stroke-width").withDefault(2),Ge=g("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),dh=g("font-weight").withDefault(uh.Normal);function Ke(t){return e=>{const n=t.getValueFor(e),i=dh.getValueFor(e);if(n.endsWith("px")){const r=Number.parseFloat(n.replace("px",""));if(r<=12)return`"wght" ${i}, "opsz" 8`;if(r>24)return`"wght" ${i}, "opsz" 36`}return`"wght" ${i}, "opsz" 10.5`}}const al=g("type-ramp-base-font-size").withDefault("14px"),fh=g("type-ramp-base-line-height").withDefault("20px"),ph=g("type-ramp-base-font-variations").withDefault(Ke(al)),ll=g("type-ramp-minus-1-font-size").withDefault("12px"),gh=g("type-ramp-minus-1-line-height").withDefault("16px"),bh=g("type-ramp-minus-1-font-variations").withDefault(Ke(ll)),cl=g("type-ramp-minus-2-font-size").withDefault("10px"),mh=g("type-ramp-minus-2-line-height").withDefault("14px"),vh=g("type-ramp-minus-2-font-variations").withDefault(Ke(cl)),ul=g("type-ramp-plus-1-font-size").withDefault("16px"),yh=g("type-ramp-plus-1-line-height").withDefault("22px"),wh=g("type-ramp-plus-1-font-variations").withDefault(Ke(ul)),hl=g("type-ramp-plus-2-font-size").withDefault("20px"),xh=g("type-ramp-plus-2-line-height").withDefault("26px"),kh=g("type-ramp-plus-2-font-variations").withDefault(Ke(hl)),dl=g("type-ramp-plus-3-font-size").withDefault("24px"),$h=g("type-ramp-plus-3-line-height").withDefault("32px"),Sh=g("type-ramp-plus-3-font-variations").withDefault(Ke(dl)),fl=g("type-ramp-plus-4-font-size").withDefault("28px"),_h=g("type-ramp-plus-4-line-height").withDefault("36px"),Th=g("type-ramp-plus-4-font-variations").withDefault(Ke(fl)),pl=g("type-ramp-plus-5-font-size").withDefault("32px"),Fh=g("type-ramp-plus-5-line-height").withDefault("40px"),Ch=g("type-ramp-plus-5-font-variations").withDefault(Ke(pl)),gl=g("type-ramp-plus-6-font-size").withDefault("40px"),Dh=g("type-ramp-plus-6-line-height").withDefault("52px"),Ah=g("type-ramp-plus-6-font-variations").withDefault(Ke(gl)),Qt=g("base-layer-luminance").withDefault(Wr.LightMode),No=y("accent-fill-rest-delta").withDefault(0),Mo=y("accent-fill-hover-delta").withDefault(-2),zo=y("accent-fill-active-delta").withDefault(-5),Bo=y("accent-fill-focus-delta").withDefault(0),Rh=y("accent-foreground-rest-delta").withDefault(0),Eh=y("accent-foreground-hover-delta").withDefault(3),Ih=y("accent-foreground-active-delta").withDefault(-8),Oh=y("accent-foreground-focus-delta").withDefault(0),Vh=y("neutral-fill-rest-delta").withDefault(-1),Lh=y("neutral-fill-hover-delta").withDefault(1),Ph=y("neutral-fill-active-delta").withDefault(0),Nh=y("neutral-fill-focus-delta").withDefault(0),Mh=y("neutral-fill-input-rest-delta").withDefault(-1),zh=y("neutral-fill-input-hover-delta").withDefault(1),Bh=y("neutral-fill-input-active-delta").withDefault(0),Hh=y("neutral-fill-input-focus-delta").withDefault(-2),Gn=y("neutral-fill-input-alt-rest-delta").withDefault(2),Ho=y("neutral-fill-input-alt-hover-delta").withDefault(4),Uo=y("neutral-fill-input-alt-active-delta").withDefault(6),jo=y("neutral-fill-input-alt-focus-delta").withDefault(2),wt=y("neutral-fill-layer-rest-delta").withDefault(-2),Uh=y("neutral-fill-layer-hover-delta").withDefault(-3),jh=y("neutral-fill-layer-active-delta").withDefault(-3),Zn=y("neutral-fill-layer-alt-rest-delta").withDefault(-1),qh=y("neutral-fill-secondary-rest-delta").withDefault(3),Wh=y("neutral-fill-secondary-hover-delta").withDefault(2),Gh=y("neutral-fill-secondary-active-delta").withDefault(1),Zh=y("neutral-fill-secondary-focus-delta").withDefault(3),Yh=y("neutral-fill-stealth-rest-delta").withDefault(0),Xh=y("neutral-fill-stealth-hover-delta").withDefault(3),Qh=y("neutral-fill-stealth-active-delta").withDefault(2),Jh=y("neutral-fill-stealth-focus-delta").withDefault(0),Kh=y("neutral-fill-strong-rest-delta").withDefault(0),ed=y("neutral-fill-strong-hover-delta").withDefault(8),td=y("neutral-fill-strong-active-delta").withDefault(-5),nd=y("neutral-fill-strong-focus-delta").withDefault(0),id=y("neutral-stroke-rest-delta").withDefault(8),rd=y("neutral-stroke-hover-delta").withDefault(12),sd=y("neutral-stroke-active-delta").withDefault(6),od=y("neutral-stroke-focus-delta").withDefault(8),bl=y("neutral-stroke-control-rest-delta").withDefault(3),ml=y("neutral-stroke-control-hover-delta").withDefault(5),vl=y("neutral-stroke-control-active-delta").withDefault(5),yl=y("neutral-stroke-control-focus-delta").withDefault(5),ad=y("neutral-stroke-divider-rest-delta").withDefault(4),qo=y("neutral-stroke-layer-rest-delta").withDefault(3),ld=y("neutral-stroke-layer-hover-delta").withDefault(3),cd=y("neutral-stroke-layer-active-delta").withDefault(3),ud=y("neutral-stroke-strong-hover-delta").withDefault(0),hd=y("neutral-stroke-strong-active-delta").withDefault(0),dd=y("neutral-stroke-strong-focus-delta").withDefault(0),fd=g("neutral-base-color").withDefault(Yu),Z=y("neutral-palette").withDefault(t=>_n.from(fd.getValueFor(t))),pd=g("accent-base-color").withDefault(Xu),Ss=y("accent-palette").withDefault(t=>_n.from(pd.getValueFor(t))),gd=y("neutral-layer-card-container-recipe").withDefault({evaluate:t=>rl(Z.getValueFor(t),Qt.getValueFor(t),wt.getValueFor(t))});g("neutral-layer-card-container").withDefault(t=>gd.getValueFor(t).evaluate(t));const bd=y("neutral-layer-floating-recipe").withDefault({evaluate:t=>ah(Z.getValueFor(t),Qt.getValueFor(t),wt.getValueFor(t))}),md=g("neutral-layer-floating").withDefault(t=>bd.getValueFor(t).evaluate(t)),vd=y("neutral-layer-1-recipe").withDefault({evaluate:t=>oh(Z.getValueFor(t),Qt.getValueFor(t))}),yd=g("neutral-layer-1").withDefault(t=>vd.getValueFor(t).evaluate(t)),wd=y("neutral-layer-2-recipe").withDefault({evaluate:t=>rl(Z.getValueFor(t),Qt.getValueFor(t),wt.getValueFor(t))});g("neutral-layer-2").withDefault(t=>wd.getValueFor(t).evaluate(t));const xd=y("neutral-layer-3-recipe").withDefault({evaluate:t=>lh(Z.getValueFor(t),Qt.getValueFor(t),wt.getValueFor(t))});g("neutral-layer-3").withDefault(t=>xd.getValueFor(t).evaluate(t));const kd=y("neutral-layer-4-recipe").withDefault({evaluate:t=>ch(Z.getValueFor(t),Qt.getValueFor(t),wt.getValueFor(t))});g("neutral-layer-4").withDefault(t=>kd.getValueFor(t).evaluate(t));const j=g("fill-color").withDefault(t=>yd.getValueFor(t));var bi;(function(t){t[t.normal=4.5]="normal",t[t.large=3]="large"})(bi||(bi={}));const Ii=y("accent-fill-recipe").withDefault({evaluate:(t,e)=>th(Ss.getValueFor(t),e||j.getValueFor(t),5,No.getValueFor(t),Mo.getValueFor(t),zo.getValueFor(t),Bo.getValueFor(t),void 0,8,No.getValueFor(t),Mo.getValueFor(t),zo.getValueFor(t),Bo.getValueFor(t),void 0)}),Pe=g("accent-fill-rest").withDefault(t=>Ii.getValueFor(t).evaluate(t).rest),xt=g("accent-fill-hover").withDefault(t=>Ii.getValueFor(t).evaluate(t).hover),kt=g("accent-fill-active").withDefault(t=>Ii.getValueFor(t).evaluate(t).active),Oi=g("accent-fill-focus").withDefault(t=>Ii.getValueFor(t).evaluate(t).focus),Vi=y("foreground-on-accent-recipe").withDefault({evaluate:t=>nl(Pe.getValueFor(t),xt.getValueFor(t),kt.getValueFor(t),Oi.getValueFor(t),bi.normal)}),wl=g("foreground-on-accent-rest").withDefault(t=>Vi.getValueFor(t).evaluate(t).rest),$d=g("foreground-on-accent-hover").withDefault(t=>Vi.getValueFor(t).evaluate(t).hover),Sd=g("foreground-on-accent-active").withDefault(t=>Vi.getValueFor(t).evaluate(t).active);g("foreground-on-accent-focus").withDefault(t=>Vi.getValueFor(t).evaluate(t).focus);const Li=y("accent-foreground-recipe").withDefault({evaluate:(t,e)=>Ut(Ss.getValueFor(t),e||j.getValueFor(t),9.5,Rh.getValueFor(t),Eh.getValueFor(t),Ih.getValueFor(t),Oh.getValueFor(t))}),_d=g("accent-foreground-rest").withDefault(t=>Li.getValueFor(t).evaluate(t).rest),Td=g("accent-foreground-hover").withDefault(t=>Li.getValueFor(t).evaluate(t).hover),Fd=g("accent-foreground-active").withDefault(t=>Li.getValueFor(t).evaluate(t).active);g("accent-foreground-focus").withDefault(t=>Li.getValueFor(t).evaluate(t).focus);const Pi=y("accent-stroke-control-recipe").withDefault({evaluate:(t,e)=>il(Z.getValueFor(t),e||j.getValueFor(t),-3,-3,-3,-3,10,1,void 0,!0)}),Cd=g("accent-stroke-control-rest").withDefault(t=>Pi.getValueFor(t).evaluate(t,Pe.getValueFor(t)).rest),Dd=g("accent-stroke-control-hover").withDefault(t=>Pi.getValueFor(t).evaluate(t,xt.getValueFor(t)).hover),Ad=g("accent-stroke-control-active").withDefault(t=>Pi.getValueFor(t).evaluate(t,kt.getValueFor(t)).active);g("accent-stroke-control-focus").withDefault(t=>Pi.getValueFor(t).evaluate(t,Oi.getValueFor(t)).focus);const Ni=y("neutral-fill-recipe").withDefault({evaluate:(t,e)=>$s(Z.getValueFor(t),e||j.getValueFor(t),Vh.getValueFor(t),Lh.getValueFor(t),Ph.getValueFor(t),Nh.getValueFor(t),void 0,2,3,1,2,void 0)}),Yn=g("neutral-fill-rest").withDefault(t=>Ni.getValueFor(t).evaluate(t).rest),Wo=g("neutral-fill-hover").withDefault(t=>Ni.getValueFor(t).evaluate(t).hover),Go=g("neutral-fill-active").withDefault(t=>Ni.getValueFor(t).evaluate(t).active);g("neutral-fill-focus").withDefault(t=>Ni.getValueFor(t).evaluate(t).focus);const Jt=y("neutral-fill-input-recipe").withDefault({evaluate:(t,e)=>$s(Z.getValueFor(t),e||j.getValueFor(t),Mh.getValueFor(t),zh.getValueFor(t),Bh.getValueFor(t),Hh.getValueFor(t),void 0,2,3,1,0,void 0)}),dg=g("neutral-fill-input-rest").withDefault(t=>Jt.getValueFor(t).evaluate(t).rest),fg=g("neutral-fill-input-hover").withDefault(t=>Jt.getValueFor(t).evaluate(t).hover);g("neutral-fill-input-active").withDefault(t=>Jt.getValueFor(t).evaluate(t).active);const pg=g("neutral-fill-input-focus").withDefault(t=>Jt.getValueFor(t).evaluate(t).focus),Mi=y("neutral-fill-input-alt-recipe").withDefault({evaluate:(t,e)=>$s(Z.getValueFor(t),e||j.getValueFor(t),Gn.getValueFor(t),Ho.getValueFor(t),Uo.getValueFor(t),jo.getValueFor(t),1,Gn.getValueFor(t),Gn.getValueFor(t)-Ho.getValueFor(t),Gn.getValueFor(t)-Uo.getValueFor(t),jo.getValueFor(t),1)}),Rd=g("neutral-fill-input-alt-rest").withDefault(t=>Mi.getValueFor(t).evaluate(t).rest),Ed=g("neutral-fill-input-alt-hover").withDefault(t=>Mi.getValueFor(t).evaluate(t).hover),Id=g("neutral-fill-input-alt-active").withDefault(t=>Mi.getValueFor(t).evaluate(t).active),Od=g("neutral-fill-input-alt-focus").withDefault(t=>Mi.getValueFor(t).evaluate(t).focus),zi=y("neutral-fill-layer-recipe").withDefault({evaluate:(t,e)=>at(Z.getValueFor(t),e||j.getValueFor(t),wt.getValueFor(t),Uh.getValueFor(t),jh.getValueFor(t),wt.getValueFor(t),1)}),gg=g("neutral-fill-layer-rest").withDefault(t=>zi.getValueFor(t).evaluate(t).rest);g("neutral-fill-layer-hover").withDefault(t=>zi.getValueFor(t).evaluate(t).hover);g("neutral-fill-layer-active").withDefault(t=>zi.getValueFor(t).evaluate(t).active);const Vd=y("neutral-fill-layer-alt-recipe").withDefault({evaluate:(t,e)=>at(Z.getValueFor(t),e||j.getValueFor(t),Zn.getValueFor(t),Zn.getValueFor(t),Zn.getValueFor(t),Zn.getValueFor(t))}),bg=g("neutral-fill-layer-alt-rest").withDefault(t=>Vd.getValueFor(t).evaluate(t).rest),Kt=y("neutral-fill-secondary-recipe").withDefault({evaluate:(t,e)=>at(Z.getValueFor(t),e||j.getValueFor(t),qh.getValueFor(t),Wh.getValueFor(t),Gh.getValueFor(t),Zh.getValueFor(t))}),Gr=g("neutral-fill-secondary-rest").withDefault(t=>Kt.getValueFor(t).evaluate(t).rest),xl=g("neutral-fill-secondary-hover").withDefault(t=>Kt.getValueFor(t).evaluate(t).hover),Ld=g("neutral-fill-secondary-active").withDefault(t=>Kt.getValueFor(t).evaluate(t).active),Pd=g("neutral-fill-secondary-focus").withDefault(t=>Kt.getValueFor(t).evaluate(t).focus),Bi=y("neutral-fill-stealth-recipe").withDefault({evaluate:(t,e)=>at(Z.getValueFor(t),e||j.getValueFor(t),Yh.getValueFor(t),Xh.getValueFor(t),Qh.getValueFor(t),Jh.getValueFor(t))}),Tn=g("neutral-fill-stealth-rest").withDefault(t=>Bi.getValueFor(t).evaluate(t).rest),mi=g("neutral-fill-stealth-hover").withDefault(t=>Bi.getValueFor(t).evaluate(t).hover),vi=g("neutral-fill-stealth-active").withDefault(t=>Bi.getValueFor(t).evaluate(t).active),Nd=g("neutral-fill-stealth-focus").withDefault(t=>Bi.getValueFor(t).evaluate(t).focus),Hi=y("neutral-fill-strong-recipe").withDefault({evaluate:(t,e)=>Ut(Z.getValueFor(t),e||j.getValueFor(t),4.5,Kh.getValueFor(t),ed.getValueFor(t),td.getValueFor(t),nd.getValueFor(t))}),mg=g("neutral-fill-strong-rest").withDefault(t=>Hi.getValueFor(t).evaluate(t).rest),vg=g("neutral-fill-strong-hover").withDefault(t=>Hi.getValueFor(t).evaluate(t).hover),yg=g("neutral-fill-strong-active").withDefault(t=>Hi.getValueFor(t).evaluate(t).active);g("neutral-fill-strong-focus").withDefault(t=>Hi.getValueFor(t).evaluate(t).focus);const Ui=y("neutral-foreground-recipe").withDefault({evaluate:(t,e)=>Ut(Z.getValueFor(t),e||j.getValueFor(t),16,0,-19,-30,0)}),qt=g("neutral-foreground-rest").withDefault(t=>Ui.getValueFor(t).evaluate(t).rest),wg=g("neutral-foreground-hover").withDefault(t=>Ui.getValueFor(t).evaluate(t).hover),xg=g("neutral-foreground-active").withDefault(t=>Ui.getValueFor(t).evaluate(t).active);g("neutral-foreground-focus").withDefault(t=>Ui.getValueFor(t).evaluate(t).focus);const En=y("neutral-foreground-hint-recipe").withDefault({evaluate:(t,e)=>eh(Z.getValueFor(t),e||j.getValueFor(t),4.5)}),Zo=g("neutral-foreground-hint").withDefault(t=>En.getValueFor(t).evaluate(t)),ji=y("neutral-stroke-recipe").withDefault({evaluate:(t,e)=>at(Z.getValueFor(t),e||j.getValueFor(t),id.getValueFor(t),rd.getValueFor(t),sd.getValueFor(t),od.getValueFor(t))}),Zr=g("neutral-stroke-rest").withDefault(t=>ji.getValueFor(t).evaluate(t).rest),Md=g("neutral-stroke-hover").withDefault(t=>ji.getValueFor(t).evaluate(t).hover),zd=g("neutral-stroke-active").withDefault(t=>ji.getValueFor(t).evaluate(t).active);g("neutral-stroke-focus").withDefault(t=>ji.getValueFor(t).evaluate(t).focus);const qi=y("neutral-stroke-control-recipe").withDefault({evaluate:(t,e)=>il(Z.getValueFor(t),e||j.getValueFor(t),bl.getValueFor(t),ml.getValueFor(t),vl.getValueFor(t),yl.getValueFor(t),5)}),Bd=g("neutral-stroke-control-rest").withDefault(t=>qi.getValueFor(t).evaluate(t).rest),Hd=g("neutral-stroke-control-hover").withDefault(t=>qi.getValueFor(t).evaluate(t).hover),Ud=g("neutral-stroke-control-active").withDefault(t=>qi.getValueFor(t).evaluate(t).active);g("neutral-stroke-control-focus").withDefault(t=>qi.getValueFor(t).evaluate(t).focus);const jd=y("neutral-stroke-divider-recipe").withDefault({evaluate:(t,e)=>nh(Z.getValueFor(t),e||j.getValueFor(t),ad.getValueFor(t))}),kg=g("neutral-stroke-divider-rest").withDefault(t=>jd.getValueFor(t).evaluate(t)),Wi=y("neutral-stroke-input-recipe").withDefault({evaluate:(t,e)=>Ku(Z.getValueFor(t),e||j.getValueFor(t),bl.getValueFor(t),ml.getValueFor(t),vl.getValueFor(t),yl.getValueFor(t),20,Ce.getValueFor(t)+"px")}),$g=g("neutral-stroke-input-rest").withDefault(t=>Wi.getValueFor(t).evaluate(t).rest),Sg=g("neutral-stroke-input-hover").withDefault(t=>Wi.getValueFor(t).evaluate(t).hover);g("neutral-stroke-input-active").withDefault(t=>Wi.getValueFor(t).evaluate(t).active);g("neutral-stroke-input-focus").withDefault(t=>Wi.getValueFor(t).evaluate(t).focus);const _s=y("neutral-stroke-layer-recipe").withDefault({evaluate:(t,e)=>at(Z.getValueFor(t),e||j.getValueFor(t),qo.getValueFor(t),ld.getValueFor(t),cd.getValueFor(t),qo.getValueFor(t))}),qd=g("neutral-stroke-layer-rest").withDefault(t=>_s.getValueFor(t).evaluate(t).rest);g("neutral-stroke-layer-hover").withDefault(t=>_s.getValueFor(t).evaluate(t).hover);g("neutral-stroke-layer-active").withDefault(t=>_s.getValueFor(t).evaluate(t).active);const Gi=y("neutral-stroke-strong-recipe").withDefault({evaluate:(t,e)=>Ut(Z.getValueFor(t),e||j.getValueFor(t),5.5,0,ud.getValueFor(t),hd.getValueFor(t),dd.getValueFor(t))}),Wd=g("neutral-stroke-strong-rest").withDefault(t=>Gi.getValueFor(t).evaluate(t).rest),Gd=g("neutral-stroke-strong-hover").withDefault(t=>Gi.getValueFor(t).evaluate(t).hover),Zd=g("neutral-stroke-strong-active").withDefault(t=>Gi.getValueFor(t).evaluate(t).active);g("neutral-stroke-strong-focus").withDefault(t=>Gi.getValueFor(t).evaluate(t).focus);const Yd=y("focus-stroke-outer-recipe").withDefault({evaluate:t=>ih(Z.getValueFor(t),j.getValueFor(t))}),Ts=g("focus-stroke-outer").withDefault(t=>Yd.getValueFor(t).evaluate(t)),Xd=y("focus-stroke-inner-recipe").withDefault({evaluate:t=>rh(Ss.getValueFor(t),j.getValueFor(t),Ts.getValueFor(t))}),Qd=g("focus-stroke-inner").withDefault(t=>Xd.getValueFor(t).evaluate(t)),Zi=y("foreground-on-accent-large-recipe").withDefault({evaluate:t=>nl(Pe.getValueFor(t),xt.getValueFor(t),kt.getValueFor(t),Oi.getValueFor(t),bi.large)});g("foreground-on-accent-rest-large").withDefault(t=>Zi.getValueFor(t).evaluate(t).rest);g("foreground-on-accent-hover-large").withDefault(t=>Zi.getValueFor(t).evaluate(t,xt.getValueFor(t)).hover);g("foreground-on-accent-active-large").withDefault(t=>Zi.getValueFor(t).evaluate(t,kt.getValueFor(t)).active);g("foreground-on-accent-focus-large").withDefault(t=>Zi.getValueFor(t).evaluate(t,Oi.getValueFor(t)).focus);const Jd=g("neutral-fill-inverse-rest-delta").withDefault(0),Kd=g("neutral-fill-inverse-hover-delta").withDefault(-3),ef=g("neutral-fill-inverse-active-delta").withDefault(7),tf=g("neutral-fill-inverse-focus-delta").withDefault(0);function nf(t,e,n,i,r,s){const o=_t(e),a=t.closestIndexOf(t.colorContrast(e,14)),c=a+o*Math.abs(n-i),l=o===1?n<i:o*n>o*i;let u,d;return l?(u=a,d=c):(u=c,d=a),{rest:t.get(u),hover:t.get(d),active:t.get(u+o*r),focus:t.get(u+o*s)}}const Yi=y("neutral-fill-inverse-recipe").withDefault({evaluate:(t,e)=>nf(Z.getValueFor(t),e||j.getValueFor(t),Jd.getValueFor(t),Kd.getValueFor(t),ef.getValueFor(t),tf.getValueFor(t))});g("neutral-fill-inverse-rest").withDefault(t=>Yi.getValueFor(t).evaluate(t).rest);g("neutral-fill-inverse-hover").withDefault(t=>Yi.getValueFor(t).evaluate(t).hover);g("neutral-fill-inverse-active").withDefault(t=>Yi.getValueFor(t).evaluate(t).active);g("neutral-fill-inverse-focus").withDefault(t=>Yi.getValueFor(t).evaluate(t).focus);const Xi=Ie`
  font-family: ${Ge};
  font-size: ${al};
  line-height: ${fh};
  font-weight: initial;
  font-variation-settings: ${ph};
`,_g=Ie`
  font-family: ${Ge};
  font-size: ${ll};
  line-height: ${gh};
  font-weight: initial;
  font-variation-settings: ${bh};
`;Ie`
  font-family: ${Ge};
  font-size: ${cl};
  line-height: ${mh};
  font-weight: initial;
  font-variation-settings: ${vh};
`;Ie`
  font-family: ${Ge};
  font-size: ${ul};
  line-height: ${yh};
  font-weight: initial;
  font-variation-settings: ${wh};
`;Ie`
  font-family: ${Ge};
  font-size: ${hl};
  line-height: ${xh};
  font-weight: initial;
  font-variation-settings: ${kh};
`;Ie`
  font-family: ${Ge};
  font-size: ${dl};
  line-height: ${$h};
  font-weight: initial;
  font-variation-settings: ${Sh};
`;Ie`
  font-family: ${Ge};
  font-size: ${fl};
  line-height: ${_h};
  font-weight: initial;
  font-variation-settings: ${Th};
`;Ie`
  font-family: ${Ge};
  font-size: ${pl};
  line-height: ${Fh};
  font-weight: initial;
  font-variation-settings: ${Ch};
`;Ie`
  font-family: ${Ge};
  font-size: ${gl};
  line-height: ${Dh};
  font-weight: initial;
  font-variation-settings: ${Ah};
`;const Qi=Ie`
  outline: calc(${rt} * 1px) solid ${Ts};
  outline-offset: calc(${rt} * -1px);
`,rf=Ie`
  outline: calc(${rt} * 1px) solid ${Ts};
  outline-offset: calc(${Ce} * 1px);
`,ke=Ie`(${hh} + ${sl}) * ${Le}`;function Ji(t,e,n,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(s=(r<3?o(s):r>3?o(e,n,s):o(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s}class sf{constructor(e,n){this.cache=new WeakMap,this.ltr=e,this.rtl=n}bind(e){this.attach(e)}unbind(e){const n=this.cache.get(e);n&&Er.unsubscribe(n)}attach(e){const n=this.cache.get(e)||new of(this.ltr,this.rtl,e),i=Er.getValueFor(e);Er.subscribe(n),n.attach(i),this.cache.set(e,n)}}class of{constructor(e,n,i){this.ltr=e,this.rtl=n,this.source=i,this.attached=null}handleChange({target:e,token:n}){this.attach(n.getValueFor(this.source))}attach(e){this.attached!==this[e]&&(this.attached!==null&&this.source.$fastController.removeStyles(this.attached),this.attached=this[e],this.attached!==null&&this.source.$fastController.addStyles(this.attached))}}const Tt=ee.create({name:"elevation-shadow",cssCustomPropertyName:null}).withDefault({evaluate:(t,e,n)=>{let i=.12,r=.14;e>16&&(i=.2,r=.24);const s=`0 0 2px rgba(0, 0, 0, ${i})`,o=`0 calc(${e} * 0.5px) calc((${e} * 1px)) rgba(0, 0, 0, ${r})`;return`${s}, ${o}`}}),af=ee.create("elevation-shadow-card-rest-size").withDefault(4),lf=ee.create("elevation-shadow-card-hover-size").withDefault(8),cf=ee.create("elevation-shadow-card-active-size").withDefault(0),uf=ee.create("elevation-shadow-card-focus-size").withDefault(8),hf=ee.create("elevation-shadow-card-rest").withDefault(t=>Tt.getValueFor(t).evaluate(t,af.getValueFor(t)));ee.create("elevation-shadow-card-hover").withDefault(t=>Tt.getValueFor(t).evaluate(t,lf.getValueFor(t)));ee.create("elevation-shadow-card-active").withDefault(t=>Tt.getValueFor(t).evaluate(t,cf.getValueFor(t)));ee.create("elevation-shadow-card-focus").withDefault(t=>Tt.getValueFor(t).evaluate(t,uf.getValueFor(t)));const df=ee.create("elevation-shadow-tooltip-size").withDefault(16),Tg=ee.create("elevation-shadow-tooltip").withDefault(t=>Tt.getValueFor(t).evaluate(t,df.getValueFor(t))),ff=ee.create("elevation-shadow-flyout-size").withDefault(32),pf=ee.create("elevation-shadow-flyout").withDefault(t=>Tt.getValueFor(t).evaluate(t,ff.getValueFor(t))),gf=ee.create("elevation-shadow-dialog-size").withDefault(128),Fg=ee.create("elevation-shadow-dialog").withDefault(t=>Tt.getValueFor(t).evaluate(t,gf.getValueFor(t))),bf=(t,e,n,i="[disabled]")=>X`
    ${Xt("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${Xi}
      height: calc(${ke} * 1px);
      min-width: calc(${ke} * 1px);
      color: ${qt};
      border-radius: calc(${jt} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${Ce} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${Le} * 2 * ${sl})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${Ae} {
      ${Qi}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `,kl=(t,e,n,i="[disabled]")=>X`
    .control {
      background: padding-box linear-gradient(${Yn}, ${Yn}),
        border-box ${Bd};
    }

    :host(${n}:hover) .control {
      background: padding-box linear-gradient(${Wo}, ${Wo}),
        border-box ${Hd};
    }

    :host(${n}:active) .control {
      background: padding-box linear-gradient(${Go}, ${Go}),
        border-box ${Ud};
    }

    :host(${i}) .control {
      background: padding-box linear-gradient(${Yn}, ${Yn}),
        border-box ${Zr};
    }
  `.withBehaviors(Me(X`
        .control {
          background: ${b.ButtonFace};
          border-color: ${b.ButtonText};
          color: ${b.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          forced-color-adjust: none;
          background: ${b.HighlightText};
          border-color: ${b.Highlight};
          color: ${b.Highlight};
        }

        :host(${i}) .control {
          background: transparent;
          border-color: ${b.GrayText};
          color: ${b.GrayText};
        }

        .control:${Ae} {
          outline-color: ${b.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${b.LinkText};
          color: ${b.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${b.CanvasText};
          color: ${b.CanvasText};
        }
    `)),mf=(t,e,n,i="[disabled]")=>X`
    .control {
      background: padding-box linear-gradient(${Pe}, ${Pe}),
        border-box ${Cd};
      color: ${wl};
    }

    :host(${n}:hover) .control {
      background: padding-box linear-gradient(${xt}, ${xt}),
        border-box ${Dd};
      color: ${$d};
    }

    :host(${n}:active) .control {
      background: padding-box linear-gradient(${kt}, ${kt}),
        border-box ${Ad};
      color: ${Sd};
    }

    :host(${i}) .control {
      background: ${Pe};
    }

    .control:${Ae} {
      box-shadow: 0 0 0 calc(${rt} * 1px) ${Qd} inset !important;
    }
  `.withBehaviors(Me(X`
        .control {
          forced-color-adjust: none;
          background: ${b.Highlight};
          color: ${b.HighlightText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: ${b.HighlightText};
          border-color: ${b.Highlight};
          color: ${b.Highlight};
        }

        :host(${i}) .control {
          background: transparent;
          border-color: ${b.GrayText};
          color: ${b.GrayText};
        }

        .control:${Ae} {
          outline-color: ${b.CanvasText};
          box-shadow: 0 0 0 calc(${rt} * 1px) ${b.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${b.LinkText};
          color: ${b.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${b.ButtonFace};
          border-color: ${b.LinkText};
          color: ${b.LinkText};
        }
      `));const vf=(t,e,n,i="[disabled]")=>X`
    :host {
      color: ${_d};
    }

    .control {
      background: ${Tn};
    }

    :host(${n}:hover) .control {
      background: ${mi};
      color: ${Td};
    }

    :host(${n}:active) .control {
      background: ${vi};
      color: ${Fd};
    }

    :host(${i}) .control {
      background: ${Tn};
    }
  `.withBehaviors(Me(X`
        :host {
          color: ${b.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: transparent;
          border-color: ${b.ButtonText};
          color: ${b.ButtonText};
        }

        :host(${i}) .control {
          background: transparent;
          color: ${b.GrayText};
        }

        .control:${Ae} {
          outline-color: ${b.CanvasText};
        }

        :host([href]) .control {
          color: ${b.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${b.LinkText};
          color: ${b.LinkText};
        }
      `)),yf=(t,e,n,i="[disabled]")=>X`
    .control {
      background: transparent !important;
      border-color: ${Zr};
    }

    :host(${n}:hover) .control {
      border-color: ${Md};
    }

    :host(${n}:active) .control {
      border-color: ${zd};
    }

    :host(${i}) .control {
      background: transparent !important;
      border-color: ${Zr};
    }
  `.withBehaviors(Me(X`
        .control {
          border-color: ${b.ButtonText};
          color: ${b.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: ${b.HighlightText};
          border-color: ${b.Highlight};
          color: ${b.Highlight};
        }

        :host(${i}) .control {
          border-color: ${b.GrayText};
          color: ${b.GrayText};
        }

        .control:${Ae} {
          outline-color: ${b.CanvasText};
        }

        :host([href]) .control {
          border-color: ${b.LinkText};
          color: ${b.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${b.CanvasText};
          color: ${b.CanvasText};
        }
      `)),$l=(t,e,n,i="[disabled]")=>X`
    .control {
      background: ${Tn};
    }

    :host(${n}:hover) .control {
      background: ${mi};
    }

    :host(${n}:active) .control {
      background: ${vi};
    }

    :host(${i}) .control {
      background: ${Tn};
    }
  `.withBehaviors(Me(X`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${b.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: transparent;
          border-color: ${b.ButtonText};
          color: ${b.ButtonText};
        }

        :host(${i}) .control {
          background: transparent;
          color: ${b.GrayText};
        }
        
        .control:${Ae} {
          outline-color: ${b.CanvasText};
        }

        :host([href]) .control {
          color: ${b.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${b.LinkText};
          color: ${b.LinkText};
        }
      `)),Cg=ee.create("input-placeholder-rest").withDefault(t=>{const e=Jt.getValueFor(t);return En.getValueFor(t).evaluate(t,e.evaluate(t).rest)}),Dg=ee.create("input-placeholder-hover").withDefault(t=>{const e=Jt.getValueFor(t);return En.getValueFor(t).evaluate(t,e.evaluate(t).hover)}),wf=ee.create("input-filled-placeholder-rest").withDefault(t=>{const e=Kt.getValueFor(t);return En.getValueFor(t).evaluate(t,e.evaluate(t).rest)}),xf=ee.create("input-filled-placeholder-hover").withDefault(t=>{const e=Kt.getValueFor(t);return En.getValueFor(t).evaluate(t,e.evaluate(t).hover)});const kf=(t,e,n,i=":not([disabled]):not(:focus-within)")=>X`
  ${n} {
    background: ${Gr};
  }

  :host(${i}:hover) ${n} {
    background: ${xl};
  }

  :host(:not([disabled]):focus-within) ${n} {
    background: ${Pd};
  }

  :host([disabled]) ${n} {
    background: ${Gr};
  }

  .control::placeholder {
    color: ${wf};
  }

  :host(${i}:hover) .control::placeholder {
    color: ${xf};
  }
`,$f=(t,e,n,i=":not([disabled]):not(:focus-within)")=>X`
  :host {
    color: ${b.ButtonText};
  }

  ${n} {
    background: ${b.ButtonFace};
    border-color: ${b.ButtonText};
  }

  :host(${i}:hover) ${n},
  :host(:not([disabled]):focus-within) ${n} {
    border-color: ${b.Highlight};
  }

  :host([disabled]) ${n} {
    opacity: 1;
    background: ${b.ButtonFace};
    border-color: ${b.GrayText};
  }

  .control::placeholder,
  :host(${i}:hover) .control::placeholder {
    color: ${b.CanvasText};
  }

  :host(:not([disabled]):focus) ${n} {
    ${Qi}
    outline-color: ${b.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${b.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${b.GrayText};
  }
`;function tt(t,e){return new Eu("appearance",t,e)}const pt=":not([disabled])",et="[disabled]",Sf=(t,e)=>X`
    :host(${pt}) .control {
      cursor: pointer;
    }

    :host(${et}) .control {
      cursor: ${Ai};
    }

    @media (forced-colors: none) {
      :host(${et}) .control {
        opacity: ${Ei};
      }
    }

    ${bf(t,e,pt,et)}
  `.withBehaviors(tt("neutral",kl(t,e,pt,et)),tt("accent",mf(t,e,pt,et)),tt("lightweight",vf(t,e,pt,et)),tt("outline",yf(t,e,pt,et)),tt("stealth",$l(t,e,pt,et)));class Sl extends Oe{appearanceChanged(e,n){e!==n&&(this.classList.add(n),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter(n=>n.nodeType===Node.ELEMENT_NODE);e.length===1&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}Ji([C],Sl.prototype,"appearance",void 0);const In=Sl.compose({baseName:"button",baseClass:Oe,template:su,styles:Sf,shadowOptions:{delegatesFocus:!0}}),_f=(t,e)=>X`
    ${Xt("block")} :host {
      display: block;
      contain: content;
      height: var(--card-height, 100%);
      width: var(--card-width, 100%);
      box-sizing: border-box;
      background: ${j};
      color: ${qt};
      border: calc(${Ce} * 1px) solid ${qd};
      border-radius: calc(${ol} * 1px);
      box-shadow: ${hf};
    }

    :host {
      content-visibility: auto;
    }
  `.withBehaviors(Me(X`
        :host {
          background: ${b.Canvas};
          color: ${b.CanvasText};
        }
      `));class Fs extends Xa{cardFillColorChanged(e,n){if(n){const i=zt(n);i!==null&&(this.neutralPaletteSource=n,j.setValueFor(this,ze.create(i.r,i.g,i.b)))}}neutralPaletteSourceChanged(e,n){if(n){const i=zt(n),r=ze.create(i.r,i.g,i.b);Z.setValueFor(this,_n.create(r))}}handleChange(e,n){this.cardFillColor||j.setValueFor(this,i=>zi.getValueFor(i).evaluate(i,j.getValueFor(e)).rest)}connectedCallback(){super.connectedCallback();const e=di(this);if(e){const n=M.getNotifier(e);n.subscribe(this,"fillColor"),n.subscribe(this,"neutralPalette"),this.handleChange(e,"fillColor")}}}Ji([C({attribute:"card-fill-color",mode:"fromView"})],Fs.prototype,"cardFillColor",void 0);Ji([C({attribute:"neutral-palette-source",mode:"fromView"})],Fs.prototype,"neutralPaletteSource",void 0);const Cs=Fs.compose({baseName:"card",baseClass:Xa,template:cu,styles:_f}),Tf=(t,e)=>X`
    ${Xt("inline-flex")} :host {
      align-items: center;
      outline: none;
      ${""} user-select: none;
    }

    .control {
      position: relative;
      width: calc((${ke} / 2 + ${Le}) * 1px);
      height: calc((${ke} / 2 + ${Le}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${jt} * 1px);
      border: calc(${Ce} * 1px) solid ${Wd};
      background: ${Rd};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .label {
      ${Xi}
      color: ${qt};
      ${""} padding-inline-start: calc(${Le} * 2px + 2px);
      margin-inline-end: calc(${Le} * 2px + 2px);
      cursor: pointer;
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      fill: ${qt};
      opacity: 0;
      pointer-events: none;
    }

    slot[name='indeterminate-indicator'] {
      position: absolute;
      top: 0;
    }

    :host(.checked) slot[name='checked-indicator'],
    :host(.checked) slot[name='indeterminate-indicator'] {
      fill: ${wl};
    }

    :host(:not(.disabled):hover) .control {
      background: ${Ed};
      border-color: ${Gd};
    }

    :host(:not(.disabled):active) .control {
      background: ${Id};
      border-color: ${Zd};
    }

    :host(:${Ae}) .control {
      background: ${Od};
      ${rf}
    }

    :host(.checked) .control {
      background: ${Pe};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):hover) .control {
      background: ${xt};
      border-color: transparent;
    }

    :host(.checked:not(.disabled):active) .control {
      background: ${kt};
      border-color: transparent;
    }

    :host(.disabled) .label,
    :host(.readonly) .label,
    :host(.readonly) .control,
    :host(.disabled) .control {
      cursor: ${Ai};
    }

    :host(.checked:not(.indeterminate)) slot[name='checked-indicator'],
    :host(.indeterminate) slot[name='indeterminate-indicator'] {
      opacity: 1;
    }

    :host(.disabled) {
      opacity: ${Ei};
    }
  `.withBehaviors(Me(X`
        .control {
          border-color: ${b.FieldText};
          background: ${b.Field};
        }
        :host(:not(.disabled):hover) .control,
        :host(:not(.disabled):active) .control {
          border-color: ${b.Highlight};
          background: ${b.Field};
        }
        slot[name='checked-indicator'],
        slot[name='indeterminate-indicator'] {
          fill: ${b.FieldText};
        }
        :host(:${Ae}) .control {
          forced-color-adjust: none;
          outline-color: ${b.FieldText};
          background: ${b.Field};
          border-color: ${b.Highlight};
        }
        :host(.checked) .control {
          background: ${b.Highlight};
          border-color: ${b.Highlight};
        }
        :host(.checked:not(.disabled):hover) .control,
        :host(.checked:not(.disabled):active) .control {
          background: ${b.HighlightText};
          border-color: ${b.Highlight};
        }
        :host(.checked) slot[name='checked-indicator'],
        :host(.checked) slot[name='indeterminate-indicator'] {
          fill: ${b.HighlightText};
        }
        :host(.checked:hover ) .control slot[name='checked-indicator'],
        :host(.checked:hover ) .control slot[name='indeterminate-indicator'] {
          fill: ${b.Highlight};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .control {
          border-color: ${b.GrayText};
          background: ${b.Field};
        }
        :host(.disabled) slot[name='checked-indicator'],
        :host(.checked.disabled:hover) .control slot[name='checked-indicator'],
        :host(.disabled) slot[name='indeterminate-indicator'],
        :host(.checked.disabled:hover) .control slot[name='indeterminate-indicator'] {
          fill: ${b.GrayText};
        }
      `)),Ff=Ci.compose({baseName:"checkbox",template:uu,styles:Tf,checkedIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/>
    </svg>
  `,indeterminateIndicator:`
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8z"/>
    </svg>
  `}),Yo=".control",Xn=":not([disabled]):not([open])",Xo="[disabled]",Cf=(t,e)=>X`
    ${Xt("inline-flex")}
    
    :host {
      border-radius: calc(${jt} * 1px);
      box-sizing: border-box;
      color: ${qt};
      fill: currentcolor;
      font-family: ${Ge};
      position: relative;
      user-select: none;
      min-width: 250px;
      vertical-align: top;
    }

    .listbox {
      box-shadow: ${pf};
      background: ${j};
      border-radius: calc(${ol} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${ke} * 1px));
      padding: calc((${Le} - ${Ce} ) * 1px);
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
      margin: 1px 0;
      border: calc(${Ce} * 1px) solid transparent;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      border: calc(${Ce} * 1px) solid transparent;
      border-radius: calc(${jt} * 1px);
      height: calc(${ke} * 1px);
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      ${Xi}
      min-height: 100%;
      padding: 0 calc(${Le} * 2.25px);
      width: 100%;
    }

    :host(:${Ae}) {
      ${Qi}
    }

    :host([disabled]) .control {
      cursor: ${Ai};
      opacity: ${Ei};
      user-select: none;
    }

    :host([open][position='above']) .listbox {
      bottom: calc((${ke} + ${Le} * 2) * 1px);
    }

    :host([open][position='below']) .listbox {
      top: calc((${ke} + ${Le} * 2) * 1px);
    }

    .selected-value {
      font-family: inherit;
      flex: 1 1 auto;
      text-align: start;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }

    .start,
    .end,
    .indicator,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([role='option']) {
      flex: 0 0 auto;
    }
  `,Df=(t,e)=>X`
    :host([open]) .listbox {
      background: ${b.ButtonFace};
      border-color: ${b.CanvasText};
    }
  `,Af=(t,e)=>Cf().withBehaviors(tt("outline",kl(t,e,Xn,Xo)),tt("filled",kf(t,e,Yo,Xn).withBehaviors(Me($f(t,e,Yo,Xn)))),tt("stealth",$l(t,e,Xn,Xo)),Me(Df())),Rf=(t,e)=>X`
    ${Xt("inline-flex")} :host {
      position: relative;
      ${Xi}
      background: ${Tn};
      border-radius: calc(${jt} * 1px);
      border: calc(${Ce} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${qt};
      cursor: pointer;
      fill: currentcolor;
      height: calc(${ke} * 1px);
      overflow: hidden;
      align-items: center;
      padding: 0 calc(((${Le} * 3) - ${Ce} - 1) * 1px);
      user-select: none;
      white-space: nowrap;
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      left: calc((${rt} - ${Ce}) * 1px);
      top: calc((${ke} / 4) - ${rt} * 1px);
      width: 3px;
      height: calc((${ke} / 2) * 1px);
      background: transparent;
      border-radius: calc(${jt} * 1px);
    }

    :host(:not([disabled]):hover) {
      background: ${mi};
    }

    :host(:not([disabled]):active) {
      background: ${vi};
    }

    :host(:not([disabled]):active)::before {
      background: ${Pe};
      height: calc(((${ke} / 2) - 6) * 1px);
    }

    :host([aria-selected='true'])::before {
      background: ${Pe};
    }

    :host(:${Ae}) {
      ${Qi}
      background: ${Nd};
    }

    :host([aria-selected='true']) {
      background: ${Gr};
    }

    :host(:not([disabled])[aria-selected='true']:hover) {
      background: ${xl};
    }

    :host(:not([disabled])[aria-selected='true']:active) {
      background: ${Ld};
    }

    :host(:not([disabled]):not([aria-selected='true']):hover) {
      background: ${mi};
    }

    :host(:not([disabled]):not([aria-selected='true']):active) {
      background: ${vi};
    }

    :host([disabled]) {
      cursor: ${Ai};
      opacity: ${Ei};
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors(new sf(null,X`
      :host::before {
        right: calc((${rt} - ${Ce}) * 1px);
      }
    `),Me(X`
        :host {
          background: ${b.ButtonFace};
          border-color: ${b.ButtonFace};
          color: ${b.ButtonText};
        }
        :host(:not([disabled]):not([aria-selected="true"]):hover),
        :host(:not([disabled])[aria-selected="true"]:hover),
        :host([aria-selected="true"]) {
          forced-color-adjust: none;
          background: ${b.Highlight};
          color: ${b.HighlightText};
        }
        :host(:not([disabled]):active)::before,
        :host([aria-selected='true'])::before {
          background: ${b.HighlightText};
        }
        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${b.Canvas};
          color: ${b.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
        :host(:${Ae}) {
          outline-color: ${b.CanvasText};
        }
      `)),Ef=Qe.compose({baseName:"option",template:Tu,styles:Rf}),If=(t,e)=>X`
    ${Xt("flex")} :host {
      align-items: center;
      height: calc(${ke} * 1px);
      width: calc(${ke} * 1px);
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke-width: 2px;
    }

    .determinate {
      stroke: ${Pe};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
    }

    .indeterminate-indicator-1 {
      stroke: ${Pe};
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    :host(.paused) .indeterminate-indicator-1 {
      animation: none;
      stroke: ${Zo};
    }

    :host(.paused) .determinate {
      stroke: ${Zo};
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `.withBehaviors(Me(X`
        .background {
          stroke: ${b.Field};
        }
        .determinate,
        .indeterminate-indicator-1 {
          stroke: ${b.ButtonText};
        }
        :host(.paused) .determinate,
        :host(.paused) .indeterminate-indicator-1 {
          stroke: ${b.GrayText};
        }
      `));class Of extends Yt{}const Vf=Of.compose({baseName:"progress-ring",template:Fu,styles:If,indeterminateIndicator:`
    <svg class="progress" part="progress" viewBox="0 0 16 16">
        <circle
            class="background"
            part="background"
            cx="8px"
            cy="8px"
            r="7px"
        ></circle>
        <circle
            class="indeterminate-indicator-1"
            part="indeterminate-indicator-1"
            cx="8px"
            cy="8px"
            r="7px"
        ></circle>
    </svg>
  `});class _l extends Je{appearanceChanged(e,n){e!==n&&(this.classList.add(n),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline"),this.listbox&&j.setValueFor(this.listbox,md)}}Ji([C({mode:"fromView"})],_l.prototype,"appearance",void 0);const Lf=_l.compose({baseName:"select",baseClass:Je,template:Au,styles:Af,indicator:`
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.15 4.65c.2-.2.5-.2.7 0L6 7.79l3.15-3.14a.5.5 0 11.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 010-.7z"/>
    </svg>
  `});function On(t){return Ka.getOrCreate(t).withPrefix("fluent")}function Pf(t){let e,n;return{c(){e=ci("svg"),n=ci("path"),V(n,"stroke-linecap","round"),V(n,"stroke-linejoin","round"),V(n,"stroke-width","2"),V(n,"d","M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"),V(e,"xmlns","http://www.w3.org/2000/svg"),V(e,"class","h-6 w-6"),V(e,"fill","none"),V(e,"viewBox","0 0 24 24"),V(e,"stroke","currentColor")},m(i,r){H(i,e,r),F(e,n)},d(i){i&&z(e)}}}function Nf(t){let e,n;return{c(){e=ci("svg"),n=ci("path"),V(n,"stroke-linecap","round"),V(n,"stroke-linejoin","round"),V(n,"stroke-width","2"),V(n,"d",`M12 3v1m0 16v1m9-9h-1M4 12H3m15.364
          6.364l-.707-.707M6.343 6.343l-.707-.707m12.728
          0l-.707.707M6.343 17.657l-.707.707M16
          12a4 4 0 11-8 0 4 4 0 018 0z`),V(e,"xmlns","http://www.w3.org/2000/svg"),V(e,"class","h-6 w-6"),V(e,"fill","none"),V(e,"viewBox","0 0 24 24"),V(e,"stroke","currentColor")},m(i,r){H(i,e,r),F(e,n)},d(i){i&&z(e)}}}function Mf(t){let e,n,i,r,s,o;function a(u,d){return u[0]==="light"?Nf:Pf}let c=a(t),l=c(t);return{c(){e=E("header"),n=E("div"),n.innerHTML='<img src="images/logo-icon.svg" alt="CheckMate Logo" class="h-8 mr-2"/> <h1 class="text-xl font-bold">CheckMate</h1>',i=Y(),r=E("fluent-button"),l.c(),V(n,"class","flex items-center"),I(r,"role","button"),I(r,"appearance","stealth"),I(r,"tabindex","0"),I(r,"aria-label","Toggle theme"),V(e,"class","flex justify-between items-center p-4 bg-card")},m(u,d){H(u,e,d),F(e,n),F(e,i),F(e,r),l.m(r,null),s||(o=[q(r,"click",t[1]),q(r,"keydown",t[2])],s=!0)},p(u,[d]){c!==(c=a(u))&&(l.d(1),l=c(u),l&&(l.c(),l.m(r,null)))},i:ie,o:ie,d(u){u&&z(e),l.d(),s=!1,Ee(o)}}}function zf(t,e,n){let i;Fn(t,uo,o=>n(0,i=o)),On().register(In());function r(){uo.toggleTheme()}function s(o){(o.key==="Enter"||o.key===" ")&&r()}return[i,r,s]}class Bf extends Gt{constructor(e){super(),Wt(this,e,zf,Mf,$t,{})}}const Yr=ts("upload");function Qo(t,e,n){const i=t.slice();return i[6]=e[n],i}function Jo(t){let e,n=t[6].label+"",i,r,s,o,a,c;function l(){return t[4](t[6])}function u(...d){return t[5](t[6],...d)}return{c(){e=E("fluent-button"),i=st(n),r=Y(),I(e,"role","tab"),I(e,"tabindex","0"),I(e,"appearance",s=t[0]===t[6].id?"accent":"lightweight"),I(e,"aria-selected",o=t[0]===t[6].id)},m(d,f){H(d,e,f),F(e,i),F(e,r),a||(c=[q(e,"click",l),q(e,"keydown",u)],a=!0)},p(d,f){t=d,f&1&&s!==(s=t[0]===t[6].id?"accent":"lightweight")&&I(e,"appearance",s),f&1&&o!==(o=t[0]===t[6].id)&&I(e,"aria-selected",o)},d(d){d&&z(e),a=!1,Ee(c)}}}function Hf(t){let e,n=We(t[1]),i=[];for(let r=0;r<n.length;r+=1)i[r]=Jo(Qo(t,n,r));return{c(){e=E("nav");for(let r=0;r<i.length;r+=1)i[r].c();V(e,"class","flex justify-around bg-card my-4")},m(r,s){H(r,e,s);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(r,[s]){if(s&15){n=We(r[1]);let o;for(o=0;o<n.length;o+=1){const a=Qo(r,n,o);i[o]?i[o].p(a,s):(i[o]=Jo(a),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},i:ie,o:ie,d(r){r&&z(e),Cn(i,r)}}}function Uf(t,e,n){let i;Fn(t,Yr,l=>n(0,i=l)),On().register(In());const r=[{id:"upload",label:"Upload"},{id:"manage",label:"Manage"},{id:"view",label:"View"}];function s(l){Yr.set(l)}function o(l,u){(l.key==="Enter"||l.key===" ")&&s(u)}return[i,r,s,o,l=>s(l.id),(l,u)=>o(u,l.id)]}class jf extends Gt{constructor(e){super(),Wt(this,e,Uf,Hf,$t,{})}}var he=[];for(var Ir=0;Ir<256;++Ir)he.push((Ir+256).toString(16).slice(1));function qf(t,e=0){return(he[t[e+0]]+he[t[e+1]]+he[t[e+2]]+he[t[e+3]]+"-"+he[t[e+4]]+he[t[e+5]]+"-"+he[t[e+6]]+he[t[e+7]]+"-"+he[t[e+8]]+he[t[e+9]]+"-"+he[t[e+10]]+he[t[e+11]]+he[t[e+12]]+he[t[e+13]]+he[t[e+14]]+he[t[e+15]]).toLowerCase()}var Qn,Wf=new Uint8Array(16);function Gf(){if(!Qn&&(Qn=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Qn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Qn(Wf)}var Zf=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Ko={randomUUID:Zf};function oi(t,e,n){if(Ko.randomUUID&&!e&&!t)return Ko.randomUUID();t=t||{};var i=t.random||(t.rng||Gf)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,qf(i)}function Yf(){const{subscribe:t,update:e}=ts({templates:[],activeChecklists:[]});return{subscribe:t,addTemplate:(n,i)=>e(r=>({...r,templates:[...r.templates,{id:oi(),name:n,items:i}]})),removeTemplate:n=>e(i=>({...i,templates:i.templates.filter(r=>r.id!==n)})),startChecklist:n=>e(i=>{const r=i.templates.find(o=>o.id===n);if(!r)return i;const s={id:oi(),name:r.name,items:r.items.map(o=>({...o,id:oi()}))};return{...i,activeChecklists:[s,...i.activeChecklists]}}),updateActiveChecklist:(n,i)=>e(r=>({...r,activeChecklists:r.activeChecklists.map(s=>s.id===n?{...s,items:i}:s)})),removeActiveChecklist:n=>e(i=>({...i,activeChecklists:i.activeChecklists.filter(r=>r.id!==n)})),loadChecklists:n=>e(i=>({...i,templates:n}))}}const nt=Yf();function Tl(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Ft=Tl();function Xf(t){Ft=t}const Fl=/[&<>"']/,Qf=new RegExp(Fl.source,"g"),Cl=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Jf=new RegExp(Cl.source,"g"),Kf={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ea=t=>Kf[t];function fe(t,e){if(e){if(Fl.test(t))return t.replace(Qf,ea)}else if(Cl.test(t))return t.replace(Jf,ea);return t}const ep=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Dl(t){return t.replace(ep,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const tp=/(^|[^\[])\^/g;function W(t,e){t=typeof t=="string"?t:t.source,e=e||"";const n={replace:(i,r)=>(r=r.source||r,r=r.replace(tp,"$1"),t=t.replace(i,r),n),getRegex:()=>new RegExp(t,e)};return n}const np=/[^\w:]/g,ip=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function ta(t,e,n){if(t){let i;try{i=decodeURIComponent(Dl(n)).replace(np,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}e&&!ip.test(n)&&(n=ap(e,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const Jn={},rp=/^[^:]+:\/*[^/]*$/,sp=/^([^:]+:)[\s\S]*$/,op=/^([^:]+:\/*[^/]*)[\s\S]*$/;function ap(t,e){Jn[" "+t]||(rp.test(t)?Jn[" "+t]=t+"/":Jn[" "+t]=ai(t,"/",!0)),t=Jn[" "+t];const n=t.indexOf(":")===-1;return e.substring(0,2)==="//"?n?e:t.replace(sp,"$1")+e:e.charAt(0)==="/"?n?e:t.replace(op,"$1")+e:t+e}const yi={exec:function(){}};function na(t,e){const n=t.replace(/\|/g,(s,o,a)=>{let c=!1,l=o;for(;--l>=0&&a[l]==="\\";)c=!c;return c?"|":" |"}),i=n.split(/ \|/);let r=0;if(i[0].trim()||i.shift(),i.length>0&&!i[i.length-1].trim()&&i.pop(),i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(/\\\|/g,"|");return i}function ai(t,e,n){const i=t.length;if(i===0)return"";let r=0;for(;r<i;){const s=t.charAt(i-r-1);if(s===e&&!n)r++;else if(s!==e&&n)r++;else break}return t.slice(0,i-r)}function lp(t,e){if(t.indexOf(e[1])===-1)return-1;const n=t.length;let i=0,r=0;for(;r<n;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])i++;else if(t[r]===e[1]&&(i--,i<0))return r;return-1}function cp(t){t&&t.sanitize&&!t.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function ia(t,e){if(e<1)return"";let n="";for(;e>1;)e&1&&(n+=t),e>>=1,t+=t;return n+t}function ra(t,e,n,i){const r=e.href,s=e.title?fe(e.title):null,o=t[1].replace(/\\([\[\]])/g,"$1");if(t[0].charAt(0)!=="!"){i.state.inLink=!0;const a={type:"link",raw:n,href:r,title:s,text:o,tokens:i.inlineTokens(o)};return i.state.inLink=!1,a}return{type:"image",raw:n,href:r,title:s,text:fe(o)}}function up(t,e){const n=t.match(/^(\s+)(?:```)/);if(n===null)return e;const i=n[1];return e.split(`
`).map(r=>{const s=r.match(/^\s+/);if(s===null)return r;const[o]=s;return o.length>=i.length?r.slice(i.length):r}).join(`
`)}class Ds{constructor(e){this.options=e||Ft}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const i=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?i:ai(i,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const i=n[0],r=up(i,n[3]||"");return{type:"code",raw:i,lang:n[2]?n[2].trim().replace(this.rules.inline._escapes,"$1"):n[2],text:r}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let i=n[2].trim();if(/#$/.test(i)){const r=ai(i,"#");(this.options.pedantic||!r||/ $/.test(r))&&(i=r.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){const i=n[0].replace(/^ *>[ \t]?/gm,""),r=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(i);return this.lexer.state.top=r,{type:"blockquote",raw:n[0],tokens:s,text:i}}}list(e){let n=this.rules.block.list.exec(e);if(n){let i,r,s,o,a,c,l,u,d,f,p,m,k=n[1].trim();const N=k.length>1,A={type:"list",raw:"",ordered:N,start:N?+k.slice(0,-1):"",loose:!1,items:[]};k=N?`\\d{1,9}\\${k.slice(-1)}`:`\\${k}`,this.options.pedantic&&(k=N?k:"[*+-]");const O=new RegExp(`^( {0,3}${k})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(m=!1,!(!(n=O.exec(e))||this.rules.block.hr.test(e)));){if(i=n[0],e=e.substring(i.length),u=n[2].split(`
`,1)[0].replace(/^\t+/,R=>" ".repeat(3*R.length)),d=e.split(`
`,1)[0],this.options.pedantic?(o=2,p=u.trimLeft()):(o=n[2].search(/[^ ]/),o=o>4?1:o,p=u.slice(o),o+=n[1].length),c=!1,!u&&/^ *$/.test(d)&&(i+=d+`
`,e=e.substring(d.length+1),m=!0),!m){const R=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),_=new RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Q=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),we=new RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(f=e.split(`
`,1)[0],d=f,this.options.pedantic&&(d=d.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(Q.test(d)||we.test(d)||R.test(d)||_.test(e)));){if(d.search(/[^ ]/)>=o||!d.trim())p+=`
`+d.slice(o);else{if(c||u.search(/[^ ]/)>=4||Q.test(u)||we.test(u)||_.test(u))break;p+=`
`+d}!c&&!d.trim()&&(c=!0),i+=f+`
`,e=e.substring(f.length+1),u=d.slice(o)}}A.loose||(l?A.loose=!0:/\n *\n *$/.test(i)&&(l=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(p),r&&(s=r[0]!=="[ ] ",p=p.replace(/^\[[ xX]\] +/,""))),A.items.push({type:"list_item",raw:i,task:!!r,checked:s,loose:!1,text:p}),A.raw+=i}A.items[A.items.length-1].raw=i.trimRight(),A.items[A.items.length-1].text=p.trimRight(),A.raw=A.raw.trimRight();const P=A.items.length;for(a=0;a<P;a++)if(this.lexer.state.top=!1,A.items[a].tokens=this.lexer.blockTokens(A.items[a].text,[]),!A.loose){const R=A.items[a].tokens.filter(Q=>Q.type==="space"),_=R.length>0&&R.some(Q=>/\n.*\n/.test(Q.raw));A.loose=_}if(A.loose)for(a=0;a<P;a++)A.items[a].loose=!0;return A}}html(e){const n=this.rules.block.html.exec(e);if(n){const i={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const r=this.options.sanitizer?this.options.sanitizer(n[0]):fe(n[0]);i.type="paragraph",i.text=r,i.tokens=this.lexer.inline(r)}return i}}def(e){const n=this.rules.block.def.exec(e);if(n){const i=n[1].toLowerCase().replace(/\s+/g," "),r=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline._escapes,"$1"):n[3];return{type:"def",tag:i,raw:n[0],href:r,title:s}}}table(e){const n=this.rules.block.table.exec(e);if(n){const i={type:"table",header:na(n[1]).map(r=>({text:r})),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){i.raw=n[0];let r=i.align.length,s,o,a,c;for(s=0;s<r;s++)/^ *-+: *$/.test(i.align[s])?i.align[s]="right":/^ *:-+: *$/.test(i.align[s])?i.align[s]="center":/^ *:-+ *$/.test(i.align[s])?i.align[s]="left":i.align[s]=null;for(r=i.rows.length,s=0;s<r;s++)i.rows[s]=na(i.rows[s],i.header.length).map(l=>({text:l}));for(r=i.header.length,o=0;o<r;o++)i.header[o].tokens=this.lexer.inline(i.header[o].text);for(r=i.rows.length,o=0;o<r;o++)for(c=i.rows[o],a=0;a<c.length;a++)c[a].tokens=this.lexer.inline(c[a].text);return i}}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const i=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:fe(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):fe(n[0]):n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const i=n[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const o=ai(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{const o=lp(n[2],"()");if(o>-1){const c=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,c).trim(),n[3]=""}}let r=n[2],s="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);o&&(r=o[1],s=o[3])}else s=n[3]?n[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(i)?r=r.slice(1):r=r.slice(1,-1)),ra(n,{href:r&&r.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(e,n){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let r=(i[2]||i[1]).replace(/\s+/g," ");if(r=n[r.toLowerCase()],!r){const s=i[0].charAt(0);return{type:"text",raw:s,text:s}}return ra(i,r,i[0],this.lexer)}}emStrong(e,n,i=""){let r=this.rules.inline.emStrong.lDelim.exec(e);if(!r||r[3]&&i.match(/[\p{L}\p{N}]/u))return;const s=r[1]||r[2]||"";if(!s||s&&(i===""||this.rules.inline.punctuation.exec(i))){const o=r[0].length-1;let a,c,l=o,u=0;const d=r[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(d.lastIndex=0,n=n.slice(-1*e.length+o);(r=d.exec(n))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(c=a.length,r[3]||r[4]){l+=c;continue}else if((r[5]||r[6])&&o%3&&!((o+c)%3)){u+=c;continue}if(l-=c,l>0)continue;c=Math.min(c,c+l+u);const f=e.slice(0,o+r.index+(r[0].length-a.length)+c);if(Math.min(o,c)%2){const m=f.slice(1,-1);return{type:"em",raw:f,text:m,tokens:this.lexer.inlineTokens(m)}}const p=f.slice(2,-2);return{type:"strong",raw:f,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let i=n[2].replace(/\n/g," ");const r=/[^ ]/.test(i),s=/^ /.test(i)&&/ $/.test(i);return r&&s&&(i=i.substring(1,i.length-1)),i=fe(i,!0),{type:"codespan",raw:n[0],text:i}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e,n){const i=this.rules.inline.autolink.exec(e);if(i){let r,s;return i[2]==="@"?(r=fe(this.options.mangle?n(i[1]):i[1]),s="mailto:"+r):(r=fe(i[1]),s=r),{type:"link",raw:i[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}url(e,n){let i;if(i=this.rules.inline.url.exec(e)){let r,s;if(i[2]==="@")r=fe(this.options.mangle?n(i[0]):i[0]),s="mailto:"+r;else{let o;do o=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(o!==i[0]);r=fe(i[0]),i[1]==="www."?s="http://"+i[0]:s=i[0]}return{type:"link",raw:i[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e,n){const i=this.rules.inline.text.exec(e);if(i){let r;return this.lexer.state.inRawBlock?r=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):fe(i[0]):i[0]:r=fe(this.options.smartypants?n(i[0]):i[0]),{type:"text",raw:i[0],text:r}}}}const D={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:yi,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};D._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;D._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;D.def=W(D.def).replace("label",D._label).replace("title",D._title).getRegex();D.bullet=/(?:[*+-]|\d{1,9}[.)])/;D.listItemStart=W(/^( *)(bull) */).replace("bull",D.bullet).getRegex();D.list=W(D.list).replace(/bull/g,D.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+D.def.source+")").getRegex();D._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";D._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;D.html=W(D.html,"i").replace("comment",D._comment).replace("tag",D._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();D.paragraph=W(D._paragraph).replace("hr",D.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",D._tag).getRegex();D.blockquote=W(D.blockquote).replace("paragraph",D.paragraph).getRegex();D.normal={...D};D.gfm={...D.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};D.gfm.table=W(D.gfm.table).replace("hr",D.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",D._tag).getRegex();D.gfm.paragraph=W(D._paragraph).replace("hr",D.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",D.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",D._tag).getRegex();D.pedantic={...D.normal,html:W(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",D._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:yi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:W(D.normal._paragraph).replace("hr",D.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",D.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const x={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:yi,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:yi,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};x._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";x.punctuation=W(x.punctuation).replace(/punctuation/g,x._punctuation).getRegex();x.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;x.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g;x._comment=W(D._comment).replace("(?:-->|$)","-->").getRegex();x.emStrong.lDelim=W(x.emStrong.lDelim).replace(/punct/g,x._punctuation).getRegex();x.emStrong.rDelimAst=W(x.emStrong.rDelimAst,"g").replace(/punct/g,x._punctuation).getRegex();x.emStrong.rDelimUnd=W(x.emStrong.rDelimUnd,"g").replace(/punct/g,x._punctuation).getRegex();x._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;x._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;x._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;x.autolink=W(x.autolink).replace("scheme",x._scheme).replace("email",x._email).getRegex();x._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;x.tag=W(x.tag).replace("comment",x._comment).replace("attribute",x._attribute).getRegex();x._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;x._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;x._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;x.link=W(x.link).replace("label",x._label).replace("href",x._href).replace("title",x._title).getRegex();x.reflink=W(x.reflink).replace("label",x._label).replace("ref",D._label).getRegex();x.nolink=W(x.nolink).replace("ref",D._label).getRegex();x.reflinkSearch=W(x.reflinkSearch,"g").replace("reflink",x.reflink).replace("nolink",x.nolink).getRegex();x.normal={...x};x.pedantic={...x.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:W(/^!?\[(label)\]\((.*?)\)/).replace("label",x._label).getRegex(),reflink:W(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",x._label).getRegex()};x.gfm={...x.normal,escape:W(x.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};x.gfm.url=W(x.gfm.url,"i").replace("email",x.gfm._extended_email).getRegex();x.breaks={...x.gfm,br:W(x.br).replace("{2,}","*").getRegex(),text:W(x.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function hp(t){return t.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function sa(t){let e="",n,i;const r=t.length;for(n=0;n<r;n++)i=t.charCodeAt(n),Math.random()>.5&&(i="x"+i.toString(16)),e+="&#"+i+";";return e}class lt{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ft,this.options.tokenizer=this.options.tokenizer||new Ds,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:D.normal,inline:x.normal};this.options.pedantic?(n.block=D.pedantic,n.inline=x.pedantic):this.options.gfm&&(n.block=D.gfm,this.options.breaks?n.inline=x.breaks:n.inline=x.gfm),this.tokenizer.rules=n}static get rules(){return{block:D,inline:x}}static lex(e,n){return new lt(n).lex(e)}static lexInline(e,n){return new lt(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let n;for(;n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,c,l)=>c+"    ".repeat(l.length));let i,r,s,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(i=a.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),r=n[n.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),r=n[n.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const c=e.slice(1);let l;this.options.extensions.startBlock.forEach(function(u){l=u.call({lexer:this},c),typeof l=="number"&&l>=0&&(a=Math.min(a,l))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){r=n[n.length-1],o&&r.type==="paragraph"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):n.push(i),o=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),r=n[n.length-1],r&&r.type==="text"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):n.push(i);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let i,r,s,o=e,a,c,l;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+ia("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+ia("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,a.index+a[0].length-2)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(c||(l=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(i=u.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))){if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),r=n[n.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):n.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length),r=n[n.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):n.push(i);continue}if(i=this.tokenizer.emStrong(e,o,l)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.autolink(e,sa)){e=e.substring(i.raw.length),n.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e,sa))){e=e.substring(i.raw.length),n.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const d=e.slice(1);let f;this.options.extensions.startInline.forEach(function(p){f=p.call({lexer:this},d),typeof f=="number"&&f>=0&&(u=Math.min(u,f))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(i=this.tokenizer.inlineText(s,hp)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(l=i.raw.slice(-1)),c=!0,r=n[n.length-1],r&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):n.push(i);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return n}}class As{constructor(e){this.options=e||Ft}code(e,n,i){const r=(n||"").match(/\S*/)[0];if(this.options.highlight){const s=this.options.highlight(e,r);s!=null&&s!==e&&(i=!0,e=s)}return e=e.replace(/\n$/,"")+`
`,r?'<pre><code class="'+this.options.langPrefix+fe(r)+'">'+(i?e:fe(e,!0))+`</code></pre>
`:"<pre><code>"+(i?e:fe(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,n,i,r){if(this.options.headerIds){const s=this.options.headerPrefix+r.slug(i);return`<h${n} id="${s}">${e}</h${n}>
`}return`<h${n}>${e}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,n,i){const r=n?"ol":"ul",s=n&&i!==1?' start="'+i+'"':"";return"<"+r+s+`>
`+e+"</"+r+`>
`}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const i=n.header?"th":"td";return(n.align?`<${i} align="${n.align}">`:`<${i}>`)+e+`</${i}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,n,i){if(e=ta(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let r='<a href="'+e+'"';return n&&(r+=' title="'+n+'"'),r+=">"+i+"</a>",r}image(e,n,i){if(e=ta(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let r=`<img src="${e}" alt="${i}"`;return n&&(r+=` title="${n}"`),r+=this.options.xhtml?"/>":">",r}text(e){return e}}class Al{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,i){return""+i}image(e,n,i){return""+i}br(){return""}}class Rl{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,n){let i=e,r=0;if(this.seen.hasOwnProperty(i)){r=this.seen[e];do r++,i=e+"-"+r;while(this.seen.hasOwnProperty(i))}return n||(this.seen[e]=r,this.seen[i]=0),i}slug(e,n={}){const i=this.serialize(e);return this.getNextSafeSlug(i,n.dryrun)}}class ct{constructor(e){this.options=e||Ft,this.options.renderer=this.options.renderer||new As,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Al,this.slugger=new Rl}static parse(e,n){return new ct(n).parse(e)}static parseInline(e,n){return new ct(n).parseInline(e)}parse(e,n=!0){let i="",r,s,o,a,c,l,u,d,f,p,m,k,N,A,O,P,R,_,Q;const we=e.length;for(r=0;r<we;r++){if(p=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[p.type]&&(Q=this.options.extensions.renderers[p.type].call({parser:this},p),Q!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(p.type))){i+=Q||"";continue}switch(p.type){case"space":continue;case"hr":{i+=this.renderer.hr();continue}case"heading":{i+=this.renderer.heading(this.parseInline(p.tokens),p.depth,Dl(this.parseInline(p.tokens,this.textRenderer)),this.slugger);continue}case"code":{i+=this.renderer.code(p.text,p.lang,p.escaped);continue}case"table":{for(d="",u="",a=p.header.length,s=0;s<a;s++)u+=this.renderer.tablecell(this.parseInline(p.header[s].tokens),{header:!0,align:p.align[s]});for(d+=this.renderer.tablerow(u),f="",a=p.rows.length,s=0;s<a;s++){for(l=p.rows[s],u="",c=l.length,o=0;o<c;o++)u+=this.renderer.tablecell(this.parseInline(l[o].tokens),{header:!1,align:p.align[o]});f+=this.renderer.tablerow(u)}i+=this.renderer.table(d,f);continue}case"blockquote":{f=this.parse(p.tokens),i+=this.renderer.blockquote(f);continue}case"list":{for(m=p.ordered,k=p.start,N=p.loose,a=p.items.length,f="",s=0;s<a;s++)O=p.items[s],P=O.checked,R=O.task,A="",O.task&&(_=this.renderer.checkbox(P),N?O.tokens.length>0&&O.tokens[0].type==="paragraph"?(O.tokens[0].text=_+" "+O.tokens[0].text,O.tokens[0].tokens&&O.tokens[0].tokens.length>0&&O.tokens[0].tokens[0].type==="text"&&(O.tokens[0].tokens[0].text=_+" "+O.tokens[0].tokens[0].text)):O.tokens.unshift({type:"text",text:_}):A+=_),A+=this.parse(O.tokens,N),f+=this.renderer.listitem(A,R,P);i+=this.renderer.list(f,m,k);continue}case"html":{i+=this.renderer.html(p.text);continue}case"paragraph":{i+=this.renderer.paragraph(this.parseInline(p.tokens));continue}case"text":{for(f=p.tokens?this.parseInline(p.tokens):p.text;r+1<we&&e[r+1].type==="text";)p=e[++r],f+=`
`+(p.tokens?this.parseInline(p.tokens):p.text);i+=n?this.renderer.paragraph(f):f;continue}default:{const $e='Token with "'+p.type+'" type was not found.';if(this.options.silent){console.error($e);return}else throw new Error($e)}}}return i}parseInline(e,n){n=n||this.renderer;let i="",r,s,o;const a=e.length;for(r=0;r<a;r++){if(s=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]&&(o=this.options.extensions.renderers[s.type].call({parser:this},s),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type))){i+=o||"";continue}switch(s.type){case"escape":{i+=n.text(s.text);break}case"html":{i+=n.html(s.text);break}case"link":{i+=n.link(s.href,s.title,this.parseInline(s.tokens,n));break}case"image":{i+=n.image(s.href,s.title,s.text);break}case"strong":{i+=n.strong(this.parseInline(s.tokens,n));break}case"em":{i+=n.em(this.parseInline(s.tokens,n));break}case"codespan":{i+=n.codespan(s.text);break}case"br":{i+=n.br();break}case"del":{i+=n.del(this.parseInline(s.tokens,n));break}case"text":{i+=n.text(s.text);break}default:{const c='Token with "'+s.type+'" type was not found.';if(this.options.silent){console.error(c);return}else throw new Error(c)}}}return i}}class wi{constructor(e){this.options=e||Ft}preprocess(e){return e}postprocess(e){return e}}zn(wi,"passThroughHooks",new Set(["preprocess","postprocess"]));function dp(t,e,n){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const r="<p>An error occurred:</p><pre>"+fe(i.message+"",!0)+"</pre>";if(e)return Promise.resolve(r);if(n){n(null,r);return}return r}if(e)return Promise.reject(i);if(n){n(i);return}throw i}}function El(t,e){return(n,i,r)=>{typeof i=="function"&&(r=i,i=null);const s={...i};i={...T.defaults,...s};const o=dp(i.silent,i.async,r);if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(cp(i),i.hooks&&(i.hooks.options=i),r){const a=i.highlight;let c;try{i.hooks&&(n=i.hooks.preprocess(n)),c=t(n,i)}catch(d){return o(d)}const l=function(d){let f;if(!d)try{i.walkTokens&&T.walkTokens(c,i.walkTokens),f=e(c,i),i.hooks&&(f=i.hooks.postprocess(f))}catch(p){d=p}return i.highlight=a,d?o(d):r(null,f)};if(!a||a.length<3||(delete i.highlight,!c.length))return l();let u=0;T.walkTokens(c,function(d){d.type==="code"&&(u++,setTimeout(()=>{a(d.text,d.lang,function(f,p){if(f)return l(f);p!=null&&p!==d.text&&(d.text=p,d.escaped=!0),u--,u===0&&l()})},0))}),u===0&&l();return}if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(a=>t(a,i)).then(a=>i.walkTokens?Promise.all(T.walkTokens(a,i.walkTokens)).then(()=>a):a).then(a=>e(a,i)).then(a=>i.hooks?i.hooks.postprocess(a):a).catch(o);try{i.hooks&&(n=i.hooks.preprocess(n));const a=t(n,i);i.walkTokens&&T.walkTokens(a,i.walkTokens);let c=e(a,i);return i.hooks&&(c=i.hooks.postprocess(c)),c}catch(a){return o(a)}}}function T(t,e,n){return El(lt.lex,ct.parse)(t,e,n)}T.options=T.setOptions=function(t){return T.defaults={...T.defaults,...t},Xf(T.defaults),T};T.getDefaults=Tl;T.defaults=Ft;T.use=function(...t){const e=T.defaults.extensions||{renderers:{},childTokens:{}};t.forEach(n=>{const i={...n};if(i.async=T.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if(r.renderer){const s=e.renderers[r.name];s?e.renderers[r.name]=function(...o){let a=r.renderer.apply(this,o);return a===!1&&(a=s.apply(this,o)),a}:e.renderers[r.name]=r.renderer}if(r.tokenizer){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[r.level]?e[r.level].unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),n.renderer){const r=T.defaults.renderer||new As;for(const s in n.renderer){const o=r[s];r[s]=(...a)=>{let c=n.renderer[s].apply(r,a);return c===!1&&(c=o.apply(r,a)),c}}i.renderer=r}if(n.tokenizer){const r=T.defaults.tokenizer||new Ds;for(const s in n.tokenizer){const o=r[s];r[s]=(...a)=>{let c=n.tokenizer[s].apply(r,a);return c===!1&&(c=o.apply(r,a)),c}}i.tokenizer=r}if(n.hooks){const r=T.defaults.hooks||new wi;for(const s in n.hooks){const o=r[s];wi.passThroughHooks.has(s)?r[s]=a=>{if(T.defaults.async)return Promise.resolve(n.hooks[s].call(r,a)).then(l=>o.call(r,l));const c=n.hooks[s].call(r,a);return o.call(r,c)}:r[s]=(...a)=>{let c=n.hooks[s].apply(r,a);return c===!1&&(c=o.apply(r,a)),c}}i.hooks=r}if(n.walkTokens){const r=T.defaults.walkTokens;i.walkTokens=function(s){let o=[];return o.push(n.walkTokens.call(this,s)),r&&(o=o.concat(r.call(this,s))),o}}T.setOptions(i)})};T.walkTokens=function(t,e){let n=[];for(const i of t)switch(n=n.concat(e.call(T,i)),i.type){case"table":{for(const r of i.header)n=n.concat(T.walkTokens(r.tokens,e));for(const r of i.rows)for(const s of r)n=n.concat(T.walkTokens(s.tokens,e));break}case"list":{n=n.concat(T.walkTokens(i.items,e));break}default:T.defaults.extensions&&T.defaults.extensions.childTokens&&T.defaults.extensions.childTokens[i.type]?T.defaults.extensions.childTokens[i.type].forEach(function(r){n=n.concat(T.walkTokens(i[r],e))}):i.tokens&&(n=n.concat(T.walkTokens(i.tokens,e)))}return n};T.parseInline=El(lt.lexInline,ct.parseInline);T.Parser=ct;T.parser=ct.parse;T.Renderer=As;T.TextRenderer=Al;T.Lexer=lt;T.lexer=lt.lex;T.Tokenizer=Ds;T.Slugger=Rl;T.Hooks=wi;T.parse=T;T.options;T.setOptions;T.use;T.walkTokens;T.parseInline;ct.parse;lt.lex;/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */const{entries:Il,setPrototypeOf:oa,isFrozen:fp,getPrototypeOf:pp,getOwnPropertyDescriptor:gp}=Object;let{freeze:ye,seal:Re,create:Ol}=Object,{apply:Xr,construct:Qr}=typeof Reflect<"u"&&Reflect;ye||(ye=function(e){return e});Re||(Re=function(e){return e});Xr||(Xr=function(e,n,i){return e.apply(n,i)});Qr||(Qr=function(e,n){return new e(...n)});const Kn=Te(Array.prototype.forEach),aa=Te(Array.prototype.pop),un=Te(Array.prototype.push),li=Te(String.prototype.toLowerCase),Or=Te(String.prototype.toString),la=Te(String.prototype.match),hn=Te(String.prototype.replace),bp=Te(String.prototype.indexOf),mp=Te(String.prototype.trim),Ve=Te(Object.prototype.hasOwnProperty),ge=Te(RegExp.prototype.test),dn=vp(TypeError);function Te(t){return function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return Xr(t,e,i)}}function vp(t){return function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return Qr(t,n)}}function L(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:li;oa&&oa(t,null);let i=e.length;for(;i--;){let r=e[i];if(typeof r=="string"){const s=n(r);s!==r&&(fp(e)||(e[i]=s),r=s)}t[r]=!0}return t}function yp(t){for(let e=0;e<t.length;e++)Ve(t,e)||(t[e]=null);return t}function gt(t){const e=Ol(null);for(const[n,i]of Il(t))Ve(t,n)&&(Array.isArray(i)?e[n]=yp(i):i&&typeof i=="object"&&i.constructor===Object?e[n]=gt(i):e[n]=i);return e}function fn(t,e){for(;t!==null;){const i=gp(t,e);if(i){if(i.get)return Te(i.get);if(typeof i.value=="function")return Te(i.value)}t=pp(t)}function n(){return null}return n}const ca=ye(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Vr=ye(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Lr=ye(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),wp=ye(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Pr=ye(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),xp=ye(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ua=ye(["#text"]),ha=ye(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Nr=ye(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),da=ye(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ei=ye(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),kp=Re(/\{\{[\w\W]*|[\w\W]*\}\}/gm),$p=Re(/<%[\w\W]*|[\w\W]*%>/gm),Sp=Re(/\${[\w\W]*}/gm),_p=Re(/^data-[\-\w.\u00B7-\uFFFF]/),Tp=Re(/^aria-[\-\w]+$/),Vl=Re(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Fp=Re(/^(?:\w+script|data):/i),Cp=Re(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ll=Re(/^html$/i),Dp=Re(/^[a-z][.\w]*(-[.\w]+)+$/i);var fa=Object.freeze({__proto__:null,MUSTACHE_EXPR:kp,ERB_EXPR:$p,TMPLIT_EXPR:Sp,DATA_ATTR:_p,ARIA_ATTR:Tp,IS_ALLOWED_URI:Vl,IS_SCRIPT_OR_DATA:Fp,ATTR_WHITESPACE:Cp,DOCTYPE_NAME:Ll,CUSTOM_ELEMENT:Dp});const pn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Ap=function(){return typeof window>"u"?null:window},Rp=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let i=null;const r="data-tt-policy-suffix";n&&n.hasAttribute(r)&&(i=n.getAttribute(r));const s="dompurify"+(i?"#"+i:"");try{return e.createPolicy(s,{createHTML(o){return o},createScriptURL(o){return o}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}};function Pl(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ap();const e=S=>Pl(S);if(e.version="3.1.7",e.removed=[],!t||!t.document||t.document.nodeType!==pn.document)return e.isSupported=!1,e;let{document:n}=t;const i=n,r=i.currentScript,{DocumentFragment:s,HTMLTemplateElement:o,Node:a,Element:c,NodeFilter:l,NamedNodeMap:u=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:d,DOMParser:f,trustedTypes:p}=t,m=c.prototype,k=fn(m,"cloneNode"),N=fn(m,"remove"),A=fn(m,"nextSibling"),O=fn(m,"childNodes"),P=fn(m,"parentNode");if(typeof o=="function"){const S=n.createElement("template");S.content&&S.content.ownerDocument&&(n=S.content.ownerDocument)}let R,_="";const{implementation:Q,createNodeIterator:we,createDocumentFragment:$e,getElementsByTagName:Ki}=n,{importNode:Nl}=i;let He={};e.isSupported=typeof Il=="function"&&typeof P=="function"&&Q&&Q.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:er,ERB_EXPR:tr,TMPLIT_EXPR:nr,DATA_ATTR:Ml,ARIA_ATTR:zl,IS_SCRIPT_OR_DATA:Bl,ATTR_WHITESPACE:Rs,CUSTOM_ELEMENT:Hl}=fa;let{IS_ALLOWED_URI:Es}=fa,se=null;const Is=L({},[...ca,...Vr,...Lr,...Pr,...ua]);let oe=null;const Os=L({},[...ha,...Nr,...da,...ei]);let te=Object.seal(Ol(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),en=null,ir=null,Vs=!0,rr=!0,Ls=!1,Ps=!0,Ct=!1,sr=!0,ht=!1,or=!1,ar=!1,Dt=!1,Vn=!1,Ln=!1,Ns=!0,Ms=!1;const Ul="user-content-";let lr=!0,tn=!1,At={},Rt=null;const zs=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let Bs=null;const Hs=L({},["audio","video","img","source","image","track"]);let cr=null;const Us=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Pn="http://www.w3.org/1998/Math/MathML",Nn="http://www.w3.org/2000/svg",Ze="http://www.w3.org/1999/xhtml";let Et=Ze,ur=!1,hr=null;const jl=L({},[Pn,Nn,Ze],Or);let nn=null;const ql=["application/xhtml+xml","text/html"],Wl="text/html";let ae=null,It=null;const Gl=n.createElement("form"),js=function(h){return h instanceof RegExp||h instanceof Function},dr=function(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(It&&It===h)){if((!h||typeof h!="object")&&(h={}),h=gt(h),nn=ql.indexOf(h.PARSER_MEDIA_TYPE)===-1?Wl:h.PARSER_MEDIA_TYPE,ae=nn==="application/xhtml+xml"?Or:li,se=Ve(h,"ALLOWED_TAGS")?L({},h.ALLOWED_TAGS,ae):Is,oe=Ve(h,"ALLOWED_ATTR")?L({},h.ALLOWED_ATTR,ae):Os,hr=Ve(h,"ALLOWED_NAMESPACES")?L({},h.ALLOWED_NAMESPACES,Or):jl,cr=Ve(h,"ADD_URI_SAFE_ATTR")?L(gt(Us),h.ADD_URI_SAFE_ATTR,ae):Us,Bs=Ve(h,"ADD_DATA_URI_TAGS")?L(gt(Hs),h.ADD_DATA_URI_TAGS,ae):Hs,Rt=Ve(h,"FORBID_CONTENTS")?L({},h.FORBID_CONTENTS,ae):zs,en=Ve(h,"FORBID_TAGS")?L({},h.FORBID_TAGS,ae):{},ir=Ve(h,"FORBID_ATTR")?L({},h.FORBID_ATTR,ae):{},At=Ve(h,"USE_PROFILES")?h.USE_PROFILES:!1,Vs=h.ALLOW_ARIA_ATTR!==!1,rr=h.ALLOW_DATA_ATTR!==!1,Ls=h.ALLOW_UNKNOWN_PROTOCOLS||!1,Ps=h.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ct=h.SAFE_FOR_TEMPLATES||!1,sr=h.SAFE_FOR_XML!==!1,ht=h.WHOLE_DOCUMENT||!1,Dt=h.RETURN_DOM||!1,Vn=h.RETURN_DOM_FRAGMENT||!1,Ln=h.RETURN_TRUSTED_TYPE||!1,ar=h.FORCE_BODY||!1,Ns=h.SANITIZE_DOM!==!1,Ms=h.SANITIZE_NAMED_PROPS||!1,lr=h.KEEP_CONTENT!==!1,tn=h.IN_PLACE||!1,Es=h.ALLOWED_URI_REGEXP||Vl,Et=h.NAMESPACE||Ze,te=h.CUSTOM_ELEMENT_HANDLING||{},h.CUSTOM_ELEMENT_HANDLING&&js(h.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(te.tagNameCheck=h.CUSTOM_ELEMENT_HANDLING.tagNameCheck),h.CUSTOM_ELEMENT_HANDLING&&js(h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(te.attributeNameCheck=h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),h.CUSTOM_ELEMENT_HANDLING&&typeof h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(te.allowCustomizedBuiltInElements=h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ct&&(rr=!1),Vn&&(Dt=!0),At&&(se=L({},ua),oe=[],At.html===!0&&(L(se,ca),L(oe,ha)),At.svg===!0&&(L(se,Vr),L(oe,Nr),L(oe,ei)),At.svgFilters===!0&&(L(se,Lr),L(oe,Nr),L(oe,ei)),At.mathMl===!0&&(L(se,Pr),L(oe,da),L(oe,ei))),h.ADD_TAGS&&(se===Is&&(se=gt(se)),L(se,h.ADD_TAGS,ae)),h.ADD_ATTR&&(oe===Os&&(oe=gt(oe)),L(oe,h.ADD_ATTR,ae)),h.ADD_URI_SAFE_ATTR&&L(cr,h.ADD_URI_SAFE_ATTR,ae),h.FORBID_CONTENTS&&(Rt===zs&&(Rt=gt(Rt)),L(Rt,h.FORBID_CONTENTS,ae)),lr&&(se["#text"]=!0),ht&&L(se,["html","head","body"]),se.table&&(L(se,["tbody"]),delete en.tbody),h.TRUSTED_TYPES_POLICY){if(typeof h.TRUSTED_TYPES_POLICY.createHTML!="function")throw dn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof h.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw dn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');R=h.TRUSTED_TYPES_POLICY,_=R.createHTML("")}else R===void 0&&(R=Rp(p,r)),R!==null&&typeof _=="string"&&(_=R.createHTML(""));ye&&ye(h),It=h}},qs=L({},["mi","mo","mn","ms","mtext"]),Ws=L({},["annotation-xml"]),Zl=L({},["title","style","font","a","script"]),Gs=L({},[...Vr,...Lr,...wp]),Zs=L({},[...Pr,...xp]),Yl=function(h){let v=P(h);(!v||!v.tagName)&&(v={namespaceURI:Et,tagName:"template"});const $=li(h.tagName),G=li(v.tagName);return hr[h.namespaceURI]?h.namespaceURI===Nn?v.namespaceURI===Ze?$==="svg":v.namespaceURI===Pn?$==="svg"&&(G==="annotation-xml"||qs[G]):!!Gs[$]:h.namespaceURI===Pn?v.namespaceURI===Ze?$==="math":v.namespaceURI===Nn?$==="math"&&Ws[G]:!!Zs[$]:h.namespaceURI===Ze?v.namespaceURI===Nn&&!Ws[G]||v.namespaceURI===Pn&&!qs[G]?!1:!Zs[$]&&(Zl[$]||!Gs[$]):!!(nn==="application/xhtml+xml"&&hr[h.namespaceURI]):!1},Ue=function(h){un(e.removed,{element:h});try{P(h).removeChild(h)}catch{N(h)}},Mn=function(h,v){try{un(e.removed,{attribute:v.getAttributeNode(h),from:v})}catch{un(e.removed,{attribute:null,from:v})}if(v.removeAttribute(h),h==="is"&&!oe[h])if(Dt||Vn)try{Ue(v)}catch{}else try{v.setAttribute(h,"")}catch{}},Ys=function(h){let v=null,$=null;if(ar)h="<remove></remove>"+h;else{const ue=la(h,/^[\r\n\t ]+/);$=ue&&ue[0]}nn==="application/xhtml+xml"&&Et===Ze&&(h='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+h+"</body></html>");const G=R?R.createHTML(h):h;if(Et===Ze)try{v=new f().parseFromString(G,nn)}catch{}if(!v||!v.documentElement){v=Q.createDocument(Et,"template",null);try{v.documentElement.innerHTML=ur?_:G}catch{}}const de=v.body||v.documentElement;return h&&$&&de.insertBefore(n.createTextNode($),de.childNodes[0]||null),Et===Ze?Ki.call(v,ht?"html":"body")[0]:ht?v.documentElement:de},Xs=function(h){return we.call(h.ownerDocument||h,h,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},Qs=function(h){return h instanceof d&&(typeof h.nodeName!="string"||typeof h.textContent!="string"||typeof h.removeChild!="function"||!(h.attributes instanceof u)||typeof h.removeAttribute!="function"||typeof h.setAttribute!="function"||typeof h.namespaceURI!="string"||typeof h.insertBefore!="function"||typeof h.hasChildNodes!="function")},Js=function(h){return typeof a=="function"&&h instanceof a},Ye=function(h,v,$){He[h]&&Kn(He[h],G=>{G.call(e,v,$,It)})},Ks=function(h){let v=null;if(Ye("beforeSanitizeElements",h,null),Qs(h))return Ue(h),!0;const $=ae(h.nodeName);if(Ye("uponSanitizeElement",h,{tagName:$,allowedTags:se}),h.hasChildNodes()&&!Js(h.firstElementChild)&&ge(/<[/\w]/g,h.innerHTML)&&ge(/<[/\w]/g,h.textContent)||h.nodeType===pn.progressingInstruction||sr&&h.nodeType===pn.comment&&ge(/<[/\w]/g,h.data))return Ue(h),!0;if(!se[$]||en[$]){if(!en[$]&&to($)&&(te.tagNameCheck instanceof RegExp&&ge(te.tagNameCheck,$)||te.tagNameCheck instanceof Function&&te.tagNameCheck($)))return!1;if(lr&&!Rt[$]){const G=P(h)||h.parentNode,de=O(h)||h.childNodes;if(de&&G){const ue=de.length;for(let xe=ue-1;xe>=0;--xe){const je=k(de[xe],!0);je.__removalCount=(h.__removalCount||0)+1,G.insertBefore(je,A(h))}}}return Ue(h),!0}return h instanceof c&&!Yl(h)||($==="noscript"||$==="noembed"||$==="noframes")&&ge(/<\/no(script|embed|frames)/i,h.innerHTML)?(Ue(h),!0):(Ct&&h.nodeType===pn.text&&(v=h.textContent,Kn([er,tr,nr],G=>{v=hn(v,G," ")}),h.textContent!==v&&(un(e.removed,{element:h.cloneNode()}),h.textContent=v)),Ye("afterSanitizeElements",h,null),!1)},eo=function(h,v,$){if(Ns&&(v==="id"||v==="name")&&($ in n||$ in Gl))return!1;if(!(rr&&!ir[v]&&ge(Ml,v))){if(!(Vs&&ge(zl,v))){if(!oe[v]||ir[v]){if(!(to(h)&&(te.tagNameCheck instanceof RegExp&&ge(te.tagNameCheck,h)||te.tagNameCheck instanceof Function&&te.tagNameCheck(h))&&(te.attributeNameCheck instanceof RegExp&&ge(te.attributeNameCheck,v)||te.attributeNameCheck instanceof Function&&te.attributeNameCheck(v))||v==="is"&&te.allowCustomizedBuiltInElements&&(te.tagNameCheck instanceof RegExp&&ge(te.tagNameCheck,$)||te.tagNameCheck instanceof Function&&te.tagNameCheck($))))return!1}else if(!cr[v]){if(!ge(Es,hn($,Rs,""))){if(!((v==="src"||v==="xlink:href"||v==="href")&&h!=="script"&&bp($,"data:")===0&&Bs[h])){if(!(Ls&&!ge(Bl,hn($,Rs,"")))){if($)return!1}}}}}}return!0},to=function(h){return h!=="annotation-xml"&&la(h,Hl)},no=function(h){Ye("beforeSanitizeAttributes",h,null);const{attributes:v}=h;if(!v)return;const $={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:oe};let G=v.length;for(;G--;){const de=v[G],{name:ue,namespaceURI:xe,value:je}=de,rn=ae(ue);let pe=ue==="value"?je:mp(je);if($.attrName=rn,$.attrValue=pe,$.keepAttr=!0,$.forceKeepAttr=void 0,Ye("uponSanitizeAttribute",h,$),pe=$.attrValue,$.forceKeepAttr||(Mn(ue,h),!$.keepAttr))continue;if(!Ps&&ge(/\/>/i,pe)){Mn(ue,h);continue}Ct&&Kn([er,tr,nr],ro=>{pe=hn(pe,ro," ")});const io=ae(h.nodeName);if(eo(io,rn,pe)){if(Ms&&(rn==="id"||rn==="name")&&(Mn(ue,h),pe=Ul+pe),sr&&ge(/((--!?|])>)|<\/(style|title)/i,pe)){Mn(ue,h);continue}if(R&&typeof p=="object"&&typeof p.getAttributeType=="function"&&!xe)switch(p.getAttributeType(io,rn)){case"TrustedHTML":{pe=R.createHTML(pe);break}case"TrustedScriptURL":{pe=R.createScriptURL(pe);break}}try{xe?h.setAttributeNS(xe,ue,pe):h.setAttribute(ue,pe),Qs(h)?Ue(h):aa(e.removed)}catch{}}}Ye("afterSanitizeAttributes",h,null)},Xl=function S(h){let v=null;const $=Xs(h);for(Ye("beforeSanitizeShadowDOM",h,null);v=$.nextNode();)Ye("uponSanitizeShadowNode",v,null),!Ks(v)&&(v.content instanceof s&&S(v.content),no(v));Ye("afterSanitizeShadowDOM",h,null)};return e.sanitize=function(S){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=null,$=null,G=null,de=null;if(ur=!S,ur&&(S="<!-->"),typeof S!="string"&&!Js(S))if(typeof S.toString=="function"){if(S=S.toString(),typeof S!="string")throw dn("dirty is not a string, aborting")}else throw dn("toString is not a function");if(!e.isSupported)return S;if(or||dr(h),e.removed=[],typeof S=="string"&&(tn=!1),tn){if(S.nodeName){const je=ae(S.nodeName);if(!se[je]||en[je])throw dn("root node is forbidden and cannot be sanitized in-place")}}else if(S instanceof a)v=Ys("<!---->"),$=v.ownerDocument.importNode(S,!0),$.nodeType===pn.element&&$.nodeName==="BODY"||$.nodeName==="HTML"?v=$:v.appendChild($);else{if(!Dt&&!Ct&&!ht&&S.indexOf("<")===-1)return R&&Ln?R.createHTML(S):S;if(v=Ys(S),!v)return Dt?null:Ln?_:""}v&&ar&&Ue(v.firstChild);const ue=Xs(tn?S:v);for(;G=ue.nextNode();)Ks(G)||(G.content instanceof s&&Xl(G.content),no(G));if(tn)return S;if(Dt){if(Vn)for(de=$e.call(v.ownerDocument);v.firstChild;)de.appendChild(v.firstChild);else de=v;return(oe.shadowroot||oe.shadowrootmode)&&(de=Nl.call(i,de,!0)),de}let xe=ht?v.outerHTML:v.innerHTML;return ht&&se["!doctype"]&&v.ownerDocument&&v.ownerDocument.doctype&&v.ownerDocument.doctype.name&&ge(Ll,v.ownerDocument.doctype.name)&&(xe="<!DOCTYPE "+v.ownerDocument.doctype.name+`>
`+xe),Ct&&Kn([er,tr,nr],je=>{xe=hn(xe,je," ")}),R&&Ln?R.createHTML(xe):xe},e.setConfig=function(){let S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};dr(S),or=!0},e.clearConfig=function(){It=null,or=!1},e.isValidAttribute=function(S,h,v){It||dr({});const $=ae(S),G=ae(h);return eo($,G,v)},e.addHook=function(S,h){typeof h=="function"&&(He[S]=He[S]||[],un(He[S],h))},e.removeHook=function(S){if(He[S])return aa(He[S])},e.removeHooks=function(S){He[S]&&(He[S]=[])},e.removeAllHooks=function(){He={}},e}var bt=Pl();function Ep(t){const e=[],n=T.lexer(t,{gfm:!0,breaks:!0});function i(s){for(const o of s)if(o.type==="list")i(o.items);else if(o.type==="list_item"){const a=o;if(a.task){const c=bt.sanitize(a.text),l=!!a.checked;e.push({id:oi(),text:c,checked:l})}a.tokens&&a.tokens.length>0&&i(a.tokens)}else r(o)&&o.tokens&&o.tokens.length>0&&i(o.tokens)}function r(s){return"tokens"in s&&Array.isArray(s.tokens)}return i(n),e}function xi(t){const e=new T.Renderer;e.link=(i,r,s)=>{const o=bt.sanitize(i),a=r?` title="${bt.sanitize(r)}"`:"";return`<a href="${o}"${a} target="_blank" rel="noopener noreferrer">${s}</a>`},e.image=(i,r,s)=>{const o=bt.sanitize(i),a=s?bt.sanitize(s):"",c=r?` title="${bt.sanitize(r)}"`:"";return`<img src="${o}" alt="${a}"${c} style="max-width: 100%; height: auto;">`};const n=T.parseInline(t,{renderer:e});return bt.sanitize(n)}function Ip(t,e){let n=null;return(...i)=>{n!==null&&clearTimeout(n),n=setTimeout(()=>t(...i),e)}}function pa(t){let e;return{c(){e=E("p"),e.textContent="Upload successful!",V(e,"class","text-green-500 mt-4"),V(e,"role","status")},m(n,i){H(n,e,i)},d(n){n&&z(e)}}}function Op(t){let e,n,i,r,s,o,a,c,l,u,d,f=t[2]&&pa();return{c(){e=E("fluent-card"),n=E("h2"),n.textContent="Upload Checklist Templates",i=Y(),r=E("p"),r.textContent="Drag & drop Markdown files here or",s=Y(),o=E("input"),a=Y(),c=E("label"),c.innerHTML='<fluent-button role="button" appearance="accent">Choose Files</fluent-button>',l=Y(),f&&f.c(),V(n,"class","text-2xl mb-4"),V(r,"class","mb-4"),V(o,"type","file"),V(o,"id","file-input"),V(o,"accept",".md,text/markdown"),o.multiple=!0,V(o,"class","hidden"),V(o,"aria-label","File input for uploading checklist templates"),V(c,"for","file-input"),I(e,"class","p-8 text-center svelte-sh89vg"),I(e,"role","region"),I(e,"aria-label","Upload area for checklist templates"),ao(e,"dragover",t[1])},m(p,m){H(p,e,m),F(e,n),F(e,i),F(e,r),F(e,s),F(e,o),F(e,a),F(e,c),F(e,l),f&&f.m(e,null),u||(d=[q(o,"change",t[6]),q(o,"change",t[7]),q(e,"dragenter",t[8]),q(e,"dragleave",t[9]),q(e,"dragover",oo(t[5])),q(e,"drop",oo(t[4]))],u=!0)},p(p,[m]){p[2]?f||(f=pa(),f.c(),f.m(e,null)):f&&(f.d(1),f=null),m&2&&ao(e,"dragover",p[1])},i:ie,o:ie,d(p){p&&z(e),f&&f.d(),u=!1,Ee(d)}}}function Vp(t,e,n){On().register(In(),Cs());let i=null,r=!1,s=!1;const o=Ip(()=>{n(2,s=!0),setTimeout(()=>n(2,s=!1),3e3)},300);async function a(m){for(let k of Array.from(m)){if(k.type!=="text/markdown"&&!k.name.endsWith(".md")){console.warn(`${k.name} is not a Markdown file.`);continue}try{const N=await k.text(),A=Ep(N);nt.addTemplate(k.name,A),o()}catch(N){console.error(`Error processing file ${k.name}:`,N)}}n(0,i=null)}function c(m){var k;m.preventDefault(),n(1,r=!1),(k=m.dataTransfer)!=null&&k.files&&a(m.dataTransfer.files)}function l(m){nc.call(this,t,m)}function u(){i=this.files,n(0,i)}return[i,r,s,a,c,l,u,()=>i&&a(i),()=>n(1,r=!0),()=>n(1,r=!1)]}class Lp extends Gt{constructor(e){super(),Wt(this,e,Vp,Op,$t,{})}}function ga(t,e,n){const i=t.slice();return i[9]=e[n],i}function ba(t,e,n){const i=t.slice();return i[12]=e[n],i}function Pp(t){let e,n=We(t[0].templates),i=[];for(let r=0;r<n.length;r+=1)i[r]=ma(ba(t,n,r));return{c(){e=E("ul");for(let r=0;r<i.length;r+=1)i[r].c()},m(r,s){H(r,e,s);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(r,s){if(s&7){n=We(r[0].templates);let o;for(o=0;o<n.length;o+=1){const a=ba(r,n,o);i[o]?i[o].p(a,s):(i[o]=ma(a),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(r){r&&z(e),Cn(i,r)}}}function Np(t){let e;return{c(){e=E("p"),e.textContent="No checklist templates uploaded yet."},m(n,i){H(n,e,i)},p:ie,d(n){n&&z(e)}}}function ma(t){let e,n,i=t[12].name+"",r,s,o,a,c,l,u,d,f;function p(){return t[3](t[12])}function m(...A){return t[4](t[12],...A)}function k(){return t[5](t[12])}function N(...A){return t[6](t[12],...A)}return{c(){e=E("li"),n=E("span"),r=st(i),s=Y(),o=E("div"),a=E("fluent-button"),a.textContent="Start",c=Y(),l=E("fluent-button"),l.textContent="Delete",u=Y(),I(a,"appearance","accent"),V(e,"class","flex justify-between items-center mb-2")},m(A,O){H(A,e,O),F(e,n),F(n,r),F(e,s),F(e,o),F(o,a),F(o,c),F(o,l),F(e,u),d||(f=[q(a,"click",p),q(a,"keydown",m),q(l,"click",k),q(l,"keydown",N)],d=!0)},p(A,O){t=A,O&1&&i!==(i=t[12].name+"")&&Kr(r,i)},d(A){A&&z(e),d=!1,Ee(f)}}}function Mp(t){let e,n=We(t[0].activeChecklists),i=[];for(let r=0;r<n.length;r+=1)i[r]=va(ga(t,n,r));return{c(){e=E("ul");for(let r=0;r<i.length;r+=1)i[r].c()},m(r,s){H(r,e,s);for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(e,null)},p(r,s){if(s&1){n=We(r[0].activeChecklists);let o;for(o=0;o<n.length;o+=1){const a=ga(r,n,o);i[o]?i[o].p(a,s):(i[o]=va(a),i[o].c(),i[o].m(e,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(r){r&&z(e),Cn(i,r)}}}function zp(t){let e;return{c(){e=E("p"),e.textContent="No active checklists."},m(n,i){H(n,e,i)},p:ie,d(n){n&&z(e)}}}function va(t){let e,n,i=t[9].name+"",r,s,o,a,c,l;function u(){return t[7](t[9])}function d(...f){return t[8](t[9],...f)}return{c(){e=E("li"),n=E("span"),r=st(i),s=Y(),o=E("fluent-button"),o.textContent="Remove",a=Y(),V(e,"class","flex justify-between items-center mb-2")},m(f,p){H(f,e,p),F(e,n),F(n,r),F(e,s),F(e,o),F(e,a),c||(l=[q(o,"click",u),q(o,"keydown",d)],c=!0)},p(f,p){t=f,p&1&&i!==(i=t[9].name+"")&&Kr(r,i)},d(f){f&&z(e),c=!1,Ee(l)}}}function Bp(t){let e,n,i,r,s,o,a;function c(m,k){return m[0].templates.length===0?Np:Pp}let l=c(t),u=l(t);function d(m,k){return m[0].activeChecklists.length===0?zp:Mp}let f=d(t),p=f(t);return{c(){e=E("fluent-card"),n=E("h2"),n.textContent="Manage Checklist Templates",i=Y(),u.c(),r=Y(),s=E("fluent-card"),o=E("h2"),o.textContent="Active Checklists",a=Y(),p.c(),V(n,"class","text-2xl mb-4"),I(e,"class","p-4"),V(o,"class","text-2xl mb-4"),I(s,"class","p-4 mt-4")},m(m,k){H(m,e,k),F(e,n),F(e,i),u.m(e,null),H(m,r,k),H(m,s,k),F(s,o),F(s,a),p.m(s,null)},p(m,[k]){l===(l=c(m))&&u?u.p(m,k):(u.d(1),u=l(m),u&&(u.c(),u.m(e,null))),f===(f=d(m))&&p?p.p(m,k):(p.d(1),p=f(m),p&&(p.c(),p.m(s,null)))},i:ie,o:ie,d(m){m&&(z(e),z(r),z(s)),u.d(),p.d()}}}function Mr(t,e){(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),e())}function Hp(t,e,n){let i;Fn(t,nt,f=>n(0,i=f)),On().register(In(),Cs());function r(f){nt.removeTemplate(f)}function s(f){nt.startChecklist(f)}return[i,r,s,f=>s(f.id),(f,p)=>Mr(p,()=>s(f.id)),f=>r(f.id),(f,p)=>Mr(p,()=>r(f.id)),f=>nt.removeActiveChecklist(f.id),(f,p)=>Mr(p,()=>nt.removeActiveChecklist(f.id))]}class Up extends Gt{constructor(e){super(),Wt(this,e,Hp,Bp,$t,{})}}function ya(t,e,n){const i=t.slice();return i[18]=e[n],i}function wa(t,e,n){const i=t.slice();return i[21]=e[n],i}function jp(t){let e,n,i,r,s,o,a,c=We(t[1].activeChecklists),l=[];for(let d=0;d<c.length;d+=1)l[d]=xa(wa(t,c,d));let u=t[0]&&ka(t);return{c(){e=E("fluent-select"),n=E("fluent-option"),n.textContent="Select a checklist",i=Y();for(let d=0;d<l.length;d+=1)l[d].c();r=Y(),u&&u.c(),s=Jr(),I(n,"value",""),I(e,"class","w-full mb-4")},m(d,f){H(d,e,f),F(e,n),F(e,i);for(let p=0;p<l.length;p+=1)l[p]&&l[p].m(e,null);H(d,r,f),u&&u.m(d,f),H(d,s,f),o||(a=q(e,"change",t[8]),o=!0)},p(d,f){if(f&2){c=We(d[1].activeChecklists);let p;for(p=0;p<c.length;p+=1){const m=wa(d,c,p);l[p]?l[p].p(m,f):(l[p]=xa(m),l[p].c(),l[p].m(e,null))}for(;p<l.length;p+=1)l[p].d(1);l.length=c.length}d[0]?u?u.p(d,f):(u=ka(d),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},d(d){d&&(z(e),z(r),z(s)),Cn(l,d),u&&u.d(d),o=!1,a()}}}function qp(t){let e;return{c(){e=E("p"),e.textContent="No active checklists available to view."},m(n,i){H(n,e,i)},p:ie,d(n){n&&z(e)}}}function xa(t){let e,n=t[21].name+"",i,r;return{c(){e=E("fluent-option"),i=st(n),I(e,"value",r=t[21].id)},m(s,o){H(s,e,o),F(e,i)},p(s,o){o&2&&n!==(n=s[21].name+"")&&Kr(i,n),o&2&&r!==(r=s[21].id)&&I(e,"value",r)},d(s){s&&z(e)}}}function ka(t){let e,n,i,r,s,o,a,c,l,u,d,f,p,m,k,N;function A(R,_){return R[2]==="list"?Gp:Wp}let O=A(t),P=O(t);return{c(){e=E("div"),n=E("div"),i=E("fluent-button"),r=st("List"),o=Y(),a=E("fluent-button"),c=st("Carousel"),u=Y(),d=E("fluent-progress-ring"),p=Y(),P.c(),m=Jr(),I(i,"role","button"),I(i,"tabindex","0"),I(i,"appearance",s=t[2]==="list"?"accent":"lightweight"),I(a,"role","button"),I(a,"tabindex","0"),I(a,"appearance",l=t[2]==="carousel"?"accent":"lightweight"),V(n,"class","flex justify-center"),I(d,"value",t[4]),I(d,"aria-label",f=`Checklist progress: ${t[4]}%`),V(e,"class","flex justify-between items-center mb-4")},m(R,_){H(R,e,_),F(e,n),F(n,i),F(i,r),F(n,o),F(n,a),F(a,c),F(e,u),F(e,d),H(R,p,_),P.m(R,_),H(R,m,_),k||(N=[q(i,"click",t[10]),q(i,"keydown",t[11]),q(a,"click",t[12]),q(a,"keydown",t[13])],k=!0)},p(R,_){_&4&&s!==(s=R[2]==="list"?"accent":"lightweight")&&I(i,"appearance",s),_&4&&l!==(l=R[2]==="carousel"?"accent":"lightweight")&&I(a,"appearance",l),_&16&&I(d,"value",R[4]),_&16&&f!==(f=`Checklist progress: ${R[4]}%`)&&I(d,"aria-label",f),O===(O=A(R))&&P?P.p(R,_):(P.d(1),P=O(R),P&&(P.c(),P.m(m.parentNode,m)))},d(R){R&&(z(e),z(p),z(m)),P.d(R),k=!1,Ee(N)}}}function Wp(t){let e,n,i,r,s,o,a;function c(d,f){return d[0].items.length>0?Yp:Zp}let l=c(t),u=l(t);return{c(){e=E("div"),n=E("fluent-button"),n.textContent="<",i=Y(),u.c(),r=Y(),s=E("fluent-button"),s.textContent=">",I(n,"role","button"),I(n,"tabindex","0"),I(n,"aria-label","Previous item"),I(s,"role","button"),I(s,"tabindex","0"),I(s,"aria-label","Next item"),V(e,"class","flex justify-between items-center")},m(d,f){H(d,e,f),F(e,n),F(e,i),u.m(e,null),F(e,r),F(e,s),o||(a=[q(n,"click",t[6]),q(n,"keydown",t[15]),q(s,"click",t[5]),q(s,"keydown",t[17])],o=!0)},p(d,f){l===(l=c(d))&&u?u.p(d,f):(u.d(1),u=l(d),u&&(u.c(),u.m(e,r)))},d(d){d&&z(e),u.d(),o=!1,Ee(a)}}}function Gp(t){let e,n=We(t[0].items),i=[];for(let r=0;r<n.length;r+=1)i[r]=$a(ya(t,n,r));return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=Jr()},m(r,s){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(r,s);H(r,e,s)},p(r,s){if(s&129){n=We(r[0].items);let o;for(o=0;o<n.length;o+=1){const a=ya(r,n,o);i[o]?i[o].p(a,s):(i[o]=$a(a),i[o].c(),i[o].m(e.parentNode,e))}for(;o<i.length;o+=1)i[o].d(1);i.length=n.length}},d(r){r&&z(e),Cn(i,r)}}}function Zp(t){let e;return{c(){e=E("p"),e.textContent="No items to display."},m(n,i){H(n,e,i)},p:ie,d(n){n&&z(e)}}}function Yp(t){let e,n=xi(t[0].items[t[3]].text)+"",i,r,s;return{c(){e=E("fluent-checkbox"),I(e,"checked",i=t[0].items[t[3]].checked)},m(o,a){H(o,e,a),e.innerHTML=n,r||(s=q(e,"change",t[16]),r=!0)},p(o,a){a&9&&n!==(n=xi(o[0].items[o[3]].text)+"")&&(e.innerHTML=n),a&9&&i!==(i=o[0].items[o[3]].checked)&&I(e,"checked",i)},d(o){o&&z(e),r=!1,s()}}}function $a(t){let e,n,i=xi(t[18].text)+"",r,s,o,a;function c(){return t[14](t[18])}return{c(){e=E("div"),n=E("fluent-checkbox"),s=Y(),I(n,"checked",r=t[18].checked),V(e,"class","mb-2")},m(l,u){H(l,e,u),F(e,n),n.innerHTML=i,F(e,s),o||(a=q(n,"change",c),o=!0)},p(l,u){t=l,u&1&&i!==(i=xi(t[18].text)+"")&&(n.innerHTML=i),u&1&&r!==(r=t[18].checked)&&I(n,"checked",r)},d(l){l&&z(e),o=!1,a()}}}function Xp(t){let e,n,i;function r(a,c){return a[1].activeChecklists.length===0?qp:jp}let s=r(t),o=s(t);return{c(){e=E("fluent-card"),n=E("h2"),n.textContent="View Active Checklist",i=Y(),o.c(),V(n,"class","text-2xl mb-4"),I(e,"class","p-4")},m(a,c){H(a,e,c),F(e,n),F(e,i),o.m(e,null)},p(a,[c]){s===(s=r(a))&&o?o.p(a,c):(o.d(1),o=s(a),o&&(o.c(),o.m(e,null)))},i:ie,o:ie,d(a){a&&z(e),o.d()}}}function ti(t,e){(t.code==="Enter"||t.code==="Space")&&(t.preventDefault(),e())}function Qp(t,e,n){let i,r,s;Fn(t,nt,_=>n(1,s=_)),On().register(In(),Cs(),Ff(),Lf(),Ef(),Vf());let o=null,a="list",c=0;function l(){i&&n(3,c=(c+1)%i.items.length)}function u(){i&&n(3,c=(c-1+i.items.length)%i.items.length)}function d(_,Q){const we=_.items.map($e=>$e.id===Q.id?{...$e,checked:!$e.checked}:$e);nt.updateActiveChecklist(_.id,we)}function f(_){const Q=_.target;n(9,o=Q.value)}const p=()=>n(2,a="list"),m=_=>ti(_,()=>n(2,a="list")),k=()=>n(2,a="carousel"),N=_=>ti(_,()=>n(2,a="carousel")),A=_=>d(i,_),O=_=>ti(_,u),P=()=>d(i,i.items[c]),R=_=>ti(_,l);return t.$$.update=()=>{t.$$.dirty&514&&n(0,i=s.activeChecklists.find(_=>_.id===o)),t.$$.dirty&1&&n(4,r=i?Math.round(i.items.filter(_=>_.checked).length/i.items.length*100):0)},[i,s,a,c,r,l,u,d,f,o,p,m,k,N,A,O,P,R]}class Jp extends Gt{constructor(e){super(),Wt(this,e,Qp,Xp,$t,{})}}function Kp(t){let e,n;return e=new Jp({}),{c(){wn(e.$$.fragment)},m(i,r){Bt(e,i,r),n=!0},i(i){n||(it(e.$$.fragment,i),n=!0)},o(i){yt(e.$$.fragment,i),n=!1},d(i){Ht(e,i)}}}function eg(t){let e,n;return e=new Up({}),{c(){wn(e.$$.fragment)},m(i,r){Bt(e,i,r),n=!0},i(i){n||(it(e.$$.fragment,i),n=!0)},o(i){yt(e.$$.fragment,i),n=!1},d(i){Ht(e,i)}}}function tg(t){let e,n;return e=new Lp({}),{c(){wn(e.$$.fragment)},m(i,r){Bt(e,i,r),n=!0},i(i){n||(it(e.$$.fragment,i),n=!0)},o(i){yt(e.$$.fragment,i),n=!1},d(i){Ht(e,i)}}}function ng(t){let e,n,i,r,s,o,a,c;n=new Bf({}),r=new jf({});const l=[tg,eg,Kp],u=[];function d(f,p){return f[0]==="upload"?0:f[0]==="manage"?1:f[0]==="view"?2:-1}return~(o=d(t))&&(a=u[o]=l[o](t)),{c(){e=E("div"),wn(n.$$.fragment),i=Y(),wn(r.$$.fragment),s=Y(),a&&a.c(),V(e,"class","container mx-auto px-4 py-8 svelte-enawbr")},m(f,p){H(f,e,p),Bt(n,e,null),F(e,i),Bt(r,e,null),F(e,s),~o&&u[o].m(e,null),c=!0},p(f,[p]){let m=o;o=d(f),o!==m&&(a&&(ac(),yt(u[m],1,1,()=>{u[m]=null}),lc()),~o?(a=u[o],a||(a=u[o]=l[o](f),a.c()),it(a,1),a.m(e,null)):a=null)},i(f){c||(it(n.$$.fragment,f),it(r.$$.fragment,f),it(a),c=!0)},o(f){yt(n.$$.fragment,f),yt(r.$$.fragment,f),yt(a),c=!1},d(f){f&&z(e),Ht(n),Ht(r),~o&&u[o].d()}}}function ig(t,e,n){let i;return Fn(t,Yr,r=>n(0,i=r)),[i]}class rg extends Gt{constructor(e){super(),Wt(this,e,ig,ng,$t,{})}}new rg({target:document.body});
