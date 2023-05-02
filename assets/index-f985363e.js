(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function vf(s,e){const t=Object.create(null),n=s.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function Ef(s){if(Oe(s)){const e={};for(let t=0;t<s.length;t++){const n=s[t],i=Qt(n)?Dx(n):Ef(n);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Qt(s))return s;if(_t(s))return s}}const Bx=/;(?![^(]*\))/g,Rx=/:([^]+)/,Lx=/\/\*.*?\*\//gs;function Dx(s){const e={};return s.replace(Lx,"").split(Bx).forEach(t=>{if(t){const n=t.split(Rx);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function xf(s){let e="";if(Qt(s))e=s;else if(Oe(s))for(let t=0;t<s.length;t++){const n=xf(s[t]);n&&(e+=n+" ")}else if(_t(s))for(const t in s)s[t]&&(e+=t+" ");return e.trim()}const Px="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ux=vf(Px);function x_(s){return!!s||s===""}const sP=s=>Qt(s)?s:s==null?"":Oe(s)||_t(s)&&(s.toString===S_||!ke(s.toString))?JSON.stringify(s,y_,2):String(s),y_=(s,e)=>e&&e.__v_isRef?y_(s,e.value):Zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,i])=>(t[`${n} =>`]=i,t),{})}:I_(e)?{[`Set(${e.size})`]:[...e.values()]}:_t(e)&&!Oe(e)&&!w_(e)?String(e):e,ft={},Jr=[],Yn=()=>{},Fx=()=>!1,Nx=/^on[^a-z]/,$c=s=>Nx.test(s),yf=s=>s.startsWith("onUpdate:"),An=Object.assign,If=(s,e)=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)},Qx=Object.prototype.hasOwnProperty,Ze=(s,e)=>Qx.call(s,e),Oe=Array.isArray,Zr=s=>jc(s)==="[object Map]",I_=s=>jc(s)==="[object Set]",ke=s=>typeof s=="function",Qt=s=>typeof s=="string",Cf=s=>typeof s=="symbol",_t=s=>s!==null&&typeof s=="object",C_=s=>_t(s)&&ke(s.then)&&ke(s.catch),S_=Object.prototype.toString,jc=s=>S_.call(s),Ox=s=>jc(s).slice(8,-1),w_=s=>jc(s)==="[object Object]",Sf=s=>Qt(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,lc=vf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kc=s=>{const e=Object.create(null);return t=>e[t]||(e[t]=s(t))},kx=/-(\w)/g,vi=Kc(s=>s.replace(kx,(e,t)=>t?t.toUpperCase():"")),Gx=/\B([A-Z])/g,bo=Kc(s=>s.replace(Gx,"-$1").toLowerCase()),Yc=Kc(s=>s.charAt(0).toUpperCase()+s.slice(1)),gh=Kc(s=>s?`on${Yc(s)}`:""),Fa=(s,e)=>!Object.is(s,e),mh=(s,e)=>{for(let t=0;t<s.length;t++)s[t](e)},Bc=(s,e,t)=>{Object.defineProperty(s,e,{configurable:!0,enumerable:!1,value:t})},Hx=s=>{const e=parseFloat(s);return isNaN(e)?s:e};let _A;const Vx=()=>_A||(_A=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let zn;class zx{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=zn,!e&&zn&&(this.index=(zn.scopes||(zn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=zn;try{return zn=this,e()}finally{zn=t}}}on(){zn=this}off(){zn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Wx(s,e=zn){e&&e.active&&e.effects.push(s)}function qx(){return zn}const wf=s=>{const e=new Set(s);return e.w=0,e.n=0,e},M_=s=>(s.w&ms)>0,b_=s=>(s.n&ms)>0,$x=({deps:s})=>{if(s.length)for(let e=0;e<s.length;e++)s[e].w|=ms},jx=s=>{const{deps:e}=s;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];M_(i)&&!b_(i)?i.delete(s):e[t++]=i,i.w&=~ms,i.n&=~ms}e.length=t}},Id=new WeakMap;let fa=0,ms=1;const Cd=30;let Wn;const Ys=Symbol(""),Sd=Symbol("");class Mf{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Wx(this,n)}run(){if(!this.active)return this.fn();let e=Wn,t=fs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Wn,Wn=this,fs=!0,ms=1<<++fa,fa<=Cd?$x(this):vA(this),this.fn()}finally{fa<=Cd&&jx(this),ms=1<<--fa,Wn=this.parent,fs=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Wn===this?this.deferStop=!0:this.active&&(vA(this),this.onStop&&this.onStop(),this.active=!1)}}function vA(s){const{deps:e}=s;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(s);e.length=0}}let fs=!0;const T_=[];function To(){T_.push(fs),fs=!1}function Bo(){const s=T_.pop();fs=s===void 0?!0:s}function _n(s,e,t){if(fs&&Wn){let n=Id.get(s);n||Id.set(s,n=new Map);let i=n.get(t);i||n.set(t,i=wf()),B_(i)}}function B_(s,e){let t=!1;fa<=Cd?b_(s)||(s.n|=ms,t=!M_(s)):t=!s.has(Wn),t&&(s.add(Wn),Wn.deps.push(s))}function zi(s,e,t,n,i,r){const o=Id.get(s);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Oe(s)){const l=Number(n);o.forEach((c,h)=>{(h==="length"||h>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Oe(s)?Sf(t)&&a.push(o.get("length")):(a.push(o.get(Ys)),Zr(s)&&a.push(o.get(Sd)));break;case"delete":Oe(s)||(a.push(o.get(Ys)),Zr(s)&&a.push(o.get(Sd)));break;case"set":Zr(s)&&a.push(o.get(Ys));break}if(a.length===1)a[0]&&wd(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);wd(wf(l))}}function wd(s,e){const t=Oe(s)?s:[...s];for(const n of t)n.computed&&EA(n);for(const n of t)n.computed||EA(n)}function EA(s,e){(s!==Wn||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}const Kx=vf("__proto__,__v_isRef,__isVue"),R_=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Cf)),Yx=bf(),Xx=bf(!1,!0),Jx=bf(!0),xA=Zx();function Zx(){const s={};return["includes","indexOf","lastIndexOf"].forEach(e=>{s[e]=function(...t){const n=tt(this);for(let r=0,o=this.length;r<o;r++)_n(n,"get",r+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(tt)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{s[e]=function(...t){To();const n=tt(this)[e].apply(this,t);return Bo(),n}}),s}function ey(s){const e=tt(this);return _n(e,"has",s),e.hasOwnProperty(s)}function bf(s=!1,e=!1){return function(n,i,r){if(i==="__v_isReactive")return!s;if(i==="__v_isReadonly")return s;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(s?e?gy:F_:e?U_:P_).get(n))return n;const o=Oe(n);if(!s){if(o&&Ze(xA,i))return Reflect.get(xA,i,r);if(i==="hasOwnProperty")return ey}const a=Reflect.get(n,i,r);return(Cf(i)?R_.has(i):Kx(i))||(s||_n(n,"get",i),e)?a:jt(a)?o&&Sf(i)?a:a.value:_t(a)?s?N_(a):Za(a):a}}const ty=L_(),ny=L_(!0);function L_(s=!1){return function(t,n,i,r){let o=t[n];if(lo(o)&&jt(o)&&!jt(i))return!1;if(!s&&(!Rc(i)&&!lo(i)&&(o=tt(o),i=tt(i)),!Oe(t)&&jt(o)&&!jt(i)))return o.value=i,!0;const a=Oe(t)&&Sf(n)?Number(n)<t.length:Ze(t,n),l=Reflect.set(t,n,i,r);return t===tt(r)&&(a?Fa(i,o)&&zi(t,"set",n,i):zi(t,"add",n,i)),l}}function iy(s,e){const t=Ze(s,e);s[e];const n=Reflect.deleteProperty(s,e);return n&&t&&zi(s,"delete",e,void 0),n}function sy(s,e){const t=Reflect.has(s,e);return(!Cf(e)||!R_.has(e))&&_n(s,"has",e),t}function ry(s){return _n(s,"iterate",Oe(s)?"length":Ys),Reflect.ownKeys(s)}const D_={get:Yx,set:ty,deleteProperty:iy,has:sy,ownKeys:ry},oy={get:Jx,set(s,e){return!0},deleteProperty(s,e){return!0}},ay=An({},D_,{get:Xx,set:ny}),Tf=s=>s,Xc=s=>Reflect.getPrototypeOf(s);function rl(s,e,t=!1,n=!1){s=s.__v_raw;const i=tt(s),r=tt(e);t||(e!==r&&_n(i,"get",e),_n(i,"get",r));const{has:o}=Xc(i),a=n?Tf:t?Lf:Na;if(o.call(i,e))return a(s.get(e));if(o.call(i,r))return a(s.get(r));s!==i&&s.get(e)}function ol(s,e=!1){const t=this.__v_raw,n=tt(t),i=tt(s);return e||(s!==i&&_n(n,"has",s),_n(n,"has",i)),s===i?t.has(s):t.has(s)||t.has(i)}function al(s,e=!1){return s=s.__v_raw,!e&&_n(tt(s),"iterate",Ys),Reflect.get(s,"size",s)}function yA(s){s=tt(s);const e=tt(this);return Xc(e).has.call(e,s)||(e.add(s),zi(e,"add",s,s)),this}function IA(s,e){e=tt(e);const t=tt(this),{has:n,get:i}=Xc(t);let r=n.call(t,s);r||(s=tt(s),r=n.call(t,s));const o=i.call(t,s);return t.set(s,e),r?Fa(e,o)&&zi(t,"set",s,e):zi(t,"add",s,e),this}function CA(s){const e=tt(this),{has:t,get:n}=Xc(e);let i=t.call(e,s);i||(s=tt(s),i=t.call(e,s)),n&&n.call(e,s);const r=e.delete(s);return i&&zi(e,"delete",s,void 0),r}function SA(){const s=tt(this),e=s.size!==0,t=s.clear();return e&&zi(s,"clear",void 0,void 0),t}function ll(s,e){return function(n,i){const r=this,o=r.__v_raw,a=tt(o),l=e?Tf:s?Lf:Na;return!s&&_n(a,"iterate",Ys),o.forEach((c,h)=>n.call(i,l(c),l(h),r))}}function cl(s,e,t){return function(...n){const i=this.__v_raw,r=tt(i),o=Zr(r),a=s==="entries"||s===Symbol.iterator&&o,l=s==="keys"&&o,c=i[s](...n),h=t?Tf:e?Lf:Na;return!e&&_n(r,"iterate",l?Sd:Ys),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function ji(s){return function(...e){return s==="delete"?!1:this}}function ly(){const s={get(r){return rl(this,r)},get size(){return al(this)},has:ol,add:yA,set:IA,delete:CA,clear:SA,forEach:ll(!1,!1)},e={get(r){return rl(this,r,!1,!0)},get size(){return al(this)},has:ol,add:yA,set:IA,delete:CA,clear:SA,forEach:ll(!1,!0)},t={get(r){return rl(this,r,!0)},get size(){return al(this,!0)},has(r){return ol.call(this,r,!0)},add:ji("add"),set:ji("set"),delete:ji("delete"),clear:ji("clear"),forEach:ll(!0,!1)},n={get(r){return rl(this,r,!0,!0)},get size(){return al(this,!0)},has(r){return ol.call(this,r,!0)},add:ji("add"),set:ji("set"),delete:ji("delete"),clear:ji("clear"),forEach:ll(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=cl(r,!1,!1),t[r]=cl(r,!0,!1),e[r]=cl(r,!1,!0),n[r]=cl(r,!0,!0)}),[s,t,e,n]}const[cy,hy,uy,dy]=ly();function Bf(s,e){const t=e?s?dy:uy:s?hy:cy;return(n,i,r)=>i==="__v_isReactive"?!s:i==="__v_isReadonly"?s:i==="__v_raw"?n:Reflect.get(Ze(t,i)&&i in n?t:n,i,r)}const fy={get:Bf(!1,!1)},Ay={get:Bf(!1,!0)},py={get:Bf(!0,!1)},P_=new WeakMap,U_=new WeakMap,F_=new WeakMap,gy=new WeakMap;function my(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _y(s){return s.__v_skip||!Object.isExtensible(s)?0:my(Ox(s))}function Za(s){return lo(s)?s:Rf(s,!1,D_,fy,P_)}function vy(s){return Rf(s,!1,ay,Ay,U_)}function N_(s){return Rf(s,!0,oy,py,F_)}function Rf(s,e,t,n,i){if(!_t(s)||s.__v_raw&&!(e&&s.__v_isReactive))return s;const r=i.get(s);if(r)return r;const o=_y(s);if(o===0)return s;const a=new Proxy(s,o===2?n:t);return i.set(s,a),a}function eo(s){return lo(s)?eo(s.__v_raw):!!(s&&s.__v_isReactive)}function lo(s){return!!(s&&s.__v_isReadonly)}function Rc(s){return!!(s&&s.__v_isShallow)}function Q_(s){return eo(s)||lo(s)}function tt(s){const e=s&&s.__v_raw;return e?tt(e):s}function O_(s){return Bc(s,"__v_skip",!0),s}const Na=s=>_t(s)?Za(s):s,Lf=s=>_t(s)?N_(s):s;function k_(s){fs&&Wn&&(s=tt(s),B_(s.dep||(s.dep=wf())))}function G_(s,e){s=tt(s);const t=s.dep;t&&wd(t)}function jt(s){return!!(s&&s.__v_isRef===!0)}function Ey(s){return H_(s,!1)}function xy(s){return H_(s,!0)}function H_(s,e){return jt(s)?s:new yy(s,e)}class yy{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:tt(e),this._value=t?e:Na(e)}get value(){return k_(this),this._value}set value(e){const t=this.__v_isShallow||Rc(e)||lo(e);e=t?e:tt(e),Fa(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Na(e),G_(this))}}function Xs(s){return jt(s)?s.value:s}const Iy={get:(s,e,t)=>Xs(Reflect.get(s,e,t)),set:(s,e,t,n)=>{const i=s[e];return jt(i)&&!jt(t)?(i.value=t,!0):Reflect.set(s,e,t,n)}};function V_(s){return eo(s)?s:new Proxy(s,Iy)}var z_;class Cy{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[z_]=!1,this._dirty=!0,this.effect=new Mf(e,()=>{this._dirty||(this._dirty=!0,G_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=tt(this);return k_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}z_="__v_isReadonly";function Sy(s,e,t=!1){let n,i;const r=ke(s);return r?(n=s,i=Yn):(n=s.get,i=s.set),new Cy(n,i,r||!i,t)}function As(s,e,t,n){let i;try{i=n?s(...n):s()}catch(r){Jc(r,e,t)}return i}function Xn(s,e,t,n){if(ke(s)){const r=As(s,e,t,n);return r&&C_(r)&&r.catch(o=>{Jc(o,e,t)}),r}const i=[];for(let r=0;r<s.length;r++)i.push(Xn(s[r],e,t,n));return i}function Jc(s,e,t,n=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=t;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](s,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){As(l,null,10,[s,o,a]);return}}wy(s,t,i,n)}function wy(s,e,t,n=!0){console.error(s)}let Qa=!1,Md=!1;const qt=[];let fi=0;const to=[];let Qi=null,Ws=0;const W_=Promise.resolve();let Df=null;function q_(s){const e=Df||W_;return s?e.then(this?s.bind(this):s):e}function My(s){let e=fi+1,t=qt.length;for(;e<t;){const n=e+t>>>1;Oa(qt[n])<s?e=n+1:t=n}return e}function Pf(s){(!qt.length||!qt.includes(s,Qa&&s.allowRecurse?fi+1:fi))&&(s.id==null?qt.push(s):qt.splice(My(s.id),0,s),$_())}function $_(){!Qa&&!Md&&(Md=!0,Df=W_.then(K_))}function by(s){const e=qt.indexOf(s);e>fi&&qt.splice(e,1)}function Ty(s){Oe(s)?to.push(...s):(!Qi||!Qi.includes(s,s.allowRecurse?Ws+1:Ws))&&to.push(s),$_()}function wA(s,e=Qa?fi+1:0){for(;e<qt.length;e++){const t=qt[e];t&&t.pre&&(qt.splice(e,1),e--,t())}}function j_(s){if(to.length){const e=[...new Set(to)];if(to.length=0,Qi){Qi.push(...e);return}for(Qi=e,Qi.sort((t,n)=>Oa(t)-Oa(n)),Ws=0;Ws<Qi.length;Ws++)Qi[Ws]();Qi=null,Ws=0}}const Oa=s=>s.id==null?1/0:s.id,By=(s,e)=>{const t=Oa(s)-Oa(e);if(t===0){if(s.pre&&!e.pre)return-1;if(e.pre&&!s.pre)return 1}return t};function K_(s){Md=!1,Qa=!0,qt.sort(By);const e=Yn;try{for(fi=0;fi<qt.length;fi++){const t=qt[fi];t&&t.active!==!1&&As(t,null,14)}}finally{fi=0,qt.length=0,j_(),Qa=!1,Df=null,(qt.length||to.length)&&K_()}}function Ry(s,e,...t){if(s.isUnmounted)return;const n=s.vnode.props||ft;let i=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:d}=n[h]||ft;d&&(i=t.map(f=>Qt(f)?f.trim():f)),u&&(i=t.map(Hx))}let a,l=n[a=gh(e)]||n[a=gh(vi(e))];!l&&r&&(l=n[a=gh(bo(e))]),l&&Xn(l,s,6,i);const c=n[a+"Once"];if(c){if(!s.emitted)s.emitted={};else if(s.emitted[a])return;s.emitted[a]=!0,Xn(c,s,6,i)}}function Y_(s,e,t=!1){const n=e.emitsCache,i=n.get(s);if(i!==void 0)return i;const r=s.emits;let o={},a=!1;if(!ke(s)){const l=c=>{const h=Y_(c,e,!0);h&&(a=!0,An(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),s.extends&&l(s.extends),s.mixins&&s.mixins.forEach(l)}return!r&&!a?(_t(s)&&n.set(s,null),null):(Oe(r)?r.forEach(l=>o[l]=null):An(o,r),_t(s)&&n.set(s,o),o)}function Zc(s,e){return!s||!$c(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ze(s,e[0].toLowerCase()+e.slice(1))||Ze(s,bo(e))||Ze(s,e))}let $n=null,X_=null;function Lc(s){const e=$n;return $n=s,X_=s&&s.type.__scopeId||null,e}function tn(s,e=$n,t){if(!e||s._n)return s;const n=(...i)=>{n._d&&UA(-1);const r=Lc(e);let o;try{o=s(...i)}finally{Lc(r),n._d&&UA(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function _h(s){const{type:e,vnode:t,proxy:n,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:h,renderCache:u,data:d,setupState:f,ctx:p,inheritAttrs:m}=s;let g,A;const E=Lc(s);try{if(t.shapeFlag&4){const v=i||n;g=ui(h.call(v,v,u,r,f,d,p)),A=l}else{const v=e;g=ui(v.length>1?v(r,{attrs:l,slots:a,emit:c}):v(r,null)),A=e.props?l:Ly(l)}}catch(v){wa.length=0,Jc(v,s,1),g=at(ka)}let _=g;if(A&&m!==!1){const v=Object.keys(A),{shapeFlag:I}=_;v.length&&I&7&&(o&&v.some(yf)&&(A=Dy(A,o)),_=co(_,A))}return t.dirs&&(_=co(_),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),g=_,Lc(E),g}const Ly=s=>{let e;for(const t in s)(t==="class"||t==="style"||$c(t))&&((e||(e={}))[t]=s[t]);return e},Dy=(s,e)=>{const t={};for(const n in s)(!yf(n)||!(n.slice(9)in e))&&(t[n]=s[n]);return t};function Py(s,e,t){const{props:n,children:i,component:r}=s,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?MA(n,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(o[d]!==n[d]&&!Zc(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?MA(n,o,c):!0:!!o;return!1}function MA(s,e,t){const n=Object.keys(e);if(n.length!==Object.keys(s).length)return!0;for(let i=0;i<n.length;i++){const r=n[i];if(e[r]!==s[r]&&!Zc(t,r))return!0}return!1}function Uy({vnode:s,parent:e},t){for(;e&&e.subTree===s;)(s=e.vnode).el=t,e=e.parent}const Fy=s=>s.__isSuspense;function Ny(s,e){e&&e.pendingBranch?Oe(s)?e.effects.push(...s):e.effects.push(s):Ty(s)}function cc(s,e){if(St){let t=St.provides;const n=St.parent&&St.parent.provides;n===t&&(t=St.provides=Object.create(n)),t[s]=e}}function Gi(s,e,t=!1){const n=St||$n;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&s in i)return i[s];if(arguments.length>1)return t&&ke(e)?e.call(n.proxy):e}}const hl={};function hc(s,e,t){return J_(s,e,t)}function J_(s,e,{immediate:t,deep:n,flush:i,onTrack:r,onTrigger:o}=ft){const a=qx()===(St==null?void 0:St.scope)?St:null;let l,c=!1,h=!1;if(jt(s)?(l=()=>s.value,c=Rc(s)):eo(s)?(l=()=>s,n=!0):Oe(s)?(h=!0,c=s.some(_=>eo(_)||Rc(_)),l=()=>s.map(_=>{if(jt(_))return _.value;if(eo(_))return qr(_);if(ke(_))return As(_,a,2)})):ke(s)?e?l=()=>As(s,a,2):l=()=>{if(!(a&&a.isUnmounted))return u&&u(),Xn(s,a,3,[d])}:l=Yn,e&&n){const _=l;l=()=>qr(_())}let u,d=_=>{u=A.onStop=()=>{As(_,a,4)}},f;if(Ha)if(d=Yn,e?t&&Xn(e,a,3,[l(),h?[]:void 0,d]):l(),i==="sync"){const _=DI();f=_.__watcherHandles||(_.__watcherHandles=[])}else return Yn;let p=h?new Array(s.length).fill(hl):hl;const m=()=>{if(A.active)if(e){const _=A.run();(n||c||(h?_.some((v,I)=>Fa(v,p[I])):Fa(_,p)))&&(u&&u(),Xn(e,a,3,[_,p===hl?void 0:h&&p[0]===hl?[]:p,d]),p=_)}else A.run()};m.allowRecurse=!!e;let g;i==="sync"?g=m:i==="post"?g=()=>gn(m,a&&a.suspense):(m.pre=!0,a&&(m.id=a.uid),g=()=>Pf(m));const A=new Mf(l,g);e?t?m():p=A.run():i==="post"?gn(A.run.bind(A),a&&a.suspense):A.run();const E=()=>{A.stop(),a&&a.scope&&If(a.scope.effects,A)};return f&&f.push(E),E}function Qy(s,e,t){const n=this.proxy,i=Qt(s)?s.includes(".")?Z_(n,s):()=>n[s]:s.bind(n,n);let r;ke(e)?r=e:(r=e.handler,t=e);const o=St;ho(this);const a=J_(i,r.bind(n),t);return o?ho(o):Js(),a}function Z_(s,e){const t=e.split(".");return()=>{let n=s;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function qr(s,e){if(!_t(s)||s.__v_skip||(e=e||new Set,e.has(s)))return s;if(e.add(s),jt(s))qr(s.value,e);else if(Oe(s))for(let t=0;t<s.length;t++)qr(s[t],e);else if(I_(s)||Zr(s))s.forEach(t=>{qr(t,e)});else if(w_(s))for(const t in s)qr(s[t],e);return s}function Uf(s){return ke(s)?{setup:s,name:s.name}:s}const uc=s=>!!s.type.__asyncLoader,ev=s=>s.type.__isKeepAlive;function Oy(s,e){tv(s,"a",e)}function ky(s,e){tv(s,"da",e)}function tv(s,e,t=St){const n=s.__wdc||(s.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return s()});if(eh(e,n,t),t){let i=t.parent;for(;i&&i.parent;)ev(i.parent.vnode)&&Gy(n,e,t,i),i=i.parent}}function Gy(s,e,t,n){const i=eh(e,s,n,!0);nv(()=>{If(n[e],i)},t)}function eh(s,e,t=St,n=!1){if(t){const i=t[s]||(t[s]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;To(),ho(t);const a=Xn(e,t,s,o);return Js(),Bo(),a});return n?i.unshift(r):i.push(r),r}}const qi=s=>(e,t=St)=>(!Ha||s==="sp")&&eh(s,(...n)=>e(...n),t),Hy=qi("bm"),Vy=qi("m"),zy=qi("bu"),Wy=qi("u"),qy=qi("bum"),nv=qi("um"),$y=qi("sp"),jy=qi("rtg"),Ky=qi("rtc");function Yy(s,e=St){eh("ec",s,e)}function ws(s,e,t,n){const i=s.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(To(),Xn(l,t,8,[s.el,a,s,e]),Bo())}}const iv="components";function Xy(s,e){return Zy(iv,s,!0,e)||s}const Jy=Symbol();function Zy(s,e,t=!0,n=!1){const i=$n||St;if(i){const r=i.type;if(s===iv){const a=BI(r,!1);if(a&&(a===e||a===vi(e)||a===Yc(vi(e))))return r}const o=bA(i[s]||r[s],e)||bA(i.appContext[s],e);return!o&&n?r:o}}function bA(s,e){return s&&(s[e]||s[vi(e)]||s[Yc(vi(e))])}const bd=s=>s?pv(s)?Of(s)||s.proxy:bd(s.parent):null,Sa=An(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>bd(s.parent),$root:s=>bd(s.root),$emit:s=>s.emit,$options:s=>Ff(s),$forceUpdate:s=>s.f||(s.f=()=>Pf(s.update)),$nextTick:s=>s.n||(s.n=q_.bind(s.proxy)),$watch:s=>Qy.bind(s)}),vh=(s,e)=>s!==ft&&!s.__isScriptSetup&&Ze(s,e),eI={get({_:s},e){const{ctx:t,setupState:n,data:i,props:r,accessCache:o,type:a,appContext:l}=s;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return r[e]}else{if(vh(n,e))return o[e]=1,n[e];if(i!==ft&&Ze(i,e))return o[e]=2,i[e];if((c=s.propsOptions[0])&&Ze(c,e))return o[e]=3,r[e];if(t!==ft&&Ze(t,e))return o[e]=4,t[e];Td&&(o[e]=0)}}const h=Sa[e];let u,d;if(h)return e==="$attrs"&&_n(s,"get",e),h(s);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ft&&Ze(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,Ze(d,e))return d[e]},set({_:s},e,t){const{data:n,setupState:i,ctx:r}=s;return vh(i,e)?(i[e]=t,!0):n!==ft&&Ze(n,e)?(n[e]=t,!0):Ze(s.props,e)||e[0]==="$"&&e.slice(1)in s?!1:(r[e]=t,!0)},has({_:{data:s,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:r}},o){let a;return!!t[o]||s!==ft&&Ze(s,o)||vh(e,o)||(a=r[0])&&Ze(a,o)||Ze(n,o)||Ze(Sa,o)||Ze(i.config.globalProperties,o)},defineProperty(s,e,t){return t.get!=null?s._.accessCache[e]=0:Ze(t,"value")&&this.set(s,e,t.value,null),Reflect.defineProperty(s,e,t)}};let Td=!0;function tI(s){const e=Ff(s),t=s.proxy,n=s.ctx;Td=!1,e.beforeCreate&&TA(e.beforeCreate,s,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:f,updated:p,activated:m,deactivated:g,beforeDestroy:A,beforeUnmount:E,destroyed:_,unmounted:v,render:I,renderTracked:S,renderTriggered:T,errorCaptured:R,serverPrefetch:y,expose:M,inheritAttrs:k,components:W,directives:F,filters:P}=e;if(c&&nI(c,n,null,s.appContext.config.unwrapInjectedRef),o)for(const G in o){const Q=o[G];ke(Q)&&(n[G]=Q.bind(t))}if(i){const G=i.call(t,t);_t(G)&&(s.data=Za(G))}if(Td=!0,r)for(const G in r){const Q=r[G],J=ke(Q)?Q.bind(t,t):ke(Q.get)?Q.get.bind(t,t):Yn,le=!ke(Q)&&ke(Q.set)?Q.set.bind(t):Yn,xe=Dn({get:J,set:le});Object.defineProperty(n,G,{enumerable:!0,configurable:!0,get:()=>xe.value,set:me=>xe.value=me})}if(a)for(const G in a)sv(a[G],n,t,G);if(l){const G=ke(l)?l.call(t):l;Reflect.ownKeys(G).forEach(Q=>{cc(Q,G[Q])})}h&&TA(h,s,"c");function $(G,Q){Oe(Q)?Q.forEach(J=>G(J.bind(t))):Q&&G(Q.bind(t))}if($(Hy,u),$(Vy,d),$(zy,f),$(Wy,p),$(Oy,m),$(ky,g),$(Yy,R),$(Ky,S),$(jy,T),$(qy,E),$(nv,v),$($y,y),Oe(M))if(M.length){const G=s.exposed||(s.exposed={});M.forEach(Q=>{Object.defineProperty(G,Q,{get:()=>t[Q],set:J=>t[Q]=J})})}else s.exposed||(s.exposed={});I&&s.render===Yn&&(s.render=I),k!=null&&(s.inheritAttrs=k),W&&(s.components=W),F&&(s.directives=F)}function nI(s,e,t=Yn,n=!1){Oe(s)&&(s=Bd(s));for(const i in s){const r=s[i];let o;_t(r)?"default"in r?o=Gi(r.from||i,r.default,!0):o=Gi(r.from||i):o=Gi(r),jt(o)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function TA(s,e,t){Xn(Oe(s)?s.map(n=>n.bind(e.proxy)):s.bind(e.proxy),e,t)}function sv(s,e,t,n){const i=n.includes(".")?Z_(t,n):()=>t[n];if(Qt(s)){const r=e[s];ke(r)&&hc(i,r)}else if(ke(s))hc(i,s.bind(t));else if(_t(s))if(Oe(s))s.forEach(r=>sv(r,e,t,n));else{const r=ke(s.handler)?s.handler.bind(t):e[s.handler];ke(r)&&hc(i,r,s)}}function Ff(s){const e=s.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=s.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(c=>Dc(l,c,o,!0)),Dc(l,e,o)),_t(e)&&r.set(e,l),l}function Dc(s,e,t,n=!1){const{mixins:i,extends:r}=e;r&&Dc(s,r,t,!0),i&&i.forEach(o=>Dc(s,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=iI[o]||t&&t[o];s[o]=a?a(s[o],e[o]):e[o]}return s}const iI={data:BA,props:Ns,emits:Ns,methods:Ns,computed:Ns,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:Ns,directives:Ns,watch:rI,provide:BA,inject:sI};function BA(s,e){return e?s?function(){return An(ke(s)?s.call(this,this):s,ke(e)?e.call(this,this):e)}:e:s}function sI(s,e){return Ns(Bd(s),Bd(e))}function Bd(s){if(Oe(s)){const e={};for(let t=0;t<s.length;t++)e[s[t]]=s[t];return e}return s}function nn(s,e){return s?[...new Set([].concat(s,e))]:e}function Ns(s,e){return s?An(An(Object.create(null),s),e):e}function rI(s,e){if(!s)return e;if(!e)return s;const t=An(Object.create(null),s);for(const n in e)t[n]=nn(s[n],e[n]);return t}function oI(s,e,t,n=!1){const i={},r={};Bc(r,nh,1),s.propsDefaults=Object.create(null),rv(s,e,i,r);for(const o in s.propsOptions[0])o in i||(i[o]=void 0);t?s.props=n?i:vy(i):s.type.props?s.props=i:s.props=r,s.attrs=r}function aI(s,e,t,n){const{props:i,attrs:r,vnode:{patchFlag:o}}=s,a=tt(i),[l]=s.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const h=s.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(Zc(s.emitsOptions,d))continue;const f=e[d];if(l)if(Ze(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const p=vi(d);i[p]=Rd(l,a,p,f,s,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{rv(s,e,i,r)&&(c=!0);let h;for(const u in a)(!e||!Ze(e,u)&&((h=bo(u))===u||!Ze(e,h)))&&(l?t&&(t[u]!==void 0||t[h]!==void 0)&&(i[u]=Rd(l,a,u,void 0,s,!0)):delete i[u]);if(r!==a)for(const u in r)(!e||!Ze(e,u))&&(delete r[u],c=!0)}c&&zi(s,"set","$attrs")}function rv(s,e,t,n){const[i,r]=s.propsOptions;let o=!1,a;if(e)for(let l in e){if(lc(l))continue;const c=e[l];let h;i&&Ze(i,h=vi(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:Zc(s.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=tt(t),c=a||ft;for(let h=0;h<r.length;h++){const u=r[h];t[u]=Rd(i,l,u,c[u],s,!Ze(c,u))}}return o}function Rd(s,e,t,n,i,r){const o=s[t];if(o!=null){const a=Ze(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&ke(l)){const{propsDefaults:c}=i;t in c?n=c[t]:(ho(i),n=c[t]=l.call(null,e),Js())}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===bo(t))&&(n=!0))}return n}function ov(s,e,t=!1){const n=e.propsCache,i=n.get(s);if(i)return i;const r=s.props,o={},a=[];let l=!1;if(!ke(s)){const h=u=>{l=!0;const[d,f]=ov(u,e,!0);An(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(h),s.extends&&h(s.extends),s.mixins&&s.mixins.forEach(h)}if(!r&&!l)return _t(s)&&n.set(s,Jr),Jr;if(Oe(r))for(let h=0;h<r.length;h++){const u=vi(r[h]);RA(u)&&(o[u]=ft)}else if(r)for(const h in r){const u=vi(h);if(RA(u)){const d=r[h],f=o[u]=Oe(d)||ke(d)?{type:d}:Object.assign({},d);if(f){const p=PA(Boolean,f.type),m=PA(String,f.type);f[0]=p>-1,f[1]=m<0||p<m,(p>-1||Ze(f,"default"))&&a.push(u)}}}const c=[o,a];return _t(s)&&n.set(s,c),c}function RA(s){return s[0]!=="$"}function LA(s){const e=s&&s.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:s===null?"null":""}function DA(s,e){return LA(s)===LA(e)}function PA(s,e){return Oe(e)?e.findIndex(t=>DA(t,s)):ke(e)&&DA(e,s)?0:-1}const av=s=>s[0]==="_"||s==="$stable",Nf=s=>Oe(s)?s.map(ui):[ui(s)],lI=(s,e,t)=>{if(e._n)return e;const n=tn((...i)=>Nf(e(...i)),t);return n._c=!1,n},lv=(s,e,t)=>{const n=s._ctx;for(const i in s){if(av(i))continue;const r=s[i];if(ke(r))e[i]=lI(i,r,n);else if(r!=null){const o=Nf(r);e[i]=()=>o}}},cv=(s,e)=>{const t=Nf(e);s.slots.default=()=>t},cI=(s,e)=>{if(s.vnode.shapeFlag&32){const t=e._;t?(s.slots=tt(e),Bc(e,"_",t)):lv(e,s.slots={})}else s.slots={},e&&cv(s,e);Bc(s.slots,nh,1)},hI=(s,e,t)=>{const{vnode:n,slots:i}=s;let r=!0,o=ft;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(An(i,e),!t&&a===1&&delete i._):(r=!e.$stable,lv(e,i)),o=e}else e&&(cv(s,e),o={default:1});if(r)for(const a in i)!av(a)&&!(a in o)&&delete i[a]};function hv(){return{app:null,config:{isNativeTag:Fx,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uI=0;function dI(s,e){return function(n,i=null){ke(n)||(n=Object.assign({},n)),i!=null&&!_t(i)&&(i=null);const r=hv(),o=new Set;let a=!1;const l=r.app={_uid:uI++,_component:n,_props:i,_container:null,_context:r,_instance:null,version:PI,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&ke(c.install)?(o.add(c),c.install(l,...h)):ke(c)&&(o.add(c),c(l,...h))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,h){return h?(r.components[c]=h,l):r.components[c]},directive(c,h){return h?(r.directives[c]=h,l):r.directives[c]},mount(c,h,u){if(!a){const d=at(n,i);return d.appContext=r,h&&e?e(d,c):s(d,c,u),a=!0,l._container=c,c.__vue_app__=l,Of(d.component)||d.component.proxy}},unmount(){a&&(s(null,l._container),delete l._container.__vue_app__)},provide(c,h){return r.provides[c]=h,l}};return l}}function Ld(s,e,t,n,i=!1){if(Oe(s)){s.forEach((d,f)=>Ld(d,e&&(Oe(e)?e[f]:e),t,n,i));return}if(uc(n)&&!i)return;const r=n.shapeFlag&4?Of(n.component)||n.component.proxy:n.el,o=i?null:r,{i:a,r:l}=s,c=e&&e.r,h=a.refs===ft?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(Qt(c)?(h[c]=null,Ze(u,c)&&(u[c]=null)):jt(c)&&(c.value=null)),ke(l))As(l,a,12,[o,h]);else{const d=Qt(l),f=jt(l);if(d||f){const p=()=>{if(s.f){const m=d?Ze(u,l)?u[l]:h[l]:l.value;i?Oe(m)&&If(m,r):Oe(m)?m.includes(r)||m.push(r):d?(h[l]=[r],Ze(u,l)&&(u[l]=h[l])):(l.value=[r],s.k&&(h[s.k]=l.value))}else d?(h[l]=o,Ze(u,l)&&(u[l]=o)):f&&(l.value=o,s.k&&(h[s.k]=o))};o?(p.id=-1,gn(p,t)):p()}}}const gn=Ny;function fI(s){return AI(s)}function AI(s,e){const t=Vx();t.__VUE__=!0;const{insert:n,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:f=Yn,insertStaticContent:p}=s,m=(w,B,H,X=null,ie=null,ue=null,pe=!1,oe=null,de=!!B.dynamicChildren)=>{if(w===B)return;w&&!Qo(w,B)&&(X=D(w),me(w,ie,ue,!0),w=null),B.patchFlag===-2&&(de=!1,B.dynamicChildren=null);const{type:ae,ref:C,shapeFlag:x}=B;switch(ae){case th:g(w,B,H,X);break;case ka:A(w,B,H,X);break;case dc:w==null&&E(B,H,X,pe);break;case hi:W(w,B,H,X,ie,ue,pe,oe,de);break;default:x&1?I(w,B,H,X,ie,ue,pe,oe,de):x&6?F(w,B,H,X,ie,ue,pe,oe,de):(x&64||x&128)&&ae.process(w,B,H,X,ie,ue,pe,oe,de,ve)}C!=null&&ie&&Ld(C,w&&w.ref,ue,B||w,!B)},g=(w,B,H,X)=>{if(w==null)n(B.el=a(B.children),H,X);else{const ie=B.el=w.el;B.children!==w.children&&c(ie,B.children)}},A=(w,B,H,X)=>{w==null?n(B.el=l(B.children||""),H,X):B.el=w.el},E=(w,B,H,X)=>{[w.el,w.anchor]=p(w.children,B,H,X,w.el,w.anchor)},_=({el:w,anchor:B},H,X)=>{let ie;for(;w&&w!==B;)ie=d(w),n(w,H,X),w=ie;n(B,H,X)},v=({el:w,anchor:B})=>{let H;for(;w&&w!==B;)H=d(w),i(w),w=H;i(B)},I=(w,B,H,X,ie,ue,pe,oe,de)=>{pe=pe||B.type==="svg",w==null?S(B,H,X,ie,ue,pe,oe,de):y(w,B,ie,ue,pe,oe,de)},S=(w,B,H,X,ie,ue,pe,oe)=>{let de,ae;const{type:C,props:x,shapeFlag:O,transition:j,dirs:ee}=w;if(de=w.el=o(w.type,ue,x&&x.is,x),O&8?h(de,w.children):O&16&&R(w.children,de,null,X,ie,ue&&C!=="foreignObject",pe,oe),ee&&ws(w,null,X,"created"),T(de,w,w.scopeId,pe,X),x){for(const ye in x)ye!=="value"&&!lc(ye)&&r(de,ye,null,x[ye],ue,w.children,X,ie,K);"value"in x&&r(de,"value",null,x.value),(ae=x.onVnodeBeforeMount)&&oi(ae,X,w)}ee&&ws(w,null,X,"beforeMount");const fe=(!ie||ie&&!ie.pendingBranch)&&j&&!j.persisted;fe&&j.beforeEnter(de),n(de,B,H),((ae=x&&x.onVnodeMounted)||fe||ee)&&gn(()=>{ae&&oi(ae,X,w),fe&&j.enter(de),ee&&ws(w,null,X,"mounted")},ie)},T=(w,B,H,X,ie)=>{if(H&&f(w,H),X)for(let ue=0;ue<X.length;ue++)f(w,X[ue]);if(ie){let ue=ie.subTree;if(B===ue){const pe=ie.vnode;T(w,pe,pe.scopeId,pe.slotScopeIds,ie.parent)}}},R=(w,B,H,X,ie,ue,pe,oe,de=0)=>{for(let ae=de;ae<w.length;ae++){const C=w[ae]=oe?ss(w[ae]):ui(w[ae]);m(null,C,B,H,X,ie,ue,pe,oe)}},y=(w,B,H,X,ie,ue,pe)=>{const oe=B.el=w.el;let{patchFlag:de,dynamicChildren:ae,dirs:C}=B;de|=w.patchFlag&16;const x=w.props||ft,O=B.props||ft;let j;H&&Ms(H,!1),(j=O.onVnodeBeforeUpdate)&&oi(j,H,B,w),C&&ws(B,w,H,"beforeUpdate"),H&&Ms(H,!0);const ee=ie&&B.type!=="foreignObject";if(ae?M(w.dynamicChildren,ae,oe,H,X,ee,ue):pe||Q(w,B,oe,null,H,X,ee,ue,!1),de>0){if(de&16)k(oe,B,x,O,H,X,ie);else if(de&2&&x.class!==O.class&&r(oe,"class",null,O.class,ie),de&4&&r(oe,"style",x.style,O.style,ie),de&8){const fe=B.dynamicProps;for(let ye=0;ye<fe.length;ye++){const _e=fe[ye],Z=x[_e],Me=O[_e];(Me!==Z||_e==="value")&&r(oe,_e,Z,Me,ie,w.children,H,X,K)}}de&1&&w.children!==B.children&&h(oe,B.children)}else!pe&&ae==null&&k(oe,B,x,O,H,X,ie);((j=O.onVnodeUpdated)||C)&&gn(()=>{j&&oi(j,H,B,w),C&&ws(B,w,H,"updated")},X)},M=(w,B,H,X,ie,ue,pe)=>{for(let oe=0;oe<B.length;oe++){const de=w[oe],ae=B[oe],C=de.el&&(de.type===hi||!Qo(de,ae)||de.shapeFlag&70)?u(de.el):H;m(de,ae,C,null,X,ie,ue,pe,!0)}},k=(w,B,H,X,ie,ue,pe)=>{if(H!==X){if(H!==ft)for(const oe in H)!lc(oe)&&!(oe in X)&&r(w,oe,H[oe],null,pe,B.children,ie,ue,K);for(const oe in X){if(lc(oe))continue;const de=X[oe],ae=H[oe];de!==ae&&oe!=="value"&&r(w,oe,ae,de,pe,B.children,ie,ue,K)}"value"in X&&r(w,"value",H.value,X.value)}},W=(w,B,H,X,ie,ue,pe,oe,de)=>{const ae=B.el=w?w.el:a(""),C=B.anchor=w?w.anchor:a("");let{patchFlag:x,dynamicChildren:O,slotScopeIds:j}=B;j&&(oe=oe?oe.concat(j):j),w==null?(n(ae,H,X),n(C,H,X),R(B.children,H,C,ie,ue,pe,oe,de)):x>0&&x&64&&O&&w.dynamicChildren?(M(w.dynamicChildren,O,H,ie,ue,pe,oe),(B.key!=null||ie&&B===ie.subTree)&&uv(w,B,!0)):Q(w,B,H,C,ie,ue,pe,oe,de)},F=(w,B,H,X,ie,ue,pe,oe,de)=>{B.slotScopeIds=oe,w==null?B.shapeFlag&512?ie.ctx.activate(B,H,X,pe,de):P(B,H,X,ie,ue,pe,de):V(w,B,de)},P=(w,B,H,X,ie,ue,pe)=>{const oe=w.component=SI(w,X,ie);if(ev(w)&&(oe.ctx.renderer=ve),wI(oe),oe.asyncDep){if(ie&&ie.registerDep(oe,$),!w.el){const de=oe.subTree=at(ka);A(null,de,B,H)}return}$(oe,w,B,H,ie,ue,pe)},V=(w,B,H)=>{const X=B.component=w.component;if(Py(w,B,H))if(X.asyncDep&&!X.asyncResolved){G(X,B,H);return}else X.next=B,by(X.update),X.update();else B.el=w.el,X.vnode=B},$=(w,B,H,X,ie,ue,pe)=>{const oe=()=>{if(w.isMounted){let{next:C,bu:x,u:O,parent:j,vnode:ee}=w,fe=C,ye;Ms(w,!1),C?(C.el=ee.el,G(w,C,pe)):C=ee,x&&mh(x),(ye=C.props&&C.props.onVnodeBeforeUpdate)&&oi(ye,j,C,ee),Ms(w,!0);const _e=_h(w),Z=w.subTree;w.subTree=_e,m(Z,_e,u(Z.el),D(Z),w,ie,ue),C.el=_e.el,fe===null&&Uy(w,_e.el),O&&gn(O,ie),(ye=C.props&&C.props.onVnodeUpdated)&&gn(()=>oi(ye,j,C,ee),ie)}else{let C;const{el:x,props:O}=B,{bm:j,m:ee,parent:fe}=w,ye=uc(B);if(Ms(w,!1),j&&mh(j),!ye&&(C=O&&O.onVnodeBeforeMount)&&oi(C,fe,B),Ms(w,!0),x&&ge){const _e=()=>{w.subTree=_h(w),ge(x,w.subTree,w,ie,null)};ye?B.type.__asyncLoader().then(()=>!w.isUnmounted&&_e()):_e()}else{const _e=w.subTree=_h(w);m(null,_e,H,X,w,ie,ue),B.el=_e.el}if(ee&&gn(ee,ie),!ye&&(C=O&&O.onVnodeMounted)){const _e=B;gn(()=>oi(C,fe,_e),ie)}(B.shapeFlag&256||fe&&uc(fe.vnode)&&fe.vnode.shapeFlag&256)&&w.a&&gn(w.a,ie),w.isMounted=!0,B=H=X=null}},de=w.effect=new Mf(oe,()=>Pf(ae),w.scope),ae=w.update=()=>de.run();ae.id=w.uid,Ms(w,!0),ae()},G=(w,B,H)=>{B.component=w;const X=w.vnode.props;w.vnode=B,w.next=null,aI(w,B.props,X,H),hI(w,B.children,H),To(),wA(),Bo()},Q=(w,B,H,X,ie,ue,pe,oe,de=!1)=>{const ae=w&&w.children,C=w?w.shapeFlag:0,x=B.children,{patchFlag:O,shapeFlag:j}=B;if(O>0){if(O&128){le(ae,x,H,X,ie,ue,pe,oe,de);return}else if(O&256){J(ae,x,H,X,ie,ue,pe,oe,de);return}}j&8?(C&16&&K(ae,ie,ue),x!==ae&&h(H,x)):C&16?j&16?le(ae,x,H,X,ie,ue,pe,oe,de):K(ae,ie,ue,!0):(C&8&&h(H,""),j&16&&R(x,H,X,ie,ue,pe,oe,de))},J=(w,B,H,X,ie,ue,pe,oe,de)=>{w=w||Jr,B=B||Jr;const ae=w.length,C=B.length,x=Math.min(ae,C);let O;for(O=0;O<x;O++){const j=B[O]=de?ss(B[O]):ui(B[O]);m(w[O],j,H,null,ie,ue,pe,oe,de)}ae>C?K(w,ie,ue,!0,!1,x):R(B,H,X,ie,ue,pe,oe,de,x)},le=(w,B,H,X,ie,ue,pe,oe,de)=>{let ae=0;const C=B.length;let x=w.length-1,O=C-1;for(;ae<=x&&ae<=O;){const j=w[ae],ee=B[ae]=de?ss(B[ae]):ui(B[ae]);if(Qo(j,ee))m(j,ee,H,null,ie,ue,pe,oe,de);else break;ae++}for(;ae<=x&&ae<=O;){const j=w[x],ee=B[O]=de?ss(B[O]):ui(B[O]);if(Qo(j,ee))m(j,ee,H,null,ie,ue,pe,oe,de);else break;x--,O--}if(ae>x){if(ae<=O){const j=O+1,ee=j<C?B[j].el:X;for(;ae<=O;)m(null,B[ae]=de?ss(B[ae]):ui(B[ae]),H,ee,ie,ue,pe,oe,de),ae++}}else if(ae>O)for(;ae<=x;)me(w[ae],ie,ue,!0),ae++;else{const j=ae,ee=ae,fe=new Map;for(ae=ee;ae<=O;ae++){const Ce=B[ae]=de?ss(B[ae]):ui(B[ae]);Ce.key!=null&&fe.set(Ce.key,ae)}let ye,_e=0;const Z=O-ee+1;let Me=!1,be=0;const Te=new Array(Z);for(ae=0;ae<Z;ae++)Te[ae]=0;for(ae=j;ae<=x;ae++){const Ce=w[ae];if(_e>=Z){me(Ce,ie,ue,!0);continue}let Pe;if(Ce.key!=null)Pe=fe.get(Ce.key);else for(ye=ee;ye<=O;ye++)if(Te[ye-ee]===0&&Qo(Ce,B[ye])){Pe=ye;break}Pe===void 0?me(Ce,ie,ue,!0):(Te[Pe-ee]=ae+1,Pe>=be?be=Pe:Me=!0,m(Ce,B[Pe],H,null,ie,ue,pe,oe,de),_e++)}const we=Me?pI(Te):Jr;for(ye=we.length-1,ae=Z-1;ae>=0;ae--){const Ce=ee+ae,Pe=B[Ce],et=Ce+1<C?B[Ce+1].el:X;Te[ae]===0?m(null,Pe,H,et,ie,ue,pe,oe,de):Me&&(ye<0||ae!==we[ye]?xe(Pe,H,et,2):ye--)}}},xe=(w,B,H,X,ie=null)=>{const{el:ue,type:pe,transition:oe,children:de,shapeFlag:ae}=w;if(ae&6){xe(w.component.subTree,B,H,X);return}if(ae&128){w.suspense.move(B,H,X);return}if(ae&64){pe.move(w,B,H,ve);return}if(pe===hi){n(ue,B,H);for(let x=0;x<de.length;x++)xe(de[x],B,H,X);n(w.anchor,B,H);return}if(pe===dc){_(w,B,H);return}if(X!==2&&ae&1&&oe)if(X===0)oe.beforeEnter(ue),n(ue,B,H),gn(()=>oe.enter(ue),ie);else{const{leave:x,delayLeave:O,afterLeave:j}=oe,ee=()=>n(ue,B,H),fe=()=>{x(ue,()=>{ee(),j&&j()})};O?O(ue,ee,fe):fe()}else n(ue,B,H)},me=(w,B,H,X=!1,ie=!1)=>{const{type:ue,props:pe,ref:oe,children:de,dynamicChildren:ae,shapeFlag:C,patchFlag:x,dirs:O}=w;if(oe!=null&&Ld(oe,null,H,w,!0),C&256){B.ctx.deactivate(w);return}const j=C&1&&O,ee=!uc(w);let fe;if(ee&&(fe=pe&&pe.onVnodeBeforeUnmount)&&oi(fe,B,w),C&6)U(w.component,H,X);else{if(C&128){w.suspense.unmount(H,X);return}j&&ws(w,null,B,"beforeUnmount"),C&64?w.type.remove(w,B,H,ie,ve,X):ae&&(ue!==hi||x>0&&x&64)?K(ae,B,H,!1,!0):(ue===hi&&x&384||!ie&&C&16)&&K(de,B,H),X&&Y(w)}(ee&&(fe=pe&&pe.onVnodeUnmounted)||j)&&gn(()=>{fe&&oi(fe,B,w),j&&ws(w,null,B,"unmounted")},H)},Y=w=>{const{type:B,el:H,anchor:X,transition:ie}=w;if(B===hi){se(H,X);return}if(B===dc){v(w);return}const ue=()=>{i(H),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(w.shapeFlag&1&&ie&&!ie.persisted){const{leave:pe,delayLeave:oe}=ie,de=()=>pe(H,ue);oe?oe(w.el,ue,de):de()}else ue()},se=(w,B)=>{let H;for(;w!==B;)H=d(w),i(w),w=H;i(B)},U=(w,B,H)=>{const{bum:X,scope:ie,update:ue,subTree:pe,um:oe}=w;X&&mh(X),ie.stop(),ue&&(ue.active=!1,me(pe,w,B,H)),oe&&gn(oe,B),gn(()=>{w.isUnmounted=!0},B),B&&B.pendingBranch&&!B.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===B.pendingId&&(B.deps--,B.deps===0&&B.resolve())},K=(w,B,H,X=!1,ie=!1,ue=0)=>{for(let pe=ue;pe<w.length;pe++)me(w[pe],B,H,X,ie)},D=w=>w.shapeFlag&6?D(w.component.subTree):w.shapeFlag&128?w.suspense.next():d(w.anchor||w.el),he=(w,B,H)=>{w==null?B._vnode&&me(B._vnode,null,null,!0):m(B._vnode||null,w,B,null,null,null,H),wA(),j_(),B._vnode=w},ve={p:m,um:me,m:xe,r:Y,mt:P,mc:R,pc:Q,pbc:M,n:D,o:s};let ce,ge;return e&&([ce,ge]=e(ve)),{render:he,hydrate:ce,createApp:dI(he,ce)}}function Ms({effect:s,update:e},t){s.allowRecurse=e.allowRecurse=t}function uv(s,e,t=!1){const n=s.children,i=e.children;if(Oe(n)&&Oe(i))for(let r=0;r<n.length;r++){const o=n[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=ss(i[r]),a.el=o.el),t||uv(o,a)),a.type===th&&(a.el=o.el)}}function pI(s){const e=s.slice(),t=[0];let n,i,r,o,a;const l=s.length;for(n=0;n<l;n++){const c=s[n];if(c!==0){if(i=t[t.length-1],s[i]<c){e[n]=i,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,s[t[a]]<c?r=a+1:o=a;c<s[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}const gI=s=>s.__isTeleport,hi=Symbol(void 0),th=Symbol(void 0),ka=Symbol(void 0),dc=Symbol(void 0),wa=[];let jn=null;function dv(s=!1){wa.push(jn=s?null:[])}function mI(){wa.pop(),jn=wa[wa.length-1]||null}let Ga=1;function UA(s){Ga+=s}function _I(s){return s.dynamicChildren=Ga>0?jn||Jr:null,mI(),Ga>0&&jn&&jn.push(s),s}function fv(s,e,t,n,i,r){return _I(Mt(s,e,t,n,i,r,!0))}function Dd(s){return s?s.__v_isVNode===!0:!1}function Qo(s,e){return s.type===e.type&&s.key===e.key}const nh="__vInternal",Av=({key:s})=>s??null,fc=({ref:s,ref_key:e,ref_for:t})=>s!=null?Qt(s)||jt(s)||ke(s)?{i:$n,r:s,k:e,f:!!t}:s:null;function Mt(s,e=null,t=null,n=0,i=null,r=s===hi?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:s,props:e,key:e&&Av(e),ref:e&&fc(e),scopeId:X_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$n};return a?(Qf(l,t),r&128&&s.normalize(l)):t&&(l.shapeFlag|=Qt(t)?8:16),Ga>0&&!o&&jn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&jn.push(l),l}const at=vI;function vI(s,e=null,t=null,n=0,i=null,r=!1){if((!s||s===Jy)&&(s=ka),Dd(s)){const a=co(s,e,!0);return t&&Qf(a,t),Ga>0&&!r&&jn&&(a.shapeFlag&6?jn[jn.indexOf(s)]=a:jn.push(a)),a.patchFlag|=-2,a}if(RI(s)&&(s=s.__vccOpts),e){e=EI(e);let{class:a,style:l}=e;a&&!Qt(a)&&(e.class=xf(a)),_t(l)&&(Q_(l)&&!Oe(l)&&(l=An({},l)),e.style=Ef(l))}const o=Qt(s)?1:Fy(s)?128:gI(s)?64:_t(s)?4:ke(s)?2:0;return Mt(s,e,t,n,i,o,r,!0)}function EI(s){return s?Q_(s)||nh in s?An({},s):s:null}function co(s,e,t=!1){const{props:n,ref:i,patchFlag:r,children:o}=s,a=e?yI(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:a,key:a&&Av(a),ref:e&&e.ref?t&&i?Oe(i)?i.concat(fc(e)):[i,fc(e)]:fc(e):i,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:o,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:e&&s.type!==hi?r===-1?16:r|16:r,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&co(s.ssContent),ssFallback:s.ssFallback&&co(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce}}function xI(s=" ",e=0){return at(th,null,s,e)}function rP(s,e){const t=at(dc,null,s);return t.staticCount=e,t}function ui(s){return s==null||typeof s=="boolean"?at(ka):Oe(s)?at(hi,null,s.slice()):typeof s=="object"?ss(s):at(th,null,String(s))}function ss(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:co(s)}function Qf(s,e){let t=0;const{shapeFlag:n}=s;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),Qf(s,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(nh in e)?e._ctx=$n:i===3&&$n&&($n.slots._===1?e._=1:(e._=2,s.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:$n},t=32):(e=String(e),n&64?(t=16,e=[xI(e)]):t=8);s.children=e,s.shapeFlag|=t}function yI(...s){const e={};for(let t=0;t<s.length;t++){const n=s[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=xf([e.class,n.class]));else if(i==="style")e.style=Ef([e.style,n.style]);else if($c(i)){const r=e[i],o=n[i];o&&r!==o&&!(Oe(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=n[i])}return e}function oi(s,e,t,n=null){Xn(s,e,7,[t,n])}const II=hv();let CI=0;function SI(s,e,t){const n=s.type,i=(e?e.appContext:s.appContext)||II,r={uid:CI++,vnode:s,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new zx(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ov(n,i),emitsOptions:Y_(n,i),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:n.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Ry.bind(null,r),s.ce&&s.ce(r),r}let St=null;const ho=s=>{St=s,s.scope.on()},Js=()=>{St&&St.scope.off(),St=null};function pv(s){return s.vnode.shapeFlag&4}let Ha=!1;function wI(s,e=!1){Ha=e;const{props:t,children:n}=s.vnode,i=pv(s);oI(s,t,i,e),cI(s,n);const r=i?MI(s,e):void 0;return Ha=!1,r}function MI(s,e){const t=s.type;s.accessCache=Object.create(null),s.proxy=O_(new Proxy(s.ctx,eI));const{setup:n}=t;if(n){const i=s.setupContext=n.length>1?TI(s):null;ho(s),To();const r=As(n,s,0,[s.props,i]);if(Bo(),Js(),C_(r)){if(r.then(Js,Js),e)return r.then(o=>{FA(s,o,e)}).catch(o=>{Jc(o,s,0)});s.asyncDep=r}else FA(s,r,e)}else gv(s,e)}function FA(s,e,t){ke(e)?s.type.__ssrInlineRender?s.ssrRender=e:s.render=e:_t(e)&&(s.setupState=V_(e)),gv(s,t)}let NA;function gv(s,e,t){const n=s.type;if(!s.render){if(!e&&NA&&!n.render){const i=n.template||Ff(s).template;if(i){const{isCustomElement:r,compilerOptions:o}=s.appContext.config,{delimiters:a,compilerOptions:l}=n,c=An(An({isCustomElement:r,delimiters:a},o),l);n.render=NA(i,c)}}s.render=n.render||Yn}ho(s),To(),tI(s),Bo(),Js()}function bI(s){return new Proxy(s.attrs,{get(e,t){return _n(s,"get","$attrs"),e[t]}})}function TI(s){const e=n=>{s.exposed=n||{}};let t;return{get attrs(){return t||(t=bI(s))},slots:s.slots,emit:s.emit,expose:e}}function Of(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(V_(O_(s.exposed)),{get(e,t){if(t in e)return e[t];if(t in Sa)return Sa[t](s)},has(e,t){return t in e||t in Sa}}))}function BI(s,e=!0){return ke(s)?s.displayName||s.name:s.name||e&&s.__name}function RI(s){return ke(s)&&"__vccOpts"in s}const Dn=(s,e)=>Sy(s,e,Ha);function mv(s,e,t){const n=arguments.length;return n===2?_t(e)&&!Oe(e)?Dd(e)?at(s,null,[e]):at(s,e):at(s,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&Dd(t)&&(t=[t]),at(s,e,t))}const LI=Symbol(""),DI=()=>Gi(LI),PI="3.2.47",UI="http://www.w3.org/2000/svg",qs=typeof document<"u"?document:null,QA=qs&&qs.createElement("template"),FI={insert:(s,e,t)=>{e.insertBefore(s,t||null)},remove:s=>{const e=s.parentNode;e&&e.removeChild(s)},createElement:(s,e,t,n)=>{const i=e?qs.createElementNS(UI,s):qs.createElement(s,t?{is:t}:void 0);return s==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:s=>qs.createTextNode(s),createComment:s=>qs.createComment(s),setText:(s,e)=>{s.nodeValue=e},setElementText:(s,e)=>{s.textContent=e},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>qs.querySelector(s),setScopeId(s,e){s.setAttribute(e,"")},insertStaticContent(s,e,t,n,i,r){const o=t?t.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===r||!(i=i.nextSibling)););else{QA.innerHTML=n?`<svg>${s}</svg>`:s;const a=QA.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function NI(s,e,t){const n=s._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?s.removeAttribute("class"):t?s.setAttribute("class",e):s.className=e}function QI(s,e,t){const n=s.style,i=Qt(t);if(t&&!i){if(e&&!Qt(e))for(const r in e)t[r]==null&&Pd(n,r,"");for(const r in t)Pd(n,r,t[r])}else{const r=n.display;i?e!==t&&(n.cssText=t):e&&s.removeAttribute("style"),"_vod"in s&&(n.display=r)}}const OA=/\s*!important$/;function Pd(s,e,t){if(Oe(t))t.forEach(n=>Pd(s,e,n));else if(t==null&&(t=""),e.startsWith("--"))s.setProperty(e,t);else{const n=OI(s,e);OA.test(t)?s.setProperty(bo(n),t.replace(OA,""),"important"):s[n]=t}}const kA=["Webkit","Moz","ms"],Eh={};function OI(s,e){const t=Eh[e];if(t)return t;let n=vi(e);if(n!=="filter"&&n in s)return Eh[e]=n;n=Yc(n);for(let i=0;i<kA.length;i++){const r=kA[i]+n;if(r in s)return Eh[e]=r}return e}const GA="http://www.w3.org/1999/xlink";function kI(s,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?s.removeAttributeNS(GA,e.slice(6,e.length)):s.setAttributeNS(GA,e,t);else{const r=Ux(e);t==null||r&&!x_(t)?s.removeAttribute(e):s.setAttribute(e,r?"":t)}}function GI(s,e,t,n,i,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,i,r),s[e]=t??"";return}if(e==="value"&&s.tagName!=="PROGRESS"&&!s.tagName.includes("-")){s._value=t;const l=t??"";(s.value!==l||s.tagName==="OPTION")&&(s.value=l),t==null&&s.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof s[e];l==="boolean"?t=x_(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{s[e]=t}catch{}a&&s.removeAttribute(e)}function HI(s,e,t,n){s.addEventListener(e,t,n)}function VI(s,e,t,n){s.removeEventListener(e,t,n)}function zI(s,e,t,n,i=null){const r=s._vei||(s._vei={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=WI(e);if(n){const c=r[e]=jI(n,i);HI(s,a,c,l)}else o&&(VI(s,a,o,l),r[e]=void 0)}}const HA=/(?:Once|Passive|Capture)$/;function WI(s){let e;if(HA.test(s)){e={};let n;for(;n=s.match(HA);)s=s.slice(0,s.length-n[0].length),e[n[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):bo(s.slice(2)),e]}let xh=0;const qI=Promise.resolve(),$I=()=>xh||(qI.then(()=>xh=0),xh=Date.now());function jI(s,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Xn(KI(n,t.value),e,5,[n])};return t.value=s,t.attached=$I(),t}function KI(s,e){if(Oe(e)){const t=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{t.call(s),s._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const VA=/^on[a-z]/,YI=(s,e,t,n,i=!1,r,o,a,l)=>{e==="class"?NI(s,n,i):e==="style"?QI(s,t,n):$c(e)?yf(e)||zI(s,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):XI(s,e,n,i))?GI(s,e,n,r,o,a,l):(e==="true-value"?s._trueValue=n:e==="false-value"&&(s._falseValue=n),kI(s,e,n,i))};function XI(s,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in s&&VA.test(e)&&ke(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&s.tagName==="INPUT"||e==="type"&&s.tagName==="TEXTAREA"||VA.test(e)&&Qt(t)?!1:e in s}const JI=An({patchProp:YI},FI);let zA;function ZI(){return zA||(zA=fI(JI))}const eC=(...s)=>{const e=ZI().createApp(...s),{mount:t}=e;return e.mount=n=>{const i=tC(n);if(!i)return;const r=e._component;!ke(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function tC(s){return Qt(s)?document.querySelector(s):s}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Vr=typeof window<"u";function nC(s){return s.__esModule||s[Symbol.toStringTag]==="Module"}const st=Object.assign;function yh(s,e){const t={};for(const n in e){const i=e[n];t[n]=ei(i)?i.map(s):s(i)}return t}const Ma=()=>{},ei=Array.isArray,iC=/\/$/,sC=s=>s.replace(iC,"");function Ih(s,e,t="/"){let n,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=s(r)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=lC(n??e,t),{fullPath:n+(r&&"?")+r+o,path:n,query:i,hash:o}}function rC(s,e){const t=e.query?s(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function WA(s,e){return!e||!s.toLowerCase().startsWith(e.toLowerCase())?s:s.slice(e.length)||"/"}function oC(s,e,t){const n=e.matched.length-1,i=t.matched.length-1;return n>-1&&n===i&&uo(e.matched[n],t.matched[i])&&_v(e.params,t.params)&&s(e.query)===s(t.query)&&e.hash===t.hash}function uo(s,e){return(s.aliasOf||s)===(e.aliasOf||e)}function _v(s,e){if(Object.keys(s).length!==Object.keys(e).length)return!1;for(const t in s)if(!aC(s[t],e[t]))return!1;return!0}function aC(s,e){return ei(s)?qA(s,e):ei(e)?qA(e,s):s===e}function qA(s,e){return ei(e)?s.length===e.length&&s.every((t,n)=>t===e[n]):s.length===1&&s[0]===e}function lC(s,e){if(s.startsWith("/"))return s;if(!s)return e;const t=e.split("/"),n=s.split("/");let i=t.length-1,r,o;for(r=0;r<n.length;r++)if(o=n[r],o!==".")if(o==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+n.slice(r-(r===n.length?1:0)).join("/")}var Va;(function(s){s.pop="pop",s.push="push"})(Va||(Va={}));var ba;(function(s){s.back="back",s.forward="forward",s.unknown=""})(ba||(ba={}));function cC(s){if(!s)if(Vr){const e=document.querySelector("base");s=e&&e.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),sC(s)}const hC=/^[^#]+#/;function uC(s,e){return s.replace(hC,"#")+e}function dC(s,e){const t=document.documentElement.getBoundingClientRect(),n=s.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const ih=()=>({left:window.pageXOffset,top:window.pageYOffset});function fC(s){let e;if("el"in s){const t=s.el,n=typeof t=="string"&&t.startsWith("#"),i=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!i)return;e=dC(i,s)}else e=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function $A(s,e){return(history.state?history.state.position-e:-1)+s}const Ud=new Map;function AC(s,e){Ud.set(s,e)}function pC(s){const e=Ud.get(s);return Ud.delete(s),e}let gC=()=>location.protocol+"//"+location.host;function vv(s,e){const{pathname:t,search:n,hash:i}=e,r=s.indexOf("#");if(r>-1){let a=i.includes(s.slice(r))?s.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),WA(l,"")}return WA(t,s)+n+i}function mC(s,e,t,n){let i=[],r=[],o=null;const a=({state:d})=>{const f=vv(s,location),p=t.value,m=e.value;let g=0;if(d){if(t.value=f,e.value=d,o&&o===p){o=null;return}g=m?d.position-m.position:0}else n(f);i.forEach(A=>{A(t.value,p,{delta:g,type:Va.pop,direction:g?g>0?ba.forward:ba.back:ba.unknown})})};function l(){o=t.value}function c(d){i.push(d);const f=()=>{const p=i.indexOf(d);p>-1&&i.splice(p,1)};return r.push(f),f}function h(){const{history:d}=window;d.state&&d.replaceState(st({},d.state,{scroll:ih()}),"")}function u(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h),{pauseListeners:l,listen:c,destroy:u}}function jA(s,e,t,n=!1,i=!1){return{back:s,current:e,forward:t,replaced:n,position:window.history.length,scroll:i?ih():null}}function _C(s){const{history:e,location:t}=window,n={value:vv(s,t)},i={value:e.state};i.value||r(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,h){const u=s.indexOf("#"),d=u>-1?(t.host&&document.querySelector("base")?s:s.slice(u))+l:gC()+s+l;try{e[h?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),t[h?"replace":"assign"](d)}}function o(l,c){const h=st({},e.state,jA(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,h,!0),n.value=l}function a(l,c){const h=st({},i.value,e.state,{forward:l,scroll:ih()});r(h.current,h,!0);const u=st({},jA(n.value,l,null),{position:h.position+1},c);r(l,u,!1),n.value=l}return{location:n,state:i,push:a,replace:o}}function vC(s){s=cC(s);const e=_C(s),t=mC(s,e.state,e.location,e.replace);function n(r,o=!0){o||t.pauseListeners(),history.go(r)}const i=st({location:"",base:s,go:n,createHref:uC.bind(null,s)},e,t);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function EC(s){return typeof s=="string"||s&&typeof s=="object"}function Ev(s){return typeof s=="string"||typeof s=="symbol"}const Ki={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xv=Symbol("");var KA;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(KA||(KA={}));function fo(s,e){return st(new Error,{type:s,[xv]:!0},e)}function Ii(s,e){return s instanceof Error&&xv in s&&(e==null||!!(s.type&e))}const YA="[^/]+?",xC={sensitive:!1,strict:!1,start:!0,end:!0},yC=/[.+*?^${}()[\]/\\]/g;function IC(s,e){const t=st({},xC,e),n=[];let i=t.start?"^":"";const r=[];for(const c of s){const h=c.length?[]:[90];t.strict&&!c.length&&(i+="/");for(let u=0;u<c.length;u++){const d=c[u];let f=40+(t.sensitive?.25:0);if(d.type===0)u||(i+="/"),i+=d.value.replace(yC,"\\$&"),f+=40;else if(d.type===1){const{value:p,repeatable:m,optional:g,regexp:A}=d;r.push({name:p,repeatable:m,optional:g});const E=A||YA;if(E!==YA){f+=10;try{new RegExp(`(${E})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${p}" (${E}): `+v.message)}}let _=m?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;u||(_=g&&c.length<2?`(?:/${_})`:"/"+_),g&&(_+="?"),i+=_,f+=20,g&&(f+=-8),m&&(f+=-20),E===".*"&&(f+=-50)}h.push(f)}n.push(h)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(i+="/?"),t.end?i+="$":t.strict&&(i+="(?:/|$)");const o=new RegExp(i,t.sensitive?"":"i");function a(c){const h=c.match(o),u={};if(!h)return null;for(let d=1;d<h.length;d++){const f=h[d]||"",p=r[d-1];u[p.name]=f&&p.repeatable?f.split("/"):f}return u}function l(c){let h="",u=!1;for(const d of s){(!u||!h.endsWith("/"))&&(h+="/"),u=!1;for(const f of d)if(f.type===0)h+=f.value;else if(f.type===1){const{value:p,repeatable:m,optional:g}=f,A=p in c?c[p]:"";if(ei(A)&&!m)throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);const E=ei(A)?A.join("/"):A;if(!E)if(g)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):u=!0);else throw new Error(`Missing required param "${p}"`);h+=E}}return h||"/"}return{re:o,score:n,keys:r,parse:a,stringify:l}}function CC(s,e){let t=0;for(;t<s.length&&t<e.length;){const n=e[t]-s[t];if(n)return n;t++}return s.length<e.length?s.length===1&&s[0]===40+40?-1:1:s.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function SC(s,e){let t=0;const n=s.score,i=e.score;for(;t<n.length&&t<i.length;){const r=CC(n[t],i[t]);if(r)return r;t++}if(Math.abs(i.length-n.length)===1){if(XA(n))return 1;if(XA(i))return-1}return i.length-n.length}function XA(s){const e=s[s.length-1];return s.length>0&&e[e.length-1]<0}const wC={type:0,value:""},MC=/[a-zA-Z0-9_]/;function bC(s){if(!s)return[[]];if(s==="/")return[[wC]];if(!s.startsWith("/"))throw new Error(`Invalid path "${s}"`);function e(f){throw new Error(`ERR (${t})/"${c}": ${f}`)}let t=0,n=t;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",h="";function u(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<s.length;){if(l=s[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&u(),o()):l===":"?(u(),t=1):d();break;case 4:d(),t=n;break;case 1:l==="("?t=2:MC.test(l)?d():(u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:t=3:h+=l;break;case 3:u(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),u(),o(),i}function TC(s,e,t){const n=IC(bC(s.path),t),i=st(n,{record:s,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function BC(s,e){const t=[],n=new Map;e=ep({strict:!1,end:!0,sensitive:!1},e);function i(h){return n.get(h)}function r(h,u,d){const f=!d,p=RC(h);p.aliasOf=d&&d.record;const m=ep(e,h),g=[p];if("alias"in h){const _=typeof h.alias=="string"?[h.alias]:h.alias;for(const v of _)g.push(st({},p,{components:d?d.record.components:p.components,path:v,aliasOf:d?d.record:p}))}let A,E;for(const _ of g){const{path:v}=_;if(u&&v[0]!=="/"){const I=u.record.path,S=I[I.length-1]==="/"?"":"/";_.path=u.record.path+(v&&S+v)}if(A=TC(_,u,m),d?d.alias.push(A):(E=E||A,E!==A&&E.alias.push(A),f&&h.name&&!ZA(A)&&o(h.name)),p.children){const I=p.children;for(let S=0;S<I.length;S++)r(I[S],A,d&&d.children[S])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return E?()=>{o(E)}:Ma}function o(h){if(Ev(h)){const u=n.get(h);u&&(n.delete(h),t.splice(t.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=t.indexOf(h);u>-1&&(t.splice(u,1),h.record.name&&n.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return t}function l(h){let u=0;for(;u<t.length&&SC(h,t[u])>=0&&(h.record.path!==t[u].record.path||!yv(h,t[u]));)u++;t.splice(u,0,h),h.record.name&&!ZA(h)&&n.set(h.record.name,h)}function c(h,u){let d,f={},p,m;if("name"in h&&h.name){if(d=n.get(h.name),!d)throw fo(1,{location:h});m=d.record.name,f=st(JA(u.params,d.keys.filter(E=>!E.optional).map(E=>E.name)),h.params&&JA(h.params,d.keys.map(E=>E.name))),p=d.stringify(f)}else if("path"in h)p=h.path,d=t.find(E=>E.re.test(p)),d&&(f=d.parse(p),m=d.record.name);else{if(d=u.name?n.get(u.name):t.find(E=>E.re.test(u.path)),!d)throw fo(1,{location:h,currentLocation:u});m=d.record.name,f=st({},u.params,h.params),p=d.stringify(f)}const g=[];let A=d;for(;A;)g.unshift(A.record),A=A.parent;return{name:m,path:p,params:f,matched:g,meta:DC(g)}}return s.forEach(h=>r(h)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function JA(s,e){const t={};for(const n of e)n in s&&(t[n]=s[n]);return t}function RC(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:LC(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||null:s.component&&{default:s.component}}}function LC(s){const e={},t=s.props||!1;if("component"in s)e.default=t;else for(const n in s.components)e[n]=typeof t=="boolean"?t:t[n];return e}function ZA(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function DC(s){return s.reduce((e,t)=>st(e,t.meta),{})}function ep(s,e){const t={};for(const n in s)t[n]=n in e?e[n]:s[n];return t}function yv(s,e){return e.children.some(t=>t===s||yv(s,t))}const Iv=/#/g,PC=/&/g,UC=/\//g,FC=/=/g,NC=/\?/g,Cv=/\+/g,QC=/%5B/g,OC=/%5D/g,Sv=/%5E/g,kC=/%60/g,wv=/%7B/g,GC=/%7C/g,Mv=/%7D/g,HC=/%20/g;function kf(s){return encodeURI(""+s).replace(GC,"|").replace(QC,"[").replace(OC,"]")}function VC(s){return kf(s).replace(wv,"{").replace(Mv,"}").replace(Sv,"^")}function Fd(s){return kf(s).replace(Cv,"%2B").replace(HC,"+").replace(Iv,"%23").replace(PC,"%26").replace(kC,"`").replace(wv,"{").replace(Mv,"}").replace(Sv,"^")}function zC(s){return Fd(s).replace(FC,"%3D")}function WC(s){return kf(s).replace(Iv,"%23").replace(NC,"%3F")}function qC(s){return s==null?"":WC(s).replace(UC,"%2F")}function Pc(s){try{return decodeURIComponent(""+s)}catch{}return""+s}function $C(s){const e={};if(s===""||s==="?")return e;const n=(s[0]==="?"?s.slice(1):s).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(Cv," "),o=r.indexOf("="),a=Pc(o<0?r:r.slice(0,o)),l=o<0?null:Pc(r.slice(o+1));if(a in e){let c=e[a];ei(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function tp(s){let e="";for(let t in s){const n=s[t];if(t=zC(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(ei(n)?n.map(r=>r&&Fd(r)):[n&&Fd(n)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function jC(s){const e={};for(const t in s){const n=s[t];n!==void 0&&(e[t]=ei(n)?n.map(i=>i==null?null:""+i):n==null?n:""+n)}return e}const KC=Symbol(""),np=Symbol(""),Gf=Symbol(""),bv=Symbol(""),Nd=Symbol("");function Oo(){let s=[];function e(n){return s.push(n),()=>{const i=s.indexOf(n);i>-1&&s.splice(i,1)}}function t(){s=[]}return{add:e,list:()=>s,reset:t}}function rs(s,e,t,n,i){const r=n&&(n.enterCallbacks[i]=n.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=u=>{u===!1?a(fo(4,{from:t,to:e})):u instanceof Error?a(u):EC(u)?a(fo(2,{from:e,to:u})):(r&&n.enterCallbacks[i]===r&&typeof u=="function"&&r.push(u),o())},c=s.call(n&&n.instances[i],e,t,l);let h=Promise.resolve(c);s.length<3&&(h=h.then(l)),h.catch(u=>a(u))})}function Ch(s,e,t,n){const i=[];for(const r of s)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(YC(a)){const c=(a.__vccOpts||a)[e];c&&i.push(rs(c,t,n,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const h=nC(c)?c.default:c;r.components[o]=h;const d=(h.__vccOpts||h)[e];return d&&rs(d,t,n,r,o)()}))}}return i}function YC(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function ip(s){const e=Gi(Gf),t=Gi(bv),n=Dn(()=>e.resolve(Xs(s.to))),i=Dn(()=>{const{matched:l}=n.value,{length:c}=l,h=l[c-1],u=t.matched;if(!h||!u.length)return-1;const d=u.findIndex(uo.bind(null,h));if(d>-1)return d;const f=sp(l[c-2]);return c>1&&sp(h)===f&&u[u.length-1].path!==f?u.findIndex(uo.bind(null,l[c-2])):d}),r=Dn(()=>i.value>-1&&eS(t.params,n.value.params)),o=Dn(()=>i.value>-1&&i.value===t.matched.length-1&&_v(t.params,n.value.params));function a(l={}){return ZC(l)?e[Xs(s.replace)?"replace":"push"](Xs(s.to)).catch(Ma):Promise.resolve()}return{route:n,href:Dn(()=>n.value.href),isActive:r,isExactActive:o,navigate:a}}const XC=Uf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ip,setup(s,{slots:e}){const t=Za(ip(s)),{options:n}=Gi(Gf),i=Dn(()=>({[rp(s.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[rp(s.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&e.default(t);return s.custom?r:mv("a",{"aria-current":t.isExactActive?s.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:i.value},r)}}}),JC=XC;function ZC(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const e=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return s.preventDefault&&s.preventDefault(),!0}}function eS(s,e){for(const t in e){const n=e[t],i=s[t];if(typeof n=="string"){if(n!==i)return!1}else if(!ei(i)||i.length!==n.length||n.some((r,o)=>r!==i[o]))return!1}return!0}function sp(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const rp=(s,e,t)=>s??e??t,tS=Uf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(s,{attrs:e,slots:t}){const n=Gi(Nd),i=Dn(()=>s.route||n.value),r=Gi(np,0),o=Dn(()=>{let c=Xs(r);const{matched:h}=i.value;let u;for(;(u=h[c])&&!u.components;)c++;return c}),a=Dn(()=>i.value.matched[o.value]);cc(np,Dn(()=>o.value+1)),cc(KC,a),cc(Nd,i);const l=Ey();return hc(()=>[l.value,a.value,s.name],([c,h,u],[d,f,p])=>{h&&(h.instances[u]=c,f&&f!==h&&c&&c===d&&(h.leaveGuards.size||(h.leaveGuards=f.leaveGuards),h.updateGuards.size||(h.updateGuards=f.updateGuards))),c&&h&&(!f||!uo(h,f)||!d)&&(h.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,h=s.name,u=a.value,d=u&&u.components[h];if(!d)return op(t.default,{Component:d,route:c});const f=u.props[h],p=f?f===!0?c.params:typeof f=="function"?f(c):f:null,g=mv(d,st({},p,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(u.instances[h]=null)},ref:l}));return op(t.default,{Component:g,route:c})||g}}});function op(s,e){if(!s)return null;const t=s(e);return t.length===1?t[0]:t}const Tv=tS;function nS(s){const e=BC(s.routes,s),t=s.parseQuery||$C,n=s.stringifyQuery||tp,i=s.history,r=Oo(),o=Oo(),a=Oo(),l=xy(Ki);let c=Ki;Vr&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=yh.bind(null,U=>""+U),u=yh.bind(null,qC),d=yh.bind(null,Pc);function f(U,K){let D,he;return Ev(U)?(D=e.getRecordMatcher(U),he=K):he=U,e.addRoute(he,D)}function p(U){const K=e.getRecordMatcher(U);K&&e.removeRoute(K)}function m(){return e.getRoutes().map(U=>U.record)}function g(U){return!!e.getRecordMatcher(U)}function A(U,K){if(K=st({},K||l.value),typeof U=="string"){const w=Ih(t,U,K.path),B=e.resolve({path:w.path},K),H=i.createHref(w.fullPath);return st(w,B,{params:d(B.params),hash:Pc(w.hash),redirectedFrom:void 0,href:H})}let D;if("path"in U)D=st({},U,{path:Ih(t,U.path,K.path).path});else{const w=st({},U.params);for(const B in w)w[B]==null&&delete w[B];D=st({},U,{params:u(U.params)}),K.params=u(K.params)}const he=e.resolve(D,K),ve=U.hash||"";he.params=h(d(he.params));const ce=rC(n,st({},U,{hash:VC(ve),path:he.path})),ge=i.createHref(ce);return st({fullPath:ce,hash:ve,query:n===tp?jC(U.query):U.query||{}},he,{redirectedFrom:void 0,href:ge})}function E(U){return typeof U=="string"?Ih(t,U,l.value.path):st({},U)}function _(U,K){if(c!==U)return fo(8,{from:K,to:U})}function v(U){return T(U)}function I(U){return v(st(E(U),{replace:!0}))}function S(U){const K=U.matched[U.matched.length-1];if(K&&K.redirect){const{redirect:D}=K;let he=typeof D=="function"?D(U):D;return typeof he=="string"&&(he=he.includes("?")||he.includes("#")?he=E(he):{path:he},he.params={}),st({query:U.query,hash:U.hash,params:"path"in he?{}:U.params},he)}}function T(U,K){const D=c=A(U),he=l.value,ve=U.state,ce=U.force,ge=U.replace===!0,w=S(D);if(w)return T(st(E(w),{state:typeof w=="object"?st({},ve,w.state):ve,force:ce,replace:ge}),K||D);const B=D;B.redirectedFrom=K;let H;return!ce&&oC(n,he,D)&&(H=fo(16,{to:B,from:he}),le(he,he,!0,!1)),(H?Promise.resolve(H):y(B,he)).catch(X=>Ii(X)?Ii(X,2)?X:J(X):G(X,B,he)).then(X=>{if(X){if(Ii(X,2))return T(st({replace:ge},E(X.to),{state:typeof X.to=="object"?st({},ve,X.to.state):ve,force:ce}),K||B)}else X=k(B,he,!0,ge,ve);return M(B,he,X),X})}function R(U,K){const D=_(U,K);return D?Promise.reject(D):Promise.resolve()}function y(U,K){let D;const[he,ve,ce]=iS(U,K);D=Ch(he.reverse(),"beforeRouteLeave",U,K);for(const w of he)w.leaveGuards.forEach(B=>{D.push(rs(B,U,K))});const ge=R.bind(null,U,K);return D.push(ge),cr(D).then(()=>{D=[];for(const w of r.list())D.push(rs(w,U,K));return D.push(ge),cr(D)}).then(()=>{D=Ch(ve,"beforeRouteUpdate",U,K);for(const w of ve)w.updateGuards.forEach(B=>{D.push(rs(B,U,K))});return D.push(ge),cr(D)}).then(()=>{D=[];for(const w of U.matched)if(w.beforeEnter&&!K.matched.includes(w))if(ei(w.beforeEnter))for(const B of w.beforeEnter)D.push(rs(B,U,K));else D.push(rs(w.beforeEnter,U,K));return D.push(ge),cr(D)}).then(()=>(U.matched.forEach(w=>w.enterCallbacks={}),D=Ch(ce,"beforeRouteEnter",U,K),D.push(ge),cr(D))).then(()=>{D=[];for(const w of o.list())D.push(rs(w,U,K));return D.push(ge),cr(D)}).catch(w=>Ii(w,8)?w:Promise.reject(w))}function M(U,K,D){for(const he of a.list())he(U,K,D)}function k(U,K,D,he,ve){const ce=_(U,K);if(ce)return ce;const ge=K===Ki,w=Vr?history.state:{};D&&(he||ge?i.replace(U.fullPath,st({scroll:ge&&w&&w.scroll},ve)):i.push(U.fullPath,ve)),l.value=U,le(U,K,D,ge),J()}let W;function F(){W||(W=i.listen((U,K,D)=>{if(!se.listening)return;const he=A(U),ve=S(he);if(ve){T(st(ve,{replace:!0}),he).catch(Ma);return}c=he;const ce=l.value;Vr&&AC($A(ce.fullPath,D.delta),ih()),y(he,ce).catch(ge=>Ii(ge,12)?ge:Ii(ge,2)?(T(ge.to,he).then(w=>{Ii(w,20)&&!D.delta&&D.type===Va.pop&&i.go(-1,!1)}).catch(Ma),Promise.reject()):(D.delta&&i.go(-D.delta,!1),G(ge,he,ce))).then(ge=>{ge=ge||k(he,ce,!1),ge&&(D.delta&&!Ii(ge,8)?i.go(-D.delta,!1):D.type===Va.pop&&Ii(ge,20)&&i.go(-1,!1)),M(he,ce,ge)}).catch(Ma)}))}let P=Oo(),V=Oo(),$;function G(U,K,D){J(U);const he=V.list();return he.length?he.forEach(ve=>ve(U,K,D)):console.error(U),Promise.reject(U)}function Q(){return $&&l.value!==Ki?Promise.resolve():new Promise((U,K)=>{P.add([U,K])})}function J(U){return $||($=!U,F(),P.list().forEach(([K,D])=>U?D(U):K()),P.reset()),U}function le(U,K,D,he){const{scrollBehavior:ve}=s;if(!Vr||!ve)return Promise.resolve();const ce=!D&&pC($A(U.fullPath,0))||(he||!D)&&history.state&&history.state.scroll||null;return q_().then(()=>ve(U,K,ce)).then(ge=>ge&&fC(ge)).catch(ge=>G(ge,U,K))}const xe=U=>i.go(U);let me;const Y=new Set,se={currentRoute:l,listening:!0,addRoute:f,removeRoute:p,hasRoute:g,getRoutes:m,resolve:A,options:s,push:v,replace:I,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:V.add,isReady:Q,install(U){const K=this;U.component("RouterLink",JC),U.component("RouterView",Tv),U.config.globalProperties.$router=K,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Xs(l)}),Vr&&!me&&l.value===Ki&&(me=!0,v(i.location).catch(ve=>{}));const D={};for(const ve in Ki)D[ve]=Dn(()=>l.value[ve]);U.provide(Gf,K),U.provide(bv,Za(D)),U.provide(Nd,l);const he=U.unmount;Y.add(U),U.unmount=function(){Y.delete(U),Y.size<1&&(c=Ki,W&&W(),W=null,l.value=Ki,me=!1,$=!1),he()}}};return se}function cr(s){return s.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function iS(s,e){const t=[],n=[],i=[],r=Math.max(e.matched.length,s.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(s.matched.find(c=>uo(c,a))?n.push(a):t.push(a));const l=s.matched[o];l&&(e.matched.find(c=>uo(c,l))||i.push(l))}return[t,n,i]}const sS=Mt("div",{class:"background-container"},[Mt("div",{class:"gradient"}),Mt("div",{class:"static-background"})],-1),rS=Uf({__name:"App",setup(s){return(e,t)=>(dv(),fv(hi,null,[at(Xs(Tv)),sS],64))}});const oS="modulepreload",aS=function(s){return"/workout-app/"+s},ap={},sn=function(e,t,n){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=aS(r),r in ap)return;ap[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!n)for(let h=i.length-1;h>=0;h--){const u=i[h];if(u.href===r&&(!o||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":oS,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((h,u)=>{c.addEventListener("load",h),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};const lS=(s,e)=>{const t=s.__vccOpts||s;for(const[n,i]of e)t[n]=i;return t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cS=(s,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,s)}};function Fe(s){return(e,t)=>t!==void 0?((n,i,r)=>{i.constructor.createProperty(r,n)})(s,e,t):cS(s,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Sh;((Sh=window.HTMLSlotElement)===null||Sh===void 0?void 0:Sh.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hf="151",hS=0,lp=1,uS=2,Bv=1,dS=2,Aa=3,ti=0,Nt=1,ln=2,Hi=0,no=1,cp=2,hp=3,up=4,fS=5,zr=100,AS=101,pS=102,dp=103,fp=104,gS=200,mS=201,_S=202,vS=203,Rv=204,Lv=205,ES=206,xS=207,yS=208,IS=209,CS=210,SS=0,wS=1,MS=2,Qd=3,bS=4,TS=5,BS=6,RS=7,Dv=0,LS=1,DS=2,mi=0,PS=1,US=2,FS=3,Pv=4,NS=5,Uv=300,Ao=301,po=302,Uc=303,Od=304,sh=306,Wi=1e3,$t=1001,za=1002,bt=1003,Fc=1004,Ta=1005,pt=1006,Vf=1007,Ei=1008,an=1009,QS=1010,OS=1011,Fv=1012,kS=1013,Ks=1014,hn=1015,un=1016,GS=1017,HS=1018,io=1020,VS=1021,wt=1023,zS=1024,WS=1025,Zs=1026,go=1027,pa=1028,qS=1029,ga=1030,$S=1031,jS=1033,Ac=33776,wh=33777,Mh=33778,pc=33779,kd=35840,Ap=35841,Gd=35842,pp=35843,Nv=36196,Hd=37492,Vd=37496,zd=37808,gp=37809,mp=37810,_p=37811,vp=37812,Ep=37813,xp=37814,yp=37815,Ip=37816,Cp=37817,Sp=37818,wp=37819,Mp=37820,bp=37821,gc=36492,KS=36283,Tp=36284,Bp=36285,Rp=36286,Qv=2200,zf=2201,Wf=2202,mo=2300,tr=2301,bh=2302,$r=2400,jr=2401,Nc=2402,qf=2500,YS=2501,XS=0,Ov=1,Wd=2,Kt=3e3,Ve=3001,JS=3200,ZS=3201,kv=0,ew=1,Rn="srgb",_o="srgb-linear",Gv="display-p3",Th=7680,tw=519,qd=35044,Lp="300 es",$d=1035;class Nn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dp=1234567;const Ba=Math.PI/180,vo=180/Math.PI;function Jn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[s&255]+Vt[s>>8&255]+Vt[s>>16&255]+Vt[s>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Ut(s,e,t){return Math.max(e,Math.min(t,s))}function $f(s,e){return(s%e+e)%e}function nw(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function iw(s,e,t){return s!==e?(t-s)/(e-s):0}function Ra(s,e,t){return(1-t)*s+t*e}function sw(s,e,t,n){return Ra(s,e,1-Math.exp(-t*n))}function rw(s,e=1){return e-Math.abs($f(s,e*2)-e)}function ow(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function aw(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function lw(s,e){return s+Math.floor(Math.random()*(e-s+1))}function cw(s,e){return s+Math.random()*(e-s)}function hw(s){return s*(.5-Math.random())}function uw(s){s!==void 0&&(Dp=s);let e=Dp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dw(s){return s*Ba}function fw(s){return s*vo}function jd(s){return(s&s-1)===0&&s!==0}function Hv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Vv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Aw(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ki(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Qc={DEG2RAD:Ba,RAD2DEG:vo,generateUUID:Jn,clamp:Ut,euclideanModulo:$f,mapLinear:nw,inverseLerp:iw,lerp:Ra,damp:sw,pingpong:rw,smoothstep:ow,smootherstep:aw,randInt:lw,randFloat:cw,randFloatSpread:hw,seededRandom:uw,degToRad:dw,radToDeg:fw,isPowerOfTwo:jd,ceilPowerOfTwo:Hv,floorPowerOfTwo:Vv,setQuaternionFromProperEuler:Aw,normalize:lt,denormalize:ki};class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=i[0],g=i[3],A=i[6],E=i[1],_=i[4],v=i[7],I=i[2],S=i[5],T=i[8];return r[0]=o*m+a*E+l*I,r[3]=o*g+a*_+l*S,r[6]=o*A+a*v+l*T,r[1]=c*m+h*E+u*I,r[4]=c*g+h*_+u*S,r[7]=c*A+h*v+u*T,r[2]=d*m+f*E+p*I,r[5]=d*g+f*_+p*S,r[8]=d*A+f*v+p*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/p;return e[0]=u*m,e[1]=(i*c-h*n)*m,e[2]=(a*n-i*o)*m,e[3]=d*m,e[4]=(h*t-i*l)*m,e[5]=(i*r-a*t)*m,e[6]=f*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*r)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Bh.makeScale(e,t)),this}rotate(e){return this.premultiply(Bh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bh.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bh=new We;function zv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Wa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function so(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rh(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const pw=new We().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),gw=new We().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function mw(s){return s.convertSRGBToLinear().applyMatrix3(gw)}function _w(s){return s.applyMatrix3(pw).convertLinearToSRGB()}const vw={[_o]:s=>s,[Rn]:s=>s.convertSRGBToLinear(),[Gv]:mw},Ew={[_o]:s=>s,[Rn]:s=>s.convertLinearToSRGB(),[Gv]:_w},En={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return _o},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=vw[e],i=Ew[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let hr;class Wv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hr===void 0&&(hr=Wa("canvas")),hr.width=e.width,hr.height=e.height;const n=hr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=so(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(so(t[n]/255)*255):t[n]=so(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class jf{constructor(e=null){this.isSource=!0,this.uuid=Jn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Lh(i[o].image)):r.push(Lh(i[o]))}else r=Lh(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Lh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xw=0,Tt=class mc extends Nn{constructor(e=mc.DEFAULT_IMAGE,t=mc.DEFAULT_MAPPING,n=$t,i=$t,r=pt,o=Ei,a=wt,l=an,c=mc.DEFAULT_ANISOTROPY,h=Kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=Jn(),this.name="",this.source=new jf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wi:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wi:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}};Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Uv;Tt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,i=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],m=l[2],g=l[6],A=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+A-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(f+1)/2,I=(A+1)/2,S=(h+d)/4,T=(u+m)/4,R=(p+g)/4;return _>v&&_>I?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=S/n,r=T/n):v>I?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=S/i,r=R/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=T/r,i=R/r),this.set(n,i,r,t),this}let E=Math.sqrt((g-p)*(g-p)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(g-p)/E,this.y=(u-m)/E,this.z=(d-h)/E,this.w=Math.acos((c+f+A-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ni extends Nn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qv extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $v extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],p=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||l!==d||c!==f||h!==p){let g=1-a;const A=l*d+c*f+h*p+u*m,E=A>=0?1:-1,_=1-A*A;if(_>Number.EPSILON){const I=Math.sqrt(_),S=Math.atan2(I,A*E);g=Math.sin(g*S)/I,a=Math.sin(a*S)/I}const v=a*E;if(l=l*g+d*v,c=c*g+f*v,h=h*g+p*v,u=u*g+m*v,g===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-r*i,u=l*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=c*l+d*-r+h*-a-u*-o,this.y=h*l+d*-o+u*-r-c*-a,this.z=u*l+d*-a+c*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dh.copy(this).projectOnVector(e),this.sub(Dh)}reflect(e){return this.sub(Dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dh=new L,Pp=new Fn;class cn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ur.copy(e.boundingBox),ur.applyMatrix4(e.matrixWorld),this.union(ur);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const r=i.attributes.position;for(let o=0,a=r.count;o<a;o++)Si.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Si)}else i.boundingBox===null&&i.computeBoundingBox(),ur.copy(i.boundingBox),ur.applyMatrix4(e.matrixWorld),this.union(ur)}const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),ul.subVectors(this.max,ko),dr.subVectors(e.a,ko),fr.subVectors(e.b,ko),Ar.subVectors(e.c,ko),Yi.subVectors(fr,dr),Xi.subVectors(Ar,fr),bs.subVectors(dr,Ar);let t=[0,-Yi.z,Yi.y,0,-Xi.z,Xi.y,0,-bs.z,bs.y,Yi.z,0,-Yi.x,Xi.z,0,-Xi.x,bs.z,0,-bs.x,-Yi.y,Yi.x,0,-Xi.y,Xi.x,0,-bs.y,bs.x,0];return!Ph(t,dr,fr,Ar,ul)||(t=[1,0,0,0,1,0,0,0,1],!Ph(t,dr,fr,Ar,ul))?!1:(dl.crossVectors(Yi,Xi),t=[dl.x,dl.y,dl.z],Ph(t,dr,fr,Ar,ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new L,new L,new L,new L,new L,new L,new L,new L],Si=new L,ur=new cn,dr=new L,fr=new L,Ar=new L,Yi=new L,Xi=new L,bs=new L,ko=new L,ul=new L,dl=new L,Ts=new L;function Ph(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ts.fromArray(s,r);const a=i.x*Math.abs(Ts.x)+i.y*Math.abs(Ts.y)+i.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),h=n.dot(Ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const yw=new cn,Go=new L,Uh=new L;class si{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yw.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Go.subVectors(e,this.center);const t=Go.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Go,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Go.copy(e.center).add(Uh)),this.expandByPoint(Go.copy(e.center).sub(Uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new L,Fh=new L,fl=new L,Ji=new L,Nh=new L,Al=new L,Qh=new L;class rh{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fh.copy(e).add(t).multiplyScalar(.5),fl.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(Fh);const r=e.distanceTo(t)*.5,o=-this.direction.dot(fl),a=Ji.dot(this.direction),l=-Ji.dot(fl),c=Ji.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const m=1/h;u*=m,d*=m,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fh).addScaledVector(fl,d),f}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const n=wi.dot(this.direction),i=wi.dot(wi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,i,r){Nh.subVectors(t,e),Al.subVectors(n,e),Qh.crossVectors(Nh,Al);let o=this.direction.dot(Qh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const l=a*this.direction.dot(Al.crossVectors(Ji,Al));if(l<0)return null;const c=a*this.direction.dot(Nh.cross(Ji));if(c<0||l+c>o)return null;const h=-a*Ji.dot(Qh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,a,l,c,h,u,d,f,p,m,g){const A=this.elements;return A[0]=e,A[4]=t,A[8]=n,A[12]=i,A[1]=r,A[5]=o,A[9]=a,A[13]=l,A[2]=c,A[6]=h,A[10]=u,A[14]=d,A[3]=f,A[7]=p,A[11]=m,A[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/pr.setFromMatrixColumn(e,0).length(),r=1/pr.setFromMatrixColumn(e,1).length(),o=1/pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,p=a*h,m=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,p=c*h,m=c*u;t[0]=d+m*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,p=c*h,m=c*u;t[0]=d-m*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,p=a*h,m=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,p=a*l,m=a*c;t[0]=l*h,t[4]=m-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-m*u}else if(e.order==="XZY"){const d=o*l,f=o*c,p=a*l,m=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Iw,e,Cw)}lookAt(e,t,n){const i=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Zi.crossVectors(n,xn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Zi.crossVectors(n,xn)),Zi.normalize(),pl.crossVectors(xn,Zi),i[0]=Zi.x,i[4]=pl.x,i[8]=xn.x,i[1]=Zi.y,i[5]=pl.y,i[9]=xn.y,i[2]=Zi.z,i[6]=pl.z,i[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],g=n[10],A=n[14],E=n[3],_=n[7],v=n[11],I=n[15],S=i[0],T=i[4],R=i[8],y=i[12],M=i[1],k=i[5],W=i[9],F=i[13],P=i[2],V=i[6],$=i[10],G=i[14],Q=i[3],J=i[7],le=i[11],xe=i[15];return r[0]=o*S+a*M+l*P+c*Q,r[4]=o*T+a*k+l*V+c*J,r[8]=o*R+a*W+l*$+c*le,r[12]=o*y+a*F+l*G+c*xe,r[1]=h*S+u*M+d*P+f*Q,r[5]=h*T+u*k+d*V+f*J,r[9]=h*R+u*W+d*$+f*le,r[13]=h*y+u*F+d*G+f*xe,r[2]=p*S+m*M+g*P+A*Q,r[6]=p*T+m*k+g*V+A*J,r[10]=p*R+m*W+g*$+A*le,r[14]=p*y+m*F+g*G+A*xe,r[3]=E*S+_*M+v*P+I*Q,r[7]=E*T+_*k+v*V+I*J,r[11]=E*R+_*W+v*$+I*le,r[15]=E*y+_*F+v*G+I*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],g=e[11],A=e[15];return p*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+m*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+g*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+A*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],g=e[14],A=e[15],E=u*g*c-m*d*c+m*l*f-a*g*f-u*l*A+a*d*A,_=p*d*c-h*g*c-p*l*f+o*g*f+h*l*A-o*d*A,v=h*m*c-p*u*c+p*a*f-o*m*f-h*a*A+o*u*A,I=p*u*l-h*m*l-p*a*d+o*m*d+h*a*g-o*u*g,S=t*E+n*_+i*v+r*I;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=E*T,e[1]=(m*d*r-u*g*r-m*i*f+n*g*f+u*i*A-n*d*A)*T,e[2]=(a*g*r-m*l*r+m*i*c-n*g*c-a*i*A+n*l*A)*T,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*T,e[4]=_*T,e[5]=(h*g*r-p*d*r+p*i*f-t*g*f-h*i*A+t*d*A)*T,e[6]=(p*l*r-o*g*r-p*i*c+t*g*c+o*i*A-t*l*A)*T,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*T,e[8]=v*T,e[9]=(p*u*r-h*m*r-p*n*f+t*m*f+h*n*A-t*u*A)*T,e[10]=(o*m*r-p*a*r+p*n*c-t*m*c-o*n*A+t*a*A)*T,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*T,e[12]=I*T,e[13]=(h*m*i-p*u*i+p*n*d-t*m*d-h*n*g+t*u*g)*T,e[14]=(p*a*i-o*m*i-p*n*l+t*m*l+o*n*g-t*a*g)*T,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,m=o*h,g=o*u,A=a*u,E=l*c,_=l*h,v=l*u,I=n.x,S=n.y,T=n.z;return i[0]=(1-(m+A))*I,i[1]=(f+v)*I,i[2]=(p-_)*I,i[3]=0,i[4]=(f-v)*S,i[5]=(1-(d+A))*S,i[6]=(g+E)*S,i[7]=0,i[8]=(p+_)*T,i[9]=(g-E)*T,i[10]=(1-(d+m))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=pr.set(i[0],i[1],i[2]).length();const o=pr.set(i[4],i[5],i[6]).length(),a=pr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],kn.copy(this);const c=1/r,h=1/o,u=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,t.setFromRotationMatrix(kn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(o+r)/(o-r),f=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-r),u=(t+e)*l,d=(n+i)*c,f=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const pr=new L,kn=new Qe,Iw=new L(0,0,0),Cw=new L(1,1,1),Zi=new L,pl=new L,xn=new L,Up=new Qe,Fp=new Fn;class Ro{constructor(e=0,t=0,n=0,i=Ro.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Up,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fp.setFromEuler(this),this.setFromQuaternion(Fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ro.DEFAULT_ORDER="XYZ";class Kf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sw=0;const Np=new L,gr=new Fn,Mi=new Qe,gl=new L,Ho=new L,ww=new L,Mw=new Fn,Qp=new L(1,0,0),Op=new L(0,1,0),kp=new L(0,0,1),bw={type:"added"},Gp={type:"removed"};class ht extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sw++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new L,t=new Ro,n=new Fn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new We}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(Op,e)}rotateZ(e){return this.rotateOnAxis(kp,e)}translateOnAxis(e,t){return Np.copy(e).applyQuaternion(this.quaternion),this.position.add(Np.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(Op,e)}translateZ(e){return this.translateOnAxis(kp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gl.copy(e):gl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Ho,gl,this.up):Mi.lookAt(gl,Ho,this.up),this.quaternion.setFromRotationMatrix(Mi),i&&(Mi.extractRotation(i.matrixWorld),gr.setFromRotationMatrix(Mi),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Gp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,ww),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,Mw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new L(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new L,bi=new L,Oh=new L,Ti=new L,mr=new L,_r=new L,Hp=new L,kh=new L,Gh=new L,Hh=new L;let ml=!1;class In{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gn.subVectors(e,t),i.cross(Gn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Gn.subVectors(i,t),bi.subVectors(n,t),Oh.subVectors(e,t);const o=Gn.dot(Gn),a=Gn.dot(bi),l=Gn.dot(Oh),c=bi.dot(bi),h=bi.dot(Oh),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ti),Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(e,t,n,i,r,o,a,l){return ml===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ml=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ti),l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l}static isFrontFacing(e,t,n,i){return Gn.subVectors(n,t),bi.subVectors(e,t),Gn.cross(bi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Gn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ml===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ml=!0),In.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return In.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;mr.subVectors(i,n),_r.subVectors(r,n),kh.subVectors(e,n);const l=mr.dot(kh),c=_r.dot(kh);if(l<=0&&c<=0)return t.copy(n);Gh.subVectors(e,i);const h=mr.dot(Gh),u=_r.dot(Gh);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(mr,o);Hh.subVectors(e,r);const f=mr.dot(Hh),p=_r.dot(Hh);if(p>=0&&f<=p)return t.copy(r);const m=f*c-l*p;if(m<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(_r,a);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return Hp.subVectors(r,i),a=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(Hp,a);const A=1/(g+m+d);return o=m*A,a=d*A,t.copy(n).addScaledVector(mr,o).addScaledVector(_r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Tw=0,Zn=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tw++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=no,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Rv,this.blendDst=Lv,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Th,this.stencilZFail=Th,this.stencilZPass=Th,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},_l={h:0,s:0,l:0};function Vh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,En.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=En.workingColorSpace){return this.r=e,this.g=t,this.b=n,En.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=En.workingColorSpace){if(e=$f(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Vh(o,r,e+1/3),this.g=Vh(o,r,e),this.b=Vh(o,r,e-1/3)}return En.toWorkingColorSpace(this,i),this}setStyle(e,t=Rn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,En.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,En.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,h=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const n=jv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}copyLinearToSRGB(e){return this.r=Rh(e.r),this.g=Rh(e.g),this.b=Rh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return En.fromWorkingColorSpace(zt.copy(this),e),Ut(zt.r*255,0,255)<<16^Ut(zt.g*255,0,255)<<8^Ut(zt.b*255,0,255)<<0}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=En.workingColorSpace){En.fromWorkingColorSpace(zt.copy(this),t);const n=zt.r,i=zt.g,r=zt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=En.workingColorSpace){return En.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Rn){En.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,i=zt.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Hn),Hn.h+=e,Hn.s+=t,Hn.l+=n,this.setHSL(Hn.h,Hn.s,Hn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(_l);const n=Ra(Hn.h,_l.h,t),i=Ra(Hn.s,_l.s,t),r=Ra(Hn.l,_l.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ne;Ne.NAMES=jv;class Kn extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Oi=Bw();function Bw(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Rw(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Ut(s,-65504,65504),Oi.floatView[0]=s;const e=Oi.uint32View[0],t=e>>23&511;return Oi.baseTable[t]+((e&8388607)>>Oi.shiftTable[t])}function Lw(s){const e=s>>10;return Oi.uint32View[0]=Oi.mantissaTable[Oi.offsetTable[e]+(s&1023)]+Oi.exponentTable[e],Oi.floatView[0]}const vl={toHalfFloat:Rw,fromHalfFloat:Lw},It=new L,El=new ze;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Kv extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yv extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _i extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dw=0;const Mn=new Qe,zh=new ht,vr=new L,yn=new cn,Vo=new cn,Dt=new L;class Qn extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dw++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zv(e)?Yv:Kv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,n){return Mn.makeTranslation(e,t,n),this.applyMatrix4(Mn),this}scale(e,t,n){return Mn.makeScale(e,t,n),this.applyMatrix4(Mn),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _i(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(yn.min,Vo.min),yn.expandByPoint(Dt),Dt.addVectors(yn.max,Vo.max),yn.expandByPoint(Dt)):(yn.expandByPoint(Vo.min),yn.expandByPoint(Vo.max))}yn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dt.fromBufferAttribute(a,c),l&&(vr.fromBufferAttribute(e,c),Dt.add(vr)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let M=0;M<a;M++)c[M]=new L,h[M]=new L;const u=new L,d=new L,f=new L,p=new ze,m=new ze,g=new ze,A=new L,E=new L;function _(M,k,W){u.fromArray(i,M*3),d.fromArray(i,k*3),f.fromArray(i,W*3),p.fromArray(o,M*2),m.fromArray(o,k*2),g.fromArray(o,W*2),d.sub(u),f.sub(u),m.sub(p),g.sub(p);const F=1/(m.x*g.y-g.x*m.y);isFinite(F)&&(A.copy(d).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(F),E.copy(f).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(F),c[M].add(A),c[k].add(A),c[W].add(A),h[M].add(E),h[k].add(E),h[W].add(E))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let M=0,k=v.length;M<k;++M){const W=v[M],F=W.start,P=W.count;for(let V=F,$=F+P;V<$;V+=3)_(n[V+0],n[V+1],n[V+2])}const I=new L,S=new L,T=new L,R=new L;function y(M){T.fromArray(r,M*3),R.copy(T);const k=c[M];I.copy(k),I.sub(T.multiplyScalar(T.dot(k))).normalize(),S.crossVectors(R,k);const F=S.dot(h[M])<0?-1:1;l[M*4]=I.x,l[M*4+1]=I.y,l[M*4+2]=I.z,l[M*4+3]=F}for(let M=0,k=v.length;M<k;++M){const W=v[M],F=W.start,P=W.count;for(let V=F,$=F+P;V<$;V+=3)y(n[V+0]),y(n[V+1]),y(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),m=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*h;for(let A=0;A<h;A++)d[p++]=c[f++]}return new xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vp=new Qe,ai=new rh,xl=new si,zp=new L,Er=new L,xr=new L,yr=new L,Wh=new L,yl=new L,Il=new ze,Cl=new ze,Sl=new ze,Wp=new L,qp=new L,$p=new L,wl=new L,Ml=new L;class Le extends ht{constructor(e=new Qn,t=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){yl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Wh.fromBufferAttribute(u,e),o?yl.addScaledVector(Wh,h):yl.addScaledVector(Wh.sub(t),h))}t.add(yl)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(r),ai.copy(e.ray).recast(e.near),xl.containsPoint(ai.origin)===!1&&(ai.intersectSphere(xl,zp)===null||ai.origin.distanceToSquared(zp)>(e.far-e.near)**2))||(Vp.copy(r).invert(),ai.copy(e.ray).applyMatrix4(Vp),n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,u=n.attributes.normal,d=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,m=d.length;p<m;p++){const g=d[p],A=i[g.materialIndex],E=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=E,I=_;v<I;v+=3){const S=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);o=bl(this,A,e,ai,c,h,u,S,T,R),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let g=p,A=m;g<A;g+=3){const E=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);o=bl(this,i,e,ai,c,h,u,E,_,v),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,m=d.length;p<m;p++){const g=d[p],A=i[g.materialIndex],E=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let v=E,I=_;v<I;v+=3){const S=v,T=v+1,R=v+2;o=bl(this,A,e,ai,c,h,u,S,T,R),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let g=p,A=m;g<A;g+=3){const E=g,_=g+1,v=g+2;o=bl(this,i,e,ai,c,h,u,E,_,v),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function Pw(s,e,t,n,i,r,o,a){let l;if(e.side===Nt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===ti,a),l===null)return null;Ml.copy(a),Ml.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ml);return c<t.near||c>t.far?null:{distance:c,point:Ml.clone(),object:s}}function bl(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Er),s.getVertexPosition(l,xr),s.getVertexPosition(c,yr);const h=Pw(s,e,t,n,Er,xr,yr,wl);if(h){i&&(Il.fromBufferAttribute(i,a),Cl.fromBufferAttribute(i,l),Sl.fromBufferAttribute(i,c),h.uv=In.getInterpolation(wl,Er,xr,yr,Il,Cl,Sl,new ze)),r&&(Il.fromBufferAttribute(r,a),Cl.fromBufferAttribute(r,l),Sl.fromBufferAttribute(r,c),h.uv2=In.getInterpolation(wl,Er,xr,yr,Il,Cl,Sl,new ze)),o&&(Wp.fromBufferAttribute(o,a),qp.fromBufferAttribute(o,l),$p.fromBufferAttribute(o,c),h.normal=In.getInterpolation(wl,Er,xr,yr,Wp,qp,$p,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};In.getNormal(Er,xr,yr,u.normal),h.face=u}return h}class xs extends Qn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new _i(c,3)),this.setAttribute("normal",new _i(h,3)),this.setAttribute("uv",new _i(u,2));function p(m,g,A,E,_,v,I,S,T,R,y){const M=v/T,k=I/R,W=v/2,F=I/2,P=S/2,V=T+1,$=R+1;let G=0,Q=0;const J=new L;for(let le=0;le<$;le++){const xe=le*k-F;for(let me=0;me<V;me++){const Y=me*M-W;J[m]=Y*E,J[g]=xe*_,J[A]=P,c.push(J.x,J.y,J.z),J[m]=0,J[g]=0,J[A]=S>0?1:-1,h.push(J.x,J.y,J.z),u.push(me/T),u.push(1-le/R),G+=1}}for(let le=0;le<R;le++)for(let xe=0;xe<T;xe++){const me=d+xe+V*le,Y=d+xe+V*(le+1),se=d+(xe+1)+V*(le+1),U=d+(xe+1)+V*le;l.push(me,Y,U),l.push(Y,se,U),Q+=6}a.addGroup(f,Q,y),f+=Q,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Eo(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function rn(s){const e={};for(let t=0;t<s.length;t++){const n=Eo(s[t]);for(const i in n)e[i]=n[i]}return e}function Uw(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xv(s){return s.getRenderTarget()===null&&s.outputEncoding===Ve?Rn:_o}const Fw={clone:Eo,merge:rn};var Nw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nw,this.fragmentShader=Qw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Eo(e.uniforms),this.uniformsGroups=Uw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jv extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gt extends Jv{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ba*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ir=-90,Cr=1;class Kd extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Gt(Ir,Cr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Gt(Ir,Cr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Gt(Ir,Cr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Gt(Ir,Cr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Gt(Ir,Cr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Gt(Ir,Cr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=mi,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Zv extends Tt{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ao,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yf extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Zv(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new xs(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:Eo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Hi});r.uniforms.tEquirect.value=t;const o=new Le(i,r),a=t.minFilter;return t.minFilter===Ei&&(t.minFilter=pt),new Kd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const qh=new L,Ow=new L,kw=new We;class Qs{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qh.subVectors(n,t).cross(Ow.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kw.getNormalMatrix(e),i=this.coplanarPoint(qh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new si,Tl=new L;class Xf{constructor(e=new Qs,t=new Qs,n=new Qs,i=new Qs,r=new Qs,o=new Qs){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],p=n[10],m=n[11],g=n[12],A=n[13],E=n[14],_=n[15];return t[0].setComponents(a-i,u-l,m-d,_-g).normalize(),t[1].setComponents(a+i,u+l,m+d,_+g).normalize(),t[2].setComponents(a+r,u+c,m+f,_+A).normalize(),t[3].setComponents(a-r,u-c,m-f,_-A).normalize(),t[4].setComponents(a-o,u-h,m-p,_-E).normalize(),t[5].setComponents(a+o,u+h,m+p,_+E).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){return Bs.center.set(0,0,0),Bs.radius=.7071067811865476,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Tl.x=i.normal.x>0?e.max.x:e.min.x,Tl.y=i.normal.y>0?e.max.y:e.min.y,Tl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eE(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Gw(s,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,u,d),c.onUploadCallback();let p;if(u instanceof Float32Array)p=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)p=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=5123;else if(u instanceof Int16Array)p=5122;else if(u instanceof Uint32Array)p=5125;else if(u instanceof Int32Array)p=5124;else if(u instanceof Int8Array)p=5120;else if(u instanceof Uint8Array)p=5121;else if(u instanceof Uint8ClampedArray)p=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const d=h.array,f=h.updateRange;s.bindBuffer(u,c),f.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class ar extends Qn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],m=[],g=[];for(let A=0;A<h;A++){const E=A*d-o;for(let _=0;_<c;_++){const v=_*u-r;p.push(v,-E,0),m.push(0,0,1),g.push(_/a),g.push(1-A/l)}}for(let A=0;A<l;A++)for(let E=0;E<a;E++){const _=E+c*A,v=E+c*(A+1),I=E+1+c*(A+1),S=E+1+c*A;f.push(_,v,S),f.push(v,I,S)}this.setIndex(f),this.setAttribute("position",new _i(p,3)),this.setAttribute("normal",new _i(m,3)),this.setAttribute("uv",new _i(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ww=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$w=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jw="vec3 transformed = vec3( position );",Kw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,aM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AM="gl_FragColor = linearToOutputTexel( gl_FragColor );",pM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,MM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RM=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,LM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,NM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,GM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,eb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,nb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ob=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ub=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,db=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ab=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_b=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ib=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Lb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Db=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pb=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ub=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vb=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Wb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Kb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xb=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,pT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,He={alphamap_fragment:Hw,alphamap_pars_fragment:Vw,alphatest_fragment:zw,alphatest_pars_fragment:Ww,aomap_fragment:qw,aomap_pars_fragment:$w,begin_vertex:jw,beginnormal_vertex:Kw,bsdfs:Yw,iridescence_fragment:Xw,bumpmap_pars_fragment:Jw,clipping_planes_fragment:Zw,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:tM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:sM,color_pars_vertex:rM,color_vertex:oM,common:aM,cube_uv_reflection_fragment:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:hM,displacementmap_vertex:uM,emissivemap_fragment:dM,emissivemap_pars_fragment:fM,encodings_fragment:AM,encodings_pars_fragment:pM,envmap_fragment:gM,envmap_common_pars_fragment:mM,envmap_pars_fragment:_M,envmap_pars_vertex:vM,envmap_physical_pars_fragment:RM,envmap_vertex:EM,fog_vertex:xM,fog_pars_vertex:yM,fog_fragment:IM,fog_pars_fragment:CM,gradientmap_pars_fragment:SM,lightmap_fragment:wM,lightmap_pars_fragment:MM,lights_lambert_fragment:bM,lights_lambert_pars_fragment:TM,lights_pars_begin:BM,lights_toon_fragment:LM,lights_toon_pars_fragment:DM,lights_phong_fragment:PM,lights_phong_pars_fragment:UM,lights_physical_fragment:FM,lights_physical_pars_fragment:NM,lights_fragment_begin:QM,lights_fragment_maps:OM,lights_fragment_end:kM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:HM,logdepthbuf_pars_vertex:VM,logdepthbuf_vertex:zM,map_fragment:WM,map_pars_fragment:qM,map_particle_fragment:$M,map_particle_pars_fragment:jM,metalnessmap_fragment:KM,metalnessmap_pars_fragment:YM,morphcolor_vertex:XM,morphnormal_vertex:JM,morphtarget_pars_vertex:ZM,morphtarget_vertex:eb,normal_fragment_begin:tb,normal_fragment_maps:nb,normal_pars_fragment:ib,normal_pars_vertex:sb,normal_vertex:rb,normalmap_pars_fragment:ob,clearcoat_normal_fragment_begin:ab,clearcoat_normal_fragment_maps:lb,clearcoat_pars_fragment:cb,iridescence_pars_fragment:hb,output_fragment:ub,packing:db,premultiplied_alpha_fragment:fb,project_vertex:Ab,dithering_fragment:pb,dithering_pars_fragment:gb,roughnessmap_fragment:mb,roughnessmap_pars_fragment:_b,shadowmap_pars_fragment:vb,shadowmap_pars_vertex:Eb,shadowmap_vertex:xb,shadowmask_pars_fragment:yb,skinbase_vertex:Ib,skinning_pars_vertex:Cb,skinning_vertex:Sb,skinnormal_vertex:wb,specularmap_fragment:Mb,specularmap_pars_fragment:bb,tonemapping_fragment:Tb,tonemapping_pars_fragment:Bb,transmission_fragment:Rb,transmission_pars_fragment:Lb,uv_pars_fragment:Db,uv_pars_vertex:Pb,uv_vertex:Ub,worldpos_vertex:Fb,background_vert:Nb,background_frag:Qb,backgroundCube_vert:Ob,backgroundCube_frag:kb,cube_vert:Gb,cube_frag:Hb,depth_vert:Vb,depth_frag:zb,distanceRGBA_vert:Wb,distanceRGBA_frag:qb,equirect_vert:$b,equirect_frag:jb,linedashed_vert:Kb,linedashed_frag:Yb,meshbasic_vert:Xb,meshbasic_frag:Jb,meshlambert_vert:Zb,meshlambert_frag:eT,meshmatcap_vert:tT,meshmatcap_frag:nT,meshnormal_vert:iT,meshnormal_frag:sT,meshphong_vert:rT,meshphong_frag:oT,meshphysical_vert:aT,meshphysical_frag:lT,meshtoon_vert:cT,meshtoon_frag:hT,points_vert:uT,points_frag:dT,shadow_vert:fT,shadow_frag:AT,sprite_vert:pT,sprite_frag:gT},Ee={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaTest:{value:0}}},di={basic:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ne(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:rn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:rn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:rn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ne(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:rn([Ee.points,Ee.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:rn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:rn([Ee.common,Ee.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:rn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:rn([Ee.sprite,Ee.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:rn([Ee.common,Ee.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:rn([Ee.lights,Ee.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};di.physical={uniforms:rn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Bl={r:0,b:0,g:0};function mT(s,e,t,n,i,r,o){const a=new Ne(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(g,A){let E=!1,_=A.isScene===!0?A.background:null;_&&_.isTexture&&(_=(A.backgroundBlurriness>0?t:e).get(_));const v=s.xr,I=v.getSession&&v.getSession();I&&I.environmentBlendMode==="additive"&&(_=null),_===null?m(a,l):_&&_.isColor&&(m(_,1),E=!0),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===sh)?(h===void 0&&(h=new Le(new xs(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Eo(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=_.encoding!==Ve,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Le(new ar(2,2),new ii({name:"BackgroundMaterial",uniforms:Eo(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=_.encoding!==Ve,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function m(g,A){g.getRGB(Bl,Xv(s)),n.buffers.color.setClear(Bl.r,Bl.g,Bl.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(g,A=1){a.set(g),l=A,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,m(a,l)},render:p}}function _T(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=g(null);let c=l,h=!1;function u(P,V,$,G,Q){let J=!1;if(o){const le=m(G,$,V);c!==le&&(c=le,f(c.object)),J=A(P,G,$,Q),J&&E(P,G,$,Q)}else{const le=V.wireframe===!0;(c.geometry!==G.id||c.program!==$.id||c.wireframe!==le)&&(c.geometry=G.id,c.program=$.id,c.wireframe=le,J=!0)}Q!==null&&t.update(Q,34963),(J||h)&&(h=!1,R(P,V,$,G),Q!==null&&s.bindBuffer(34963,t.get(Q).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function p(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function m(P,V,$){const G=$.wireframe===!0;let Q=a[P.id];Q===void 0&&(Q={},a[P.id]=Q);let J=Q[V.id];J===void 0&&(J={},Q[V.id]=J);let le=J[G];return le===void 0&&(le=g(d()),J[G]=le),le}function g(P){const V=[],$=[],G=[];for(let Q=0;Q<i;Q++)V[Q]=0,$[Q]=0,G[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:G,object:P,attributes:{},index:null}}function A(P,V,$,G){const Q=c.attributes,J=V.attributes;let le=0;const xe=$.getAttributes();for(const me in xe)if(xe[me].location>=0){const se=Q[me];let U=J[me];if(U===void 0&&(me==="instanceMatrix"&&P.instanceMatrix&&(U=P.instanceMatrix),me==="instanceColor"&&P.instanceColor&&(U=P.instanceColor)),se===void 0||se.attribute!==U||U&&se.data!==U.data)return!0;le++}return c.attributesNum!==le||c.index!==G}function E(P,V,$,G){const Q={},J=V.attributes;let le=0;const xe=$.getAttributes();for(const me in xe)if(xe[me].location>=0){let se=J[me];se===void 0&&(me==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),me==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));const U={};U.attribute=se,se&&se.data&&(U.data=se.data),Q[me]=U,le++}c.attributes=Q,c.attributesNum=le,c.index=G}function _(){const P=c.newAttributes;for(let V=0,$=P.length;V<$;V++)P[V]=0}function v(P){I(P,0)}function I(P,V){const $=c.newAttributes,G=c.enabledAttributes,Q=c.attributeDivisors;$[P]=1,G[P]===0&&(s.enableVertexAttribArray(P),G[P]=1),Q[P]!==V&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,V),Q[P]=V)}function S(){const P=c.newAttributes,V=c.enabledAttributes;for(let $=0,G=V.length;$<G;$++)V[$]!==P[$]&&(s.disableVertexAttribArray($),V[$]=0)}function T(P,V,$,G,Q,J){n.isWebGL2===!0&&($===5124||$===5125)?s.vertexAttribIPointer(P,V,$,Q,J):s.vertexAttribPointer(P,V,$,G,Q,J)}function R(P,V,$,G){if(n.isWebGL2===!1&&(P.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const Q=G.attributes,J=$.getAttributes(),le=V.defaultAttributeValues;for(const xe in J){const me=J[xe];if(me.location>=0){let Y=Q[xe];if(Y===void 0&&(xe==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),xe==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const se=Y.normalized,U=Y.itemSize,K=t.get(Y);if(K===void 0)continue;const D=K.buffer,he=K.type,ve=K.bytesPerElement;if(Y.isInterleavedBufferAttribute){const ce=Y.data,ge=ce.stride,w=Y.offset;if(ce.isInstancedInterleavedBuffer){for(let B=0;B<me.locationSize;B++)I(me.location+B,ce.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let B=0;B<me.locationSize;B++)v(me.location+B);s.bindBuffer(34962,D);for(let B=0;B<me.locationSize;B++)T(me.location+B,U/me.locationSize,he,se,ge*ve,(w+U/me.locationSize*B)*ve)}else{if(Y.isInstancedBufferAttribute){for(let ce=0;ce<me.locationSize;ce++)I(me.location+ce,Y.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ce=0;ce<me.locationSize;ce++)v(me.location+ce);s.bindBuffer(34962,D);for(let ce=0;ce<me.locationSize;ce++)T(me.location+ce,U/me.locationSize,he,se,U*ve,U/me.locationSize*ce*ve)}}else if(le!==void 0){const se=le[xe];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(me.location,se);break;case 3:s.vertexAttrib3fv(me.location,se);break;case 4:s.vertexAttrib4fv(me.location,se);break;default:s.vertexAttrib1fv(me.location,se)}}}}S()}function y(){W();for(const P in a){const V=a[P];for(const $ in V){const G=V[$];for(const Q in G)p(G[Q].object),delete G[Q];delete V[$]}delete a[P]}}function M(P){if(a[P.id]===void 0)return;const V=a[P.id];for(const $ in V){const G=V[$];for(const Q in G)p(G[Q].object),delete G[Q];delete V[$]}delete a[P.id]}function k(P){for(const V in a){const $=a[V];if($[P.id]===void 0)continue;const G=$[P.id];for(const Q in G)p(G[Q].object),delete G[Q];delete $[P.id]}}function W(){F(),h=!0,c!==l&&(c=l,f(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:W,resetDefaultState:F,dispose:y,releaseStatesOfGeometry:M,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:v,disableUnusedAttributes:S}}function vT(s,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,c,h,u),t.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function ET(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),f=s.getParameter(3379),p=s.getParameter(34076),m=s.getParameter(34921),g=s.getParameter(36347),A=s.getParameter(36348),E=s.getParameter(36349),_=d>0,v=o||e.has("OES_texture_float"),I=_&&v,S=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:g,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:I,maxSamples:S}}function xT(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Qs,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,m=u.clipIntersection,g=u.clipShadows,A=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{const E=r?0:n,_=E*4;let v=A.clippingState||null;l.value=v,v=h(p,d,_,f);for(let I=0;I!==_;++I)v[I]=t[I];A.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const m=u!==null?u.length:0;let g=null;if(m!==0){if(g=l.value,p!==!0||g===null){const A=f+m*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<A)&&(g=new Float32Array(A));for(let _=0,v=f;_!==m;++_,v+=4)o.copy(u[_]).applyMatrix4(E,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function yT(s){let e=new WeakMap;function t(o,a){return a===Uc?o.mapping=Ao:a===Od&&(o.mapping=po),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Uc||a===Od)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yf(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Lo extends Jv{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Kr=4,jp=[.125,.215,.35,.446,.526,.582],$s=20,$h=new Lo,Kp=new Ne;let jh=null;const Os=(1+Math.sqrt(5))/2,Sr=1/Os,Yp=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Os,Sr),new L(0,Os,-Sr),new L(Sr,0,Os),new L(-Sr,0,Os),new L(Os,Sr,0),new L(-Os,Sr,0)];class Xp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){jh=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jh),e.scissorTest=!1,Rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ao||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jh=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:un,format:wt,encoding:Kt,depthBuffer:!1},i=Jp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jp(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IT(r)),this._blurMaterial=CT(r,e,t)}return i}_compileMaterial(e){const t=new Le(this._lodPlanes[0],e);this._renderer.compile(t,$h)}_sceneToCubeUV(e,t,n,i){const a=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Kp),h.toneMapping=mi,h.autoClear=!1;const f=new Kn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),p=new Le(new xs,f);let m=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,m=!0):(f.color.copy(Kp),m=!0);for(let A=0;A<6;A++){const E=A%3;E===0?(a.up.set(0,l[A],0),a.lookAt(c[A],0,0)):E===1?(a.up.set(0,0,l[A]),a.lookAt(0,c[A],0)):(a.up.set(0,l[A],0),a.lookAt(0,0,c[A]));const _=this._cubeSize;Rl(i,E*_,A>2?_:0,_,_),h.setRenderTarget(i),m&&h.render(p,a),h.render(e,a)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ao||e.mapping===po;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zp());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Rl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$h)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Yp[(i-1)%Yp.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Le(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$s-1),m=r/p,g=isFinite(r)?1+Math.floor(h*m):$s;g>$s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$s}`);const A=[];let E=0;for(let T=0;T<$s;++T){const R=T/m,y=Math.exp(-R*R/2);A.push(y),T===0?E+=y:T<g&&(E+=2*y)}for(let T=0;T<A.length;T++)A[T]=A[T]/E;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=A,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-n;const v=this._sizeLods[i],I=3*v*(i>_-Kr?i-_+Kr:0),S=4*(this._cubeSize-v);Rl(t,I,S,3*v,2*v),l.setRenderTarget(t),l.render(u,$h)}}function IT(s){const e=[],t=[],n=[];let i=s;const r=s-Kr+1+jp.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Kr?l=jp[o-s+Kr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,m=3,g=2,A=1,E=new Float32Array(m*p*f),_=new Float32Array(g*p*f),v=new Float32Array(A*p*f);for(let S=0;S<f;S++){const T=S%3*2/3-1,R=S>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];E.set(y,m*p*S),_.set(d,g*p*S);const M=[S,S,S,S,S,S];v.set(M,A*p*S)}const I=new Qn;I.setAttribute("position",new xt(E,m)),I.setAttribute("uv",new xt(_,g)),I.setAttribute("faceIndex",new xt(v,A)),e.push(I),i>Kr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jp(s,e,t){const n=new ni(s,e,t);return n.texture.mapping=sh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function CT(s,e,t){const n=new Float32Array($s),i=new L(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Zp(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function eg(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Jf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ST(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Uc||l===Od,h=l===Ao||l===po;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Xp(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Xp(s));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function wT(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function MT(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],34962);const f=u.morphAttributes;for(const p in f){const m=f[p];for(let g=0,A=m.length;g<A;g++)e.update(m[g],34962)}}function c(u){const d=[],f=u.index,p=u.attributes.position;let m=0;if(f!==null){const E=f.array;m=f.version;for(let _=0,v=E.length;_<v;_+=3){const I=E[_+0],S=E[_+1],T=E[_+2];d.push(I,S,S,T,T,I)}}else{const E=p.array;m=p.version;for(let _=0,v=E.length/3-1;_<v;_+=3){const I=_+0,S=_+1,T=_+2;d.push(I,S,S,T,T,I)}}const g=new(zv(d)?Yv:Kv)(d,1);g.version=m;const A=r.get(u);A&&e.remove(A),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function bT(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){s.drawElements(r,f,a,d*l),t.update(f,r,1)}function u(d,f,p){if(p===0)return;let m,g;if(i)m=s,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,f,a,d*l,p),t.update(f,r,p)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function TT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function BT(s,e){return s[0]-e[0]}function RT(s,e){return Math.abs(e[1])-Math.abs(s[1])}function LT(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new ct,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=f!==void 0?f.length:0;let m=r.get(h);if(m===void 0||m.count!==p){let P=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",P)};m!==void 0&&m.texture.dispose();const E=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,I=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],T=h.morphAttributes.color||[];let R=0;E===!0&&(R=1),_===!0&&(R=2),v===!0&&(R=3);let y=h.attributes.position.count*R,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const k=new Float32Array(y*M*4*p),W=new qv(k,y,M,p);W.type=hn,W.needsUpdate=!0;const F=R*4;for(let V=0;V<p;V++){const $=I[V],G=S[V],Q=T[V],J=y*M*4*V;for(let le=0;le<$.count;le++){const xe=le*F;E===!0&&(o.fromBufferAttribute($,le),k[J+xe+0]=o.x,k[J+xe+1]=o.y,k[J+xe+2]=o.z,k[J+xe+3]=0),_===!0&&(o.fromBufferAttribute(G,le),k[J+xe+4]=o.x,k[J+xe+5]=o.y,k[J+xe+6]=o.z,k[J+xe+7]=0),v===!0&&(o.fromBufferAttribute(Q,le),k[J+xe+8]=o.x,k[J+xe+9]=o.y,k[J+xe+10]=o.z,k[J+xe+11]=Q.itemSize===4?o.w:1)}}m={count:p,texture:W,size:new ze(y,M)},r.set(h,m),h.addEventListener("dispose",P)}let g=0;for(let E=0;E<d.length;E++)g+=d[E];const A=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",A),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const f=d===void 0?0:d.length;let p=n[h.id];if(p===void 0||p.length!==f){p=[];for(let _=0;_<f;_++)p[_]=[_,0];n[h.id]=p}for(let _=0;_<f;_++){const v=p[_];v[0]=_,v[1]=d[_]}p.sort(RT);for(let _=0;_<8;_++)_<f&&p[_][1]?(a[_][0]=p[_][0],a[_][1]=p[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(BT);const m=h.morphAttributes.position,g=h.morphAttributes.normal;let A=0;for(let _=0;_<8;_++){const v=a[_],I=v[0],S=v[1];I!==Number.MAX_SAFE_INTEGER&&S?(m&&h.getAttribute("morphTarget"+_)!==m[I]&&h.setAttribute("morphTarget"+_,m[I]),g&&h.getAttribute("morphNormal"+_)!==g[I]&&h.setAttribute("morphNormal"+_,g[I]),i[_]=S,A+=S):(m&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),g&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}const E=h.morphTargetsRelative?1:1-A;u.getUniforms().setValue(s,"morphTargetBaseInfluence",E),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function DT(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const tE=new Tt,nE=new qv,iE=new $v,sE=new Zv,tg=[],ng=[],ig=new Float32Array(16),sg=new Float32Array(9),rg=new Float32Array(4);function Do(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=tg[i];if(r===void 0&&(r=new Float32Array(i),tg[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Bt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Rt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function oh(s,e){let t=ng[e];t===void 0&&(t=new Int32Array(e),ng[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function PT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function UT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2fv(this.addr,e),Rt(t,e)}}function FT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;s.uniform3fv(this.addr,e),Rt(t,e)}}function NT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4fv(this.addr,e),Rt(t,e)}}function QT(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Bt(t,n))return;rg.set(n),s.uniformMatrix2fv(this.addr,!1,rg),Rt(t,n)}}function OT(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Bt(t,n))return;sg.set(n),s.uniformMatrix3fv(this.addr,!1,sg),Rt(t,n)}}function kT(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Bt(t,n))return;ig.set(n),s.uniformMatrix4fv(this.addr,!1,ig),Rt(t,n)}}function GT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function HT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2iv(this.addr,e),Rt(t,e)}}function VT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3iv(this.addr,e),Rt(t,e)}}function zT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4iv(this.addr,e),Rt(t,e)}}function WT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function qT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;s.uniform2uiv(this.addr,e),Rt(t,e)}}function $T(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;s.uniform3uiv(this.addr,e),Rt(t,e)}}function jT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;s.uniform4uiv(this.addr,e),Rt(t,e)}}function KT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||tE,i)}function YT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||iE,i)}function XT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sE,i)}function JT(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||nE,i)}function ZT(s){switch(s){case 5126:return PT;case 35664:return UT;case 35665:return FT;case 35666:return NT;case 35674:return QT;case 35675:return OT;case 35676:return kT;case 5124:case 35670:return GT;case 35667:case 35671:return HT;case 35668:case 35672:return VT;case 35669:case 35673:return zT;case 5125:return WT;case 36294:return qT;case 36295:return $T;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return YT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return JT}}function e1(s,e){s.uniform1fv(this.addr,e)}function t1(s,e){const t=Do(e,this.size,2);s.uniform2fv(this.addr,t)}function n1(s,e){const t=Do(e,this.size,3);s.uniform3fv(this.addr,t)}function i1(s,e){const t=Do(e,this.size,4);s.uniform4fv(this.addr,t)}function s1(s,e){const t=Do(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function r1(s,e){const t=Do(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function o1(s,e){const t=Do(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function a1(s,e){s.uniform1iv(this.addr,e)}function l1(s,e){s.uniform2iv(this.addr,e)}function c1(s,e){s.uniform3iv(this.addr,e)}function h1(s,e){s.uniform4iv(this.addr,e)}function u1(s,e){s.uniform1uiv(this.addr,e)}function d1(s,e){s.uniform2uiv(this.addr,e)}function f1(s,e){s.uniform3uiv(this.addr,e)}function A1(s,e){s.uniform4uiv(this.addr,e)}function p1(s,e,t){const n=this.cache,i=e.length,r=oh(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||tE,r[o])}function g1(s,e,t){const n=this.cache,i=e.length,r=oh(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||iE,r[o])}function m1(s,e,t){const n=this.cache,i=e.length,r=oh(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||sE,r[o])}function _1(s,e,t){const n=this.cache,i=e.length,r=oh(t,i);Bt(n,r)||(s.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||nE,r[o])}function v1(s){switch(s){case 5126:return e1;case 35664:return t1;case 35665:return n1;case 35666:return i1;case 35674:return s1;case 35675:return r1;case 35676:return o1;case 5124:case 35670:return a1;case 35667:case 35671:return l1;case 35668:case 35672:return c1;case 35669:case 35673:return h1;case 5125:return u1;case 36294:return d1;case 36295:return f1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return g1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return _1}}class E1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=ZT(t.type)}}class x1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=v1(t.type)}}class y1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function og(s,e){s.seq.push(e),s.map[e.id]=e}function I1(s,e,t){const n=s.name,i=n.length;for(Kh.lastIndex=0;;){const r=Kh.exec(n),o=Kh.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){og(t,c===void 0?new E1(a,s,e):new x1(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new y1(a),og(t,u)),t=u}}}class _c{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);I1(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ag(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let C1=0;function S1(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function w1(s){switch(s){case Kt:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function lg(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+S1(s.getShaderSource(e),o)}else return i}function M1(s,e){const t=w1(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function b1(s,e){let t;switch(e){case PS:t="Linear";break;case US:t="Reinhard";break;case FS:t="OptimizedCineon";break;case Pv:t="ACESFilmic";break;case NS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function T1(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ma).join(`
`)}function B1(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function R1(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ma(s){return s!==""}function cg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const L1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(s){return s.replace(L1,D1)}function D1(s,e){const t=He[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Yd(t)}const P1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(s){return s.replace(P1,U1)}function U1(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function dg(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function F1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Bv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===dS?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Aa&&(e="SHADOWMAP_TYPE_VSM"),e}function N1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ao:case po:e="ENVMAP_TYPE_CUBE";break;case sh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Q1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function O1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dv:e="ENVMAP_BLENDING_MULTIPLY";break;case LS:e="ENVMAP_BLENDING_MIX";break;case DS:e="ENVMAP_BLENDING_ADD";break}return e}function k1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function G1(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=F1(t),c=N1(t),h=Q1(t),u=O1(t),d=k1(t),f=t.isWebGL2?"":T1(t),p=B1(r),m=i.createProgram();let g,A,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[p].filter(ma).join(`
`),g.length>0&&(g+=`
`),A=[f,p].filter(ma).join(`
`),A.length>0&&(A+=`
`)):(g=[dg(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),A=[f,dg(t),"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?He.tonemapping_pars_fragment:"",t.toneMapping!==mi?b1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.encodings_pars_fragment,M1("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),o=Yd(o),o=cg(o,t),o=hg(o,t),a=Yd(a),a=cg(a,t),a=hg(a,t),o=ug(o),a=ug(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,A=["#define varying in",t.glslVersion===Lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const _=E+g+o,v=E+A+a,I=ag(i,35633,_),S=ag(i,35632,v);if(i.attachShader(m,I),i.attachShader(m,S),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),s.debug.checkShaderErrors){const y=i.getProgramInfoLog(m).trim(),M=i.getShaderInfoLog(I).trim(),k=i.getShaderInfoLog(S).trim();let W=!0,F=!0;if(i.getProgramParameter(m,35714)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,I,S);else{const P=lg(i,I,"vertex"),V=lg(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+y+`
`+P+`
`+V)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(M===""||k==="")&&(F=!1);F&&(this.diagnostics={runnable:W,programLog:y,vertexShader:{log:M,prefix:g},fragmentShader:{log:k,prefix:A}})}i.deleteShader(I),i.deleteShader(S);let T;this.getUniforms=function(){return T===void 0&&(T=new _c(i,m)),T};let R;return this.getAttributes=function(){return R===void 0&&(R=R1(i,m)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=C1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=I,this.fragmentShader=S,this}let H1=0;class V1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new z1(e),t.set(e,n)),n}}class z1{constructor(e){this.id=H1++,this.code=e,this.usedTimes=0}}function W1(s,e,t,n,i,r,o){const a=new Kf,l=new V1,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return y===1?"uv2":"uv"}function g(y,M,k,W,F){const P=W.fog,V=F.geometry,$=y.isMeshStandardMaterial?W.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),Q=G&&G.mapping===sh?G.image.height:null,J=p[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const le=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xe=le!==void 0?le.length:0;let me=0;V.morphAttributes.position!==void 0&&(me=1),V.morphAttributes.normal!==void 0&&(me=2),V.morphAttributes.color!==void 0&&(me=3);let Y,se,U,K;if(J){const Se=di[J];Y=Se.vertexShader,se=Se.fragmentShader}else Y=y.vertexShader,se=y.fragmentShader,l.update(y),U=l.getVertexShaderID(y),K=l.getFragmentShaderID(y);const D=s.getRenderTarget(),he=F.isInstancedMesh===!0,ve=!!y.map,ce=!!y.matcap,ge=!!G,w=!!y.aoMap,B=!!y.lightMap,H=!!y.bumpMap,X=!!y.normalMap,ie=!!y.displacementMap,ue=!!y.emissiveMap,pe=!!y.metalnessMap,oe=!!y.roughnessMap,de=y.clearcoat>0,ae=y.iridescence>0,C=y.sheen>0,x=y.transmission>0,O=de&&!!y.clearcoatMap,j=de&&!!y.clearcoatNormalMap,ee=de&&!!y.clearcoatRoughnessMap,fe=ae&&!!y.iridescenceMap,ye=ae&&!!y.iridescenceThicknessMap,_e=C&&!!y.sheenColorMap,Z=C&&!!y.sheenRoughnessMap,Me=!!y.specularMap,be=!!y.specularColorMap,Te=!!y.specularIntensityMap,we=x&&!!y.transmissionMap,Ce=x&&!!y.thicknessMap,Pe=!!y.gradientMap,et=!!y.alphaMap,vt=y.alphaTest>0,N=!!y.extensions,ne=!!V.attributes.uv2;return{isWebGL2:h,shaderID:J,shaderName:y.type,vertexShader:Y,fragmentShader:se,defines:y.defines,customVertexShaderID:U,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:he,instancingColor:he&&F.instanceColor!==null,supportsVertexTextures:d,outputEncoding:D===null?s.outputEncoding:D.isXRRenderTarget===!0?D.texture.encoding:Kt,map:ve,matcap:ce,envMap:ge,envMapMode:ge&&G.mapping,envMapCubeUVHeight:Q,aoMap:w,lightMap:B,bumpMap:H,normalMap:X,displacementMap:d&&ie,emissiveMap:ue,normalMapObjectSpace:X&&y.normalMapType===ew,normalMapTangentSpace:X&&y.normalMapType===kv,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&y.map.encoding===Ve,metalnessMap:pe,roughnessMap:oe,clearcoat:de,clearcoatMap:O,clearcoatNormalMap:j,clearcoatRoughnessMap:ee,iridescence:ae,iridescenceMap:fe,iridescenceThicknessMap:ye,sheen:C,sheenColorMap:_e,sheenRoughnessMap:Z,specularMap:Me,specularColorMap:be,specularIntensityMap:Te,transmission:x,transmissionMap:we,thicknessMap:Ce,gradientMap:Pe,opaque:y.transparent===!1&&y.blending===no,alphaMap:et,alphaTest:vt,combine:y.combine,mapUv:ve&&m(y.map.channel),aoMapUv:w&&m(y.aoMap.channel),lightMapUv:B&&m(y.lightMap.channel),bumpMapUv:H&&m(y.bumpMap.channel),normalMapUv:X&&m(y.normalMap.channel),displacementMapUv:ie&&m(y.displacementMap.channel),emissiveMapUv:ue&&m(y.emissiveMap.channel),metalnessMapUv:pe&&m(y.metalnessMap.channel),roughnessMapUv:oe&&m(y.roughnessMap.channel),clearcoatMapUv:O&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:j&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Z&&m(y.sheenRoughnessMap.channel),specularMapUv:Me&&m(y.specularMap.channel),specularColorMapUv:be&&m(y.specularColorMap.channel),specularIntensityMapUv:Te&&m(y.specularIntensityMap.channel),transmissionMapUv:we&&m(y.transmissionMap.channel),thicknessMapUv:Ce&&m(y.thicknessMap.channel),alphaMapUv:et&&m(y.alphaMap.channel),vertexTangents:X&&!!V.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUvs2:ne,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(ve||et),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:mi,useLegacyLights:s.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ln,flipSided:y.side===Nt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:N&&y.extensions.derivatives===!0,extensionFragDepth:N&&y.extensions.fragDepth===!0,extensionDrawBuffers:N&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:N&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function A(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)M.push(k),M.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(E(M,y),_(M,y),M.push(s.outputEncoding)),M.push(y.customProgramCacheKey),M.join()}function E(y,M){y.push(M.precision),y.push(M.outputEncoding),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function _(y,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUvs2&&a.enable(13),M.vertexTangents&&a.enable(14),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.decodeVideoTexture&&a.enable(17),M.opaque&&a.enable(18),M.pointsUvs&&a.enable(19),y.push(a.mask)}function v(y){const M=p[y.type];let k;if(M){const W=di[M];k=Fw.clone(W.uniforms)}else k=y.uniforms;return k}function I(y,M){let k;for(let W=0,F=c.length;W<F;W++){const P=c[W];if(P.cacheKey===M){k=P,++k.usedTimes;break}}return k===void 0&&(k=new G1(s,M,y,r),c.push(k)),k}function S(y){if(--y.usedTimes===0){const M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:A,getUniforms:v,acquireProgram:I,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:R}}function q1(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function $1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function fg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ag(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,p,m,g){let A=s[e];return A===void 0?(A={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:m,group:g},s[e]=A):(A.id=u.id,A.object=u,A.geometry=d,A.material=f,A.groupOrder=p,A.renderOrder=u.renderOrder,A.z=m,A.group=g),e++,A}function a(u,d,f,p,m,g){const A=o(u,d,f,p,m,g);f.transmission>0?n.push(A):f.transparent===!0?i.push(A):t.push(A)}function l(u,d,f,p,m,g){const A=o(u,d,f,p,m,g);f.transmission>0?n.unshift(A):f.transparent===!0?i.unshift(A):t.unshift(A)}function c(u,d){t.length>1&&t.sort(u||$1),n.length>1&&n.sort(d||fg),i.length>1&&i.sort(d||fg)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function j1(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ag,s.set(n,[o])):i>=r.length?(o=new Ag,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function K1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ne};break;case"SpotLight":t={position:new L,direction:new L,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function Y1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let X1=0;function J1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Z1(s,e){const t=new K1,n=Y1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new L);const r=new L,o=new Qe,a=new Qe;function l(h,u){let d=0,f=0,p=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let m=0,g=0,A=0,E=0,_=0,v=0,I=0,S=0,T=0,R=0;h.sort(J1);const y=u===!0?Math.PI:1;for(let k=0,W=h.length;k<W;k++){const F=h[k],P=F.color,V=F.intensity,$=F.distance,G=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=P.r*V*y,f+=P.g*V*y,p+=P.b*V*y;else if(F.isLightProbe)for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(F.sh.coefficients[Q],V);else if(F.isDirectionalLight){const Q=t.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity*y),F.castShadow){const J=F.shadow,le=n.get(F);le.shadowBias=J.bias,le.shadowNormalBias=J.normalBias,le.shadowRadius=J.radius,le.shadowMapSize=J.mapSize,i.directionalShadow[m]=le,i.directionalShadowMap[m]=G,i.directionalShadowMatrix[m]=F.shadow.matrix,v++}i.directional[m]=Q,m++}else if(F.isSpotLight){const Q=t.get(F);Q.position.setFromMatrixPosition(F.matrixWorld),Q.color.copy(P).multiplyScalar(V*y),Q.distance=$,Q.coneCos=Math.cos(F.angle),Q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Q.decay=F.decay,i.spot[A]=Q;const J=F.shadow;if(F.map&&(i.spotLightMap[T]=F.map,T++,J.updateMatrices(F),F.castShadow&&R++),i.spotLightMatrix[A]=J.matrix,F.castShadow){const le=n.get(F);le.shadowBias=J.bias,le.shadowNormalBias=J.normalBias,le.shadowRadius=J.radius,le.shadowMapSize=J.mapSize,i.spotShadow[A]=le,i.spotShadowMap[A]=G,S++}A++}else if(F.isRectAreaLight){const Q=t.get(F);Q.color.copy(P).multiplyScalar(V),Q.halfWidth.set(F.width*.5,0,0),Q.halfHeight.set(0,F.height*.5,0),i.rectArea[E]=Q,E++}else if(F.isPointLight){const Q=t.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity*y),Q.distance=F.distance,Q.decay=F.decay,F.castShadow){const J=F.shadow,le=n.get(F);le.shadowBias=J.bias,le.shadowNormalBias=J.normalBias,le.shadowRadius=J.radius,le.shadowMapSize=J.mapSize,le.shadowCameraNear=J.camera.near,le.shadowCameraFar=J.camera.far,i.pointShadow[g]=le,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=F.shadow.matrix,I++}i.point[g]=Q,g++}else if(F.isHemisphereLight){const Q=t.get(F);Q.skyColor.copy(F.color).multiplyScalar(V*y),Q.groundColor.copy(F.groundColor).multiplyScalar(V*y),i.hemi[_]=Q,_++}}E>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const M=i.hash;(M.directionalLength!==m||M.pointLength!==g||M.spotLength!==A||M.rectAreaLength!==E||M.hemiLength!==_||M.numDirectionalShadows!==v||M.numPointShadows!==I||M.numSpotShadows!==S||M.numSpotMaps!==T)&&(i.directional.length=m,i.spot.length=A,i.rectArea.length=E,i.point.length=g,i.hemi.length=_,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=S+T-R,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=R,M.directionalLength=m,M.pointLength=g,M.spotLength=A,M.rectAreaLength=E,M.hemiLength=_,M.numDirectionalShadows=v,M.numPointShadows=I,M.numSpotShadows=S,M.numSpotMaps=T,i.version=X1++)}function c(h,u){let d=0,f=0,p=0,m=0,g=0;const A=u.matrixWorldInverse;for(let E=0,_=h.length;E<_;E++){const v=h[E];if(v.isDirectionalLight){const I=i.directional[d];I.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(A),d++}else if(v.isSpotLight){const I=i.spot[p];I.position.setFromMatrixPosition(v.matrixWorld),I.position.applyMatrix4(A),I.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(A),p++}else if(v.isRectAreaLight){const I=i.rectArea[m];I.position.setFromMatrixPosition(v.matrixWorld),I.position.applyMatrix4(A),a.identity(),o.copy(v.matrixWorld),o.premultiply(A),a.extractRotation(o),I.halfWidth.set(v.width*.5,0,0),I.halfHeight.set(0,v.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const I=i.point[f];I.position.setFromMatrixPosition(v.matrixWorld),I.position.applyMatrix4(A),f++}else if(v.isHemisphereLight){const I=i.hemi[g];I.direction.setFromMatrixPosition(v.matrixWorld),I.direction.transformDirection(A),g++}}}return{setup:l,setupView:c,state:i}}function pg(s,e){const t=new Z1(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function eB(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new pg(s,e),t.set(r,[l])):o>=a.length?(l=new pg(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class rE extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tB extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iB=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function sB(s,e,t){let n=new Xf;const i=new ze,r=new ze,o=new ct,a=new rE({depthPacking:ZS}),l=new tB,c={},h=t.maxTextureSize,u={[ti]:Nt,[Nt]:ti,[ln]:ln},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:nB,fragmentShader:iB}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Qn;p.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Le(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bv,this.render=function(v,I,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;const T=s.getRenderTarget(),R=s.getActiveCubeFace(),y=s.getActiveMipmapLevel(),M=s.state;M.setBlending(Hi),M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);for(let k=0,W=v.length;k<W;k++){const F=v[k],P=F.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const V=P.getFrameExtents();if(i.multiply(V),r.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/V.x),i.x=r.x*V.x,P.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/V.y),i.y=r.y*V.y,P.mapSize.y=r.y)),P.map===null){const G=this.type!==Aa?{minFilter:bt,magFilter:bt}:{};P.map=new ni(i.x,i.y,G),P.map.texture.name=F.name+".shadowMap",P.camera.updateProjectionMatrix()}s.setRenderTarget(P.map),s.clear();const $=P.getViewportCount();for(let G=0;G<$;G++){const Q=P.getViewport(G);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),M.viewport(o),P.updateMatrices(F,G),n=P.getFrustum(),_(I,S,P.camera,F,this.type)}P.isPointLightShadow!==!0&&this.type===Aa&&A(P,S),P.needsUpdate=!1}g.needsUpdate=!1,s.setRenderTarget(T,R,y)};function A(v,I){const S=e.update(m);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new ni(i.x,i.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(I,null,S,d,m,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(I,null,S,f,m,null)}function E(v,I,S,T){let R=null;const y=S.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(y!==void 0)R=y;else if(R=S.isPointLight===!0?l:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const M=R.uuid,k=I.uuid;let W=c[M];W===void 0&&(W={},c[M]=W);let F=W[k];F===void 0&&(F=R.clone(),W[k]=F),R=F}if(R.visible=I.visible,R.wireframe=I.wireframe,T===Aa?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:u[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const M=s.properties.get(R);M.light=S}return R}function _(v,I,S,T,R){if(v.visible===!1)return;if(v.layers.test(I.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&R===Aa)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,v.matrixWorld);const k=e.update(v),W=v.material;if(Array.isArray(W)){const F=k.groups;for(let P=0,V=F.length;P<V;P++){const $=F[P],G=W[$.materialIndex];if(G&&G.visible){const Q=E(v,G,T,R);s.renderBufferDirect(S,null,k,Q,v,$)}}}else if(W.visible){const F=E(v,W,T,R);s.renderBufferDirect(S,null,k,F,v,null)}}const M=v.children;for(let k=0,W=M.length;k<W;k++)_(M[k],I,S,T,R)}}function rB(s,e,t){const n=t.isWebGL2;function i(){let N=!1;const ne=new ct;let Ae=null;const Se=new ct(0,0,0,0);return{setMask:function(Be){Ae!==Be&&!N&&(s.colorMask(Be,Be,Be,Be),Ae=Be)},setLocked:function(Be){N=Be},setClear:function(Be,ut,gt,Ht,$i){$i===!0&&(Be*=Ht,ut*=Ht,gt*=Ht),ne.set(Be,ut,gt,Ht),Se.equals(ne)===!1&&(s.clearColor(Be,ut,gt,Ht),Se.copy(ne))},reset:function(){N=!1,Ae=null,Se.set(-1,0,0,0)}}}function r(){let N=!1,ne=null,Ae=null,Se=null;return{setTest:function(Be){Be?D(2929):he(2929)},setMask:function(Be){ne!==Be&&!N&&(s.depthMask(Be),ne=Be)},setFunc:function(Be){if(Ae!==Be){switch(Be){case SS:s.depthFunc(512);break;case wS:s.depthFunc(519);break;case MS:s.depthFunc(513);break;case Qd:s.depthFunc(515);break;case bS:s.depthFunc(514);break;case TS:s.depthFunc(518);break;case BS:s.depthFunc(516);break;case RS:s.depthFunc(517);break;default:s.depthFunc(515)}Ae=Be}},setLocked:function(Be){N=Be},setClear:function(Be){Se!==Be&&(s.clearDepth(Be),Se=Be)},reset:function(){N=!1,ne=null,Ae=null,Se=null}}}function o(){let N=!1,ne=null,Ae=null,Se=null,Be=null,ut=null,gt=null,Ht=null,$i=null;return{setTest:function(Et){N||(Et?D(2960):he(2960))},setMask:function(Et){ne!==Et&&!N&&(s.stencilMask(Et),ne=Et)},setFunc:function(Et,wn,ri){(Ae!==Et||Se!==wn||Be!==ri)&&(s.stencilFunc(Et,wn,ri),Ae=Et,Se=wn,Be=ri)},setOp:function(Et,wn,ri){(ut!==Et||gt!==wn||Ht!==ri)&&(s.stencilOp(Et,wn,ri),ut=Et,gt=wn,Ht=ri)},setLocked:function(Et){N=Et},setClear:function(Et){$i!==Et&&(s.clearStencil(Et),$i=Et)},reset:function(){N=!1,ne=null,Ae=null,Se=null,Be=null,ut=null,gt=null,Ht=null,$i=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let d={},f={},p=new WeakMap,m=[],g=null,A=!1,E=null,_=null,v=null,I=null,S=null,T=null,R=null,y=!1,M=null,k=null,W=null,F=null,P=null;const V=s.getParameter(35661);let $=!1,G=0;const Q=s.getParameter(7938);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),$=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),$=G>=2);let J=null,le={};const xe=s.getParameter(3088),me=s.getParameter(2978),Y=new ct().fromArray(xe),se=new ct().fromArray(me);function U(N,ne,Ae){const Se=new Uint8Array(4),Be=s.createTexture();s.bindTexture(N,Be),s.texParameteri(N,10241,9728),s.texParameteri(N,10240,9728);for(let ut=0;ut<Ae;ut++)s.texImage2D(ne+ut,0,6408,1,1,0,6408,5121,Se);return Be}const K={};K[3553]=U(3553,3553,1),K[34067]=U(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),D(2929),l.setFunc(Qd),ie(!1),ue(lp),D(2884),H(Hi);function D(N){d[N]!==!0&&(s.enable(N),d[N]=!0)}function he(N){d[N]!==!1&&(s.disable(N),d[N]=!1)}function ve(N,ne){return f[N]!==ne?(s.bindFramebuffer(N,ne),f[N]=ne,n&&(N===36009&&(f[36160]=ne),N===36160&&(f[36009]=ne)),!0):!1}function ce(N,ne){let Ae=m,Se=!1;if(N)if(Ae=p.get(ne),Ae===void 0&&(Ae=[],p.set(ne,Ae)),N.isWebGLMultipleRenderTargets){const Be=N.texture;if(Ae.length!==Be.length||Ae[0]!==36064){for(let ut=0,gt=Be.length;ut<gt;ut++)Ae[ut]=36064+ut;Ae.length=Be.length,Se=!0}}else Ae[0]!==36064&&(Ae[0]=36064,Se=!0);else Ae[0]!==1029&&(Ae[0]=1029,Se=!0);Se&&(t.isWebGL2?s.drawBuffers(Ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ae))}function ge(N){return g!==N?(s.useProgram(N),g=N,!0):!1}const w={[zr]:32774,[AS]:32778,[pS]:32779};if(n)w[dp]=32775,w[fp]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(w[dp]=N.MIN_EXT,w[fp]=N.MAX_EXT)}const B={[gS]:0,[mS]:1,[_S]:768,[Rv]:770,[CS]:776,[yS]:774,[ES]:772,[vS]:769,[Lv]:771,[IS]:775,[xS]:773};function H(N,ne,Ae,Se,Be,ut,gt,Ht){if(N===Hi){A===!0&&(he(3042),A=!1);return}if(A===!1&&(D(3042),A=!0),N!==fS){if(N!==E||Ht!==y){if((_!==zr||S!==zr)&&(s.blendEquation(32774),_=zr,S=zr),Ht)switch(N){case no:s.blendFuncSeparate(1,771,1,771);break;case cp:s.blendFunc(1,1);break;case hp:s.blendFuncSeparate(0,769,0,1);break;case up:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case no:s.blendFuncSeparate(770,771,1,771);break;case cp:s.blendFunc(770,1);break;case hp:s.blendFuncSeparate(0,769,0,1);break;case up:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,I=null,T=null,R=null,E=N,y=Ht}return}Be=Be||ne,ut=ut||Ae,gt=gt||Se,(ne!==_||Be!==S)&&(s.blendEquationSeparate(w[ne],w[Be]),_=ne,S=Be),(Ae!==v||Se!==I||ut!==T||gt!==R)&&(s.blendFuncSeparate(B[Ae],B[Se],B[ut],B[gt]),v=Ae,I=Se,T=ut,R=gt),E=N,y=!1}function X(N,ne){N.side===ln?he(2884):D(2884);let Ae=N.side===Nt;ne&&(Ae=!Ae),ie(Ae),N.blending===no&&N.transparent===!1?H(Hi):H(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const Se=N.stencilWrite;c.setTest(Se),Se&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?D(32926):he(32926)}function ie(N){M!==N&&(N?s.frontFace(2304):s.frontFace(2305),M=N)}function ue(N){N!==hS?(D(2884),N!==k&&(N===lp?s.cullFace(1029):N===uS?s.cullFace(1028):s.cullFace(1032))):he(2884),k=N}function pe(N){N!==W&&($&&s.lineWidth(N),W=N)}function oe(N,ne,Ae){N?(D(32823),(F!==ne||P!==Ae)&&(s.polygonOffset(ne,Ae),F=ne,P=Ae)):he(32823)}function de(N){N?D(3089):he(3089)}function ae(N){N===void 0&&(N=33984+V-1),J!==N&&(s.activeTexture(N),J=N)}function C(N,ne,Ae){Ae===void 0&&(J===null?Ae=33984+V-1:Ae=J);let Se=le[Ae];Se===void 0&&(Se={type:void 0,texture:void 0},le[Ae]=Se),(Se.type!==N||Se.texture!==ne)&&(J!==Ae&&(s.activeTexture(Ae),J=Ae),s.bindTexture(N,ne||K[N]),Se.type=N,Se.texture=ne)}function x(){const N=le[J];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function O(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(N){Y.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Y.copy(N))}function Ce(N){se.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),se.copy(N))}function Pe(N,ne){let Ae=u.get(ne);Ae===void 0&&(Ae=new WeakMap,u.set(ne,Ae));let Se=Ae.get(N);Se===void 0&&(Se=s.getUniformBlockIndex(ne,N.name),Ae.set(N,Se))}function et(N,ne){const Se=u.get(ne).get(N);h.get(ne)!==Se&&(s.uniformBlockBinding(ne,Se,N.__bindingPointIndex),h.set(ne,Se))}function vt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},J=null,le={},f={},p=new WeakMap,m=[],g=null,A=!1,E=null,_=null,v=null,I=null,S=null,T=null,R=null,y=!1,M=null,k=null,W=null,F=null,P=null,Y.set(0,0,s.canvas.width,s.canvas.height),se.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:D,disable:he,bindFramebuffer:ve,drawBuffers:ce,useProgram:ge,setBlending:H,setMaterial:X,setFlipSided:ie,setCullFace:ue,setLineWidth:pe,setPolygonOffset:oe,setScissorTest:de,activeTexture:ae,bindTexture:C,unbindTexture:x,compressedTexImage2D:O,compressedTexImage3D:j,texImage2D:be,texImage3D:Te,updateUBOMapping:Pe,uniformBlockBinding:et,texStorage2D:Z,texStorage3D:Me,texSubImage2D:ee,texSubImage3D:fe,compressedTexSubImage2D:ye,compressedTexSubImage3D:_e,scissor:we,viewport:Ce,reset:vt}}function oB(s,e,t,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap;let m;const g=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(C,x){return A?new OffscreenCanvas(C,x):Wa("canvas")}function _(C,x,O,j){let ee=1;if((C.width>j||C.height>j)&&(ee=j/Math.max(C.width,C.height)),ee<1||x===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const fe=x?Vv:Math.floor,ye=fe(ee*C.width),_e=fe(ee*C.height);m===void 0&&(m=E(ye,_e));const Z=O?E(ye,_e):m;return Z.width=ye,Z.height=_e,Z.getContext("2d").drawImage(C,0,0,ye,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ye+"x"+_e+")."),Z}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return jd(C.width)&&jd(C.height)}function I(C){return a?!1:C.wrapS!==$t||C.wrapT!==$t||C.minFilter!==bt&&C.minFilter!==pt}function S(C,x){return C.generateMipmaps&&x&&C.minFilter!==bt&&C.minFilter!==pt}function T(C){s.generateMipmap(C)}function R(C,x,O,j,ee=!1){if(a===!1)return x;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe=x;return x===6403&&(O===5126&&(fe=33326),O===5131&&(fe=33325),O===5121&&(fe=33321)),x===33319&&(O===5126&&(fe=33328),O===5131&&(fe=33327),O===5121&&(fe=33323)),x===6408&&(O===5126&&(fe=34836),O===5131&&(fe=34842),O===5121&&(fe=j===Ve&&ee===!1?35907:32856),O===32819&&(fe=32854),O===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function y(C,x,O){return S(C,O)===!0||C.isFramebufferTexture&&C.minFilter!==bt&&C.minFilter!==pt?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function M(C){return C===bt||C===Fc||C===Ta?9728:9729}function k(C){const x=C.target;x.removeEventListener("dispose",k),F(x),x.isVideoTexture&&p.delete(x)}function W(C){const x=C.target;x.removeEventListener("dispose",W),V(x)}function F(C){const x=n.get(C);if(x.__webglInit===void 0)return;const O=C.source,j=g.get(O);if(j){const ee=j[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(C),Object.keys(j).length===0&&g.delete(O)}n.remove(C)}function P(C){const x=n.get(C);s.deleteTexture(x.__webglTexture);const O=C.source,j=g.get(O);delete j[x.__cacheKey],o.memory.textures--}function V(C){const x=C.texture,O=n.get(C),j=n.get(x);if(j.__webglTexture!==void 0&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)s.deleteFramebuffer(O.__webglFramebuffer[ee]),O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[ee]);else{if(s.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ee=0;ee<O.__webglColorRenderbuffer.length;ee++)O.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[ee]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,fe=x.length;ee<fe;ee++){const ye=n.get(x[ee]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(x[ee])}n.remove(x),n.remove(C)}let $=0;function G(){$=0}function Q(){const C=$;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),$+=1,C}function J(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.encoding),x.join()}function le(C,x){const O=n.get(C);if(C.isVideoTexture&&de(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(O,C,x);return}}t.bindTexture(3553,O.__webglTexture,33984+x)}function xe(C,x){const O=n.get(C);if(C.version>0&&O.__version!==C.version){he(O,C,x);return}t.bindTexture(35866,O.__webglTexture,33984+x)}function me(C,x){const O=n.get(C);if(C.version>0&&O.__version!==C.version){he(O,C,x);return}t.bindTexture(32879,O.__webglTexture,33984+x)}function Y(C,x){const O=n.get(C);if(C.version>0&&O.__version!==C.version){ve(O,C,x);return}t.bindTexture(34067,O.__webglTexture,33984+x)}const se={[Wi]:10497,[$t]:33071,[za]:33648},U={[bt]:9728,[Fc]:9984,[Ta]:9986,[pt]:9729,[Vf]:9985,[Ei]:9987};function K(C,x,O){if(O?(s.texParameteri(C,10242,se[x.wrapS]),s.texParameteri(C,10243,se[x.wrapT]),(C===32879||C===35866)&&s.texParameteri(C,32882,se[x.wrapR]),s.texParameteri(C,10240,U[x.magFilter]),s.texParameteri(C,10241,U[x.minFilter])):(s.texParameteri(C,10242,33071),s.texParameteri(C,10243,33071),(C===32879||C===35866)&&s.texParameteri(C,32882,33071),(x.wrapS!==$t||x.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,10240,M(x.magFilter)),s.texParameteri(C,10241,M(x.minFilter)),x.minFilter!==bt&&x.minFilter!==pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const j=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===bt||x.minFilter!==Ta&&x.minFilter!==Ei||x.type===hn&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===un&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(C,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function D(C,x){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",k));const j=x.source;let ee=g.get(j);ee===void 0&&(ee={},g.set(j,ee));const fe=J(x);if(fe!==C.__cacheKey){ee[fe]===void 0&&(ee[fe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[fe].usedTimes++;const ye=ee[C.__cacheKey];ye!==void 0&&(ee[C.__cacheKey].usedTimes--,ye.usedTimes===0&&P(x)),C.__cacheKey=fe,C.__webglTexture=ee[fe].texture}return O}function he(C,x,O){let j=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=35866),x.isData3DTexture&&(j=32879);const ee=D(C,x),fe=x.source;t.bindTexture(j,C.__webglTexture,33984+O);const ye=n.get(fe);if(fe.version!==ye.__version||ee===!0){t.activeTexture(33984+O),s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const _e=I(x)&&v(x.image)===!1;let Z=_(x.image,_e,!1,h);Z=ae(x,Z);const Me=v(Z)||a,be=r.convert(x.format,x.encoding);let Te=r.convert(x.type),we=R(x.internalFormat,be,Te,x.encoding,x.isVideoTexture);K(j,x,Me);let Ce;const Pe=x.mipmaps,et=a&&x.isVideoTexture!==!0,vt=ye.__version===void 0||ee===!0,N=y(x,Z,Me);if(x.isDepthTexture)we=6402,a?x.type===hn?we=36012:x.type===Ks?we=33190:x.type===io?we=35056:we=33189:x.type===hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Zs&&we===6402&&x.type!==Fv&&x.type!==Ks&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ks,Te=r.convert(x.type)),x.format===go&&we===6402&&(we=34041,x.type!==io&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=io,Te=r.convert(x.type))),vt&&(et?t.texStorage2D(3553,1,we,Z.width,Z.height):t.texImage2D(3553,0,we,Z.width,Z.height,0,be,Te,null));else if(x.isDataTexture)if(Pe.length>0&&Me){et&&vt&&t.texStorage2D(3553,N,we,Pe[0].width,Pe[0].height);for(let ne=0,Ae=Pe.length;ne<Ae;ne++)Ce=Pe[ne],et?t.texSubImage2D(3553,ne,0,0,Ce.width,Ce.height,be,Te,Ce.data):t.texImage2D(3553,ne,we,Ce.width,Ce.height,0,be,Te,Ce.data);x.generateMipmaps=!1}else et?(vt&&t.texStorage2D(3553,N,we,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,Z.width,Z.height,be,Te,Z.data)):t.texImage2D(3553,0,we,Z.width,Z.height,0,be,Te,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){et&&vt&&t.texStorage3D(35866,N,we,Pe[0].width,Pe[0].height,Z.depth);for(let ne=0,Ae=Pe.length;ne<Ae;ne++)Ce=Pe[ne],x.format!==wt?be!==null?et?t.compressedTexSubImage3D(35866,ne,0,0,0,Ce.width,Ce.height,Z.depth,be,Ce.data,0,0):t.compressedTexImage3D(35866,ne,we,Ce.width,Ce.height,Z.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(35866,ne,0,0,0,Ce.width,Ce.height,Z.depth,be,Te,Ce.data):t.texImage3D(35866,ne,we,Ce.width,Ce.height,Z.depth,0,be,Te,Ce.data)}else{et&&vt&&t.texStorage2D(3553,N,we,Pe[0].width,Pe[0].height);for(let ne=0,Ae=Pe.length;ne<Ae;ne++)Ce=Pe[ne],x.format!==wt?be!==null?et?t.compressedTexSubImage2D(3553,ne,0,0,Ce.width,Ce.height,be,Ce.data):t.compressedTexImage2D(3553,ne,we,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(3553,ne,0,0,Ce.width,Ce.height,be,Te,Ce.data):t.texImage2D(3553,ne,we,Ce.width,Ce.height,0,be,Te,Ce.data)}else if(x.isDataArrayTexture)et?(vt&&t.texStorage3D(35866,N,we,Z.width,Z.height,Z.depth),t.texSubImage3D(35866,0,0,0,0,Z.width,Z.height,Z.depth,be,Te,Z.data)):t.texImage3D(35866,0,we,Z.width,Z.height,Z.depth,0,be,Te,Z.data);else if(x.isData3DTexture)et?(vt&&t.texStorage3D(32879,N,we,Z.width,Z.height,Z.depth),t.texSubImage3D(32879,0,0,0,0,Z.width,Z.height,Z.depth,be,Te,Z.data)):t.texImage3D(32879,0,we,Z.width,Z.height,Z.depth,0,be,Te,Z.data);else if(x.isFramebufferTexture){if(vt)if(et)t.texStorage2D(3553,N,we,Z.width,Z.height);else{let ne=Z.width,Ae=Z.height;for(let Se=0;Se<N;Se++)t.texImage2D(3553,Se,we,ne,Ae,0,be,Te,null),ne>>=1,Ae>>=1}}else if(Pe.length>0&&Me){et&&vt&&t.texStorage2D(3553,N,we,Pe[0].width,Pe[0].height);for(let ne=0,Ae=Pe.length;ne<Ae;ne++)Ce=Pe[ne],et?t.texSubImage2D(3553,ne,0,0,be,Te,Ce):t.texImage2D(3553,ne,we,be,Te,Ce);x.generateMipmaps=!1}else et?(vt&&t.texStorage2D(3553,N,we,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,be,Te,Z)):t.texImage2D(3553,0,we,be,Te,Z);S(x,Me)&&T(j),ye.__version=fe.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ve(C,x,O){if(x.image.length!==6)return;const j=D(C,x),ee=x.source;t.bindTexture(34067,C.__webglTexture,33984+O);const fe=n.get(ee);if(ee.version!==fe.__version||j===!0){t.activeTexture(33984+O),s.pixelStorei(37440,x.flipY),s.pixelStorei(37441,x.premultiplyAlpha),s.pixelStorei(3317,x.unpackAlignment),s.pixelStorei(37443,0);const ye=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let ne=0;ne<6;ne++)!ye&&!_e?Z[ne]=_(x.image[ne],!1,!0,c):Z[ne]=_e?x.image[ne].image:x.image[ne],Z[ne]=ae(x,Z[ne]);const Me=Z[0],be=v(Me)||a,Te=r.convert(x.format,x.encoding),we=r.convert(x.type),Ce=R(x.internalFormat,Te,we,x.encoding),Pe=a&&x.isVideoTexture!==!0,et=fe.__version===void 0||j===!0;let vt=y(x,Me,be);K(34067,x,be);let N;if(ye){Pe&&et&&t.texStorage2D(34067,vt,Ce,Me.width,Me.height);for(let ne=0;ne<6;ne++){N=Z[ne].mipmaps;for(let Ae=0;Ae<N.length;Ae++){const Se=N[Ae];x.format!==wt?Te!==null?Pe?t.compressedTexSubImage2D(34069+ne,Ae,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(34069+ne,Ae,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(34069+ne,Ae,0,0,Se.width,Se.height,Te,we,Se.data):t.texImage2D(34069+ne,Ae,Ce,Se.width,Se.height,0,Te,we,Se.data)}}}else{N=x.mipmaps,Pe&&et&&(N.length>0&&vt++,t.texStorage2D(34067,vt,Ce,Z[0].width,Z[0].height));for(let ne=0;ne<6;ne++)if(_e){Pe?t.texSubImage2D(34069+ne,0,0,0,Z[ne].width,Z[ne].height,Te,we,Z[ne].data):t.texImage2D(34069+ne,0,Ce,Z[ne].width,Z[ne].height,0,Te,we,Z[ne].data);for(let Ae=0;Ae<N.length;Ae++){const Be=N[Ae].image[ne].image;Pe?t.texSubImage2D(34069+ne,Ae+1,0,0,Be.width,Be.height,Te,we,Be.data):t.texImage2D(34069+ne,Ae+1,Ce,Be.width,Be.height,0,Te,we,Be.data)}}else{Pe?t.texSubImage2D(34069+ne,0,0,0,Te,we,Z[ne]):t.texImage2D(34069+ne,0,Ce,Te,we,Z[ne]);for(let Ae=0;Ae<N.length;Ae++){const Se=N[Ae];Pe?t.texSubImage2D(34069+ne,Ae+1,0,0,Te,we,Se.image[ne]):t.texImage2D(34069+ne,Ae+1,Ce,Te,we,Se.image[ne])}}}S(x,be)&&T(34067),fe.__version=ee.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ce(C,x,O,j,ee){const fe=r.convert(O.format,O.encoding),ye=r.convert(O.type),_e=R(O.internalFormat,fe,ye,O.encoding);n.get(x).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,_e,x.width,x.height,x.depth,0,fe,ye,null):t.texImage2D(ee,0,_e,x.width,x.height,0,fe,ye,null)),t.bindFramebuffer(36160,C),oe(x)?d.framebufferTexture2DMultisampleEXT(36160,j,ee,n.get(O).__webglTexture,0,pe(x)):(ee===3553||ee>=34069&&ee<=34074)&&s.framebufferTexture2D(36160,j,ee,n.get(O).__webglTexture,0),t.bindFramebuffer(36160,null)}function ge(C,x,O){if(s.bindRenderbuffer(36161,C),x.depthBuffer&&!x.stencilBuffer){let j=33189;if(O||oe(x)){const ee=x.depthTexture;ee&&ee.isDepthTexture&&(ee.type===hn?j=36012:ee.type===Ks&&(j=33190));const fe=pe(x);oe(x)?d.renderbufferStorageMultisampleEXT(36161,fe,j,x.width,x.height):s.renderbufferStorageMultisample(36161,fe,j,x.width,x.height)}else s.renderbufferStorage(36161,j,x.width,x.height);s.framebufferRenderbuffer(36160,36096,36161,C)}else if(x.depthBuffer&&x.stencilBuffer){const j=pe(x);O&&oe(x)===!1?s.renderbufferStorageMultisample(36161,j,35056,x.width,x.height):oe(x)?d.renderbufferStorageMultisampleEXT(36161,j,35056,x.width,x.height):s.renderbufferStorage(36161,34041,x.width,x.height),s.framebufferRenderbuffer(36160,33306,36161,C)}else{const j=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ee=0;ee<j.length;ee++){const fe=j[ee],ye=r.convert(fe.format,fe.encoding),_e=r.convert(fe.type),Z=R(fe.internalFormat,ye,_e,fe.encoding),Me=pe(x);O&&oe(x)===!1?s.renderbufferStorageMultisample(36161,Me,Z,x.width,x.height):oe(x)?d.renderbufferStorageMultisampleEXT(36161,Me,Z,x.width,x.height):s.renderbufferStorage(36161,Z,x.width,x.height)}}s.bindRenderbuffer(36161,null)}function w(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),le(x.depthTexture,0);const j=n.get(x.depthTexture).__webglTexture,ee=pe(x);if(x.depthTexture.format===Zs)oe(x)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,j,0,ee):s.framebufferTexture2D(36160,36096,3553,j,0);else if(x.depthTexture.format===go)oe(x)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,j,0,ee):s.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function B(C){const x=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");w(x.__webglFramebuffer,C)}else if(O){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(36160,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]=s.createRenderbuffer(),ge(x.__webglDepthbuffer[j],C,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),ge(x.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function H(C,x,O){const j=n.get(C);x!==void 0&&ce(j.__webglFramebuffer,C,C.texture,36064,3553),O!==void 0&&B(C)}function X(C){const x=C.texture,O=n.get(C),j=n.get(x);C.addEventListener("dispose",W),C.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=x.version,o.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,fe=C.isWebGLMultipleRenderTargets===!0,ye=v(C)||a;if(ee){O.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)O.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(O.__webglFramebuffer=s.createFramebuffer(),fe)if(i.drawBuffers){const _e=C.texture;for(let Z=0,Me=_e.length;Z<Me;Z++){const be=n.get(_e[Z]);be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&oe(C)===!1){const _e=fe?x:[x];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer);for(let Z=0;Z<_e.length;Z++){const Me=_e[Z];O.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(36161,O.__webglColorRenderbuffer[Z]);const be=r.convert(Me.format,Me.encoding),Te=r.convert(Me.type),we=R(Me.internalFormat,be,Te,Me.encoding,C.isXRRenderTarget===!0),Ce=pe(C);s.renderbufferStorageMultisample(36161,Ce,we,C.width,C.height),s.framebufferRenderbuffer(36160,36064+Z,36161,O.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(36161,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,j.__webglTexture),K(34067,x,ye);for(let _e=0;_e<6;_e++)ce(O.__webglFramebuffer[_e],C,x,36064,34069+_e);S(x,ye)&&T(34067),t.unbindTexture()}else if(fe){const _e=C.texture;for(let Z=0,Me=_e.length;Z<Me;Z++){const be=_e[Z],Te=n.get(be);t.bindTexture(3553,Te.__webglTexture),K(3553,be,ye),ce(O.__webglFramebuffer,C,be,36064+Z,3553),S(be,ye)&&T(3553)}t.unbindTexture()}else{let _e=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?_e=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,j.__webglTexture),K(_e,x,ye),ce(O.__webglFramebuffer,C,x,36064,_e),S(x,ye)&&T(_e),t.unbindTexture()}C.depthBuffer&&B(C)}function ie(C){const x=v(C)||a,O=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let j=0,ee=O.length;j<ee;j++){const fe=O[j];if(S(fe,x)){const ye=C.isWebGLCubeRenderTarget?34067:3553,_e=n.get(fe).__webglTexture;t.bindTexture(ye,_e),T(ye),t.unbindTexture()}}}function ue(C){if(a&&C.samples>0&&oe(C)===!1){const x=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],O=C.width,j=C.height;let ee=16384;const fe=[],ye=C.stencilBuffer?33306:36096,_e=n.get(C),Z=C.isWebGLMultipleRenderTargets===!0;if(Z)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(36160,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Me,36161,null),t.bindFramebuffer(36160,_e.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Me,3553,null,0);t.bindFramebuffer(36008,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,_e.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){fe.push(36064+Me),C.depthBuffer&&fe.push(ye);const be=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(be===!1&&(C.depthBuffer&&(ee|=256),C.stencilBuffer&&(ee|=1024)),Z&&s.framebufferRenderbuffer(36008,36064,36161,_e.__webglColorRenderbuffer[Me]),be===!0&&(s.invalidateFramebuffer(36008,[ye]),s.invalidateFramebuffer(36009,[ye])),Z){const Te=n.get(x[Me]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,Te,0)}s.blitFramebuffer(0,0,O,j,0,0,O,j,ee,9728),f&&s.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(36160,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+Me,36161,_e.__webglColorRenderbuffer[Me]);const be=n.get(x[Me]).__webglTexture;t.bindFramebuffer(36160,_e.__webglFramebuffer),s.framebufferTexture2D(36009,36064+Me,3553,be,0)}t.bindFramebuffer(36009,_e.__webglMultisampledFramebuffer)}}function pe(C){return Math.min(u,C.samples)}function oe(C){const x=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function de(C){const x=o.render.frame;p.get(C)!==x&&(p.set(C,x),C.update())}function ae(C,x){const O=C.encoding,j=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===$d||O!==Kt&&(O===Ve?a===!1?e.has("EXT_sRGB")===!0&&j===wt?(C.format=$d,C.minFilter=pt,C.generateMipmaps=!1):x=Wv.sRGBToLinear(x):(j!==wt||ee!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",O)),x}this.allocateTextureUnit=Q,this.resetTextureUnits=G,this.setTexture2D=le,this.setTexture2DArray=xe,this.setTexture3D=me,this.setTextureCube=Y,this.rebindTextures=H,this.setupRenderTarget=X,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=oe}function aB(s,e,t){const n=t.isWebGL2;function i(r,o=null){let a;if(r===an)return 5121;if(r===GS)return 32819;if(r===HS)return 32820;if(r===QS)return 5120;if(r===OS)return 5122;if(r===Fv)return 5123;if(r===kS)return 5124;if(r===Ks)return 5125;if(r===hn)return 5126;if(r===un)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===VS)return 6406;if(r===wt)return 6408;if(r===zS)return 6409;if(r===WS)return 6410;if(r===Zs)return 6402;if(r===go)return 34041;if(r===$d)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===pa)return 6403;if(r===qS)return 36244;if(r===ga)return 33319;if(r===$S)return 33320;if(r===jS)return 36249;if(r===Ac||r===wh||r===Mh||r===pc)if(o===Ve)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ac)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ac)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kd||r===Ap||r===Gd||r===pp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===kd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ap)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Hd||r===Vd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Hd)return o===Ve?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Vd)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zd||r===gp||r===mp||r===_p||r===vp||r===Ep||r===xp||r===yp||r===Ip||r===Cp||r===Sp||r===wp||r===Mp||r===bp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===zd)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gp)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mp)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_p)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vp)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ep)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xp)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yp)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ip)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Cp)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sp)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wp)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mp)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bp)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===gc)return o===Ve?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===KS||r===Tp||r===Bp||r===Rp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===gc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Tp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===io?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class lB extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ds extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cB={type:"move"};class Yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,n),A=this._getHandJoint(c,m);g!==null&&(A.matrix.fromArray(g.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.jointRadius=g.radius),A.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cB)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ds;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hB extends Tt{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Zs,h!==Zs&&h!==go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zs&&(n=Ks),n===void 0&&h===go&&(n=io),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1}}class uB extends Nn{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const m=t.getContextAttributes();let g=null,A=null;const E=[],_=[],v=new Set,I=new Map,S=new Gt;S.layers.enable(1),S.viewport=new ct;const T=new Gt;T.layers.enable(2),T.viewport=new ct;const R=[S,T],y=new lB;y.layers.enable(1),y.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=E[Y];return se===void 0&&(se=new Yh,E[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=E[Y];return se===void 0&&(se=new Yh,E[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=E[Y];return se===void 0&&(se=new Yh,E[Y]=se),se.getHandSpace()};function W(Y){const se=_.indexOf(Y.inputSource);if(se===-1)return;const U=E[se];U!==void 0&&U.dispatchEvent({type:Y.type,data:Y.inputSource})}function F(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",P);for(let Y=0;Y<E.length;Y++){const se=_[Y];se!==null&&(_[Y]=null,E[Y].disconnect(se))}M=null,k=null,e.setRenderTarget(g),f=null,d=null,u=null,i=null,A=null,me.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",F),i.addEventListener("inputsourceschange",P),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const se={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:f}),A=new ni(f.framebufferWidth,f.framebufferHeight,{format:wt,type:an,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let se=null,U=null,K=null;m.depth&&(K=m.stencil?35056:33190,se=m.stencil?go:Zs,U=m.stencil?io:Ks);const D={colorFormat:32856,depthFormat:K,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(D),i.updateRenderState({layers:[d]}),A=new ni(d.textureWidth,d.textureHeight,{format:wt,type:an,depthTexture:new hB(d.textureWidth,d.textureHeight,U,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const he=e.properties.get(A);he.__ignoreDepthValues=d.ignoreDepthValues}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),me.setContext(i),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function P(Y){for(let se=0;se<Y.removed.length;se++){const U=Y.removed[se],K=_.indexOf(U);K>=0&&(_[K]=null,E[K].disconnect(U))}for(let se=0;se<Y.added.length;se++){const U=Y.added[se];let K=_.indexOf(U);if(K===-1){for(let he=0;he<E.length;he++)if(he>=_.length){_.push(U),K=he;break}else if(_[he]===null){_[he]=U,K=he;break}if(K===-1)break}const D=E[K];D&&D.connect(U)}}const V=new L,$=new L;function G(Y,se,U){V.setFromMatrixPosition(se.matrixWorld),$.setFromMatrixPosition(U.matrixWorld);const K=V.distanceTo($),D=se.projectionMatrix.elements,he=U.projectionMatrix.elements,ve=D[14]/(D[10]-1),ce=D[14]/(D[10]+1),ge=(D[9]+1)/D[5],w=(D[9]-1)/D[5],B=(D[8]-1)/D[0],H=(he[8]+1)/he[0],X=ve*B,ie=ve*H,ue=K/(-B+H),pe=ue*-B;se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(pe),Y.translateZ(ue),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const oe=ve+ue,de=ce+ue,ae=X-pe,C=ie+(K-pe),x=ge*ce/de*oe,O=w*ce/de*oe;Y.projectionMatrix.makePerspective(ae,C,x,O,oe,de),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function Q(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;y.near=T.near=S.near=Y.near,y.far=T.far=S.far=Y.far,(M!==y.near||k!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,k=y.far);const se=Y.parent,U=y.cameras;Q(y,se);for(let K=0;K<U.length;K++)Q(U[K],se);U.length===2?G(y,S,T):y.projectionMatrix.copy(S.projectionMatrix),J(Y,y,se)};function J(Y,se,U){U===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(U.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0);const K=Y.children;for(let D=0,he=K.length;D<he;D++)K[D].updateMatrixWorld(!0);Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=vo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.getPlanes=function(){return v};let le=null;function xe(Y,se){if(h=se.getViewerPose(c||o),p=se,h!==null){const U=h.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let K=!1;U.length!==y.cameras.length&&(y.cameras.length=0,K=!0);for(let D=0;D<U.length;D++){const he=U[D];let ve=null;if(f!==null)ve=f.getViewport(he);else{const ge=u.getViewSubImage(d,he);ve=ge.viewport,D===0&&(e.setRenderTargetTextures(A,ge.colorTexture,d.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(A))}let ce=R[D];ce===void 0&&(ce=new Gt,ce.layers.enable(D),ce.viewport=new ct,R[D]=ce),ce.matrix.fromArray(he.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(he.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(ve.x,ve.y,ve.width,ve.height),D===0&&(y.matrix.copy(ce.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),K===!0&&y.cameras.push(ce)}}for(let U=0;U<E.length;U++){const K=_[U],D=E[U];K!==null&&D!==void 0&&D.update(K,se,c||o)}if(le&&le(Y,se),se.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:se.detectedPlanes});let U=null;for(const K of v)se.detectedPlanes.has(K)||(U===null&&(U=[]),U.push(K));if(U!==null)for(const K of U)v.delete(K),I.delete(K),n.dispatchEvent({type:"planeremoved",data:K});for(const K of se.detectedPlanes)if(!v.has(K))v.add(K),I.set(K,se.lastChangedTime),n.dispatchEvent({type:"planeadded",data:K});else{const D=I.get(K);K.lastChangedTime>D&&(I.set(K,K.lastChangedTime),n.dispatchEvent({type:"planechanged",data:K}))}}p=null}const me=new eE;me.setAnimationLoop(xe),this.setAnimationLoop=function(Y){le=Y},this.dispose=function(){}}}function dB(s,e){function t(g,A){g.matrixAutoUpdate===!0&&g.updateMatrix(),A.value.copy(g.matrix)}function n(g,A){A.color.getRGB(g.fogColor.value,Xv(s)),A.isFog?(g.fogNear.value=A.near,g.fogFar.value=A.far):A.isFogExp2&&(g.fogDensity.value=A.density)}function i(g,A,E,_,v){A.isMeshBasicMaterial||A.isMeshLambertMaterial?r(g,A):A.isMeshToonMaterial?(r(g,A),u(g,A)):A.isMeshPhongMaterial?(r(g,A),h(g,A)):A.isMeshStandardMaterial?(r(g,A),d(g,A),A.isMeshPhysicalMaterial&&f(g,A,v)):A.isMeshMatcapMaterial?(r(g,A),p(g,A)):A.isMeshDepthMaterial?r(g,A):A.isMeshDistanceMaterial?(r(g,A),m(g,A)):A.isMeshNormalMaterial?r(g,A):A.isLineBasicMaterial?(o(g,A),A.isLineDashedMaterial&&a(g,A)):A.isPointsMaterial?l(g,A,E,_):A.isSpriteMaterial?c(g,A):A.isShadowMaterial?(g.color.value.copy(A.color),g.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function r(g,A){g.opacity.value=A.opacity,A.color&&g.diffuse.value.copy(A.color),A.emissive&&g.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(g.map.value=A.map,t(A.map,g.mapTransform)),A.alphaMap&&(g.alphaMap.value=A.alphaMap,t(A.alphaMap,g.alphaMapTransform)),A.bumpMap&&(g.bumpMap.value=A.bumpMap,t(A.bumpMap,g.bumpMapTransform),g.bumpScale.value=A.bumpScale,A.side===Nt&&(g.bumpScale.value*=-1)),A.normalMap&&(g.normalMap.value=A.normalMap,t(A.normalMap,g.normalMapTransform),g.normalScale.value.copy(A.normalScale),A.side===Nt&&g.normalScale.value.negate()),A.displacementMap&&(g.displacementMap.value=A.displacementMap,t(A.displacementMap,g.displacementMapTransform),g.displacementScale.value=A.displacementScale,g.displacementBias.value=A.displacementBias),A.emissiveMap&&(g.emissiveMap.value=A.emissiveMap,t(A.emissiveMap,g.emissiveMapTransform)),A.specularMap&&(g.specularMap.value=A.specularMap,t(A.specularMap,g.specularMapTransform)),A.alphaTest>0&&(g.alphaTest.value=A.alphaTest);const E=e.get(A).envMap;if(E&&(g.envMap.value=E,g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=A.reflectivity,g.ior.value=A.ior,g.refractionRatio.value=A.refractionRatio),A.lightMap){g.lightMap.value=A.lightMap;const _=s.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=A.lightMapIntensity*_,t(A.lightMap,g.lightMapTransform)}A.aoMap&&(g.aoMap.value=A.aoMap,g.aoMapIntensity.value=A.aoMapIntensity,t(A.aoMap,g.aoMapTransform))}function o(g,A){g.diffuse.value.copy(A.color),g.opacity.value=A.opacity,A.map&&(g.map.value=A.map,t(A.map,g.mapTransform))}function a(g,A){g.dashSize.value=A.dashSize,g.totalSize.value=A.dashSize+A.gapSize,g.scale.value=A.scale}function l(g,A,E,_){g.diffuse.value.copy(A.color),g.opacity.value=A.opacity,g.size.value=A.size*E,g.scale.value=_*.5,A.map&&(g.map.value=A.map,t(A.map,g.uvTransform)),A.alphaMap&&(g.alphaMap.value=A.alphaMap),A.alphaTest>0&&(g.alphaTest.value=A.alphaTest)}function c(g,A){g.diffuse.value.copy(A.color),g.opacity.value=A.opacity,g.rotation.value=A.rotation,A.map&&(g.map.value=A.map,t(A.map,g.mapTransform)),A.alphaMap&&(g.alphaMap.value=A.alphaMap),A.alphaTest>0&&(g.alphaTest.value=A.alphaTest)}function h(g,A){g.specular.value.copy(A.specular),g.shininess.value=Math.max(A.shininess,1e-4)}function u(g,A){A.gradientMap&&(g.gradientMap.value=A.gradientMap)}function d(g,A){g.metalness.value=A.metalness,A.metalnessMap&&(g.metalnessMap.value=A.metalnessMap,t(A.metalnessMap,g.metalnessMapTransform)),g.roughness.value=A.roughness,A.roughnessMap&&(g.roughnessMap.value=A.roughnessMap,t(A.roughnessMap,g.roughnessMapTransform)),e.get(A).envMap&&(g.envMapIntensity.value=A.envMapIntensity)}function f(g,A,E){g.ior.value=A.ior,A.sheen>0&&(g.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),g.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(g.sheenColorMap.value=A.sheenColorMap,t(A.sheenColorMap,g.sheenColorMapTransform)),A.sheenRoughnessMap&&(g.sheenRoughnessMap.value=A.sheenRoughnessMap,t(A.sheenRoughnessMap,g.sheenRoughnessMapTransform))),A.clearcoat>0&&(g.clearcoat.value=A.clearcoat,g.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(g.clearcoatMap.value=A.clearcoatMap,t(A.clearcoatMap,g.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,t(A.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(g.clearcoatNormalMap.value=A.clearcoatNormalMap,t(A.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===Nt&&g.clearcoatNormalScale.value.negate())),A.iridescence>0&&(g.iridescence.value=A.iridescence,g.iridescenceIOR.value=A.iridescenceIOR,g.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap&&(g.iridescenceMap.value=A.iridescenceMap,t(A.iridescenceMap,g.iridescenceMapTransform)),A.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=A.iridescenceThicknessMap,t(A.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),A.transmission>0&&(g.transmission.value=A.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),A.transmissionMap&&(g.transmissionMap.value=A.transmissionMap,t(A.transmissionMap,g.transmissionMapTransform)),g.thickness.value=A.thickness,A.thicknessMap&&(g.thicknessMap.value=A.thicknessMap,t(A.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=A.attenuationDistance,g.attenuationColor.value.copy(A.attenuationColor)),g.specularIntensity.value=A.specularIntensity,g.specularColor.value.copy(A.specularColor),A.specularColorMap&&(g.specularColorMap.value=A.specularColorMap,t(A.specularColorMap,g.specularColorMapTransform)),A.specularIntensityMap&&(g.specularIntensityMap.value=A.specularIntensityMap,t(A.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,A){A.matcap&&(g.matcap.value=A.matcap)}function m(g,A){const E=e.get(A).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fB(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(35375):0;function l(E,_){const v=_.program;n.uniformBlockBinding(E,v)}function c(E,_){let v=i[E.id];v===void 0&&(p(E),v=h(E),i[E.id]=v,E.addEventListener("dispose",g));const I=_.program;n.updateUBOMapping(E,I);const S=e.render.frame;r[E.id]!==S&&(d(E),r[E.id]=S)}function h(E){const _=u();E.__bindingPointIndex=_;const v=s.createBuffer(),I=E.__size,S=E.usage;return s.bindBuffer(35345,v),s.bufferData(35345,I,S),s.bindBuffer(35345,null),s.bindBufferBase(35345,_,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const _=i[E.id],v=E.uniforms,I=E.__cache;s.bindBuffer(35345,_);for(let S=0,T=v.length;S<T;S++){const R=v[S];if(f(R,S,I)===!0){const y=R.__offset,M=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let W=0;W<M.length;W++){const F=M[W],P=m(F);typeof F=="number"?(R.__data[0]=F,s.bufferSubData(35345,y+k,R.__data)):F.isMatrix3?(R.__data[0]=F.elements[0],R.__data[1]=F.elements[1],R.__data[2]=F.elements[2],R.__data[3]=F.elements[0],R.__data[4]=F.elements[3],R.__data[5]=F.elements[4],R.__data[6]=F.elements[5],R.__data[7]=F.elements[0],R.__data[8]=F.elements[6],R.__data[9]=F.elements[7],R.__data[10]=F.elements[8],R.__data[11]=F.elements[0]):(F.toArray(R.__data,k),k+=P.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,y,R.__data)}}s.bindBuffer(35345,null)}function f(E,_,v){const I=E.value;if(v[_]===void 0){if(typeof I=="number")v[_]=I;else{const S=Array.isArray(I)?I:[I],T=[];for(let R=0;R<S.length;R++)T.push(S[R].clone());v[_]=T}return!0}else if(typeof I=="number"){if(v[_]!==I)return v[_]=I,!0}else{const S=Array.isArray(v[_])?v[_]:[v[_]],T=Array.isArray(I)?I:[I];for(let R=0;R<S.length;R++){const y=S[R];if(y.equals(T[R])===!1)return y.copy(T[R]),!0}}return!1}function p(E){const _=E.uniforms;let v=0;const I=16;let S=0;for(let T=0,R=_.length;T<R;T++){const y=_[T],M={boundary:0,storage:0},k=Array.isArray(y.value)?y.value:[y.value];for(let W=0,F=k.length;W<F;W++){const P=k[W],V=m(P);M.boundary+=V.boundary,M.storage+=V.storage}if(y.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=v,T>0){S=v%I;const W=I-S;S!==0&&W-M.boundary<0&&(v+=I-S,y.__offset=v)}v+=M.storage}return S=v%I,S>0&&(v+=I-S),E.__size=v,E.__cache={},this}function m(E){const _={boundary:0,storage:0};return typeof E=="number"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function g(E){const _=E.target;_.removeEventListener("dispose",g);const v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function A(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:A}}function AB(){const s=Wa("canvas");return s.style.display="block",s}class oE{constructor(e={}){const{canvas:t=AB(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=null,p=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Kt,this.useLegacyLights=!0,this.toneMapping=mi,this.toneMappingExposure=1;const A=this;let E=!1,_=0,v=0,I=null,S=-1,T=null;const R=new ct,y=new ct;let M=null,k=t.width,W=t.height,F=1,P=null,V=null;const $=new ct(0,0,k,W),G=new ct(0,0,k,W);let Q=!1;const J=new Xf;let le=!1,xe=!1,me=null;const Y=new Qe,se=new L,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function K(){return I===null?F:1}let D=n;function he(b,q){for(let te=0;te<b.length;te++){const z=b[te],re=t.getContext(z,q);if(re!==null)return re}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hf}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",et,!1),D===null){const q=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&q.shift(),D=he(q,b),D===null)throw he(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ve,ce,ge,w,B,H,X,ie,ue,pe,oe,de,ae,C,x,O,j,ee,fe,ye,_e,Z,Me,be;function Te(){ve=new wT(D),ce=new ET(D,ve,e),ve.init(ce),Z=new aB(D,ve,ce),ge=new rB(D,ve,ce),w=new TT,B=new q1,H=new oB(D,ve,ge,B,ce,Z,w),X=new yT(A),ie=new ST(A),ue=new Gw(D,ce),Me=new _T(D,ve,ue,ce),pe=new MT(D,ue,w,Me),oe=new DT(D,pe,ue,w),fe=new LT(D,ce,H),O=new xT(B),de=new W1(A,X,ie,ve,ce,Me,O),ae=new dB(A,B),C=new j1,x=new eB(ve,ce),ee=new mT(A,X,ie,ge,oe,d,l),j=new sB(A,oe,ce),be=new fB(D,w,ce,ge),ye=new vT(D,ve,w,ce),_e=new bT(D,ve,w,ce),w.programs=de.programs,A.capabilities=ce,A.extensions=ve,A.properties=B,A.renderLists=C,A.shadowMap=j,A.state=ge,A.info=w}Te();const we=new uB(A,D);this.xr=we,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(b){b!==void 0&&(F=b,this.setSize(k,W,!1))},this.getSize=function(b){return b.set(k,W)},this.setSize=function(b,q,te=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,W=q,t.width=Math.floor(b*F),t.height=Math.floor(q*F),te===!0&&(t.style.width=b+"px",t.style.height=q+"px"),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(k*F,W*F).floor()},this.setDrawingBufferSize=function(b,q,te){k=b,W=q,F=te,t.width=Math.floor(b*te),t.height=Math.floor(q*te),this.setViewport(0,0,b,q)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy($)},this.setViewport=function(b,q,te,z){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,q,te,z),ge.viewport(R.copy($).multiplyScalar(F).floor())},this.getScissor=function(b){return b.copy(G)},this.setScissor=function(b,q,te,z){b.isVector4?G.set(b.x,b.y,b.z,b.w):G.set(b,q,te,z),ge.scissor(y.copy(G).multiplyScalar(F).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(b){ge.setScissorTest(Q=b)},this.setOpaqueSort=function(b){P=b},this.setTransparentSort=function(b){V=b},this.getClearColor=function(b){return b.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(b=!0,q=!0,te=!0){let z=0;b&&(z|=16384),q&&(z|=256),te&&(z|=1024),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",et,!1),C.dispose(),x.dispose(),B.dispose(),X.dispose(),ie.dispose(),oe.dispose(),Me.dispose(),be.dispose(),de.dispose(),we.dispose(),we.removeEventListener("sessionstart",Be),we.removeEventListener("sessionend",ut),me&&(me.dispose(),me=null),gt.stop()};function Ce(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=w.autoReset,q=j.enabled,te=j.autoUpdate,z=j.needsUpdate,re=j.type;Te(),w.autoReset=b,j.enabled=q,j.autoUpdate=te,j.needsUpdate=z,j.type=re}function et(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function vt(b){const q=b.target;q.removeEventListener("dispose",vt),N(q)}function N(b){ne(b),B.remove(b)}function ne(b){const q=B.get(b).programs;q!==void 0&&(q.forEach(function(te){de.releaseProgram(te)}),b.isShaderMaterial&&de.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,te,z,re,Re){q===null&&(q=U);const De=re.isMesh&&re.matrixWorld.determinant()<0,Ue=wx(b,q,te,z,re);ge.setMaterial(z,De);let Ge=te.index,qe=1;z.wireframe===!0&&(Ge=pe.getWireframeAttribute(te),qe=2);const $e=te.drawRange,je=te.attributes.position;let ot=$e.start*qe,Xt=($e.start+$e.count)*qe;Re!==null&&(ot=Math.max(ot,Re.start*qe),Xt=Math.min(Xt,(Re.start+Re.count)*qe)),Ge!==null?(ot=Math.max(ot,0),Xt=Math.min(Xt,Ge.count)):je!=null&&(ot=Math.max(ot,0),Xt=Math.min(Xt,je.count));const On=Xt-ot;if(On<0||On===1/0)return;Me.setup(re,z,Ue,te,Ge);let Is,yt=ye;if(Ge!==null&&(Is=ue.get(Ge),yt=_e,yt.setIndex(Is)),re.isMesh)z.wireframe===!0?(ge.setLineWidth(z.wireframeLinewidth*K()),yt.setMode(1)):yt.setMode(4);else if(re.isLine){let Ye=z.linewidth;Ye===void 0&&(Ye=1),ge.setLineWidth(Ye*K()),re.isLineSegments?yt.setMode(1):re.isLineLoop?yt.setMode(2):yt.setMode(3)}else re.isPoints?yt.setMode(0):re.isSprite&&yt.setMode(4);if(re.isInstancedMesh)yt.renderInstances(ot,On,re.count);else if(te.isInstancedBufferGeometry){const Ye=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,dh=Math.min(te.instanceCount,Ye);yt.renderInstances(ot,On,dh)}else yt.render(ot,On)},this.compile=function(b,q){function te(z,re,Re){z.transparent===!0&&z.side===ln&&z.forceSinglePass===!1?(z.side=Nt,z.needsUpdate=!0,sl(z,re,Re),z.side=ti,z.needsUpdate=!0,sl(z,re,Re),z.side=ln):sl(z,re,Re)}p=x.get(b),p.init(),g.push(p),b.traverseVisible(function(z){z.isLight&&z.layers.test(q.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(A.useLegacyLights),b.traverse(function(z){const re=z.material;if(re)if(Array.isArray(re))for(let Re=0;Re<re.length;Re++){const De=re[Re];te(De,b,z)}else te(re,b,z)}),g.pop(),p=null};let Ae=null;function Se(b){Ae&&Ae(b)}function Be(){gt.stop()}function ut(){gt.start()}const gt=new eE;gt.setAnimationLoop(Se),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(b){Ae=b,we.setAnimationLoop(b),b===null?gt.stop():gt.start()},we.addEventListener("sessionstart",Be),we.addEventListener("sessionend",ut),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(q),q=we.getCamera()),b.isScene===!0&&b.onBeforeRender(A,b,q,I),p=x.get(b,g.length),p.init(),g.push(p),Y.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(Y),xe=this.localClippingEnabled,le=O.init(this.clippingPlanes,xe),f=C.get(b,m.length),f.init(),m.push(f),Ht(b,q,0,A.sortObjects),f.finish(),A.sortObjects===!0&&f.sort(P,V),le===!0&&O.beginShadows();const te=p.state.shadowsArray;if(j.render(te,b,q),le===!0&&O.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(f,b),p.setupLights(A.useLegacyLights),q.isArrayCamera){const z=q.cameras;for(let re=0,Re=z.length;re<Re;re++){const De=z[re];$i(f,b,De,De.viewport)}}else $i(f,b,q);I!==null&&(H.updateMultisampleRenderTarget(I),H.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(A,b,q),Me.resetDefaultState(),S=-1,T=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Ht(b,q,te,z){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)te=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){z&&se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Y);const De=oe.update(b),Ue=b.material;Ue.visible&&f.push(b,De,Ue,te,se.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==w.render.frame&&(b.skeleton.update(),b.skeleton.frame=w.render.frame),!b.frustumCulled||J.intersectsObject(b))){z&&se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Y);const De=oe.update(b),Ue=b.material;if(Array.isArray(Ue)){const Ge=De.groups;for(let qe=0,$e=Ge.length;qe<$e;qe++){const je=Ge[qe],ot=Ue[je.materialIndex];ot&&ot.visible&&f.push(b,De,ot,te,se.z,je)}}else Ue.visible&&f.push(b,De,Ue,te,se.z,null)}}const Re=b.children;for(let De=0,Ue=Re.length;De<Ue;De++)Ht(Re[De],q,te,z)}function $i(b,q,te,z){const re=b.opaque,Re=b.transmissive,De=b.transparent;p.setupLightsView(te),le===!0&&O.setGlobalState(A.clippingPlanes,te),Re.length>0&&Et(re,Re,q,te),z&&ge.viewport(R.copy(z)),re.length>0&&wn(re,q,te),Re.length>0&&wn(Re,q,te),De.length>0&&wn(De,q,te),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Et(b,q,te,z){if(me===null){const Ue=ce.isWebGL2;me=new ni(1024,1024,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?un:an,minFilter:Ei,samples:Ue&&a===!0?4:0})}const re=A.getRenderTarget();A.setRenderTarget(me),A.clear();const Re=A.toneMapping;A.toneMapping=mi,wn(b,te,z),H.updateMultisampleRenderTarget(me),H.updateRenderTargetMipmap(me);let De=!1;for(let Ue=0,Ge=q.length;Ue<Ge;Ue++){const qe=q[Ue],$e=qe.object,je=qe.geometry,ot=qe.material,Xt=qe.group;if(ot.side===ln&&$e.layers.test(z.layers)){const On=ot.side;ot.side=Nt,ot.needsUpdate=!0,ri($e,te,z,je,ot,Xt),ot.side=On,ot.needsUpdate=!0,De=!0}}De===!0&&(H.updateMultisampleRenderTarget(me),H.updateRenderTargetMipmap(me)),A.setRenderTarget(re),A.toneMapping=Re}function wn(b,q,te){const z=q.isScene===!0?q.overrideMaterial:null;for(let re=0,Re=b.length;re<Re;re++){const De=b[re],Ue=De.object,Ge=De.geometry,qe=z===null?De.material:z,$e=De.group;Ue.layers.test(te.layers)&&ri(Ue,q,te,Ge,qe,$e)}}function ri(b,q,te,z,re,Re){b.onBeforeRender(A,q,te,z,re,Re),b.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),re.onBeforeRender(A,q,te,z,b,Re),re.transparent===!0&&re.side===ln&&re.forceSinglePass===!1?(re.side=Nt,re.needsUpdate=!0,A.renderBufferDirect(te,q,z,re,b,Re),re.side=ti,re.needsUpdate=!0,A.renderBufferDirect(te,q,z,re,b,Re),re.side=ln):A.renderBufferDirect(te,q,z,re,b,Re),b.onAfterRender(A,q,te,z,re,Re)}function sl(b,q,te){q.isScene!==!0&&(q=U);const z=B.get(b),re=p.state.lights,Re=p.state.shadowsArray,De=re.state.version,Ue=de.getParameters(b,re.state,Re,q,te),Ge=de.getProgramCacheKey(Ue);let qe=z.programs;z.environment=b.isMeshStandardMaterial?q.environment:null,z.fog=q.fog,z.envMap=(b.isMeshStandardMaterial?ie:X).get(b.envMap||z.environment),qe===void 0&&(b.addEventListener("dispose",vt),qe=new Map,z.programs=qe);let $e=qe.get(Ge);if($e!==void 0){if(z.currentProgram===$e&&z.lightsStateVersion===De)return pA(b,Ue),$e}else Ue.uniforms=de.getUniforms(b),b.onBuild(te,Ue,A),b.onBeforeCompile(Ue,A),$e=de.acquireProgram(Ue,Ge),qe.set(Ge,$e),z.uniforms=Ue.uniforms;const je=z.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(je.clippingPlanes=O.uniform),pA(b,Ue),z.needsLights=bx(b),z.lightsStateVersion=De,z.needsLights&&(je.ambientLightColor.value=re.state.ambient,je.lightProbe.value=re.state.probe,je.directionalLights.value=re.state.directional,je.directionalLightShadows.value=re.state.directionalShadow,je.spotLights.value=re.state.spot,je.spotLightShadows.value=re.state.spotShadow,je.rectAreaLights.value=re.state.rectArea,je.ltc_1.value=re.state.rectAreaLTC1,je.ltc_2.value=re.state.rectAreaLTC2,je.pointLights.value=re.state.point,je.pointLightShadows.value=re.state.pointShadow,je.hemisphereLights.value=re.state.hemi,je.directionalShadowMap.value=re.state.directionalShadowMap,je.directionalShadowMatrix.value=re.state.directionalShadowMatrix,je.spotShadowMap.value=re.state.spotShadowMap,je.spotLightMatrix.value=re.state.spotLightMatrix,je.spotLightMap.value=re.state.spotLightMap,je.pointShadowMap.value=re.state.pointShadowMap,je.pointShadowMatrix.value=re.state.pointShadowMatrix);const ot=$e.getUniforms(),Xt=_c.seqWithValue(ot.seq,je);return z.currentProgram=$e,z.uniformsList=Xt,$e}function pA(b,q){const te=B.get(b);te.outputEncoding=q.outputEncoding,te.instancing=q.instancing,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function wx(b,q,te,z,re){q.isScene!==!0&&(q=U),H.resetTextureUnits();const Re=q.fog,De=z.isMeshStandardMaterial?q.environment:null,Ue=I===null?A.outputEncoding:I.isXRRenderTarget===!0?I.texture.encoding:Kt,Ge=(z.isMeshStandardMaterial?ie:X).get(z.envMap||De),qe=z.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,$e=!!z.normalMap&&!!te.attributes.tangent,je=!!te.morphAttributes.position,ot=!!te.morphAttributes.normal,Xt=!!te.morphAttributes.color,On=z.toneMapped?A.toneMapping:mi,Is=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,yt=Is!==void 0?Is.length:0,Ye=B.get(z),dh=p.state.lights;if(le===!0&&(xe===!0||b!==T)){const vn=b===T&&z.id===S;O.setState(z,b,vn)}let Lt=!1;z.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==dh.state.version||Ye.outputEncoding!==Ue||re.isInstancedMesh&&Ye.instancing===!1||!re.isInstancedMesh&&Ye.instancing===!0||re.isSkinnedMesh&&Ye.skinning===!1||!re.isSkinnedMesh&&Ye.skinning===!0||Ye.envMap!==Ge||z.fog===!0&&Ye.fog!==Re||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==O.numPlanes||Ye.numIntersection!==O.numIntersection)||Ye.vertexAlphas!==qe||Ye.vertexTangents!==$e||Ye.morphTargets!==je||Ye.morphNormals!==ot||Ye.morphColors!==Xt||Ye.toneMapping!==On||ce.isWebGL2===!0&&Ye.morphTargetsCount!==yt)&&(Lt=!0):(Lt=!0,Ye.__version=z.version);let Cs=Ye.currentProgram;Lt===!0&&(Cs=sl(z,q,re));let gA=!1,No=!1,fh=!1;const Jt=Cs.getUniforms(),Ss=Ye.uniforms;if(ge.useProgram(Cs.program)&&(gA=!0,No=!0,fh=!0),z.id!==S&&(S=z.id,No=!0),gA||T!==b){if(Jt.setValue(D,"projectionMatrix",b.projectionMatrix),ce.logarithmicDepthBuffer&&Jt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),T!==b&&(T=b,No=!0,fh=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const vn=Jt.map.cameraPosition;vn!==void 0&&vn.setValue(D,se.setFromMatrixPosition(b.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Jt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||re.isSkinnedMesh)&&Jt.setValue(D,"viewMatrix",b.matrixWorldInverse)}if(re.isSkinnedMesh){Jt.setOptional(D,re,"bindMatrix"),Jt.setOptional(D,re,"bindMatrixInverse");const vn=re.skeleton;vn&&(ce.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),Jt.setValue(D,"boneTexture",vn.boneTexture,H),Jt.setValue(D,"boneTextureSize",vn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ah=te.morphAttributes;if((Ah.position!==void 0||Ah.normal!==void 0||Ah.color!==void 0&&ce.isWebGL2===!0)&&fe.update(re,te,Cs),(No||Ye.receiveShadow!==re.receiveShadow)&&(Ye.receiveShadow=re.receiveShadow,Jt.setValue(D,"receiveShadow",re.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ss.envMap.value=Ge,Ss.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),No&&(Jt.setValue(D,"toneMappingExposure",A.toneMappingExposure),Ye.needsLights&&Mx(Ss,fh),Re&&z.fog===!0&&ae.refreshFogUniforms(Ss,Re),ae.refreshMaterialUniforms(Ss,z,F,W,me),_c.upload(D,Ye.uniformsList,Ss,H)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(_c.upload(D,Ye.uniformsList,Ss,H),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Jt.setValue(D,"center",re.center),Jt.setValue(D,"modelViewMatrix",re.modelViewMatrix),Jt.setValue(D,"normalMatrix",re.normalMatrix),Jt.setValue(D,"modelMatrix",re.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const vn=z.uniformsGroups;for(let ph=0,Tx=vn.length;ph<Tx;ph++)if(ce.isWebGL2){const mA=vn[ph];be.update(mA,Cs),be.bind(mA,Cs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cs}function Mx(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function bx(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,q,te){B.get(b.texture).__webglTexture=q,B.get(b.depthTexture).__webglTexture=te;const z=B.get(b);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=te===void 0,z.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,q){const te=B.get(b);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(b,q=0,te=0){I=b,_=q,v=te;let z=!0,re=null,Re=!1,De=!1;if(b){const Ge=B.get(b);Ge.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),z=!1):Ge.__webglFramebuffer===void 0?H.setupRenderTarget(b):Ge.__hasExternalTextures&&H.rebindTextures(b,B.get(b.texture).__webglTexture,B.get(b.depthTexture).__webglTexture);const qe=b.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);const $e=B.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(re=$e[q],Re=!0):ce.isWebGL2&&b.samples>0&&H.useMultisampledRTT(b)===!1?re=B.get(b).__webglMultisampledFramebuffer:re=$e,R.copy(b.viewport),y.copy(b.scissor),M=b.scissorTest}else R.copy($).multiplyScalar(F).floor(),y.copy(G).multiplyScalar(F).floor(),M=Q;if(ge.bindFramebuffer(36160,re)&&ce.drawBuffers&&z&&ge.drawBuffers(b,re),ge.viewport(R),ge.scissor(y),ge.setScissorTest(M),Re){const Ge=B.get(b.texture);D.framebufferTexture2D(36160,36064,34069+q,Ge.__webglTexture,te)}else if(De){const Ge=B.get(b.texture),qe=q||0;D.framebufferTextureLayer(36160,36064,Ge.__webglTexture,te||0,qe)}S=-1},this.readRenderTargetPixels=function(b,q,te,z,re,Re,De){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=B.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(Ue=Ue[De]),Ue){ge.bindFramebuffer(36160,Ue);try{const Ge=b.texture,qe=Ge.format,$e=Ge.type;if(qe!==wt&&Z.convert(qe)!==D.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=$e===un&&(ve.has("EXT_color_buffer_half_float")||ce.isWebGL2&&ve.has("EXT_color_buffer_float"));if($e!==an&&Z.convert($e)!==D.getParameter(35738)&&!($e===hn&&(ce.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-z&&te>=0&&te<=b.height-re&&D.readPixels(q,te,z,re,Z.convert(qe),Z.convert($e),Re)}finally{const Ge=I!==null?B.get(I).__webglFramebuffer:null;ge.bindFramebuffer(36160,Ge)}}},this.copyFramebufferToTexture=function(b,q,te=0){const z=Math.pow(2,-te),re=Math.floor(q.image.width*z),Re=Math.floor(q.image.height*z);H.setTexture2D(q,0),D.copyTexSubImage2D(3553,te,0,0,b.x,b.y,re,Re),ge.unbindTexture()},this.copyTextureToTexture=function(b,q,te,z=0){const re=q.image.width,Re=q.image.height,De=Z.convert(te.format),Ue=Z.convert(te.type);H.setTexture2D(te,0),D.pixelStorei(37440,te.flipY),D.pixelStorei(37441,te.premultiplyAlpha),D.pixelStorei(3317,te.unpackAlignment),q.isDataTexture?D.texSubImage2D(3553,z,b.x,b.y,re,Re,De,Ue,q.image.data):q.isCompressedTexture?D.compressedTexSubImage2D(3553,z,b.x,b.y,q.mipmaps[0].width,q.mipmaps[0].height,De,q.mipmaps[0].data):D.texSubImage2D(3553,z,b.x,b.y,De,Ue,q.image),z===0&&te.generateMipmaps&&D.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(b,q,te,z,re=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=b.max.x-b.min.x+1,De=b.max.y-b.min.y+1,Ue=b.max.z-b.min.z+1,Ge=Z.convert(z.format),qe=Z.convert(z.type);let $e;if(z.isData3DTexture)H.setTexture3D(z,0),$e=32879;else if(z.isDataArrayTexture)H.setTexture2DArray(z,0),$e=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(37440,z.flipY),D.pixelStorei(37441,z.premultiplyAlpha),D.pixelStorei(3317,z.unpackAlignment);const je=D.getParameter(3314),ot=D.getParameter(32878),Xt=D.getParameter(3316),On=D.getParameter(3315),Is=D.getParameter(32877),yt=te.isCompressedTexture?te.mipmaps[0]:te.image;D.pixelStorei(3314,yt.width),D.pixelStorei(32878,yt.height),D.pixelStorei(3316,b.min.x),D.pixelStorei(3315,b.min.y),D.pixelStorei(32877,b.min.z),te.isDataTexture||te.isData3DTexture?D.texSubImage3D($e,re,q.x,q.y,q.z,Re,De,Ue,Ge,qe,yt.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D($e,re,q.x,q.y,q.z,Re,De,Ue,Ge,yt.data)):D.texSubImage3D($e,re,q.x,q.y,q.z,Re,De,Ue,Ge,qe,yt),D.pixelStorei(3314,je),D.pixelStorei(32878,ot),D.pixelStorei(3316,Xt),D.pixelStorei(3315,On),D.pixelStorei(32877,Is),re===0&&z.generateMipmaps&&D.generateMipmap($e),ge.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?H.setTextureCube(b,0):b.isData3DTexture?H.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?H.setTexture2DArray(b,0):H.setTexture2D(b,0),ge.unbindTexture()},this.resetState=function(){_=0,v=0,I=null,ge.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class pB extends oE{}pB.prototype.isWebGL1Renderer=!0;class _s extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class gB{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qd,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new L;class Zf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gg=new L,mg=new ct,_g=new ct,mB=new L,vg=new Qe,wr=new L;class _B extends Le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)wr.fromBufferAttribute(t,n),this.applyBoneTransform(n,wr),this.boundingBox.expandByPoint(wr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)wr.fromBufferAttribute(t,n),this.applyBoneTransform(n,wr),this.boundingSphere.expandByPoint(wr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;mg.fromBufferAttribute(i.attributes.skinIndex,e),_g.fromBufferAttribute(i.attributes.skinWeight,e),gg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=_g.getComponent(r);if(o!==0){const a=mg.getComponent(r);vg.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(mB.copy(gg).applyMatrix4(vg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class aE extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class eA extends Tt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=bt,h=bt,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eg=new Qe,vB=new Qe;class tA{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:vB;Eg.multiplyMatrices(a,t[r]),Eg.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new tA(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Hv(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new eA(t,e,e,wt,hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new aE),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class xg extends xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mr=new Qe,yg=new Qe,Ll=[],Ig=new cn,EB=new Qe,zo=new Le,Wo=new si;class xB extends Le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xg(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,EB)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),Ig.copy(e.boundingBox).applyMatrix4(Mr),this.boundingBox.union(Ig)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),Wo.copy(e.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(Wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(zo.geometry=this.geometry,zo.material=this.material,zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(n),e.ray.intersectsSphere(Wo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Mr),yg.multiplyMatrices(n,Mr),zo.matrixWorld=yg,zo.raycast(e,Ll);for(let o=0,a=Ll.length;o<a;o++){const l=Ll[o];l.instanceId=r,l.object=this,t.push(l)}Ll.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xg(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class lE extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cg=new L,Sg=new L,wg=new Qe,Xh=new rh,Dl=new si;class nA extends ht{constructor(e=new Qn,t=new lE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Cg.fromBufferAttribute(t,i-1),Sg.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Cg.distanceTo(Sg);e.setAttribute("lineDistance",new _i(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dl.copy(n.boundingSphere),Dl.applyMatrix4(i),Dl.radius+=r,e.ray.intersectsSphere(Dl)===!1)return;wg.copy(i).invert(),Xh.copy(e.ray).applyMatrix4(wg);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,h=new L,u=new L,d=new L,f=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){const A=Math.max(0,o.start),E=Math.min(p.count,o.start+o.count);for(let _=A,v=E-1;_<v;_+=f){const I=p.getX(_),S=p.getX(_+1);if(c.fromBufferAttribute(g,I),h.fromBufferAttribute(g,S),Xh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const A=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let _=A,v=E-1;_<v;_+=f){if(c.fromBufferAttribute(g,_),h.fromBufferAttribute(g,_+1),Xh.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Mg=new L,bg=new L;class yB extends nA{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Mg.fromBufferAttribute(t,i),bg.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mg.distanceTo(bg);e.setAttribute("lineDistance",new _i(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class IB extends nA{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class cE extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tg=new Qe,Xd=new rh,Pl=new si,Ul=new L;class CB extends ht{constructor(e=new Qn,t=new cE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pl.copy(n.boundingSphere),Pl.applyMatrix4(i),Pl.radius+=r,e.ray.intersectsSphere(Pl)===!1)return;Tg.copy(i).invert(),Xd.copy(e.ray).applyMatrix4(Tg);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,m=f;p<m;p++){const g=c.getX(p);Ul.fromBufferAttribute(u,g),Bg(Ul,g,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,m=f;p<m;p++)Ul.fromBufferAttribute(u,p),Bg(Ul,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Bg(s,e,t,n,i,r,o){const a=Xd.distanceSqToPoint(s);if(a<t){const l=new L;Xd.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class SB extends Tt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:pt,this.magFilter=r!==void 0?r:pt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class hE extends Tt{constructor(e,t,n,i,r,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class wB extends hE{constructor(e,t,n,i,r,o){super(e,t,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=$t}}class MB extends Tt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nr extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kv,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lr extends nr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function es(s,e,t){return uE(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function Fl(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function uE(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function bB(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Rg(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function dE(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class el{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class TB extends el{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$r,endingEnd:$r}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case jr:r=e,a=2*t-n;break;case Nc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jr:o=e,l=2*n-t;break;case Nc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),m=p*p,g=m*p,A=-d*g+2*d*m-d*p,E=(1+d)*g+(-1.5-2*d)*m+(-.5+d)*p+1,_=(-1-f)*g+(1.5+f)*m+.5*p,v=f*g-f*m;for(let I=0;I!==a;++I)r[I]=A*o[h+I]+E*o[c+I]+_*o[l+I]+v*o[u+I];return r}}class fE extends el{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class BB extends el{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class yi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fl(t,this.TimeBufferType),this.values=Fl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fl(e.times,Array),values:Fl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new BB(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new TB(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case mo:t=this.InterpolantFactoryMethodDiscrete;break;case tr:t=this.InterpolantFactoryMethodLinear;break;case bh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return tr;case this.InterpolantFactoryMethodSmooth:return bh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=es(n,r,o),this.values=es(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&uE(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=es(this.times),t=es(this.values),n=this.getValueSize(),i=this.getInterpolation()===bh,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const m=t[u+p];if(m!==t[d+p]||m!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=es(e,0,o),this.values=es(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=es(this.times,0),t=es(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=tr;class Po extends yi{}Po.prototype.ValueTypeName="bool";Po.prototype.ValueBufferType=Array;Po.prototype.DefaultInterpolation=mo;Po.prototype.InterpolantFactoryMethodLinear=void 0;Po.prototype.InterpolantFactoryMethodSmooth=void 0;class AE extends yi{}AE.prototype.ValueTypeName="color";class qa extends yi{}qa.prototype.ValueTypeName="number";class RB extends el{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Fn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ir extends yi{InterpolantFactoryMethodLinear(e){return new RB(this.times,this.values,this.getValueSize(),e)}}ir.prototype.ValueTypeName="quaternion";ir.prototype.DefaultInterpolation=tr;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class Uo extends yi{}Uo.prototype.ValueTypeName="string";Uo.prototype.ValueBufferType=Array;Uo.prototype.DefaultInterpolation=mo;Uo.prototype.InterpolantFactoryMethodLinear=void 0;Uo.prototype.InterpolantFactoryMethodSmooth=void 0;class $a extends yi{}$a.prototype.ValueTypeName="vector";class Jd{constructor(e,t=-1,n,i=qf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(DB(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(yi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=bB(l);l=Rg(l,1,h),c=Rg(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new qa(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,m){if(f.length!==0){const g=[],A=[];dE(f,g,A,p),g.length!==0&&m.push(new u(d,g,A))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let m=0;m<d[p].morphTargets.length;m++)f[d[p].morphTargets[m]]=-1;for(const m in f){const g=[],A=[];for(let E=0;E!==d[p].morphTargets.length;++E){const _=d[p];g.push(_.time),A.push(_.morphTarget===m?1:0)}i.push(new qa(".morphTargetInfluence["+m+"]",g,A))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n($a,f+".position",d,"pos",i),n(ir,f+".quaternion",d,"rot",i),n($a,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function LB(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qa;case"vector":case"vector2":case"vector3":case"vector4":return $a;case"color":return AE;case"quaternion":return ir;case"bool":case"boolean":return Po;case"string":return Uo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function DB(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=LB(s.type);if(s.times===void 0){const t=[],n=[];dE(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const xo={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class PB{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const UB=new PB;class ys{constructor(e){this.manager=e!==void 0?e:UB,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Bi={};class FB extends Error{constructor(e,t){super(e),this.response=t}}class ps extends ys{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=xo.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:n,onError:i});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Bi[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,p=f!==0;let m=0;const g=new ReadableStream({start(A){E();function E(){u.read().then(({done:_,value:v})=>{if(_)A.close();else{m+=v.byteLength;const I=new ProgressEvent("progress",{lengthComputable:p,loaded:m,total:f});for(let S=0,T=h.length;S<T;S++){const R=h[S];R.onProgress&&R.onProgress(I)}A.enqueue(v),E()}})}}});return new Response(g)}else throw new FB(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{xo.add(e,c);const h=Bi[e];delete Bi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Bi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Bi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class NB extends ys{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=xo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Wa("img");function l(){h(),xo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class QB extends ys{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new eA,a=new ps(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){const c=r.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:$t,o.wrapT=c.wrapT!==void 0?c.wrapT:$t,o.magFilter=c.magFilter!==void 0?c.magFilter:pt,o.minFilter=c.minFilter!==void 0?c.minFilter:pt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ei),c.mipmapCount===1&&(o.minFilter=pt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c))},n,i),o}}class pE extends ys{constructor(e){super(e)}load(e,t,n,i){const r=new Tt,o=new NB(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ah extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Jh=new Qe,Lg=new L,Dg=new L;class iA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xf,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lg),Dg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dg),t.updateMatrixWorld(),Jh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Jh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class OB extends iA{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=vo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kB extends ah{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new OB}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pg=new Qe,qo=new L,Zh=new L;class GB extends iA{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qo.setFromMatrixPosition(e.matrixWorld),n.position.copy(qo),Zh.copy(n.position),Zh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Zh),n.updateMatrixWorld(),i.makeTranslation(-qo.x,-qo.y,-qo.z),Pg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pg)}}class sA extends ah{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new GB}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class HB extends iA{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gE extends ah{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new HB}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class VB{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class zB extends ah{constructor(e=new VB,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Zd{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class WB extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=xo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){xo.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}class qB{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Fn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Fn.multiplyQuaternionsFlat(e,o,e,t,e,n),Fn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const rA="\\[\\]\\.:\\/",$B=new RegExp("["+rA+"]","g"),oA="[^"+rA+"]",jB="[^"+rA.replace("\\.","")+"]",KB=/((?:WC+[\/:])*)/.source.replace("WC",oA),YB=/(WCOD+)?/.source.replace("WCOD",jB),XB=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oA),JB=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oA),ZB=new RegExp("^"+KB+YB+XB+JB+"$"),eR=["material","materials","bones","map"];class tR{constructor(e,t,n){const i=n||Xe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Xe{constructor(e,t,n){this.path=t,this.parsedPath=n||Xe.parseTrackName(t),this.node=Xe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Xe.Composite(e,t,n):new Xe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($B,"")}static parseTrackName(e){const t=ZB.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);eR.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Xe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Xe.Composite=tR;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class nR{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:$r,endingEnd:$r};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=zf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case YS:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case qf:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Wf;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Qv){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=jr,i.endingEnd=jr):(e?i.endingStart=this.zeroSlopeAtStart?jr:$r:i.endingStart=Nc,t?i.endingEnd=this.zeroSlopeAtEnd?jr:$r:i.endingEnd=Nc)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const iR=new Float32Array(1);class sR extends Nn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const m=t&&t._propertyBindings[u].binding.parsedPath;p=new qB(Xe.create(n,f,m),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new fE(new Float32Array(2),new Float32Array(2),1,iR),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Jd.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=qf),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new nR(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Jd.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class rR{constructor(e,t,n=0,i=1/0){this.ray=new rh(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Kf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ef(e,this,n,t),n.sort(Ug),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ef(e[i],this,n,t);return n.sort(Ug),n}}function Ug(s,e){return s.distance-e.distance}function ef(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)ef(i[r],e,t,!0)}}class vc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ec=window,aA=Ec.ShadowRoot&&(Ec.ShadyCSS===void 0||Ec.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mE=Symbol(),Fg=new WeakMap;let oR=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==mE)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(aA&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Fg.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Fg.set(t,e))}return e}toString(){return this.cssText}};const aR=s=>new oR(typeof s=="string"?s:s+"",void 0,mE),lR=(s,e)=>{aA?s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),i=Ec.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,s.appendChild(n)})},Ng=aA?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return aR(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var eu;const Oc=window,Qg=Oc.trustedTypes,cR=Qg?Qg.emptyScript:"",Og=Oc.reactiveElementPolyfillSupport,tf={toAttribute(s,e){switch(e){case Boolean:s=s?cR:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},_E=(s,e)=>e!==s&&(e==e||s==s),tu={attribute:!0,type:String,converter:tf,reflect:!1,hasChanged:_E};let js=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const i=this._$Ep(n,t);i!==void 0&&(this._$Ev.set(i,n),e.push(i))}),e}static createProperty(e,t=tu){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||tu}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of n)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(Ng(i))}else e!==void 0&&t.push(Ng(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return lR(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=tu){var i;const r=this.constructor._$Ep(e,n);if(r!==void 0&&n.reflect===!0){const o=(((i=n.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?n.converter:tf).toAttribute(t,n.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=i.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:tf;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,n){let i=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||_E)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(n)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var i;return(i=n.hostUpdated)===null||i===void 0?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};js.finalized=!0,js.elementProperties=new Map,js.elementStyles=[],js.shadowRootOptions={mode:"open"},Og==null||Og({ReactiveElement:js}),((eu=Oc.reactiveElementVersions)!==null&&eu!==void 0?eu:Oc.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nu;const kc=window,yo=kc.trustedTypes,kg=yo?yo.createPolicy("lit-html",{createHTML:s=>s}):void 0,nf="$lit$",cs=`lit$${(Math.random()+"").slice(9)}$`,vE="?"+cs,hR=`<${vE}>`,Io=document,ja=()=>Io.createComment(""),Ka=s=>s===null||typeof s!="object"&&typeof s!="function",EE=Array.isArray,uR=s=>EE(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",iu=`[ 	
\f\r]`,$o=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gg=/-->/g,Hg=/>/g,Rs=RegExp(`>|${iu}(?:([^\\s"'>=/]+)(${iu}*=${iu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vg=/'/g,zg=/"/g,xE=/^(?:script|style|textarea|title)$/i,dR=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),lh=dR(1),Co=Symbol.for("lit-noChange"),Ft=Symbol.for("lit-nothing"),Wg=new WeakMap,ro=Io.createTreeWalker(Io,129,null,!1),fR=(s,e)=>{const t=s.length-1,n=[];let i,r=e===2?"<svg>":"",o=$o;for(let l=0;l<t;l++){const c=s[l];let h,u,d=-1,f=0;for(;f<c.length&&(o.lastIndex=f,u=o.exec(c),u!==null);)f=o.lastIndex,o===$o?u[1]==="!--"?o=Gg:u[1]!==void 0?o=Hg:u[2]!==void 0?(xE.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=Rs):u[3]!==void 0&&(o=Rs):o===Rs?u[0]===">"?(o=i??$o,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?Rs:u[3]==='"'?zg:Vg):o===zg||o===Vg?o=Rs:o===Gg||o===Hg?o=$o:(o=Rs,i=void 0);const p=o===Rs&&s[l+1].startsWith("/>")?" ":"";r+=o===$o?c+hR:d>=0?(n.push(h),c.slice(0,d)+nf+c.slice(d)+cs+p):c+cs+(d===-2?(n.push(void 0),l):p)}const a=r+(s[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[kg!==void 0?kg.createHTML(a):a,n]};class Ya{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,h]=fR(e,t);if(this.el=Ya.createElement(c,n),ro.currentNode=this.el.content,t===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(i=ro.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const d of i.getAttributeNames())if(d.endsWith(nf)||d.startsWith(cs)){const f=h[o++];if(u.push(d),f!==void 0){const p=i.getAttribute(f.toLowerCase()+nf).split(cs),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:m[2],strings:p,ctor:m[1]==="."?pR:m[1]==="?"?mR:m[1]==="@"?_R:ch})}else l.push({type:6,index:r})}for(const d of u)i.removeAttribute(d)}if(xE.test(i.tagName)){const u=i.textContent.split(cs),d=u.length-1;if(d>0){i.textContent=yo?yo.emptyScript:"";for(let f=0;f<d;f++)i.append(u[f],ja()),ro.nextNode(),l.push({type:2,index:++r});i.append(u[d],ja())}}}else if(i.nodeType===8)if(i.data===vE)l.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(cs,u+1))!==-1;)l.push({type:7,index:r}),u+=cs.length-1}r++}}static createElement(e,t){const n=Io.createElement("template");return n.innerHTML=e,n}}function So(s,e,t=s,n){var i,r,o,a;if(e===Co)return e;let l=n!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[n]:t._$Cl;const c=Ka(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(s),l._$AT(s,t,n)),n!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=So(s,l._$AS(s,e.values),l,n)),e}class AR{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:i}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Io).importNode(n,!0);ro.currentNode=r;let o=ro.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new tl(o,o.nextSibling,this,e):c.type===1?h=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(h=new vR(o,this,e)),this._$AV.push(h),c=i[++l]}a!==(c==null?void 0:c.index)&&(o=ro.nextNode(),a++)}return r}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class tl{constructor(e,t,n,i){var r;this.type=2,this._$AH=Ft,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cp=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=So(this,e,t),Ka(e)?e===Ft||e==null||e===""?(this._$AH!==Ft&&this._$AR(),this._$AH=Ft):e!==this._$AH&&e!==Co&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):uR(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Ft&&Ka(this._$AH)?this._$AA.nextSibling.data=e:this.$(Io.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ya.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(n);else{const o=new AR(r,this),a=o.u(this.options);o.v(n),this.$(a),this._$AH=o}}_$AC(e){let t=Wg.get(e.strings);return t===void 0&&Wg.set(e.strings,t=new Ya(e)),t}T(e){EE(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const r of e)i===t.length?t.push(n=new tl(this.k(ja()),this.k(ja()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class ch{constructor(e,t,n,i,r){this.type=1,this._$AH=Ft,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Ft}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const r=this.strings;let o=!1;if(r===void 0)e=So(this,e,t,0),o=!Ka(e)||e!==this._$AH&&e!==Co,o&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=So(this,a[n+l],t,l),c===Co&&(c=this._$AH[l]),o||(o=!Ka(c)||c!==this._$AH[l]),c===Ft?e=Ft:e!==Ft&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!i&&this.j(e)}j(e){e===Ft?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class pR extends ch{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ft?void 0:e}}const gR=yo?yo.emptyScript:"";let mR=class extends ch{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Ft?this.element.setAttribute(this.name,gR):this.element.removeAttribute(this.name)}};class _R extends ch{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){var n;if((e=(n=So(this,e,t,0))!==null&&n!==void 0?n:Ft)===Co)return;const i=this._$AH,r=e===Ft&&i!==Ft||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Ft&&(i===Ft||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class vR{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){So(this,e)}}const qg=kc.litHtmlPolyfillSupport;qg==null||qg(Ya,tl),((nu=kc.litHtmlVersions)!==null&&nu!==void 0?nu:kc.litHtmlVersions=[]).push("2.7.2");const yE=(s,e,t)=>{var n,i;const r=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=r._$litPart$;if(o===void 0){const a=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new tl(e.insertBefore(ja(),a),a,void 0,t??{})}return o._$AI(s),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var su,ru;class xc extends js{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=yE(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Co}}xc.finalized=!0,xc._$litElement$=!0,(su=globalThis.litElementHydrateSupport)===null||su===void 0||su.call(globalThis,{LitElement:xc});const $g=globalThis.litElementPolyfillSupport;$g==null||$g({LitElement:xc});((ru=globalThis.litElementVersions)!==null&&ru!==void 0?ru:globalThis.litElementVersions=[]).push("3.3.1");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=navigator.xr!=null&&self.XRSession!=null&&navigator.xr.isSessionSupported!=null,CE=IE&&self.XRSession.prototype.requestHitTestSource!=null,ou=self.ResizeObserver!=null,au=self.IntersectionObserver!=null,SE=CE;(()=>{const s=navigator.userAgent||navigator.vendor||self.opera;let e=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(s)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(s.substr(0,4)))&&(e=!0),e})();const ER=/android/i.test(navigator.userAgent),xR=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,yR=/firefox/i.test(navigator.userAgent),IR=/OculusBrowser/.test(navigator.userAgent),CR=ER&&!yR&&!IR,SR=!!(window.webkit&&window.webkit.messageHandlers),jg=(()=>{if(xR){if(SR)return!!/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent);{const s=document.createElement("a");return!!(s.relList&&s.relList.supports&&s.relList.supports("ar"))}}else return!1})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE=s=>s&&s!=="null"?wR(s):null,Kg=()=>{if(SE)return;const s=[];throw IE||s.push("WebXR Device API"),CE||s.push("WebXR Hit Test API"),new Error(`The following APIs are required for AR, but are missing in this browser: ${s.join(", ")}`)},wR=s=>new URL(s,window.location.toString()).toString(),MR=(s,e)=>{let t=null;const n=(...i)=>{t==null&&(s(...i),t=self.setTimeout(()=>t=null,e))};return n.flush=()=>{t!=null&&(self.clearTimeout(t),t=null)},n},Yg=(s,e)=>{let t=null;return(...n)=>{t!=null&&self.clearTimeout(t),t=self.setTimeout(()=>{t=null,s(...n)},e)}},Ai=(s,e,t)=>Math.max(e,Math.min(t,s)),bR=1,sf=(()=>{const s=(()=>{var e;if(!((e=document.documentElement.getAttribute("itemtype"))===null||e===void 0)&&e.includes("schema.org/SearchResultsPage"))return!0;const t=document.head!=null?Array.from(document.head.querySelectorAll("meta")):[];for(const n of t)if(n.name==="viewport")return!0;return!1})();return s||console.warn('No <meta name="viewport"> detected; <model-viewer> will cap pixel density at 1.'),()=>s?window.devicePixelRatio:bR})(),ME=(()=>{const s="model-viewer-debug-mode",e=new RegExp(`[?&]${s}(&|$)`);return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(e)})(),TR=(s=0)=>new Promise(e=>setTimeout(e,s)),BR=(s,e,t=null)=>new Promise(n=>{function i(r){(!t||t(r))&&(n(r),s.removeEventListener(e,i))}s.addEventListener(e,i)});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jo=globalThis&&globalThis.__decorate||function(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r};const RR=.5,LR=0,DR=1,PR=1,_a=Symbol("currentEnvironmentMap"),va=Symbol("currentBackground"),Gc=Symbol("updateEnvironment"),Nl=Symbol("cancelEnvironmentUpdate"),UR=s=>{var e,t,n;class i extends s{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=LR,this.shadowSoftness=DR,this.exposure=PR,this[e]=null,this[t]=null,this[n]=null}updated(o){super.updated(o),o.has("shadowIntensity")&&(this[Ie].setShadowIntensity(this.shadowIntensity*RR),this[mn]()),o.has("shadowSoftness")&&(this[Ie].setShadowSoftness(this.shadowSoftness),this[mn]()),o.has("exposure")&&(this[Ie].exposure=this.exposure,this[mn]()),(o.has("environmentImage")||o.has("skyboxImage"))&&this[wo]()&&this[Gc]()}hasBakedShadow(){return this[Ie].bakedShadows.size>0}async[(e=_a,t=va,n=Nl,Gc)](){const{skyboxImage:o,environmentImage:a}=this;this[Nl]!=null&&(this[Nl](),this[Nl]=null);const{textureUtils:l}=this[rt];if(l==null)return;const c=this[sr].beginActivity();try{const{environmentMap:h,skybox:u}=await l.generateEnvironmentMapAndSkybox(wE(o),a,d=>c(Ai(d,0,1)));this[_a]!==h&&(this[_a]=h,this.dispatchEvent(new CustomEvent("environment-change"))),u!=null?this[va]=u.name===h.name?h:u:this[va]=null,this[Ie].setEnvironmentAndSkybox(this[_a],this[va]),this[Ie].dispatchEvent({type:"envmap-update"})}catch(h){if(h instanceof Error)throw this[Ie].setEnvironmentAndSkybox(null,null),h}finally{c(1)}}}return jo([Fe({type:String,attribute:"environment-image"})],i.prototype,"environmentImage",void 0),jo([Fe({type:String,attribute:"skybox-image"})],i.prototype,"skyboxImage",void 0),jo([Fe({type:Number,attribute:"shadow-intensity"})],i.prototype,"shadowIntensity",void 0),jo([Fe({type:Number,attribute:"shadow-softness"})],i.prototype,"shadowSoftness",void 0),jo([Fe({type:Number})],i.prototype,"exposure",void 0),i};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=lh`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=lh`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=lh`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=lh`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

/* NOTE: This rule set is our integration surface area with the
 * :focus-visible polyfill.
 *
 * @see https://github.com/WICG/focus-visible/pull/196 */
:host([data-js-focus-visible]:focus:not(.focus-visible)),
:host([data-js-focus-visible]) :focus:not(.focus-visible) {
  outline: none;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          aria-label="View in your space">
        ${QR}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt cover centered">
    <div id="prompt" class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${NR}
      </slot>
    </div>
  </div>

  <div id="finger0" class="animated-container cover">
    <slot name="finger0" aria-hidden="true">
    </slot>
  </div>
  <div id="finger1" class="animated-container cover">
    <slot name="finger1" aria-hidden="true">
    </slot>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${FR}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`,kR=s=>{yE(OR,s)},lu=new WeakMap;class GR extends ys{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new ps(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,Rn).catch(n)}decodeDracoFile(e,t,n,i,r=_o){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(lu.has(e)){const l=lu.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),lu.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Qn;e.index&&t.setIndex(new xt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new xt(o,a);r==="color"&&this._assignVertexColorSpace(l,i.vertexColorSpace),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Rn)return;const n=new Ne;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new ps(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=HR.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function HR(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),p=f.attributes.map(m=>m.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const p=a.GetEncodedGeometryType(l);if(p===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(p===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const m={index:null,attributes:[]};for(const g in h){const A=self[u[g]];let E,_;if(c.useUniqueIDs)_=h[g],E=a.GetAttributeByUniqueId(d,_);else{if(_=a.GetAttributeId(d,o[h[g]]),_===-1)continue;E=a.GetAttribute(d,_)}const v=i(o,a,d,g,A,E);g==="color"&&(v.vertexColorSpace=c.vertexColorSpace),m.attributes.push(v)}return p===o.TRIANGULAR_MESH&&(m.index=n(o,a,d)),o.destroy(d),m}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function i(o,a,l,c,h,u){const d=u.num_components(),p=l.num_points()*d,m=p*h.BYTES_PER_ELEMENT,g=r(o,h),A=o._malloc(m);a.GetAttributeDataArrayForAllPoints(l,u,g,m,A);const E=new h(o.HEAPF32.buffer,A,p).slice();return o._free(A),{name:c,array:E,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function Xg(s,e){if(e===XS)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Wd||e===Ov){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Wd)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class VR extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jR(t)}),this.register(function(t){return new tL(t)}),this.register(function(t){return new nL(t)}),this.register(function(t){return new iL(t)}),this.register(function(t){return new YR(t)}),this.register(function(t){return new XR(t)}),this.register(function(t){return new JR(t)}),this.register(function(t){return new ZR(t)}),this.register(function(t){return new $R(t)}),this.register(function(t){return new eL(t)}),this.register(function(t){return new KR(t)}),this.register(function(t){return new WR(t)}),this.register(function(t){return new sL(t)}),this.register(function(t){return new rL(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Zd.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ps(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===bE){try{o[Je.KHR_BINARY_GLTF]=new oL(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new vL(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Je.KHR_MATERIALS_UNLIT:o[u]=new qR;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[u]=new aL(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[u]=new lL;break;case Je.KHR_MESH_QUANTIZATION:o[u]=new cL;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function zR(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class WR{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ne(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new gE(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new sA(h),c.distance=u;break;case"spot":c=new kB(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,os(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}let qR=class{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Kn}extendParams(e,t,n){const i=[];e.color=new Ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ve))}return Promise.all(i)}},$R=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},jR=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(a,a)}return Promise.all(r)}},KR=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},YR=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ve)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},XR=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},JR=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne(a[0],a[1],a[2]),Promise.all(r)}},ZR=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},eL=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:lr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ve)),Promise.all(r)}};class tL{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class nL{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class iL{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class sL{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class rL{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Tn.TRIANGLES&&c.mode!==Tn.TRIANGLE_STRIP&&c.mode!==Tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const p of u){const m=new Qe,g=new L,A=new Fn,E=new L(1,1,1),_=new xB(p.geometry,p.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&A.fromBufferAttribute(l.ROTATION,v),l.SCALE&&E.fromBufferAttribute(l.SCALE,v),_.setMatrixAt(v,m.compose(g,A,E));for(const v in l)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,l[v]);ht.prototype.copy.call(_,p),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const bE="glTF",Ko=12,Jg={JSON:1313821514,BIN:5130562};class oL{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ko),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bE)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ko,r=new DataView(e,Ko);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Jg.JSON){const c=new Uint8Array(e,Ko+o,a);this.content=n.decode(c)}else if(l===Jg.BIN){const c=Ko+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class aL{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=rf[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=rf[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=oo[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const f in d.attributes){const p=d.attributes[f],m=l[f];m!==void 0&&(p.normalized=m)}u(d)},a,c)})})}}class lL{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class cL{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class TE extends el{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,m=p-c,g=-2*f+3*d,A=f-d,E=1-g,_=A-d+u;for(let v=0;v!==a;v++){const I=o[m+v+a],S=o[m+v+l]*h,T=o[p+v+a],R=o[p+v]*h;r[v]=E*I+_*S+g*T+A*R}return r}}const hL=new Fn;class uL extends TE{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return hL.fromArray(r).normalize().toArray(r),r}}const Tn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},oo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zg={9728:bt,9729:pt,9984:Fc,9985:Vf,9986:Ta,9987:Ei},em={33071:$t,33648:za,10497:Wi},cu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ts={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dL={CUBICSPLINE:void 0,LINEAR:tr,STEP:mo},hu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fL(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new nr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),s.DefaultMaterial}function Yo(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function os(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function AL(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function pL(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gL(s){const e=s.extensions&&s.extensions[Je.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+tm(e.attributes):t=s.indices+":"+tm(s.attributes)+":"+s.mode,t}function tm(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function of(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mL(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const _L=new Qe;class vL{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new pE(this.options.manager):this.textureLoader=new WB(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ps(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Yo(r,a,i),os(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Zd.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=cu[i.type],a=oo[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new xt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=cu[i.type],c=oo[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let m,g;if(f&&f!==u){const A=Math.floor(d/f),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+A+":"+i.count;let _=t.cache.get(E);_||(m=new c(a,A*f,i.count*f/h),_=new gB(m,f/h),t.cache.add(E,_)),g=new Zf(_,l,d%f/h,p)}else a===null?m=new c(i.count*l):m=new c(a,d,i.count*l),g=new xt(m,l,p);if(i.sparse!==void 0){const A=cu.SCALAR,E=oo[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,I=new E(o[1],_,i.sparse.count*A),S=new c(o[2],v,i.sparse.count*l);a!==null&&(g=new xt(g.array.slice(),g.itemSize,g.normalized));for(let T=0,R=I.length;T<R;T++){const y=I[T];if(g.setX(y,S[T*l]),l>=2&&g.setY(y,S[T*l+1]),l>=3&&g.setZ(y,S[T*l+2]),l>=4&&g.setW(y,S[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Zg[d.magFilter]||pt,h.minFilter=Zg[d.minFilter]||Ei,h.wrapS=em[d.wrapS]||Wi,h.wrapT=em[d.wrapT]||Wi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(m){const g=new Tt(m);g.needsUpdate=!0,d(g)}),t.load(Zd.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||mL(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new cE,Zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new lE,Zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return nr}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const u=i[Je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ve)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ln);const h=r.alphaMode||hu.OPAQUE;if(h===hu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===hu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Kn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}return r.occlusionTexture!==void 0&&o!==Kn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Kn&&(a.emissive=new Ne().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&o!==Kn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ve)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),os(u,r),t.associations.set(u,{materials:e}),r.extensions&&Yo(i,u,r),u})}createUniqueName(e){const t=Xe.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return nm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=gL(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=nm(new Qn,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?fL(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){const m=h[f],g=o[f];let A;const E=c[f];if(g.mode===Tn.TRIANGLES||g.mode===Tn.TRIANGLE_STRIP||g.mode===Tn.TRIANGLE_FAN||g.mode===void 0)A=r.isSkinnedMesh===!0?new _B(m,E):new Le(m,E),A.isSkinnedMesh===!0&&A.normalizeSkinWeights(),g.mode===Tn.TRIANGLE_STRIP?A.geometry=Xg(A.geometry,Ov):g.mode===Tn.TRIANGLE_FAN&&(A.geometry=Xg(A.geometry,Wd));else if(g.mode===Tn.LINES)A=new yB(m,E);else if(g.mode===Tn.LINE_STRIP)A=new nA(m,E);else if(g.mode===Tn.LINE_LOOP)A=new IB(m,E);else if(g.mode===Tn.POINTS)A=new CB(m,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(A.geometry.morphAttributes).length>0&&pL(A,r),A.name=t.createUniqueName(r.name||"mesh_"+e),os(A,r),g.extensions&&Yo(i,A,g),t.assignFinalMaterial(A),u.push(A)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return u[0];const d=new ds;t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Qc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Lo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),os(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Qe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new tA(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,r=[],o=[],a=[],l=[],c=[];for(let h=0,u=n.channels.length;h<u;h++){const d=n.channels[h],f=n.samplers[d.sampler],p=d.target,m=p.node,g=n.parameters!==void 0?n.parameters[f.input]:f.input,A=n.parameters!==void 0?n.parameters[f.output]:f.output;p.node!==void 0&&(r.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),a.push(this.getDependency("accessor",A)),l.push(f),c.push(p))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(h){const u=h[0],d=h[1],f=h[2],p=h[3],m=h[4],g=[];for(let A=0,E=u.length;A<E;A++){const _=u[A],v=d[A],I=f[A],S=p[A],T=m[A];if(_===void 0)continue;_.updateMatrix();let R;switch(ts[T.path]){case ts.weights:R=qa;break;case ts.rotation:R=ir;break;case ts.position:case ts.scale:default:R=$a;break}const y=_.name?_.name:_.uuid,M=S.interpolation!==void 0?dL[S.interpolation]:tr,k=[];ts[T.path]===ts.weights?_.traverse(function(F){F.morphTargetInfluences&&k.push(F.name?F.name:F.uuid)}):k.push(y);let W=I.array;if(I.normalized){const F=of(W.constructor),P=new Float32Array(W.length);for(let V=0,$=W.length;V<$;V++)P[V]=W[V]*F;W=P}for(let F=0,P=k.length;F<P;F++){const V=new R(k[F]+"."+ts[T.path],v.array,W,M);S.interpolation==="CUBICSPLINE"&&(V.createInterpolant=function(G){const Q=this instanceof ir?uL:TE;return new Q(this.times,this.values,this.getValueSize()/3,G)},V.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),g.push(V)}}return new Jd(i,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,_L)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new aE:c.length>1?h=new ds:c.length===1?h=c[0]:h=new ht,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),os(h,r),r.extensions&&Yo(n,h,r),r.matrix!==void 0){const u=new Qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ds;n.name&&(r.name=i.createUniqueName(n.name)),os(r,n),n.extensions&&Yo(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Zn||d instanceof Tt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}}function EL(s,e,t){const n=e.attributes,i=new cn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const h=of(oo[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){const m=of(oo[d.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new si;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function nm(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=rf[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return os(s,e),EL(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?AL(s,e.targets,t):s})}class xL{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:i,msg:r,transfer:o}=this.queue.shift();this.workersResolve[e]=i,this.workers[e].postMessage(r,o)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const i=this._getIdleWorker();i!==-1?(this._initWorker(i),this.workerStatus|=1<<i,this.workersResolve[i]=n,this.workers[i].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const yL=0,IL=2,CL=1,SL=2,wL=0,BE=9,lA=15,RE=16,cA=22,LE=37,hA=43,DE=76,PE=83,UE=97,FE=100,NE=103,QE=109;class ML{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class Xo{constructor(e,t,n,i){this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=i,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_skip(e){return this._offset+=e,this}_scan(e,t=0){const n=this._offset;let i=0;for(;this._dataView.getUint8(this._offset)!==t&&i<e;)i++,this._offset++;return i<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,i)}}const en=[171,75,84,88,32,50,48,187,13,10,26,10];function im(s){return typeof TextDecoder<"u"?new TextDecoder().decode(s):Buffer.from(s).toString("utf8")}function bL(s){const e=new Uint8Array(s.buffer,s.byteOffset,en.length);if(e[0]!==en[0]||e[1]!==en[1]||e[2]!==en[2]||e[3]!==en[3]||e[4]!==en[4]||e[5]!==en[5]||e[6]!==en[6]||e[7]!==en[7]||e[8]!==en[8]||e[9]!==en[9]||e[10]!==en[10]||e[11]!==en[11])throw new Error("Missing KTX 2.0 identifier.");const t=new ML,n=17*Uint32Array.BYTES_PER_ELEMENT,i=new Xo(s,en.length,n,!0);t.vkFormat=i._nextUint32(),t.typeSize=i._nextUint32(),t.pixelWidth=i._nextUint32(),t.pixelHeight=i._nextUint32(),t.pixelDepth=i._nextUint32(),t.layerCount=i._nextUint32(),t.faceCount=i._nextUint32();const r=i._nextUint32();t.supercompressionScheme=i._nextUint32();const o=i._nextUint32(),a=i._nextUint32(),l=i._nextUint32(),c=i._nextUint32(),h=i._nextUint64(),u=i._nextUint64(),d=new Xo(s,en.length+n,3*r*8,!0);for(let G=0;G<r;G++)t.levels.push({levelData:new Uint8Array(s.buffer,s.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});const f=new Xo(s,o,a,!0),p={vendorId:f._skip(4)._nextUint16(),descriptorType:f._nextUint16(),versionNumber:f._nextUint16(),descriptorBlockSize:f._nextUint16(),colorModel:f._nextUint8(),colorPrimaries:f._nextUint8(),transferFunction:f._nextUint8(),flags:f._nextUint8(),texelBlockDimension:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],bytesPlane:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],samples:[]},m=(p.descriptorBlockSize/4-6)/4;for(let G=0;G<m;G++){const Q={bitOffset:f._nextUint16(),bitLength:f._nextUint8(),channelType:f._nextUint8(),samplePosition:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&Q.channelType?(Q.sampleLower=f._nextInt32(),Q.sampleUpper=f._nextInt32()):(Q.sampleLower=f._nextUint32(),Q.sampleUpper=f._nextUint32()),p.samples[G]=Q}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(p);const g=new Xo(s,l,c,!0);for(;g._offset<c;){const G=g._nextUint32(),Q=g._scan(G),J=im(Q),le=g._scan(G-Q.byteLength);t.keyValue[J]=J.match(/^ktx/i)?im(le):le,g._offset%4&&g._skip(4-g._offset%4)}if(u<=0)return t;const A=new Xo(s,h,u,!0),E=A._nextUint16(),_=A._nextUint16(),v=A._nextUint32(),I=A._nextUint32(),S=A._nextUint32(),T=A._nextUint32(),R=[];for(let G=0;G<r;G++)R.push({imageFlags:A._nextUint32(),rgbSliceByteOffset:A._nextUint32(),rgbSliceByteLength:A._nextUint32(),alphaSliceByteOffset:A._nextUint32(),alphaSliceByteLength:A._nextUint32()});const y=h+A._offset,M=y+v,k=M+I,W=k+S,F=new Uint8Array(s.buffer,s.byteOffset+y,v),P=new Uint8Array(s.buffer,s.byteOffset+M,I),V=new Uint8Array(s.buffer,s.byteOffset+k,S),$=new Uint8Array(s.buffer,s.byteOffset+W,T);return t.globalData={endpointCount:E,selectorCount:_,imageDescs:R,endpointsData:F,selectorsData:P,tablesData:V,extendedData:$},t}let uu,Ni,af;const du={env:{emscripten_notify_memory_growth:function(s){af=new Uint8Array(Ni.exports.memory.buffer)}}};class TL{init(){return uu||(uu=typeof fetch<"u"?fetch("data:application/wasm;base64,"+sm).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,du)).then(this._init):WebAssembly.instantiate(Buffer.from(sm,"base64"),du).then(this._init),uu)}_init(e){Ni=e.instance,du.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Ni)throw new Error("ZSTDDecoder: Await .init() before decoding.");const n=e.byteLength,i=Ni.exports.malloc(n);af.set(e,i),t=t||Number(Ni.exports.ZSTD_findDecompressedSize(i,n));const r=Ni.exports.malloc(t),o=Ni.exports.ZSTD_decompress(r,t,i,n),a=af.slice(r,r+o);return Ni.exports.free(i),Ni.exports.free(r),a}}const sm="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",fu=new WeakMap;let Au=0,pu;class pi extends ys{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new xL,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}detectSupport(e){return this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},e.capabilities.isWebGL2&&(this.workerConfig.etc1Supported=!1),this}init(){if(!this.transcoderPending){const e=new ps(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),n=new ps(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const i=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,i]).then(([r,o])=>{const a=pi.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(pi.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(pi.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(pi.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=o,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),c})}),Au>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Au++}return this.transcoderPending}load(e,t,n,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new ps(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials),r.load(e,o=>{if(fu.has(o))return fu.get(o).promise.then(t).catch(i);this._createTexture(o).then(a=>t?t(a):null).catch(i)},n,i)}_createTextureFrom(e,t){const{mipmaps:n,width:i,height:r,format:o,type:a,error:l,dfdTransferFn:c,dfdFlags:h}=e;if(a==="error")return Promise.reject(l);const u=t.layerCount>1?new wB(n,i,r,t.layerCount,o,an):new hE(n,i,r,o,an);return u.minFilter=n.length===1?pt:Ei,u.magFilter=pt,u.generateMipmaps=!1,u.needsUpdate=!0,u.encoding=c===SL?Ve:Kt,u.premultiplyAlpha=!!(h&CL),u}async _createTexture(e,t={}){const n=bL(new Uint8Array(e));if(n.vkFormat!==wL)return RL(n);const i=t,r=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:i},[e])).then(o=>this._createTextureFrom(o.data,n));return fu.set(e,{promise:r}),r}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Au--,this}}pi.BasisFormat={ETC1S:0,UASTC_4x4:1};pi.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16};pi.EngineFormat={RGBAFormat:wt,RGBA_ASTC_4x4_Format:zd,RGBA_BPTC_Format:gc,RGBA_ETC2_EAC_Format:Vd,RGBA_PVRTC_4BPPV1_Format:Gd,RGBA_S3TC_DXT5_Format:pc,RGB_ETC1_Format:Nv,RGB_ETC2_Format:Hd,RGB_PVRTC_4BPPV1_Format:kd,RGB_S3TC_DXT1_Format:Ac};pi.BasisWorker=function(){let s,e,t;const n=_EngineFormat,i=_TranscoderFormat,r=_BasisFormat;self.addEventListener("message",function(p){const m=p.data;switch(m.type){case"init":s=m.config,o(m.transcoderBinary);break;case"transcode":e.then(()=>{try{const{width:g,height:A,hasAlpha:E,mipmaps:_,format:v,dfdTransferFn:I,dfdFlags:S}=a(m.buffer),T=[];for(let R=0;R<_.length;++R)T.push(_[R].data.buffer);self.postMessage({type:"transcode",id:m.id,width:g,height:A,hasAlpha:E,mipmaps:_,format:v,dfdTransferFn:I,dfdFlags:S},T)}catch(g){console.error(g),self.postMessage({type:"error",id:m.id,error:g.message})}});break}});function o(p){e=new Promise(m=>{t={wasmBinary:p,onRuntimeInitialized:m},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function a(p){const m=new t.KTX2File(new Uint8Array(p));function g(){m.close(),m.delete()}if(!m.isValid())throw g(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const A=m.isUASTC()?r.UASTC_4x4:r.ETC1S,E=m.getWidth(),_=m.getHeight(),v=m.getLayers()||1,I=m.getLevels(),S=m.getHasAlpha(),T=m.getDFDTransferFunc(),R=m.getDFDFlags(),{transcoderFormat:y,engineFormat:M}=u(A,E,_,S);if(!E||!_||!I)throw g(),new Error("THREE.KTX2Loader:	Invalid texture");if(!m.startTranscoding())throw g(),new Error("THREE.KTX2Loader: .startTranscoding failed");const k=[];for(let W=0;W<I;W++){const F=[];let P,V;for(let $=0;$<v;$++){const G=m.getImageLevelInfo(W,$,0);P=G.origWidth<4?G.origWidth:G.width,V=G.origHeight<4?G.origHeight:G.height;const Q=new Uint8Array(m.getImageTranscodedSizeInBytes(W,$,0,y));if(!m.transcodeImage(Q,W,$,0,y,0,-1,-1))throw g(),new Error("THREE.KTX2Loader: .transcodeImage failed.");F.push(Q)}k.push({data:f(F),width:P,height:V})}return g(),{width:E,height:_,hasAlpha:S,mipmaps:k,format:M,dfdTransferFn:T,dfdFlags:R}}const l=[{if:"astcSupported",basisFormat:[r.UASTC_4x4],transcoderFormat:[i.ASTC_4x4,i.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.BC7_M5,i.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.BC1,i.BC3],engineFormat:[n.RGB_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.ETC1,i.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.ETC1],engineFormat:[n.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[i.PVRTC1_4_RGB,i.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],c=l.sort(function(p,m){return p.priorityETC1S-m.priorityETC1S}),h=l.sort(function(p,m){return p.priorityUASTC-m.priorityUASTC});function u(p,m,g,A){let E,_;const v=p===r.ETC1S?c:h;for(let I=0;I<v.length;I++){const S=v[I];if(s[S.if]&&S.basisFormat.includes(p)&&!(A&&S.transcoderFormat.length<2)&&!(S.needsPowerOfTwo&&!(d(m)&&d(g))))return E=S.transcoderFormat[A?1:0],_=S.engineFormat[A?1:0],{transcoderFormat:E,engineFormat:_}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),E=i.RGBA32,_=n.RGBAFormat,{transcoderFormat:E,engineFormat:_}}function d(p){return p<=2?!0:(p&p-1)===0&&p!==0}function f(p){let m=0;for(const E of p)m+=E.byteLength;const g=new Uint8Array(m);let A=0;for(const E of p)g.set(E,A),A+=E.byteLength;return g}};const rm={[QE]:wt,[UE]:wt,[LE]:wt,[hA]:wt,[NE]:ga,[PE]:ga,[RE]:ga,[cA]:ga,[FE]:pa,[DE]:pa,[lA]:pa,[BE]:pa},gu={[QE]:hn,[UE]:un,[LE]:an,[hA]:an,[NE]:hn,[PE]:un,[RE]:an,[cA]:an,[FE]:hn,[DE]:un,[lA]:an,[BE]:an},BL={[hA]:Ve,[cA]:Ve,[lA]:Ve};async function RL(s){const{vkFormat:e,pixelWidth:t,pixelHeight:n,pixelDepth:i}=s;if(rm[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");const r=s.levels[0];let o,a;if(s.supercompressionScheme===yL)o=r.levelData;else if(s.supercompressionScheme===IL)pu||(pu=new Promise(async c=>{const h=new TL;await h.init(),c(h)})),o=(await pu).decode(r.levelData,r.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");gu[e]===hn?a=new Float32Array(o.buffer,o.byteOffset,o.byteLength/Float32Array.BYTES_PER_ELEMENT):gu[e]===un?a=new Uint16Array(o.buffer,o.byteOffset,o.byteLength/Uint16Array.BYTES_PER_ELEMENT):a=o;const l=i===0?new eA(a,t,n):new $v(a,t,n,i);return l.type=gu[e],l.format=rm[e],l.encoding=BL[e]||Kt,l.needsUpdate=!0,Promise.resolve(l)}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var om,am;const Vn=Symbol("retainerCount"),Ri=Symbol("recentlyUsed"),Ql=Symbol("evict"),Jo=Symbol("evictionThreshold"),mu=Symbol("cache");class LL{constructor(e,t=5){this[om]=new Map,this[am]=[],this[mu]=e,this[Jo]=t}set evictionThreshold(e){this[Jo]=e,this[Ql]()}get evictionThreshold(){return this[Jo]}get cache(){return this[mu]}retainerCount(e){return this[Vn].get(e)||0}reset(){this[Vn].clear(),this[Ri]=[]}retain(e){this[Vn].has(e)||this[Vn].set(e,0),this[Vn].set(e,this[Vn].get(e)+1);const t=this[Ri].indexOf(e);t!==-1&&this[Ri].splice(t,1),this[Ri].unshift(e),this[Ql]()}release(e){this[Vn].has(e)&&this[Vn].set(e,Math.max(this[Vn].get(e)-1,0)),this[Ql]()}[(om=Vn,am=Ri,Ql)](){if(!(this[Ri].length<this[Jo]))for(let e=this[Ri].length-1;e>=this[Jo];--e){const t=this[Ri][e];this[Vn].get(t)===0&&(this[mu].delete(t),this[Ri].splice(e,1))}}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL=s=>{const e=[],t=new Set;for(const n of s){let i=n,r=0;for(;t.has(i);)i=n+"."+ ++r;t.add(i),e.push(i)}return e},PL=s=>{const e=new Map;for(const t of s.mappings)for(const n of t.variants)e.set(n,{material:null,gltfMaterialIndex:t.material});return e};class UL{constructor(e){this.parser=e,this.name="KHR_materials_variants"}afterRoot(e){const t=this.parser,n=t.json;if(n.extensions===void 0||n.extensions[this.name]===void 0)return null;const r=n.extensions[this.name].variants||[],o=DL(r.map(a=>a.name));for(const a of e.scenes)a.traverse(l=>{const c=l;if(!c.isMesh)return;const h=t.associations.get(c);if(h==null||h.meshes==null||h.primitives==null)return;const p=n.meshes[h.meshes].primitives[h.primitives].extensions;!p||!p[this.name]||(c.userData.variantMaterials=PL(p[this.name]))});return e.userData.variants=o,Promise.resolve()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var OE,lm;Tt.DEFAULT_ANISOTROPY=4;const FL=(s,e,t=()=>{})=>{const n=i=>{const r=i.loaded/i.total;t(Math.max(0,Math.min(1,isFinite(r)?r:1)))};return new Promise((i,r)=>{e.load(s,i,n,r)})},NL=s=>new Promise((e,t)=>{const n=document.createElement("script");document.body.appendChild(n),n.onload=e,n.onerror=t,n.async=!0,n.src=s}),Li=new Map,_u=new Map;let cm;const hm=new GR;let um;const vu=new pi;let Eu,xu;const ks=Symbol("loader"),as=Symbol("evictionPolicy"),dm=Symbol("GLTFInstance");class Pt extends Nn{constructor(e){super(),this[lm]=new VR().register(t=>new UL(t)),this[dm]=e,this[ks].setDRACOLoader(hm),this[ks].setKTX2Loader(vu)}static setDRACODecoderLocation(e){cm=e,hm.setDecoderPath(e)}static getDRACODecoderLocation(){return cm}static setKTX2TranscoderLocation(e){um=e,vu.setTranscoderPath(e)}static getKTX2TranscoderLocation(){return um}static setMeshoptDecoderLocation(e){Eu!==e&&(Eu=e,xu=NL(e).then(()=>MeshoptDecoder.ready).then(()=>MeshoptDecoder))}static getMeshoptDecoderLocation(){return Eu}static initializeKTX2Loader(e){vu.detectSupport(e)}static get cache(){return Li}static clearCache(){Li.forEach((e,t)=>{this.delete(t)}),this[as].reset()}static has(e){return Li.has(e)}static async delete(e){if(!this.has(e))return;const t=Li.get(e);_u.delete(e),Li.delete(e),(await t).dispose()}static hasFinishedLoading(e){return!!_u.get(e)}get[(OE=as,lm=ks,as)](){return this.constructor[as]}async preload(e,t,n=()=>{}){if(this[ks].setWithCredentials(Pt.withCredentials),this.dispatchEvent({type:"preload",element:t,src:e}),!Li.has(e)){xu!=null&&this[ks].setMeshoptDecoder(await xu);const i=FL(e,this[ks],a=>{n(a*.8)}),r=this[dm],o=i.then(a=>r.prepare(a)).then(a=>(n(.9),new r(a))).catch(a=>(console.error(a),new r));Li.set(e,o)}await Li.get(e),_u.set(e,!0),n&&n(1)}async load(e,t,n=()=>{}){await this.preload(e,t,n);const r=await(await Li.get(e)).clone();return this[as].retain(e),r.dispose=()=>{this[as].release(e)},r}}Pt[OE]=new LL(Pt);class QL extends ht{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ze(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const br=new L,fm=new Qe,Am=new Qe,pm=new L,gm=new L;class OL{constructor(e={}){const t=this;let n,i,r,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:i}},this.render=function(f,p){f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),fm.copy(p.matrixWorldInverse),Am.multiplyMatrices(p.projectionMatrix,fm),c(f,f,p),d(f)},this.setSize=function(f,p){n=f,i=p,r=n/2,o=i/2,l.style.width=f+"px",l.style.height=p+"px"};function c(f,p,m){if(f.isCSS2DObject){br.setFromMatrixPosition(f.matrixWorld),br.applyMatrix4(Am);const g=f.visible===!0&&br.z>=-1&&br.z<=1&&f.layers.test(m.layers)===!0;if(f.element.style.display=g===!0?"":"none",g===!0){f.onBeforeRender(t,p,m);const E=f.element;E.style.transform="translate("+-100*f.center.x+"%,"+-100*f.center.y+"%)translate("+(br.x*r+r)+"px,"+(-br.y*o+o)+"px)",E.parentNode!==l&&l.appendChild(E),f.onAfterRender(t,p,m)}const A={distanceToCameraSquared:h(m,f)};a.objects.set(f,A)}for(let g=0,A=f.children.length;g<A;g++)c(f.children[g],p,m)}function h(f,p){return pm.setFromMatrixPosition(f.matrixWorld),gm.setFromMatrixPosition(p.matrixWorld),pm.distanceToSquared(gm)}function u(f){const p=[];return f.traverse(function(m){m.isCSS2DObject&&p.push(m)}),p}function d(f){const p=u(f).sort(function(g,A){if(g.renderOrder!==A.renderOrder)return A.renderOrder-g.renderOrder;const E=a.objects.get(g).distanceToCameraSquared,_=a.objects.get(A).distanceToCameraSquared;return E-_}),m=p.length;for(let g=0,A=p.length;g<A;g++)p[g].element.style.zIndex=m-g}}}function Ol(s,e,t){let n=t;const i=new L;return s.updateWorldMatrix(!0,!0),s.traverseVisible(r=>{const{geometry:o}=r;if(o!==void 0){const{position:a}=o.attributes;if(a!==void 0)for(let l=0,c=a.count;l<c;l++)r.isMesh?r.getVertexPosition(l,i):i.fromBufferAttribute(a,l),r.isSkinnedMesh||i.applyMatrix4(r.matrixWorld),n=e(n,i)}}),n}const mm={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class uA{constructor(){this.pluginCallbacks=[],this.register(function(e){return new KL(e)}),this.register(function(e){return new YL(e)}),this.register(function(e){return new ZL(e)}),this.register(function(e){return new eD(e)}),this.register(function(e){return new tD(e)}),this.register(function(e){return new nD(e)}),this.register(function(e){return new XL(e)}),this.register(function(e){return new JL(e)}),this.register(function(e){return new iD(e)}),this.register(function(e){return new sD(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){const r=new jL,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.write(e,t,i).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,i,r,t)})}}const Ke={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},yu="KHR_mesh_quantization",Sn={};Sn[bt]=Ke.NEAREST;Sn[Fc]=Ke.NEAREST_MIPMAP_NEAREST;Sn[Ta]=Ke.NEAREST_MIPMAP_LINEAR;Sn[pt]=Ke.LINEAR;Sn[Vf]=Ke.LINEAR_MIPMAP_NEAREST;Sn[Ei]=Ke.LINEAR_MIPMAP_LINEAR;Sn[$t]=Ke.CLAMP_TO_EDGE;Sn[Wi]=Ke.REPEAT;Sn[za]=Ke.MIRRORED_REPEAT;const _m={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},kL=new Ne,vm=12,GL=1179937895,HL=2,Em=8,VL=1313821514,zL=5130562;function Ea(s,e){return s.length===e.length&&s.every(function(t,n){return t===e[n]})}function WL(s){return new TextEncoder().encode(s).buffer}function qL(s){return Ea(s.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function $L(s,e,t){const n={min:new Array(s.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(s.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let i=e;i<e+t;i++)for(let r=0;r<s.itemSize;r++){let o;s.itemSize>4?o=s.array[i*s.itemSize+r]:(r===0?o=s.getX(i):r===1?o=s.getY(i):r===2?o=s.getZ(i):r===3&&(o=s.getW(i)),s.normalized===!0&&(o=Qc.normalize(o,s.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function kE(s){return Math.ceil(s/4)*4}function Iu(s,e=0){const t=kE(s.byteLength);if(t!==s.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(s)),e!==0)for(let i=s.byteLength;i<t;i++)n[i]=e;return n.buffer}return s}function xm(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function ym(s,e){if(s.toBlob!==void 0)return new Promise(n=>s.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),s.convertToBlob({type:e,quality:t})}class jL{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);const i=this,r=i.buffers,o=i.json;n=i.options;const a=i.extensionsUsed,l=i.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),u=Object.keys(l);if(h.length>0&&(o.extensionsUsed=h),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),n.binary===!0){const d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){const f=Iu(d.result),p=new DataView(new ArrayBuffer(Em));p.setUint32(0,f.byteLength,!0),p.setUint32(4,zL,!0);const m=Iu(WL(JSON.stringify(o)),32),g=new DataView(new ArrayBuffer(Em));g.setUint32(0,m.byteLength,!0),g.setUint32(4,VL,!0);const A=new ArrayBuffer(vm),E=new DataView(A);E.setUint32(0,GL,!0),E.setUint32(4,HL,!0);const _=vm+g.byteLength+m.byteLength+p.byteLength+f.byteLength;E.setUint32(8,_,!0);const v=new Blob([A,g,m,p,f],{type:"application/octet-stream"}),I=new FileReader;I.readAsArrayBuffer(v),I.onloadend=function(){t(I.result)}}}else if(o.buffers&&o.buffers.length>0){const d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){const f=d.result;o.buffers[0].uri=f,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,i=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],i[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const i=new Map;i.set(!0,this.uid++),i.set(!1,this.uid++),this.uids.set(e,i)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new L;for(let i=0,r=e.count;i<r;i++)if(Math.abs(n.fromBufferAttribute(e,i).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),i=new L;for(let r=0,o=n.count;r<o;r++)i.fromBufferAttribute(n,r),i.x===0&&i.y===0&&i.z===0?i.setX(1):i.normalize(),n.setXYZ(r,i.x,i.y,i.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const i={};(t.offset.x!==0||t.offset.y!==0)&&(i.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(i.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(i.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=i,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;function n(f){return f.encoding===Ve?function(m){return m<.04045?m*.0773993808:Math.pow(m*.9478672986+.0521327014,2.4)}:function(m){return m}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures.");const i=e?e.image:null,r=t?t.image:null,o=Math.max(i?i.width:0,r?r.width:0),a=Math.max(i?i.height:0,r?r.height:0),l=xm();l.width=o,l.height=a;const c=l.getContext("2d");c.fillStyle="#00ffff",c.fillRect(0,0,o,a);const h=c.getImageData(0,0,o,a);if(i){c.drawImage(i,0,0,o,a);const f=n(e),p=c.getImageData(0,0,o,a).data;for(let m=2;m<p.length;m+=4)h.data[m]=f(p[m]/256)*256}if(r){c.drawImage(r,0,0,o,a);const f=n(t),p=c.getImageData(0,0,o,a).data;for(let m=1;m<p.length;m+=4)h.data[m]=f(p[m]/256)*256}c.putImageData(h,0,0);const d=(e||t).clone();return d.source=new jf(l),d.encoding=Kt,d}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,i,r){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case Ke.BYTE:case Ke.UNSIGNED_BYTE:a=1;break;case Ke.SHORT:case Ke.UNSIGNED_SHORT:a=2;break;default:a=4}const l=kE(i*e.itemSize*a),c=new DataView(new ArrayBuffer(l));let h=0;for(let f=n;f<n+i;f++)for(let p=0;p<e.itemSize;p++){let m;e.itemSize>4?m=e.array[f*e.itemSize+p]:(p===0?m=e.getX(f):p===1?m=e.getY(f):p===2?m=e.getZ(f):p===3&&(m=e.getW(f)),e.normalized===!0&&(m=Qc.normalize(m,e.array))),t===Ke.FLOAT?c.setFloat32(h,m,!0):t===Ke.INT?c.setInt32(h,m,!0):t===Ke.UNSIGNED_INT?c.setUint32(h,m,!0):t===Ke.SHORT?c.setInt16(h,m,!0):t===Ke.UNSIGNED_SHORT?c.setUint16(h,m,!0):t===Ke.BYTE?c.setInt8(h,m):t===Ke.UNSIGNED_BYTE&&c.setUint8(h,m),h+=a}const u={buffer:this.processBuffer(c.buffer),byteOffset:this.byteOffset,byteLength:l};return r!==void 0&&(u.target=r),r===Ke.ARRAY_BUFFER&&(u.byteStride=e.itemSize*a),this.byteOffset+=l,o.bufferViews.push(u),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(i){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const o=Iu(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,i(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,i){const r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(e.array.constructor===Float32Array)a=Ke.FLOAT;else if(e.array.constructor===Int32Array)a=Ke.INT;else if(e.array.constructor===Uint32Array)a=Ke.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=Ke.SHORT;else if(e.array.constructor===Uint16Array)a=Ke.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=Ke.BYTE;else if(e.array.constructor===Uint8Array)a=Ke.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type.");if(n===void 0&&(n=0),i===void 0&&(i=e.count),i===0)return null;const l=$L(e,n,i);let c;t!==void 0&&(c=e===t.index?Ke.ELEMENT_ARRAY_BUFFER:Ke.ARRAY_BUFFER);const h=this.processBufferView(e,a,n,i,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:i,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,i="image/png"){if(e!==null){const r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(e)||o.images.set(e,{});const h=o.images.get(e),u=i+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);const d={mimeType:i},f=xm();f.width=Math.min(e.width,l.maxTextureSize),f.height=Math.min(e.height,l.maxTextureSize);const p=f.getContext("2d");if(n===!0&&(p.translate(0,f.height),p.scale(1,-1)),e.data!==void 0){t!==wt&&console.error("GLTFExporter: Only RGBAFormat is supported."),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const g=new Uint8ClampedArray(e.height*e.width*4);for(let A=0;A<g.length;A+=4)g[A+0]=e.data[A+0],g[A+1]=e.data[A+1],g[A+2]=e.data[A+2],g[A+3]=e.data[A+3];p.putImageData(new ImageData(g,e.width,e.height),0,0)}else p.drawImage(e,0,0,f.width,f.height);l.binary===!0?c.push(ym(f,i).then(g=>r.processBufferViewImage(g)).then(g=>{d.bufferView=g})):f.toDataURL!==void 0?d.uri=f.toDataURL(i):c.push(ym(f,i).then(g=>new FileReader().readAsDataURL(g)).then(g=>{d.uri=g}));const m=a.images.push(d)-1;return h[u]=m,m}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:Sn[e.magFilter],minFilter:Sn[e.minFilter],wrapS:Sn[e.wrapS],wrapT:Sn[e.wrapT]};return t.samplers.push(n)-1}processTexture(e){const t=this.cache,n=this.json;if(t.textures.has(e))return t.textures.get(e);n.textures||(n.textures=[]);let i=e.userData.mimeType;i==="image/webp"&&(i="image/png");const r={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,i)};e.name&&(r.name=e.name),this._invokeAll(function(a){a.writeTexture&&a.writeTexture(e,r)});const o=n.textures.push(r)-1;return t.textures.set(e,o),o}processMaterial(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const i={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(Ea(r,[1,1,1,1])||(i.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(i.pbrMetallicRoughness.metallicFactor=e.metalness,i.pbrMetallicRoughness.roughnessFactor=e.roughness):(i.pbrMetallicRoughness.metallicFactor=.5,i.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){const a=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),l={index:this.processTexture(a)};this.applyTextureTransform(l,a),i.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const a={index:this.processTexture(e.map)};this.applyTextureTransform(a,e.map),i.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){const a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(i.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const c={index:this.processTexture(e.emissiveMap)};this.applyTextureTransform(c,e.emissiveMap),i.emissiveTexture=c}}if(e.normalMap){const a={index:this.processTexture(e.normalMap)};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),i.normalTexture=a}if(e.aoMap){const a={index:this.processTexture(e.aoMap),texCoord:1};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),i.occlusionTexture=a}e.transparent?i.alphaMode="BLEND":e.alphaTest>0&&(i.alphaMode="MASK",i.alphaCutoff=e.alphaTest),e.side===ln&&(i.doubleSided=!0),e.name!==""&&(i.name=e.name),this.serializeUserData(e,i),this._invokeAll(function(a){a.writeMaterial&&a.writeMaterial(e,i)});const o=n.materials.push(i)-1;return t.materials.set(e,o),o}processMesh(e){const t=this.cache,n=this.json,i=[e.geometry.uuid];if(Array.isArray(e.material))for(let _=0,v=e.material.length;_<v;_++)i.push(e.material[_].uuid);else i.push(e.material.uuid);const r=i.join(":");if(t.meshes.has(r))return t.meshes.get(r);const o=e.geometry;let a;e.isLineSegments?a=Ke.LINES:e.isLineLoop?a=Ke.LINE_LOOP:e.isLine?a=Ke.LINE_STRIP:e.isPoints?a=Ke.POINTS:a=e.material.wireframe?Ke.LINES:Ke.TRIANGLES;const l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv2:"TEXCOORD_1",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let p=null;for(let _ in o.attributes){if(_.slice(0,5)==="morph")continue;const v=o.attributes[_];if(_=d[_]||_.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(_)||(_="_"+_),t.attributes.has(this.getUID(v))){c[_]=t.attributes.get(this.getUID(v));continue}p=null;const S=v.array;_==="JOINTS_0"&&!(S instanceof Uint16Array)&&!(S instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),p=new xt(new Uint16Array(S),v.itemSize,v.normalized));const T=this.processAccessor(p||v,o);T!==null&&(_.startsWith("_")||this.detectMeshQuantization(_,v),c[_]=T,t.attributes.set(this.getUID(v),T))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const _=[],v=[],I={};if(e.morphTargetDictionary!==void 0)for(const S in e.morphTargetDictionary)I[e.morphTargetDictionary[S]]=S;for(let S=0;S<e.morphTargetInfluences.length;++S){const T={};let R=!1;for(const y in o.morphAttributes){if(y!=="position"&&y!=="normal"){R||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),R=!0);continue}const M=o.morphAttributes[y][S],k=y.toUpperCase(),W=o.attributes[y];if(t.attributes.has(this.getUID(M,!0))){T[k]=t.attributes.get(this.getUID(M,!0));continue}const F=M.clone();if(!o.morphTargetsRelative)for(let P=0,V=M.count;P<V;P++)for(let $=0;$<M.itemSize;$++)$===0&&F.setX(P,M.getX(P)-W.getX(P)),$===1&&F.setY(P,M.getY(P)-W.getY(P)),$===2&&F.setZ(P,M.getZ(P)-W.getZ(P)),$===3&&F.setW(P,M.getW(P)-W.getW(P));T[k]=this.processAccessor(F,o),t.attributes.set(this.getUID(W,!0),T[k])}u.push(T),_.push(e.morphTargetInfluences[S]),e.morphTargetDictionary!==void 0&&v.push(I[S])}l.weights=_,v.length>0&&(l.extras={},l.extras.targetNames=v)}const m=Array.isArray(e.material);if(m&&o.groups.length===0)return null;const g=m?e.material:[e.material],A=m?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let _=0,v=A.length;_<v;_++){const I={mode:a,attributes:c};if(this.serializeUserData(o,I),u.length>0&&(I.targets=u),o.index!==null){let T=this.getUID(o.index);(A[_].start!==void 0||A[_].count!==void 0)&&(T+=":"+A[_].start+":"+A[_].count),t.attributes.has(T)?I.indices=t.attributes.get(T):(I.indices=this.processAccessor(o.index,o,A[_].start,A[_].count),t.attributes.set(T,I.indices)),I.indices===null&&delete I.indices}const S=this.processMaterial(g[A[_].materialIndex]);S!==null&&(I.material=S),h.push(I)}l.primitives=h,n.meshes||(n.meshes=[]),this._invokeAll(function(_){_.writeMesh&&_.writeMesh(e,l)});const E=n.meshes.push(l)-1;return t.meshes.set(r,E),E}detectMeshQuantization(e,t){if(this.extensionsUsed[yu])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const i=e.split("_",1)[0];mm[i]&&mm[i].includes(n)&&(this.extensionsUsed[yu]=!0,this.extensionsRequired[yu]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,i={type:n?"orthographic":"perspective"};return n?i.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:i.perspective={aspectRatio:e.aspect,yfov:Qc.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(i.name=e.type),t.cameras.push(i)-1}processAnimation(e,t){const n=this.json,i=this.nodeMap;n.animations||(n.animations=[]),e=uA.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,o=[],a=[];for(let l=0;l<r.length;++l){const c=r[l],h=Xe.parseTrackName(c.name);let u=Xe.findNode(t,h.nodeName);const d=_m[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!d)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name),null;const f=1;let p=c.values.length/c.times.length;d===_m.morphTargetInfluences&&(p/=u.morphTargetInfluences.length);let m;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(m="CUBICSPLINE",p/=3):c.getInterpolation()===mo?m="STEP":m="LINEAR",a.push({input:this.processAccessor(new xt(c.times,f)),output:this.processAccessor(new xt(c.values,p)),interpolation:m}),o.push({sampler:a.length-1,target:{node:i.get(u),path:d}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:a,channels:o}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,i=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const o=e.skeleton.bones[0];if(o===void 0)return null;const a=[],l=new Float32Array(r.bones.length*16),c=new Qe;for(let u=0;u<r.bones.length;++u)a.push(n.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new xt(l,16)),joints:a,skeleton:n.get(o)}),i.skin=t.skins.length-1}processNode(e){const t=this.json,n=this.options,i=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();Ea(a,[0,0,0,1])||(r.rotation=a),Ea(l,[0,0,0])||(r.translation=l),Ea(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),qL(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const a=this.processMesh(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const a=[];for(let l=0,c=e.children.length;l<c;l++){const h=e.children[l];if(h.visible||n.onlyVisible===!1){const u=this.processNode(h);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}this._invokeAll(function(a){a.writeNode&&a.writeNode(e,r)});const o=t.nodes.push(r)-1;return i.set(e,o),o}processScene(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const i={};e.name!==""&&(i.name=e.name),t.scenes.push(i);const r=[];for(let o=0,a=e.children.length;o<a;o++){const l=e.children[o];if(l.visible||n.onlyVisible===!1){const c=this.processNode(l);c!==null&&r.push(c)}}r.length>0&&(i.nodes=r),this.serializeUserData(e,i)}processObjects(e){const t=new _s;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);this.processScene(t)}processInput(e){const t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(i){i.beforeParse&&i.beforeParse(e)});const n=[];for(let i=0;i<e.length;i++)e[i]instanceof _s?this.processScene(e[i]):n.push(e[i]);n.length>0&&this.processObjects(n);for(let i=0;i<this.skins.length;++i)this.processSkin(this.skins[i]);for(let i=0;i<t.animations.length;++i)this.processAnimation(t.animations[i],e[0]);this._invokeAll(function(i){i.afterParse&&i.afterParse(e)})}_invokeAll(e){for(let t=0,n=this.plugins.length;t<n;t++)e(this.plugins[t])}}class KL{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,i=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(e.penumbra-1)*e.angle*-1,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(i.extensions=i.extensions||{},i.extensions[this.name]={lights:[]},r[this.name]=!0);const a=i.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}}class YL{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,t){if(!e.isMeshBasicMaterial)return;const i=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},i[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class XL{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const o={index:n.processTexture(e.clearcoatMap)};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const o={index:n.processTexture(e.clearcoatRoughnessMap)};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){const o={index:n.processTexture(e.clearcoatNormalMap)};n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class JL{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const o={index:n.processTexture(e.iridescenceMap)};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const o={index:n.processTexture(e.iridescenceThicknessMap)};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class ZL{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const o={index:n.processTexture(e.transmissionMap)};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class eD{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,i=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const o={index:n.processTexture(e.thicknessMap)};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}r.attenuationDistance=e.attenuationDistance,r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class tD{constructor(e){this.writer=e,this.name="KHR_materials_ior"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const i=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class nD{constructor(e){this.writer=e,this.name="KHR_materials_specular"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(kL)&&!e.specularIntensityMap&&!e.specularColorTexture)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.specularIntensityMap){const o={index:n.processTexture(e.specularIntensityMap)};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){const o={index:n.processTexture(e.specularColorMap)};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class iD{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,i=n.extensionsUsed,r={};if(e.sheenRoughnessMap){const o={index:n.processTexture(e.sheenRoughnessMap)};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){const o={index:n.processTexture(e.sheenColorMap)};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}class sD{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const i=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,i[this.name]=!0}}uA.Utils={insertKeyframe:function(s,e){const n=s.getValueSize(),i=new s.TimeBufferType(s.times.length+1),r=new s.ValueBufferType(s.values.length+n),o=s.createInterpolant(new s.ValueBufferType(n));let a;if(s.times.length===0){i[0]=e;for(let l=0;l<n;l++)r[l]=0;a=0}else if(e<s.times[0]){if(Math.abs(s.times[0]-e)<.001)return 0;i[0]=e,i.set(s.times,1),r.set(o.evaluate(e),0),r.set(s.values,n),a=0}else if(e>s.times[s.times.length-1]){if(Math.abs(s.times[s.times.length-1]-e)<.001)return s.times.length-1;i[i.length-1]=e,i.set(s.times,0),r.set(s.values,0),r.set(o.evaluate(e),s.values.length),a=i.length-1}else for(let l=0;l<s.times.length;l++){if(Math.abs(s.times[l]-e)<.001)return l;if(s.times[l]<e&&s.times[l+1]>e){i.set(s.times.slice(0,l+1),0),i[l+1]=e,i.set(s.times.slice(l+1),l+2),r.set(s.values.slice(0,(l+1)*n),0),r.set(o.evaluate(e),(l+1)*n),r.set(s.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return s.times=i,s.values=r,a},mergeMorphTargetTracks:function(s,e){const t=[],n={},i=s.tracks;for(let r=0;r<i.length;++r){let o=i[r];const a=Xe.parseTrackName(o.name),l=Xe.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(tr)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(n[l.uuid]===void 0){u=o.clone();const f=new u.ValueBufferType(c*u.times.length);for(let p=0;p<u.times.length;p++)f[p*c+h]=u.values[p];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=f,n[l.uuid]=u,t.push(u);continue}const d=o.createInterpolant(new o.ValueBufferType(1));u=n[l.uuid];for(let f=0;f<u.times.length;f++)u.values[f*c+h]=d.evaluate(u.times[f]);for(let f=0;f<o.times.length;f++){const p=this.insertKeyframe(u,o.times[f]);u.values[p*c+h]=o.values[f]}}return s.tracks=t,s}};/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=s=>s.material!==void 0&&s.userData&&s.userData.variantMaterials&&!!Array.from(s.userData.variantMaterials.values()).filter(e=>yc(e.material)),yc=s=>s&&s.isMaterial&&!Array.isArray(s);class rD{constructor(e){this.writer=e,this.name="KHR_materials_variants",this.variantNames=[]}beforeParse(e){const t=new Set;for(const n of e)n.traverse(i=>{if(!Im(i))return;const r=i.userData.variantMaterials,o=i.userData.variantData;for(const[a,l]of o){const c=r.get(l.index);c&&yc(c.material)&&t.add(a)}});t.forEach(n=>this.variantNames.push(n))}writeMesh(e,t){if(!Im(e))return;const n=e.userData,i=n.variantMaterials,r=n.variantData,o=new Map,a=new Map,l=Array.from(r.values()).sort((u,d)=>u.index-d.index);for(const[u,d]of l.entries())a.set(d.index,u);for(const u of r.values()){const d=i.get(u.index);if(!d||!yc(d.material))continue;const f=this.writer.processMaterial(d.material);o.has(f)||o.set(f,{material:f,variants:[]}),o.get(f).variants.push(a.get(u.index))}const c=Array.from(o.values()).map(u=>u.variants.sort((d,f)=>d-f)&&u).sort((u,d)=>u.material-d.material);if(c.length===0)return;const h=yc(n.originalMaterial)?this.writer.processMaterial(n.originalMaterial):-1;for(const u of t.primitives)h>=0&&(u.material=h),u.extensions=u.extensions||{},u.extensions[this.name]={mappings:c}}afterParse(){if(this.variantNames.length===0)return;const e=this.writer.json;e.extensions=e.extensions||{};const t=this.variantNames.map(n=>({name:n}));e.extensions[this.name]={variants:t},this.writer.extensionsUsed[this.name]=!0}}class oD{constructor(e,t,n,i,r){this.xrLight=e,this.renderer=t,this.lightProbe=n,this.xrWebGLBinding=null,this.estimationStartCallback=r,this.frameCallback=this.onXRFrame.bind(this);const o=t.xr.getSession();if(i&&"XRWebGLBinding"in window){const a=new Yf(16);e.environment=a.texture;const l=t.getContext();switch(o.preferredReflectionFormat){case"srgba8":l.getExtension("EXT_sRGB");break;case"rgba16f":l.getExtension("OES_texture_half_float");break}this.xrWebGLBinding=new XRWebGLBinding(o,l),this.lightProbe.addEventListener("reflectionchange",()=>{this.updateReflection()})}o.requestAnimationFrame(this.frameCallback)}updateReflection(){const e=this.renderer.properties.get(this.xrLight.environment);if(e){const t=this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);t&&(e.__webglTexture=t,this.xrLight.environment.needsPMREMUpdate=!0)}}onXRFrame(e,t){if(!this.xrLight)return;t.session.requestAnimationFrame(this.frameCallback);const i=t.getLightEstimate(this.lightProbe);if(i){this.xrLight.lightProbe.sh.fromArray(i.sphericalHarmonicsCoefficients),this.xrLight.lightProbe.intensity=1;const r=Math.max(1,Math.max(i.primaryLightIntensity.x,Math.max(i.primaryLightIntensity.y,i.primaryLightIntensity.z)));this.xrLight.directionalLight.color.setRGB(i.primaryLightIntensity.x/r,i.primaryLightIntensity.y/r,i.primaryLightIntensity.z/r),this.xrLight.directionalLight.intensity=r,this.xrLight.directionalLight.position.copy(i.primaryLightDirection),this.estimationStartCallback&&(this.estimationStartCallback(),this.estimationStartCallback=null)}}dispose(){this.xrLight=null,this.renderer=null,this.lightProbe=null,this.xrWebGLBinding=null}}class aD extends ds{constructor(e,t=!0){super(),this.lightProbe=new zB,this.lightProbe.intensity=0,this.add(this.lightProbe),this.directionalLight=new gE,this.directionalLight.intensity=0,this.add(this.directionalLight),this.environment=null;let n=null,i=!1;e.xr.addEventListener("sessionstart",()=>{const r=e.xr.getSession();"requestLightProbe"in r&&r.requestLightProbe({reflectionFormat:r.preferredReflectionFormat}).then(o=>{n=new oD(this,e,o,t,()=>{i=!0,this.dispatchEvent({type:"estimationstart"})})})}),e.xr.addEventListener("sessionend",()=>{n&&(n.dispose(),n=null),i&&this.dispatchEvent({type:"estimationend"})}),this.dispose=()=>{n&&(n.dispose(),n=null),this.remove(this.lightProbe),this.lightProbe=null,this.remove(this.directionalLight),this.directionalLight=null,this.environment=null}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=1e4,lD=.001,HE=50;class Cn{constructor(e=HE){this.velocity=0,this.naturalFrequency=0,this.setDecayTime(e)}setDecayTime(e){this.naturalFrequency=1/Math.max(lD,e)}update(e,t,n,i){const r=2e-4*this.naturalFrequency;if(e==null||i===0||e===t&&this.velocity===0)return t;if(n<0)return e;const o=e-t,a=this.velocity+this.naturalFrequency*o,l=o+n*a,c=Math.exp(-this.naturalFrequency*n),h=(a-this.naturalFrequency*l)*c,u=-this.naturalFrequency*(h+a*c);return Math.abs(h)<r*Math.abs(i)&&u*o>=0?(this.velocity=0,t):(this.velocity=h,t+l*c)}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=.2,Cm=.03,cD=.75,VE=12,hD=Math.PI/(2*VE),Sm=new ze,kl=(s,e,t)=>{let n=e>0?t>0?0:-Math.PI/2:t>0?Math.PI/2:Math.PI;for(let i=0;i<=VE;++i)s.push(e+(Yr-Cm)*Math.cos(n),t+(Yr-Cm)*Math.sin(n),0,e+Yr*Math.cos(n),t+Yr*Math.sin(n),0),n+=hD};class wm extends Le{constructor(e,t){const n=new Qn,i=[],r=[],{size:o,boundingBox:a}=e,l=o.x/2,c=(t==="back"?o.y:o.z)/2;kl(r,l,c),kl(r,-l,c),kl(r,-l,-c),kl(r,l,-c);const h=r.length/3;for(let f=0;f<h-2;f+=2)i.push(f,f+1,f+3,f,f+3,f+2);const u=h-2;i.push(u,u+1,1,u,1,0),n.setAttribute("position",new _i(r,3)),n.setIndex(i),super(n),this.side=t;const d=this.material;switch(d.side=ln,d.transparent=!0,d.opacity=0,this.goalOpacity=0,this.opacityDamper=new Cn,this.hitPlane=new Le(new ar(2*(l+Yr),2*(c+Yr))),this.hitPlane.visible=!1,this.hitPlane.material.side=ln,this.add(this.hitPlane),a.getCenter(this.position),t){case"bottom":this.rotateX(-Math.PI/2),this.shadowHeight=a.min.y,this.position.y=this.shadowHeight;break;case"back":this.shadowHeight=a.min.z,this.position.z=this.shadowHeight}e.target.add(this),this.offsetHeight=0}getHit(e,t,n){Sm.set(t,-n),this.hitPlane.visible=!0;const i=e.positionAndNormalFromPoint(Sm,this.hitPlane);return this.hitPlane.visible=!1,i==null?null:i.position}getExpandedHit(e,t,n){this.hitPlane.scale.set(1e3,1e3,1e3),this.hitPlane.updateMatrixWorld();const i=this.getHit(e,t,n);return this.hitPlane.scale.set(1,1,1),i}set offsetHeight(e){e-=.001,this.side==="back"?this.position.z=this.shadowHeight+e:this.position.y=this.shadowHeight+e}get offsetHeight(){return this.side==="back"?this.position.z-this.shadowHeight:this.position.y-this.shadowHeight}set show(e){this.goalOpacity=e?cD:0}updateOpacity(e){const t=this.material;t.opacity=this.opacityDamper.update(t.opacity,this.goalOpacity,e,1),this.visible=t.opacity>0}dispose(){var e;const{geometry:t,material:n}=this.hitPlane;t.dispose(),n.dispose(),this.geometry.dispose(),this.material.dispose(),(e=this.parent)===null||e===void 0||e.remove(this)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=(s,e)=>({type:"number",number:s,unit:e}),gs=(()=>{const s={};return t=>{const n=t;if(n in s)return s[n];const i=[];let r=0;for(;t;){if(++r>1e3){t="";break}const o=zE(t),a=o.nodes[0];if(a==null||a.terms.length===0)break;i.push(a),t=o.remainingInput}return s[n]=i}})(),zE=(()=>{const s=/^(\-\-|[a-z\u0240-\uffff])/i,e=/^([\*\+\/]|[\-]\s)/i,t=/^[\),]/,n="(",i="#";return r=>{const o=[];for(;r.length&&(r=r.trim(),!t.test(r));)if(r[0]===n){const{nodes:a,remainingInput:l}=Mm(r);r=l,o.push({type:"function",name:{type:"ident",value:"calc"},arguments:a})}else if(s.test(r)){const a=uD(r),l=a.nodes[0];if(r=a.remainingInput,r[0]===n){const{nodes:c,remainingInput:h}=Mm(r);o.push({type:"function",name:l,arguments:c}),r=h}else o.push(l)}else if(e.test(r))o.push({type:"operator",value:r[0]}),r=r.slice(1);else{const{nodes:a,remainingInput:l}=r[0]===i?fD(r):dD(r);if(a.length===0)break;o.push(a[0]),r=l}return{nodes:[{type:"expression",terms:o}],remainingInput:r}}})(),uD=(()=>{const s=/[^a-z0-9_\-\u0240-\uffff]/i;return e=>{const t=e.match(s),n=t==null?e:e.substr(0,t.index),i=t==null?"":e.substr(t.index);return{nodes:[{type:"ident",value:n}],remainingInput:i}}})(),dD=(()=>{const s=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,e=/^[a-z%]+/i,t=/^(m|mm|cm|rad|deg|[%])$/;return n=>{const i=n.match(s),r=i==null?"0":i[0];n=r==null?n:n.slice(r.length);const o=n.match(e);let a=o!=null&&o[0]!==""?o[0]:null;const l=o==null?n:n.slice(a.length);return a!=null&&!t.test(a)&&(a=null),{nodes:[{type:"number",number:parseFloat(r)||0,unit:a}],remainingInput:l}}})(),fD=(()=>{const s=/^[a-f0-9]*/i;return e=>{e=e.slice(1).trim();const t=e.match(s);return{nodes:t==null?[]:[{type:"hex",value:t[0]}],remainingInput:t==null?e:e.slice(t[0].length)}}})(),Mm=s=>{const e=[];for(s=s.slice(1).trim();s.length;){const t=zE(s);if(e.push(t.nodes[0]),s=t.remainingInput.trim(),s[0]===",")s=s.slice(1).trim();else if(s[0]===")"){s=s.slice(1);break}}return{nodes:e,remainingInput:s}},bm=Symbol("visitedTypes");class AD{constructor(e){this[bm]=e}walk(e,t){const n=e.slice();for(;n.length;){const i=n.shift();switch(this[bm].indexOf(i.type)>-1&&t(i),i.type){case"expression":n.unshift(...i.terms);break;case"function":n.unshift(i.name,...i.arguments);break}}}}const vs=Object.freeze({type:"number",number:0,unit:null});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=(s,e=0)=>{let{number:t,unit:n}=s;if(!isFinite(t))t=e,n="rad";else if(s.unit==="rad"||s.unit==null)return s;return{type:"number",number:(n==="deg"&&t!=null?t:0)*Math.PI/180,unit:"rad"}},Tm=(s,e=0)=>{let{number:t,unit:n}=s;if(!isFinite(t))t=e,n="m";else if(s.unit==="m")return s;let i;switch(n){default:i=1;break;case"cm":i=1/100;break;case"mm":i=1/1e3;break}return{type:"number",number:i*t,unit:"m"}},Vi=(()=>{const s=t=>t,e={rad:s,deg:hh,m:s,mm:Tm,cm:Tm};return(t,n=vs)=>{isFinite(t.number)||(t.number=n.number,t.unit=n.unit);const{unit:i}=t;if(i==null)return t;const r=e[i];return r==null?n:r(t)}})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var WE,Bm,Rm;const Fo=Symbol("evaluate"),Ic=Symbol("lastValue");class At{constructor(){this[WE]=null}static evaluatableFor(e,t=vs){if(e instanceof At)return e;if(e.type==="number")return e.unit==="%"?new pD(e,t):e;switch(e.name.value){case"calc":return new _D(e,t);case"env":return new gD(e)}return vs}static evaluate(e){return e instanceof At?e.evaluate():e}static isConstant(e){return e instanceof At?e.isConstant:!0}static applyIntrinsics(e,t){const{basis:n,keywords:i}=t,{auto:r}=i;return n.map((o,a)=>{const l=r[a]==null?o:r[a];let c=e[a]?e[a]:l;if(c.type==="ident"){const h=c.value;h in i&&(c=i[h][a])}return(c==null||c.type==="ident")&&(c=l),c.unit==="%"?Yt(c.number/100*o.number,o.unit):(c=Vi(c,o),c.unit!==o.unit?o:c)})}get isConstant(){return!1}evaluate(){return(!this.isConstant||this[Ic]==null)&&(this[Ic]=this[Fo]()),this[Ic]}}WE=Ic;const Lm=Symbol("percentage"),Cu=Symbol("basis");class pD extends At{constructor(e,t){super(),this[Lm]=e,this[Cu]=t}get isConstant(){return!0}[Fo](){return Yt(this[Lm].number/100*this[Cu].number,this[Cu].unit)}}const Gl=Symbol("identNode");class gD extends At{constructor(e){super(),this[Bm]=null;const t=e.arguments.length?e.arguments[0].terms[0]:null;t!=null&&t.type==="ident"&&(this[Gl]=t)}get isConstant(){return!1}[(Bm=Gl,Fo)](){if(this[Gl]!=null)switch(this[Gl].value){case"window-scroll-y":const e=window.pageYOffset,t=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);return{type:"number",number:e/(t-window.innerHeight)||0,unit:null}}return vs}}const mD=/[\*\/]/,Tr=Symbol("evaluator");class _D extends At{constructor(e,t=vs){if(super(),this[Rm]=null,e.arguments.length!==1)return;const n=e.arguments[0].terms.slice(),i=[];for(;n.length;){const r=n.shift();if(i.length>0){const o=i[i.length-1];if(o.type==="operator"&&mD.test(o.value)){const a=i.pop(),l=i.pop();if(l==null)return;i.push(new Pm(a,At.evaluatableFor(l,t),At.evaluatableFor(r,t)));continue}}i.push(r.type==="operator"?r:At.evaluatableFor(r,t))}for(;i.length>2;){const[r,o,a]=i.splice(0,3);if(o.type!=="operator")return;i.unshift(new Pm(o,At.evaluatableFor(r,t),At.evaluatableFor(a,t)))}i.length===1&&(this[Tr]=i[0])}get isConstant(){return this[Tr]==null||At.isConstant(this[Tr])}[(Rm=Tr,Fo)](){return this[Tr]!=null?At.evaluate(this[Tr]):vs}}const Dm=Symbol("operator"),Su=Symbol("left"),wu=Symbol("right");class Pm extends At{constructor(e,t,n){super(),this[Dm]=e,this[Su]=t,this[wu]=n}get isConstant(){return At.isConstant(this[Su])&&At.isConstant(this[wu])}[Fo](){const e=Vi(At.evaluate(this[Su])),t=Vi(At.evaluate(this[wu])),{number:n,unit:i}=e,{number:r,unit:o}=t;if(o!=null&&i!=null&&o!=i)return vs;const a=i||o;let l;switch(this[Dm].value){case"+":l=n+r;break;case"-":l=n-r;break;case"/":l=n/r;break;case"*":l=n*r;break;default:return vs}return{type:"number",number:l,unit:a}}}const Mu=Symbol("evaluatables"),Um=Symbol("intrinsics");class qE extends At{constructor(e,t){super(),this[Um]=t;const n=e[0],i=n!=null?n.terms:[];this[Mu]=t.basis.map((r,o)=>{const a=i[o];return a==null?{type:"ident",value:"auto"}:a.type==="ident"?a:At.evaluatableFor(a,r)})}get isConstant(){for(const e of this[Mu])if(!At.isConstant(e))return!1;return!0}[Fo](){const e=this[Mu].map(t=>At.evaluate(t));return At.applyIntrinsics(e,this[Um]).map(t=>t.number)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $E,jE,KE,YE;const Br=Symbol("instances"),Fm=Symbol("activateListener"),Nm=Symbol("deactivateListener"),bu=Symbol("notifyInstances"),Qm=Symbol("notify"),Om=Symbol("callback");class ci{constructor(e){this[Om]=e}static[bu](){for(const e of ci[Br])e[Qm]()}static[($E=Br,Fm)](){window.addEventListener("scroll",this[bu],{passive:!0})}static[Nm](){window.removeEventListener("scroll",this[bu])}observe(){ci[Br].size===0&&ci[Fm](),ci[Br].add(this)}disconnect(){ci[Br].delete(this),ci[Br].size===0&&ci[Nm]()}[Qm](){this[Om]()}}ci[$E]=new Set;const km=Symbol("computeStyleCallback"),XE=Symbol("astWalker"),xa=Symbol("dependencies"),JE=Symbol("onScroll");class vD{constructor(e){this[jE]={},this[KE]=new AD(["function"]),this[YE]=()=>{this[km]({relatedState:"window-scroll"})},this[km]=e}observeEffectsFor(e){const t={},n=this[xa];this[XE].walk(e,i=>{const{name:r}=i,a=i.arguments[0].terms[0];if(!(r.value!=="env"||a==null||a.type!=="ident"))switch(a.value){case"window-scroll-y":if(t["window-scroll"]==null){const l="window-scroll"in n?n["window-scroll"]:new ci(this[JE]);l.observe(),delete n["window-scroll"],t["window-scroll"]=l}break}});for(const i in n)n[i].disconnect();this[xa]=t}dispose(){for(const e in this[xa])this[xa][e].disconnect()}}jE=xa,KE=XE,YE=JE;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=s=>{const e=s.observeEffects||!1,t=s.intrinsics instanceof Function?s.intrinsics:()=>s.intrinsics;return(n,i)=>{const r=n.updated,o=n.connectedCallback,a=n.disconnectedCallback,l=Symbol(`${i}StyleEffector`),c=Symbol(`${i}StyleEvaluator`),h=Symbol(`${i}UpdateEvaluator`),u=Symbol(`${i}EvaluateAndSync`);Object.defineProperties(n,{[l]:{value:null,writable:!0},[c]:{value:null,writable:!0},[h]:{value:function(){const d=gs(this[i]);this[c]=new qE(d,t(this)),this[l]==null&&e&&(this[l]=new vD(()=>this[u]())),this[l]!=null&&this[l].observeEffectsFor(d)}},[u]:{value:function(){if(this[c]==null)return;const d=this[c].evaluate();this[s.updateHandler](d)}},updated:{value:function(d){d.has(i)&&(this[h](),this[u]()),r.call(this,d)}},connectedCallback:{value:function(){o.call(this),this.requestUpdate(i,this[i])}},disconnectedCallback:{value:function(){a.call(this),this[l]!=null&&(this[l].dispose(),this[l]=null)}}})}};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=s=>s<.5?2*s*s:-1+(4-2*s)*s,ED=(s,e,t=ZE)=>n=>s+(e-s)*t(n),xD=(s,e)=>{const t=i=>r=>i+=r,n=e.map(t(0));return i=>{i=Ai(i,0,1),i*=n[n.length-1];const r=n.findIndex(l=>l>=i),o=r<1?0:n[r-1],a=n[r];return s[r]((i-o)/(a-o))}},Xr=s=>{const e=[],t=[];let n=s.initialValue;for(let i=0;i<s.keyframes.length;++i){const r=s.keyframes[i],{value:o,frames:a}=r,l=r.ease||ZE,c=ED(n,o,l);e.push(c),t.push(a),n=o}return xD(e,t)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot=globalThis&&globalThis.__decorate||function(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r};const yD=5e3,ID=Xr({initialValue:0,keyframes:[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]}),CD=Xr({initialValue:0,keyframes:[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]}),SD=30,wD=12,ex="0deg 75deg 105%",MD="auto auto auto",bD="auto",TD=2.2,BD=["front","right","back","left"],RD=["upper-","","lower-"],LD=3e3,DD=". Use mouse, touch or arrow keys to move.",Hl={AUTO:"auto",NONE:"none"},Tu={BASIC:"basic",WIGGLE:"wiggle"},PD={PAN_Y:"pan-y",PAN_X:"pan-x",NONE:"none"},Gm=()=>({basis:[hh(Yt(SD,"deg"))],keywords:{auto:[null]}}),UD=()=>({basis:[hh(Yt(wD,"deg"))],keywords:{auto:[null]}}),tx=(()=>{const s=gs(ex)[0].terms,e=Vi(s[0]),t=Vi(s[1]);return n=>{const i=n[Ie].idealCameraDistance();return{basis:[e,t,Yt(i,"m")],keywords:{auto:[null,null,Yt(105,"%")]}}}})(),FD=s=>{const e=TD*s[Ie].boundingSphere.radius;return{basis:[Yt(-1/0,"rad"),Yt(Math.PI/8,"rad"),Yt(e,"m")],keywords:{auto:[null,null,null]}}},ND=s=>{const e=tx(s),n=new qE([],e).evaluate()[2];return{basis:[Yt(1/0,"rad"),Yt(Math.PI-Math.PI/8,"rad"),Yt(n,"m")],keywords:{auto:[null,null,null]}}},QD=s=>{const e=s[Ie].boundingBox.getCenter(new L);return{basis:[Yt(e.x,"m"),Yt(e.y,"m"),Yt(e.z,"m")],keywords:{auto:[null,null,null]}}},nx=Math.PI/2,OD=Math.PI/3,kD=nx/2,GD=2*Math.PI,it=Symbol("controls"),Cc=Symbol("panElement"),Bu=Symbol("promptElement"),Vl=Symbol("promptAnimatedContainer"),Ru=Symbol("fingerAnimatedContainers"),zl=Symbol("deferInteractionPrompt"),Hm=Symbol("updateAria"),Vm=Symbol("updateCameraForRadius"),Rr=Symbol("cancelPrompts"),Lu=Symbol("onChange"),Zo=Symbol("onPointerChange"),Ls=Symbol("waitingToPromptUser"),Wl=Symbol("userHasInteracted"),Lr=Symbol("promptElementVisibleTime"),ea=Symbol("lastPromptOffset"),ql=Symbol("cancellationSource"),Du=Symbol("lastSpherical"),ta=Symbol("jumpCamera"),Pu=Symbol("initialized"),na=Symbol("maintainThetaPhi"),zm=Symbol("syncCameraOrbit"),Wm=Symbol("syncFieldOfView"),qm=Symbol("syncCameraTarget"),$m=Symbol("syncMinCameraOrbit"),jm=Symbol("syncMaxCameraOrbit"),Km=Symbol("syncMinFieldOfView"),Ym=Symbol("syncMaxFieldOfView"),HD=s=>{var e,t,n,i,r,o,a,l,c,h,u,d,f,p,m,g,A;class E extends s{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit=ex,this.cameraTarget=MD,this.fieldOfView=bD,this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=LD,this.interactionPrompt=Hl.AUTO,this.interactionPromptStyle=Tu.WIGGLE,this.orbitSensitivity=1,this.touchAction=PD.NONE,this.disableZoom=!1,this.disablePan=!1,this.disableTap=!1,this.interpolationDecay=HE,this[e]=this.shadowRoot.querySelector(".interaction-prompt"),this[t]=this.shadowRoot.querySelector("#prompt"),this[n]=[this.shadowRoot.querySelector("#finger0"),this.shadowRoot.querySelector("#finger1")],this[i]=this.shadowRoot.querySelector(".pan-target"),this[r]=0,this[o]=1/0,this[a]=!1,this[l]=!1,this[c]=mt.AUTOMATIC,this[h]=new qD(this[Ie].camera,this[gi],this[Ie]),this[u]=new vc,this[d]=!1,this[f]=!1,this[p]=!1,this[m]=()=>{const v=this[it].changeSource;this[ql]=v,v===mt.USER_INTERACTION&&(this[Wl]=!0,this[zl]())},this[g]=()=>{this[Hm](),this[mn]();const v=this[it].changeSource;this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:v}}))},this[A]=v=>{v.type==="pointer-change-start"?this[Pa].classList.add("pointer-tumbling"):this[Pa].classList.remove("pointer-tumbling")}}get inputSensitivity(){return this[it].inputSensitivity}set inputSensitivity(v){this[it].inputSensitivity=v}getCameraOrbit(){const{theta:v,phi:I,radius:S}=this[Du];return{theta:v,phi:I,radius:S,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return us(this[rt].isPresenting?this[rt].arRenderer.target:this[Ie].getTarget())}getFieldOfView(){return this[it].getFieldOfView()}getMinimumFieldOfView(){return this[it].options.minimumFieldOfView}getMaximumFieldOfView(){return this[it].options.maximumFieldOfView}getIdealAspect(){return this[Ie].idealAspect}jumpCameraToGoal(){this[ta]=!0,this.requestUpdate(ta,!1)}resetInteractionPrompt(){this[ea]=0,this[Lr]=1/0,this[Wl]=!1,this[Ls]=this.interactionPrompt===Hl.AUTO&&this.cameraControls}zoom(v){const I=new WheelEvent("wheel",{deltaY:-30*v});this[gi].dispatchEvent(I)}connectedCallback(){super.connectedCallback(),this[it].addEventListener("user-interaction",this[Rr]),this[it].addEventListener("pointer-change-start",this[Zo]),this[it].addEventListener("pointer-change-end",this[Zo])}disconnectedCallback(){super.disconnectedCallback(),this[it].removeEventListener("user-interaction",this[Rr]),this[it].removeEventListener("pointer-change-start",this[Zo]),this[it].removeEventListener("pointer-change-end",this[Zo])}updated(v){super.updated(v);const I=this[it],S=this[Ie];if(v.has("cameraControls")&&(this.cameraControls?(I.enableInteraction(),this.interactionPrompt===Hl.AUTO&&(this[Ls]=!0)):(I.disableInteraction(),this[zl]()),this[gi].setAttribute("aria-label",this[Da])),v.has("disableZoom")&&(I.disableZoom=this.disableZoom),v.has("disablePan")&&(I.enablePan=!this.disablePan),v.has("disableTap")&&(I.enableTap=!this.disableTap),(v.has("interactionPrompt")||v.has("cameraControls")||v.has("src"))&&(this.interactionPrompt===Hl.AUTO&&this.cameraControls&&!this[Wl]?this[Ls]=!0:this[zl]()),v.has("interactionPromptStyle")&&(this[Vl].style.opacity=this.interactionPromptStyle==Tu.BASIC?"1":"0"),v.has("touchAction")){const T=this.touchAction;I.applyOptions({touchAction:T}),I.updateTouchActionStyle()}v.has("orbitSensitivity")&&(I.orbitSensitivity=this.orbitSensitivity),v.has("interpolationDecay")&&(I.setDamperDecayTime(this.interpolationDecay),S.setTargetDamperDecayTime(this.interpolationDecay)),this[ta]===!0&&Promise.resolve().then(()=>{I.jumpToGoal(),S.jumpToGoal(),this[Lu](),this[ta]=!1})}async updateFraming(){const v=this[Ie],I=v.adjustedFoV(v.framedFoVDeg);await v.updateFraming();const S=v.adjustedFoV(v.framedFoVDeg),T=this[it].getFieldOfView()/I;this[it].setFieldOfView(S*T),this[na]=!0,this.requestUpdate("maxFieldOfView"),this.requestUpdate("fieldOfView"),this.requestUpdate("minCameraOrbit"),this.requestUpdate("maxCameraOrbit"),this.requestUpdate("cameraOrbit"),await this.updateComplete}interact(v,I,S){const T=this[gi],R=this[Ru];if(R[0].style.opacity==="1"){console.warn("interact() failed because an existing interaction is running.");return}const y=new Array;y.push({x:Xr(I.x),y:Xr(I.y)});const M=[{x:y[0].x(0),y:y[0].y(0)}];S!=null&&(y.push({x:Xr(S.x),y:Xr(S.y)}),M.push({x:y[1].x(0),y:y[1].y(0)}));let k=performance.now();const{width:W,height:F}=this[Ie],P=G=>{for(const[Q,J]of M.entries()){const{style:le}=R[Q];le.transform=`translateX(${W*J.x}px) translateY(${F*J.y}px)`,G==="pointerdown"?le.opacity="1":G==="pointerup"&&(le.opacity="0");const xe={pointerId:Q-5678,pointerType:"touch",target:T,clientX:W*J.x,clientY:F*J.y,altKey:!0};T.dispatchEvent(new PointerEvent(G,xe))}},V=()=>{const G=this[ql];if(G!==mt.AUTOMATIC||!T.isConnected){for(const J of this[Ru])J.style.opacity="0";P("pointercancel"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:G}})),document.removeEventListener("visibilitychange",$);return}const Q=Math.min(1,(performance.now()-k)/v);for(const[J,le]of M.entries())le.x=y[J].x(Q),le.y=y[J].y(Q);P("pointermove"),Q<1?requestAnimationFrame(V):(P("pointerup"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:mt.AUTOMATIC}})),document.removeEventListener("visibilitychange",$))},$=()=>{let G=0;document.visibilityState==="hidden"?G=performance.now()-k:k=performance.now()-G};document.addEventListener("visibilitychange",$),P("pointerdown"),this[ql]=mt.AUTOMATIC,requestAnimationFrame(V)}[(e=Bu,t=Vl,n=Ru,i=Cc,r=ea,o=Lr,a=Wl,l=Ls,c=ql,h=it,u=Du,d=ta,f=Pu,p=na,Wm)](v){const I=this[it],S=this[Ie];S.framedFoVDeg=v[0]*180/Math.PI,I.changeSource=mt.NONE,I.setFieldOfView(S.adjustedFoV(S.framedFoVDeg)),this[Rr]()}[zm](v){const I=this[it];if(this[na]){const{theta:S,phi:T}=this.getCameraOrbit();v[0]=S,v[1]=T,this[na]=!1}I.changeSource=mt.NONE,I.setOrbit(v[0],v[1],v[2]),this[Rr]()}[$m](v){this[it].applyOptions({minimumAzimuthalAngle:v[0],minimumPolarAngle:v[1],minimumRadius:v[2]}),this.jumpCameraToGoal()}[jm](v){this[it].applyOptions({maximumAzimuthalAngle:v[0],maximumPolarAngle:v[1],maximumRadius:v[2]}),this[Vm](v[2]),this.jumpCameraToGoal()}[Km](v){this[it].applyOptions({minimumFieldOfView:v[0]*180/Math.PI}),this.jumpCameraToGoal()}[Ym](v){const I=this[Ie].adjustedFoV(v[0]*180/Math.PI);this[it].applyOptions({maximumFieldOfView:I}),this.jumpCameraToGoal()}[qm](v){const[I,S,T]=v;this[rt].arRenderer.isPresenting||this[Ie].setTarget(I,S,T),this[it].changeSource=mt.NONE,this[rt].arRenderer.updateTarget(),this[Rr]()}[xi](v,I){if(super[xi](v,I),this[rt].isPresenting||!this[rr]())return;const S=this[it],T=this[Ie],R=performance.now();if(this[Ls]&&this.loaded&&R>this[Ca]+this.interactionPromptThreshold&&(this[Ls]=!1,this[Lr]=R,this[Bu].classList.add("visible")),isFinite(this[Lr])&&this.interactionPromptStyle===Tu.WIGGLE){const k=(R-this[Lr])/yD%1,W=ID(k),F=CD(k);if(this[Vl].style.opacity=`${F}`,W!==this[ea]){const P=W*T.width*.05,V=(W-this[ea])*Math.PI/16;this[Vl].style.transform=`translateX(${P}px)`,S.changeSource=mt.AUTOMATIC,S.adjustOrbit(V,0,0),this[ea]=W}}const y=S.update(v,I),M=T.updateTarget(I);(y||M)&&this[Lu]()}[zl](){this[Ls]=!1,this[Bu].classList.remove("visible"),this[Lr]=1/0}[Vm](v){const I=Math.max(this[Ie].boundingSphere.radius,v),S=0,T=2*I;this[it].updateNearFar(S,T)}[Hm](){const{theta:v,phi:I}=this[it].getCameraSpherical(this[Du]),S=(4+Math.floor((v%GD+kD)/nx))%4,T=Math.floor(I/OD),R=BD[S],y=RD[T];this[ff](`View from stage ${y}${R}`)}get[Da](){return super[Da]+(this.cameraControls?DD:"")}async[Ja](v){const I=this[it],S=this[Ie],T=S.adjustedFoV(S.framedFoVDeg);super[Ja](v);const R=S.adjustedFoV(S.framedFoVDeg)/T,y=I.getFieldOfView()*(isFinite(R)?R:1);I.updateAspect(this[Ie].aspect),this.requestUpdate("maxFieldOfView",this.maxFieldOfView),await this.updateComplete,this[it].setFieldOfView(y),this.jumpCameraToGoal()}[Es](){super[Es](),this[Pu]?this[na]=!0:this[Pu]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal()}}return m=Rr,g=Lu,A=Zo,Ot([Fe({type:Boolean,attribute:"camera-controls"})],E.prototype,"cameraControls",void 0),Ot([is({intrinsics:tx,observeEffects:!0,updateHandler:zm}),Fe({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],E.prototype,"cameraOrbit",void 0),Ot([is({intrinsics:QD,observeEffects:!0,updateHandler:qm}),Fe({type:String,attribute:"camera-target",hasChanged:()=>!0})],E.prototype,"cameraTarget",void 0),Ot([is({intrinsics:Gm,observeEffects:!0,updateHandler:Wm}),Fe({type:String,attribute:"field-of-view",hasChanged:()=>!0})],E.prototype,"fieldOfView",void 0),Ot([is({intrinsics:FD,updateHandler:$m}),Fe({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],E.prototype,"minCameraOrbit",void 0),Ot([is({intrinsics:ND,updateHandler:jm}),Fe({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],E.prototype,"maxCameraOrbit",void 0),Ot([is({intrinsics:UD,updateHandler:Km}),Fe({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],E.prototype,"minFieldOfView",void 0),Ot([is({intrinsics:Gm,updateHandler:Ym}),Fe({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],E.prototype,"maxFieldOfView",void 0),Ot([Fe({type:Number,attribute:"interaction-prompt-threshold"})],E.prototype,"interactionPromptThreshold",void 0),Ot([Fe({type:String,attribute:"interaction-prompt"})],E.prototype,"interactionPrompt",void 0),Ot([Fe({type:String,attribute:"interaction-prompt-style"})],E.prototype,"interactionPromptStyle",void 0),Ot([Fe({type:Number,attribute:"orbit-sensitivity"})],E.prototype,"orbitSensitivity",void 0),Ot([Fe({type:String,attribute:"touch-action"})],E.prototype,"touchAction",void 0),Ot([Fe({type:Boolean,attribute:"disable-zoom"})],E.prototype,"disableZoom",void 0),Ot([Fe({type:Boolean,attribute:"disable-pan"})],E.prototype,"disablePan",void 0),Ot([Fe({type:Boolean,attribute:"disable-tap"})],E.prototype,"disableTap",void 0),Ot([Fe({type:Number,attribute:"interpolation-decay"})],E.prototype,"interpolationDecay",void 0),E};/* @license
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD=.018,Xm=2,zD=300,WD=new ze,Jm=new L,Zm=Object.freeze({minimumRadius:0,maximumRadius:1/0,minimumPolarAngle:Math.PI/8,maximumPolarAngle:Math.PI-Math.PI/8,minimumAzimuthalAngle:-1/0,maximumAzimuthalAngle:1/0,minimumFieldOfView:10,maximumFieldOfView:45,touchAction:"none"}),$l=Math.PI/8,jl=.04,Kl=10,mt={USER_INTERACTION:"user-interaction",NONE:"none",AUTOMATIC:"automatic"};class qD extends Nn{constructor(e,t,n){super(),this.camera=e,this.element=t,this.scene=n,this.orbitSensitivity=1,this.inputSensitivity=1,this.changeSource=mt.NONE,this._interactionEnabled=!1,this._disableZoom=!1,this.isUserPointing=!1,this.enablePan=!0,this.enableTap=!0,this.panProjection=new We,this.panPerPixel=0,this.spherical=new vc,this.goalSpherical=new vc,this.thetaDamper=new Cn,this.phiDamper=new Cn,this.radiusDamper=new Cn,this.logFov=Math.log(Zm.maximumFieldOfView),this.goalLogFov=this.logFov,this.fovDamper=new Cn,this.touchMode=null,this.pointers=[],this.startTime=0,this.startPointerPosition={clientX:0,clientY:0},this.lastSeparation=0,this.touchDecided=!1,this.onContext=i=>{if(this.enablePan)i.preventDefault();else for(const r of this.pointers)this.onPointerUp(new PointerEvent("pointercancel",Object.assign(Object.assign({},this.startPointerPosition),{pointerId:r.id})))},this.touchModeZoom=(i,r)=>{if(!this._disableZoom){const o=this.twoTouchDistance(this.pointers[0],this.pointers[1]),a=jl*(this.lastSeparation-o)*50/this.scene.height;this.lastSeparation=o,this.userAdjustOrbit(0,0,a)}this.panPerPixel>0&&this.movePan(i,r)},this.disableScroll=i=>{i.preventDefault()},this.touchModeRotate=(i,r)=>{const{touchAction:o}=this._options;if(!this.touchDecided&&o!=="none"){this.touchDecided=!0;const a=Math.abs(i),l=Math.abs(r);if(this.changeSource===mt.USER_INTERACTION&&(o==="pan-y"&&l>a||o==="pan-x"&&a>l)){this.touchMode=null;return}else this.element.addEventListener("touchmove",this.disableScroll,{passive:!1})}this.handleSinglePointerMove(i,r)},this.onPointerDown=i=>{if(this.pointers.length>2)return;const{element:r}=this;this.pointers.length===0&&(r.addEventListener("pointermove",this.onPointerMove),r.addEventListener("pointerup",this.onPointerUp),this.touchMode=null,this.touchDecided=!1,this.startPointerPosition.clientX=i.clientX,this.startPointerPosition.clientY=i.clientY,this.startTime=performance.now());try{r.setPointerCapture(i.pointerId)}catch{}this.pointers.push({clientX:i.clientX,clientY:i.clientY,id:i.pointerId}),this.isUserPointing=!1,i.pointerType==="touch"?(this.changeSource=i.altKey?mt.AUTOMATIC:mt.USER_INTERACTION,this.onTouchChange(i)):(this.changeSource=mt.USER_INTERACTION,this.onMouseDown(i)),this.changeSource===mt.USER_INTERACTION&&this.dispatchEvent({type:"user-interaction"})},this.onPointerMove=i=>{const r=this.pointers.find(c=>c.id===i.pointerId);if(r==null)return;const o=this.pointers.length,a=(i.clientX-r.clientX)/o,l=(i.clientY-r.clientY)/o;a===0&&l===0||(r.clientX=i.clientX,r.clientY=i.clientY,i.pointerType==="touch"?(this.changeSource=i.altKey?mt.AUTOMATIC:mt.USER_INTERACTION,this.touchMode!==null&&this.touchMode(a,l)):(this.changeSource=mt.USER_INTERACTION,this.panPerPixel>0?this.movePan(a,l):this.handleSinglePointerMove(a,l)))},this.onPointerUp=i=>{const{element:r}=this,o=this.pointers.findIndex(a=>a.id===i.pointerId);o!==-1&&this.pointers.splice(o,1),this.panPerPixel>0&&!i.altKey&&this.resetRadius(),this.pointers.length===0?(r.removeEventListener("pointermove",this.onPointerMove),r.removeEventListener("pointerup",this.onPointerUp),r.removeEventListener("touchmove",this.disableScroll),this.enablePan&&this.enableTap&&this.recenter(i)):this.touchMode!==null&&this.onTouchChange(i),this.scene.element[Cc].style.opacity=0,r.style.cursor="grab",this.panPerPixel=0,this.isUserPointing&&this.dispatchEvent({type:"pointer-change-end"})},this.onWheel=i=>{this.changeSource=mt.USER_INTERACTION;const r=i.deltaY*(i.deltaMode==1?18:1)*jl/30;this.userAdjustOrbit(0,0,r),i.preventDefault(),this.dispatchEvent({type:"user-interaction"})},this.onKeyDown=i=>{const{changeSource:r}=this;this.changeSource=mt.USER_INTERACTION,(i.shiftKey&&this.enablePan?this.panKeyCodeHandler(i):this.orbitZoomKeyCodeHandler(i))?(i.preventDefault(),this.dispatchEvent({type:"user-interaction"})):this.changeSource=r},this._options=Object.assign({},Zm),this.setOrbit(0,Math.PI/2,1),this.setFieldOfView(100),this.jumpToGoal()}get interactionEnabled(){return this._interactionEnabled}enableInteraction(){if(this._interactionEnabled===!1){const{element:e}=this;e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointercancel",this.onPointerUp),this._disableZoom||e.addEventListener("wheel",this.onWheel),e.addEventListener("keydown",this.onKeyDown),e.addEventListener("touchmove",()=>{},{passive:!1}),e.addEventListener("contextmenu",this.onContext),this.element.style.cursor="grab",this._interactionEnabled=!0,this.updateTouchActionStyle()}}disableInteraction(){if(this._interactionEnabled===!0){const{element:e}=this;e.removeEventListener("pointerdown",this.onPointerDown),e.removeEventListener("pointermove",this.onPointerMove),e.removeEventListener("pointerup",this.onPointerUp),e.removeEventListener("pointercancel",this.onPointerUp),e.removeEventListener("wheel",this.onWheel),e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("contextmenu",this.onContext),e.style.cursor="",this.touchMode=null,this._interactionEnabled=!1,this.updateTouchActionStyle()}}get options(){return this._options}set disableZoom(e){this._disableZoom!=e&&(this._disableZoom=e,e===!0?this.element.removeEventListener("wheel",this.onWheel):this.element.addEventListener("wheel",this.onWheel),this.updateTouchActionStyle())}getCameraSpherical(e=new vc){return e.copy(this.spherical)}getFieldOfView(){return this.camera.fov}applyOptions(e){Object.assign(this._options,e),this.setOrbit(),this.setFieldOfView(Math.exp(this.goalLogFov))}updateNearFar(e,t){this.camera.far=t===0?2:t,this.camera.near=Math.max(e,this.camera.far/1e3),this.camera.updateProjectionMatrix()}updateAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}setOrbit(e=this.goalSpherical.theta,t=this.goalSpherical.phi,n=this.goalSpherical.radius){const{minimumAzimuthalAngle:i,maximumAzimuthalAngle:r,minimumPolarAngle:o,maximumPolarAngle:a,minimumRadius:l,maximumRadius:c}=this._options,{theta:h,phi:u,radius:d}=this.goalSpherical,f=Ai(e,i,r);!isFinite(i)&&!isFinite(r)&&(this.spherical.theta=this.wrapAngle(this.spherical.theta-f)+f);const p=Ai(t,o,a),m=Ai(n,l,c);return f===h&&p===u&&m===d||!isFinite(f)||!isFinite(p)||!isFinite(m)?!1:(this.goalSpherical.theta=f,this.goalSpherical.phi=p,this.goalSpherical.radius=m,this.goalSpherical.makeSafe(),!0)}setRadius(e){this.goalSpherical.radius=e,this.setOrbit()}setFieldOfView(e){const{minimumFieldOfView:t,maximumFieldOfView:n}=this._options;e=Ai(e,t,n),this.goalLogFov=Math.log(e)}setDamperDecayTime(e){this.thetaDamper.setDecayTime(e),this.phiDamper.setDecayTime(e),this.radiusDamper.setDecayTime(e),this.fovDamper.setDecayTime(e)}adjustOrbit(e,t,n){const{theta:i,phi:r,radius:o}=this.goalSpherical,{minimumRadius:a,maximumRadius:l,minimumFieldOfView:c,maximumFieldOfView:h}=this._options,u=this.spherical.theta-i,d=Math.PI-.001,f=i-Ai(e,-d-u,d-u),p=r-t,m=n===0?0:((n>0?l:a)-o)/(Math.log(n>0?h:c)-this.goalLogFov),g=o+n*(isFinite(m)?m:(l-a)*2);if(this.setOrbit(f,p,g),n!==0){const A=this.goalLogFov+n;this.setFieldOfView(Math.exp(A))}}jumpToGoal(){this.update(0,GE)}update(e,t){if(this.isStationary())return!1;const{maximumPolarAngle:n,maximumRadius:i}=this._options,r=this.spherical.theta-this.goalSpherical.theta;return Math.abs(r)>Math.PI&&!isFinite(this._options.minimumAzimuthalAngle)&&!isFinite(this._options.maximumAzimuthalAngle)&&(this.spherical.theta-=Math.sign(r)*2*Math.PI),this.spherical.theta=this.thetaDamper.update(this.spherical.theta,this.goalSpherical.theta,t,Math.PI),this.spherical.phi=this.phiDamper.update(this.spherical.phi,this.goalSpherical.phi,t,n),this.spherical.radius=this.radiusDamper.update(this.spherical.radius,this.goalSpherical.radius,t,i),this.logFov=this.fovDamper.update(this.logFov,this.goalLogFov,t,1),this.moveCamera(),!0}updateTouchActionStyle(){const{style:e}=this.element;if(this._interactionEnabled){const{touchAction:t}=this._options;this._disableZoom&&t!=="none"?e.touchAction="manipulation":e.touchAction=t}else e.touchAction=""}isStationary(){return this.goalSpherical.theta===this.spherical.theta&&this.goalSpherical.phi===this.spherical.phi&&this.goalSpherical.radius===this.spherical.radius&&this.goalLogFov===this.logFov}moveCamera(){this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.setRotationFromEuler(new Ro(this.spherical.phi-Math.PI/2,this.spherical.theta,0,"YXZ")),this.camera.fov!==Math.exp(this.logFov)&&(this.camera.fov=Math.exp(this.logFov),this.camera.updateProjectionMatrix())}userAdjustOrbit(e,t,n){this.adjustOrbit(e*this.orbitSensitivity*this.inputSensitivity,t*this.orbitSensitivity*this.inputSensitivity,n*this.inputSensitivity)}wrapAngle(e){const t=(e+Math.PI)/(2*Math.PI);return(t-Math.floor(t))*2*Math.PI-Math.PI}pixelLengthToSphericalAngle(e){return 2*Math.PI*e/this.scene.height}twoTouchDistance(e,t){const{clientX:n,clientY:i}=e,{clientX:r,clientY:o}=t,a=r-n,l=o-i;return Math.sqrt(a*a+l*l)}handleSinglePointerMove(e,t){const n=this.pixelLengthToSphericalAngle(e),i=this.pixelLengthToSphericalAngle(t);this.isUserPointing===!1&&(this.isUserPointing=!0,this.dispatchEvent({type:"pointer-change-start"})),this.userAdjustOrbit(n,i,0)}initializePan(){const{theta:e,phi:t}=this.spherical,n=e-this.scene.yaw;this.panPerPixel=VD/this.scene.height,this.panProjection.set(-Math.cos(n),-Math.cos(t)*Math.sin(n),0,0,Math.sin(t),0,Math.sin(n),-Math.cos(t)*Math.cos(n),0)}movePan(e,t){const{scene:n}=this,i=Jm.set(e,t,0).multiplyScalar(this.inputSensitivity),r=this.spherical.radius*Math.exp(this.logFov)*this.panPerPixel;i.multiplyScalar(r);const o=n.getTarget();o.add(i.applyMatrix3(this.panProjection)),n.boundingSphere.clampPoint(o,o),n.setTarget(o.x,o.y,o.z)}recenter(e){if(performance.now()>this.startTime+zD||Math.abs(e.clientX-this.startPointerPosition.clientX)>Xm||Math.abs(e.clientY-this.startPointerPosition.clientY)>Xm)return;const{scene:t}=this,n=t.positionAndNormalFromPoint(t.getNDC(e.clientX,e.clientY));if(n==null){const{cameraTarget:i}=t.element;t.element.cameraTarget="",t.element.cameraTarget=i,this.userAdjustOrbit(0,0,1)}else t.target.worldToLocal(n.position),t.setTarget(n.position.x,n.position.y,n.position.z)}resetRadius(){const{scene:e}=this,t=e.positionAndNormalFromPoint(WD.set(0,0));if(t==null)return;e.target.worldToLocal(t.position);const n=e.getTarget(),{theta:i,phi:r}=this.spherical,o=i-e.yaw,a=Jm.set(Math.sin(r)*Math.sin(o),Math.cos(r),Math.sin(r)*Math.cos(o)),l=a.dot(t.position.sub(n));n.add(a.multiplyScalar(l)),e.setTarget(n.x,n.y,n.z),this.setOrbit(void 0,void 0,this.goalSpherical.radius-l)}onTouchChange(e){if(this.pointers.length===1)this.touchMode=this.touchModeRotate;else{if(this._disableZoom){this.touchMode=null,this.element.removeEventListener("touchmove",this.disableScroll);return}this.touchMode=this.touchDecided&&this.touchMode===null?null:this.touchModeZoom,this.touchDecided=!0,this.element.addEventListener("touchmove",this.disableScroll,{passive:!1}),this.lastSeparation=this.twoTouchDistance(this.pointers[0],this.pointers[1]),this.enablePan&&this.touchMode!=null&&(this.initializePan(),e.altKey||(this.scene.element[Cc].style.opacity=1))}}onMouseDown(e){this.panPerPixel=0,this.enablePan&&(e.button===2||e.ctrlKey||e.metaKey||e.shiftKey)&&(this.initializePan(),this.scene.element[Cc].style.opacity=1),this.element.style.cursor="grabbing"}orbitZoomKeyCodeHandler(e){let t=!0;switch(e.key){case"PageUp":this.userAdjustOrbit(0,0,jl);break;case"PageDown":this.userAdjustOrbit(0,0,-1*jl);break;case"ArrowUp":this.userAdjustOrbit(0,-$l,0);break;case"ArrowDown":this.userAdjustOrbit(0,$l,0);break;case"ArrowLeft":this.userAdjustOrbit(-$l,0,0);break;case"ArrowRight":this.userAdjustOrbit($l,0,0);break;default:t=!1;break}return t}panKeyCodeHandler(e){this.initializePan();let t=!0;switch(e.key){case"ArrowUp":this.movePan(0,-1*Kl);break;case"ArrowDown":this.movePan(0,Kl);break;case"ArrowLeft":this.movePan(-1*Kl,0);break;case"ArrowRight":this.movePan(Kl,0);break;default:t=!1;break}return t}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=30,jD=.8,e0=1.5,KD=20,ix=1.3,YD=1/ix,XD=.25,JD=10,hs={NOT_PRESENTING:"not-presenting",SESSION_STARTED:"session-started",OBJECT_PLACED:"object-placed",FAILED:"failed"},lf={TRACKING:"tracking",NOT_TRACKING:"not-tracking"},Yl=new L,ZD=new Qe,e2=new L,t2=new Gt(45,1,.1,100);class n2 extends Nn{constructor(e){super(),this.renderer=e,this.currentSession=null,this.placeOnWall=!1,this.placementBox=null,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.initialHitSource=null,this.transientHitTestSource=null,this.inputSource=null,this._presentedScene=null,this.resolveCleanup=null,this.exitWebXRButtonContainer=null,this.overlay=null,this.xrLight=null,this.tracking=!0,this.frames=0,this.initialized=!1,this.oldTarget=new L,this.placementComplete=!1,this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastDragPosition=new L,this.firstRatio=0,this.lastAngle=0,this.goalPosition=new L,this.goalYaw=0,this.goalScale=1,this.xDamper=new Cn,this.yDamper=new Cn,this.zDamper=new Cn,this.yawDamper=new Cn,this.scaleDamper=new Cn,this.onExitWebXRButtonContainerClick=()=>this.stopPresenting(),this.onUpdateScene=()=>{this.placementBox!=null&&this.isPresenting&&(this.placementBox.dispose(),this.placementBox=new wm(this.presentedScene,this.placeOnWall?"back":"bottom"))},this.onSelectStart=t=>{const n=this.transientHitTestSource;if(n==null)return;const i=this.frame.getHitTestResultsForTransientInput(n),r=this.presentedScene,o=this.placementBox;if(i.length===1){this.inputSource=t.inputSource;const{axes:a}=this.inputSource.gamepad,l=o.getHit(this.presentedScene,a[0],a[1]);o.show=!0,l!=null?(this.isTranslating=!0,this.lastDragPosition.copy(l)):this.placeOnWall===!1&&(this.isRotating=!0,this.lastAngle=a[0]*e0)}else if(i.length===2){o.show=!0,this.isTwoFingering=!0;const{separation:a}=this.fingerPolar(i);this.firstRatio=a/r.scale.x}},this.onSelectEnd=()=>{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.inputSource=null,this.goalPosition.y+=this.placementBox.offsetHeight*this.presentedScene.scale.x,this.placementBox.show=!1},this.threeRenderer=e.threeRenderer,this.threeRenderer.xr.enabled=!0}async resolveARSession(){Kg();const e=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","light-estimation"],domOverlay:this.overlay?{root:this.overlay}:void 0});return this.threeRenderer.xr.setReferenceSpaceType("local"),await this.threeRenderer.xr.setSession(e),this.threeRenderer.xr.cameraAutoUpdate=!1,e}get presentedScene(){return this._presentedScene}async supportsPresentation(){try{return Kg(),await navigator.xr.isSessionSupported("immersive-ar")}catch(e){return console.warn("Request to present in WebXR denied:"),console.warn(e),console.warn("Falling back to next ar-mode"),!1}}async present(e,t=!1){this.isPresenting&&console.warn("Cannot present while a model is already presenting");let n=new Promise((c,h)=>{requestAnimationFrame(()=>c())});e.setHotspotsVisibility(!1),e.queueRender(),await n,this._presentedScene=e,this.overlay=e.element.shadowRoot.querySelector("div.default"),t===!0&&(this.xrLight=new aD(this.threeRenderer),this.xrLight.addEventListener("estimationstart",()=>{if(!this.isPresenting||this.xrLight==null)return;const c=this.presentedScene;c.add(this.xrLight),c.environment=this.xrLight.environment}));const i=await this.resolveARSession();i.addEventListener("end",()=>{this.postSessionCleanup()},{once:!0});const r=e.element.shadowRoot.querySelector(".slot.exit-webxr-ar-button");r.classList.add("enabled"),r.addEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=r;const o=await i.requestReferenceSpace("viewer");this.tracking=!0,this.frames=0,this.initialized=!1,this.turntableRotation=e.yaw,this.goalYaw=e.yaw,this.goalScale=1,e.background=null,this.oldShadowIntensity=e.shadowIntensity,e.setShadowIntensity(.01),this.oldTarget.copy(e.getTarget()),e.element.addEventListener("load",this.onUpdateScene);const a=KD*Math.PI/180,l=this.placeOnWall===!0?void 0:new XRRay(new DOMPoint(0,0,0),{x:0,y:-Math.sin(a),z:-Math.cos(a)});i.requestHitTestSource({space:o,offsetRay:l}).then(c=>{this.initialHitSource=c}),this.currentSession=i,this.placementBox=new wm(e,this.placeOnWall?"back":"bottom"),this.placementComplete=!1,this.lastTick=performance.now(),this.dispatchEvent({type:"status",status:hs.SESSION_STARTED})}async stopPresenting(){if(!this.isPresenting)return;const e=new Promise(t=>{this.resolveCleanup=t});try{await this.currentSession.end(),await e}catch(t){console.warn("Error while trying to end WebXR AR session"),console.warn(t),this.postSessionCleanup()}}get isPresenting(){return this.presentedScene!=null}get target(){return this.oldTarget}updateTarget(){const e=this.presentedScene;if(e!=null){const t=e.getTarget();this.oldTarget.copy(t),this.placeOnWall?t.z=e.boundingBox.min.z:t.y=e.boundingBox.min.y,e.setTarget(t.x,t.y,t.z)}}postSessionCleanup(){const e=this.currentSession;e!=null&&(e.removeEventListener("selectstart",this.onSelectStart),e.removeEventListener("selectend",this.onSelectEnd),this.currentSession=null);const t=this.presentedScene;if(this._presentedScene=null,t!=null){const{element:o}=t;this.xrLight!=null&&(t.remove(this.xrLight),this.xrLight.dispose(),this.xrLight=null),t.position.set(0,0,0),t.scale.set(1,1,1),t.setShadowOffset(0);const a=this.turntableRotation;a!=null&&(t.yaw=a);const l=this.oldShadowIntensity;l!=null&&t.setShadowIntensity(l),t.setEnvironmentAndSkybox(o[_a],o[va]);const c=this.oldTarget;t.setTarget(c.x,c.y,c.z),t.xrCamera=null,t.element.removeEventListener("load",this.onUpdateScene),t.orientHotspots(0),o.requestUpdate("cameraTarget"),o.requestUpdate("maxCameraOrbit"),o[Ja](o.getBoundingClientRect()),requestAnimationFrame(()=>{t.element.dispatchEvent(new CustomEvent("camera-change",{detail:{source:mt.NONE}}))})}this.renderer.height=0;const n=this.exitWebXRButtonContainer;n!=null&&(n.classList.remove("enabled"),n.removeEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=null);const i=this.transientHitTestSource;i!=null&&(i.cancel(),this.transientHitTestSource=null);const r=this.initialHitSource;r!=null&&(r.cancel(),this.initialHitSource=null),this.placementBox!=null&&(this.placementBox.dispose(),this.placementBox=null),this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.inputSource=null,this.overlay=null,this.resolveCleanup!=null&&this.resolveCleanup(),this.dispatchEvent({type:"status",status:hs.NOT_PRESENTING})}updateView(e){const t=this.presentedScene,n=this.threeRenderer.xr;n.updateCamera(t2),t.xrCamera=n.getCamera();const{elements:i}=t.getCamera().matrixWorld;if(t.orientHotspots(Math.atan2(i[1],i[5])),this.initialized||(this.placeInitially(),this.initialized=!0),e.requestViewportScale&&e.recommendedViewportScale){const o=e.recommendedViewportScale;e.requestViewportScale(Math.max(o,XD))}const r=n.getBaseLayer();if(r!=null){const o=r instanceof XRWebGLLayer?r.getViewport(e):n.getBinding().getViewSubImage(r,e).viewport;this.threeRenderer.setViewport(o.x,o.y,o.width,o.height)}}placeInitially(){const e=this.presentedScene,{position:t,element:n}=e,i=e.getCamera(),{width:r,height:o}=this.overlay.getBoundingClientRect();e.setSize(r,o),i.projectionMatrixInverse.copy(i.projectionMatrix).invert();const{theta:a,radius:l}=n.getCameraOrbit(),c=i.getWorldDirection(Yl);e.yaw=Math.atan2(-c.x,-c.z)-a,this.goalYaw=e.yaw,t.copy(i.position).add(c.multiplyScalar(l)),this.updateTarget();const h=e.getTarget();t.add(h).sub(this.oldTarget),this.goalPosition.copy(t),e.setHotspotsVisibility(!0);const{session:u}=this.frame;u.addEventListener("selectstart",this.onSelectStart),u.addEventListener("selectend",this.onSelectEnd),u.requestHitTestSourceForTransientInput({profile:"generic-touchscreen"}).then(d=>{this.transientHitTestSource=d})}getTouchLocation(){const{axes:e}=this.inputSource.gamepad;let t=this.placementBox.getExpandedHit(this.presentedScene,e[0],e[1]);return t!=null&&(Yl.copy(t).sub(this.presentedScene.getCamera().position),Yl.length()>JD)?null:t}getHitPoint(e){const t=this.threeRenderer.xr.getReferenceSpace(),n=e.getPose(t);if(n==null)return null;const i=ZD.fromArray(n.transform.matrix);return this.placeOnWall===!0&&(this.goalYaw=Math.atan2(i.elements[4],i.elements[6])),i.elements[5]>.75!==this.placeOnWall?e2.setFromMatrixPosition(i):null}moveToFloor(e){const t=this.initialHitSource;if(t==null)return;const n=e.getHitTestResults(t);if(n.length==0)return;const i=n[0],r=this.getHitPoint(i);r!=null&&(this.placementBox.show=!0,this.isTranslating||(this.placeOnWall?this.goalPosition.copy(r):this.goalPosition.y=r.y),t.cancel(),this.initialHitSource=null,this.dispatchEvent({type:"status",status:hs.OBJECT_PLACED}))}fingerPolar(e){const t=e[0].inputSource.gamepad.axes,n=e[1].inputSource.gamepad.axes,i=n[0]-t[0],r=n[1]-t[1],o=Math.atan2(r,i);let a=this.lastAngle-o;return a>Math.PI?a-=2*Math.PI:a<-Math.PI&&(a+=2*Math.PI),this.lastAngle=o,{separation:Math.sqrt(i*i+r*r),deltaYaw:a}}processInput(e){const t=this.transientHitTestSource;if(t==null||!this.isTranslating&&!this.isTwoFingering&&!this.isRotating)return;const n=e.getHitTestResultsForTransientInput(t),i=this.presentedScene,r=i.scale.x;if(this.isTwoFingering){if(n.length<2)this.isTwoFingering=!1;else{const{separation:o,deltaYaw:a}=this.fingerPolar(n);if(this.placeOnWall===!1&&(this.goalYaw+=a),i.canScale){const l=o/this.firstRatio;this.goalScale=l<ix&&l>YD?1:l}}return}else if(n.length===2){this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!0;const{separation:o}=this.fingerPolar(n);this.firstRatio=o/r;return}if(this.isRotating){const o=this.inputSource.gamepad.axes[0]*e0;this.goalYaw+=o-this.lastAngle,this.lastAngle=o}else this.isTranslating&&n.forEach(o=>{if(o.inputSource!==this.inputSource)return;let a=null;if(o.results.length>0&&(a=this.getHitPoint(o.results[0])),a==null&&(a=this.getTouchLocation()),a!=null){if(this.goalPosition.sub(this.lastDragPosition),this.placeOnWall===!1){const l=a.y-this.lastDragPosition.y;if(l<0){this.placementBox.offsetHeight=l/r,this.presentedScene.setShadowOffset(l);const c=Yl.copy(i.getCamera().position),h=-l/(c.y-a.y);c.multiplyScalar(h),a.multiplyScalar(1-h).add(c)}}this.goalPosition.add(a),this.lastDragPosition.copy(a)}})}moveScene(e){const t=this.presentedScene,{position:n,yaw:i}=t,r=t.boundingSphere.radius,o=this.goalPosition,a=t.scale.x,l=this.placementBox;let c=mt.NONE;if(!o.equals(n)||this.goalScale!==a){c=mt.USER_INTERACTION;let{x:h,y:u,z:d}=n;h=this.xDamper.update(h,o.x,e,r),u=this.yDamper.update(u,o.y,e,r),d=this.zDamper.update(d,o.z,e,r),n.set(h,u,d);const f=this.scaleDamper.update(a,this.goalScale,e,1);if(t.scale.set(f,f,f),!this.isTranslating){const p=o.y-u;this.placementComplete&&this.placeOnWall===!1?(l.offsetHeight=p/f,t.setShadowOffset(p)):p===0&&(this.placementComplete=!0,l.show=!1,t.setShadowIntensity(jD))}}l.updateOpacity(e),t.updateTarget(e),t.yaw=this.yawDamper.update(i,this.goalYaw,e,Math.PI),t.element.dispatchEvent(new CustomEvent("camera-change",{detail:{source:c}}))}onWebXRFrame(e,t){this.frame=t,++this.frames;const n=this.threeRenderer.xr.getReferenceSpace(),i=t.getViewerPose(n);i==null&&this.tracking===!0&&this.frames>$D&&(this.tracking=!1,this.dispatchEvent({type:"tracking",status:lf.NOT_TRACKING}));const r=this.presentedScene;if(i==null||r==null||!r.element.loaded){this.threeRenderer.clear();return}this.tracking===!1&&(this.tracking=!0,this.dispatchEvent({type:"tracking",status:lf.TRACKING}));let o=!0;for(const a of i.views){if(this.updateView(a),o){this.moveToFloor(t),this.processInput(t);const l=e-this.lastTick;this.moveScene(l),this.renderer.preRender(r,e,l),this.lastTick=e,r.renderShadow(this.threeRenderer)}this.threeRenderer.render(r,r.getCamera()),o=!1}}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e){e.threeRenderer.debug={checkShaderErrors:!0},Promise.resolve().then(()=>{self.dispatchEvent(new CustomEvent("model-viewer-renderer-debug",{detail:{renderer:e,THREE:{ShaderMaterial:ii,Texture:Tt,Mesh:Le,Scene:_s,PlaneGeometry:ar,OrthographicCamera:Lo,WebGLRenderTarget:ni}}}))})}addScene(e){self.dispatchEvent(new CustomEvent("model-viewer-scene-added-debug",{detail:{scene:e}}))}removeScene(e){self.dispatchEvent(new CustomEvent("model-viewer-scene-removed-debug",{detail:{scene:e}}))}}function s2(s){const e=new Map,t=new Map,n=s.clone();return sx(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function sx(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)sx(s.children[n],e.children[n],t)}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=Symbol("prepared"),Hc=Symbol("prepare"),li=Symbol("preparedGLTF"),Vc=Symbol("clone");class r2{constructor(e){this[li]=e}static prepare(e){if(e.scene==null)throw new Error("Model does not have a scene");if(e[t0])return e;const t=this[Hc](e);return t[t0]=!0,t}static[Hc](e){const{scene:t}=e,n=[t];return Object.assign(Object.assign({},e),{scene:t,scenes:n})}get parser(){return this[li].parser}get animations(){return this[li].animations}get scene(){return this[li].scene}get scenes(){return this[li].scenes}get cameras(){return this[li].cameras}get asset(){return this[li].asset}get userData(){return this[li].userData}clone(){const e=this.constructor,t=this[Vc]();return new e(t)}dispose(){this.scenes.forEach(e=>{e.traverse(t=>{if(!t.isMesh)return;const n=t;(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{for(const o in r){const a=r[o];if(a instanceof Tt){const l=a.source.data;l.close!=null&&l.close(),a.dispose()}}r.dispose()}),n.geometry.dispose()})})}[Vc](){const e=this[li],t=s2(this.scene);o2(t,this.scene);const n=[t],i=e.userData?Object.assign({},e.userData):{};return Object.assign(Object.assign({},e),{scene:t,scenes:n,userData:i})}}const o2=(s,e)=>{rx(s,e,(t,n)=>{n.userData.variantMaterials!==void 0&&(t.userData.variantMaterials=new Map(n.userData.variantMaterials)),n.userData.variantData!==void 0&&(t.userData.variantData=n.userData.variantData),n.userData.originalMaterial!==void 0&&(t.userData.originalMaterial=n.userData.originalMaterial)})},rx=(s,e,t)=>{t(s,e);for(let n=0;n<s.children.length;n++)rx(s.children[n],e.children[n],t)},n0=Symbol("threeGLTF"),i0=Symbol("gltf"),s0=Symbol("gltfElementMap"),r0=Symbol("threeObjectMap"),o0=Symbol("parallelTraverseThreeScene"),a0=Symbol("correlateOriginalThreeGLTF"),l0=Symbol("correlateCloneThreeGLTF");class Xa{constructor(e,t,n,i){this[n0]=e,this[i0]=t,this[s0]=i,this[r0]=n}static from(e,t){return t!=null?this[l0](e,t):this[a0](e)}static[a0](e){const t=e.parser.json,n=e.parser.associations,i=new Map,r={name:"Default"},o={type:"materials",index:-1};for(const a of n.keys())a instanceof Zn&&n.get(a)==null&&(o.index<0&&(t.materials==null&&(t.materials=[]),o.index=t.materials.length,t.materials.push(r)),a.name=r.name,n.set(a,{materials:o.index}));for(const[a,l]of n){if(l){const c=a;c.userData=c.userData||{},c.userData.associations=l}for(const c in l)if(c!=null&&c!=="primitives"){const h=c,d=(t[h]||[])[l[h]];if(d==null)continue;let f=i.get(d);f==null&&(f=new Set,i.set(d,f)),f.add(a)}}return new Xa(e,t,n,i)}static[l0](e,t){const n=t.threeGLTF,i=t.gltf,r=JSON.parse(JSON.stringify(i)),o=new Map,a=new Map;for(let l=0;l<n.scenes.length;l++)this[o0](n.scenes[l],e.scenes[l],(c,h)=>{const u=t.threeObjectMap.get(c);if(u!=null){for(const d in u)if(d!=null&&d!=="primitives"){const f=d,p=u[f],m=r[f][p],g=o.get(h)||{};g[f]=p,o.set(h,g);const A=a.get(m)||new Set;A.add(h),a.set(m,A)}}});return new Xa(e,r,o,a)}static[o0](e,t,n){const i=o=>o.isMesh,r=(o,a)=>{if(n(o,a),o.isObject3D){if(i(o))if(Array.isArray(o.material))for(let l=0;l<o.material.length;++l)r(o.material[l],a.material[l]);else r(o.material,a.material);for(let l=0;l<o.children.length;++l)r(o.children[l],a.children[l])}};r(e,t)}get threeGLTF(){return this[n0]}get gltf(){return this[i0]}get gltfElementMap(){return this[s0]}get threeObjectMap(){return this[r0]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=Symbol("correlatedSceneGraph");class a2 extends r2{static[Hc](e){const t=super[Hc](e);t[ia]==null&&(t[ia]=Xa.from(t));const{scene:n}=t,i=new si(void 0,1/0);return n.traverse(r=>{r.renderOrder=1e3,r.frustumCulled=!1,r.name||(r.name=r.uuid);const o=r;if(o.isMesh){const{geometry:a}=o;o.castShadow=!0,o.isSkinnedMesh&&(a.boundingSphere=i,a.boundingBox=null);const l=o.material;if(l.isMeshBasicMaterial===!0&&(l.toneMapped=!1),l.shadowSide=ti,l.aoMap){const{gltf:c,threeObjectMap:h}=t[ia],u=h.get(l);if(c.materials!=null&&u!=null&&u.materials!=null){const d=c.materials[u.materials];d.occlusionTexture&&d.occlusionTexture.texCoord===0&&a.attributes.uv!=null&&a.setAttribute("uv2",a.attributes.uv)}}}}),t}get correlatedSceneGraph(){return this[li][ia]}[Vc](){const e=super[Vc](),t=new Map;return e.scene.traverse(n=>{if(n.isMesh){const i=n,r=i.material;if(r!=null){if(t.has(r.uuid)){i.material=t.get(r.uuid);return}i.material=r.clone(),t.set(r.uuid,i.material)}}}),e[ia]=Xa.from(e,this.correlatedSceneGraph),e}}class l2 extends QB{constructor(e){super(e),this.type=un}parse(e){const a=function(_,v){switch(_){case 1:console.error("THREE.RGBELoader Read Error: "+(v||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(v||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(v||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(v||""))}return-1},u=`
`,d=function(_,v,I){v=v||1024;let T=_.pos,R=-1,y=0,M="",k=String.fromCharCode.apply(null,new Uint16Array(_.subarray(T,T+128)));for(;0>(R=k.indexOf(u))&&y<v&&T<_.byteLength;)M+=k,y+=k.length,T+=128,k+=String.fromCharCode.apply(null,new Uint16Array(_.subarray(T,T+128)));return-1<R?(I!==!1&&(_.pos+=y+R+1),M+k.slice(0,R)):!1},f=function(_){const v=/^#\?(\S+)/,I=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,S=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*FORMAT=(\S+)\s*$/,R=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,y={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let M,k;if(_.pos>=_.byteLength||!(M=d(_)))return a(1,"no header found");if(!(k=M.match(v)))return a(3,"bad initial token");for(y.valid|=1,y.programtype=k[1],y.string+=M+`
`;M=d(_),M!==!1;){if(y.string+=M+`
`,M.charAt(0)==="#"){y.comments+=M+`
`;continue}if((k=M.match(I))&&(y.gamma=parseFloat(k[1])),(k=M.match(S))&&(y.exposure=parseFloat(k[1])),(k=M.match(T))&&(y.valid|=2,y.format=k[1]),(k=M.match(R))&&(y.valid|=4,y.height=parseInt(k[1],10),y.width=parseInt(k[2],10)),y.valid&2&&y.valid&4)break}return y.valid&2?y.valid&4?y:a(3,"missing image size specifier"):a(3,"missing format specifier")},p=function(_,v,I){const S=v;if(S<8||S>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);if(S!==(_[2]<<8|_[3]))return a(3,"wrong scanline width");const T=new Uint8Array(4*v*I);if(!T.length)return a(4,"unable to allocate buffer space");let R=0,y=0;const M=4*S,k=new Uint8Array(4),W=new Uint8Array(M);let F=I;for(;F>0&&y<_.byteLength;){if(y+4>_.byteLength)return a(1);if(k[0]=_[y++],k[1]=_[y++],k[2]=_[y++],k[3]=_[y++],k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=S)return a(3,"bad rgbe scanline format");let P=0,V;for(;P<M&&y<_.byteLength;){V=_[y++];const G=V>128;if(G&&(V-=128),V===0||P+V>M)return a(3,"bad scanline data");if(G){const Q=_[y++];for(let J=0;J<V;J++)W[P++]=Q}else W.set(_.subarray(y,y+V),P),P+=V,y+=V}const $=S;for(let G=0;G<$;G++){let Q=0;T[R]=W[G+Q],Q+=S,T[R+1]=W[G+Q],Q+=S,T[R+2]=W[G+Q],Q+=S,T[R+3]=W[G+Q],R+=4}F--}return T},m=function(_,v,I,S){const T=_[v+3],R=Math.pow(2,T-128)/255;I[S+0]=_[v+0]*R,I[S+1]=_[v+1]*R,I[S+2]=_[v+2]*R,I[S+3]=1},g=function(_,v,I,S){const T=_[v+3],R=Math.pow(2,T-128)/255;I[S+0]=vl.toHalfFloat(Math.min(_[v+0]*R,65504)),I[S+1]=vl.toHalfFloat(Math.min(_[v+1]*R,65504)),I[S+2]=vl.toHalfFloat(Math.min(_[v+2]*R,65504)),I[S+3]=vl.toHalfFloat(1)},A=new Uint8Array(e);A.pos=0;const E=f(A);if(E!==-1){const _=E.width,v=E.height,I=p(A.subarray(A.pos),_,v);if(I!==-1){let S,T,R;switch(this.type){case hn:R=I.length/4;const y=new Float32Array(R*4);for(let k=0;k<R;k++)m(I,k*4,y,k*4);S=y,T=hn;break;case un:R=I.length/4;const M=new Uint16Array(R*4);for(let k=0;k<R;k++)g(I,k*4,M,k*4);S=M,T=un;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:_,height:v,data:S,header:E.string,gamma:E.gamma,exposure:E.exposure,type:T}}}return null}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case hn:case un:o.encoding=Kt,o.minFilter=pt,o.magFilter=pt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2 extends _s{constructor(){super(),this.position.y=-3.5;const e=new xs;e.deleteAttribute("uv");const t=new nr({metalness:0,side:Nt}),n=new nr({metalness:0}),i=new sA(16777215,500,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Le(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Le(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Le(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Le(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Le(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Le(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Le(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Le(e,this.createAreaLightMaterial(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Le(e,this.createAreaLightMaterial(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const p=new Le(e,this.createAreaLightMaterial(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const m=new Le(e,this.createAreaLightMaterial(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);const g=new Le(e,this.createAreaLightMaterial(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const A=new Le(e,this.createAreaLightMaterial(100));A.position.set(0,20,0),A.scale.set(1,.1,1),this.add(A)}createAreaLightMaterial(e){const t=new Kn;return t.color.setScalar(e),t}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2 extends _s{constructor(){super(),this.position.y=-3.5;const e=new xs;e.deleteAttribute("uv");const t=new nr({metalness:0,side:Nt}),n=new nr({metalness:0}),i=new sA(16777215,400,28,2);i.position.set(.5,14,.5),this.add(i);const r=new Le(e,t);r.position.set(0,13.2,0),r.scale.set(31.5,28.5,31.5),this.add(r);const o=new Le(e,n);o.position.set(-10.906,-1,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Le(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Le(e,n);l.position.set(6.167,-.16,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Le(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Le(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Le(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Le(e,this.createAreaLightMaterial(80));d.position.set(-14,10,8),d.scale.set(.1,2.5,2.5),this.add(d);const f=new Le(e,this.createAreaLightMaterial(80));f.position.set(-14,14,-4),f.scale.set(.1,2.5,2.5),this.add(f);const p=new Le(e,this.createAreaLightMaterial(23));p.position.set(14,12,0),p.scale.set(.1,5,5),this.add(p);const m=new Le(e,this.createAreaLightMaterial(16));m.position.set(0,9,14),m.scale.set(5,5,.1),this.add(m);const g=new Le(e,this.createAreaLightMaterial(80));g.position.set(7,8,-14),g.scale.set(2.5,2.5,.1),this.add(g);const A=new Le(e,this.createAreaLightMaterial(80));A.position.set(-7,16,-14),A.scale.set(2.5,2.5,.1),this.add(A);const E=new Le(e,this.createAreaLightMaterial(1));E.position.set(0,20,0),E.scale.set(.1,.1,.1),this.add(E)}createAreaLightMaterial(e){const t=new Kn;return t.color.setScalar(e),t}}const u2=.04,Dr=20,d2=/\.hdr(\.js)?$/;class c0 extends Nn{constructor(e){super(),this.threeRenderer=e,this.lottieLoaderUrl="",this.withCredentials=!1,this._ldrLoader=null,this._hdrLoader=null,this._lottieLoader=null,this.generatedEnvironmentMap=null,this.generatedEnvironmentMapAlt=null,this.skyboxCache=new Map,this.blurMaterial=null,this.blurScene=null}get ldrLoader(){return this._ldrLoader==null&&(this._ldrLoader=new pE),this._ldrLoader.setWithCredentials(this.withCredentials),this._ldrLoader}get hdrLoader(){return this._hdrLoader==null&&(this._hdrLoader=new l2,this._hdrLoader.setDataType(un)),this._hdrLoader.setWithCredentials(this.withCredentials),this._hdrLoader}async getLottieLoader(){if(this._lottieLoader==null){const{LottieLoader:e}=await sn(()=>import(this.lottieLoaderUrl),[]);this._lottieLoader=new e}return this._lottieLoader.setWithCredentials(this.withCredentials),this._lottieLoader}async loadImage(e){const t=await new Promise((n,i)=>this.ldrLoader.load(e,n,()=>{},i));return t.name=e,t.flipY=!1,t}async loadLottie(e,t){const n=await this.getLottieLoader();n.setQuality(t);const i=await new Promise((r,o)=>n.load(e,r,()=>{},o));return i.name=e,i}async loadEquirect(e,t=()=>{}){try{const n=d2.test(e),i=n?this.hdrLoader:this.ldrLoader,r=await new Promise((o,a)=>i.load(e,o,l=>{t(l.loaded/l.total*.9)},a));return t(1),r.name=e,r.mapping=Uc,n||(r.encoding=Ve),r}finally{t&&t(1)}}async generateEnvironmentMapAndSkybox(e=null,t=null,n=()=>{}){const i=t!=="legacy";(t==="legacy"||t==="neutral")&&(t=null),t=wE(t);let r=Promise.resolve(null),o;e&&(r=this.loadEquirectFromUrl(e,n)),t?o=this.loadEquirectFromUrl(t,n):e?o=this.loadEquirectFromUrl(e,n):o=i?this.loadGeneratedEnvironmentMapAlt():this.loadGeneratedEnvironmentMap();const[a,l]=await Promise.all([o,r]);if(a==null)throw new Error("Failed to load environment map.");return{environmentMap:a,skybox:l}}async loadEquirectFromUrl(e,t){if(!this.skyboxCache.has(e)){const n=this.loadEquirect(e,t);this.skyboxCache.set(e,n)}return this.skyboxCache.get(e)}async GenerateEnvironmentMap(e,t){await TR();const n=this.threeRenderer,i=new Yf(256,{generateMipmaps:!1,type:un,format:wt,encoding:Kt,depthBuffer:!0}),r=new Kd(.1,100,i),o=r.renderTarget.texture;o.name=t;const a=n.outputEncoding,l=n.toneMapping;return n.toneMapping=mi,n.outputEncoding=Kt,r.update(n,e),this.blurCubemap(i,u2),n.toneMapping=l,n.outputEncoding=a,o}async loadGeneratedEnvironmentMap(){return this.generatedEnvironmentMap==null&&(this.generatedEnvironmentMap=this.GenerateEnvironmentMap(new c2,"legacy")),this.generatedEnvironmentMap}async loadGeneratedEnvironmentMapAlt(){return this.generatedEnvironmentMapAlt==null&&(this.generatedEnvironmentMapAlt=this.GenerateEnvironmentMap(new h2,"neutral")),this.generatedEnvironmentMapAlt}blurCubemap(e,t){if(this.blurMaterial==null){this.blurMaterial=this.getBlurShader(Dr);const i=new xs,r=new Le(i,this.blurMaterial);this.blurScene=new _s,this.blurScene.add(r)}const n=e.clone();this.halfblur(e,n,t,"latitudinal"),this.halfblur(n,e,t,"longitudinal")}halfblur(e,t,n,i){const o=e.width,a=isFinite(n)?Math.PI/(2*o):2*Math.PI/(2*Dr-1),l=n/a,c=isFinite(n)?1+Math.floor(3*l):Dr;c>Dr&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${Dr}`);const h=[];let u=0;for(let p=0;p<Dr;++p){const m=p/l,g=Math.exp(-m*m/2);h.push(g),p==0?u+=g:p<c&&(u+=2*g)}for(let p=0;p<h.length;p++)h[p]=h[p]/u;const d=this.blurMaterial.uniforms;d.envMap.value=e.texture,d.samples.value=c,d.weights.value=h,d.latitudinal.value=i==="latitudinal",d.dTheta.value=a,new Kd(.1,100,t).update(this.threeRenderer,this.blurScene)}getBlurShader(e){const t=new Float32Array(e),n=new L(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},poleAxis:{value:n}},vertexShader:`
      
      varying vec3 vOutputDirection;
  
      void main() {
  
        vOutputDirection = vec3( position );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
      }
    `,fragmentShader:`
        varying vec3 vOutputDirection;
  
        uniform samplerCube envMap;
        uniform int samples;
        uniform float weights[ n ];
        uniform bool latitudinal;
        uniform float dTheta;
        uniform vec3 poleAxis;
  
        vec3 getSample( float theta, vec3 axis ) {
  
          float cosTheta = cos( theta );
          // Rodrigues' axis-angle rotation
          vec3 sampleDirection = vOutputDirection * cosTheta
            + cross( axis, vOutputDirection ) * sin( theta )
            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );
  
          return vec3( textureCube( envMap, sampleDirection ) );
  
        }
  
        void main() {
  
          vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );
  
          if ( all( equal( axis, vec3( 0.0 ) ) ) ) {
  
            axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );
  
          }
  
          axis = normalize( axis );
  
          gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
          gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );
  
          for ( int i = 1; i < n; i++ ) {
  
            if ( i >= samples ) {
  
              break;
  
            }
  
            float theta = dTheta * float( i );
            gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
            gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );
  
          }
        }
      `,blending:Hi,depthTest:!1,depthWrite:!1,side:Nt})}async dispose(){for(const[,e]of this.skyboxCache)(await e).dispose();this.generatedEnvironmentMap!=null&&((await this.generatedEnvironmentMap).dispose(),this.generatedEnvironmentMap=null),this.generatedEnvironmentMapAlt!=null&&((await this.generatedEnvironmentMapAlt).dispose(),this.generatedEnvironmentMapAlt=null),this.blurMaterial!=null&&this.blurMaterial.dispose()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=.2,Uu=40,Fu=60,h0=5,Pr=[1,.79,.62,.5,.4,.31,.25],A2=3,ox="high-performance";class Un extends Nn{constructor(e){super(),this.loader=new Pt(a2),this.width=0,this.height=0,this.dpr=1,this.debugger=null,this.scenes=new Set,this.multipleScenesVisible=!1,this.lastTick=performance.now(),this.renderedLastFrame=!1,this.scaleStep=0,this.lastStep=A2,this.avgFrameDuration=(Fu+Uu)/2,this.onWebGLContextLost=t=>{this.dispatchEvent({type:"contextlost",sourceEvent:t})},this.onWebGLContextRestored=()=>{var t;(t=this.textureUtils)===null||t===void 0||t.dispose(),this.textureUtils=new c0(this.threeRenderer);for(const n of this.scenes)n.element[Gc]()},this.dpr=sf(),this.canvas3D=document.createElement("canvas"),this.canvas3D.id="webgl-canvas",this.canvas3D.classList.add("show");try{this.threeRenderer=new oE({canvas:this.canvas3D,alpha:!0,antialias:!0,powerPreference:e.powerPreference,preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!0,this.threeRenderer.outputEncoding=Ve,this.threeRenderer.useLegacyLights=!1,this.threeRenderer.setPixelRatio(1),this.debugger=e.debug?new i2(this):null,this.threeRenderer.debug={checkShaderErrors:!!this.debugger},this.threeRenderer.toneMapping=Pv}catch(t){console.warn(t)}this.arRenderer=new n2(this),this.textureUtils=this.canRender?new c0(this.threeRenderer):null,Pt.initializeKTX2Loader(this.threeRenderer),this.canvas3D.addEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.addEventListener("webglcontextrestored",this.onWebGLContextRestored),this.updateRendererSize()}static get singleton(){return this._singleton}static resetSingleton(){const e=this._singleton.dispose();for(const t of e)t.disconnectedCallback();this._singleton=new Un({powerPreference:(self.ModelViewerElement||{}).powerPreference||ox,debug:ME()});for(const t of e)t.connectedCallback()}get canRender(){return this.threeRenderer!=null}get scaleFactor(){return Pr[this.scaleStep]}set minScale(e){let t=1;for(;t<Pr.length&&!(Pr[t]<e);)++t;this.lastStep=t-1}registerScene(e){this.scenes.add(e),e.forceRescale();const t=new ze;this.threeRenderer.getSize(t),e.canvas.width=t.x,e.canvas.height=t.y,this.canRender&&this.scenes.size>0&&this.threeRenderer.setAnimationLoop((n,i)=>this.render(n,i)),this.debugger!=null&&this.debugger.addScene(e)}unregisterScene(e){this.scenes.delete(e),this.canvas3D.parentElement===e.canvas.parentElement&&e.canvas.parentElement.removeChild(this.canvas3D),this.canRender&&this.scenes.size===0&&this.threeRenderer.setAnimationLoop(null),this.debugger!=null&&this.debugger.removeScene(e)}displayCanvas(e){return this.multipleScenesVisible?e.element[Af]:this.canvas3D}countVisibleScenes(){const{canvas3D:e}=this;let t=0,n=null;for(const r of this.scenes){const{element:o}=r;o.modelIsVisible&&r.externalRenderer==null&&++t,e.parentElement===r.canvas.parentElement&&(n=r)}const i=t>1;if(n!=null){const r=i&&!this.multipleScenesVisible,o=!n.element.modelIsVisible;if(r||o){const{width:a,height:l}=this.sceneSize(n);this.copyPixels(n,a,l),e.parentElement.removeChild(e)}}this.multipleScenesVisible=i}updateRendererSize(){const e=sf();if(e!==this.dpr)for(const i of this.scenes){const{element:r}=i;r[Wr](r.getBoundingClientRect())}let t=0,n=0;for(const i of this.scenes)t=Math.max(t,i.width),n=Math.max(n,i.height);if(!(t===this.width&&n===this.height&&e===this.dpr)){this.width=t,this.height=n,this.dpr=e,t=Math.ceil(t*e),n=Math.ceil(n*e),this.canRender&&this.threeRenderer.setSize(t,n,!1);for(const i of this.scenes){const{canvas:r}=i;r.width=t,r.height=n,i.forceRescale()}}}updateRendererScale(e){const t=this.scaleStep;this.avgFrameDuration+=Ai(f2*(e-this.avgFrameDuration),-h0,h0),this.avgFrameDuration>Fu?++this.scaleStep:this.avgFrameDuration<Uu&&this.scaleStep>0&&--this.scaleStep,this.scaleStep=Math.min(this.scaleStep,this.lastStep),t!==this.scaleStep&&(this.avgFrameDuration=(Fu+Uu)/2)}shouldRender(e){if(e.shouldRender())e.scaleStep!=this.scaleStep&&(e.scaleStep=this.scaleStep,this.rescaleCanvas(e));else if(e.scaleStep!=0)e.scaleStep=0,this.rescaleCanvas(e);else return!1;return!0}rescaleCanvas(e){const t=Pr[e.scaleStep],n=Math.ceil(this.width/t),i=Math.ceil(this.height/t),{style:r}=e.canvas;r.width=`${n}px`,r.height=`${i}px`,this.canvas3D.style.width=`${n}px`,this.canvas3D.style.height=`${i}px`;const o=this.dpr*t,a=t<1?"GPU throttling":this.dpr!==window.devicePixelRatio?"No meta viewport tag":"";e.element.dispatchEvent(new CustomEvent("render-scale",{detail:{reportedDpr:window.devicePixelRatio,renderedDpr:o,minimumDpr:this.dpr*Pr[this.lastStep],pixelWidth:Math.ceil(e.width*o),pixelHeight:Math.ceil(e.height*o),reason:a}}))}sceneSize(e){const{dpr:t}=this,n=Pr[e.scaleStep],i=Math.min(Math.ceil(e.width*n*t),this.canvas3D.width),r=Math.min(Math.ceil(e.height*n*t),this.canvas3D.height);return{width:i,height:r}}copyPixels(e,t,n){const i=e.context;if(i==null){console.log("could not acquire 2d context");return}i.clearRect(0,0,t,n),i.drawImage(this.canvas3D,0,0,t,n,0,0,t,n),e.canvas.classList.add("show")}orderedScenes(){const e=[];for(const t of[!1,!0])for(const n of this.scenes)n.element.modelIsVisible===t&&e.push(n);return e}get isPresenting(){return this.arRenderer.isPresenting}preRender(e,t,n){const{element:i,exposure:r}=e;i[xi](t,n);const o=typeof r=="number"&&!Number.isNaN(r);this.threeRenderer.toneMappingExposure=o?r:1}render(e,t){if(t!=null){this.arRenderer.onWebXRFrame(e,t);return}const n=e-this.lastTick;if(this.lastTick=e,!this.canRender||this.isPresenting)return;this.countVisibleScenes(),this.updateRendererSize(),this.renderedLastFrame&&(this.updateRendererScale(n),this.renderedLastFrame=!1);const{canvas3D:i}=this;for(const r of this.orderedScenes()){const{element:o}=r;if(!o.loaded||!o.modelIsVisible&&r.renderCount>0||(this.preRender(r,e,n),!this.shouldRender(r)))continue;if(r.externalRenderer!=null){const c=r.getCamera();c.updateMatrix();const{matrix:h,projectionMatrix:u}=c,d=h.elements.slice(),f=r.getTarget();d[12]+=f.x,d[13]+=f.y,d[14]+=f.z,r.externalRenderer.render({viewMatrix:d,projectionMatrix:u.elements});continue}if(!o.modelIsVisible&&!this.multipleScenesVisible)for(const c of this.scenes)c.element.modelIsVisible&&c.queueRender();const{width:a,height:l}=this.sceneSize(r);r.renderShadow(this.threeRenderer),this.threeRenderer.setRenderTarget(null),this.threeRenderer.setViewport(0,Math.ceil(this.height*this.dpr)-l,a,l),this.threeRenderer.render(r,r.camera),this.multipleScenesVisible||!r.element.modelIsVisible&&r.renderCount===0?this.copyPixels(r,a,l):i.parentElement!==r.canvas.parentElement&&(r.canvas.parentElement.appendChild(i),r.canvas.classList.remove("show")),r.hasRendered(),++r.renderCount,this.renderedLastFrame=!0}}dispose(){this.textureUtils!=null&&this.textureUtils.dispose(),this.threeRenderer!=null&&this.threeRenderer.dispose(),this.textureUtils=null,this.threeRenderer=null;const e=[];for(const t of this.scenes)e.push(t.element);return this.canvas3D.removeEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.removeEventListener("webglcontextrestored",this.onWebGLContextRestored),e}}Un._singleton=new Un({powerPreference:(self.ModelViewerElement||{}).powerPreference||ox,debug:ME()});/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=Symbol("correlatedObjects"),nt=Symbol("sourceObject"),qn=Symbol("onUpdate");class nl{constructor(e,t,n=null){this[qn]=e,this[nt]=t,this[Ct]=n}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=new Kn,p2=new ar(2,2);let g2=0;const ls=Symbol("threeTexture");let m2=class extends nl{get[ls](){var e;return console.assert(this[Ct]!=null&&this[Ct].size>0,"Image correlated object is undefined"),(e=this[Ct])===null||e===void 0?void 0:e.values().next().value}constructor(e,t,n){n=n??{name:t&&t.image&&t.image.src?t.image.src.split("/").pop():"adhoc_image",uri:t&&t.image&&t.image.src?t.image.src:"adhoc_image"+g2++},super(e,n,new Set(t?[t]:[]))}get name(){return this[nt].name||""}get uri(){return this[nt].uri}get bufferView(){return this[nt].bufferView}get element(){const e=this[ls];if(e&&(e.isCanvasTexture||e.isVideoTexture))return e.image}get animation(){const e=this[ls];if(e&&e.isCanvasTexture&&e.animation)return e.animation}get type(){return this.uri!=null?"external":"embedded"}set name(e){this[nt].name=e}update(){const e=this[ls];e&&e.isCanvasTexture&&!e.animation&&(this[ls].needsUpdate=!0,this[qn]())}async createThumbnail(e,t){const n=new _s;u0.map=this[ls];const i=new Le(p2,u0);n.add(i);const r=new Lo(-1,1,1,-1,0,1),{threeRenderer:o}=Un.singleton,a=new ni(e,t);o.setRenderTarget(a),o.render(n,r),o.setRenderTarget(null);const l=new Uint8Array(e*t*4);o.readRenderTargetPixels(a,0,0,e,t,l),Bn.width=e,Bn.height=t;const c=Bn.getContext("2d"),h=c.createImageData(e,t);return h.data.set(l),c.putImageData(h,0,0),new Promise(async(u,d)=>{Bn.toBlob(f=>{if(!f)return d("Failed to capture thumbnail.");u(URL.createObjectURL(f))},"image/png")})}};var Ln;(function(s){s[s.Nearest=9728]="Nearest",s[s.Linear=9729]="Linear",s[s.NearestMipmapNearest=9984]="NearestMipmapNearest",s[s.LinearMipmapNearest=9985]="LinearMipmapNearest",s[s.NearestMipmapLinear=9986]="NearestMipmapLinear",s[s.LinearMipmapLinear=9987]="LinearMipmapLinear"})(Ln||(Ln={}));var er;(function(s){s[s.ClampToEdge=33071]="ClampToEdge",s[s.MirroredRepeat=33648]="MirroredRepeat",s[s.Repeat=10497]="Repeat"})(er||(er={}));/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2=(()=>{const s=[Ln.Nearest,Ln.Linear,Ln.NearestMipmapNearest,Ln.LinearMipmapLinear,Ln.NearestMipmapLinear,Ln.LinearMipmapLinear];return e=>s.indexOf(e)>-1})(),v2=(()=>{const s=[Ln.Nearest,Ln.Linear];return e=>s.indexOf(e)>-1})(),E2=(()=>{const s=[er.ClampToEdge,er.MirroredRepeat,er.Repeat];return e=>s.indexOf(e)>-1})(),x2=(s,e)=>{switch(s){case"minFilter":return _2(e);case"magFilter":return v2(e);case"wrapS":case"wrapT":return E2(e);default:throw new Error(`Cannot configure property "${s}" on Sampler`)}},d0=Symbol("threeTextures"),sa=Symbol("setProperty"),Ur=Symbol("sourceSampler");class y2 extends nl{get[d0](){return console.assert(this[Ct]!=null&&this[Ct].size>0,"Sampler correlated object is undefined"),this[Ct]}get[Ur](){return console.assert(this[nt]!=null,"Sampler source is undefined"),this[nt]}constructor(e,t,n){n=n??{},n.minFilter==null&&(n.minFilter=t?t.minFilter:Ln.LinearMipmapLinear),n.magFilter==null&&(n.magFilter=t?t.magFilter:Ln.Linear),n.wrapS==null&&(n.wrapS=t?t.wrapS:er.Repeat),n.wrapT==null&&(n.wrapT=t?t.wrapT:er.Repeat),super(e,n,new Set(t?[t]:[]))}get name(){return this[nt].name||""}get minFilter(){return this[Ur].minFilter}get magFilter(){return this[Ur].magFilter}get wrapS(){return this[Ur].wrapS}get wrapT(){return this[Ur].wrapT}setMinFilter(e){this[sa]("minFilter",e)}setMagFilter(e){this[sa]("magFilter",e)}setWrapS(e){this[sa]("wrapS",e)}setWrapT(e){this[sa]("wrapT",e)}[sa](e,t){const n=this[Ur];if(n!=null){if(x2(e,t)){n[e]=t;for(const i of this[d0])i[e]=t,i.needsUpdate=!0}this[qn]()}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=Symbol("image"),A0=Symbol("sampler");class ax extends nl{constructor(e,t,n=null,i=null,r=null){super(e,n||{},new Set(t?[t]:[])),this[A0]=new y2(e,t,i),this[f0]=new m2(e,t,r)}get name(){return this[nt].name||""}set name(e){this[nt].name=e}get sampler(){return this[A0]}get source(){return this[f0]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lx,cx,hx;const Gs=Symbol("texture"),Hs=Symbol("transform"),Nu=Symbol("materials"),p0=Symbol("usage"),Fr=Symbol("onUpdate"),ya=Symbol("activeVideo");var Pn;(function(s){s[s.Base=0]="Base",s[s.MetallicRoughness=1]="MetallicRoughness",s[s.Normal=2]="Normal",s[s.Occlusion=3]="Occlusion",s[s.Emissive=4]="Emissive"})(Pn||(Pn={}));class La{constructor(e,t,n,i,r,o){if(this[lx]=null,this[cx]={rotation:0,scale:new ze(1,1),offset:new ze(0,0)},this[hx]=!1,o&&n){const a=r.textures?r.textures[o.index]:null,l=a&&r.samplers?r.samplers[a.sampler]:null,c=a&&r.images?r.images[a.source]:null;this[Hs].rotation=n.rotation,this[Hs].scale.copy(n.repeat),this[Hs].offset.copy(n.offset),this[Gs]=new ax(e,n,a,l,c)}this[Fr]=e,this[Nu]=i,this[p0]=t}get texture(){return this[Gs]}setTexture(e){var t,n;const i=e!=null?e.source[ls]:null,r=(t=this[Gs])===null||t===void 0?void 0:t.source[ls];if(r!=null&&r.isVideoTexture?this[ya]=!1:!((n=this[Gs])===null||n===void 0)&&n.source.animation&&this[Gs].source.animation.removeEventListener("enterFrame",this[Fr]),this[Gs]=e,i!=null&&i.isVideoTexture){const a=i.image;if(this[ya]=!0,a.requestVideoFrameCallback!=null){const l=()=>{this[ya]&&(this[Fr](),a.requestVideoFrameCallback(l))};a.requestVideoFrameCallback(l)}else{const l=()=>{this[ya]&&(this[Fr](),requestAnimationFrame(l))};requestAnimationFrame(l)}}else(e==null?void 0:e.source.animation)!=null&&e.source.animation.addEventListener("enterFrame",this[Fr]);let o=Ve;if(this[Nu])for(const a of this[Nu]){switch(this[p0]){case Pn.Base:a.map=i;break;case Pn.MetallicRoughness:o=Kt,a.metalnessMap=i,a.roughnessMap=i;break;case Pn.Normal:o=Kt,a.normalMap=i;break;case Pn.Occlusion:o=Kt,a.aoMap=i;break;case Pn.Emissive:a.emissiveMap=i;break}a.needsUpdate=!0}i&&(i.encoding=o,i.rotation=this[Hs].rotation,i.repeat=this[Hs].scale,i.offset=this[Hs].offset),this[Fr]()}}lx=Gs,cx=Hs,hx=ya;/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=Symbol("threeMaterials"),g0=Symbol("baseColorTexture"),m0=Symbol("metallicRoughnessTexture");class I2 extends nl{constructor(e,t,n,i){super(e,n,i),n.baseColorFactor==null&&(n.baseColorFactor=[1,1,1,1]),n.roughnessFactor==null&&(n.roughnessFactor=1),n.metallicFactor==null&&(n.metallicFactor=1);const{baseColorTexture:r,metallicRoughnessTexture:o}=n,{map:a,metalnessMap:l}=i.values().next().value;this[g0]=new La(e,Pn.Base,a,i,t,r||null),this[m0]=new La(e,Pn.MetallicRoughness,l,i,t,o||null)}get[Xl](){return this[Ct]}get baseColorFactor(){return this[nt].baseColorFactor}get metallicFactor(){return this[nt].metallicFactor}get roughnessFactor(){return this[nt].roughnessFactor}get baseColorTexture(){return this[g0]}get metallicRoughnessTexture(){return this[m0]}setBaseColorFactor(e){const t=new Ne;e instanceof Array?t.fromArray(e):t.set(e).convertSRGBToLinear();for(const i of this[Xl])i.color.set(t),e instanceof Array?i.opacity=e[3]:(e=[0,0,0,i.opacity],t.toArray(e));const n=this[nt];n.baseColorFactor=e,this[qn]()}setMetallicFactor(e){for(const n of this[Xl])n.metalness=e;const t=this[nt];t.metallicFactor=e,this[qn]()}setRoughnessFactor(e){for(const n of this[Xl])n.roughness=e;const t=this[nt];t.roughnessFactor=e,this[qn]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _0;const v0=Symbol("pbrMetallicRoughness"),E0=Symbol("normalTexture"),x0=Symbol("occlusionTexture"),y0=Symbol("emissiveTexture"),C2=Symbol("backingThreeMaterial"),Qu=Symbol("applyAlphaCutoff"),Ds=Symbol("lazyLoadGLTFInfo"),Ou=Symbol("initialize"),cf=Symbol("getLoadedMaterial"),pn=Symbol("ensureMaterialIsLoaded"),I0=Symbol("gltfIndex"),Ia=Symbol("setActive"),Sc=Symbol("variantIndices"),ku=Symbol("isActive"),wc=Symbol("variantSet"),C0=Symbol("modelVariants");class Gu extends nl{constructor(e,t,n,i,r,o,a,l=void 0){super(e,n,a),this[_0]=new Set,this[I0]=i,this[ku]=r,this[C0]=o,l==null?this[Ou](t):this[Ds]=l}get[(_0=wc,C2)](){return this[Ct].values().next().value}[Ou](e){const t=this[qn],n=this[nt],i=this[Ct];n.extensions&&n.extensions.KHR_materials_pbrSpecularGlossiness&&console.warn(`Material ${n.name} uses a deprecated extension
          "KHR_materials_pbrSpecularGlossiness", please use
          "pbrMetallicRoughness" instead. Specular Glossiness materials are
          no longer supported; to convert to metal-rough, see 
          https://www.donmccurdy.com/2022/11/28/converting-gltf-pbr-materials-from-specgloss-to-metalrough/.`),n.pbrMetallicRoughness==null&&(n.pbrMetallicRoughness={}),this[v0]=new I2(t,e,n.pbrMetallicRoughness,i),n.emissiveFactor==null&&(n.emissiveFactor=[0,0,0]),n.doubleSided==null&&(n.doubleSided=!1),n.alphaMode==null&&(n.alphaMode="OPAQUE"),n.alphaCutoff==null&&(n.alphaCutoff=.5);const{normalTexture:r,occlusionTexture:o,emissiveTexture:a}=n,{normalMap:l,aoMap:c,emissiveMap:h}=i.values().next().value;this[E0]=new La(t,Pn.Normal,l,i,e,r||null),this[x0]=new La(t,Pn.Occlusion,c,i,e,o||null),this[y0]=new La(t,Pn.Emissive,h,i,e,a||null)}async[cf](){if(this[Ds]!=null){const{set:e,material:t}=await this[Ds].doLazyLoad();return this[Ct]=e,this[Ou](this[Ds].gltf),this[Ds]=void 0,this.ensureLoaded=async()=>{},t}return this[Ct].values().next().value}[pn](){if(this[Ds]!=null)throw new Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[cf]()}get isLoaded(){return this[Ds]==null}get isActive(){return this[ku]}[Ia](e){this[ku]=e}get name(){return this[nt].name}set name(e){const t=this[nt];if(t!=null&&(t.name=e),this[Ct]!=null)for(const n of this[Ct])n.name=e}get pbrMetallicRoughness(){return this[pn](),this[v0]}get normalTexture(){return this[pn](),this[E0]}get occlusionTexture(){return this[pn](),this[x0]}get emissiveTexture(){return this[pn](),this[y0]}get emissiveFactor(){return this[pn](),this[nt].emissiveFactor}get index(){return this[I0]}[Sc](){return this[wc]}hasVariant(e){const t=this[C0].get(e);return t!=null&&this[wc].has(t.index)}setEmissiveFactor(e){this[pn]();const t=new Ne;e instanceof Array?t.fromArray(e):t.set(e).convertSRGBToLinear();for(const n of this[Ct])n.emissive.set(t);this[nt].emissiveFactor=t.toArray(),this[qn]()}[Qu](){this[pn]();const e=this[nt];for(const t of this[Ct])this[nt].alphaMode==="MASK"?t.alphaTest=e.alphaCutoff:t.alphaTest=void 0,t.needsUpdate=!0}setAlphaCutoff(e){this[pn](),this[nt].alphaCutoff=e,this[Qu](),this[qn]()}getAlphaCutoff(){return this[pn](),this[nt].alphaCutoff}setDoubleSided(e){this[pn]();for(const t of this[Ct])t.side=e?ln:ti,t.needsUpdate=!0;this[nt].doubleSided=e,this[qn]()}getDoubleSided(){return this[pn](),this[nt].doubleSided}setAlphaMode(e){this[pn]();const t=(n,i)=>{n.transparent=i,n.depthWrite=!i};this[nt].alphaMode=e;for(const n of this[Ct])t(n,e==="BLEND"),this[Qu](),n.needsUpdate=!0;this[qn]()}getAlphaMode(){return this[pn](),this[nt].alphaMode}}let ux=class{constructor(e){this.name="",this.children=new Array,this.name=e}};class Hu extends ux{constructor(e,t,n,i){super(e.name),this.materials=new Map,this.variantToMaterialMap=new Map,this.initialMaterialIdx=0,this.activeMaterialIdx=0,this.mesh=e;const{gltf:r,threeGLTF:o,threeObjectMap:a}=i;this.modelVariants=n,this.mesh.userData.variantData=n;const l=a.get(e.material);l.materials!=null?this.initialMaterialIdx=this.activeMaterialIdx=l.materials:console.error(`Primitive (${e.name}) missing initial material reference.`);const c=e.userData.associations||{};if(c.meshes==null){console.error("Mesh is missing primitive index association");return}const d=((r.meshes||[])[c.meshes].primitives||[])[c.primitives];if(d==null){console.error("Mesh primitive definition is missing.");return}if(d.material!=null)this.materials.set(d.material,t[d.material]);else{const f=t.findIndex(p=>p.name==="Default");f>=0?this.materials.set(f,t[f]):console.warn("gltfPrimitive has no material!")}if(d.extensions&&d.extensions.KHR_materials_variants){const f=d.extensions.KHR_materials_variants,m=o.parser.json.extensions.KHR_materials_variants.variants;for(const g of f.mappings){const A=t[g.material];this.materials.set(g.material,A);for(const E of g.variants){const{name:_}=m[E];this.variantToMaterialMap.set(E,A),A[Sc]().add(E),n.has(_)||n.set(_,{name:_,index:E})}}}}async setActiveMaterial(e){const t=this.materials.get(e);return t!=null&&(this.mesh.material=await t[cf](),this.activeMaterialIdx=e),this.mesh.material}getActiveMaterial(){return this.materials.get(this.activeMaterialIdx)}getMaterial(e){return this.materials.get(e)}async enableVariant(e){if(e==null)return this.setActiveMaterial(this.initialMaterialIdx);if(this.variantToMaterialMap!=null&&this.modelVariants.has(e)){const t=this.modelVariants.get(e);return this.enableVariantHelper(t.index)}return null}async enableVariantHelper(e){if(this.variantToMaterialMap!=null&&e!=null){const t=this.variantToMaterialMap.get(e);if(t!=null)return this.setActiveMaterial(t.index)}return null}async instantiateVariants(){if(this.variantToMaterialMap!=null)for(const e of this.variantToMaterialMap.keys()){const t=this.mesh.userData.variantMaterials.get(e);if(t.material!=null)continue;const n=await this.enableVariantHelper(e);n!=null&&(t.material=n)}}get variantInfo(){return this.variantToMaterialMap}addVariant(e,t){if(!this.ensureVariantIsUnused(t))return!1;this.modelVariants.has(t)||this.modelVariants.set(t,{name:t,index:this.modelVariants.size});const i=this.modelVariants.get(t).index;return e[Sc]().add(i),this.variantToMaterialMap.set(i,e),this.materials.set(e.index,e),this.updateVariantUserData(i,e),!0}deleteVariant(e){if(this.variantInfo.has(e)){this.variantInfo.delete(e);const t=this.mesh.userData.variantMaterials;t!=null&&t.delete(e)}}updateVariantUserData(e,t){t[Sc]().add(e),this.mesh.userData.variantData=this.modelVariants,this.mesh.userData.variantMaterials=this.mesh.userData.variantMaterials||new Map,this.mesh.userData.variantMaterials.set(e,{material:t[Ct].values().next().value,gltfMaterialIndex:t.index})}ensureVariantIsUnused(e){const t=this.modelVariants.get(e);return t!=null&&this.variantInfo.has(t.index)?(console.warn(`Primitive cannot add variant '${e}' for this material, it already exists.`),!1):!0}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S0,w0,M0,b0,T0,B0;const Ps=Symbol("materials"),Jl=Symbol("hierarchy"),R0=Symbol("roots"),Di=Symbol("primitives"),Vu=Symbol("correlatedSceneGraph"),dx=Symbol("prepareVariantsForExport"),fx=Symbol("switchVariant"),Ax=Symbol("materialFromPoint"),hf=Symbol("nodeFromPoint"),px=Symbol("nodeFromIndex"),Wt=Symbol("variantData"),uf=Symbol("availableVariants"),zu=Symbol("modelOnUpdate"),L0=Symbol("cloneMaterial");class S2{constructor(e,t,n,i){this.gltf=e,this.gltfElementMap=t,this.mapKey=n,this.doLazyLoad=i}}class w2{constructor(e,t=()=>{}){this[S0]=new Array,this[w0]=new Array,this[M0]=new Array,this[b0]=new Array,this[T0]=()=>{},this[B0]=new Map,this[zu]=t,this[Vu]=e;const{gltf:n,threeGLTF:i,gltfElementMap:r}=e;for(const[l,c]of n.materials.entries()){const h=r.get(c);if(h!=null)this[Ps].push(new Gu(t,n,c,l,!0,this[Wt],h));else{const d=(n.materials||[])[l],f=l,p=async()=>{const m=await i.parser.getDependency("material",f),g=new Set;return r.set(d,g),g.add(m),{set:g,material:m}};this[Ps].push(new Gu(t,n,d,l,!1,this[Wt],h,new S2(n,r,d,p)))}}const o=new Map,a=new Array;for(const l of i.scene.children)a.push(l);for(;a.length>0;){const l=a.pop();let c=null;l instanceof Le?(c=new Hu(l,this.materials,this[Wt],e),this[Di].push(c)):c=new ux(l.name);const h=o.get(l);h!=null?h.children.push(c):this[R0].push(c),this[Jl].push(c);for(const u of l.children)a.push(u),o.set(l,c)}}get materials(){return this[Ps]}[(S0=Ps,w0=Jl,M0=R0,b0=Di,T0=zu,B0=Wt,uf)](){const e=Array.from(this[Wt].values());return e.sort((t,n)=>t.index-n.index),e.map(t=>t.name)}getMaterialByName(e){const t=this[Ps].filter(n=>n.name===e);return t.length>0?t[0]:null}[px](e,t){const n=this[Jl].find(i=>{if(i instanceof Hu){const{meshes:r,primitives:o}=i.mesh.userData.associations;if(r==e&&o==t)return!0}return!1});return n??null}[hf](e){return this[Jl].find(t=>t instanceof Hu&&t.mesh===e.object)}[Ax](e){return this[hf](e).getActiveMaterial()}async[fx](e){for(const t of this[Di])await t.enableVariant(e);for(const t of this.materials)t[Ia](!1);for(const t of this[Di])this.materials[t.getActiveMaterial().index][Ia](!0)}async[dx](){const e=new Array;for(const t of this[Di])e.push(t.instantiateVariants());await Promise.all(e)}[L0](e,t){const n=this.materials[e];n.isLoaded||console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);const i=n[Ct],r=JSON.parse(JSON.stringify(n[nt]));r.name=t,this[Vu].gltf.materials.push(r);const a=new Set;for(const[c,h]of i.entries()){const u=h.clone();u.name=t+(i.size>1?"_inst"+c:""),a.add(u)}const l=new Gu(this[zu],this[Vu].gltf,r,this[Ps].length,!1,this[Wt],a);return this[Ps].push(l),l}createMaterialInstanceForVariant(e,t,n,i=!0){let r=null;for(const o of this[Di]){const a=this[Wt].get(n);a!=null&&o.variantInfo.has(a.index)||o.getMaterial(e)!=null&&(this.hasVariant(n)||this.createVariant(n),r==null&&(r=this[L0](e,t)),o.addVariant(r,n))}if(i&&r!=null){r[Ia](!0),this.materials[e][Ia](!1);for(const o of this[Di])o.enableVariant(n)}return r}createVariant(e){this[Wt].has(e)?console.warn(`Variant '${e}'' already exists`):this[Wt].set(e,{name:e,index:this[Wt].size})}hasVariant(e){return this[Wt].has(e)}setMaterialToVariant(e,t){if(this[uf]().find(n=>n===t)==null){console.warn(`Can't add material to '${t}', the variant does not exist.'`);return}if(e<0||e>=this.materials.length){console.error("setMaterialToVariant(): materialIndex is out of bounds.");return}for(const n of this[Di]){const i=n.getMaterial(e);i!=null&&n.addVariant(i,t)}}updateVariantName(e,t){const n=this[Wt].get(e);n!=null&&(n.name=t,this[Wt].set(t,n),this[Wt].delete(e))}deleteVariant(e){const t=this[Wt].get(e);if(t!=null){for(const n of this.materials)n.hasVariant(e)&&n[wc].delete(t.index);for(const n of this[Di])n.deleteVariant(t.index);this[Wt].delete(e)}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wu=globalThis&&globalThis.__decorate||function(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r};const Mc=Symbol("currentGLTF"),bc=Symbol("originalGltfJson"),Vs=Symbol("model"),qu=Symbol("getOnUpdateMethod"),ra=Symbol("buildTexture"),M2=s=>{var e,t,n;class i extends s{constructor(){super(...arguments),this[e]=void 0,this[t]=null,this[n]=null,this.variantName=null,this.orientation="0 0 0",this.scale="1 1 1"}get model(){return this[Vs]}get availableVariants(){return this.model?this.model[uf]():[]}get originalGltfJson(){return this[bc]}[(e=Vs,t=Mc,n=bc,qu)](){return()=>{this[mn]()}}[ra](o){return o.encoding=Ve,o.wrapS=Wi,o.wrapT=Wi,new ax(this[qu](),o)}async createTexture(o,a="image/png"){const{textureUtils:l}=this[rt],c=await l.loadImage(o);return c.userData.mimeType=a,this[ra](c)}async createLottieTexture(o,a=1){const{textureUtils:l}=this[rt],c=await l.loadLottie(o,a);return this[ra](c)}createVideoTexture(o){const a=document.createElement("video");a.src=o,a.muted=!0,a.playsInline=!0,a.loop=!0,a.play();const l=new SB(a);return this[ra](l)}createCanvasTexture(){const o=document.createElement("canvas"),a=new MB(o);return this[ra](a)}async updated(o){if(super.updated(o),o.has("variantName")){const a=this[sr].beginActivity();a(.1);const l=this[Vs],{variantName:c}=this;l!=null&&(await l[fx](c),this[mn](),this.dispatchEvent(new CustomEvent("variant-applied"))),a(1)}if(o.has("orientation")||o.has("scale")){if(!this.loaded)return;const a=this[Ie];a.applyTransform(),a.updateBoundingBox(),a.updateShadow(),this[rt].arRenderer.onUpdateScene(),this[mn]()}}[Es](){super[Es]();const{currentGLTF:o}=this[Ie];if(o!=null){const{correlatedSceneGraph:a}=o;a!=null&&o!==this[Mc]&&(this[Vs]=new w2(a,this[qu]()),this[bc]=JSON.parse(JSON.stringify(a.gltf))),"variants"in o.userData&&this.requestUpdate("variantName")}this[Mc]=o}async exportScene(o){const a=this[Ie];return new Promise(async(l,c)=>{const h={binary:!0,onlyVisible:!0,maxTextureSize:1/0,includeCustomExtensions:!1,forceIndices:!1};Object.assign(h,o),h.animations=a.animations,h.truncateDrawRange=!0;const u=a.shadow;let d=!1;u!=null&&(d=u.visible,u.visible=!1),await this[Vs][dx](),new uA().register(p=>new rD(p)).parse(a.model,p=>l(new Blob([h.binary?p:JSON.stringify(p)],{type:h.binary?"application/octet-stream":"application/json"})),()=>c("glTF export failed"),h),u!=null&&(u.visible=d)})}materialFromPoint(o,a){const l=this[Vs];if(l==null)return null;const c=this[Ie],h=c.getNDC(o,a),u=c.hitFromPoint(h);return u==null||u.face==null?null:l[Ax](u)}}return Wu([Fe({type:String,attribute:"variant-name"})],i.prototype,"variantName",void 0),Wu([Fe({type:String,attribute:"orientation"})],i.prototype,"orientation",void 0),Wu([Fe({type:String,attribute:"scale"})],i.prototype,"scale",void 0),i};/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new L,$u=new L,ju=new L,ec=new We,D0=new In,P0=new Fn;class gx extends QL{constructor(e){super(document.createElement("div")),this.normal=new L(0,1,0),this.initialized=!1,this.referenceCount=1,this.pivot=document.createElement("div"),this.slot=document.createElement("slot"),this.element.classList.add("annotation-wrapper"),this.slot.name=e.name,this.element.appendChild(this.pivot),this.pivot.appendChild(this.slot),this.updatePosition(e.position),this.updateNormal(e.normal),this.surface=e.surface}get facingCamera(){return!this.element.classList.contains("hide")}show(){(!this.facingCamera||!this.initialized)&&this.updateVisibility(!0)}hide(){(this.facingCamera||!this.initialized)&&this.updateVisibility(!1)}increment(){this.referenceCount++}decrement(){return this.referenceCount>0&&--this.referenceCount,this.referenceCount===0}updatePosition(e){if(e==null)return;const t=gs(e)[0].terms;for(let n=0;n<3;++n)this.position.setComponent(n,Vi(t[n]).number);this.updateMatrixWorld()}updateNormal(e){if(e==null)return;const t=gs(e)[0].terms;for(let n=0;n<3;++n)this.normal.setComponent(n,t[n].number)}updateSurface(e){if(!e&&this.initialized)return;const{mesh:t,tri:n,bary:i}=this;if(t==null||n==null||i==null)return;t.getVertexPosition(n.x,Zl),t.getVertexPosition(n.y,$u),t.getVertexPosition(n.z,ju),Zl.toArray(ec.elements,0),$u.toArray(ec.elements,3),ju.toArray(ec.elements,6),this.position.copy(i).applyMatrix3(ec);const r=this.parent;r.worldToLocal(t.localToWorld(this.position)),D0.set(Zl,$u,ju),D0.getNormal(this.normal).transformDirection(t.matrixWorld);const o=r.parent;P0.setFromAxisAngle(Zl.set(0,1,0),-o.yaw),this.normal.applyQuaternion(P0)}orient(e){this.pivot.style.transform=`rotate(${e}rad)`}updateVisibility(e){e?this.element.classList.remove("hide"):this.element.classList.add("hide"),this.slot.assignedNodes().forEach(t=>{if(t.nodeType!==Node.ELEMENT_NODE)return;const n=t,i=n.dataset.visibilityAttribute;if(i!=null){const r=`data-${i}`;e?n.setAttribute(r,""):n.removeAttribute(r)}n.dispatchEvent(new CustomEvent("hotspot-visibility",{detail:{visible:e}}))}),this.initialized=!0}}const b2={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},T2={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`};function U0(s,e,t){return(1-t)*s+t*e}/* @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=9,B2=6,Ku=2,R2=.3;class L2 extends ht{constructor(e,t,n){super(),this.camera=new Lo,this.renderTarget=null,this.renderTargetBlur=null,this.depthMaterial=new rE,this.horizontalBlurMaterial=new ii(b2),this.verticalBlurMaterial=new ii(T2),this.intensity=0,this.softness=1,this.boundingBox=new cn,this.size=new L,this.maxDimension=0,this.isAnimated=!1,this.needsUpdate=!1;const{camera:i}=this;i.rotation.x=Math.PI/2,i.left=-.5,i.right=.5,i.bottom=-.5,i.top=.5,this.add(i);const r=new ar,o=new Kn({opacity:1,transparent:!0,side:Nt});this.floor=new Le(r,o),this.floor.userData.shadow=!0,i.add(this.floor),this.blurPlane=new Le(r),this.blurPlane.visible=!1,i.add(this.blurPlane),e.target.add(this),this.depthMaterial.onBeforeCompile=function(a){a.fragmentShader=a.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );")},this.horizontalBlurMaterial.depthTest=!1,this.verticalBlurMaterial.depthTest=!1,this.setScene(e,t,n)}setScene(e,t,n){const{boundingBox:i,size:r,rotation:o,position:a}=this;if(this.isAnimated=e.animationNames.length>0,this.boundingBox.copy(e.boundingBox),this.size.copy(e.size),this.maxDimension=Math.max(r.x,r.y,r.z)*(this.isAnimated?Ku:1),this.boundingBox.getCenter(a),n==="back"){const{min:l,max:c}=i;[l.y,l.z]=[l.z,l.y],[c.y,c.z]=[c.z,c.y],[r.y,r.z]=[r.z,r.y],o.x=Math.PI/2,o.y=Math.PI}else o.x=0,o.y=0;if(this.isAnimated){const l=i.min.y,c=i.max.y;r.y=this.maxDimension,i.expandByVector(r.subScalar(this.maxDimension).multiplyScalar(-.5)),i.min.y=l,i.max.y=c,r.set(this.maxDimension,c-l,this.maxDimension)}n==="bottom"?a.y=i.min.y:a.z=i.min.y,this.setSoftness(t)}setSoftness(e){this.softness=e;const{size:t,camera:n}=this,i=this.isAnimated?Ku:1,r=i*Math.pow(2,F0-e*(F0-B2));this.setMapSize(r);const o=t.y/2,a=t.y*i;n.near=0,n.far=U0(a,o,e),this.depthMaterial.opacity=1/e,n.updateProjectionMatrix(),this.setIntensity(this.intensity),this.setOffset(0)}setMapSize(e){const{size:t}=this;this.isAnimated&&(e*=Ku);const n=Math.floor(t.x>t.z?e:e*t.x/t.z),i=Math.floor(t.x>t.z?e*t.z/t.x:e),r=10,o=r+n,a=r+i;if(this.renderTarget!=null&&(this.renderTarget.width!==o||this.renderTarget.height!==a)&&(this.renderTarget.dispose(),this.renderTarget=null,this.renderTargetBlur.dispose(),this.renderTargetBlur=null),this.renderTarget==null){const l={format:wt};this.renderTarget=new ni(o,a,l),this.renderTargetBlur=new ni(o,a,l),this.floor.material.map=this.renderTarget.texture}this.camera.scale.set(t.x*(1+r/n),t.z*(1+r/i),1),this.needsUpdate=!0}setIntensity(e){this.intensity=e,e>0?(this.visible=!0,this.floor.visible=!0,this.floor.material.opacity=e*U0(R2,1,this.softness*this.softness)):(this.visible=!1,this.floor.visible=!1)}getIntensity(){return this.intensity}setOffset(e){this.floor.position.z=-e+.001*this.maxDimension}render(e,t){t.overrideMaterial=this.depthMaterial;const n=e.getClearAlpha();e.setClearAlpha(0),this.floor.visible=!1;const i=e.xr.enabled;e.xr.enabled=!1;const r=e.getRenderTarget();e.setRenderTarget(this.renderTarget),e.render(t,this.camera),t.overrideMaterial=null,this.floor.visible=!0,this.blurShadow(e),e.xr.enabled=i,e.setRenderTarget(r),e.setClearAlpha(n)}blurShadow(e){const{camera:t,horizontalBlurMaterial:n,verticalBlurMaterial:i,renderTarget:r,renderTargetBlur:o,blurPlane:a}=this;a.visible=!0,a.material=n,n.uniforms.h.value=1/this.renderTarget.width,n.uniforms.tDiffuse.value=this.renderTarget.texture,e.setRenderTarget(o),e.render(a,t),a.material=i,i.uniforms.v.value=1/this.renderTarget.height,i.uniforms.tDiffuse.value=this.renderTargetBlur.texture,e.setRenderTarget(r),e.render(a,t),a.visible=!1}dispose(){this.renderTarget!=null&&this.renderTarget.dispose(),this.renderTargetBlur!=null&&this.renderTargetBlur.dispose(),this.depthMaterial.dispose(),this.horizontalBlurMaterial.dispose(),this.verticalBlurMaterial.dispose(),this.floor.material.dispose(),this.floor.geometry.dispose(),this.blurPlane.geometry.dispose(),this.removeFromParent()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=100,Xu=new L,N0=new L,Q0=new L,D2=new rR,P2=new L,oa=new ze;class U2 extends _s{constructor({canvas:e,element:t,width:n,height:i}){super(),this.annotationRenderer=new OL,this.schemaElement=document.createElement("script"),this.width=1,this.height=1,this.aspect=1,this.scaleStep=0,this.renderCount=0,this.externalRenderer=null,this.camera=new Gt(45,1,.1,100),this.xrCamera=null,this.url=null,this.target=new ht,this.animationNames=[],this.boundingBox=new cn,this.boundingSphere=new si,this.size=new L,this.idealAspect=0,this.framedFoVDeg=0,this.shadow=null,this.shadowIntensity=0,this.shadowSoftness=1,this.bakedShadows=new Set,this.exposure=1,this.canScale=!0,this.isDirty=!1,this.goalTarget=new L,this.targetDamperX=new Cn,this.targetDamperY=new Cn,this.targetDamperZ=new Cn,this._currentGLTF=null,this._model=null,this.cancelPendingSourceChange=null,this.animationsByName=new Map,this.currentAnimationAction=null,this.name="ModelScene",this.element=t,this.canvas=e,this.camera=new Gt(45,1,.1,100),this.camera.name="MainCamera",this.add(this.target),this.setSize(n,i),this.target.name="Target",this.mixer=new sR(this.target);const{domElement:r}=this.annotationRenderer,{style:o}=r;o.display="none",o.pointerEvents="none",o.position="absolute",o.top="0",this.element.shadowRoot.querySelector(".default").appendChild(r),this.schemaElement.setAttribute("type","application/ld+json")}get context(){return this.canvas.getContext("2d")}getCamera(){return this.xrCamera!=null?this.xrCamera:this.camera}queueRender(){this.isDirty=!0}shouldRender(){return this.isDirty}hasRendered(){this.isDirty=!1}forceRescale(){this.scaleStep=-1,this.queueRender()}async setObject(e){this.reset(),this._model=e,this.target.add(e),await this.setupScene()}async setSource(e,t=()=>{}){if(!e||e===this.url){t(1);return}if(this.reset(),this.url=e,this.externalRenderer!=null){const a=await this.externalRenderer.load(t);this.boundingSphere.radius=a.framedRadius,this.idealAspect=a.fieldOfViewAspect;return}this.cancelPendingSourceChange!=null&&(this.cancelPendingSourceChange(),this.cancelPendingSourceChange=null);let n;try{n=await new Promise(async(a,l)=>{this.cancelPendingSourceChange=()=>l();try{const c=await this.element[rt].loader.load(e,this.element,t);a(c)}catch(c){l(c)}})}catch(a){if(a==null)return;throw a}this.cancelPendingSourceChange=null,this.reset(),this.url=e,this._currentGLTF=n,n!=null&&(this._model=n.scene,this.target.add(n.scene));const{animations:i}=n,r=new Map,o=[];for(const a of i)r.set(a.name,a),o.push(a.name);this.animations=i,this.animationsByName=r,this.animationNames=o,await this.setupScene()}async setupScene(){this.applyTransform(),this.updateBoundingBox(),await this.updateFraming(),this.updateShadow(),this.setShadowIntensity(this.shadowIntensity)}reset(){this.url=null,this.renderCount=0,this.queueRender(),this.shadow!=null&&this.shadow.setIntensity(0),this.bakedShadows.clear();const{_model:e}=this;e!=null&&(e.removeFromParent(),this._model=null);const t=this._currentGLTF;t!=null&&(t.dispose(),this._currentGLTF=null),this.currentAnimationAction!=null&&(this.currentAnimationAction.stop(),this.currentAnimationAction=null),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this)}dispose(){this.reset(),this.shadow!=null&&(this.shadow.dispose(),this.shadow=null),this.element[Mc]=null,this.element[bc]=null,this.element[Vs]=null}get currentGLTF(){return this._currentGLTF}setSize(e,t){if(!(this.width===e&&this.height===t)){if(this.width=Math.max(e,1),this.height=Math.max(t,1),this.annotationRenderer.setSize(e,t),this.aspect=this.width/this.height,this.externalRenderer!=null){const n=sf();this.externalRenderer.resize(e*n,t*n)}this.queueRender()}}markBakedShadow(e){e.userData.shadow=!0,this.bakedShadows.add(e)}unmarkBakedShadow(e){e.userData.shadow=!1,e.visible=!0,this.bakedShadows.delete(e),this.boundingBox.expandByObject(e)}findBakedShadows(e){const t=new cn;e.traverse(n=>{const i=n;if(!i.isMesh||!i.material.transparent)return;t.setFromObject(i);const o=t.getSize(P2),a=Math.min(o.x,o.y,o.z);Math.max(o.x,o.y,o.z)<Yu*a||this.markBakedShadow(i)})}checkBakedShadows(){const{min:e,max:t}=this.boundingBox,n=new cn;this.boundingBox.getSize(this.size);for(const i of this.bakedShadows)n.setFromObject(i),!(n.min.y<e.y+this.size.y/Yu&&n.min.x<=e.x&&n.max.x>=t.x&&n.min.z<=e.z&&n.max.z>=t.z)&&(n.min.z<e.z+this.size.z/Yu&&n.min.x<=e.x&&n.max.x>=t.x&&n.min.y<=e.y&&n.max.y>=t.y||this.unmarkBakedShadow(i))}applyTransform(){const{model:e}=this;if(e==null)return;const t=gs(this.element.orientation)[0].terms,n=Vi(t[0]).number,i=Vi(t[1]).number,r=Vi(t[2]).number;e.quaternion.setFromEuler(new Ro(i,r,n,"YXZ"));const o=gs(this.element.scale)[0].terms;e.scale.set(o[0].number,o[1].number,o[2].number)}updateBoundingBox(){const{model:e}=this;if(e==null)return;this.target.remove(e),this.findBakedShadows(e);const t=(n,i)=>n.expandByPoint(i);this.setBakedShadowVisibility(!1),this.boundingBox=Ol(e,t,new cn),this.boundingBox.isEmpty()&&(this.setBakedShadowVisibility(!0),this.bakedShadows.forEach(n=>this.unmarkBakedShadow(n)),this.boundingBox=Ol(e,t,new cn)),this.checkBakedShadows(),this.setBakedShadowVisibility(),this.boundingBox.getSize(this.size),this.target.add(e)}async updateFraming(){const{model:e}=this;if(e==null)return;this.target.remove(e),this.setBakedShadowVisibility(!1);const{center:t}=this.boundingSphere;this.element.requestUpdate("cameraTarget"),await this.element.updateComplete,t.copy(this.getTarget());const n=(r,o)=>Math.max(r,t.distanceToSquared(o));this.boundingSphere.radius=Math.sqrt(Ol(e,n,0));const i=(r,o)=>{o.sub(t);const a=Math.sqrt(o.x*o.x+o.z*o.z);return Math.max(r,a/(this.idealCameraDistance()-Math.abs(o.y)))};this.idealAspect=Ol(e,i,0)/Math.tan(this.framedFoVDeg/2*Math.PI/180),this.setBakedShadowVisibility(),this.target.add(e)}setBakedShadowVisibility(e=this.shadowIntensity<=0){for(const t of this.bakedShadows)t.visible=e}idealCameraDistance(){const e=this.framedFoVDeg/2*Math.PI/180;return this.boundingSphere.radius/Math.sin(e)}adjustedFoV(e){const t=Math.tan(e/2*Math.PI/180)*Math.max(1,this.idealAspect/this.aspect);return 2*Math.atan(t)*180/Math.PI}getNDC(e,t){if(this.xrCamera!=null)oa.set(e/window.screen.width,t/window.screen.height);else{const n=this.element.getBoundingClientRect();oa.set((e-n.x)/this.width,(t-n.y)/this.height)}return oa.multiplyScalar(2).subScalar(1),oa.y*=-1,oa}getSize(){return{width:this.width,height:this.height}}setEnvironmentAndSkybox(e,t){this.element[rt].arRenderer.presentedScene!==this&&(this.environment=e,this.background=t,this.queueRender())}setTarget(e,t,n){this.goalTarget.set(-e,-t,-n)}setTargetDamperDecayTime(e){this.targetDamperX.setDecayTime(e),this.targetDamperY.setDecayTime(e),this.targetDamperZ.setDecayTime(e)}getTarget(){return this.goalTarget.clone().multiplyScalar(-1)}jumpToGoal(){this.updateTarget(GE)}updateTarget(e){const t=this.goalTarget,n=this.target.position;if(t.equals(n))return!1;{const i=this.boundingSphere.radius/10;let{x:r,y:o,z:a}=n;return r=this.targetDamperX.update(r,t.x,e,i),o=this.targetDamperY.update(o,t.y,e,i),a=this.targetDamperZ.update(a,t.z,e,i),this.target.position.set(r,o,a),this.target.updateMatrixWorld(),this.queueRender(),!0}}pointTowards(e,t){const{x:n,z:i}=this.position;this.yaw=Math.atan2(e-n,t-i)}get model(){return this._model}set yaw(e){this.rotation.y=e,this.queueRender()}get yaw(){return this.rotation.y}set animationTime(e){this.mixer.setTime(e),this.queueShadowRender()}get animationTime(){if(this.currentAnimationAction!=null){const e=Math.max(this.currentAnimationAction._loopCount,0);return this.currentAnimationAction.loop===Wf&&(e&1)===1?this.duration-this.currentAnimationAction.time:this.currentAnimationAction.time}return 0}set animationTimeScale(e){this.mixer.timeScale=e}get animationTimeScale(){return this.mixer.timeScale}get duration(){return this.currentAnimationAction!=null&&this.currentAnimationAction.getClip()?this.currentAnimationAction.getClip().duration:0}get hasActiveAnimation(){return this.currentAnimationAction!=null}playAnimation(e=null,t=0,n=zf,i=1/0){if(this._currentGLTF==null)return;const{animations:r}=this;if(r==null||r.length===0){console.warn("Cannot play animation (model does not have any animations)");return}let o=null;if(e!=null&&(o=this.animationsByName.get(e),o==null)){const a=parseInt(e);!isNaN(a)&&a>=0&&a<r.length&&(o=r[a])}o==null&&(o=r[0]);try{const{currentAnimationAction:a}=this,l=this.mixer.clipAction(o,this);this.currentAnimationAction=l,this.element.paused?this.mixer.stopAllAction():(l.paused=!1,a!=null&&l!==a?l.crossFadeFrom(a,t,!1):this.animationTimeScale>0&&this.animationTime==this.duration&&(this.animationTime=0)),l.setLoop(n,i),l.enabled=!0,l.clampWhenFinished=!0,l.play()}catch(a){console.error(a)}}stopAnimation(){this.currentAnimationAction=null,this.mixer.stopAllAction()}updateAnimation(e){this.mixer.update(e),this.queueShadowRender()}subscribeMixerEvent(e,t){this.mixer.addEventListener(e,t)}updateShadow(){const e=this.shadow;if(e!=null){const t=this.element.arPlacement==="wall"?"back":"bottom";e.setScene(this,this.shadowSoftness,t),e.needsUpdate=!0}}renderShadow(e){const t=this.shadow;t!=null&&t.needsUpdate==!0&&(t.render(e,this),t.needsUpdate=!1)}queueShadowRender(){this.shadow!=null&&(this.shadow.needsUpdate=!0)}setShadowIntensity(e){if(this.shadowIntensity=e,this._currentGLTF!=null&&(this.setBakedShadowVisibility(),!(e<=0&&this.shadow==null))){if(this.shadow==null){const t=this.element.arPlacement==="wall"?"back":"bottom";this.shadow=new L2(this,this.shadowSoftness,t)}this.shadow.setIntensity(e)}}setShadowSoftness(e){this.shadowSoftness=e;const t=this.shadow;t!=null&&t.setSoftness(e)}setShadowOffset(e){const t=this.shadow;t!=null&&t.setOffset(e)}get raycaster(){return D2}hitFromPoint(e,t=this){return this.raycaster.setFromCamera(e,this.getCamera()),this.raycaster.intersectObject(t,!0).find(i=>i.object.visible&&!i.object.userData.shadow)}positionAndNormalFromPoint(e,t=this){const n=this.hitFromPoint(e,t);return n==null||n.face==null?null:n.uv==null?{position:n.point,normal:n.face.normal,uv:null}:(n.face.normal.applyNormalMatrix(new We().getNormalMatrix(n.object.matrixWorld)),{position:n.point,normal:n.face.normal,uv:n.uv})}surfaceFromPoint(e,t=this){const n=this.element.model;if(n==null)return null;const i=this.hitFromPoint(e,t);if(i==null||i.face==null)return null;const r=n[hf](i),{meshes:o,primitives:a}=r.mesh.userData.associations,l=new L,c=new L,h=new L,{a:u,b:d,c:f}=i.face,p=i.object;p.getVertexPosition(u,l),p.getVertexPosition(d,c),p.getVertexPosition(f,h);const m=new In(l,c,h),g=new L;return m.getBarycoord(p.worldToLocal(i.point),g),`${o} ${a} ${u} ${d} ${f} ${g.x.toFixed(3)} ${g.y.toFixed(3)} ${g.z.toFixed(3)}`}addHotspot(e){this.target.add(e),this.annotationRenderer.domElement.appendChild(e.element)}removeHotspot(e){this.target.remove(e)}forHotspots(e){const{children:t}=this.target;for(let n=0,i=t.length;n<i;n++){const r=t[n];r instanceof gx&&e(r)}}initializeSurface(e){if(e.surface!=null&&e.mesh==null){const t=gs(e.surface)[0].terms;if(t.length!=8){console.warn(e.surface+" does not have exactly 8 numbers.");return}const n=this.element.model[px](t[0].number,t[1].number),i=new L(t[2].number,t[3].number,t[4].number);if(n==null){console.warn(e.surface+" does not match a node/primitive in this glTF! Skipping this hotspot.");return}const r=n.mesh.geometry.attributes.position.count;if(i.x>=r||i.y>=r||i.z>=r){console.warn(e.surface+" vertex indices out of range in this glTF! Skipping this hotspot.");return}const o=new L(t[5].number,t[6].number,t[7].number);e.mesh=n.mesh,e.tri=i,e.bary=o}}updateSurfaceHotspots(){const e=!this.element.paused;this.forHotspots(t=>{this.initializeSurface(t),t.updateSurface(e)})}updateHotspotsVisibility(e){this.forHotspots(t=>{Xu.copy(e),N0.setFromMatrixPosition(t.matrixWorld),Xu.sub(N0),Q0.copy(t.normal).transformDirection(this.target.matrixWorld),Xu.dot(Q0)<0?t.hide():t.show()})}orientHotspots(e){this.forHotspots(t=>{t.orient(e)})}setHotspotsVisibility(e){this.forHotspots(t=>{t.visible=e})}updateSchema(e){var t;const{schemaElement:n,element:i}=this,{alt:r,poster:o,iosSrc:a}=i;if(e!=null){const l=[{"@type":"MediaObject",contentUrl:e,encodingFormat:((t=e.split(".").pop())===null||t===void 0?void 0:t.toLowerCase())==="gltf"?"model/gltf+json":"model/gltf-binary"}];a&&l.push({"@type":"MediaObject",contentUrl:a,encodingFormat:"model/vnd.usdz+zip"});const c={"@context":"http://schema.org/","@type":"3DModel",image:o??void 0,name:r??void 0,encoding:l};n.textContent=JSON.stringify(c),document.head.appendChild(n)}else n.parentElement!=null&&n.parentElement.removeChild(n)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=async s=>new Promise((e,t)=>{const i=s.match(/data:(.*);/);if(!i)return t(new Error(`${s} is not a valid data Url`));const r=i[1],o=s.replace(/data:image\/\w+;base64,/,""),a=atob(o),l=[];for(let c=0;c<a.length;c+=512){const h=a.slice(c,c+512),u=new Array(h.length);for(let f=0;f<h.length;f++)u[f]=h.charCodeAt(f);const d=new Uint8Array(u);l.push(d)}e(new Blob(l,{type:r}))});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2 extends EventTarget{constructor(){super(...arguments),this.ongoingActivities=new Set,this.totalProgress=0}get ongoingActivityCount(){return this.ongoingActivities.size}beginActivity(){const e={progress:0,completed:!1};return this.ongoingActivities.add(e),this.ongoingActivityCount===1&&this.announceTotalProgress(e,0),t=>{let n;return n=Math.max(Ai(t,0,1),e.progress),n!==e.progress&&this.announceTotalProgress(e,n),e.progress}}announceTotalProgress(e,t){let n=0,i=0;t==1&&(e.completed=!0);for(const a of this.ongoingActivities){const{progress:l}=a;n+=1-l,a.completed===!0&&i++}const r=e.progress;e.progress=t,this.totalProgress+=(t-r)*(1-this.totalProgress)/n;const o=i===this.ongoingActivityCount?1:this.totalProgress;this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:o}})),i===this.ongoingActivityCount&&(this.totalProgress=0,this.ongoingActivities.clear())}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var uh=globalThis&&globalThis.__decorate||function(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r},O0,k0,G0,H0,V0,z0,W0,q0,$0,j0,K0,Y0,X0;const Q2=10,O2=50,k2=0,G2=300,H2=150,Bn=document.createElement("canvas"),Ju=Symbol("fallbackResizeHandler"),J0=Symbol("defaultAriaLabel"),tc=Symbol("resizeObserver"),Nr=Symbol("clearModelTimeout"),Zu=Symbol("onContextLost"),Qr=Symbol("loaded"),ed=Symbol("status"),td=Symbol("onFocus"),nd=Symbol("onBlur"),Wr=Symbol("updateSize"),nc=Symbol("intersectionObserver"),zs=Symbol("isElementInViewport"),zc=Symbol("announceModelVisibility"),Da=Symbol("ariaLabel"),df=Symbol("altDefaulted"),aa=Symbol("statusElement"),ff=Symbol("updateStatus"),Ca=Symbol("loadedTime"),ao=Symbol("updateSource"),Z0=Symbol("markLoaded"),Pa=Symbol("container"),gi=Symbol("input"),Af=Symbol("canvas"),Ie=Symbol("scene"),mn=Symbol("needsRender"),xi=Symbol("tick"),Es=Symbol("onModelLoad"),Ja=Symbol("onResize"),rt=Symbol("renderer"),sr=Symbol("progressTracker"),e_=Symbol("getLoaded"),rr=Symbol("getModelIsVisible"),wo=Symbol("shouldAttemptPreload"),us=s=>({x:s.x,y:s.y,z:s.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}}),V2=s=>({u:s.x,v:s.y,toString(){return`${this.u} ${this.v}`}});class il extends js{constructor(){super(),this.alt=null,this.src=null,this.withCredentials=!1,this.generateSchema=!1,this[O0]=!1,this[k0]=!1,this[G0]=0,this[H0]="",this[V0]=null,this[z0]=Yg(()=>{const i=this.getBoundingClientRect();this[Wr](i)},O2),this[W0]=Yg(i=>{const r=this.modelIsVisible;r!==i&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:r}}))},k2),this[q0]=null,this[$0]=null,this[j0]=new N2,this[K0]=()=>{this[aa].textContent=this[ed]},this[Y0]=()=>{this[aa].textContent=""},this[X0]=i=>{this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:i.sourceEvent}}))},this.attachShadow({mode:"open"});const e=this.shadowRoot;kR(e),this[Pa]=e.querySelector(".container"),this[gi]=e.querySelector(".userInput"),this[Af]=e.querySelector("canvas"),this[aa]=e.querySelector("#status"),this[J0]=this[gi].getAttribute("aria-label");let t,n;if(this.isConnected){const i=this.getBoundingClientRect();t=i.width,n=i.height}else t=G2,n=H2;this[Ie]=new U2({canvas:this[Af],element:this,width:t,height:n}),Promise.resolve().then(()=>{this[Wr](this.getBoundingClientRect())}),ou&&(this[tc]=new ResizeObserver(i=>{if(!this[rt].isPresenting)for(let r of i)r.target===this&&this[Wr](r.contentRect)})),au?this[nc]=new IntersectionObserver(i=>{for(let r of i)if(r.target===this){const o=this.modelIsVisible;this[zs]=r.isIntersecting,this[zc](o),this[zs]&&!this.loaded&&this[ao]()}},{root:null,rootMargin:"0px",threshold:1e-5}):this[zs]=!0}static get is(){return"model-viewer"}static set modelCacheSize(e){Pt[as].evictionThreshold=e}static get modelCacheSize(){return Pt[as].evictionThreshold}static set minimumRenderScale(e){e>1&&console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),e<=0&&console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."),Un.singleton.minScale=e}static get minimumRenderScale(){return Un.singleton.minScale}get loaded(){return this[e_]()}get[(O0=zs,k0=Qr,G0=Ca,H0=ed,V0=Nr,z0=Ju,W0=zc,q0=tc,$0=nc,j0=sr,rt)](){return Un.singleton}get modelIsVisible(){return this[rr]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),ou?this[tc].observe(this):self.addEventListener("resize",this[Ju]),au&&this[nc].observe(this),this.addEventListener("focus",this[td]),this.addEventListener("blur",this[nd]);const e=this[rt];e.addEventListener("contextlost",this[Zu]),e.registerScene(this[Ie]),this[Nr]!=null&&(self.clearTimeout(this[Nr]),this[Nr]=null,this.requestUpdate("src",null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),ou?this[tc].unobserve(this):self.removeEventListener("resize",this[Ju]),au&&this[nc].unobserve(this),this.removeEventListener("focus",this[td]),this.removeEventListener("blur",this[nd]);const e=this[rt];e.removeEventListener("contextlost",this[Zu]),e.unregisterScene(this[Ie]),this[Nr]=self.setTimeout(()=>{this[Ie].dispose(),this[Nr]=null},Q2)}updated(e){super.updated(e),e.has("src")&&(this.src==null?(this[Qr]=!1,this[Ca]=0,this[Ie].reset()):this.src!==this[Ie].url&&(this[Qr]=!1,this[Ca]=0,this[ao]())),e.has("alt")&&this[gi].setAttribute("aria-label",this[Da]),e.has("withCredentials")&&(Pt.withCredentials=this.withCredentials,this[rt].textureUtils.withCredentials=this.withCredentials),e.has("generateSchema")&&(this.generateSchema?this[Ie].updateSchema(this.src):this[Ie].updateSchema(null))}toDataURL(e,t){return this[rt].displayCanvas(this[Ie]).toDataURL(e,t)}async toBlob(e){const t=e?e.mimeType:void 0,n=e?e.qualityArgument:void 0,i=e?e.idealAspect:void 0,{width:r,height:o,idealAspect:a,aspect:l}=this[Ie],{dpr:c,scaleFactor:h}=this[rt];let u=r*h*c,d=o*h*c,f=0,p=0;if(i===!0)if(a>l){const m=d;d=Math.round(u/a),p=(m-d)/2}else{const m=u;u=Math.round(d*a),f=(m-u)/2}Bn.width=u,Bn.height=d;try{return new Promise(async(m,g)=>{if(Bn.getContext("2d").drawImage(this[rt].displayCanvas(this[Ie]),f,p,u,d,0,0,u,d),Bn.msToBlob&&(!t||t==="image/png"))return m(Bn.msToBlob());if(!Bn.toBlob)return m(await F2(Bn.toDataURL(t,n)));Bn.toBlob(A=>{if(!A)return g(new Error("Unable to retrieve canvas blob"));m(A)},t,n)})}finally{this[Wr]({width:r,height:o})}}registerRenderer(e){this[Ie].externalRenderer=e}unregisterRenderer(){this[Ie].externalRenderer=null}get[Da](){return this[df]}get[df](){return this.alt==null||this.alt==="null"?this[J0]:this.alt}[e_](){return this[Qr]}[rr](){return this.loaded&&this[zs]}[wo](){return!!this.src&&this[zs]}[Wr]({width:e,height:t}){e===0||t===0||(this[Pa].style.width=`${e}px`,this[Pa].style.height=`${t}px`,this[Ja]({width:e,height:t}))}[xi](e,t){}[Z0](){this[Qr]||(this[Qr]=!0,this[Ca]=performance.now())}[mn](){this[Ie].queueRender()}[Es](){}[ff](e){this[ed]=e;const t=this.getRootNode();t!=null&&t.activeElement===this&&this[aa].textContent!=e&&(this[aa].textContent=e)}[(K0=td,Y0=nd,Ja)](e){this[Ie].setSize(e.width,e.height)}async[(X0=Zu,ao)](){const e=this[Ie];if(this.loaded||!this[wo]()||this.src===e.url)return;this.generateSchema&&e.updateSchema(this.src),this[ff]("Loading"),e.stopAnimation();const t=this[sr].beginActivity(),n=this.src;try{const i=e.setSource(n,o=>t(Ai(o,0,1)*.95)),r=this[Gc]();await Promise.all([i,r]),this[Z0](),this[Es](),await new Promise(o=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("load",{detail:{url:n}})),o()})})})}catch(i){this.dispatchEvent(new CustomEvent("error",{detail:{type:"loadfailure",sourceError:i}}))}finally{t(1)}}}uh([Fe({type:String})],il.prototype,"alt",void 0);uh([Fe({type:String})],il.prototype,"src",void 0);uh([Fe({type:Boolean,attribute:"with-credentials"})],il.prototype,"withCredentials",void 0);uh([Fe({type:Boolean,attribute:"generate-schema"})],il.prototype,"generateSchema",void 0);/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var id=globalThis&&globalThis.__decorate||function(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r};const t_=1e3,sd=Symbol("changeAnimation"),Pi=Symbol("paused"),z2={repetitions:1/0,pingpong:!1},W2=s=>{var e;class t extends s{constructor(...i){super(i),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[e]=!0,this[Ie].subscribeMixerEvent("loop",r=>{const o=r.action._loopCount;this.dispatchEvent(new CustomEvent("loop",{detail:{count:o}}))}),this[Ie].subscribeMixerEvent("finished",()=>{this[Pi]=!0,this.dispatchEvent(new CustomEvent("finished"))})}get availableAnimations(){return this.loaded?this[Ie].animationNames:[]}get duration(){return this[Ie].duration}get paused(){return this[Pi]}get currentTime(){return this[Ie].animationTime}set currentTime(i){this[Ie].animationTime=i,this[mn]()}get timeScale(){return this[Ie].animationTimeScale}set timeScale(i){this[Ie].animationTimeScale=i}pause(){this[Pi]||(this[Pi]=!0,this.dispatchEvent(new CustomEvent("pause")))}play(i){this.availableAnimations.length>0&&(this[Pi]=!1,this[sd](i),this.dispatchEvent(new CustomEvent("play")))}[(e=Pi,Es)](){super[Es](),this[Pi]=!0,this.autoplay&&this.play()}[xi](i,r){super[xi](i,r),!(this[Pi]||!this[rr]()&&!this[rt].isPresenting)&&(this[Ie].updateAnimation(r/t_),this[mn]())}updated(i){super.updated(i),i.has("autoplay")&&this.autoplay&&this.play(),i.has("animationName")&&this[sd]()}[sd](i=z2){var r;const o=(r=i.repetitions)!==null&&r!==void 0?r:1/0,a=i.pingpong?Wf:o===1?Qv:zf;this[Ie].playAnimation(this.animationName,this.animationCrossfadeDuration/t_,a,o),this[Pi]&&(this[Ie].updateAnimation(0),this[mn]())}}return id([Fe({type:Boolean})],t.prototype,"autoplay",void 0),id([Fe({type:String,attribute:"animation-name"})],t.prototype,"animationName",void 0),id([Fe({type:Number,attribute:"animation-crossfade-duration"})],t.prototype,"animationCrossfadeDuration",void 0),t};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=Symbol("hotspotMap"),rd=Symbol("mutationCallback"),la=Symbol("observer"),od=Symbol("addHotspot"),n_=Symbol("removeHotspot"),ad=new Qe,q2=s=>{var e,t,n;class i extends s{constructor(){super(...arguments),this[e]=new Map,this[t]=o=>{o.forEach(a=>{(!(a instanceof MutationRecord)||a.type==="childList")&&(a.addedNodes.forEach(l=>{this[od](l)}),a.removedNodes.forEach(l=>{this[n_](l)}),this[mn]())})},this[n]=new MutationObserver(this[rd])}connectedCallback(){super.connectedCallback();for(let a=0;a<this.children.length;++a)this[od](this.children[a]);const{ShadyDOM:o}=self;o==null?this[la].observe(this,{childList:!0}):this[la]=o.observeChildren(this,this[rd])}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:o}=self;o==null?this[la].disconnect():o.unobserveChildren(this[la])}[(e=Us,t=rd,n=la,xi)](o,a){super[xi](o,a);const l=this[Ie],{annotationRenderer:c}=l,h=l.getCamera();l.shouldRender()&&(l.updateSurfaceHotspots(),l.updateHotspotsVisibility(h.position),c.domElement.style.display="",c.render(l,h))}updateHotspot(o){const a=this[Us].get(o.name);a!=null&&(a.updatePosition(o.position),a.updateNormal(o.normal),a.surface=o.surface,this[mn]())}queryHotspot(o){const a=this[Us].get(o);if(a==null)return null;const l=us(a.position),c=us(a.normal),h=a.facingCamera,u=this[Ie],d=u.getCamera(),f=new L;f.setFromMatrixPosition(a.matrixWorld),f.project(d);const p=u.width/2,m=u.height/2;f.x=f.x*p+p,f.y=-(f.y*m)+m;const g=us(new L(f.x,f.y,f.z));return!Number.isFinite(g.x)||!Number.isFinite(g.y)?null:{position:l,normal:c,canvasPosition:g,facingCamera:h}}positionAndNormalFromPoint(o,a){const l=this[Ie],c=l.getNDC(o,a),h=l.positionAndNormalFromPoint(c);if(h==null)return null;ad.copy(l.target.matrixWorld).invert();const u=us(h.position.applyMatrix4(ad)),d=us(h.normal.transformDirection(ad));let f=null;return h.uv!=null&&(f=V2(h.uv)),{position:u,normal:d,uv:f}}surfaceFromPoint(o,a){const l=this[Ie],c=l.getNDC(o,a);return l.surfaceFromPoint(c)}[od](o){if(!(o instanceof HTMLElement&&o.slot.indexOf("hotspot")===0))return;let a=this[Us].get(o.slot);a!=null?a.increment():(a=new gx({name:o.slot,position:o.dataset.position,normal:o.dataset.normal,surface:o.dataset.surface}),this[Us].set(o.slot,a),this[Ie].addHotspot(a)),this[Ie].queueRender()}[n_](o){if(!(o instanceof HTMLElement))return;const a=this[Us].get(o.slot);a&&(a.decrement()&&(this[Ie].removeHotspot(a),this[Us].delete(o.slot)),this[Ie].queueRender())}}return i};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var i_=function(s){return URL.createObjectURL(new Blob([s],{type:"text/javascript"}))};try{URL.revokeObjectURL(i_(""))}catch{i_=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var fn=Uint8Array,dn=Uint16Array,Mo=Uint32Array,dA=new fn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fA=new fn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s_=new fn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),mx=function(s,e){for(var t=new dn(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new Mo(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return[t,i]},_x=mx(dA,2),$2=_x[0],pf=_x[1];$2[28]=258,pf[258]=28;var j2=mx(fA,0),r_=j2[1],gf=new dn(32768);for(var dt=0;dt<32768;++dt){var ns=(dt&43690)>>>1|(dt&21845)<<1;ns=(ns&52428)>>>2|(ns&13107)<<2,ns=(ns&61680)>>>4|(ns&3855)<<4,gf[dt]=((ns&65280)>>>8|(ns&255)<<8)>>>1}var Ua=function(s,e,t){for(var n=s.length,i=0,r=new dn(e);i<n;++i)++r[s[i]-1];var o=new dn(e);for(i=0;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new dn(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],h=e-s[i],u=o[s[i]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[gf[u]>>>l]=c}else for(a=new dn(n),i=0;i<n;++i)s[i]&&(a[i]=gf[o[s[i]-1]++]>>>15-s[i]);return a},or=new fn(288);for(var dt=0;dt<144;++dt)or[dt]=8;for(var dt=144;dt<256;++dt)or[dt]=9;for(var dt=256;dt<280;++dt)or[dt]=7;for(var dt=280;dt<288;++dt)or[dt]=8;var Wc=new fn(32);for(var dt=0;dt<32;++dt)Wc[dt]=5;var K2=Ua(or,9,0),Y2=Ua(Wc,5,0),vx=function(s){return(s/8|0)+(s&7&&1)},Ex=function(s,e,t){(e==null||e<0)&&(e=0),(t==null||t>s.length)&&(t=s.length);var n=new(s instanceof dn?dn:s instanceof Mo?Mo:fn)(t-e);return n.set(s.subarray(e,t)),n},Ui=function(s,e,t){t<<=e&7;var n=e/8|0;s[n]|=t,s[n+1]|=t>>>8},ca=function(s,e,t){t<<=e&7;var n=e/8|0;s[n]|=t,s[n+1]|=t>>>8,s[n+2]|=t>>>16},ld=function(s,e){for(var t=[],n=0;n<s.length;++n)s[n]&&t.push({s:n,f:s[n]});var i=t.length,r=t.slice();if(!i)return[AA,0];if(i==1){var o=new fn(t[0].s+1);return o[t[0].s]=1,[o,1]}t.sort(function(I,S){return I.f-S.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,h=1,u=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};h!=i-1;)a=t[t[c].f<t[u].f?c++:u++],l=t[c!=h&&t[c].f<t[u].f?c++:u++],t[h++]={s:-1,f:a.f+l.f,l:a,r:l};for(var d=r[0].s,n=1;n<i;++n)r[n].s>d&&(d=r[n].s);var f=new dn(d+1),p=mf(t[h-1],f,0);if(p>e){var n=0,m=0,g=p-e,A=1<<g;for(r.sort(function(S,T){return f[T.s]-f[S.s]||S.f-T.f});n<i;++n){var E=r[n].s;if(f[E]>e)m+=A-(1<<p-f[E]),f[E]=e;else break}for(m>>>=g;m>0;){var _=r[n].s;f[_]<e?m-=1<<e-f[_]++-1:++n}for(;n>=0&&m;--n){var v=r[n].s;f[v]==e&&(--f[v],++m)}p=e}return[new fn(f),p]},mf=function(s,e,t){return s.s==-1?Math.max(mf(s.l,e,t+1),mf(s.r,e,t+1)):e[s.s]=t},o_=function(s){for(var e=s.length;e&&!s[--e];);for(var t=new dn(++e),n=0,i=s[0],r=1,o=function(l){t[n++]=l},a=1;a<=e;++a)if(s[a]==i&&a!=e)++r;else{if(!i&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(i),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(i);r=1,i=s[a]}return[t.subarray(0,n),e]},ha=function(s,e){for(var t=0,n=0;n<e.length;++n)t+=s[n]*e[n];return t},Tc=function(s,e,t){var n=t.length,i=vx(e+2);s[i]=n&255,s[i+1]=n>>>8,s[i+2]=s[i]^255,s[i+3]=s[i+1]^255;for(var r=0;r<n;++r)s[i+r+4]=t[r];return(i+4+n)*8},a_=function(s,e,t,n,i,r,o,a,l,c,h){Ui(e,h++,t),++i[256];for(var u=ld(i,15),d=u[0],f=u[1],p=ld(r,15),m=p[0],g=p[1],A=o_(d),E=A[0],_=A[1],v=o_(m),I=v[0],S=v[1],T=new dn(19),R=0;R<E.length;++R)T[E[R]&31]++;for(var R=0;R<I.length;++R)T[I[R]&31]++;for(var y=ld(T,7),M=y[0],k=y[1],W=19;W>4&&!M[s_[W-1]];--W);var F=c+5<<3,P=ha(i,or)+ha(r,Wc)+o,V=ha(i,d)+ha(r,m)+o+14+3*W+ha(T,M)+(2*T[16]+3*T[17]+7*T[18]);if(F<=P&&F<=V)return Tc(e,h,s.subarray(l,l+c));var $,G,Q,J;if(Ui(e,h,1+(V<P)),h+=2,V<P){$=Ua(d,f,0),G=d,Q=Ua(m,g,0),J=m;var le=Ua(M,k,0);Ui(e,h,_-257),Ui(e,h+5,S-1),Ui(e,h+10,W-4),h+=14;for(var R=0;R<W;++R)Ui(e,h+3*R,M[s_[R]]);h+=3*W;for(var xe=[E,I],me=0;me<2;++me)for(var Y=xe[me],R=0;R<Y.length;++R){var se=Y[R]&31;Ui(e,h,le[se]),h+=M[se],se>15&&(Ui(e,h,Y[R]>>>5&127),h+=Y[R]>>>12)}}else $=K2,G=or,Q=Y2,J=Wc;for(var R=0;R<a;++R)if(n[R]>255){var se=n[R]>>>18&31;ca(e,h,$[se+257]),h+=G[se+257],se>7&&(Ui(e,h,n[R]>>>23&31),h+=dA[se]);var U=n[R]&31;ca(e,h,Q[U]),h+=J[U],U>3&&(ca(e,h,n[R]>>>5&8191),h+=fA[U])}else ca(e,h,$[n[R]]),h+=G[n[R]];return ca(e,h,$[256]),h+G[256]},X2=new Mo([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),AA=new fn(0),J2=function(s,e,t,n,i,r){var o=s.length,a=new fn(n+o+5*(1+Math.ceil(o/7e3))+i),l=a.subarray(n,a.length-i),c=0;if(!e||o<8)for(var h=0;h<=o;h+=65535){var u=h+65535;u<o?c=Tc(l,c,s.subarray(h,u)):(l[h]=r,c=Tc(l,c,s.subarray(h,o)))}else{for(var d=X2[e-1],f=d>>>13,p=d&8191,m=(1<<t)-1,g=new dn(32768),A=new dn(m+1),E=Math.ceil(t/3),_=2*E,v=function(H){return(s[H]^s[H+1]<<E^s[H+2]<<_)&m},I=new Mo(25e3),S=new dn(288),T=new dn(32),R=0,y=0,h=0,M=0,k=0,W=0;h<o;++h){var F=v(h),P=h&32767,V=A[F];if(g[P]=V,A[F]=P,k<=h){var $=o-h;if((R>7e3||M>24576)&&$>423){c=a_(s,l,0,I,S,T,y,M,W,h-W,c),M=R=y=0,W=h;for(var G=0;G<286;++G)S[G]=0;for(var G=0;G<30;++G)T[G]=0}var Q=2,J=0,le=p,xe=P-V&32767;if($>2&&F==v(h-xe))for(var me=Math.min(f,$)-1,Y=Math.min(32767,h),se=Math.min(258,$);xe<=Y&&--le&&P!=V;){if(s[h+Q]==s[h+Q-xe]){for(var U=0;U<se&&s[h+U]==s[h+U-xe];++U);if(U>Q){if(Q=U,J=xe,U>me)break;for(var K=Math.min(xe,U-2),D=0,G=0;G<K;++G){var he=h-xe+G+32768&32767,ve=g[he],ce=he-ve+32768&32767;ce>D&&(D=ce,V=he)}}}P=V,V=g[P],xe+=P-V+32768&32767}if(J){I[M++]=268435456|pf[Q]<<18|r_[J];var ge=pf[Q]&31,w=r_[J]&31;y+=dA[ge]+fA[w],++S[257+ge],++T[w],k=h+Q,++R}else I[M++]=s[h],++S[s[h]]}}c=a_(s,l,r,I,S,T,y,M,W,h-W,c),!r&&c&7&&(c=Tc(l,c+1,AA))}return Ex(a,0,n+vx(c)+i)},Z2=function(){for(var s=new Mo(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&3988292384)^t>>>1;s[e]=t}return s}(),e3=function(){var s=-1;return{p:function(e){for(var t=s,n=0;n<e.length;++n)t=Z2[t&255^e[n]]^t>>>8;s=t},d:function(){return~s}}},t3=function(s,e,t,n,i){return J2(s,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(s.length)))*1.5):12+e.mem,t,n,!i)},xx=function(s,e){var t={};for(var n in s)t[n]=s[n];for(var n in e)t[n]=e[n];return t},kt=function(s,e,t){for(;t;++e)s[e]=t,t>>>=8};function n3(s,e){return t3(s,e||{},0,0)}var yx=function(s,e,t,n){for(var i in s){var r=s[i],o=e+i;r instanceof fn?t[o]=[r,n]:Array.isArray(r)?t[o]=[r[0],xx(n,r[1])]:yx(r,o+"/",t,n)}},l_=typeof TextEncoder<"u"&&new TextEncoder,i3=typeof TextDecoder<"u"&&new TextDecoder,s3=0;try{i3.decode(AA,{stream:!0}),s3=1}catch{}function qc(s,e){if(e){for(var t=new fn(s.length),n=0;n<s.length;++n)t[n]=s.charCodeAt(n);return t}if(l_)return l_.encode(s);for(var i=s.length,r=new fn(s.length+(s.length>>1)),o=0,a=function(h){r[o++]=h},n=0;n<i;++n){if(o+5>r.length){var l=new fn(o+8+(i-n<<1));l.set(r),r=l}var c=s.charCodeAt(n);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1023<<10)|s.charCodeAt(++n)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return Ex(r,0,o)}var _f=function(s){var e=0;if(s)for(var t in s){var n=s[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},c_=function(s,e,t,n,i,r,o,a){var l=n.length,c=t.extra,h=a&&a.length,u=_f(c);kt(s,e,o!=null?33639248:67324752),e+=4,o!=null&&(s[e++]=20,s[e++]=t.os),s[e]=20,e+=2,s[e++]=t.flag<<1|(r==null&&8),s[e++]=i&&8,s[e++]=t.compression&255,s[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),f=d.getFullYear()-1980;if(f<0||f>119)throw"date not in range 1980-2099";if(kt(s,e,f<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>>1),e+=4,r!=null&&(kt(s,e,t.crc),kt(s,e+4,r),kt(s,e+8,t.size)),kt(s,e+12,l),kt(s,e+14,u),e+=16,o!=null&&(kt(s,e,h),kt(s,e+6,t.attrs),kt(s,e+10,o),e+=14),s.set(n,e),e+=l,u)for(var p in c){var m=c[p],g=m.length;kt(s,e,+p),kt(s,e+2,g),s.set(m,e+4),e+=4+g}return h&&(s.set(a,e),e+=h),e},r3=function(s,e,t,n,i){kt(s,e,101010256),kt(s,e+8,t),kt(s,e+10,t),kt(s,e+12,n),kt(s,e+16,i)};function o3(s,e){e||(e={});var t={},n=[];yx(s,"",t,e);var i=0,r=0;for(var o in t){var a=t[o],l=a[0],c=a[1],h=c.level==0?0:8,u=qc(o),d=u.length,f=c.comment,p=f&&qc(f),m=p&&p.length,g=_f(c.extra);if(d>65535)throw"filename too long";var A=h?n3(l,c):l,E=A.length,_=e3();_.p(l),n.push(xx(c,{size:l.length,crc:_.d(),c:A,f:u,m:p,u:d!=o.length||p&&f.length!=m,o:i,compression:h})),i+=30+d+g+E,r+=76+2*(d+g)+(m||0)+E}for(var v=new fn(r+22),I=i,S=r-i,T=0;T<n.length;++T){var u=n[T];c_(v,u.o,u,u.f,u.u,u.c.length);var R=30+u.f.length+_f(u.extra);v.set(u.c,u.o+R),c_(v,i,u,u.f,u.u,u.c.length,u.o,u.m),i+=16+R+(u.m?u.m.length:0)}return r3(v,i,n.length,S,I),v}class a3{async parse(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}}},t);const n={},i="model.usda";n[i]=null;let r=Ix();r+=c3(t);const o={},a={};e.traverseVisible(c=>{if(c.isMesh){const h=c.geometry,u=c.material;if(u.isMeshStandardMaterial){const d="geometries/Geometry_"+h.id+".usd";if(!(d in n)){const f=f3(h);n[d]=u3(f)}u.uuid in o||(o[u.uuid]=u),r+=d3(c,h,u)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",c)}else c.isCamera&&(r+=E3(c))}),r+=h3(),r+=_3(o,a),n[i]=qc(r),r=null;for(const c in a){const h=a[c],u=c.split("_")[1],d=h.format===1023,f=l3(h.image,u,h.flipY),p=await new Promise(m=>f.toBlob(m,d?"image/png":"image/jpeg",1));n[`textures/Texture_${c}.${d?"png":"jpg"}`]=new Uint8Array(await p.arrayBuffer())}let l=0;for(const c in n){const h=n[c],u=34+c.length;l+=u;const d=l&63;if(d!==4){const f=64-d,p=new Uint8Array(f);n[c]=[h,{extra:{12345:p}}]}l=h.length}return o3(n,{level:0})}}function l3(s,e,t){if(typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&s instanceof ImageBitmap){const n=1024/Math.max(s.width,s.height),i=document.createElement("canvas");i.width=s.width*Math.min(1,n),i.height=s.height*Math.min(1,n);const r=i.getContext("2d");if(t===!0&&(r.translate(0,i.height),r.scale(1,-1)),r.drawImage(s,0,0,i.width,i.height),e!==void 0){const o=parseInt(e,16),a=(o>>16&255)/255,l=(o>>8&255)/255,c=(o&255)/255,h=r.getImageData(0,0,i.width,i.height),u=h.data;for(let d=0;d<u.length;d+=4)u[d+0]=u[d+0]*a,u[d+1]=u[d+1]*l,u[d+2]=u[d+2]*c;r.putImageData(h,0,0)}return i}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const on=7;function Ix(){return`#usda 1.0
(
    customLayerData = {
        string creator = "Three.js USDZExporter"
    }
    metersPerUnit = 1
    upAxis = "Y"
)

`}function c3(s){return`def Xform "Root"
{
    def Scope "Scenes" (
        kind = "sceneLibrary"
    )
    {
        def Xform "Scene" (
            customData = {
                bool preliminary_collidesWithEnvironment = 0
                string sceneName = "Scene"
            }
            sceneName = "Scene"
        )
        {
        token preliminary:anchoring:type = "${s.ar.anchoring.type}"
        token preliminary:planeAnchoring:alignment = "${s.ar.planeAnchoring.alignment}"

`}function h3(){return`
        }
    }
}

`}function u3(s){let e=Ix();return e+=s,qc(e)}function d3(s,e,t){const n="Object_"+s.id,i=Cx(s.matrixWorld);return s.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",s),`def Xform "${n}" (
    prepend references = @./geometries/Geometry_${e.id}.usd@</Geometry>
)
{
    matrix4d xformOp:transform = ${i}
    uniform token[] xformOpOrder = ["xformOp:transform"]

    rel material:binding = </Materials/Material_${t.id}>
}

`}function Cx(s){const e=s.elements;return`( ${ic(e,0)}, ${ic(e,4)}, ${ic(e,8)}, ${ic(e,12)} )`}function ic(s,e){return`(${s[e+0]}, ${s[e+1]}, ${s[e+2]}, ${s[e+3]})`}function f3(s){return`
def "Geometry"
{
  ${A3(s)}
}
`}function A3(s){const e="Geometry",t=s.attributes,n=t.position.count;return`
    def Mesh "${e}"
    {
        int[] faceVertexCounts = [${p3(s)}]
        int[] faceVertexIndices = [${g3(s)}]
        normal3f[] normals = [${h_(t.normal,n)}] (
            interpolation = "vertex"
        )
        point3f[] points = [${h_(t.position,n)}]
        float2[] primvars:st = [${m3(t.uv,n)}] (
            interpolation = "vertex"
        )
        uniform token subdivisionScheme = "none"
    }
`}function p3(s){const e=s.index!==null?s.index.count:s.attributes.position.count;return Array(e/3).fill(3).join(", ")}function g3(s){const e=s.index,t=[];if(e!==null)for(let n=0;n<e.count;n++)t.push(e.getX(n));else{const n=s.attributes.position.count;for(let i=0;i<n;i++)t.push(i)}return t.join(", ")}function h_(s,e){if(s===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");const t=[];for(let n=0;n<s.count;n++){const i=s.getX(n),r=s.getY(n),o=s.getZ(n);t.push(`(${i.toPrecision(on)}, ${r.toPrecision(on)}, ${o.toPrecision(on)})`)}return t.join(", ")}function m3(s,e){if(s===void 0)return console.warn("USDZExporter: UVs missing."),Array(e).fill("(0, 0)").join(", ");const t=[];for(let n=0;n<s.count;n++){const i=s.getX(n),r=s.getY(n);t.push(`(${i.toPrecision(on)}, ${1-r.toPrecision(on)})`)}return t.join(", ")}function _3(s,e){const t=[];for(const n in s){const i=s[n];t.push(v3(i,e))}return`def "Materials"
{
${t.join("")}
}

`}function v3(s,e){const t="            ",n=[],i=[];function r(o,a,l){const c=o.id+(l?"_"+l.getHexString():""),h=o.format===1023;return e[c]=o,`
        def Shader "Transform2d_${a}" (
            sdrMetadata = {
                string role = "math"
            }
        )
        {
            uniform token info:id = "UsdTransform2d"
            float2 inputs:in.connect = </Materials/Material_${s.id}/uvReader_st.outputs:result>
            float2 inputs:scale = ${d_(o.repeat)}
            float2 inputs:translation = ${d_(o.offset)}
            float2 outputs:result
        }

        def Shader "Texture_${o.id}_${a}"
        {
            uniform token info:id = "UsdUVTexture"
            asset inputs:file = @textures/Texture_${c}.${h?"png":"jpg"}@
            float2 inputs:st.connect = </Materials/Material_${s.id}/Transform2d_${a}.outputs:result>
            token inputs:wrapS = "repeat"
            token inputs:wrapT = "repeat"
            float outputs:r
            float outputs:g
            float outputs:b
            float3 outputs:rgb
            ${s.transparent||s.alphaTest>0?"float outputs:a":""}
        }`}return s.side===ln&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",s),s.map!==null?(n.push(`${t}color3f inputs:diffuseColor.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:rgb>`),s.transparent?n.push(`${t}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`):s.alphaTest>0&&(n.push(`${t}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.map.id}_diffuse.outputs:a>`),n.push(`${t}float inputs:opacityThreshold = ${s.alphaTest}`)),i.push(r(s.map,"diffuse",s.color))):n.push(`${t}color3f inputs:diffuseColor = ${u_(s.color)}`),s.emissiveMap!==null?(n.push(`${t}color3f inputs:emissiveColor.connect = </Materials/Material_${s.id}/Texture_${s.emissiveMap.id}_emissive.outputs:rgb>`),i.push(r(s.emissiveMap,"emissive"))):s.emissive.getHex()>0&&n.push(`${t}color3f inputs:emissiveColor = ${u_(s.emissive)}`),s.normalMap!==null&&(n.push(`${t}normal3f inputs:normal.connect = </Materials/Material_${s.id}/Texture_${s.normalMap.id}_normal.outputs:rgb>`),i.push(r(s.normalMap,"normal"))),s.aoMap!==null&&(n.push(`${t}float inputs:occlusion.connect = </Materials/Material_${s.id}/Texture_${s.aoMap.id}_occlusion.outputs:r>`),i.push(r(s.aoMap,"occlusion"))),s.roughnessMap!==null&&s.roughness===1?(n.push(`${t}float inputs:roughness.connect = </Materials/Material_${s.id}/Texture_${s.roughnessMap.id}_roughness.outputs:g>`),i.push(r(s.roughnessMap,"roughness"))):n.push(`${t}float inputs:roughness = ${s.roughness}`),s.metalnessMap!==null&&s.metalness===1?(n.push(`${t}float inputs:metallic.connect = </Materials/Material_${s.id}/Texture_${s.metalnessMap.id}_metallic.outputs:b>`),i.push(r(s.metalnessMap,"metallic"))):n.push(`${t}float inputs:metallic = ${s.metalness}`),s.alphaMap!==null?(n.push(`${t}float inputs:opacity.connect = </Materials/Material_${s.id}/Texture_${s.alphaMap.id}_opacity.outputs:r>`),n.push(`${t}float inputs:opacityThreshold = 0.0001`),i.push(r(s.alphaMap,"opacity"))):n.push(`${t}float inputs:opacity = ${s.opacity}`),s.isMeshPhysicalMaterial&&(n.push(`${t}float inputs:clearcoat = ${s.clearcoat}`),n.push(`${t}float inputs:clearcoatRoughness = ${s.clearcoatRoughness}`),n.push(`${t}float inputs:ior = ${s.ior}`)),`
    def Material "Material_${s.id}"
    {
        def Shader "PreviewSurface"
        {
            uniform token info:id = "UsdPreviewSurface"
${n.join(`
`)}
            int inputs:useSpecularWorkflow = 0
            token outputs:surface
        }

        token outputs:surface.connect = </Materials/Material_${s.id}/PreviewSurface.outputs:surface>
        token inputs:frame:stPrimvarName = "st"

        def Shader "uvReader_st"
        {
            uniform token info:id = "UsdPrimvarReader_float2"
            token inputs:varname.connect = </Materials/Material_${s.id}.inputs:frame:stPrimvarName>
            float2 inputs:fallback = (0.0, 0.0)
            float2 outputs:result
        }

${i.join(`
`)}

    }
`}function u_(s){return`(${s.r}, ${s.g}, ${s.b})`}function d_(s){return`(${s.x}, ${s.y})`}function E3(s){const e=s.name?s.name:"Camera_"+s.id,t=Cx(s.matrixWorld);return s.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",s),s.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]
	
			float2 clippingRange = (${s.near.toPrecision(on)}, ${s.far.toPrecision(on)})
			float horizontalAperture = ${((Math.abs(s.left)+Math.abs(s.right))*10).toPrecision(on)}
			float verticalAperture = ${((Math.abs(s.top)+Math.abs(s.bottom))*10).toPrecision(on)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]
	
			float2 clippingRange = (${s.near.toPrecision(on)}, ${s.far.toPrecision(on)})
			float focalLength = ${s.getFocalLength().toPrecision(on)}
			float focusDistance = ${s.focus.toPrecision(on)}
			float horizontalAperture = ${s.getFilmWidth().toPrecision(on)}
			token projection = "perspective"
			float verticalAperture = ${s.getFilmHeight().toPrecision(on)}
		}
	
	`}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x3=s=>e=>{try{const t=gs(e),n=(t.length?t[0].terms:[]).filter(r=>r&&r.type==="ident").map(r=>r.value).filter(r=>s.indexOf(r)>-1),i=new Set;for(const r of n)i.add(r);return i}catch{}return new Set};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Or=globalThis&&globalThis.__decorate||function(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r};let f_=!1,A_=!1;const p_="#model-viewer-no-ar-fallback",y3=x3(["quick-look","scene-viewer","webxr","none"]),I3="webxr scene-viewer quick-look",bn={QUICK_LOOK:"quick-look",SCENE_VIEWER:"scene-viewer",WEBXR:"webxr",NONE:"none"},Fi=Symbol("arButtonContainer"),g_=Symbol("enterARWithWebXR"),m_=Symbol("openSceneViewer"),__=Symbol("openIOSARQuickLook"),C3=Symbol("canActivateAR"),sc=Symbol("arMode"),cd=Symbol("arModes"),kr=Symbol("arAnchor"),rc=Symbol("preload"),oc=Symbol("onARButtonContainerClick"),hd=Symbol("onARStatus"),ud=Symbol("onARTracking"),dd=Symbol("onARTap"),ua=Symbol("selectARMode"),fd=Symbol("triggerLoad"),S3=s=>{var e,t,n,i,r,o,a,l,c,h;class u extends s{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arPlacement="floor",this.arModes=I3,this.iosSrc=null,this.xrEnvironment=!1,this[e]=!1,this[t]=this.shadowRoot.querySelector(".ar-button"),this[n]=document.createElement("a"),this[i]=new Set,this[r]=bn.NONE,this[o]=!1,this[a]=f=>{f.preventDefault(),this.activateAR()},this[l]=({status:f})=>{(f===hs.NOT_PRESENTING||this[rt].arRenderer.presentedScene===this[Ie])&&(this.setAttribute("ar-status",f),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:f}})),f===hs.NOT_PRESENTING?this.removeAttribute("ar-tracking"):f===hs.SESSION_STARTED&&this.setAttribute("ar-tracking",lf.TRACKING))},this[c]=({status:f})=>{this.setAttribute("ar-tracking",f),this.dispatchEvent(new CustomEvent("ar-tracking",{detail:{status:f}}))},this[h]=f=>{f.data=="_apple_ar_quicklook_button_tapped"&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}}get canActivateAR(){return this[sc]!==bn.NONE}connectedCallback(){super.connectedCallback(),this[rt].arRenderer.addEventListener("status",this[hd]),this.setAttribute("ar-status",hs.NOT_PRESENTING),this[rt].arRenderer.addEventListener("tracking",this[ud]),this[kr].addEventListener("message",this[dd])}disconnectedCallback(){super.disconnectedCallback(),this[rt].arRenderer.removeEventListener("status",this[hd]),this[rt].arRenderer.removeEventListener("tracking",this[ud]),this[kr].removeEventListener("message",this[dd])}update(f){super.update(f),f.has("arScale")&&(this[Ie].canScale=this.arScale!=="fixed"),f.has("arPlacement")&&(this[Ie].updateShadow(),this[mn]()),f.has("arModes")&&(this[cd]=y3(this.arModes)),(f.has("ar")||f.has("arModes")||f.has("src")||f.has("iosSrc"))&&this[ua]()}async activateAR(){switch(this[sc]){case bn.QUICK_LOOK:this[__]();break;case bn.WEBXR:await this[g_]();break;case bn.SCENE_VIEWER:this[m_]();break;default:console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities");break}}async[(e=C3,t=Fi,n=kr,i=cd,r=sc,o=rc,a=oc,l=hd,c=ud,h=dd,ua)](){let f=bn.NONE;if(this.ar){if(this.src!=null)for(const p of this[cd]){if(p==="webxr"&&SE&&!f_&&await this[rt].arRenderer.supportsPresentation()){f=bn.WEBXR;break}if(p==="scene-viewer"&&CR&&!A_){f=bn.SCENE_VIEWER;break}if(p==="quick-look"&&jg){f=bn.QUICK_LOOK;break}}f===bn.NONE&&this.iosSrc!=null&&jg&&(f=bn.QUICK_LOOK)}if(f!==bn.NONE)this[Fi].classList.add("enabled"),this[Fi].addEventListener("click",this[oc]);else if(this[Fi].classList.contains("enabled")){this[Fi].removeEventListener("click",this[oc]),this[Fi].classList.remove("enabled");const p=hs.FAILED;this.setAttribute("ar-status",p),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:p}}))}this[sc]=f}async[g_](){console.log("Attempting to present in AR with WebXR..."),await this[fd]();try{this[Fi].removeEventListener("click",this[oc]);const{arRenderer:f}=this[rt];f.placeOnWall=this.arPlacement==="wall",await f.present(this[Ie],this.xrEnvironment)}catch(f){console.warn("Error while trying to present in AR with WebXR"),console.error(f),await this[rt].arRenderer.stopPresenting(),f_=!0,console.warn("Falling back to next ar-mode"),await this[ua](),this.activateAR()}finally{this[ua]()}}async[fd](){this.loaded||(this[rc]=!0,this[ao](),await BR(this,"load"),this[rc]=!1)}[wo](){return super[wo]()||this[rc]}[m_](){const f=self.location.toString(),p=new URL(f),m=new URL(this.src,f);m.hash&&(m.hash="");const g=new URLSearchParams(m.search);if(p.hash=p_,g.set("mode","ar_preferred"),g.has("disable_occlusion")||g.set("disable_occlusion","true"),this.arScale==="fixed"&&g.set("resizable","false"),this.arPlacement==="wall"&&g.set("enable_vertical_placement","true"),g.has("sound")){const _=new URL(g.get("sound"),f);g.set("sound",_.toString())}if(g.has("link")){const _=new URL(g.get("link"),f);g.set("link",_.toString())}const A=`intent://arvr.google.com/scene-viewer/1.0?${g.toString()+"&file="+encodeURIComponent(m.toString())}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(p.toString())};end;`,E=()=>{self.location.hash===p_&&(A_=!0,self.history.back(),console.warn("Error while trying to present in AR with Scene Viewer"),console.warn("Falling back to next ar-mode"),this[ua]())};self.addEventListener("hashchange",E,{once:!0}),this[kr].setAttribute("href",A),console.log("Attempting to present in AR with Scene Viewer..."),this[kr].click()}async[__](){const f=!this.iosSrc;this[Fi].classList.remove("enabled");const p=f?await this.prepareUSDZ():this.iosSrc,m=new URL(p,self.location.toString());if(f){const E=self.location.toString(),_=new URL(E),v=new URL(this.src,_);v.hash&&(m.hash=v.hash)}this.arScale==="fixed"&&(m.hash&&(m.hash+="&"),m.hash+="allowsContentScaling=0");const g=this[kr];g.setAttribute("rel","ar");const A=document.createElement("img");g.appendChild(A),g.setAttribute("href",m.toString()),f&&g.setAttribute("download","model.usdz"),g.style.display="none",g.isConnected||this.shadowRoot.appendChild(g),console.log("Attempting to present in AR with Quick Look..."),g.click(),g.removeChild(A),f&&URL.revokeObjectURL(p),this[Fi].classList.add("enabled")}async prepareUSDZ(){const f=this[sr].beginActivity();await this[fd]();const{model:p,shadow:m}=this[Ie];if(p==null)return"";let g=!1;m!=null&&(g=m.visible,m.visible=!1),f(.2);const E=await new a3().parse(p),_=new Blob([E],{type:"model/vnd.usdz+zip"}),v=URL.createObjectURL(_);return f(1),m!=null&&(m.visible=g),v}}return Or([Fe({type:Boolean,attribute:"ar"})],u.prototype,"ar",void 0),Or([Fe({type:String,attribute:"ar-scale"})],u.prototype,"arScale",void 0),Or([Fe({type:String,attribute:"ar-placement"})],u.prototype,"arPlacement",void 0),Or([Fe({type:String,attribute:"ar-modes"})],u.prototype,"arModes",void 0),Or([Fe({type:String,attribute:"ios-src"})],u.prototype,"iosSrc",void 0),Or([Fe({type:Boolean,attribute:"xr-environment"})],u.prototype,"xrEnvironment",void 0),u};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ad=globalThis&&globalThis.__decorate||function(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r};const w3=100,M3="https://www.gstatic.com/draco/versioned/decoders/1.5.6/",b3="https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/",T3="https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/loaders/LottieLoader.js",pd={AUTO:"auto",MANUAL:"manual"},v_={AUTO:"auto",LAZY:"lazy",EAGER:"eager"},Fs=Symbol("defaultProgressBarElement"),gd=Symbol("posterContainerElement"),Gr=Symbol("defaultPosterElement"),da=Symbol("shouldDismissPoster"),md=Symbol("hidePoster"),ac=Symbol("modelIsRevealed"),_d=Symbol("updateProgressBar"),B3=Symbol("ariaLabelCallToAction"),vd=Symbol("onProgress"),R3=s=>{var e,t,n,i,r,o,a,l;class c extends s{constructor(...u){super(...u),this.poster=null,this.reveal=pd.AUTO,this.loading=v_.AUTO,this[e]=!1,this[t]=!1,this[n]=this.shadowRoot.querySelector(".slot.poster"),this[i]=this.shadowRoot.querySelector("#default-poster"),this[r]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[o]=this[Gr].getAttribute("aria-label"),this[a]=MR(g=>{const A=this[Fs].parentNode;requestAnimationFrame(()=>{this[Fs].style.transform=`scaleX(${g})`,g===0&&(A.removeChild(this[Fs]),A.appendChild(this[Fs])),g===1?this[Fs].classList.add("hide"):this[Fs].classList.remove("hide")})},w3),this[l]=g=>{const A=g.detail.totalProgress;A===1&&(this[_d].flush(),this.loaded&&(this[da]||this.reveal===pd.AUTO)&&this[md]()),this[_d](A),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:A}}))};const d=self.ModelViewerElement||{},f=d.dracoDecoderLocation||M3;Pt.setDRACODecoderLocation(f);const p=d.ktx2TranscoderLocation||b3;Pt.setKTX2TranscoderLocation(p),d.meshoptDecoderLocation&&Pt.setMeshoptDecoderLocation(d.meshoptDecoderLocation);const m=d.lottieLoaderLocation||T3;Un.singleton.textureUtils.lottieLoaderUrl=m}static set dracoDecoderLocation(u){Pt.setDRACODecoderLocation(u)}static get dracoDecoderLocation(){return Pt.getDRACODecoderLocation()}static set ktx2TranscoderLocation(u){Pt.setKTX2TranscoderLocation(u)}static get ktx2TranscoderLocation(){return Pt.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(u){Pt.setMeshoptDecoderLocation(u)}static get meshoptDecoderLocation(){return Pt.getMeshoptDecoderLocation()}static set lottieLoaderLocation(u){Un.singleton.textureUtils.lottieLoaderUrl=u}static get lottieLoaderLocation(){return Un.singleton.textureUtils.lottieLoaderUrl}static mapURLs(u){Un.singleton.loader[ks].manager.setURLModifier(u)}dismissPoster(){this.loaded?this[md]():(this[da]=!0,this[ao]())}showPoster(){const u=this[gd];if(u.classList.contains("show"))return;u.classList.add("show"),this[gi].classList.remove("show");const d=this[Gr];d.removeAttribute("tabindex"),d.removeAttribute("aria-hidden");const f=this.modelIsVisible;this[ac]=!1,this[zc](f)}getDimensions(){return us(this[Ie].size)}getBoundingBoxCenter(){return us(this[Ie].boundingBox.getCenter(new L))}connectedCallback(){super.connectedCallback(),this.loaded||this.showPoster(),this[sr].addEventListener("progress",this[vd])}disconnectedCallback(){super.disconnectedCallback(),this[sr].removeEventListener("progress",this[vd])}async updated(u){super.updated(u),u.has("poster")&&this.poster!=null&&(this[Gr].style.backgroundImage=`url(${this.poster})`),u.has("alt")&&this[Gr].setAttribute("aria-label",this[df]),(u.has("reveal")||u.has("loading"))&&this[ao]()}[(e=ac,t=da,n=gd,i=Gr,r=Fs,o=B3,a=_d,l=vd,wo)](){return!!this.src&&(this[da]||this.loading===v_.EAGER||this.reveal===pd.AUTO&&this[zs])}[md](){this[da]=!1;const u=this[gd];if(!u.classList.contains("show"))return;u.classList.remove("show"),this[gi].classList.add("show");const d=this.modelIsVisible;this[ac]=!0,this[zc](d);const f=this.getRootNode();f&&f.activeElement===this&&this[gi].focus();const p=this[Gr];p.setAttribute("aria-hidden","true"),p.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"))}[rr](){return super[rr]()&&this[ac]}}return Ad([Fe({type:String})],c.prototype,"poster",void 0),Ad([Fe({type:String})],c.prototype,"reveal",void 0),Ad([Fe({type:String})],c.prototype,"loading",void 0),c};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ed=globalThis&&globalThis.__decorate||function(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r};const L3=Math.PI/32,D3=3e3,P3={basis:[hh(Yt(L3,"rad"))],keywords:{auto:[null]}},Hr=Symbol("autoRotateStartTime"),xd=Symbol("radiansPerSecond"),E_=Symbol("syncRotationRate"),yd=Symbol("onCameraChange"),U3=s=>{var e,t,n;class i extends s{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=D3,this.rotationPerSecond="auto",this[e]=performance.now(),this[t]=0,this[n]=o=>{this.autoRotate&&o.detail.source==="user-interaction"&&(this[Hr]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[yd]),this[Hr]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[yd]),this[Hr]=performance.now()}updated(o){super.updated(o),o.has("autoRotate")&&(this[Hr]=performance.now())}[(e=Hr,t=xd,E_)](o){this[xd]=o[0]}[xi](o,a){if(super[xi](o,a),!this.autoRotate||!this[rr]()||this[rt].isPresenting)return;const l=Math.min(a,o-this[Hr]-this.autoRotateDelay);l>0&&(this[Ie].yaw=this.turntableRotation+this[xd]*l*.001)}get turntableRotation(){return this[Ie].yaw}resetTurntableRotation(o=0){this[Ie].yaw=o}}return n=yd,Ed([Fe({type:Boolean,attribute:"auto-rotate"})],i.prototype,"autoRotate",void 0),Ed([Fe({type:Number,attribute:"auto-rotate-delay"})],i.prototype,"autoRotateDelay",void 0),Ed([is({intrinsics:P3,updateHandler:E_}),Fe({type:String,attribute:"rotation-per-second"})],i.prototype,"rotationPerSecond",void 0),i},F3=s=>{var e;const t=r=>{if(r.shadowRoot==null||r.hasAttribute("data-js-focus-visible"))return()=>{};if(self.applyFocusVisiblePolyfill)self.applyFocusVisiblePolyfill(r.shadowRoot);else{const o=()=>{self.applyFocusVisiblePolyfill(r.shadowRoot)};return self.addEventListener("focus-visible-polyfill-ready",o,{once:!0}),()=>{self.removeEventListener("focus-visible-polyfill-ready",o)}}return()=>{}},n=Symbol("endPolyfillCoordination");class i extends s{constructor(){super(...arguments),this[e]=null}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this[n]==null&&(this[n]=t(this))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this[n]!=null&&(this[n](),this[n]=null)}}return e=n,i};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N3=q2(M2(U3(UR(HD(S3(R3(W2(F3(il)))))))));customElements.define("model-viewer",N3);const Q3={data(){return{}}};const O3={class:"mano"},k3=Mt("button",null,"1_1",-1),G3=Mt("button",null,"1_2",-1),H3=Mt("button",null,"1_3",-1),V3=Mt("button",null,"1_4",-1),z3=Mt("button",null,"1_5",-1),W3=Mt("button",null,"1_6",-1),q3=Mt("button",null,"1_7",-1),$3=Mt("br",null,null,-1),j3=Mt("button",null,"2_1",-1),K3=Mt("button",null,"2_2",-1),Y3=Mt("button",null,"2_3",-1),X3=Mt("button",null,"2_4",-1),J3=Mt("button",null,"2_5",-1),Z3=Mt("button",null,"2_6",-1),eP=Mt("button",null,"2_7",-1);function tP(s,e,t,n,i,r){const o=Xy("router-link");return dv(),fv("div",O3,[at(o,{to:"/1_1"},{default:tn(()=>[k3]),_:1}),at(o,{to:"/1_2"},{default:tn(()=>[G3]),_:1}),at(o,{to:"/1_3"},{default:tn(()=>[H3]),_:1}),at(o,{to:"/1_4"},{default:tn(()=>[V3]),_:1}),at(o,{to:"/1_5"},{default:tn(()=>[z3]),_:1}),at(o,{to:"/1_6"},{default:tn(()=>[W3]),_:1}),at(o,{to:"/1_7"},{default:tn(()=>[q3]),_:1}),$3,at(o,{to:"/2_1"},{default:tn(()=>[j3]),_:1}),at(o,{to:"/2_2"},{default:tn(()=>[K3]),_:1}),at(o,{to:"/2_3"},{default:tn(()=>[Y3]),_:1}),at(o,{to:"/2_4"},{default:tn(()=>[X3]),_:1}),at(o,{to:"/2_5"},{default:tn(()=>[J3]),_:1}),at(o,{to:"/2_6"},{default:tn(()=>[Z3]),_:1}),at(o,{to:"/2_7"},{default:tn(()=>[eP]),_:1})])}const nP=lS(Q3,[["render",tP]]),iP=nS({history:vC("/workout-app/"),routes:[{path:"/",name:"home",component:nP},{path:"/1_1",name:"1_1",component:()=>sn(()=>import("./1_1-46984bab.js"),["assets/1_1-46984bab.js","assets/Exercice1Component-0db117a5.js","assets/1_1-1673c44b.css"])},{path:"/1_2",name:"1_2",component:()=>sn(()=>import("./1_2-cf72b486.js"),["assets/1_2-cf72b486.js","assets/Exercice1Component-0db117a5.js","assets/1_1-1673c44b.css"])},{path:"/1_3",name:"1_3",component:()=>sn(()=>import("./1_3-98c2fa9b.js"),["assets/1_3-98c2fa9b.js","assets/Exercice1Component-0db117a5.js","assets/1_1-1673c44b.css"])},{path:"/1_4",name:"1_4",component:()=>sn(()=>import("./1_4-7c72f19b.js"),["assets/1_4-7c72f19b.js","assets/Exercice1Component-0db117a5.js","assets/1_1-1673c44b.css"])},{path:"/1_5",name:"1_5",component:()=>sn(()=>import("./1_5-967d9721.js"),["assets/1_5-967d9721.js","assets/Exercice1Component-0db117a5.js","assets/1_1-1673c44b.css"])},{path:"/1_6",name:"1_6",component:()=>sn(()=>import("./1_6-c6c99004.js"),["assets/1_6-c6c99004.js","assets/Exercice1Component-0db117a5.js","assets/1_1-1673c44b.css"])},{path:"/1_7",name:"1_7",component:()=>sn(()=>import("./1_7-c68f7708.js"),["assets/1_7-c68f7708.js","assets/Exercice1Component-0db117a5.js","assets/1_1-1673c44b.css"])},{path:"/2_1",name:"2_1",component:()=>sn(()=>import("./2_1-0f924069.js"),["assets/2_1-0f924069.js","assets/Exercice1Component-0db117a5.js","assets/1_1-1673c44b.css"])},{path:"/2_2",name:"2_2",component:()=>sn(()=>import("./2_2-4a1054c5.js"),["assets/2_2-4a1054c5.js","assets/Exercice1Component-0db117a5.js","assets/1_1-1673c44b.css"])},{path:"/2_3",name:"2_3",component:()=>sn(()=>import("./2_3-05e06c8f.js"),["assets/2_3-05e06c8f.js","assets/Exercice1Component-0db117a5.js","assets/1_1-1673c44b.css"])},{path:"/2_4",name:"2_4",component:()=>sn(()=>import("./2_4-4b1aea34.js"),["assets/2_4-4b1aea34.js","assets/Exercice1Component-0db117a5.js","assets/1_1-1673c44b.css"])},{path:"/2_5",name:"2_5",component:()=>sn(()=>import("./2_5-6d1e03ba.js"),["assets/2_5-6d1e03ba.js","assets/Exercice1Component-0db117a5.js","assets/1_1-1673c44b.css"])},{path:"/2_6",name:"2_6",component:()=>sn(()=>import("./2_6-6e4e7870.js"),["assets/2_6-6e4e7870.js","assets/Exercice1Component-0db117a5.js","assets/1_1-1673c44b.css"])},{path:"/2_7",name:"2_7",component:()=>sn(()=>import("./2_7-e9900676.js"),["assets/2_7-e9900676.js","assets/Exercice1Component-0db117a5.js","assets/1_1-1673c44b.css"])}]});const Sx=eC(rS);Sx.use(iP);Sx.mount("#app");export{hi as F,lS as _,Xy as a,Mt as b,fv as c,at as d,xI as e,rP as f,dv as o,Ey as r,sP as t};
