import{r as h,n as p,j as w,k as E,l as b,m as C,p as v,q as T,v as j,w as N,x as B,y as D,z as H}from"./scheduler.Z9Qfjr61.js";let $=!1;function I(){$=!0}function P(){$=!1}function q(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function z(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let l=0;l<t.length;l++){const o=t[l];o.claim_order!==void 0&&s.push(o)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const l=t[s].claim_order,o=(r>0&&t[n[r]].claim_order<=l?r+1:q(1,r,_=>t[n[_]].claim_order,l))-1;i[s]=n[o]+1;const u=o+1;n[u]=s,r=Math.max(u,r)}const c=[],a=[];let f=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(c.push(t[s-1]);f>=s;f--)a.push(t[f]);f--}for(;f>=0;f--)a.push(t[f]);c.reverse(),a.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<a.length;s++){for(;l<c.length&&a[s].claim_order>=c[l].claim_order;)l++;const o=l<c.length?c[l]:null;e.insertBefore(a[s],o)}}function M(e,t){if($){for(z(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Y(e,t,n){$&&!n?M(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function O(e){e.parentNode&&e.parentNode.removeChild(e)}function Z(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function R(e){return document.createElement(e)}function L(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function y(e){return document.createTextNode(e)}function k(){return y(" ")}function ee(){return y("")}function te(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ne(e){return e.dataset.svelteH}function U(e){return Array.from(e.childNodes)}function V(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,i,r=!1){V(e);const c=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const f=e[a];if(t(f)){const s=n(f);return s===void 0?e.splice(a,1):e[a]=s,r||(e.claim_info.last_index=a),f}}for(let a=e.claim_info.last_index-1;a>=0;a--){const f=e[a];if(t(f)){const s=n(f);return s===void 0?e.splice(a,1):e[a]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,f}}return i()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function S(e,t,n,i){return A(e,r=>r.nodeName===t,r=>{const c=[];for(let a=0;a<r.attributes.length;a++){const f=r.attributes[a];n[f.name]||c.push(f.name)}c.forEach(a=>r.removeAttribute(a))},()=>i(t))}function ie(e,t,n){return S(e,t,n,R)}function re(e,t,n){return S(e,t,n,L)}function W(e,t){return A(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>y(t),!0)}function se(e){return W(e," ")}function le(e,t){t=""+t,e.data!==t&&(e.data=t)}function ae(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function ce(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${e}_END`?(i-=1,n.push(r)):c===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function fe(e,t){return new e(t)}const m=new Set;let d;function ue(){d={r:0,c:[],p:d}}function oe(){d.r||h(d.c),d=d.p}function F(e,t){e&&e.i&&(m.delete(e),e.i(t))}function de(e,t,n,i){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function _e(e){e&&e.c()}function me(e,t){e&&e.l(t)}function G(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),v(()=>{const c=e.$$.on_mount.map(B).filter(b);e.$$.on_destroy?e.$$.on_destroy.push(...c):h(c),e.$$.on_mount=[]}),r.forEach(v)}function J(e,t){const n=e.$$;n.fragment!==null&&(T(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function K(e,t){e.$$.dirty[0]===-1&&(D.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function he(e,t,n,i,r,c,a=null,f=[-1]){const s=j;N(e);const l=e.$$={fragment:null,ctx:[],props:c,update:p,not_equal:r,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:w(),dirty:f,skip_bound:!1,root:t.target||s.$$.root};a&&a(l.root);let o=!1;if(l.ctx=n?n(e,t.props||{},(u,_,...x)=>{const g=x.length?x[0]:_;return l.ctx&&r(l.ctx[u],l.ctx[u]=g)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](g),o&&K(e,u)),_}):[],l.update(),o=!0,h(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){I();const u=U(t.target);l.fragment&&l.fragment.l(u),u.forEach(O)}else l.fragment&&l.fragment.c();t.intro&&F(e.$$.fragment),G(e,t.target,t.anchor),P(),E()}N(s)}class $e{$$=void 0;$$set=void 0;$destroy(){J(this,1),this.$destroy=p}$on(t,n){if(!b(n))return p;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!C(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Q);export{L as A,re as B,ce as C,$e as S,Y as a,oe as b,se as c,F as d,ee as e,O as f,R as g,ie as h,he as i,U as j,te as k,ae as l,y as m,W as n,le as o,ue as p,fe as q,_e as r,k as s,de as t,me as u,G as v,J as w,ne as x,M as y,Z as z};