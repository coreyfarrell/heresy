/*! (c) Andrea Giammarchi - ISC */var heresy=function(e){"use strict";var t=(...e)=>e,n=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,a=r.length;o<a;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);const{isArray:r}=Array,o=n.prototype.nodeType,a=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),s=(e,t)=>("svg"===t?i:c)(e),c=e=>{const t=a("template");return t.innerHTML=e,t.content},i=e=>{const{content:t}=a("template"),n=a("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:r}=n.firstChild;let{length:o}=r;for(;o--;)t.appendChild(r[0]);return t},l=(e,t,n,r,o,a)=>{if(o-r<2)t.insertBefore(e(n[r],1),a);else{const s=t.ownerDocument.createDocumentFragment();for(;r<o;)s.appendChild(e(n[r++],1));t.insertBefore(s,a)}},u=(e,t)=>e==t,f=e=>e,p=(e,t,n,r,o,a,s)=>{const c=a-o;if(c<1)return-1;for(;n-t>=c;){let c=t,i=o;for(;c<n&&i<a&&s(e[c],r[i]);)c++,i++;if(i===a)return t;t=c+1}return-1},d=(e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o,h=(e,t,n,r,o)=>{if(o-r<2)t.removeChild(e(n[r],-1));else{const a=t.ownerDocument.createRange();a.setStartBefore(e(n[r],-1)),a.setEndAfter(e(n[o-1],-1)),a.deleteContents()}},m=(e,t,n)=>{let r=1,o=t;for(;r<o;){const t=(r+o)/2>>>0;n<e[t]?o=t:r=t+1}return r},g=(e,t,n,r,o,a,s,c,i,u,f,p,d)=>{((e,t,n,r,o,a,s,c,i)=>{const u=new Map,f=e.length;let p=s,d=0;for(;d<f;)switch(e[d++]){case 0:o++,p++;break;case 1:u.set(r[o],1),l(t,n,r,o++,o,p<c?t(a[p],0):i);break;case-1:p++}for(d=0;d<f;)switch(e[d++]){case 0:s++;break;case-1:u.has(a[s])?s++:h(t,n,a,s++,s)}})(((e,t,n,r,o,a,s)=>{const c=n+a,i=[];let l,u,f,p,d,h,m;e:for(l=0;l<=c;l++){if(l>50)return null;for(m=l-1,d=l?i[l-1]:[0,0],h=i[l]=[],u=-l;u<=l;u+=2){for(f=(p=u===-l||u!==l&&d[m+u-1]<d[m+u+1]?d[m+u+1]:d[m+u-1]+1)-u;p<a&&f<n&&s(r[o+p],e[t+f]);)p++,f++;if(p===a&&f===n)break e;h[l+u]=p}}const g=Array(l/2+c/2);let v=g.length-1;for(l=i.length-1;l>=0;l--){for(;p>0&&f>0&&s(r[o+p-1],e[t+f-1]);)g[v--]=0,p--,f--;if(!l)break;m=l-1,d=l?i[l-1]:[0,0],(u=p-f)==-l||u!==l&&d[m+u-1]<d[m+u+1]?(f--,g[v--]=1):(p--,g[v--]=-1)}return g})(n,r,a,s,c,u,p)||((e,t,n,r,o,a,s,c)=>{let i=0,l=r<c?r:c;const u=Array(l++),f=Array(l);f[0]=-1;for(let e=1;e<l;e++)f[e]=s;const p=new Map;for(let e=a;e<s;e++)p.set(o[e],e);for(let r=t;r<n;r++){const t=p.get(e[r]);null!=t&&-1<(i=m(f,l,t))&&(f[i]=t,u[i]={newi:r,oldi:t,prev:u[i-1]})}for(i=--l,--s;f[i]>s;)--i;l=c+r-i;const d=Array(l);let h=u[i];for(--n;h;){const{newi:e,oldi:t}=h;for(;n>e;)d[--l]=1,--n;for(;s>t;)d[--l]=-1,--s;d[--l]=0,--n,--s,h=h.prev}for(;n>=t;)d[--l]=1,--n;for(;s>=a;)d[--l]=-1,--s;return d})(n,r,o,a,s,c,i,u),e,t,n,r,s,c,f,d)},v=(e,t,n,r)=>{r||(r={});const o=r.compare||u,a=r.node||f,s=null==r.before?null:a(r.before,0),c=t.length;let i=c,m=0,v=n.length,y=0;for(;m<i&&y<v&&o(t[m],n[y]);)m++,y++;for(;m<i&&y<v&&o(t[i-1],n[v-1]);)i--,v--;const w=m===i,b=y===v;if(w&&b)return n;if(w&&y<v)return l(a,e,n,y,v,d(a,t,m,c,s)),n;if(b&&m<i)return h(a,e,t,m,i),n;const N=i-m,x=v-y;let E=-1;if(N<x){if(-1<(E=p(n,y,v,t,m,i,o)))return l(a,e,n,y,E,a(t[m],0)),l(a,e,n,E+N,v,d(a,t,i,c,s)),n}else if(x<N&&-1<(E=p(t,m,i,n,y,v,o)))return h(a,e,t,m,E),h(a,e,t,E+x,i),n;return N<2||x<2?(l(a,e,n,y,v,a(t[m],0)),h(a,e,t,m,i),n):N===x&&((e,t,n,r,o,a)=>{for(;r<o&&a(n[r],e[t-1]);)r++,t--;return 0===t})(n,v,t,m,i,o)?(l(a,e,n,y,v,d(a,t,i,c,s)),n):(g(a,e,n,y,v,x,t,m,i,N,c,o,s),n)};var y,w=document.importNode,b="".trim,N="-"+Math.random().toFixed(6)+"%";try{"content"in(y=document.createElement("template"))&&(y.innerHTML='<p tabindex="'+N+'"></p>',y.content.childNodes[0].getAttribute("tabindex")==N)||(N="_dt: "+N.slice(1,-1)+";")}catch(e){}var x="\x3c!--"+N+"--\x3e",E=8,k=1,C=3,A=/^(?:style|textarea)$/i,$=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var M=" \\f\\n\\r\\t",j="[^"+M+"\\/>\"'=]+",S="["+M+"]+"+j,T="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",L="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+j.replace("\\/","")+"))?)",O=new RegExp(T+S+L+"+)(["+M+"]*/?>)","g"),D=new RegExp(T+S+L+"*)(["+M+"]*/>)","g"),W=new RegExp("("+S+"\\s*=\\s*)(['\"]?)"+x+"\\2","gi");function Z(e,t,n,r){return"<"+t+n.replace(W,_)+r}function _(e,t,n){return t+(n||'"')+N+(n||'"')}function z(e,t,n){return $.test(t)?e:"<"+t+n+"></"+t+">"}function P(e,t,n,r){return{name:r,node:t,path:n,type:e}}function R(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function V(e,t,n,r){for(var o=new Map,a=e.attributes,s=[],c=s.slice.call(a,0),i=c.length,l=0;l<i;){var u=c[l++];if(u.value===N){var f=u.name;if(!o.has(f)){var p=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),d=a[p]||a[p.toLowerCase()];o.set(f,d),t.push(P("attr",d,r,p))}s.push(u)}}for(i=s.length,l=0;l<i;){var h=s[l++];/^id$/i.test(h.name)?e.removeAttribute(h.name):e.removeAttributeNode(h)}var m=e.nodeName;if(/^script$/i.test(m)){var g=document.createElement(m);for(i=a.length,l=0;l<i;)g.setAttributeNode(a[l++].cloneNode(!0));g.textContent=e.textContent,e.parentNode.replaceChild(g,e)}}var B=new WeakMap,G=new WeakMap;function H(e,t){var n=function(e){return e.join(x).replace(D,z).replace(O,Z)}(t),r=e.transform;r&&(n=r(n));var o=s(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===b.call(r.textContent).length&&e.removeChild(r)}}(o);var a=[];!function e(t,n,r,o){for(var a=t.childNodes,s=a.length,c=0;c<s;){var i=a[c];switch(i.nodeType){case k:var l=o.concat(c);V(i,n,r,l),e(i,n,r,l);break;case E:var u=i.textContent;if(u===N)r.shift(),n.push(A.test(t.nodeName)?P("text",t,o):P("any",i,o.concat(c)));else switch(u.slice(0,2)){case"/*":if("*/"!==u.slice(-2))break;case"👻":t.removeChild(i),c--,s--}break;case C:A.test(t.nodeName)&&b.call(i.textContent)===x&&(r.shift(),n.push(P("text",t,o)))}c++}}(o,a,t.slice(0),[]);var c={content:o,updates:function(n){for(var r=[],o=a.length,s=0;s<o;){var c=a[s++],i=R(n,c.path);switch(c.type){case"any":r.push(e.any(i,[]));break;case"attr":r.push(e.attribute(i,c.name,c.node));break;case"text":r.push(e.text(i)),i.textContent=""}}return function(){var e=arguments.length,a=e-1,s=1;if(o!==a)throw new Error(a+" values instead of "+o+"\n"+t.join(", "));for(;s<e;)r[s-1](arguments[s++]);return n}}};return B.set(t,c),c}function F(e){return function(t){var n=G.get(e);return null!=n&&n.template===t||(n=function(e,t){var n=B.get(t)||H(e,t),r=w.call(document,n.content,!0),o={content:r,template:t,updates:n.updates(r)};return G.set(e,o),o}(e,t)),n.updates.apply(null,arguments),n.content}}var q=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var a,s;return function(c){var i,l,u,f;switch(typeof c){case"object":if(c){if("object"===a){if(!o&&s!==c)for(l in s)l in c||(r[l]="")}else o?r.value="":r.cssText="";for(l in i=o?{}:r,c)u="number"!=typeof(f=c[l])||e.test(l)?f:f+"px",!o&&/^--/.test(l)?i.setProperty(l,u):i[l]=u;a="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(s=i):s=c;break}default:s!=c&&(a="string",s=c,o?r.value=c||"":r.cssText=c||"")}}}}();const I=(e,t)=>e.nodeType===o?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e,J=(e,t)=>{let n,r=!1;const o=t.cloneNode(!0);return t=>{n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},K=(e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},Q=/^(?:form|list)$/i,U=[].slice,X=(e,t)=>e.ownerDocument.createTextNode(t);function Y(e){return this.type=e,F(this)}function ee(e){return e(this)}Y.prototype={attribute(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return J(e,n);t="className";case"data":case"props":return K(e,t);case"style":return q(e,n,"ownerSVGElement"in e);case"ref":return(e=>t=>{t.current=e})(e);default:return"."===t.slice(0,1)?((e,t)=>n=>{e[t]=n})(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}})(e,t):t in e&&!("ownerSVGElement"in e||Q.test(t))?K(e,t):J(e,n)}},any(e,t){const n={node:I,before:e},o="ownerSVGElement"in e?"svg":"html";let a,c=!1;const i=l=>{switch(typeof l){case"string":case"number":case"boolean":c?a!==l&&(a=l,t[0].textContent=l):(c=!0,a=l,t=v(e.parentNode,t,[X(e,l)],n));break;case"function":i(l(e));break;case"object":case"undefined":if(null==l){c=!1,t=v(e.parentNode,t,[],n);break}default:if(c=!1,a=l,r(l))if(0===l.length)t.length&&(t=v(e.parentNode,t,[],n));else switch(typeof l[0]){case"string":case"number":case"boolean":i(String(l));break;case"function":i(l.map(ee,e));break;case"object":r(l[0])&&(l=l.concat.apply([],l));default:t=v(e.parentNode,t,l,n)}else(e=>"ELEMENT_NODE"in e)(l)?t=v(e.parentNode,t,11===l.nodeType?U.call(l.childNodes):[l],n):"text"in l?i(String(l.text)):"any"in l?i(l.any):"html"in l?t=v(e.parentNode,t,U.call(s([].concat(l.html).join(""),o).childNodes),n):"length"in l&&i(U.call(l))}};return i},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(U.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};const te=new WeakMap,ne=new WeakMap;let re=null;function oe(e,t){const n=function(e,t){const n=re;(re=te.get(e)||function(e){const t={i:0,length:0,stack:[],update:!1};return te.set(e,t),t}(e)).i=0;const r=t.call(this);let o;if(r instanceof fe){o=ce(le(r,0),re.update);const{i:e,length:t,stack:n,update:a}=re;e<t&&n.splice(re.length=e),a&&(re.update=!1)}else o=ce(r,!1);return re=n,o}.call(this,e,t);return ne.get(e)!==n&&(ne.set(e,n),function(e,t){e.textContent="",e.appendChild(t)}(e,n)),e}const ae=ie("html"),se=ie("svg");function ce(e,t){return e.nodeType===o?e.valueOf(t):e}function ie(e){const n=new WeakMap;return r.for=((r,o)=>{const a=n.get(r)||function(e){const t={$:null};return n.set(e,t),t}(r);return null==o&&(o="$"),a[o]||function(n,r){let o=null;const a=new Y(e);return n[r]=function(){const e=a.apply(null,t.apply(null,arguments));return o||(o=ue(e))}}(a,o)}),r;function r(){const n=t.apply(null,arguments);return re?new fe(e,n):new Y(e).apply(null,n)}}function le(e,t){const{i:n,length:o,stack:a}=re,{type:s,args:c}=e,i=n<o;re.i++,i||(re.length=a.push({l:t,kind:s,tag:null,tpl:c[0],wire:null})),function e(t,n,o){for(const{length:a}=t;n<a;n++){const a=t[n];"object"==typeof a&&a&&(a instanceof fe?t[n]=le(a,o-1):r(a)&&(t[n]=e(a,0,o++)))}return t}(c,1,t+1);const l=a[n];if(i){const{l:e,kind:n,tag:r,tpl:o,wire:a}=l;if(e===t&&s===n&&o===c[0])return r.apply(null,c),a}const u=new Y(s),f=ue(u.apply(null,c));return l.l=t,l.kind=s,l.tag=u,l.tpl=c[0],l.wire=f,n<1&&(re.update=!0),f}function ue(e){const t=e.childNodes,{length:r}=t;return 1===r?t[0]:r?new n(t):e}function fe(e,t){this.type=e,this.args=t}Object.freeze(fe);const pe={map:{},re:null},de=e=>new RegExp(`<(/)?(${e.join("|")})([^A-Za-z0-9_])`,"g"),he=(e,t)=>{const{map:n,re:r}=t;return e.replace(r,(e,t,r,o)=>{const{tagName:a,is:s,element:c}=n[r];return c?t?`</${s}>`:`<${s}${o}`:t?`</${a}>`:`<${a} is="${s}"${o}`})},me=({tagName:e,is:t,element:n})=>n?t:`${e}[is="${t}"]`,ge="_🔥",{defineProperties:ve}=Object,ye=new WeakMap,we=new WeakMap,be=new WeakMap,Ne=new WeakSet,xe="attributeChangedCallback",Ee="connectedCallback",ke=`dis${Ee}`,Ce=(e,t,n)=>{if(n in e){const r=e[n];t[n]={configurable:!0,value(){return Ze.call(this),r.call(this)}}}else t[n]={configurable:!0,value:Ze}},Ae=e=>{const t=[],n={html:{configurable:!0,get:Oe},svg:{configurable:!0,get:De}};n[ge]={value:t},"handleEvent"in e||(n.handleEvent={configurable:!0,value:We}),"oninit"in e&&(t.push("init"),Ce(e,n,"render")),Ce(e,n,xe),Ce(e,n,Ee),Ce(e,n,ke),[[xe,"onattributechanged",_e],[Ee,"onconnected",ze],[ke,"ondisconnected",Re],[Ee,"render",Pe]].forEach(([r,o,a])=>{if(!(r in e)&&o in e)if("on"===o.slice(0,2)&&t.push(o.slice(2)),r in n){const e=n[r].value;n[r]={configurable:!0,value(){return e.apply(this,arguments),a.apply(this,arguments)}}}else n[r]={configurable:!0,value:a}}),ve(e,n)},$e=e=>new Event(e),Me=(...e)=>new fe("html",e);Me.for=ae.for;const je=(...e)=>new fe("svg",e);je.for=se.for;const Se=(e,t,n)=>{const r=Te(e,t);return n.set(e,r),r},Te=(e,t)=>(n,...r)=>{const o=(e=>e)(n),a=be.get(o)||((e,t)=>{const n=t?he(e.join(ge),t).split(ge):e;return be.set(e,n),n})(o,e.constructor[ge]);return oe(e,()=>t(a,...r))};function Le(e){this.addEventListener(e,this)}function Oe(){return ye.get(this)||Se(this,Me,ye)}function De(){return we.get(this)||Se(this,je,we)}function We(e){this[`on${e.type}`](e)}function Ze(){Ne.has(this)||(Ne.add(this),this[ge].forEach(Le,this),this.dispatchEvent($e("init")))}function _e(e,t,n){const r=$e("attributechanged");r.attributeName=e,r.oldValue=t,r.newValue=n,this.dispatchEvent(r)}function ze(){this.dispatchEvent($e("connected"))}function Pe(){this.render()}function Re(){this.dispatchEvent($e("disconnected"))}const{construct:Ve,getPrototypeOf:Be,setPrototypeOf:Ge}=Reflect;let He=null;try{He=new{o(){}}.o}catch(e){}var Fe=He?function(e,t){function n(){return Ve(t?Be(e):e,arguments,n)}return Ge(n,e),Ge(n.prototype,e.prototype),n}:e=>(class extends e{});const{create:qe,defineProperty:Ie,defineProperties:Je,getOwnPropertyNames:Ke,getOwnPropertySymbols:Qe,getOwnPropertyDescriptor:Ue,keys:Xe}=Object,Ye={element:HTMLElement},et=new WeakMap,tt=new WeakMap,nt=e=>e.tagName||e.extends,rt=e=>{const t=qe(null),n=qe(null),r={statics:t,prototype:n,tag:nt(e)};return Ke(e).concat(Qe(e)).forEach(r=>{const o=Ue(e,r);switch(o.enumerable=!1,r){case"extends":r="tagName";case"contains":case"includes":case"name":case"observedAttributes":case"style":case"tagName":t[r]=o;break;default:n[r]=o}}),r},ot=(e,t,n)=>{if(e.indexOf(":")<0&&(e+=":"+nt(t)),!/^([A-Z][A-Za-z0-9_]*):([A-Za-z0-9-]+)$/.test(e))throw"Invalid name or tagName";const{$1:r,$2:o}=RegExp,a=function(e,t){return e.replace(/([A-Z])([A-Z][a-z])/g,t="$1"+(t||"-")+"$2").replace(/([a-z])([A-Z])/g,t).toLowerCase()}(r)+n+"-heresy";if(customElements.get(a))throw`Duplicated ${a} definition`;const s=Fe("object"==typeof t?tt.get(t)||(e=>{const{statics:t,prototype:n,tag:r}=rt(e),o=Fe(Ye[r]||(Ye[r]=document.createElement(r).constructor),!1);return Ae(Je(o.prototype,n)),tt.set(e,Je(o,t)),o})(t):et.get(t)||(e=>{const t=Fe(e,!1);return Ae(t.prototype),et.set(e,t),t})(t),!0),c=[a,s],i="element"===o;return i||c.push({extends:o}),customElements.define(...c),Ie(s,"new",{value:()=>i?document.createElement(a):document.createElement(o,{is:a})}),i||Ie(s.prototype,"is",{value:a}),{Class:s,is:a,name:r,tagName:o}};let at=0;const st=(e,t,n)=>{const r=((e,t)=>({tagName:e,is:t,element:"element"===e}))(t,n),o=[me(r)],a=e.includes||e.contains;if(a){const t="-"+ ++at,n={};Xe(a).forEach(e=>{const{Class:r,is:s,name:c,tagName:i}=ot(e,a[e],t);o.push(me(n[c]=st(r,i,s)))});const r=de(Xe(n));Ie(e,ge,{value:{map:n,re:r}})}return"style"in e&&(e=>{const t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e));const n=document.head||document.querySelector("head");n.insertBefore(t,n.lastChild)})(e.style(...o)),r};return(e=>{const{transform:t}=Y.prototype;Y.prototype.transform=t?n=>e(t(n)):e})(e=>he(e,pe)),e.define=((e,t)=>{const{Class:n,is:r,name:o,tagName:a}="string"==typeof e?ot(e,t,""):ot(e.name,e,"");return pe.map[o]=st(n,a,r),pe.re=de(Xe(pe.map)),n}),e.html=Me,e.ref=((e,t)=>e?e[t]||(e[t]={current:null}):{current:null}),e.render=((e,t)=>oe(e,"function"==typeof t?t:()=>t)),e.svg=je,e}({});
